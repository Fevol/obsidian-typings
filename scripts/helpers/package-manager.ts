/**
 * @file
 *
 * Determines which package manager owns the project's dependency tree, so a script hop runs through it
 * instead of through a hardcoded `npm`.
 *
 * A composite script that shells out to `npm run <step>` reassigns every sub-step to npm, whatever
 * installed the tree. Under `bun` that is not a slower path but a different one: the steps run against a
 * tree npm never resolved, and anything npm has to fetch to satisfy them comes from the registry rather
 * than from the install that is already on disk.
 *
 * This is the run half of `obsidian-dev-utils`' `src/script-utils/package-manager.ts`. The sibling repos
 * deliberately do not depend on that library, so the shared logic is carried here instead and kept
 * byte-for-byte identical across them (G10p). The tool-resolution half (`resolveToolCommand` and the
 * `node_modules/.bin` shim probe) is deliberately not ported.
 */

import type { PackageJson } from 'type-fest';

import {
  existsSync,
  readFileSync
} from 'node:fs';
import { join } from 'node:path/posix';
import process from 'node:process';

import {
  getRootFolder,
  toPosixPath
} from './root.ts';

/**
 * A package manager that can own a project's dependency tree.
 */
export enum PackageManager {
  /**
   * The `bun` package manager.
   */
  Bun = 'bun',

  /**
   * The `npm` package manager.
   */
  Npm = 'npm',

  /**
   * The `pnpm` package manager.
   */
  Pnpm = 'pnpm',

  /**
   * The `yarn` package manager.
   */
  Yarn = 'yarn'
}

/**
 * Determines which package manager owns the project's dependency tree.
 *
 * Every signal is collected before any of them is believed, because a repo carrying two lockfiles used to
 * resolve to whichever sat earlier in a fixed list — silently reassigning every package script to a
 * manager that never installed the tree.
 *
 * The order is:
 *
 * 1. The `packageManager` field of `package.json`. It is a deliberate declaration by the repo's author
 *    rather than an artifact left behind by whatever ran last, so it outranks every lockfile — and it is
 *    the only signal that helps at all before the first install, when no lockfile exists yet.
 * 2. The sole lockfile, when exactly one manager claims the tree.
 * 3. Among several lockfiles, the manager that launched us (`npm_config_user_agent`), when it owns one of
 *    them — a live signal beats a file that may have been abandoned mid-migration. Otherwise the
 *    documented fallback order in {@link LOCKFILES} decides. Note this is deliberately NOT "the most
 *    recently modified lockfile": a stray lockfile is typically the newest file, so mtime picks precisely
 *    the wrong one.
 * 4. `npm_config_user_agent` on its own, when there is no lockfile.
 * 5. {@link PackageManager.Npm}.
 *
 * Whenever more than one manager claims the tree, the disagreement is reported once per project through
 * {@link warnAboutSeveralClaimants} — the resolution stays deterministic, but it stops being silent.
 *
 * @param cwd - The current working folder to resolve from.
 * @returns The detected package manager, or {@link PackageManager.Npm} when nothing indicates otherwise.
 */
export function getPackageManager(cwd?: string): PackageManager {
  const root = getStartFolder(cwd);
  const declaredPackageManager = detectPackageManagerFromPackageJson(root);
  const lockfiles = LOCKFILES.filter((lockfile) => existsSync(join(root, lockfile.fileName)));
  const claimants = new Set(lockfiles.map((lockfile) => lockfile.packageManager));

  if (declaredPackageManager !== null) {
    claimants.add(declaredPackageManager);
  }

  const packageManager = resolvePackageManager({
    claimants,
    declaredPackageManager
  });

  if (claimants.size > 1) {
    warnAboutSeveralClaimants({
      declaredPackageManager,
      lockfiles,
      packageManager,
      root
    });
  }

  return packageManager;
}

/**
 * Builds the command parts that run a package script through the manager that owns the tree.
 *
 * @param cwd - The current working folder to resolve from.
 * @returns The command parts, e.g. `['bun', 'run']`. The script name is appended by the caller.
 */
export function getPackageManagerRunCommand(cwd?: string): string[] {
  return [getPackageManager(cwd), 'run'];
}

/**
 * Matches the leading `<name>@` token of a `package.json` `packageManager` value.
 *
 * The `@` is required, because corepack's format is `<name>@<version>` — a bare name is a malformed
 * declaration rather than a shorthand, and is ignored instead of guessed at.
 */
const DECLARATION_NAME_REG_EXP = /^(?<name>[^@\s]+)@/;

/**
 * The lockfiles that identify a package manager, in the order they decide a tie no other signal settles.
 *
 * Both bun lockfile formats map to the same manager, so a repo holding both is one claimant, not two.
 */
const LOCKFILES: LockfileClaim[] = [
  { fileName: 'bun.lock', packageManager: PackageManager.Bun },
  { fileName: 'bun.lockb', packageManager: PackageManager.Bun },
  { fileName: 'pnpm-lock.yaml', packageManager: PackageManager.Pnpm },
  { fileName: 'yarn.lock', packageManager: PackageManager.Yarn },
  { fileName: 'package-lock.json', packageManager: PackageManager.Npm }
];

/**
 * The file every declaration is read from.
 */
const PACKAGE_JSON = 'package.json';

/**
 * Matches the leading `<name>/` token of an `npm_config_user_agent` value.
 */
const USER_AGENT_NAME_REG_EXP = /^(?<name>[^/\s]+)\//;

/**
 * The disagreements already reported, so a build that resolves the manager once per script hop still says
 * it only once.
 */
const reportedDisagreements = new Set<string>();

/**
 * A lockfile and the package manager whose presence it proves.
 */
interface LockfileClaim {
  /**
   * The lockfile name, as it appears at the project root.
   */
  readonly fileName: string;

  /**
   * The package manager that writes this lockfile.
   */
  readonly packageManager: PackageManager;
}

/**
 * Parameters for {@link resolvePackageManager}.
 */
interface ResolvePackageManagerParams {
  /**
   * Every package manager claiming the tree — the lockfile owners in {@link LOCKFILES} order, plus the
   * declared one. Only consulted when nothing is declared, in which case it holds exactly the lockfile
   * owners.
   */
  readonly claimants: ReadonlySet<PackageManager>;

  /**
   * The package manager declared in `package.json`, or `null` when none is.
   */
  readonly declaredPackageManager: null | PackageManager;
}

/**
 * Parameters for {@link warnAboutSeveralClaimants}.
 */
interface WarnAboutSeveralClaimantsParams {
  /**
   * The package manager declared in `package.json`, or `null` when none is.
   */
  readonly declaredPackageManager: null | PackageManager;

  /**
   * The lockfiles actually found at the project root.
   */
  readonly lockfiles: readonly LockfileClaim[];

  /**
   * The package manager that won.
   */
  readonly packageManager: PackageManager;

  /**
   * The project root the lockfiles were found in.
   */
  readonly root: string;
}

/**
 * Reads the package manager out of the `packageManager` field of the project's `package.json`, which is
 * corepack's `<name>@<version>` declaration.
 *
 * @param root - The project root to read `package.json` from.
 * @returns The declared package manager, or `null` when there is no `package.json`, it cannot be parsed,
 * the field is absent or malformed, or it names a manager we do not handle.
 */
function detectPackageManagerFromPackageJson(root: string): null | PackageManager {
  const packageJsonPath = join(root, PACKAGE_JSON);

  if (!existsSync(packageJsonPath)) {
    return null;
  }

  let packageJson: PackageJson;

  try {
    packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8')) as PackageJson;
  } catch {
    return null;
  }

  const declaration = packageJson.packageManager;

  if (!declaration) {
    return null;
  }

  return parsePackageManagerName(readName(DECLARATION_NAME_REG_EXP, declaration));
}

/**
 * Reads the package manager out of `npm_config_user_agent`, which every manager sets for the processes it
 * launches.
 *
 * @returns The detected package manager, or `null` when the variable is absent, malformed, or names a
 * runtime we do not handle.
 */
function detectPackageManagerFromUserAgent(): null | PackageManager {
  const userAgent = process.env['npm_config_user_agent'];

  if (!userAgent) {
    return null;
  }

  return parsePackageManagerName(readName(USER_AGENT_NAME_REG_EXP, userAgent));
}

/**
 * Resolves the folder to start a lookup from — the project root when there is one, the working folder
 * otherwise.
 *
 * @param cwd - The current working folder to resolve from.
 * @returns The absolute folder to start from.
 */
function getStartFolder(cwd?: string): string {
  return getRootFolder(cwd) ?? toPosixPath(cwd ?? process.cwd());
}

/**
 * Maps the bare name a lockfile declaration or a user agent reports onto the package manager it names.
 *
 * @param name - The reported name.
 * @returns The matching package manager, or `null` for a runtime we do not handle.
 */
function parsePackageManagerName(name: string): null | PackageManager {
  switch (name) {
    case PackageManager.Bun as string: {
      return PackageManager.Bun;
    }
    case PackageManager.Npm as string: {
      return PackageManager.Npm;
    }
    case PackageManager.Pnpm as string: {
      return PackageManager.Pnpm;
    }
    case PackageManager.Yarn as string: {
      return PackageManager.Yarn;
    }
    default: {
      return null;
    }
  }
}

/**
 * Reads the `name` group out of a value, for the two patterns that carry one.
 *
 * @param regExp - The pattern to apply.
 * @param value - The value to read from.
 * @returns The captured name, or an empty string when the value does not match — which
 * {@link parsePackageManagerName} maps to "no manager", the same as an unrecognized one.
 */
function readName(regExp: RegExp, value: string): string {
  return regExp.exec(value)?.groups?.['name'] ?? '';
}

/**
 * Picks the winner out of the collected signals, per the order documented on {@link getPackageManager}.
 *
 * @param params - The parameters for the resolution.
 * @returns The package manager that owns the tree.
 */
function resolvePackageManager(params: ResolvePackageManagerParams): PackageManager {
  const {
    claimants,
    declaredPackageManager
  } = params;

  if (declaredPackageManager !== null) {
    return declaredPackageManager;
  }

  const lockfileOwners = [...claimants];
  const [firstLockfileOwner] = lockfileOwners;

  if (firstLockfileOwner === undefined) {
    return detectPackageManagerFromUserAgent() ?? PackageManager.Npm;
  }

  if (lockfileOwners.length === 1) {
    return firstLockfileOwner;
  }

  const launchedBy = detectPackageManagerFromUserAgent();

  if (launchedBy !== null && claimants.has(launchedBy)) {
    return launchedBy;
  }

  return firstLockfileOwner;
}

/**
 * Reports that several package managers claim the same tree, naming each lockfile found, what
 * `package.json` declares, and which manager won.
 *
 * `console.warn` rather than a debug channel: this runs in the build's own terminal, and a message nobody
 * sees unless they already suspect the problem leaves the failure exactly as silent as it was. Each
 * distinct message is printed once, because the manager is resolved once per package-script hop.
 *
 * @param params - The parameters for the report.
 */
function warnAboutSeveralClaimants(params: WarnAboutSeveralClaimantsParams): void {
  const {
    declaredPackageManager,
    lockfiles,
    packageManager,
    root
  } = params;

  const lockfileNames = lockfiles.map((lockfile) => lockfile.fileName).join(', ');
  const advice = declaredPackageManager === null
    ? 'Delete the stale lockfile, or declare "packageManager" in package.json, to settle it.'
    : 'Delete the stale lockfile to settle it.';
  const message = [
    `More than one package manager claims ${root}.`,
    `Lockfiles: ${lockfileNames}.`,
    `package.json "packageManager": ${declaredPackageManager ?? 'not set'}.`,
    `Using ${packageManager}.`,
    advice
  ].join(' ');

  if (reportedDisagreements.has(message)) {
    return;
  }

  reportedDisagreements.add(message);
  console.warn(message);
}

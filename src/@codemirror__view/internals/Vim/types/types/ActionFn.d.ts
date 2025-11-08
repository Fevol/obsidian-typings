import type { ActionArgs } from './ActionArgs.js';
import type { CodeMirrorV } from './CodeMirrorV.js';
import type { vimState } from './vimState.js';

/** @todo Documentation incomplete. */
export type ActionFn = (
    /** @todo Documentation incomplete. */
    cm: CodeMirrorV,
    /** @todo Documentation incomplete. */
    actionArgs: ActionArgs,
    /** @todo Documentation incomplete. */
    vim: vimState
) => void;

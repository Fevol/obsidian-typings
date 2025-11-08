import type { allCommands } from './allCommands.js';
import type { ExParams } from './ExParams.js';

/** @todo Documentation incomplete. */
export type keyToExCommand = allCommands & {
    /** @todo Documentation incomplete. */
    type: 'keyToEx';
    /** @todo Documentation incomplete. */
    exArgs: ExParams;
};

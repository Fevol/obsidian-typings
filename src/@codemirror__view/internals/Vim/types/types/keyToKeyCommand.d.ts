import type { allCommands } from './allCommands.js';

/** @todo Documentation incomplete. */
export type keyToKeyCommand = allCommands & {
    /** @todo Documentation incomplete. */
    toKeys: string;
    /** @todo Documentation incomplete. */
    type: 'keyToKey';
};

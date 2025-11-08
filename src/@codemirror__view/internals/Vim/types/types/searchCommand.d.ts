import type { allCommands } from './allCommands.js';
import type { SearchArgs } from './SearchArgs.js';

/** @todo Documentation incomplete. */
export type searchCommand = allCommands & {
    /** @todo Documentation incomplete. */
    type: 'search';
    /** @todo Documentation incomplete. */
    searchArgs: SearchArgs;
};

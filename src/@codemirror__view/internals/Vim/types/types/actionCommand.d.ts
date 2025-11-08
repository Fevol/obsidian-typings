import type { ActionArgsPartial } from './ActionArgsPartial.js';
import type { allCommands } from './allCommands.js';

/** @todo Documentation incomplete. */
export type actionCommand = allCommands & {
    /** @todo Documentation incomplete. */
    type: 'action';
    /** @todo Documentation incomplete. */
    action: string;
    actionArgs?: ActionArgsPartial;
    motion?: string;
    operator?: string;
    interlaceInsertRepeat?: boolean;
};

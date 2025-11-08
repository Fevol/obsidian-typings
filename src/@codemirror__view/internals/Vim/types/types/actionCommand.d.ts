import type { ActionArgsPartial } from './ActionArgsPartial.js';
import type { allCommands } from './allCommands.js';

/** @todo Documentation incomplete. */
export type actionCommand = allCommands & {
    /** @todo Documentation incomplete. */
    type: 'action';
    /** @todo Documentation incomplete. */
    action: string;
    /** @todo Documentation incomplete. */
    actionArgs?: ActionArgsPartial;
    /** @todo Documentation incomplete. */
    motion?: string;
    /** @todo Documentation incomplete. */
    operator?: string;
    /** @todo Documentation incomplete. */
    interlaceInsertRepeat?: boolean;
};

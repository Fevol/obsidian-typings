import type { allCommands } from './allCommands.js';
import type { MotionArgsPartial } from './MotionArgsPartial.js';

/** @todo Documentation incomplete. */
export type motionCommand = allCommands & {
    /** @todo Documentation incomplete. */
    type: 'motion';
    /** @todo Documentation incomplete. */
    motion: string;
    motionArgs?: MotionArgsPartial;
    repeatOverride?: number;
};

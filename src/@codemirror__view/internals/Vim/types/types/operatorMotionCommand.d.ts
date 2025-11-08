import type { allCommands } from './allCommands.js';
import type { MotionArgsPartial } from './MotionArgsPartial.js';
import type { OperatorArgs } from './OperatorArgs.js';

/** @todo Documentation incomplete. */
export type operatorMotionCommand = allCommands & {
    /** @todo Documentation incomplete. */
    type: 'operatorMotion';
    /** @todo Documentation incomplete. */
    motion: string;
    /** @todo Documentation incomplete. */
    operator: string;
    /** @todo Documentation incomplete. */
    motionArgs?: MotionArgsPartial;
    /** @todo Documentation incomplete. */
    operatorArgs?: OperatorArgs;
    /** @todo Documentation incomplete. */
    operatorMotionArgs?: {
        visualLine?: boolean;
    };
};

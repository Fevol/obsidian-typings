import type { MotionArgs } from './MotionArgs.js';
import type { OperatorArgs } from './OperatorArgs.js';

/** @todo Documentation incomplete. */
export interface InputStateInterface {
    /** @todo Documentation incomplete. */
    prefixRepeat: string[];
    /** @todo Documentation incomplete. */
    motionRepeat: string[];
    /** @todo Documentation incomplete. */
    operator: string | undefined | null;
    /** @todo Documentation incomplete. */
    operatorArgs: OperatorArgs | undefined | null;
    /** @todo Documentation incomplete. */
    motion: string | undefined | null;
    /** @todo Documentation incomplete. */
    motionArgs: MotionArgs | null;
    /** @todo Documentation incomplete. */
    keyBuffer: string[];
    /** @todo Documentation incomplete. */
    registerName?: string;
    /** @todo Documentation incomplete. */
    changeQueue: null | {
        /** @todo Documentation incomplete. */
        inserted: string;
        /** @todo Documentation incomplete. */
        removed: string[];
    };
    /** @todo Documentation incomplete. */
    operatorShortcut?: string;
    /** @todo Documentation incomplete. */
    selectedCharacter?: string;
    /** @todo Documentation incomplete. */
    repeatOverride?: number;
    /** @todo Documentation incomplete. */
    changeQueueList?: InputStateInterface['changeQueue'][];
    /** @todo Documentation incomplete. */
    pushRepeatDigit(n: string): void;
    /** @todo Documentation incomplete. */
    getRepeat(): number;
}

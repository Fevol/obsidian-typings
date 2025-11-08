import type { CodeMirrorV } from './CodeMirrorV.js';
import type { InputStateInterface } from './InputStateInterface.js';
import type { MotionArgs } from './MotionArgs.js';
import type { Pos } from './Pos.js';
import type { vimState } from './vimState.js';

/** @todo Documentation incomplete. */
export type MotionFn = (
    /** @todo Documentation incomplete. */
    cm: CodeMirrorV,
    /** @todo Documentation incomplete. */
    head: Pos,
    /** @todo Documentation incomplete. */
    motionArgs: MotionArgs,
    /** @todo Documentation incomplete. */
    vim: vimState,
    /** @todo Documentation incomplete. */
    inputState: InputStateInterface
) => Pos | [Pos, Pos] | null | undefined;

import type { CM5RangeInterface } from './CM5RangeInterface.js';
import type { CodeMirrorV } from './CodeMirrorV.js';
import type { OperatorArgs } from './OperatorArgs.js';
import type { Pos } from './Pos.js';

/** @todo Documentation incomplete. */
export type OperatorFn = (
    /** @todo Documentation incomplete. */
    cm: CodeMirrorV,
    /** @todo Documentation incomplete. */
    args: OperatorArgs,
    /** @todo Documentation incomplete. */
    ranges: CM5RangeInterface[],
    /** @todo Documentation incomplete. */
    oldAnchor: Pos,
    /** @todo Documentation incomplete. */
    newHead?: Pos
) => Pos | void;

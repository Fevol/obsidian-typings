import type { CM5RangeInterface } from './CM5RangeInterface.js';
import type { CodeMirrorV } from './CodeMirrorV.js';
import type { OperatorArgs } from './OperatorArgs.js';
import type { OperatorFn } from './OperatorFn.js';
import type { Pos } from './Pos.js';

/** @todo Documentation incomplete. */
export type vimOperators = {
    /** @todo Documentation incomplete. */
    change(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        args: OperatorArgs,
        /** @todo Documentation incomplete. */
        ranges: CM5RangeInterface[]
    ): void /** @todo Documentation incomplete. */;

    delete(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        args: OperatorArgs,
        /** @todo Documentation incomplete. */
        ranges: CM5RangeInterface[]
    ): void /** @todo Documentation incomplete. */;

    indent(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        args: OperatorArgs,
        /** @todo Documentation incomplete. */
        ranges: CM5RangeInterface[]
    ): void /** @todo Documentation incomplete. */;

    indentAuto(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        args: OperatorArgs,
        /** @todo Documentation incomplete. */
        ranges: CM5RangeInterface[]
    ): void /** @todo Documentation incomplete. */;

    hardWrap(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        args: OperatorArgs,
        /** @todo Documentation incomplete. */
        ranges: CM5RangeInterface[],
        /** @todo Documentation incomplete. */
        oldAnchor: Pos
    ): Pos | void /** @todo Documentation incomplete. */;

    changeCase(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        args: OperatorArgs,
        /** @todo Documentation incomplete. */
        ranges: CM5RangeInterface[],
        /** @todo Documentation incomplete. */
        oldAnchor: Pos,
        newHead?: Pos
    ): Pos | void /** @todo Documentation incomplete. */;

    yank(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        args: OperatorArgs,
        /** @todo Documentation incomplete. */
        ranges: CM5RangeInterface[],
        /** @todo Documentation incomplete. */
        oldAnchor: Pos
    ): Pos | void;
} & {
    [key: string]: OperatorFn;
};

import type { ActionArgs } from './ActionArgs.js';
import type { ActionArgsPartial } from './ActionArgsPartial.js';
import type { ActionFn } from './ActionFn.js';
import type { CodeMirrorV } from './CodeMirrorV.js';
import type { Register } from './Register.js';
import type { vimState } from './vimState.js';

/** @todo Documentation incomplete. */
export type vimActions = {
    /** @todo Documentation incomplete. */
    jumpListWalk(cm: CodeMirrorV, actionArgs: ActionArgs, vim: vimState): void;
    /** @todo Documentation incomplete. */
    continuePaste(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        actionArgs: ActionArgs,
        /** @todo Documentation incomplete. */
        vim: vimState,
        /** @todo Documentation incomplete. */
        text: string,
        /** @todo Documentation incomplete. */
        register: Register
    ): void /** @todo Documentation incomplete. */;

    enterInsertMode(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        actionArgs: ActionArgsPartial,
        /** @todo Documentation incomplete. */
        vum: vimState
    ): void;
} & {
    [key: string]: ActionFn;
};

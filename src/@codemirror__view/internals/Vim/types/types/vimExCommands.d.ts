import type { CodeMirrorV } from './CodeMirrorV.js';
import type { vimExCommandsParams } from './vimExCommandsParams.js';

/** @todo Documentation incomplete. */
export type vimExCommands = {
    /** @todo Documentation incomplete. */
    colorscheme(cm: CodeMirrorV, params: vimExCommandsParams): void;
    /** @todo Documentation incomplete. */
    map(cm: CodeMirrorV, params: vimExCommandsParams, ctx: string): void;
    /** @todo Documentation incomplete. */
    imap(cm: CodeMirrorV, params: vimExCommandsParams): void;
    /** @todo Documentation incomplete. */
    nmap(cm: CodeMirrorV, params: vimExCommandsParams): void;
    /** @todo Documentation incomplete. */
    vmap(cm: CodeMirrorV, params: vimExCommandsParams): void;
    /** @todo Documentation incomplete. */
    unmap(cm: CodeMirrorV, params: vimExCommandsParams, ctx: string): void;
    /** @todo Documentation incomplete. */
    move(cm: CodeMirrorV, params: vimExCommandsParams): void;
    /** @todo Documentation incomplete. */
    set(cm: CodeMirrorV, params: vimExCommandsParams): void;
    /** @todo Documentation incomplete. */
    setlocal(cm: CodeMirrorV, params: vimExCommandsParams): void;
    /** @todo Documentation incomplete. */
    setglobal(cm: CodeMirrorV, params: vimExCommandsParams): void;
    /** @todo Documentation incomplete. */
    registers(cm: CodeMirrorV, params: vimExCommandsParams): void;
    /** @todo Documentation incomplete. */
    sort(cm: CodeMirrorV, params: vimExCommandsParams): void;
    /** @todo Documentation incomplete. */
    vglobal(cm: CodeMirrorV, params: vimExCommandsParams): void;
    /** @todo Documentation incomplete. */
    global(cm: CodeMirrorV, params: vimExCommandsParams): void;
    /** @todo Documentation incomplete. */
    substitute(cm: CodeMirrorV, params: vimExCommandsParams): void;
    /** @todo Documentation incomplete. */
    redo(cm: CodeMirrorV): void;
    /** @todo Documentation incomplete. */
    undo(cm: CodeMirrorV): void;
    /** @todo Documentation incomplete. */
    write(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV & {
            save?: Function;
        }
    ): void;
    /** @todo Documentation incomplete. */
    nohlsearch(cm: CodeMirrorV): void;
    /** @todo Documentation incomplete. */
    yank(cm: CodeMirrorV): void;
    /** @todo Documentation incomplete. */
    delete(cm: CodeMirrorV, params: vimExCommandsParams): void;
    /** @todo Documentation incomplete. */
    join(cm: CodeMirrorV, params: vimExCommandsParams): void;
    /** @todo Documentation incomplete. */
    delmarks(cm: CodeMirrorV, params: vimExCommandsParams): void;
    [key: string]: (
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        params: vimExCommandsParams,
        /** @todo Documentation incomplete. */
        ctx: string
    ) => void;
};

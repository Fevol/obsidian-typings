import type { CodeMirror } from './types/cm_adapter/cm-adapter-main.js';
import type { InsertModeChanges } from './types/types/InsertModeChanges.js';
import type { vimKey } from './types/types/vimKey.js';
import type { ExFn } from './types/types/ExFn.js';
import type { stringOptionCallback } from './types/types/stringOptionCallback.js';
import type { numberOptionCallback } from './types/types/numberOptionCallback.js';
import type { booleanOptionCallback } from './types/types/booleanOptionCallback.js';
import type { MotionFn } from './types/types/MotionFn.js';
import type { ActionFn } from './types/types/ActionFn.js';
import type { ActionArgsPartial } from './types/types/ActionArgsPartial.js';
import type { OperatorFn } from './types/types/OperatorFn.js';
import type { CodeMirrorV } from './types/types/CodeMirrorV.js';
import type { Pos } from './types/types/Pos.js';
import type { VimStateVim as vimState } from './VimStateVim.js';
import type { registerController } from './types/vim/registerController.js';
import type { vimGlobalState } from './types/vim/vimGlobalState.js';
import type { InsertModeKey } from './types/vim/InsertModeKey.js';
import type { vimScope } from './types/vim/vimScope.js';
import type { stringOption } from './types/vim/stringOption.js';
import type { numberOption } from './types/vim/numberOption.js';
import type { Register } from './types/vim/Register.js';
import type { booleanOption } from './types/types/booleanOption.js';

/**
 * @todo Documentation incomplete.
 * @public
 * @unofficial
 */
export interface VimApi {
    /** @todo Documentation incomplete. */
    /**
     * Whether to use suppress the use of console.log when catching an error in the function returned by `this.findKey`.
     * Defaults to false.
     */
    suppressErrorLogging: boolean;

    /** @todo Documentation incomplete. */
    _mapCommand: (command: vimKey) => void;
    /** Not Implemented yet*/
    buildKeyMap: () => void;

    /** @todo Documentation incomplete. */
    defineAction: (name: string, fn: ActionFn) => void;

    /** @todo Documentation incomplete. */
    defineEx: (name: string, prefix: string | undefined, func: ExFn) => void;

    /** @todo Documentation incomplete. */
    defineMotion: (name: string, fn: MotionFn) => void;

    /** @todo Documentation incomplete. */
    defineOperator: (name: string, fn: OperatorFn) => void;

    /** @todo Documentation incomplete. */
    defineOption: booleanOption & numberOption & stringOption;

    /** @todo Documentation incomplete. */
    defineRegister: (name: string, register: Register) => void;

    /** @todo Documentation incomplete. */
    //TODO missing in official api, its actually just an action...
    enterInsertMode(
        cm: CodeMirror,
        actionArgs: ActionArgsPartial,
        vum: vimState
    ): void;

    /** @todo Documentation incomplete. */
    enterVimMode: (cm: CodeMirror) => void;

    /** @todo Documentation incomplete. */
    exitInsertMode: (cm: CodeMirrorV, keepCursor?: boolean | undefined) => void;

    /** @todo Documentation incomplete. */
    exitVisualMode: (cm: CodeMirrorV, moveHead?: boolean | undefined) => void;

    /**
     * This is the outermost function called by CodeMirror, after keys have
     * been mapped to their Vim equivalents.
     *
     * Finds a command based on the key (and cached keys if there is a
     * multi-key sequence). Returns `undefined` if no key is matched, a noop
     * function if a partial match is found (multi-key), and a function to
     * execute the bound command if a a key is matched. The function always
     * returns true.
     */
    findKey: (
        cm_: CodeMirror,
        key: string,
        origin?: string
    ) => (() => boolean | undefined) | undefined;

    /** @todo Documentation incomplete. */
    getOption: (name: string, cm?: CodeMirrorV, cfg?: vimScope) => any;

    /** @todo Documentation incomplete. */
    getRegisterController: () => registerController;

    /** @todo Documentation incomplete. */
    getVimGlobalState_: () => vimGlobalState;

    /** @todo Documentation incomplete. */
    handleEx: (cm: CodeMirrorV, input: string) => void;

    /** @todo Documentation incomplete. */
    handleKey: (
        cm: CodeMirror,
        key: string,
        origin: string
    ) => undefined | boolean;

    /** @todo Documentation incomplete. */
    InsertModeKey: InsertModeKey;
    /** @todo Documentation incomplete. */
    leaveVimMode: (cm: CodeMirror) => void;

    /** @todo Documentation incomplete. */
    map: (lhs: string, rhs: string, ctx: string) => void;

    /** @todo Documentation incomplete. */
    mapclear: (ctx?: string | undefined) => void;

    /** @todo Documentation incomplete. */
    mapCommand: (
        keys: string,
        type: string,
        name: string,
        args: any,
        extra: {
            [x: string]: any;
        }
    ) => void;

    /** @todo Documentation incomplete. */
    maybeInitVimState_: (cm: CodeMirror) => vimState;

    /**
     *
     * @param cm_ codemirror view
     * @param key key string to be handled
     * @param origin
     * @returns whether the handling was successful
     */
    multiSelectHandleKey: (
        cm_: CodeMirror,
        key: string,
        origin: string
    ) => boolean | undefined;

    /** @todo Documentation incomplete. */
    /**
     * Non-recursive mapping of keys.
     * NOTE: This will not create mappings to keymaps that aren't presen't in the default keymap.
     * @param lhs keys to be mapped
     * @param rhs mapped keys
     * @param ctx vim mode in which the mapping is present
     */
    noremap: (lhs: string, rhs: string, ctx: string) => void;

    /** @todo Documentation incomplete. */
    /**
     * Resets the internal vim state.
     */
    resetVimGlobalState_: () => void;

    /** @todo Documentation incomplete. */
    /**
     * Sets the value of a VIM option. name should be the name of an option. If cfg.scope is not set and cm is provided, then sets the global and instance values of the option. Otherwise, sets either the global or instance value of the option depending on whether cfg.scope is global or local.
     */
    setOption: (
        name: string,
        value: any,
        cm?: CodeMirrorV | undefined,
        cfg?: vimScope
    ) => Error | undefined;

    /**
     * @todo Documentation incomplete.
     * @throws when mapping ex to ex with context defined
     */
    unmap: (lhs: string, ctx?: string) => true | void;
    /** @todo Documentation incomplete. */
    langmap: (langmapString: any, remapCtrl: any) => void;
    // vimKeyFromEvent: (
    //     e: KeyboardEvent,
    //     vim?: vimState | undefined
    // ) => string | undefined;
}

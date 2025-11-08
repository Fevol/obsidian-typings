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
    defineOption: {
        (
            name: string,
            defaultValue: boolean | null | undefined,
            type: 'boolean',
            aliases?: string[] | null | undefined,
            callback?: booleanOptionCallback | undefined
        ): void;
        (
            name: string,
            defaultValue: number | null | undefined,
            type: 'number',
            aliases?: string[] | null | undefined,
            callback?: numberOptionCallback | undefined
        ): void;
        (
            name: string,
            defaultValue: string | null | undefined,
            type: 'string',
            aliases?: string[] | null | undefined,
            callback?: stringOptionCallback | undefined
        ): void;
    };

    /** @todo Documentation incomplete. */
    defineRegister: (
        name: string,
        register: {
            keyBuffer: string[];
            insertModeChanges: InsertModeChanges[];
            searchQueries: string[];
            linewise: boolean;
            blockwise: boolean;
            setText(
                text?: string | undefined,
                linewise?: boolean | undefined,
                blockwise?: boolean | undefined
            ): void;
            pushText(text: string, linewise?: boolean | undefined): void;
            pushInsertModeChanges(changes: InsertModeChanges): void;
            pushSearchQuery(query: string): void;
            clear(): void;
            toString(): string;
        }
    ) => void;

    /** @todo Documentation incomplete. */
    //TODO missing in
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
        origin?: string | undefined
    ) => (() => boolean | undefined) | undefined;

    /** @todo Documentation incomplete. */
    getOption: (
        name: string,
        cm?: CodeMirrorV | undefined,
        cfg?:
            | {
                  scope?: any;
              }
            | undefined
    ) => any;

    /** @todo Documentation incomplete. */
    getRegisterController: () => {
        registers: {
            [x: string]: {
                keyBuffer: string[];
                insertModeChanges: InsertModeChanges[];
                searchQueries: string[];
                linewise: boolean;
                blockwise: boolean;
                setText(
                    text?: string | undefined,
                    linewise?: boolean | undefined,
                    blockwise?: boolean | undefined
                ): void;
                pushText(text: string, linewise?: boolean | undefined): void;
                pushInsertModeChanges(changes: InsertModeChanges): void;
                pushSearchQuery(query: string): void;
                clear(): void;
                toString(): string;
            };
        };
        unnamedRegister: {
            keyBuffer: string[];
            insertModeChanges: InsertModeChanges[];
            searchQueries: string[];
            linewise: boolean;
            blockwise: boolean;
            setText(
                text?: string | undefined,
                linewise?: boolean | undefined,
                blockwise?: boolean | undefined
            ): void;
            pushText(text: string, linewise?: boolean | undefined): void;
            pushInsertModeChanges(changes: InsertModeChanges): void;
            pushSearchQuery(query: string): void;
            clear(): void;
            toString(): string;
        };
        pushText(
            registerName: string | null | undefined,
            operator: string,
            text: string,
            linewise?: boolean | undefined,
            blockwise?: boolean | undefined
        ): void;
        /**
         * Gets the register named @name.  If one of @name doesn't already exist,
         * create it.  If @name is invalid, return the unnamedRegister.
         */
        getRegister(name?: string | undefined): {
            keyBuffer: string[];
            insertModeChanges: InsertModeChanges[];
            searchQueries: string[];
            linewise: boolean;
            blockwise: boolean;
            setText(
                text?: string | undefined,
                linewise?: boolean | undefined,
                blockwise?: boolean | undefined
            ): void;
            pushText(text: string, linewise?: boolean | undefined): void;
            pushInsertModeChanges(changes: InsertModeChanges): void;
            pushSearchQuery(query: string): void;
            clear(): void;
            toString(): string;
        };
        isValidRegister(name: any): name is string;
        shiftNumericRegisters_(): void;
    };

    /** @todo Documentation incomplete. */
    getVimGlobalState_: () => {
        macroModeState: {
            latestRegister: string | undefined;
            isPlaying: boolean;
            isRecording: boolean;
            replaySearchQueries: string[];
            onRecordingDone: ((newVal?: string) => void) | undefined;
            lastInsertModeChanges: InsertModeChanges;
            exitMacroRecordMode(): void;
            enterMacroRecordMode(cm: CodeMirror, registerName: string): void;
        };
        registerController: {
            registers: {
                [x: string]: {
                    keyBuffer: string[];
                    linewise: boolean;
                    blockwise: boolean;
                    setText(
                        text?: string | undefined,
                        linewise?: boolean | undefined,
                        blockwise?: boolean | undefined
                    ): void;
                    pushText(
                        text: string,
                        linewise?: boolean | undefined
                    ): void;
                    pushInsertModeChanges(changes: InsertModeChanges): void;
                    pushSearchQuery(query: string): void;
                    clear(): void;
                    toString(): string;
                };
            };
            unnamedRegister: {
                keyBuffer: string[];
                insertModeChanges: InsertModeChanges[];
                searchQueries: string[];
                linewise: boolean;
                blockwise: boolean;
                setText(
                    text?: string | undefined,
                    linewise?: boolean | undefined,
                    blockwise?: boolean | undefined
                ): void;
                pushText(text: string, linewise?: boolean | undefined): void;
                pushInsertModeChanges(changes: InsertModeChanges): void;
                pushSearchQuery(query: string): void;
                clear(): void;
                toString(): string;
            };
            pushText(
                registerName: string | null | undefined,
                operator: string,
                text: string,
                linewise?: boolean | undefined,
                blockwise?: boolean | undefined
            ): void;
            /**
             * Gets the register named @name.  If one of @name doesn't already exist,
             * create it.  If @name is invalid, return the unnamedRegister.
             */
            getRegister(name?: string | undefined): {
                keyBuffer: string[];
                insertModeChanges: InsertModeChanges[];
                searchQueries: string[];
                linewise: boolean;
                blockwise: boolean;
                setText(
                    text?: string | undefined,
                    linewise?: boolean | undefined,
                    blockwise?: boolean | undefined
                ): void;
                pushText(text: string, linewise?: boolean | undefined): void;
                pushInsertModeChanges(changes: InsertModeChanges): void;
                pushSearchQuery(query: string): void;
                clear(): void;
                toString(): string;
            };
            isValidRegister(name: any): name is string;
            shiftNumericRegisters_(): void;
        };
        searchHistoryController: {
            historyBuffer: string[];
            iterator: number;
            initialPrefix: string | null;
            /**
             * the input argument here acts a user entered prefix for a small time
             * until we start autocompletion in which case it is the autocompleted.
             */
            nextMatch(input: string, up: boolean): string | undefined;
            pushInput(input: string): void;
            reset(): void;
        };
        jumpList: ReturnType<
            () => {
                cachedCursor: Pos | undefined;
                add: (cm: CodeMirror, oldCur: Pos, newCur: Pos) => void;
                find: (
                    cm: CodeMirror,
                    offset: number
                ) =>
                    | {
                          line: number;
                          ch: number;
                          sticky?: string;
                      }
                    | null
                    | undefined;
                move: (
                    cm: CodeMirror,
                    offset: number
                ) =>
                    | {
                          cm: CodeMirror;
                          id: number;
                          offset: number | null;
                          assoc: number;
                          clear(): void;
                          find(): {
                              line: number;
                              ch: number;
                              sticky?: string;
                          } | null;
                          update(
                              change: import('@codemirror/state').ChangeDesc
                          ): void;
                      }
                    | undefined;
            }
        >;
        exCommandHistoryController: {
            historyBuffer: string[];
            iterator: number;
            initialPrefix: string | null;
            /**
             * the input argument here acts a user entered prefix for a small time
             * until we start autocompletion in which case it is the autocompleted.
             */
            nextMatch(input: string, up: boolean): string | undefined;
            pushInput(input: string): void;
            reset(): void;
        };
        lastCharacterSearch: {
            increment: number;
            forward: boolean;
            selectedCharacter: string;
        };
        query?: any;
        isReversed?: boolean;
        lastSubstituteReplacePart: any;
        searchQuery?: null;
        searchIsReversed?: boolean;
    };

    /** @todo Documentation incomplete. */
    handleEx: (cm: CodeMirrorV, input: string) => void;

    /** @todo Documentation incomplete. */
    handleKey: (
        cm: CodeMirror,
        key: string,
        origin: string
    ) => undefined | boolean;

    /** @todo Documentation incomplete. */
    InsertModeKey: {
        new (keyName: string, e: KeyboardEvent): {
            keyName: string;
            key: string;
            ctrlKey: boolean;
            altKey: boolean;
            metaKey: boolean;
            shiftKey: boolean;
        };
    };

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
        cfg?:
            | {
                  scope?: 'local' | 'global';
              }
            | undefined
    ) => Error | undefined;

    /**
     * @todo Documentation incomplete.
     * @throws when mapping ex to ex with context defined
     */
    unmap: (lhs: string, ctx?: string) => true | void;
    //? MISSING MEMBERS from v.6.3.0:
    // langmap: (langmapString: any, remapCtrl: any) => void;
    // vimKeyFromEvent: (
    //     e: KeyboardEvent,
    //     vim?: vimState | undefined
    // ) => string | undefined;
}

import type { CodeMirror } from '../cm_adapter/cm-adapter-main.js';
import type { Pos } from '../cm_adapter/Pos.js';
import type { InsertModeChanges } from '../types/InsertModeChanges.js';
import type { vimKey } from '../types/vimKey.js';
import type { ExFn } from '../types/ExFn.js';
import type { stringOptionCallback } from '../types/stringOptionCallback.js';
import type { numberOptionCallback } from '../types/numberOptionCallback.js';
import type { booleanOptionCallback } from '../types/booleanOptionCallback.js';
import type { MotionFn } from '../types/MotionFn.js';
import type { ActionFn } from '../types/ActionFn.js';
import type { OperatorFn } from '../types/OperatorFn.js';
import type { CodeMirrorV } from '../types/CodeMirrorV.js';
import type { vimState } from '../types/vimState.js';

/**
 * Supported keybindings:
 *   Too many to list. Refer to defaultKeymap below.
 *
 * Supported Ex commands:
 *   Refer to defaultExCommandMap below.
 *
 * Registers: unnamed, -, ., :, /, _, a-z, A-Z, 0-9
 *   (Does not respect the special case for number registers when delete
 *    operator is made with these commands: %, (, ),  , /, ?, n, N, {, } )
 *   TODO: Implement the remaining registers.
 *
 * Marks: a-z, A-Z, and 0-9
 *   TODO: Implement the remaining special marks. They have more complex
 *       behavior.
 *
 * Events:
 *  'vim-mode-change' - raised on the editor anytime the current mode changes,
 *                      Event object: {mode: "visual", subMode: "linewise"}
 *
 * Code structure:
 *  1. Default keymap
 *  2. Variable declarations and short basic helpers
 *  3. Instance (External API) implementation
 *  4. Internal state tracking objects (input state, counter) implementation
 *     and instantiation
 *  5. Key handler (the main command dispatcher) implementation
 *  6. Motion, operator, and action implementations
 *  7. Helper functions for the key handler, motions, operators, and actions
 *  8. Set up Vim to work as a keymap for CodeMirror.
 *  9. Ex command implementations.
 */
export function initVim(CM: typeof CodeMirror): {
    /** @todo Documentation incomplete. */
    enterVimMode: (cm: CodeMirror) => void;
    /** @todo Documentation incomplete. */
    leaveVimMode: (cm: CodeMirror) => void;
    /** @todo Documentation incomplete. */
    buildKeyMap: () => void;
    /** @todo Documentation incomplete. */
    getRegisterController: () => {
        /** @todo Documentation incomplete. */
        registers: {
            [x: string]: {
                /** @todo Documentation incomplete. */
                keyBuffer: string[];
                /** @todo Documentation incomplete. */
                insertModeChanges: InsertModeChanges[];
                /** @todo Documentation incomplete. */
                searchQueries: string[];
                /** @todo Documentation incomplete. */
                linewise: boolean;
                /** @todo Documentation incomplete. */
                blockwise: boolean;
                /** @todo Documentation incomplete. */
                setText(
                    text?: string | undefined,
                    linewise?: boolean | undefined,
                    blockwise?: boolean | undefined
                ): void;
                /** @todo Documentation incomplete. */
                pushText(text: string, linewise?: boolean | undefined): void;
                /** @todo Documentation incomplete. */
                pushInsertModeChanges(changes: InsertModeChanges): void;
                /** @todo Documentation incomplete. */
                pushSearchQuery(query: string): void;
                /** @todo Documentation incomplete. */
                clear(): void;
                /** @todo Documentation incomplete. */
                toString(): string;
            };
        };
        /** @todo Documentation incomplete. */
        unnamedRegister: {
            /** @todo Documentation incomplete. */
            keyBuffer: string[];
            /** @todo Documentation incomplete. */
            insertModeChanges: InsertModeChanges[];
            /** @todo Documentation incomplete. */
            searchQueries: string[];
            /** @todo Documentation incomplete. */
            linewise: boolean;
            /** @todo Documentation incomplete. */
            blockwise: boolean;
            /** @todo Documentation incomplete. */
            setText(
                text?: string | undefined,
                linewise?: boolean | undefined,
                blockwise?: boolean | undefined
            ): void;
            /** @todo Documentation incomplete. */
            pushText(text: string, linewise?: boolean | undefined): void;
            /** @todo Documentation incomplete. */
            pushInsertModeChanges(changes: InsertModeChanges): void;
            /** @todo Documentation incomplete. */
            pushSearchQuery(query: string): void;
            /** @todo Documentation incomplete. */
            clear(): void;
            /** @todo Documentation incomplete. */
            toString(): string;
        };
        /** @todo Documentation incomplete. */
        pushText(
            /** @todo Documentation incomplete. */
            registerName: string | null | undefined,
            /** @todo Documentation incomplete. */
            operator: string,
            /** @todo Documentation incomplete. */
            text: string,
            linewise?: boolean | undefined,
            blockwise?: boolean | undefined
        ): void;
        /**
         * Gets the register named @name.  If one of @name doesn't already exist,
         * create it.  If @name is invalid, return the unnamedRegister.
         */
        getRegister(name?: string | undefined): {
            /** @todo Documentation incomplete. */
            keyBuffer: string[];
            /** @todo Documentation incomplete. */
            insertModeChanges: InsertModeChanges[];
            /** @todo Documentation incomplete. */
            searchQueries: string[];
            /** @todo Documentation incomplete. */
            linewise: boolean;
            /** @todo Documentation incomplete. */
            blockwise: boolean;
            /** @todo Documentation incomplete. */
            setText(
                text?: string | undefined,
                linewise?: boolean | undefined,
                blockwise?: boolean | undefined
            ): void;
            /** @todo Documentation incomplete. */
            pushText(text: string, linewise?: boolean | undefined): void;
            /** @todo Documentation incomplete. */
            pushInsertModeChanges(changes: InsertModeChanges): void;
            /** @todo Documentation incomplete. */
            pushSearchQuery(query: string): void;
            /** @todo Documentation incomplete. */
            clear(): void;
            /** @todo Documentation incomplete. */
            toString(): string;
        };
        /** @todo Documentation incomplete. */
        isValidRegister(name: any): name is string;
        shiftNumericRegisters_(): void;
    };
    resetVimGlobalState_: () => void;
    getVimGlobalState_: () => {
        /** @todo Documentation incomplete. */
        macroModeState: {
            /** @todo Documentation incomplete. */
            latestRegister: string | undefined;
            /** @todo Documentation incomplete. */
            isPlaying: boolean;
            /** @todo Documentation incomplete. */
            isRecording: boolean;
            /** @todo Documentation incomplete. */
            replaySearchQueries: string[];
            /** @todo Documentation incomplete. */
            onRecordingDone: ((newVal?: string) => void) | undefined;
            /** @todo Documentation incomplete. */
            lastInsertModeChanges: InsertModeChanges;
            /** @todo Documentation incomplete. */
            exitMacroRecordMode(): void;
            /** @todo Documentation incomplete. */
            enterMacroRecordMode(cm: CodeMirror, registerName: string): void;
        };
        /** @todo Documentation incomplete. */
        registerController: {
            /** @todo Documentation incomplete. */
            registers: {
                [x: string]: {
                    /** @todo Documentation incomplete. */
                    keyBuffer: string[];
                    /** @todo Documentation incomplete. */
                    linewise: boolean;
                    /** @todo Documentation incomplete. */
                    blockwise: boolean;
                    /** @todo Documentation incomplete. */
                    setText(
                        text?: string | undefined,
                        linewise?: boolean | undefined,
                        blockwise?: boolean | undefined
                    ): void;
                    /** @todo Documentation incomplete. */
                    pushText(
                        /** @todo Documentation incomplete. */
                        text: string,
                        linewise?: boolean | undefined
                    ): void;
                    /** @todo Documentation incomplete. */
                    pushInsertModeChanges(changes: InsertModeChanges): void;
                    /** @todo Documentation incomplete. */
                    pushSearchQuery(query: string): void;
                    /** @todo Documentation incomplete. */
                    clear(): void;
                    /** @todo Documentation incomplete. */
                    toString(): string;
                };
            };
            /** @todo Documentation incomplete. */
            unnamedRegister: {
                /** @todo Documentation incomplete. */
                keyBuffer: string[];
                /** @todo Documentation incomplete. */
                insertModeChanges: InsertModeChanges[];
                /** @todo Documentation incomplete. */
                searchQueries: string[];
                /** @todo Documentation incomplete. */
                linewise: boolean;
                /** @todo Documentation incomplete. */
                blockwise: boolean;
                /** @todo Documentation incomplete. */
                setText(
                    text?: string | undefined,
                    linewise?: boolean | undefined,
                    blockwise?: boolean | undefined
                ): void;
                /** @todo Documentation incomplete. */
                pushText(text: string, linewise?: boolean | undefined): void;
                /** @todo Documentation incomplete. */
                pushInsertModeChanges(changes: InsertModeChanges): void;
                /** @todo Documentation incomplete. */
                pushSearchQuery(query: string): void;
                /** @todo Documentation incomplete. */
                clear(): void;
                /** @todo Documentation incomplete. */
                toString(): string;
            };
            /** @todo Documentation incomplete. */
            pushText(
                /** @todo Documentation incomplete. */
                registerName: string | null | undefined,
                /** @todo Documentation incomplete. */
                operator: string,
                /** @todo Documentation incomplete. */
                text: string,
                linewise?: boolean | undefined,
                blockwise?: boolean | undefined
            ): void;
            /**
             * Gets the register named @name.  If one of @name doesn't already exist,
             * create it.  If @name is invalid, return the unnamedRegister.
             */
            getRegister(name?: string | undefined): {
                /** @todo Documentation incomplete. */
                keyBuffer: string[];
                /** @todo Documentation incomplete. */
                insertModeChanges: InsertModeChanges[];
                /** @todo Documentation incomplete. */
                searchQueries: string[];
                /** @todo Documentation incomplete. */
                linewise: boolean;
                /** @todo Documentation incomplete. */
                blockwise: boolean;
                /** @todo Documentation incomplete. */
                setText(
                    text?: string | undefined,
                    linewise?: boolean | undefined,
                    blockwise?: boolean | undefined
                ): void;
                /** @todo Documentation incomplete. */
                pushText(text: string, linewise?: boolean | undefined): void;
                /** @todo Documentation incomplete. */
                pushInsertModeChanges(changes: InsertModeChanges): void;
                /** @todo Documentation incomplete. */
                pushSearchQuery(query: string): void;
                /** @todo Documentation incomplete. */
                clear(): void;
                /** @todo Documentation incomplete. */
                toString(): string;
            };
            /** @todo Documentation incomplete. */
            isValidRegister(name: any): name is string;
            shiftNumericRegisters_(): void;
        };
        /** @todo Documentation incomplete. */
        searchHistoryController: {
            /** @todo Documentation incomplete. */
            historyBuffer: string[];
            /** @todo Documentation incomplete. */
            iterator: number;
            /** @todo Documentation incomplete. */
            initialPrefix: string | null;
            /**
             * the input argument here acts a user entered prefix for a small time
             * until we start autocompletion in which case it is the autocompleted.
             */
            /** @todo Documentation incomplete. */
            nextMatch(input: string, up: boolean): string | undefined;
            /** @todo Documentation incomplete. */
            pushInput(input: string): void;
            /** @todo Documentation incomplete. */
            reset(): void;
        };
        /** @todo Documentation incomplete. */
        jumpList: ReturnType<
            () => {
                /** @todo Documentation incomplete. */
                cachedCursor: Pos | undefined;
                /** @todo Documentation incomplete. */
                add: (cm: CodeMirror, oldCur: Pos, newCur: Pos) => void;
                /** @todo Documentation incomplete. */
                find: (
                    /** @todo Documentation incomplete. */
                    cm: CodeMirror,
                    /** @todo Documentation incomplete. */
                    offset: number
                ) =>
                    | {
                          /** @todo Documentation incomplete. */
                          line: number;
                          /** @todo Documentation incomplete. */
                          ch: number;
                          sticky?: string;
                      }
                    | null
                    | undefined;
                /** @todo Documentation incomplete. */
                move: (
                    /** @todo Documentation incomplete. */
                    cm: CodeMirror,
                    /** @todo Documentation incomplete. */
                    offset: number
                ) =>
                    | {
                          /** @todo Documentation incomplete. */
                          cm: CodeMirror;
                          /** @todo Documentation incomplete. */
                          id: number;
                          /** @todo Documentation incomplete. */
                          offset: number | null;
                          /** @todo Documentation incomplete. */
                          assoc: number;
                          /** @todo Documentation incomplete. */
                          clear(): void;
                          find(): {
                              /** @todo Documentation incomplete. */
                              line: number;
                              /** @todo Documentation incomplete. */
                              ch: number;
                              sticky?: string;
                          } | null;
                          /** @todo Documentation incomplete. */
                          update(
                              /** @todo Documentation incomplete. */
                              change: import('@codemirror/state').ChangeDesc
                          ): void;
                      }
                    | undefined;
            }
        >;
        /** @todo Documentation incomplete. */
        exCommandHistoryController: {
            /** @todo Documentation incomplete. */
            historyBuffer: string[];
            /** @todo Documentation incomplete. */
            iterator: number;
            /** @todo Documentation incomplete. */
            initialPrefix: string | null;
            /**
             * the input argument here acts a user entered prefix for a small time
             * until we start autocompletion in which case it is the autocompleted.
             */
            /** @todo Documentation incomplete. */
            nextMatch(input: string, up: boolean): string | undefined;
            /** @todo Documentation incomplete. */
            pushInput(input: string): void;
            /** @todo Documentation incomplete. */
            reset(): void;
        };
        /** @todo Documentation incomplete. */
        lastCharacterSearch: {
            /** @todo Documentation incomplete. */
            increment: number;
            /** @todo Documentation incomplete. */
            forward: boolean;
            /** @todo Documentation incomplete. */
            selectedCharacter: string;
        };
        query?: any;
        isReversed?: boolean;
        /** @todo Documentation incomplete. */
        lastSubstituteReplacePart: any;
        searchQuery?: null;
        searchIsReversed?: boolean;
    };
    maybeInitVimState_: (cm: CodeMirror) => vimState;
    /** @todo Documentation incomplete. */
    suppressErrorLogging: boolean;
    /** @todo Documentation incomplete. */
    InsertModeKey: {
        new (keyName: string, e: KeyboardEvent): {
            /** @todo Documentation incomplete. */
            keyName: string;
            /** @todo Documentation incomplete. */
            key: string;
            /** @todo Documentation incomplete. */
            ctrlKey: boolean;
            /** @todo Documentation incomplete. */
            altKey: boolean;
            /** @todo Documentation incomplete. */
            metaKey: boolean;
            /** @todo Documentation incomplete. */
            shiftKey: boolean;
        };
    };
    /** @todo Documentation incomplete. */
    map: (lhs: string, rhs: string, ctx: string) => void;
    /** @todo Documentation incomplete. */
    unmap: (lhs: string, ctx: string) => any;
    /** @todo Documentation incomplete. */
    noremap: (lhs: string, rhs: string, ctx: string) => void;
    /** @todo Documentation incomplete. */
    mapclear: (ctx?: string | undefined) => void;
    /** @todo Documentation incomplete. */
    langmap: (langmapString: any, remapCtrl: any) => void;
    /** @todo Documentation incomplete. */
    vimKeyFromEvent: (
        /** @todo Documentation incomplete. */
        e: KeyboardEvent,
        vim?: vimState | undefined
    ) => string | undefined;
    /** @todo Documentation incomplete. */
    setOption: (
        /** @todo Documentation incomplete. */
        name: string,
        /** @todo Documentation incomplete. */
        value: any,
        cm?: CodeMirrorV | undefined,
        cfg?:
            | {
                  scope?: any;
              }
            | undefined
    ) => Error | undefined;
    /** @todo Documentation incomplete. */
    getOption: (
        /** @todo Documentation incomplete. */
        name: string,
        cm?: CodeMirrorV | undefined,
        cfg?:
            | {
                  scope?: any;
              }
            | undefined
    ) => any;
    /** @todo Documentation incomplete. */
    defineOption: {
        (
            /** @todo Documentation incomplete. */
            name: string,
            /** @todo Documentation incomplete. */
            defaultValue: boolean | null | undefined,
            /** @todo Documentation incomplete. */
            type: 'boolean',
            aliases?: string[] | null | undefined,
            callback?: booleanOptionCallback | undefined
        ): void;
        (
            /** @todo Documentation incomplete. */
            name: string,
            /** @todo Documentation incomplete. */
            defaultValue: number | null | undefined,
            /** @todo Documentation incomplete. */
            type: 'number',
            aliases?: string[] | null | undefined,
            callback?: numberOptionCallback | undefined
        ): void;
        (
            /** @todo Documentation incomplete. */
            name: string,
            /** @todo Documentation incomplete. */
            defaultValue: string | null | undefined,
            /** @todo Documentation incomplete. */
            type: 'string',
            aliases?: string[] | null | undefined,
            callback?: stringOptionCallback | undefined
        ): void;
    };
    /** @todo Documentation incomplete. */
    defineEx: (name: string, prefix: string | undefined, func: ExFn) => void;
    /** @todo Documentation incomplete. */
    handleKey: (
        /** @todo Documentation incomplete. */
        cm: CodeMirror,
        /** @todo Documentation incomplete. */
        key: string,
        /** @todo Documentation incomplete. */
        origin: string
    ) => undefined | boolean;
    /** @todo Documentation incomplete. */
    multiSelectHandleKey: (
        cm_: CodeMirror,
        /** @todo Documentation incomplete. */
        key: string,
        /** @todo Documentation incomplete. */
        origin: string
    ) => boolean | undefined;
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
    /** @todo Documentation incomplete. */
    findKey: (
        cm_: CodeMirror,
        /** @todo Documentation incomplete. */
        key: string,
        origin?: string | undefined
    ) => (() => boolean | undefined) | undefined;
    /** @todo Documentation incomplete. */
    handleEx: (cm: CodeMirrorV, input: string) => void;
    /** @todo Documentation incomplete. */
    defineMotion: (name: string, fn: MotionFn) => void;
    /** @todo Documentation incomplete. */
    defineAction: (name: string, fn: ActionFn) => void;
    /** @todo Documentation incomplete. */
    defineOperator: (name: string, fn: OperatorFn) => void;
    /** @todo Documentation incomplete. */
    mapCommand: (
        /** @todo Documentation incomplete. */
        keys: string,
        /** @todo Documentation incomplete. */
        type: string,
        /** @todo Documentation incomplete. */
        name: string,
        /** @todo Documentation incomplete. */
        args: any,
        /** @todo Documentation incomplete. */
        extra: {
            [x: string]: any;
        }
    ) => void;
    _mapCommand: (command: vimKey) => void;
    /** @todo Documentation incomplete. */
    defineRegister: (
        /** @todo Documentation incomplete. */
        name: string,
        /** @todo Documentation incomplete. */
        register: {
            /** @todo Documentation incomplete. */
            keyBuffer: string[];
            /** @todo Documentation incomplete. */
            insertModeChanges: InsertModeChanges[];
            /** @todo Documentation incomplete. */
            searchQueries: string[];
            /** @todo Documentation incomplete. */
            linewise: boolean;
            /** @todo Documentation incomplete. */
            blockwise: boolean;
            /** @todo Documentation incomplete. */
            setText(
                text?: string | undefined,
                linewise?: boolean | undefined,
                blockwise?: boolean | undefined
            ): void;
            /** @todo Documentation incomplete. */
            pushText(text: string, linewise?: boolean | undefined): void;
            /** @todo Documentation incomplete. */
            pushInsertModeChanges(changes: InsertModeChanges): void;
            /** @todo Documentation incomplete. */
            pushSearchQuery(query: string): void;
            /** @todo Documentation incomplete. */
            clear(): void;
            /** @todo Documentation incomplete. */
            toString(): string;
        }
    ) => void;
    /** @todo Documentation incomplete. */
    exitVisualMode: (cm: CodeMirrorV, moveHead?: boolean | undefined) => void;
    /** @todo Documentation incomplete. */
    exitInsertMode: (cm: CodeMirrorV, keepCursor?: boolean | undefined) => void;
};

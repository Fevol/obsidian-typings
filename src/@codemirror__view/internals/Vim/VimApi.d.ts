import type { ActionArgsPartial } from 'types';
// import type { VimEditor } from './VimEditor.d.ts';
// import type { VimState } from './VimState.d.ts';
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
    _mapCommand: (command: import('types').vimKey) => void;
    /** Not Implemented yet*/
    buildKeyMap: () => void;

    /** @todo Documentation incomplete. */
    defineAction: (name: string, fn: import('types').ActionFn) => void;

    /** @todo Documentation incomplete. */
    defineEx: (
        name: string,
        prefix: string | undefined,
        func: import('types').ExFn
    ) => void;

    /** @todo Documentation incomplete. */
    defineMotion: (name: string, fn: import('types').MotionFn) => void;

    /** @todo Documentation incomplete. */
    defineOperator: (name: string, fn: import('types').OperatorFn) => void;

    /** @todo Documentation incomplete. */
    defineOption: {
        (
            name: string,
            defaultValue: boolean | null | undefined,
            type: 'boolean',
            aliases?: string[] | null | undefined,
            callback?: import('types').booleanOptionCallback | undefined
        ): void;
        (
            name: string,
            defaultValue: number | null | undefined,
            type: 'number',
            aliases?: string[] | null | undefined,
            callback?: import('types').numberOptionCallback | undefined
        ): void;
        (
            name: string,
            defaultValue: string | null | undefined,
            type: 'string',
            aliases?: string[] | null | undefined,
            callback?: import('types').stringOptionCallback | undefined
        ): void;
    };

    /** @todo Documentation incomplete. */
    defineRegister: (
        name: string,
        register: {
            keyBuffer: string[];
            insertModeChanges: import('types').InsertModeChanges[];
            searchQueries: string[];
            linewise: boolean;
            blockwise: boolean;
            setText(
                text?: string | undefined,
                linewise?: boolean | undefined,
                blockwise?: boolean | undefined
            ): void;
            pushText(text: string, linewise?: boolean | undefined): void;
            pushInsertModeChanges(
                changes: import('types').InsertModeChanges
            ): void;
            pushSearchQuery(query: string): void;
            clear(): void;
            toString(): string;
        }
    ) => void;

    /** @todo Documentation incomplete. */
    //TODO missing in
    enterInsertMode(
        cm: import('cm_adapter').CodeMirror,
        actionArgs: ActionArgsPartial,
        vum: vimState
    ): void;

    /** @todo Documentation incomplete. */
    enterVimMode: (cm: import('cm_adapter').CodeMirror) => void;

    /** @todo Documentation incomplete. */
    exitInsertMode: (
        cm: import('types').CodeMirrorV,
        keepCursor?: boolean | undefined
    ) => void;

    /** @todo Documentation incomplete. */
    exitVisualMode: (
        cm: import('types').CodeMirrorV,
        moveHead?: boolean | undefined
    ) => void;

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
        cm_: import('cm_adapter').CodeMirror,
        key: string,
        origin?: string | undefined
    ) => (() => boolean | undefined) | undefined;

    /** @todo Documentation incomplete. */
    getOption: (
        name: string,
        cm?: import('types').CodeMirrorV | undefined,
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
                insertModeChanges: import('types').InsertModeChanges[];
                searchQueries: string[];
                linewise: boolean;
                blockwise: boolean;
                setText(
                    text?: string | undefined,
                    linewise?: boolean | undefined,
                    blockwise?: boolean | undefined
                ): void;
                pushText(text: string, linewise?: boolean | undefined): void;
                pushInsertModeChanges(
                    changes: import('types').InsertModeChanges
                ): void;
                pushSearchQuery(query: string): void;
                clear(): void;
                toString(): string;
            };
        };
        unnamedRegister: {
            keyBuffer: string[];
            insertModeChanges: import('types').InsertModeChanges[];
            searchQueries: string[];
            linewise: boolean;
            blockwise: boolean;
            setText(
                text?: string | undefined,
                linewise?: boolean | undefined,
                blockwise?: boolean | undefined
            ): void;
            pushText(text: string, linewise?: boolean | undefined): void;
            pushInsertModeChanges(
                changes: import('types').InsertModeChanges
            ): void;
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
            insertModeChanges: import('types').InsertModeChanges[];
            searchQueries: string[];
            linewise: boolean;
            blockwise: boolean;
            setText(
                text?: string | undefined,
                linewise?: boolean | undefined,
                blockwise?: boolean | undefined
            ): void;
            pushText(text: string, linewise?: boolean | undefined): void;
            pushInsertModeChanges(
                changes: import('types').InsertModeChanges
            ): void;
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
            lastInsertModeChanges: import('types').InsertModeChanges;
            exitMacroRecordMode(): void;
            enterMacroRecordMode(
                cm: import('cm_adapter').CodeMirror,
                registerName: string
            ): void;
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
                    pushInsertModeChanges(
                        changes: import('types').InsertModeChanges
                    ): void;
                    pushSearchQuery(query: string): void;
                    clear(): void;
                    toString(): string;
                };
            };
            unnamedRegister: {
                keyBuffer: string[];
                insertModeChanges: import('types').InsertModeChanges[];
                searchQueries: string[];
                linewise: boolean;
                blockwise: boolean;
                setText(
                    text?: string | undefined,
                    linewise?: boolean | undefined,
                    blockwise?: boolean | undefined
                ): void;
                pushText(text: string, linewise?: boolean | undefined): void;
                pushInsertModeChanges(
                    changes: import('types').InsertModeChanges
                ): void;
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
                insertModeChanges: import('types').InsertModeChanges[];
                searchQueries: string[];
                linewise: boolean;
                blockwise: boolean;
                setText(
                    text?: string | undefined,
                    linewise?: boolean | undefined,
                    blockwise?: boolean | undefined
                ): void;
                pushText(text: string, linewise?: boolean | undefined): void;
                pushInsertModeChanges(
                    changes: import('types').InsertModeChanges
                ): void;
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
                cachedCursor: import('types').Pos | undefined;
                add: (
                    cm: import('cm_adapter').CodeMirror,
                    oldCur: import('types').Pos,
                    newCur: import('types').Pos
                ) => void;
                find: (
                    cm: import('cm_adapter').CodeMirror,
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
                    cm: import('cm_adapter').CodeMirror,
                    offset: number
                ) =>
                    | {
                          cm: import('cm_adapter').CodeMirror;
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
    handleEx: (cm: import('types').CodeMirrorV, input: string) => void;

    /** @todo Documentation incomplete. */
    handleKey: (
        cm: import('cm_adapter').CodeMirror,
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
    leaveVimMode: (cm: import('cm_adapter').CodeMirror) => void;

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
    maybeInitVimState_: (
        cm: import('cm_adapter').CodeMirror
    ) => import('types').vimState;

    /**
     *
     * @param cm_ codemirror view
     * @param key key string to be handled
     * @param origin
     * @returns whether the handling was successful
     */
    multiSelectHandleKey: (
        cm_: import('cm_adapter').CodeMirror,
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
        cm?: import('types').CodeMirrorV | undefined,
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
    // MISSING MEMBERS from v.6.3.0:
    // langmap: (langmapString: any, remapCtrl: any) => void;
    // vimKeyFromEvent: (
    //     e: KeyboardEvent,
    //     vim?: import('types').vimState | undefined
    // ) => string | undefined;
}

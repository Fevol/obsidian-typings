declare module 'types' {
    import { CodeMirror } from 'cm_adapter';
    import { initVim } from 'vim';
    export type Vim = ReturnType<typeof initVim>;
    export type vimState = {
        onPasteFn?: () => void;
        sel: {
            head: Pos;
            anchor: Pos;
        };
        insertModeReturn: boolean;
        visualBlock: boolean;
        marks: {
            [mark: string]: Marker;
        };
        visualMode: boolean;
        insertMode: boolean;
        pasteFn?: any;
        lastSelection: {
            anchorMark: Marker;
            headMark: Marker;
            visualLine: boolean;
            visualBlock: boolean;
            visualMode: boolean;
            anchor: Pos;
            head: Pos;
        };
        searchState_?: SearchStateInterface;
        lastEditActionCommand: actionCommand | void;
        lastPastedText?: string;
        lastMotion?: MotionFn | null;
        options: {
            [optionName: string]: vimOption;
        };
        lastEditInputState: InputStateInterface | void;
        inputState: InputStateInterface;
        visualLine: boolean;
        insertModeRepeat?: number;
        lastHSPos: number;
        lastHPos: number;
        wasInVisualBlock?: boolean;
        insertEnd?: Marker;
        status: string;
        exMode?: boolean;
        mode?: string;
        expectLiteralNext?: boolean;
    };
    export type Marker = ReturnType<CodeMirror['setBookmark']>;
    export type LineHandle = ReturnType<CodeMirror['getLineHandle']>;
    export type Pos = {
        line: number;
        ch: number;
        sticky?: string;
    };
    export interface CM5Range {
        anchor: Pos;
        head: Pos;
        from(): Pos;
        empty(): boolean;
    }
    export interface CM5RangeInterface {
        anchor: Pos;
        head: Pos;
    }
    export type RegisterController = ReturnType<Vim['getRegisterController']>;
    export type Register = ReturnType<RegisterController['getRegister']>;
    export type SearchArgs = {
        forward?: boolean;
        toJumplist?: boolean;
        wholeWordOnly?: boolean;
        querySrc?: string;
    };
    export type OperatorArgs = {
        repeat?: number;
        forward?: boolean;
        linewise?: boolean;
        fullLine?: boolean;
        registerName?: string | null;
        indentRight?: boolean;
        toLower?: boolean;
        shouldMoveCursor?: boolean;
        selectedCharacter?: string;
        lastSel?: {
            head: Pos;
            anchor: Pos;
            visualLine: boolean;
            visualBlock: boolean;
        };
        keepCursor?: boolean;
    };
    export type CodeMirrorV = CodeMirror & {
        state: {
            vim: vimState;
        };
    };
    export type OperatorFn = (
        cm: CodeMirrorV,
        args: OperatorArgs,
        ranges: CM5RangeInterface[],
        oldAnchor: Pos,
        newHead?: Pos
    ) => Pos | void;
    export type vimOperators = {
        change(
            cm: CodeMirrorV,
            args: OperatorArgs,
            ranges: CM5RangeInterface[]
        ): void;
        delete(
            cm: CodeMirrorV,
            args: OperatorArgs,
            ranges: CM5RangeInterface[]
        ): void;
        indent(
            cm: CodeMirrorV,
            args: OperatorArgs,
            ranges: CM5RangeInterface[]
        ): void;
        indentAuto(
            cm: CodeMirrorV,
            args: OperatorArgs,
            ranges: CM5RangeInterface[]
        ): void;
        hardWrap(
            cm: CodeMirrorV,
            args: OperatorArgs,
            ranges: CM5RangeInterface[],
            oldAnchor: Pos
        ): Pos | void;
        changeCase(
            cm: CodeMirrorV,
            args: OperatorArgs,
            ranges: CM5RangeInterface[],
            oldAnchor: Pos,
            newHead?: Pos
        ): Pos | void;
        yank(
            cm: CodeMirrorV,
            args: OperatorArgs,
            ranges: CM5RangeInterface[],
            oldAnchor: Pos
        ): Pos | void;
    } & {
        [key: string]: OperatorFn;
    };
    export type ActionArgsPartial = {
        repeat?: number;
        forward?: boolean;
        head?: Pos;
        position?: string;
        backtrack?: boolean;
        increase?: boolean;
        repeatIsExplicit?: boolean;
        indentRight?: boolean;
        selectedCharacter?: string;
        after?: boolean;
        matchIndent?: boolean;
        registerName?: string;
        isEdit?: boolean;
        linewise?: boolean;
        insertAt?: string;
        blockwise?: boolean;
        keepSpaces?: boolean;
        replace?: boolean;
        keepCursor?: boolean;
    };
    export type ActionArgs = ActionArgsPartial & {
        repeat: number;
    };
    export type ActionFn = (
        cm: CodeMirrorV,
        actionArgs: ActionArgs,
        vim: vimState
    ) => void;
    export type vimActions = {
        jumpListWalk(
            cm: CodeMirrorV,
            actionArgs: ActionArgs,
            vim: vimState
        ): void;
        continuePaste(
            cm: CodeMirrorV,
            actionArgs: ActionArgs,
            vim: vimState,
            text: string,
            register: Register
        ): void;
        enterInsertMode(
            cm: CodeMirrorV,
            actionArgs: ActionArgsPartial,
            vum: vimState
        ): void;
    } & {
        [key: string]: ActionFn;
    };
    export type MotionArgsPartial = {
        repeat?: number;
        forward?: boolean;
        selectedCharacter?: string;
        linewise?: boolean;
        textObjectInner?: boolean;
        sameLine?: boolean;
        repeatOffset?: number;
        toJumplist?: boolean;
        inclusive?: boolean;
        wordEnd?: boolean;
        toFirstChar?: boolean;
        explicitRepeat?: boolean;
        bigWord?: boolean;
        repeatIsExplicit?: boolean;
        noRepeat?: boolean;
    };
    export type MotionArgs = MotionArgsPartial & {
        repeat: number;
    };
    export type MotionFn = (
        cm: CodeMirrorV,
        head: Pos,
        motionArgs: MotionArgs,
        vim: vimState,
        inputState: InputStateInterface
    ) => Pos | [Pos, Pos] | null | undefined;
    export type vimMotions = {
        moveToTopLine(cm: CodeMirrorV, head: Pos, motionArgs: MotionArgs): Pos;
        moveToMiddleLine(cm: CodeMirrorV): Pos;
        moveToBottomLine(
            cm: CodeMirrorV,
            head: Pos,
            motionArgs: MotionArgs
        ): Pos;
        expandToLine(_cm: CodeMirrorV, head: Pos, motionArgs: MotionArgs): Pos;
        findNext(
            _cm: CodeMirrorV,
            _head: Pos,
            motionArgs: MotionArgs
        ): Pos | undefined;
        findAndSelectNextInclusive(
            cm: CodeMirrorV,
            head: Pos,
            motionArgs: MotionArgs,
            vim: vimState,
            inputState: InputStateInterface
        ): Pos | [Pos, Pos] | undefined;
        goToMark(
            cm: CodeMirrorV,
            _head: Pos,
            motionArgs: MotionArgs,
            vim: vimState,
            inputState: InputStateInterface
        ): Pos | undefined | null;
        moveToOtherHighlightedEnd(
            cm: CodeMirrorV,
            _head: Pos,
            motionArgs: MotionArgs,
            vim: vimState
        ): [Pos, Pos];
        jumpToMark(
            cm: CodeMirrorV,
            head: Pos,
            motionArgs: MotionArgs,
            vim: vimState
        ): Pos;
        moveByCharacters(
            _cm: CodeMirrorV,
            head: Pos,
            motionArgs: MotionArgs
        ): Pos;
        moveByLines(
            cm: CodeMirrorV,
            head: Pos,
            motionArgs: MotionArgs,
            vim: vimState
        ): Pos;
        moveByDisplayLines(
            cm: CodeMirrorV,
            head: Pos,
            motionArgs: MotionArgs,
            vim: vimState
        ): Pos;
        moveByPage(cm: CodeMirrorV, head: Pos, motionArgs: MotionArgs): Pos;
        moveByParagraph(
            cm: CodeMirrorV,
            head: Pos,
            motionArgs: MotionArgs
        ): Pos;
        moveBySentence(cm: CodeMirrorV, head: Pos, motionArgs: MotionArgs): Pos;
        moveByScroll(
            cm: CodeMirrorV,
            head: Pos,
            motionArgs: MotionArgs,
            vim: vimState
        ): Pos | null;
        moveByWords(
            cm: CodeMirrorV,
            head: Pos,
            motionArgs: MotionArgs
        ): Pos | undefined;
        moveTillCharacter(
            cm: CodeMirrorV,
            _head: Pos,
            motionArgs: MotionArgs
        ): Pos | null;
        moveToCharacter(
            cm: CodeMirrorV,
            head: Pos,
            motionArgs: MotionArgs
        ): Pos;
        moveToSymbol(cm: CodeMirrorV, head: Pos, motionArgs: MotionArgs): Pos;
        moveToColumn(
            cm: CodeMirrorV,
            head: Pos,
            motionArgs: MotionArgs,
            vim: vimState
        ): Pos;
        moveToEol(
            cm: CodeMirrorV,
            head: Pos,
            motionArgs: MotionArgs,
            vim: vimState
        ): Pos;
        moveToFirstNonWhiteSpaceCharacter(cm: CodeMirrorV, head: Pos): Pos;
        moveToMatchedSymbol(cm: CodeMirrorV, head: Pos): Pos | undefined;
        moveToStartOfLine(
            _cm: CodeMirrorV,
            head: Pos,
            motionArgs?: MotionArgs,
            vim?: vimState
        ): Pos;
        moveToLineOrEdgeOfDocument(
            cm: CodeMirrorV,
            _head: Pos,
            motionArgs: MotionArgs
        ): Pos;
        moveToStartOfDisplayLine(cm: CodeMirrorV): Pos;
        moveToEndOfDisplayLine(cm: CodeMirrorV): Pos;
        textObjectManipulation(
            cm: CodeMirrorV,
            head: Pos,
            motionArgs: MotionArgs,
            vim: vimState
        ): Pos | [Pos, Pos] | null;
        repeatLastCharacterSearch(
            cm: CodeMirrorV,
            head: Pos,
            motionArgs: MotionArgs
        ): Pos;
        [key: string]: MotionFn;
    };
    export type exCommandDefinition = {
        name: string;
        shortName?: string;
        possiblyAsync?: boolean;
        excludeFromCommandHistory?: boolean;
        argDelimiter?: string;
        type?: string;
        toKeys?: string;
        toInput?: string;
        user?: boolean;
        noremap?: boolean;
    };
    export type optionCallback = (
        value?: string | undefined,
        cm?: CodeMirror
    ) => any;
    export type booleanOptionCallback = (
        value?: boolean,
        cm?: CodeMirror
    ) => any;
    export type numberOptionCallback = (value?: number, cm?: CodeMirror) => any;
    export type stringOptionCallback = (value?: string, cm?: CodeMirror) => any;
    export type vimOption =
        | {
              type?: string;
              defaultValue?: unknown;
              callback?: optionCallback;
              value?: unknown;
          }
        | {
              type: 'boolean';
              defaultValue?: boolean | null | undefined;
              callback?: booleanOptionCallback;
              value?: boolean;
          };
    export type defineOption1 = (
        name: string,
        defaultValue: unknown,
        type: string,
        aliases?: string[] | undefined | null,
        callback?: optionCallback
    ) => void;
    export type defineOption2 = (
        name: string,
        defaultValue: boolean | undefined | null,
        type: 'boolean',
        aliases?: string[] | undefined | null,
        callback?: booleanOptionCallback
    ) => void;
    export type ExFn = (cm: CodeMirrorV, params: ExParams) => void;
    type allCommands = {
        keys: string;
        context?: string;
        interlaceInsertRepeat?: boolean;
        exitVisualBlock?: boolean;
        isEdit?: boolean;
        repeatOverride?: number;
        noremap?: boolean;
    };
    export type motionCommand = allCommands & {
        type: 'motion';
        motion: string;
        motionArgs?: MotionArgsPartial;
        repeatOverride?: number;
    };
    export type operatorCommand = allCommands & {
        type: 'operator';
        operator: string;
        operatorArgs?: OperatorArgs;
    };
    export type actionCommand = allCommands & {
        type: 'action';
        action: string;
        actionArgs?: ActionArgsPartial;
        motion?: string;
        operator?: string;
        interlaceInsertRepeat?: boolean;
    };
    export type searchCommand = allCommands & {
        type: 'search';
        searchArgs: SearchArgs;
    };
    export type operatorMotionCommand = allCommands & {
        type: 'operatorMotion';
        motion: string;
        operator: string;
        motionArgs?: MotionArgsPartial;
        operatorArgs?: OperatorArgs;
        operatorMotionArgs?: {
            visualLine?: boolean;
        };
    };
    export type idleCommand = allCommands & {
        type: 'idle';
    };
    export type exCommand = allCommands & {
        type: 'ex';
    };
    export type keyToExCommand = allCommands & {
        type: 'keyToEx';
        exArgs: ExParams;
    };
    export type keyToKeyCommand = allCommands & {
        toKeys: string;
        type: 'keyToKey';
    };
    export type vimKey =
        | motionCommand
        | operatorCommand
        | actionCommand
        | searchCommand
        | operatorMotionCommand
        | idleCommand
        | exCommand
        | keyToExCommand
        | keyToKeyCommand;
    export type vimKeyMap = vimKey[];
    export interface InputStateInterface {
        prefixRepeat: string[];
        motionRepeat: string[];
        operator: string | undefined | null;
        operatorArgs: OperatorArgs | undefined | null;
        motion: string | undefined | null;
        motionArgs: MotionArgs | null;
        keyBuffer: string[];
        registerName?: string;
        changeQueue: null | {
            inserted: string;
            removed: string[];
        };
        operatorShortcut?: string;
        selectedCharacter?: string;
        repeatOverride?: number;
        changeQueueList?: InputStateInterface['changeQueue'][];
        pushRepeatDigit(n: string): void;
        getRepeat(): number;
    }
    export interface SearchStateInterface {
        setReversed(reversed: boolean): void;
        isReversed(): boolean | undefined;
        getQuery(): RegExp;
        setQuery(query: string | RegExp): void;
        highlightTimeout: number | undefined;
        getOverlay(): {
            query: RegExp;
        };
        getScrollbarAnnotate(): any;
        setScrollbarAnnotate(query: RegExp | null): void;
        setOverlay(
            overlay: {
                query: RegExp;
            } | null
        ): void;
    }
    export type exCommandArgs = {
        callback?: (() => void) | undefined;
        input?: string | undefined;
        line?: string | undefined;
        commandName?: string | undefined;
        argString?: string;
        args?: string[];
    };
    export type vimExCommands = {
        colorscheme(cm: CodeMirrorV, params: vimExCommandsParams): void;
        map(cm: CodeMirrorV, params: vimExCommandsParams, ctx: string): void;
        imap(cm: CodeMirrorV, params: vimExCommandsParams): void;
        nmap(cm: CodeMirrorV, params: vimExCommandsParams): void;
        vmap(cm: CodeMirrorV, params: vimExCommandsParams): void;
        unmap(cm: CodeMirrorV, params: vimExCommandsParams, ctx: string): void;
        move(cm: CodeMirrorV, params: vimExCommandsParams): void;
        set(cm: CodeMirrorV, params: vimExCommandsParams): void;
        setlocal(cm: CodeMirrorV, params: vimExCommandsParams): void;
        setglobal(cm: CodeMirrorV, params: vimExCommandsParams): void;
        registers(cm: CodeMirrorV, params: vimExCommandsParams): void;
        sort(cm: CodeMirrorV, params: vimExCommandsParams): void;
        vglobal(cm: CodeMirrorV, params: vimExCommandsParams): void;
        global(cm: CodeMirrorV, params: vimExCommandsParams): void;
        substitute(cm: CodeMirrorV, params: vimExCommandsParams): void;
        redo(cm: CodeMirrorV): void;
        undo(cm: CodeMirrorV): void;
        write(
            cm: CodeMirrorV & {
                save?: Function;
            }
        ): void;
        nohlsearch(cm: CodeMirrorV): void;
        yank(cm: CodeMirrorV): void;
        delete(cm: CodeMirrorV, params: vimExCommandsParams): void;
        join(cm: CodeMirrorV, params: vimExCommandsParams): void;
        delmarks(cm: CodeMirrorV, params: vimExCommandsParams): void;
        [key: string]: (
            cm: CodeMirrorV,
            params: vimExCommandsParams,
            ctx: string
        ) => void;
    };
    type vimExCommandsParams = {
        args?: string[];
        input?: string;
        line?: number;
        setCfg?: {
            scope?: string;
        };
        argString?: string;
        lineEnd?: number;
        commandName?: string;
        callback?: () => any;
        selectionLine?: number;
        selectionLineEnd?: number;
    };
    type InsertModeKey = InstanceType<Vim['InsertModeKey']>;
    export type InsertModeChanges = {
        changes: (InsertModeKey | string | [string, number?])[];
        expectCursorActivityForChange: boolean;
        visualBlock?: number;
        maybeReset?: boolean;
        ignoreCount?: number;
        repeatOverride?: number;
    };
    export type ExParams = {
        commandName: string;
        argString: string;
        input: string;
        args?: string[];
        line: number;
        lineEnd?: number;
        selectionLine: number;
        selectionLineEnd?: number;
        setCfg?: Object;
        callback?: () => void;
    };
    export type PromptOptions = {
        onClose?: Function;
        prefix: string | HTMLElement;
        desc?: string | HTMLElement;
        onKeyUp?: Function;
        onKeyDown: Function;
        value?: string;
        selectValueOnOpen?: boolean;
    };
    global {
        function isNaN(v: any): v is Exclude<typeof v, number>;
        interface String {
            trimStart(): string;
        }
    }
}
declare module 'cm_adapter' {
    import { EditorSelection, ChangeDesc } from '@codemirror/state';
    import { StringStream } from '@codemirror/language';
    import { EditorView, ViewUpdate } from '@codemirror/view';
    import { SearchQuery } from '@codemirror/search';
    import { vimState, CM5RangeInterface } from 'types';
    class Pos {
        line: number;
        ch: number;
        sticky?: string;
        constructor(line: number, ch: number);
    }
    function on(emitter: any, type: string, f: Function): void;
    function off(emitter: any, type: string, f: Function): void;
    function signal(emitter: any, type: string, ...args: any[]): void;
    interface Operation {
        $d: number;
        isVimOp?: boolean;
        cursorActivityHandlers?: Function[];
        cursorActivity?: boolean;
        lastChange?: any;
        change?: any;
        changeHandlers?: Function[];
        $changeStart?: number;
    }
    export class CodeMirror {
        static isMac: boolean;
        static Pos: typeof Pos;
        static StringStream: StringStream & {
            new (_: string): StringStream;
        };
        static commands: {
            cursorCharLeft: (cm: CodeMirror) => void;
            redo: (cm: CodeMirror) => void;
            undo: (cm: CodeMirror) => void;
            newlineAndIndent: (cm: CodeMirror) => void;
            indentAuto: (cm: CodeMirror) => void;
            newlineAndIndentContinueComment: any;
            save: any;
        };
        static isWordChar: (ch: string) => boolean;
        static keys: any;
        static addClass: (el: any, str: string) => void;
        static rmClass: (el: any, str: string) => void;
        static e_preventDefault: (e: Event) => void;
        static e_stop: (e: Event) => void;
        static lookupKey: (key: string, map: string, handle: Function) => void;
        static on: typeof on;
        static off: typeof off;
        static signal: typeof signal;
        openDialog(
            template: Element,
            callback: Function | undefined,
            options: any
        ): (newVal?: string) => void;
        openNotification(
            template: Node,
            options: NotificationOptions
        ): () => void;
        static findMatchingTag: typeof findMatchingTag;
        static findEnclosingTag: typeof findEnclosingTag;
        cm6: EditorView;
        state: {
            statusbar?: Element | null;
            dialog?: HTMLElement | null;
            vimPlugin?: any;
            vim?: vimState | null;
            currentNotificationClose?: Function | null;
            closeVimNotification?: Function | null;
            keyMap?: string;
            overwrite?: boolean;
            textwidth?: number;
        };
        marks: Record<string, Marker>;
        $mid: number;
        curOp: Operation | null | undefined;
        options: any;
        _handlers: any;
        constructor(cm6: EditorView);
        on(type: string, f: Function): void;
        off(type: string, f: Function): void;
        signal(type: string, e: any, handlers?: any): void;
        indexFromPos(pos: Pos): number;
        posFromIndex(offset: number): Pos;
        foldCode(pos: Pos): void;
        firstLine(): number;
        lastLine(): number;
        lineCount(): number;
        setCursor(line: number, ch: number): void;
        setCursor(line: Pos): void;
        getCursor(p?: 'head' | 'anchor' | 'start' | 'end'): Pos;
        listSelections(): {
            anchor: Pos;
            head: Pos;
        }[];
        setSelections(p: CM5RangeInterface[], primIndex?: number): void;
        setSelection(anchor: Pos, head: Pos, options?: any): void;
        getLine(row: number): string;
        getLineHandle(row: number): {
            row: number;
            index: number;
        };
        getLineNumber(handle: any): number | null;
        releaseLineHandles(): void;
        getRange(s: Pos, e: Pos): string;
        replaceRange(text: string, s: Pos, e?: Pos, source?: string): void;
        replaceSelection(text: string): void;
        replaceSelections(replacements: string[]): void;
        getSelection(): string;
        getSelections(): string[];
        somethingSelected(): boolean;
        getInputField(): HTMLElement;
        clipPos(p: Pos): Pos;
        getValue(): string;
        setValue(text: string): void;
        focus(): void;
        blur(): void;
        defaultTextHeight(): number;
        findMatchingBracket(
            pos: Pos,
            _options?: any
        ):
            | {
                  to: Pos;
              }
            | {
                  to: undefined;
              };
        scanForBracket(
            pos: Pos,
            dir: 1 | -1,
            style: any,
            config: any
        ):
            | false
            | {
                  pos: Pos;
                  ch: string;
              }
            | null;
        indentLine(line: number, more?: boolean): void;
        indentMore(): void;
        indentLess(): void;
        execCommand(name: string): void;
        setBookmark(
            cursor: Pos,
            options?: {
                insertLeft: boolean;
            }
        ): Marker;
        cm6Query?: SearchQuery;
        addOverlay({ query }: { query: RegExp }): SearchQuery | undefined;
        removeOverlay(overlay?: any): void;
        getSearchCursor(
            query: RegExp,
            pos: Pos
        ): {
            findNext: () => string[] | null | undefined;
            findPrevious: () => string[] | null | undefined;
            find: (back?: boolean) => string[] | null | undefined;
            from: () => Pos | undefined;
            to: () => Pos | undefined;
            replace: (text: string) => void;
            readonly match: string[] | null;
        };
        findPosV(
            start: Pos,
            amount: number,
            unit: 'page' | 'line',
            goalColumn?: number
        ): Pos & {
            hitSide?: boolean;
        };
        charCoords(
            pos: Pos,
            mode: 'div' | 'local'
        ): {
            left: number;
            top: number;
            bottom: number;
        };
        coordsChar(
            coords: {
                left: number;
                top: number;
            },
            mode: 'div' | 'local'
        ): Pos;
        getScrollInfo(): {
            left: number;
            top: number;
            height: number;
            width: number;
            clientHeight: number;
            clientWidth: number;
        };
        scrollTo(x?: number | null, y?: number | null): void;
        scrollIntoView(pos?: Pos, margin?: number): void;
        getWrapperElement(): HTMLElement;
        getMode(): {
            name: string | number | boolean | undefined;
        };
        setSize(w: number, h: number): void;
        refresh(): void;
        destroy(): void;
        getLastEditEnd(): Pos;
        $lastChangeEndOffset: number;
        $lineHandleChanges: undefined | ViewUpdate[];
        onChange(update: ViewUpdate): void;
        onSelectionChange(): void;
        operation<T>(fn: () => T, force?: boolean): T;
        onBeforeEndOperation(): void;
        moveH(increment: number, unit: string): void;
        setOption(name: string, val: any): void;
        getOption(name: 'firstLineNumber' | 'tabSize' | 'textwidth'): number;
        getOption(name: string): number | boolean | string | undefined;
        toggleOverwrite(on: boolean): void;
        getTokenTypeAt(pos: Pos): '' | 'string' | 'comment';
        overWriteSelection(text: string): void;
        /*** multiselect ****/
        isInMultiSelectMode(): boolean;
        virtualSelectionMode(): boolean;
        virtualSelection: Mutable<EditorSelection> | null;
        forEachSelection(command: Function): void;
        hardWrap(options: hardWrapOptions): number;
        showMatchesOnScrollbar?: Function;
        save?: Function;
        static keyName?: Function;
    }
    type Mutable<Type> = {
        -readonly [Key in keyof Type]: Type[Key];
    };
    interface NotificationOptions {
        bottom?: boolean;
        duration?: number;
    }
    function findMatchingTag(cm: CodeMirror, pos: Pos): null;
    function findEnclosingTag(
        cm: CodeMirror,
        pos: Pos
    ):
        | {
              open: {
                  from: Pos;
                  to: Pos;
              };
              close: {
                  from: Pos;
                  to: Pos;
              };
          }
        | undefined;
    class Marker {
        cm: CodeMirror;
        id: number;
        offset: number | null;
        assoc: number;
        constructor(cm: CodeMirror, offset: number, assoc: number);
        clear(): void;
        find(): Pos | null;
        update(change: ChangeDesc): void;
    }
    type hardWrapOptions = {
        from: number;
        to: number;
        column?: number;
        allowMerge?: boolean;
    };
}
declare module 'vim' {
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
    export function initVim(CM: typeof import('cm_adapter').CodeMirror): {
        enterVimMode: (cm: import('cm_adapter').CodeMirror) => void;
        leaveVimMode: (cm: import('cm_adapter').CodeMirror) => void;
        buildKeyMap: () => void;
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
        resetVimGlobalState_: () => void;
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
        maybeInitVimState_: (
            cm: import('cm_adapter').CodeMirror
        ) => import('types').vimState;
        suppressErrorLogging: boolean;
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
        map: (lhs: string, rhs: string, ctx: string) => void;
        unmap: (lhs: string, ctx: string) => any;
        noremap: (lhs: string, rhs: string, ctx: string) => void;
        mapclear: (ctx?: string | undefined) => void;
        langmap: (langmapString: any, remapCtrl: any) => void;
        vimKeyFromEvent: (
            e: KeyboardEvent,
            vim?: import('types').vimState | undefined
        ) => string | undefined;
        setOption: (
            name: string,
            value: any,
            cm?: import('types').CodeMirrorV | undefined,
            cfg?:
                | {
                      scope?: any;
                  }
                | undefined
        ) => Error | undefined;
        getOption: (
            name: string,
            cm?: import('types').CodeMirrorV | undefined,
            cfg?:
                | {
                      scope?: any;
                  }
                | undefined
        ) => any;
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
        defineEx: (
            name: string,
            prefix: string | undefined,
            func: import('types').ExFn
        ) => void;
        handleKey: (
            cm: import('cm_adapter').CodeMirror,
            key: string,
            origin: string
        ) => undefined | boolean;
        multiSelectHandleKey: (
            cm_: import('cm_adapter').CodeMirror,
            key: string,
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
        findKey: (
            cm_: import('cm_adapter').CodeMirror,
            key: string,
            origin?: string | undefined
        ) => (() => boolean | undefined) | undefined;
        handleEx: (cm: import('types').CodeMirrorV, input: string) => void;
        defineMotion: (name: string, fn: import('types').MotionFn) => void;
        defineAction: (name: string, fn: import('types').ActionFn) => void;
        defineOperator: (name: string, fn: import('types').OperatorFn) => void;
        mapCommand: (
            keys: string,
            type: string,
            name: string,
            args: any,
            extra: {
                [x: string]: any;
            }
        ) => void;
        _mapCommand: (command: import('types').vimKey) => void;
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
        exitVisualMode: (
            cm: import('types').CodeMirrorV,
            moveHead?: boolean | undefined
        ) => void;
        exitInsertMode: (
            cm: import('types').CodeMirrorV,
            keepCursor?: boolean | undefined
        ) => void;
    };
}
declare module 'index' {
    import { CodeMirror } from 'cm_adapter';
    import { Extension } from '@codemirror/state';
    import { EditorView } from '@codemirror/view';
    const Vim: {
        enterVimMode: (cm: CodeMirror) => void;
        leaveVimMode: (cm: CodeMirror) => void;
        buildKeyMap: () => void;
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
        resetVimGlobalState_: () => void;
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
                    cm: CodeMirror,
                    registerName: string
                ): void;
            };
            registerController: {
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
                pushText(
                    registerName: string | null | undefined,
                    operator: string,
                    text: string,
                    linewise?: boolean | undefined,
                    blockwise?: boolean | undefined
                ): void;
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
                isValidRegister(name: any): name is string;
                shiftNumericRegisters_(): void;
            };
            searchHistoryController: {
                historyBuffer: string[];
                iterator: number;
                initialPrefix: string | null;
                nextMatch(input: string, up: boolean): string | undefined;
                pushInput(input: string): void;
                reset(): void;
            };
            jumpList: ReturnType<
                () => {
                    cachedCursor: import('types').Pos | undefined;
                    add: (
                        cm: CodeMirror,
                        oldCur: import('types').Pos,
                        newCur: import('types').Pos
                    ) => void;
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
        maybeInitVimState_: (cm: CodeMirror) => import('types').vimState;
        suppressErrorLogging: boolean;
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
        map: (lhs: string, rhs: string, ctx: string) => void;
        unmap: (lhs: string, ctx: string) => any;
        noremap: (lhs: string, rhs: string, ctx: string) => void;
        mapclear: (ctx?: string | undefined) => void;
        langmap: (langmapString: any, remapCtrl: any) => void;
        vimKeyFromEvent: (
            e: KeyboardEvent,
            vim?: import('types').vimState | undefined
        ) => string | undefined;
        setOption: (
            name: string,
            value: any,
            cm?: import('types').CodeMirrorV | undefined,
            cfg?:
                | {
                      scope?: any;
                  }
                | undefined
        ) => Error | undefined;
        getOption: (
            name: string,
            cm?: import('types').CodeMirrorV | undefined,
            cfg?:
                | {
                      scope?: any;
                  }
                | undefined
        ) => any;
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
        defineEx: (
            name: string,
            prefix: string | undefined,
            func: import('types').ExFn
        ) => void;
        handleKey: (
            cm: CodeMirror,
            key: string,
            origin: string
        ) => undefined | boolean;
        multiSelectHandleKey: (
            cm_: CodeMirror,
            key: string,
            origin: string
        ) => boolean | undefined;
        findKey: (
            cm_: CodeMirror,
            key: string,
            origin?: string | undefined
        ) => (() => boolean | undefined) | undefined;
        handleEx: (cm: import('types').CodeMirrorV, input: string) => void;
        defineMotion: (name: string, fn: import('types').MotionFn) => void;
        defineAction: (name: string, fn: import('types').ActionFn) => void;
        defineOperator: (name: string, fn: import('types').OperatorFn) => void;
        mapCommand: (
            keys: string,
            type: string,
            name: string,
            args: any,
            extra: {
                [x: string]: any;
            }
        ) => void;
        _mapCommand: (command: import('types').vimKey) => void;
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
        exitVisualMode: (
            cm: import('types').CodeMirrorV,
            moveHead?: boolean | undefined
        ) => void;
        exitInsertMode: (
            cm: import('types').CodeMirrorV,
            keepCursor?: boolean | undefined
        ) => void;
    };
    export function vim(options?: { status?: boolean }): Extension;
    export { CodeMirror, Vim };
    export function getCM(view: EditorView): CodeMirror | null;
}
declare module 'block-cursor' {
    import { ViewUpdate, EditorView } from '@codemirror/view';
    import { CodeMirror } from 'index';
    type Measure = {
        cursors: Piece[];
    };
    class Piece {
        readonly left: number;
        readonly top: number;
        readonly height: number;
        readonly fontFamily: string;
        readonly fontSize: string;
        readonly fontWeight: string;
        readonly color: string;
        readonly className: string;
        readonly letter: string;
        readonly partial: boolean;
        constructor(
            left: number,
            top: number,
            height: number,
            fontFamily: string,
            fontSize: string,
            fontWeight: string,
            color: string,
            className: string,
            letter: string,
            partial: boolean
        );
        draw(): HTMLDivElement;
        adjust(elt: HTMLElement): void;
        eq(p: Piece): boolean;
    }
    export class BlockCursorPlugin {
        readonly view: EditorView;
        rangePieces: readonly Piece[];
        cursors: readonly Piece[];
        measureReq: {
            read: () => Measure;
            write: (value: Measure) => void;
        };
        cursorLayer: HTMLElement;
        cm: CodeMirror;
        constructor(view: EditorView, cm: CodeMirror);
        setBlinkRate(): void;
        update(update: ViewUpdate): void;
        scheduleRedraw(): void;
        readPos(): Measure;
        drawSel({ cursors }: Measure): void;
        destroy(): void;
    }
    export const hideNativeSelection: import('@codemirror/state').Extension;
}

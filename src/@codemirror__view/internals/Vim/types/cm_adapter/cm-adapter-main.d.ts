import type { SearchQuery } from '@codemirror/search';
import type { ChangeDesc, SelectionRange } from '@codemirror/state';
import type { EditorView, ViewUpdate } from '@codemirror/view';
import type { StringStream } from 'codemirror';
import type { EditorSelection } from 'obsidian';
import type { CM5RangeInterface } from '../types/CM5RangeInterface.js';
import type { vimState } from '../types/vimState.js';
import type { findMatchingTag } from './findMatchingTag.js';
import type { findEnclosingTag } from './findEnclosingTag.js';
import type { hardWrapOptions } from './hardWrapOptions.js';
import type { Pos } from './Pos.js';
import type { on } from './on.js';
import type { off } from './off.js';
import type { signal } from './signal.js';
import type { Operation } from './Operation.js';
import type { NotificationOptions } from './NotificationOptions.js';
import type { Mutable } from './Mutable.js';
import type { Marker } from './Marker.js';
import type { ScrollInfo } from '../../../ScrollInfo.js';

type LineHandle = {
    /** @todo Documentation incomplete. */
    row: number;
    /** @todo Documentation incomplete. */
    index: number;
};
type StringStreamClass = StringStream & {
    new (_: string): StringStream;
};
type Commands = {
    /** @todo Documentation incomplete. */
    cursorCharLeft: (cm: CodeMirror) => void;
    /** @todo Documentation incomplete. */
    redo: (cm: CodeMirror) => void;
    /** @todo Documentation incomplete. */
    undo: (cm: CodeMirror) => void;
    /** @todo Documentation incomplete. */
    newlineAndIndent: (cm: CodeMirror) => void;
    /** @todo Documentation incomplete. */
    indentAuto: (cm: CodeMirror) => void;
    /** @todo Documentation incomplete. */
    newlineAndIndentContinueComment: any;
    /** @todo Documentation incomplete. */
    save: any;
};
type CodeMirrorVimState = {
    /** @todo Documentation incomplete. */
    statusbar?: Element | null;
    /** @todo Documentation incomplete. */
    dialog?: HTMLElement | null;
    /** @todo Documentation incomplete. */
    vimPlugin?: any;
    /** @todo Documentation incomplete. */
    vim?: vimState | null;
    /** @todo Documentation incomplete. */
    currentNotificationClose?: Function | null;
    /** @todo Documentation incomplete. */
    closeVimNotification?: Function | null;
    /** @todo Documentation incomplete. */
    keyMap?: string;
    /** @todo Documentation incomplete. */
    overwrite?: boolean;
    /** @todo Documentation incomplete. */
    textwidth?: number;
};
export class CodeMirror {
    /** @todo Documentation incomplete. */
    static isMac: boolean;
    /** @todo Documentation incomplete. */
    static Pos: typeof Pos;
    /** @todo Documentation incomplete. */
    static StringStream: StringStreamClass;
    /** @todo Documentation incomplete. */
    static commands: Commands;
    /** @todo Documentation incomplete. */
    static isWordChar: (ch: string) => boolean;
    /** @todo Documentation incomplete. */
    static keys: any;
    /** @todo Documentation incomplete. */
    static addClass: (el: any, str: string) => void;
    /** @todo Documentation incomplete. */
    static rmClass: (el: any, str: string) => void;
    static e_preventDefault: (e: Event) => void;
    static e_stop: (e: Event) => void;
    /** @todo Documentation incomplete. */
    static lookupKey: (key: string, map: string, handle: Function) => void;
    /** @todo Documentation incomplete. */
    static on: typeof on;
    /** @todo Documentation incomplete. */
    static off: typeof off;
    /** @todo Documentation incomplete. */
    static signal: typeof signal;
    /** @todo Documentation incomplete. */
    openDialog(
        /** @todo Documentation incomplete. */
        template: Element,
        /** @todo Documentation incomplete. */
        callback: Function | undefined,
        /** @todo Documentation incomplete. */
        options: any
    ): (newVal?: string) => void;
    /** @todo Documentation incomplete. */
    openNotification(template: Node, options: NotificationOptions): () => void;
    static findMatchingTag: typeof findMatchingTag;
    static findEnclosingTag: typeof findEnclosingTag;
    cm6: EditorView;
    /** @todo Documentation incomplete. */
    state: CodeMirrorVimState;
    /** @todo Documentation incomplete. */
    marks: Record<string, Marker>;
    /** @todo Documentation incomplete. */
    $mid: number;
    /** @todo Documentation incomplete. */
    curOp: Operation | null | undefined;
    /** @todo Documentation incomplete. */
    options: any;
    _handlers: any;
    /** @todo Documentation incomplete. */
    constructor(cm6: EditorView);
    /** @todo Documentation incomplete. */
    on(type: string, f: Function): void;
    /** @todo Documentation incomplete. */
    off(type: string, f: Function): void;
    /** @todo Documentation incomplete. */
    signal(type: string, e: any, handlers?: any): void;
    /** @todo Documentation incomplete. */
    indexFromPos(pos: Pos): number;
    /** @todo Documentation incomplete. */
    posFromIndex(offset: number): Pos;
    /** @todo Documentation incomplete. */
    foldCode(pos: Pos): void;
    /** @todo Documentation incomplete. */
    firstLine(): number;
    /** @todo Documentation incomplete. */
    lastLine(): number;
    /** @todo Documentation incomplete. */
    lineCount(): number;
    /** @todo Documentation incomplete. */
    setCursor(line: number, ch: number): void;
    /** @todo Documentation incomplete. */
    setCursor(line: Pos): void;
    /** @todo Documentation incomplete. */
    getCursor(p?: 'head' | 'anchor' | 'start' | 'end'): Pos;
    listSelections(): CM5RangeInterface[];
    /** @todo Documentation incomplete. */
    setSelections(p: CM5RangeInterface[], primIndex?: number): void;
    /** @todo Documentation incomplete. */
    setSelection(anchor: Pos, head: Pos, options?: any): void;
    /** @todo Documentation incomplete. */
    getLine(row: number): string;
    getLineHandle(row: number): LineHandle;
    /** @todo Documentation incomplete. */
    getLineNumber(handle: any): number | null;
    /** @todo Documentation incomplete. */
    releaseLineHandles(): void;
    /** @todo Documentation incomplete. */
    getRange(s: Pos, e: Pos): string;
    /** @todo Documentation incomplete. */
    replaceRange(text: string, s: Pos, e?: Pos, source?: string): void;
    /** @todo Documentation incomplete. */
    replaceSelection(text: string): void;
    /** @todo Documentation incomplete. */
    replaceSelections(replacements: string[]): void;
    /** @todo Documentation incomplete. */
    getSelection(): string;
    /** @todo Documentation incomplete. */
    getSelections(): string[];
    /** @todo Documentation incomplete. */
    somethingSelected(): boolean;
    /** @todo Documentation incomplete. */
    getInputField(): HTMLElement;
    /** @todo Documentation incomplete. */
    clipPos(p: Pos): Pos;
    /** @todo Documentation incomplete. */
    getValue(): string;
    /** @todo Documentation incomplete. */
    setValue(text: string): void;
    /** @todo Documentation incomplete. */
    focus(): void;
    /** @todo Documentation incomplete. */
    blur(): void;
    /** @todo Documentation incomplete. */
    defaultTextHeight(): number;
    /** @todo Documentation incomplete. */
    findMatchingBracket(
        /** @todo Documentation incomplete. */
        pos: Pos,
        _options?: any
    ):
        | {
              /** @todo Documentation incomplete. */
              to: Pos;
          }
        | {
              /** @todo Documentation incomplete. */
              to: undefined;
          };
    /** @todo Documentation incomplete. */
    scanForBracket(
        /** @todo Documentation incomplete. */
        pos: Pos,
        /** @todo Documentation incomplete. */
        dir: 1 | -1,
        /** @todo Documentation incomplete. */
        style: any,
        /** @todo Documentation incomplete. */
        config: any
    ):
        | false
        | {
              /** @todo Documentation incomplete. */
              pos: Pos;
              /** @todo Documentation incomplete. */
              ch: string;
          }
        | null;
    /** @todo Documentation incomplete. */
    indentLine(line: number, more?: boolean): void;
    /** @todo Documentation incomplete. */
    indentMore(): void;
    /** @todo Documentation incomplete. */
    indentLess(): void;
    /** @todo Documentation incomplete. */
    execCommand(name: string): void;
    /** @todo Documentation incomplete. */
    setBookmark(
        /** @todo Documentation incomplete. */
        cursor: Pos,
        /** @todo Documentation incomplete. */
        options?: {
            /** @todo Documentation incomplete. */
            insertLeft: boolean;
        }
    ): Marker;
    cm6Query?: SearchQuery;
    /** @todo Documentation incomplete. */
    addOverlay({ query }: { query: RegExp }): SearchQuery | undefined;
    /** @todo Documentation incomplete. */
    removeOverlay(overlay?: any): void;
    /** @todo Documentation incomplete. */
    getSearchCursor(
        /** @todo Documentation incomplete. */
        query: RegExp,
        /** @todo Documentation incomplete. */
        pos: Pos
    ): {
        /** @todo Documentation incomplete. */
        findNext: () => string[] | null | undefined;
        /** @todo Documentation incomplete. */
        findPrevious: () => string[] | null | undefined;
        /** @todo Documentation incomplete. */
        find: (back?: boolean) => string[] | null | undefined;
        /** @todo Documentation incomplete. */
        from: () => Pos | undefined;
        /** @todo Documentation incomplete. */
        to: () => Pos | undefined;
        /** @todo Documentation incomplete. */
        replace: (text: string) => void;
        /** @todo Documentation incomplete. */
        readonly match: string[] | null;
    };
    /** @todo Documentation incomplete. */
    findPosV(
        /** @todo Documentation incomplete. */
        start: Pos,
        /** @todo Documentation incomplete. */
        amount: number,
        /** @todo Documentation incomplete. */
        unit: 'page' | 'line',
        /** @todo Documentation incomplete. */
        goalColumn?: number
    ): Pos & {
        /** @todo Documentation incomplete. */
        hitSide?: boolean;
    };
    /** @todo Documentation incomplete. */
    charCoords(
        /** @todo Documentation incomplete. */
        pos: Pos,
        /** @todo Documentation incomplete. */
        mode: 'div' | 'local'
    ): {
        /** @todo Documentation incomplete. */
        left: number;
        /** @todo Documentation incomplete. */
        top: number;
        /** @todo Documentation incomplete. */
        bottom: number;
    };
    /** @todo Documentation incomplete. */
    coordsChar(
        /** @todo Documentation incomplete. */
        coords: {
            /** @todo Documentation incomplete. */
            left: number;
            /** @todo Documentation incomplete. */
            top: number;
        },
        /** @todo Documentation incomplete. */
        mode: 'div' | 'local'
    ): Pos;
    getScrollInfo(): ScrollInfo;
    /** @todo Documentation incomplete. */
    scrollTo(x?: number | null, y?: number | null): void;
    /** @todo Documentation incomplete. */
    scrollIntoView(pos?: Pos, margin?: number): void;
    /** @todo Documentation incomplete. */
    getWrapperElement(): HTMLElement;
    getMode(): {
        /** @todo Documentation incomplete. */
        name: string | number | boolean | undefined;
    };
    /** @todo Documentation incomplete. */
    setSize(w: number, h: number): void;
    /** @todo Documentation incomplete. */
    refresh(): void;
    /** @todo Documentation incomplete. */
    destroy(): void;
    /** @todo Documentation incomplete. */
    getLastEditEnd(): Pos;
    /** @todo Documentation incomplete. */
    $lastChangeEndOffset: number;
    /** @todo Documentation incomplete. */
    $lineHandleChanges: undefined | ViewUpdate[];
    /** @todo Documentation incomplete. */
    onChange(update: ViewUpdate): void;
    /** @todo Documentation incomplete. */
    onSelectionChange(): void;
    operation<T>(fn: () => T, force?: boolean): T;
    /** @todo Documentation incomplete. */
    onBeforeEndOperation(): void;
    /** @todo Documentation incomplete. */
    moveH(increment: number, unit: string): void;
    /** @todo Documentation incomplete. */
    setOption(name: string, val: any): void;
    /** @todo Documentation incomplete. */
    getOption(name: 'firstLineNumber' | 'tabSize' | 'textwidth'): number;
    /** @todo Documentation incomplete. */
    getOption(name: string): number | boolean | string | undefined;
    /** @todo Documentation incomplete. */
    toggleOverwrite(on: boolean): void;
    /** @todo Documentation incomplete. */
    getTokenTypeAt(pos: Pos): '' | 'string' | 'comment';
    /** @todo Documentation incomplete. */
    overWriteSelection(text: string): void;
    /*** multiselect ****/
    /** @todo Documentation incomplete. */
    isInMultiSelectMode(): boolean;
    /** @todo Documentation incomplete. */
    virtualSelectionMode(): boolean;
    /** @todo Documentation incomplete. */
    virtualSelection: Mutable<EditorSelection> | null;
    /** @todo Documentation incomplete. */
    forEachSelection(command: Function): void;
    /** @todo Documentation incomplete. */
    hardWrap(options: hardWrapOptions): number;
    /** @todo Documentation incomplete. */
    showMatchesOnScrollbar?: Function;
    /** @todo Documentation incomplete. */
    save?: Function;
    static keyName?: Function;
}

// declare class Marker {
//     cm: CodeMirror;
//     id: number;
//     offset: number | null;
//     assoc: number;
//     constructor(cm: CodeMirror, offset: number, assoc: number);
//     clear(): void;
//     find(): Pos | null;
//     update(change: ChangeDesc): void;
// }

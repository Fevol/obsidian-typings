import type { Extension } from '@codemirror/state';
import { ViewUpdate, EditorView } from '@codemirror/view';
import type { CodeMirror } from '../cm_adapter/cm-adapter-main.js';
import type { Measure } from './Measure.js';
import type { Piece } from './Piece.js';
/** @todo Documentation incomplete. */
export class BlockCursorPlugin {
    /** @todo Documentation incomplete. */
    readonly view: EditorView;
    /** @todo Documentation incomplete. */
    rangePieces: readonly Piece[];
    /** @todo Documentation incomplete. */
    cursors: readonly Piece[];
    /** @todo Documentation incomplete. */
    measureReq: {
        /** @todo Documentation incomplete. */
        read: () => Measure;
        /** @todo Documentation incomplete. */
        write: (value: Measure) => void;
    };
    /** @todo Documentation incomplete. */
    cursorLayer: HTMLElement;
    /** @todo Documentation incomplete. */
    cm: CodeMirror;
    /** @todo Documentation incomplete. */
    constructor(view: EditorView, cm: CodeMirror);
    /** @todo Documentation incomplete. */
    setBlinkRate(): void;
    /** @todo Documentation incomplete. */
    update(update: ViewUpdate): void;
    /** @todo Documentation incomplete. */
    scheduleRedraw(): void;
    /** @todo Documentation incomplete. */
    readPos(): Measure;
    /** @todo Documentation incomplete. */
    drawSel({ cursors }: Measure): void;
    /** @todo Documentation incomplete. */
    destroy(): void;
}
// /** @todo Documentation incomplete. */
export const hideNativeSelection: Extension;

import type { ChangeDesc } from '@codemirror/state';
import type { CodeMirror } from './cm-adapter-main.d.ts';
import type { Pos } from './Pos.js';
/** @todo Documentation incomplete. */
export class Marker {
    /** @todo Documentation incomplete. */
    cm: CodeMirror;
    /** @todo Documentation incomplete. */
    id: number;
    /** @todo Documentation incomplete. */
    offset: number | null;
    /** @todo Documentation incomplete. */
    assoc: number;
    /** @todo Documentation incomplete. */
    constructor(cm: CodeMirror, offset: number, assoc: number);
    /** @todo Documentation incomplete. */
    clear(): void;
    /** @todo Documentation incomplete. */
    find(): Pos | null;
    /** @todo Documentation incomplete. */
    update(change: ChangeDesc): void;
}

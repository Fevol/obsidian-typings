import type { Pos } from './Pos.js';

/** @todo Documentation incomplete. */
export type OperatorArgs = {
    /** @todo Documentation incomplete. */
    repeat?: number;
    /** @todo Documentation incomplete. */
    forward?: boolean;
    /** @todo Documentation incomplete. */
    linewise?: boolean;
    /** @todo Documentation incomplete. */
    fullLine?: boolean;
    /** @todo Documentation incomplete. */
    registerName?: string | null;
    /** @todo Documentation incomplete. */
    indentRight?: boolean;
    /** @todo Documentation incomplete. */
    toLower?: boolean;
    /** @todo Documentation incomplete. */
    shouldMoveCursor?: boolean;
    /** @todo Documentation incomplete. */
    selectedCharacter?: string;
    /** @todo Documentation incomplete. */
    lastSel?: {
        /** @todo Documentation incomplete. */
        head: Pos;
        /** @todo Documentation incomplete. */
        anchor: Pos;
        /** @todo Documentation incomplete. */
        visualLine: boolean;
        /** @todo Documentation incomplete. */
        visualBlock: boolean;
    };
    /** @todo Documentation incomplete. */
    keepCursor?: boolean;
};

import type { Pos } from './Pos.js';

/** @todo Documentation incomplete. */
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
        /** @todo Documentation incomplete. */
        head: Pos;
        /** @todo Documentation incomplete. */
        anchor: Pos;
        /** @todo Documentation incomplete. */
        visualLine: boolean;
        /** @todo Documentation incomplete. */
        visualBlock: boolean;
    };
    keepCursor?: boolean;
};

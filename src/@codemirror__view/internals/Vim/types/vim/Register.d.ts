import type { InsertModeChanges } from '../types/InsertModeChanges.js';

export type Register = {
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

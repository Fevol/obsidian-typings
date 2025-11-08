import type { Pos } from './Pos.js';

/** @todo Documentation incomplete. */
export type ActionArgsPartial = {
    /** @todo Documentation incomplete. */
    repeat?: number;
    /** @todo Documentation incomplete. */
    forward?: boolean;
    /** @todo Documentation incomplete. */
    head?: Pos;
    /** @todo Documentation incomplete. */
    position?: string;
    /** @todo Documentation incomplete. */
    backtrack?: boolean;
    /** @todo Documentation incomplete. */
    increase?: boolean;
    /** @todo Documentation incomplete. */
    repeatIsExplicit?: boolean;
    /** @todo Documentation incomplete. */
    indentRight?: boolean;
    /** @todo Documentation incomplete. */
    selectedCharacter?: string;
    /** @todo Documentation incomplete. */
    after?: boolean;
    /** @todo Documentation incomplete. */
    matchIndent?: boolean;
    /** @todo Documentation incomplete. */
    registerName?: string;
    /** @todo Documentation incomplete. */
    isEdit?: boolean;
    /** @todo Documentation incomplete. */
    linewise?: boolean;
    /** @todo Documentation incomplete. */
    insertAt?: string;
    /** @todo Documentation incomplete. */
    blockwise?: boolean;
    /** @todo Documentation incomplete. */
    keepSpaces?: boolean;
    /** @todo Documentation incomplete. */
    replace?: boolean;
    /** @todo Documentation incomplete. */
    keepCursor?: boolean;
};

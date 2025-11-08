import type { Pos } from './Pos.js';

/** @todo Documentation incomplete. */
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

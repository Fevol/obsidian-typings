/** @todo Documentation incomplete. */
export interface Operation {
    /** @todo Documentation incomplete. */
    $d: number;
    /** @todo Documentation incomplete. */
    isVimOp?: boolean;
    /** @todo Documentation incomplete. */
    cursorActivityHandlers?: Function[];
    /** @todo Documentation incomplete. */
    cursorActivity?: boolean;
    /** @todo Documentation incomplete. */
    lastChange?: any;
    /** @todo Documentation incomplete. */
    change?: any;
    /** @todo Documentation incomplete. */
    changeHandlers?: Function[];
    /** @todo Documentation incomplete. */
    $changeStart?: number;
}

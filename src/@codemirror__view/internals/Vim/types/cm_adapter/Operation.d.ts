/** @todo Documentation incomplete. */
export interface Operation {
    /** @todo Documentation incomplete. */
    $d: number;
    isVimOp?: boolean;
    cursorActivityHandlers?: Function[];
    cursorActivity?: boolean;
    lastChange?: any;
    change?: any;
    changeHandlers?: Function[];
    $changeStart?: number;
}

export type InsertModeKey = new (keyName: string, e: KeyboardEvent) => {
    /** @todo Documentation incomplete. */
    keyName: string;
    /** @todo Documentation incomplete. */
    key: string;
    /** @todo Documentation incomplete. */
    ctrlKey: boolean;
    /** @todo Documentation incomplete. */
    altKey: boolean;
    /** @todo Documentation incomplete. */
    metaKey: boolean;
    /** @todo Documentation incomplete. */
    shiftKey: boolean;
};

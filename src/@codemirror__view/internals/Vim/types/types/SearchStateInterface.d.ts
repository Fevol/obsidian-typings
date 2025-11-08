/** @todo Documentation incomplete. */
export interface SearchStateInterface {
    /** @todo Documentation incomplete. */
    setReversed(reversed: boolean): void;
    /** @todo Documentation incomplete. */
    isReversed(): boolean | undefined;
    /** @todo Documentation incomplete. */
    getQuery(): RegExp;
    /** @todo Documentation incomplete. */
    setQuery(query: string | RegExp): void;
    /** @todo Documentation incomplete. */
    highlightTimeout: number | undefined;
    getOverlay(): {
        /** @todo Documentation incomplete. */
        query: RegExp;
    };
    /** @todo Documentation incomplete. */
    getScrollbarAnnotate(): any;
    /** @todo Documentation incomplete. */
    setScrollbarAnnotate(query: RegExp | null): void;
    /** @todo Documentation incomplete. */
    setOverlay(
        /** @todo Documentation incomplete. */
        overlay: {
            /** @todo Documentation incomplete. */
            query: RegExp;
        } | null
    ): void;
}

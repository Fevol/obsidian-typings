export type searchHistoryController = {
    /** @todo Documentation incomplete. */
    historyBuffer: string[];
    /** @todo Documentation incomplete. */
    iterator: number;
    /** @todo Documentation incomplete. */
    initialPrefix: string | null;
    /**
     * the input argument here acts a user entered prefix for a small time
     * until we start autocompletion in which case it is the autocompleted.
     */
    /** @todo Documentation incomplete. */
    nextMatch(input: string, up: boolean): string | undefined;
    /** @todo Documentation incomplete. */
    pushInput(input: string): void;
    /** @todo Documentation incomplete. */
    reset(): void;
};

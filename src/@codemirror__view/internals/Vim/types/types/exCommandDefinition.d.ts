/** @todo Documentation incomplete. */
export type exCommandDefinition = {
    /** @todo Documentation incomplete. */
    name: string;
    shortName?: string;
    possiblyAsync?: boolean;
    excludeFromCommandHistory?: boolean;
    argDelimiter?: string;
    type?: string;
    toKeys?: string;
    toInput?: string;
    user?: boolean;
    noremap?: boolean;
};

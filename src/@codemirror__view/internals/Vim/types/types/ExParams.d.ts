/** @todo Documentation incomplete. */
export type ExParams = {
    /** @todo Documentation incomplete. */
    commandName: string;
    /** @todo Documentation incomplete. */
    argString: string;
    /** @todo Documentation incomplete. */
    input: string;
    args?: string[];
    /** @todo Documentation incomplete. */
    line: number;
    lineEnd?: number;
    /** @todo Documentation incomplete. */
    selectionLine: number;
    selectionLineEnd?: number;
    setCfg?: Object;
    callback?: () => void;
};

type vimExCommandsParams = {
    args?: string[];
    input?: string;
    line?: number;
    setCfg?: {
        scope?: string;
    };
    argString?: string;
    lineEnd?: number;
    commandName?: string;
    callback?: () => any;
    selectionLine?: number;
    selectionLineEnd?: number;
};

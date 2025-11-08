import type { CodeMirror } from '../cm_adapter/cm-adapter-main.js';

/** @todo Documentation incomplete. */
export type optionCallback = (
    value?: string | undefined,
    cm?: CodeMirror
) => any;

import type { CodeMirror } from '../cm_adapter/cm-adapter-main.js';
import type { vimState } from './vimState.js';

/** @todo Documentation incomplete. */
export type CodeMirrorV = CodeMirror & {
    /** @todo Documentation incomplete. */
    state: {
        /** @todo Documentation incomplete. */
        vim: vimState;
    };
};

import type { CodeMirror } from '../cm_adapter/cm-adapter-main.js';
import type { Marker } from '../cm_adapter/Marker.js';
import type { Pos } from '../cm_adapter/Pos.js';

export type jumpList = {
    /** @todo Documentation incomplete. */
    cachedCursor: Pos | undefined;
    /** @todo Documentation incomplete. */
    add: (cm: CodeMirror, oldCur: Pos, newCur: Pos) => void;
    /** @todo Documentation incomplete. */
    find: (cm: CodeMirror, offset: number) => Pos | null | undefined;
    /** @todo Documentation incomplete. */
    move: (cm: CodeMirror, offset: number) => Marker | undefined;
};

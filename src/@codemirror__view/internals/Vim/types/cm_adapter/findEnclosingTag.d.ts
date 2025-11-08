import type { CodeMirror } from './cm-adapter-main.js';
import type { Pos } from './Pos.js';

/** @todo Documentation incomplete. */
export declare function findEnclosingTag(
    /** @todo Documentation incomplete. */
    cm: CodeMirror,
    /** @todo Documentation incomplete. */
    pos: Pos
):
    | {
          /** @todo Documentation incomplete. */
          open: {
              /** @todo Documentation incomplete. */
              from: Pos;
              /** @todo Documentation incomplete. */
              to: Pos;
          };
          /** @todo Documentation incomplete. */
          close: {
              /** @todo Documentation incomplete. */
              from: Pos;
              /** @todo Documentation incomplete. */
              to: Pos;
          };
      }
    | undefined;

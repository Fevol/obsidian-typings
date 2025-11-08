import type { Pos } from './Pos.js';

/** @todo Documentation incomplete. */
export interface CM5Range {
    /** @todo Documentation incomplete. */
    anchor: Pos;
    /** @todo Documentation incomplete. */
    head: Pos;
    /** @todo Documentation incomplete. */
    from(): Pos;
    /** @todo Documentation incomplete. */
    empty(): boolean;
}

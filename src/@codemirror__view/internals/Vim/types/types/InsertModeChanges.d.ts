import type { InsertModeKey } from './InsertModeKey.js';

/** @todo Documentation incomplete. */
export type InsertModeChanges = {
    /** @todo Documentation incomplete. */
    changes: (InsertModeKey | string | [string, number?])[];
    /** @todo Documentation incomplete. */
    expectCursorActivityForChange: boolean;
    /** @todo Documentation incomplete. */
    visualBlock?: number;
    /** @todo Documentation incomplete. */
    maybeReset?: boolean;
    /** @todo Documentation incomplete. */
    ignoreCount?: number;
    /** @todo Documentation incomplete. */
    repeatOverride?: number;
};

import type { InsertModeKey } from './InsertModeKey.js';

/** @todo Documentation incomplete. */
export type InsertModeChanges = {
    /** @todo Documentation incomplete. */
    changes: (InsertModeKey | string | [string, number?])[];
    /** @todo Documentation incomplete. */
    expectCursorActivityForChange: boolean;
    visualBlock?: number;
    maybeReset?: boolean;
    ignoreCount?: number;
    repeatOverride?: number;
};

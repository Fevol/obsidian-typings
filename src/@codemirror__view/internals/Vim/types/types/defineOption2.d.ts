import type { booleanOptionCallback } from './booleanOptionCallback.js';

/** @todo Documentation incomplete. */
export type defineOption2 = (
    /** @todo Documentation incomplete. */
    name: string,
    /** @todo Documentation incomplete. */
    defaultValue: boolean | undefined | null,
    /** @todo Documentation incomplete. */
    type: 'boolean',
    aliases?: string[] | undefined | null,
    callback?: booleanOptionCallback
) => void;

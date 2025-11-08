import type { booleanOptionCallback } from './booleanOptionCallback.js';

/** @todo Documentation incomplete. */
export type booleanOption = (
    /** @todo Documentation incomplete. */
    name: string,
    /** @todo Documentation incomplete. */
    defaultValue: boolean | undefined | null,
    /** @todo Documentation incomplete. */
    type: 'boolean',
    /** @todo Documentation incomplete. */
    aliases?: string[] | undefined | null,
    /** @todo Documentation incomplete. */
    callback?: booleanOptionCallback
) => void;

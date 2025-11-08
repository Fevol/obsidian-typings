import type { stringOptionCallback } from '../types/stringOptionCallback.js';

export type stringOption = (
    /** @todo Documentation incomplete. */
    name: string,
    /** @todo Documentation incomplete. */
    defaultValue: string | null | undefined,
    /** @todo Documentation incomplete. */
    type: 'string',
    aliases?: string[] | null | undefined,
    callback?: stringOptionCallback | undefined
) => void;

import type { numberOptionCallback } from '../types/numberOptionCallback.js';

export type numberOption = (
    /** @todo Documentation incomplete. */
    name: string,
    /** @todo Documentation incomplete. */
    defaultValue: number | null | undefined,
    /** @todo Documentation incomplete. */
    type: 'number',
    aliases?: string[] | null | undefined,
    callback?: numberOptionCallback | undefined
) => void;

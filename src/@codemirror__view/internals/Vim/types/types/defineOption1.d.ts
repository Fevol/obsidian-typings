import type { optionCallback } from './optionCallback.js';

/** @todo Documentation incomplete. */
export type defineOption1 = (
    /** @todo Documentation incomplete. */
    name: string,
    /** @todo Documentation incomplete. */
    defaultValue: unknown,
    /** @todo Documentation incomplete. */
    type: string,
    aliases?: string[] | undefined | null,
    callback?: optionCallback
) => void;

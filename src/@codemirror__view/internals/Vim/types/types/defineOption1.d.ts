import type { optionCallback } from './optionCallback.js';

/** @todo Documentation incomplete. */
export type defineOption1 = (
    /** @todo Documentation incomplete. */
    name: string,
    /** @todo Documentation incomplete. */
    defaultValue: unknown,
    /** @todo Documentation incomplete. */
    type: string,
    /** @todo Documentation incomplete. */
    aliases?: string[] | undefined | null,
    /** @todo Documentation incomplete. */
    callback?: optionCallback
) => void;

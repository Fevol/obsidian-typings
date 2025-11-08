import type { booleanOptionCallback } from './booleanOptionCallback.js';
import type { optionCallback } from './optionCallback.js';

/** @todo Documentation incomplete. */
export type vimOption =
    | {
          type?: string;
          defaultValue?: unknown;
          callback?: optionCallback;
          value?: unknown;
      }
    | {
          /** @todo Documentation incomplete. */
          type: 'boolean';
          defaultValue?: boolean | null | undefined;
          callback?: booleanOptionCallback;
          value?: boolean;
      };

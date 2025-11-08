import type { allCommands } from './allCommands.js';
import type { OperatorArgs } from './OperatorArgs.js';

/** @todo Documentation incomplete. */
export type operatorCommand = allCommands & {
    /** @todo Documentation incomplete. */
    type: 'operator';
    /** @todo Documentation incomplete. */
    operator: string;
    operatorArgs?: OperatorArgs;
};

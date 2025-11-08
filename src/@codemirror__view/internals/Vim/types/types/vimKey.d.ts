import type { actionCommand } from './actionCommand.js';
import type { exCommand } from './exCommand.js';
import type { idleCommand } from './idleCommand.js';
import type { keyToExCommand } from './keyToExCommand.js';
import type { keyToKeyCommand } from './keyToKeyCommand.js';
import type { motionCommand } from './motionCommand.js';
import type { operatorCommand } from './operatorCommand.js';
import type { operatorMotionCommand } from './operatorMotionCommand.js';
import type { searchCommand } from './searchCommand.js';

/** @todo Documentation incomplete. */
export type vimKey =
    | motionCommand
    | operatorCommand
    | actionCommand
    | searchCommand
    | operatorMotionCommand
    | idleCommand
    | exCommand
    | keyToExCommand
    | keyToKeyCommand;

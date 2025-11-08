import type { InsertModeChanges } from '../types/InsertModeChanges.js';
import type { Register } from './Register.js';

export type registerController = {
    /** @todo Documentation incomplete. */
    registers: {
        [x: string]: Register;
    };
    /** @todo Documentation incomplete. */
    unnamedRegister: Register;
    /** @todo Documentation incomplete. */
    pushText(
        /** @todo Documentation incomplete. */
        registerName: string | null | undefined,
        /** @todo Documentation incomplete. */
        operator: string,
        /** @todo Documentation incomplete. */
        text: string,
        linewise?: boolean,
        blockwise?: boolean
    ): void;
    /**
     * Gets the register named @name.  If one of @name doesn't already exist,
     * create it.  If @name is invalid, return the unnamedRegister.
     */
    getRegister(name?: string): Register;
    /** @todo Documentation incomplete. */
    isValidRegister(name: any): name is string;
    shiftNumericRegisters_(): void;
};

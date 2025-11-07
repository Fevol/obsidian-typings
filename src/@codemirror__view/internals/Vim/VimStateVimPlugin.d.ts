/**
 * @todo Documentation incomplete.
 * @public
 * @unofficial
 */
export interface VimStateVimPlugin {
    /**
     * @internal used to track last keydown event for handling dead keys from IME keyboards/ diacritic keyboards.
     */
    lastKeydown: string;
}

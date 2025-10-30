export {};

declare module 'obsidian' {
    /**
     * Toggle option.
     *
     * @since 1.10.0
     */
    interface ToggleOption extends BaseOption {
        /**
         * Default value.
         *
         * @official
         * @since 1.10.0
         */
        default?: boolean;

        /**
         * Type.
         *
         * @official
         * @since 1.10.0
         */
        type: 'toggle';
    }
}

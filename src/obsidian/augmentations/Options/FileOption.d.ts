export {};

declare module 'obsidian' {
    /**
     * A text input allowing selection of a file from in the vault.
     *
     * @since 1.10.2
     */
    export interface FileOption extends BaseOption {
        /**
         * The default value of the option.
         *
         * @official
         * @since 1.10.2
         */
        default?: string;

        /**
         * The placeholder of the option.
         *
         * @official
         * @since 1.10.2
         */
        placeholder?: string;

        /**
         * The type of the option.
         *
         * @official
         * @since 1.10.2
         */
        type: 'file';

        /**
         * Filter the files to be displayed in the file picker.
         *
         * @param file - The file to filter.
         * @returns `true` if the file should be displayed, `false` otherwise.
         * @official
         * @since 1.10.2
         */
        filter?(file: TFile): boolean;
    }
}

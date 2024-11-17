import type { LinkUpdateHandler } from '../internals/LinkUpdate/LinkUpdateHandler.js';
import type { LinkUpdaters } from '../internals/LinkUpdate/LinkUpdaters.js';
import type { PositionedReference } from '../internals/PositionedReference.js';
import type { PromisedQueue } from '../internals/PromisedQueue.js';

export {};

declare module 'obsidian' {
    interface FileManager {
        /**
         * Reference to App
         */
        app: App;
        /** @internal */
        fileParentCreatorByType: Record<string, (path: string) => TFolder>;
        /** @internal */
        inProgressUpdates: null | LinkUpdateHandler[];
        /** @internal */
        linkUpdaters: LinkUpdaters;
        /** @internal */
        updateQueue: PromisedQueue;
        /**
         * Reference to Vault
         */
        vault: Vault;

        canCreateFileWithExt(arg1: unknown): unknown;
        /**
         * Creates a new Markdown file in specified location and opens it in a new view
         *
         * @param path - Path to the file to create (missing folders will be created)
         * @param location - Where to open the view containing the new file
         */
        createAndOpenMarkdownFile(path: string, location: PaneType): Promise<void>;
        /**
         * Create a new file in the vault at specified location
         *
         * @param location - Location to create the file in, defaults to root
         * @param filename - Name of the file to create, defaults to 'Untitled' (incremented if file already
         *   exists)
         * @param extension - Extension of the file to create, defaults to 'md'
         * @param contents - Contents of the file to create, defaults to empty string
         */
        createNewFile(location: TFolder, filename: string, extension: string, contents: string): Promise<TFile>;
        /**
         * Creates a new untitled folder in the vault at specified location
         *
         * @param location - Location to create the folder in, defaults to root
         */
        createNewFolder(location: TFolder): Promise<TFolder>;
        /**
         * Creates a new Markdown file in the vault at specified location
         */
        createNewMarkdownFile(location: TFolder, filename: string, contents: string): Promise<TFile>;
        /**
         * Creates a new Markdown file based on linktext and path
         *
         * @param filename - Name of the file to create
         * @param path - Path to where the file should be created
         */
        createNewMarkdownFileFromLinktext(filename: string, path: string): Promise<TFile>;
        /**
         * Generate a Markdown link based on the user's preferences.
         * @param file - the file to link to.
         * @param sourcePath - where the link is stored in, used to compute relative links.
         * @param subpath - A subpath, starting with `#`, used for linking to headings or blocks.
         * @param alias - The display text if it's to be different than the file name. Pass empty string to use file name.
         */
        generateMarkdownLink(file: TFile, sourcePath: string, subpath?: string, alias?: string): string;
        /** @internal */
        getAllLinkResolutions(): unknown[];
        /**
         * Gets the folder that new markdown files should be saved to, based on the current settings
         *
         * @param path - The path of the current opened/focused file, used when the user wants new files to be
         *   created in the same folder as the current file
         */
        getMarkdownNewFileParent(path: string): TFolder;
        insertIntoFile(arg1: unknown, arg2: unknown, arg3: unknown): unknown;
        /**
         * Iterate over all links in the vault with callback
         *
         * @param callback - Callback to execute for each link
         */
        iterateAllRefs(callback: (path: string, link: PositionedReference) => void): void;
        /**
         * Merge two files
         *
         * @param file - File to merge to
         * @param otherFile - File to merge from
         * @param override - If not empty, will override the contents of the file with this string
         * @param atStart - Whether to insert text at the start or end of the file
         */
        mergeFile(file: TFile, otherFile: TFile, override: string, atStart: boolean): Promise<void>;
        /**
         * Prompt the user to delete a file
         */
        promptForDeletion(file: TFile): Promise<void>;
        promptForFileDeletion(arg1: unknown): Promise<unknown>;
        /**
         * Prompt the user to rename a file
         */
        promptForFileRename(file: TFile): Promise<void>;
        promptForFolderDeletion(arg1: unknown): Promise<unknown>;
        /**
         * @internal
         * Register an extension to be the parent for a specific file type
         */
        registerFileParentCreator(extension: string, location: TFolder): void;
        /**
         * Rename's a property for all notes currently that have the old key
         * @remark The current property type is maintained
         * @remark Is case sensitive, despite Obsidian *typically* ignoring case for property names
         */
        renameProperty(oldKey: string, newKey: string): Promise<void>;
        /**
         * @param linkUpdateHandler - Handler to execute for each updated link
         * @internal
         */
        runAsyncLinkUpdate(linkUpdateHandler: LinkUpdateHandler): Promise<void>;
        /**
         * @param path
         * @param data
         * @internal
         */
        storeTextFileBackup(path: string, data: string): void;
        /** @internal : Unregister extension as root input directory for file type */
        unregisterFileCreator(extension: string): void;
        /** @internal */
        updateAllLinks(links: unknown[]): Promise<void>;
        /** @internal */
        updateInternalLinks(data: unknown): unknown;
    }
}

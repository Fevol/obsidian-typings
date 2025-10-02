import type { CustomArrayDict } from '../internals/Collections/CustomArrayDict.d.ts';
import type { ItemQueue } from '../internals/Collections/ItemQueue.d.ts';
import type { FileCacheEntry } from '../internals/FileCacheEntry.d.ts';
import type { LinkSuggestion } from '../internals/LinkSuggestion.d.ts';
import type { MetadataCacheFileCacheRecord } from '../internals/MetadataCacheRecords/MetadataCacheFileCacheRecord.d.ts';
import type {
    MetadataCacheMetadataCacheRecord
} from '../internals/MetadataCacheRecords/MetadataCacheMetadataCacheRecord.d.ts';
import type { MetadataCacheWorkerMessage } from '../internals/MetadataCacheWorkerMessage.d.ts';
import type { PromisedQueue } from '../internals/PromisedQueue.d.ts';
import type { PropertyInfo } from '../internals/PropertyInfo.d.ts';

export {};

declare module 'obsidian' {
    /**
     * A cached metadata for a note.
     *
     * Linktext is any internal link that is composed of a path and a subpath, such as 'My note#Heading'
     * Linkpath (or path) is the path part of a linktext
     * Subpath is the heading/block ID part of a linktext.
     */
    interface MetadataCache extends Events {
        /**
         * Called by preload() which is in turn called by initialize()
         *
         * @unofficial
         */
        _preload: () => Promise<void>;

        /**
         * Reference to App.
         *
         * @unofficial
         */
        app: App;

        /**
         * @todo Documentation incomplete.
         * @unofficial
         */
        blockCache: BlockCache;

        /**
         * IndexedDB database
         *
         * @unofficial
         */
        db: IDBDatabase;

        /**
         * @todo Documentation incomplete.
         * @unofficial
         */
        didFinish: Debouncer<[], void>;

        /**
         * File contents cache
         *
         * @unofficial
         */
        fileCache: MetadataCacheFileCacheRecord;

        /**
         * Whether the cache is fully loaded
         *
         * @unofficial
         */
        initialized: boolean;

        /**
         * Amount of tasks currently in progress
         *
         * @unofficial
         */
        inProgressTaskCount: number;

        /**
         * @todo Documentation incomplete.
         * @unofficial
         */
        linkResolverQueue: ItemQueue<TFile | null> | null;

        /**
         * File hash to metadata cache entry mapping
         *
         * @unofficial
         */
        metadataCache: MetadataCacheMetadataCacheRecord;

        /**
         * Callbacks to execute on cache clean
         *
         * @unofficial
         */
        onCleanCacheCallbacks: (() => void)[];

        /**
         * @todo Documentation incomplete.
         * @unofficial
         */
        preload: () => Promise<void>;

        /**
         * @todo Documentation incomplete.
         * @unofficial
         */
        preloadPromise: Promise<void> | null;

        /**
         * Contains all resolved links. This object maps each source file's path to an object of destination file paths with the link count.
         * Source and destination paths are all vault absolute paths that comes from `TFile.path` and can be used with `Vault.getAbstractFileByPath(path)`.
         *
         * @official
         */
        resolvedLinks: Record<string, Record<string, number>>;

        /**
         * Mapping of filename to collection of files that share the same name
         *
         * @unofficial
         */
        uniqueFileLookup: CustomArrayDict<TFile>;

        /**
         * Contains all unresolved links. This object maps each source file to an object of unknown destinations with count.
         * Source paths are all vault absolute paths, similar to {@link resolvedLinks}.
         *
         * @official
         */
        unresolvedLinks: Record<string, Record<string, number>>;

        /**
         * @todo Documentation incomplete.
         * @unofficial
         */
        userIgnoreFilterCache: Record<string, boolean>;

        /**
         * @todo Documentation incomplete.
         * @unofficial
         */
        userIgnoreFilters: RegExp[] | null;

        /**
         * @todo Documentation incomplete.
         * @unofficial
         */
        userIgnoreFiltersString: string;

        /**
         * Reference to Vault.
         *
         * @unofficial
         */
        vault: Vault;

        /**
         * @todo Documentation incomplete.
         * @unofficial
         */
        worker: Worker;

        /**
         * @todo Documentation incomplete.
         * @unofficial
         */
        workerResolve: ((value: CachedMetadata | PromiseLike<CachedMetadata>) => void) | null;

        /**
         * @todo Documentation incomplete.
         * @unofficial
         */
        workQueue: PromisedQueue;

        /**
         * @todo Documentation incomplete.
         * @unofficial
         */
        _getLinkpathDest(origin: string, path: string): TFile[];

        /**
         * Clear all caches to null values
         *
         * @unofficial
         */
        cleanupDeletedCache(): void;

        /**
         * @todo Documentation incomplete.
         * @unofficial
         */
        clear(): Promise<void>;

        /**
         * Called by initialize()
         *
         * @unofficial
         */
        computeFileMetadataAsync(file: TFile): Promise<void>;

        /**
         * @todo Documentation incomplete.
         * @unofficial
         */
        computeMetadataAsync(arrayBuffer: ArrayBuffer): Promise<CachedMetadata | undefined>;

        /**
         * Remove all entries that contain deleted path
         *
         * @unofficial
         */
        deletePath(path: string): void;

        /**
         * Generates a linktext for a file.
         *
         * If file name is unique, use the filename.
         * If not unique, use full path.
         *
         * @param file - The file to generate a linktext for.
         * @param sourcePath - The source path to generate a linktext for.
         * @param omitMdExtension - Whether to omit the `.md` extension from the linktext.
         * @returns The linktext for the file.
         * @example
         * ```ts
         * const file = app.vault.getFileByPath('foo/bar.md');
         * console.log(app.metadataCache.fileToLinktext(file, 'baz/qux.md')); // 'bar' or 'foo/bar' depending on whether the file name is unique
         * ```
         * @official
         */
        fileToLinktext(file: TFile, sourcePath: string, omitMdExtension?: boolean): string;

        /**
         * Get all property infos of the vault.
         *
         * @unofficial
         */
        getAllPropertyInfos(): Record<string, PropertyInfo>;

        /**
         * Get all backlink information for a file.
         *
         * @unofficial
         */
        getBacklinksForFile(file: TFile): CustomArrayDict<Reference>;

        /**
         * Get the cached metadata for a path.
         *
         * @param path - The path to get the cached metadata for.
         * @returns The cached metadata for the path or `null` if the metadata for the path is not cached.
         * @example
         * ```ts
         * const cache = app.metadataCache.getCache('foo/bar.md');
         * ```
         * @official
         * @since 0.14.5
         */
        getCache(path: string): CachedMetadata | null;

        /**
         * Get paths of all files cached in the vault.
         *
         * @unofficial
         */
        getCachedFiles(): string[];

        /**
         * Get the cached metadata for a file.
         *
         * @param file - The file to get the cached metadata for.
         * @returns The cached metadata for the file or `null` if the metadata for the file is not cached.
         * @example
         * ```ts
         * const file = app.vault.getFileByPath('foo/bar.md');
         * const cache = app.metadataCache.getFileCache(file);
         * ```
         * @official
         * @since 0.9.21
         */
        getFileCache(file: TFile): CachedMetadata | null;

        /**
         * Get an entry from the file cache.
         *
         * @unofficial
         */
        getFileInfo(path: string): FileCacheEntry | undefined;

        /**
         * Get the best match for a linkpath.
         *
         * @param linkpath - The linkpath to get the best match for.
         * @param sourcePath - The source path to get the best match for.
         * @returns The best match for the linkpath or `null` if the linkpath is not found.
         * @example
         * ```ts
         * console.log(app.metadataCache.getFirstLinkpathDest('foo/bar', 'baz/qux.md'); // `TFile` with path: 'baz/foo/bar.md' or 'some/other/path/foo/bar.md'
         * ```
         * @official
         * @since 0.12.5
         */
        getFirstLinkpathDest(linkpath: string, sourcePath: string): TFile | null;

        /**
         * Get property values for frontmatter property key.
         *
         * @unofficial
         */
        getFrontmatterPropertyValuesForKey(key: string): string[];

        /**
         * Get destination of link path.
         *
         * @unofficial
         */
        getLinkpathDest(origin: string, path: string): TFile[];

        /**
         * Get all links within the vault per file.
         *
         * @unofficial
         */
        getLinks(): Record<string, Reference[]>;

        /**
         * Get all links (resolved or unresolved) in the vault.
         *
         * If the note has multiple aliases, it will be returned multiple times for each alias.
         *
         * @unofficial
         */
        getLinkSuggestions(): LinkSuggestion[];

        /**
         * Get all tags within the vault and their usage count.
         *
         * @unofficial
         */
        getTags(): Record<string, number>;

        /**
         * Initialize Database connection and load up caches
         *
         * @unofficial
         */
        initialize(): Promise<void>;

        /**
         * Check whether there are no cache tasks in progress
         *
         * @unofficial
         */
        isCacheClean(): boolean;

        /**
         * Check whether file can support metadata (by checking extension support)
         *
         * @unofficial
         */
        isSupportedFile(file: TFile): boolean;

        /**
         * Check whether string is part of the user ignore filters
         *
         * @unofficial
         */
        isUserIgnored(path: string): boolean;

        /**
         * Iterate over all link references in the vault with callback.
         *
         * @unofficial
         */
        iterateReferences(callback: (path: string) => void): void;

        /**
         * @todo Documentation incomplete.
         * @unofficial
         */
        linkResolver(): void;

        /**
         * Called when a file has been indexed, and its (updated) cache is now available.
         *
         * @param name - Should be `'changed'`.
         * @param callback - The callback function.
         * @param ctx - The context passed as `this` to the `callback` function.
         * @returns The event reference.
         * @example
         * ```ts
         * app.metadataCache.on('changed', (file, data, cache) => {
         *     console.log(file, data, cache);
         * });
         * ```
         *
         * Note: This is not called when a file is renamed for performance reasons.
         * You must hook the {@link Vault.on | Vault.on(name: 'rename')} event for those.
         * @official
         */
        on(name: 'changed', callback: (file: TFile, data: string, cache: CachedMetadata) => any, ctx?: any): EventRef;

        /**
         * Called when a file has been deleted. A best-effort previous version of the cached metadata is presented,.
         * but it could be `null` in case the file was not successfully cached previously.
         *
         * @param name - Should be `'deleted'`.
         * @param callback - The callback function.
         * @param ctx - The context passed as `this` to the `callback` function.
         * @returns The event reference.
         * @example
         * ```ts
         * app.metadataCache.on('deleted', (file, prevCache) => {
         *     console.log(file, prevCache);
         * });
         * ```
         * @official
         */
        on(name: 'deleted', callback: (file: TFile, prevCache: CachedMetadata | null) => any, ctx?: any): EventRef;

        /**
         * Called whenever the metadatacache has finished updating.
         *
         * @unofficial
         */
        on(name: 'finished', callback: () => void): EventRef;

        /**
         * Called whenever the metadatacache is fully loaded in.
         *
         * @remark 'finished' is also emitted when the cache is initialized.
         * @unofficial
         */
        on(name: 'initialized', callback: () => void): EventRef;

        /**
         * Called when a file has been resolved for {@link resolvedLinks} and {@link unresolvedLinks | unresolvedLinks}.
         * This happens sometimes after a file has been indexed.
         *
         * @param name - Should be `'resolve'`.
         * @param callback - The callback function.
         * @param ctx - The context passed as `this` to the `callback` function.
         * @returns The event reference.
         * @example
         * ```ts
         * app.metadataCache.on('resolve', (file) => {
         *     console.log(file);
         * });
         * ```
         * @official
         */
        on(name: 'resolve', callback: (file: TFile) => any, ctx?: any): EventRef;

        /**
         * Called when all files has been resolved. This will be fired each time files get modified after the initial load.
         *
         * @param name - Should be `'resolved'`.
         * @param callback - The callback function.
         * @param ctx - The context passed as `this` to the `callback` function.
         * @returns The event reference.
         * @example
         * ```ts
         * app.metadataCache.on('resolved', () => {
         *     console.log('All files have been resolved');
         * });
         * ```
         * @official
         */
        on(name: 'resolved', callback: () => any, ctx?: any): EventRef;

        /**
         * Execute onCleanCache callbacks if cache is clean
         *
         * @unofficial
         * @unofficial
         */
        onCleanCache(onCleanCacheCallback: () => void): void;

        /**
         * On creation of the cache: update metadata cache
         *
         * @unofficial
         */
        onCreate(file: TAbstractFile): void;

        /**
         * On creation or modification of the cache: update metadata cache
         *
         * @unofficial
         */
        onCreateOrModify(file: TAbstractFile): void;

        /**
         * On deletion of the cache: update metadata cache
         *
         * @unofficial
         */
        onDelete(file: TAbstractFile): void;

        /**
         * @todo Documentation incomplete.
         * @unofficial
         */
        onReceiveMessageFromWorker(message: MetadataCacheWorkerMessage): void;

        /**
         * On rename of the cache: update metadata cache
         *
         * @unofficial
         */
        onRename(file: TAbstractFile, oldPath: string): void;

        /**
         * Check editor for unresolved links and mark these as unresolved
         *
         * @unofficial
         */
        resolveLinks(path: string): void;

        /**
         * Update file cache entry and sync to indexedDB
         *
         * @unofficial
         */
        saveFileCache(path: string, entry: FileCacheEntry): void;

        /**
         * Update metadata cache entry and sync to indexedDB
         *
         * @unofficial
         */
        saveMetaCache(hash: string, entry: CachedMetadata): void;

        /**
         * Show a notice that the cache is being rebuilt
         *
         * @unofficial
         */
        showIndexingNotice(): void;

        /**
         * Re-resolve all links for changed path
         *
         * @unofficial
         */
        updateRelatedLinks(path: string): void;

        /**
         * Update user ignore filters from settings
         *
         * @unofficial
         */
        updateUserIgnoreFilters(): void;

        /**
         * Bind actions to listeners on vault
         *
         * @unofficial
         */
        watchVaultChanges(): void;

        /**
         * Send message to worker to update metadata cache
         *
         * @unofficial
         */
        work(arrayBuffer: ArrayBuffer): Promise<CachedMetadata>;
    }
}

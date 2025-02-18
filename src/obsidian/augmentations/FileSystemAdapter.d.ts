import type { IpcRenderer } from 'electron';
import * as fs from 'node:fs';
import * as fsPromises from 'node:fs/promises';
import * as path from 'node:path';
import type { DataAdapterWatchersRecord } from '../internals/DataAdapterRecords/DataAdapterWatchersRecord.d.ts';

export {};

declare module 'obsidian' {
    interface FileSystemAdapter extends DataAdapter {
        /** @internal */
        btime: { btime(path: string, btime: number): void };
        /**
         * Reference to node fs module
         */
        fs: typeof fs;
        /**
         * Reference to node fs:promises module
         */
        fsPromises: typeof fsPromises;
        /**
         * Reference to electron ipcRenderer module
         */
        ipcRenderer?: IpcRenderer;
        /**
         * Reference to node path module
         */
        path: typeof path;
        /**
         * Reference to node URL module
         */
        url: URL;
        /** @internal */
        watcher: unknown;
        /** @internal */
        watchers: DataAdapterWatchersRecord;

        /**
         * @param normalizedPath Path to file
         * @param options Data write options
         * @internal Apply data write options to file
         */
        applyWriteOptions(normalizedPath: string, options: DataWriteOptions): Promise<void>;
        /**
         * Get base path of vault (OS path)
         */
        getBasePath(): string;
        /**
         * Get full path of file (OS path)
         *
         * @param normalizedPath Path to file
         * @returns URL path to file
         */
        getFilePath(normalizedPath: string): string;
        /** @internal Kill file system action due to timeout */
        kill(): void;
        /** @internal */
        killLastAction(): void;
        /** @internal Generates `this.files` from the file system */
        listAll(): Promise<void>;
        /** @internal */
        reconcileFileInternal(normalizedPath: string, normalizedNewPath: string): Promise<void>;
        /** @internal */
        startWatchpath(normalizedPath: string): Promise<void>;
        /** @internal Remove listener on specific path */
        stopWatchPath(normalizedPath: string): void;
        /** @internal */
        thingsHappening(): void;
        /** @internal Watch recursively for changes */
        watchHiddenRecursive(normalizedPath: string): Promise<void>;
    }
}

import type { TAbstractFile } from "obsidian";

/** @public */
export interface Draggable {
    source?: unknown;
    type: string;
    icon: string;
    title: string;
    file?: TAbstractFile;
    files?: TAbstractFile[];
    linktext?: string;
    sourcePath?: string;
}

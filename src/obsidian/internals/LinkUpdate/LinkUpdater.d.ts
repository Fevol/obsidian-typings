import type {
    ReferenceCache,
    TFile
} from "obsidian";
import type { LinkChangeUpdate } from "./LinkChangeUpdate.js";

export interface LinkUpdater {
    applyUpdates(file: TFile, updates: LinkChangeUpdate[]): Promise<void>;
    iterateReferences(callback: (path: string, reference: ReferenceCache) => void): void;
    renameSubpath(file: TFile, oldSubpath: string, newSubpath: string): Promise<void>;
}

import type { TextFileView } from "obsidian";

/** @todo Documentation incomplete */
/** @public */
export class CanvasView extends TextFileView {
	/**
     * Get the current view type
     */
    getViewType(): string | "canvas";
    /**
     * Loads the local data of the canvas
     */
    getLocalData(): unknown;
    /**
     * Saves the local data of the canvas
     */
    saveLocalData(): void;
	// Documentation allready done just here because of abstaract class implementation
	getViewData(): string;
	// Documentation allready done just here because of abstaract class implementation
	setViewData(data: string, clear: boolean): void;
	// Documentation allready done just here because of abstaract class implementation
	clear(): void;
}

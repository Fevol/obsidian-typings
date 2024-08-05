import type { ItemView } from "obsidian";

/** @todo Documentation incomplete */
/** @public */
export class BrowserHistoryView extends ItemView {
    /**
     * Get the current view type
     */
    getViewType(): string | "browser-history";
    /** @todo Documentation incomplete */
    update(): Promise<unknown>;
	/** @todo Documentation incomplete */
	getDisplayText(): string;
}

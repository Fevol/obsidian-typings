import type { ItemView } from "obsidian";

/** @public */
export class EmptyView extends ItemView {
    /**
     * Get the current view type
     */
    getViewType(): string | "empty";
	/** @todo Documentation incomplete */
	getDisplayText(): string;
}

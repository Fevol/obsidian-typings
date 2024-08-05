import type { ItemView } from "obsidian";

/** @todo Documentation incomplete */
/** @public */
export class GraphView extends ItemView {
    dataEngine: unknown;
    /**
     * Get the current view type
     */
    getViewType(): string | "graph";
    /**
     * Renders the graph
     */
    update(): void;
    /**
     * Updates the options from the plugin when changed in view
     */
    onOptionsChange(): void;
	/** @todo Documentation incomplete */
	getDisplayText(): string;
}

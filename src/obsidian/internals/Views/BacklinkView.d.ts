import type { InfoFileView } from "./InfoFileView.js";

/** @todo Documentation incomplete */
/** @public */
export interface BacklinkView extends InfoFileView {
    /**
     * Get the current view type
     */
    getViewType(): string | "backlink";
    /**
     * Shows the search
     */
    showSearch(): void;
    /** @todo Documentation incomplete */
    update(): void;
}

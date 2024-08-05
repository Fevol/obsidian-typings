import type { InfoFileView } from "./InfoFileView.js";

/** @todo Documentation incomplete */
/** @public */
export class OutgoingLinkView extends InfoFileView {
    /**
     * Get the current view type
     */
    getViewType(): string | "outgoing-link";
    /** @todo Documentation incomplete */
    update(): void;
}

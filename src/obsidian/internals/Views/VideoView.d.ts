import type { EditableFileView } from "obsidian";

/** @public */
export class VideoView extends EditableFileView {
    /**
     * Get the current view type
     */
    getViewType(): string | "video";
}

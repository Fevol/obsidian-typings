import type { EditableFileView } from "obsidian";

/** @public */
export class ImageView extends EditableFileView {
    /**
     * Get the current view type
     */
    getViewType(): string | "image";
}

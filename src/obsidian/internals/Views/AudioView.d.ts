import type { EditableFileView } from "obsidian";

/** @public */
export class AudioView extends EditableFileView {
    /**
     * Get the current view type
     */
    getViewType(): string | "audio";
}

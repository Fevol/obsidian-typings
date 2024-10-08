import type { View } from 'obsidian';

/** @todo Documentation incomplete */
/** @public */
export interface TagView extends View {
    /** @todo Documentation incomplete */
    getNodeId(e: unknown): unknown;
    /**
     * Get the current view type
     */
    getViewType(): 'tag';
    /** @todo Documentation incomplete */
    isItem(item: unknown): boolean;
    /** @todo Documentation incomplete */
    onKeyEnterInFocus(event: KeyboardEvent): void;
    /** @todo Documentation incomplete */
    setIsAllCollapsed(e: unknown): void;
    /** @todo Documentation incomplete */
    setUseHierarchy(e: unknown): void;
    /**
     * Reloads all tags from vault, update all items and sort those
     */
    updateTags(): void;
}

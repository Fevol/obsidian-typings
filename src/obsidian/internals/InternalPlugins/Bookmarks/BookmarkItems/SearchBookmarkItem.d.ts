import type { BookmarkItem } from './BookmarkItem.d.ts';

/** @public */
export interface SearchBookmarkItem extends BookmarkItem {
    query: string;
    type: 'search';
}

import type {
    App,
    WorkspaceLeaf
} from 'obsidian';
import type { BookmarksPluginInstance } from '../../../internals/InternalPlugins/Bookmarks/BookmarksPluginInstance.js';
import type { BookmarksView } from '../../../internals/InternalPlugins/Bookmarks/BookmarksView.js';
import { ViewType } from '../../Constants/ViewType.ts';
import { getViewConstructorByViewType } from './getViewConstructorByViewType.ts';

/**
 * Get the BookmarksView constructor.
 *
 * @returns The BookmarksView constructor.
 * @public
 */
export function getBookmarksViewConstructor(app: App): BookmarksViewConstructor {
    return getViewConstructorByViewType(app, ViewType.Bookmarks) as BookmarksViewConstructor;
}

/**
 * A constructor for a bookmarks view.
 *
 * @public
 */
type BookmarksViewConstructor = new(
    leaf: WorkspaceLeaf,
    bookmarksPluginInstance: BookmarksPluginInstance
) => BookmarksView;
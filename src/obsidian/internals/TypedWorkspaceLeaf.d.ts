import type {
    View,
    WorkspaceLeaf
} from 'obsidian';
import type { MaybeDeferredView } from './Views/MaybeDeferredView.d.ts';

/** @public */
export interface TypedWorkspaceLeaf<TView extends View> extends WorkspaceLeaf {
    view: MaybeDeferredView<TView>;
}

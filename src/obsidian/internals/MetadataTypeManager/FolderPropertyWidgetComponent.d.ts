import type { PropertyWidgetComponentBase } from './PropertyWidgetComponentBase.d.ts';

/**
 * @todo Documentation incomplete.
 * @public
 * @unofficial
 */
export interface FolderPropertyWidgetComponent extends PropertyWidgetComponentBase {
    /** @todo Documentation incomplete. */
    inputEl: HTMLInputElement;

    /** @todo Documentation incomplete. */
    type: 'folder';

    /** @todo Documentation incomplete. */
    setValue(value: string | null): void;
}

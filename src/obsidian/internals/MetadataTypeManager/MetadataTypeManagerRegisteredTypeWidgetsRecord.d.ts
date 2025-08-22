import type { PropertyWidget } from '../PropertyWidget.d.ts';
import type { PropertyWidgetType } from '../PropertyWidgetType.d.ts';

/**
 * @todo Documentation incomplete.
 * @public
 * @unofficial
 */
export interface MetadataTypeManagerRegisteredTypeWidgetsRecord
    extends Record<PropertyWidgetType, PropertyWidget> {
    /** @todo Documentation incomplete. */
    aliases: PropertyWidget;

    /** @todo Documentation incomplete. */
    checkbox: PropertyWidget;

    /** @todo Documentation incomplete. */
    date: PropertyWidget;

    /** @todo Documentation incomplete. */
    datetime: PropertyWidget;

    /** @todo Documentation incomplete. */
    file: PropertyWidget;

    /** @todo Documentation incomplete. */
    folder: PropertyWidget;

    /** @todo Documentation incomplete. */
    multitext: PropertyWidget;

    /** @todo Documentation incomplete. */
    number: PropertyWidget;

    /** @todo Documentation incomplete. */
    property: PropertyWidget;

    /** @todo Documentation incomplete. */
    tags: PropertyWidget;

    /** @todo Documentation incomplete. */
    text: PropertyWidget;
}

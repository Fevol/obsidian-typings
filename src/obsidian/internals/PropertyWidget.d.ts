import type { Component } from 'obsidian';
import type { PropertyEntryData } from './PropertyEntryData.d.ts';
import type { PropertyRenderContext } from './PropertyRenderContext.d.ts';

// @todo come up with better names
interface PropertyWidgetGrandParent {
    focus(): void;
}
interface PropertyWidgetRenderedParent extends PropertyWidgetGrandParent {
    onFocus(): void;
    setValue(value: unknown): void;
}
export interface PropertyWidgetRendered extends PropertyWidgetRenderedParent {
    containerEl: HTMLElement;
    type: string;
}

/**
 * @todo Documentation incomplete.
 * @public
 * @unofficial
 */
export interface PropertyWidget {
    /**
     * Lucide-dev icon associated with the widget.
     */
    icon: string;

    /**
     * Reserved keys for the widget.
     */
    reservedKeys?: string[];

    /**
     * Identifier for the widget.
     */
    type: string;

    /**
     * Returns the I18N name of the widget.
     */
    name(): string;

    /**
     * Render function for the widget on field container given context and data.
     */
    render(
        containerEl: HTMLElement,
        data: unknown,
        context: PropertyRenderContext
    ): PropertyWidgetRendered;

    /**
     * Validate whether the input value to the widget is correct.
     */
    validate(value: unknown): boolean;
}

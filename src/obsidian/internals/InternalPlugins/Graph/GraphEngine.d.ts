import type { App } from 'obsidian';
import type { GraphColorGroup } from './GraphColorGroup.js';
import type { GraphPluginInstanceOptions } from './GraphPluginInstanceOptions.js';
import type { GraphRenderer } from './GraphRenderer.js';
import type { GraphView } from './GraphView.js';
import type { LocalGraphView } from './LocalGraphView.js';
import type { GraphColorGroupOptions } from './Options/GraphColorGroupOptions.js';
import type { GraphDisplayOptions } from './Options/GraphDisplayOptions.js';
import type { GraphFilterOptions } from './Options/GraphFilterOptions.js';
import type { GraphForceOptions } from './Options/GraphForceOptions.js';

/** @public */
export interface GraphEngine {
    /** @internal */
    app: App;
    /** @internal */
    colorGroupOptions: GraphColorGroupOptions;
    /** @internal */
    controlsEl: HTMLDivElement;
    /** @internal */
    currentFocusFile: string;
    /** @internal */
    displayOptions: GraphDisplayOptions;
    /** @internal */
    fileFilter: unknown;
    /** @internal */
    filterOptions: GraphFilterOptions;
    /** @internal */
    forceOptions: GraphForceOptions;
    /** @internal */
    hasFilter: boolean;
    /** @internal */
    hoverPopover: unknown;
    /** @internal */
    lastHoverLink: unknown;
    /** @internal */
    options: GraphPluginInstanceOptions;
    /** @internal */
    progression: number;
    /** @internal */
    progressionSpeed: number;
    /** @internal */
    renderer: GraphRenderer;
    /** @internal */
    searchQueries: GraphColorGroup[];
    /** @internal */
    view: LocalGraphView | GraphView;

    /**
     * Gets the engine options
     * @internal
     */
    getOptions(): GraphPluginInstanceOptions;
    /**
     * Sets the engine options
     * @param options - New options. Undefined elements will not be considered.
     * @internal
     */
    setOptions(options: GraphPluginInstanceOptions | undefined): void;
    /**
     * Updates the engine after the search filter has changed
     * @internal
     */
    updateSearch(): void;
}

import type {
    App,
    Menu,
    TAbstractFile,
    WorkspaceLeaf
} from 'obsidian';
import type { InternalPluginInstance } from '../InternalPluginInstance.js';
import type { GraphPlugin } from './GraphPlugin.js';
import type { GraphPluginInstanceOptions } from './GraphPluginInstanceOptions.js';

/** @public */
export interface GraphPluginInstance extends InternalPluginInstance<GraphPlugin> {
    app: App;
    defaultOn: true;
    /** @internal */
    options: GraphPluginInstanceOptions;
    plugin: GraphPlugin;

    onExternalSettingsChange(): Promise<void>;
    onFileMenu(menu: Menu, file: TAbstractFile, source: string, leaf?: WorkspaceLeaf): void;
    openGraphView(newLeaf: boolean): void;
    openLocalGraph(checking: boolean): true | undefined;
    /**
     * Saves the options in graph.json
     * @internal
     */
    saveOptions(): void;
}

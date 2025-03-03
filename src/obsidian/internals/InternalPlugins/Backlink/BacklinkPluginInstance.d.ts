import type {
    App,
    Menu,
    TAbstractFile,
    TFile,
    WorkspaceLeaf
} from 'obsidian';
import type { InternalPluginInstance } from '../InternalPluginInstance.d.ts';
import type { BacklinkPlugin } from './BacklinkPlugin.d.ts';
import type { BacklinkPluginInstanceOptions } from './BacklinkPluginInstanceOptions.d.ts';

/** @public */
export interface BacklinkPluginInstance extends InternalPluginInstance<BacklinkPlugin> {
    app: App;
    defaultOn: true;
    file?: TFile | null;
    options: BacklinkPluginInstanceOptions;
    plugin: BacklinkPlugin;

    initLeaf(): void;
    onEnable(app: App, plugin: BacklinkPlugin): Promise<void>;
    onExternalSettingsChange(): Promise<void>;
    onFileMenu(menu: Menu, file: TAbstractFile, source: string, leaf?: WorkspaceLeaf): void;
    onFileOpen(file: TAbstractFile): void;
    onUserDisable(app: App): void;
    onUserEnable(): void;
    openBacklinksForActiveFile(skipSplit: boolean): boolean | undefined;
    toggleBacklinksInDocument(skip: boolean): boolean | undefined;
    updateBacklinks(): void;
}

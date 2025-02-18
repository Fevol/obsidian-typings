import type { App } from 'obsidian';
import type { InternalPluginInstance } from '../InternalPluginInstance.d.ts';
import type { MarkdownImporterPlugin } from './MarkdownImporterPlugin.d.ts';

/** @public */
export interface MarkdownImporterPluginInstance extends InternalPluginInstance<MarkdownImporterPlugin> {
    app: App;
}

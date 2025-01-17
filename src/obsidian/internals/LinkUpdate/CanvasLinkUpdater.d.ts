import type { App } from 'obsidian';
import type { CanvasPluginInstance } from '../InternalPlugins/Canvas/CanvasPluginInstance.js';
import type { LinkUpdater } from './LinkUpdater.js';

/** @public */
export interface CanvasLinkUpdater extends LinkUpdater {
    app: App;
    canvas: CanvasPluginInstance;
}

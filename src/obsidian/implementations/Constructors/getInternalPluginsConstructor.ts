import type { App } from 'obsidian';
import type { InternalPlugins } from '../../internals/InternalPlugins/InternalPlugins.js';

type InternalPluginsConstructor = new(app: App) => InternalPlugins;

/**
 * Get the InternalPlugins constructor.
 *
 * @param app - The app instance.
 * @returns The InternalPlugins constructor.
 * @public
 */
export function getInternalPluginsConstructor(app: App): InternalPluginsConstructor {
    return app.internalPlugins.constructor as InternalPluginsConstructor;
}
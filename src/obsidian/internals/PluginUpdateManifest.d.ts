import type { PluginManifest } from 'obsidian';

/** @public */
export interface PluginUpdateManifest {
    /**
     * Manifest of the plugin
     */
    manifest: PluginManifest;
    /**
     * Repository of the plugin
     */
    repo: string;
    /**
     * New version of the plugin
     */
    version: string;
}

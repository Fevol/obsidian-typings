import {
    Container,
    Graphics
} from 'pixi.js';
import type { GraphNode } from './GraphNode.js';
import type { GraphRenderer } from './GraphRenderer.js';

/** @public */
export interface GraphLink {
    /** @internal */
    arrow: Graphics;
    /** @internal */
    line: Graphics;
    /** @internal */
    px: Container;
    /** @internal */
    rendered: boolean;
    /** @internal */
    renderer: GraphRenderer;
    /** @internal */
    source: GraphNode;
    /** @internal */
    target: GraphNode;

    /**
     * Destroy the graphics and its children, and remove them from the scene
     * @internal
     */
    clearGraphics(): void;
    /**
     * Initialize the link (line and arrow), and add them to the scene
     * @internal
     */
    initGraphics(): void;
}
import type { CanvasViewCanvasEdge } from './CanvasViewCanvasEdge.d.ts';

/** @public */
export interface EdgeIndexData {
    children: CanvasViewCanvasEdge[];
    height: number;
    leaf: boolean;
    maxX: number;
    maxY: number;
    minX: number;
    minY: number;
}

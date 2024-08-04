import type { WorkspaceLeaf } from "obsidian";

/** @todo Documentation incomplete */
export interface HoverLinkEvent {
    event: MouseEvent;
    hoverParent: WorkspaceLeaf;
    linktext: string;
    source: "search" | "editor" | "preview" | "properties" | "graph" | "file-explorer" | "hover-link";
    sourcePath?: string;
    state?: {
        scroll: unknown;
    };
    targetEl: HTMLElement | null;
}

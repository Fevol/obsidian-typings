import type {
    Loc,
    Reference
} from "obsidian";

export interface PositionedReference extends Reference {
    /**
     * Position of the reference in the file
     */
    position: {
        start: Loc;
        end: Loc;
    };
}

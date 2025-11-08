/** @todo Documentation incomplete. */
export declare class Piece {
    /** @todo Documentation incomplete. */
    readonly left: number;
    /** @todo Documentation incomplete. */
    readonly top: number;
    /** @todo Documentation incomplete. */
    readonly height: number;
    /** @todo Documentation incomplete. */
    readonly fontFamily: string;
    /** @todo Documentation incomplete. */
    readonly fontSize: string;
    /** @todo Documentation incomplete. */
    readonly fontWeight: string;
    /** @todo Documentation incomplete. */
    readonly color: string;
    /** @todo Documentation incomplete. */
    readonly className: string;
    /** @todo Documentation incomplete. */
    readonly letter: string;
    /** @todo Documentation incomplete. */
    readonly partial: boolean;
    /** @todo Documentation incomplete. */
    constructor(
        /** @todo Documentation incomplete. */
        left: number,
        /** @todo Documentation incomplete. */
        top: number,
        /** @todo Documentation incomplete. */
        height: number,
        /** @todo Documentation incomplete. */
        fontFamily: string,
        /** @todo Documentation incomplete. */
        fontSize: string,
        /** @todo Documentation incomplete. */
        fontWeight: string,
        /** @todo Documentation incomplete. */
        color: string,
        /** @todo Documentation incomplete. */
        className: string,
        /** @todo Documentation incomplete. */
        letter: string,
        /** @todo Documentation incomplete. */
        partial: boolean
    );
    /** @todo Documentation incomplete. */
    draw(): HTMLDivElement;
    /** @todo Documentation incomplete. */
    adjust(elt: HTMLElement): void;
    /** @todo Documentation incomplete. */
    eq(p: Piece): boolean;
}

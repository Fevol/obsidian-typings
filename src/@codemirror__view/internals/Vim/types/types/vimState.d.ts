import type { SearchStateInterface } from './SearchStateInterface.js';
import type { InputStateInterface } from './InputStateInterface.js';
import type { actionCommand } from './actionCommand.js';
import type { vimOption } from './vimOption.js';
import type { MotionFn } from './MotionFn.js';
import type { Pos } from './Pos.js';
import type { Marker } from './Marker.js';

/** @todo Documentation incomplete. */
export type vimState = {
    onPasteFn?: () => void;
    /** @todo Documentation incomplete. */
    sel: {
        /** @todo Documentation incomplete. */
        head: Pos;
        /** @todo Documentation incomplete. */
        anchor: Pos;
    };
    /** @todo Documentation incomplete. */
    insertModeReturn: boolean;
    /** @todo Documentation incomplete. */
    visualBlock: boolean;
    /** @todo Documentation incomplete. */
    marks: {
        [mark: string]: Marker;
    };
    /** @todo Documentation incomplete. */
    visualMode: boolean;
    /** @todo Documentation incomplete. */
    insertMode: boolean;
    pasteFn?: any;
    /** @todo Documentation incomplete. */
    lastSelection: {
        /** @todo Documentation incomplete. */
        anchorMark: Marker;
        /** @todo Documentation incomplete. */
        headMark: Marker;
        /** @todo Documentation incomplete. */
        visualLine: boolean;
        /** @todo Documentation incomplete. */
        visualBlock: boolean;
        /** @todo Documentation incomplete. */
        visualMode: boolean;
        /** @todo Documentation incomplete. */
        anchor: Pos;
        /** @todo Documentation incomplete. */
        head: Pos;
    };
    searchState_?: SearchStateInterface;
    /** @todo Documentation incomplete. */
    lastEditActionCommand: actionCommand | void;
    lastPastedText?: string;
    lastMotion?: MotionFn | null;
    /** @todo Documentation incomplete. */
    options: {
        [optionName: string]: vimOption;
    };
    /** @todo Documentation incomplete. */
    lastEditInputState: InputStateInterface | void;
    /** @todo Documentation incomplete. */
    inputState: InputStateInterface;
    /** @todo Documentation incomplete. */
    visualLine: boolean;
    insertModeRepeat?: number;
    /** @todo Documentation incomplete. */
    lastHSPos: number;
    /** @todo Documentation incomplete. */
    lastHPos: number;
    wasInVisualBlock?: boolean;
    insertEnd?: Marker;
    /** @todo Documentation incomplete. */
    status: string;
    exMode?: boolean;
    mode?: string;
    expectLiteralNext?: boolean;
};

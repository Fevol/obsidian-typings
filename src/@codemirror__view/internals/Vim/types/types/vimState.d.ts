import type { SearchStateInterface } from './SearchStateInterface.js';
import type { InputStateInterface } from './InputStateInterface.js';
import type { actionCommand } from './actionCommand.js';
import type { vimOption } from './vimOption.js';
import type { MotionFn } from './MotionFn.js';
import type { Pos } from './Pos.js';
import type { Marker } from './Marker.js';

/** @todo Documentation incomplete. */
export type vimState = {
    /** @todo Documentation incomplete. */
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
    /** @todo Documentation incomplete. */
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
    /** @todo Documentation incomplete. */
    lastPastedText?: string;
    /** @todo Documentation incomplete. */
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
    /** @todo Documentation incomplete. */
    insertModeRepeat?: number;
    /** @todo Documentation incomplete. */
    lastHSPos: number;
    /** @todo Documentation incomplete. */
    lastHPos: number;
    /** @todo Documentation incomplete. */
    wasInVisualBlock?: boolean;
    /** @todo Documentation incomplete. */
    insertEnd?: Marker;
    /** @todo Documentation incomplete. */
    status: string;
    /** @todo Documentation incomplete. */
    exMode?: boolean;
    /** @todo Documentation incomplete. */
    mode?: string;
    /** @todo Documentation incomplete. */
    expectLiteralNext?: boolean;
};

import type {
    actionCommand,
    InputStateInterface,
    Marker,
    MotionFn,
    Pos,
    SearchStateInterface,
    vimOption,
} from 'types';
import type { VimStateVimInputState } from './VimStateVimInputState.d.ts';
import type { VimStateVimLastMotion } from './VimStateVimLastMotion.d.ts';

/**
 * @todo Documentation incomplete.
 * @public
 * @unofficial
 */

export type VimStateVim = {
    onPasteFn?: () => void;
    sel: {
        head: Pos;
        anchor: Pos;
    };
    insertModeReturn: boolean;
    visualBlock: boolean;
    marks: {
        [mark: string]: Marker;
    };
    visualMode: boolean;
    insertMode: boolean;
    pasteFn?: any;
    lastSelection: {
        anchorMark: Marker;
        headMark: Marker;
        visualLine: boolean;
        visualBlock: boolean;
        visualMode: boolean;
        anchor: Pos;
        head: Pos;
    };
    searchState_?: SearchStateInterface;
    lastEditActionCommand: actionCommand | void;
    lastPastedText?: string;
    lastMotion?: MotionFn | null;
    options: {
        [optionName: string]: vimOption;
    };
    lastEditInputState: InputStateInterface | void;
    inputState: InputStateInterface;
    visualLine: boolean;
    insertModeRepeat?: number;
    lastHSPos: number;
    lastHPos: number;
    wasInVisualBlock?: boolean;
    insertEnd?: Marker;
    status: string;
    exMode?: boolean;
    mode?: string;
    expectLiteralNext?: boolean;
};

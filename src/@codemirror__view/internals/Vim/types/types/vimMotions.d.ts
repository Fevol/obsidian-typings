import type { CodeMirrorV } from './CodeMirrorV.js';
import type { InputStateInterface } from './InputStateInterface.js';
import type { MotionArgs } from './MotionArgs.js';
import type { MotionFn } from './MotionFn.js';
import type { Pos } from './Pos.js';
import type { vimState } from './vimState.js';

/** @todo Documentation incomplete. */
export type vimMotions = {
    /** @todo Documentation incomplete. */
    moveToTopLine(cm: CodeMirrorV, head: Pos, motionArgs: MotionArgs): Pos;
    /** @todo Documentation incomplete. */
    moveToMiddleLine(cm: CodeMirrorV): Pos;
    /** @todo Documentation incomplete. */
    moveToBottomLine(cm: CodeMirrorV, head: Pos, motionArgs: MotionArgs): Pos;
    /** @todo Documentation incomplete. */
    expandToLine(_cm: CodeMirrorV, head: Pos, motionArgs: MotionArgs): Pos;
    /** @todo Documentation incomplete. */
    findNext(
        _cm: CodeMirrorV,
        _head: Pos,
        /** @todo Documentation incomplete. */
        motionArgs: MotionArgs
    ): Pos | undefined;
    /** @todo Documentation incomplete. */
    findAndSelectNextInclusive(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        head: Pos,
        /** @todo Documentation incomplete. */
        motionArgs: MotionArgs,
        /** @todo Documentation incomplete. */
        vim: vimState,
        /** @todo Documentation incomplete. */
        inputState: InputStateInterface
    ): Pos | [Pos, Pos] | undefined;
    /** @todo Documentation incomplete. */
    goToMark(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        _head: Pos,
        /** @todo Documentation incomplete. */
        motionArgs: MotionArgs,
        /** @todo Documentation incomplete. */
        vim: vimState,
        /** @todo Documentation incomplete. */
        inputState: InputStateInterface
    ): Pos | undefined | null;
    /** @todo Documentation incomplete. */
    moveToOtherHighlightedEnd(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        _head: Pos,
        /** @todo Documentation incomplete. */
        motionArgs: MotionArgs,
        /** @todo Documentation incomplete. */
        vim: vimState
    ): [Pos, Pos];
    /** @todo Documentation incomplete. */
    jumpToMark(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        head: Pos,
        /** @todo Documentation incomplete. */
        motionArgs: MotionArgs,
        /** @todo Documentation incomplete. */
        vim: vimState
    ): Pos;
    /** @todo Documentation incomplete. */
    moveByCharacters(_cm: CodeMirrorV, head: Pos, motionArgs: MotionArgs): Pos;
    /** @todo Documentation incomplete. */
    moveByLines(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        head: Pos,
        /** @todo Documentation incomplete. */
        motionArgs: MotionArgs,
        /** @todo Documentation incomplete. */
        vim: vimState
    ): Pos;
    /** @todo Documentation incomplete. */
    moveByDisplayLines(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        head: Pos,
        /** @todo Documentation incomplete. */
        motionArgs: MotionArgs,
        /** @todo Documentation incomplete. */
        vim: vimState
    ): Pos;
    /** @todo Documentation incomplete. */
    moveByPage(cm: CodeMirrorV, head: Pos, motionArgs: MotionArgs): Pos;
    /** @todo Documentation incomplete. */
    moveByParagraph(cm: CodeMirrorV, head: Pos, motionArgs: MotionArgs): Pos;
    /** @todo Documentation incomplete. */
    moveBySentence(cm: CodeMirrorV, head: Pos, motionArgs: MotionArgs): Pos;
    /** @todo Documentation incomplete. */
    moveByScroll(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        head: Pos,
        /** @todo Documentation incomplete. */
        motionArgs: MotionArgs,
        /** @todo Documentation incomplete. */
        vim: vimState
    ): Pos | null;
    /** @todo Documentation incomplete. */
    moveByWords(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        head: Pos,
        /** @todo Documentation incomplete. */
        motionArgs: MotionArgs
    ): Pos | undefined;
    /** @todo Documentation incomplete. */
    moveTillCharacter(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        _head: Pos,
        /** @todo Documentation incomplete. */
        motionArgs: MotionArgs
    ): Pos | null;
    /** @todo Documentation incomplete. */
    moveToCharacter(cm: CodeMirrorV, head: Pos, motionArgs: MotionArgs): Pos;
    /** @todo Documentation incomplete. */
    moveToSymbol(cm: CodeMirrorV, head: Pos, motionArgs: MotionArgs): Pos;
    /** @todo Documentation incomplete. */
    moveToColumn(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        head: Pos,
        /** @todo Documentation incomplete. */
        motionArgs: MotionArgs,
        /** @todo Documentation incomplete. */
        vim: vimState
    ): Pos;
    /** @todo Documentation incomplete. */
    moveToEol(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        head: Pos,
        /** @todo Documentation incomplete. */
        motionArgs: MotionArgs,
        /** @todo Documentation incomplete. */
        vim: vimState
    ): Pos;
    /** @todo Documentation incomplete. */
    moveToFirstNonWhiteSpaceCharacter(cm: CodeMirrorV, head: Pos): Pos;
    /** @todo Documentation incomplete. */
    moveToMatchedSymbol(cm: CodeMirrorV, head: Pos): Pos | undefined;
    /** @todo Documentation incomplete. */
    moveToStartOfLine(
        _cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        head: Pos,
        motionArgs?: MotionArgs,
        vim?: vimState
    ): Pos;
    /** @todo Documentation incomplete. */
    moveToLineOrEdgeOfDocument(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        _head: Pos,
        /** @todo Documentation incomplete. */
        motionArgs: MotionArgs
    ): Pos;
    /** @todo Documentation incomplete. */
    moveToStartOfDisplayLine(cm: CodeMirrorV): Pos;
    /** @todo Documentation incomplete. */
    moveToEndOfDisplayLine(cm: CodeMirrorV): Pos;
    /** @todo Documentation incomplete. */
    textObjectManipulation(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        head: Pos,
        /** @todo Documentation incomplete. */
        motionArgs: MotionArgs,
        /** @todo Documentation incomplete. */
        vim: vimState
    ): Pos | [Pos, Pos] | null;
    /** @todo Documentation incomplete. */
    repeatLastCharacterSearch(
        /** @todo Documentation incomplete. */
        cm: CodeMirrorV,
        /** @todo Documentation incomplete. */
        head: Pos,
        /** @todo Documentation incomplete. */
        motionArgs: MotionArgs
    ): Pos;
    [key: string]: MotionFn;
};

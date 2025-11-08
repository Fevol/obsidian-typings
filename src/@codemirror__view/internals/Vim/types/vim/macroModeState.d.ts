import type { CodeMirror } from '../cm_adapter/cm-adapter-main.js';
import type { InsertModeChanges } from '../types/InsertModeChanges.js';

export type macroModeState = {
    /** @todo Documentation incomplete. */
    latestRegister: string | undefined;
    /** @todo Documentation incomplete. */
    isPlaying: boolean;
    /** @todo Documentation incomplete. */
    isRecording: boolean;
    /** @todo Documentation incomplete. */
    replaySearchQueries: string[];
    /** @todo Documentation incomplete. */
    onRecordingDone: ((newVal?: string) => void) | undefined;
    /** @todo Documentation incomplete. */
    lastInsertModeChanges: InsertModeChanges;
    /** @todo Documentation incomplete. */
    exitMacroRecordMode(): void;
    /** @todo Documentation incomplete. */
    enterMacroRecordMode(cm: CodeMirror, registerName: string): void;
};

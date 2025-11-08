import type { ChangeDesc } from '@codemirror/state';
import type { InsertModeChanges } from '../types/InsertModeChanges.js';
import type { macroModeState } from './macroModeState.js';
import type { Register } from './Register.js';
import type { registerController } from './registerController.js';
import type { lastCharacterSearch } from './lastCharacterSearch.js';
import type { exCommandHistoryController } from './exCommandHistoryController.js';
import type { jumpList } from './jumpList.js';
import type { searchHistoryController } from './searchHistoryController.js';

export type vimGlobalState = {
    /** @todo Documentation incomplete. */
    macroModeState: macroModeState;
    /** @todo Documentation incomplete. */
    registerController: registerController;
    /** @todo Documentation incomplete. */
    searchHistoryController: searchHistoryController;
    /** @todo Documentation incomplete. */
    jumpList: jumpList;
    /** @todo Documentation incomplete. */
    exCommandHistoryController: exCommandHistoryController;
    /** @todo Documentation incomplete. */
    lastCharacterSearch: lastCharacterSearch;
    /** @todo Documentation incomplete. */
    query?: any;
    /** @todo Documentation incomplete. */
    isReversed?: boolean;
    /** @todo Documentation incomplete. */
    lastSubstituteReplacePart: any;
    /** @todo Documentation incomplete. */
    searchQuery?: null;
    /** @todo Documentation incomplete. */
    searchIsReversed?: boolean;
};

import type {
    SearchComponent,
    SettingTab
} from "obsidian";

export interface HotkeysSettingTab extends SettingTab {
    searchComponent: SearchComponent;
    updateHotkeyVisibility(): void;
}

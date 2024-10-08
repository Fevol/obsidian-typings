import type { AudioRecorderPluginInstance } from './AudioRecorderPluginInstance.js';
import type { BacklinkPluginInstance } from './BacklinkPluginInstance.js';
import type { BookmarksPluginInstance } from './BookmarksPluginInstance.js';
import type { CanvasPluginInstance } from './CanvasPluginInstance.js';
import type { CommandPalettePluginInstance } from './CommandPalettePluginInstance.js';
import type { DailyNotesPluginInstance } from './DailyNotesPluginInstance.js';
import type { EditorStatusPluginInstance } from './EditorStatusPluginInstance.js';
import type { FileExplorerPluginInstance } from './FileExplorerPluginInstance.js';
import type { FileRecoveryPluginInstance } from './FileRecoveryPluginInstance.js';
import type { GlobalSearchPluginInstance } from './GlobalSearchPluginInstance.js';
import type { GraphPluginInstance } from './GraphPluginInstance.js';
import type { InternalPluginName } from './InternalPluginName.js';
import type { MarkdownImporterPluginInstance } from './MarkdownImporterPluginInstance.js';
import type { NoteComposerPluginInstance } from './NoteComposerPluginInstance.js';
import type { OutgoingLinkPluginInstance } from './OutgoingLinkPluginInstance.js';
import type { OutlinePluginInstance } from './OutlinePluginInstance.js';
import type { PagePreviewPluginInstance } from './PagePreviewPluginInstance.js';
import type { PropertiesPluginInstance } from './PropertiesPluginInstance.js';
import type { PublishPluginInstance } from './PublishPluginInstance.js';
import type { RandomNotePluginInstance } from './RandomNotePluginInstance.js';
import type { SlashCommandPluginInstance } from './SlashCommandPluginInstance.js';
import type { SlidesPluginInstance } from './SlidesPluginInstance.js';
import type { SwitcherPluginInstance } from './SwitcherPluginInstance.js';
import type { SyncPluginInstance } from './SyncPluginInstance.js';
import type { TagPanePluginInstance } from './TagPanePluginInstance.js';
import type { TemplatesPluginInstance } from './TemplatesPluginInstance.js';
import type { WordCountPluginInstance } from './WordCountPluginInstance.js';
import type { WorkspacesPluginInstance } from './WorkspacesPluginInstance.js';
import type { ZkPrefixerPluginInstance } from './ZkPrefixerPluginInstance.js';

/** @public */
export type InternalPluginNameInstancesMapping = {
    [InternalPluginName.AudioRecorder]: AudioRecorderPluginInstance;
    [InternalPluginName.Backlink]: BacklinkPluginInstance;
    [InternalPluginName.Bookmarks]: BookmarksPluginInstance;
    [InternalPluginName.Canvas]: CanvasPluginInstance;
    [InternalPluginName.CommandPalette]: CommandPalettePluginInstance;
    [InternalPluginName.DailyNotes]: DailyNotesPluginInstance;
    [InternalPluginName.EditorStatus]: EditorStatusPluginInstance;
    [InternalPluginName.FileExplorer]: FileExplorerPluginInstance;
    [InternalPluginName.FileRecovery]: FileRecoveryPluginInstance;
    [InternalPluginName.GlobalSearch]: GlobalSearchPluginInstance;
    [InternalPluginName.Graph]: GraphPluginInstance;
    [InternalPluginName.MarkdownImporter]: MarkdownImporterPluginInstance;
    [InternalPluginName.NoteComposer]: NoteComposerPluginInstance;
    [InternalPluginName.OutgoingLink]: OutgoingLinkPluginInstance;
    [InternalPluginName.Outline]: OutlinePluginInstance;
    [InternalPluginName.PagePreview]: PagePreviewPluginInstance;
    [InternalPluginName.Properties]: PropertiesPluginInstance;
    [InternalPluginName.Publish]: PublishPluginInstance;
    [InternalPluginName.RandomNote]: RandomNotePluginInstance;
    [InternalPluginName.SlashCommand]: SlashCommandPluginInstance;
    [InternalPluginName.Slides]: SlidesPluginInstance;
    [InternalPluginName.Switcher]: SwitcherPluginInstance;
    [InternalPluginName.Sync]: SyncPluginInstance;
    [InternalPluginName.TagPane]: TagPanePluginInstance;
    [InternalPluginName.Templates]: TemplatesPluginInstance;
    [InternalPluginName.WordCount]: WordCountPluginInstance;
    [InternalPluginName.Workspaces]: WorkspacesPluginInstance;
    [InternalPluginName.ZkPrefixer]: ZkPrefixerPluginInstance;
};

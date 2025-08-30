import type {
    App,
    MarkdownView,
    TAbstractFile
} from 'obsidian';
import type { ImportedAttachment } from './ImportedAttachment.d.ts';

/**
 * @todo Documentation incomplete.
 * @public
 * @unofficial
 */
export interface ClipboardManager {
    /**
     * Reference to the app.
     */
    app: App;

    /**
     * Reference to the Editor View.
     */
    info: MarkdownView;

    /**
     * Get current path of editor view for determining storage location embed.
     */
    getPath(): string;

    /**
     * Process incoming data (image, text, url, html).
     *
     * @remark When processing HTML, function will be async.
     */
    handleDataTransfer(data: DataTransfer): null | Promise<void>;

    /**
     * Handle an incoming drag-over event.
     */
    handleDragOver(event: DragEvent): void;

    /**
     * Handle an incoming drag-drop event.
     */
    handleDrop(event: DragEvent): boolean;

    /**
     * Process a drop event into the editor.
     */
    handleDropIntoEditor(event: DragEvent): null | string;

    /**
     * Handle an incoming paste event.
     */
    handlePaste(event: ClipboardEvent): boolean;

    /**
     * Insert single file as embed into the editor.
     */
    insertAttachmentEmbed(file: TAbstractFile, replace: boolean): Promise<void>;

    /**
     * Insert files from drop-event into the editor.
     */
    insertFiles(importedAttachments: ImportedAttachment[]): Promise<void>;

    /**
     * Save an attachment of specified name and extension to the vault.
     *
     * @remark Invokes insertAttachmentEmbed.
     */
    saveAttachment(name: string, extension: string, data: ArrayBuffer, replace: boolean): Promise<void>;
}

import {
    TFile,
    type Vault
} from 'obsidian';
import { createTFolderInstance } from './createTFolderInstance.ts';
import { parentFolderPath } from './PathUtils.ts';

type TFileConstructor = { new(vault: Vault, path: string): TFile };

/**
 * Creates and properly initializes the instance of TFile even the underlying file does not exist.
 * This doesn't create the missing file on the file system.
 */
export function createTFileInstance(vault: Vault, path: string): TFile {
    let file = vault.getFileByPath(path);
    if (file) {
        return file;
    }

    file = new (TFile as TFileConstructor)(vault, path);
    file.parent = createTFolderInstance(vault, parentFolderPath(path));
    file.deleted = true;
    return file;
}

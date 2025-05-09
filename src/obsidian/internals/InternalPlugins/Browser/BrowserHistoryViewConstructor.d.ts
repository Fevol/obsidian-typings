import type { BrowserHistoryView } from '../../InternalPlugins/Browser/BrowserHistoryView.d.ts';
import type { TypedViewConstructor } from '../../Views/TypedViewConstructor.d.ts';
import type { BrowserPluginInstance } from './BrowserPluginInstance.d.ts';

/**
 * @todo Documentation incomplete
 * @public
 * @unofficial
 */
export interface BrowserHistoryViewConstructor
    extends TypedViewConstructor<BrowserHistoryView, [browserPluginInstance: BrowserPluginInstance]>
{}

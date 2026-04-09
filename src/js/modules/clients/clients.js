import { state } from '../../state.js';
import { renderClientList } from './list.js';
import { renderAddClient } from './add-client.js';
import { renderClientDetails } from './profile.js';
import { renderGroups, renderGroupsSecondary } from './groups.js';
import { renderClientInvoice } from './invoice.js';

export function renderClients(mode) {
    const isMobile = mode === 'mobile';
    const isDesktopSecondary = mode === 'desktop-secondary';
    const isDesktopPrimary = mode === 'desktop-primary';

    if (isDesktopSecondary) {
        // Secondary pane (preview pane on right)
        if (state.clientViewMode === 'add') return renderAddClient('desktop');
        if (state.clientViewMode === 'invoice') return renderClientInvoice('desktop');
        if (state.clientViewMode === 'profile') return renderClientDetails('desktop');
        if (state.clientViewMode === 'groups') return renderGroupsSecondary();
        
        return `
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50 text-center">person_search</span>
                    <p class="text-[10px] font-black uppercase tracking-widest text-center">Select a client to view profile</p>
                </div>
            </div>
        `;
    }

    if (isDesktopPrimary) {
        // Primary pane (list on left)
        if (state.clientViewMode === 'groups') return renderGroups();
        return renderClientList();
    }

    // Mobile logic - full screen views
    if (state.clientViewMode === 'add') return renderAddClient('mobile');
    if (state.clientViewMode === 'invoice') return renderClientInvoice('mobile');
    if (state.clientViewMode === 'profile') return renderClientDetails('mobile');
    if (state.clientViewMode === 'groups') {
        // On mobile, show detail if a group is selected
        if (state.groupViewMode === 'detail' || state.groupViewMode === 'create' || state.groupViewMode === 'add-members') {
            return renderGroupsSecondary();
        }
        return renderGroups();
    }

    return renderClientList();
}

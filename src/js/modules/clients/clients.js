import { state } from '../../state.js';
import { renderClientList } from './list.js';
import { renderAddClient } from './add-client.js';
import { renderClientDetails } from './profile.js';

export function renderClients(mode) {
    const isMobile = mode === 'mobile';
    const isDesktopSecondary = mode === 'desktop-secondary';
    const isDesktopPrimary = mode === 'desktop-primary';

    if (isDesktopSecondary) {
        if (state.clientViewMode === 'add') return renderAddClient('desktop');
        if (state.clientViewMode === 'profile') return renderClientDetails('desktop');
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
        return renderClientList();
    }

    // Mobile logic
    if (state.clientViewMode === 'add') return renderAddClient('mobile');
    if (state.clientViewMode === 'profile') return renderClientDetails('mobile');

    return renderClientList();
}

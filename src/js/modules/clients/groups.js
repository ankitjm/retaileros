// Groups module router — delegates to sub-modules
import { state } from '../../state.js';
import { renderGroupsList } from './groups-list.js';
import { renderCreateGroup } from './groups-create.js';
import { renderGroupDetail } from './groups-detail.js';
import { renderAddMembers } from './groups-members.js';
import './groups-actions.js'; // registers window.* CRUD functions

// Primary pane always shows the list
export function renderGroups() {
    return renderGroupsList();
}

// Secondary pane (detail/create views)
export function renderGroupsSecondary() {
    switch (state.groupViewMode) {
        case 'create':     return renderCreateGroup();
        case 'detail':     return renderGroupDetail();
        case 'add-members': return renderAddMembers();
        default:
            return `
                <div class="h-full flex items-center justify-center text-slate-300 text-center p-8">
                    <div class="text-center">
                        <span class="material-icons-outlined text-4xl mb-2 opacity-50">group</span>
                        <p class="text-[10px] font-black uppercase tracking-widest">Select a group to view details</p>
                    </div>
                </div>
            `;
    }
}

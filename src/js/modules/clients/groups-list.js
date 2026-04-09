// Groups list view — extracted from groups.js
import { state } from '../../state.js';
import { renderClientHeader } from './header.js';
import { emptyState } from './ui.js';

export function renderGroupsList() {
    const cache = window.getCache();
    const groups = cache.groups || [];
    const groupMembers = cache.groupMembers || [];
    const searchQuery = state.groupSearchQuery || '';

    const filteredGroups = searchQuery
        ? groups.filter(g =>
            g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (g.description && g.description.toLowerCase().includes(searchQuery.toLowerCase()))
          )
        : groups;

    const companies = filteredGroups.filter(g => g.is_company === 1);
    const regularGroups = filteredGroups.filter(g => g.is_company !== 1);
    const totalMembers = groupMembers.length;

    const addBtn = `<button onclick="window.setGroupViewMode('create')" class="w-8 h-8 flex items-center justify-center bg-slate-950 text-white rounded-full hover:bg-slate-800 transition-colors" title="Create group">
        <span class="material-icons-outlined text-sm">add</span>
    </button>`;

    return `
        ${renderClientHeader('Groups', 'Collections & Companies', addBtn)}

        <!-- Stats Bar -->
        <div class="px-8 shrink-0">
            <div class="flex items-center gap-0 bg-slate-50 rounded-2xl border border-slate-100 mb-5 overflow-hidden text-left">
                <div class="flex-1 p-4 text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Total</p>
                    <h3 class="text-xl font-black leading-none text-slate-900">${filteredGroups.length}</h3>
                    <p class="text-[8px] font-bold text-slate-400 mt-0.5">groups</p>
                </div>
                <div class="w-px self-stretch bg-slate-200 my-3"></div>
                <div class="flex-1 p-4 text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Companies</p>
                    <h3 class="text-xl font-black leading-none text-slate-900">${companies.length}</h3>
                    <p class="text-[8px] font-bold text-slate-400 mt-0.5">B2B accounts</p>
                </div>
                <div class="w-px self-stretch bg-slate-200 my-3"></div>
                <div class="flex-1 p-4 text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Groups</p>
                    <h3 class="text-xl font-black leading-none text-slate-900">${regularGroups.length}</h3>
                    <p class="text-[8px] font-bold text-slate-400 mt-0.5">collections</p>
                </div>
            </div>
        </div>

        <div class="scrolling-content px-8 space-y-4 relative text-left pb-24">
            <!-- Sticky Controls -->
            <div class="sticky top-0 z-30 bg-white border-b border-slate-100 -mx-8 px-8 pt-2.5 pb-2.5 shadow-sm mb-2">
                <div class="flex items-center gap-2">
                    <div class="flex bg-slate-100 p-0.5 rounded-xl shrink-0">
                        <button onclick="window.setClientMode('directory')" class="px-3 py-2 rounded-[10px] text-[9px] font-black uppercase tracking-wide text-slate-400 hover:text-slate-600">Directory</button>
                        <button class="px-3 py-2 rounded-[10px] text-[9px] font-black uppercase tracking-wide bg-white shadow-sm text-slate-900">Groups</button>
                    </div>
                    <div class="relative flex-1">
                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-sm">search</span>
                        <input type="text"
                               id="group-search-input"
                               value="${searchQuery}"
                               oninput="window.updateGroupSearch(this.value)"
                               placeholder="Search groups & companies..."
                               class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                    </div>
                </div>
            </div>

            <!-- Groups List -->
            <div class="space-y-2 pb-24">
                ${filteredGroups.length === 0 ? `
                    ${emptyState(
                        'group_off',
                        searchQuery ? 'No groups found' : 'No groups yet',
                        searchQuery ? 'Try a different search term' : ''
                    )}
                    ${!searchQuery ? `
                        <div class="text-center">
                            <button onclick="window.setGroupViewMode('create')" class="px-4 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase">
                                Create First Group
                            </button>
                        </div>
                    ` : ''}
                ` : `
                    ${companies.length > 0 ? renderGroupSection('Companies', companies, groupMembers) : ''}
                    ${regularGroups.length > 0 ? renderGroupSection('Groups', regularGroups, groupMembers) : ''}
                `}
            </div>
        </div>
    `;
}

function renderGroupSection(title, groups, groupMembers) {
    return `
        <div class="pt-2">
            <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-2">${title}</p>
            <div class="space-y-2">
            ${groups.map(g => {
                const memberCount = groupMembers.filter(m => m.group_id === g.id).length;
                const isCompany = g.is_company === 1;
                const isSelected = state.selectedGroupId === g.id;
                return `
                    <div class="relative rounded-xl border transition-all ${isSelected ? 'border-slate-900 bg-slate-50 shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50/60'}">
                        ${isSelected ? '<div class="absolute left-0 top-2 bottom-2 w-[3px] bg-slate-950 rounded-full"></div>' : ''}
                        <button type="button" onclick="window.setSelectedGroup('${g.id}'); window.setGroupViewMode('detail');" class="p-4 ${isSelected ? 'pl-5' : ''} text-left w-full">
                            <!-- Row 1: name + member count -->
                            <div class="flex items-center justify-between mb-1">
                                <p class="text-[11px] font-black text-slate-900 truncate flex-1">${g.name}</p>
                                <span class="text-[9px] font-black text-slate-400 shrink-0 ml-2">${memberCount} members</span>
                            </div>
                            <!-- Row 2: type badge + description -->
                            <div class="flex items-center gap-2">
                                <span class="text-[7px] font-black px-1.5 py-0.5 rounded border ${isCompany ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 text-slate-400'} uppercase tracking-wider">${isCompany ? 'Company' : 'Group'}</span>
                                <p class="text-[9px] font-bold text-slate-400 truncate">${isCompany ? (g.gst_number || 'No GST') : (g.description || 'No description')}</p>
                            </div>
                        </button>
                    </div>
                `;
            }).join('')}
            </div>
        </div>
    `;
}

// Add members view — extracted from groups.js
import { state } from '../../state.js';
import { avatar } from './ui.js';

export function renderAddMembers() {
    const cache = window.getCache();
    const groups = cache.groups || [];
    const groupMembers = cache.groupMembers || [];
    const customers = cache.customers || [];

    const group = groups.find(g => g.id === state.selectedGroupId);
    if (!group) { state.groupViewMode = 'list'; return ''; }

    const memberIds = groupMembers.filter(m => m.group_id === group.id).map(m => m.customer_id);
    const nonMembers = customers.filter(c => !memberIds.includes(c.id));

    return `
        <div class="h-full flex flex-col overflow-hidden">
            <!-- Header -->
            <div class="p-6 border-b border-slate-100 flex items-center justify-between shrink-0">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 ${group.is_company ? 'bg-slate-900' : 'bg-slate-100'} rounded-2xl flex items-center justify-center">
                        <span class="material-icons-outlined ${group.is_company ? 'text-white' : 'text-slate-400'}">${group.is_company ? 'business' : 'group'}</span>
                    </div>
                    <div>
                        <h2 class="text-lg font-black text-slate-900 tracking-tighter">Add Members</h2>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">${group.name} · ${memberIds.length} current</p>
                    </div>
                </div>
                <button onclick="window.setGroupViewMode('detail')" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full">
                    <span class="material-icons-outlined">close</span>
                </button>
            </div>

            <!-- Content -->
            <div class="flex-1 overflow-y-auto p-6 space-y-4">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Available Clients (${nonMembers.length})</h3>

                ${nonMembers.length === 0 ? `
                    <div class="card p-8 border-dashed border-slate-200 text-center">
                        <span class="material-icons-outlined text-2xl text-slate-200 mb-2">check_circle</span>
                        <p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">All clients are members</p>
                    </div>
                ` : `
                    <div class="space-y-2">
                        ${nonMembers.map(c => `
                            <div class="card p-3 flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    ${avatar(c.name, 'sm')}
                                    <div>
                                        <p class="text-xs font-black text-slate-900">${c.name}</p>
                                        <p class="text-[9px] font-bold text-slate-400">${c.phone || c.email || 'No contact'}</p>
                                    </div>
                                </div>
                                <button onclick="window.addMemberToGroup('${group.id}', '${c.id}')" class="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[8px] font-black uppercase">
                                    Add
                                </button>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>
        </div>
    `;
}

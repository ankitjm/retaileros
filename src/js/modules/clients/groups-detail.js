// Group detail view — extracted from groups.js
import { state } from '../../state.js';
import { formatDate } from './ui.js';

export function renderGroupDetail() {
    const cache = window.getCache();
    const groups = cache.groups || [];
    const groupMembers = cache.groupMembers || [];
    const customers = cache.customers || [];
    const sales = cache.sales || [];

    const group = groups.find(g => g.id === state.selectedGroupId);
    if (!group) {
        return `
            <div class="h-full flex items-center justify-center text-slate-300 text-center p-8">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50">error_outline</span>
                    <p class="text-[10px] font-black uppercase tracking-widest">Group not found</p>
                </div>
            </div>
        `;
    }

    const memberIds = groupMembers.filter(m => m.group_id === group.id).map(m => m.customer_id);
    const members = customers.filter(c => memberIds.includes(c.id));
    const memberSales = sales.filter(s => memberIds.includes(s.customer_id) && s.status !== 'draft');
    const totalSpent = memberSales.reduce((sum, s) => sum + (s.total_amount || 0), 0);

    return `
        <div class="h-full flex flex-col overflow-hidden">
            <!-- Header — resolve-pane style -->
            <div class="px-6 pt-6 pb-4 border-b border-slate-100 shrink-0 flex items-start gap-4">
                <div class="w-10 h-10 ${group.is_company ? 'bg-slate-900' : 'bg-slate-100'} rounded-xl flex items-center justify-center shrink-0">
                    <span class="material-icons-outlined text-base ${group.is_company ? 'text-white' : 'text-slate-400'}">${group.is_company ? 'business' : 'group'}</span>
                </div>
                <div class="flex-1 min-w-0">
                    <h2 class="text-lg font-black text-slate-900 tracking-tighter leading-tight truncate">${group.name}</h2>
                    <div class="flex items-center gap-2 mt-1 flex-wrap">
                        <span class="px-1.5 py-0.5 rounded border text-[7px] font-black uppercase ${group.is_company ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 text-slate-400'}">${group.is_company ? 'Company' : 'Group'}</span>
                        ${group.gst_number ? `<span class="text-[9px] font-bold text-slate-400">${group.gst_number}</span>` : ''}
                        <span class="text-[9px] font-bold text-slate-300">Created ${formatDate(group.created_at)}</span>
                    </div>
                    ${group.description ? `<p class="text-[10px] font-bold text-slate-500 mt-1">${group.description}</p>` : ''}
                </div>
            </div>

            <!-- Content -->
            <div class="flex-1 overflow-y-auto px-6 py-5 space-y-5">
                <!-- Stats bar -->
                <div class="flex items-center gap-0 bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden text-left">
                    <div class="flex-1 p-4 text-left">
                        <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Members</p>
                        <h3 class="text-xl font-black leading-none text-slate-900">${members.length}</h3>
                        <p class="text-[8px] font-bold text-slate-400 mt-0.5">in group</p>
                    </div>
                    <div class="w-px self-stretch bg-slate-200 my-3"></div>
                    <div class="flex-1 p-4 text-left">
                        <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Spent</p>
                        <h3 class="text-xl font-black leading-none ${totalSpent > 0 ? 'text-slate-900' : 'text-slate-300'}">₹${totalSpent >= 1000 ? (totalSpent / 1000).toFixed(0) + 'K' : totalSpent.toLocaleString()}</h3>
                        <p class="text-[8px] font-bold text-slate-400 mt-0.5">total revenue</p>
                    </div>
                </div>

                <!-- Actions -->
                <div class="grid grid-cols-2 gap-2">
                    <button class="flex items-center gap-2 p-3 bg-slate-950 border border-slate-950 rounded-xl hover:bg-slate-800 transition-all">
                        <span class="material-icons-outlined text-white text-base">chat</span>
                        <span class="text-[9px] font-black text-white uppercase tracking-widest">WhatsApp</span>
                    </button>
                    <button class="flex items-center gap-2 p-3 bg-white border border-slate-100 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all">
                        <span class="material-icons-outlined text-slate-500 text-base">campaign</span>
                        <span class="text-[9px] font-black text-slate-700 uppercase tracking-widest">Campaign</span>
                    </button>
                </div>

                <!-- Members Section -->
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest">Members (${members.length})</p>
                        <button onclick="window.setGroupViewMode('add-members')" class="flex items-center gap-1 text-[9px] font-black text-slate-900 uppercase">
                            <span class="material-icons-outlined text-sm">person_add</span>
                            Add
                        </button>
                    </div>

                    ${members.length === 0 ? `
                        <div class="rounded-xl border border-dashed border-slate-200 p-8 text-center">
                            <span class="material-icons-outlined text-2xl text-slate-200 mb-2">group_add</span>
                            <p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">No members yet</p>
                            <button onclick="window.setGroupViewMode('add-members')" class="mt-3 px-4 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase">
                                Add Members
                            </button>
                        </div>
                    ` : `
                        <div class="space-y-2">
                            ${members.map(m => {
                                const mSales = sales.filter(s => s.customer_id === m.id && s.status !== 'draft');
                                const spent = mSales.reduce((sum, s) => sum + (s.total_amount || 0), 0);
                                const initial = (m.name || '?')[0].toUpperCase();
                                return `
                                    <div class="rounded-xl border border-slate-100 bg-white p-3 flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                                <span class="text-[9px] font-black text-slate-500">${initial}</span>
                                            </div>
                                            <div>
                                                <p class="text-[11px] font-black text-slate-900">${m.name}</p>
                                                <p class="text-[9px] font-bold text-slate-400">${m.phone || 'No phone'}</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            ${spent > 0 ? `<span class="text-[9px] font-black text-slate-400">₹${spent.toLocaleString()}</span>` : ''}
                                            <button onclick="window.removeMemberFromGroup('${group.id}', '${m.id}')" class="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
                                                <span class="material-icons-outlined text-sm">close</span>
                                            </button>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    `}
                </div>

                <!-- Delete Button -->
                <button onclick="window.deleteGroup('${group.id}')" class="w-full py-3 text-[9px] font-black text-slate-400 uppercase border border-slate-200 rounded-xl hover:text-slate-900 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                    <span class="material-icons-outlined text-sm">delete</span>
                    Delete ${group.is_company ? 'Company' : 'Group'}
                </button>
            </div>
        </div>
    `;
}

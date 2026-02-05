export function renderSettingsTeams() {
    const retailer = (() => {
        const cache = window.getCache();
        const rid = localStorage.getItem('retaileros_retailer_id');
        return cache.retailers?.find(r => r.id === rid) || {};
    })();

    const members = [
        { name: retailer.contact_person || 'Store Owner', role: 'Owner', phone: retailer.mobile_number || '—', status: 'active', avatar: 'person' },
        { name: 'Ravi Kumar', role: 'Store Manager', phone: '9876500001', status: 'active', avatar: 'person' },
        { name: 'Priya Nair', role: 'Sales Executive', phone: '9876500002', status: 'active', avatar: 'person' },
        { name: 'Deepak Sharma', role: 'Technician', phone: '9876500003', status: 'invited', avatar: 'person' },
    ];

    const roles = [
        { name: 'Owner', count: 1, color: 'indigo', perms: 'Full access to all modules, settings & billing' },
        { name: 'Store Manager', count: 1, color: 'blue', perms: 'Sales, inventory, customers, reports. No billing or team settings' },
        { name: 'Sales Executive', count: 1, color: 'green', perms: 'New sales, customer lookup, inquiries. No reports or settings' },
        { name: 'Technician', count: 1, color: 'amber', perms: 'Repairs module only. View assigned jobs, update status' },
    ];

    return `
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Teams</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Staff & Access Control</p>
                    </div>
                    <button onclick="window.toast.info('Invite flow coming soon')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined text-lg">person_add</span>
                    </button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Team Stats -->
                <div class="p-6 pb-0 text-left">
                    <div class="grid grid-cols-3 gap-3 text-left">
                        <div class="card p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">${members.filter(m => m.status === 'active').length}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Active</p>
                        </div>
                        <div class="card p-4 text-center">
                            <p class="text-2xl font-black text-amber-500">${members.filter(m => m.status === 'invited').length}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Pending</p>
                        </div>
                        <div class="card p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">${roles.length}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Roles</p>
                        </div>
                    </div>
                </div>

                <!-- Team Members -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <div class="flex items-center justify-between text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                            <span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Team Members
                        </p>
                    </div>
                    <div class="space-y-3 text-left">
                        ${members.map((m, i) => `
                            <div class="card p-4 flex items-center justify-between text-left ${m.status === 'invited' ? 'border-dashed border-amber-200 bg-amber-50/20' : ''}">
                                <div class="flex items-center gap-3 text-left">
                                    <div class="w-10 h-10 ${i === 0 ? 'bg-indigo-100' : 'bg-slate-100'} rounded-full flex items-center justify-center">
                                        <span class="material-icons-outlined ${i === 0 ? 'text-indigo-500' : 'text-slate-400'}">${m.avatar}</span>
                                    </div>
                                    <div class="text-left">
                                        <div class="flex items-center gap-2 text-left">
                                            <p class="text-xs font-black text-slate-900">${m.name}</p>
                                            ${i === 0 ? '<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-600">You</span>' : ''}
                                        </div>
                                        <p class="text-[9px] font-bold text-slate-400">${m.role} &middot; ${m.phone}</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2 text-left">
                                    ${m.status === 'invited'
                                        ? '<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-amber-100 text-amber-600">Invited</span>'
                                        : '<span class="w-2 h-2 bg-green-400 rounded-full"></span>'
                                    }
                                    ${i !== 0 ? `<button onclick="window.toast.info('Member options coming soon')" class="text-slate-300 hover:text-slate-900 transition-colors"><span class="material-icons-outlined text-sm">more_vert</span></button>` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Roles & Permissions -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Roles & Permissions
                    </p>
                    <div class="space-y-3 text-left">
                        ${roles.map(r => `
                            <div class="card p-4 text-left hover:border-slate-300 transition-all cursor-pointer" onclick="window.toast.info('Role editor coming soon')">
                                <div class="flex items-center justify-between mb-2 text-left">
                                    <div class="flex items-center gap-2 text-left">
                                        <span class="w-3 h-3 bg-${r.color}-400 rounded-full"></span>
                                        <p class="text-xs font-black text-slate-900">${r.name}</p>
                                    </div>
                                    <span class="text-[8px] font-black text-slate-400 uppercase tracking-widest">${r.count} member${r.count > 1 ? 's' : ''}</span>
                                </div>
                                <p class="text-[10px] font-bold text-slate-400 pl-5">${r.perms}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Module Access Matrix -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Quick Access Matrix
                    </p>
                    <div class="card p-4 overflow-x-auto text-left">
                        <table class="w-full text-left">
                            <thead>
                                <tr class="text-[8px] font-black text-slate-400 uppercase tracking-widest">
                                    <th class="pb-3 pr-4">Module</th>
                                    <th class="pb-3 text-center">Owner</th>
                                    <th class="pb-3 text-center">Manager</th>
                                    <th class="pb-3 text-center">Sales</th>
                                    <th class="pb-3 text-center">Tech</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${[
                                    { mod: 'Sales Desk', o: true, m: true, s: true, t: false },
                                    { mod: 'Customers', o: true, m: true, s: true, t: false },
                                    { mod: 'Inventory', o: true, m: true, s: false, t: false },
                                    { mod: 'Reports', o: true, m: true, s: false, t: false },
                                    { mod: 'Repairs', o: true, m: true, s: false, t: true },
                                    { mod: 'Automation', o: true, m: true, s: false, t: false },
                                    { mod: 'Settings', o: true, m: false, s: false, t: false },
                                ].map(r => `
                                    <tr class="border-t border-slate-50">
                                        <td class="py-2.5 pr-4 text-[10px] font-bold text-slate-900">${r.mod}</td>
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${r.o ? 'text-green-500' : 'text-slate-200'}">${r.o ? 'check_circle' : 'cancel'}</span></td>
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${r.m ? 'text-green-500' : 'text-slate-200'}">${r.m ? 'check_circle' : 'cancel'}</span></td>
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${r.s ? 'text-green-500' : 'text-slate-200'}">${r.s ? 'check_circle' : 'cancel'}</span></td>
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${r.t ? 'text-green-500' : 'text-slate-200'}">${r.t ? 'check_circle' : 'cancel'}</span></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.toast.info('Invite flow coming soon')" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">person_add</span> Invite Team Member
                    </button>
                </div>
            </div>
        </div>
    `;
}

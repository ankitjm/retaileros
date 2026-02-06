import { db } from '../../utils/db.js';

export function renderSettingsTeams() {
    const retailer = (() => {
        const cache = window.getCache();
        const rid = localStorage.getItem('retaileros_retailer_id');
        return cache.retailers?.find(r => r.id === rid) || {};
    })();

    const cache = window.getCache();
    const dbMembers = cache.teamMembers || [];
    const dbRoles = cache.teamRoles || [];

    // If no DB members exist, show owner from retailer + hardcoded demo data
    const members = dbMembers.length > 0 ? dbMembers : [
        { id: 'owner', name: retailer.contact_person || 'Store Owner', role: 'Owner', phone: retailer.mobile_number || '—', status: 'active' },
    ];

    // If no DB roles, use hardcoded defaults
    const roles = dbRoles.length > 0
        ? dbRoles.map(r => {
            let perms = r.permissions;
            try { perms = typeof perms === 'string' ? JSON.parse(perms) : perms; } catch(e) { perms = {}; }
            return { ...r, permissions: perms, count: members.filter(m => m.role === r.name).length };
        })
        : [
            { name: 'Owner', count: members.filter(m => m.role === 'Owner').length || 1, color: 'slate', description: 'Full access to all modules, settings & billing' },
            { name: 'Store Manager', count: members.filter(m => m.role === 'Store Manager').length, color: 'slate', description: 'Sales, inventory, customers, reports. No billing or team settings' },
            { name: 'Sales Executive', count: members.filter(m => m.role === 'Sales Executive').length, color: 'slate', description: 'New sales, customer lookup, inquiries. No reports or settings' },
            { name: 'Technician', count: members.filter(m => m.role === 'Technician').length, color: 'slate', description: 'Repairs module only. View assigned jobs, update status' },
        ];

    const roleNames = roles.length > 0 ? roles.map(r => r.name) : ['Owner', 'Store Manager', 'Sales Executive', 'Technician'];

    // Add member handler
    window._addTeamMember = async function() {
        const name = prompt('Team member name:');
        if (!name || !name.trim()) return;
        const phone = prompt('Phone number:');
        const role = prompt(`Role (${roleNames.join(', ')}):`);
        if (!role) return;

        const id = `tm_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
        try {
            await db.teamMembers.add({ id, name: name.trim(), role, phone: phone || null, email: null, status: 'invited' });
            if (!window._db_cache.teamMembers) window._db_cache.teamMembers = [];
            window._db_cache.teamMembers.push({ id, name: name.trim(), role, phone, status: 'invited' });
            const r = (() => { const c = window.getCache(); const rid = localStorage.getItem('retaileros_retailer_id'); return c.retailers?.find(x => x.id === rid) || {}; })();
            db.activityLogs.add({ action: 'team', detail: `Added team member ${name.trim()}`, user_name: r.contact_person || 'Owner', icon: 'person_add', color: 'slate' });
            if (window.toast) window.toast.success(`${name.trim()} invited`);
            if (window.setSettingsView) window.setSettingsView('teams');
        } catch (err) {
            console.error('Add member failed:', err);
            if (window.toast) window.toast.error('Failed to add member');
        }
    };

    // Remove member handler
    window._removeTeamMember = async function(id, name) {
        if (!confirm(`Remove ${name} from the team?`)) return;
        try {
            await db.teamMembers.delete(id);
            if (window._db_cache.teamMembers) {
                window._db_cache.teamMembers = window._db_cache.teamMembers.filter(m => m.id !== id);
            }
            const r = (() => { const c = window.getCache(); const rid = localStorage.getItem('retaileros_retailer_id'); return c.retailers?.find(x => x.id === rid) || {}; })();
            db.activityLogs.add({ action: 'team', detail: `Removed team member ${name}`, user_name: r.contact_person || 'Owner', icon: 'person_remove', color: 'slate' });
            if (window.toast) window.toast.success(`${name} removed`);
            if (window.setSettingsView) window.setSettingsView('teams');
        } catch (err) {
            console.error('Remove member failed:', err);
            if (window.toast) window.toast.error('Failed to remove member');
        }
    };

    const roleColorMap = { 'Owner': 'slate', 'Store Manager': 'slate', 'Sales Executive': 'slate', 'Technician': 'slate' };

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
                    <button onclick="window._addTeamMember()" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
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
                            <p class="text-2xl font-black text-slate-400">${members.filter(m => m.status === 'invited').length}</p>
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
                            <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Team Members
                        </p>
                    </div>
                    <div class="space-y-3 text-left">
                        ${members.map((m, i) => {
                            const isOwner = m.role === 'Owner' && i === 0;
                            return `
                            <div class="card p-4 flex items-center justify-between text-left ${m.status === 'invited' ? 'border-dashed border-slate-200 bg-slate-50/20' : ''}">
                                <div class="flex items-center gap-3 text-left">
                                    <div class="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                                        <span class="material-icons-outlined ${isOwner ? 'text-slate-500' : 'text-slate-400'}">person</span>
                                    </div>
                                    <div class="text-left">
                                        <div class="flex items-center gap-2 text-left">
                                            <p class="text-xs font-black text-slate-900">${m.name}</p>
                                            ${isOwner ? '<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-900 text-white">You</span>' : ''}
                                        </div>
                                        <p class="text-[9px] font-bold text-slate-400">${m.role} &middot; ${m.phone || '—'}</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2 text-left">
                                    ${m.status === 'invited'
                                        ? '<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-200 text-slate-600">Invited</span>'
                                        : '<span class="w-2 h-2 bg-slate-900 rounded-full"></span>'
                                    }
                                    ${!isOwner ? `<button onclick="window._removeTeamMember('${m.id}','${(m.name || '').replace(/'/g, "\\'")}')" class="text-slate-300 hover:text-slate-900 transition-colors"><span class="material-icons-outlined text-sm">close</span></button>` : ''}
                                </div>
                            </div>
                        `;}).join('')}
                    </div>
                </div>

                <!-- Roles & Permissions -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Roles & Permissions
                    </p>
                    <div class="space-y-3 text-left">
                        ${roles.map(r => {
                            const color = r.color || roleColorMap[r.name] || 'slate';
                            const perms = r.description || (typeof r.permissions === 'object' ? Object.keys(r.permissions).join(', ') : String(r.permissions || ''));
                            const count = r.count || 0;
                            return `
                            <div class="card p-4 text-left hover:border-slate-300 transition-all cursor-pointer" onclick="window.toast.info('Role editor coming soon')">
                                <div class="flex items-center justify-between mb-2 text-left">
                                    <div class="flex items-center gap-2 text-left">
                                        <span class="w-3 h-3 bg-${color}-400 rounded-full"></span>
                                        <p class="text-xs font-black text-slate-900">${r.name}</p>
                                    </div>
                                    <span class="text-[8px] font-black text-slate-400 uppercase tracking-widest">${count} member${count !== 1 ? 's' : ''}</span>
                                </div>
                                <p class="text-[10px] font-bold text-slate-400 pl-5">${perms}</p>
                            </div>
                        `;}).join('')}
                    </div>
                </div>

                <!-- Module Access Matrix -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Quick Access Matrix
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
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${r.o ? 'text-slate-900' : 'text-slate-300'}">${r.o ? 'check_circle' : 'cancel'}</span></td>
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${r.m ? 'text-slate-900' : 'text-slate-300'}">${r.m ? 'check_circle' : 'cancel'}</span></td>
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${r.s ? 'text-slate-900' : 'text-slate-300'}">${r.s ? 'check_circle' : 'cancel'}</span></td>
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${r.t ? 'text-slate-900' : 'text-slate-300'}">${r.t ? 'check_circle' : 'cancel'}</span></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window._addTeamMember()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">person_add</span> Invite Team Member
                    </button>
                </div>
            </div>
        </div>
    `;
}

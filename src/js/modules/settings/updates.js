export function renderSettingsUpdates() {
    const releases = [
        {
            version: '2.1.0',
            date: 'February 6, 2026',
            tag: 'Latest',
            tagColor: 'green',
            highlights: [
                { icon: 'shield', title: 'Complete Multi-Tenant Isolation', desc: 'Every table now filtered by retailer_id — your data is fully isolated from other stores.' },
                { icon: 'table_chart', title: '3 New Modules', desc: 'Inquiries, Repairs, and Inventory Logs now fully integrated with tenant architecture.' },
                { icon: 'settings', title: '11 New Settings Pages', desc: 'Security, Alerts, Taxes, Plugins, Teams, Logs, Language, Backup, Updates, Theme, and Help.' },
            ],
            changes: [
                'Added retailer_id filtering to all 11 tenant-scoped tables',
                'New tenant-aware CRUD helpers for inquiries, repairs, inventory_logs',
                'Replaced raw SQL calls with proper db helpers in all modules',
                'Sync layer now fetches inquiries, repairs, inventory_logs from DB',
                'Settings dashboard fully functional with all sub-apps',
            ]
        },
        {
            version: '2.0.0',
            date: 'February 5, 2026',
            tag: 'Major',
            tagColor: 'indigo',
            highlights: [
                { icon: 'store', title: 'Multi-Tenant Architecture', desc: 'Full SaaS multi-tenant design with row-level data isolation per retailer.' },
                { icon: 'login', title: 'Real Authentication', desc: 'DB-backed login via mobile number or store code. No more mock login.' },
                { icon: 'people', title: 'Demo Retailers', desc: 'TechZone Electronics and Digital World with isolated sample data for testing.' },
            ],
            changes: [
                'Added retailer_id column to 8 tenant-scoped tables',
                'State management for tenant identity (setRetailer/clearRetailer)',
                'Tenant-filtered sync layer for all data queries',
                'Real login flow with DB authentication',
                'Settings > Store shows 40+ retailer fields',
                'Created 2 demo retailers with isolated sample data',
            ]
        },
        {
            version: '1.0.0',
            date: 'January 2026',
            tag: 'Initial',
            tagColor: 'slate',
            highlights: [
                { icon: 'rocket_launch', title: 'RetailerOS Launch', desc: 'Initial release with Sales Desk, Customers, Inventory, Automations, and Repairs modules.' },
            ],
            changes: [
                'Sales Desk with new transaction flow',
                'Customer management with groups',
                'Product inventory with inward shipments',
                'Automation sequences for post-purchase journeys',
                'Repair job tracking with status lifecycle',
                'WhatsApp communication log',
                'Brand schemes and promotions',
                'Settings with Roles, Finance, Ledger, AI Config',
            ]
        },
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
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Updates</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Release Notes & Changelog</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Current Version Banner -->
                <div class="p-6 pb-0 text-left">
                    <div class="card p-5 bg-gradient-to-br from-slate-900 to-slate-800 border-0 text-left relative overflow-hidden">
                        <div class="absolute -right-6 -top-6 w-24 h-24 bg-white/5 rounded-full"></div>
                        <div class="absolute -right-2 -bottom-8 w-16 h-16 bg-white/5 rounded-full"></div>
                        <div class="flex items-center justify-between text-left relative z-10">
                            <div class="text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Current Version</p>
                                <p class="text-3xl font-black text-white mt-1 tracking-tight">v${releases[0].version}</p>
                                <p class="text-[9px] font-bold text-slate-400 mt-1">${releases[0].date}</p>
                            </div>
                            <div class="text-right">
                                <span class="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-[8px] font-black uppercase tracking-widest">Up to date</span>
                                <p class="text-[8px] font-bold text-slate-500 mt-2">RetailerOS by DigitalHues</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Release Timeline -->
                ${releases.map((rel, idx) => `
                    <div class="p-6 ${idx < releases.length - 1 ? 'border-b border-dashed border-slate-200' : ''} text-left">
                        <div class="flex items-center gap-3 mb-4 text-left">
                            <div class="flex items-center gap-2 text-left">
                                <span class="text-sm font-black text-slate-900">v${rel.version}</span>
                                <span class="text-[7px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-${rel.tagColor}-100 text-${rel.tagColor}-600">${rel.tag}</span>
                            </div>
                            <span class="text-[9px] font-bold text-slate-400">${rel.date}</span>
                        </div>

                        ${rel.highlights ? `
                            <div class="space-y-3 mb-4 text-left">
                                ${rel.highlights.map(h => `
                                    <div class="card p-4 flex items-start gap-3 text-left">
                                        <div class="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center shrink-0">
                                            <span class="material-icons-outlined text-indigo-500 text-sm">${h.icon}</span>
                                        </div>
                                        <div class="text-left">
                                            <p class="text-[11px] font-black text-slate-900">${h.title}</p>
                                            <p class="text-[10px] font-bold text-slate-500 mt-0.5 leading-relaxed">${h.desc}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}

                        <div class="text-left">
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 pl-1">Changes</p>
                            <div class="space-y-1.5 text-left">
                                ${rel.changes.map(c => `
                                    <div class="flex items-start gap-2 text-left">
                                        <span class="w-1 h-1 bg-slate-300 rounded-full mt-1.5 shrink-0"></span>
                                        <p class="text-[10px] font-bold text-slate-600">${c}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}

                <div class="p-6 pt-0 text-center">
                    <p class="text-[9px] font-bold text-slate-300">Built with care by DigitalHues</p>
                </div>
            </div>
        </div>
    `;
}

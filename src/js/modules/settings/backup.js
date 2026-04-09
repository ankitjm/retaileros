function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(url); document.body.removeChild(a); }, 1000);
}

function toCSV(rows) {
    if (!rows || rows.length === 0) return '';
    const headers = Object.keys(rows[0]);
    const lines = [
        headers.join(','),
        ...rows.map(row => headers.map(h => {
            const val = row[h] == null ? '' : String(row[h]);
            return val.includes(',') || val.includes('"') || val.includes('\n')
                ? `"${val.replace(/"/g, '""')}"`
                : val;
        }).join(','))
    ];
    return lines.join('\n');
}

window._downloadBackup = function() {
    const cache = window.getCache ? window.getCache() : {};
    const date = new Date().toISOString().slice(0, 10);
    const sections = [];

    // Collect checked sections
    const includeCustomers = document.getElementById('backup-customers')?.checked !== false;
    const includeSales = document.getElementById('backup-sales')?.checked !== false;
    const includeRepairs = document.getElementById('backup-repairs')?.checked !== false;

    if (includeCustomers && cache.customers?.length) sections.push({ name: 'customers', data: cache.customers });
    if (includeSales && cache.sales?.length) sections.push({ name: 'sales', data: cache.sales });
    if (includeRepairs && cache.repairs?.length) sections.push({ name: 'repairs', data: cache.repairs });

    if (sections.length === 0) {
        sections.push({ name: 'customers', data: cache.customers || [] });
        sections.push({ name: 'sales', data: cache.sales || [] });
        sections.push({ name: 'products', data: cache.products || [] });
    }

    // Download as JSON
    const backupData = {
        exported_at: new Date().toISOString(),
        retailer_id: localStorage.getItem('retaileros_retailer_id'),
        sections: Object.fromEntries(sections.map(s => [s.name, s.data]))
    };

    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    downloadBlob(blob, `retaileros-backup-${date}.json`);

    if (window.toast) window.toast.success('Backup downloaded');
};

export function renderSettingsBackup() {
    const cache = window.getCache();

    const stats = {
        customers: cache.customers?.length || 0,
        sales: cache.sales?.length || 0,
        products: cache.products?.length || 0,
        automations: cache.automations?.length || 0,
        repairs: cache.repairs?.length || 0,
        inquiries: cache.inquiries?.length || 0,
    };
    const totalRecords = Object.values(stats).reduce((a, b) => a + b, 0);

    const s = cache.retailerSettings?.backup || {};
    const settings = {
        auto_backup_enabled: s.auto_backup_enabled ?? true,
        backup_frequency: s.backup_frequency ?? 'Weekly',
        send_to_email: s.send_to_email ?? true,
        retention_period: s.retention_period ?? '90 days',
        export_format: s.export_format ?? 'CSV (Excel-compatible)',
    };

    return `
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left" data-settings-category="backup">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Backup</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Data Export & Restore</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Data Overview -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Your Data
                    </p>
                    <div class="grid grid-cols-3 gap-2 text-left">
                        <div class="card p-3 text-center">
                            <p class="text-lg font-black text-slate-900">${stats.customers}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Customers</p>
                        </div>
                        <div class="card p-3 text-center">
                            <p class="text-lg font-black text-slate-900">${stats.sales}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Sales</p>
                        </div>
                        <div class="card p-3 text-center">
                            <p class="text-lg font-black text-slate-900">${stats.products}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Products</p>
                        </div>
                        <div class="card p-3 text-center">
                            <p class="text-lg font-black text-slate-900">${stats.automations}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Automations</p>
                        </div>
                        <div class="card p-3 text-center">
                            <p class="text-lg font-black text-slate-900">${stats.repairs}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Repairs</p>
                        </div>
                        <div class="card p-3 text-center">
                            <p class="text-lg font-black text-slate-900">${totalRecords}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Total</p>
                        </div>
                    </div>
                </div>

                <!-- Manual Export -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Export Data
                    </p>
                    <div class="space-y-3 text-left">
                        <p class="text-[10px] font-bold text-slate-500">Select what to include in your backup:</p>
                        ${[
                            { name: 'Customers & Groups', icon: 'people', checked: true },
                            { name: 'Sales & Invoices', icon: 'receipt', checked: true },
                            { name: 'Products & Inventory', icon: 'inventory_2', checked: true },
                            { name: 'Automations & Messages', icon: 'smart_toy', checked: true },
                            { name: 'Repairs & Service Jobs', icon: 'build', checked: false },
                            { name: 'Communication Logs', icon: 'chat', checked: false },
                            { name: 'Inquiries', icon: 'help_outline', checked: false },
                        ].map(item => `
                            <div class="card p-3 flex items-center justify-between text-left">
                                <div class="flex items-center gap-3 text-left">
                                    <span class="material-icons-outlined text-slate-400 text-sm">${item.icon}</span>
                                    <p class="text-xs font-bold text-slate-900">${item.name}</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" class="sr-only peer" ${item.checked ? 'checked' : ''}>
                                    <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                                </label>
                            </div>
                        `).join('')}
                    </div>
                    <div class="flex items-center justify-between text-left">
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900">Export Format</p>
                        </div>
                        <select data-field="export_format" onchange="window.saveSettings('backup')" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                            <option ${settings.export_format === 'CSV (Excel-compatible)' ? 'selected' : ''}>CSV (Excel-compatible)</option>
                            <option ${settings.export_format === 'JSON (Developer format)' ? 'selected' : ''}>JSON (Developer format)</option>
                            <option ${settings.export_format === 'PDF Report' ? 'selected' : ''}>PDF Report</option>
                        </select>
                    </div>
                    <button onclick="window._downloadBackup()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">download</span> Download Backup
                    </button>
                </div>

                <!-- Auto Backup -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Automatic Backup
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Auto-Backup</p>
                                <p class="text-[9px] font-bold text-slate-400">Automatically backup data on schedule</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" data-field="auto_backup_enabled" onchange="window.saveSettings('backup')" ${settings.auto_backup_enabled ? 'checked' : ''}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Frequency</p>
                                <p class="text-[9px] font-bold text-slate-400">How often to run auto-backup</p>
                            </div>
                            <select data-field="backup_frequency" onchange="window.saveSettings('backup')" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option ${settings.backup_frequency === 'Daily' ? 'selected' : ''}>Daily</option>
                                <option ${settings.backup_frequency === 'Weekly' ? 'selected' : ''}>Weekly</option>
                                <option ${settings.backup_frequency === 'Monthly' ? 'selected' : ''}>Monthly</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Send to Email</p>
                                <p class="text-[9px] font-bold text-slate-400">Email backup file to store owner</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" data-field="send_to_email" onchange="window.saveSettings('backup')" ${settings.send_to_email ? 'checked' : ''}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Backup History -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Backup History
                    </p>
                    <div class="space-y-2 text-left">
                        <p class="text-[10px] text-slate-300 text-center py-6">Use "Download Backup" above to export your data. Backup history will appear here.</p>
                    </div>
                </div>

                <!-- Data Retention -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Data Retention
                    </p>
                    <div class="card p-4 flex items-center justify-between text-left">
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900">Keep Backup History</p>
                            <p class="text-[9px] font-bold text-slate-400">Auto-delete old backups after period</p>
                        </div>
                        <select data-field="retention_period" onchange="window.saveSettings('backup')" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                            <option ${settings.retention_period === '30 days' ? 'selected' : ''}>30 days</option>
                            <option ${settings.retention_period === '90 days' ? 'selected' : ''}>90 days</option>
                            <option ${settings.retention_period === '1 year' ? 'selected' : ''}>1 year</option>
                            <option ${settings.retention_period === 'Forever' ? 'selected' : ''}>Forever</option>
                        </select>
                    </div>
                    <div class="card p-4 bg-slate-100 border-slate-200 text-left">
                        <div class="flex items-start gap-3 text-left">
                            <span class="material-icons-outlined text-slate-500 text-lg mt-0.5">warning</span>
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-500">Delete All Store Data</p>
                                <p class="text-[9px] font-bold text-slate-500 mt-1">Permanently erase all data including customers, sales, inventory and automations. This action cannot be undone.</p>
                                <button onclick="window.toast.warning('Please contact support to delete your data')" class="mt-3 px-4 py-2 bg-white border border-slate-200 rounded-lg text-[8px] font-black text-slate-400 uppercase tracking-widest hover:bg-slate-50 transition-all">Request Data Deletion</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

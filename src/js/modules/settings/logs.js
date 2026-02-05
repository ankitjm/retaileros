export function renderSettingsLogs() {
    const retailer = (() => {
        const cache = window.getCache();
        const rid = localStorage.getItem('retaileros_retailer_id');
        return cache.retailers?.find(r => r.id === rid) || {};
    })();

    const now = new Date();
    const fmt = (daysAgo, h, m) => {
        const d = new Date(now);
        d.setDate(d.getDate() - daysAgo);
        d.setHours(h, m);
        return d;
    };

    const logs = [
        { action: 'New sale created', detail: 'ORD-001 — iPhone 15 Pro + AirPods (₹1,50,000)', user: retailer.contact_person || 'Owner', icon: 'shopping_cart', color: 'green', time: fmt(0, 14, 30) },
        { action: 'Customer added', detail: 'Arjun Malhotra (9876543210)', user: retailer.contact_person || 'Owner', icon: 'person_add', color: 'blue', time: fmt(0, 14, 25) },
        { action: 'Automation triggered', detail: 'Post-purchase journey for ORD-001', user: 'System', icon: 'smart_toy', color: 'purple', time: fmt(0, 14, 31) },
        { action: 'Repair job created', detail: 'REP-A1B2C3 — iPhone screen replacement', user: 'Ravi Kumar', icon: 'build', color: 'amber', time: fmt(0, 12, 15) },
        { action: 'Stock updated', detail: 'iPhone 15 Pro — Stock reduced to 9', user: 'System', icon: 'inventory_2', color: 'slate', time: fmt(0, 14, 30) },
        { action: 'Login successful', detail: `Browser: Chrome / macOS`, user: retailer.contact_person || 'Owner', icon: 'login', color: 'green', time: fmt(0, 10, 0) },
        { action: 'Settings changed', detail: 'Tax rates updated for Smartphones', user: retailer.contact_person || 'Owner', icon: 'settings', color: 'indigo', time: fmt(1, 18, 45) },
        { action: 'New sale created', detail: 'ORD-002 — Samsung AC 1.5T (₹42,000)', user: 'Ravi Kumar', icon: 'shopping_cart', color: 'green', time: fmt(1, 16, 20) },
        { action: 'Inquiry logged', detail: 'Galaxy S24 Ultra — Budget ₹1.2L', user: 'Priya Nair', icon: 'help_outline', color: 'orange', time: fmt(1, 15, 0) },
        { action: 'WhatsApp sent', detail: 'Installation reminder to Priya Sharma', user: 'System', icon: 'chat', color: 'green', time: fmt(1, 9, 0) },
        { action: 'Backup completed', detail: 'Auto backup — 2.4 MB exported', user: 'System', icon: 'cloud_done', color: 'blue', time: fmt(2, 3, 0) },
        { action: 'Failed login attempt', detail: 'Unknown device — IP 103.xx.xx.xx', user: 'Unknown', icon: 'warning', color: 'red', time: fmt(2, 22, 15) },
    ];

    const formatTime = (d) => {
        const diff = Math.floor((now - d) / 60000);
        if (diff < 60) return `${diff}m ago`;
        if (diff < 1440) return `${Math.floor(diff / 60)}h ago`;
        if (diff < 2880) return 'Yesterday';
        return `${Math.floor(diff / 1440)}d ago`;
    };

    const formatFullTime = (d) => {
        return d.toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hour12: true });
    };

    return `
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Activity Logs</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Audit Trail</p>
                    </div>
                    <button onclick="window.toast.info('Export coming soon')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined text-lg">download</span>
                    </button>
                </div>

                <!-- Filter Bar -->
                <div class="flex gap-2 mt-4 text-left overflow-x-auto pb-1">
                    ${['All', 'Sales', 'Inventory', 'Repairs', 'Auth', 'System'].map((f, i) => `
                        <button class="px-3 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${i === 0 ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}">${f}</button>
                    `).join('')}
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Today -->
                <div class="px-6 pt-4 pb-2 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Today</p>
                </div>
                <div class="px-6 text-left">
                    ${logs.filter(l => {
                        const d = new Date(l.time);
                        return d.toDateString() === now.toDateString();
                    }).map(l => `
                        <div class="flex items-start gap-3 py-4 border-b border-slate-50 text-left">
                            <div class="w-8 h-8 bg-${l.color}-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                <span class="material-icons-outlined text-${l.color}-500 text-sm">${l.icon}</span>
                            </div>
                            <div class="flex-1 min-w-0 text-left">
                                <div class="flex items-start justify-between gap-2 text-left">
                                    <p class="text-[11px] font-black text-slate-900">${l.action}</p>
                                    <span class="text-[8px] font-bold text-slate-400 whitespace-nowrap shrink-0">${formatTime(l.time)}</span>
                                </div>
                                <p class="text-[10px] font-bold text-slate-500 mt-0.5 truncate">${l.detail}</p>
                                <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mt-1">${l.user} &middot; ${formatFullTime(l.time)}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Yesterday -->
                <div class="px-6 pt-6 pb-2 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Yesterday</p>
                </div>
                <div class="px-6 text-left">
                    ${logs.filter(l => {
                        const d = new Date(l.time);
                        const yesterday = new Date(now);
                        yesterday.setDate(yesterday.getDate() - 1);
                        return d.toDateString() === yesterday.toDateString();
                    }).map(l => `
                        <div class="flex items-start gap-3 py-4 border-b border-slate-50 text-left">
                            <div class="w-8 h-8 bg-${l.color}-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                <span class="material-icons-outlined text-${l.color}-500 text-sm">${l.icon}</span>
                            </div>
                            <div class="flex-1 min-w-0 text-left">
                                <div class="flex items-start justify-between gap-2 text-left">
                                    <p class="text-[11px] font-black text-slate-900">${l.action}</p>
                                    <span class="text-[8px] font-bold text-slate-400 whitespace-nowrap shrink-0">${formatFullTime(l.time)}</span>
                                </div>
                                <p class="text-[10px] font-bold text-slate-500 mt-0.5 truncate">${l.detail}</p>
                                <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mt-1">${l.user}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- Older -->
                <div class="px-6 pt-6 pb-2 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Older</p>
                </div>
                <div class="px-6 text-left">
                    ${logs.filter(l => {
                        const d = new Date(l.time);
                        const yesterday = new Date(now);
                        yesterday.setDate(yesterday.getDate() - 1);
                        return d.toDateString() !== now.toDateString() && d.toDateString() !== yesterday.toDateString();
                    }).map(l => `
                        <div class="flex items-start gap-3 py-4 border-b border-slate-50 text-left">
                            <div class="w-8 h-8 bg-${l.color}-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                <span class="material-icons-outlined text-${l.color}-500 text-sm">${l.icon}</span>
                            </div>
                            <div class="flex-1 min-w-0 text-left">
                                <div class="flex items-start justify-between gap-2 text-left">
                                    <p class="text-[11px] font-black text-slate-900">${l.action}</p>
                                    <span class="text-[8px] font-bold text-slate-400 whitespace-nowrap shrink-0">${formatTime(l.time)}</span>
                                </div>
                                <p class="text-[10px] font-bold text-slate-500 mt-0.5 truncate">${l.detail}</p>
                                <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mt-1">${l.user} &middot; ${formatFullTime(l.time)}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="p-6 text-center">
                    <p class="text-[9px] font-bold text-slate-300">Showing last 7 days of activity</p>
                </div>
            </div>
        </div>
    `;
}

export function renderSettingsLogs() {
    const retailer = (() => {
        const cache = window.getCache();
        const rid = localStorage.getItem('retaileros_retailer_id');
        return cache.retailers?.find(r => r.id === rid) || {};
    })();

    const cache = window.getCache();
    const dbLogs = cache.activityLogs || [];

    const now = new Date();

    // Use DB logs if available, otherwise show placeholder
    const logs = dbLogs.length > 0
        ? dbLogs.map(l => ({
            action: l.action || 'Activity',
            detail: l.detail || '',
            user: l.user_name || 'System',
            icon: l.icon || 'info',
            color: l.color || 'slate',
            time: new Date(l.created_at),
        }))
        : [
            { action: 'No activity yet', detail: 'Actions like sales, settings changes, and logins will appear here', user: 'System', icon: 'info', color: 'slate', time: now },
        ];

    const formatTime = (d) => {
        const diff = Math.floor((now - d) / 60000);
        if (diff < 1) return 'Just now';
        if (diff < 60) return `${diff}m ago`;
        if (diff < 1440) return `${Math.floor(diff / 60)}h ago`;
        if (diff < 2880) return 'Yesterday';
        return `${Math.floor(diff / 1440)}d ago`;
    };

    const formatFullTime = (d) => {
        return d.toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hour12: true });
    };

    // Group logs by day
    const todayStr = now.toDateString();
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();

    const todayLogs = logs.filter(l => l.time.toDateString() === todayStr);
    const yesterdayLogs = logs.filter(l => l.time.toDateString() === yesterdayStr);
    const olderLogs = logs.filter(l => l.time.toDateString() !== todayStr && l.time.toDateString() !== yesterdayStr);

    const renderLog = (l, showRelative) => `
        <div class="flex items-start gap-3 py-4 border-b border-slate-50 text-left">
            <div class="w-8 h-8 bg-${l.color}-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <span class="material-icons-outlined text-${l.color}-500 text-sm">${l.icon}</span>
            </div>
            <div class="flex-1 min-w-0 text-left">
                <div class="flex items-start justify-between gap-2 text-left">
                    <p class="text-[11px] font-black text-slate-900">${l.action}</p>
                    <span class="text-[8px] font-bold text-slate-400 whitespace-nowrap shrink-0">${showRelative ? formatTime(l.time) : formatFullTime(l.time)}</span>
                </div>
                <p class="text-[10px] font-bold text-slate-500 mt-0.5 truncate">${l.detail}</p>
                <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mt-1">${l.user} &middot; ${formatFullTime(l.time)}</p>
            </div>
        </div>
    `;

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
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                ${todayLogs.length > 0 ? `
                    <div class="px-6 pt-4 pb-2 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Today</p>
                    </div>
                    <div class="px-6 text-left">
                        ${todayLogs.map(l => renderLog(l, true)).join('')}
                    </div>
                ` : ''}

                ${yesterdayLogs.length > 0 ? `
                    <div class="px-6 pt-6 pb-2 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Yesterday</p>
                    </div>
                    <div class="px-6 text-left">
                        ${yesterdayLogs.map(l => renderLog(l, false)).join('')}
                    </div>
                ` : ''}

                ${olderLogs.length > 0 ? `
                    <div class="px-6 pt-6 pb-2 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Older</p>
                    </div>
                    <div class="px-6 text-left">
                        ${olderLogs.map(l => renderLog(l, false)).join('')}
                    </div>
                ` : ''}

                ${logs.length === 0 ? `
                    <div class="p-6 text-center">
                        <span class="material-icons-outlined text-slate-200 text-4xl mb-3">history</span>
                        <p class="text-[10px] font-black text-slate-400">No activity recorded yet</p>
                        <p class="text-[9px] font-bold text-slate-300 mt-1">Actions will appear here as you use the app</p>
                    </div>
                ` : ''}

                <div class="p-6 text-center">
                    <p class="text-[9px] font-bold text-slate-300">Showing last ${logs.length} activit${logs.length === 1 ? 'y' : 'ies'}</p>
                </div>
            </div>
        </div>
    `;
}

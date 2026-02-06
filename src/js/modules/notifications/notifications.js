import { state } from '../../state.js';

// Color palette per category — gives each group a distinct visual identity
const GROUP_STYLES = {
    'store-orders': { gradient: 'from-blue-500 to-blue-600', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', ring: 'ring-blue-500/20', badge: 'bg-blue-500', light: 'bg-blue-500/10' },
    'low-stock':    { gradient: 'from-amber-500 to-orange-500', bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', ring: 'ring-amber-500/20', badge: 'bg-amber-500', light: 'bg-amber-500/10' },
    'draft-sales':  { gradient: 'from-slate-500 to-slate-600', bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200', ring: 'ring-slate-500/20', badge: 'bg-slate-500', light: 'bg-slate-500/10' },
    'inquiries':    { gradient: 'from-violet-500 to-purple-600', bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-100', ring: 'ring-violet-500/20', badge: 'bg-violet-500', light: 'bg-violet-500/10' },
    'repairs':      { gradient: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100', ring: 'ring-emerald-500/20', badge: 'bg-emerald-500', light: 'bg-emerald-500/10' },
    'automation':   { gradient: 'from-cyan-500 to-blue-500', bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-100', ring: 'ring-cyan-500/20', badge: 'bg-cyan-500', light: 'bg-cyan-500/10' },
    'campaigns':    { gradient: 'from-rose-500 to-pink-600', bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100', ring: 'ring-rose-500/20', badge: 'bg-rose-500', light: 'bg-rose-500/10' },
    'birthdays':    { gradient: 'from-pink-400 to-rose-500', bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-100', ring: 'ring-pink-500/20', badge: 'bg-pink-500', light: 'bg-pink-500/10' },
};

const DEFAULT_STYLE = { gradient: 'from-slate-500 to-slate-600', bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200', ring: 'ring-slate-500/20', badge: 'bg-slate-500', light: 'bg-slate-500/10' };

function getNotificationGroups() {
    const cache = window.getCache();
    const groups = [];

    // 1. Pending store orders
    const pendingOrders = (cache.storeOrders || []).filter(o => o.order_status === 'pending');
    if (pendingOrders.length > 0) {
        groups.push({
            key: 'store-orders',
            icon: 'local_shipping',
            title: 'Pending Orders',
            subtitle: 'Online store orders awaiting action',
            items: pendingOrders.map(o => ({
                id: o.id,
                primary: `Order #${o.order_number || o.id}`,
                secondary: o.customer_name || 'Walk-in Customer',
                meta: `₹${Number(o.total_amount || 0).toLocaleString()}`,
                action: () => { window.setMyStoreTab('orders'); window.setActiveStoreOrder(o.id); window.setApp('mystore'); }
            }))
        });
    }

    // 2. Low stock items (net stock <= 5)
    const products = cache.products || [];
    const logs = cache.inventoryLogs || [];
    const lowStockItems = products.filter(p => {
        const inward = logs.filter(l => l.product_id === p.id && l.type === 'inward').reduce((s, l) => s + (parseInt(l.quantity) || 0), 0);
        const outward = logs.filter(l => l.product_id === p.id && l.type === 'outward').reduce((s, l) => s + (parseInt(l.quantity) || 0), 0);
        const net = inward - outward;
        return net <= 5 && net >= 0;
    }).map(p => {
        const inward = logs.filter(l => l.product_id === p.id && l.type === 'inward').reduce((s, l) => s + (parseInt(l.quantity) || 0), 0);
        const outward = logs.filter(l => l.product_id === p.id && l.type === 'outward').reduce((s, l) => s + (parseInt(l.quantity) || 0), 0);
        return { ...p, netStock: inward - outward };
    });
    if (lowStockItems.length > 0) {
        groups.push({
            key: 'low-stock',
            icon: 'inventory_2',
            title: 'Low Stock',
            subtitle: 'Items running low on inventory',
            items: lowStockItems.map(p => ({
                id: p.id,
                primary: p.name,
                secondary: `${p.brand || ''} ${p.color || ''}`.trim() || 'Uncategorized',
                meta: `${p.netStock} left`,
                metaWarn: p.netStock <= 2,
                action: () => { window.setApp('inventory'); }
            }))
        });
    }

    // 3. Draft sales
    const draftSales = (cache.sales || []).filter(s => s.status === 'draft');
    if (draftSales.length > 0) {
        const saleItems = cache.saleItems || [];
        groups.push({
            key: 'draft-sales',
            icon: 'edit_note',
            title: 'Incomplete Drafts',
            subtitle: 'Unfinished sales waiting to complete',
            items: draftSales.map(s => {
                const items = saleItems.filter(si => si.sale_id === s.id);
                const topItem = items[0];
                return {
                    id: s.id,
                    primary: s.customer_name || `Draft #${s.id}`,
                    secondary: topItem ? `${topItem.product_name}${items.length > 1 ? ` +${items.length - 1} more` : ''}` : 'No items',
                    meta: `₹${Number(s.total || 0).toLocaleString()}`,
                    action: () => { window.setHistoryViewMode('drafts'); window.setHistoryDateFilter('all'); window.setSalesHistoryId(s.id); window.setTab('history'); window.setApp('sales'); }
                };
            })
        });
    }

    // 4. Unresolved inquiries
    const pendingInquiries = (cache.inquiries || []).filter(i => i.status === 'PENDING');
    if (pendingInquiries.length > 0) {
        groups.push({
            key: 'inquiries',
            icon: 'help_outline',
            title: 'Unresolved Inquiries',
            subtitle: 'Customer questions needing response',
            items: pendingInquiries.map(i => ({
                id: i.id,
                primary: i.customer_name || 'Unknown',
                secondary: i.product_name || i.description || 'General inquiry',
                meta: new Date(i.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }),
                action: () => { window.setActiveInquiry(i); window.setInquiryViewMode('resolve'); window.setApp('inquiries'); }
            }))
        });
    }

    // 5. Active repairs
    const activeRepairs = (cache.repairs || []).filter(r => r.status === 'active');
    if (activeRepairs.length > 0) {
        groups.push({
            key: 'repairs',
            icon: 'build',
            title: 'Active Repairs',
            subtitle: 'Devices currently being serviced',
            items: activeRepairs.map(r => ({
                id: r.id,
                primary: r.device_name || r.device_type || 'Device',
                secondary: r.customer_name || 'Walk-in',
                meta: r.issue || 'Repair in progress',
                action: () => { window.setActiveRepairJob && window.setActiveRepairJob(r.id); window.setRepairTab('active'); window.setApp('repairs'); }
            }))
        });
    }

    // 6. Scheduled automation messages (next 7 days)
    const now = new Date();
    const weekLater = new Date(now.getTime() + 7 * 86400000);
    const automations = cache.automations || [];
    const scheduledMsgs = (cache.automationMessages || []).filter(m => {
        if (m.status !== 'pending') return false;
        const d = new Date(m.scheduled_date);
        return d >= now && d <= weekLater;
    }).sort((a, b) => new Date(a.scheduled_date) - new Date(b.scheduled_date));
    if (scheduledMsgs.length > 0) {
        groups.push({
            key: 'automation',
            icon: 'smart_toy',
            title: 'Scheduled Messages',
            subtitle: 'Automated messages going out this week',
            iconSymbol: true,
            items: scheduledMsgs.map(m => {
                const automation = automations.find(a => a.id === m.automation_id);
                const scheduledDate = new Date(m.scheduled_date);
                const isToday = scheduledDate.toDateString() === now.toDateString();
                const isTomorrow = scheduledDate.toDateString() === new Date(Date.now() + 86400000).toDateString();
                const dateLabel = isToday ? 'Today' : isTomorrow ? 'Tomorrow' : scheduledDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
                return {
                    id: m.id,
                    primary: m.title || 'Scheduled Message',
                    secondary: automation?.customer_name || 'Customer',
                    meta: dateLabel,
                    action: () => { window.setActiveAutomation(m.automation_id); window.setAutomationViewMode('details'); window.setApp('automation'); }
                };
            })
        });
    }

    // 7. Live pre-booking campaigns
    const liveCampaigns = (cache.campaigns || []).filter(c => {
        if (!c.start_date || !c.end_date) return c.status === 'active';
        const start = new Date(c.start_date);
        const end = new Date(c.end_date);
        return now >= start && now <= end;
    });
    if (liveCampaigns.length > 0) {
        groups.push({
            key: 'campaigns',
            icon: 'rocket_launch',
            title: 'Live Campaigns',
            subtitle: 'Active pre-booking campaigns',
            items: liveCampaigns.map(c => ({
                id: c.id,
                primary: c.name || c.title || 'Campaign',
                secondary: c.product_name || 'Pre-booking',
                meta: 'Active',
                action: () => { window.setActiveCampaign(c); window.setPreBookingViewMode('details'); window.setApp('prebooking'); }
            }))
        });
    }

    // 8. Client birthdays today
    const today = `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const birthdays = (cache.customers || []).filter(c => {
        if (!c.dob) return false;
        const dob = c.dob.includes('T') ? c.dob.split('T')[0] : c.dob;
        const parts = dob.split('-');
        if (parts.length < 3) return false;
        return `${parts[1]}-${parts[2]}` === today;
    });
    if (birthdays.length > 0) {
        groups.push({
            key: 'birthdays',
            icon: 'cake',
            title: 'Birthdays Today',
            subtitle: 'Wish your customers a happy birthday',
            items: birthdays.map(c => ({
                id: c.id,
                primary: c.name,
                secondary: c.phone || c.email || '',
                meta: 'Birthday',
                action: () => { window.setClientMode('profile', c.name, c.id); window.setApp('clients'); }
            }))
        });
    }

    return groups;
}

function getNotificationCount() {
    return getNotificationGroups().reduce((sum, g) => sum + g.items.length, 0);
}

window.getNotificationCount = getNotificationCount;

// Track which accordion sections are expanded (none by default)
if (!window._notifExpanded) window._notifExpanded = {};

window._toggleNotifGroup = function(key) {
    window._notifExpanded[key] = !window._notifExpanded[key];
    window.triggerRender();
};

// Store actions globally for onclick
window._notifActions = [];

function renderHeader(isMobile) {
    const enabled = window._pushNotificationsEnabled !== false;
    const total = getNotificationCount();
    return `
        <header class="px-5 sm:px-8 pt-5 sm:pt-8 pb-3 shrink-0 text-left">
            <div class="flex items-center justify-between mb-4 text-left">
                <button onclick="setApp('launcher')" class="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-all text-left">
                    <span class="material-icons-outlined text-slate-600 text-lg">chevron_left</span>
                </button>
                <button onclick="window.togglePushNotifications()" class="w-9 h-9 flex items-center justify-center rounded-xl ${enabled ? 'bg-slate-900' : 'bg-slate-100'} transition-all" title="Push Notifications">
                    <span class="material-icons-outlined text-sm ${enabled ? 'text-white' : 'text-slate-400'}">${enabled ? 'notifications_active' : 'notifications_off'}</span>
                </button>
            </div>
            <div class="text-left">
                <h1 class="text-2xl font-black tracking-tight text-slate-900 text-left">Alerts</h1>
                <p class="text-[10px] font-bold text-slate-400 mt-0.5 text-left">${total > 0 ? `${total} item${total !== 1 ? 's' : ''} need${total === 1 ? 's' : ''} your attention` : 'You\'re all caught up'}</p>
            </div>
        </header>
    `;
}

// Summary strip — horizontal scrollable overview cards at the top
function renderSummaryStrip(groups) {
    if (groups.length === 0) return '';
    return `
        <div class="flex gap-2.5 overflow-x-auto pb-1 px-5 sm:px-8 -mx-0 no-scrollbar" style="scrollbar-width:none;-ms-overflow-style:none;">
            ${groups.map(g => {
                const s = GROUP_STYLES[g.key] || DEFAULT_STYLE;
                return `
                    <button type="button" onclick="window._toggleNotifGroup('${g.key}');document.getElementById('notif-group-${g.key}')?.scrollIntoView({behavior:'smooth',block:'nearest'})" class="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl ${s.light} ${s.border} border shrink-0 hover:scale-[1.02] active:scale-[0.98] transition-all">
                        <div class="w-7 h-7 bg-gradient-to-br ${s.gradient} rounded-lg flex items-center justify-center shadow-sm">
                            <span class="${g.iconSymbol ? 'material-symbols-outlined' : 'material-icons-outlined'} text-white text-xs">${g.icon}</span>
                        </div>
                        <div class="text-left">
                            <p class="text-[10px] font-black text-slate-900 leading-tight">${g.items.length}</p>
                            <p class="text-[8px] font-bold ${s.text} uppercase tracking-wider leading-tight">${g.title}</p>
                        </div>
                    </button>
                `;
            }).join('')}
        </div>
    `;
}

function renderGroupSection(group, actionOffset) {
    const isExpanded = window._notifExpanded[group.key] || false;
    const s = GROUP_STYLES[group.key] || DEFAULT_STYLE;
    return `
        <section id="notif-group-${group.key}" class="text-left">
            <!-- Accordion Header -->
            <button type="button" onclick="window._toggleNotifGroup('${group.key}')" class="w-full flex items-center gap-3 px-4 py-3.5 bg-white border ${isExpanded ? 'border-slate-200 shadow-sm' : 'border-slate-100'} ${isExpanded ? 'rounded-t-2xl' : 'rounded-2xl'} hover:border-slate-200 transition-all cursor-pointer group">
                <div class="w-10 h-10 bg-gradient-to-br ${s.gradient} rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                    <span class="${group.iconSymbol ? 'material-symbols-outlined' : 'material-icons-outlined'} text-white text-base">${group.icon}</span>
                </div>
                <div class="flex-1 min-w-0 text-left">
                    <h3 class="text-xs font-black text-slate-900 tracking-tight text-left">${group.title}</h3>
                    <p class="text-[9px] font-bold text-slate-400 text-left">${group.subtitle || ''}</p>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    <span class="min-w-[22px] h-[22px] ${s.badge} text-white rounded-full flex items-center justify-center text-[9px] font-black px-1.5 shadow-sm">${group.items.length}</span>
                    <span class="material-icons-outlined text-base text-slate-300 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}">${isExpanded ? 'expand_less' : 'expand_more'}</span>
                </div>
            </button>
            ${isExpanded ? `
                <div class="bg-white border border-t-0 border-slate-200 rounded-b-2xl overflow-hidden shadow-sm">
                    ${group.items.map((item, i) => {
                        const idx = actionOffset + i;
                        const isLast = i === group.items.length - 1;
                        return `
                            <button type="button" onclick="window._notifActions[${idx}]()" class="w-full px-4 py-3 flex items-center gap-3 hover:${s.bg} transition-all text-left cursor-pointer group/item ${!isLast ? 'border-b border-slate-50' : ''}">
                                <div class="w-9 h-9 ${s.light} rounded-xl flex items-center justify-center shrink-0 group-hover/item:scale-105 transition-transform">
                                    <span class="${group.iconSymbol ? 'material-symbols-outlined' : 'material-icons-outlined'} ${s.text} text-sm">${group.icon}</span>
                                </div>
                                <div class="flex-1 min-w-0 text-left">
                                    <h4 class="text-[11px] font-black text-slate-900 tracking-tight truncate text-left">${item.primary}</h4>
                                    <p class="text-[9px] font-bold text-slate-400 truncate text-left">${item.secondary}</p>
                                </div>
                                <div class="flex items-center gap-2 shrink-0">
                                    <span class="text-[9px] font-black ${item.metaWarn ? 'text-red-500 bg-red-50 px-2 py-0.5 rounded-full' : 'text-slate-400'} uppercase">${item.meta}</span>
                                    <span class="material-icons-outlined text-slate-200 text-sm group-hover/item:text-slate-400 transition-colors">chevron_right</span>
                                </div>
                            </button>
                        `;
                    }).join('')}
                </div>
            ` : ''}
        </section>
    `;
}

function renderEmptyState() {
    return `
        <div class="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div class="relative mb-6">
                <div class="w-20 h-20 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl flex items-center justify-center">
                    <span class="material-icons-outlined text-4xl text-emerald-400">task_alt</span>
                </div>
                <div class="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <span class="material-icons-outlined text-white text-xs">check</span>
                </div>
            </div>
            <h2 class="text-base font-black text-slate-900 tracking-tight mb-1">All Caught Up</h2>
            <p class="text-[10px] font-bold text-slate-400 max-w-[200px] leading-relaxed">No pending alerts. Everything is running smoothly.</p>
        </div>
    `;
}

function renderSecondary() {
    const groups = getNotificationGroups();
    const total = groups.reduce((s, g) => s + g.items.length, 0);
    return `
        <div class="h-full flex flex-col items-center justify-center text-center p-8">
            <div class="relative mb-5">
                <div class="w-24 h-24 ${total > 0 ? 'bg-gradient-to-br from-slate-800 to-slate-950' : 'bg-gradient-to-br from-emerald-50 to-teal-50'} rounded-3xl flex items-center justify-center shadow-xl ${total > 0 ? 'shadow-slate-900/20' : 'shadow-emerald-500/10'}">
                    <span class="material-icons-outlined text-5xl ${total > 0 ? 'text-white' : 'text-emerald-400'}">${total > 0 ? 'notifications_active' : 'task_alt'}</span>
                </div>
                ${total > 0 ? `
                    <div class="absolute -top-2 -right-2 min-w-[28px] h-7 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-black px-2 shadow-lg shadow-red-500/40 animate-pulse">${total}</div>
                ` : ''}
            </div>
            <p class="text-4xl font-black text-slate-900 tracking-tighter mb-1">${total}</p>
            <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">${total === 1 ? 'Pending Alert' : 'Pending Alerts'}</p>
            ${total > 0 ? `
                <div class="space-y-2 w-full max-w-[260px]">
                    ${groups.map(g => {
                        const s = GROUP_STYLES[g.key] || DEFAULT_STYLE;
                        return `
                            <div class="flex items-center gap-3 px-3.5 py-2.5 ${s.light} rounded-xl border ${s.border}">
                                <div class="w-7 h-7 bg-gradient-to-br ${s.gradient} rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                                    <span class="${g.iconSymbol ? 'material-symbols-outlined' : 'material-icons-outlined'} text-white text-[10px]">${g.icon}</span>
                                </div>
                                <span class="text-[9px] font-black text-slate-600 uppercase tracking-wider flex-1 text-left">${g.title}</span>
                                <span class="text-xs font-black text-slate-900">${g.items.length}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            ` : `
                <p class="text-[10px] font-bold text-slate-400 max-w-[200px] leading-relaxed">Everything is running smoothly. No action needed.</p>
            `}
        </div>
    `;
}

export function renderNotifications(mode) {
    if (mode === 'desktop-secondary') return renderSecondary();

    const groups = getNotificationGroups();

    // Build flat actions array for onclick handlers
    window._notifActions = [];
    groups.forEach(g => g.items.forEach(item => window._notifActions.push(item.action)));

    let actionOffset = 0;
    const sections = groups.map(g => {
        const html = renderGroupSection(g, actionOffset);
        actionOffset += g.items.length;
        return html;
    }).join('');

    return `
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            ${renderHeader(mode === 'mobile')}

            <div class="scrolling-content flex-1 overflow-y-auto pb-32 text-left">
                ${groups.length > 0 ? `
                    <!-- Summary Strip -->
                    <div class="mb-5">
                        ${renderSummaryStrip(groups)}
                    </div>

                    <!-- Category Accordions -->
                    <div class="space-y-3 px-5 sm:px-8">
                        ${sections}
                    </div>
                ` : renderEmptyState()}
            </div>
        </div>
    `;
}

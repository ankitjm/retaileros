import { state } from '../../state.js';

function getNotificationGroups() {
    const cache = window.getCache();
    const groups = [];

    // 1. Pending store orders
    const pendingOrders = (cache.storeOrders || []).filter(o => o.order_status === 'pending');
    if (pendingOrders.length > 0) {
        groups.push({
            key: 'store-orders',
            icon: 'local_shipping',
            title: 'Pending Store Orders',
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
    return `
        <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
            <div class="flex items-center justify-between mb-2 text-left">
                <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                    <span class="material-icons-outlined text-left">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">Alerts</h1>
                </div>
                <button onclick="window.togglePushNotifications()" class="p-2 text-left" title="Push Notifications">
                    <span class="material-icons-outlined text-xl ${enabled ? 'text-slate-900' : 'text-slate-300'}">${enabled ? 'notifications_active' : 'notifications_off'}</span>
                </button>
            </div>
        </header>
    `;
}

function renderGroupSection(group, actionOffset) {
    const isExpanded = window._notifExpanded[group.key] || false;
    return `
        <section class="text-left">
            <button type="button" onclick="window._toggleNotifGroup('${group.key}')" class="w-full flex items-center justify-between px-3 py-3 bg-white border border-slate-100 rounded-2xl hover:border-slate-200 transition-all cursor-pointer">
                <div class="flex items-center gap-2 text-left">
                    <div class="w-8 h-8 bg-slate-900 rounded-xl flex items-center justify-center shrink-0">
                        <span class="${group.iconSymbol ? 'material-symbols-outlined' : 'material-icons-outlined'} text-white text-xs">${group.icon}</span>
                    </div>
                    <h3 class="text-[10px] font-black text-slate-900 uppercase tracking-wider text-left">${group.title}</h3>
                </div>
                <div class="flex items-center gap-2">
                    <span class="w-5 h-5 bg-slate-900 text-white rounded-full flex items-center justify-center text-[8px] font-black">${group.items.length}</span>
                    <span class="material-icons-outlined text-sm text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}">${isExpanded ? 'expand_less' : 'expand_more'}</span>
                </div>
            </button>
            ${isExpanded ? `
                <div class="space-y-2 mt-2 text-left">
                    ${group.items.map((item, i) => {
                        const idx = actionOffset + i;
                        return `
                            <button type="button" onclick="window._notifActions[${idx}]()" class="card p-4 border-2 border-transparent hover:border-slate-100 transition-all text-left w-full cursor-pointer">
                                <div class="flex items-center gap-3 text-left">
                                    <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-center shrink-0">
                                        <span class="${group.iconSymbol ? 'material-symbols-outlined' : 'material-icons-outlined'} text-white text-sm">${group.icon}</span>
                                    </div>
                                    <div class="flex-1 min-w-0 text-left">
                                        <h4 class="text-xs font-black text-slate-900 tracking-tight truncate text-left">${item.primary}</h4>
                                        <p class="text-[9px] font-bold text-slate-400 truncate text-left">${item.secondary}</p>
                                    </div>
                                    <div class="text-right shrink-0">
                                        <p class="text-[9px] font-black ${item.metaWarn ? 'text-red-500' : 'text-slate-400'} uppercase">${item.meta}</p>
                                    </div>
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
            <div class="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
                <span class="material-icons-outlined text-3xl text-slate-300">check_circle</span>
            </div>
            <h2 class="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">All Caught Up</h2>
            <p class="text-[9px] font-bold text-slate-300">No pending notifications right now</p>
        </div>
    `;
}

function renderSecondary() {
    const groups = getNotificationGroups();
    const total = groups.reduce((s, g) => s + g.items.length, 0);
    return `
        <div class="h-full flex flex-col items-center justify-center text-center p-8">
            <div class="w-20 h-20 ${total > 0 ? 'bg-slate-900' : 'bg-slate-100'} rounded-2xl flex items-center justify-center mb-4">
                <span class="material-icons-outlined text-4xl ${total > 0 ? 'text-white' : 'text-slate-300'}">${total > 0 ? 'notifications_active' : 'notifications_none'}</span>
            </div>
            <p class="text-3xl font-black text-slate-900 tracking-tighter mb-1">${total}</p>
            <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">${total === 1 ? 'Pending Alert' : 'Pending Alerts'}</p>
            ${total > 0 ? `
                <div class="mt-6 space-y-2 w-full max-w-[240px]">
                    ${groups.map(g => `
                        <div class="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-lg">
                            <span class="text-[9px] font-black text-slate-500 uppercase tracking-wider flex items-center gap-2">
                                <span class="${g.iconSymbol ? 'material-symbols-outlined' : 'material-icons-outlined'} text-xs">${g.icon}</span>
                                ${g.title}
                            </span>
                            <span class="text-[9px] font-black text-slate-900">${g.items.length}</span>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
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
            <div class="scrolling-content flex-1 overflow-y-auto px-4 sm:px-8 pb-32 text-left">
                ${groups.length > 0 ? `
                    <div class="space-y-6">
                        ${sections}
                    </div>
                ` : renderEmptyState()}
            </div>
        </div>
    `;
}

import { state } from '../../state.js';

function getNotificationGroups() {
    const cache = window.getCache();
    const groups = [];
    const now = new Date();

    // 1. Pending store orders
    const pendingOrders = (cache.storeOrders || []).filter(o => o.order_status === 'pending');
    if (pendingOrders.length > 0) {
        const orderItems = cache.storeOrderItems || [];
        groups.push({
            key: 'store-orders',
            icon: 'local_shipping',
            title: 'Pending Orders',
            subtitle: `${pendingOrders.length} order${pendingOrders.length !== 1 ? 's' : ''} awaiting action`,
            items: pendingOrders.map(o => {
                const items = orderItems.filter(oi => oi.order_id === o.id);
                const topItem = items[0];
                const dateStr = o.created_at ? new Date(o.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }) : '';
                return {
                    id: o.id,
                    primary: o.customer_name || 'Walk-in Customer',
                    secondary: topItem ? `${topItem.product_name}${items.length > 1 ? ` +${items.length - 1} more` : ''}` : `Order #${o.order_number || o.id}`,
                    amount: `₹${Number(o.total_amount || 0).toLocaleString()}`,
                    date: dateStr,
                    status: 'Pending',
                    actions: [
                        { label: 'View Order', icon: 'visibility', handler: () => { window.setMyStoreTab('orders'); window.setActiveStoreOrder(o.id); window.setApp('mystore'); } },
                    ]
                };
            })
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
            subtitle: `${lowStockItems.length} item${lowStockItems.length !== 1 ? 's' : ''} running low`,
            items: lowStockItems.map(p => ({
                id: p.id,
                primary: p.name,
                secondary: `${p.brand || ''} · ${p.category || 'General'}`.replace(/^ · /, ''),
                amount: p.mop ? `MOP ₹${Number(p.mop).toLocaleString()}` : '',
                date: `${p.netStock} unit${p.netStock !== 1 ? 's' : ''} remaining`,
                status: p.netStock <= 2 ? 'Critical' : 'Low',
                actions: [
                    { label: 'Restock', icon: 'add_circle', handler: () => { window.setInventoryMode && window.setInventoryMode('inward'); window.setApp('inventory'); } },
                ]
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
            subtitle: `${draftSales.length} sale${draftSales.length !== 1 ? 's' : ''} waiting to complete`,
            items: draftSales.map(s => {
                const items = saleItems.filter(si => si.sale_id === s.id);
                const topItem = items[0];
                const dateStr = s.created_at ? new Date(s.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) : '';
                return {
                    id: s.id,
                    primary: s.customer_name || `Draft Sale`,
                    secondary: topItem ? `${topItem.product_name}${items.length > 1 ? ` +${items.length - 1} more` : ''}` : `${items.length} item${items.length !== 1 ? 's' : ''}`,
                    amount: `₹${Number(s.total || 0).toLocaleString()}`,
                    date: dateStr,
                    status: 'Draft',
                    actions: [
                        { label: 'Complete Sale', icon: 'shopping_cart_checkout', handler: () => { window.setHistoryViewMode('drafts'); window.setHistoryDateFilter('all'); window.setSalesHistoryId(s.id); window.setTab('history'); window.setApp('sales'); } },
                    ]
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
            subtitle: `${pendingInquiries.length} question${pendingInquiries.length !== 1 ? 's' : ''} needing response`,
            items: pendingInquiries.map(i => {
                const dateStr = i.created_at ? new Date(i.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) : '';
                return {
                    id: i.id,
                    primary: i.customer_name || 'Unknown Customer',
                    secondary: i.product_name || i.description || 'General inquiry',
                    amount: '',
                    date: dateStr,
                    status: 'Pending',
                    actions: [
                        { label: 'Resolve', icon: 'check_circle', handler: () => { window.setActiveInquiry(i); window.setInquiryViewMode('resolve'); window.setApp('inquiries'); } },
                        ...(i.phone ? [{ label: 'Call', icon: 'phone', handler: () => { window.open(`tel:${i.phone}`); } }] : []),
                    ]
                };
            })
        });
    }

    // 5. Active repairs (not completed/delivered)
    const activeRepairs = (cache.repairs || []).filter(r => r.status && r.status !== 'COMPLETED' && r.status !== 'DELIVERED');
    if (activeRepairs.length > 0) {
        groups.push({
            key: 'repairs',
            icon: 'build',
            title: 'Active Repairs',
            subtitle: `${activeRepairs.length} device${activeRepairs.length !== 1 ? 's' : ''} being serviced`,
            items: activeRepairs.map(r => {
                const dateStr = r.created_at ? new Date(r.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) : '';
                return {
                    id: r.id,
                    primary: r.customer_name || 'Walk-in',
                    secondary: `${r.device || 'Device'} — ${r.issue || 'Repair'}`,
                    amount: r.estimated_cost ? `₹${Number(r.estimated_cost).toLocaleString()}` : '',
                    date: dateStr,
                    status: 'In Progress',
                    actions: [
                        { label: 'View Status', icon: 'visibility', handler: () => { window.setActiveRepairJob && window.setActiveRepairJob(r.id); window.setRepairTab('active'); window.setApp('repairs'); } },
                    ]
                };
            })
        });
    }

    // 6. Scheduled automation messages (next 7 days)
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
            subtitle: `${scheduledMsgs.length} message${scheduledMsgs.length !== 1 ? 's' : ''} queued this week`,
            iconSymbol: true,
            items: scheduledMsgs.map(m => {
                const automation = automations.find(a => a.id === m.automation_id);
                const scheduledDate = new Date(m.scheduled_date);
                const isToday = scheduledDate.toDateString() === now.toDateString();
                const isTomorrow = scheduledDate.toDateString() === new Date(Date.now() + 86400000).toDateString();
                const dateLabel = isToday ? 'Today' : isTomorrow ? 'Tomorrow' : scheduledDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
                return {
                    id: m.id,
                    primary: automation?.customer_name || 'Customer',
                    secondary: m.title || 'Scheduled Message',
                    amount: '',
                    date: dateLabel,
                    status: 'Scheduled',
                    actions: [
                        { label: 'View', icon: 'visibility', handler: () => { window.setActiveAutomation(m.automation_id); window.setAutomationViewMode('details'); window.setApp('automation'); } },
                    ]
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
            subtitle: `${liveCampaigns.length} active pre-booking campaign${liveCampaigns.length !== 1 ? 's' : ''}`,
            items: liveCampaigns.map(c => ({
                id: c.id,
                primary: c.name || c.title || 'Campaign',
                secondary: c.product_name || 'Pre-booking',
                amount: c.deposit_amount ? `₹${Number(c.deposit_amount).toLocaleString()} deposit` : '',
                date: c.end_date ? `Ends ${new Date(c.end_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}` : 'Active',
                status: 'Live',
                actions: [
                    { label: 'View Campaign', icon: 'visibility', handler: () => { window.setActiveCampaign(c); window.setPreBookingViewMode('details'); window.setApp('prebooking'); } },
                ]
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
            subtitle: `${birthdays.length} customer${birthdays.length !== 1 ? 's' : ''} celebrating today`,
            items: birthdays.map(c => ({
                id: c.id,
                primary: c.name,
                secondary: c.phone || c.email || 'No contact info',
                amount: '',
                date: 'Today',
                status: 'Birthday',
                actions: [
                    { label: 'View Profile', icon: 'person', handler: () => { window.setClientMode('profile', c.name, c.id); window.setApp('clients'); } },
                    ...(c.phone ? [{ label: 'Wish', icon: 'chat', handler: () => { window.open(`https://wa.me/91${c.phone.replace(/\D/g, '').slice(-10)}?text=${encodeURIComponent(`Happy Birthday, ${c.name}! Wishing you a wonderful day. 🎂`)}`); } }] : []),
                ]
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
    // Preserve scroll position across re-render
    const scrollEl = document.getElementById('notif-scroll');
    const scrollTop = scrollEl ? scrollEl.scrollTop : 0;
    window.triggerRender();
    requestAnimationFrame(() => {
        const newScrollEl = document.getElementById('notif-scroll');
        if (newScrollEl) newScrollEl.scrollTop = scrollTop;
    });
};

// Store actions globally for onclick
window._notifActions = [];

function renderHeader() {
    const enabled = window._pushNotificationsEnabled !== false;
    const total = getNotificationCount();
    return `
        <header class="px-5 sm:px-8 pt-5 sm:pt-8 pb-3 shrink-0 text-left">
            <div class="flex items-center justify-between mb-4 text-left">
                <button onclick="setApp('launcher')" class="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-all">
                    <span class="material-icons-outlined text-slate-600 text-lg">chevron_left</span>
                </button>
                <button onclick="window.togglePushNotifications()" class="w-9 h-9 flex items-center justify-center rounded-xl ${enabled ? 'bg-slate-900' : 'bg-slate-100'} transition-all" title="Push Notifications">
                    <span class="material-icons-outlined text-sm ${enabled ? 'text-white' : 'text-slate-400'}">${enabled ? 'notifications_active' : 'notifications_off'}</span>
                </button>
            </div>
            <div class="text-left">
                <h1 class="text-2xl font-black tracking-tight text-slate-900">Alerts</h1>
                <p class="text-[10px] font-bold text-slate-400 mt-0.5">${total > 0 ? `${total} item${total !== 1 ? 's' : ''} need${total === 1 ? 's' : ''} your attention` : 'You\'re all caught up'}</p>
            </div>
        </header>
    `;
}

// Summary strip — horizontal scrollable overview pills
function renderSummaryStrip(groups) {
    if (groups.length === 0) return '';
    return `
        <div class="flex gap-2 overflow-x-auto pb-1 px-5 sm:px-8 no-scrollbar" style="scrollbar-width:none;-ms-overflow-style:none;">
            ${groups.map(g => `
                <button type="button" onclick="window._toggleNotifGroup('${g.key}');document.getElementById('notif-group-${g.key}')?.scrollIntoView({behavior:'smooth',block:'nearest'})" class="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200 shrink-0 hover:border-slate-900 hover:bg-slate-50 active:scale-[0.97] transition-all">
                    <span class="${g.iconSymbol ? 'material-symbols-outlined' : 'material-icons-outlined'} text-slate-500 text-sm">${g.icon}</span>
                    <span class="text-[10px] font-black text-slate-900">${g.items.length}</span>
                    <span class="text-[8px] font-bold text-slate-400 uppercase tracking-wider">${g.title}</span>
                </button>
            `).join('')}
        </div>
    `;
}

function renderRichCard(item, actionOffset) {
    return `
        <div class="bg-white border border-slate-200 rounded-2xl p-4 space-y-3 text-left hover:border-slate-300 transition-all">
            <!-- Top Row: Name + Amount -->
            <div class="flex items-start justify-between gap-2">
                <div class="flex-1 min-w-0">
                    <h4 class="text-sm font-black text-slate-900 tracking-tight truncate">${item.primary}</h4>
                    <p class="text-[10px] font-bold text-slate-400 truncate mt-0.5">${item.secondary}</p>
                </div>
                <div class="text-right shrink-0">
                    ${item.amount ? `<p class="text-sm font-black text-slate-900 tracking-tight">${item.amount}</p>` : ''}
                    ${item.status ? `<span class="text-[7px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${item.status === 'Critical' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500'}">${item.status}</span>` : ''}
                </div>
            </div>
            <!-- Date -->
            ${item.date ? `<p class="text-[9px] font-bold text-slate-300">${item.date}</p>` : ''}
            <!-- Action Buttons -->
            ${item.actions && item.actions.length > 0 ? `
                <div class="flex gap-2 pt-1">
                    ${item.actions.map((a, ai) => {
                        const idx = actionOffset + ai;
                        return `
                            <button type="button" onclick="window._notifActions[${idx}]()" class="${ai === 0 ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'} px-3.5 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center gap-1.5">
                                <span class="material-icons-outlined text-xs">${a.icon}</span>
                                ${a.label}
                            </button>
                        `;
                    }).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

function renderGroupSection(group, actionOffset) {
    const isExpanded = window._notifExpanded[group.key] || false;
    return `
        <section id="notif-group-${group.key}" class="text-left">
            <!-- Accordion Header -->
            <button type="button" onclick="window._toggleNotifGroup('${group.key}')" class="w-full flex items-center gap-3 px-4 py-3.5 bg-white border ${isExpanded ? 'border-slate-300 shadow-sm' : 'border-slate-200'} ${isExpanded ? 'rounded-t-2xl border-b-0' : 'rounded-2xl'} hover:border-slate-300 transition-all cursor-pointer group">
                <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-slate-200 transition-colors">
                    <span class="${group.iconSymbol ? 'material-symbols-outlined' : 'material-icons-outlined'} text-slate-600 text-base">${group.icon}</span>
                </div>
                <div class="flex-1 min-w-0 text-left">
                    <h3 class="text-xs font-black text-slate-900 tracking-tight">${group.title}</h3>
                    <p class="text-[9px] font-bold text-slate-400">${group.subtitle || ''}</p>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    <span class="min-w-[22px] h-[22px] bg-slate-900 text-white rounded-full flex items-center justify-center text-[9px] font-black px-1.5">${group.items.length}</span>
                    <span class="material-icons-outlined text-base text-slate-300 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}">${isExpanded ? 'expand_less' : 'expand_more'}</span>
                </div>
            </button>
            ${isExpanded ? `
                <div class="bg-slate-50 border border-t-0 border-slate-300 rounded-b-2xl p-3 space-y-2.5">
                    ${group.items.map((item, i) => {
                        const cardActionOffset = actionOffset + group.items.slice(0, i).reduce((sum, prev) => sum + (prev.actions ? prev.actions.length : 0), 0);
                        return renderRichCard(item, cardActionOffset);
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
                <div class="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center">
                    <span class="material-icons-outlined text-4xl text-slate-300">task_alt</span>
                </div>
                <div class="absolute -top-1 -right-1 w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
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
                <div class="w-24 h-24 ${total > 0 ? 'bg-slate-900' : 'bg-slate-100'} rounded-3xl flex items-center justify-center shadow-xl">
                    <span class="material-icons-outlined text-5xl ${total > 0 ? 'text-white' : 'text-slate-300'}">${total > 0 ? 'notifications_active' : 'task_alt'}</span>
                </div>
                ${total > 0 ? `
                    <div class="absolute -top-2 -right-2 min-w-[28px] h-7 bg-white border-2 border-slate-900 text-slate-900 rounded-full flex items-center justify-center text-xs font-black px-2">${total}</div>
                ` : ''}
            </div>
            <p class="text-4xl font-black text-slate-900 tracking-tighter mb-1">${total}</p>
            <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">${total === 1 ? 'Pending Alert' : 'Pending Alerts'}</p>
            ${total > 0 ? `
                <div class="space-y-2 w-full max-w-[260px]">
                    ${groups.map(g => `
                        <div class="flex items-center gap-3 px-3.5 py-2.5 bg-white rounded-xl border border-slate-200">
                            <div class="w-7 h-7 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                <span class="${g.iconSymbol ? 'material-symbols-outlined' : 'material-icons-outlined'} text-slate-500 text-[10px]">${g.icon}</span>
                            </div>
                            <span class="text-[9px] font-black text-slate-600 uppercase tracking-wider flex-1 text-left">${g.title}</span>
                            <span class="text-xs font-black text-slate-900">${g.items.length}</span>
                        </div>
                    `).join('')}
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

    // Build flat actions array for onclick handlers — now per-action-button, not per-item
    window._notifActions = [];
    groups.forEach(g => g.items.forEach(item => {
        if (item.actions) item.actions.forEach(a => window._notifActions.push(a.handler));
    }));

    // Calculate action offsets per group
    let actionOffset = 0;
    const sections = groups.map(g => {
        const html = renderGroupSection(g, actionOffset);
        actionOffset += g.items.reduce((sum, item) => sum + (item.actions ? item.actions.length : 0), 0);
        return html;
    }).join('');

    return `
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            ${renderHeader()}

            <div id="notif-scroll" class="scrolling-content flex-1 overflow-y-auto pb-32 text-left">
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

// Client profile — slim shell + insights
import { state } from '../../state.js';
import { renderClientHeader } from './header.js';
import { statCard, formatDate, timeAgo, daysSince, clientTier, esc } from './ui.js';
import { buildTimeline, renderTimelineEvent } from './timeline.js';
import './edit-modal.js'; // registers window._openClientEdit, _openClientWhatsApp, _saveClientEdit

export function renderClientDetails(layout) {
    const isDesk = layout === 'desktop';
    const cache = window.getCache();

    const client = cache.customers?.find(c => c.id === state.selectedClientId || c.name === state.selectedClient) ||
                   { name: state.selectedClient || 'Unknown', joined_at: new Date().toISOString() };

    // Sales data
    const clientSales = (cache.sales || [])
        .filter(s => s.customer_id === client.id && s.status !== 'draft')
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    const saleItems = (cache.saleItems || []).filter(i => clientSales.some(s => s.id === i.sale_id));

    const totalSpent = clientSales.reduce((sum, s) => sum + (s.total_amount || 0), 0);
    const totalOrders = clientSales.length;
    const avgOrder = totalOrders > 0 ? Math.round(totalSpent / totalOrders) : 0;

    // Last visit
    const lastSaleDate = clientSales[0]?.date;
    const lastVisitDays = daysSince(lastSaleDate);
    const lastVisitLabel = lastSaleDate ? timeAgo(lastSaleDate) : 'Never';

    // Top category
    const catCounts = {};
    saleItems.forEach(i => { const cat = i.category || 'Other'; catCounts[cat] = (catCounts[cat] || 0) + 1; });
    const topCategory = Object.keys(catCounts).sort((a, b) => catCounts[b] - catCounts[a])[0] || null;

    // Tier
    const tier = clientTier(totalSpent);

    // Groups this client belongs to
    const memberOf = (cache.groupMembers || []).filter(m => m.customer_id === client.id);
    const clientGroups = memberOf.map(m => (cache.groups || []).find(g => g.id === m.group_id)).filter(Boolean);

    // Timeline
    const timeline = buildTimeline(cache, client);

    // Initial for avatar
    const initial = (client.name || '?')[0].toUpperCase();

    return `
        ${isDesk ? '' : renderClientHeader('Profile', 'Customer Details')}
        <div class="scrolling-content px-8 space-y-6 pb-12 text-left">
            <!-- Profile Header (resolve-pane style) -->
            <div class="pt-6 flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center shrink-0">
                    <span class="text-sm font-black text-slate-600">${initial}</span>
                </div>
                <div class="flex-1 min-w-0">
                    <h2 class="text-lg font-black text-slate-900 tracking-tighter leading-tight truncate">${client.name}</h2>
                    <div class="flex items-center gap-2 mt-1 flex-wrap">
                        ${tier ? `<span class="px-1.5 py-0.5 rounded border text-[7px] font-black uppercase ${tier.color}">${tier.label}</span>` : ''}
                        <span class="text-[9px] font-bold text-slate-400">${client.location || 'Customer'}</span>
                        <span class="text-[9px] font-bold text-slate-300">·</span>
                        <span class="text-[9px] font-bold text-slate-400">Joined ${formatDate(client.joined_at)}</span>
                        <span class="text-[9px] font-bold text-slate-300">·</span>
                        <span class="text-[9px] font-bold ${lastVisitDays <= 7 ? 'text-green-600' : lastVisitDays <= 30 ? 'text-amber-600' : 'text-slate-400'}">Last: ${lastVisitLabel}</span>
                    </div>
                </div>
            </div>

            <!-- Contact Info -->
            ${(client.phone || client.email || client.dob) ? `
                <div class="bg-slate-50 border border-slate-100 rounded-xl p-4 space-y-2">
                    <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-2">Contact</p>
                    ${client.phone ? `<p class="text-[11px] font-bold text-slate-700">${client.phone}</p>` : ''}
                    ${client.email ? `<p class="text-[11px] font-bold text-slate-500">${client.email}</p>` : ''}
                    ${client.dob ? `<p class="text-[9px] font-bold text-slate-300">Born ${formatDate(client.dob)}</p>` : ''}
                </div>
            ` : ''}

            <!-- Quick Actions (2-col grid) -->
            <div class="grid grid-cols-2 gap-2">
                ${client.phone ? `
                    <a href="tel:${client.phone}" class="flex items-center gap-2 p-3 bg-white border border-slate-100 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all">
                        <span class="material-icons-outlined text-slate-500 text-base">call</span>
                        <span class="text-[9px] font-black text-slate-700 uppercase tracking-widest">Call</span>
                    </a>
                ` : ''}
                ${client.phone ? `
                    <button onclick="window._openClientWhatsApp('${esc(client.phone)}','${esc(client.name)}')" class="flex items-center gap-2 p-3 bg-white border border-slate-100 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all">
                        <span class="material-icons-outlined text-slate-500 text-base">chat_bubble</span>
                        <span class="text-[9px] font-black text-slate-700 uppercase tracking-widest">WhatsApp</span>
                    </button>
                ` : ''}
                <button onclick="window._openClientEdit('${client.id}')" class="flex items-center gap-2 p-3 bg-white border border-slate-100 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all">
                    <span class="material-icons-outlined text-slate-500 text-base">edit</span>
                    <span class="text-[9px] font-black text-slate-700 uppercase tracking-widest">Edit</span>
                </button>
                <button onclick="setApp('sales')" class="flex items-center gap-2 p-3 bg-slate-950 border border-slate-950 rounded-xl hover:bg-slate-800 transition-all">
                    <span class="material-icons-outlined text-white text-base">local_mall</span>
                    <span class="text-[9px] font-black text-white uppercase tracking-widest">New Sale</span>
                </button>
            </div>

            <!-- Stats Bar (Inquiries-style 4-metric) -->
            <div class="flex items-center gap-0 bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden text-left">
                <div class="flex-1 p-3 text-left min-w-0">
                    <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 truncate">Spent</p>
                    <h3 class="text-base font-black leading-none truncate ${totalSpent > 0 ? 'text-slate-900' : 'text-slate-300'}">₹${totalSpent.toLocaleString()}</h3>
                    <p class="text-[7px] font-bold text-slate-400 mt-0.5 truncate">lifetime</p>
                </div>
                <div class="w-px self-stretch bg-slate-200 my-2.5"></div>
                <div class="flex-1 p-3 text-left min-w-0">
                    <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 truncate">Orders</p>
                    <h3 class="text-base font-black leading-none truncate ${totalOrders > 0 ? 'text-slate-900' : 'text-slate-300'}">${totalOrders}</h3>
                    <p class="text-[7px] font-bold text-slate-400 mt-0.5 truncate">completed</p>
                </div>
                <div class="w-px self-stretch bg-slate-200 my-2.5"></div>
                <div class="flex-1 p-3 text-left min-w-0">
                    <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 truncate">Avg</p>
                    <h3 class="text-base font-black leading-none truncate ${avgOrder > 0 ? 'text-slate-900' : 'text-slate-300'}">${avgOrder > 0 ? '₹' + avgOrder.toLocaleString() : '—'}</h3>
                    <p class="text-[7px] font-bold text-slate-400 mt-0.5 truncate">per order</p>
                </div>
                <div class="w-px self-stretch bg-slate-200 my-2.5"></div>
                <div class="flex-1 p-3 text-left min-w-0">
                    <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 truncate">Last</p>
                    <h3 class="text-base font-black leading-none truncate ${lastVisitDays <= 30 ? 'text-slate-900' : 'text-slate-300'}">${lastVisitLabel}</h3>
                    <p class="text-[7px] font-bold text-slate-400 mt-0.5 truncate">visit</p>
                </div>
            </div>

            <!-- Insights -->
            ${topCategory || clientGroups.length > 0 ? `
                <div>
                    <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-2">Insights</p>
                    <div class="flex flex-wrap gap-2">
                        ${topCategory ? `
                            <div class="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full">
                                <span class="material-icons-outlined text-xs text-slate-400">category</span>
                                <span class="text-[9px] font-black text-slate-500 uppercase tracking-widest">Buys most: ${topCategory}</span>
                            </div>
                        ` : ''}
                        ${clientGroups.map(g => `
                            <button onclick="window.setClientMode('groups'); window.setSelectedGroup('${g.id}'); window.setGroupViewMode('detail');" class="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full hover:border-slate-300 transition-all cursor-pointer">
                                <span class="material-icons-outlined text-xs text-slate-400">${g.is_company ? 'business' : 'group'}</span>
                                <span class="text-[9px] font-black text-slate-500 uppercase tracking-widest">${g.name}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- Timeline Section -->
            <div class="space-y-4 text-left">
                <div class="flex justify-between items-center">
                    <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest">Activity Timeline</p>
                    <span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded">${timeline.length} events</span>
                </div>

                ${timeline.length === 0 ? `
                    <div class="text-center py-16 opacity-30">
                        <span class="material-icons-outlined text-4xl mb-4">history_toggle_off</span>
                        <p class="text-[10px] font-black uppercase tracking-widest leading-relaxed">No activities recorded<br>for this client yet.</p>
                    </div>
                ` : `
                    <div class="relative pl-8 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-slate-100 before:border-l before:border-dashed before:border-slate-200">
                        ${timeline.map(renderTimelineEvent).join('')}
                    </div>
                `}

                <div class="pt-4">
                    <button onclick="setApp('sales'); setTab('new-sale');" class="w-full py-5 bg-slate-900 text-white rounded-[20px] text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all text-center">
                        New Purchase
                    </button>
                    <button onclick="setClientMode('directory')" class="w-full py-4 text-[9px] font-black text-slate-300 uppercase underline decoration-slate-200 underline-offset-8 mt-4 text-center">Back to Directory</button>
                </div>
            </div>
        </div>
    `;
}

// Timeline event renderers — extracted from profile.js
import { formatDate, formatDateShort } from './ui.js';

export function buildTimeline(cache, client) {
    const sales = (cache.sales || [])
        .filter(s => s.customer_id === client.id && s.status !== 'draft')
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    const saleItems = cache.saleItems || [];

    const repairs = (cache.repairs || []).filter(r => r.customer_id === client.id || r.customer_name === client.name);
    const inquiries = (cache.inquiries || []).filter(i => i.customer_id === client.id || i.customer_name === client.name);
    const automations = (cache.automations || []).filter(a => a.customer_id === client.id);
    const automationMessages = cache.automationMessages || [];
    const communications = (cache.communications || []).filter(c => c.customer_id === client.id);

    return [
        ...sales.map(s => ({ type: 'sale', date: s.date, data: s, items: saleItems.filter(i => i.sale_id === s.id) })),
        ...repairs.map(r => ({ type: 'repair', date: r.created_at || r.date, data: r })),
        ...inquiries.map(i => ({ type: 'inquiry', date: i.date || i.created_at, data: i })),
        ...automations.map(a => ({ type: 'automation', date: a.created_at, data: a, messages: automationMessages.filter(m => m.automation_id === a.id) })),
        ...communications.map(c => ({ type: 'communication', date: c.sent_at, data: c }))
    ].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function renderTimelineEvent(event) {
    switch (event.type) {
        case 'sale': return renderSaleEvent(event);
        case 'repair': return renderRepairEvent(event);
        case 'inquiry': return renderInquiryEvent(event);
        case 'automation': return renderAutomationEvent(event);
        case 'communication': return renderCommunicationEvent(event);
        default: return '';
    }
}

function timelineNode(icon, iconClass = 'text-slate-600', bgClass = 'bg-white border border-slate-100') {
    return `<div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 ${bgClass} rounded-xl flex items-center justify-center z-10 shadow-sm"><span class="material-icons-outlined text-xs ${iconClass}">${icon}</span></div>`;
}

function dateStamp(dateStr) {
    return `<span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest">${formatDate(dateStr)}</span>`;
}

function renderSaleEvent(event) {
    const s = event.data;
    const items = event.items;
    return `
        <div class="relative text-left">
            ${timelineNode('shopping_cart')}
            <button type="button" onclick="window.viewClientInvoice('${s.id}')" class="card p-4 sm:p-5 group hover:border-slate-900 hover:shadow-lg transition-all text-left w-full cursor-pointer">
                <div class="flex justify-between items-start mb-3">
                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <h4 class="text-xs font-black text-slate-900">Purchase</h4>
                            ${s.gst_required ? `<span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase">GST</span>` : ''}
                            ${s.payment_mode ? `<span class="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[7px] font-black uppercase">${s.payment_mode}</span>` : ''}
                        </div>
                        <p class="text-xl font-black tracking-tighter">₹${(s.total_amount || 0).toLocaleString()}</p>
                    </div>
                    <div class="flex items-center gap-2">
                        ${dateStamp(s.date)}
                        <span class="material-icons-outlined text-sm text-slate-300 group-hover:text-slate-900 transition-colors">chevron_right</span>
                    </div>
                </div>
                <div class="space-y-2">
                    ${items.map(item => `
                        <div class="flex justify-between items-center bg-slate-50 rounded-lg p-2">
                            <div class="flex-1 min-w-0">
                                <p class="text-[10px] font-black text-slate-900 truncate">${item.product_name}</p>
                                <p class="text-[8px] font-bold text-slate-400 uppercase">${item.category || 'Product'}</p>
                            </div>
                            <p class="text-[10px] font-black text-slate-600 ml-2">₹${(item.price || 0).toLocaleString()}</p>
                        </div>
                    `).join('')}
                </div>
                ${s.installation_required ? `
                    <div class="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 text-[9px] font-bold text-slate-500">
                        <span class="material-icons-outlined text-xs">build</span>
                        Installation ${s.installation_date ? `on ${formatDateShort(s.installation_date)}` : 'Required'}
                    </div>
                ` : ''}
            </button>
        </div>
    `;
}

function renderRepairEvent(event) {
    const r = event.data;
    return `
        <div class="relative text-left">
            ${timelineNode('build', 'text-slate-500')}
            <div class="card p-4 sm:p-5 group hover:border-slate-300 transition-all">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <h4 class="text-xs font-black text-slate-900">Device Repair</h4>
                        <p class="text-lg font-black tracking-tighter">₹${r.cost || 'Estimating'}</p>
                    </div>
                    ${dateStamp(r.created_at || r.date)}
                </div>
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">${r.device_model || 'Device'} · ${r.status || 'In Progress'}</p>
            </div>
        </div>
    `;
}

function renderInquiryEvent(event) {
    const inq = event.data;
    const isPending = inq.status === 'PENDING' || inq.status === 'pending';
    return `
        <div class="relative text-left">
            ${timelineNode('info', 'text-slate-400')}
            <div class="card p-4 sm:p-5 flex justify-between items-start group hover:border-slate-300 transition-all">
                <div>
                    <h4 class="text-xs font-black text-slate-900">Inquiry</h4>
                    <p class="text-[11px] font-bold text-slate-500">${inq.request || 'Product Interest'}</p>
                    <div class="flex items-center gap-1 mt-2">
                        <div class="w-1.5 h-1.5 ${isPending ? 'bg-slate-400' : 'bg-slate-900'} rounded-full"></div>
                        <p class="text-[8px] font-black text-slate-400 uppercase">${inq.status || 'Open'}</p>
                    </div>
                </div>
                ${dateStamp(inq.date || inq.created_at)}
            </div>
        </div>
    `;
}

function renderAutomationEvent(event) {
    const auto = event.data;
    const msgs = event.messages || [];
    const sentCount = msgs.filter(m => m.status === 'sent').length;
    const pendingCount = msgs.filter(m => m.status === 'pending').length;
    return `
        <div class="relative text-left">
            ${timelineNode('smart_toy', 'text-white', 'bg-slate-900 border border-slate-900')}
            <div class="card p-4 sm:p-5 group hover:border-slate-300 transition-all border-l-4 border-l-slate-900">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <h4 class="text-xs font-black text-slate-900">Automation</h4>
                            <span class="bg-slate-900 text-white px-1.5 py-0.5 rounded text-[7px] font-black uppercase">${auto.status}</span>
                        </div>
                        <p class="text-sm font-black tracking-tight">${auto.name}</p>
                    </div>
                    ${dateStamp(auto.created_at)}
                </div>
                <div class="flex items-center gap-3 mt-3">
                    <div class="flex items-center gap-1 text-[9px] font-bold text-slate-500">
                        <span class="material-icons-outlined text-xs">check_circle</span>
                        ${sentCount} sent
                    </div>
                    <div class="flex items-center gap-1 text-[9px] font-bold text-slate-400">
                        <span class="material-icons-outlined text-xs">schedule</span>
                        ${pendingCount} scheduled
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderCommunicationEvent(event) {
    const comm = event.data;
    const icon = comm.type === 'whatsapp' ? 'chat' : comm.type === 'call' ? 'call' : 'mail';
    const typeLabel = comm.type === 'whatsapp' ? 'WhatsApp' : comm.type === 'call' ? 'Phone Call' : 'Email';
    return `
        <div class="relative text-left">
            ${timelineNode(icon, 'text-slate-500')}
            <div class="card p-4 sm:p-5 group hover:border-slate-300 transition-all">
                <div class="flex justify-between items-start mb-2">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 mb-1">
                            <h4 class="text-xs font-black text-slate-900">${typeLabel}</h4>
                            <span class="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[7px] font-black uppercase">${comm.direction}</span>
                            ${comm.status === 'delivered' ? `<span class="text-slate-400"><span class="material-icons-outlined text-xs">done_all</span></span>` : ''}
                        </div>
                        <p class="text-[10px] font-bold text-slate-500 line-clamp-2">${comm.content}</p>
                    </div>
                    <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest shrink-0 ml-2">${formatDateShort(comm.sent_at)}</span>
                </div>
            </div>
        </div>
    `;
}

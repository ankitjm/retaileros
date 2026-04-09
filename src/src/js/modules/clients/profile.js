import { state } from '../../state.js';
import { renderClientHeader } from './header.js';

export function renderClientDetails(layout) {
    const isDesk = layout === 'desktop';
    const cache = window.getCache();
    
    // Find client by ID or name
    const client = cache.customers?.find(c => c.id === state.selectedClientId || c.name === state.selectedClient) || 
                   { name: state.selectedClient || 'Unknown', joined_at: new Date().toISOString() };
    
    const initials = client.name ? client.name.split(' ').map(x => x[0]).join('').toUpperCase() : '?';

    // Filter sales for this specific client (by customer_id)
    const clientSales = (cache.sales || [])
        .filter(s => s.customer_id === client.id && s.status !== 'draft')
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Get sale items for each sale
    const saleItems = cache.saleItems || [];
    
    // Filter inquiries for this specific client
    const clientInquiries = (cache.inquiries || []).filter(i => i.customer_id === client.id || i.customer_name === client.name);
    
    // Filter repairs for this client
    const clientRepairs = (cache.repairs || []).filter(r => r.customer_id === client.id || r.customer_name === client.name);
    
    // Filter automations for this client
    const clientAutomations = (cache.automations || []).filter(a => a.customer_id === client.id);
    const automationMessages = cache.automationMessages || [];
    
    // Filter communications (WhatsApp messages, etc.) for this client
    const clientCommunications = (cache.communications || []).filter(c => c.customer_id === client.id);
    
    // Calculate stats
    const totalSpent = clientSales.reduce((sum, s) => sum + (s.total_amount || 0), 0);
    const totalOrders = clientSales.length;

    // Build unified timeline by combining all activities and sorting by date
    const timeline = [
        ...clientSales.map(s => ({
            type: 'sale',
            date: s.date,
            data: s,
            items: saleItems.filter(i => i.sale_id === s.id)
        })),
        ...clientRepairs.map(r => ({
            type: 'repair',
            date: r.created_at || r.date,
            data: r
        })),
        ...clientInquiries.map(i => ({
            type: 'inquiry',
            date: i.date || i.created_at,
            data: i
        })),
        ...clientAutomations.map(a => ({
            type: 'automation',
            date: a.created_at,
            data: a,
            messages: automationMessages.filter(m => m.automation_id === a.id)
        })),
        ...clientCommunications.map(c => ({
            type: 'communication',
            date: c.sent_at,
            data: c
        }))
    ].sort((a, b) => new Date(b.date) - new Date(a.date));

    return `
        ${isDesk ? '' : renderClientHeader('Client Profile', 'RETAILEROS')}
        <div class="scrolling-content px-4 sm:px-8 space-y-8 pb-12 text-left">
            <!-- Profile Header -->
            <div class="flex flex-col items-center pt-8 text-center">
                <div class="w-20 h-20 sm:w-24 sm:h-24 bg-slate-100 rounded-full mb-6 flex items-center justify-center font-black text-2xl sm:text-3xl text-slate-400 shadow-inner border-[6px] border-white relative text-center">
                    ${initials}
                    <div class="absolute bottom-1 right-1 w-5 h-5 sm:w-6 sm:h-6 bg-slate-900 border-4 border-white rounded-full text-center"></div>
                </div>
                <h2 class="text-2xl sm:text-3xl font-black tracking-tighter text-slate-900 text-center">${client.name}</h2>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 text-center">
                    ${client.location || 'Customer'} • Joined ${new Date(client.joined_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                </p>
                
                <!-- Contact Info -->
                <div class="mt-4 flex flex-col items-center gap-1 text-center">
                    ${client.phone ? `<p class="text-xs font-bold text-slate-500">${client.phone}</p>` : ''}
                    ${client.email ? `<p class="text-xs font-bold text-slate-400">${client.email}</p>` : ''}
                </div>
                
                <!-- Quick Actions -->
                <div class="flex items-center gap-4 mt-8 text-center justify-center">
                    ${client.phone ? `<a href="tel:${client.phone}" class="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-900 hover:shadow-lg transition-all text-center"><span class="material-icons-outlined text-center">call</span></a>` : ''}
                    <button class="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-900 hover:shadow-lg transition-all text-center"><span class="material-icons-outlined text-center">chat_bubble</span></button>
                    <button onclick="setApp('sales')" class="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl hover:scale-105 transition-all text-center"><span class="material-icons-outlined text-center">local_mall</span></button>
                </div>
            </div>

            <!-- Stats Cards -->
            <div class="grid grid-cols-2 gap-3">
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">₹${totalSpent.toLocaleString()}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Total Spent</p>
                </div>
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${totalOrders}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Orders</p>
                </div>
            </div>

            <!-- Timeline Section -->
            <div class="space-y-6 text-left">
                <div class="flex justify-between items-center text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Activity Timeline</h3>
                    <span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded text-right">${timeline.length} events</span>
                </div>

                ${timeline.length === 0 ? `
                    <div class="text-center py-16 opacity-30">
                        <span class="material-icons-outlined text-4xl mb-4">history_toggle_off</span>
                        <p class="text-[10px] font-black uppercase tracking-widest leading-relaxed">No activities recorded<br>for this client yet.</p>
                    </div>
                ` : `
                    <!-- Timeline -->
                    <div class="relative pl-8 sm:pl-10 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-slate-100 before:border-l before:border-dashed before:border-slate-200 text-left">
                        ${timeline.map(event => {
                            if (event.type === 'sale') {
                                const s = event.data;
                                const items = event.items;
                                return `
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-600 text-center">shopping_cart</span>
                                        </div>
                                        <button type="button" onclick="window.viewClientInvoice('${s.id}')" class="card p-4 sm:p-5 group hover:border-slate-900 hover:shadow-lg transition-all text-left w-full cursor-pointer">
                                            <div class="flex justify-between items-start mb-3 text-left">
                                                <div class="text-left">
                                                    <div class="flex items-center gap-2 mb-1">
                                                        <h4 class="text-xs font-black text-slate-900 text-left">Purchase</h4>
                                                        ${s.gst_required ? `<span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase">GST</span>` : ''}
                                                        ${s.payment_mode ? `<span class="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[7px] font-black uppercase">${s.payment_mode}</span>` : ''}
                                                    </div>
                                                    <p class="text-xl font-black tracking-tighter text-left">₹${(s.total_amount || 0).toLocaleString()}</p>
                                                </div>
                                                <div class="flex items-center gap-2">
                                                    <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(s.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                                                    <span class="material-icons-outlined text-sm text-slate-300 group-hover:text-slate-900 transition-colors">chevron_right</span>
                                                </div>
                                            </div>
                                            <!-- Items List -->
                                            <div class="space-y-2 text-left">
                                                ${items.map(item => `
                                                    <div class="flex justify-between items-center bg-slate-50 rounded-lg p-2">
                                                        <div class="text-left flex-1 min-w-0">
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
                                                    Installation ${s.installation_date ? `on ${new Date(s.installation_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}` : 'Required'}
                                                </div>
                                            ` : ''}
                                        </button>
                                    </div>
                                `;
                            }
                            
                            if (event.type === 'repair') {
                                const r = event.data;
                                return `
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-500 text-center">build</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 group hover:border-slate-300 transition-all text-left">
                                            <div class="flex justify-between items-start mb-2 text-left">
                                                <div class="text-left">
                                                    <h4 class="text-xs font-black text-slate-900 text-left">Device Repair</h4>
                                                    <p class="text-lg font-black tracking-tighter text-left">₹${r.cost || 'Estimating'}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(r.created_at || r.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                                            </div>
                                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">${r.device_model || 'Device'} • ${r.status || 'In Progress'}</p>
                                        </div>
                                    </div>
                                `;
                            }
                            
                            if (event.type === 'inquiry') {
                                const inq = event.data;
                                return `
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-400 text-center">info</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 flex justify-between items-start group hover:border-slate-300 transition-all text-left">
                                            <div class="text-left">
                                                <h4 class="text-xs font-black text-slate-900 text-left">Inquiry</h4>
                                                <p class="text-[11px] font-bold text-slate-500 text-left">${inq.request || 'Product Interest'}</p>
                                                <div class="flex items-center gap-1 mt-2 text-left">
                                                    <div class="w-1.5 h-1.5 ${inq.status === 'PENDING' || inq.status === 'pending' ? 'bg-slate-400' : 'bg-slate-900'} rounded-full text-left"></div>
                                                    <p class="text-[8px] font-black text-slate-400 uppercase text-left">${inq.status || 'Open'}</p>
                                                </div>
                                            </div>
                                            <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(inq.date || inq.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                                        </div>
                                    </div>
                                `;
                            }
                            
                            if (event.type === 'automation') {
                                const auto = event.data;
                                const msgs = event.messages || [];
                                const sentCount = msgs.filter(m => m.status === 'sent').length;
                                const pendingCount = msgs.filter(m => m.status === 'pending').length;
                                return `
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-slate-900 border border-slate-900 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-white text-center">smart_toy</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 group hover:border-slate-300 transition-all text-left border-l-4 border-l-slate-900">
                                            <div class="flex justify-between items-start mb-2 text-left">
                                                <div class="text-left">
                                                    <div class="flex items-center gap-2 mb-1">
                                                        <h4 class="text-xs font-black text-slate-900 text-left">Automation</h4>
                                                        <span class="bg-slate-900 text-white px-1.5 py-0.5 rounded text-[7px] font-black uppercase">${auto.status}</span>
                                                    </div>
                                                    <p class="text-sm font-black tracking-tight text-left">${auto.name}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(auto.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                                            </div>
                                            <div class="flex items-center gap-3 mt-3 text-left">
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
                            
                            if (event.type === 'communication') {
                                const comm = event.data;
                                const icon = comm.type === 'whatsapp' ? 'chat' : comm.type === 'call' ? 'call' : 'mail';
                                const typeLabel = comm.type === 'whatsapp' ? 'WhatsApp' : comm.type === 'call' ? 'Phone Call' : 'Email';
                                return `
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-500 text-center">${icon}</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 group hover:border-slate-300 transition-all text-left">
                                            <div class="flex justify-between items-start mb-2 text-left">
                                                <div class="text-left flex-1 min-w-0">
                                                    <div class="flex items-center gap-2 mb-1">
                                                        <h4 class="text-xs font-black text-slate-900 text-left">${typeLabel}</h4>
                                                        <span class="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[7px] font-black uppercase">${comm.direction}</span>
                                                        ${comm.status === 'delivered' ? `<span class="text-slate-400"><span class="material-icons-outlined text-xs">done_all</span></span>` : ''}
                                                    </div>
                                                    <p class="text-[10px] font-bold text-slate-500 text-left line-clamp-2">${comm.content}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right shrink-0 ml-2">${new Date(comm.sent_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</span>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }
                            
                            return '';
                        }).join('')}
                    </div>
                `}

                <div class="pt-8">
                     <button onclick="setApp('sales'); setTab('new-sale');" class="w-full py-5 bg-slate-900 text-white rounded-[20px] text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all text-center">
                        New Purchase
                    </button>
                    <button onclick="setClientMode('directory')" class="w-full py-4 text-[9px] font-black text-slate-300 uppercase underline decoration-slate-200 underline-offset-8 mt-4 text-center">Back to Directory</button>
                </div>
            </div>
        </div>
    `;
}

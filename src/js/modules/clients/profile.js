import { state } from '../../state.js';
import { renderClientHeader } from './header.js';

export function renderClientDetails(layout) {
    const isDesk = layout === 'desktop';
    const cache = window.getCache();
    const client = cache.customers.find(c => c.name === state.selectedClient) || { name: state.selectedClient, joined_at: new Date().toISOString() };
    const initials = client.name.split(' ').map(x => x[0]).join('');

    // Filter activities for this specific client
    const clientSales = (cache.sales || []).filter(s => s.customer_name === client.name);
    // In current DB inquiries has customer_name
    const clientInquiries = (cache.inquiries || []).filter(i => i.customer_name === client.name);
    // Future expansion: repairs and automations can be filtered once linked by customer_id or name

    return `
        ${isDesk ? '' : renderClientHeader('Client Profile', 'RETAILEROS')}
        <div class="scrolling-content px-8 space-y-12 pb-12 text-left">
            <div class="flex flex-col items-center pt-8 text-center">
                <div class="w-24 h-24 bg-slate-100 rounded-full mb-6 flex items-center justify-center font-black text-3xl text-slate-400 shadow-inner border-[6px] border-white relative text-center">
                    ${initials}
                    <div class="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full text-center"></div>
                </div>
                <h2 class="text-3xl font-black tracking-tighter text-slate-900 text-center">${client.name}</h2>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 text-center">
                    ${client.location || 'Premium Client'} • Joined ${new Date(client.joined_at).toLocaleDateString()}
                </p>
                
                <div class="flex items-center gap-4 mt-8 text-center justify-center">
                    <a href="tel:${client.phone}" class="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-900 hover:shadow-lg transition-all text-center"><span class="material-icons-outlined text-center">call</span></a>
                    <button class="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-900 hover:shadow-lg transition-all text-center"><span class="material-icons-outlined text-center">chat_bubble</span></button>
                    <button onclick="setApp('sales')" class="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl hover:scale-105 transition-all text-center"><span class="material-icons-outlined text-center">local_mall</span></button>
                </div>
            </div>

            <div class="space-y-6 text-left">
                <div class="flex justify-between items-center text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Unified Lifecycle Timeline</h3>
                    <button class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded text-right">Live Feed</button>
                </div>

                <!-- Timeline -->
                <div class="relative pl-10 space-y-10 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-slate-100 before:border-l before:border-dashed before:border-slate-200 text-left">
                    
                    ${clientSales.length === 0 && clientInquiries.length === 0 && (cache.repairs || []).filter(r => r.customer_name === client.name).length === 0 ? `
                        <div class="text-center py-20 opacity-30">
                            <span class="material-icons-outlined text-4xl mb-4">history_toggle_off</span>
                            <p class="text-[10px] font-black uppercase tracking-widest leading-relaxed">No lifecycle activities recorded<br>for this client yet.</p>
                        </div>
                    ` : ''}

                    <!-- Sales Activities -->
                    ${clientSales.map(s => `
                        <div class="relative text-left">
                            <div class="absolute -left-10 top-0 w-8 h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                <span class="material-icons-outlined text-xs text-green-500 text-center">shopping_cart</span>
                            </div>
                            <div class="card p-5 group hover:border-slate-300 transition-all text-left">
                                <div class="flex justify-between items-start mb-2 text-left">
                                    <div class="text-left">
                                        <h4 class="text-xs font-black text-slate-900 text-left">Sale Completed</h4>
                                        <p class="text-xl font-black tracking-tighter text-left">₹${s.price.toLocaleString()}</p>
                                    </div>
                                    <span class="text-[8px] font-black text-slate-300 tabular-nums lowercase tracking-widest text-right">${new Date(s.date).toLocaleDateString()}</span>
                                </div>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">${s.product_name}</p>
                            </div>
                        </div>
                    `).join('')}

                    <!-- Repair Activities -->
                    ${(cache.repairs || []).filter(r => r.customer_name === client.name).map(r => `
                        <div class="relative text-left">
                            <div class="absolute -left-10 top-0 w-8 h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                <span class="material-icons-outlined text-xs text-orange-500 text-center">build</span>
                            </div>
                            <div class="card p-5 group hover:border-slate-300 transition-all text-left">
                                <div class="flex justify-between items-start mb-2 text-left">
                                    <div class="text-left">
                                        <h4 class="text-xs font-black text-slate-900 text-left">Device Repair</h4>
                                        <p class="text-lg font-black tracking-tighter text-left">₹${r.cost || 'Estimating'}</p>
                                    </div>
                                    <span class="text-[8px] font-black text-slate-300 tabular-nums lowercase tracking-widest text-right">${new Date(r.created_at).toLocaleDateString()}</span>
                                </div>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">${r.device_model} • ${r.status}</p>
                            </div>
                        </div>
                    `).join('')}

                    <!-- Inquiry Activities -->
                    ${clientInquiries.map(inq => `
                        <div class="relative text-left">
                            <div class="absolute -left-10 top-0 w-8 h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                <span class="material-icons-outlined text-xs text-blue-500 text-center">info</span>
                            </div>
                            <div class="card p-5 flex justify-between items-start group hover:border-slate-300 transition-all text-left">
                                <div class="text-left">
                                    <h4 class="text-xs font-black text-slate-900 text-left">Product Inquiry</h4>
                                    <p class="text-[11px] font-bold text-slate-500 text-left">${inq.request || 'Interested in Product'}</p>
                                    <div class="flex items-center gap-1 mt-2 text-left">
                                        <div class="w-1 h-1 ${inq.status === 'PENDING' ? 'bg-yellow-400' : 'bg-green-400'} rounded-full text-left"></div>
                                        <p class="text-[8px] font-black text-slate-400 uppercase text-left">${inq.status}</p>
                                    </div>
                                </div>
                                <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(inq.date).toLocaleDateString()}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="pt-8">
                     <button onclick="setApp('sales'); setTab('new-sale');" class="w-full py-5 bg-slate-900 text-white rounded-[20px] text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all text-center">
                        Initiate New Purchase
                    </button>
                    <button onclick="setClientMode('directory')" class="w-full py-4 text-[9px] font-black text-slate-300 uppercase underline decoration-slate-200 underline-offset-8 mt-4 text-center">Back to Directory</button>
                </div>
            </div>
        </div>
    `;
}

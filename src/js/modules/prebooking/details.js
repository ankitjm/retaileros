import { state } from '../../state.js';

export function renderPreBookingDetails(isMobile) {
    const c = state.activeCampaign;
    if (!c) return '';

    const bookingLog = [
        { id: 'b1', name: 'Arjun Malhotra', deposit: '₹5,000', status: 'SUCCESS' },
        { id: 'b2', name: 'Sanya Kapoor', deposit: '₹5,000', status: 'SUCCESS' },
        { id: 'b3', name: 'Rohan Verma', deposit: '₹5,000', status: 'SUCCESS' }
    ];

    return `
        <div class="h-full flex flex-col bg-white dot-grid overflow-hidden animate-slide-up relative text-left">
            <header class="p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center gap-3 mb-6 text-left">
                    <span class="text-[8px] font-black text-slate-300 uppercase tracking-widest text-left">PRE-BOOKING</span>
                    <span class="material-icons-outlined text-[10px] text-slate-300 text-left">chevron_right</span>
                    <span class="text-[8px] font-black text-slate-900 uppercase tracking-widest text-left">${c.product.toUpperCase()}</span>
                </div>
                
                <div class="flex items-center justify-between mb-8 text-left">
                    <div class="flex items-center gap-4 text-left">
                        <button onclick="window.setPreBookingViewMode('dashboard')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full transition-colors text-left">
                            <span class="material-icons-outlined text-lg text-left">arrow_back</span>
                        </button>
                        <h1 class="text-3xl font-black tracking-tighter text-slate-900 text-left">Campaign Details</h1>
                    </div>
                    <button class="w-10 h-10 flex items-center justify-center text-slate-400 bg-slate-50 rounded-xl text-left"><span class="material-icons-outlined text-left">more_horiz</span></button>
                </div>

                <div class="space-y-6 mb-8 text-left">
                     <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 text-left">Campaign Link</p>
                     <div class="card p-4 border-slate-100 flex items-center gap-4 bg-white shadow-sm text-left">
                        <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 text-left">
                             <span class="material-symbols-outlined text-xl text-left">link</span>
                        </div>
                        <div class="flex-1 min-w-0 text-left">
                            <p class="text-xs font-black text-slate-950 truncate text-left">retailer.os/pre/${c.product.toLowerCase().replace(/ /g, '-')}</p>
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mt-1 text-left">Unique Campaign URL</p>
                        </div>
                        <button class="p-3 text-slate-400 hover:text-slate-900 transition-colors text-left"><span class="material-symbols-outlined text-left">share</span></button>
                     </div>
                </div>

                <div class="grid grid-cols-2 gap-4 mb-4 text-left">
                    <div class="bg-white card p-5 border-slate-100 text-left">
                        <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1 text-left">TOTAL LEADS</p>
                        <p class="text-2xl font-black text-slate-950 text-left">${(window.getCache().bookings || []).filter(b => b.campaign_id === c.id).length.toLocaleString()}</p>
                    </div>
                    <div class="bg-white card p-5 border-slate-100 text-left">
                        <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1 text-left">CONVERSION</p>
                        <p class="text-2xl font-black text-slate-950 text-left">--%</p>
                    </div>
                </div>

                <div class="flex items-center justify-between mt-8 mb-4 text-left">
                    <h3 class="text-[10px] font-black text-slate-950 uppercase tracking-widest text-left">Booking Log</h3>
                    <div class="px-2 py-1 bg-slate-900 text-white rounded-lg text-[8px] font-black tracking-widest text-right">LIVE</div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto px-8 space-y-4 custom-scrollbar pb-10 text-left">
                ${(window.getCache().bookings || []).filter(b => b.campaign_id === c.id).length === 0 ? `
                   <div class="p-10 text-center opacity-30">
                        <p class="text-[10px] font-black uppercase tracking-widest">No bookings yet</p>
                   </div>
                ` : (window.getCache().bookings || []).filter(b => b.campaign_id === c.id).map(lead => `
                    <div class="card p-5 border-slate-100 bg-white hover:border-slate-300 transition-all text-left">
                        <div class="flex justify-between items-start mb-4 text-left">
                            <div class="text-left">
                                <h4 class="text-sm font-black text-slate-950 mb-0.5 text-left">${lead.customer_name}</h4>
                                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-tighter font-mono text-left">Deposited: ₹${lead.amount}</p>
                            </div>
                            <span class="px-2 py-0.5 rounded-md text-[7px] font-black uppercase text-slate-900 tracking-wider text-right">${lead.status || 'PAID'}</span>
                        </div>
                        <button class="w-full py-3 bg-slate-950 text-white rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2 group shadow-xl text-center">
                            CONVERT TO SALE <span class="material-icons-outlined text-base group-hover:translate-x-1 transition-transform text-center">chevron_right</span>
                        </button>
                    </div>
                `).join('')}
            </div>
            
             <footer class="p-6 bg-white shrink-0 mt-auto border-t border-slate-100 z-20 text-left">
                <div class="card p-3 flex items-center justify-between border-slate-100 bg-slate-50 relative text-left">
                    <div class="flex items-center gap-3 text-left">
                        <div class="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center font-black text-xs text-white text-center">AS</div>
                        <div class="text-left">
                            <p class="text-[10px] font-black text-slate-900 text-left">Apple Store - Mumbai Central</p>
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest text-left">Store Manager</p>
                        </div>
                    </div>
                    <button class="flex items-center gap-1 text-slate-900 font-black text-[8px] uppercase tracking-widest text-center">LOGOUT <span class="material-icons-outlined text-sm text-center">logout</span></button>
                </div>
            </footer>
        </div>
    `;
}

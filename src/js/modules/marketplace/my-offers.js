import { db } from '../../utils/db.js';

// Toggle offer status
window._setOfferStatus = async (id, status) => {
    try {
        // For mock data, just show toast
        if (window.toast) window.toast.success(`Listing ${status === 'paused' ? 'paused' : status === 'sold' ? 'marked as sold' : 'updated'}`);
        window.triggerRender();
    } catch (err) {
        if (window.toast) window.toast.error('Failed to update');
    }
};

export function renderMarketplaceMyOffers() {
    const myOffers = [
        { id: 'o1', t: 'Flagship X Pro - 256GB', d: 'Space Black \u2022 Sealed Box', s: '14 Units', inq: '8 New', st: 'ACTIVE', i: 'tablet_android' },
        { id: 'o2', t: 'Premium Audio Buds G2', d: 'White \u2022 Demo Units', s: '5 Units', inq: '0 New', st: 'PAUSED', i: 'headset' },
        { id: 'o3', t: 'Smart Pad Ultra 11"', d: 'Silver \u2022 WiFi Only', s: '2 Units', inq: '2 New', st: 'ACTIVE', i: 'tablet_mac' }
    ];

    return `
        <div class="space-y-4 animate-slide-up text-left">
            ${myOffers.map(o => `
                <div class="card p-5 border-slate-100 hover:border-slate-300 transition-all flex gap-4 pr-3 text-left">
                    <div class="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100">
                        <span class="material-icons-outlined text-slate-300">${o.i}</span>
                    </div>
                    <div class="flex-1 text-left">
                        <div class="flex justify-between items-start mb-1">
                            <h3 class="text-sm font-black text-slate-900">${o.t}</h3>
                            <span class="px-2 py-0.5 rounded-full text-[7px] font-black uppercase ${o.st === 'ACTIVE' ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-600'}">${o.st}</span>
                        </div>
                        <p class="text-[10px] font-bold text-slate-400">${o.d}</p>
                        <div class="flex gap-4 mt-3 pt-3 border-t border-slate-50">
                            <div>
                                <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-0.5">STOCK</p>
                                <p class="text-[10px] font-black text-slate-900">${o.s}</p>
                            </div>
                            <div>
                                <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-0.5">INQUIRIES</p>
                                <p class="text-[10px] font-black text-slate-900">${o.inq}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between py-1 text-right">
                        <div class="space-y-2">
                            <div class="flex bg-slate-100 rounded-lg p-0.5">
                                <button onclick="window._setOfferStatus('${o.id}','paused')" class="px-2 py-1 text-[7px] font-black uppercase rounded-md text-slate-400 hover:text-slate-900 hover:bg-white transition-all text-center">Pause</button>
                                <button onclick="window._setOfferStatus('${o.id}','sold')" class="px-2 py-1 text-[7px] font-black uppercase rounded-md text-slate-400 hover:text-slate-900 hover:bg-white transition-all text-center">Sold</button>
                            </div>
                        </div>
                        <button onclick="window.setMarketplaceViewMode('add')" class="text-[8px] font-black text-slate-950 uppercase flex items-center gap-1 group">EDIT <span class="material-icons-outlined text-xs group-hover:translate-x-1 transition-transform">chevron_right</span></button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

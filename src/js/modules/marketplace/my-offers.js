export function renderMarketplaceMyOffers() {
    const myOffers = [
        { id: 'o1', t: 'Flagship X Pro - 256GB', d: 'Space Black • Sealed Box', s: '14 Units', inq: '8 New', st: 'ACTIVE', i: 'tablet_android' },
        { id: 'o2', t: 'Premium Audio Buds G2', d: 'White • Demo Units', s: '5 Units', inq: '0 New', st: 'PAUSED', i: 'headset' },
        { id: 'o3', t: 'Smart Pad Ultra 11"', d: 'Silver • WiFi Only', s: '2 Units', inq: '2 New', st: 'ACTIVE', i: 'tablet_mac' }
    ];

    return `
        <div class="space-y-4 animate-slide-up text-left">
            ${myOffers.map(o => `
                <div class="card p-5 border-slate-100 hover:border-slate-300 transition-all flex gap-4 pr-3 text-left">
                    <div class="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 text-left">
                        <span class="material-icons-outlined text-slate-300 text-left">${o.i}</span>
                    </div>
                    <div class="flex-1 text-left">
                        <div class="flex justify-between items-start mb-1 text-left">
                            <h3 class="text-sm font-black text-slate-900 text-left">${o.t}</h3>
                            <span class="px-2 py-0.5 rounded-full text-[7px] font-black uppercase text-right ${o.st === 'ACTIVE' ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-600'}">${o.st}</span>
                        </div>
                        <p class="text-[10px] font-bold text-slate-400 text-left">${o.d}</p>
                        <div class="flex gap-4 mt-3 pt-3 border-t border-slate-50 text-left">
                            <div class="text-left">
                                <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-0.5 text-left">STOCK</p>
                                <p class="text-[10px] font-black text-slate-900 text-left">${o.s}</p>
                            </div>
                            <div class="text-left">
                                <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-0.5 text-left">INQUIRIES</p>
                                <p class="text-[10px] font-black text-slate-900 text-left">${o.inq}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between py-1 text-right">
                        <div class="space-y-2 text-right">
                            <div class="flex bg-slate-100 rounded-lg p-0.5 text-right">
                                <button class="px-2 py-1 text-[7px] font-black uppercase rounded-md text-slate-400 hover:text-slate-900 text-center">Pause</button>
                                <button class="px-2 py-1 text-[7px] font-black uppercase rounded-md text-slate-400 hover:text-slate-900 text-center">Sold</button>
                            </div>
                        </div>
                        <button class="text-[8px] font-black text-slate-950 uppercase flex items-center gap-1 group text-right">EDIT <span class="material-icons-outlined text-xs group-hover:translate-x-1 transition-transform text-right">chevron_right</span></button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

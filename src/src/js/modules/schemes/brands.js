import { state } from '../../state.js';

export function renderSchemeBrands() {
    const brands = [
        { id: 'apple', n: 'Apple', s: 'PREMIUM PARTNER', amt: '₹4,82,500', live: 12, comp: 48, set: 142, nSet: 24, i: 'apple' },
        { id: 'nothing', n: 'Nothing', s: 'EMERGAGING BRAND', amt: '₹1,12,000', live: 4, comp: 15, set: 56, nSet: 8, i: 'nothing' },
        { id: 'oneplus', n: 'OnePlus', s: 'GLOBAL TECH', amt: '₹2,45,900', live: 8, comp: 32, set: 98, nSet: 12, i: 'oneplus' }
    ];

    return `
        <div class="space-y-4 text-left">
            ${brands.map(b => `
                <div onclick="selectSchemeBrand('${b.n}')" class="card p-5 border-2 transition-all group cursor-pointer relative overflow-hidden text-left ${state.activeSchemeBrand === b.n ? 'border-slate-900 shadow-lg' : 'border-transparent hover:border-slate-200'}">
                    <div class="flex items-center justify-between mb-6 text-left">
                        <div class="flex items-center gap-4 text-left">
                            <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 text-left">
                                <span class="material-icons-outlined text-slate-400 text-left">${b.id === 'apple' ? 'devices' : b.id === 'nothing' ? 'noise_aware' : 'bolt'}</span>
                            </div>
                            <div class="text-left">
                                <h3 class="text-sm font-black text-slate-900 text-left">${b.n}</h3>
                                <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest text-left">${b.s}</p>
                            </div>
                        </div>
                        <span class="material-icons-outlined text-slate-200 group-hover:text-slate-400 transition-colors text-right">chevron_right</span>
                    </div>

                    <div class="space-y-4 text-left">
                        <div class="text-left">
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">TOTAL PENDING SETTLEMENT</p>
                            <h2 class="text-2xl font-black text-slate-900 tracking-tighter text-left">${b.amt}</h2>
                        </div>

                        <div class="grid grid-cols-2 gap-4 text-left">
                            <div class="bg-slate-50 rounded-xl p-3 text-left">
                                <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 leading-none text-left">LIVE SCHEMES</p>
                                <p class="text-lg font-black text-slate-900 text-left">${b.live}</p>
                            </div>
                            <div class="bg-slate-50 rounded-xl p-3 text-left">
                                <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 leading-none text-left">COMPLETED</p>
                                <p class="text-lg font-black text-slate-900 text-left">${b.comp}</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 pt-4 border-t border-slate-50 text-left">
                            <div class="flex items-center gap-1.5 grayscale opacity-50 text-left">
                                <div class="w-1.5 h-1.5 bg-slate-900 rounded-full text-left"></div>
                                <p class="text-[8px] font-black text-slate-900 uppercase tracking-widest text-left">Settled: ${b.set}</p>
                            </div>
                            <div class="flex items-center gap-1.5 text-left">
                                <div class="w-1.5 h-1.5 bg-slate-300 rounded-full text-left"></div>
                                <p class="text-[8px] font-black text-slate-900 uppercase tracking-widest text-left">Not Settled: ${b.nSet}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

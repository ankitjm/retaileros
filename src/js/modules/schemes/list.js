import { state, triggerRender } from '../../state.js';

// Helper functions for scheme selection
window.setSchemeViewMode = (mode) => {
    state.showSchemeDetails = mode === 'details';
    triggerRender();
};

window.setActiveScheme = (scheme) => {
    state.activeScheme = scheme;
    triggerRender();
};

export function renderSchemesList() {
    const cache = window.getCache ? window.getCache() : { schemes: [] };
    const schemes = cache.schemes || [];

    return `
        <div class="space-y-4 animate-slide-up text-left">
            ${schemes.map(s => `
                <div onclick="window.setSchemeViewMode('details'); window.setActiveScheme(${JSON.stringify(s).replace(/"/g, '&quot;')})" class="card p-6 border-2 transition-all cursor-pointer group text-left ${state.activeScheme?.id === s.id ? 'border-slate-900 shadow-lg' : 'border-transparent hover:border-slate-200'}">
                    <div class="flex justify-between items-start mb-4 text-left">
                        <div class="text-left">
                            <h3 class="text-lg font-black text-slate-900 text-left">${s.name}</h3>
                            <span class="bg-indigo-50 text-indigo-600 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide inline-block mt-1 text-left">${s.brand}</span>
                        </div>
                        <div class="text-right">
                            <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-0.5 text-right">PAYOUT</p>
                            <p class="text-sm font-black text-slate-900 text-right">₹${parseInt(s.payout).toLocaleString()}</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-left">
                        <p class="text-[10px] font-bold text-slate-400 text-left">${s.description || 'Valid on all sales'}</p>
                        <p class="text-[9px] font-black text-slate-300 uppercase text-right">End: ${new Date(s.end_date).toLocaleDateString()}</p>
                    </div>
                </div>
            `).join('')}

            ${schemes.length === 0 ? `
                <div class="py-20 text-center opacity-20">
                    <span class="material-icons-outlined text-4xl">inventory_2</span>
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] mt-4">No active schemes found</p>
                </div>
            ` : ''}
        </div>
    `;
}

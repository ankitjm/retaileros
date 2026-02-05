import { state, triggerRender } from '../../state.js';
import { renderSchemeBrands } from './brands.js';
import { renderSchemesList } from './list.js';
import { renderSchemeDetails } from './details.js';

export function renderSchemes(mode) {
    const isDesktopSecondary = mode === 'desktop-secondary';
    const isMobile = mode === 'mobile';

    // Helper to switch views
    window.selectSchemeBrand = (brandName) => {
        state.activeSchemeBrand = brandName;
        state.schemesTab = 'list';
        triggerRender();
    };

    window.selectScheme = (schemeName) => {
        state.activeScheme = schemeName;
        if (isMobile) {
            state.showSchemeDetails = true;
        }
        triggerRender();
    };

    window.setSchemesTab = (tab) => {
        state.schemesTab = tab;
        triggerRender();
    };

    window.toggleSchemeDetails = (show) => {
        state.showSchemeDetails = show;
        triggerRender();
    };

    if (isDesktopSecondary || (isMobile && state.showSchemeDetails)) {
        return renderSchemeDetails(mode);
    }

    const isBrandTab = state.schemesTab === 'brands';

    return `
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                    ${isMobile && !isBrandTab ? `
                        <button onclick="setSchemesTab('brands')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                            <span class="material-icons-outlined text-left">chevron_left</span>
                            <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                        </button>
                    ` : `
                        <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                            <span class="material-icons-outlined text-left">chevron_left</span>
                            <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                        </button>
                    `}
                    <div class="text-center translate-x-1">
                        <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">Schemes</h1>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Incentives & Claims</p>
                    </div>
                    <button class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">search</span></button>
                </div>

                <div class="flex bg-slate-100 p-1 rounded-xl gap-1 text-left">
                    <button onclick="setSchemesTab('brands')" class="flex-1 py-3 ${isBrandTab ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'} text-[10px] font-black uppercase rounded-lg transition-all text-center">Brands</button>
                    <button onclick="setSchemesTab('list')" class="flex-1 py-3 ${!isBrandTab ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'} text-[10px] font-black uppercase rounded-lg transition-all text-center">Schemes</button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto px-8 space-y-6 custom-scrollbar pb-32 text-left">
                ${isBrandTab ? renderSchemeBrands() : renderSchemesList()}
            </div>

            <!-- Profile Footer -->
            <footer class="p-6 bg-white shrink-0 mt-auto border-t border-slate-100 text-left">
                <div class="card p-3 flex items-center justify-between border-slate-100 text-left">
                    <div class="flex items-center gap-3 text-left">
                        <div class="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-black text-[10px] text-slate-900 text-center">AS</div>
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900 text-left">Apple Store - Mumbai Central</p>
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-medium text-left">Store Manager</p>
                        </div>
                    </div>
                    <button class="flex items-center gap-1.5 text-slate-900 font-black text-[9px] uppercase tracking-widest px-3 py-2 hover:bg-slate-50 rounded-lg transition-colors text-center">
                        Logout <span class="material-icons-outlined text-base text-center">logout</span>
                    </button>
                </div>
            </footer>

            <!-- Floating Action Button -->
            <div class="absolute bottom-32 right-8 z-20 text-left">
                <button class="w-14 h-14 bg-slate-950 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform text-center">
                    <span class="material-icons-outlined text-2xl text-center">${isBrandTab ? 'add' : 'filter_list'}</span>
                </button>
            </div>
        </div>
    `;
}

import { state } from '../../state.js';
import { renderMarketplaceHeader } from './header.js';
import { renderMarketplaceList } from './list.js';
import { renderMarketplaceMyOffers } from './my-offers.js';
import { renderMarketplaceAddProduct } from './add-product.js';

export function renderMarketplace(mode) {
    const isMobile = mode === 'mobile';
    const isDesktopSecondary = mode === 'desktop-secondary';

    if (isDesktopSecondary || (isMobile && state.marketplaceViewMode === 'add')) {
        return renderMarketplaceAddProduct(mode);
    }

    const isBrowse = state.marketplaceTab === 'browse';

    return `
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            ${renderMarketplaceHeader()}
            <div class="flex-1 overflow-y-auto px-8 space-y-6 custom-scrollbar pb-20 text-left">
                ${isBrowse ? renderMarketplaceList() : renderMarketplaceMyOffers()}
            </div>

             <!-- Floating Action Button -->
            <div class="absolute bottom-32 right-8 z-30 text-left">
                <button onclick="window.setMarketplaceViewMode('add')" class="w-16 h-16 bg-slate-950 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-center">
                    <span class="material-icons-outlined text-3xl font-light text-center">add</span>
                </button>
            </div>
        </div>
    `;
}

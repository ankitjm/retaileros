import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';

// Toggle offer status
window._setOfferStatus = async (id, status) => {
    try {
        await db.marketplace.updateStatus(id, status);
        // Update cache
        const cache = window.getCache();
        const listing = (cache.marketplace || []).find(l => l.id === id);
        if (listing) listing.status = status;
        if (window.toast) window.toast.success(`Listing ${status === 'paused' ? 'paused' : status === 'sold' ? 'marked as sold' : 'updated'}`);
        window.triggerRender();
    } catch (err) {
        if (window.toast) window.toast.error('Failed to update');
    }
};

export function renderMarketplaceMyOffers() {
    const cache = window.getCache();
    const rid = localStorage.getItem('retaileros_retailer_id');
    const myOffers = (cache.marketplace || []).filter(l => l.retailer_id === rid);

    const iconMap = { 'Smartphones': 'smartphone', 'Tablets': 'tablet_android', 'Audio': 'headset', 'Laptops': 'laptop_mac', 'Wearables': 'watch', 'Accessories': 'cable' };

    return `
        <div class="space-y-4 animate-slide-up text-left">
            ${myOffers.map(o => {
                const icon = iconMap[o.category] || 'shopping_bag';
                const statusLabel = (o.status || 'active').toUpperCase();
                return `
                <div class="card p-5 border-slate-100 hover:border-slate-300 transition-all flex gap-4 pr-3 text-left">
                    <div class="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100">
                        <span class="material-icons-outlined text-slate-300">${icon}</span>
                    </div>
                    <div class="flex-1 text-left">
                        <div class="flex justify-between items-start mb-1">
                            <h3 class="text-sm font-black text-slate-900">${o.product_name}</h3>
                            <span class="px-2 py-0.5 rounded-full text-[7px] font-black uppercase ${statusLabel === 'ACTIVE' ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-600'}">${statusLabel}</span>
                        </div>
                        <p class="text-[10px] font-bold text-slate-400">${o.brand || ''} ${o.condition ? '• ' + o.condition : ''}</p>
                        <div class="flex gap-4 mt-3 pt-3 border-t border-slate-50">
                            <div>
                                <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-0.5">STOCK</p>
                                <p class="text-[10px] font-black text-slate-900">${o.quantity || 0} Units</p>
                            </div>
                            <div>
                                <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-0.5">PRICE</p>
                                <p class="text-[10px] font-black text-slate-900">₹${parseInt(o.price || 0).toLocaleString()}</p>
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
                    </div>
                </div>
                `;
            }).join('')}

            ${myOffers.length === 0 ? `
                <div class="py-20 text-center opacity-20">
                    <span class="material-icons-outlined text-4xl">storefront</span>
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] mt-4">No active listings</p>
                    <p class="text-[8px] font-bold text-slate-400 mt-1">Post products from your inventory</p>
                </div>
            ` : ''}
        </div>
    `;
}

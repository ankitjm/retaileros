import { state } from '../../state.js';
import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';

export function renderListings(isMobile) {
    const cache = window.getCache();
    const listings = cache.storeListings || [];

    const activeCount = listings.filter(l => l.status === 'active').length;
    const draftCount = listings.filter(l => l.status === 'draft').length;
    const inactiveCount = listings.filter(l => l.status === 'inactive').length;

    const getStatusBadge = (status) => {
        switch (status) {
            case 'active': return '<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-900 text-white">Active</span>';
            case 'draft': return '<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-200 text-slate-600">Draft</span>';
            case 'inactive': return '<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-100 text-slate-400">Inactive</span>';
            default: return '';
        }
    };

    // Delete listing handler
    window._deleteStoreListing = async (id, name) => {
        if (!confirm(`Remove "${name}" from your store?`)) return;
        try {
            await db.storeListings.delete(id);
            if (window._db_cache.storeListings) {
                window._db_cache.storeListings = window._db_cache.storeListings.filter(l => l.id !== id);
            }
            const r = (() => { const c = window.getCache(); const rid = localStorage.getItem('retaileros_retailer_id'); return c.retailers?.find(x => x.id === rid) || {}; })();
            db.activityLogs.add({ action: 'store', detail: `Removed listing: ${name}`, user_name: r.contact_person || 'Owner', icon: 'remove_shopping_cart', color: 'red' });
            if (window.toast) window.toast.success('Listing removed');
            window.triggerRender();
        } catch (err) {
            console.error('Delete listing failed:', err);
            if (window.toast) window.toast.error('Failed to remove listing');
        }
    };

    // Toggle listing status
    window._toggleListingStatus = async (id, currentStatus) => {
        const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
        try {
            const listing = listings.find(l => l.id === id);
            if (!listing) return;
            await db.storeListings.update(id, {
                listing_price: listing.listing_price,
                description: listing.description,
                status: newStatus,
                stock_qty: listing.stock_qty
            });
            // Update cache
            const idx = window._db_cache.storeListings.findIndex(l => l.id === id);
            if (idx >= 0) window._db_cache.storeListings[idx].status = newStatus;
            if (window.toast) window.toast.success(newStatus === 'active' ? 'Listing activated' : 'Listing deactivated');
            window.triggerRender();
        } catch (err) {
            console.error('Toggle listing failed:', err);
            if (window.toast) window.toast.error('Failed to update listing');
        }
    };

    return `
        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-12 text-left flex-1 overflow-y-auto w-full">
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-3 text-left">
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900">${activeCount}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Live</p>
                </div>
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-400">${draftCount}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Drafts</p>
                </div>
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900">${listings.length}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Total</p>
                </div>
            </div>

            <!-- Listings List -->
            <section class="space-y-3 text-left">
                <div class="flex items-center justify-between text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Product Listings
                    </h3>
                </div>

                ${listings.length === 0 ? `
                    <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                        <span class="material-icons-outlined text-3xl text-slate-200">storefront</span>
                        <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">No products listed yet</span>
                        <span class="text-[9px] font-bold text-slate-300">Add products from your inventory to your online store</span>
                        <button type="button" onclick="window.setMyStoreViewMode('add-listing')" class="mt-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all">
                            Add First Listing
                        </button>
                    </div>
                ` : `
                    ${listings.map(l => `
                        <button type="button" onclick="window.setActiveListing('${l.id}')" class="card p-4 sm:p-5 border-2 transition-all cursor-pointer text-left w-full ${state.activeListingId === l.id ? 'border-slate-900 shadow-lg' : 'border-transparent hover:border-slate-200'}">
                            <div class="flex items-start justify-between text-left">
                                <div class="flex-1 min-w-0 text-left">
                                    <div class="flex items-center gap-2 mb-1 flex-wrap text-left">
                                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter">${l.brand || ''} ${l.category || ''}</p>
                                        ${getStatusBadge(l.status)}
                                    </div>
                                    <h4 class="text-sm font-black text-slate-900 tracking-tight truncate text-left">${l.product_name}</h4>
                                    ${l.description ? `<p class="text-[10px] font-bold text-slate-400 mt-1 truncate text-left">${l.description}</p>` : ''}
                                </div>
                                <div class="text-right shrink-0 ml-3">
                                    <p class="text-lg font-black text-slate-900 tracking-tighter">${l.listing_price ? '₹' + parseInt(l.listing_price).toLocaleString() : '—'}</p>
                                    ${l.base_price && l.base_price !== l.listing_price ? `<p class="text-[9px] font-bold text-slate-300 line-through">₹${parseInt(l.base_price).toLocaleString()}</p>` : ''}
                                </div>
                            </div>
                            <div class="flex items-center justify-between mt-3 pt-3 border-t border-slate-50 text-left">
                                <div class="flex items-center gap-3 text-left">
                                    <span class="text-[9px] font-black text-slate-400 flex items-center gap-1">
                                        <span class="material-icons-outlined text-xs">inventory_2</span>
                                        ${l.stock_qty || 0} in stock
                                    </span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <button type="button" onclick="window._toggleListingStatus('${l.id}','${l.status}')" class="px-3 py-1.5 rounded-lg text-[8px] font-black uppercase tracking-widest transition-all ${l.status === 'active' ? 'bg-white text-slate-400 border border-slate-200 hover:bg-slate-50' : 'bg-slate-900 text-white hover:bg-slate-800'}">
                                        ${l.status === 'active' ? 'Deactivate' : 'Activate'}
                                    </button>
                                    <button type="button" onclick="window._deleteStoreListing('${l.id}','${(l.product_name || '').replace(/'/g, "\\'")}')" class="p-1.5 rounded-lg text-slate-300 hover:text-slate-400 hover:bg-slate-50 transition-all">
                                        <span class="material-icons-outlined text-sm">delete</span>
                                    </button>
                                </div>
                            </div>
                        </button>
                    `).join('')}
                `}
            </section>
        </div>

        <!-- FAB: Add Listing -->
        <div class="absolute bottom-8 right-8 z-30">
            <button type="button" onclick="window.setMyStoreViewMode('add-listing')" class="w-14 h-14 bg-slate-950 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                <span class="material-icons-outlined text-2xl">add</span>
            </button>
        </div>
    `;
}

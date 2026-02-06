import { state } from '../../state.js';
import { db } from '../../utils/db.js';

export function renderListingDetail() {
    const cache = window.getCache();
    const listings = cache.storeListings || [];
    const listing = listings.find(l => l.id === state.activeListingId);

    if (!listing) {
        return `<div class="h-full flex items-center justify-center text-slate-300">
            <div class="text-center">
                <span class="material-icons-outlined text-4xl mb-2 opacity-50">inventory_2</span>
                <p class="text-[10px] font-black uppercase tracking-widest">Select a listing to view details</p>
            </div>
        </div>`;
    }

    const getStatusBadge = (status) => {
        switch (status) {
            case 'active': return '<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-900 text-white">Active</span>';
            case 'draft': return '<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-200 text-slate-600">Draft</span>';
            case 'inactive': return '<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-100 text-slate-400">Inactive</span>';
            default: return '';
        }
    };

    // Count orders for this listing
    const orderItems = cache.storeOrderItems || [];
    const listingOrders = orderItems.filter(i => i.listing_id === listing.id);
    const totalSold = listingOrders.reduce((sum, i) => sum + (i.quantity || 1), 0);
    const totalRevenue = listingOrders.reduce((sum, i) => sum + (parseInt(i.final_price) || 0), 0);

    // Save listing edits
    window._saveListingEdit = async () => {
        const priceEl = document.getElementById('edit-listing-price');
        const descEl = document.getElementById('edit-listing-desc');
        const stockEl = document.getElementById('edit-listing-stock');
        if (!priceEl) return;

        try {
            await db.storeListings.update(listing.id, {
                listing_price: parseInt(priceEl.value) || listing.listing_price,
                description: descEl.value || listing.description,
                status: listing.status,
                stock_qty: parseInt(stockEl.value) || listing.stock_qty
            });
            // Update cache
            const idx = window._db_cache.storeListings.findIndex(l => l.id === listing.id);
            if (idx >= 0) {
                window._db_cache.storeListings[idx].listing_price = parseInt(priceEl.value) || listing.listing_price;
                window._db_cache.storeListings[idx].description = descEl.value || listing.description;
                window._db_cache.storeListings[idx].stock_qty = parseInt(stockEl.value) || listing.stock_qty;
            }
            if (window.toast) window.toast.success('Listing updated');
            window.triggerRender();
        } catch (err) {
            console.error('Save listing edit failed:', err);
            if (window.toast) window.toast.error('Failed to save');
        }
    };

    const formatDate = (d) => d ? new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';

    return `
        <div id="listing-detail" class="card p-6 sm:p-8 bg-white text-slate-900 leading-relaxed shadow-sm relative h-full flex flex-col border border-slate-100">
            <!-- Header -->
            <div class="text-center border-b border-dashed border-slate-200 pb-6 mb-6">
                <h2 class="text-xl font-black tracking-tighter mb-1">Listing Details</h2>
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Product Listing</p>
                <div class="mt-4 flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest px-4">
                    <span>${listing.brand || ''} ${listing.category || ''}</span>
                    <span>${getStatusBadge(listing.status)}</span>
                </div>
            </div>

            <!-- Product Info -->
            <div class="mb-6 text-left">
                <h3 class="text-lg font-black text-slate-900 tracking-tight text-left">${listing.product_name}</h3>
                ${listing.description ? `<p class="text-[10px] font-bold text-slate-400 mt-1 text-left">${listing.description}</p>` : ''}
            </div>

            <!-- Price Grid -->
            <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="text-left">
                    <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">Listing Price</p>
                    <p class="text-xl font-black text-slate-900 text-left">₹${parseInt(listing.listing_price || 0).toLocaleString()}</p>
                </div>
                <div class="text-right">
                    <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-right">Base Price (MOP)</p>
                    <p class="text-xl font-black ${listing.base_price !== listing.listing_price ? 'text-slate-400 line-through' : 'text-slate-900'} text-right">₹${parseInt(listing.base_price || 0).toLocaleString()}</p>
                </div>
            </div>

            <!-- Stats -->
            <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6">
                <div class="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <p class="text-lg font-black text-slate-900">${listing.stock_qty || 0}</p>
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">In Stock</p>
                    </div>
                    <div>
                        <p class="text-lg font-black text-slate-900">${totalSold}</p>
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Sold</p>
                    </div>
                    <div>
                        <p class="text-lg font-black text-slate-900">${totalRevenue > 0 ? '₹' + totalRevenue.toLocaleString() : '₹0'}</p>
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Revenue</p>
                    </div>
                </div>
            </div>

            <!-- Edit Fields -->
            <div class="space-y-4 flex-1 overflow-y-auto custom-scrollbar text-left">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                    <span class="material-icons-outlined text-xs">edit</span> Edit Listing
                </p>
                <div class="text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Listing Price (₹)</p>
                    <input type="number" id="edit-listing-price" value="${listing.listing_price || ''}" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-slate-900 transition-all">
                </div>
                <div class="text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Description</p>
                    <textarea id="edit-listing-desc" rows="3" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-slate-900 transition-all resize-none">${listing.description || ''}</textarea>
                </div>
                <div class="text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Stock Quantity</p>
                    <input type="number" id="edit-listing-stock" value="${listing.stock_qty || 0}" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-slate-900 transition-all">
                </div>

                <button type="button" onclick="window._saveListingEdit()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    <span class="material-icons-outlined text-sm">save</span> Save Changes
                </button>
            </div>

            <!-- Footer Info -->
            <div class="border-t border-dashed border-slate-200 pt-4 mt-4 text-left">
                <div class="flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>Listed: ${formatDate(listing.created_at)}</span>
                    <span>Updated: ${formatDate(listing.updated_at)}</span>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-2 mt-4">
                <button type="button" onclick="window._toggleListingStatus('${listing.id}','${listing.status}')" class="flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${listing.status === 'active' ? 'bg-white border border-slate-200 text-slate-400 hover:bg-slate-50' : 'bg-slate-900 text-white border border-slate-900 hover:bg-slate-800'}">
                    <span class="material-icons-outlined text-sm">${listing.status === 'active' ? 'pause_circle' : 'play_circle'}</span>
                    ${listing.status === 'active' ? 'Deactivate' : 'Activate'}
                </button>
                <button type="button" onclick="window._deleteStoreListing('${listing.id}','${(listing.product_name || '').replace(/'/g, "\\'")}')" class="py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest bg-white border border-slate-200 text-slate-400 hover:text-slate-400 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                    <span class="material-icons-outlined text-sm">delete</span>
                </button>
            </div>
        </div>
    `;
}

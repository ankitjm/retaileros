import { state } from '../../state.js';
import { renderMyStoreHeader } from './header.js';
import { renderDashboard } from './dashboard.js';
import { renderListings } from './listings.js';
import { renderAddListing } from './add-listing.js';
import { renderListingDetail } from './listing-detail.js';
import { renderOrders } from './orders.js';
import { renderOrderDetail } from './order-detail.js';
import { renderShipping } from './shipping.js';

export function renderMyStore(mode) {
    const isMobile = mode === 'mobile';
    const isDesktopSecondary = mode === 'desktop-secondary';

    // Desktop Secondary: contextual detail views
    if (isDesktopSecondary) {
        if (state.myStoreViewMode === 'order-detail' && state.activeStoreOrderId) {
            return renderOrderDetail();
        }
        if (state.myStoreViewMode === 'add-listing') {
            return renderAddListing();
        }
        if (state.activeListingId && state.myStoreTab === 'listings') {
            return renderListingDetail();
        }
        // Dashboard secondary: store overview
        if (state.myStoreTab === 'dashboard') {
            const cache = window.getCache();
            const listings = cache.storeListings || [];
            const activeCount = listings.filter(l => l.status === 'active').length;
            return `<div class="h-full flex flex-col p-6 sm:p-8 text-left">
                <div class="text-center border-b border-dashed border-slate-200 pb-6 mb-6">
                    <h2 class="text-xl font-black tracking-tighter mb-1">Store Overview</h2>
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Quick Actions</p>
                </div>
                <div class="space-y-3 flex-1 text-left">
                    <button type="button" onclick="window.setMyStoreTab('listings'); window.setMyStoreViewMode('add-listing')" class="card p-4 w-full border-2 border-transparent hover:border-slate-200 transition-all cursor-pointer text-left flex items-center gap-3">
                        <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                            <span class="material-icons-outlined text-slate-500">add_circle</span>
                        </div>
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900">Add New Listing</p>
                            <p class="text-[9px] font-bold text-slate-400">List a product from your inventory</p>
                        </div>
                    </button>
                    <button type="button" onclick="window.setMyStoreTab('orders')" class="card p-4 w-full border-2 border-transparent hover:border-slate-200 transition-all cursor-pointer text-left flex items-center gap-3">
                        <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                            <span class="material-icons-outlined text-slate-500">shopping_bag</span>
                        </div>
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900">Manage Orders</p>
                            <p class="text-[9px] font-bold text-slate-400">View and process incoming orders</p>
                        </div>
                    </button>
                    <button type="button" onclick="window.setMyStoreTab('shipping')" class="card p-4 w-full border-2 border-transparent hover:border-slate-200 transition-all cursor-pointer text-left flex items-center gap-3">
                        <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                            <span class="material-icons-outlined text-slate-500">local_shipping</span>
                        </div>
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900">Shipping Queue</p>
                            <p class="text-[9px] font-bold text-slate-400">Orders ready to ship</p>
                        </div>
                    </button>
                </div>
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mt-4">
                    <div class="grid grid-cols-2 gap-4 text-center">
                        <div>
                            <p class="text-lg font-black text-slate-900">${activeCount}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Live Products</p>
                        </div>
                        <div>
                            <p class="text-lg font-black text-slate-900">${listings.length}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Total Listings</p>
                        </div>
                    </div>
                </div>
            </div>`;
        }
        // Default empty state
        return `<div class="h-full flex items-center justify-center text-slate-300">
            <div class="text-center">
                <span class="material-icons-outlined text-4xl mb-2 opacity-50">storefront</span>
                <p class="text-[10px] font-black uppercase tracking-widest">Select an item to view details</p>
            </div>
        </div>`;
    }

    // Mobile: handle sub-views
    if (isMobile) {
        if (state.myStoreViewMode === 'order-detail' && state.activeStoreOrderId) {
            return renderOrderDetail();
        }
        if (state.myStoreViewMode === 'add-listing') {
            return renderAddListing();
        }
    }

    // Primary: tab-based content
    const getTabContent = () => {
        switch (state.myStoreTab) {
            case 'dashboard': return renderDashboard(isMobile);
            case 'orders': return renderOrders(isMobile);
            case 'shipping': return renderShipping(isMobile);
            default: return renderListings(isMobile);
        }
    };

    return `
        <div class="h-full flex flex-col relative bg-white">
            ${renderMyStoreHeader()}
            ${getTabContent()}
        </div>
    `;
}

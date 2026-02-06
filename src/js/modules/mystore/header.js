import { state } from '../../state.js';

export function renderMyStoreHeader() {
    const cache = window.getCache();
    const orders = cache.storeOrders || [];
    const pendingCount = orders.filter(o => o.order_status === 'pending' || o.order_status === 'confirmed').length;
    const shippingCount = orders.filter(o => o.order_status === 'confirmed').length;

    return `
        <header class="p-4 sm:p-8 pb-4 shrink-0">
            <div class="flex items-center justify-between mb-6">
                <button type="button" onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                    <span class="material-icons-outlined">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                </button>
                <div class="text-center">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900">My Store</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Ecommerce Management</p>
                </div>
                <div class="w-8"></div>
            </div>

            <!-- Tabs -->
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                <button type="button" onclick="window.setMyStoreTab('dashboard')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-1.5 ${state.myStoreTab === 'dashboard' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}">
                    <span class="material-icons-outlined text-sm">dashboard</span>
                    <span class="hidden sm:inline">Dashboard</span>
                </button>
                <button type="button" onclick="window.setMyStoreTab('listings')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-1.5 ${state.myStoreTab === 'listings' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}">
                    <span class="material-icons-outlined text-sm">inventory_2</span>
                    <span class="hidden sm:inline">Listings</span>
                </button>
                <button type="button" onclick="window.setMyStoreTab('orders')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-1.5 relative ${state.myStoreTab === 'orders' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}">
                    <span class="material-icons-outlined text-sm">shopping_bag</span>
                    <span class="hidden sm:inline">Orders</span>
                    ${pendingCount > 0 ? `<span class="absolute -top-1 right-2 w-4 h-4 bg-red-500 text-white text-[7px] font-black rounded-full flex items-center justify-center">${pendingCount}</span>` : ''}
                </button>
                <button type="button" onclick="window.setMyStoreTab('shipping')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-1.5 relative ${state.myStoreTab === 'shipping' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}">
                    <span class="material-icons-outlined text-sm">local_shipping</span>
                    <span class="hidden sm:inline">Shipping</span>
                    ${shippingCount > 0 ? `<span class="absolute -top-1 right-2 w-4 h-4 bg-amber-500 text-white text-[7px] font-black rounded-full flex items-center justify-center">${shippingCount}</span>` : ''}
                </button>
            </div>
        </header>
    `;
}

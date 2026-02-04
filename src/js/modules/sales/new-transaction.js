import { state } from '../../state.js';
import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';
import { renderSalesHeader } from './header.js';

// Local transaction state
let activeCart = [];
let selectedCustomerId = null;
let selectedCustomerName = "Select Customer";

export async function addProductToCart(id) {
    const products = window.getCache().products;
    const item = products.find(p => p.id === id);
    if (item) {
        activeCart.push({ ...item, qty: 1 });
        window.triggerRender();
    }
}

export function selectSaleCustomer(id, name) {
    selectedCustomerId = id;
    selectedCustomerName = name;
    window.triggerRender();
}

export async function completeTransaction() {
    if (activeCart.length === 0 || !selectedCustomerId) {
        alert("Please select a customer and add items to cart.");
        return;
    }

    const btn = document.getElementById('complete-txn-btn');
    btn.disabled = true;
    btn.innerHTML = 'Processing...';

    try {
        const txnId = 'ORD-' + Math.random().toString(36).substr(2, 6).toUpperCase();
        const totalAmount = activeCart.reduce((sum, item) => sum + item.mop, 0);

        // 1. Create Sale Record
        await db.sales.add({
            id: txnId,
            customer_id: selectedCustomerId,
            customer_name: selectedCustomerName,
            date: new Date().toISOString(),
            total_amount: totalAmount,
            status: 'completed'
        });

        // 2. Create Sale Items
        for (const item of activeCart) {
            await db.sales.addItem({
                id: 'ITEM-' + Math.random().toString(36).substr(2, 8).toUpperCase(),
                sale_id: txnId,
                product_id: item.id,
                product_name: item.name,
                category: item.category,
                quantity: 1,
                price: item.mop,
                imei: 'N/A'
            });

            // Update stock (optional)
            // await db.query("UPDATE products SET in_stock = in_stock - 1 WHERE id = ?", [item.id]);
        }

        activeCart = [];
        selectedCustomerId = null;
        selectedCustomerName = "Select Customer";

        await syncData();
        window.setTab('history');
        window.setSalesHistoryId(txnId);
    } catch (err) {
        console.error(err);
        alert("Error completing transaction: " + err.message);
        btn.disabled = false;
        btn.innerHTML = 'Complete Transaction';
    }
}

// Global exposure
window.selectSaleCustomer = selectSaleCustomer;
window.addProductToCart = addProductToCart;
window.completeTransaction = completeTransaction;
window.getActiveCart = () => activeCart;
window.getSelectedCustomer = () => ({ id: selectedCustomerId, name: selectedCustomerName });

window.clearCart = () => {
    activeCart = [];
    window.triggerRender();
};

window.removeFromCart = (idx) => {
    activeCart.splice(idx, 1);
    window.triggerRender();
};

window.saveDraft = () => {
    window.triggerRender();
};

window.toggleCustomerDropdown = (e) => {
    if (e) e.stopPropagation();
    const el = document.getElementById('customer-dropdown-menu');
    if (el) el.classList.toggle('hidden');
};

// Local search state for customer dropdown
let customerSearch = '';

window.updateCustomerSearch = (val) => {
    customerSearch = val.toLowerCase();
    window.triggerRender(false);
};

window.addNewCustomer = async () => {
    // Switch to Add Customer Mode (Desktop Preview Pane)
    window.setSalesMode('add-customer');

    // Close dropdown
    const el = document.getElementById('customer-dropdown-menu');
    if (el) el.classList.add('hidden');
};

/* ... search logic ... */

export function renderSales() {
    const cache = window.getCache();
    const products = cache.products || [];
    const allCustomers = cache.customers || [];

    // Filter customers based on search
    const customers = customerSearch
        ? allCustomers.filter(c => c.name.toLowerCase().includes(customerSearch) || c.phone.includes(customerSearch))
        : allCustomers;

    /* ... */
            <section class="space-y-3 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Customer Details</h3>

                <div class="relative text-left">
                    <div id="customer-dropdown-trigger" onclick="window.toggleCustomerDropdown(event)" class="card p-5 flex items-center justify-between cursor-pointer hover:border-slate-300 transition-all text-left">
                        <div class="flex items-center gap-4 text-slate-900 text-left">
                            <span class="material-icons-outlined text-slate-400">person</span>
                            <span class="text-sm font-black text-left">${selectedCustomerName}</span>
                        </div>
                        <span class="material-icons-outlined text-slate-300">expand_more</span>
                    </div>
                    <!-- Dropdown Content -->
                    <div id="customer-dropdown-menu" class="hidden absolute top-full left-0 right-0 z-50 bg-white border border-slate-100 rounded-2xl shadow-2xl max-h-60 overflow-y-auto text-left mt-2 flex flex-col">
                        
                        <!-- Search Bar within Dropdown -->
                        <div class="p-3 sticky top-0 bg-white z-20 border-b border-slate-100" onclick="event.stopPropagation()">
                             <div class="relative">
                                <span class="absolute left-3 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-sm">search</span>
                                <input type="text" 
                                       value="${customerSearch}"
                                       oninput="window.updateCustomerSearch(this.value)" 
                                       placeholder="Search customer..." 
                                       class="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                             </div>
                        </div>

                        <div onclick="window.addNewCustomer()" class="p-4 bg-slate-900 text-white border-b border-slate-900 cursor-pointer flex items-center justify-center gap-2 hover:bg-slate-800 sticky top-[60px] z-10">
                            <span class="material-icons-outlined text-xs">add</span>
                            <span class="text-[10px] font-black uppercase tracking-widest">Create New Customer</span>
                        </div>

                        ${customers.length === 0 ? `
                             <div class="p-4 text-center text-slate-400 text-xs font-bold">No customers found</div>
                        ` : customers.map(c => `
                            <div onclick="selectSaleCustomer('${c.id}', '${c.name.replace(/'/g, "\\'")}')" class="p-4 hover:bg-slate-50 cursor-pointer border-b border-slate-50 text-left">
                                <p class="text-xs font-black text-slate-900 text-left">${c.name}</p>
                                <p class="text-[9px] font-bold text-slate-400 text-left">${c.phone}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <section class="space-y-3 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Product Search</h3>
                <div class="relative text-left">
                    <span class="absolute left-5 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400">search</span>
                    <input type="text" id="sales-item-search" oninput="window.triggerRender(false)" placeholder="Search products..." class="w-full pl-14 pr-6 py-5 bg-white border border-slate-100 rounded-3xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                    
                    ${searchVal ? `
                        <div class="absolute top-full left-0 right-0 z-50 bg-white border border-slate-100 rounded-2xl shadow-2xl mt-2 overflow-hidden text-left">
                            ${filteredProducts.length > 0 ? filteredProducts.map(p => `
                                <div onclick="addProductToCart('${p.id}')" class="p-4 hover:bg-slate-50 cursor-pointer flex justify-between items-center text-left">
                                    <div class="text-left">
                                        <h4 class="text-xs font-black text-slate-900 text-left">${p.name}</h4>
                                        <p class="text-[9px] font-bold text-slate-400 uppercase text-left">${p.brand} • ${p.category}</p>
                                    </div>
                                    <p class="text-xs font-black text-slate-900 text-right">₹${p.mop.toLocaleString()}</p>
                                </div>
                            `).join('') : '<p class="p-6 text-[10px] text-slate-300 font-black uppercase text-center">No products found</p>'}
                        </div>
                    ` : ''}
                </div>
            </section>

            <section class="space-y-4 text-left">
                <div class="flex items-center justify-between text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Cart (${activeCart.length})</h3>
                    <button onclick="window.clearCart()" class="text-[9px] font-black text-slate-900 uppercase tracking-widest border-b-2 border-slate-900">Clear All</button>
                </div>
                
                <div class="space-y-3 text-left">
                    ${activeCart.map((item, idx) => `
                        <div class="card p-4 flex items-center gap-4 text-left">
                            <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shadow-inner text-left">
                                <span class="material-icons-outlined text-xl text-slate-300 text-left">devices</span>
                            </div>
                            <div class="flex-1 text-left">
                                <h4 class="text-sm font-black text-slate-900 text-left">${item.name}</h4>
                                <p class="text-[9px] font-bold text-slate-400 uppercase text-left">${item.category}</p>
                            </div>
                            <div class="text-right">
                                <p class="text-xs font-black text-right">₹${item.mop.toLocaleString()}</p>
                                <button onclick="window.removeFromCart(${idx})" class="text-[8px] font-black text-red-400 uppercase text-right">Remove</button>
                            </div>
                        </div>
                    `).join('')}

                    ${activeCart.length === 0 ? `
                        <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                            <span class="material-icons-outlined text-3xl text-slate-200 text-center">shopping_basket</span>
                            <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] text-center">Cart is empty</span>
                        </div>
                    ` : ''}
                </div>

                <div class="flex gap-3 pt-6 border-t border-slate-100 mt-6 text-left">
                    <button onclick="window.saveDraft()" class="flex-1 py-4 border-2 border-slate-900 rounded-2xl text-[10px] font-black uppercase hover:bg-slate-50 transition-all text-center">Save Draft</button>
                    <button id="complete-txn-btn" onclick="completeTransaction()" class="flex-[2] py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-center">
                        Complete Transaction (₹${total.toLocaleString()})
                        <span class="material-icons-outlined text-sm text-blue-400 text-center">arrow_forward</span>
                    </button>
                </div>
            </section>
        </div >
        `;
}

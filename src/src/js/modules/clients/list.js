import { state } from '../../state.js';
import { renderClientHeader } from './header.js';

export function renderClientList() {
    const cache = window.getCache();
    const clients = cache.customers || [];

    // Add search state
    const searchQuery = state.clientSearchQuery || '';
    
    // Filter clients based on search
    const filteredClients = searchQuery 
        ? clients.filter(c => 
            c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
            (c.phone && c.phone.includes(searchQuery)) ||
            (c.email && c.email.toLowerCase().includes(searchQuery.toLowerCase()))
          )
        : clients;

    // Sort by most recent (joined_at)
    const sortedClients = [...filteredClients].sort((a, b) => 
        new Date(b.joined_at || 0) - new Date(a.joined_at || 0)
    );

    return `
        ${renderClientHeader('Clients', 'RETAILEROS')}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 relative text-left">
            <!-- Toggle -->
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1 mb-2 text-left">
                <button class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg bg-white shadow-sm text-slate-900 text-center">Directory</button>
                <button onclick="window.setClientMode('groups')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg text-slate-400 text-center">Groups</button>
            </div>

            <!-- Search -->
            <div class="relative">
                <span class="absolute left-4 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-sm">search</span>
                <input type="text" 
                       id="client-search-input"
                       value="${searchQuery}"
                       oninput="window.updateClientSearch(this.value)" 
                       placeholder="Search by name, phone, email..." 
                       class="w-full pl-11 pr-4 py-3 bg-white border border-slate-100 rounded-2xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
            </div>

            <!-- Stats Bar -->
            <div class="flex items-center justify-between text-left">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">
                    ${sortedClients.length} ${sortedClients.length === 1 ? 'Client' : 'Clients'}
                    ${searchQuery ? ` matching "${searchQuery}"` : ''}
                </p>
                <span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded">Database: Live</span>
            </div>

            <!-- Client List -->
            <div class="space-y-3 pb-24 text-left">
                ${sortedClients.length === 0 ? `
                    <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                        <span class="material-icons-outlined text-3xl text-slate-200">person_off</span>
                        <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                            ${searchQuery ? 'No clients found' : 'No clients yet'}
                        </span>
                        ${searchQuery ? `<span class="text-[9px] font-bold text-slate-300">Try a different search term</span>` : ''}
                    </div>
                ` : sortedClients.map(c => {
                    // Calculate total spent
                    const clientSales = (cache.sales || []).filter(s => s.customer_id === c.id && s.status !== 'draft');
                    const totalSpent = clientSales.reduce((sum, s) => sum + (s.total_amount || 0), 0);
                    const lastPurchase = clientSales[0]?.date;
                    
                    return `
                    <button type="button" onclick="window.setClientMode('profile', '${c.name.replace(/'/g, "\\'")}', '${c.id}')" class="card p-4 sm:p-5 border-2 transition-all flex items-center justify-between group cursor-pointer text-left w-full ${state.selectedClient === c.name ? 'border-slate-900 shadow-lg' : 'border-transparent hover:border-slate-200'}">
                        <div class="flex items-center gap-3 sm:gap-4 text-left flex-1 min-w-0">
                            <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 border border-slate-100 flex items-center justify-center font-black text-[10px] text-slate-400 text-center shrink-0">${c.name.split(' ').map(x => x[0]).join('').toUpperCase()}</div>
                            <div class="text-left flex-1 min-w-0">
                                <h4 class="text-sm font-black text-slate-900 text-left truncate">${c.name}</h4>
                                <p class="text-[10px] font-bold text-slate-400 -mt-0.5 text-left truncate">${c.phone || c.email || 'No contact'}</p>
                            </div>
                        </div>
                        <div class="text-right shrink-0 ml-2">
                            ${totalSpent > 0 ? `
                                <p class="text-xs font-black text-slate-900 tracking-tighter text-right">₹${totalSpent.toLocaleString()}</p>
                                <p class="text-[7px] font-black text-slate-300 uppercase tracking-tighter text-right">${clientSales.length} orders</p>
                            ` : `
                                <p class="text-[8px] font-black text-slate-300 uppercase tracking-tighter text-right">No orders</p>
                            `}
                        </div>
                    </button>
                `}).join('')}
            </div>

            <!-- Floating Add Button -->
            <button onclick="setClientMode('add')" class="fixed sm:absolute bottom-8 right-8 w-14 h-14 bg-slate-900 text-white rounded-[20px] flex items-center justify-center shadow-2xl hover:scale-105 transition-transform z-20 text-center">
                <span class="material-icons-outlined text-2xl text-center">add</span>
            </button>
        </div>
    `;
}

// Search function - preserve focus after render
window.updateClientSearch = (query) => {
    const input = document.getElementById('client-search-input');
    const cursorPos = input?.selectionStart || query.length;
    
    state.clientSearchQuery = query;
    window.triggerRender(false);
    
    // Restore focus after render
    setTimeout(() => {
        const newInput = document.getElementById('client-search-input');
        if (newInput) {
            newInput.focus();
            newInput.setSelectionRange(cursorPos, cursorPos);
        }
    }, 0);
};

// Publish campaign
window._publishCampaign = () => {
    const title = document.getElementById('pb-title')?.value?.trim();
    const product = document.getElementById('pb-product')?.value?.trim();
    const deposit = document.getElementById('pb-deposit')?.value?.trim();
    const duration = document.getElementById('pb-duration')?.value?.trim();

    if (!title) {
        if (window.toast) window.toast.error('Enter a campaign title');
        return;
    }

    // Generate shareable URL
    const slug = (title || 'campaign').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const retailerCode = localStorage.getItem('retaileros_retailer_code') || 'store';
    const campaignUrl = `https://store.retaileros.in/${retailerCode}/prebook/${slug}`;

    // Copy to clipboard
    navigator.clipboard.writeText(campaignUrl).then(() => {
        if (window.toast) window.toast.success('Campaign published! Link copied to clipboard');
    }).catch(() => {
        if (window.toast) window.toast.success('Campaign published!');
    });

    // Navigate back
    window.setPreBookingViewMode('dashboard');
};

export function renderPreBookingCreate(isMobile) {
    return `
        <div class="h-full flex flex-col bg-white dot-grid relative animate-slide-up text-left">
            <header class="p-8 pb-4 shrink-0 flex items-center justify-between bg-white/90 backdrop-blur-md sticky top-0 z-20 text-left">
                <div class="flex items-center gap-4 text-left">
                    <button onclick="window.setPreBookingViewMode('dashboard')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full text-left">
                        <span class="material-icons-outlined text-lg text-left">arrow_back</span>
                    </button>
                    <div class="text-left">
                        <h2 class="text-sm font-black text-slate-900 uppercase tracking-widest leading-none text-left">Create Campaign</h2>
                        <p class="text-[8px] font-bold text-slate-400 uppercase tracking-[0.1em] mt-1 text-left">Pre-booking Builder</p>
                    </div>
                </div>
                <div class="px-3 py-1 bg-slate-100 rounded-lg text-[9px] font-black text-slate-400 text-center">1/2</div>
            </header>

            <div class="flex-1 overflow-y-auto p-8 pt-4 space-y-8 custom-scrollbar pb-32 text-left">
                <div class="space-y-6 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest -mb-2 text-left">Campaign Details</p>
                    
                    <div class="text-left">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Campaign Title</label>
                        <input type="text" id="pb-title" placeholder="e.g., Flagship Smartphone 16 Pro Launch" class="w-full h-14 px-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:ring-4 focus:ring-slate-950/5 focus:border-slate-950 shadow-sm transition-all focus:outline-none text-left">
                    </div>

                    <div class="text-left">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Product Selection</label>
                        <div class="relative text-left">
                            <span class="material-icons-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-left">search</span>
                            <input type="text" id="pb-product" placeholder="Search from inventory..." class="w-full h-14 pl-12 pr-4 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:ring-4 focus:ring-slate-950/5 focus:border-slate-950 shadow-sm transition-all focus:outline-none text-left">
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 text-left">
                        <div class="text-left">
                            <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Deposit Amount</label>
                            <div class="relative text-left">
                                <span class="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-black text-[11px] text-left">₹</span>
                                <input type="number" id="pb-deposit" placeholder="2000" class="w-full h-14 pl-10 pr-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:ring-4 focus:ring-slate-950/5 focus:border-slate-950 shadow-sm transition-all focus:outline-none text-left">
                            </div>
                        </div>
                        <div class="text-left">
                            <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Duration (Days)</label>
                            <div class="relative text-left">
                                <span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg text-left">calendar_today</span>
                                <input type="text" id="pb-duration" placeholder="14 Days" class="w-full h-14 px-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:ring-4 focus:ring-slate-950/5 focus:border-slate-950 shadow-sm transition-all focus:outline-none text-left">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="space-y-6 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest -mb-2 text-left">Landing Page Customization</p>
                    
                    <div class="text-left">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Hero Image</label>
                        <div class="aspect-video bg-slate-50 border-2 border-dashed border-slate-100 rounded-3xl flex flex-col items-center justify-center group cursor-pointer hover:bg-slate-100 transition-colors text-center">
                            <span class="material-icons-outlined text-4xl text-slate-200 group-hover:scale-110 transition-transform mb-3 text-center">image</span>
                            <p class="text-[9px] font-black text-slate-300 uppercase tracking-widest text-center">Upload 16:9 Banner</p>
                        </div>
                    </div>

                    <div class="text-left">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Short Description</label>
                        <textarea placeholder="Be the first to own the next generation..." class="w-full h-24 p-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:ring-4 focus:ring-slate-950/5 focus:border-slate-950 shadow-sm transition-all focus:outline-none resize-none text-left"></textarea>
                    </div>
                </div>
            </div>

            <div class="p-8 pt-0 sticky bottom-0 z-20 text-center">
                <button onclick="window._publishCampaign()" class="w-full py-5 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all text-center">
                     PUBLISH & GENERATE LINK <span class="material-icons-outlined text-center">arrow_forward</span>
                </button>
            </div>
            
             <footer class="p-6 pt-0 text-left">
                <div class="card p-3 flex items-center justify-between border-slate-100 bg-slate-50/30 text-left">
                    <div class="flex items-center gap-3 text-left">
                        <div class="w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center font-black text-[10px] text-slate-300 text-center">RC</div>
                        <div class="text-left">
                            <p class="text-[9px] font-black text-slate-900 text-left">Retailer Center - Mumbai</p>
                            <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest text-left">Draft saved 2m ago</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    `;
}

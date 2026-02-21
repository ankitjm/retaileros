export function renderPromoterPerformance() {
    return `
        <div class="h-full flex flex-col relative bg-white text-left">
             <!-- Header -->
            <div class="p-6 border-b border-slate-100 flex items-center justify-between shrink-0 text-left">
                 <button onclick="setPromoterViewMode('list')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                    <span class="material-icons-outlined text-left">chevron_left</span>
                </button>
                <div class="text-left">
                    <h2 class="text-sm font-black text-slate-900 tracking-tight text-left">Rohan S.</h2>
                    <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest -mt-0.5 text-left">ELECTRONICS - TIER 1</p>
                </div>
                <button class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 text-left"><span class="material-icons-outlined text-lg text-left">more_vert</span></button>
            </div>

            <div class="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar text-left">
                
                <!-- Performance Snapshot -->
                <section class="space-y-3 text-left">
                     <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Performance Snapshot</h3>
                     <div class="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm relative overflow-hidden text-left">
                        <span class="absolute top-4 right-4 bg-slate-100 text-slate-900 text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide text-left">+12.4%</span>
                        <div class="flex items-center gap-2 mb-4 text-slate-400 text-left">
                            <span class="material-icons-outlined text-lg text-left">payments</span>
                        </div>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">Total Revenue Generated</p>
                        <h2 class="text-3xl font-black text-slate-900 tracking-tighter text-left">₹48,25,400</h2>
                     </div>

                     <div class="grid grid-cols-2 gap-3 text-left">
                         <div class="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm text-left">
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-2 text-left">Avg Selling Price</p>
                            <h3 class="text-xl font-black text-slate-900 tracking-tight text-left">₹64,200</h3>
                            <div class="h-1 w-12 bg-slate-900 rounded-full mt-3 text-left"></div>
                         </div>
                         <div class="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm text-left">
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-2 text-left">Cont. Margin %</p>
                            <h3 class="text-xl font-black text-slate-900 tracking-tight text-left">14.2%</h3>
                            <div class="h-1 w-8 bg-slate-900 rounded-full mt-3 text-left"></div>
                         </div>
                     </div>
                </section>

                <!-- Daily Sales Trend (Bar Chart Mock) -->
                <section class="space-y-3 text-left">
                    <div class="flex items-center justify-between text-left">
                         <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Daily Sales Trend</h3>
                         <p class="text-[8px] font-bold text-slate-300 uppercase tracking-wide text-right">Last 7 Days</p>
                    </div>
                    <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm h-48 flex items-end justify-between gap-2 px-8 text-left">
                         <!-- Bars -->
                         <div class="w-full flex-1 bg-slate-100 rounded-t-lg relative group h-[40%] text-left"><div class="absolute bottom-0 w-full bg-slate-900 rounded-t-lg h-[60%] text-left"></div><p class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-400 text-center">MON</p></div>
                         <div class="w-full flex-1 bg-slate-100 rounded-t-lg relative group h-[55%] text-left"><div class="absolute bottom-0 w-full bg-slate-900 rounded-t-lg h-[100%] text-left"></div><p class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-400 text-center">TUE</p></div>
                         <div class="w-full flex-1 bg-slate-100 rounded-t-lg relative group h-[30%] text-left"><div class="absolute bottom-0 w-full bg-slate-900 rounded-t-lg h-[80%] text-left"></div><p class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-400 text-center">WED</p></div>
                         <div class="w-full flex-1 bg-slate-100 rounded-t-lg relative group h-[70%] text-left"><div class="absolute bottom-0 w-full bg-slate-900 rounded-t-lg h-[100%] text-left"></div><p class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-400 text-center">THU</p></div>
                         <div class="w-full flex-1 bg-slate-100 rounded-t-lg relative group h-[60%] text-left"><div class="absolute bottom-0 w-full bg-slate-900 rounded-t-lg h-[85%] text-left"></div><p class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-400 text-center">FRI</p></div>
                         <div class="w-full flex-1 bg-slate-100 rounded-t-lg relative group h-[45%] text-left"><div class="absolute bottom-0 w-full bg-slate-900 rounded-t-lg h-[90%] text-left"></div><p class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-400 text-center">SAT</p></div>
                         <div class="w-full flex-1 bg-slate-100 rounded-t-lg relative group h-[15%] text-left"><div class="absolute bottom-0 w-full bg-slate-900 rounded-t-lg h-[100%] text-left"></div><p class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-400 text-center">SUN</p></div>
                    </div>
                </section>

                <!-- Attendance Calendar -->
                 <section class="space-y-3 pb-8 text-left">
                    <div class="flex items-center justify-between text-left">
                         <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Attendance Calendar</h3>
                         <div class="flex gap-3 text-right">
                            <span class="flex items-center gap-1 text-[8px] font-bold text-slate-400 uppercase text-right"><div class="w-1.5 h-1.5 rounded-full bg-slate-900 text-right"></div> Present</span>
                            <span class="flex items-center gap-1 text-[8px] font-bold text-slate-400 uppercase text-right"><div class="w-1.5 h-1.5 rounded-full bg-slate-200 text-right"></div> Off</span>
                         </div>
                    </div>
                    <div class="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm text-left">
                         <div class="grid grid-cols-7 gap-1 text-center mb-2 text-left">
                            <span class="text-[8px] font-bold text-slate-300 text-center">24</span>
                            <span class="text-[8px] font-bold text-slate-300 text-center">25</span>
                            <span class="text-[8px] font-bold text-slate-300 text-center">26</span>
                            <span class="text-[8px] font-bold text-slate-300 text-center">27</span>
                            <span class="text-[8px] font-bold text-slate-300 text-center">28</span>
                            <span class="text-[8px] font-bold text-slate-300 text-center">29</span>
                            <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-black mx-auto text-center">1</div>
                         </div>
                         <div class="grid grid-cols-7 gap-1 place-items-center text-left">
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold text-center">2</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold text-center">3</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold text-center">4</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold text-center">5</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold text-center">6</div>
                             <div class="w-6 h-6 rounded-full bg-slate-50 text-slate-300 flex items-center justify-center text-[8px] font-bold text-center">7</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold text-center">8</div>
                             
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold mt-2 text-center">9</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold mt-2 text-center">10</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold mt-2 text-center">11</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold mt-2 text-center">12</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold mt-2 text-center">13</div>
                             <div class="w-6 h-6 rounded-full bg-slate-50 text-slate-300 flex items-center justify-center text-[8px] font-bold mt-2 text-center">14</div>
                             <div class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[8px] font-bold mt-2 text-center">15</div>
                         </div>
                    </div>
                 </section>
            </div>
        </div>
    `;
}

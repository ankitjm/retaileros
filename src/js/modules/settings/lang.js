export function renderSettingsLang() {
    const languages = [
        { code: 'en', name: 'English', native: 'English', flag: '🇬🇧', selected: true },
        { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳', selected: false },
        { code: 'ta', name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳', selected: false },
        { code: 'te', name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳', selected: false },
        { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳', selected: false },
        { code: 'ml', name: 'Malayalam', native: 'മലയാളം', flag: '🇮🇳', selected: false },
        { code: 'mr', name: 'Marathi', native: 'मराठी', flag: '🇮🇳', selected: false },
        { code: 'bn', name: 'Bengali', native: 'বাংলা', flag: '🇮🇳', selected: false },
        { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', flag: '🇮🇳', selected: false },
        { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🇮🇳', selected: false },
    ];

    return `
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Language</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Locale & Formats</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- App Language -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> App Language
                    </p>
                    <div class="grid grid-cols-2 gap-2 text-left">
                        ${languages.map(l => `
                            <button class="card p-4 text-left flex items-center gap-3 transition-all ${l.selected ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900' : 'hover:border-slate-300'}">
                                <span class="text-lg">${l.flag}</span>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">${l.name}</p>
                                    <p class="text-[9px] font-bold text-slate-400">${l.native}</p>
                                </div>
                                ${l.selected ? '<span class="material-icons-outlined text-slate-900 text-sm ml-auto">check_circle</span>' : ''}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Customer Communication Language -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Customer Communication
                    </p>
                    <div class="card p-4 space-y-4 text-left">
                        <div class="flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">WhatsApp Messages</p>
                                <p class="text-[9px] font-bold text-slate-400">Language for automated customer messages</p>
                            </div>
                            <select class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option selected>English</option>
                                <option>Hindi</option>
                                <option>Regional (auto-detect)</option>
                            </select>
                        </div>
                        <div class="flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Invoice Language</p>
                                <p class="text-[9px] font-bold text-slate-400">Language on printed/PDF invoices</p>
                            </div>
                            <select class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option selected>English</option>
                                <option>Hindi</option>
                                <option>Bilingual (EN + HI)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Regional Formats -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-amber-400 rounded-full"></span> Regional Formats
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Currency</p>
                                <p class="text-[9px] font-bold text-slate-400">Display format for prices & amounts</p>
                            </div>
                            <select class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option selected>&#8377; INR (Indian Rupee)</option>
                                <option>$ USD</option>
                                <option>AED (Dirham)</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Number Format</p>
                                <p class="text-[9px] font-bold text-slate-400">Indian (1,00,000) vs International (100,000)</p>
                            </div>
                            <select class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option selected>Indian (1,00,000)</option>
                                <option>International (100,000)</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Date Format</p>
                                <p class="text-[9px] font-bold text-slate-400">How dates appear across the app</p>
                            </div>
                            <select class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option selected>DD/MM/YYYY</option>
                                <option>MM/DD/YYYY</option>
                                <option>YYYY-MM-DD</option>
                                <option>DD Mon YYYY</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Time Format</p>
                                <p class="text-[9px] font-bold text-slate-400">12-hour or 24-hour clock</p>
                            </div>
                            <select class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option selected>12-hour (2:30 PM)</option>
                                <option>24-hour (14:30)</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Timezone</p>
                                <p class="text-[9px] font-bold text-slate-400">Store timezone for scheduling</p>
                            </div>
                            <select class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option selected>IST (UTC+5:30)</option>
                                <option>GST (UTC+4:00)</option>
                                <option>SGT (UTC+8:00)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.toast.info('Language preferences saved')" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform">
                        Save Preferences
                    </button>
                </div>
            </div>
        </div>
    `;
}

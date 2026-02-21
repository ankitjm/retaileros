export function renderSettingsLang() {
    const cache = window.getCache();
    const s = cache.retailerSettings?.language || {};
    const settings = {
        app_language: s.app_language ?? 'en',
        whatsapp_lang: s.whatsapp_lang ?? 'English',
        invoice_lang: s.invoice_lang ?? 'English',
        currency_format: s.currency_format ?? '₹ INR',
        number_format: s.number_format ?? 'Indian (1,00,000)',
        date_format: s.date_format ?? 'DD/MM/YYYY',
        time_format: s.time_format ?? '12-hour',
        timezone: s.timezone ?? 'IST (UTC+5:30)',
    };

    const languages = [
        { code: 'en', name: 'English', native: 'English', flag: '🇬🇧' },
        { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳' },
        { code: 'ta', name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳' },
        { code: 'te', name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳' },
        { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳' },
        { code: 'ml', name: 'Malayalam', native: 'മലയാളം', flag: '🇮🇳' },
        { code: 'mr', name: 'Marathi', native: 'मराठी', flag: '🇮🇳' },
        { code: 'bn', name: 'Bengali', native: 'বাংলা', flag: '🇮🇳' },
        { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', flag: '🇮🇳' },
        { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    ];

    return `
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left" data-settings-category="language">
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
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> App Language
                    </p>
                    <input type="text" data-field="app_language" value="${settings.app_language}" class="hidden">
                    <div class="grid grid-cols-2 gap-2 text-left">
                        ${languages.map(l => `
                            <button data-lang-btn onclick="document.querySelector('[data-field=app_language]').value='${l.code}'; this.closest('[data-settings-category]').querySelectorAll('[data-lang-btn]').forEach(b => b.classList.remove('border-slate-900','bg-slate-50','ring-1','ring-slate-900')); this.classList.add('border-slate-900','bg-slate-50','ring-1','ring-slate-900')" class="card p-4 text-left flex items-center gap-3 transition-all ${settings.app_language === l.code ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900' : 'hover:border-slate-300'}">
                                <span class="text-lg">${l.flag}</span>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">${l.name}</p>
                                    <p class="text-[9px] font-bold text-slate-400">${l.native}</p>
                                </div>
                                ${settings.app_language === l.code ? '<span class="material-icons-outlined text-slate-900 text-sm ml-auto">check_circle</span>' : ''}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Customer Communication Language -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Customer Communication
                    </p>
                    <div class="card p-4 space-y-4 text-left">
                        <div class="flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">WhatsApp Messages</p>
                                <p class="text-[9px] font-bold text-slate-400">Language for automated customer messages</p>
                            </div>
                            <select data-field="whatsapp_lang" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option ${settings.whatsapp_lang === 'English' ? 'selected' : ''}>English</option>
                                <option ${settings.whatsapp_lang === 'Hindi' ? 'selected' : ''}>Hindi</option>
                                <option ${settings.whatsapp_lang === 'Regional (auto-detect)' ? 'selected' : ''}>Regional (auto-detect)</option>
                            </select>
                        </div>
                        <div class="flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Invoice Language</p>
                                <p class="text-[9px] font-bold text-slate-400">Language on printed/PDF invoices</p>
                            </div>
                            <select data-field="invoice_lang" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option ${settings.invoice_lang === 'English' ? 'selected' : ''}>English</option>
                                <option ${settings.invoice_lang === 'Hindi' ? 'selected' : ''}>Hindi</option>
                                <option ${settings.invoice_lang === 'Bilingual (EN + HI)' ? 'selected' : ''}>Bilingual (EN + HI)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Regional Formats -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Regional Formats
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Currency</p>
                                <p class="text-[9px] font-bold text-slate-400">Display format for prices & amounts</p>
                            </div>
                            <select data-field="currency_format" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option ${settings.currency_format === '₹ INR' ? 'selected' : ''}>&#8377; INR (Indian Rupee)</option>
                                <option ${settings.currency_format === '$ USD' ? 'selected' : ''}>$ USD</option>
                                <option ${settings.currency_format === 'AED (Dirham)' ? 'selected' : ''}>AED (Dirham)</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Number Format</p>
                                <p class="text-[9px] font-bold text-slate-400">Indian (1,00,000) vs International (100,000)</p>
                            </div>
                            <select data-field="number_format" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option ${settings.number_format === 'Indian (1,00,000)' ? 'selected' : ''}>Indian (1,00,000)</option>
                                <option ${settings.number_format === 'International (100,000)' ? 'selected' : ''}>International (100,000)</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Date Format</p>
                                <p class="text-[9px] font-bold text-slate-400">How dates appear across the app</p>
                            </div>
                            <select data-field="date_format" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option ${settings.date_format === 'DD/MM/YYYY' ? 'selected' : ''}>DD/MM/YYYY</option>
                                <option ${settings.date_format === 'MM/DD/YYYY' ? 'selected' : ''}>MM/DD/YYYY</option>
                                <option ${settings.date_format === 'YYYY-MM-DD' ? 'selected' : ''}>YYYY-MM-DD</option>
                                <option ${settings.date_format === 'DD Mon YYYY' ? 'selected' : ''}>DD Mon YYYY</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Time Format</p>
                                <p class="text-[9px] font-bold text-slate-400">12-hour or 24-hour clock</p>
                            </div>
                            <select data-field="time_format" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option value="12-hour" ${settings.time_format === '12-hour' ? 'selected' : ''}>12-hour (2:30 PM)</option>
                                <option value="24-hour" ${settings.time_format === '24-hour' ? 'selected' : ''}>24-hour (14:30)</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Timezone</p>
                                <p class="text-[9px] font-bold text-slate-400">Store timezone for scheduling</p>
                            </div>
                            <select data-field="timezone" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option ${settings.timezone === 'IST (UTC+5:30)' ? 'selected' : ''}>IST (UTC+5:30)</option>
                                <option ${settings.timezone === 'GST (UTC+4:00)' ? 'selected' : ''}>GST (UTC+4:00)</option>
                                <option ${settings.timezone === 'SGT (UTC+8:00)' ? 'selected' : ''}>SGT (UTC+8:00)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.saveSettings('language')" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Save Preferences
                    </button>
                </div>
            </div>
        </div>
    `;
}

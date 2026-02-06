export function renderMarketingPreview() {
    const mState = window._marketingState || {};

    // Download generated image
    window._downloadCreative = async () => {
        if (!mState.generatedImageUrl) return;
        try {
            const response = await fetch(mState.generatedImageUrl);
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `creative-${Date.now()}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            if (window.toast) window.toast.success('Creative downloaded!');
        } catch (err) {
            console.error('Download failed:', err);
            if (window.toast) window.toast.error('Failed to download. Try right-click → Save Image.');
        }
    };

    // Re-generate with same prompt
    window._regenerateCreative = () => {
        const el = document.getElementById('marketing-prompt');
        if (el && mState.generatedPrompt) el.value = mState.generatedPrompt;
        window._generateCreative();
    };

    // Refine creative
    window._refineCreative = () => {
        const refineEl = document.getElementById('refine-prompt');
        const mainEl = document.getElementById('marketing-prompt');
        if (!refineEl?.value?.trim()) return;
        const refinement = refineEl.value.trim();
        const newPrompt = (mState.generatedPrompt || '') + '. Additional: ' + refinement;
        if (mainEl) mainEl.value = newPrompt;
        mState.generatedPrompt = newPrompt;
        window._generateCreative();
    };

    // Loading state
    if (mState.isGenerating) {
        return `
            <div class="h-full flex flex-col items-center justify-center p-8 text-center space-y-6">
                <div class="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center animate-pulse">
                    <span class="material-icons-outlined text-3xl text-slate-400 animate-spin">progress_activity</span>
                </div>
                <div class="text-center">
                    <h3 class="text-lg font-black text-slate-900 tracking-tighter mb-1">Generating Creative</h3>
                    <p class="text-[10px] font-bold text-slate-400">This may take 10-20 seconds...</p>
                </div>
            </div>
        `;
    }

    // Error state
    if (mState.lastError && !mState.generatedImageUrl) {
        return `
            <div class="h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                    <span class="material-icons-outlined text-2xl text-red-400">error_outline</span>
                </div>
                <div class="text-center">
                    <h3 class="text-sm font-black text-slate-900 tracking-tighter mb-1">Generation Failed</h3>
                    <p class="text-[10px] font-bold text-red-400 max-w-xs">${mState.lastError}</p>
                </div>
                <button type="button" onclick="window._regenerateCreative()" class="px-6 py-3 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all">
                    Try Again
                </button>
            </div>
        `;
    }

    // Generated state
    if (mState.generatedImageUrl) {
        return `
            <div class="h-full flex flex-col p-6 sm:p-8">
                <!-- Header -->
                <div class="text-center border-b border-dashed border-slate-200 pb-4 mb-4">
                    <h2 class="text-xl font-black tracking-tighter mb-1">Generated Creative</h2>
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">AI Marketing Creative</p>
                </div>

                <!-- Image -->
                <div class="flex-1 flex items-center justify-center overflow-hidden mb-4">
                    <div class="card border border-slate-200 shadow-sm overflow-hidden rounded-2xl relative group max-w-sm w-full">
                        <img src="${mState.generatedImageUrl}" alt="Generated creative" class="w-full h-auto" crossorigin="anonymous">
                        <div class="absolute top-3 right-3 bg-slate-900 text-white text-[8px] font-black uppercase px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">1024 x 1024</div>
                    </div>
                </div>

                <!-- Prompt Used -->
                <div class="bg-slate-50 border border-slate-200 p-3 rounded-xl mb-4 text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Prompt Used</p>
                    <p class="text-[10px] font-bold text-slate-600 leading-relaxed">${mState.generatedPrompt || ''}</p>
                </div>

                <!-- Action Buttons -->
                <div class="grid grid-cols-2 gap-3 mb-4">
                    <button type="button" onclick="window._regenerateCreative()" class="py-3 border-2 border-slate-200 rounded-xl text-[10px] font-black text-slate-900 uppercase hover:border-slate-900 transition-all flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">refresh</span> Re-Generate
                    </button>
                    <button type="button" onclick="window._downloadCreative()" class="py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">download</span> Download
                    </button>
                </div>

                <!-- Refine -->
                <div class="text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 text-left">Refine Result</p>
                    <div class="relative text-left">
                        <input type="text" id="refine-prompt" placeholder="e.g., 'Make colors more vibrant'" class="w-full pl-4 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                        <button type="button" onclick="window._refineCreative()" class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors">
                            <span class="material-icons-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // Empty state — creative tips
    return `
        <div class="h-full flex flex-col items-center justify-center p-8 text-center space-y-6 text-left">
            <div class="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl text-slate-300">auto_awesome</span>
            </div>

            <div class="text-center">
                <h3 class="text-lg font-black text-slate-900 tracking-tighter mb-1">AI Creative Studio</h3>
                <p class="text-[10px] font-bold text-slate-400">Your generated creatives will appear here</p>
            </div>

            <div class="w-full max-w-sm space-y-3 text-left">
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-center">Tips for great creatives</p>
                <div class="card p-3 border-slate-200 flex items-start gap-3 text-left">
                    <span class="material-icons-outlined text-sm text-slate-400 mt-0.5">tips_and_updates</span>
                    <div class="text-left">
                        <p class="text-[10px] font-black text-slate-700">Be specific about your offer</p>
                        <p class="text-[9px] font-bold text-slate-400">Include prices, discounts, and product details</p>
                    </div>
                </div>
                <div class="card p-3 border-slate-200 flex items-start gap-3 text-left">
                    <span class="material-icons-outlined text-sm text-slate-400 mt-0.5">palette</span>
                    <div class="text-left">
                        <p class="text-[10px] font-black text-slate-700">Mention colors and style</p>
                        <p class="text-[9px] font-bold text-slate-400">e.g., "vibrant red", "minimal white"</p>
                    </div>
                </div>
                <div class="card p-3 border-slate-200 flex items-start gap-3 text-left">
                    <span class="material-icons-outlined text-sm text-slate-400 mt-0.5">add_photo_alternate</span>
                    <div class="text-left">
                        <p class="text-[10px] font-black text-slate-700">Upload reference images</p>
                        <p class="text-[9px] font-bold text-slate-400">Store photos and product images improve results</p>
                    </div>
                </div>
                <div class="card p-3 border-slate-200 flex items-start gap-3 text-left">
                    <span class="material-icons-outlined text-sm text-slate-400 mt-0.5">aspect_ratio</span>
                    <div class="text-left">
                        <p class="text-[10px] font-black text-slate-700">Output: 1024 x 1024px</p>
                        <p class="text-[9px] font-bold text-slate-400">Perfect for Instagram, WhatsApp, and print</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

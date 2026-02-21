import { renderMarketingHeader } from './header.js';

// Module-level state (shared with preview via window)
if (!window._marketingState) {
    window._marketingState = {
        generatedImageUrl: null,
        generatedPrompt: null,
        isGenerating: false,
        uploadedImages: [], // { base64, name, size }
        currentSuggestions: [],
        lastError: null
    };
}

// Pool of long-tail keyword suggestions for Indian electronics retailers
const SUGGESTION_POOL = [
    "Diwali special offer poster for mobile phones under ₹15,000",
    "New iPhone launch announcement for electronics store",
    "Independence Day sale banner with 20% off on all appliances",
    "Grand opening celebration poster for electronics showroom",
    "EMI offer creative for Samsung Galaxy series smartphones",
    "Navratri festive discount poster for home appliances",
    "Back to school deals on laptops and tablets",
    "Summer sale poster for air conditioners and coolers",
    "Republic Day clearance sale for TVs and home theater",
    "Raksha Bandhan gift guide for smartphones and watches",
    "Year end stock clearance for washing machines and fridges",
    "New store branch opening announcement poster",
    "Cashback offer poster for credit card payments on electronics",
    "Exchange offer creative for old phone trade-in program",
    "Service center launch poster for mobile and laptop repairs",
    "Holi celebration offer on phone cases and accessories",
    "Wedding season deals on premium home appliances",
    "Monsoon sale on waterproof gadgets and devices",
    "Christmas and New Year electronics mega sale poster",
    "Flash sale countdown poster for limited stock flagship phones"
];

// Pick 5 random suggestions (changes each render)
function pickSuggestions() {
    if (window._marketingState.currentSuggestions.length === 0) {
        const shuffled = [...SUGGESTION_POOL].sort(() => Math.random() - 0.5);
        window._marketingState.currentSuggestions = shuffled.slice(0, 5);
    }
    return window._marketingState.currentSuggestions;
}

// Refresh suggestions
window._refreshMarketingSuggestions = () => {
    window._marketingState.currentSuggestions = [];
    window.triggerRender();
};

// Fill prompt from suggestion
window._fillMarketingPrompt = (text) => {
    const el = document.getElementById('marketing-prompt');
    if (el) el.value = text;
};

// Upload reference image
window._uploadMarketingImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;

    input.onchange = (e) => {
        const files = Array.from(e.target.files);
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = (ev) => {
                window._marketingState.uploadedImages.push({
                    base64: ev.target.result,
                    name: file.name,
                    size: (file.size / 1024).toFixed(0) + ' KB'
                });
                window.triggerRender();
            };
            reader.readAsDataURL(file);
        });
    };
    input.click();
};

// Remove uploaded image
window._removeMarketingImage = (idx) => {
    window._marketingState.uploadedImages.splice(idx, 1);
    window.triggerRender();
};

// Fallback API key for testing (remove in production)
const TEMP_API_KEY = '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';
function getOpenAIKey() { return localStorage.getItem('openai_api_key') || TEMP_API_KEY; }

// Generate creative
window._generateCreative = async () => {
    const apiKey = getOpenAIKey();
    if (!apiKey) {
        if (window.toast) window.toast.error('Please configure OpenAI API key in Settings → AI Config');
        return;
    }

    const el = document.getElementById('marketing-prompt');
    const prompt = el?.value?.trim();
    if (!prompt) {
        if (window.toast) window.toast.error('Enter a prompt to generate a creative');
        return;
    }

    const mState = window._marketingState;
    mState.isGenerating = true;
    mState.lastError = null;
    mState.generatedPrompt = prompt;
    window.triggerRender();

    try {
        let enhancedPrompt = prompt;

        // If reference images, use GPT-4o-mini Vision to enhance prompt
        if (mState.uploadedImages.length > 0) {
            const imageContent = mState.uploadedImages.map(img => ({
                type: 'image_url',
                image_url: { url: img.base64, detail: 'low' }
            }));

            const visionResponse = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
                body: JSON.stringify({
                    model: 'gpt-4o-mini',
                    messages: [{
                        role: 'user',
                        content: [
                            { type: 'text', text: `You are a marketing creative expert for an Indian electronics retail store. The user wants to create a marketing creative with this prompt: "${prompt}". They have uploaded reference images. Analyze the images and create an enhanced, detailed DALL-E prompt that incorporates visual elements from the images. Keep the Indian retail context. Output ONLY the enhanced prompt, nothing else. Max 200 words.` },
                            ...imageContent
                        ]
                    }],
                    max_tokens: 300
                })
            });

            if (visionResponse.ok) {
                const visionData = await visionResponse.json();
                enhancedPrompt = visionData.choices?.[0]?.message?.content || prompt;
            }
        }

        // Generate image with DALL-E 3
        const dallePrompt = `Create a professional marketing poster/creative for an Indian electronics retail store. Style: modern, clean, vibrant, professional. ${enhancedPrompt}. The design should be suitable for social media, WhatsApp status, and print. Include bold typography if text is needed. Indian market context.`;

        const dalleResponse = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
            body: JSON.stringify({
                model: 'dall-e-3',
                prompt: dallePrompt,
                n: 1,
                size: '1024x1024',
                quality: 'standard'
            })
        });

        if (!dalleResponse.ok) {
            const errData = await dalleResponse.json().catch(() => ({}));
            throw new Error(errData.error?.message || `API error: ${dalleResponse.status}`);
        }

        const dalleData = await dalleResponse.json();
        const tempUrl = dalleData.data?.[0]?.url || null;
        mState.generatedPrompt = prompt;

        if (tempUrl) {
            // Convert to persistent data URL (DALL-E URLs expire quickly)
            try {
                const imgResponse = await fetch(tempUrl);
                const blob = await imgResponse.blob();
                const reader = new FileReader();
                mState.generatedImageUrl = await new Promise((resolve) => {
                    reader.onloadend = () => resolve(reader.result);
                    reader.readAsDataURL(blob);
                });
            } catch (e) {
                // Fallback to direct URL if conversion fails
                mState.generatedImageUrl = tempUrl;
            }
            if (window.toast) window.toast.success('Creative generated!');
        } else {
            throw new Error('No image returned from API');
        }
    } catch (err) {
        console.error('Creative generation failed:', err);
        mState.lastError = err.message;
        if (window.toast) window.toast.error('Generation failed: ' + err.message);
    } finally {
        mState.isGenerating = false;
        window.triggerRender();
    }
};

export function renderMarketingGenerator() {
    const apiKey = getOpenAIKey();
    const hasKey = !!apiKey;
    const mState = window._marketingState;
    const suggestions = pickSuggestions();

    return `
        ${renderMarketingHeader()}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 sm:space-y-8 pb-32">
            <!-- API Key Check -->
            ${!hasKey ? `
                <div class="card p-5 border border-slate-200 bg-slate-100 text-left">
                    <div class="flex items-start gap-3 text-left">
                        <span class="material-icons-outlined text-slate-500 text-xl mt-0.5">warning</span>
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-600 mb-1">OpenAI API Key Required</p>
                            <p class="text-[10px] font-bold text-slate-500">Configure your API key in Settings → AI Config to generate creatives.</p>
                            <button type="button" onclick="window.setApp('settings'); window.setSettingsView && window.setSettingsView('ai')" class="mt-2 px-4 py-2 bg-slate-600 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-slate-700 transition-all">
                                Go to AI Config
                            </button>
                        </div>
                    </div>
                </div>
            ` : ''}

            <!-- Prompt Input -->
            <div class="relative text-left">
                <textarea id="marketing-prompt" placeholder="Describe the marketing creative you want to generate..." class="w-full h-36 p-5 bg-white border border-slate-200 rounded-3xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm resize-none leading-relaxed text-left" ${mState.isGenerating ? 'disabled' : ''}>${mState.generatedPrompt || ''}</textarea>
            </div>

            <button type="button" onclick="window._generateCreative()" class="w-full py-5 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-3 ${mState.isGenerating ? 'opacity-50 pointer-events-none' : ''} ${!hasKey ? 'opacity-30 pointer-events-none' : ''}">
                ${mState.isGenerating ? `
                    <span class="animate-spin material-icons-outlined text-lg">progress_activity</span> Generating...
                ` : `
                    <span class="material-icons-outlined text-lg">bolt</span> Generate Creative
                `}
            </button>

            <!-- Prompt Suggestions -->
            <section class="space-y-3 text-left">
                <div class="flex items-center justify-between text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Prompt Ideas</h3>
                    <button type="button" onclick="window._refreshMarketingSuggestions()" class="text-[8px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors flex items-center gap-1">
                        <span class="material-icons-outlined text-xs">refresh</span> New Ideas
                    </button>
                </div>
                <div class="flex flex-wrap gap-2 text-left">
                    ${suggestions.map(s => `
                        <button type="button" onclick="window._fillMarketingPrompt('${s.replace(/'/g, "\\'")}')" class="px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-all text-left">
                            ${s}
                        </button>
                    `).join('')}
                </div>
            </section>

            <!-- Reference Images Upload -->
            <section class="space-y-3 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Reference Assets</h3>

                <!-- Upload Tips -->
                <div class="card p-4 bg-slate-50/50 border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 text-left">Upload tips for best results</p>
                    <div class="grid grid-cols-2 gap-2 text-left">
                        <div class="flex items-center gap-2 text-left">
                            <span class="material-icons-outlined text-xs text-slate-400">storefront</span>
                            <span class="text-[9px] font-bold text-slate-500">Store front photo</span>
                        </div>
                        <div class="flex items-center gap-2 text-left">
                            <span class="material-icons-outlined text-xs text-slate-400">phone_iphone</span>
                            <span class="text-[9px] font-bold text-slate-500">Product image</span>
                        </div>
                        <div class="flex items-center gap-2 text-left">
                            <span class="material-icons-outlined text-xs text-slate-400">branding_watermark</span>
                            <span class="text-[9px] font-bold text-slate-500">Brand logo</span>
                        </div>
                        <div class="flex items-center gap-2 text-left">
                            <span class="material-icons-outlined text-xs text-slate-400">celebration</span>
                            <span class="text-[9px] font-bold text-slate-500">Festival/event photo</span>
                        </div>
                    </div>
                </div>

                <!-- Uploaded Images -->
                ${mState.uploadedImages.length > 0 ? `
                    <div class="flex gap-2 flex-wrap">
                        ${mState.uploadedImages.map((img, idx) => `
                            <div class="relative w-20 h-20 rounded-xl overflow-hidden border border-slate-200 group">
                                <img src="${img.base64}" alt="${img.name}" class="w-full h-full object-cover">
                                <button type="button" onclick="window._removeMarketingImage(${idx})" class="absolute top-1 right-1 w-5 h-5 bg-slate-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span class="material-icons-outlined text-xs">close</span>
                                </button>
                                <div class="absolute bottom-0 left-0 right-0 bg-black/50 px-1 py-0.5">
                                    <p class="text-[7px] font-bold text-white truncate">${img.name}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}

                <!-- Upload Zone -->
                <button type="button" onclick="window._uploadMarketingImage()" class="card h-28 border-dashed border-2 border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-slate-50 transition-colors group text-center w-full">
                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 group-hover:text-slate-900 group-hover:scale-110 transition-all">
                        <span class="material-icons-outlined">add_photo_alternate</span>
                    </div>
                    <div class="text-center">
                        <p class="text-[10px] font-bold text-slate-600">Upload Store or Product Images</p>
                        <p class="text-[8px] font-bold text-slate-400 mt-0.5">AI will use these as visual context</p>
                    </div>
                </button>
            </section>
        </div>
    `;
}

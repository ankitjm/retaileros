import { state } from '../../state.js';

// Get stored API key (masked for display)
function getMaskedKey() {
    const key = localStorage.getItem('openai_api_key') || '';
    if (!key) return '';
    return key.substring(0, 7) + '...' + key.substring(key.length - 4);
}

// Save API key
window.saveOpenAIKey = () => {
    const input = document.getElementById('openai-key-input');
    const key = input?.value?.trim();
    
    if (!key) {
        window.toast.warning('Please enter an API key');
        return;
    }
    
    if (!key.startsWith('sk-')) {
        window.toast.error('Invalid API key format. OpenAI keys start with "sk-"');
        return;
    }
    
    localStorage.setItem('openai_api_key', key);
    window.toast.success('API key saved successfully!');
    window.triggerRender();
};

// Remove API key
window.removeOpenAIKey = () => {
    window.showConfirm('Remove OpenAI API key? AI features will fall back to local processing.', () => {
        localStorage.removeItem('openai_api_key');
        window.toast.info('API key removed');
        window.triggerRender();
    });
};

// Test API key
window.testOpenAIKey = async () => {
    const key = localStorage.getItem('openai_api_key');
    if (!key) {
        window.toast.warning('No API key configured');
        return;
    }
    
    const btn = document.getElementById('test-key-btn');
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<span class="material-icons-outlined text-sm animate-spin">sync</span> Testing...';
    }
    
    try {
        const response = await fetch('https://api.openai.com/v1/models', {
            headers: {
                'Authorization': `Bearer ${key}`
            }
        });
        
        if (response.ok) {
            window.toast.success('API key is valid and working!');
        } else {
            const data = await response.json();
            window.toast.error('API key test failed: ' + (data.error?.message || 'Unknown error'));
        }
    } catch (err) {
        window.toast.error('Connection error: ' + err.message);
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = '<span class="material-icons-outlined text-sm">play_arrow</span> Test Connection';
        }
    }
};

export function renderAISettings() {
    const hasKey = !!localStorage.getItem('openai_api_key');
    const maskedKey = getMaskedKey();
    
    return `
        <div class="h-full flex flex-col bg-white">
            <header class="p-6 border-b border-slate-100 shrink-0">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <button onclick="window.setSettingsView(null)" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full">
                            <span class="material-icons-outlined">arrow_back</span>
                        </button>
                        <div>
                            <h1 class="text-lg font-black tracking-tighter text-slate-900">AI Configuration</h1>
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">OpenAI Integration</p>
                        </div>
                    </div>
                    <div class="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center">
                        <span class="material-icons-outlined text-white text-xl">smart_toy</span>
                    </div>
                </div>
            </header>
            
            <div class="flex-1 overflow-y-auto p-6 space-y-6">
                <!-- Status Card -->
                <div class="card p-5">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 ${hasKey ? 'bg-slate-900' : 'bg-slate-100'} rounded-2xl flex items-center justify-center">
                                <span class="material-icons-outlined ${hasKey ? 'text-white' : 'text-slate-400'}">${hasKey ? 'check_circle' : 'key_off'}</span>
                            </div>
                            <div>
                                <h3 class="text-sm font-black text-slate-900">${hasKey ? 'AI Enabled' : 'AI Not Configured'}</h3>
                                <p class="text-[10px] font-bold text-slate-400">${hasKey ? 'Using OpenAI GPT-4o-mini' : 'Using local fallback processing'}</p>
                            </div>
                        </div>
                        ${hasKey ? `
                            <button id="test-key-btn" onclick="window.testOpenAIKey()" class="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-[9px] font-black uppercase flex items-center gap-1 hover:bg-slate-200 transition-all">
                                <span class="material-icons-outlined text-sm">play_arrow</span>
                                Test Connection
                            </button>
                        ` : ''}
                    </div>
                </div>
                
                <!-- API Key Configuration -->
                <div class="space-y-3">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">OpenAI API Key</h3>
                    
                    ${hasKey ? `
                        <div class="card p-4 space-y-4">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-xs font-black text-slate-900">Current Key</p>
                                    <p class="text-[10px] font-mono text-slate-500">${maskedKey}</p>
                                </div>
                                <button onclick="window.removeOpenAIKey()" class="px-3 py-2 text-slate-400 hover:text-slate-900 text-[9px] font-black uppercase flex items-center gap-1">
                                    <span class="material-icons-outlined text-sm">delete</span>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ` : `
                        <div class="card p-4 space-y-4">
                            <div class="space-y-2">
                                <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest block">Enter API Key</label>
                                <input type="password" 
                                       id="openai-key-input"
                                       placeholder="sk-..." 
                                       class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-mono focus:outline-none focus:border-slate-900 transition-all">
                            </div>
                            <button onclick="window.saveOpenAIKey()" class="w-full py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
                                <span class="material-icons-outlined text-sm">save</span>
                                Save API Key
                            </button>
                        </div>
                    `}
                </div>
                
                <!-- Info Section -->
                <div class="space-y-3">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">How It Works</h3>
                    
                    <div class="card p-4 space-y-4">
                        <div class="flex items-start gap-3">
                            <div class="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                <span class="material-icons-outlined text-slate-500 text-sm">photo_camera</span>
                            </div>
                            <div>
                                <p class="text-xs font-black text-slate-900">Scan Product Labels</p>
                                <p class="text-[10px] font-bold text-slate-400">Capture product box/label images with your phone camera</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-3">
                            <div class="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                <span class="material-icons-outlined text-slate-500 text-sm">text_fields</span>
                            </div>
                            <div>
                                <p class="text-xs font-black text-slate-900">OCR Text Extraction</p>
                                <p class="text-[10px] font-bold text-slate-400">Tesseract.js extracts text from images locally</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-3">
                            <div class="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                <span class="material-icons-outlined text-slate-500 text-sm">psychology</span>
                            </div>
                            <div>
                                <p class="text-xs font-black text-slate-900">AI Processing</p>
                                <p class="text-[10px] font-bold text-slate-400">${hasKey ? 'OpenAI GPT-4o-mini intelligently extracts device info' : 'Local pattern matching (configure API for better results)'}</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-3">
                            <div class="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                <span class="material-icons-outlined text-slate-500 text-sm">auto_fix_high</span>
                            </div>
                            <div>
                                <p class="text-xs font-black text-slate-900">Dynamic Fields</p>
                                <p class="text-[10px] font-bold text-slate-400">AI adds extra fields like IMEI2, Model, Color, Storage as needed</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Get API Key -->
                <div class="card p-4 bg-slate-50 border-dashed">
                    <div class="flex items-center gap-3">
                        <span class="material-icons-outlined text-slate-400">info</span>
                        <div class="flex-1">
                            <p class="text-xs font-black text-slate-900">Need an API key?</p>
                            <p class="text-[10px] font-bold text-slate-400">Get one from OpenAI Platform</p>
                        </div>
                        <a href="https://platform.openai.com/api-keys" target="_blank" class="px-4 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase flex items-center gap-1">
                            Get Key
                            <span class="material-icons-outlined text-sm">open_in_new</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

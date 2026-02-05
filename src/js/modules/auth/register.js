import { state } from '../../state.js';

// Render registration for different layouts
export function renderRegister(layout = 'mobile') {
    if (layout === 'desktop-primary') {
        return renderRegisterPrimary();
    }
    if (layout === 'desktop-secondary') {
        return renderRegisterSecondary();
    }
    return renderRegisterMobile();
}

// Desktop primary column (steps 1 & 2)
function renderRegisterPrimary() {
    const step = state.registrationStep;

    return `
        <div class="h-full w-full flex flex-col items-center justify-center p-8 bg-white dot-grid relative overflow-hidden text-center">
            ${step === 1 || step === 2 ? renderStepContent(step) : renderStepContent(3)}

            <div class="absolute bottom-6 flex items-center gap-2">
                <span class="material-icons-outlined text-indigo-400 text-xs">verified_user</span>
                <p class="text-[9px] font-black text-indigo-400 uppercase tracking-widest opacity-30">Secure ${step === 2 ? 'Verification' : 'Encryption'}</p>
            </div>
        </div>
    `;
}

// Desktop secondary/preview column (step 3 preview)
function renderRegisterSecondary() {
    const step = state.registrationStep;

    if (step < 3) {
        // Show preview of what's coming next
        return `
            <div class="h-full w-full flex flex-col items-center justify-center p-8 bg-slate-50/50 dot-grid relative overflow-hidden text-center">
                <div class="opacity-40 text-center">
                    <div class="w-20 h-20 bg-slate-200 rounded-2xl flex items-center justify-center shadow-lg mb-6 mx-auto">
                        <span class="material-icons-outlined text-slate-400 text-4xl">store</span>
                    </div>
                    <h2 class="text-xl font-black text-slate-400 mb-2">Store Details</h2>
                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Coming up next...</p>
                    <div class="mt-8 space-y-2">
                        ${['Store Name', 'Owner Details', 'GSTIN', 'Store Type'].map(item => `
                            <div class="h-12 bg-white/50 border border-slate-200 rounded-xl"></div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    // Show step 3 content
    return `
        <div class="h-full w-full flex flex-col p-8 bg-white relative overflow-y-auto custom-scrollbar">
            ${renderStepContent(3)}
        </div>
    `;
}

// Mobile full-screen view
function renderRegisterMobile() {
    const step = state.registrationStep;

    return `
        <div class="h-full w-full flex flex-col items-center justify-center p-6 bg-white dot-grid relative overflow-hidden text-center">
            ${renderStepContent(step)}

            <div class="absolute bottom-6 flex items-center gap-2">
                <span class="material-icons-outlined text-indigo-400 text-xs">verified_user</span>
                <p class="text-[9px] font-black text-indigo-400 uppercase tracking-widest opacity-30">Secure ${step === 2 ? 'Verification' : step === 3 ? 'Encryption' : 'Encryption'}</p>
            </div>
            <div class="w-40 h-1 bg-slate-100 absolute bottom-3 rounded-full"></div>
        </div>
    `;
}

// Shared step content generator
function renderStepContent(step) {
    let stepContent = '';

    if (step === 1) {
        stepContent = `
            <div class="animate-slide-up">
                 <div class="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center shadow-2xl mb-6 mx-auto">
                    <span class="material-icons-outlined text-white text-3xl">terminal</span>
                </div>
                <h1 class="text-3xl font-black tracking-tighter text-slate-900 mb-1">Registration</h1>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">RetailerOS Enterprise</p>

                <div class="card p-8 border-slate-100 shadow-xl text-left">
                    <p class="text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-3">Enter Mobile Number</p>
                    <div class="flex items-center gap-2 mb-8">
                         <div class="h-14 px-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-2">
                            <div class="w-6 h-4 bg-gradient-to-r from-orange-400 via-white to-green-500 rounded-sm"></div>
                            <span class="text-sm font-black text-slate-900">+91</span>
                         </div>
                         <input type="text" placeholder="00000 00000" class="flex-1 h-14 px-5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-black text-slate-900 tracking-wider">
                    </div>
                    <button onclick="window.setRegistrationStep(2)" class="w-full py-4 bg-black text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl">
                        Request OTP
                    </button>
                </div>
                
                <p class="mt-8 px-12 text-[8px] font-medium text-slate-400 leading-relaxed">By continuing, you agree to our <span class="text-slate-900 underline">Terms of Service</span> and <span class="text-slate-900 underline">Privacy Policy</span></p>
            </div>
        `;
    } else if (step === 2) {
        stepContent = `
            <div class="animate-slide-up">
                 <header class="flex items-center justify-between mb-12 w-full max-w-sm mx-auto">
                    <button onclick="window.setRegistrationStep(1)" class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400"><span class="material-icons-outlined text-lg">arrow_back</span></button>
                    <div class="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center shadow-lg">
                        <span class="material-icons-outlined text-white text-xl">terminal</span>
                    </div>
                    <div class="w-8"></div>
                </header>

                <div class="text-left w-full max-w-sm mx-auto">
                    <h1 class="text-4xl font-black tracking-tighter text-slate-900 mb-2">Verify OTP</h1>
                    <p class="text-[11px] font-bold text-slate-400 leading-relaxed mb-8">We’ve sent a 6-digit code to <span class="text-slate-950">+91 98765 43210</span></p>

                    <div class="grid grid-cols-6 gap-2 mb-8">
                        ${[1, 2, 3, 4, 5, 6].map(() => `<div class="h-14 bg-white border-2 border-slate-100 rounded-xl"></div>`).join('')}
                    </div>

                    <p class="text-[10px] font-bold text-slate-400 text-center mb-12">Didn't receive the code? <span class="text-indigo-500">Resend Code</span></p>

                    <button onclick="window.setRegistrationStep(3)" class="w-full py-4 bg-black text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl ring-8 ring-black/5">
                        Verify & Proceed
                    </button>
                </div>
            </div>
        `;
    } else if (step === 3) {
        stepContent = `
            <div class="animate-slide-up w-full max-md mx-auto">
                <header class="flex items-center justify-between mb-8">
                    <button onclick="window.setRegistrationStep(2)" class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400"><span class="material-icons-outlined text-lg">arrow_back</span></button>
                    <div class="flex gap-1">
                        <div class="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                        <div class="w-4 h-1.5 bg-slate-950 rounded-full"></div>
                    </div>
                </header>

                <div class="text-center mb-8">
                    <h1 class="text-2xl font-black tracking-tighter text-slate-900 mb-1">Confirm Store Details</h1>
                    <p class="text-[9px] font-bold text-slate-400 leading-relaxed">Please verify the business information retrieved from your profile.</p>
                </div>

                <div class="space-y-3 mb-8">
                    ${[
                { l: 'STORE NAME', v: 'Luxe Retail Collective' },
                { l: 'OWNER NAME', v: 'Alexander Sterling' },
                { l: 'MOBILE NUMBER', v: '+1 (555) 012-3456' },
                { l: 'GSTIN', v: '22AAAAA0000A1Z5' }
            ].map(item => `
                        <div class="card p-4 border-slate-100 flex items-center justify-between">
                            <div class="text-left">
                                <p class="text-[7px] font-black text-indigo-400 uppercase tracking-widest mb-1">${item.l}</p>
                                <p class="text-[11px] font-black text-slate-900">${item.v}</p>
                            </div>
                             <div class="w-5 h-5 bg-slate-950 rounded-md flex items-center justify-center"><span class="material-icons-outlined text-white text-xs">done</span></div>
                        </div>
                    `).join('')}

                    <div class="card p-4 border-slate-100 flex items-center justify-between">
                        <div class="text-left">
                            <p class="text-[7px] font-black text-indigo-400 uppercase tracking-widest mb-1">STORE TYPE</p>
                            <p class="text-[11px] font-black text-slate-900">Multi-store Operations</p>
                        </div>
                        <div class="w-10 h-5 bg-slate-950 rounded-full relative cursor-pointer"><div class="w-3 h-3 bg-white rounded-full absolute right-1 top-1"></div></div>
                    </div>
                </div>

                 <div class="card p-4 border-slate-100 mb-12 flex items-center gap-4 bg-slate-50/50 border-dashed">
                    <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-slate-300">
                        <span class="material-icons-outlined">public</span>
                    </div>
                    <div class="flex-1 text-left">
                        <p class="text-[10px] font-black text-slate-950 leading-none mb-1">Set Up Custom Domain</p>
                        <p class="text-[8px] font-bold text-slate-400">Link your own URL to your storefront</p>
                    </div>
                    <button class="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[8px] font-black uppercase">Connect</h1>
                </div>

                <button onclick="window.setLoginStatus(true)" class="w-full py-4 bg-black text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl ring-8 ring-black/5">
                    Finalize Setup
                </button>
                <p class="text-[8px] font-black text-indigo-400 uppercase tracking-[0.2em] mt-6 opacity-40">Details can be edited later in settings</p>
            </div>
        `;
    }

    return stepContent;
}

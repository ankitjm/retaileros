var Fi=Object.defineProperty;var Un=e=>{throw TypeError(e)};var Ui=(e,t,s)=>t in e?Fi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var D=(e,t,s)=>Ui(e,typeof t!="symbol"?t+"":t,s),Oa=(e,t,s)=>t.has(e)||Un("Cannot "+s);var i=(e,t,s)=>(Oa(e,t,"read from private field"),s?s.call(e):t.get(e)),b=(e,t,s)=>t.has(e)?Un("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),x=(e,t,s,a)=>(Oa(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),g=(e,t,s)=>(Oa(e,t,"access private method"),s);var Ht=(e,t,s,a)=>({set _(n){x(e,t,n,s)},get _(){return i(e,t,a)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(n){if(n.ep)return;n.ep=!0;const l=s(n);fetch(n.href,l)}})();const Vi=localStorage.getItem("retaileros_logged_in")==="true",c={currentApp:window.innerWidth<768?"launcher":"sales",currentTab:"new-sale",salesMode:"default",salesHistoryId:"ORD-99281",historyViewMode:"completed",historyDateFilter:"today",historyFromDate:"",historyToDate:"",showMobileReceipt:!1,reportsTab:"sales",repairTab:"active",repairViewMode:"search",selectedRepairDevice:null,activeRepairId:null,repairContext:null,selectedClient:null,selectedClientId:null,clientViewMode:"directory",clientSearchQuery:"",clientInvoiceId:null,selectedGroupId:null,groupViewMode:"list",groupSearchQuery:"",promoterViewMode:"performance",inventoryTab:"brands",inventoryMode:"details",activeCategory:null,settingsView:"roles",viewportWidth:window.innerWidth,gridCols:window.innerWidth<768?4:3,schemesTab:"list",activeSchemeBrand:"Apple",activeScheme:"June Activation Bonus",showSchemeDetails:!1,marketplaceTab:"browse",marketplaceViewMode:"list",isLoggedIn:Vi,authMode:"login",registrationStep:1,inquiryViewMode:"list",activeInquiry:null,preBookingViewMode:"dashboard",activeCampaign:null,automationViewMode:"dashboard",activeAutomationId:null},gl=[],wl=e=>{gl.push(e)},C=(e=!0)=>{gl.forEach(t=>t(e))};function Gi(e){c.currentApp=e,e==="clients"&&(c.clientViewMode="directory"),C()}function Hi(e){c.currentTab=e,C()}function Wi(e){c.salesHistoryId=e,e&&window.innerWidth<768&&(c.showMobileReceipt=!0),C()}function zi(e){c.showMobileReceipt=e,C()}function Ji(e){c.reportsTab=e,C()}function Yi(e){c.repairTab=e,C()}function Ki(e,t=null){c.repairViewMode=e,t&&(c.selectedRepairDevice=t),C()}function Qi(e){c.gridCols=e,C()}function vl(e,t=null,s=null){c.clientViewMode=e,t&&(c.selectedClient=t),s&&(c.selectedClientId=s),e!=="invoice"&&(c.clientInvoiceId=null),C()}function Xi(e){c.clientInvoiceId=e,c.clientViewMode="invoice",C()}function Zi(e){c.schemesTab=e,C()}function er(e){c.activeSchemeBrand=e,C()}function tr(e){c.activeScheme=e,C()}function sr(e){c.showSchemeDetails=e,C()}function ar(e){c.marketplaceTab=e,C()}function nr(e){c.marketplaceViewMode=e,C()}function lr(e){c.isLoggedIn=e,e?localStorage.setItem("retaileros_logged_in","true"):localStorage.removeItem("retaileros_logged_in");const t=window.innerWidth<768;c.currentApp=e?t?"launcher":"sales":"launcher",C()}function ir(e){c.authMode=e,c.registrationStep=1,C()}function rr(e){c.registrationStep=e,C()}function or(e){c.inquiryViewMode=e,C()}function cr(e){c.activeInquiry=e,C()}function dr(e){c.preBookingViewMode=e,C()}function pr(e){c.activeCampaign=e,C()}function ur(e){c.automationViewMode=e,C()}function xr(e){c.activeAutomationId=e,C()}window.triggerRender=C;window.setApp=Gi;window.setTab=Hi;window.setSalesHistoryId=Wi;window.toggleMobileReceipt=zi;window.setReportsTab=Ji;window.setRepairTab=Yi;function yl(e){c.salesMode=e,C()}window.setSalesMode=yl;function fr(e){c.historyViewMode=e,C()}function br(e){c.historyDateFilter=e,e!=="custom"&&(c.historyFromDate="",c.historyToDate=""),C()}function hr(e,t){c.historyFromDate=e,c.historyToDate=t,c.historyDateFilter="custom",C()}window.setHistoryViewMode=fr;window.setHistoryDateFilter=br;window.setHistoryCustomDates=hr;window.setRepairMode=Ki;window.setGridCols=Qi;window.setClientMode=vl;window.viewClientInvoice=Xi;window.setSchemesTab=Zi;window.setSchemeBrand=er;window.setScheme=tr;window.toggleSchemeDetails=sr;window.setMarketplaceTab=ar;window.setMarketplaceViewMode=nr;window.setLoginStatus=lr;window.setAuthMode=ir;window.setRegistrationStep=rr;window.setInquiryViewMode=or;window.setActiveInquiry=cr;window.setPreBookingViewMode=dr;window.setActiveCampaign=pr;window.setAutomationViewMode=ur;window.setActiveAutomation=xr;function mr(e){c.groupViewMode=e,C()}function gr(e){c.selectedGroupId=e,C()}window.setGroupViewMode=mr;window.setSelectedGroup=gr;function wr(){return`
        <div class="h-full w-full flex flex-col items-center justify-center p-0 animate-slide-up">
            <!-- Header Section (Subtle for Sidebar) -->
            <div class="text-center mb-8">
                <p class="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">Enterprise Authentication</p>
            </div>

            <!-- Login Content -->
            <div class="w-full max-w-sm space-y-8">
                <div>
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Store ID</p>
                    <div class="relative group">
                        <input type="text" placeholder="e.g. LON-402" class="w-full h-14 pl-5 pr-12 bg-white border border-slate-100 rounded-2xl text-xs font-black text-slate-900 focus:ring-4 focus:ring-slate-950/5 focus:border-slate-950 transition-all shadow-sm">
                        <span class="material-icons-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">qr_code_scanner</span>
                    </div>
                </div>

                <div>
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Access PIN</p>
                    <div class="relative group">
                        <input type="password" placeholder="• • • • • •" class="w-full h-14 px-5 bg-white border border-slate-100 rounded-2xl text-lg font-black tracking-[0.5em] text-slate-900 focus:ring-4 focus:ring-slate-950/5 focus:border-slate-950 transition-all text-center shadow-sm">
                    </div>
                     <p class="text-[8px] font-bold text-slate-400 mt-4 text-center leading-relaxed">Enter your 6-digit terminal access code</p>
                </div>

                <div class="pt-4 space-y-3">
                    <button onclick="window.setLoginStatus(true)" class="w-full py-4 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl hover:scale-[1.02] active:scale-95 transition-all">
                        Authenticate
                    </button>
                    <button class="w-full py-4 bg-white border border-slate-200 text-slate-950 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-50 transition-all">
                         <span class="material-icons-outlined text-lg">qr_code_scanner</span> Scan Store QR
                    </button>
                </div>

                <div class="text-center">
                    <button class="text-[9px] font-bold text-slate-300 uppercase tracking-widest hover:text-slate-900 transition-colors">Forgot PIN?</button>
                </div>
            </div>

            <!-- Bottom Footnote -->
            <div class="mt-12 flex items-center gap-2 opacity-30">
                <span class="material-icons-outlined text-indigo-400 text-sm">verified_user</span>
                <p class="text-[8px] font-black text-indigo-400 uppercase tracking-widest">End-to-end Encrypted</p>
            </div>
        </div>
    `}function Fa(e="mobile"){return e==="desktop-primary"?vr():e==="desktop-secondary"?yr():kr()}function vr(){const e=c.registrationStep;return`
        <div class="h-full w-full flex flex-col items-center justify-center p-8 bg-white dot-grid relative overflow-hidden text-center">
            ${ma(e===1||e===2?e:3)}

            <div class="absolute bottom-6 flex items-center gap-2">
                <span class="material-icons-outlined text-indigo-400 text-xs">verified_user</span>
                <p class="text-[9px] font-black text-indigo-400 uppercase tracking-widest opacity-30">Secure ${e===2?"Verification":"Encryption"}</p>
            </div>
        </div>
    `}function yr(){return c.registrationStep<3?`
            <div class="h-full w-full flex flex-col items-center justify-center p-8 bg-slate-50/50 dot-grid relative overflow-hidden text-center">
                <div class="opacity-40 text-center">
                    <div class="w-20 h-20 bg-slate-200 rounded-2xl flex items-center justify-center shadow-lg mb-6 mx-auto">
                        <span class="material-icons-outlined text-slate-400 text-4xl">store</span>
                    </div>
                    <h2 class="text-xl font-black text-slate-400 mb-2">Store Details</h2>
                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Coming up next...</p>
                    <div class="mt-8 space-y-2">
                        ${["Store Name","Owner Details","GSTIN","Store Type"].map(t=>`
                            <div class="h-12 bg-white/50 border border-slate-200 rounded-xl"></div>
                        `).join("")}
                    </div>
                </div>
            </div>
        `:`
        <div class="h-full w-full flex flex-col p-8 bg-white relative overflow-y-auto custom-scrollbar">
            ${ma(3)}
        </div>
    `}function kr(){const e=c.registrationStep;return`
        <div class="h-full w-full flex flex-col items-center justify-center p-6 bg-white dot-grid relative overflow-hidden text-center">
            ${ma(e)}

            <div class="absolute bottom-6 flex items-center gap-2">
                <span class="material-icons-outlined text-indigo-400 text-xs">verified_user</span>
                <p class="text-[9px] font-black text-indigo-400 uppercase tracking-widest opacity-30">Secure ${e===2?"Verification":"Encryption"}</p>
            </div>
            <div class="w-40 h-1 bg-slate-100 absolute bottom-3 rounded-full"></div>
        </div>
    `}function ma(e){let t="";return e===1?t=`
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
        `:e===2?t=`
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
                        ${[1,2,3,4,5,6].map(()=>'<div class="h-14 bg-white border-2 border-slate-100 rounded-xl"></div>').join("")}
                    </div>

                    <p class="text-[10px] font-bold text-slate-400 text-center mb-12">Didn't receive the code? <span class="text-indigo-500">Resend Code</span></p>

                    <button onclick="window.setRegistrationStep(3)" class="w-full py-4 bg-black text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl ring-8 ring-black/5">
                        Verify & Proceed
                    </button>
                </div>
            </div>
        `:e===3&&(t=`
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
                    ${[{l:"STORE NAME",v:"Luxe Retail Collective"},{l:"OWNER NAME",v:"Alexander Sterling"},{l:"MOBILE NUMBER",v:"+1 (555) 012-3456"},{l:"GSTIN",v:"22AAAAA0000A1Z5"}].map(s=>`
                        <div class="card p-4 border-slate-100 flex items-center justify-between">
                            <div class="text-left">
                                <p class="text-[7px] font-black text-indigo-400 uppercase tracking-widest mb-1">${s.l}</p>
                                <p class="text-[11px] font-black text-slate-900">${s.v}</p>
                            </div>
                             <div class="w-5 h-5 bg-slate-950 rounded-md flex items-center justify-center"><span class="material-icons-outlined text-white text-xs">done</span></div>
                        </div>
                    `).join("")}

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
        `),t}function kl(){return c.authMode==="register"?Fa():wr()}const _r=[{n:"SALES DESK",i:"account_balance_wallet",k:"sales"},{n:"CLIENTS",i:"group",k:"clients"},{n:"INQUIRIES",i:"help_outline",k:"inquiries"},{n:"PROMOTERS",i:"business_center",k:"promoters"},{n:"INTERNAL STORE",i:"storefront"},{n:"INVENTORY",i:"inventory_2",k:"inventory"},{n:"REPAIRS",i:"build",k:"repairs"},{n:"MARKETPLACE",i:"swap_horizontal_circle",k:"marketplace"},{n:"CLAIMS",i:"verified_user"},{n:"SCHEMES",i:"percent",k:"schemes"},{n:"MARKETING",i:"campaign",k:"marketing"},{n:"AUTOMATION",i:"smart_toy",s:!0,k:"automation"},{n:"PRE-BOOKING",i:"rocket_launch",k:"prebooking"},{n:"REPORTS",i:"bar_chart",k:"reports"},{n:"SETTINGS",i:"settings",k:"settings"}];function Sr(e){const t=e?c.gridCols:4;return`
        <div class="card overflow-hidden border-slate-200">
            <div class="grid ${e&&{2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4"}[t]||"grid-cols-4"} divide-x divide-y divide-slate-100">
                ${_r.map(a=>`
                    <button onclick="setApp('${a.k||"launcher"}')" class="aspect-square flex flex-col items-center justify-center p-1.5 hover:bg-slate-50 transition-all ${c.currentApp===a.k?"bg-slate-100":""}">
                        <span class="${a.s?"material-symbols-outlined":"material-icons-outlined"} text-xl ${c.currentApp===a.k?"text-slate-900 font-bold":"text-slate-500"} mb-1">${a.i}</span>
                        <span class="text-[7px] font-black uppercase text-center tracking-wider leading-tight ${c.currentApp===a.k?"text-slate-900":"text-slate-500"} ${a.n.length>10?"max-w-[90%]":""}">${a.n}</span>
                    </button>
                `).join("")}
            </div>
        </div>
    `}function Ir(e){return`
        <footer class="p-4 bg-[#F8FAFC]/95 backdrop-blur-md border-t border-slate-100 shrink-0 mt-auto sticky bottom-0 z-20">
            ${c.isLoggedIn?`
                <div class="card p-3 flex items-center justify-between border-slate-200/50 shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-black text-[10px] text-slate-900 shadow-inner">AM</div>
                        <div class="text-left ${e?"":"hidden xl:block"}">
                            <p class="text-xs font-black text-slate-900">Arjun M.</p>
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Apple Store - Mumbai Central</p>
                        </div>
                    </div>
                    <button onclick="setLoginStatus(false)" class="flex items-center gap-2 group p-1.5 hover:bg-red-50 rounded-lg transition-all" title="Logout">
                            <span class="material-icons-outlined text-lg text-slate-900 group-hover:text-red-500 transition-all">logout</span>
                    </button>
                </div>
            `:`
                ${c.authMode==="login"?`
                    <button onclick="setAuthMode('register')" class="w-full h-14 bg-slate-950 text-white rounded-2xl flex items-center justify-center gap-4 group hover:scale-[1.02] active:scale-95 transition-all shadow-2xl">
                            <span class="text-[10px] font-black uppercase tracking-widest">Register New Store</span>
                            <span class="material-icons-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                    <button onclick="setAuthMode('login')" class="w-full mt-3 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-slate-950 transition-colors">Already have an ID? Login</button>
                `:`
                    <button onclick="setAuthMode('login')" class="w-full h-14 border-2 border-slate-950 text-slate-950 rounded-2xl flex items-center justify-center gap-4 group hover:bg-slate-50 transition-all">
                            <span class="text-[10px] font-black uppercase tracking-widest">Back to Login</span>
                            <span class="material-icons-outlined text-sm group-hover:-translate-x-1 transition-transform rotate-180">arrow_forward</span>
                    </button>
                `}
            `}
        </footer>
    `}function Ua(e){const t=e==="mobile";return`
        <div class="flex flex-col min-h-full w-full">
            <header class="p-4 sm:p-8 pb-4 shrink-0">
                <div class="flex items-center justify-between mb-2">
                     <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"><div class="w-2 h-2 bg-white rounded-full"></div></div>
                        <div class="text-left">
                            <h1 class="text-xl font-black tracking-tighter text-slate-900">RetailerOS</h1>
                            <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">App Launcher</p>
                        </div>
                     </div>
                     ${t?`
                     <button class="p-2 text-slate-400 hover:text-slate-900">
                        <span class="material-symbols-outlined text-xl">search</span>
                     </button>`:""}
                </div>
            </header>

            <div class="flex-1 px-6 relative pb-4 overflow-y-auto custom-scrollbar">
                ${c.isLoggedIn?`
                    ${Sr(t)}

                    ${t?`
                    <!-- Mobile Only News Ticker -->
                    <div class="news-ticker-container mt-6">
                        <div class="news-ticker">
                            <span class="text-[9px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-6">
                                <span class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div> TELECOM: 5G rollout reaches 92% urban coverage</span>
                            </span>
                        </div>
                    </div>`:""}
                `:`
                    <!-- Auth View (Login/Register) when logged out -->
                    <div id="auth-container" class="h-full w-full py-10">
                         ${kl()}
                    </div>
                `}
            </div>

            ${Ir(t)}
        </div>
    `}class j extends Error{constructor(s,a,n,l,d){a!==void 0&&(s=`${a}: ${s}`);super(s,{cause:d});D(this,"code");D(this,"extendedCode");D(this,"rawCode");this.code=a,this.extendedCode=n,this.rawCode=l,this.name="LibsqlError"}}class Kt extends j{constructor(s,a,n,l,d,r){super(s,n,l,d,r);D(this,"statementIndex");this.statementIndex=a,this.name="LibsqlBatchError"}}function $r(e){const t=Cr.exec(e);if(t===null)throw new j(`The URL '${e}' is not in a valid format`,"URL_INVALID");const s=t.groups,a=s.scheme,n=s.authority!==void 0?Ar(s.authority):void 0,l=Ft(s.path),d=s.query!==void 0?Er(s.query):void 0,r=s.fragment!==void 0?Ft(s.fragment):void 0;return{scheme:a,authority:n,path:l,query:d,fragment:r}}const Cr=(()=>{const e="(?<scheme>[A-Za-z][A-Za-z.+-]*)",t="(?<authority>[^/?#]*)",s="(?<path>[^?#]*)",a="(?<query>[^#]*)",n="(?<fragment>.*)";return new RegExp(`^${e}:(//${t})?${s}(\\?${a})?(#${n})?$`,"su")})();function Ar(e){const t=Rr.exec(e);if(t===null)throw new j("The authority part of the URL is not in a valid format","URL_INVALID");const s=t.groups,a=Ft(s.host_br??s.host),n=s.port?parseInt(s.port,10):void 0,l=s.username!==void 0?{username:Ft(s.username),password:s.password!==void 0?Ft(s.password):void 0}:void 0;return{host:a,port:n,userinfo:l}}const Rr=new RegExp("^((?<username>[^:]*)(:(?<password>.*))?@)?((?<host>[^:\\[\\]]*)|(\\[(?<host_br>[^\\[\\]]*)\\]))(:(?<port>[0-9]*))?$","su");function Er(e){const t=e.split("&"),s=[];for(const a of t){if(a==="")continue;let n,l;const d=a.indexOf("=");d<0?(n=a,l=""):(n=a.substring(0,d),l=a.substring(d+1)),s.push({key:Ft(n.replaceAll("+"," ")),value:Ft(l.replaceAll("+"," "))})}return{pairs:s}}function Ft(e){try{return decodeURIComponent(e)}catch(t){throw t instanceof URIError?new j(`URL component has invalid percent encoding: ${t}`,"URL_INVALID",void 0,void 0,t):t}}function Va(e,t,s){if(t===void 0)throw new j(`URL with scheme ${JSON.stringify(e+":")} requires authority (the "//" part)`,"URL_INVALID");const a=`${e}:`,n=Tr(t.host),l=Mr(t.port),r=`//${Dr(t.userinfo)}${n}${l}`;let p=s.split("/").map(encodeURIComponent).join("/");return p!==""&&!p.startsWith("/")&&(p="/"+p),new URL(`${a}${r}${p}`)}function Tr(e){return e.includes(":")?`[${encodeURI(e)}]`:encodeURI(e)}function Mr(e){return e!==void 0?`:${e}`:""}function Dr(e){if(e===void 0)return"";const t=encodeURIComponent(e.username),s=e.password!==void 0?`:${encodeURIComponent(e.password)}`:"";return`${t}${s}@`}const _l="3.7.8",Lr=_l,Ss=typeof Buffer=="function",Vn=typeof TextDecoder=="function"?new TextDecoder:void 0,Gn=typeof TextEncoder=="function"?new TextEncoder:void 0,jr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",As=Array.prototype.slice.call(jr),ra=(e=>{let t={};return e.forEach((s,a)=>t[s]=a),t})(As),qr=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,Z=String.fromCharCode.bind(String),Hn=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):e=>new Uint8Array(Array.prototype.slice.call(e,0)),Sl=e=>e.replace(/=/g,"").replace(/[+\/]/g,t=>t=="+"?"-":"_"),Il=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),$l=e=>{let t,s,a,n,l="";const d=e.length%3;for(let r=0;r<e.length;){if((s=e.charCodeAt(r++))>255||(a=e.charCodeAt(r++))>255||(n=e.charCodeAt(r++))>255)throw new TypeError("invalid character found");t=s<<16|a<<8|n,l+=As[t>>18&63]+As[t>>12&63]+As[t>>6&63]+As[t&63]}return d?l.slice(0,d-3)+"===".substring(d):l},xn=typeof btoa=="function"?e=>btoa(e):Ss?e=>Buffer.from(e,"binary").toString("base64"):$l,Ga=Ss?e=>Buffer.from(e).toString("base64"):e=>{let s=[];for(let a=0,n=e.length;a<n;a+=4096)s.push(Z.apply(null,e.subarray(a,a+4096)));return xn(s.join(""))},da=(e,t=!1)=>t?Sl(Ga(e)):Ga(e),Or=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?Z(192|t>>>6)+Z(128|t&63):Z(224|t>>>12&15)+Z(128|t>>>6&63)+Z(128|t&63)}else{var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return Z(240|t>>>18&7)+Z(128|t>>>12&63)+Z(128|t>>>6&63)+Z(128|t&63)}},Pr=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,Cl=e=>e.replace(Pr,Or),Wn=Ss?e=>Buffer.from(e,"utf8").toString("base64"):Gn?e=>Ga(Gn.encode(e)):e=>xn(Cl(e)),Qt=(e,t=!1)=>t?Sl(Wn(e)):Wn(e),zn=e=>Qt(e,!0),Nr=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,Br=e=>{switch(e.length){case 4:var t=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),s=t-65536;return Z((s>>>10)+55296)+Z((s&1023)+56320);case 3:return Z((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return Z((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},Al=e=>e.replace(Nr,Br),Rl=e=>{if(e=e.replace(/\s+/g,""),!qr.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(e.length&3));let t,s,a,n=[];for(let l=0;l<e.length;)t=ra[e.charAt(l++)]<<18|ra[e.charAt(l++)]<<12|(s=ra[e.charAt(l++)])<<6|(a=ra[e.charAt(l++)]),s===64?n.push(Z(t>>16&255)):a===64?n.push(Z(t>>16&255,t>>8&255)):n.push(Z(t>>16&255,t>>8&255,t&255));return n.join("")},fn=typeof atob=="function"?e=>atob(Il(e)):Ss?e=>Buffer.from(e,"base64").toString("binary"):Rl,El=Ss?e=>Hn(Buffer.from(e,"base64")):e=>Hn(fn(e).split("").map(t=>t.charCodeAt(0))),Tl=e=>El(Ml(e)),Fr=Ss?e=>Buffer.from(e,"base64").toString("utf8"):Vn?e=>Vn.decode(El(e)):e=>Al(fn(e)),Ml=e=>Il(e.replace(/[-_]/g,t=>t=="-"?"+":"/")),Ha=e=>Fr(Ml(e)),Ur=e=>{if(typeof e!="string")return!1;const t=e.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(t)||!/[^\s0-9a-zA-Z\-_]/.test(t)},Dl=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),Ll=function(){const e=(t,s)=>Object.defineProperty(String.prototype,t,Dl(s));e("fromBase64",function(){return Ha(this)}),e("toBase64",function(t){return Qt(this,t)}),e("toBase64URI",function(){return Qt(this,!0)}),e("toBase64URL",function(){return Qt(this,!0)}),e("toUint8Array",function(){return Tl(this)})},jl=function(){const e=(t,s)=>Object.defineProperty(Uint8Array.prototype,t,Dl(s));e("toBase64",function(t){return da(this,t)}),e("toBase64URI",function(){return da(this,!0)}),e("toBase64URL",function(){return da(this,!0)})},Vr=()=>{Ll(),jl()},bn={version:_l,VERSION:Lr,atob:fn,atobPolyfill:Rl,btoa:xn,btoaPolyfill:$l,fromBase64:Ha,toBase64:Qt,encode:Qt,encodeURI:zn,encodeURL:zn,utob:Cl,btou:Al,decode:Ha,isValid:Ur,fromUint8Array:da,toUint8Array:Tl,extendString:Ll,extendUint8Array:jl,extendBuiltins:Vr},Bs="https://github.com/libsql/libsql-client-ts#supported-urls";function Wa(e){if(e==="write")return"BEGIN IMMEDIATE";if(e==="read")return"BEGIN TRANSACTION READONLY";if(e==="deferred")return"BEGIN DEFERRED";throw RangeError('Unknown transaction mode, supported values are "write", "read" and "deferred"')}class Gr{constructor(t,s,a,n,l){D(this,"columns");D(this,"columnTypes");D(this,"rows");D(this,"rowsAffected");D(this,"lastInsertRowid");this.columns=t,this.columnTypes=s,this.rows=a,this.rowsAffected=n,this.lastInsertRowid=l}toJSON(){return{columns:this.columns,columnTypes:this.columnTypes,rows:this.rows.map(Hr),rowsAffected:this.rowsAffected,lastInsertRowid:this.lastInsertRowid!==void 0?""+this.lastInsertRowid:null}}}function Hr(e){return Array.prototype.map.call(e,Wr)}function Wr(e){return typeof e=="bigint"?""+e:e instanceof ArrayBuffer?bn.fromUint8Array(new Uint8Array(e)):e}const Jn=":memory:";function zr(e,t){var S,_;if(typeof e!="object")throw new TypeError(`Expected client configuration as object, got ${typeof e}`);let{url:s,authToken:a,tls:n,intMode:l,concurrency:d}=e;d=Math.max(0,d||20),l??(l="number");let r=[];s===Jn&&(s="file::memory:");const p=$r(s),o=p.scheme.toLowerCase(),u=o==="file"&&p.path===Jn&&p.authority===void 0;let h;u?h={cache:{values:["shared","private"],update:(k,P)=>r.push(`${k}=${P}`)}}:h={tls:{values:["0","1"],update:(k,P)=>n=P==="1"},authToken:{update:(k,P)=>a=P}};for(const{key:k,value:P}of((S=p.query)==null?void 0:S.pairs)??[]){if(!Object.hasOwn(h,k))throw new j(`Unsupported URL query parameter ${JSON.stringify(k)}`,"URL_PARAM_NOT_SUPPORTED");const G=h[k];if(G.values!==void 0&&!G.values.includes(P))throw new j(`Unknown value for the "${k}" query argument: ${JSON.stringify(P)}. Supported values are: [${G.values.map(Cs=>'"'+Cs+'"').join(", ")}]`,"URL_INVALID");G.update!==void 0&&(G==null||G.update(k,P))}const w=r.length===0?"":`?${r.join("&")}`,v=p.path+w;let m;if(o==="libsql")if(n===!1){if(((_=p.authority)==null?void 0:_.port)===void 0)throw new j('A "libsql:" URL with ?tls=0 must specify an explicit port',"URL_INVALID");m="http"}else m="https";else m=o;if(m==="http"||m==="ws"?n??(n=!1):n??(n=!0),m!=="http"&&m!=="ws"&&m!=="https"&&m!=="wss"&&m!=="file")throw new j(`The client supports only "libsql:", "wss:", "ws:", "https:", "http:" and "file:" URLs, got ${JSON.stringify(p.scheme+":")}. For more information, please read ${Bs}`,"URL_SCHEME_NOT_SUPPORTED");if(l!=="number"&&l!=="bigint"&&l!=="string")throw new TypeError(`Invalid value for intMode, expected "number", "bigint" or "string", got ${JSON.stringify(l)}`);if(p.fragment!==void 0)throw new j(`URL fragments are not supported: ${JSON.stringify("#"+p.fragment)}`,"URL_INVALID");return u?{scheme:"file",tls:!1,path:v,intMode:l,concurrency:d,syncUrl:e.syncUrl,syncInterval:e.syncInterval,readYourWrites:e.readYourWrites,offline:e.offline,fetch:e.fetch,authToken:void 0,encryptionKey:void 0,remoteEncryptionKey:void 0,authority:void 0}:{scheme:m,tls:n,authority:p.authority,path:v,authToken:a,intMode:l,concurrency:d,encryptionKey:e.encryptionKey,remoteEncryptionKey:e.remoteEncryptionKey,syncUrl:e.syncUrl,syncInterval:e.syncInterval,readYourWrites:e.readYourWrites,offline:e.offline,fetch:e.fetch}}let Jt;typeof WebSocket<"u"?Jt=WebSocket:typeof global<"u"?Jt=global.WebSocket:typeof window<"u"?Jt=window.WebSocket:typeof self<"u"&&(Jt=self.WebSocket);class ql{constructor(){D(this,"intMode");this.intMode="number"}}class U extends Error{constructor(t){super(t),this.name="ClientError"}}class R extends U{constructor(t){super(t),this.name="ProtoError"}}class Ol extends U{constructor(s,a){super(s);D(this,"code");D(this,"proto");this.name="ResponseError",this.code=a.code,this.proto=a,this.stack=void 0}}class ke extends U{constructor(t,s){s!==void 0?(super(`${t}: ${s}`),this.cause=s):super(t),this.name="ClosedError"}}class Pl extends U{constructor(t){super(t),this.name="WebSocketUnsupportedError"}}class za extends U{constructor(t){super(t),this.name="WebSocketError"}}class pa extends U{constructor(s,a){super(s);D(this,"status");this.status=a,this.name="HttpServerError"}}class vs extends U{constructor(t){super(t),this.name="ProtocolVersionError"}}class kt extends U{constructor(t){super(t),this.name="InternalError"}}class Is extends U{constructor(t){super(t),this.name="MisuseError"}}function Me(e){if(typeof e=="string")return e;throw $s(e,"string")}function Le(e){if(e!=null){if(typeof e=="string")return e;throw $s(e,"string or null")}}function Ut(e){if(typeof e=="number")return e;throw $s(e,"number")}function Fs(e){if(typeof e=="boolean")return e;throw $s(e,"boolean")}function ga(e){if(Array.isArray(e))return e;throw $s(e,"array")}function ee(e){if(e!==null&&typeof e=="object"&&!Array.isArray(e))return e;throw $s(e,"object")}function _t(e,t){return ga(e).map(s=>t(ee(s)))}function $s(e,t){if(e===void 0)return new R(`Expected ${t}, but the property was missing`);let s=typeof e;return e===null?s="null":Array.isArray(e)&&(s="array"),new R(`Expected ${t}, received ${s}`)}function hn(e,t){return t(ee(e))}var H,dt,He,$t;class Jr{constructor(t){b(this,He);b(this,H);b(this,dt);x(this,H,t),x(this,dt,!1)}begin(){i(this,H).push("{"),x(this,dt,!0)}end(){i(this,H).push("}"),x(this,dt,!1)}string(t,s){g(this,He,$t).call(this,t),i(this,H).push(JSON.stringify(s))}stringRaw(t,s){g(this,He,$t).call(this,t),i(this,H).push('"'),i(this,H).push(s),i(this,H).push('"')}number(t,s){g(this,He,$t).call(this,t),i(this,H).push(""+s)}boolean(t,s){g(this,He,$t).call(this,t),i(this,H).push(s?"true":"false")}object(t,s,a){g(this,He,$t).call(this,t),this.begin(),a(this,s),this.end()}arrayObjects(t,s,a){g(this,He,$t).call(this,t),i(this,H).push("[");for(let n=0;n<s.length;++n)n!==0&&i(this,H).push(","),this.begin(),a(this,s[n]),this.end();i(this,H).push("]")}}H=new WeakMap,dt=new WeakMap,He=new WeakSet,$t=function(t){i(this,dt)?(i(this,H).push('"'),x(this,dt,!1)):i(this,H).push(',"'),i(this,H).push(t),i(this,H).push('":')};function Nl(e,t){const s=[],a=new Jr(s);return a.begin(),t(a,e),a.end(),s.join("")}const Ps=0,Ja=1,Ya=2,Yr=5;var qe,Us,be;class Kr{constructor(t){b(this,qe);b(this,Us);b(this,be);x(this,qe,t),x(this,Us,new DataView(t.buffer,t.byteOffset,t.byteLength)),x(this,be,0)}varint(){let t=0;for(let s=0;;s+=7){const a=i(this,qe)[Ht(this,be)._++];if(t|=(a&127)<<s,!(a&128))break}return t}varintBig(){let t=0n;for(let s=0n;;s+=7n){const a=i(this,qe)[Ht(this,be)._++];if(t|=BigInt(a&127)<<s,!(a&128))break}return t}bytes(t){const s=new Uint8Array(i(this,qe).buffer,i(this,qe).byteOffset+i(this,be),t);return x(this,be,i(this,be)+t),s}double(){const t=i(this,Us).getFloat64(i(this,be),!0);return x(this,be,i(this,be)+8),t}skipVarint(){for(;i(this,qe)[Ht(this,be)._++]&128;);}skip(t){x(this,be,i(this,be)+t)}eof(){return i(this,be)>=i(this,qe).byteLength}}qe=new WeakMap,Us=new WeakMap,be=new WeakMap;var re,ae,Et,Rs;class Qr{constructor(t){b(this,Et);b(this,re);b(this,ae);x(this,re,t),x(this,ae,-1)}setup(t){x(this,ae,t)}bytes(){g(this,Et,Rs).call(this,Ya);const t=i(this,re).varint();return i(this,re).bytes(t)}string(){return new TextDecoder().decode(this.bytes())}message(t){return Ea(this.bytes(),t)}int32(){return g(this,Et,Rs).call(this,Ps),i(this,re).varint()}uint32(){return this.int32()}bool(){return this.int32()!==0}uint64(){return g(this,Et,Rs).call(this,Ps),i(this,re).varintBig()}sint64(){const t=this.uint64();return t>>1n^-(t&1n)}double(){return g(this,Et,Rs).call(this,Ja),i(this,re).double()}maybeSkip(){if(!(i(this,ae)<0)){if(i(this,ae)===Ps)i(this,re).skipVarint();else if(i(this,ae)===Ja)i(this,re).skip(8);else if(i(this,ae)===Ya){const t=i(this,re).varint();i(this,re).skip(t)}else if(i(this,ae)===Yr)i(this,re).skip(4);else throw new R(`Unexpected wire type ${i(this,ae)}`);x(this,ae,-1)}}}re=new WeakMap,ae=new WeakMap,Et=new WeakSet,Rs=function(t){if(i(this,ae)!==t)throw new R(`Expected wire type ${t}, got ${i(this,ae)}`);x(this,ae,-1)};function Ea(e,t){const s=new Kr(e),a=new Qr(s);let n=t.default();for(;!s.eof();){const l=s.varint(),d=l>>3,r=l&7;a.setup(r);const p=t[d];if(p!==void 0){const o=p(a,n);o!==void 0&&(n=o)}a.maybeSkip()}return n}var Se,pt,es,oe,Y,Es,ua,Bl,Ts;const Pn=class Pn{constructor(){b(this,Y);b(this,Se);b(this,pt);b(this,es);b(this,oe);x(this,Se,new ArrayBuffer(256)),x(this,pt,new Uint8Array(i(this,Se))),x(this,es,new DataView(i(this,Se))),x(this,oe,0)}bytes(t,s){g(this,Y,Ts).call(this,t,Ya),g(this,Y,ua).call(this,s.byteLength),g(this,Y,Es).call(this,s.byteLength),i(this,pt).set(s,i(this,oe)),x(this,oe,i(this,oe)+s.byteLength)}string(t,s){this.bytes(t,new TextEncoder().encode(s))}message(t,s,a){const n=new Pn;a(n,s),this.bytes(t,n.data())}int32(t,s){g(this,Y,Ts).call(this,t,Ps),g(this,Y,ua).call(this,s)}uint32(t,s){this.int32(t,s)}bool(t,s){this.int32(t,s?1:0)}sint64(t,s){g(this,Y,Ts).call(this,t,Ps),g(this,Y,Bl).call(this,s<<1n^s>>63n)}double(t,s){g(this,Y,Ts).call(this,t,Ja),g(this,Y,Es).call(this,8),i(this,es).setFloat64(i(this,oe),s,!0),x(this,oe,i(this,oe)+8)}data(){return new Uint8Array(i(this,Se),0,i(this,oe))}};Se=new WeakMap,pt=new WeakMap,es=new WeakMap,oe=new WeakMap,Y=new WeakSet,Es=function(t){if(i(this,oe)+t<=i(this,Se).byteLength)return;let s=i(this,Se).byteLength;for(;s<i(this,oe)+t;)s*=2;const a=new ArrayBuffer(s),n=new Uint8Array(a),l=new DataView(a);n.set(new Uint8Array(i(this,Se),0,i(this,oe))),x(this,Se,a),x(this,pt,n),x(this,es,l)},ua=function(t){g(this,Y,Es).call(this,5),t=0|t;do{let s=t&127;t>>>=7,s|=t?128:0,i(this,pt)[Ht(this,oe)._++]=s}while(t)},Bl=function(t){g(this,Y,Es).call(this,10),t=t&0xffffffffffffffffn;do{let s=Number(t&0x7fn);t>>=7n,s|=t?128:0,i(this,pt)[Ht(this,oe)._++]=s}while(t)},Ts=function(t,s){g(this,Y,ua).call(this,t<<3|s)};let Ka=Pn;function Fl(e,t){const s=new Ka;return t(s,e),s.data()}var he,We;class Ms{constructor(){b(this,he);b(this,We);x(this,he,new Set),x(this,We,new Set)}alloc(){for(const s of i(this,We))return i(this,We).delete(s),i(this,he).add(s),i(this,he).has(i(this,he).size-1)||i(this,We).add(i(this,he).size-1),s;const t=i(this,he).size;return i(this,he).add(t),t}free(t){if(!i(this,he).delete(t))throw new kt("Freeing an id that is not allocated");i(this,We).delete(i(this,he).size),t<i(this,he).size&&i(this,We).add(t)}}he=new WeakMap,We=new WeakMap;function V(e,t){throw new kt(t)}function Ns(e){if(e===null)return null;if(typeof e=="string")return e;if(typeof e=="number"){if(!Number.isFinite(e))throw new RangeError("Only finite numbers (not Infinity or NaN) can be passed as arguments");return e}else if(typeof e=="bigint"){if(e<Xr||e>Zr)throw new RangeError("This bigint value is too large to be represented as a 64-bit integer and passed as argument");return e}else{if(typeof e=="boolean")return e?1n:0n;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(e instanceof Uint8Array)return e;if(e instanceof Date)return+e.valueOf();if(typeof e=="object")return""+e.toString();throw new TypeError("Unsupported type of value")}}const Xr=-9223372036854775808n,Zr=9223372036854775807n;function Ul(e,t){if(e===null)return null;if(typeof e=="number")return e;if(typeof e=="string")return e;if(typeof e=="bigint")if(t==="number"){const s=Number(e);if(!Number.isSafeInteger(s))throw new RangeError("Received integer which is too large to be safely represented as a JavaScript number");return s}else{if(t==="bigint")return e;if(t==="string")return""+e;throw new Is("Invalid value for IntMode")}else{if(e instanceof Uint8Array)return e.slice().buffer;throw e===void 0?new R("Received unrecognized type of Value"):V(e,"Impossible type of Value")}}function na(e){return{affectedRowCount:e.affectedRowCount,lastInsertRowid:e.lastInsertRowid,columnNames:e.cols.map(t=>t.name),columnDecltypes:e.cols.map(t=>t.decltype)}}function Vl(e,t){const s=na(e),a=e.rows.map(n=>Wl(s.columnNames,n,t));return{...s,rows:a}}function Gl(e,t){const s=na(e);let a;return e.rows.length>0&&(a=Wl(s.columnNames,e.rows[0],t)),{...s,row:a}}function Hl(e,t){const s=na(e);let a;return e.rows.length>0&&s.columnNames.length>0&&(a=Ul(e.rows[0][0],t)),{...s,value:a}}function Wl(e,t,s){const a={};Object.defineProperty(a,"length",{value:t.length});for(let n=0;n<t.length;++n){const l=Ul(t[n],s);Object.defineProperty(a,n,{value:l});const d=e[n];d!==void 0&&!Object.hasOwn(a,d)&&Object.defineProperty(a,d,{value:l,enumerable:!0,configurable:!0,writable:!0})}return a}function ys(e){return new Ol(e.message,e)}var ts,ss,ze;class mn{constructor(t,s){b(this,ts);b(this,ss);b(this,ze);x(this,ts,t),x(this,ss,s),x(this,ze,void 0)}_getSqlId(t){if(i(this,ts)!==t)throw new Is("Attempted to use SQL text opened with other object");if(i(this,ze)!==void 0)throw new ke("SQL text is closed",i(this,ze));return i(this,ss)}close(){this._setClosed(new U("SQL text was manually closed"))}_setClosed(t){i(this,ze)===void 0&&(x(this,ze,t),i(this,ts)._closeSql(i(this,ss)))}get closed(){return i(this,ze)!==void 0}}ts=new WeakMap,ss=new WeakMap,ze=new WeakMap;function Qa(e,t){return t instanceof mn?{sqlId:t._getSqlId(e)}:{sql:""+t}}var Oe,Ie;class wa{constructor(){b(this,Oe);b(this,Ie);x(this,Oe,[]),x(this,Ie,[])}get length(){return i(this,Oe).length+i(this,Ie).length}push(t){i(this,Oe).push(t)}shift(){return i(this,Ie).length===0&&i(this,Oe).length>0&&(x(this,Ie,i(this,Oe).reverse()),x(this,Oe,[])),i(this,Ie).pop()}first(){return i(this,Ie).length!==0?i(this,Ie)[i(this,Ie).length-1]:i(this,Oe)[0]}}Oe=new WeakMap,Ie=new WeakMap;let zl=class{constructor(t){D(this,"sql");D(this,"_args");D(this,"_namedArgs");this.sql=t,this._args=[],this._namedArgs=new Map}bindIndexes(t){this._args.length=0;for(const s of t)this._args.push(Ns(s));return this}bindIndex(t,s){if(t!==(t|0)||t<=0)throw new RangeError("Index of a positional argument must be positive integer");for(;this._args.length<t;)this._args.push(null);return this._args[t-1]=Ns(s),this}bindName(t,s){return this._namedArgs.set(t,Ns(s)),this}unbindAll(){return this._args.length=0,this._namedArgs.clear(),this}};function Jl(e,t,s){let a,n=[],l=[];if(t instanceof zl){a=t.sql,n=t._args;for(const[p,o]of t._namedArgs.entries())l.push({name:p,value:o})}else Array.isArray(t)?(a=t[0],Array.isArray(t[1])?n=t[1].map(p=>Ns(p)):l=Object.entries(t[1]).map(([p,o])=>({name:p,value:Ns(o)}))):a=t;const{sql:d,sqlId:r}=Qa(e,a);return{sql:d,sqlId:r,args:n,namedArgs:l,wantRows:s}}var Vs,as,fl;let eo=(fl=class{constructor(t,s){D(this,"_stream");b(this,Vs);D(this,"_steps");b(this,as);this._stream=t,x(this,Vs,s),this._steps=[],x(this,as,!1)}step(){return new ao(this)}execute(){if(i(this,as))throw new Is("This batch has already been executed");x(this,as,!0);const t={steps:this._steps.map(s=>s.proto)};return i(this,Vs)?so(this._stream,this._steps,t):to(this._stream,this._steps,t)}},Vs=new WeakMap,as=new WeakMap,fl);function to(e,t,s){return e._batch(s).then(a=>{for(let n=0;n<t.length;++n){const l=a.stepResults.get(n),d=a.stepErrors.get(n);t[n].callback(l,d)}})}async function so(e,t,s){const a=await e._openCursor(s);try{let n=0,l,d=[];for(;;){const r=await a.next();if(r===void 0)break;if(r.type==="step_begin"){if(r.step<n||r.step>=t.length)throw new R("Server produced StepBeginEntry for unexpected step");if(l!==void 0)throw new R("Server produced StepBeginEntry before terminating previous step");for(let p=n;p<r.step;++p)t[p].callback(void 0,void 0);n=r.step+1,l=r,d=[]}else if(r.type==="step_end"){if(l===void 0)throw new R("Server produced StepEndEntry but no step is active");const p={cols:l.cols,rows:d,affectedRowCount:r.affectedRowCount,lastInsertRowid:r.lastInsertRowid};t[l.step].callback(p,void 0),l=void 0,d=[]}else if(r.type==="step_error"){if(l===void 0){if(r.step>=t.length)throw new R("Server produced StepErrorEntry for unexpected step");for(let p=n;p<r.step;++p)t[p].callback(void 0,void 0)}else{if(r.step!==l.step)throw new R("Server produced StepErrorEntry for unexpected step");l=void 0,d=[]}t[r.step].callback(void 0,r.error),n=r.step+1}else if(r.type==="row"){if(l===void 0)throw new R("Server produced RowEntry but no step is active");d.push(r.row)}else throw r.type==="error"?ys(r.error):r.type==="none"?new R("Server produced unrecognized CursorEntry"):V(r,"Impossible CursorEntry")}if(l!==void 0)throw new R("Server closed Cursor before terminating active step");for(let r=n;r<t.length;++r)t[r].callback(void 0,void 0)}finally{a.close()}}var Je,Tt,Ds,bl;let ao=(bl=class{constructor(t){b(this,Tt);D(this,"_batch");b(this,Je);D(this,"_index");this._batch=t,x(this,Je,[]),this._index=void 0}condition(t){return i(this,Je).push(t._proto),this}query(t){return g(this,Tt,Ds).call(this,t,!0,Vl)}queryRow(t){return g(this,Tt,Ds).call(this,t,!0,Gl)}queryValue(t){return g(this,Tt,Ds).call(this,t,!0,Hl)}run(t){return g(this,Tt,Ds).call(this,t,!1,na)}},Je=new WeakMap,Tt=new WeakSet,Ds=function(t,s,a){if(this._index!==void 0)throw new Is("This BatchStep has already been added to the batch");const n=Jl(this._batch._stream._sqlOwner(),t,s);let l;i(this,Je).length===0?l=void 0:i(this,Je).length===1?l=i(this,Je)[0]:l={type:"and",conds:i(this,Je).slice()};const d={stmt:n,condition:l};return new Promise((r,p)=>{const o=(u,h)=>{u!==void 0&&h!==void 0?p(new R("Server returned both result and error")):h!==void 0?p(ys(h)):r(u!==void 0?a(u,this._batch._stream.intMode):void 0)};this._index=this._batch._steps.length,this._batch._steps.push({proto:d,callback:o})})},bl),ue=class Ct{constructor(t,s){D(this,"_batch");D(this,"_proto");this._batch=t,this._proto=s}static ok(t){return new Ct(t._batch,{type:"ok",step:Yn(t)})}static error(t){return new Ct(t._batch,{type:"error",step:Yn(t)})}static not(t){return new Ct(t._batch,{type:"not",cond:t._proto})}static and(t,s){for(const a of s)Kn(t,a);return new Ct(t,{type:"and",conds:s.map(a=>a._proto)})}static or(t,s){for(const a of s)Kn(t,a);return new Ct(t,{type:"or",conds:s.map(a=>a._proto)})}static isAutocommit(t){return t._stream.client()._ensureVersion(3,"BatchCond.isAutocommit()"),new Ct(t,{type:"is_autocommit"})}};function Yn(e){if(e._index===void 0)throw new Is("Cannot add a condition referencing a step that has not been added to the batch");return e._index}function Kn(e,t){if(t._batch!==e)throw new Is("Cannot mix BatchCond objects for different Batch objects")}function no(e){return{paramNames:e.params.map(t=>t.name),columns:e.cols,isExplain:e.isExplain,isReadonly:e.isReadonly}}var Mt,Ls;class Yl{constructor(t){b(this,Mt);D(this,"intMode");this.intMode=t}query(t){return g(this,Mt,Ls).call(this,t,!0,Vl)}queryRow(t){return g(this,Mt,Ls).call(this,t,!0,Gl)}queryValue(t){return g(this,Mt,Ls).call(this,t,!0,Hl)}run(t){return g(this,Mt,Ls).call(this,t,!1,na)}batch(t=!1){return new eo(this,t)}describe(t){const s=Qa(this._sqlOwner(),t);return this._describe(s).then(no)}sequence(t){const s=Qa(this._sqlOwner(),t);return this._sequence(s)}}Mt=new WeakSet,Ls=function(t,s,a){const n=Jl(this._sqlOwner(),t,s);return this._execute(n).then(l=>a(l,this.intMode))};class Kl{}const lo=1e3,io=10;var Ca,Dt,ns,ls,Lt,Ye,jt,Aa,Ql;class ro extends Kl{constructor(s,a,n){super();b(this,Aa);b(this,Ca);b(this,Dt);b(this,ns);b(this,ls);b(this,Lt);b(this,Ye);b(this,jt);x(this,Ca,s),x(this,Dt,a),x(this,ns,n),x(this,ls,new wa),x(this,Lt,new wa),x(this,Ye,void 0),x(this,jt,!1)}async next(){for(;;){if(i(this,Ye)!==void 0)throw new ke("Cursor is closed",i(this,Ye));for(;!i(this,jt)&&i(this,Lt).length<io;)i(this,Lt).push(g(this,Aa,Ql).call(this));const s=i(this,ls).shift();if(i(this,jt)||s!==void 0)return s;await i(this,Lt).shift().then(a=>{if(a!==void 0){for(const n of a.entries)i(this,ls).push(n);i(this,jt)||x(this,jt,a.done)}})}}_setClosed(s){i(this,Ye)===void 0&&(x(this,Ye,s),i(this,Dt)._sendCursorRequest(this,{type:"close_cursor",cursorId:i(this,ns)}).catch(()=>{}),i(this,Dt)._cursorClosed(this))}close(){this._setClosed(new U("Cursor was manually closed"))}get closed(){return i(this,Ye)!==void 0}}Ca=new WeakMap,Dt=new WeakMap,ns=new WeakMap,ls=new WeakMap,Lt=new WeakMap,Ye=new WeakMap,jt=new WeakMap,Aa=new WeakSet,Ql=function(){return i(this,Dt)._sendCursorRequest(this,{type:"fetch_cursor",cursorId:i(this,ns),maxCount:lo}).then(s=>s,s=>{this._setClosed(s)})};var X,ve,Ke,me,ut,$e,W,Wt,Za,xa,fa;const Nn=class Nn extends Yl{constructor(s,a){super(s.intMode);b(this,W);b(this,X);b(this,ve);b(this,Ke);b(this,me);b(this,ut);b(this,$e);x(this,X,s),x(this,ve,a),x(this,Ke,new wa),x(this,me,void 0),x(this,ut,!1),x(this,$e,void 0)}static open(s){const a=s._streamIdAlloc.alloc(),n=new Nn(s,a),l=()=>{},d=p=>{var o;return g(o=n,W,fa).call(o,p)},r={type:"open_stream",streamId:a};return s._sendRequest(r,{responseCallback:l,errorCallback:d}),n}client(){return i(this,X)}_sqlOwner(){return i(this,X)}_execute(s){return g(this,W,Wt).call(this,{type:"execute",streamId:i(this,ve),stmt:s}).then(a=>a.result)}_batch(s){return g(this,W,Wt).call(this,{type:"batch",streamId:i(this,ve),batch:s}).then(a=>a.result)}_describe(s){return i(this,X)._ensureVersion(2,"describe()"),g(this,W,Wt).call(this,{type:"describe",streamId:i(this,ve),sql:s.sql,sqlId:s.sqlId}).then(a=>a.result)}_sequence(s){return i(this,X)._ensureVersion(2,"sequence()"),g(this,W,Wt).call(this,{type:"sequence",streamId:i(this,ve),sql:s.sql,sqlId:s.sqlId}).then(a=>{})}getAutocommit(){return i(this,X)._ensureVersion(3,"getAutocommit()"),g(this,W,Wt).call(this,{type:"get_autocommit",streamId:i(this,ve)}).then(s=>s.isAutocommit)}_openCursor(s){return i(this,X)._ensureVersion(3,"cursor"),new Promise((a,n)=>{g(this,W,Za).call(this,{type:"cursor",batch:s,cursorCallback:a,errorCallback:n})})}_sendCursorRequest(s,a){if(s!==i(this,me))throw new kt("Cursor not associated with the stream attempted to execute a request");return new Promise((n,l)=>{i(this,$e)!==void 0?l(new ke("Stream is closed",i(this,$e))):i(this,X)._sendRequest(a,{responseCallback:n,errorCallback:l})})}_cursorClosed(s){if(s!==i(this,me))throw new kt("Cursor was closed, but it was not associated with the stream");x(this,me,void 0),g(this,W,xa).call(this)}close(){g(this,W,fa).call(this,new U("Stream was manually closed"))}closeGracefully(){x(this,ut,!0),g(this,W,xa).call(this)}get closed(){return i(this,$e)!==void 0||i(this,ut)}};X=new WeakMap,ve=new WeakMap,Ke=new WeakMap,me=new WeakMap,ut=new WeakMap,$e=new WeakMap,W=new WeakSet,Wt=function(s){return new Promise((a,n)=>{g(this,W,Za).call(this,{type:"request",request:s,responseCallback:a,errorCallback:n})})},Za=function(s){i(this,$e)!==void 0?s.errorCallback(new ke("Stream is closed",i(this,$e))):i(this,ut)?s.errorCallback(new ke("Stream is closing",void 0)):(i(this,Ke).push(s),g(this,W,xa).call(this))},xa=function(){for(;;){const s=i(this,Ke).first();if(s===void 0&&i(this,me)===void 0&&i(this,ut)){g(this,W,fa).call(this,new U("Stream was gracefully closed"));break}else if((s==null?void 0:s.type)==="request"&&i(this,me)===void 0){const{request:a,responseCallback:n,errorCallback:l}=s;i(this,Ke).shift(),i(this,X)._sendRequest(a,{responseCallback:n,errorCallback:l})}else if((s==null?void 0:s.type)==="cursor"&&i(this,me)===void 0){const{batch:a,cursorCallback:n}=s;i(this,Ke).shift();const l=i(this,X)._cursorIdAlloc.alloc(),d=new ro(i(this,X),this,l),r={type:"open_cursor",streamId:i(this,ve),cursorId:l,batch:a},p=()=>{},o=u=>d._setClosed(u);i(this,X)._sendRequest(r,{responseCallback:p,errorCallback:o}),x(this,me,d),n(d)}else break}},fa=function(s){if(i(this,$e)!==void 0)return;for(x(this,$e,s),i(this,me)!==void 0&&i(this,me)._setClosed(s);;){const d=i(this,Ke).shift();if(d!==void 0)d.errorCallback(s);else break}const a={type:"close_stream",streamId:i(this,ve)},n=()=>i(this,X)._streamIdAlloc.free(i(this,ve)),l=()=>{};i(this,X)._sendRequest(a,{responseCallback:n,errorCallback:l})};let Xa=Nn;function gn(e,t){t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId),e.arrayObjects("args",t.args,Xl),e.arrayObjects("named_args",t.namedArgs,oo),e.boolean("want_rows",t.wantRows)}function oo(e,t){e.string("name",t.name),e.object("value",t.value,Xl)}function va(e,t){e.arrayObjects("steps",t.steps,co)}function co(e,t){t.condition!==void 0&&e.object("condition",t.condition,en),e.object("stmt",t.stmt,gn)}function en(e,t){if(e.stringRaw("type",t.type),t.type==="ok"||t.type==="error")e.number("step",t.step);else if(t.type==="not")e.object("cond",t.cond,en);else if(t.type==="and"||t.type==="or")e.arrayObjects("conds",t.conds,en);else if(t.type!=="is_autocommit")throw V(t,"Impossible type of BatchCond")}function Xl(e,t){if(t===null)e.stringRaw("type","null");else if(typeof t=="bigint")e.stringRaw("type","integer"),e.stringRaw("value",""+t);else if(typeof t=="number")e.stringRaw("type","float"),e.number("value",t);else if(typeof t=="string")e.stringRaw("type","text"),e.string("value",t);else if(t instanceof Uint8Array)e.stringRaw("type","blob"),e.stringRaw("base64",bn.fromUint8Array(t));else if(t!==void 0)throw V(t,"Impossible type of Value")}function po(e,t){if(e.stringRaw("type",t.type),t.type==="hello")t.jwt!==void 0&&e.string("jwt",t.jwt);else if(t.type==="request")e.number("request_id",t.requestId),e.object("request",t.request,uo);else throw V(t,"Impossible type of ClientMsg")}function uo(e,t){if(e.stringRaw("type",t.type),t.type==="open_stream")e.number("stream_id",t.streamId);else if(t.type==="close_stream")e.number("stream_id",t.streamId);else if(t.type==="execute")e.number("stream_id",t.streamId),e.object("stmt",t.stmt,gn);else if(t.type==="batch")e.number("stream_id",t.streamId),e.object("batch",t.batch,va);else if(t.type==="open_cursor")e.number("stream_id",t.streamId),e.number("cursor_id",t.cursorId),e.object("batch",t.batch,va);else if(t.type==="close_cursor")e.number("cursor_id",t.cursorId);else if(t.type==="fetch_cursor")e.number("cursor_id",t.cursorId),e.number("max_count",t.maxCount);else if(t.type==="sequence")e.number("stream_id",t.streamId),t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="describe")e.number("stream_id",t.streamId),t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="store_sql")e.number("sql_id",t.sqlId),e.string("sql",t.sql);else if(t.type==="close_sql")e.number("sql_id",t.sqlId);else if(t.type==="get_autocommit")e.number("stream_id",t.streamId);else throw V(t,"Impossible type of Request")}function wn(e,t){t.sql!==void 0&&e.string(1,t.sql),t.sqlId!==void 0&&e.int32(2,t.sqlId);for(const s of t.args)e.message(3,s,Zl);for(const s of t.namedArgs)e.message(4,s,xo);e.bool(5,t.wantRows)}function xo(e,t){e.string(1,t.name),e.message(2,t.value,Zl)}function Ta(e,t){for(const s of t.steps)e.message(1,s,fo)}function fo(e,t){t.condition!==void 0&&e.message(1,t.condition,vn),e.message(2,t.stmt,wn)}function vn(e,t){if(t.type==="ok")e.uint32(1,t.step);else if(t.type==="error")e.uint32(2,t.step);else if(t.type==="not")e.message(3,t.cond,vn);else if(t.type==="and")e.message(4,t.conds,Qn);else if(t.type==="or")e.message(5,t.conds,Qn);else if(t.type==="is_autocommit")e.message(6,void 0,ei);else throw V(t,"Impossible type of BatchCond")}function Qn(e,t){for(const s of t)e.message(1,s,vn)}function Zl(e,t){if(t===null)e.message(1,void 0,ei);else if(typeof t=="bigint")e.sint64(2,t);else if(typeof t=="number")e.double(3,t);else if(typeof t=="string")e.string(4,t);else if(t instanceof Uint8Array)e.bytes(5,t);else if(t!==void 0)throw V(t,"Impossible type of Value")}function ei(e,t){}function bo(e,t){if(t.type==="hello")e.message(1,t,ho);else if(t.type==="request")e.message(2,t,mo);else throw V(t,"Impossible type of ClientMsg")}function ho(e,t){t.jwt!==void 0&&e.string(1,t.jwt)}function mo(e,t){e.int32(1,t.requestId);const s=t.request;if(s.type==="open_stream")e.message(2,s,go);else if(s.type==="close_stream")e.message(3,s,wo);else if(s.type==="execute")e.message(4,s,vo);else if(s.type==="batch")e.message(5,s,yo);else if(s.type==="open_cursor")e.message(6,s,ko);else if(s.type==="close_cursor")e.message(7,s,_o);else if(s.type==="fetch_cursor")e.message(8,s,So);else if(s.type==="sequence")e.message(9,s,Io);else if(s.type==="describe")e.message(10,s,$o);else if(s.type==="store_sql")e.message(11,s,Co);else if(s.type==="close_sql")e.message(12,s,Ao);else if(s.type==="get_autocommit")e.message(13,s,Ro);else throw V(s,"Impossible type of Request")}function go(e,t){e.int32(1,t.streamId)}function wo(e,t){e.int32(1,t.streamId)}function vo(e,t){e.int32(1,t.streamId),e.message(2,t.stmt,wn)}function yo(e,t){e.int32(1,t.streamId),e.message(2,t.batch,Ta)}function ko(e,t){e.int32(1,t.streamId),e.int32(2,t.cursorId),e.message(3,t.batch,Ta)}function _o(e,t){e.int32(1,t.cursorId)}function So(e,t){e.int32(1,t.cursorId),e.uint32(2,t.maxCount)}function Io(e,t){e.int32(1,t.streamId),t.sql!==void 0&&e.string(2,t.sql),t.sqlId!==void 0&&e.int32(3,t.sqlId)}function $o(e,t){e.int32(1,t.streamId),t.sql!==void 0&&e.string(2,t.sql),t.sqlId!==void 0&&e.int32(3,t.sqlId)}function Co(e,t){e.int32(1,t.sqlId),e.string(2,t.sql)}function Ao(e,t){e.int32(1,t.sqlId)}function Ro(e,t){e.int32(1,t.streamId)}function ks(e){const t=Me(e.message),s=Le(e.code);return{message:t,code:s}}function yn(e){const t=_t(e.cols,ti),s=ga(e.rows).map(d=>_t(d,li)),a=Ut(e.affected_row_count),n=Le(e.last_insert_rowid),l=n!==void 0?BigInt(n):void 0;return{cols:t,rows:s,affectedRowCount:a,lastInsertRowid:l}}function ti(e){const t=Le(e.name),s=Le(e.decltype);return{name:t,decltype:s}}function si(e){const t=new Map;ga(e.step_results).forEach((a,n)=>{a!==null&&t.set(n,yn(ee(a)))});const s=new Map;return ga(e.step_errors).forEach((a,n)=>{a!==null&&s.set(n,ks(ee(a)))}),{stepResults:t,stepErrors:s}}function ai(e){const t=Me(e.type);if(t==="step_begin"){const s=Ut(e.step),a=_t(e.cols,ti);return{type:"step_begin",step:s,cols:a}}else if(t==="step_end"){const s=Ut(e.affected_row_count),a=Le(e.last_insert_rowid),n=a!==void 0?BigInt(a):void 0;return{type:"step_end",affectedRowCount:s,lastInsertRowid:n}}else if(t==="step_error"){const s=Ut(e.step),a=ks(ee(e.error));return{type:"step_error",step:s,error:a}}else{if(t==="row")return{type:"row",row:_t(e.row,li)};if(t==="error")return{type:"error",error:ks(ee(e.error))};throw new R("Unexpected type of CursorEntry")}}function ni(e){const t=_t(e.params,Eo),s=_t(e.cols,To),a=Fs(e.is_explain),n=Fs(e.is_readonly);return{params:t,cols:s,isExplain:a,isReadonly:n}}function Eo(e){return{name:Le(e.name)}}function To(e){const t=Me(e.name),s=Le(e.decltype);return{name:t,decltype:s}}function li(e){const t=Me(e.type);if(t==="null")return null;if(t==="integer"){const s=Me(e.value);return BigInt(s)}else{if(t==="float")return Ut(e.value);if(t==="text")return Me(e.value);if(t==="blob")return bn.toUint8Array(Me(e.base64));throw new R("Unexpected type of Value")}}function Mo(e){const t=Me(e.type);if(t==="hello_ok")return{type:"hello_ok"};if(t==="hello_error")return{type:"hello_error",error:ks(ee(e.error))};if(t==="response_ok"){const s=Ut(e.request_id),a=Do(ee(e.response));return{type:"response_ok",requestId:s,response:a}}else if(t==="response_error"){const s=Ut(e.request_id),a=ks(ee(e.error));return{type:"response_error",requestId:s,error:a}}else throw new R("Unexpected type of ServerMsg")}function Do(e){const t=Me(e.type);if(t==="open_stream")return{type:"open_stream"};if(t==="close_stream")return{type:"close_stream"};if(t==="execute")return{type:"execute",result:yn(ee(e.result))};if(t==="batch")return{type:"batch",result:si(ee(e.result))};if(t==="open_cursor")return{type:"open_cursor"};if(t==="close_cursor")return{type:"close_cursor"};if(t==="fetch_cursor"){const s=_t(e.entries,ai),a=Fs(e.done);return{type:"fetch_cursor",entries:s,done:a}}else{if(t==="sequence")return{type:"sequence"};if(t==="describe")return{type:"describe",result:ni(ee(e.result))};if(t==="store_sql")return{type:"store_sql"};if(t==="close_sql")return{type:"close_sql"};if(t==="get_autocommit")return{type:"get_autocommit",isAutocommit:Fs(e.is_autocommit)};throw new R("Unexpected type of Response")}}const Ue={default(){return{message:"",code:void 0}},1(e,t){t.message=e.string()},2(e,t){t.code=e.string()}},_s={default(){return{cols:[],rows:[],affectedRowCount:0,lastInsertRowid:void 0}},1(e,t){t.cols.push(e.message(ii))},2(e,t){t.rows.push(e.message(ri))},3(e,t){t.affectedRowCount=Number(e.uint64())},4(e,t){t.lastInsertRowid=e.sint64()}},ii={default(){return{name:void 0,decltype:void 0}},1(e,t){t.name=e.string()},2(e,t){t.decltype=e.string()}},ri={default(){return[]},1(e,t){t.push(e.message(Fo))}},ya={default(){return{stepResults:new Map,stepErrors:new Map}},1(e,t){const[s,a]=e.message(Lo);t.stepResults.set(s,a)},2(e,t){const[s,a]=e.message(jo);t.stepErrors.set(s,a)}},Lo={default(){return[0,_s.default()]},1(e,t){t[0]=e.uint32()},2(e,t){t[1]=e.message(_s)}},jo={default(){return[0,Ue.default()]},1(e,t){t[0]=e.uint32()},2(e,t){t[1]=e.message(Ue)}},oi={default(){return{type:"none"}},1(e){return e.message(qo)},2(e){return e.message(Oo)},3(e){return e.message(Po)},4(e){return{type:"row",row:e.message(ri)}},5(e){return{type:"error",error:e.message(Ue)}}},qo={default(){return{type:"step_begin",step:0,cols:[]}},1(e,t){t.step=e.uint32()},2(e,t){t.cols.push(e.message(ii))}},Oo={default(){return{type:"step_end",affectedRowCount:0,lastInsertRowid:void 0}},1(e,t){t.affectedRowCount=e.uint32()},2(e,t){t.lastInsertRowid=e.uint64()}},Po={default(){return{type:"step_error",step:0,error:Ue.default()}},1(e,t){t.step=e.uint32()},2(e,t){t.error=e.message(Ue)}},ka={default(){return{params:[],cols:[],isExplain:!1,isReadonly:!1}},1(e,t){t.params.push(e.message(No))},2(e,t){t.cols.push(e.message(Bo))},3(e,t){t.isExplain=e.bool()},4(e,t){t.isReadonly=e.bool()}},No={default(){return{name:void 0}},1(e,t){t.name=e.string()}},Bo={default(){return{name:"",decltype:void 0}},1(e,t){t.name=e.string()},2(e,t){t.decltype=e.string()}},Fo={default(){},1(e){return null},2(e){return e.sint64()},3(e){return e.double()},4(e){return e.string()},5(e){return e.bytes()}},Uo={default(){return{type:"none"}},1(e){return{type:"hello_ok"}},2(e){return e.message(Vo)},3(e){return e.message(Ho)},4(e){return e.message(Go)}},Vo={default(){return{type:"hello_error",error:Ue.default()}},1(e,t){t.error=e.message(Ue)}},Go={default(){return{type:"response_error",requestId:0,error:Ue.default()}},1(e,t){t.requestId=e.int32()},2(e,t){t.error=e.message(Ue)}},Ho={default(){return{type:"response_ok",requestId:0,response:{type:"none"}}},1(e,t){t.requestId=e.int32()},2(e,t){t.response={type:"open_stream"}},3(e,t){t.response={type:"close_stream"}},4(e,t){t.response=e.message(Wo)},5(e,t){t.response=e.message(zo)},6(e,t){t.response={type:"open_cursor"}},7(e,t){t.response={type:"close_cursor"}},8(e,t){t.response=e.message(Jo)},9(e,t){t.response={type:"sequence"}},10(e,t){t.response=e.message(Yo)},11(e,t){t.response={type:"store_sql"}},12(e,t){t.response={type:"close_sql"}},13(e,t){t.response=e.message(Ko)}},Wo={default(){return{type:"execute",result:_s.default()}},1(e,t){t.result=e.message(_s)}},zo={default(){return{type:"batch",result:ya.default()}},1(e,t){t.result=e.message(ya)}},Jo={default(){return{type:"fetch_cursor",entries:[],done:!1}},1(e,t){t.entries.push(e.message(oi))},2(e,t){t.done=e.bool()}},Yo={default(){return{type:"describe",result:ka.default()}},1(e,t){t.result=e.message(ka)}},Ko={default(){return{type:"get_autocommit",isAutocommit:!1}},1(e,t){t.isAutocommit=e.bool()}},Qo=new Map([["hrana2",{version:2,encoding:"json"}],["hrana1",{version:1,encoding:"json"}]]),ci=new Map([["hrana3-protobuf",{version:3,encoding:"protobuf"}],["hrana3",{version:3,encoding:"json"}],["hrana2",{version:2,encoding:"json"}],["hrana1",{version:1,encoding:"json"}]]);var te,Pe,qt,ce,Ot,de,is,Ce,xt,rs,q,tn,di,sn,pi,ui,je,xi,fi,hl;let Xo=(hl=class extends ql{constructor(s,a){super();b(this,q);b(this,te);b(this,Pe);b(this,qt);b(this,ce);b(this,Ot);b(this,de);b(this,is);b(this,Ce);b(this,xt);D(this,"_streamIdAlloc");D(this,"_cursorIdAlloc");b(this,rs);x(this,te,s),x(this,Pe,[]),x(this,qt,!1),x(this,ce,void 0),x(this,Ot,!1),x(this,de,void 0),x(this,is,!1),x(this,Ce,new Map),x(this,xt,new Ms),this._streamIdAlloc=new Ms,this._cursorIdAlloc=new Ms,x(this,rs,new Ms),i(this,te).binaryType="arraybuffer",i(this,te).addEventListener("open",()=>g(this,q,di).call(this)),i(this,te).addEventListener("close",n=>g(this,q,ui).call(this,n)),i(this,te).addEventListener("error",n=>g(this,q,pi).call(this,n)),i(this,te).addEventListener("message",n=>g(this,q,xi).call(this,n)),g(this,q,tn).call(this,{type:"hello",jwt:a})}getVersion(){return new Promise((s,a)=>{if(x(this,is,!0),i(this,ce)!==void 0)a(i(this,ce));else if(i(this,qt))s(i(this,de).version);else{const n=()=>s(i(this,de).version);i(this,Pe).push({openCallback:n,errorCallback:a})}})}_ensureVersion(s,a){if(i(this,de)===void 0||!i(this,is))throw new vs(`${a} is supported only on protocol version ${s} and higher, but the version supported by the WebSocket server is not yet known. Use Client.getVersion() to wait until the version is available.`);if(i(this,de).version<s)throw new vs(`${a} is supported on protocol version ${s} and higher, but the WebSocket server only supports version ${i(this,de).version}`)}_sendRequest(s,a){if(i(this,ce)!==void 0){a.errorCallback(new ke("Client is closed",i(this,ce)));return}const n=i(this,xt).alloc();i(this,Ce).set(n,{...a,type:s.type}),g(this,q,tn).call(this,{type:"request",requestId:n,request:s})}openStream(){return Xa.open(this)}storeSql(s){this._ensureVersion(2,"storeSql()");const a=i(this,rs).alloc(),n=new mn(this,a),l=()=>{},d=p=>n._setClosed(p),r={type:"store_sql",sqlId:a,sql:s};return this._sendRequest(r,{responseCallback:l,errorCallback:d}),n}_closeSql(s){if(i(this,ce)!==void 0)return;const a=()=>i(this,rs).free(s),n=d=>g(this,q,je).call(this,d),l={type:"close_sql",sqlId:s};this._sendRequest(l,{responseCallback:a,errorCallback:n})}close(){g(this,q,je).call(this,new U("Client was manually closed"))}get closed(){return i(this,ce)!==void 0}},te=new WeakMap,Pe=new WeakMap,qt=new WeakMap,ce=new WeakMap,Ot=new WeakMap,de=new WeakMap,is=new WeakMap,Ce=new WeakMap,xt=new WeakMap,rs=new WeakMap,q=new WeakSet,tn=function(s){if(i(this,ce)!==void 0)throw new kt("Trying to send a message on a closed client");if(i(this,qt))g(this,q,sn).call(this,s);else{const a=()=>g(this,q,sn).call(this,s),n=()=>{};i(this,Pe).push({openCallback:a,errorCallback:n})}},di=function(){const s=i(this,te).protocol;if(s===void 0){g(this,q,je).call(this,new U("The `WebSocket.protocol` property is undefined. This most likely means that the WebSocket implementation provided by the environment is broken. If you are using Miniflare 2, please update to Miniflare 3, which fixes this problem."));return}else if(s==="")x(this,de,{version:1,encoding:"json"});else if(x(this,de,ci.get(s)),i(this,de)===void 0){g(this,q,je).call(this,new R(`Unrecognized WebSocket subprotocol: ${JSON.stringify(s)}`));return}for(const a of i(this,Pe))a.openCallback();i(this,Pe).length=0,x(this,qt,!0)},sn=function(s){const a=i(this,de).encoding;if(a==="json"){const n=Nl(s,po);i(this,te).send(n)}else if(a==="protobuf"){const n=Fl(s,bo);i(this,te).send(n)}else throw V(a,"Impossible encoding")},pi=function(s){const n=s.message??"WebSocket was closed due to an error";g(this,q,je).call(this,new za(n))},ui=function(s){let a=`WebSocket was closed with code ${s.code}`;s.reason&&(a+=`: ${s.reason}`),g(this,q,je).call(this,new za(a))},je=function(s){if(i(this,ce)===void 0){x(this,ce,s);for(const a of i(this,Pe))a.errorCallback(s);i(this,Pe).length=0;for(const[a,n]of i(this,Ce).entries())n.errorCallback(s),i(this,xt).free(a);i(this,Ce).clear(),i(this,te).close()}},xi=function(s){if(i(this,ce)===void 0)try{let a;const n=i(this,de).encoding;if(n==="json"){if(typeof s.data!="string"){i(this,te).close(3003,"Only text messages are accepted with JSON encoding"),g(this,q,je).call(this,new R("Received non-text message from server with JSON encoding"));return}a=hn(JSON.parse(s.data),Mo)}else if(n==="protobuf"){if(!(s.data instanceof ArrayBuffer)){i(this,te).close(3003,"Only binary messages are accepted with Protobuf encoding"),g(this,q,je).call(this,new R("Received non-binary message from server with Protobuf encoding"));return}a=Ea(new Uint8Array(s.data),Uo)}else throw V(n,"Impossible encoding");g(this,q,fi).call(this,a)}catch(a){i(this,te).close(3007,"Could not handle message"),g(this,q,je).call(this,a)}},fi=function(s){if(s.type==="none")throw new R("Received an unrecognized ServerMsg");if(s.type==="hello_ok"||s.type==="hello_error"){if(i(this,Ot))throw new R("Received a duplicated hello response");if(x(this,Ot,!0),s.type==="hello_error")throw ys(s.error);return}else if(!i(this,Ot))throw new R("Received a non-hello message before a hello response");if(s.type==="response_ok"){const a=s.requestId,n=i(this,Ce).get(a);if(i(this,Ce).delete(a),n===void 0)throw new R("Received unexpected OK response");i(this,xt).free(a);try{if(n.type!==s.response.type)throw console.dir({responseState:n,msg:s}),new R("Received unexpected type of response");n.responseCallback(s.response)}catch(l){throw n.errorCallback(l),l}}else if(s.type==="response_error"){const a=s.requestId,n=i(this,Ce).get(a);if(i(this,Ce).delete(a),n===void 0)throw new R("Received unexpected error response");i(this,xt).free(a),n.errorCallback(ys(s.error))}else throw V(s,"Impossible ServerMsg type")},hl);var oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var an={exports:{}};(function(e,t){var s=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof oa<"u"&&oa,a=function(){function l(){this.fetch=!1,this.DOMException=s.DOMException}return l.prototype=s,new l}();(function(l){(function(d){var r=typeof l<"u"&&l||typeof self<"u"&&self||typeof oa<"u"&&oa||{},p={searchParams:"URLSearchParams"in r,iterable:"Symbol"in r&&"iterator"in Symbol,blob:"FileReader"in r&&"Blob"in r&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in r,arrayBuffer:"ArrayBuffer"in r};function o(f){return f&&DataView.prototype.isPrototypeOf(f)}if(p.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],h=ArrayBuffer.isView||function(f){return f&&u.indexOf(Object.prototype.toString.call(f))>-1};function w(f){if(typeof f!="string"&&(f=String(f)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(f)||f==="")throw new TypeError('Invalid character in header field name: "'+f+'"');return f.toLowerCase()}function v(f){return typeof f!="string"&&(f=String(f)),f}function m(f){var y={next:function(){var A=f.shift();return{done:A===void 0,value:A}}};return p.iterable&&(y[Symbol.iterator]=function(){return y}),y}function S(f){this.map={},f instanceof S?f.forEach(function(y,A){this.append(A,y)},this):Array.isArray(f)?f.forEach(function(y){if(y.length!=2)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+y.length);this.append(y[0],y[1])},this):f&&Object.getOwnPropertyNames(f).forEach(function(y){this.append(y,f[y])},this)}S.prototype.append=function(f,y){f=w(f),y=v(y);var A=this.map[f];this.map[f]=A?A+", "+y:y},S.prototype.delete=function(f){delete this.map[w(f)]},S.prototype.get=function(f){return f=w(f),this.has(f)?this.map[f]:null},S.prototype.has=function(f){return this.map.hasOwnProperty(w(f))},S.prototype.set=function(f,y){this.map[w(f)]=v(y)},S.prototype.forEach=function(f,y){for(var A in this.map)this.map.hasOwnProperty(A)&&f.call(y,this.map[A],A,this)},S.prototype.keys=function(){var f=[];return this.forEach(function(y,A){f.push(A)}),m(f)},S.prototype.values=function(){var f=[];return this.forEach(function(y){f.push(y)}),m(f)},S.prototype.entries=function(){var f=[];return this.forEach(function(y,A){f.push([A,y])}),m(f)},p.iterable&&(S.prototype[Symbol.iterator]=S.prototype.entries);function _(f){if(!f._noBody){if(f.bodyUsed)return Promise.reject(new TypeError("Already read"));f.bodyUsed=!0}}function k(f){return new Promise(function(y,A){f.onload=function(){y(f.result)},f.onerror=function(){A(f.error)}})}function P(f){var y=new FileReader,A=k(y);return y.readAsArrayBuffer(f),A}function G(f){var y=new FileReader,A=k(y),O=/charset=([A-Za-z0-9_-]+)/.exec(f.type),N=O?O[1]:"utf-8";return y.readAsText(f,N),A}function Cs(f){for(var y=new Uint8Array(f),A=new Array(y.length),O=0;O<y.length;O++)A[O]=String.fromCharCode(y[O]);return A.join("")}function Gt(f){if(f.slice)return f.slice(0);var y=new Uint8Array(f.byteLength);return y.set(new Uint8Array(f)),y.buffer}function Bn(){return this.bodyUsed=!1,this._initBody=function(f){this.bodyUsed=this.bodyUsed,this._bodyInit=f,f?typeof f=="string"?this._bodyText=f:p.blob&&Blob.prototype.isPrototypeOf(f)?this._bodyBlob=f:p.formData&&FormData.prototype.isPrototypeOf(f)?this._bodyFormData=f:p.searchParams&&URLSearchParams.prototype.isPrototypeOf(f)?this._bodyText=f.toString():p.arrayBuffer&&p.blob&&o(f)?(this._bodyArrayBuffer=Gt(f.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):p.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(f)||h(f))?this._bodyArrayBuffer=Gt(f):this._bodyText=f=Object.prototype.toString.call(f):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||(typeof f=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):p.searchParams&&URLSearchParams.prototype.isPrototypeOf(f)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},p.blob&&(this.blob=function(){var f=_(this);if(f)return f;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var f=_(this);return f||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else{if(p.blob)return this.blob().then(P);throw new Error("could not read as ArrayBuffer")}},this.text=function(){var f=_(this);if(f)return f;if(this._bodyBlob)return G(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(Cs(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},p.formData&&(this.formData=function(){return this.text().then(Pi)}),this.json=function(){return this.text().then(JSON.parse)},this}var qi=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function Oi(f){var y=f.toUpperCase();return qi.indexOf(y)>-1?y:f}function rt(f,y){if(!(this instanceof rt))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');y=y||{};var A=y.body;if(f instanceof rt){if(f.bodyUsed)throw new TypeError("Already read");this.url=f.url,this.credentials=f.credentials,y.headers||(this.headers=new S(f.headers)),this.method=f.method,this.mode=f.mode,this.signal=f.signal,!A&&f._bodyInit!=null&&(A=f._bodyInit,f.bodyUsed=!0)}else this.url=String(f);if(this.credentials=y.credentials||this.credentials||"same-origin",(y.headers||!this.headers)&&(this.headers=new S(y.headers)),this.method=Oi(y.method||this.method||"GET"),this.mode=y.mode||this.mode||null,this.signal=y.signal||this.signal||function(){if("AbortController"in r){var E=new AbortController;return E.signal}}(),this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&A)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(A),(this.method==="GET"||this.method==="HEAD")&&(y.cache==="no-store"||y.cache==="no-cache")){var O=/([?&])_=[^&]*/;if(O.test(this.url))this.url=this.url.replace(O,"$1_="+new Date().getTime());else{var N=/\?/;this.url+=(N.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}rt.prototype.clone=function(){return new rt(this,{body:this._bodyInit})};function Pi(f){var y=new FormData;return f.trim().split("&").forEach(function(A){if(A){var O=A.split("="),N=O.shift().replace(/\+/g," "),E=O.join("=").replace(/\+/g," ");y.append(decodeURIComponent(N),decodeURIComponent(E))}}),y}function Ni(f){var y=new S,A=f.replace(/\r?\n[\t ]+/g," ");return A.split("\r").map(function(O){return O.indexOf(`
`)===0?O.substr(1,O.length):O}).forEach(function(O){var N=O.split(":"),E=N.shift().trim();if(E){var ia=N.join(":").trim();try{y.append(E,ia)}catch(qa){console.warn("Response "+qa.message)}}}),y}Bn.call(rt.prototype);function _e(f,y){if(!(this instanceof _e))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(y||(y={}),this.type="default",this.status=y.status===void 0?200:y.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=y.statusText===void 0?"":""+y.statusText,this.headers=new S(y.headers),this.url=y.url||"",this._initBody(f)}Bn.call(_e.prototype),_e.prototype.clone=function(){return new _e(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new S(this.headers),url:this.url})},_e.error=function(){var f=new _e(null,{status:200,statusText:""});return f.ok=!1,f.status=0,f.type="error",f};var Bi=[301,302,303,307,308];_e.redirect=function(f,y){if(Bi.indexOf(y)===-1)throw new RangeError("Invalid status code");return new _e(null,{status:y,headers:{location:f}})},d.DOMException=r.DOMException;try{new d.DOMException}catch{d.DOMException=function(y,A){this.message=y,this.name=A;var O=Error(y);this.stack=O.stack},d.DOMException.prototype=Object.create(Error.prototype),d.DOMException.prototype.constructor=d.DOMException}function ja(f,y){return new Promise(function(A,O){var N=new rt(f,y);if(N.signal&&N.signal.aborted)return O(new d.DOMException("Aborted","AbortError"));var E=new XMLHttpRequest;function ia(){E.abort()}E.onload=function(){var Q={statusText:E.statusText,headers:Ni(E.getAllResponseHeaders()||"")};N.url.indexOf("file://")===0&&(E.status<200||E.status>599)?Q.status=200:Q.status=E.status,Q.url="responseURL"in E?E.responseURL:Q.headers.get("X-Request-URL");var It="response"in E?E.response:E.responseText;setTimeout(function(){A(new _e(It,Q))},0)},E.onerror=function(){setTimeout(function(){O(new TypeError("Network request failed"))},0)},E.ontimeout=function(){setTimeout(function(){O(new TypeError("Network request timed out"))},0)},E.onabort=function(){setTimeout(function(){O(new d.DOMException("Aborted","AbortError"))},0)};function qa(Q){try{return Q===""&&r.location.href?r.location.href:Q}catch{return Q}}if(E.open(N.method,qa(N.url),!0),N.credentials==="include"?E.withCredentials=!0:N.credentials==="omit"&&(E.withCredentials=!1),"responseType"in E&&(p.blob?E.responseType="blob":p.arrayBuffer&&(E.responseType="arraybuffer")),y&&typeof y.headers=="object"&&!(y.headers instanceof S||r.Headers&&y.headers instanceof r.Headers)){var Fn=[];Object.getOwnPropertyNames(y.headers).forEach(function(Q){Fn.push(w(Q)),E.setRequestHeader(Q,v(y.headers[Q]))}),N.headers.forEach(function(Q,It){Fn.indexOf(It)===-1&&E.setRequestHeader(It,Q)})}else N.headers.forEach(function(Q,It){E.setRequestHeader(It,Q)});N.signal&&(N.signal.addEventListener("abort",ia),E.onreadystatechange=function(){E.readyState===4&&N.signal.removeEventListener("abort",ia)}),E.send(typeof N._bodyInit>"u"?null:N._bodyInit)})}return ja.polyfill=!0,r.fetch||(r.fetch=ja,r.Headers=S,r.Request=rt,r.Response=_e),d.Headers=S,d.Request=rt,d.Response=_e,d.fetch=ja,d})({})})(a),a.fetch.ponyfill=!0,delete a.fetch.polyfill;var n=s.fetch?s:a;t=n.fetch,t.default=n.fetch,t.fetch=n.fetch,t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response,e.exports=t})(an,an.exports);var _a=an.exports;let Yt;if(typeof queueMicrotask<"u")Yt=queueMicrotask;else{const e=Promise.resolve();Yt=t=>{e.then(t)}}var ge,Ae,pe,Ra,bi;class ec{constructor(t){b(this,Ra);b(this,ge);b(this,Ae);b(this,pe);x(this,ge,new Uint8Array(new ArrayBuffer(t))),x(this,Ae,0),x(this,pe,0)}get length(){return i(this,pe)-i(this,Ae)}data(){return i(this,ge).slice(i(this,Ae),i(this,pe))}push(t){g(this,Ra,bi).call(this,t.byteLength),i(this,ge).set(t,i(this,pe)),x(this,pe,i(this,pe)+t.byteLength)}shift(t){x(this,Ae,i(this,Ae)+t)}}ge=new WeakMap,Ae=new WeakMap,pe=new WeakMap,Ra=new WeakSet,bi=function(t){if(i(this,pe)+t<=i(this,ge).byteLength)return;const s=i(this,pe)-i(this,Ae);if(s+t<=i(this,ge).byteLength&&2*i(this,pe)>=i(this,ge).byteLength)i(this,ge).copyWithin(0,i(this,Ae),i(this,pe));else{let a=i(this,ge).byteLength;do a*=2;while(s+t>a);const n=new Uint8Array(new ArrayBuffer(a));n.set(i(this,ge).slice(i(this,Ae),i(this,pe)),0),x(this,ge,n)}x(this,pe,s),x(this,Ae,0)};function tc(e){const t=Le(e.baton),s=Le(e.base_url),a=_t(e.results,sc);return{baton:t,baseUrl:s,results:a}}function sc(e){const t=Me(e.type);if(t==="ok")return{type:"ok",response:ac(ee(e.response))};if(t==="error")return{type:"error",error:ks(ee(e.error))};throw new R("Unexpected type of StreamResult")}function ac(e){const t=Me(e.type);if(t==="close")return{type:"close"};if(t==="execute")return{type:"execute",result:yn(ee(e.result))};if(t==="batch")return{type:"batch",result:si(ee(e.result))};if(t==="sequence")return{type:"sequence"};if(t==="describe")return{type:"describe",result:ni(ee(e.result))};if(t==="store_sql")return{type:"store_sql"};if(t==="close_sql")return{type:"close_sql"};if(t==="get_autocommit")return{type:"get_autocommit",isAutocommit:Fs(e.is_autocommit)};throw new R("Unexpected type of StreamResponse")}function nc(e){const t=Le(e.baton),s=Le(e.base_url);return{baton:t,baseUrl:s}}const lc={default(){return{baton:void 0,baseUrl:void 0,results:[]}},1(e,t){t.baton=e.string()},2(e,t){t.baseUrl=e.string()},3(e,t){t.results.push(e.message(ic))}},ic={default(){return{type:"none"}},1(e){return{type:"ok",response:e.message(rc)}},2(e){return{type:"error",error:e.message(Ue)}}},rc={default(){return{type:"none"}},1(e){return{type:"close"}},2(e){return e.message(oc)},3(e){return e.message(cc)},4(e){return{type:"sequence"}},5(e){return e.message(dc)},6(e){return{type:"store_sql"}},7(e){return{type:"close_sql"}},8(e){return e.message(pc)}},oc={default(){return{type:"execute",result:_s.default()}},1(e,t){t.result=e.message(_s)}},cc={default(){return{type:"batch",result:ya.default()}},1(e,t){t.result=e.message(ya)}},dc={default(){return{type:"describe",result:ka.default()}},1(e,t){t.result=e.message(ka)}},pc={default(){return{type:"get_autocommit",isAutocommit:!1}},1(e,t){t.isAutocommit=e.bool()}},uc={default(){return{baton:void 0,baseUrl:void 0}},1(e,t){t.baton=e.string()},2(e,t){t.baseUrl=e.string()}};var Gs,Pt,Qe,Ne,Xe,os,it,nn,hi,mi;class xc extends Kl{constructor(s,a){super();b(this,it);b(this,Gs);b(this,Pt);b(this,Qe);b(this,Ne);b(this,Xe);b(this,os);x(this,Gs,s),x(this,Pt,a),x(this,Qe,void 0),x(this,Ne,new ec(16*1024)),x(this,Xe,void 0),x(this,os,!1)}async open(s){if(s.body===null)throw new R("No response body for cursor request");x(this,Qe,s.body[Symbol.asyncIterator]());const a=await g(this,it,nn).call(this,nc,uc);if(a===void 0)throw new R("Empty response to cursor request");return a}next(){return g(this,it,nn).call(this,ai,oi)}close(){this._setClosed(new U("Cursor was manually closed"))}_setClosed(s){i(this,Xe)===void 0&&(x(this,Xe,s),i(this,Gs)._cursorClosed(this),i(this,Qe)!==void 0&&i(this,Qe).return())}get closed(){return i(this,Xe)!==void 0}}Gs=new WeakMap,Pt=new WeakMap,Qe=new WeakMap,Ne=new WeakMap,Xe=new WeakMap,os=new WeakMap,it=new WeakSet,nn=async function(s,a){for(;;){if(i(this,os))return;if(i(this,Xe)!==void 0)throw new ke("Cursor is closed",i(this,Xe));if(i(this,Pt)==="json"){const d=g(this,it,hi).call(this);if(d!==void 0){const r=new TextDecoder().decode(d),p=JSON.parse(r);return hn(p,s)}}else if(i(this,Pt)==="protobuf"){const d=g(this,it,mi).call(this);if(d!==void 0)return Ea(d,a)}else throw V(i(this,Pt),"Impossible encoding");if(i(this,Qe)===void 0)throw new kt("Attempted to read from HTTP cursor before it was opened");const{value:n,done:l}=await i(this,Qe).next();if(l&&i(this,Ne).length===0)x(this,os,!0);else{if(l)throw new R("Unexpected end of cursor stream");i(this,Ne).push(n)}}},hi=function(){const s=i(this,Ne).data(),n=s.indexOf(10);if(n<0)return;const l=s.slice(0,n);return i(this,Ne).shift(n+1),l},mi=function(){const s=i(this,Ne).data();let a=0,n=0;for(;;){if(n>=s.byteLength)return;const d=s[n];if(a|=(d&127)<<7*n,n+=1,!(d&128))break}if(s.byteLength<n+a)return;const l=s.slice(n,n+a);return i(this,Ne).shift(n+a),l};function fc(e,t){t.baton!==void 0&&e.string("baton",t.baton),e.arrayObjects("requests",t.requests,bc)}function bc(e,t){if(e.stringRaw("type",t.type),t.type!=="close"){if(t.type==="execute")e.object("stmt",t.stmt,gn);else if(t.type==="batch")e.object("batch",t.batch,va);else if(t.type==="sequence")t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="describe")t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="store_sql")e.number("sql_id",t.sqlId),e.string("sql",t.sql);else if(t.type==="close_sql")e.number("sql_id",t.sqlId);else if(t.type!=="get_autocommit")throw V(t,"Impossible type of StreamRequest")}}function hc(e,t){t.baton!==void 0&&e.string("baton",t.baton),e.object("batch",t.batch,va)}function mc(e,t){t.baton!==void 0&&e.string(1,t.baton);for(const s of t.requests)e.message(2,s,gc)}function gc(e,t){if(t.type==="close")e.message(1,t,wc);else if(t.type==="execute")e.message(2,t,vc);else if(t.type==="batch")e.message(3,t,yc);else if(t.type==="sequence")e.message(4,t,kc);else if(t.type==="describe")e.message(5,t,_c);else if(t.type==="store_sql")e.message(6,t,Sc);else if(t.type==="close_sql")e.message(7,t,Ic);else if(t.type==="get_autocommit")e.message(8,t,$c);else throw V(t,"Impossible type of StreamRequest")}function wc(e,t){}function vc(e,t){e.message(1,t.stmt,wn)}function yc(e,t){e.message(1,t.batch,Ta)}function kc(e,t){t.sql!==void 0&&e.string(1,t.sql),t.sqlId!==void 0&&e.int32(2,t.sqlId)}function _c(e,t){t.sql!==void 0&&e.string(1,t.sql),t.sqlId!==void 0&&e.int32(2,t.sqlId)}function Sc(e,t){e.int32(1,t.sqlId),e.string(2,t.sql)}function Ic(e,t){e.int32(1,t.sqlId)}function $c(e,t){}function Cc(e,t){t.baton!==void 0&&e.string(1,t.baton),e.message(2,t.batch,Ta)}var Ze,ft,cs,Hs,ds,bt,Re,ht,et,tt,mt,Be,ps,T,ot,ln,At,gi,wi,rn,vi,yi,on;class Ac extends Yl{constructor(s,a,n,l,d){super(s.intMode);b(this,T);b(this,Ze);b(this,ft);b(this,cs);b(this,Hs);b(this,ds);b(this,bt);b(this,Re);b(this,ht);b(this,et);b(this,tt);b(this,mt);b(this,Be);b(this,ps);x(this,Ze,s),x(this,ft,a.toString()),x(this,cs,n),x(this,Hs,l),x(this,ds,d),x(this,bt,void 0),x(this,Re,new wa),x(this,ht,!1),x(this,tt,!1),x(this,mt,!1),x(this,Be,void 0),x(this,ps,new Ms)}client(){return i(this,Ze)}_sqlOwner(){return this}storeSql(s){const a=i(this,ps).alloc();return g(this,T,ot).call(this,{type:"store_sql",sqlId:a,sql:s}).then(()=>{},n=>this._setClosed(n)),new mn(this,a)}_closeSql(s){i(this,Be)===void 0&&g(this,T,ot).call(this,{type:"close_sql",sqlId:s}).then(()=>i(this,ps).free(s),a=>this._setClosed(a))}_execute(s){return g(this,T,ot).call(this,{type:"execute",stmt:s}).then(a=>a.result)}_batch(s){return g(this,T,ot).call(this,{type:"batch",batch:s}).then(a=>a.result)}_describe(s){return g(this,T,ot).call(this,{type:"describe",sql:s.sql,sqlId:s.sqlId}).then(a=>a.result)}_sequence(s){return g(this,T,ot).call(this,{type:"sequence",sql:s.sql,sqlId:s.sqlId}).then(a=>{})}getAutocommit(){return i(this,Ze)._ensureVersion(3,"getAutocommit()"),g(this,T,ot).call(this,{type:"get_autocommit"}).then(s=>s.isAutocommit)}_openCursor(s){return new Promise((a,n)=>{g(this,T,ln).call(this,{type:"cursor",batch:s,cursorCallback:a,errorCallback:n})})}_cursorClosed(s){if(s!==i(this,et))throw new kt("Cursor was closed, but it was not associated with the stream");x(this,et,void 0),Yt(()=>g(this,T,At).call(this))}close(){this._setClosed(new U("Stream was manually closed"))}closeGracefully(){x(this,tt,!0),Yt(()=>g(this,T,At).call(this))}get closed(){return i(this,Be)!==void 0||i(this,tt)}_setClosed(s){if(i(this,Be)===void 0){for(x(this,Be,s),i(this,et)!==void 0&&i(this,et)._setClosed(s),i(this,Ze)._streamClosed(this);;){const a=i(this,Re).shift();if(a!==void 0)a.errorCallback(s);else break}(i(this,bt)!==void 0||i(this,ht))&&!i(this,mt)&&(i(this,Re).push({type:"pipeline",request:{type:"close"},responseCallback:()=>{},errorCallback:()=>{}}),x(this,mt,!0),Yt(()=>g(this,T,At).call(this)))}}}Ze=new WeakMap,ft=new WeakMap,cs=new WeakMap,Hs=new WeakMap,ds=new WeakMap,bt=new WeakMap,Re=new WeakMap,ht=new WeakMap,et=new WeakMap,tt=new WeakMap,mt=new WeakMap,Be=new WeakMap,ps=new WeakMap,T=new WeakSet,ot=function(s){return new Promise((a,n)=>{g(this,T,ln).call(this,{type:"pipeline",request:s,responseCallback:a,errorCallback:n})})},ln=function(s){if(i(this,Be)!==void 0)throw new ke("Stream is closed",i(this,Be));if(i(this,tt))throw new ke("Stream is closing",void 0);i(this,Re).push(s),Yt(()=>g(this,T,At).call(this))},At=function(){if(i(this,ht)||i(this,et)!==void 0)return;if(i(this,tt)&&i(this,Re).length===0){this._setClosed(new U("Stream was gracefully closed"));return}const s=i(this,Ze)._endpoint;if(s===void 0){i(this,Ze)._endpointPromise.then(()=>g(this,T,At).call(this),n=>this._setClosed(n));return}const a=i(this,Re).shift();if(a!==void 0)if(a.type==="pipeline"){const n=[a];for(;;){const l=i(this,Re).first();if(l!==void 0&&l.type==="pipeline")n.push(l),i(this,Re).shift();else if(l===void 0&&i(this,tt)&&!i(this,mt)){n.push({type:"pipeline",request:{type:"close"},responseCallback:()=>{},errorCallback:()=>{}}),x(this,mt,!0);break}else break}g(this,T,gi).call(this,s,n)}else if(a.type==="cursor")g(this,T,wi).call(this,s,a);else throw V(a,"Impossible type of QueueEntry")},gi=function(s,a){g(this,T,rn).call(this,()=>g(this,T,vi).call(this,a,s),n=>Ec(n,s.encoding),n=>n.baton,n=>n.baseUrl,n=>Rc(a,n),n=>a.forEach(l=>l.errorCallback(n)))},wi=function(s,a){const n=new xc(this,s.encoding);x(this,et,n),g(this,T,rn).call(this,()=>g(this,T,yi).call(this,a,s),l=>n.open(l),l=>l.baton,l=>l.baseUrl,l=>a.cursorCallback(n),l=>a.errorCallback(l))},rn=function(s,a,n,l,d,r){let p;try{const o=s();p=i(this,Hs)(o)}catch(o){p=Promise.reject(o)}x(this,ht,!0),p.then(o=>o.ok?a(o):Tc(o).then(u=>{throw u})).then(o=>{x(this,bt,n(o)),x(this,ft,l(o)??i(this,ft)),d(o)}).catch(o=>{this._setClosed(o),r(o)}).finally(()=>{x(this,ht,!1),g(this,T,At).call(this)})},vi=function(s,a){return g(this,T,on).call(this,new URL(a.pipelinePath,i(this,ft)),{baton:i(this,bt),requests:s.map(n=>n.request)},a.encoding,fc,mc)},yi=function(s,a){if(a.cursorPath===void 0)throw new vs(`Cursors are supported only on protocol version 3 and higher, but the HTTP server only supports version ${a.version}.`);return g(this,T,on).call(this,new URL(a.cursorPath,i(this,ft)),{baton:i(this,bt),batch:s.batch},a.encoding,hc,Cc)},on=function(s,a,n,l,d){let r,p;if(n==="json")r=Nl(a,l),p="application/json";else if(n==="protobuf")r=Fl(a,d),p="application/x-protobuf";else throw V(n,"Impossible encoding");const o=new _a.Headers;return o.set("content-type",p),i(this,cs)!==void 0&&o.set("authorization",`Bearer ${i(this,cs)}`),i(this,ds)!==void 0&&o.set("x-turso-encryption-key",i(this,ds)),new _a.Request(s.toString(),{method:"POST",headers:o,body:r})};function Rc(e,t){if(t.results.length!==e.length)throw new R("Server returned unexpected number of pipeline results");for(let s=0;s<e.length;++s){const a=t.results[s],n=e[s];if(a.type==="ok"){if(a.response.type!==n.request.type)throw new R("Received unexpected type of response");n.responseCallback(a.response)}else if(a.type==="error")n.errorCallback(ys(a.error));else throw a.type==="none"?new R("Received unrecognized type of StreamResult"):V(a,"Received impossible type of StreamResult")}}async function Ec(e,t){var s;if(t==="json"){const a=await e.json();return hn(a,tc)}if(t==="protobuf"){const a=await e.arrayBuffer();return Ea(new Uint8Array(a),lc)}throw await((s=e.body)==null?void 0:s.cancel()),V(t,"Impossible encoding")}async function Tc(e){var a;const t=e.headers.get("content-type")??"text/plain";let s=`Server returned HTTP status ${e.status}`;if(t==="application/json"){const n=await e.json();return"message"in n?ys(n):new pa(s,e.status)}if(t==="text/plain"){const n=(await e.text()).trim();return n!==""&&(s+=`: ${n}`),new pa(s,e.status)}return await((a=e.body)==null?void 0:a.cancel()),new pa(s,e.status)}const Mc=[{versionPath:"v3-protobuf",pipelinePath:"v3-protobuf/pipeline",cursorPath:"v3-protobuf/cursor",version:3,encoding:"protobuf"}],cn={versionPath:"v2",pipelinePath:"v2/pipeline",cursorPath:void 0,version:2,encoding:"json"};var us,Ws,xs,zs,st,Nt,fs,ba,ml;let Dc=(ml=class extends ql{constructor(s,a,n,l,d=2){super();b(this,fs);b(this,us);b(this,Ws);b(this,xs);b(this,zs);b(this,st);b(this,Nt);D(this,"_endpointPromise");D(this,"_endpoint");x(this,us,s),x(this,Ws,a),x(this,xs,n??_a.fetch),x(this,zs,l),x(this,st,void 0),x(this,Nt,new Set),d==3?(this._endpointPromise=Lc(i(this,xs),i(this,us)),this._endpointPromise.then(r=>this._endpoint=r,r=>g(this,fs,ba).call(this,r))):(this._endpointPromise=Promise.resolve(cn),this._endpointPromise.then(r=>this._endpoint=r,r=>g(this,fs,ba).call(this,r)))}async getVersion(){return this._endpoint!==void 0?this._endpoint.version:(await this._endpointPromise).version}_ensureVersion(s,a){if(!(s<=cn.version)){if(this._endpoint===void 0)throw new vs(`${a} is supported only on protocol version ${s} and higher, but the version supported by the HTTP server is not yet known. Use Client.getVersion() to wait until the version is available.`);if(this._endpoint.version<s)throw new vs(`${a} is supported only on protocol version ${s} and higher, but the HTTP server only supports version ${this._endpoint.version}.`)}}openStream(){if(i(this,st)!==void 0)throw new ke("Client is closed",i(this,st));const s=new Ac(this,i(this,us),i(this,Ws),i(this,xs),i(this,zs));return i(this,Nt).add(s),s}_streamClosed(s){i(this,Nt).delete(s)}close(){g(this,fs,ba).call(this,new U("Client was manually closed"))}get closed(){return i(this,st)!==void 0}},us=new WeakMap,Ws=new WeakMap,xs=new WeakMap,zs=new WeakMap,st=new WeakMap,Nt=new WeakMap,fs=new WeakSet,ba=function(s){if(i(this,st)===void 0){x(this,st,s);for(const a of Array.from(i(this,Nt)))a._setClosed(new ke("Client was closed",s))}},ml);async function Lc(e,t){const s=e;for(const a of Mc){const n=new URL(a.versionPath,t),l=new _a.Request(n.toString(),{method:"GET"}),d=await s(l);if(await d.arrayBuffer(),d.ok)return a}return cn}function ki(e,t,s=2){if(typeof Jt>"u")throw new Pl("WebSockets are not supported in this environment");var a=void 0;s==3?a=Array.from(ci.keys()):a=Array.from(Qo.keys());const n=new Jt(e,a);return new Xo(n,t)}function Xn(e,t,s,a,n=2){return new Dc(e instanceof URL?e:new URL(e),t,s,a,n)}var bs,at,ne;class _i{constructor(t,s){b(this,bs);b(this,at);b(this,ne);x(this,bs,t),x(this,at,s),x(this,ne,void 0)}execute(t){return this.batch([t]).then(s=>s[0])}async batch(t){const s=this._getStream();if(s.closed)throw new j("Cannot execute statements because the transaction is closed","TRANSACTION_CLOSED");try{const a=t.map(Vt);let n;if(i(this,ne)===void 0){this._getSqlCache().apply(a);const d=s.batch(i(this,at)>=3),r=d.step(),p=r.run(Wa(i(this,bs)));let o=r;n=a.map(u=>{const h=d.step().condition(ue.ok(o));i(this,at)>=3&&h.condition(ue.not(ue.isAutocommit(d)));const w=h.query(u);return w.catch(()=>{}),o=h,w}),x(this,ne,d.execute().then(()=>p).then(()=>{}));try{await i(this,ne)}catch(u){throw this.close(),u}}else{i(this,at)<3&&await i(this,ne),this._getSqlCache().apply(a);const d=s.batch(i(this,at)>=3);let r;n=a.map(p=>{const o=d.step();r!==void 0&&o.condition(ue.ok(r)),i(this,at)>=3&&o.condition(ue.not(ue.isAutocommit(d)));const u=o.query(p);return u.catch(()=>{}),r=o,u}),await d.execute()}const l=[];for(let d=0;d<n.length;d++)try{const r=await n[d];if(r===void 0)throw new Kt("Statement in a transaction was not executed, probably because the transaction has been rolled back",d,"TRANSACTION_CLOSED");l.push(Ma(r))}catch(r){if(r instanceof Kt)throw r;const p=F(r);throw p instanceof j?new Kt(p.message,d,p.code,p.extendedCode,p.rawCode,p.cause instanceof Error?p.cause:void 0):p}return l}catch(a){throw F(a)}}async executeMultiple(t){const s=this._getStream();if(s.closed)throw new j("Cannot execute statements because the transaction is closed","TRANSACTION_CLOSED");try{if(i(this,ne)===void 0){x(this,ne,s.run(Wa(i(this,bs))).then(()=>{}));try{await i(this,ne)}catch(a){throw this.close(),a}}else await i(this,ne);await s.sequence(t)}catch(a){throw F(a)}}async rollback(){try{const t=this._getStream();if(t.closed||i(this,ne)===void 0)return;const s=t.run("ROLLBACK").catch(a=>{throw F(a)});t.closeGracefully(),await s}catch(t){throw F(t)}finally{this.close()}}async commit(){try{const t=this._getStream();if(t.closed)throw new j("Cannot commit the transaction because it is already closed","TRANSACTION_CLOSED");if(i(this,ne)!==void 0)await i(this,ne);else return;const s=t.run("COMMIT").catch(a=>{throw F(a)});t.closeGracefully(),await s}catch(t){throw F(t)}finally{this.close()}}}bs=new WeakMap,at=new WeakMap,ne=new WeakMap;async function Sa(e,t,s,a,n=!1){n&&s.step().run("PRAGMA foreign_keys=off");const l=s.step(),d=l.run(Wa(e));let r=l;const p=a.map(v=>{const m=s.step().condition(ue.ok(r));t>=3&&m.condition(ue.not(ue.isAutocommit(s)));const S=m.query(v);return r=m,S}),o=s.step().condition(ue.ok(r));t>=3&&o.condition(ue.not(ue.isAutocommit(s)));const u=o.run("COMMIT");s.step().condition(ue.not(ue.ok(o))).run("ROLLBACK").catch(v=>{}),n&&s.step().run("PRAGMA foreign_keys=on"),await s.execute();const w=[];await d;for(let v=0;v<p.length;v++)try{const m=await p[v];if(m===void 0)throw new Kt("Statement in a batch was not executed, probably because the transaction has been rolled back",v,"TRANSACTION_CLOSED");w.push(Ma(m))}catch(m){if(m instanceof Kt)throw m;const S=F(m);throw S instanceof j?new Kt(S.message,v,S.code,S.extendedCode,S.rawCode,S.cause instanceof Error?S.cause:void 0):S}return await u,w}function Vt(e){let t,s;Array.isArray(e)?[t,s]=e:typeof e=="string"?t=e:(t=e.sql,s=e.args);const a=new zl(t);if(s)if(Array.isArray(s))a.bindIndexes(s);else for(const[n,l]of Object.entries(s))a.bindName(n,l);return a}function Ma(e){const t=e.columnNames.map(d=>d??""),s=e.columnDecltypes.map(d=>d??""),a=e.rows,n=e.affectedRowCount,l=e.lastInsertRowid!==void 0?e.lastInsertRowid:void 0;return new Gr(t,s,a,n,l)}function F(e){if(e instanceof U){const t=Si(e);return new j(e.message,t,void 0,void 0,e)}return e}function Si(e){return e instanceof Ol&&e.code!==void 0?e.code:e instanceof R?"HRANA_PROTO_ERROR":e instanceof ke?e.cause instanceof U?Si(e.cause):"HRANA_CLOSED_ERROR":e instanceof za?"HRANA_WEBSOCKET_ERROR":e instanceof pa?"SERVER_ERROR":e instanceof vs?"PROTOCOL_VERSION_ERROR":e instanceof kt?"INTERNAL_ERROR":"UNKNOWN"}var Js,Fe;class kn{constructor(t,s){b(this,Js);b(this,Fe);D(this,"capacity");x(this,Js,t),x(this,Fe,new jc),this.capacity=s}apply(t){if(this.capacity<=0)return;const s=new Set;for(const a of t){if(typeof a.sql!="string")continue;const n=a.sql;if(n.length>=5e3)continue;let l=i(this,Fe).get(n);if(l===void 0){for(;i(this,Fe).size+1>this.capacity;){const[d,r]=i(this,Fe).peekLru();if(s.has(r))break;r.close(),i(this,Fe).delete(d)}i(this,Fe).size+1<=this.capacity&&(l=i(this,Js).storeSql(n),i(this,Fe).set(n,l))}l!==void 0&&(a.sql=l,s.add(l))}}}Js=new WeakMap,Fe=new WeakMap;var Ee;class jc{constructor(){b(this,Ee);x(this,Ee,new Map)}get(t){const s=i(this,Ee).get(t);return s!==void 0&&(i(this,Ee).delete(t),i(this,Ee).set(t,s)),s}set(t,s){i(this,Ee).set(t,s)}peekLru(){for(const t of i(this,Ee).entries())return t}delete(t){i(this,Ee).delete(t)}get size(){return i(this,Ee).size}}Ee=new WeakMap;function qc(e){var t=0,s=[];function a(){t--,t<e&&n()}function n(){var p=s.shift();r.queue=s.length,p&&d(p.fn).then(p.resolve).catch(p.reject)}function l(p){return new Promise(function(o,u){s.push({fn:p,resolve:o,reject:u}),r.queue=s.length})}function d(p){t++;try{return Promise.resolve(p()).then(function(o){return a(),o},function(o){throw a(),o})}catch(o){return a(),Promise.reject(o)}}var r=function(p){return t>=e?l(p):d(p)};return r}function Oc(e,t){var s=!1,a=this;return Promise.all(e.map(function(){var n=arguments;return a(function(){if(!s)return t.apply(void 0,n).catch(function(l){throw s=!0,l})})}))}function Zn(e){return e.queue=0,e.map=Oc,e}var Pc=function(e){return Zn(e?qc(e):function(t){return t()})};const Ii=Zo(Pc);function Nc(e){if(e.scheme!=="wss"&&e.scheme!=="ws")throw new j(`The WebSocket client supports only "libsql:", "wss:" and "ws:" URLs, got ${JSON.stringify(e.scheme+":")}. For more information, please read ${Bs}`,"URL_SCHEME_NOT_SUPPORTED");if(e.encryptionKey!==void 0)throw new j("Encryption key is not supported by the remote client.","ENCRYPTION_KEY_NOT_SUPPORTED");if(e.scheme==="ws"&&e.tls)throw new j('A "ws:" URL cannot opt into TLS by using ?tls=1',"URL_INVALID");if(e.scheme==="wss"&&!e.tls)throw new j('A "wss:" URL cannot opt out of TLS by using ?tls=0',"URL_INVALID");const t=Va(e.scheme,e.authority,e.path);let s;try{s=ki(t,e.authToken)}catch(a){if(a instanceof Pl){const n=e.scheme==="wss"?"https":"http",l=Va(n,e.authority,e.path);throw new j(`This environment does not support WebSockets, please switch to the HTTP client by using a "${n}:" URL (${JSON.stringify(l)}). For more information, please read ${Bs}`,"WEBSOCKETS_NOT_SUPPORTED")}throw F(a)}return new Fc(s,t,e.authToken,e.intMode,e.concurrency)}const Bc=60*1e3,el=100;var Ys,Ks,Qs,z,se,un,Xs,we,zt,js;class Fc{constructor(t,s,a,n,l){b(this,we);b(this,Ys);b(this,Ks);b(this,Qs);b(this,z);b(this,se);D(this,"closed");D(this,"protocol");b(this,un);b(this,Xs);x(this,Ys,s),x(this,Ks,a),x(this,Qs,n),x(this,z,g(this,we,js).call(this,t)),x(this,se,void 0),this.closed=!1,this.protocol="ws",x(this,Xs,Ii(l))}async limit(t){return i(this,Xs).call(this,t)}async execute(t,s){let a;return typeof t=="string"?a={sql:t,args:s||[]}:a=t,this.limit(async()=>{const n=await g(this,we,zt).call(this);try{const l=Vt(a);n.conn.sqlCache.apply([l]);const d=n.stream.query(l);n.stream.closeGracefully();const r=await d;return Ma(r)}catch(l){throw F(l)}finally{this._closeStream(n)}})}async batch(t,s="deferred"){return this.limit(async()=>{const a=await g(this,we,zt).call(this);try{const l=t.map(u=>Array.isArray(u)?{sql:u[0],args:u[1]||[]}:u).map(Vt),d=await a.conn.client.getVersion();a.conn.sqlCache.apply(l);const r=a.stream.batch(d>=3);return await Sa(s,d,r,l)}catch(n){throw F(n)}finally{this._closeStream(a)}})}async migrate(t){return this.limit(async()=>{const s=await g(this,we,zt).call(this);try{const a=t.map(Vt),n=await s.conn.client.getVersion(),l=s.stream.batch(n>=3);return await Sa("deferred",n,l,a,!0)}catch(a){throw F(a)}finally{this._closeStream(s)}})}async transaction(t="write"){return this.limit(async()=>{const s=await g(this,we,zt).call(this);try{const a=await s.conn.client.getVersion();return new Uc(this,s,t,a)}catch(a){throw this._closeStream(s),F(a)}})}async executeMultiple(t){return this.limit(async()=>{const s=await g(this,we,zt).call(this);try{const a=s.stream.sequence(t);s.stream.closeGracefully(),await a}catch(a){throw F(a)}finally{this._closeStream(s)}})}sync(){throw new j("sync not supported in ws mode","SYNC_NOT_SUPPORTED")}async reconnect(){try{for(const a of Array.from(i(this,z).streamStates))try{a.stream.close()}catch{}i(this,z).client.close()}catch{}if(i(this,se)){try{i(this,se).client.close()}catch{}x(this,se,void 0)}const t=g(this,we,js).call(this),s=await t.client.getVersion();t.useSqlCache=s>=2,t.useSqlCache&&(t.sqlCache.capacity=el),x(this,z,t),this.closed=!1}_closeStream(t){t.stream.close();const s=t.conn;s.streamStates.delete(t),s.streamStates.size===0&&s!==i(this,z)&&s.client.close()}close(){if(i(this,z).client.close(),this.closed=!0,i(this,se)){try{i(this,se).client.close()}catch{}x(this,se,void 0)}this.closed=!0}}Ys=new WeakMap,Ks=new WeakMap,Qs=new WeakMap,z=new WeakMap,se=new WeakMap,un=new WeakMap,Xs=new WeakMap,we=new WeakSet,zt=async function(){if(this.closed)throw new j("The client is closed","CLIENT_CLOSED");if(new Date().valueOf()-i(this,z).openTime.valueOf()>Bc&&i(this,se)===void 0){const n=g(this,we,js).call(this);x(this,se,n),n.client.getVersion().then(l=>{i(this,z)!==n&&i(this,z).streamStates.size===0&&i(this,z).client.close(),x(this,z,n),x(this,se,void 0)},l=>{x(this,se,void 0)})}if(i(this,z).client.closed)try{i(this,se)!==void 0?x(this,z,i(this,se)):x(this,z,g(this,we,js).call(this))}catch(n){throw F(n)}const a=i(this,z);try{a.useSqlCache===void 0&&(a.useSqlCache=await a.client.getVersion()>=2,a.useSqlCache&&(a.sqlCache.capacity=el));const n=a.client.openStream();n.intMode=i(this,Qs);const l={conn:a,stream:n};return a.streamStates.add(l),l}catch(n){throw F(n)}},js=function(t){try{return t??(t=ki(i(this,Ys),i(this,Ks))),{client:t,useSqlCache:void 0,sqlCache:new kn(t,0),openTime:new Date,streamStates:new Set}}catch(s){throw F(s)}};var Zs,gt;class Uc extends _i{constructor(s,a,n,l){super(n,l);b(this,Zs);b(this,gt);x(this,Zs,s),x(this,gt,a)}_getStream(){return i(this,gt).stream}_getSqlCache(){return i(this,gt).conn.sqlCache}close(){i(this,Zs)._closeStream(i(this,gt))}get closed(){return i(this,gt).stream.closed}}Zs=new WeakMap,gt=new WeakMap;function Vc(e){if(e.scheme!=="https"&&e.scheme!=="http")throw new j(`The HTTP client supports only "libsql:", "https:" and "http:" URLs, got ${JSON.stringify(e.scheme+":")}. For more information, please read ${Bs}`,"URL_SCHEME_NOT_SUPPORTED");if(e.encryptionKey!==void 0)throw new j("Encryption key is not supported by the remote client.","ENCRYPTION_KEY_NOT_SUPPORTED");if(e.scheme==="http"&&e.tls)throw new j('A "http:" URL cannot opt into TLS by using ?tls=1',"URL_INVALID");if(e.scheme==="https"&&!e.tls)throw new j('A "https:" URL cannot opt out of TLS by using ?tls=0',"URL_INVALID");const t=Va(e.scheme,e.authority,e.path);return new Gc(t,e.authToken,e.intMode,e.fetch,e.concurrency,e.remoteEncryptionKey)}const $i=30;var J,hs,ms,gs,ea,ws,ta,sa;class Gc{constructor(t,s,a,n,l,d){b(this,J);D(this,"protocol");b(this,hs);b(this,ms);b(this,gs);b(this,ea);b(this,ws);b(this,ta);b(this,sa);x(this,hs,t),x(this,ws,s),x(this,ms,a),x(this,gs,n),x(this,ea,l),x(this,ta,d),x(this,J,Xn(i(this,hs),i(this,ws),i(this,gs),d)),i(this,J).intMode=i(this,ms),this.protocol="http",x(this,sa,Ii(i(this,ea)))}async limit(t){return i(this,sa).call(this,t)}async execute(t,s){let a;return typeof t=="string"?a={sql:t,args:s||[]}:a=t,this.limit(async()=>{try{const n=Vt(a);let l;const d=i(this,J).openStream();try{l=d.query(n)}finally{d.closeGracefully()}const r=await l;return Ma(r)}catch(n){throw F(n)}})}async batch(t,s="deferred"){return this.limit(async()=>{try{const n=t.map(o=>Array.isArray(o)?{sql:o[0],args:o[1]||[]}:o).map(Vt),l=await i(this,J).getVersion();let d;const r=i(this,J).openStream();try{new kn(r,$i).apply(n);const u=r.batch(!1);d=Sa(s,l,u,n)}finally{r.closeGracefully()}return await d}catch(a){throw F(a)}})}async migrate(t){return this.limit(async()=>{try{const s=t.map(Vt),a=await i(this,J).getVersion();let n;const l=i(this,J).openStream();try{const r=l.batch(!1);n=Sa("deferred",a,r,s,!0)}finally{l.closeGracefully()}return await n}catch(s){throw F(s)}})}async transaction(t="write"){return this.limit(async()=>{try{const s=await i(this,J).getVersion();return new Hc(i(this,J).openStream(),t,s)}catch(s){throw F(s)}})}async executeMultiple(t){return this.limit(async()=>{try{let s;const a=i(this,J).openStream();try{s=a.sequence(t)}finally{a.closeGracefully()}await s}catch(s){throw F(s)}})}sync(){throw new j("sync not supported in http mode","SYNC_NOT_SUPPORTED")}close(){i(this,J).close()}async reconnect(){try{this.closed||i(this,J).close()}finally{x(this,J,Xn(i(this,hs),i(this,ws),i(this,gs),i(this,ta))),i(this,J).intMode=i(this,ms)}}get closed(){return i(this,J).closed}}J=new WeakMap,hs=new WeakMap,ms=new WeakMap,gs=new WeakMap,ea=new WeakMap,ws=new WeakMap,ta=new WeakMap,sa=new WeakMap;var Bt,aa;class Hc extends _i{constructor(s,a,n){super(a,n);b(this,Bt);b(this,aa);x(this,Bt,s),x(this,aa,new kn(s,$i))}_getStream(){return i(this,Bt)}_getSqlCache(){return i(this,aa)}close(){i(this,Bt).close()}get closed(){return i(this,Bt).closed}}Bt=new WeakMap,aa=new WeakMap;function Wc(e){return zc(zr(e))}function zc(e){if(e.scheme==="ws"||e.scheme==="wss")return Nc(e);if(e.scheme==="http"||e.scheme==="https")return Vc(e);throw new j(`The client that uses Web standard APIs supports only "libsql:", "wss:", "ws:", "https:" and "http:" URLs, got ${JSON.stringify(e.scheme+":")}. For more information, please read ${Bs}`,"URL_SCHEME_NOT_SUPPORTED")}const Jc={url:"libsql://retailer-os-digitalhues.aws-ap-south-1.turso.io",authToken:"eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAxODY2NzMsImlkIjoiNDcwMDliODAtYmJlYS00YzQ3LTk1MzQtY2NlYjg4OWUzYjFjIiwicmlkIjoiNTk1ODMwNWEtMjlkNy00OGU5LWJkNTctN2FiZWVjNzVjMWYwIn0.381aJkYkBtcCsSDyQkFNLZud9lOPi9TuT3uRZgLYS9BqrjLFb0Zc7P1qRWN0k16XkHQ7raDwhCUE9H1G8Q80BA"},Yc=Wc(Jc);async function $(e,t=[]){try{return(await Yc.execute({sql:e,args:t})).rows}catch(s){throw console.error("DB Query Error:",s.message,"SQL:",e,"Params:",t),s}}const M={clients:{getAll:()=>$("SELECT * FROM customers"),add:e=>$("INSERT INTO customers (id, name, phone, email, joined_at, dob, location) VALUES (?, ?, ?, ?, ?, ?, ?)",[e.id,e.name,e.phone||"",e.email||"",new Date().toISOString(),e.dob||null,e.location||""]),getById:e=>$("SELECT * FROM customers WHERE id = ?",[e])},companies:{getAll:()=>$("SELECT * FROM companies"),add:e=>$("INSERT INTO companies (id, name, gst_number, customer_id, created_at) VALUES (?, ?, ?, ?, ?)",[e.id,e.name,e.gst_number,e.customer_id,new Date().toISOString()]),getByCustomerId:e=>$("SELECT * FROM companies WHERE customer_id = ?",[e]),getById:e=>$("SELECT * FROM companies WHERE id = ?",[e])},sales:{getAll:()=>$("SELECT * FROM sales ORDER BY date DESC"),getById:e=>$("SELECT * FROM sales WHERE id = ?",[e]),getDrafts:()=>$("SELECT * FROM sales WHERE status = 'draft' ORDER BY date DESC"),add:e=>$(`INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode, payment_reference, gst_required, company_id, installation_required, installation_date) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.customer_id,e.customer_name,e.date,e.total_amount,e.status||"completed",e.payment_mode||null,e.payment_reference||null,e.gst_required||0,e.company_id||null,e.installation_required||0,e.installation_date||null]),update:e=>$(`UPDATE sales SET customer_id = ?, customer_name = ?, total_amount = ?, status = ?, 
             payment_mode = ?, payment_reference = ?, gst_required = ?, company_id = ?, 
             installation_required = ?, installation_date = ? WHERE id = ?`,[e.customer_id,e.customer_name,e.total_amount,e.status,e.payment_mode||null,e.payment_reference||null,e.gst_required||0,e.company_id||null,e.installation_required||0,e.installation_date||null,e.id]),delete:e=>$("DELETE FROM sales WHERE id = ?",[e]),addItem:e=>$(`INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, discount_type, discount_value, discount_amount, scheme_id, final_price, imei, serial_number, mac_id, manufacturing_date, installation_date, extra_fields) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.sale_id,e.product_id,e.product_name,e.category,e.quantity,e.price,e.discount_type||null,e.discount_value||null,e.discount_amount||null,e.scheme_id||null,e.final_price||e.price,e.imei||null,e.serial_number||null,e.mac_id||null,e.manufacturing_date||null,e.installation_date||null,e.extra_fields||null]),deleteItems:e=>$("DELETE FROM sale_items WHERE sale_id = ?",[e]),getItems:e=>$("SELECT * FROM sale_items WHERE sale_id = ?",[e])},inventory:{getProducts:()=>$("SELECT * FROM products")},schemes:{getAll:()=>$("SELECT * FROM schemes WHERE status = 'active' ORDER BY brand, name"),getById:e=>$("SELECT * FROM schemes WHERE id = ?",[e]),getByBrand:e=>$("SELECT * FROM schemes WHERE brand = ? AND status = 'active'",[e]),getByCategory:e=>$("SELECT * FROM schemes WHERE category = ? AND status = 'active'",[e]),getApplicable:(e,t,s)=>$(`SELECT * FROM schemes WHERE status = 'active' 
             AND (brand = ? OR brand IS NULL) 
             AND (category = ? OR category IS NULL)
             AND (min_price IS NULL OR min_price <= ?)
             AND (max_price IS NULL OR max_price >= ?)
             AND date(start_date) <= date('now') AND date(end_date) >= date('now')`,[e,t,s,s])},groups:{getAll:()=>$("SELECT * FROM groups ORDER BY created_at DESC"),add:e=>$(`INSERT INTO groups (id, name, description, is_company, gst_number, contact_person, created_at) 
             VALUES (?, ?, ?, ?, ?, ?, ?)`,[e.id,e.name,e.description||null,e.is_company||0,e.gst_number||null,e.contact_person||null,e.created_at]),getById:e=>$("SELECT * FROM groups WHERE id = ?",[e]),delete:e=>$("DELETE FROM groups WHERE id = ?",[e]),getMembers:e=>$("SELECT * FROM group_members WHERE group_id = ?",[e]),getAllMembers:()=>$("SELECT * FROM group_members"),addMember:e=>$("INSERT INTO group_members (id, group_id, customer_id, added_at) VALUES (?, ?, ?, ?)",[e.id,e.group_id,e.customer_id,e.added_at]),removeMember:(e,t)=>$("DELETE FROM group_members WHERE group_id = ? AND customer_id = ?",[e,t]),deleteMembers:e=>$("DELETE FROM group_members WHERE group_id = ?",[e])},automations:{getAll:()=>$("SELECT * FROM automations ORDER BY created_at DESC"),getById:e=>$("SELECT * FROM automations WHERE id = ?",[e]),getByCustomer:e=>$("SELECT * FROM automations WHERE customer_id = ? ORDER BY created_at DESC",[e]),getBySale:e=>$("SELECT * FROM automations WHERE sale_id = ?",[e]),add:e=>$(`INSERT INTO automations (id, name, customer_id, customer_name, sale_id, status, created_at) 
             VALUES (?, ?, ?, ?, ?, ?, ?)`,[e.id,e.name,e.customer_id,e.customer_name,e.sale_id||null,e.status||"active",e.created_at||new Date().toISOString()]),update:(e,t)=>$("UPDATE automations SET status = ?, completed_at = ? WHERE id = ?",[t.status,t.completed_at||null,e]),delete:e=>$("DELETE FROM automations WHERE id = ?",[e]),getMessages:e=>$("SELECT * FROM automation_messages WHERE automation_id = ? ORDER BY day_offset",[e]),getAllMessages:()=>$("SELECT * FROM automation_messages ORDER BY scheduled_date"),addMessage:e=>$(`INSERT INTO automation_messages (id, automation_id, message_type, title, content, day_offset, scheduled_date, status) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.automation_id,e.message_type,e.title,e.content,e.day_offset,e.scheduled_date,e.status||"pending"]),updateMessageStatus:(e,t,s)=>$("UPDATE automation_messages SET status = ?, sent_at = ? WHERE id = ?",[t,s,e]),deleteMessages:e=>$("DELETE FROM automation_messages WHERE automation_id = ?",[e])},communications:{getAll:()=>$("SELECT * FROM communication_log ORDER BY sent_at DESC"),getByCustomer:e=>$("SELECT * FROM communication_log WHERE customer_id = ? ORDER BY sent_at DESC",[e]),add:e=>$(`INSERT INTO communication_log (id, customer_id, type, direction, content, sent_at, automation_id, sale_id, status) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.customer_id,e.type,e.direction||"outgoing",e.content,e.sent_at||new Date().toISOString(),e.automation_id||null,e.sale_id||null,e.status||"sent"]),updateStatus:(e,t)=>$("UPDATE communication_log SET status = ? WHERE id = ?",[t,e])}};async function K(){console.group("🔄 Synchronizing Data with Turso...");try{const[e,t,s,a,n,l,d,r,p,o,u]=await Promise.all([$("SELECT * FROM customers").catch(h=>(console.error("Sync customers failed:",h),[])),$("SELECT * FROM products").catch(h=>(console.error("Sync products failed:",h),[])),$("SELECT * FROM sales ORDER BY date DESC").catch(h=>(console.error("Sync sales failed:",h),[])),$("SELECT * FROM sale_items").catch(h=>(console.error("Sync sale_items failed:",h),[])),$("SELECT * FROM companies").catch(h=>(console.error("Sync companies failed:",h),[])),$("SELECT * FROM groups ORDER BY created_at DESC").catch(h=>(console.error("Sync groups failed:",h),[])),$("SELECT * FROM group_members").catch(h=>(console.error("Sync group_members failed:",h),[])),$("SELECT * FROM automations ORDER BY created_at DESC").catch(h=>(console.error("Sync automations failed:",h),[])),$("SELECT * FROM automation_messages ORDER BY scheduled_date").catch(h=>(console.error("Sync automation_messages failed:",h),[])),$("SELECT * FROM communication_log ORDER BY sent_at DESC").catch(h=>(console.error("Sync communications failed:",h),[])),$("SELECT * FROM schemes WHERE status = 'active' ORDER BY brand, name").catch(h=>(console.error("Sync schemes failed:",h),[]))]);window._db_cache={customers:e||[],products:t||[],sales:s||[],saleItems:a||[],companies:n||[],groups:l||[],groupMembers:d||[],automations:r||[],automationMessages:p||[],communications:o||[],schemes:u||[],inventoryLogs:[],inquiries:[],repairs:[],marketplace:[],campaigns:[],bookings:[]},console.log("✅ Sync Complete. Tables cached:",{customers:e.length,products:t.length,sales:s.length,automations:r.length})}catch(e){console.error("❌ Data Sync Failed:",e),window.toast&&window.toast.error("Failed to sync data. Check your connection.")}finally{console.groupEnd(),C(!1)}}window.getCache=()=>window._db_cache||{customers:[],sales:[],products:[],saleItems:[],companies:[],groups:[],groupMembers:[],automations:[],automationMessages:[],communications:[],schemes:[],inventoryLogs:[],inquiries:[],repairs:[],marketplace:[],campaigns:[],bookings:[]};let wt=!1,le="",xe={customers:[],sales:[]};window.toggleSalesSearch=()=>{wt=!wt,wt||(le="",xe={customers:[],sales:[]}),window.triggerRender()};window.updateSalesSearch=e=>{const t=document.getElementById("sales-universal-search"),s=(t==null?void 0:t.selectionStart)||e.length;if(le=e.toLowerCase().trim(),!le){xe={customers:[],sales:[]},window.triggerRender(!1),tl("sales-universal-search",s);return}const a=window.getCache(),n=a.customers||[],l=a.sales||[],d=a.saleItems||[];xe.customers=n.filter(r=>{var p,o,u;return((p=r.name)==null?void 0:p.toLowerCase().includes(le))||((o=r.phone)==null?void 0:o.includes(le))||((u=r.email)==null?void 0:u.toLowerCase().includes(le))}).slice(0,5),xe.sales=l.filter(r=>{var o,u;return(o=r.id)!=null&&o.toLowerCase().includes(le)||(u=r.customer_name)!=null&&u.toLowerCase().includes(le)?!0:d.filter(h=>h.sale_id===r.id).some(h=>{var w;return(w=h.product_name)==null?void 0:w.toLowerCase().includes(le)})}).slice(0,5),window.triggerRender(!1),tl("sales-universal-search",s)};function tl(e,t){setTimeout(()=>{const s=document.getElementById(e);s&&(s.focus(),s.setSelectionRange(t,t))},0)}window.selectSearchCustomer=(e,t)=>{c.historyViewMode="completed",c.historyDateFilter="all",window.setTab("history");const a=window.getCache().sales.find(n=>n.customer_id===e);a&&window.setSalesHistoryId(a.id),wt=!1,le="",xe={customers:[],sales:[]},window.triggerRender()};window.selectSearchSale=e=>{window.setTab("history"),window.setSalesHistoryId(e),wt=!1,le="",xe={customers:[],sales:[]},window.triggerRender()};function Ci(e){const t=xe.customers.length>0||xe.sales.length>0;return`
        <header class="p-4 sm:p-8 pb-4 shrink-0">
            <div class="flex items-center justify-between mb-6">
                <button type="button" onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                    <span class="material-icons-outlined">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900">Sales Desk</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">${e==="new-sale"?"New Transaction":"Transaction History"}</p>
                </div>
                <button type="button" onclick="window.toggleSalesSearch()" class="p-2 text-slate-400 hover:text-slate-900 ${wt?"bg-slate-100 rounded-full text-slate-900":""}">
                    <span class="material-icons-outlined text-xl">${wt?"close":"search"}</span>
                </button>
            </div>
            
            <!-- Search Bar -->
            ${wt?`
                <div class="mb-4 relative">
                    <div class="relative">
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400">search</span>
                        <input type="text" 
                               id="sales-universal-search"
                               value="${le}"
                               oninput="window.updateSalesSearch(this.value)" 
                               placeholder="Search customers, orders, products..." 
                               class="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm"
                               autofocus>
                    </div>
                    
                    <!-- Search Results Dropdown -->
                    ${le&&t?`
                        <div class="absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden max-h-80 overflow-y-auto">
                            ${xe.customers.length>0?`
                                <div class="p-3 bg-slate-50 border-b border-slate-100">
                                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <span class="material-icons-outlined text-xs">person</span>
                                        Customers (${xe.customers.length})
                                    </p>
                                </div>
                                ${xe.customers.map(s=>{var a;return`
                                    <button type="button" onclick="window.selectSearchCustomer('${s.id}', '${(a=s.name)==null?void 0:a.replace(/'/g,"\\'")}')" class="w-full p-4 text-left hover:bg-slate-50 border-b border-slate-50 flex items-center gap-3">
                                        <div class="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                                            <span class="material-icons-outlined text-slate-400">person</span>
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <p class="text-sm font-black text-slate-900 truncate">${s.name}</p>
                                            <p class="text-[10px] font-bold text-slate-400">${s.phone||""} ${s.email?"• "+s.email:""}</p>
                                        </div>
                                    </button>
                                `}).join("")}
                            `:""}
                            
                            ${xe.sales.length>0?`
                                <div class="p-3 bg-slate-50 border-b border-slate-100">
                                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <span class="material-icons-outlined text-xs">receipt</span>
                                        Transactions (${xe.sales.length})
                                    </p>
                                </div>
                                ${xe.sales.map(s=>`
                                    <button type="button" onclick="window.selectSearchSale('${s.id}')" class="w-full p-4 text-left hover:bg-slate-50 border-b border-slate-50 flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="w-10 h-10 ${s.status==="draft"?"bg-slate-200":"bg-slate-100"} rounded-full flex items-center justify-center">
                                                <span class="material-icons-outlined ${s.status==="draft"?"text-slate-500":"text-slate-600"}">${s.status==="draft"?"edit_note":"check_circle"}</span>
                                            </div>
                                            <div>
                                                <p class="text-sm font-black text-slate-900">#${s.id}</p>
                                                <p class="text-[10px] font-bold text-slate-400">${s.customer_name} • ${new Date(s.date).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                        <p class="text-sm font-black text-slate-900">₹${parseInt(s.total_amount||0).toLocaleString()}</p>
                                    </button>
                                `).join("")}
                            `:""}
                        </div>
                    `:""}
                    
                    ${le&&!t?`
                        <div class="absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl p-8 text-center">
                            <span class="material-icons-outlined text-3xl text-slate-200 mb-2">search_off</span>
                            <p class="text-xs font-bold text-slate-400">No results found for "${le}"</p>
                        </div>
                    `:""}
                </div>
            `:""}
            
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                <button type="button" onclick="setTab('new-sale')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${e==="new-sale"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">New Sale</button>
                <button type="button" onclick="setTab('history')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${e==="history"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">History</button>
            </div>
        </header>
    `}let Xt=!1,ha="",I=[],De=null,nt="Select Customer",ie=!1,Ve="",Ge="",la=!1,B="",lt="",vt=null;const Zt=e=>`${e}-${Math.random().toString(36).substr(2,8).toUpperCase()}`,Kc=["appliances","air conditioners","ac","washing machines","refrigerators","tvs","television","home theater","dishwasher","microwave","geyser","water heater"];function _n(e){if(e.installation_required===1)return!0;const t=(e.category||"").toLowerCase();return Kc.some(s=>t.includes(s))}async function Qc(e){const t=window.getCache().products,s=window.getCache().schemes||[],a=t.find(n=>n.id===e);if(a){const n=_n(a),l=s.filter(r=>{const p=!r.brand||r.brand===a.brand,o=!r.category||r.category===a.category,u=(!r.min_price||a.mop>=r.min_price)&&(!r.max_price||a.mop<=r.max_price),h=new Date(r.start_date)<=new Date&&new Date(r.end_date)>=new Date;return p&&o&&u&&h&&r.status==="active"});I.push({...a,qty:1,imei:"",serial_number:"",mac_id:"",manufacturing_date:"",showDetails:!1,installation_required:n,installation_date:"",discount_type:null,discount_value:0,discount_amount:0,scheme_id:null,scheme_name:null,final_price:a.mop,applicableSchemes:l,showDiscount:!1,extraFields:[]});const d=document.getElementById("sales-item-search");d&&(d.value=""),window.triggerRender()}}window.toggleCartItemDiscount=e=>{I[e]&&(I[e].showDiscount=!I[e].showDiscount,window.triggerRender())};window.applyStoreDiscount=(e,t)=>{if(I[e]){const s=I[e],a=parseFloat(t)||0;a>0&&a<=100?(s.discount_type="store",s.discount_value=a,s.discount_amount=Math.round(s.mop*a/100),s.scheme_id=null,s.scheme_name=null,s.final_price=s.mop-s.discount_amount):(s.discount_type=null,s.discount_value=0,s.discount_amount=0,s.scheme_id=null,s.scheme_name=null,s.final_price=s.mop),window.triggerRender()}};window.applySchemeDiscount=(e,t)=>{if(I[e]){const s=I[e],n=(window.getCache().schemes||[]).find(l=>l.id===t);n?(s.discount_type="scheme",s.scheme_id=n.id,s.scheme_name=n.name,n.discount_type==="percentage"?(s.discount_value=n.discount_value,s.discount_amount=Math.round(s.mop*n.discount_value/100)):(s.discount_value=n.discount_value,s.discount_amount=n.discount_value),s.final_price=s.mop-s.discount_amount):(s.discount_type=null,s.discount_value=0,s.discount_amount=0,s.scheme_id=null,s.scheme_name=null,s.final_price=s.mop),window.triggerRender()}};window.clearItemDiscount=e=>{if(I[e]){const t=I[e];t.discount_type=null,t.discount_value=0,t.discount_amount=0,t.scheme_id=null,t.scheme_name=null,t.final_price=t.mop,window.triggerRender()}};function Ai(e,t){De=e,nt=t;const s=document.getElementById("customer-dropdown-menu");s&&s.classList.add("hidden");const n=(window.getCache().companies||[]).find(l=>l.customer_id===e);n&&(Ve=n.name,Ge=n.gst_number),window.triggerRender()}window.updateCartItemDetail=(e,t,s)=>{I[e]&&(I[e][t]=s)};window.toggleCartItemDetails=e=>{I[e]&&(I[e].showDetails=!I[e].showDetails,window.triggerRender())};window.toggleItemInstallation=e=>{I[e]&&(I[e].installation_required=!I[e].installation_required,I[e].installation_required||(I[e].installation_date=""),window.triggerRender())};window.updateItemInstallationDate=(e,t)=>{I[e]&&(I[e].installation_date=t)};const Xc="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";function Zc(){return localStorage.getItem("openai_api_key")||Xc}window.captureDeviceImage=async e=>{const t=Zc(),s=document.createElement("input");s.type="file",s.accept="image/*",s.capture="environment",s.onchange=async a=>{const n=a.target.files[0];if(n){Xt=!0,ha="Reading image...",window.triggerRender(!1);try{const l=await ed(n);ha="AI analyzing...",td(e,ha);const d=I[e],r={name:d.name,brand:d.brand,category:d.category},p=await sd(l,r,t);I[e]&&p&&(p.imei&&(I[e].imei=p.imei),p.serial_number&&(I[e].serial_number=p.serial_number),p.mac_id&&(I[e].mac_id=p.mac_id),p.manufacturing_date&&(I[e].manufacturing_date=p.manufacturing_date),p.extraFields&&p.extraFields.length>0&&(I[e].extraFields=[...I[e].extraFields||[],...p.extraFields])),Xt=!1,window.triggerRender(!1);const o=[];p.imei&&o.push("IMEI"),p.serial_number&&o.push("Serial"),p.mac_id&&o.push("MAC ID"),p.manufacturing_date&&o.push("Mfg Date"),p.extraFields&&p.extraFields.forEach(u=>o.push(u.label)),o.length>0?window.toast.success(`Found: ${o.join(", ")}`):window.toast.warning("No device details found. Try a clearer image.")}catch(l){console.error("AI Vision Error:",l),Xt=!1,window.triggerRender(!1),window.toast.error(l.message||"Error analyzing image")}}},s.click()};function ed(e){return new Promise((t,s)=>{const a=new FileReader;a.onload=()=>{const n=a.result.split(",")[1];t(n)},a.onerror=s,a.readAsDataURL(e)})}function td(e,t){const s=document.getElementById(`ocr-progress-${e}`);s&&(s.textContent=t)}async function sd(e,t,s){var p,o,u,h;const a=`You are analyzing a product label/box image to extract device information.

Product: ${t.name}
Brand: ${t.brand||"Unknown"}
Category: ${t.category||"Electronics"}

Look at this image and extract ALL device identifiers you can find. Return a JSON object with these fields:
- imei: IMEI number (15 digits) if visible
- imei2: Second IMEI for dual-SIM phones if visible
- serial_number: Serial number (S/N) if visible
- mac_id: MAC address (format XX:XX:XX:XX:XX:XX) if visible
- manufacturing_date: Manufacturing date in YYYY-MM-DD format if visible
- model: Model number if visible
- color: Color if visible
- storage: Storage capacity (e.g., "128 GB") if visible
- Any other relevant identifiers you find

For extraFields array, include additional fields found with format: {"key": "field_name", "label": "Display Label", "value": "extracted_value"}

Return ONLY valid JSON. If a field is not found, omit it from the response.

Example response:
{
  "imei": "123456789012345",
  "serial_number": "ABC123XYZ",
  "extraFields": [{"key": "model", "label": "Model", "value": "SM-A546E"}]
}`,n=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:JSON.stringify({model:"gpt-4o-mini",messages:[{role:"user",content:[{type:"text",text:a},{type:"image_url",image_url:{url:`data:image/jpeg;base64,${e}`,detail:"high"}}]}],max_tokens:1e3,temperature:.1})});if(!n.ok){const w=await n.json().catch(()=>({}));throw new Error(((p=w.error)==null?void 0:p.message)||`API Error: ${n.status}`)}const d=((h=(u=(o=(await n.json()).choices)==null?void 0:o[0])==null?void 0:u.message)==null?void 0:h.content)||"";console.log("AI Vision Response:",d);const r=d.match(/\{[\s\S]*\}/);if(!r)return{extraFields:[]};try{const w=JSON.parse(r[0]);return ad(w)}catch(w){return console.error("Failed to parse AI response:",w),{extraFields:[]}}}function ad(e){const t={imei:e.imei||null,serial_number:e.serial_number||e.serialNumber||null,mac_id:e.mac_id||e.macId||e.mac||null,manufacturing_date:e.manufacturing_date||e.manufacturingDate||e.mfg_date||null,extraFields:[]};return e.imei2&&t.extraFields.push({key:"imei2",label:"IMEI 2",value:e.imei2,type:"text"}),e.model&&t.extraFields.push({key:"model",label:"Model",value:e.model,type:"text"}),e.color&&t.extraFields.push({key:"color",label:"Color",value:e.color,type:"text"}),e.storage&&t.extraFields.push({key:"storage",label:"Storage",value:e.storage,type:"text"}),e.extraFields&&Array.isArray(e.extraFields)&&e.extraFields.forEach(s=>{s.value&&s.label&&(t.extraFields.some(n=>n.key===s.key)||t.extraFields.push({key:s.key||s.label.toLowerCase().replace(/\s+/g,"_"),label:s.label,value:s.value,type:s.type||"text"}))}),t}window.updateCartItemExtraField=(e,t,s)=>{I[e]&&I[e].extraFields[t]&&(I[e].extraFields[t].value=s)};window.addCustomExtraField=e=>{I[e]&&window.showPrompt('Enter field name (e.g., "IMEI 2", "Warranty Code"):',"",t=>{const s=t.toLowerCase().replace(/\s+/g,"_");I[e].extraFields=I[e].extraFields||[],I[e].extraFields.push({key:s,label:t,value:"",type:"text",custom:!0}),window.triggerRender()})};window.removeExtraField=(e,t)=>{I[e]&&I[e].extraFields&&(I[e].extraFields.splice(t,1),window.triggerRender())};window.toggleGstRequired=()=>{ie=!ie,window.triggerRender()};window.updateGstField=(e,t)=>{e==="companyName"&&(Ve=t),e==="gstNumber"&&(Ge=t.toUpperCase())};window.openPaymentModal=()=>{if(I.length===0||!De){window.toast.warning("Please select a customer and add items to cart");return}const e=I.filter(t=>t.installation_required&&!t.installation_date);if(e.length>0){window.toast.warning(`Set installation date for: ${e.map(t=>t.name).join(", ")}`);return}la=!0,window.triggerRender()};window.closePaymentModal=()=>{la=!1,B="",lt="",window.triggerRender()};window.selectPaymentMode=e=>{B=e,lt="",window.triggerRender()};window.updatePaymentReference=e=>{lt=e};window.confirmPayment=async()=>{if(!B){window.toast.warning("Please select a payment mode");return}if((B==="card"||B==="upi")&&!lt){window.toast.warning("Please enter the transaction reference");return}la=!1,await Ri()};async function Ri(){const e=document.getElementById("complete-txn-btn");e&&(e.disabled=!0,e.innerHTML="Processing...");try{const t=vt||Zt("ORD"),s=I.reduce((r,p)=>r+(p.final_price||p.mop),0);let a=null;ie&&Ve&&Ge&&(a=Zt("COMP"),await M.companies.add({id:a,name:Ve,gst_number:Ge,customer_id:De}));const n=I.some(r=>r.installation_required),d=I.filter(r=>r.installation_required&&r.installation_date).map(r=>r.installation_date).sort()[0]||null;vt?(await M.sales.deleteItems(vt),await M.sales.update({id:t,customer_id:De,customer_name:nt,total_amount:s,status:"completed",payment_mode:B,payment_reference:lt,gst_required:ie?1:0,company_id:a,installation_required:n?1:0,installation_date:d})):await M.sales.add({id:t,customer_id:De,customer_name:nt,date:new Date().toISOString(),total_amount:s,status:"completed",payment_mode:B,payment_reference:lt,gst_required:ie?1:0,company_id:a,installation_required:n?1:0,installation_date:d});for(const r of I)await M.sales.addItem({id:Zt("ITEM"),sale_id:t,product_id:r.id,product_name:r.name,category:r.category,quantity:1,price:r.mop,discount_type:r.discount_type||null,discount_value:r.discount_value||null,discount_amount:r.discount_amount||null,scheme_id:r.scheme_id||null,final_price:r.final_price||r.mop,imei:r.imei||null,serial_number:r.serial_number||null,mac_id:r.mac_id||null,manufacturing_date:r.manufacturing_date||null,installation_date:r.installation_required?r.installation_date:null,extra_fields:r.extraFields&&r.extraFields.length>0?JSON.stringify(r.extraFields):null});Sn(),await K(),window.setTab("history"),window.setSalesHistoryId(t)}catch(t){console.error(t),window.toast.error("Error completing transaction: "+t.message),e&&(e.disabled=!1,e.innerHTML="Complete Transaction")}}async function nd(){if(I.length===0){window.toast.warning("Please add items to cart before saving draft");return}try{const e=vt||Zt("DRF"),t=I.reduce((d,r)=>d+(r.final_price||r.mop),0);let s=null;ie&&Ve&&Ge&&(s=Zt("COMP"),await M.companies.add({id:s,name:Ve,gst_number:Ge,customer_id:De}));const a=I.some(d=>d.installation_required),l=I.filter(d=>d.installation_required&&d.installation_date).map(d=>d.installation_date).sort()[0]||null;vt?(await M.sales.deleteItems(vt),await M.sales.update({id:e,customer_id:De,customer_name:nt||"No Customer",total_amount:t,status:"draft",payment_mode:null,payment_reference:null,gst_required:ie?1:0,company_id:s,installation_required:a?1:0,installation_date:l})):await M.sales.add({id:e,customer_id:De,customer_name:nt||"No Customer",date:new Date().toISOString(),total_amount:t,status:"draft",payment_mode:null,payment_reference:null,gst_required:ie?1:0,company_id:s,installation_required:a?1:0,installation_date:l});for(const d of I)await M.sales.addItem({id:Zt("ITEM"),sale_id:e,product_id:d.id,product_name:d.name,category:d.category,quantity:1,price:d.mop,discount_type:d.discount_type||null,discount_value:d.discount_value||null,discount_amount:d.discount_amount||null,scheme_id:d.scheme_id||null,final_price:d.final_price||d.mop,imei:d.imei||null,serial_number:d.serial_number||null,mac_id:d.mac_id||null,manufacturing_date:d.manufacturing_date||null,installation_date:d.installation_required?d.installation_date:null,extra_fields:d.extraFields&&d.extraFields.length>0?JSON.stringify(d.extraFields):null});Sn(),await K(),window.setTab("history"),window.toast.success("Draft saved successfully!")}catch(e){console.error(e),window.toast.error("Error saving draft: "+e.message)}}async function ld(e){const t=window.getCache(),s=t.sales.find(l=>l.id===e);if(!s)return;if(vt=e,De=s.customer_id,nt=s.customer_name,ie=s.gst_required===1,s.company_id){const l=t.companies.find(d=>d.id===s.company_id);l&&(Ve=l.name,Ge=l.gst_number)}const a=t.saleItems.filter(l=>l.sale_id===e),n=t.products;I=a.map(l=>{const d=n.find(o=>o.id===l.product_id)||{},r=l.installation_date||_n(d);let p=[];if(l.extra_fields)try{p=JSON.parse(l.extra_fields)}catch(o){console.warn("Failed to parse extra fields:",o)}return{...d,id:l.product_id,name:l.product_name,category:l.category,mop:l.price,qty:l.quantity,imei:l.imei||"",serial_number:l.serial_number||"",mac_id:l.mac_id||"",manufacturing_date:l.manufacturing_date||"",showDetails:!1,installation_required:!!r,installation_date:l.installation_date||"",extraFields:p}}),window.setTab("new-sale"),window.triggerRender()}function Sn(){I=[],De=null,nt="Select Customer",ie=!1,Ve="",Ge="",la=!1,B="",lt="",vt=null}window.selectSaleCustomer=Ai;window.addProductToCart=Qc;window.completeTransaction=Ri;window.saveDraft=nd;window.loadDraft=ld;window.getActiveCart=()=>I;window.getSelectedCustomer=()=>({id:De,name:nt});window.getSaleState=()=>({gstRequired:ie,companyName:Ve,gstNumber:Ge,paymentMode:B,paymentReference:lt});window.clearCart=()=>{Sn(),window.triggerRender()};window.removeFromCart=e=>{I.splice(e,1),window.triggerRender()};window.toggleCustomerDropdown=e=>{e&&e.stopPropagation();const t=document.getElementById("customer-dropdown-menu");t&&t.classList.toggle("hidden")};let qs="";window.updateCustomerSearch=e=>{qs=e.toLowerCase(),window.triggerRender(!1)};window.addNewCustomer=async()=>{window.setSalesMode("add-customer");const e=document.getElementById("customer-dropdown-menu");e&&e.classList.add("hidden")};function Ei(){const e=window.getCache(),t=e.products||[],s=e.customers||[],a=qs?s.filter(o=>{var u;return o.name.toLowerCase().includes(qs)||((u=o.phone)==null?void 0:u.includes(qs))}):s,n=document.getElementById("sales-item-search"),l=n?n.value.toLowerCase():"",d=l?t.filter(o=>{var u;return o.name.toLowerCase().includes(l)||((u=o.brand)==null?void 0:u.toLowerCase().includes(l))}):[],r=I.reduce((o,u)=>o+(u.final_price||u.mop||0),0);I.reduce((o,u)=>o+(u.discount_amount||0),0);const p=I.filter(o=>o.installation_required).length;return`
        ${Ci("new-sale")}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-12 text-left">
            <!-- Customer Section -->
            <section class="space-y-3 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Customer Details</h3>

                <div class="relative text-left">
                    <button type="button" id="customer-dropdown-trigger" onclick="window.toggleCustomerDropdown(event)" class="card p-5 flex items-center justify-between cursor-pointer hover:border-slate-300 transition-all text-left w-full">
                        <div class="flex items-center gap-4 text-slate-900 text-left">
                            <span class="material-icons-outlined text-slate-400">person</span>
                            <span class="text-sm font-black text-left">${nt}</span>
                        </div>
                        <span class="material-icons-outlined text-slate-300">expand_more</span>
                    </button>
                    <!-- Dropdown Content -->
                    <div id="customer-dropdown-menu" class="hidden absolute top-full left-0 right-0 z-50 bg-white border border-slate-100 rounded-2xl shadow-2xl max-h-60 overflow-y-auto text-left mt-2 flex flex-col">
                        
                        <!-- Search Bar within Dropdown -->
                        <div class="p-3 sticky top-0 bg-white z-20 border-b border-slate-100" onclick="event.stopPropagation()">
                             <div class="relative">
                                <span class="absolute left-3 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-sm">search</span>
                                <input type="text" 
                                       value="${qs}"
                                       oninput="window.updateCustomerSearch(this.value)" 
                                       placeholder="Search customer..." 
                                       class="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                             </div>
                        </div>

                        <button type="button" onclick="window.addNewCustomer()" class="p-4 bg-slate-900 text-white border-b border-slate-900 cursor-pointer flex items-center justify-center gap-2 hover:bg-slate-800 sticky top-[60px] z-10">
                            <span class="material-icons-outlined text-xs">add</span>
                            <span class="text-[10px] font-black uppercase tracking-widest">Create New Customer</span>
                        </button>

                        ${a.length===0?`
                             <div class="p-4 text-center text-slate-400 text-xs font-bold">No customers found</div>
                        `:a.map(o=>`
                            <button type="button" onclick="window.selectSaleCustomer('${o.id}', '${o.name.replace(/'/g,"\\'")}')" class="p-4 hover:bg-slate-50 cursor-pointer border-b border-slate-50 text-left w-full">
                                <p class="text-xs font-black text-slate-900 text-left">${o.name}</p>
                                <p class="text-[9px] font-bold text-slate-400 text-left">${o.phone||""}</p>
                            </button>
                        `).join("")}
                    </div>
                </div>
            </section>

            <!-- GST Billing Section -->
            <section class="space-y-3 text-left">
                <div class="flex items-center justify-between">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">GST Billing</h3>
                    <button type="button" onclick="window.toggleGstRequired()" class="flex items-center gap-2 text-[9px] font-black uppercase ${ie?"text-slate-900":"text-slate-400"}">
                        <span class="material-icons-outlined text-sm">${ie?"check_box":"check_box_outline_blank"}</span>
                        ${ie?"Enabled":"Disabled"}
                    </button>
                </div>
                
                ${ie?`
                    <div class="card p-4 space-y-4">
                        <div>
                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Company Name</label>
                            <input type="text" value="${Ve}" oninput="window.updateGstField('companyName', this.value)" placeholder="Enter company name" class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                        </div>
                        <div>
                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">GST Number</label>
                            <input type="text" value="${Ge}" oninput="window.updateGstField('gstNumber', this.value)" placeholder="e.g. 27AAACR3456D1Z5" maxlength="15" class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold uppercase focus:outline-none focus:border-slate-900 transition-all">
                        </div>
                    </div>
                `:""}
            </section>

            <!-- Product Search Section -->
            <section class="space-y-3 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Product Search</h3>
                <div class="relative text-left">
                    <span class="absolute left-5 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400">search</span>
                    <input type="text" id="sales-item-search" oninput="window.triggerRender(false)" placeholder="Search products..." class="w-full pl-14 pr-6 py-5 bg-white border border-slate-100 rounded-3xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                    
                    ${l?`
                        <div class="absolute top-full left-0 right-0 z-50 bg-white border border-slate-100 rounded-2xl shadow-2xl mt-2 overflow-hidden text-left max-h-60 overflow-y-auto">
                            ${d.length>0?d.map(o=>{var h;const u=_n(o);return`
                                <button type="button" onclick="window.addProductToCart('${o.id}')" class="p-4 hover:bg-slate-50 cursor-pointer flex justify-between items-center text-left w-full border-b border-slate-50">
                                    <div class="text-left flex-1">
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <h4 class="text-xs font-black text-slate-900 text-left">${o.name}</h4>
                                            ${u?`
                                                <span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase flex items-center gap-0.5">
                                                    <span class="material-icons-outlined text-[10px]">build</span> Install
                                                </span>
                                            `:""}
                                        </div>
                                        <p class="text-[9px] font-bold text-slate-400 uppercase text-left">${o.brand} • ${o.category}</p>
                                    </div>
                                    <p class="text-xs font-black text-slate-900 text-right ml-2">₹${((h=o.mop)==null?void 0:h.toLocaleString())||0}</p>
                                </button>
                            `}).join(""):'<p class="p-6 text-[10px] text-slate-300 font-black uppercase text-center">No products found</p>'}
                        </div>
                    `:""}
                </div>
            </section>

            <!-- Cart Section -->
            <section class="space-y-4 text-left">
                <div class="flex items-center justify-between text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">
                        Cart (${I.length})
                        ${p>0?`<span class="ml-2 text-slate-600">${p} install</span>`:""}
                    </h3>
                    <button type="button" onclick="window.clearCart()" class="text-[9px] font-black text-slate-900 uppercase tracking-widest border-b-2 border-slate-900">Clear All</button>
                </div>
                
                <div class="space-y-3 text-left">
                    ${I.map((o,u)=>{var h,w,v;return`
                        <div class="card overflow-hidden ${o.installation_required?"border-slate-300":""}">
                            <div class="p-4 flex items-center gap-4 text-left">
                                <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shadow-inner text-left shrink-0">
                                    <span class="material-icons-outlined text-xl text-slate-300 text-left">${o.installation_required?"home_repair_service":"devices"}</span>
                                </div>
                                <div class="flex-1 text-left min-w-0">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <h4 class="text-sm font-black text-slate-900 text-left truncate">${o.name}</h4>
                                        ${o.installation_required?`
                                            <span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase flex items-center gap-0.5 shrink-0">
                                                <span class="material-icons-outlined text-[10px]">build</span> Install
                                            </span>
                                        `:""}
                                    </div>
                                    <p class="text-[9px] font-bold text-slate-400 uppercase text-left">${o.category}</p>
                                </div>
                                <div class="text-right shrink-0">
                                    ${o.discount_amount>0?`
                                        <p class="text-[9px] font-bold text-slate-400 line-through text-right">₹${((h=o.mop)==null?void 0:h.toLocaleString())||0}</p>
                                        <p class="text-xs font-black text-right">₹${((w=o.final_price)==null?void 0:w.toLocaleString())||0}</p>
                                    `:`
                                        <p class="text-xs font-black text-right">₹${((v=o.mop)==null?void 0:v.toLocaleString())||0}</p>
                                    `}
                                    <button type="button" onclick="window.removeFromCart(${u})" class="text-[8px] font-black text-slate-400 uppercase text-right hover:text-slate-900">Remove</button>
                                </div>
                            </div>
                            
                            <!-- Discount Badge (if applied) -->
                            ${o.discount_amount>0?`
                                <div class="px-4 py-2 bg-slate-900 text-white flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <span class="material-icons-outlined text-sm">local_offer</span>
                                        <span class="text-[9px] font-black uppercase">
                                            ${o.discount_type==="scheme"?o.scheme_name:`Store Discount (${o.discount_value}%)`}
                                        </span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="text-[10px] font-black">-₹${o.discount_amount.toLocaleString()}</span>
                                        <button type="button" onclick="window.clearItemDiscount(${u})" class="text-white/60 hover:text-white">
                                            <span class="material-icons-outlined text-sm">close</span>
                                        </button>
                                    </div>
                                </div>
                            `:""}
                            
                            <!-- Discount Toggle -->
                            <button type="button" onclick="window.toggleCartItemDiscount(${u})" class="w-full px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-2 text-[9px] font-black ${o.discount_amount>0?"text-slate-900":"text-slate-500"} uppercase hover:bg-slate-100 transition-all">
                                <span class="material-icons-outlined text-sm">${o.showDiscount?"expand_less":"local_offer"}</span>
                                ${o.showDiscount?"Hide Discount":o.discount_amount>0?"Change Discount":"Add Discount"}
                            </button>
                            
                            ${o.showDiscount?`
                                <div class="p-4 bg-slate-50 border-t border-slate-100 space-y-4">
                                    <!-- Store Discount -->
                                    <div>
                                        <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Store Discount (%)</label>
                                        <div class="flex gap-2">
                                            ${[5,10,15,20].map(m=>`
                                                <button type="button" onclick="window.applyStoreDiscount(${u}, ${m})" class="flex-1 py-2 ${o.discount_type==="store"&&o.discount_value===m?"bg-slate-900 text-white":"bg-white border border-slate-200 text-slate-600"} rounded-lg text-[10px] font-black hover:bg-slate-800 hover:text-white transition-all">
                                                    ${m}%
                                                </button>
                                            `).join("")}
                                            <input type="number" placeholder="Other" min="1" max="100" onchange="window.applyStoreDiscount(${u}, this.value)" class="w-16 px-2 py-2 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-center focus:outline-none focus:border-slate-900">
                                        </div>
                                    </div>
                                    
                                    <!-- Scheme Discounts -->
                                    ${o.applicableSchemes&&o.applicableSchemes.length>0?`
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Brand Schemes</label>
                                            <div class="space-y-2">
                                                ${o.applicableSchemes.map(m=>`
                                                    <button type="button" onclick="window.applySchemeDiscount(${u}, '${m.id}')" class="w-full p-3 ${o.scheme_id===m.id?"bg-slate-900 text-white border-slate-900":"bg-white border border-slate-200 text-slate-700"} rounded-xl text-left flex items-center justify-between hover:border-slate-900 transition-all">
                                                        <div>
                                                            <p class="text-[10px] font-black">${m.name}</p>
                                                            <p class="text-[8px] font-bold ${o.scheme_id===m.id?"text-white/70":"text-slate-400"}">${m.brand}</p>
                                                        </div>
                                                        <span class="text-[10px] font-black ${o.scheme_id===m.id?"text-white":"text-slate-900"}">
                                                            ${m.discount_type==="percentage"?`${m.discount_value}%`:`₹${m.discount_value.toLocaleString()}`} OFF
                                                        </span>
                                                    </button>
                                                `).join("")}
                                            </div>
                                        </div>
                                    `:`
                                        <div class="text-center py-3 opacity-50">
                                            <p class="text-[9px] font-bold text-slate-400">No brand schemes available for this product</p>
                                        </div>
                                    `}
                                </div>
                            `:""}
                            
                            <!-- Installation Date (for products requiring installation) -->
                            ${o.installation_required?`
                                <div class="px-4 py-3 bg-slate-50 border-t border-slate-200 flex items-center gap-3">
                                    <span class="material-icons-outlined text-slate-500 text-sm">event</span>
                                    <div class="flex-1">
                                        <label class="text-[8px] font-black text-slate-600 uppercase tracking-widest block mb-1">Installation Date</label>
                                        <input type="date" value="${o.installation_date||""}" onchange="window.updateItemInstallationDate(${u}, this.value)" min="${new Date().toISOString().split("T")[0]}" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                    </div>
                                    <button type="button" onclick="window.toggleItemInstallation(${u})" class="text-[8px] font-black text-slate-400 uppercase hover:text-slate-600" title="Disable installation">
                                        <span class="material-icons-outlined text-sm">close</span>
                                    </button>
                                </div>
                            `:""}
                            
                            <!-- Device Details Toggle -->
                            <button type="button" onclick="window.toggleCartItemDetails(${u})" class="w-full px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-2 text-[9px] font-black text-slate-500 uppercase hover:bg-slate-100 transition-all">
                                <span class="material-icons-outlined text-sm">${o.showDetails?"expand_less":"expand_more"}</span>
                                ${o.showDetails?"Hide":"Add"} Device Details
                            </button>
                            
                            ${o.showDetails?`
                                <div class="p-4 bg-slate-50 border-t border-slate-100 space-y-3">
                                    <!-- AI Scan Button (Mobile Only) -->
                                    <button type="button" onclick="window.captureDeviceImage(${u})" class="w-full py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase flex items-center justify-center gap-2 hover:bg-slate-800 transition-all sm:hidden ${Xt?"opacity-50 cursor-not-allowed":""}" ${Xt?"disabled":""}>
                                        ${Xt?`
                                            <span class="material-icons-outlined text-sm animate-spin">sync</span>
                                            <span id="ocr-progress-${u}">${ha||"Analyzing..."}</span>
                                        `:`
                                            <span class="material-icons-outlined text-sm">photo_camera</span>
                                            <span>Scan with AI</span>
                                        `}
                                    </button>
                                    
                                    <!-- Standard Fields -->
                                    <div class="grid grid-cols-2 gap-3">
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">IMEI Number</label>
                                            <input type="text" value="${o.imei||""}" onchange="window.updateCartItemDetail(${u}, 'imei', this.value)" placeholder="Enter IMEI" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                        </div>
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Serial Number</label>
                                            <input type="text" value="${o.serial_number||""}" onchange="window.updateCartItemDetail(${u}, 'serial_number', this.value)" placeholder="Enter Serial" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                        </div>
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">MAC ID</label>
                                            <input type="text" value="${o.mac_id||""}" onchange="window.updateCartItemDetail(${u}, 'mac_id', this.value)" placeholder="Enter MAC" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                        </div>
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Mfg. Date</label>
                                            <input type="date" value="${o.manufacturing_date||""}" onchange="window.updateCartItemDetail(${u}, 'manufacturing_date', this.value)" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                        </div>
                                    </div>
                                    
                                    <!-- Dynamic Extra Fields (from AI or manually added) -->
                                    ${o.extraFields&&o.extraFields.length>0?`
                                        <div class="pt-2 border-t border-slate-200">
                                            <div class="flex items-center justify-between mb-2">
                                                <span class="text-[8px] font-black text-slate-500 uppercase tracking-widest">Additional Fields</span>
                                            </div>
                                            <div class="grid grid-cols-2 gap-3">
                                                ${o.extraFields.map((m,S)=>`
                                                    <div class="relative">
                                                        <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">${m.label}</label>
                                                        <div class="flex gap-1">
                                                            <input type="${m.type||"text"}" 
                                                                   value="${m.value||""}" 
                                                                   onchange="window.updateCartItemExtraField(${u}, ${S}, this.value)" 
                                                                   placeholder="Enter ${m.label}"
                                                                   class="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                                            <button type="button" onclick="window.removeExtraField(${u}, ${S})" class="w-8 h-8 flex items-center justify-center text-slate-300 hover:text-slate-600 hover:bg-slate-200 rounded-lg transition-all" title="Remove field">
                                                                <span class="material-icons-outlined text-sm">close</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                `).join("")}
                                            </div>
                                        </div>
                                    `:""}
                                    
                                    <!-- Add Custom Field Button -->
                                    <button type="button" onclick="window.addCustomExtraField(${u})" class="w-full py-2 border border-dashed border-slate-300 text-slate-500 rounded-lg text-[9px] font-black uppercase flex items-center justify-center gap-1 hover:bg-slate-100 transition-all">
                                        <span class="material-icons-outlined text-sm">add</span>
                                        Add Custom Field
                                    </button>
                                    
                                    <!-- Manual installation toggle for products that don't auto-require it -->
                                    ${o.installation_required?"":`
                                        <button type="button" onclick="window.toggleItemInstallation(${u})" class="w-full py-2 border border-dashed border-slate-300 text-slate-500 rounded-lg text-[9px] font-black uppercase flex items-center justify-center gap-1 hover:bg-slate-100 transition-all">
                                            <span class="material-icons-outlined text-sm">build</span>
                                            Add Installation
                                        </button>
                                    `}
                                </div>
                            `:""}
                        </div>
                    `}).join("")}

                    ${I.length===0?`
                        <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                            <span class="material-icons-outlined text-3xl text-slate-200 text-center">shopping_basket</span>
                            <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] text-center">Cart is empty</span>
                        </div>
                    `:""}
                </div>
            </section>

            <!-- Action Buttons -->
            <div class="flex gap-3 pt-6 border-t border-slate-100 mt-6 text-left">
                <button type="button" onclick="window.saveDraft()" class="flex-1 py-4 border-2 border-slate-900 rounded-2xl text-[10px] font-black uppercase hover:bg-slate-50 transition-all text-center">Save Draft</button>
                <button type="button" id="complete-txn-btn" onclick="window.openPaymentModal()" class="flex-[2] py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-center">
                    Complete (₹${r.toLocaleString()})
                    <span class="material-icons-outlined text-sm text-center">arrow_forward</span>
                </button>
            </div>
        </div>

        <!-- Payment Modal -->
        ${la?`
            <div class="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
                <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
                    <div class="p-6 border-b border-slate-100 flex items-center justify-between">
                        <h3 class="text-sm font-black text-slate-900 uppercase tracking-widest">Select Payment Mode</h3>
                        <button type="button" onclick="window.closePaymentModal()" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900">
                            <span class="material-icons-outlined">close</span>
                        </button>
                    </div>
                    
                    <div class="p-6 space-y-4">
                        <div class="grid grid-cols-3 gap-3">
                            <button type="button" onclick="window.selectPaymentMode('cash')" class="p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${B==="cash"?"border-slate-900 bg-slate-50":"border-slate-100 hover:border-slate-300"}">
                                <span class="material-icons-outlined text-2xl ${B==="cash"?"text-slate-900":"text-slate-400"}">payments</span>
                                <span class="text-[10px] font-black uppercase ${B==="cash"?"text-slate-900":"text-slate-500"}">Cash</span>
                            </button>
                            <button type="button" onclick="window.selectPaymentMode('card')" class="p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${B==="card"?"border-slate-900 bg-slate-50":"border-slate-100 hover:border-slate-300"}">
                                <span class="material-icons-outlined text-2xl ${B==="card"?"text-slate-900":"text-slate-400"}">credit_card</span>
                                <span class="text-[10px] font-black uppercase ${B==="card"?"text-slate-900":"text-slate-500"}">Card</span>
                            </button>
                            <button type="button" onclick="window.selectPaymentMode('upi')" class="p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${B==="upi"?"border-slate-900 bg-slate-50":"border-slate-100 hover:border-slate-300"}">
                                <span class="material-icons-outlined text-2xl ${B==="upi"?"text-slate-900":"text-slate-400"}">qr_code</span>
                                <span class="text-[10px] font-black uppercase ${B==="upi"?"text-slate-900":"text-slate-500"}">UPI</span>
                            </button>
                        </div>

                        ${B==="card"||B==="upi"?`
                            <div>
                                <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">${B==="card"?"Card Reference / Last 4 Digits":"UPI Transaction ID"}</label>
                                <input type="text" value="${lt}" oninput="window.updatePaymentReference(this.value)" placeholder="${B==="card"?"Enter reference":"Enter UPI ID"}" class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                            </div>
                        `:""}

                        <div class="pt-4 border-t border-slate-100">
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-xs font-bold text-slate-500 uppercase">Total Amount</span>
                                <span class="text-xl font-black text-slate-900">₹${r.toLocaleString()}</span>
                            </div>
                            <button type="button" onclick="window.confirmPayment()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                                <span class="material-icons-outlined text-sm">check_circle</span>
                                Confirm Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `:""}
    `}function sl(e){const t=new Date(e);return t.setHours(0,0,0,0),t}function ca(e){const t=new Date(e);return t.setHours(23,59,59,999),t}function al(e,t,s,a){if(t==="all")return e;const n=new Date,l=sl(n);return e.filter(d=>{const r=new Date(d.date);switch(t){case"today":return r>=l&&r<=ca(n);case"week":{const p=new Date(l);return p.setDate(p.getDate()-p.getDay()),r>=p&&r<=ca(n)}case"month":{const p=new Date(l.getFullYear(),l.getMonth(),1);return r>=p&&r<=ca(n)}case"custom":{if(!s&&!a)return!0;const p=s?sl(new Date(s)):new Date(0),o=a?ca(new Date(a)):new Date;return r>=p&&r<=o}default:return!0}})}window.toggleDateFilterDropdown=e=>{e&&e.stopPropagation();const t=document.getElementById("date-filter-dropdown");t&&t.classList.toggle("hidden")};window.updateHistoryFromDate=e=>{c.historyFromDate=e,c.historyToDate&&(c.historyDateFilter="custom",window.triggerRender())};window.updateHistoryToDate=e=>{c.historyToDate=e,c.historyFromDate&&(c.historyDateFilter="custom",window.triggerRender())};function Ti(){const e=window.getCache(),t=e.sales||[],s=e.saleItems||[],a=t.filter(v=>v.status==="draft"),n=t.filter(v=>v.status!=="draft"),l=c.historyViewMode||"completed",d=c.historyDateFilter||"all",r=al(a,d,c.historyFromDate,c.historyToDate),p=al(n,d,c.historyFromDate,c.historyToDate),o=l==="drafts"?r:p,u=()=>{switch(d){case"today":return"Today";case"week":return"This Week";case"month":return"This Month";case"custom":return c.historyFromDate||c.historyToDate?"Custom Range":"All Time";default:return"All Time"}},h=v=>{switch(v){case"cash":return"payments";case"card":return"credit_card";case"upi":return"qr_code";default:return"account_balance_wallet"}},w=v=>{switch(v){case"cash":return"Cash";case"card":return"Card";case"upi":return"UPI";default:return"Paid"}};return`
        ${Ci("history")}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-12 text-left">
            <!-- Toggle & Filter Section -->
            <section class="space-y-4">
                <!-- View Mode Toggle -->
                <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                    <button type="button" onclick="window.setHistoryViewMode('completed')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-2 ${l==="completed"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">
                        <span class="material-icons-outlined text-sm">check_circle</span>
                        Completed (${n.length})
                    </button>
                    <button type="button" onclick="window.setHistoryViewMode('drafts')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-2 ${l==="drafts"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">
                        <span class="material-icons-outlined text-sm">edit_note</span>
                        Saved Drafts (${a.length})
                    </button>
                </div>

                <!-- Date Filter -->
                <div class="flex items-center justify-between gap-3">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        ${l==="drafts"?"Saved Drafts":"Completed"}
                        <span class="text-slate-300 ml-1">(${o.length})</span>
                    </h3>
                    
                    <div class="relative">
                        <button type="button" onclick="window.toggleDateFilterDropdown(event)" class="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-[9px] font-black text-slate-600 uppercase hover:border-slate-300 transition-all">
                            <span class="material-icons-outlined text-sm">calendar_today</span>
                            ${u()}
                            <span class="material-icons-outlined text-sm text-slate-400">expand_more</span>
                        </button>
                        
                        <!-- Date Filter Dropdown -->
                        <div id="date-filter-dropdown" class="hidden absolute top-full right-0 z-50 mt-2 w-64 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden">
                            <div class="p-2 space-y-1">
                                <button type="button" onclick="window.setHistoryDateFilter('all'); window.toggleDateFilterDropdown();" class="w-full p-3 text-left rounded-xl text-xs font-bold hover:bg-slate-50 flex items-center gap-3 ${d==="all"?"bg-slate-100 text-slate-900":"text-slate-600"}">
                                    <span class="material-icons-outlined text-sm">all_inclusive</span>
                                    All Transactions
                                </button>
                                <button type="button" onclick="window.setHistoryDateFilter('today'); window.toggleDateFilterDropdown();" class="w-full p-3 text-left rounded-xl text-xs font-bold hover:bg-slate-50 flex items-center gap-3 ${d==="today"?"bg-slate-100 text-slate-900":"text-slate-600"}">
                                    <span class="material-icons-outlined text-sm">today</span>
                                    Today
                                </button>
                                <button type="button" onclick="window.setHistoryDateFilter('week'); window.toggleDateFilterDropdown();" class="w-full p-3 text-left rounded-xl text-xs font-bold hover:bg-slate-50 flex items-center gap-3 ${d==="week"?"bg-slate-100 text-slate-900":"text-slate-600"}">
                                    <span class="material-icons-outlined text-sm">date_range</span>
                                    This Week
                                </button>
                                <button type="button" onclick="window.setHistoryDateFilter('month'); window.toggleDateFilterDropdown();" class="w-full p-3 text-left rounded-xl text-xs font-bold hover:bg-slate-50 flex items-center gap-3 ${d==="month"?"bg-slate-100 text-slate-900":"text-slate-600"}">
                                    <span class="material-icons-outlined text-sm">calendar_month</span>
                                    This Month
                                </button>
                            </div>
                            
                            <div class="border-t border-slate-100 p-3 space-y-3">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Custom Date Range</p>
                                <div class="grid grid-cols-2 gap-2">
                                    <div>
                                        <label class="text-[8px] font-bold text-slate-400 uppercase mb-1 block">From</label>
                                        <input type="date" value="${c.historyFromDate||""}" onchange="window.updateHistoryFromDate(this.value)" class="w-full px-2 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900">
                                    </div>
                                    <div>
                                        <label class="text-[8px] font-bold text-slate-400 uppercase mb-1 block">To</label>
                                        <input type="date" value="${c.historyToDate||""}" onchange="window.updateHistoryToDate(this.value)" class="w-full px-2 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Transactions List -->
            ${o.length===0?`
                <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                    <span class="material-icons-outlined text-3xl text-slate-200">${l==="drafts"?"edit_note":"receipt_long"}</span>
                    <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                        No ${l==="drafts"?"saved drafts":"transactions"} found
                    </span>
                    <span class="text-[9px] font-bold text-slate-300">
                        ${d!=="all"?"Try adjusting your date filter":""}
                    </span>
                </div>
            `:`
                <section class="space-y-3 text-left">
                    ${l==="drafts"?`
                        <!-- Drafts List -->
                        ${r.map(v=>{const m=s.filter(k=>k.sale_id===v.id),S=m[0]?m[0].product_name:"No items",_=m.length>1?`+ ${m.length-1} more`:"";return`
                                <div class="card border-2 border-dashed overflow-hidden ${c.salesHistoryId===v.id?"border-slate-900 shadow-lg":"border-slate-200"}">
                                    <button type="button" onclick="window.setSalesHistoryId('${v.id}')" class="p-5 text-left w-full">
                                        <div class="flex justify-between items-start mb-3 text-left">
                                            <div class="text-left">
                                                <div class="flex items-center gap-2 mb-1 text-left">
                                                    <span class="bg-slate-900 text-white px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">
                                                        Draft
                                                    </span>
                                                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter text-left">#${v.id}</p>
                                                </div>
                                                <h4 class="text-lg font-black text-slate-900 tracking-tighter text-left">${v.customer_name||"No Customer"}</h4>
                                            </div>
                                            <p class="text-lg font-black text-slate-900 tracking-tighter text-right">₹${v.total_amount?parseInt(v.total_amount).toLocaleString():0}</p>
                                        </div>
                                        <div class="space-y-1 text-left">
                                            <p class="text-[10px] font-bold text-slate-500 uppercase text-left">${S} ${_}</p>
                                            <p class="text-[9px] font-black text-slate-300 uppercase text-left">${new Date(v.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</p>
                                        </div>
                                    </button>
                                    <div class="px-5 pb-4 flex gap-2">
                                        <button type="button" onclick="window.loadDraft('${v.id}')" class="flex-1 py-2.5 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1.5 hover:bg-slate-800 transition-all">
                                            <span class="material-icons-outlined text-sm">edit</span>
                                            Resume Draft
                                        </button>
                                        <button type="button" onclick="window.deleteDraft('${v.id}')" class="py-2.5 px-4 bg-white border border-slate-200 text-slate-500 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1.5 hover:bg-slate-100 transition-all">
                                            <span class="material-icons-outlined text-sm">delete</span>
                                        </button>
                                    </div>
                                </div>
                            `}).join("")}
                    `:`
                        <!-- Completed Transactions List -->
                        ${p.map(v=>{const m=s.filter(G=>G.sale_id===v.id),S=m[0]?m[0].product_name:"Custom Sale",_=m.length>1?`+ ${m.length-1} more`:"",k=h(v.payment_mode),P=w(v.payment_mode);return`
                                <button type="button" onclick="window.setSalesHistoryId('${v.id}')" class="card p-4 sm:p-6 border-2 transition-all cursor-pointer text-left w-full ${c.salesHistoryId===v.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                                    <div class="flex justify-between items-start mb-4 text-left">
                                        <div class="text-left flex-1 min-w-0">
                                            <div class="flex items-center gap-2 mb-1 text-left flex-wrap">
                                                <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter text-left">Order #${v.id}</p>
                                                <span class="bg-slate-100 px-1.5 py-0.5 rounded text-[7px] font-black text-slate-400 flex items-center gap-1 uppercase tracking-tighter text-left">
                                                    <span class="material-icons-outlined text-[10px] text-left">store</span> In-Store
                                                </span>
                                                ${v.gst_required?`
                                                    <span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-tighter">
                                                        GST
                                                    </span>
                                                `:""}
                                                ${v.installation_required?`
                                                    <span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-tighter flex items-center gap-0.5">
                                                        <span class="material-icons-outlined text-[10px]">build</span> Install
                                                    </span>
                                                `:""}
                                            </div>
                                            <h4 class="text-lg sm:text-xl font-black text-slate-900 tracking-tighter text-left truncate">${v.customer_name}</h4>
                                        </div>
                                        <p class="text-lg sm:text-xl font-black text-slate-900 tracking-tighter text-right shrink-0 ml-2">₹${v.total_amount?parseInt(v.total_amount).toLocaleString():0}</p>
                                    </div>
                                    <div class="space-y-1 text-left">
                                        <p class="text-[10px] font-bold text-slate-500 uppercase text-left truncate">${S} ${_}</p>
                                        <div class="flex items-center justify-between text-left">
                                            <p class="text-[9px] font-black text-slate-500 uppercase text-left flex items-center gap-1">
                                                <span class="material-icons-outlined text-xs">${k}</span>
                                                ${P} • Completed
                                            </p>
                                            <p class="text-[9px] font-black text-slate-300 uppercase text-right">${new Date(v.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</p>
                                        </div>
                                    </div>
                                </button>
                            `}).join("")}
                    `}
                </section>
            `}
        </div>
    `}window.deleteDraft=async e=>{window.showConfirm("Are you sure you want to delete this draft?",async()=>{try{await M.sales.deleteItems(e),await M.sales.delete(e),await K(),window.toast.success("Draft deleted successfully")}catch(t){console.error("Error deleting draft:",t),window.toast.error("Error deleting draft: "+t.message)}})};window.printReceipt=()=>{window.print()};window.shareWhatsApp=()=>{const e=Da();if(!e)return;const t=Mi(e),s=`https://wa.me/?text=${encodeURIComponent(t)}`;window.open(s,"_blank")};window.automateTransaction=()=>{const e=Da();if(!e){window.toast.warning("No transaction data to automate");return}window._automationContext={transactionId:e.id,customer:e.customer,phone:e.phone,items:e.items,total:e.total,date:e.date,installationRequired:e.installationRequired,installationDate:e.installationDate},window.setApp("automation"),window.setAutomationViewMode("create")};window.shareNative=async()=>{const e=Da();if(!e)return;const t=Mi(e);if(navigator.share)try{await navigator.share({title:`Invoice #${e.id}`,text:t})}catch(s){s.name!=="AbortError"&&console.error("Share failed:",s)}else try{await navigator.clipboard.writeText(t),window.toast.success("Receipt copied to clipboard!")}catch(s){console.error("Copy failed:",s),window.toast.error("Failed to copy receipt")}};function Da(){var s,a,n;const e=c.currentTab==="history",t=window.getCache();if(e){const l=(t.sales||[]).find(u=>u.id===c.salesHistoryId);if(!l)return null;const d=(t.saleItems||[]).filter(u=>u.sale_id===l.id),r=(s=t.customers)==null?void 0:s.find(u=>u.id===l.customer_id),p=l.company_id?(a=t.companies)==null?void 0:a.find(u=>u.id===l.company_id):null,o=l.total_amount||0;return{id:l.id,status:l.status,customer:l.customer_name,customerId:l.customer_id,phone:(r==null?void 0:r.phone)||"N/A",date:new Date(l.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),time:new Date(l.date).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})+" IST",items:d.map(u=>{let h=[];if(u.extra_fields)try{h=JSON.parse(u.extra_fields)}catch{}return{name:u.product_name,category:u.category||"Standard",price:u.price,imei:u.imei,serial_number:u.serial_number,mac_id:u.mac_id,manufacturing_date:u.manufacturing_date,installation_date:u.installation_date,extraFields:h}}),subtotal:o/1.18,gst:o-o/1.18,total:o,paymentMode:l.payment_mode,paymentReference:l.payment_reference,gstRequired:l.gst_required,company:p,installationRequired:l.installation_required,installationDate:l.installation_date}}else{const l=window.getActiveCart?window.getActiveCart():[],d=window.getSelectedCustomer?window.getSelectedCustomer():{name:"Walk-in Customer",id:null},r=window.getSaleState?window.getSaleState():{},p=(n=window.getCache().customers)==null?void 0:n.find(h=>h.id===d.id),o=l.reduce((h,w)=>h+(w.final_price||w.mop||0),0),u=l.reduce((h,w)=>h+(w.discount_amount||0),0);return l.length===0?null:{id:"DRAFT",status:"draft",customer:d.name,customerId:d.id,phone:(p==null?void 0:p.phone)||"",date:new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),time:new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})+" IST",items:l.map(h=>({name:h.name,category:h.category,price:h.mop,discount_type:h.discount_type,discount_value:h.discount_value,discount_amount:h.discount_amount,scheme_name:h.scheme_name,final_price:h.final_price||h.mop,imei:h.imei,serial_number:h.serial_number,mac_id:h.mac_id,manufacturing_date:h.manufacturing_date,installation_date:h.installation_required?h.installation_date:null,extraFields:h.extraFields||[]})),subtotal:o/1.18,gst:o-o/1.18,total:o,totalDiscount:u,paymentMode:r.paymentMode,paymentReference:r.paymentReference,gstRequired:r.gstRequired,company:r.gstRequired?{name:r.companyName,gst_number:r.gstNumber}:null,installationRequired:r.installationRequired,installationDate:r.installationDate}}}function Mi(e){let t=`INVOICE #${e.id}
`;return t+=`━━━━━━━━━━━━━━━━━━━━
`,t+=`${e.date} | ${e.time}

`,t+=`${e.customer}
`,t+=`${e.phone}
`,e.company&&(t+=`${e.company.name}
`,t+=`GST: ${e.company.gst_number}
`),t+=`
━━━━━━━━━━━━━━━━━━━━
`,t+=`ITEMS:
`,e.items.forEach(s=>{t+=`
• ${s.name}
`,t+=`  ${s.category} - ₹${parseInt(s.price).toLocaleString()}
`,s.imei&&(t+=`  IMEI: ${s.imei}
`),s.serial_number&&(t+=`  S/N: ${s.serial_number}
`),s.installation_date&&(t+=`  Install: ${new Date(s.installation_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}
`)}),t+=`
━━━━━━━━━━━━━━━━━━━━
`,t+=`Subtotal: ₹${e.subtotal.toLocaleString(void 0,{maximumFractionDigits:2})}
`,t+=`GST (18%): ₹${e.gst.toLocaleString(void 0,{maximumFractionDigits:2})}
`,t+=`━━━━━━━━━━━━━━━━━━━━
`,t+=`TOTAL: ₹${parseInt(e.total).toLocaleString()}
`,e.paymentMode&&(t+=`
Paid via ${{cash:"Cash",card:"Card",upi:"UPI"}[e.paymentMode]||e.paymentMode}`,e.paymentReference&&(t+=` (Ref: ${e.paymentReference})`)),e.installationRequired&&e.installationDate&&(t+=`

Installation: ${new Date(e.installationDate).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}`),t+=`

━━━━━━━━━━━━━━━━━━━━
`,t+=`Thank you for shopping!
`,t+="Powered by RetailerOS",t}function id(e){switch(e){case"cash":return"payments";case"card":return"credit_card";case"upi":return"qr_code";default:return"account_balance_wallet"}}function rd(e){switch(e){case"cash":return"Cash";case"card":return"Card";case"upi":return"UPI";default:return"Payment"}}function In(){const e=c.currentTab==="history",t=Da();if(!t)return`<div class="p-10 text-center opacity-40 flex flex-col items-center justify-center h-full">
            <span class="material-icons-outlined text-4xl mb-2">${e?"receipt_long":"shopping_cart"}</span>
            <p class="text-xs font-black uppercase tracking-widest">${e?"Select a transaction to view receipt":"Add items to cart to preview invoice"}</p>
        </div>`;const s=t.status==="draft";return`
        <div id="receipt-content" class="card p-6 sm:p-8 bg-white text-slate-900 font-inter leading-relaxed shadow-sm relative h-full flex flex-col border border-slate-100 print:shadow-none print:border-0">
            <!-- Header -->
            <div class="text-center border-b border-dashed border-slate-200 pb-6 mb-6">
                <h2 class="text-2xl font-black tracking-tighter mb-1">${s?"Draft Invoice":"Invoice"}</h2>
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">RetailerOS • System Generated</p>
                <div class="mt-4 flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest px-4">
                    <span>GSTIN: 27AAACR3456D1Z5</span>
                    <span>Order #${t.id}</span>
                </div>
            </div>

            <!-- Info Grid -->
            <div class="grid grid-cols-2 gap-4 sm:gap-8 mb-6">
                <div class="text-left">
                   <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">Billed To</p>
                   <p class="text-sm font-black text-slate-900 text-left">${t.customer}</p>
                   <p class="text-[10px] font-bold text-slate-400 text-left">${t.phone}</p>
                </div>
                <div class="text-right">
                   <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-right">Transaction</p>
                   <p class="text-sm font-black text-slate-900 text-right">${t.date}</p>
                   <p class="text-[10px] font-bold text-slate-400 text-right">${t.time}</p>
                </div>
            </div>

            <!-- GST Company Info -->
            ${t.gstRequired&&t.company?`
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6">
                    <div class="flex items-center gap-2 text-[9px] font-black text-slate-600 uppercase tracking-widest mb-2">
                        <span class="material-icons-outlined text-sm">business</span>
                        GST Invoice
                    </div>
                    <p class="text-sm font-black text-slate-900">${t.company.name}</p>
                    <p class="text-[10px] font-bold text-slate-500">GSTIN: ${t.company.gst_number}</p>
                </div>
            `:""}

            <!-- Installation Summary -->
            ${t.installationRequired?`
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6 flex items-center gap-3">
                    <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600">
                        <span class="material-icons-outlined text-sm">build</span>
                    </div>
                    <div>
                        <p class="text-[9px] font-black text-slate-600 uppercase tracking-widest">Installation Required</p>
                        <p class="text-[10px] font-bold text-slate-500">See individual items for scheduled dates</p>
                    </div>
                </div>
            `:""}

            <!-- Items -->
            <div class="space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-2 text-left">
                ${t.items.map(a=>`
                    <div class="pb-4 border-b border-slate-100 last:border-0">
                        <div class="flex justify-between items-start mb-2 text-left">
                            <div class="text-left flex-1 min-w-0">
                                <h4 class="text-sm font-black text-slate-900 text-left truncate">${a.name}</h4>
                                <p class="text-[9px] font-bold text-slate-400 uppercase mt-0.5 text-left">${a.category}</p>
                            </div>
                            <div class="text-right shrink-0 ml-2">
                                ${a.discount_amount>0?`
                                    <p class="text-[9px] font-bold text-slate-400 line-through">₹${parseInt(a.price).toLocaleString()}</p>
                                    <p class="text-sm font-black text-slate-900">₹${parseInt(a.final_price||a.price).toLocaleString()}</p>
                                `:`
                                    <p class="text-sm font-black text-slate-900">₹${parseInt(a.price).toLocaleString()}</p>
                                `}
                            </div>
                        </div>
                        ${a.discount_amount>0?`
                            <div class="flex items-center gap-2 mb-2 bg-slate-900 text-white px-2 py-1 rounded-lg">
                                <span class="material-icons-outlined text-xs">local_offer</span>
                                <span class="text-[8px] font-black uppercase flex-1">
                                    ${a.discount_type==="scheme"?a.scheme_name:`Store Discount (${a.discount_value}%)`}
                                </span>
                                <span class="text-[9px] font-black">-₹${parseInt(a.discount_amount).toLocaleString()}</span>
                            </div>
                        `:""}
                        ${a.imei||a.serial_number||a.mac_id||a.installation_date||a.extraFields&&a.extraFields.length>0?`
                            <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 mt-2">
                                <div class="flex items-center gap-2 text-[8px] font-black text-slate-500 uppercase tracking-widest mb-2">
                                    <span class="material-icons-outlined text-xs">verified</span> Device Info
                                </div>
                                <div class="grid grid-cols-2 gap-2 text-left">
                                    ${a.imei?`
                                        <div>
                                            <p class="text-[7px] font-bold text-slate-400 uppercase">IMEI</p>
                                            <p class="text-[9px] font-black text-slate-700 tabular-nums">${a.imei}</p>
                                        </div>
                                    `:""}
                                    ${a.serial_number?`
                                        <div>
                                            <p class="text-[7px] font-bold text-slate-400 uppercase">Serial</p>
                                            <p class="text-[9px] font-black text-slate-700 tabular-nums">${a.serial_number}</p>
                                        </div>
                                    `:""}
                                    ${a.mac_id?`
                                        <div>
                                            <p class="text-[7px] font-bold text-slate-400 uppercase">MAC ID</p>
                                            <p class="text-[9px] font-black text-slate-700 tabular-nums">${a.mac_id}</p>
                                        </div>
                                    `:""}
                                    ${a.manufacturing_date?`
                                        <div>
                                            <p class="text-[7px] font-bold text-slate-400 uppercase">Mfg. Date</p>
                                            <p class="text-[9px] font-black text-slate-700 tabular-nums">${new Date(a.manufacturing_date).toLocaleDateString("en-GB",{month:"short",year:"numeric"})}</p>
                                        </div>
                                    `:""}
                                    ${(a.extraFields||[]).map(n=>`
                                        <div>
                                            <p class="text-[7px] font-bold text-slate-400 uppercase">${n.label}</p>
                                            <p class="text-[9px] font-black text-slate-700 tabular-nums">${n.value}</p>
                                        </div>
                                    `).join("")}
                                    ${a.installation_date?`
                                        <div class="col-span-2 pt-2 mt-2 border-t border-slate-200">
                                            <p class="text-[7px] font-bold text-slate-500 uppercase flex items-center gap-1">
                                                <span class="material-icons-outlined text-[10px]">build</span> Installation Date
                                            </p>
                                            <p class="text-[9px] font-black text-slate-700">${new Date(a.installation_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</p>
                                        </div>
                                    `:""}
                                </div>
                            </div>
                        `:""}
                    </div>
                `).join("")}
            </div>

            <!-- Footer Totals -->
            <div class="border-t border-dashed border-slate-200 pt-6 mt-4 space-y-2">
                <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">Subtotal</span><span>₹${t.subtotal.toLocaleString(void 0,{maximumFractionDigits:2})}</span></div>
                ${t.totalDiscount>0?`
                    <div class="flex justify-between text-[10px] font-bold text-slate-900 uppercase">
                        <span class="tracking-widest flex items-center gap-1"><span class="material-icons-outlined text-xs">local_offer</span> You Saved</span>
                        <span>-₹${parseInt(t.totalDiscount).toLocaleString()}</span>
                    </div>
                `:""}
                <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">GST (18%)</span><span>₹${t.gst.toLocaleString(void 0,{maximumFractionDigits:2})}</span></div>
                <div class="flex justify-between text-xl font-black text-slate-900 mt-4 items-center">
                    <span>Grand Total</span>
                    <span class="text-slate-900">₹${parseInt(t.total).toLocaleString()}</span>
                </div>
            </div>
            
            <!-- Payment Status -->
            ${t.paymentMode?`
                <div class="bg-slate-900 text-white p-4 rounded-xl mt-6 flex justify-between items-center text-left">
                    <div class="flex items-center gap-3 text-left">
                        <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span class="material-icons-outlined text-sm">${id(t.paymentMode)}</span>
                        </div>
                        <div class="text-left">
                            <p class="text-[9px] font-black uppercase tracking-widest text-left">Paid via ${rd(t.paymentMode)}</p>
                            ${t.paymentReference?`<p class="text-[8px] font-bold text-white/60 tracking-widest uppercase text-left">Ref: ${t.paymentReference}</p>`:""}
                        </div>
                    </div>
                    <span class="text-[9px] font-black bg-white text-slate-900 px-2 py-1 rounded uppercase tracking-widest">Paid</span>
                </div>
            `:s?`
                <div class="bg-slate-100 border border-slate-200 p-4 rounded-xl mt-6 flex items-center gap-3">
                    <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                        <span class="material-icons-outlined text-sm">pending</span>
                    </div>
                    <div>
                        <p class="text-[9px] font-black text-slate-600 uppercase tracking-widest">Payment Pending</p>
                        <p class="text-[8px] font-bold text-slate-400">Complete transaction to record payment</p>
                    </div>
                </div>
            `:""}
            
            <!-- Action Buttons -->
            <div class="flex justify-end gap-2 mt-4 no-print">
                <button type="button" onclick="window.automateTransaction()" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" title="Create Automation">
                    <span class="material-icons-outlined text-lg">smart_toy</span>
                </button>
                <button type="button" onclick="window.shareWhatsApp()" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" title="Share via WhatsApp">
                    <span class="material-icons-outlined text-lg">chat</span>
                </button>
                <button type="button" onclick="window.shareNative()" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" title="Share">
                    <span class="material-icons-outlined text-lg">share</span>
                </button>
                <button type="button" onclick="window.printReceipt()" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" title="Print">
                    <span class="material-icons-outlined text-lg">print</span>
                </button>
            </div>
        </div>
    `}function La(e,t="RETAILEROS"){return`
        <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
            <div class="flex items-center justify-between mb-6 text-left">
                <button onclick="${c.clientViewMode==="directory"||c.clientViewMode==="groups"?"setApp('launcher')":"setClientMode('directory')"}" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                    <span class="material-icons-outlined text-left">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">${c.clientViewMode==="directory"||c.clientViewMode==="groups"?"Back":"Directory"}</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">${e}</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">${t}</p>
                </div>
                <div class="w-10"></div>
            </div>
        </header>
    `}function nl(){const e=window.getCache(),t=e.customers||[],s=c.clientSearchQuery||"",n=[...s?t.filter(l=>l.name.toLowerCase().includes(s.toLowerCase())||l.phone&&l.phone.includes(s)||l.email&&l.email.toLowerCase().includes(s.toLowerCase())):t].sort((l,d)=>new Date(d.joined_at||0)-new Date(l.joined_at||0));return`
        ${La("Clients","RETAILEROS")}
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
                       value="${s}"
                       oninput="window.updateClientSearch(this.value)" 
                       placeholder="Search by name, phone, email..." 
                       class="w-full pl-11 pr-4 py-3 bg-white border border-slate-100 rounded-2xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
            </div>

            <!-- Stats Bar -->
            <div class="flex items-center justify-between text-left">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">
                    ${n.length} ${n.length===1?"Client":"Clients"}
                    ${s?` matching "${s}"`:""}
                </p>
                <span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded">Database: Live</span>
            </div>

            <!-- Client List -->
            <div class="space-y-3 pb-24 text-left">
                ${n.length===0?`
                    <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                        <span class="material-icons-outlined text-3xl text-slate-200">person_off</span>
                        <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                            ${s?"No clients found":"No clients yet"}
                        </span>
                        ${s?'<span class="text-[9px] font-bold text-slate-300">Try a different search term</span>':""}
                    </div>
                `:n.map(l=>{var p;const d=(e.sales||[]).filter(o=>o.customer_id===l.id&&o.status!=="draft"),r=d.reduce((o,u)=>o+(u.total_amount||0),0);return(p=d[0])==null||p.date,`
                    <button type="button" onclick="window.setClientMode('profile', '${l.name.replace(/'/g,"\\'")}', '${l.id}')" class="card p-4 sm:p-5 border-2 transition-all flex items-center justify-between group cursor-pointer text-left w-full ${c.selectedClient===l.name?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                        <div class="flex items-center gap-3 sm:gap-4 text-left flex-1 min-w-0">
                            <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 border border-slate-100 flex items-center justify-center font-black text-[10px] text-slate-400 text-center shrink-0">${l.name.split(" ").map(o=>o[0]).join("").toUpperCase()}</div>
                            <div class="text-left flex-1 min-w-0">
                                <h4 class="text-sm font-black text-slate-900 text-left truncate">${l.name}</h4>
                                <p class="text-[10px] font-bold text-slate-400 -mt-0.5 text-left truncate">${l.phone||l.email||"No contact"}</p>
                            </div>
                        </div>
                        <div class="text-right shrink-0 ml-2">
                            ${r>0?`
                                <p class="text-xs font-black text-slate-900 tracking-tighter text-right">₹${r.toLocaleString()}</p>
                                <p class="text-[7px] font-black text-slate-300 uppercase tracking-tighter text-right">${d.length} orders</p>
                            `:`
                                <p class="text-[8px] font-black text-slate-300 uppercase tracking-tighter text-right">No orders</p>
                            `}
                        </div>
                    </button>
                `}).join("")}
            </div>

            <!-- Floating Add Button -->
            <button onclick="setClientMode('add')" class="fixed sm:absolute bottom-8 right-8 w-14 h-14 bg-slate-900 text-white rounded-[20px] flex items-center justify-center shadow-2xl hover:scale-105 transition-transform z-20 text-center">
                <span class="material-icons-outlined text-2xl text-center">add</span>
            </button>
        </div>
    `}window.updateClientSearch=e=>{const t=document.getElementById("client-search-input"),s=(t==null?void 0:t.selectionStart)||e.length;c.clientSearchQuery=e,window.triggerRender(!1),setTimeout(()=>{const a=document.getElementById("client-search-input");a&&(a.focus(),a.setSelectionRange(s,s))},0)};async function od(){const e=document.getElementById("client-name"),t=document.getElementById("client-phone"),s=document.getElementById("client-email"),a=document.getElementById("client-location");if(!e||!t){console.error("Form inputs not found"),window.toast.error("Form error. Please try again.");return}const n=e.value.trim(),l=t.value.trim(),d=s.value.trim(),r=a?a.value.trim():"";if(!n||!l){window.toast.warning("Name and Phone are required");return}const p=document.getElementById("save-client-btn");let o="";p&&(o=p.innerHTML,p.innerHTML='<span class="material-icons-outlined animate-spin text-xs">sync</span> Saving...',p.disabled=!0);try{const u="CL-"+Math.random().toString(36).substr(2,6).toUpperCase();console.log("Saving client:",{id:u,name:n,phone:l,email:d,location:r}),await M.clients.add({id:u,name:n,phone:l,email:d,location:r}),console.log("Client saved successfully"),await K(),window.toast.success("Client added successfully!"),c.currentApp==="sales"?(Ai(u,n),yl("default")):vl("directory")}catch(u){console.error("Error saving client:",u),window.toast.error("Error saving client: "+u.message),p&&(p.innerHTML=o,p.disabled=!1)}}window.saveClient=od;function dn(e){const t=e==="desktop";return`
        ${t?"":La("New Client","RETAILEROS • CLIENTS")}
        <div class="${t?"h-full flex flex-col pt-8":"scrolling-content"} px-4 sm:px-8 space-y-8 pb-12 text-left">
             ${t?`
                <div class="flex items-center justify-between mb-2 text-left">
                     <div class="flex items-center gap-4">
                         <div class="w-12 h-12 bg-slate-900 rounded-[18px] flex items-center justify-center shadow-lg text-center">
                             <span class="material-icons-outlined text-white text-center">person_add</span>
                         </div>
                         <div class="text-left">
                            <h2 class="text-xl font-black tracking-tighter text-left">New Customer</h2>
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] text-left">Add to Sales Transaction</p>
                         </div>
                     </div>
                     <button type="button" onclick="window.setSalesMode('default')" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full">
                         <span class="material-icons-outlined">close</span>
                     </button>
                </div>
             `:""}

            <div class="space-y-6 text-left">
                <div class="space-y-2 text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Full Name <span class="text-red-400">*</span></label>
                    <input type="text" id="client-name" placeholder="e.g. Jonathan Ive" class="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                </div>
                <div class="space-y-2 text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Mobile Number <span class="text-red-400">*</span></label>
                    <input type="tel" id="client-phone" placeholder="+91 98765 43210" class="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                </div>
                <div class="space-y-2 text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Email Address</label>
                    <input type="email" id="client-email" placeholder="client@example.com" class="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                </div>
                <div class="space-y-2 text-left relative">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Location</label>
                    <input type="text" id="client-location" placeholder="City, State" class="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm pr-14 text-left">
                    <span class="absolute right-5 top-[38px] material-icons-outlined text-slate-300 text-right">location_on</span>
                </div>
            </div>

            <button type="button" id="save-client-btn" onclick="window.saveClient()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-center">
                Save Customer
                <span class="material-icons-outlined text-xs text-center">done_all</span>
            </button>
            
            ${t?`
                <p class="text-[9px] font-bold text-slate-300 text-center">Customer will be automatically selected after saving</p>
            `:""}
        </div>
    `}function ll(e){var S;const t=e==="desktop",s=window.getCache(),a=((S=s.customers)==null?void 0:S.find(_=>_.id===c.selectedClientId||_.name===c.selectedClient))||{name:c.selectedClient||"Unknown",joined_at:new Date().toISOString()},n=a.name?a.name.split(" ").map(_=>_[0]).join("").toUpperCase():"?",l=(s.sales||[]).filter(_=>_.customer_id===a.id&&_.status!=="draft").sort((_,k)=>new Date(k.date)-new Date(_.date)),d=s.saleItems||[],r=(s.inquiries||[]).filter(_=>_.customer_id===a.id||_.customer_name===a.name),p=(s.repairs||[]).filter(_=>_.customer_id===a.id||_.customer_name===a.name),o=(s.automations||[]).filter(_=>_.customer_id===a.id),u=s.automationMessages||[],h=(s.communications||[]).filter(_=>_.customer_id===a.id),w=l.reduce((_,k)=>_+(k.total_amount||0),0),v=l.length,m=[...l.map(_=>({type:"sale",date:_.date,data:_,items:d.filter(k=>k.sale_id===_.id)})),...p.map(_=>({type:"repair",date:_.created_at||_.date,data:_})),...r.map(_=>({type:"inquiry",date:_.date||_.created_at,data:_})),...o.map(_=>({type:"automation",date:_.created_at,data:_,messages:u.filter(k=>k.automation_id===_.id)})),...h.map(_=>({type:"communication",date:_.sent_at,data:_}))].sort((_,k)=>new Date(k.date)-new Date(_.date));return`
        ${t?"":La("Client Profile","RETAILEROS")}
        <div class="scrolling-content px-4 sm:px-8 space-y-8 pb-12 text-left">
            <!-- Profile Header -->
            <div class="flex flex-col items-center pt-8 text-center">
                <div class="w-20 h-20 sm:w-24 sm:h-24 bg-slate-100 rounded-full mb-6 flex items-center justify-center font-black text-2xl sm:text-3xl text-slate-400 shadow-inner border-[6px] border-white relative text-center">
                    ${n}
                    <div class="absolute bottom-1 right-1 w-5 h-5 sm:w-6 sm:h-6 bg-slate-900 border-4 border-white rounded-full text-center"></div>
                </div>
                <h2 class="text-2xl sm:text-3xl font-black tracking-tighter text-slate-900 text-center">${a.name}</h2>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 text-center">
                    ${a.location||"Customer"} • Joined ${new Date(a.joined_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}
                </p>
                
                <!-- Contact Info -->
                <div class="mt-4 flex flex-col items-center gap-1 text-center">
                    ${a.phone?`<p class="text-xs font-bold text-slate-500">${a.phone}</p>`:""}
                    ${a.email?`<p class="text-xs font-bold text-slate-400">${a.email}</p>`:""}
                </div>
                
                <!-- Quick Actions -->
                <div class="flex items-center gap-4 mt-8 text-center justify-center">
                    ${a.phone?`<a href="tel:${a.phone}" class="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-900 hover:shadow-lg transition-all text-center"><span class="material-icons-outlined text-center">call</span></a>`:""}
                    <button class="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-900 hover:shadow-lg transition-all text-center"><span class="material-icons-outlined text-center">chat_bubble</span></button>
                    <button onclick="setApp('sales')" class="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl hover:scale-105 transition-all text-center"><span class="material-icons-outlined text-center">local_mall</span></button>
                </div>
            </div>

            <!-- Stats Cards -->
            <div class="grid grid-cols-2 gap-3">
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">₹${w.toLocaleString()}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Total Spent</p>
                </div>
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${v}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Orders</p>
                </div>
            </div>

            <!-- Timeline Section -->
            <div class="space-y-6 text-left">
                <div class="flex justify-between items-center text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Activity Timeline</h3>
                    <span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded text-right">${m.length} events</span>
                </div>

                ${m.length===0?`
                    <div class="text-center py-16 opacity-30">
                        <span class="material-icons-outlined text-4xl mb-4">history_toggle_off</span>
                        <p class="text-[10px] font-black uppercase tracking-widest leading-relaxed">No activities recorded<br>for this client yet.</p>
                    </div>
                `:`
                    <!-- Timeline -->
                    <div class="relative pl-8 sm:pl-10 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-slate-100 before:border-l before:border-dashed before:border-slate-200 text-left">
                        ${m.map(_=>{if(_.type==="sale"){const k=_.data,P=_.items;return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-600 text-center">shopping_cart</span>
                                        </div>
                                        <button type="button" onclick="window.viewClientInvoice('${k.id}')" class="card p-4 sm:p-5 group hover:border-slate-900 hover:shadow-lg transition-all text-left w-full cursor-pointer">
                                            <div class="flex justify-between items-start mb-3 text-left">
                                                <div class="text-left">
                                                    <div class="flex items-center gap-2 mb-1">
                                                        <h4 class="text-xs font-black text-slate-900 text-left">Purchase</h4>
                                                        ${k.gst_required?'<span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase">GST</span>':""}
                                                        ${k.payment_mode?`<span class="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[7px] font-black uppercase">${k.payment_mode}</span>`:""}
                                                    </div>
                                                    <p class="text-xl font-black tracking-tighter text-left">₹${(k.total_amount||0).toLocaleString()}</p>
                                                </div>
                                                <div class="flex items-center gap-2">
                                                    <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(k.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</span>
                                                    <span class="material-icons-outlined text-sm text-slate-300 group-hover:text-slate-900 transition-colors">chevron_right</span>
                                                </div>
                                            </div>
                                            <!-- Items List -->
                                            <div class="space-y-2 text-left">
                                                ${P.map(G=>`
                                                    <div class="flex justify-between items-center bg-slate-50 rounded-lg p-2">
                                                        <div class="text-left flex-1 min-w-0">
                                                            <p class="text-[10px] font-black text-slate-900 truncate">${G.product_name}</p>
                                                            <p class="text-[8px] font-bold text-slate-400 uppercase">${G.category||"Product"}</p>
                                                        </div>
                                                        <p class="text-[10px] font-black text-slate-600 ml-2">₹${(G.price||0).toLocaleString()}</p>
                                                    </div>
                                                `).join("")}
                                            </div>
                                            ${k.installation_required?`
                                                <div class="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 text-[9px] font-bold text-slate-500">
                                                    <span class="material-icons-outlined text-xs">build</span>
                                                    Installation ${k.installation_date?`on ${new Date(k.installation_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}`:"Required"}
                                                </div>
                                            `:""}
                                        </button>
                                    </div>
                                `}if(_.type==="repair"){const k=_.data;return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-500 text-center">build</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 group hover:border-slate-300 transition-all text-left">
                                            <div class="flex justify-between items-start mb-2 text-left">
                                                <div class="text-left">
                                                    <h4 class="text-xs font-black text-slate-900 text-left">Device Repair</h4>
                                                    <p class="text-lg font-black tracking-tighter text-left">₹${k.cost||"Estimating"}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(k.created_at||k.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</span>
                                            </div>
                                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">${k.device_model||"Device"} • ${k.status||"In Progress"}</p>
                                        </div>
                                    </div>
                                `}if(_.type==="inquiry"){const k=_.data;return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-400 text-center">info</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 flex justify-between items-start group hover:border-slate-300 transition-all text-left">
                                            <div class="text-left">
                                                <h4 class="text-xs font-black text-slate-900 text-left">Inquiry</h4>
                                                <p class="text-[11px] font-bold text-slate-500 text-left">${k.request||"Product Interest"}</p>
                                                <div class="flex items-center gap-1 mt-2 text-left">
                                                    <div class="w-1.5 h-1.5 ${k.status==="PENDING"||k.status==="pending"?"bg-slate-400":"bg-slate-900"} rounded-full text-left"></div>
                                                    <p class="text-[8px] font-black text-slate-400 uppercase text-left">${k.status||"Open"}</p>
                                                </div>
                                            </div>
                                            <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(k.date||k.created_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</span>
                                        </div>
                                    </div>
                                `}if(_.type==="automation"){const k=_.data,P=_.messages||[],G=P.filter(Gt=>Gt.status==="sent").length,Cs=P.filter(Gt=>Gt.status==="pending").length;return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-slate-900 border border-slate-900 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-white text-center">smart_toy</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 group hover:border-slate-300 transition-all text-left border-l-4 border-l-slate-900">
                                            <div class="flex justify-between items-start mb-2 text-left">
                                                <div class="text-left">
                                                    <div class="flex items-center gap-2 mb-1">
                                                        <h4 class="text-xs font-black text-slate-900 text-left">Automation</h4>
                                                        <span class="bg-slate-900 text-white px-1.5 py-0.5 rounded text-[7px] font-black uppercase">${k.status}</span>
                                                    </div>
                                                    <p class="text-sm font-black tracking-tight text-left">${k.name}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(k.created_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</span>
                                            </div>
                                            <div class="flex items-center gap-3 mt-3 text-left">
                                                <div class="flex items-center gap-1 text-[9px] font-bold text-slate-500">
                                                    <span class="material-icons-outlined text-xs">check_circle</span>
                                                    ${G} sent
                                                </div>
                                                <div class="flex items-center gap-1 text-[9px] font-bold text-slate-400">
                                                    <span class="material-icons-outlined text-xs">schedule</span>
                                                    ${Cs} scheduled
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `}if(_.type==="communication"){const k=_.data,P=k.type==="whatsapp"?"chat":k.type==="call"?"call":"mail",G=k.type==="whatsapp"?"WhatsApp":k.type==="call"?"Phone Call":"Email";return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-500 text-center">${P}</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 group hover:border-slate-300 transition-all text-left">
                                            <div class="flex justify-between items-start mb-2 text-left">
                                                <div class="text-left flex-1 min-w-0">
                                                    <div class="flex items-center gap-2 mb-1">
                                                        <h4 class="text-xs font-black text-slate-900 text-left">${G}</h4>
                                                        <span class="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[7px] font-black uppercase">${k.direction}</span>
                                                        ${k.status==="delivered"?'<span class="text-slate-400"><span class="material-icons-outlined text-xs">done_all</span></span>':""}
                                                    </div>
                                                    <p class="text-[10px] font-bold text-slate-500 text-left line-clamp-2">${k.content}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right shrink-0 ml-2">${new Date(k.sent_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}</span>
                                            </div>
                                        </div>
                                    </div>
                                `}return""}).join("")}
                    </div>
                `}

                <div class="pt-8">
                     <button onclick="setApp('sales'); setTab('new-sale');" class="w-full py-5 bg-slate-900 text-white rounded-[20px] text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all text-center">
                        New Purchase
                    </button>
                    <button onclick="setClientMode('directory')" class="w-full py-4 text-[9px] font-black text-slate-300 uppercase underline decoration-slate-200 underline-offset-8 mt-4 text-center">Back to Directory</button>
                </div>
            </div>
        </div>
    `}const Di=e=>`${e}-${Math.random().toString(36).substr(2,8).toUpperCase()}`;let L={name:"",description:"",isCompany:!1,gstNumber:"",contactPerson:""};function cd(){L={name:"",description:"",isCompany:!1,gstNumber:"",contactPerson:""}}window.updateGroupForm=(e,t)=>{L[e]=t,e==="isCompany"&&window.triggerRender(!1)};window.toggleGroupIsCompany=()=>{L.isCompany=!L.isCompany,window.triggerRender(!1)};window.saveGroup=async()=>{if(!L.name.trim()){window.toast.warning("Please enter a group name");return}const e=document.getElementById("save-group-btn");e&&(e.disabled=!0,e.innerHTML='<span class="material-icons-outlined animate-spin text-xs">sync</span> Saving...');try{const t=Di("GRP");await M.groups.add({id:t,name:L.name.trim(),description:L.description.trim(),is_company:L.isCompany?1:0,gst_number:L.isCompany?L.gstNumber.trim():null,contact_person:L.isCompany?L.contactPerson.trim():null,created_at:new Date().toISOString()}),cd(),await K(),c.groupViewMode="list",c.selectedGroupId=t,window.toast.success(`${L.isCompany?"Company":"Group"} created successfully!`),window.triggerRender()}catch(t){console.error("Error saving group:",t),window.toast.error("Error saving group: "+t.message),e&&(e.disabled=!1,e.innerHTML="Create Group")}};window.deleteGroup=async e=>{window.showConfirm("Are you sure you want to delete this group? All member associations will be removed.",async()=>{try{await M.groups.deleteMembers(e),await M.groups.delete(e),await K(),c.selectedGroupId=null,c.groupViewMode="list",window.toast.success("Group deleted successfully"),window.triggerRender()}catch(t){console.error("Error deleting group:",t),window.toast.error("Error deleting group: "+t.message)}})};window.addMemberToGroup=async(e,t)=>{try{await M.groups.addMember({id:Di("GM"),group_id:e,customer_id:t,added_at:new Date().toISOString()}),await K(),window.toast.success("Member added"),window.triggerRender(!1)}catch(s){console.error("Error adding member:",s),window.toast.error("Error adding member: "+s.message)}};window.removeMemberFromGroup=async(e,t)=>{try{await M.groups.removeMember(e,t),await K(),window.toast.info("Member removed"),window.triggerRender(!1)}catch(s){console.error("Error removing member:",s),window.toast.error("Error removing member: "+s.message)}};window.updateGroupSearch=e=>{const t=document.getElementById("group-search-input"),s=(t==null?void 0:t.selectionStart)||e.length;c.groupSearchQuery=e,window.triggerRender(!1),setTimeout(()=>{const a=document.getElementById("group-search-input");a&&(a.focus(),a.setSelectionRange(s,s))},0)};function dd(){const e=window.getCache(),t=e.groups||[],s=e.groupMembers||[],a=c.groupSearchQuery||"",n=a?t.filter(r=>r.name.toLowerCase().includes(a.toLowerCase())||r.description&&r.description.toLowerCase().includes(a.toLowerCase())):t,l=n.filter(r=>r.is_company===1),d=n.filter(r=>r.is_company!==1);return`
        ${La("Groups","RETAILEROS")}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 relative text-left">
            <!-- Toggle -->
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1 mb-2 text-left">
                <button onclick="window.setClientMode('directory')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg text-slate-400 text-center">Directory</button>
                <button class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg bg-white shadow-sm text-slate-900 text-center">Groups</button>
            </div>

            <!-- Search -->
            <div class="relative">
                <span class="absolute left-4 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-sm">search</span>
                <input type="text" 
                       id="group-search-input"
                       value="${a}"
                       oninput="window.updateGroupSearch(this.value)" 
                       placeholder="Search groups & companies..." 
                       class="w-full pl-11 pr-4 py-3 bg-white border border-slate-100 rounded-2xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
            </div>

            <!-- Stats -->
            <div class="flex items-center justify-between text-left">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">
                    ${n.length} Total • ${l.length} Companies • ${d.length} Groups
                </p>
            </div>

            <!-- Groups List -->
            <div class="space-y-3 pb-24 text-left">
                ${n.length===0?`
                    <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                        <span class="material-icons-outlined text-3xl text-slate-200">group_off</span>
                        <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                            ${a?"No groups found":"No groups yet"}
                        </span>
                        <button onclick="window.setGroupViewMode('create')" class="mt-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase">
                            Create First Group
                        </button>
                    </div>
                `:`
                    ${l.length>0?`
                        <div class="pt-2">
                            <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-3">Companies</p>
                            ${l.map(r=>{const p=s.filter(o=>o.group_id===r.id).length;return`
                                    <button type="button" onclick="window.setSelectedGroup('${r.id}'); window.setGroupViewMode('detail');" class="card p-4 sm:p-5 border-2 transition-all flex items-center justify-between group cursor-pointer text-left w-full mb-3 ${c.selectedGroupId===r.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                                        <div class="flex items-center gap-3 sm:gap-4 text-left flex-1 min-w-0">
                                            <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 flex items-center justify-center text-white shrink-0">
                                                <span class="material-icons-outlined text-lg">business</span>
                                            </div>
                                            <div class="text-left flex-1 min-w-0">
                                                <h4 class="text-sm font-black text-slate-900 text-left truncate">${r.name}</h4>
                                                <p class="text-[10px] font-bold text-slate-400 -mt-0.5 text-left truncate">${r.gst_number||"No GST"}</p>
                                            </div>
                                        </div>
                                        <div class="text-right shrink-0 ml-2">
                                            <p class="text-xs font-black text-slate-900 tracking-tighter text-right">${p}</p>
                                            <p class="text-[7px] font-black text-slate-300 uppercase tracking-tighter text-right">Members</p>
                                        </div>
                                    </button>
                                `}).join("")}
                        </div>
                    `:""}
                    
                    ${d.length>0?`
                        <div class="pt-2">
                            <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-3">Groups</p>
                            ${d.map(r=>{const p=s.filter(o=>o.group_id===r.id).length;return`
                                    <button type="button" onclick="window.setSelectedGroup('${r.id}'); window.setGroupViewMode('detail');" class="card p-4 sm:p-5 border-2 transition-all flex items-center justify-between group cursor-pointer text-left w-full mb-3 ${c.selectedGroupId===r.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                                        <div class="flex items-center gap-3 sm:gap-4 text-left flex-1 min-w-0">
                                            <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 border border-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                                                <span class="material-icons-outlined text-lg">group</span>
                                            </div>
                                            <div class="text-left flex-1 min-w-0">
                                                <h4 class="text-sm font-black text-slate-900 text-left truncate">${r.name}</h4>
                                                <p class="text-[10px] font-bold text-slate-400 -mt-0.5 text-left truncate">${r.description||"No description"}</p>
                                            </div>
                                        </div>
                                        <div class="text-right shrink-0 ml-2">
                                            <p class="text-xs font-black text-slate-900 tracking-tighter text-right">${p}</p>
                                            <p class="text-[7px] font-black text-slate-300 uppercase tracking-tighter text-right">Members</p>
                                        </div>
                                    </button>
                                `}).join("")}
                        </div>
                    `:""}
                `}
            </div>

            <!-- Floating Add Button -->
            <button onclick="window.setGroupViewMode('create')" class="fixed sm:absolute bottom-8 right-8 w-14 h-14 bg-slate-900 text-white rounded-[20px] flex items-center justify-center shadow-2xl hover:scale-105 transition-transform z-20 text-center">
                <span class="material-icons-outlined text-2xl text-center">add</span>
            </button>
        </div>
    `}function pd(){return`
        <div class="h-full flex flex-col">
            <!-- Header -->
            <div class="p-6 border-b border-slate-100 flex items-center justify-between shrink-0">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center">
                        <span class="material-icons-outlined text-white">add</span>
                    </div>
                    <div>
                        <h2 class="text-lg font-black text-slate-900 tracking-tighter">New ${L.isCompany?"Company":"Group"}</h2>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Create & Add Members</p>
                    </div>
                </div>
                <button onclick="window.setGroupViewMode('list')" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full">
                    <span class="material-icons-outlined">close</span>
                </button>
            </div>

            <!-- Form -->
            <div class="flex-1 overflow-y-auto p-6 space-y-5">
                <!-- Company Toggle -->
                <div class="card p-4 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 ${L.isCompany?"bg-slate-900":"bg-slate-100"} rounded-xl flex items-center justify-center transition-all">
                            <span class="material-icons-outlined text-lg ${L.isCompany?"text-white":"text-slate-400"}">${L.isCompany?"business":"group"}</span>
                        </div>
                        <div>
                            <h3 class="text-sm font-black text-slate-900">${L.isCompany?"Company":"Group"}</h3>
                            <p class="text-[9px] font-bold text-slate-400">${L.isCompany?"B2B with GST":"For marketing"}</p>
                        </div>
                    </div>
                    <button type="button" onclick="window.toggleGroupIsCompany()" class="w-11 h-6 ${L.isCompany?"bg-slate-900":"bg-slate-200"} rounded-full relative transition-all">
                        <div class="absolute top-0.5 ${L.isCompany?"right-0.5":"left-0.5"} w-5 h-5 bg-white rounded-full shadow transition-all"></div>
                    </button>
                </div>

                <!-- Form Fields -->
                <div class="space-y-2">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">${L.isCompany?"Company Name":"Group Name"} <span class="text-slate-300">*</span></label>
                    <input type="text" 
                           value="${L.name}"
                           oninput="window.updateGroupForm('name', this.value)" 
                           placeholder="${L.isCompany?"e.g. Reliance Industries":"e.g. VIP Customers"}" 
                           class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                </div>

                <div class="space-y-2">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Description</label>
                    <textarea 
                           oninput="window.updateGroupForm('description', this.value)" 
                           placeholder="${L.isCompany?"Company details, address...":"Purpose of this group..."}" 
                           rows="2"
                           class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all resize-none">${L.description}</textarea>
                </div>

                ${L.isCompany?`
                    <div class="space-y-2">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">GST Number</label>
                        <input type="text" 
                               value="${L.gstNumber}"
                               oninput="window.updateGroupForm('gstNumber', this.value.toUpperCase())" 
                               placeholder="e.g. 27AAACR3456D1Z5" 
                               maxlength="15"
                               class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold uppercase focus:outline-none focus:border-slate-900 transition-all">
                    </div>

                    <div class="space-y-2">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Contact Person</label>
                        <input type="text" 
                               value="${L.contactPerson}"
                               oninput="window.updateGroupForm('contactPerson', this.value)" 
                               placeholder="e.g. Mukesh Ambani" 
                               class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                    </div>
                `:""}

                <!-- Save Button -->
                <button type="button" id="save-group-btn" onclick="window.saveGroup()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4">
                    Create ${L.isCompany?"Company":"Group"}
                    <span class="material-icons-outlined text-xs">arrow_forward</span>
                </button>
            </div>
        </div>
    `}function ud(){const e=window.getCache(),t=e.groups||[],s=e.groupMembers||[],a=e.customers||[],n=e.sales||[],l=t.find(u=>u.id===c.selectedGroupId);if(!l)return`
            <div class="h-full flex items-center justify-center text-slate-300 text-center p-8">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50">error_outline</span>
                    <p class="text-[10px] font-black uppercase tracking-widest">Group not found</p>
                </div>
            </div>
        `;const d=s.filter(u=>u.group_id===l.id).map(u=>u.customer_id),r=a.filter(u=>d.includes(u.id)),o=n.filter(u=>d.includes(u.customer_id)&&u.status!=="draft").reduce((u,h)=>u+(h.total_amount||0),0);return`
        <div class="h-full flex flex-col overflow-hidden">
            <!-- Header -->
            <div class="p-6 text-center border-b border-slate-100 shrink-0">
                <div class="w-16 h-16 ${l.is_company?"bg-slate-900":"bg-slate-100"} rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span class="material-icons-outlined text-2xl ${l.is_company?"text-white":"text-slate-400"}">${l.is_company?"business":"group"}</span>
                </div>
                <h2 class="text-xl font-black text-slate-900 tracking-tighter">${l.name}</h2>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                    ${l.is_company?"Company":"Group"} • Created ${new Date(l.created_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}
                </p>
                ${l.description?`<p class="text-xs font-bold text-slate-500 mt-2">${l.description}</p>`:""}
                ${l.gst_number?`<p class="text-[10px] font-black text-slate-400 mt-1">GST: ${l.gst_number}</p>`:""}
            </div>

            <!-- Content -->
            <div class="flex-1 overflow-y-auto p-6 space-y-5">
                <!-- Stats -->
                <div class="grid grid-cols-2 gap-3">
                    <div class="card p-4 text-center">
                        <p class="text-2xl font-black text-slate-900 tracking-tighter">${r.length}</p>
                        <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Members</p>
                    </div>
                    <div class="card p-4 text-center">
                        <p class="text-2xl font-black text-slate-900 tracking-tighter">₹${o.toLocaleString()}</p>
                        <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Total Spent</p>
                    </div>
                </div>

                <!-- Actions -->
                <div class="flex gap-2">
                    <button class="flex-1 py-3 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1.5">
                        <span class="material-icons-outlined text-sm">chat</span>
                        WhatsApp
                    </button>
                    <button class="flex-1 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1.5">
                        <span class="material-icons-outlined text-sm">campaign</span>
                        Campaign
                    </button>
                </div>

                <!-- Members Section -->
                <div class="space-y-3">
                    <div class="flex items-center justify-between">
                        <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Members (${r.length})</h3>
                        <button onclick="window.setGroupViewMode('add-members')" class="text-[9px] font-black text-slate-900 uppercase flex items-center gap-1">
                            <span class="material-icons-outlined text-sm">person_add</span>
                            Add
                        </button>
                    </div>

                    ${r.length===0?`
                        <div class="card p-6 border-dashed border-slate-200 text-center">
                            <span class="material-icons-outlined text-2xl text-slate-200 mb-2">group_add</span>
                            <p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">No members yet</p>
                            <button onclick="window.setGroupViewMode('add-members')" class="mt-3 px-4 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase">
                                Add Members
                            </button>
                        </div>
                    `:`
                        <div class="space-y-2">
                            ${r.map(u=>{const w=n.filter(v=>v.customer_id===u.id&&v.status!=="draft").reduce((v,m)=>v+(m.total_amount||0),0);return`
                                    <div class="card p-3 flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-black text-[8px] text-slate-400">${u.name.split(" ").map(v=>v[0]).join("").toUpperCase()}</div>
                                            <div>
                                                <p class="text-xs font-black text-slate-900">${u.name}</p>
                                                <p class="text-[9px] font-bold text-slate-400">${u.phone||"No phone"}</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            ${w>0?`<span class="text-[9px] font-black text-slate-500">₹${w.toLocaleString()}</span>`:""}
                                            <button onclick="window.removeMemberFromGroup('${l.id}', '${u.id}')" class="w-7 h-7 flex items-center justify-center text-slate-300 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
                                                <span class="material-icons-outlined text-sm">close</span>
                                            </button>
                                        </div>
                                    </div>
                                `}).join("")}
                        </div>
                    `}
                </div>

                <!-- Delete Button -->
                <button onclick="window.deleteGroup('${l.id}')" class="w-full py-3 text-[9px] font-black text-slate-400 uppercase border border-slate-200 rounded-xl hover:text-slate-900 hover:border-slate-300 transition-all flex items-center justify-center gap-2 mt-4">
                    <span class="material-icons-outlined text-sm">delete</span>
                    Delete ${l.is_company?"Company":"Group"}
                </button>
            </div>
        </div>
    `}function xd(){const e=window.getCache(),t=e.groups||[],s=e.groupMembers||[],a=e.customers||[],n=t.find(r=>r.id===c.selectedGroupId);if(!n)return c.groupViewMode="list","";const l=s.filter(r=>r.group_id===n.id).map(r=>r.customer_id),d=a.filter(r=>!l.includes(r.id));return`
        <div class="h-full flex flex-col overflow-hidden">
            <!-- Header -->
            <div class="p-6 border-b border-slate-100 flex items-center justify-between shrink-0">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 ${n.is_company?"bg-slate-900":"bg-slate-100"} rounded-2xl flex items-center justify-center">
                        <span class="material-icons-outlined ${n.is_company?"text-white":"text-slate-400"}">${n.is_company?"business":"group"}</span>
                    </div>
                    <div>
                        <h2 class="text-lg font-black text-slate-900 tracking-tighter">Add Members</h2>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">${n.name} • ${l.length} current</p>
                    </div>
                </div>
                <button onclick="window.setGroupViewMode('detail')" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full">
                    <span class="material-icons-outlined">close</span>
                </button>
            </div>

            <!-- Content -->
            <div class="flex-1 overflow-y-auto p-6 space-y-4">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Available Clients (${d.length})</h3>
                
                ${d.length===0?`
                    <div class="card p-8 border-dashed border-slate-200 text-center">
                        <span class="material-icons-outlined text-2xl text-slate-200 mb-2">check_circle</span>
                        <p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">All clients are members</p>
                    </div>
                `:`
                    <div class="space-y-2">
                        ${d.map(r=>`
                            <div class="card p-3 flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-black text-[8px] text-slate-400">${r.name.split(" ").map(p=>p[0]).join("").toUpperCase()}</div>
                                    <div>
                                        <p class="text-xs font-black text-slate-900">${r.name}</p>
                                        <p class="text-[9px] font-bold text-slate-400">${r.phone||r.email||"No contact"}</p>
                                    </div>
                                </div>
                                <button onclick="window.addMemberToGroup('${n.id}', '${r.id}')" class="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[8px] font-black uppercase">
                                    Add
                                </button>
                            </div>
                        `).join("")}
                    </div>
                `}
            </div>
        </div>
    `}function il(){return dd()}function rl(){switch(c.groupViewMode){case"create":return pd();case"detail":return ud();case"add-members":return xd();default:return`
                <div class="h-full flex items-center justify-center text-slate-300 text-center p-8">
                    <div class="text-center">
                        <span class="material-icons-outlined text-4xl mb-2 opacity-50">group</span>
                        <p class="text-[10px] font-black uppercase tracking-widest">Select a group to view details</p>
                    </div>
                </div>
            `}}function fd(e){switch(e){case"cash":return"payments";case"card":return"credit_card";case"upi":return"qr_code";default:return"account_balance_wallet"}}function bd(e){switch(e){case"cash":return"Cash";case"card":return"Card";case"upi":return"UPI";default:return"Payment"}}function ol(e="desktop"){var u,h;const t=window.getCache(),s=c.clientInvoiceId,a=(t.sales||[]).find(w=>w.id===s);if(!a)return`
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50">receipt_long</span>
                    <p class="text-[10px] font-black uppercase tracking-widest">Invoice not found</p>
                </div>
            </div>
        `;const n=(t.saleItems||[]).filter(w=>w.sale_id===a.id),l=(u=t.customers)==null?void 0:u.find(w=>w.id===a.customer_id),d=a.company_id?(h=t.companies)==null?void 0:h.find(w=>w.id===a.company_id):null,r=a.total_amount||0,p=n.map(w=>{let v=[];if(w.extra_fields)try{v=JSON.parse(w.extra_fields)}catch{}return{name:w.product_name,category:w.category||"Standard",price:w.price,imei:w.imei,serial_number:w.serial_number,mac_id:w.mac_id,manufacturing_date:w.manufacturing_date,installation_date:w.installation_date,extraFields:v}}),o={id:a.id,status:a.status,customer:a.customer_name,phone:(l==null?void 0:l.phone)||"N/A",date:new Date(a.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),time:new Date(a.date).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})+" IST",items:p,subtotal:r/1.18,gst:r-r/1.18,total:r,paymentMode:a.payment_mode,paymentReference:a.payment_reference,gstRequired:a.gst_required,company:d,installationRequired:a.installation_required,installationDate:a.installation_date};return`
        <div class="h-full flex flex-col bg-white">
            <!-- Header with back button -->
            <div class="p-4 sm:p-6 border-b border-slate-100 flex items-center gap-4 shrink-0 bg-slate-50">
                <button onclick="window.setClientMode('profile')" class="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm">
                    <span class="material-icons-outlined">arrow_back</span>
                </button>
                <div>
                    <h2 class="text-sm font-black text-slate-900 tracking-tight">Invoice #${o.id}</h2>
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">${o.date}</p>
                </div>
            </div>
            
            <!-- Scrollable Receipt Content -->
            <div class="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50/50">
                <div class="card p-6 sm:p-8 bg-white text-slate-900 leading-relaxed shadow-sm border border-slate-100">
                    <!-- Header -->
                    <div class="text-center border-b border-dashed border-slate-200 pb-6 mb-6">
                        <h2 class="text-2xl font-black tracking-tighter mb-1">Invoice</h2>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">RetailerOS • System Generated</p>
                        <div class="mt-4 flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest px-4">
                            <span>GSTIN: 27AAACR3456D1Z5</span>
                            <span>Order #${o.id}</span>
                        </div>
                    </div>

                    <!-- Info Grid -->
                    <div class="grid grid-cols-2 gap-4 sm:gap-8 mb-6">
                        <div class="text-left">
                           <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Billed To</p>
                           <p class="text-sm font-black text-slate-900">${o.customer}</p>
                           <p class="text-[10px] font-bold text-slate-400">${o.phone}</p>
                        </div>
                        <div class="text-right">
                           <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Transaction</p>
                           <p class="text-sm font-black text-slate-900">${o.date}</p>
                           <p class="text-[10px] font-bold text-slate-400">${o.time}</p>
                        </div>
                    </div>

                    <!-- GST Company Info -->
                    ${o.gstRequired&&o.company?`
                        <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6">
                            <div class="flex items-center gap-2 text-[9px] font-black text-slate-600 uppercase tracking-widest mb-2">
                                <span class="material-icons-outlined text-sm">business</span>
                                GST Invoice
                            </div>
                            <p class="text-sm font-black text-slate-900">${o.company.name}</p>
                            <p class="text-[10px] font-bold text-slate-500">GSTIN: ${o.company.gst_number}</p>
                        </div>
                    `:""}

                    <!-- Items -->
                    <div class="space-y-4 text-left">
                        ${o.items.map(w=>`
                            <div class="pb-4 border-b border-slate-100 last:border-0">
                                <div class="flex justify-between items-start mb-2">
                                    <div class="flex-1 min-w-0">
                                        <h4 class="text-sm font-black text-slate-900 truncate">${w.name}</h4>
                                        <p class="text-[9px] font-bold text-slate-400 uppercase mt-0.5">${w.category}</p>
                                    </div>
                                    <p class="text-sm font-black text-slate-900 shrink-0 ml-2">₹${parseInt(w.price).toLocaleString()}</p>
                                </div>
                                ${w.imei||w.serial_number||w.mac_id||w.installation_date||w.extraFields&&w.extraFields.length>0?`
                                    <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 mt-2">
                                        <div class="flex items-center gap-2 text-[8px] font-black text-slate-500 uppercase tracking-widest mb-2">
                                            <span class="material-icons-outlined text-xs">verified</span> Device Info
                                        </div>
                                        <div class="grid grid-cols-2 gap-2">
                                            ${w.imei?`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">IMEI</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${w.imei}</p>
                                                </div>
                                            `:""}
                                            ${w.serial_number?`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">Serial</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${w.serial_number}</p>
                                                </div>
                                            `:""}
                                            ${w.mac_id?`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">MAC ID</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${w.mac_id}</p>
                                                </div>
                                            `:""}
                                            ${w.manufacturing_date?`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">Mfg. Date</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${new Date(w.manufacturing_date).toLocaleDateString("en-GB",{month:"short",year:"numeric"})}</p>
                                                </div>
                                            `:""}
                                            ${(w.extraFields||[]).map(v=>`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">${v.label}</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${v.value}</p>
                                                </div>
                                            `).join("")}
                                            ${w.installation_date?`
                                                <div class="col-span-2 pt-2 mt-2 border-t border-slate-200">
                                                    <p class="text-[7px] font-bold text-slate-500 uppercase flex items-center gap-1">
                                                        <span class="material-icons-outlined text-[10px]">build</span> Installation Date
                                                    </p>
                                                    <p class="text-[9px] font-black text-slate-700">${new Date(w.installation_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</p>
                                                </div>
                                            `:""}
                                        </div>
                                    </div>
                                `:""}
                            </div>
                        `).join("")}
                    </div>

                    <!-- Footer Totals -->
                    <div class="border-t border-dashed border-slate-200 pt-6 mt-4 space-y-2">
                        <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">Subtotal</span><span>₹${o.subtotal.toLocaleString(void 0,{maximumFractionDigits:2})}</span></div>
                        <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">GST (18%)</span><span>₹${o.gst.toLocaleString(void 0,{maximumFractionDigits:2})}</span></div>
                        <div class="flex justify-between text-xl font-black text-slate-900 mt-4 items-center">
                            <span>Grand Total</span>
                            <span>₹${parseInt(o.total).toLocaleString()}</span>
                        </div>
                    </div>
                    
                    <!-- Payment Status -->
                    ${o.paymentMode?`
                        <div class="bg-slate-900 text-white p-4 rounded-xl mt-6 flex justify-between items-center">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <span class="material-icons-outlined text-sm">${fd(o.paymentMode)}</span>
                                </div>
                                <div>
                                    <p class="text-[9px] font-black uppercase tracking-widest">Paid via ${bd(o.paymentMode)}</p>
                                    ${o.paymentReference?`<p class="text-[8px] font-bold text-white/60 tracking-widest uppercase">Ref: ${o.paymentReference}</p>`:""}
                                </div>
                            </div>
                            <span class="text-[9px] font-black bg-white text-slate-900 px-2 py-1 rounded uppercase tracking-widest">Paid</span>
                        </div>
                    `:""}
                    
                    <!-- Action Buttons -->
                    <div class="flex justify-center gap-3 mt-6 pt-4 border-t border-slate-100">
                        <button type="button" onclick="window.shareInvoiceWhatsApp('${o.id}')" class="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-2 hover:bg-slate-200 transition-all">
                            <span class="material-icons-outlined text-sm">chat</span>
                            WhatsApp
                        </button>
                        <button type="button" onclick="window.print()" class="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-2 hover:bg-slate-200 transition-all">
                            <span class="material-icons-outlined text-sm">print</span>
                            Print
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `}window.shareInvoiceWhatsApp=e=>{var r,p;const t=window.getCache(),s=(t.sales||[]).find(o=>o.id===e);if(!s)return;const a=(r=t.customers)==null?void 0:r.find(o=>o.id===s.customer_id),n=(t.saleItems||[]).filter(o=>o.sale_id===s.id);let l=`INVOICE #${s.id}
`;l+=`━━━━━━━━━━━━━━━━━━━━
`,l+=`${new Date(s.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}

`,l+=`${s.customer_name}
`,l+=`${(a==null?void 0:a.phone)||""}
`,l+=`
━━━━━━━━━━━━━━━━━━━━
`,l+=`ITEMS:
`,n.forEach(o=>{l+=`
• ${o.product_name}
`,l+=`  ${o.category||"Product"} - ₹${parseInt(o.price).toLocaleString()}
`}),l+=`
━━━━━━━━━━━━━━━━━━━━
`,l+=`TOTAL: ₹${parseInt(s.total_amount).toLocaleString()}
`,l+=`
Thank you for shopping!
`,l+="Powered by RetailerOS";const d=`https://wa.me/${((p=a==null?void 0:a.phone)==null?void 0:p.replace(/\D/g,""))||""}?text=${encodeURIComponent(l)}`;window.open(d,"_blank")};function $n(e){const t=e==="desktop-secondary",s=e==="desktop-primary";return t?c.clientViewMode==="add"?dn("desktop"):c.clientViewMode==="invoice"?ol("desktop"):c.clientViewMode==="profile"?ll("desktop"):c.clientViewMode==="groups"?rl():`
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50 text-center">person_search</span>
                    <p class="text-[10px] font-black uppercase tracking-widest text-center">Select a client to view profile</p>
                </div>
            </div>
        `:s?c.clientViewMode==="groups"?il():nl():c.clientViewMode==="add"?dn("mobile"):c.clientViewMode==="invoice"?ol("mobile"):c.clientViewMode==="profile"?ll("mobile"):c.clientViewMode==="groups"?c.groupViewMode==="detail"||c.groupViewMode==="create"||c.groupViewMode==="add-members"?rl():il():nl()}const Pa=(e,t,s=[])=>`
    <header class="p-4 sm:p-8 pb-4 shrink-0 px-8">
        <div class="flex items-center justify-between mb-6">
            <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                <span class="material-icons-outlined">chevron_left</span>
                <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
            </button>
            <div class="text-center translate-x-1">
                <h1 class="text-xl font-black tracking-tighter text-slate-900">${e}</h1>
                <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">${t}</p>
            </div>
            <button class="p-2 text-slate-400 hover:text-slate-900"><span class="material-symbols-outlined text-xl">calendar_today</span></button>
        </div>
        ${s.length>0?`
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                ${s.map(a=>`<button onclick="setReportsTab('${a}')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${c.reportsTab===a?"bg-white shadow-sm text-slate-900":"text-slate-400"}">${a.toUpperCase()}</button>`).join("")}
            </div>
        `:""}
    </header>
`;function hd(){var a;const e=window.getCache(),t=[{t:"Total Sales",v:e.sales?`₹${e.sales.reduce((n,l)=>n+parseInt(l.amount||l.total_amount),0).toLocaleString()}`:"₹0",p:e.sales?`+${e.sales.length}`:"0",i:"account_balance_wallet"},{t:"Clients",v:e.customers?e.customers.length.toLocaleString():"0",p:"Total",i:"group"},{t:"Inquiries",v:e.inquiries?e.inquiries.length.toLocaleString():"0",p:"Pending",i:"chat_bubble"},{t:"Repairs",v:e.repairs?e.repairs.length.toLocaleString():"0",p:"Active",i:"settings"},{t:"Schemes",v:e.schemes?`${e.schemes.length} Active`:"0",p:"Live",i:"percent"},{t:"Inventory",v:e.products?`₹${(e.products.reduce((n,l)=>n+parseInt(l.price)*parseInt(l.stock),0)/1e7).toFixed(1)}Cr`:"₹0",p:"Stock Value",i:"inventory_2"},{t:"Campaigns",v:e.campaigns?e.campaigns.length.toLocaleString():"0",p:"Pre-booking",i:"rocket_launch"},{t:"Automations",v:e.automations?e.automations.length.toLocaleString():"0",p:"Live",i:"bolt"}],s=`
        <div class="flex items-center gap-12 text-[13px] font-bold text-slate-600 pr-12 text-left">
            <span><strong class="text-slate-900 uppercase tracking-widest text-[10px]">Real-time Intelligence:</strong> Connected to Turso DB. Syncing ${t.reduce((n,l)=>n+parseInt(l.v.toString().replace(/[^0-9]/g,"")||0),0).toLocaleString()} data points.</span>
            <span class="w-1.5 h-1.5 bg-slate-200 rounded-full shrink-0"></span>
            <span><strong class="text-slate-900 uppercase tracking-widest text-[10px]">Sales Performance:</strong> Weekend footfall has surged by <strong class="text-green-600">14.5%</strong> compared to the previous cycle.</span>
            <span class="w-1.5 h-1.5 bg-slate-200 rounded-full shrink-0"></span>
            <span><strong class="text-slate-900 uppercase tracking-widest text-[10px]">Automations:</strong> Lead generation is currently processing <strong class="text-indigo-600">${((a=e.inquiries)==null?void 0:a.length)||0} active inquiries</strong>.</span>
        </div>
    `;return`
        <div class="card p-6 bg-white text-slate-900 relative overflow-hidden group mb-6 border-slate-100 shadow-sm">
            <div class="relative z-10 text-left mb-4">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Live Intelligence</p>
                <h2 class="text-2xl font-black tracking-tighter leading-none text-slate-900 text-left">Dashboard Insights</h2>
            </div>
            <div class="overflow-hidden border-t border-slate-100 pt-5 text-left">
                <div class="fast-ticker">
                    ${s}
                    ${s}
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
            ${t.map(n=>`
                <div class="card p-5 space-y-3 relative overflow-hidden group hover:border-slate-300 transition-all text-left">
                    <div class="flex justify-between items-start">
                        <div class="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                            <span class="material-icons-outlined text-sm text-slate-400">${n.i}</span>
                        </div>
                        <span class="text-[8px] font-black uppercase tracking-tighter ${n.p==="Live"||n.p.startsWith("+")?"text-green-500":"text-slate-400"}">${n.p}</span>
                    </div>
                    <div>
                        <h4 class="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1 text-left">${n.t}</h4>
                        <p class="text-lg font-black tracking-tighter text-slate-900 text-left">${n.v}</p>
                    </div>
                </div>
            `).join("")}
        </div>
    `}function md(){return`<div class="card p-8 space-y-8 text-left"><div class="flex justify-between items-start text-left"><div class="text-left"><p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Revenue (30D)</p><h2 class="text-4xl font-black tracking-tighter text-slate-900 text-left">₹42.8L</h2></div><div class="bg-green-50 px-2 py-1 rounded-lg flex items-center gap-1"><span class="material-icons-outlined text-[10px] text-green-500">trending_up</span><span class="text-[10px] font-black text-green-600">+12.4%</span></div></div><div class="h-48 relative border-b border-slate-100 flex items-end justify-between px-2"><div class="absolute inset-0 flex items-center justify-center opacity-10"><h2 class="font-black text-8xl tracking-tighter text-slate-400">OS</h2></div><svg class="w-full h-full text-slate-900" viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M0 35 L20 30 L40 32 L60 15 L80 20 L100 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg><div class="absolute bottom-0 left-0 text-[8px] text-slate-300 font-black uppercase">01 Oct</div><div class="absolute bottom-0 left-1/2 -translate-x-1/2 text-[8px] text-slate-300 font-black uppercase">15 Oct</div><div class="absolute bottom-0 right-0 text-[8px] text-slate-300 font-black uppercase">30 Oct</div></div></div><div class="grid grid-cols-2 gap-4"><div class="card p-6 space-y-4 text-left"><div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center"><span class="material-icons-outlined text-slate-400 text-left">shopping_bag</span></div><div><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Avg Order Value</p><h4 class="text-xl font-black text-slate-900 text-left">₹18.2K</h4><p class="text-[8px] font-black text-slate-300 uppercase mt-1 text-left">vs ₹16.4K last month</p></div></div><div class="card p-6 space-y-4 text-left"><div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center"><span class="material-icons-outlined text-slate-400 text-left">category</span></div><div><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Top Category</p><h4 class="text-xl font-black text-slate-900 text-left">Smartphones</h4></div></div></div><section class="space-y-4 text-left"><div class="flex justify-between items-center px-1"><h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Daily Sales List</h3><button class="text-[8px] font-black text-slate-900 uppercase border-b border-slate-900">Export CSV</button></div><div class="space-y-3 text-left">${[{d:"Today, 24 Oct",c:"14 Orders",v:"₹1.42L",p:"+4.2%"},{d:"Yesterday, 23 Oct",c:"11 Orders",v:"₹1.18L",p:"-2.1%"},{d:"22 Oct",c:"18 Orders",v:"₹2.33L",p:"+1.8%"}].map(e=>`<div class="card p-5 group hover:bg-slate-50 transition-all cursor-pointer flex justify-between items-center"><div class="text-left"><h4 class="text-sm font-black text-slate-900 text-left">${e.d}</h4><p class="text-[10px] font-bold text-slate-400 capitalize -mt-0.5 text-left">${e.c}</p></div><div class="text-right"><p class="text-sm font-black text-slate-900 text-right">${e.v}</p><p class="text-[9px] font-black ${e.p.startsWith("+")?"text-green-500":"text-red-500"} uppercase text-right">${e.p}</p></div></div>`).join("")}</div></section>`}function gd(){return`<div class="grid grid-cols-2 gap-4 text-left"><div class="card p-6 space-y-3 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Blocked Capital</p><h3 class="text-xl font-black text-slate-900 text-left">₹84.2L</h3><p class="text-[8px] font-black text-red-500 uppercase flex items-center gap-1 text-left"><span class="animate-pulse">●</span> +2.4% vs last mo.</p></div><div class="card p-6 space-y-3 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Ageing > 90D</p><h3 class="text-xl font-black text-slate-900 text-left">124 <span class="text-[10px] font-bold text-slate-400 uppercase text-left">Units</span></h3><p class="text-[8px] font-black text-green-500 uppercase text-left">12.1% of total stock</p></div></div><div class="card p-8 space-y-6 text-left"><div class="flex justify-between items-center mb-2 text-left"><h3 class="text-[10px] font-black text-slate-900 uppercase tracking-widest text-left">Stock Distribution</h3><span class="material-icons-outlined text-slate-300 text-sm">info</span></div><div class="flex items-center gap-10 text-left"><div class="relative w-32 h-32 flex items-center justify-center text-left"><svg class="w-full h-full transform -rotate-90"><circle cx="64" cy="64" r="54" stroke="#f8fafc" stroke-width="20" fill="transparent" /><circle cx="64" cy="64" r="54" stroke="#0f172a" stroke-width="20" stroke-dasharray="340" stroke-dashoffset="100" fill="transparent" stroke-linecap="round" /></svg><div class="absolute text-center"><p class="text-[8px] font-black text-slate-400 uppercase leading-none mb-1 text-left">Total</p><p class="text-xl font-black tracking-tighter text-left">1,024</p></div></div><div class="flex-1 space-y-3 text-left">${[{l:"Apple",p:"45%",c:"bg-slate-900"},{l:"OnePlus",p:"25%",c:"bg-slate-500"},{l:"Samsung",p:"15%",c:"bg-slate-300"},{l:"Others",p:"15%",c:"bg-slate-100"}].map(e=>`<div class="flex items-center justify-between text-left"><div class="flex items-center gap-2 text-left"><div class="w-2 h-2 rounded-full ${e.c}"></div><span class="text-[10px] font-black text-slate-500 text-left">${e.l}</span></div><span class="text-[10px] font-black text-slate-900 text-right">${e.p}</span></div>`).join("")}</div></div></div><section class="space-y-4 text-left"><div class="flex justify-between items-center px-1 text-left"><h3 class="text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Low Stock Alerts</h3><span class="bg-red-50 text-red-500 text-[8px] font-black px-2 py-0.5 rounded uppercase text-left">5 Critical</span></div><div class="space-y-3 text-left">${[{n:"iPhone 15 Pro - 256GB",s:"SKU: APP-15P-256-NG",q:"2 Left",r:"Reorder pt: 5"},{n:"Watch Series 9 - 45mm",s:"SKU: APP-W9-45-ST",q:"0 Left",r:"Reorder pt: 3"},{n:"AirPods Pro (2nd Gen)",s:"SKU: APP-AP2-MGS",q:"8 Left",r:"Reorder pt: 10"}].map(e=>`<div class="card p-5 relative group hover:border-slate-300 transition-all cursor-pointer flex justify-between items-start text-left"><div><h4 class="text-sm font-black text-slate-900 text-left">${e.n}</h4><p class="text-[9px] font-bold text-slate-400 uppercase mt-0.5 text-left">${e.s}</p></div><div class="text-right"><p class="text-xs font-black text-red-500 uppercase text-right">${e.q}</p><p class="text-[8px] font-bold text-slate-300 uppercase mt-0.5 text-right">${e.r}</p></div></div>`).join("")}</div><button class="w-full py-4 text-[9px] font-black text-slate-300 uppercase underline decoration-slate-200 underline-offset-8 text-left">View All Alerts</button></section>`}function wd(){return'<section class="space-y-6 text-left"><h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Campaign Performance</h3><div class="card p-8 space-y-6 text-left"><div class="flex justify-between items-start text-left"><div><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Campaign Conversion Rate</p><h2 class="text-4xl font-black tracking-tighter text-slate-900 text-left">24.8%</h2></div><span class="bg-green-50 text-green-500 text-[8px] font-black px-2 py-1 rounded-lg text-left">+3.2%</span></div><div class="space-y-3 text-left"><div class="h-2.5 w-full bg-slate-50 rounded-full overflow-hidden text-left"><div class="h-full bg-blue-500 rounded-full shadow-inner text-left" style="width: 24.8%"></div></div><p class="text-[9px] font-bold text-slate-400 italic text-left">Derived from pre-booking landing pages</p></div></div><div class="card p-8 space-y-6 text-left"><div class="flex justify-between items-center text-left"><p class="text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">AI Image Usage</p><span class="material-symbols-outlined text-slate-200 text-xl text-left">grid_guides</span></div><div class="flex items-center justify-between text-left"><h2 class="text-5xl font-black tracking-tighter text-slate-900 text-left">1,284</h2><div class="flex flex-col items-end gap-1 text-left"><div class="w-24 h-2 bg-slate-50 rounded-full overflow-hidden border border-slate-100/50 text-left"><div class="h-full bg-slate-900 rounded-full text-left" style="width: 65%"></div></div><p class="text-[10px] font-black text-slate-300 tabular-nums text-left">65%</p></div></div></div><div class="space-y-4 text-left"><p class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Automation Metrics</p><div class="grid grid-cols-2 gap-4 text-left"><div class="card p-6 space-y-4 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Retention Rate</p><h4 class="text-2xl font-black text-slate-900 tracking-tighter text-left">88.4%</h4><div class="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden text-left"><div class="h-full bg-indigo-500 text-left" style="width: 88.4%"></div></div></div><div class="card p-6 space-y-4 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Upsell Conv.</p><h4 class="text-2xl font-black text-slate-900 tracking-tighter text-left">12.5%</h4><div class="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden text-left"><div class="h-full bg-green-500 text-left" style="width: 12.5%"></div></div></div></div></div></section>'}function Cn(e){const t={overview:{t:"Reports",s:"Business Intelligence"},sales:{t:"Sales",s:"Deep-Dive Analytics"},inventory:{t:"Inventory",s:"Stock & Logistics"},marketing:{t:"Marketing",s:"Campaign Insights"}},s={overview:hd(),sales:md(),inventory:gd(),marketing:wd()};if(e==="desktop-primary")return`
            ${Pa(t.overview.t,t.overview.s)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${s.overview}
            </div>
        `;if(e==="desktop-secondary"){const n=c.reportsTab==="overview"?"sales":c.reportsTab;return`
            ${Pa(t[n].t,t[n].s,["sales","inventory","marketing"])}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${s[n]}
            </div>
        `}const a=t[c.reportsTab]||t.overview;return`
        ${Pa(a.t,a.s,["overview","sales","inventory","marketing"])}
        <div class="scrolling-content px-8 space-y-8 pb-12">
            ${s[c.reportsTab]}
        </div>
    `}const Na=(e,t,s="",a=!1)=>`
    <header class="p-4 sm:p-8 pb-4 shrink-0 px-8">
        <div class="flex items-center justify-between mb-6">
            <button onclick="setRepairMode('search')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                <span class="material-icons-outlined">chevron_left</span>
                <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
            </button>
            <div class="text-center translate-x-1">
                <h1 class="text-xl font-black tracking-tighter text-slate-900">${e}</h1>
                <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">${t}</p>
            </div>
            ${s?`<div class="p-2">${s}</div>`:'<div class="w-10"></div>'}
        </div>
        ${a?`
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                <button onclick="setRepairTab('active')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${c.repairTab==="active"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">Active Jobs</button>
                <button onclick="setRepairTab('history')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${c.repairTab==="history"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">History</button>
            </div>
        `:""}
    </header>
`;window.setRepairCustomer=(e,t)=>{c.repairContext={customer_name:e,customer_phone:t},C()};function vd(){const e=document.getElementById("repair-search-input"),t=e?e.value.trim():"",s=window.getCache?window.getCache():{customers:[]},a=t?s.customers.filter(n=>n.name.toLowerCase().includes(t.toLowerCase())||n.phone.includes(t)):[];return`
        <div class="space-y-8 animate-slide-up text-left">
            <div class="space-y-4 text-left">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Search Customer</p>
                <div class="relative text-left">
                    <span class="absolute left-5 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-left">search</span>
                    <input type="text" id="repair-search-input" oninput="triggerRender(false)" placeholder="Search Name or Mobile..." class="w-full h-16 pl-14 pr-6 bg-slate-50 border border-slate-100 rounded-3xl text-sm font-black text-slate-900 focus:bg-white focus:border-slate-900 focus:shadow-2xl focus:shadow-slate-200/50 transition-all outline-none text-left">
                </div>
            </div>

            ${t?`
                <div class="space-y-3 text-left">
                    <h3 class="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] px-1 text-left">Search Results</h3>
                    <div class="space-y-3 text-left">
                        ${a.map(n=>`
                            <div onclick="window.setRepairCustomer('${n.name}', '${n.phone}'); setRepairMode('intake');" class="card p-5 border-2 border-transparent hover:border-slate-200 cursor-pointer flex items-center justify-between text-left">
                                <div class="text-left">
                                    <h4 class="text-sm font-black text-slate-900 text-left">${n.name}</h4>
                                    <p class="text-[10px] font-bold text-slate-400 text-left">${n.phone}</p>
                                </div>
                                <span class="material-icons-outlined text-slate-300 text-left">arrow_forward</span>
                            </div>
                        `).join("")}
                        ${a.length===0?'<p class="text-center py-8 text-[10px] text-slate-300 font-black uppercase">No customer found</p>':""}
                    </div>
                </div>
            `:`
                <div class="space-y-4 text-left">
                     <h3 class="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] px-1 text-left">Existing Jobs</h3>
                     <div class="card p-8 border-dashed border-slate-200 flex flex-col items-center gap-4 bg-slate-50/20 text-center">
                        <span class="material-icons-outlined text-4xl text-slate-200 text-center">qr_code_scanner</span>
                        <p class="text-[10px] font-black text-slate-300 uppercase tracking-widest text-center">Scan Job Sheet to track status</p>
                     </div>
                </div>
            `}

            <button onclick="setRepairMode('intake')" class="w-full py-5 bg-slate-50 border border-slate-100 text-slate-900 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all text-center">
                New Repair (Walk-in)
            </button>
        </div>
    `}async function yd(){const e=c.repairContext||{customer_name:"Walk-in",customer_phone:""},t=document.getElementById("repair-device").value,s=document.getElementById("repair-issue").value,a=document.getElementById("repair-cost").value;if(!t||!s){alert("Device and Issue are required.");return}const n=document.getElementById("create-job-btn");n.disabled=!0,n.innerText="Creating...";try{const l="REP-"+Math.random().toString(36).substr(2,6).toUpperCase();await M.query(`
            INSERT INTO repairs (id, customer_name, phone, device, issue, status, job_sheet_no, estimated_cost, assigned_to, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,[l,e.customer_name,e.customer_phone,t,s,"COLLECTED",l,a||"0","Unassigned",new Date().toISOString()]),await K(),window.setActiveRepairJob(l),window.setRepairMode("status")}catch(l){alert("Error creating job: "+l.message),n.disabled=!1,n.innerText="Create Job Sheet"}}window.createJobSheet=yd;window.setActiveRepairJob=e=>{c.activeRepairId=e};function kd(){const e=c.repairContext||{customer_name:"New Walk-in",customer_phone:""};return`
        <div class="card p-6 border-slate-200/50 space-y-4 relative overflow-hidden text-left bg-slate-50/10">
            <div class="text-left">
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Customer Context</p>
                <h4 class="text-lg font-black tracking-tighter text-slate-900 text-left">${e.customer_name}</h4>
                <p class="text-[10px] font-bold text-slate-400 text-left">${e.customer_phone||"Direct Walk-in"}</p>
            </div>
            <div class="absolute -right-8 -bottom-8 w-32 h-32 bg-slate-50 rounded-full opacity-50"></div>
        </div>

        <div class="space-y-6 text-left pt-4">
            <div class="space-y-2 text-left">
                <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Device Model & Serial</label>
                <input type="text" id="repair-device" placeholder="e.g. iPhone 15 Pro Max (SN: RZ...)" class="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 shadow-sm text-left">
            </div>

            <div class="space-y-2 text-left">
                <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Fault Description</label>
                <textarea id="repair-issue" placeholder="Describe the issues reported by the customer..." class="w-full min-h-[120px] p-6 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 shadow-sm resize-none text-left"></textarea>
            </div>

            <div class="space-y-2 text-left">
                <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Estimated Cost (₹)</label>
                <input type="number" id="repair-cost" placeholder="₹0" class="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 shadow-sm text-left">
            </div>
        </div>

        <button id="create-job-btn" onclick="createJobSheet()" class="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-[0.3em] shadow-2xl hover:scale-[0.98] transition-all active:scale-95 mt-8 text-center">Create Job Sheet</button>
    `}async function _d(e){if(c.activeRepairId)try{await M.query("UPDATE repairs SET status = ? WHERE id = ?",[e,c.activeRepairId]),await K()}catch(t){alert("Update failed: "+t.message)}}window.updateRepairStatus=_d;function Sd(){const e=window.getCache(),t=e.repairs.find(n=>n.id===c.activeRepairId)||e.repairs[0];if(!t)return'<div class="p-20 text-center opacity-30 text-[10px] font-black uppercase">No active job selected</div>';const s=[{l:"Collected",s:"COLLECTED",i:"done"},{l:"Sent to Brand",s:"SENT_TO_BRAND",i:"shipping"},{l:"At Service Center",s:"IN_REPAIR",i:"build"},{l:"Ready for Pickup",s:"READY",i:"check_circle"},{l:"Handed Over",s:"COMPLETED",i:"person"}],a=s.findIndex(n=>n.s===t.status);return`
        <div class="card p-6 border-slate-200/50 flex gap-5 items-center relative overflow-hidden text-left bg-slate-50/50">
            <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-left">
                <span class="material-icons-outlined text-slate-400 text-2xl text-left">smartphone</span>
            </div>
            <div class="text-left">
                <h4 class="text-sm font-black text-slate-900 leading-none text-left">${t.device}</h4>
                <p class="text-[10px] font-bold text-slate-900 mt-1 uppercase text-left">${t.issue}</p>
                <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mt-0.5 text-left">Customer: ${t.customer_name}</p>
            </div>
            <button class="absolute top-6 right-6 text-slate-400"><span class="material-icons-outlined text-sm text-left">info</span></button>
        </div>

        <div class="space-y-4 text-left">
            <h3 class="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] px-1 text-left">Assignment</h3>
            <div class="card p-4 flex items-center justify-between text-left">
                <div class="flex items-center gap-4 text-left">
                    <div class="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-left">
                        <span class="material-icons-outlined text-slate-400 text-left">person</span>
                    </div>
                    <div class="text-left">
                        <h4 class="text-xs font-black text-slate-900 text-left">${t.assigned_to||"Runner A"}</h4>
                        <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest text-left">Logistics Team</p>
                    </div>
                </div>
                <button class="px-4 py-2 bg-slate-50 rounded-lg text-[8px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-100 transition-all text-left">Reassign</button>
            </div>
        </div>

        <div class="space-y-4 text-left">
            <h3 class="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] px-1 text-left">Service Lifecycle</h3>
            <div class="card p-8 relative overflow-hidden text-left">
                <div class="absolute left-[45px] top-10 bottom-10 w-px bg-slate-100 border-l border-dashed border-slate-200 text-left"></div>
                
                <div class="space-y-10 relative text-left">
                    ${s.map((n,l)=>{const d=l<=a,r=l===a;return`
                        <div class="flex items-start gap-8 relative text-left">
                            <div class="w-5 h-5 rounded-full flex items-center justify-center z-10 shrink-0 text-left ${d?"bg-blue-500 text-white":"bg-slate-100 border border-slate-200"}">
                                <span class="material-icons-outlined text-[12px] font-black text-left">${d?"done":""}</span>
                            </div>
                            <div class="text-left ${d?"":"opacity-30"}">
                                <h4 class="text-xs font-black text-slate-900 text-left ${r?"text-blue-500 underline underline-offset-4":""}">${n.l}</h4>
                                <p class="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-tighter text-left">
                                    ${r?"CURRENT STATUS":d?"COMPLETED":"PENDING"}
                                </p>
                            </div>
                        </div>
                        `}).join("")}
                </div>
            </div>
        </div>

        <div class="flex gap-2 text-left">
            <button onclick="updateRepairStatus('${s[Math.min(a+1,s.length-1)].s}')" class="flex-1 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-[0.3em] shadow-2xl hover:scale-[0.98] transition-all active:scale-95 flex items-center justify-center gap-3 text-left">
                Update Status
            </button>
        </div>
    `}function cl(){const t=window.getCache().repairs||[];return`
        <div class="space-y-4 text-left px-8">
            <div class="flex justify-between items-center px-1 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Historical Job Cards</h3>
                <span class="text-[8px] font-black text-slate-300 uppercase text-right">${t.length} Jobs Total</span>
            </div>
            
            ${t.map(s=>`
                <div onclick="window.setActiveRepairJob('${s.id}'); setRepairMode('status');" class="card p-5 border-2 transition-all group border-transparent hover:border-slate-200 cursor-pointer text-left">
                    <div class="flex justify-between items-start mb-4 text-left">
                        <div class="text-left">
                            <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1 text-left">#${s.job_sheet_no}</p>
                            <h4 class="text-sm font-black text-slate-900 text-left">${s.device}</h4>
                            <p class="text-[10px] font-bold text-slate-400 lowercase -mt-0.5 text-left">${s.customer_name}</p>
                        </div>
                        <div class="text-right">
                            <span class="text-[9px] font-black uppercase text-right ${s.status==="COMPLETED"?"text-green-500":"text-slate-400"}">${s.status}</span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between border-t border-slate-50 pt-4 text-left">
                        <p class="text-[10px] font-black text-slate-900 text-left">₹${parseInt(s.estimated_cost).toLocaleString()}</p>
                        <p class="text-[8px] font-black text-slate-300 uppercase italic text-right">${new Date(s.created_at).toLocaleDateString()}</p>
                    </div>
                </div>
            `).join("")}

            ${t.length===0?`
                <div class="py-20 text-center opacity-20">
                    <span class="material-icons-outlined text-4xl">history</span>
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] mt-4">No repair jobs found</p>
                </div>
            `:""}
        </div>
    `}function An(e){const t={search:{t:"RetailerOS",s:"Repairs Management",txn:null},intake:{t:"Device Intake",s:"Repair Management",txn:"TXN-4920"},status:{t:"Job ID: #REP-2024",s:"Repair Assignment",badge:"ACTIVE"},history:{t:"Job History",s:"Service Records",badge:null}},s={search:vd(),intake:kd(),status:Sd()};if(e==="desktop-primary")return`
            ${Na(t.search.t,t.search.s,'<button class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900"><span class="material-icons-outlined text-xl">notifications</span></button>',!0)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${c.repairTab==="active"?s.search:cl()}
            </div>
        `;if(e==="desktop-secondary"){const d=c.repairViewMode==="search"?"status":c.repairViewMode,r=t[d],p=d==="intake"?`<span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded">${r.txn}</span>`:`<span class="bg-blue-50 text-blue-600 text-[8px] font-black px-2 py-1 rounded-full">${r.badge}</span>`;return`
            ${Na(r.t,r.s,p)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${c.repairTab==="history"?'<div class="card p-8 bg-slate-50 border-dashed border-2 border-slate-200 text-center py-20"><span class="material-icons-outlined text-4xl text-slate-200 mb-4">analytics</span><p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">Select a job card on the left<br>to view full service details.</p></div>':s[d]}
            </div>
        `}const a=c.repairTab==="history"?"history":c.repairViewMode,n=t[a],l=a==="intake"?`<span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded">${n.txn}</span>`:a==="status"?`<span class="bg-blue-50 text-blue-600 text-[8px] font-black px-2 py-1 rounded-full">${n.badge}</span>`:'<button class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900"><span class="material-icons-outlined text-xl">notifications</span></button>';return`
        ${Na(n.t,n.s,l,!0)}
        <div class="scrolling-content px-8 space-y-8 pb-12">
            ${c.repairTab==="history"?cl():s[c.repairViewMode]}
        </div>
    `}function Id(){return`
        <header class="p-4 sm:p-8 pb-4 shrink-0">
             <div class="flex items-center justify-between mb-6">
                <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                    <span class="material-icons-outlined">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900">Marketing</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">AI Creative Generator</p>
                </div>
                <button class="p-2 text-slate-400 hover:text-slate-900"><span class="material-symbols-outlined text-xl">auto_awesome</span></button>
            </div>
        </header>
    `}function $d(){return`
        ${Id()}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 sm:space-y-8 pb-32">
            <!-- Usage Limit -->
            <div class="card p-5 border-slate-200 shadow-sm text-left">
                <div class="flex justify-between items-end mb-3">
                    <div class="text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Usage Limit</p>
                        <h3 class="text-2xl font-black text-slate-900 tracking-tighter text-left">128 <span class="text-slate-300 text-lg">/ 150</span></h3>
                    </div>
                    <p class="text-[8px] font-bold text-slate-400 uppercase tracking-wide text-right">Generations Available</p>
                </div>
                <div class="h-2 bg-slate-100 rounded-full overflow-hidden text-left">
                    <div class="h-full bg-slate-900 w-[85%] rounded-full"></div>
                </div>
            </div>

            <!-- Prompt Input -->
            <div class="relative text-left">
                <textarea placeholder="Describe the campaign you want to create..." class="w-full h-40 p-5 pr-12 bg-white border border-slate-200 rounded-3xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm resize-none leading-relaxed text-left"></textarea>
                <button class="absolute right-5 bottom-5 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 rounded-full">
                    <span class="material-icons-outlined text-lg">mic</span>
                </button>
            </div>

            <button class="w-full py-5 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-3 text-left">
                <span class="material-icons-outlined text-lg">bolt</span> Generate Creative
            </button>

            <!-- Quick Ideas -->
            <section class="space-y-3 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Quick Ideas</h3>
                <div class="flex flex-wrap gap-2 text-left">
                    <button class="px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-all">New Product Launch</button>
                    <button class="px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-all">Festive Sale</button>
                    <button class="px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-all">Weekend Flash Promo</button>
                    <button class="px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-all">Seasonal Offer</button>
                </div>
            </section>

             <!-- Reference Assets -->
             <section class="space-y-3 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Reference Assets</h3>
                <div class="card h-32 border-dashed border-2 border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-slate-50 transition-colors group text-left">
                     <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 group-hover:text-slate-900 group-hover:scale-110 transition-all text-left">
                        <span class="material-icons-outlined">add_photo_alternate</span>
                     </div>
                     <div class="text-center">
                        <p class="text-[10px] font-bold text-slate-600">Upload Store or Product Images</p>
                        <p class="text-[8px] font-bold text-slate-400 mt-0.5">AI will use these as visual context</p>
                     </div>
                </div>
             </section>
        </div>
    `}function Cd(){return`
        <div class="h-full flex flex-col items-center justify-center p-8 text-center space-y-6 text-left">
            <div class="card p-6 border-slate-200 shadow-sm bg-white w-full max-w-sm aspect-square flex items-center justify-center relative overflow-hidden group text-left">
                <div class="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-50 text-left"></div>
                <div class="relative z-10 text-center">
                    <h3 class="text-xl font-black text-slate-900 tracking-tight mb-2 text-center">GENERATED</h3>
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center">MARKETING CREATIVE</p>
                    <div class="w-16 h-1 bg-slate-200 mx-auto mt-4 rounded-full text-center"></div>
                </div>
                <div class="absolute top-4 right-4 bg-slate-900 text-white text-[8px] font-black uppercase px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity text-left">1080 x 1080</div>
            </div>

            <div class="w-full max-w-sm grid grid-cols-2 gap-3 text-left">
                <button class="py-3 border-2 border-slate-200 rounded-xl text-[10px] font-black text-slate-900 uppercase hover:border-slate-900 transition-all flex items-center justify-center gap-2 text-left">
                    <span class="material-icons-outlined text-sm text-left">refresh</span> Re-Generate
                </button>
                <button class="py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-left">
                    <span class="material-icons-outlined text-sm text-left">download</span> Download
                </button>
            </div>

            <div class="w-full max-w-sm text-left">
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 text-left">Refine Result</p>
                <div class="relative text-left">
                    <input type="text" placeholder="e.g., 'Make the background more minimal'" class="w-full pl-4 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                    <button class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors text-left">
                        <span class="material-icons-outlined text-sm text-left">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    `}function Rn(e){return e==="desktop-secondary"?Cd():$d()}function Ad(){return`
        <header class="p-4 sm:p-8 pb-4 shrink-0">
             <div class="flex items-center justify-between mb-6">
                <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                    <span class="material-icons-outlined">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900">Promoters</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Team & Attendance</p>
                </div>
                <button class="p-2 text-slate-400 hover:text-slate-900"><span class="material-symbols-outlined text-xl">search</span></button>
            </div>
            
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                <button class="flex-1 py-3 bg-white shadow-sm text-slate-900 text-[10px] font-black uppercase rounded-lg transition-all">Team</button>
                <button class="flex-1 py-3 text-slate-400 text-[10px] font-black uppercase rounded-lg transition-all hover:bg-white/50 hover:text-slate-600">Reports</button>
            </div>
        </header>
    `}function Rd(){return`
        ${Ad()}
        <div class="scrolling-content px-4 sm:px-8 space-y-3 pb-32">
            
            <!-- Card 1 -->
            <div onclick="setPromoterViewMode('performance')" class="card p-4 flex items-center justify-between group cursor-pointer border-2 transition-all ${c.promoterViewMode==="performance"?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                <div class="flex items-center gap-4 text-left">
                    <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-black text-sm text-left">RS</div>
                    <div class="text-left">
                        <h3 class="text-sm font-black text-slate-900 text-left">Rohan S.</h3>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wide text-left">PREMIUM BRAND</p>
                    </div>
                </div>
                <div class="text-right">
                    <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-1 text-right">CHECK-IN</p>
                    <div class="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer ml-auto"><div class="w-3 h-3 bg-white rounded-full absolute right-1 top-1 shadow-sm"></div></div>
                </div>
            </div>

            <!-- Card 2 -->
            <div onclick="setPromoterViewMode('performance')" class="card p-4 flex items-center justify-between group cursor-pointer border-2 transition-all border-transparent hover:border-slate-200">
                <div class="flex items-center gap-4 text-left">
                    <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-black text-sm text-left">AK</div>
                    <div class="text-left">
                        <h3 class="text-sm font-black text-slate-900 text-left">Ananya K.</h3>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wide text-left">STORE STAFF</p>
                    </div>
                </div>
                <div class="text-right">
                    <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-1 text-right">CHECK-IN</p>
                    <div class="w-10 h-5 bg-slate-200 rounded-full relative cursor-pointer ml-auto"><div class="w-3 h-3 bg-white rounded-full absolute left-1 top-1 shadow-sm"></div></div>
                </div>
            </div>

            <!-- Card 3 -->
            <div onclick="setPromoterViewMode('performance')" class="card p-4 flex items-center justify-between group cursor-pointer border-2 transition-all border-transparent hover:border-slate-200">
                 <div class="flex items-center gap-4 text-left">
                    <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-black text-sm text-left">VM</div>
                    <div class="text-left">
                        <h3 class="text-sm font-black text-slate-900 text-left">Vikram M.</h3>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wide text-left">ELECTRONICS PRO</p>
                    </div>
                </div>
                <div class="text-right">
                    <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-1 text-right">CHECK-IN</p>
                    <div class="w-10 h-5 bg-green-500 rounded-full relative cursor-pointer ml-auto"><div class="w-3 h-3 bg-white rounded-full absolute right-1 top-1 shadow-sm"></div></div>
                </div>
            </div>

             <!-- Card 4 -->
            <div onclick="setPromoterViewMode('performance')" class="card p-4 flex items-center justify-between group cursor-pointer border-2 transition-all border-transparent hover:border-slate-200">
                 <div class="flex items-center gap-4 text-left">
                    <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-black text-sm text-left">SD</div>
                    <div class="text-left">
                        <h3 class="text-sm font-black text-slate-900 text-left">Sarah D.</h3>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wide text-left">AUDIO SPECIALIST</p>
                    </div>
                </div>
                <div class="text-right">
                    <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-1 text-right">CHECK-IN</p>
                    <div class="w-10 h-5 bg-slate-200 rounded-full relative cursor-pointer ml-auto"><div class="w-3 h-3 bg-white rounded-full absolute left-1 top-1 shadow-sm"></div></div>
                </div>
            </div>

            <!-- Add Button -->
            <div class="fixed bottom-32 right-8 z-20 sm:absolute sm:bottom-32 sm:right-8">
                <button onclick="setPromoterViewMode('onboarding')" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                    <span class="material-icons-outlined text-2xl">add</span>
                </button>
            </div>
        </div>

        <!-- Footer Stats -->
        <div class="p-6 border-t border-slate-100 bg-white grid grid-cols-2 gap-4 shrink-0 z-10 relative text-left">
             <div class="text-left border-r border-slate-100">
                <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">TEAM CONTRIBUTION ₹</p>
                <h3 class="text-xl font-black text-slate-900 tracking-tight text-left">12.4L</h3>
             </div>
             <div class="text-right">
                <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-right">AVG ASP</p>
                <h3 class="text-xl font-black text-slate-900 tracking-tight text-right">₹42,500</h3>
             </div>
        </div>
    `}function Ed(){return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <!-- Header -->
            <div class="p-6 border-b border-slate-100 flex items-center justify-between shrink-0 text-left">
                <div class="flex items-center gap-3 text-left">
                    <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg text-left"><div class="w-2 h-2 bg-white rounded-full"></div></div>
                    <div class="text-left">
                        <h2 class="text-sm font-black text-slate-900 tracking-tight text-left">RetailerOS</h2>
                        <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest -mt-0.5 text-left">ADD NEW PROMOTER</p>
                    </div>
                </div>
                <button onclick="setPromoterViewMode('performance')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full text-left"><span class="material-icons-outlined text-lg">close</span></button>
            </div>

            <div class="flex-1 overflow-y-auto p-8 space-y-8 text-left">
                <div class="text-left">
                    <h1 class="text-xl font-black text-slate-900 tracking-tight mb-1 text-left">Staff Onboarding</h1>
                    <p class="text-xs text-slate-500 font-medium text-left">Register a new promoter or store employee.</p>
                </div>

                <div class="space-y-5 text-left">
                    <div class="space-y-1 text-left">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Full Name</label>
                        <input type="text" placeholder="Enter legal name" class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                    </div>

                    <div class="space-y-1 text-left">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Mobile Number</label>
                        <input type="text" placeholder="+1(555)000-0000" class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                    </div>
                    
                    <div class="space-y-1 text-left">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Hiring Date</label>
                        <div class="relative text-left">
                            <input type="text" placeholder="mm/dd/yyyy" class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                            <span class="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm text-left">calendar_today</span>
                        </div>
                    </div>

                    <div class="space-y-1 text-left">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Assigned Brand</label>
                        <div class="relative text-left">
                            <select class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm appearance-none text-slate-600 text-left">
                                <option>Select Brand</option>
                                <option>Samsung</option>
                                <option>Apple</option>
                                <option>Sony</option>
                            </select>
                            <span class="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm text-left">expand_more</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-6 border-t border-slate-100 shrink-0 text-left">
                <button class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-left">
                    Confirm Hire <span class="material-icons-outlined text-sm text-left">person_add</span>
                </button>
            </div>
        </div>
    `}function Td(){return`
        <div class="h-full flex flex-col relative bg-white text-left">
             <!-- Header -->
            <div class="p-6 border-b border-slate-100 flex items-center justify-between shrink-0 text-left">
                 <button onclick="setPromoterViewMode('list')" class="lg:hidden flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
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
                        <span class="absolute top-4 right-4 bg-green-50 text-green-600 text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide text-left">+12.4%</span>
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
                            <span class="flex items-center gap-1 text-[8px] font-bold text-slate-400 uppercase text-right"><div class="w-1.5 h-1.5 rounded-full bg-green-500 text-right"></div> Present</span>
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
                            <div class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[8px] font-black mx-auto text-center">1</div>
                         </div>
                         <div class="grid grid-cols-7 gap-1 place-items-center text-left">
                             <div class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[8px] font-bold text-center">2</div>
                             <div class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[8px] font-bold text-center">3</div>
                             <div class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[8px] font-bold text-center">4</div>
                             <div class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[8px] font-bold text-center">5</div>
                             <div class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[8px] font-bold text-center">6</div>
                             <div class="w-6 h-6 rounded-full bg-slate-50 text-slate-300 flex items-center justify-center text-[8px] font-bold text-center">7</div>
                             <div class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[8px] font-bold text-center">8</div>
                             
                             <div class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[8px] font-bold mt-2 text-center">9</div>
                             <div class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[8px] font-bold mt-2 text-center">10</div>
                             <div class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[8px] font-bold mt-2 text-center">11</div>
                             <div class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[8px] font-bold mt-2 text-center">12</div>
                             <div class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[8px] font-bold mt-2 text-center">13</div>
                             <div class="w-6 h-6 rounded-full bg-slate-50 text-slate-300 flex items-center justify-center text-[8px] font-bold mt-2 text-center">14</div>
                             <div class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[8px] font-bold mt-2 text-center">15</div>
                         </div>
                    </div>
                 </section>
            </div>
        </div>
    `}function En(e){const t=e==="desktop-secondary";return window.setPromoterViewMode=s=>{c.promoterViewMode=s,C()},t?c.promoterViewMode==="onboarding"?Ed():Td():Rd()}function Md(){return`
         <header class="p-4 sm:p-8 pb-4 shrink-0 transition-all">
            <div class="flex items-center justify-between mb-6">
                <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                    <span class="material-icons-outlined">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900">Inventory Management</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Stock & Assets</p>
                </div>
                <button class="p-2 text-slate-400 hover:text-slate-900"><span class="material-symbols-outlined text-xl">search</span></button>
            </div>

             <!-- Toggle Tabs -->
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                 <button onclick="setInventoryTab('brands')" class="flex-1 py-3 ${c.inventoryTab==="brands"?"bg-white shadow-sm text-slate-900":"text-slate-400"} text-[10px] font-black uppercase rounded-lg transition-all">Brands</button>
                 <button onclick="setInventoryTab('categories')" class="flex-1 py-3 ${c.inventoryTab==="categories"?"bg-white shadow-sm text-slate-900":"text-slate-400"} text-[10px] font-black uppercase rounded-lg transition-all">Category</button>
            </div>
        </header>
    `}function Dd(){return`
        <div class="scrolling-content px-6 space-y-4 pb-32">
             <!-- Apple -->
            <div onclick="setInventoryMode('details')" class="card p-5 border-2 transition-all cursor-pointer group bg-white ${c.inventoryMode==="details"?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                <div class="flex justify-between items-start mb-4">
                    <div class="text-left">
                        <h3 class="text-lg font-black text-slate-900">Apple</h3>
                        <span class="bg-green-50 text-green-600 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide inline-block mt-1">Premium</span>
                    </div>
                    <div class="text-right">
                        <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-0.5">AVG MARGIN</p>
                        <p class="text-sm font-black text-slate-900">12.4%</p>
                    </div>
                </div>
                <div class="mb-5 text-left">
                     <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">TOTAL VALUE BLOCKED</p>
                     <h2 class="text-2xl font-black text-slate-900 tracking-tighter text-left">₹42,84,500</h2>
                </div>
                <div class="border-t border-dashed border-slate-100 pt-3 text-left">
                     <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-2 text-left">TOP ITEM METRICS</p>
                     <div class="grid grid-cols-3 gap-2 text-center">
                        <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">MRP</p>
                            <p class="text-[8px] font-black text-slate-900">₹1,29,900</p>
                        </div>
                        <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">MOP</p>
                            <p class="text-[8px] font-black text-slate-900">₹1,14,999</p>
                        </div>
                         <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">DP</p>
                            <p class="text-[8px] font-black text-slate-900">₹1,02,450</p>
                        </div>
                     </div>
                </div>
            </div>

            <!-- OnePlus -->
            <div onclick="setInventoryMode('details')" class="card p-5 border-2 transition-all cursor-pointer group bg-white border-transparent hover:border-slate-200">
                <div class="flex justify-between items-start mb-4">
                    <div class="text-left">
                        <h3 class="text-lg font-black text-slate-900">OnePlus</h3>
                        <span class="bg-blue-50 text-blue-600 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide inline-block mt-1">Electronics</span>
                    </div>
                     <div class="text-right">
                        <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-0.5">AVG MARGIN</p>
                        <p class="text-sm font-black text-slate-900">15.8%</p>
                    </div>
                </div>
                <div class="mb-5 text-left">
                     <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">TOTAL VALUE BLOCKED</p>
                     <h2 class="text-2xl font-black text-slate-900 tracking-tighter text-left">₹28,12,300</h2>
                </div>
                <div class="border-t border-dashed border-slate-100 pt-3 text-left">
                     <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-2 text-left">TOP ITEM METRICS</p>
                     <div class="grid grid-cols-3 gap-2 text-center">
                        <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">MRP</p>
                            <p class="text-[8px] font-black text-slate-900">₹74,999</p>
                        </div>
                        <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">MOP</p>
                            <p class="text-[8px] font-black text-slate-900">₹69,999</p>
                        </div>
                         <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">DP</p>
                            <p class="text-[8px] font-black text-slate-900">₹58,400</p>
                        </div>
                     </div>
                </div>
            </div>

            <!-- Nothing -->
            <div onclick="setInventoryMode('details')" class="card p-5 border-2 transition-all cursor-pointer group bg-white border-transparent hover:border-slate-200">
                <div class="flex justify-between items-start mb-4">
                    <div class="text-left">
                        <h3 class="text-lg font-black text-slate-900">Nothing</h3>
                        <span class="bg-orange-50 text-orange-600 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide inline-block mt-1">Audio & Mobile</span>
                    </div>
                     <div class="text-right">
                        <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-0.5">AVG MARGIN</p>
                        <p class="text-sm font-black text-slate-900">18.2%</p>
                    </div>
                </div>
               <div class="mb-5 text-left">
                     <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">TOTAL VALUE BLOCKED</p>
                     <h2 class="text-2xl font-black text-slate-900 tracking-tighter text-left">₹14,45,000</h2>
                </div>
                <div class="border-t border-dashed border-slate-100 pt-3 text-left">
                     <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-2 text-left">TOP ITEM METRICS</p>
                     <div class="grid grid-cols-3 gap-2 text-center">
                        <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">MRP</p>
                            <p class="text-[8px] font-black text-slate-900">₹24,990</p>
                        </div>
                        <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">MOP</p>
                            <p class="text-[8px] font-black text-slate-900">₹22,500</p>
                        </div>
                         <div class="bg-slate-50 p-2 rounded-lg">
                            <p class="text-[6px] font-bold text-slate-400 uppercase">DP</p>
                            <p class="text-[8px] font-black text-slate-900">₹18,450</p>
                        </div>
                     </div>
                </div>
            </div>
        </div>

        <!-- Floating Action Button -->
        <div class="fixed bottom-8 right-8 z-20 sm:absolute sm:bottom-8 sm:right-8">
            <button onclick="setInventoryMode('inward')" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                <span class="material-icons-outlined text-2xl">add</span>
            </button>
        </div>
    `}function Ld(){const s=((window.getCache?window.getCache():{products:[]}).products||[]).reduce((d,r)=>{const p=r.category||"Uncategorized";d[p]||(d[p]={count:0,blocked:0,margin:0,icon:"category"}),d[p].count+=parseInt(r.stock)||0;const o=parseInt(r.price)||0,u=o*.9;return d[p].blocked+=(parseInt(r.stock)||0)*u,d[p].margin+=(o-u)*(parseInt(r.stock)||0),p.toLowerCase().includes("phone")?d[p].icon="smartphone":p.toLowerCase().includes("tablet")?d[p].icon="tablet_mac":p.toLowerCase().includes("audio")&&(d[p].icon="headphones"),d},{}),a=Object.keys(s),n=Object.values(s).reduce((d,r)=>d+r.blocked,0),l=Object.values(s).reduce((d,r)=>d+r.margin,0);return`
        < div class="scrolling-content px-6 space-y-4 pb-32" >
            <div class="text-left mb-2 px-2">
                <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest border-l-2 border-slate-900 pl-2 text-left">INVENTORY > OVERVIEW</p>
                <h2 class="text-lg font-black text-slate-900 mt-1 text-left">Category Breakdown</h2>
            </div>

            ${a.length===0?`
                <div class="p-10 text-center opacity-30">
                    <p class="text-[10px] font-black uppercase tracking-widest">No inventory data available</p>
                </div>
            `:a.map(d=>{const r=s[d];return`
                <div onclick="state.activeCategory='${d}'; setInventoryMode('details')" class="card p-5 border-2 transition-all cursor-pointer group bg-white flex items-center justify-between border-transparent hover:border-slate-200 text-left">
                    <div class="flex items-center gap-4 text-left">
                        <div class="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600"><span class="material-icons-outlined text-lg">${r.icon}</span></div>
                        <div class="text-left">
                            <h3 class="text-sm font-black text-slate-900 text-left">${d}</h3>
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-wide text-left">STOCK COUNT: ${r.count}</p>
                        </div>
                    </div>
                     <span class="material-icons-outlined text-slate-300">chevron_right</span>
                </div>
                <div class="grid grid-cols-2 gap-4 px-2 -mt-2 mb-4 text-left">
                    <div class="text-left">
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 text-left">BLOCKED CAPITAL</p>
                        <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">₹${r.blocked.toLocaleString()}</h4>
                    </div>
                     <div class="text-right">
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 text-right">EXPECTED MARGIN</p>
                        <h4 class="text-sm font-black text-green-500 tracking-tight text-right">₹${r.margin.toLocaleString()}</h4>
                    </div>
                </div>
                `}).join("")}

            < !--Brand Health Widget-- >
        <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm mt-4 text-left">
            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-3 text-left">BRAND HEALTH</p>
            <div class="flex gap-4 text-left">
                <div class="flex-1 bg-slate-900 rounded-xl p-3 text-white text-left">
                    <p class="text-[7px] font-black uppercase tracking-widest opacity-60 mb-1 text-left">TOTAL CAPITAL</p>
                    <p class="text-lg font-black tracking-tight text-white text-left">₹${(n/1e7).toFixed(2)} Cr</p>
                </div>
                <div class="flex-1 bg-slate-50 border border-slate-100 rounded-xl p-3 text-slate-900 flex justify-between items-center text-left">
                    <div class="text-left">
                        <p class="text-[7px] font-black uppercase tracking-widest opacity-40 mb-1 text-left">AVG. MARGIN</p>
                        <p class="text-lg font-black tracking-tight text-left">${n>0?(l/n*100).toFixed(1):0}%</p>
                    </div>
                    <span class="material-icons-outlined text-slate-900 bg-white rounded-full p-1 shadow-sm text-sm text-left">bar_chart</span>
                </div>
            </div>
        </div>
        </div >
         
         < !--Floating Action Button-- >
        <div class="fixed bottom-8 right-8 z-20 sm:absolute sm:bottom-8 sm:right-8">
            <button onclick="setInventoryMode('inward')" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                <span class="material-icons-outlined text-2xl">add</span>
            </button>
        </div>
    `}async function jd(){const e=document.getElementById("inward-model").value,t=document.getElementById("inward-imei").value;if(document.getElementById("inward-sn").value,!e||!t){alert("Model name and IMEI are required.");return}const s=document.getElementById("confirm-inward-btn");s.disabled=!0,s.innerText="Syncing...";try{const a=await M.query("SELECT * FROM products WHERE name = ?",[e]);let n=1;if(a.length>0)n=parseInt(a[0].stock)+1,await M.query("UPDATE products SET stock = ? WHERE id = ?",[n,a[0].id]);else{const l="PRD-"+Math.random().toString(36).substr(2,6).toUpperCase();await M.query(`
                INSERT INTO products (id, name, category, brand, price, stock, imei)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `,[l,e,"Smartphone",e.split(" ")[0],5e4,1,t])}await M.query(`
            INSERT INTO inventory_logs (id, product_id, type, quantity, reason, date)
            VALUES (?, ?, ?, ?, ?, ?)
        `,["LOG-"+Math.random().toString(36).substr(2,6).toUpperCase(),e,"INWARD",1,"New Shipment Arrival",new Date().toISOString()]),await K(),window.setInventoryMode("details")}catch(a){alert("Inward failed: "+a.message),s.disabled=!1,s.innerText="Confirm Inward"}}window.confirmInward=jd;function qd(){return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <!-- Header -->
            <div class="p-6 border-b border-slate-100 flex items-center justify-between shrink-0 text-left">
                 <div class="flex items-center gap-3 text-left">
                    <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg text-left"><span class="material-icons-outlined text-white">input</span></div>
                    <div class="text-left">
                        <h2 class="text-sm font-black text-slate-900 tracking-tight text-left">Inward Shipment</h2>
                        <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest -mt-0.5 text-left">Scanning & Details</p>
                    </div>
                </div>
                 <button onclick="setInventoryMode('details')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full text-left">
                    <span class="material-icons-outlined text-lg text-left">close</span>
                 </button>
            </div>

            <div class="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar text-left">
                 <div class="space-y-4 text-left">
                    <div class="space-y-1 text-left">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Model Name</label>
                        <input type="text" id="inward-model" placeholder="Model Name..." class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                    </div>

                    <div class="grid grid-cols-2 gap-4 text-left">
                        <div class="space-y-1 text-left">
                            <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">IMEI Number</label>
                            <input type="text" id="inward-imei" placeholder="IMEI..." class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                        </div>
                        <div class="space-y-1 text-left">
                            <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Serial Number</label>
                            <input type="text" id="inward-sn" placeholder="Serial..." class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                        </div>
                    </div>
                 </div>
            </div>

            <div class="p-6 border-t border-slate-100 shrink-0 text-left">
                 <button id="confirm-inward-btn" onclick="confirmInward()" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-center text-center">
                     Confirm Inward <span class="material-icons-outlined text-sm text-center">arrow_forward</span>
                 </button>
            </div>
        </div>
    `}function Od(){const t=(window.getCache?window.getCache():{products:[]}).products||[];return`
         <div class="h-full flex flex-col relative bg-white text-left">
            <!-- Header -->
            <div class="p-6 border-b border-slate-100 shrink-0 text-left">
                <div class="flex items-center gap-2 text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">
                    <span class="text-left">Inventory</span>
                    <span class="material-icons-outlined text-[10px] text-left">chevron_right</span>
                    <span class="text-left">Apple</span>
                    <span class="material-icons-outlined text-[10px] text-left">chevron_right</span>
                    <span class="text-slate-900 underline text-left">Smartphones</span>
                </div>
                <div class="flex items-center justify-between text-left">
                     <h2 class="text-xl font-black text-slate-900 tracking-tighter text-left">Smartphones</h2>
                     <div class="flex gap-2 text-slate-400 text-left">
                        <button class="hover:text-slate-900"><span class="material-icons-outlined text-lg">search</span></button>
                         <button class="hover:text-slate-900"><span class="material-icons-outlined text-lg">filter_list</span></button>
                     </div>
                </div>
            </div>

            <div class="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar bg-slate-50/50 text-left">

                ${t.length===0?`
                    <div class="p-20 text-center opacity-30">
                        <span class="material-icons-outlined text-4xl mb-4">inventory_2</span>
                        <p class="text-[10px] font-black uppercase tracking-widest">No Inventory Found</p>
                    </div>
                `:t.map(s=>{const a=parseInt(s.stock)||0,n=parseInt(s.price)||0,l=n*1.1,d=n*.9,r=a*d,p=(n-d)*a;return`
                    <div class="card p-5 bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-sm group text-left">
                        <div class="flex justify-between items-start mb-4 border-b border-dashed border-slate-100 pb-3 text-left">
                            <div class="text-left">
                                <h3 class="text-sm font-black text-slate-900 text-left">${s.name}</h3>
                                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wide mt-0.5 text-left">${s.color||"Standard"} • ${a} UNITS</p>
                            </div>
                            <span class="text-[8px] font-bold text-slate-300 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100 text-left">ID: ${s.id}</span>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mb-4 text-left">
                            <div class="text-left">
                                <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 text-left">BLOCKED CAPITAL</p>
                                <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">₹${r.toLocaleString()}</h4>
                            </div>
                             <div class="text-right">
                                <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 text-right">EXPECTED MARGIN</p>
                                <h4 class="text-sm font-black text-green-500 tracking-tight text-right">₹${p.toLocaleString()}</h4>
                            </div>
                        </div>
                        <div class="flex justify-between items-center text-center bg-slate-50 rounded-lg p-2 border border-slate-100">
                            <div>
                                <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest">MRP</p>
                                <p class="text-[9px] font-black text-slate-900">₹${l.toLocaleString()}</p>
                            </div>
                            <div>
                                <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest">MOP</p>
                                <p class="text-[9px] font-black text-slate-900">₹${n.toLocaleString()}</p>
                            </div>
                             <div>
                                <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest">DP (DIST.)</p>
                                <p class="text-[9px] font-black text-slate-900">₹${d.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                    `}).join("")}
            </div>
            
            <div class="p-6 border-t border-slate-100 shrink-0 bg-white text-left">
                <div class="flex justify-between items-center mb-4 text-left">
                    <div class="text-left">
                         <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Category Total</p>
                         <h2 class="text-xl font-black tracking-tighter text-slate-900 text-left">₹54,62,100</h2>
                    </div>
                    <button class="px-6 py-3 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg flex items-center gap-2 text-left">
                         <span class="material-icons-outlined text-sm text-left">download</span> Export Inventory
                    </button>
                </div>
            </div>

        </div>
    `}function Tn(e){const t=e==="desktop-secondary";return window.setInventoryTab=s=>{c.inventoryTab=s,C()},window.setInventoryMode=s=>{c.inventoryMode=s,C()},t?c.inventoryMode==="inward"?qd():Od():`
        <div class="h-full flex flex-col relative bg-white">
            ${Md()}
            ${c.inventoryTab==="brands"?Dd():Ld()}
        </div>
    `}function Pd(e){return`
         <div class="h-full flex flex-col relative bg-white text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                    <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                        <span class="material-icons-outlined text-left">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                    </button>
                    <div class="text-center translate-x-1">
                        <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">Settings</h1>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Global Dashboard</p>
                    </div>
                    <button class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">tune</span></button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto p-6 pt-0 custom-scrollbar text-left">
                <!-- Settings Grid -->
                <div class="card overflow-hidden border-slate-200 mb-8 text-left">
                    <div class="grid ${e==="mobile"?"grid-cols-4":"grid-cols-6"} divide-x divide-y divide-slate-100 text-left">
                        ${[{n:"Roles",i:"admin_panel_settings",k:"roles"},{n:"Finance",i:"account_balance",k:"accounting"},{n:"Ledger",i:"menu_book",k:"ledger"},{n:"Store",i:"store"},{n:"Security",i:"security"},{n:"Alerts",i:"notifications"},{n:"Taxes",i:"percent"},{n:"Plugins",i:"grid_view"},{n:"Teams",i:"hub"},{n:"Logs",i:"history"},{n:"Lang",i:"language"},{n:"Backup",i:"cloud_upload"},{n:"Bills",i:"description"},{n:"AI Config",i:"smart_toy",k:"ai"},{n:"Updates",i:"update"},{n:"API",i:"key"},{n:"Theme",i:"palette"},{n:"Help",i:"support"}].map(n=>`
                            <button onclick="${n.k?`window.setSettingsView('${n.k}')`:""}" class="aspect-square flex flex-col items-center justify-center p-1.5 hover:bg-slate-50 transition-all text-center ${c.settingsView===n.k?"bg-slate-100":""}">
                                <span class="material-icons-outlined text-xl ${c.settingsView===n.k?"text-slate-900 font-bold":"text-slate-500"} mb-1 text-center">${n.i}</span>
                                <span class="text-[7px] font-black uppercase text-center tracking-wider leading-tight ${c.settingsView===n.k?"text-slate-900":"text-slate-500"}">${n.n}</span>
                            </button>
                        `).join("")}
                    </div>
                </div>

                <div class="mb-4 text-left">
                     <p class="text-[8px] font-bold text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-900 rounded-full text-left"></span> System Health
                     </p>
                     <div class="bg-white border border-slate-100 rounded-2xl p-4 flex gap-8 shadow-sm text-left">
                        <div class="text-left">
                             <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-1 text-left">SERVER STATUS</p>
                             <div class="flex items-center gap-1.5 text-[9px] font-black text-green-600 uppercase tracking-wide text-left">
                                <span class="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse text-left"></span> Optimal
                             </div>
                        </div>
                         <div class="text-left">
                             <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-1 text-left">LAST SYNC</p>
                             <div class="flex items-center gap-1.5 text-[9px] font-black text-slate-900 uppercase tracking-wide text-left">
                                <span class="material-icons-outlined text-xs text-left">history</span> 2m ago
                             </div>
                        </div>
                     </div>
                </div>
            </div>
         </div>
    `}function Nd(){const e=c.settingsSubView==="add",t=c.settingsActiveRole||"Store Manager";return`
         <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <!-- Header -->
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                    <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                        <span class="material-icons-outlined text-left">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                    </button>
                    <div class="text-center translate-x-1">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900 text-center">Roles & Access</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Security Settings</p>
                    </div>
                    <button onclick="window.setSettingsSubView('add')" class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">add_circle</span></button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                
                <!-- SECTION 1: Current Roles List -->
                <div class="p-6 space-y-3 border-b border-dashed border-slate-200 text-left">
                     <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Current Roles</p>
                     
                     <div onclick="window.setSettingsRole('Store Manager')" class="card p-4 border-2 transition-all flex items-center justify-between group cursor-pointer text-left ${t==="Store Manager"&&!e?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                        <div class="flex items-center gap-4 text-left">
                            <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 text-left"><span class="material-icons-outlined text-left">security</span></div>
                            <div class="text-left">
                                <h3 class="text-sm font-black text-slate-900 text-left">Store Manager</h3>
                                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wide text-left">Full System Access • PIN Enabled</p>
                            </div>
                        </div>
                        <span class="material-icons-outlined text-left ${t==="Store Manager"&&!e?"text-slate-900":"text-slate-300"}">chevron_right</span>
                     </div>

                     <div onclick="window.setSettingsRole('Sales Staff')" class="card p-4 border-2 transition-all flex items-center justify-between group cursor-pointer text-left ${t==="Sales Staff"&&!e?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                        <div class="flex items-center gap-4 text-left">
                            <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 text-left"><span class="material-icons-outlined text-left">badge</span></div>
                            <div class="text-left">
                                <h3 class="text-sm font-black text-slate-900 text-left">Sales Staff</h3>
                                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wide text-left">8 Apps Enabled • No Reports</p>
                            </div>
                        </div>
                        <span class="material-icons-outlined text-left ${t==="Sales Staff"&&!e?"text-slate-900":"text-slate-300"}">chevron_right</span>
                     </div>
                </div>

                 <!-- SECTION 2: Details OR Add Form -->
                <div class="p-6 space-y-4 animate-slide-up text-left">
                    ${e?`
                        <!-- ADD NEW ROLE FORM -->
                        <div class="bg-slate-50 rounded-2xl p-6 border border-slate-200 border-dashed animate-slide-up text-left">
                            <div class="flex items-center gap-2 mb-6 text-left">
                                <span class="bg-slate-900 text-white text-[9px] font-black px-2 py-0.5 rounded uppercase text-left">NEW</span>
                                <p class="text-[10px] font-black text-slate-900 uppercase tracking-widest text-left">Create Access Level</p>
                            </div>
                            <div class="space-y-4 text-left">
                                <div class="space-y-1 text-left">
                                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Identify Name</label>
                                    <input type="text" placeholder="e.g. Floor Supervisor" class="w-full px-4 py-3 bg-white border border-slate-200 focus:border-slate-900 rounded-xl text-xs font-bold focus:outline-none transition-all shadow-sm text-left">
                                </div>
                                <div class="space-y-3 pt-2 text-left">
                                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 text-left">Initialize Permissions</p>
                                    <div class="flex items-center justify-between py-2 border-b border-slate-100 text-left">
                                        <span class="text-xs font-bold text-slate-900 text-left">Dashboard & Reports</span>
                                        <div class="relative inline-block w-8 h-4 align-middle select-none text-left"><input type="checkbox" class="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 border-slate-200 appearance-none cursor-pointer left-0"/><label class="toggle-label block overflow-hidden h-4 rounded-full bg-slate-200 cursor-pointer"></label></div>
                                    </div>
                                </div>
                                <div class="pt-4 flex gap-3 text-left">
                                    <button onclick="window.setSettingsSubView('detail')" class="flex-1 py-3 border-2 border-slate-200 text-slate-400 rounded-lg text-[9px] font-black uppercase tracking-widest text-center">Cancel</button>
                                    <button onclick="window.saveNewRole()" class="flex-[2] py-3 bg-slate-900 text-white rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg text-center">Create Role</button>
                                </div>
                            </div>
                        </div>
                    
                    `:`
                        <!-- VIEW/EDIT ROLE FORM -->
                        <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm animate-slide-up text-left">
                            <div class="flex items-center justify-between mb-6 text-left">
                                <div class="flex items-center gap-2 text-left">
                                    <div class="w-2 h-6 bg-slate-900 rounded-full text-left"></div>
                                    <p class="text-[11px] font-black text-slate-900 uppercase tracking-widest text-left">Editing: ${t}</p>
                                </div>
                                <span class="text-[8px] font-bold text-slate-300 uppercase text-right">UID: ROLE_8812</span>
                            </div>

                            <div class="space-y-5 text-left">
                                <div class="space-y-1 text-left">
                                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Role Identity</label>
                                    <input type="text" value="${t}" class="w-full px-4 py-3 bg-slate-50 border border-transparent focus:bg-white focus:border-slate-200 rounded-xl text-xs font-bold focus:outline-none transition-all text-left">
                                </div>

                                <div class="space-y-3 text-left">
                                    <div class="flex justify-between items-center mb-1 text-left">
                                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">App Permissions</p>
                                        <span class="text-[8px] font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-right">15 Enabled</span>
                                    </div>
                                    
                                    <div class="flex items-center justify-between py-2.5 border-b border-slate-50 text-left">
                                        <div class="flex items-center gap-3 text-left">
                                            <div class="w-6 h-6 bg-slate-50 rounded flex items-center justify-center text-slate-400 text-left"><span class="material-icons-outlined text-sm text-left">point_of_sale</span></div>
                                            <span class="text-xs font-bold text-slate-900 text-left">Sales Desk</span>
                                        </div>
                                        <div class="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in text-left">
                                            <input type="checkbox" checked class="toggle-checkbox absolute block w-4 h-4 rounded-full bg-slate-900 border-4 border-slate-200 appearance-none cursor-pointer left-4"/>
                                            <label class="toggle-label block overflow-hidden h-4 rounded-full bg-slate-200 cursor-pointer"></label>
                                        </div>
                                    </div>
                                    
                                    <div onclick="window.toast.info('Full permissions matrix view is coming soon!')" class="bg-slate-50 rounded-xl p-3 text-center text-[9px] font-black text-slate-400 uppercase tracking-widest cursor-pointer hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200">View Full permissions matrix</div>
                                </div>

                                <!-- Security Access PIN -->
                                <div class="space-y-3 pt-4 border-t border-dashed border-slate-100 text-left">
                                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Security Pin Access</p>
                                    <div class="flex gap-2 text-left">
                                        <div class="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-md text-left">•</div>
                                        <div class="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-md text-left">•</div>
                                        <div class="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-md text-left">•</div>
                                        <div class="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg text-left"></div>
                                        <div class="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg text-left"></div>
                                        <div class="w-10 h-10 bg-slate-50 border border-slate-100 rounded-lg text-left"></div>
                                    </div>
                                    <button onclick="window.updateRole()" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl mt-4 hover:scale-[1.02] transition-transform text-center">Update Role Profile</button>
                                </div>
                            </div>
                        </div>
                    `}
                </div>
            </div>
         </div>
    `}function Bd(){return`
         <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                     <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                        <span class="material-icons-outlined text-left">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                    </button>
                    <div class="text-center translate-x-1">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900 text-center">Accounting</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Financial Data Export</p>
                    </div>
                    <div class="w-10 text-left"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar text-left">
                <!-- Date Range -->
                <div class="space-y-2 text-left">
                     <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Date Range</p>
                     <div class="flex gap-2 text-left">
                         <div class="flex-1 border border-slate-200 rounded-xl p-3 bg-white text-left">
                             <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">From</p>
                             <p class="text-sm font-black text-slate-900 text-left">01 Oct 2023</p>
                         </div>
                         <div class="flex-1 border border-slate-200 rounded-xl p-3 bg-white text-left">
                             <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">To</p>
                             <p class="text-sm font-black text-slate-900 text-left">31 Oct 2023</p>
                         </div>
                     </div>
                     <div class="bg-slate-50 rounded-lg p-2.5 text-center text-[9px] font-bold text-slate-500 uppercase tracking-widest cursor-pointer hover:bg-slate-100 transition-colors">Quick Select: Last Month</div>
                </div>

                <!-- Include in Export -->
                 <div class="space-y-2 text-left">
                     <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 text-left text-left">Include In Export</p>
                     
                     <div class="flex items-center justify-between p-3 bg-white border border-transparent hover:border-slate-100 rounded-xl transition-all text-left">
                        <div class="flex items-center gap-3 text-left">
                             <span class="material-icons-outlined text-slate-400 text-lg text-left">receipt_long</span>
                             <span class="text-xs font-bold text-slate-900 text-left">Sales Transactions</span>
                        </div>
                        <span class="material-icons-outlined text-slate-900 text-left">check_circle</span>
                     </div>

                     <div class="flex items-center justify-between p-3 bg-white border border-transparent hover:border-slate-100 rounded-xl transition-all text-left">
                        <div class="flex items-center gap-3 text-left">
                             <span class="material-icons-outlined text-slate-400 text-lg text-left">local_offer</span>
                             <span class="text-xs font-bold text-slate-900 text-left">Discounts & Vouchers</span>
                        </div>
                        <span class="material-icons-outlined text-slate-900 text-left">check_circle</span>
                     </div>

                     <div class="flex items-center justify-between p-3 bg-white border border-transparent hover:border-slate-100 rounded-xl transition-all text-left">
                        <div class="flex items-center gap-3 text-left">
                             <span class="material-icons-outlined text-slate-400 text-lg text-left">account_balance</span>
                             <span class="text-xs font-bold text-slate-900 text-left">GST Breakup</span>
                        </div>
                        <span class="material-icons-outlined text-slate-900 text-left">check_circle</span>
                     </div>

                      <div class="flex items-center justify-between p-3 bg-white border border-transparent hover:border-slate-100 rounded-xl transition-all text-left">
                        <div class="flex items-center gap-3 text-left">
                             <span class="material-icons-outlined text-slate-400 text-lg text-left">qr_code</span>
                             <span class="text-xs font-bold text-slate-900 text-left">HSN / SAC Codes</span>
                        </div>
                        <span class="material-icons-outlined text-slate-900 text-left">check_circle</span>
                     </div>
                </div>

                <button class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform text-center">
                    Download Transaction Excel
                    <span class="block text-[8px] font-normal text-slate-400 lowercase mt-0.5 text-center">XLSX • 1.2 MB Estimated</span>
                </button>
                
                <div class="pt-6 border-t border-dashed border-slate-200 text-left text-left">
                     <div class="flex items-center gap-3 mb-4 text-left">
                        <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 text-left"><span class="material-icons-outlined text-left">account_box</span></div>
                        <div class="text-left">
                            <h3 class="text-sm font-black text-slate-900 text-left">Connect Accountant</h3>
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wide text-left">Automated monthly reports</p>
                        </div>
                     </div>
                     <div class="relative text-left">
                          <input type="text" value="accountant@firm.com" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-500 focus:outline-none text-left">
                          <span class="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm text-left">help</span>
                     </div>
                     <button class="w-full py-3 mt-3 border-2 border-slate-900 rounded-xl text-[10px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-50 transition-colors text-center">
                        Enable Auto-Sync
                    </button>
                </div>
            </div>
        </div>
    `}function Fd(){return`
         <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                     <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                        <span class="material-icons-outlined text-left">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                    </button>
                    <div class="text-center translate-x-1">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900 text-center">Ledger</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Financial Oversight</p>
                    </div>
                    <button class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">filter_list</span></button>
                </div>
            </header>

            <div class="p-4 bg-slate-50 border-b border-slate-100 text-left">
                 <div class="relative text-left">
                     <span class="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg text-left">search</span>
                     <input type="text" placeholder="Search ledgers (Sales, Cash, Brand...)" class="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all text-left">
                </div>
            </div>

            <div class="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar text-left">
                
                <!-- Main Ledger Card -->
                <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm relative overflow-hidden text-left">
                     <div class="flex justify-between items-start mb-4 relative z-10 text-left">
                        <div class="flex items-center gap-3 text-left">
                            <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white text-left"><span class="material-icons-outlined text-left">account_balance</span></div>
                            <div class="text-left">
                                 <h3 class="text-sm font-black text-slate-900 text-left">Sales Ledger (Main)</h3>
                                 <p class="text-[8px] font-bold text-slate-400 uppercase tracking-wide text-left">A/C No: 4402-2291-XX</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <h3 class="text-sm font-black text-slate-900 text-right">₹2,44,500.00</h3>
                            <p class="text-[8px] font-black text-green-500 uppercase tracking-wide text-right">CR BALANCE</p>
                        </div>
                     </div>

                     <div class="space-y-4 relative z-10 text-left">
                         <div class="flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 text-left">
                             <span class="text-left">Date/Desc</span>
                             <div class="flex gap-4 text-right"><span>Debit</span><span>Credit</span></div>
                         </div>
                         
                         <div class="flex justify-between items-center text-left">
                              <div class="text-left">
                                  <p class="text-[9px] font-bold text-slate-900 text-left">12 Oct 2023</p>
                                  <p class="text-[8px] text-slate-400 text-left">Store Front Retail Sale...</p>
                              </div>
                              <div class="flex gap-8 text-[9px] font-black tabular-nums text-right">
                                <span class="text-slate-300 text-right">---</span>
                                <span class="text-slate-900 text-right">₹45,000</span>
                              </div>
                         </div>

                         <div class="flex justify-between items-center text-left">
                              <div class="text-left">
                                  <p class="text-[9px] font-bold text-slate-900 text-left">11 Oct 2023</p>
                                  <p class="text-[8px] text-slate-400 text-left">Vendor Credit Return -...</p>
                              </div>
                              <div class="flex gap-8 text-[9px] font-black tabular-nums text-right">
                                <span class="text-red-500 text-right">₹12,400</span>
                                <span class="text-slate-300 text-right">---</span>
                              </div>
                         </div>

                         <div class="flex justify-between items-center text-left">
                              <div class="text-left">
                                  <p class="text-[9px] font-bold text-slate-900 text-left">10 Oct 2023</p>
                                  <p class="text-[8px] text-slate-400 text-left">Amex Settlement #8812</p>
                              </div>
                              <div class="flex gap-8 text-[9px] font-black tabular-nums text-right">
                                <span class="text-slate-300 text-right">---</span>
                                <span class="text-slate-900 text-right">₹1,12,000</span>
                              </div>
                         </div>
                     </div>
                     
                     <div class="mt-4 pt-3 border-t border-slate-100 text-center">
                        <span class="text-[8px] font-bold text-slate-400 uppercase tracking-widest cursor-pointer hover:text-slate-900">View All Journal Entries</span>
                     </div>
                </div>

                <!-- Other Ledgers -->
                 <div class="space-y-3 text-left">
                     <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left px-1">Other Active Ledgers</p>
                     
                     <div class="bg-white border border-slate-200 rounded-xl p-3 flex justify-between items-center hover:border-slate-300 transition-colors cursor-pointer text-left">
                         <div class="flex items-center gap-3 text-left">
                             <div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-500 text-left"><span class="material-icons-outlined text-sm text-left">payments</span></div>
                             <div class="text-left">
                                 <p class="text-xs font-black text-slate-900 text-left">Cash In Hand</p>
                                 <p class="text-[8px] font-bold text-slate-400 uppercase text-left">Liquid Assets</p>
                             </div>
                         </div>
                         <div class="flex items-center gap-3 text-right">
                             <div class="text-right">
                                 <p class="text-xs font-black text-slate-900 text-right">₹18,290.00</p>
                                 <p class="text-[7px] font-black text-slate-300 uppercase text-right">DR</p>
                             </div>
                             <span class="material-icons-outlined text-slate-300 text-sm text-right">chevron_right</span>
                         </div>
                     </div>

                     <div class="bg-white border border-slate-200 rounded-xl p-3 flex justify-between items-center hover:border-slate-300 transition-colors cursor-pointer text-left">
                         <div class="flex items-center gap-3 text-left">
                             <div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-500 text-left"><span class="material-icons-outlined text-sm text-left">diamond</span></div>
                             <div class="text-left">
                                 <p class="text-xs font-black text-slate-900 text-left">Brand Settlements</p>
                                 <p class="text-[8px] font-bold text-slate-400 uppercase text-left">Pending Payables</p>
                             </div>
                         </div>
                         <div class="flex items-center gap-3 text-right">
                             <div class="text-right">
                                 <p class="text-xs font-black text-red-500 text-right">₹(5,92,000.00)</p>
                                 <p class="text-[7px] font-black text-slate-300 uppercase text-right">CR</p>
                             </div>
                             <span class="material-icons-outlined text-slate-300 text-sm text-right">chevron_right</span>
                         </div>
                     </div>
                     
                     <div class="bg-white border border-slate-200 rounded-xl p-3 flex justify-between items-center hover:border-slate-300 transition-colors cursor-pointer text-left">
                         <div class="flex items-center gap-3 text-left">
                             <div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-500 text-left"><span class="material-icons-outlined text-sm text-left">savings</span></div>
                             <div class="text-left">
                                 <p class="text-xs font-black text-slate-900 text-left">Petty Cash</p>
                                 <p class="text-[8px] font-bold text-slate-400 uppercase text-left">Operational</p>
                             </div>
                         </div>
                         <div class="flex items-center gap-3 text-right">
                             <div class="text-right">
                                 <p class="text-xs font-black text-slate-900 text-right">₹4,500.00</p>
                                 <p class="text-[7px] font-black text-slate-300 uppercase text-right">DR</p>
                             </div>
                             <span class="material-icons-outlined text-slate-300 text-sm text-right">chevron_right</span>
                         </div>
                     </div>
                 </div>
                 
                 <div class="grid grid-cols-2 gap-4 mt-6 text-left">
                      <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left">
                          <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">TOTAL DEBIT</p>
                          <p class="text-lg font-black text-slate-900 text-left">₹16.4L</p>
                      </div>
                       <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left">
                          <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">TOTAL CREDIT</p>
                          <p class="text-lg font-black text-slate-900 text-left">₹14.2L</p>
                      </div>
                 </div>
            </div>

            <!-- Floating Action Button -->
            <div class="absolute bottom-8 right-8 z-20 text-left">
                <button class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform text-center">
                    <span class="material-icons-outlined text-2xl text-center">add</span>
                </button>
            </div>
          </div>
    `}function Ud(){const e=localStorage.getItem("openai_api_key")||"";return e?e.substring(0,7)+"..."+e.substring(e.length-4):""}window.saveOpenAIKey=()=>{var s;const e=document.getElementById("openai-key-input"),t=(s=e==null?void 0:e.value)==null?void 0:s.trim();if(!t){window.toast.warning("Please enter an API key");return}if(!t.startsWith("sk-")){window.toast.error('Invalid API key format. OpenAI keys start with "sk-"');return}localStorage.setItem("openai_api_key",t),window.toast.success("API key saved successfully!"),window.triggerRender()};window.removeOpenAIKey=()=>{window.showConfirm("Remove OpenAI API key? AI features will fall back to local processing.",()=>{localStorage.removeItem("openai_api_key"),window.toast.info("API key removed"),window.triggerRender()})};window.testOpenAIKey=async()=>{var s;const e=localStorage.getItem("openai_api_key");if(!e){window.toast.warning("No API key configured");return}const t=document.getElementById("test-key-btn");t&&(t.disabled=!0,t.innerHTML='<span class="material-icons-outlined text-sm animate-spin">sync</span> Testing...');try{const a=await fetch("https://api.openai.com/v1/models",{headers:{Authorization:`Bearer ${e}`}});if(a.ok)window.toast.success("API key is valid and working!");else{const n=await a.json();window.toast.error("API key test failed: "+(((s=n.error)==null?void 0:s.message)||"Unknown error"))}}catch(a){window.toast.error("Connection error: "+a.message)}finally{t&&(t.disabled=!1,t.innerHTML='<span class="material-icons-outlined text-sm">play_arrow</span> Test Connection')}};function Vd(){const e=!!localStorage.getItem("openai_api_key"),t=Ud();return`
        <div class="h-full flex flex-col bg-white">
            <header class="p-6 border-b border-slate-100 shrink-0">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <button onclick="window.setSettingsView('roles')" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full">
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
                            <div class="w-12 h-12 ${e?"bg-slate-900":"bg-slate-100"} rounded-2xl flex items-center justify-center">
                                <span class="material-icons-outlined ${e?"text-white":"text-slate-400"}">${e?"check_circle":"key_off"}</span>
                            </div>
                            <div>
                                <h3 class="text-sm font-black text-slate-900">${e?"AI Enabled":"AI Not Configured"}</h3>
                                <p class="text-[10px] font-bold text-slate-400">${e?"Using OpenAI GPT-4o-mini":"Using local fallback processing"}</p>
                            </div>
                        </div>
                        ${e?`
                            <button id="test-key-btn" onclick="window.testOpenAIKey()" class="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-[9px] font-black uppercase flex items-center gap-1 hover:bg-slate-200 transition-all">
                                <span class="material-icons-outlined text-sm">play_arrow</span>
                                Test Connection
                            </button>
                        `:""}
                    </div>
                </div>
                
                <!-- API Key Configuration -->
                <div class="space-y-3">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">OpenAI API Key</h3>
                    
                    ${e?`
                        <div class="card p-4 space-y-4">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-xs font-black text-slate-900">Current Key</p>
                                    <p class="text-[10px] font-mono text-slate-500">${t}</p>
                                </div>
                                <button onclick="window.removeOpenAIKey()" class="px-3 py-2 text-slate-400 hover:text-slate-900 text-[9px] font-black uppercase flex items-center gap-1">
                                    <span class="material-icons-outlined text-sm">delete</span>
                                    Remove
                                </button>
                            </div>
                        </div>
                    `:`
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
                                <p class="text-[10px] font-bold text-slate-400">${e?"OpenAI GPT-4o-mini intelligently extracts device info":"Local pattern matching (configure API for better results)"}</p>
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
    `}function Mn(e){const t=e==="desktop-secondary";return window.setSettingsView=s=>{c.settingsView=s,c.settingsSubView=null,C()},window.setSettingsSubView=s=>{c.settingsSubView=s,C()},window.setSettingsRole=s=>{c.settingsActiveRole=s,c.settingsSubView="detail",C()},window.saveNewRole=()=>{const s=document.querySelector('input[placeholder="e.g. Floor Supervisor"]');s&&s.value?(c.settingsActiveRole=s.value,c.settingsSubView="detail",window.toast.success(`Role "${s.value}" created successfully!`),C()):window.toast.warning("Please enter a role name")},window.updateRole=()=>{window.toast.success("Role profile updated successfully!"),window.setSettingsSubView("detail")},t?c.settingsView==="roles"?Nd():c.settingsView==="accounting"?Bd():c.settingsView==="ledger"?Fd():c.settingsView==="ai"?Vd():"":Pd(e)}function Gd(){return`
        <div class="space-y-4 text-left">
            ${[{id:"apple",n:"Apple",s:"PREMIUM PARTNER",amt:"₹4,82,500",live:12,comp:48,set:142,nSet:24,i:"apple"},{id:"nothing",n:"Nothing",s:"EMERGAGING BRAND",amt:"₹1,12,000",live:4,comp:15,set:56,nSet:8,i:"nothing"},{id:"oneplus",n:"OnePlus",s:"GLOBAL TECH",amt:"₹2,45,900",live:8,comp:32,set:98,nSet:12,i:"oneplus"}].map(t=>`
                <div onclick="selectSchemeBrand('${t.n}')" class="card p-5 border-2 transition-all group cursor-pointer relative overflow-hidden text-left ${c.activeSchemeBrand===t.n?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                    <div class="flex items-center justify-between mb-6 text-left">
                        <div class="flex items-center gap-4 text-left">
                            <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 text-left">
                                <span class="material-icons-outlined text-slate-400 text-left">${t.id==="apple"?"devices":t.id==="nothing"?"noise_aware":"bolt"}</span>
                            </div>
                            <div class="text-left">
                                <h3 class="text-sm font-black text-slate-900 text-left">${t.n}</h3>
                                <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest text-left">${t.s}</p>
                            </div>
                        </div>
                        <span class="material-icons-outlined text-slate-200 group-hover:text-slate-400 transition-colors text-right">chevron_right</span>
                    </div>

                    <div class="space-y-4 text-left">
                        <div class="text-left">
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">TOTAL PENDING SETTLEMENT</p>
                            <h2 class="text-2xl font-black text-slate-900 tracking-tighter text-left">${t.amt}</h2>
                        </div>

                        <div class="grid grid-cols-2 gap-4 text-left">
                            <div class="bg-slate-50 rounded-xl p-3 text-left">
                                <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 leading-none text-left">LIVE SCHEMES</p>
                                <p class="text-lg font-black text-slate-900 text-left">${t.live}</p>
                            </div>
                            <div class="bg-slate-50 rounded-xl p-3 text-left">
                                <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 leading-none text-left">COMPLETED</p>
                                <p class="text-lg font-black text-slate-900 text-left">${t.comp}</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 pt-4 border-t border-slate-50 text-left">
                            <div class="flex items-center gap-1.5 grayscale opacity-50 text-left">
                                <div class="w-1.5 h-1.5 bg-green-500 rounded-full text-left"></div>
                                <p class="text-[8px] font-black text-slate-900 uppercase tracking-widest text-left">Settled: ${t.set}</p>
                            </div>
                            <div class="flex items-center gap-1.5 text-left">
                                <div class="w-1.5 h-1.5 bg-orange-500 rounded-full text-left"></div>
                                <p class="text-[8px] font-black text-slate-900 uppercase tracking-widest text-left">Not Settled: ${t.nSet}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `).join("")}
        </div>
    `}window.setSchemeViewMode=e=>{c.showSchemeDetails=e==="details",C()};window.setActiveScheme=e=>{c.activeScheme=e,C()};function Hd(){const t=(window.getCache?window.getCache():{schemes:[]}).schemes||[];return`
        <div class="space-y-4 animate-slide-up text-left">
            ${t.map(s=>{var a;return`
                <div onclick="window.setSchemeViewMode('details'); window.setActiveScheme(${JSON.stringify(s).replace(/"/g,"&quot;")})" class="card p-6 border-2 transition-all cursor-pointer group text-left ${((a=c.activeScheme)==null?void 0:a.id)===s.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                    <div class="flex justify-between items-start mb-4 text-left">
                        <div class="text-left">
                            <h3 class="text-lg font-black text-slate-900 text-left">${s.name}</h3>
                            <span class="bg-indigo-50 text-indigo-600 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide inline-block mt-1 text-left">${s.brand}</span>
                        </div>
                        <div class="text-right">
                            <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-0.5 text-right">PAYOUT</p>
                            <p class="text-sm font-black text-slate-900 text-right">₹${parseInt(s.payout).toLocaleString()}</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-left">
                        <p class="text-[10px] font-bold text-slate-400 text-left">${s.description||"Valid on all sales"}</p>
                        <p class="text-[9px] font-black text-slate-300 uppercase text-right">End: ${new Date(s.end_date).toLocaleDateString()}</p>
                    </div>
                </div>
            `}).join("")}

            ${t.length===0?`
                <div class="py-20 text-center opacity-20">
                    <span class="material-icons-outlined text-4xl">inventory_2</span>
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] mt-4">No active schemes found</p>
                </div>
            `:""}
        </div>
    `}function Wd(e){const t=e==="mobile",s=c.activeScheme;if(!s)return'<div class="p-10 text-center">Select a scheme to view details</div>';const n=((window.getCache?window.getCache():{sales:[]}).sales||[]).filter(u=>{const h=u.product_name||"",w=typeof s=="object"&&s.brand?s.brand:"";return h.includes(w)||u.items&&u.items.some(v=>(v.name||"").includes(w))}),l=typeof s=="object"&&s.brand?s.brand:s,d=typeof s=="object"&&s.name?s.name:"Scheme",r=typeof s=="object"&&s.payout?s.payout:"0",p=typeof s=="object"&&s.end_date?s.end_date:new Date,o={count:n.length,growth:"+0%",color:l==="Apple"?"bg-indigo-950":l==="Nothing"?"bg-slate-950":"bg-emerald-950"};return`
        <div class="h-full flex flex-col bg-white animate-slide-up relative text-left">
            <header class="p-6 pb-4 shrink-0 flex items-center justify-between border-b border-slate-50 text-left">
                <div class="flex items-center gap-3 text-left">
                     <button onclick="${t?"toggleSchemeDetails(false)":"setApp('launcher')"}" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full text-left">
                        <span class="material-icons-outlined text-lg text-left">arrow_back</span>
                    </button>
                    <h2 class="text-sm font-black text-slate-900 tracking-tight text-left">Scheme Details</h2>
                </div>
                <button class="w-8 h-8 flex items-center justify-center text-slate-400 text-left"><span class="material-icons-outlined text-lg text-left">more_vert</span></button>
            </header>

            <div class="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar pb-32 text-left">
                <!-- Scheme Header Card -->
                <div class="card p-5 border-slate-100 shadow-sm space-y-6 text-left">
                    <div class="flex items-center gap-3 text-left">
                         <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 text-left">
                            <span class="material-icons-outlined text-slate-400 text-left">devices</span>
                        </div>
                        <div class="text-left">
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest leading-none mb-1 text-left">BRAND: ${l.toUpperCase()}</p>
                            <h3 class="text-sm font-black text-slate-900 text-left">${d}</h3>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3 text-left">
                         <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left">
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">PAYOUT</p>
                            <p class="text-[11px] font-black text-slate-900 text-left">₹${parseInt(r).toLocaleString()}</p>
                        </div>
                         <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left">
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">VALID UNTIL</p>
                            <p class="text-[11px] font-black text-slate-900 text-left">${new Date(p).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>

                <!-- Metrics -->
                <div class="${o.color} rounded-[32px] p-6 text-white relative overflow-hidden text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 text-left">TOTAL ORDERS UNDER SCHEME</p>
                    <div class="flex items-end gap-3 text-left">
                        <h2 class="text-5xl font-black tracking-tighter text-left">${o.count}</h2>
                        <p class="text-[10px] font-bold text-green-400 mb-2 text-left">${o.growth} this week</p>
                    </div>
                    <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full text-left"></div>
                </div>

                <!-- Transactions -->
                <div class="space-y-4 text-left">
                    <div class="flex items-center justify-between px-1 text-left">
                        <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Recent Transactions</h3>
                         <button class="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 shadow-sm border border-slate-100 text-left">
                            <span class="material-icons-outlined text-lg text-left">download</span>
                        </button>
                    </div>

                    <div class="space-y-3 text-left">
                        ${n.length===0?`
                            <div class="p-8 text-center opacity-30">
                                <p class="text-[10px] font-black uppercase tracking-widest">No qualifying sales found</p>
                            </div>
                        `:n.map(u=>`
                            <div class="card p-4 border-slate-100 hover:border-slate-300 transition-all cursor-pointer text-left">
                                <div class="flex justify-between items-start mb-2 text-left">
                                    <div class="text-left">
                                        <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">ORDER ID</p>
                                        <p class="text-xs font-black text-slate-900 text-left">${u.id}</p>
                                    </div>
                                     <div class="text-right">
                                        <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-right">DATE</p>
                                        <p class="text-[10px] font-black text-slate-900 text-right">${new Date(u.date).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <div class="flex justify-between items-end pt-3 border-t border-slate-50 text-left">
                                    <div class="text-left">
                                        <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">MODEL</p>
                                        <p class="text-[10px] font-bold text-slate-500 text-left">${u.product_name}</p>
                                    </div>
                                     <div class="text-right">
                                        <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-right">IMEI</p>
                                        <p class="text-[9px] font-bold text-slate-400 tracking-wider text-right">${u.imei||"N/A"}</p>
                                    </div>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>

            <!-- Sticky Footer Action -->
            <div class="p-6 border-t border-slate-100 bg-white/80 backdrop-blur-md sticky bottom-0 z-20 text-center">
                <button class="w-full py-4 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 group overflow-hidden relative text-center">
                     <span class="relative z-10 text-center">SUBMIT ALL 42 CLAIMS</span>
                     <span class="material-icons-outlined text-sm relative z-10 transition-transform group-hover:translate-x-1 text-center">send</span>
                     <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
                <p class="text-[7px] font-bold text-slate-400 uppercase text-center mt-3 tracking-widest">COMPILING REPORT FOR ${l.toUpperCase()} SETTLEMENT</p>
            </div>
        </div>
    `}function Dn(e){const t=e==="desktop-secondary",s=e==="mobile";if(window.selectSchemeBrand=n=>{c.activeSchemeBrand=n,c.schemesTab="list",C()},window.selectScheme=n=>{c.activeScheme=n,s&&(c.showSchemeDetails=!0),C()},window.setSchemesTab=n=>{c.schemesTab=n,C()},window.toggleSchemeDetails=n=>{c.showSchemeDetails=n,C()},t||s&&c.showSchemeDetails)return Wd(e);const a=c.schemesTab==="brands";return`
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                    ${s&&!a?`
                        <button onclick="setSchemesTab('brands')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                            <span class="material-icons-outlined text-left">chevron_left</span>
                            <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                        </button>
                    `:`
                        <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                            <span class="material-icons-outlined text-left">chevron_left</span>
                            <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                        </button>
                    `}
                    <div class="text-center translate-x-1">
                        <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">Schemes</h1>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Incentives & Claims</p>
                    </div>
                    <button class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">search</span></button>
                </div>

                <div class="flex bg-slate-100 p-1 rounded-xl gap-1 text-left">
                    <button onclick="setSchemesTab('brands')" class="flex-1 py-3 ${a?"bg-white shadow-sm text-slate-900":"text-slate-400"} text-[10px] font-black uppercase rounded-lg transition-all text-center">Brands</button>
                    <button onclick="setSchemesTab('list')" class="flex-1 py-3 ${a?"text-slate-400":"bg-white shadow-sm text-slate-900"} text-[10px] font-black uppercase rounded-lg transition-all text-center">Schemes</button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto px-8 space-y-6 custom-scrollbar pb-32 text-left">
                ${a?Gd():Hd()}
            </div>

            <!-- Profile Footer -->
            <footer class="p-6 bg-white shrink-0 mt-auto border-t border-slate-100 text-left">
                <div class="card p-3 flex items-center justify-between border-slate-100 text-left">
                    <div class="flex items-center gap-3 text-left">
                        <div class="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-black text-[10px] text-slate-900 text-center">AS</div>
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900 text-left">Apple Store - Mumbai Central</p>
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-medium text-left">Store Manager</p>
                        </div>
                    </div>
                    <button class="flex items-center gap-1.5 text-slate-900 font-black text-[9px] uppercase tracking-widest px-3 py-2 hover:bg-slate-50 rounded-lg transition-colors text-center">
                        Logout <span class="material-icons-outlined text-base text-center">logout</span>
                    </button>
                </div>
            </footer>

            <!-- Floating Action Button -->
            <div class="absolute bottom-32 right-8 z-20 text-left">
                <button class="w-14 h-14 bg-slate-950 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform text-center">
                    <span class="material-icons-outlined text-2xl text-center">${a?"add":"filter_list"}</span>
                </button>
            </div>
        </div>
    `}function zd(){const e=c.marketplaceTab==="browse";return`
        <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
            <div class="flex items-center justify-between mb-6 text-left">
                <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                    <span class="material-icons-outlined text-left">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">Marketplace</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">${e?"B2B Trading Hub":"Manage My Listings"}</p>
                </div>
                <button class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">${e?"filter_list":"add_circle"}</span></button>
            </div>

            <div class="flex bg-slate-100 p-1 rounded-xl gap-1 mb-6 text-left">
                <button onclick="setMarketplaceTab('browse')" class="flex-1 py-3 ${e?"bg-white shadow-sm text-slate-900":"text-slate-400"} text-[10px] font-black uppercase rounded-lg transition-all text-center">Browse Listings</button>
                <button onclick="setMarketplaceTab('my-offers')" class="flex-1 py-3 ${e?"text-slate-400":"bg-white shadow-sm text-slate-900"} text-[10px] font-black uppercase rounded-lg transition-all text-center">My Offers</button>
            </div>

            ${e?`
                <button onclick="window.setMarketplaceViewMode('add')" class="w-full py-4 border-2 border-slate-900 text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest mb-2 flex items-center justify-center gap-3 hover:bg-slate-50 transition-all text-center">
                     <span class="material-icons-outlined text-lg text-left">add_circle</span> LIST PRODUCT TO MARKET
                </button>
            `:""}
        </header>
    `}function Jd(){const t=window.getCache().marketplace||[];return`
        <div class="grid grid-cols-2 gap-4 animate-slide-up text-left">
            ${t.map(s=>`
                <div class="card bg-white border-slate-100 hover:border-slate-300 transition-all cursor-pointer overflow-hidden p-0 h-fit text-left">
                    <div class="aspect-square bg-slate-50/50 flex items-center justify-center py-8 relative text-left">
                        <span class="material-icons-outlined text-4xl text-slate-200 text-left">shopping_bag</span>
                        <span class="absolute top-2 right-2 px-1.5 py-0.5 rounded-[4px] text-[6px] font-black uppercase tracking-wider text-left bg-green-100 text-green-600">LIVE</span>
                    </div>
                    <div class="p-4 space-y-3 text-left">
                        <h3 class="text-[11px] font-black text-slate-900 leading-tight h-8 overflow-hidden line-clamp-2 text-left">${s.product_name}</h3>
                        <div class="text-left">
                            <p class="text-[12px] font-black text-slate-900 text-left">₹${parseInt(s.price).toLocaleString()} <span class="text-[8px] text-slate-300 font-bold uppercase tracking-tight text-left">/Unit</span></p>
                            <div class="flex items-center gap-1 text-slate-300 mt-1 text-left">
                                <span class="material-icons-outlined text-[10px] text-left">inventory</span>
                                <p class="text-[8px] font-bold uppercase tracking-widest text-left">QTY: ${s.quantity}</p>
                            </div>
                        </div>
                        <button class="w-full py-2.5 bg-slate-50 border border-slate-100 text-slate-900 rounded-lg text-[9px] font-black uppercase hover:bg-slate-900 hover:text-white transition-all text-center">Contact Seller</button>
                    </div>
                </div>
            `).join("")}

            ${t.length===0?`
                <div class="col-span-2 py-20 text-center opacity-20">
                    <span class="material-icons-outlined text-4xl">storefront</span>
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] mt-4">No marketplace offers found</p>
                </div>
            `:""}
        </div>
    `}function Yd(){return`
        <div class="space-y-4 animate-slide-up text-left">
            ${[{id:"o1",t:"Flagship X Pro - 256GB",d:"Space Black • Sealed Box",s:"14 Units",inq:"8 New",st:"ACTIVE",i:"tablet_android"},{id:"o2",t:"Premium Audio Buds G2",d:"White • Demo Units",s:"5 Units",inq:"0 New",st:"PAUSED",i:"headset"},{id:"o3",t:'Smart Pad Ultra 11"',d:"Silver • WiFi Only",s:"2 Units",inq:"2 New",st:"ACTIVE",i:"tablet_mac"}].map(t=>`
                <div class="card p-5 border-slate-100 hover:border-slate-300 transition-all flex gap-4 pr-3 text-left">
                    <div class="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 text-left">
                        <span class="material-icons-outlined text-slate-300 text-left">${t.i}</span>
                    </div>
                    <div class="flex-1 text-left">
                        <div class="flex justify-between items-start mb-1 text-left">
                            <h3 class="text-sm font-black text-slate-900 text-left">${t.t}</h3>
                            <span class="px-2 py-0.5 rounded-full text-[7px] font-black uppercase text-right ${t.st==="ACTIVE"?"bg-green-50 text-green-500":"bg-orange-50 text-orange-400"}">${t.st}</span>
                        </div>
                        <p class="text-[10px] font-bold text-slate-400 text-left">${t.d}</p>
                        <div class="flex gap-4 mt-3 pt-3 border-t border-slate-50 text-left">
                            <div class="text-left">
                                <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-0.5 text-left">STOCK</p>
                                <p class="text-[10px] font-black text-slate-900 text-left">${t.s}</p>
                            </div>
                            <div class="text-left">
                                <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-0.5 text-left">INQUIRIES</p>
                                <p class="text-[10px] font-black text-indigo-500 text-left">${t.inq}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between py-1 text-right">
                        <div class="space-y-2 text-right">
                            <div class="flex bg-slate-100 rounded-lg p-0.5 text-right">
                                <button class="px-2 py-1 text-[7px] font-black uppercase rounded-md text-slate-400 hover:text-slate-900 text-center">Pause</button>
                                <button class="px-2 py-1 text-[7px] font-black uppercase rounded-md text-slate-400 hover:text-slate-900 text-center">Sold</button>
                            </div>
                        </div>
                        <button class="text-[8px] font-black text-slate-950 uppercase flex items-center gap-1 group text-right">EDIT <span class="material-icons-outlined text-xs group-hover:translate-x-1 transition-transform text-right">chevron_right</span></button>
                    </div>
                </div>
            `).join("")}
        </div>
    `}function Kd(e){return`
        <div class="h-full flex flex-col bg-white animate-slide-up relative text-left">
            <header class="p-6 pb-4 shrink-0 flex items-center justify-between text-left">
                <div class="flex items-center gap-3 text-left">
                     <button onclick="${e==="mobile"?"window.setMarketplaceViewMode('list')":"setApp('launcher')"}" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full text-left">
                        <span class="material-icons-outlined text-lg text-left">arrow_back</span>
                    </button>
                    <div class="text-left">
                        <h2 class="text-xs font-black text-slate-900 uppercase tracking-widest leading-none text-left">List a Product</h2>
                        <p class="text-[8px] font-bold text-slate-300 uppercase tracking-[0.1em] mt-1 text-left">Marketplace</p>
                    </div>
                </div>
                <button class="w-8 h-8 flex items-center justify-center text-slate-400 text-left"><span class="material-icons-outlined text-lg text-left">calendar_today</span></button>
            </header>

            <div class="flex-1 overflow-y-auto p-6 pt-2 space-y-6 custom-scrollbar pb-20 text-left">
                <div class="space-y-6 text-left">
                    <div class="text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em] mb-3 text-left">Select from Inventory</p>
                        <div class="relative group text-left">
                            <select class="w-full h-14 pl-4 pr-12 bg-white border border-slate-100 rounded-2xl text-[11px] font-bold text-slate-900 appearance-none focus:outline-none focus:border-slate-950 transition-all shadow-sm text-left">
                                <option>Choose a product...</option>
                                <option>iPhone 16 Pro</option>
                                <option>iPhone 15</option>
                                <option>Nothing Phone 2</option>
                            </select>
                            <span class="material-icons-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-transform group-hover:rotate-180 text-left">unfold_more</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 text-left">
                        <div class="text-left">
                            <p class="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em] mb-3 text-left">Quantity</p>
                            <input type="number" value="1" class="w-full h-14 px-4 bg-white border border-slate-100 rounded-2xl text-[11px] font-bold text-slate-900 focus:outline-none focus:border-slate-950 transition-all shadow-sm text-left">
                        </div>
                        <div class="text-left">
                            <p class="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em] mb-3 text-left">Price per Unit</p>
                            <input type="text" placeholder="₹ 0.00" class="w-full h-14 px-4 bg-white border border-slate-100 rounded-2xl text-[11px] font-bold text-slate-900 focus:outline-none focus:border-slate-950 transition-all shadow-sm text-left">
                        </div>
                    </div>

                    <div class="text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em] mb-3 text-left">Product Condition</p>
                        <div class="flex bg-slate-100 p-1 rounded-2xl gap-1 text-left">
                            <button class="flex-1 py-3 bg-white shadow-sm text-slate-950 text-[9px] font-black uppercase rounded-xl transition-all text-center">Sealed</button>
                            <button class="flex-1 py-3 text-slate-400 text-[9px] font-black uppercase rounded-xl transition-all text-center">Open Box</button>
                            <button class="flex-1 py-3 text-slate-400 text-[9px] font-black uppercase rounded-xl transition-all text-center">Used</button>
                        </div>
                    </div>

                    <div class="card p-4 flex items-center justify-between border-slate-100 shadow-sm text-left">
                         <div class="text-left">
                            <p class="text-[10px] font-black text-slate-900 uppercase text-left">Public Visibility</p>
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 text-left">List to all RetailerOS users</p>
                        </div>
                        <div class="w-10 h-5 bg-slate-900 rounded-full relative cursor-pointer text-right"><div class="w-3 h-3 bg-white rounded-full absolute right-1 top-1 shadow-sm"></div></div>
                    </div>

                    <p class="text-[8px] text-slate-400 font-medium text-center leading-relaxed max-w-[200px] mx-auto">By listing this product, you agree to the Marketplace Terms of Service. This listing will be visible to verified retailers in your region.</p>

                    <button class="w-full py-4 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 text-center">
                         <span class="material-icons-outlined text-xl text-left">rocket_launch</span> POST TO MARKETPLACE
                    </button>
                </div>
            </div>
        </div>
    `}function Ln(e){if(e==="desktop-secondary"||e==="mobile"&&c.marketplaceViewMode==="add")return Kd(e);const a=c.marketplaceTab==="browse";return`
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            ${zd()}
            <div class="flex-1 overflow-y-auto px-8 space-y-6 custom-scrollbar pb-20 text-left">
                ${a?Jd():Yd()}
            </div>

             <!-- Floating Action Button -->
            <div class="absolute bottom-32 right-8 z-30 text-left">
                <button onclick="window.setMarketplaceViewMode('add')" class="w-16 h-16 bg-slate-950 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-center">
                    <span class="material-icons-outlined text-3xl font-light text-center">add</span>
                </button>
            </div>
        </div>
    `}function Qd(){return`
        <header class="p-8 pb-4 shrink-0 text-left">
            <div class="flex items-center justify-between mb-6 text-left">
                <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                    <span class="material-icons-outlined text-left">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">Inquiries</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">RetailerOS Hub</p>
                </div>
                <button class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">tune</span></button>
            </div>
        </header>
    `}function Xd(){return`
        <div class="grid grid-cols-2 gap-4 mb-8 text-left">
            <div class="card p-5 border-slate-100 shadow-sm relative overflow-hidden group text-left">
                <div class="flex justify-between items-start mb-2 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Unfulfilled</p>
                    <span class="material-icons-outlined text-red-400 text-sm text-left">trending_down</span>
                </div>
                <h2 class="text-3xl font-black text-slate-900 mb-1 text-left">142</h2>
                <p class="text-[8px] font-black text-red-400 uppercase tracking-widest leading-none text-left">Lost Sales: $12.4K</p>
                <div class="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity text-left">
                    <span class="material-icons-outlined text-8xl text-left">error_outline</span>
                </div>
            </div>
            <div class="card p-5 border-slate-100 shadow-sm relative overflow-hidden group text-left">
                <div class="flex justify-between items-start mb-2 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Demand Met</p>
                    <span class="material-icons-outlined text-green-500 text-sm text-left">check_circle</span>
                </div>
                <h2 class="text-3xl font-black text-slate-900 mb-1 text-left">84%</h2>
                <p class="text-[8px] font-black text-green-500 uppercase tracking-widest leading-none text-left">+12% VS Last Month</p>
                 <div class="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity text-left">
                    <span class="material-icons-outlined text-8xl text-left">verified_user</span>
                </div>
            </div>
        </div>
    `}function Zd(){const t=window.getCache().inquiries||[],s=a=>{switch(a){case"PENDING":return"bg-orange-50 text-orange-400";case"FULFILLED":return"bg-green-50 text-green-500";case"CONTACTED":return"bg-blue-50 text-blue-500";case"LOST SALE":return"bg-red-50 text-red-400";default:return"bg-slate-50 text-slate-400"}};return`
        <div class="space-y-3 text-left">
            ${t.map(a=>{var n;return`
                <div onclick="window.setActiveInquiry(${JSON.stringify(a).replace(/"/g,"&quot;")}); window.setInquiryViewMode('resolve')" class="card p-4 border-2 transition-all cursor-pointer flex items-center gap-4 text-left ${((n=c.activeInquiry)==null?void 0:n.id)===a.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                    <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 shrink-0 text-left">
                        <span class="material-icons-outlined text-slate-300 text-xl text-left">info</span>
                    </div>
                    <div class="flex-1 min-w-0 text-left">
                        <div class="flex justify-between items-start mb-0.5 text-left">
                            <h4 class="text-xs font-black text-slate-900 truncate text-left">${a.product_name||a.request}</h4>
                            <span class="px-2 py-0.5 rounded-md text-[7px] font-black uppercase tracking-wider text-right ${s(a.status)}">${a.status}</span>
                        </div>
                        <div class="flex justify-between items-center text-left">
                            <p class="text-[10px] font-bold text-slate-400 text-left">${a.customer_name}</p>
                            <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest text-right">${new Date(a.created_at).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
            `}).join("")}

            ${t.length===0?`
                <div class="py-20 text-center opacity-20">
                    <span class="material-icons-outlined text-4xl">contact_support</span>
                    <p class="text-[10px] font-black uppercase tracking-[0.2em] mt-4">No inquiries found</p>
                </div>
            `:""}
        </div>
    `}async function ep(){const e=document.getElementById("inq-customer").value,t=document.getElementById("inq-product").value,s=document.getElementById("inq-notes").value;if(!e||!t){alert("Customer and Product are required.");return}const a=document.getElementById("log-inquiry-btn");a.disabled=!0,a.innerText="Logging...";try{await M.query(`
            INSERT INTO inquiries (id, customer_name, product_name, request, status, created_at)
            VALUES (?, ?, ?, ?, ?, ?)
        `,["INQ-"+Math.random().toString(36).substr(2,6).toUpperCase(),e,t,s,"PENDING",new Date().toISOString()]),await K(),window.setInquiryViewMode("list")}catch(n){alert("Error: "+n.message),a.disabled=!1,a.innerText="Log Inquiry"}}window.saveInquiry=ep;function tp(e){return`
        <div class="h-full flex flex-col bg-white dot-grid relative animate-slide-up text-left">
            <header class="p-8 pb-4 shrink-0 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-20 text-left">
                <div class="flex items-center gap-4 text-left">
                    <button onclick="window.setInquiryViewMode('list')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full text-left">
                        <span class="material-icons-outlined text-lg text-left">arrow_back</span>
                    </button>
                    <div class="text-left">
                        <h2 class="text-sm font-black text-slate-900 uppercase tracking-widest leading-none text-left">Capture Inquiry</h2>
                    </div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto p-8 pt-4 space-y-6 custom-scrollbar pb-32 text-left">
                <div class="text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Customer Name</label>
                    <input type="text" id="inq-customer" placeholder="Search or add customer..." class="w-full h-14 px-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:outline-none focus:border-slate-950 shadow-sm transition-all focus:ring-4 focus:ring-slate-950/5 text-left">
                </div>

                <div class="text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Product Name</label>
                    <input type="text" id="inq-product" placeholder="e.g. Phone 16 1TB Blue" class="w-full h-14 px-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:outline-none focus:border-slate-950 shadow-sm transition-all focus:ring-4 focus:ring-slate-950/5 text-left">
                </div>

                <div class="text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Notes</label>
                    <textarea id="inq-notes" placeholder="Add specific requirements or budget (₹)..." class="w-full h-32 p-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:outline-none focus:border-slate-950 shadow-sm transition-all focus:ring-4 focus:ring-slate-950/5 resize-none text-left"></textarea>
                </div>
            </div>

            <div class="p-8 pt-0 sticky bottom-0 z-20 text-center">
                <button id="log-inquiry-btn" onclick="saveInquiry()" class="w-full py-5 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all text-center">
                     <span class="material-icons-outlined text-lg text-left">layers</span> Log Inquiry
                </button>
            </div>
        </div>
    `}async function sp(e){var t;if((t=c.activeInquiry)!=null&&t.id)try{await M.query("UPDATE inquiries SET status = ? WHERE id = ?",[e,c.activeInquiry.id]),await K(),window.setInquiryViewMode("list")}catch(s){alert("Update failed: "+s.message)}}window.updateInquiryStatus=sp;function ap(){const e=c.activeInquiry;return e?`
        <div class="h-full flex flex-col bg-white animate-slide-up text-left">
            <header class="p-8 pb-4 shrink-0 flex items-center justify-between text-left">
                <button onclick="window.setInquiryViewMode('list')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full text-left">
                    <span class="material-icons-outlined text-lg text-left">arrow_back</span>
                </button>
                <div class="flex gap-2 text-left">
                    <button onclick="updateInquiryStatus('LOST SALE')" class="px-4 py-2 bg-red-50 text-red-500 rounded-xl text-[9px] font-black uppercase tracking-widest text-left">Lost Sale</button>
                    <button onclick="updateInquiryStatus('FULFILLED')" class="px-4 py-2 bg-green-50 text-green-600 rounded-xl text-[9px] font-black uppercase tracking-widest text-left">Won Sale</button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto p-8 pt-4 space-y-8 custom-scrollbar text-left">
                <div class="text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Product Interest</p>
                    <h2 class="text-2xl font-black text-slate-900 tracking-tighter text-left">${e.product_name||e.request}</h2>
                    <div class="flex items-center gap-2 mt-2 text-left">
                         <span class="bg-indigo-50 text-indigo-500 text-[8px] font-black px-1.5 py-0.5 rounded uppercase text-left">${e.status}</span>
                         <span class="text-[9px] font-bold text-slate-400 text-left">Requested by ${e.customer_name}</span>
                    </div>
                </div>

                <div class="space-y-4 text-left">
                    <h3 class="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] px-1 text-left">Requirements</h3>
                    <div class="card p-6 bg-slate-50 border-transparent text-left">
                        <p class="text-[11px] font-bold text-slate-600 leading-relaxed text-left">${e.request||"No specific requirements logged."}</p>
                    </div>
                </div>

                <div class="space-y-4 text-left">
                    <h3 class="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] px-1 text-left">Recommended Actions</h3>
                    <div class="grid grid-cols-2 gap-3 text-left">
                        <div class="card p-4 hover:border-slate-900 cursor-pointer transition-all text-left">
                            <span class="material-icons-outlined text-indigo-500 mb-2 text-left">call</span>
                            <h4 class="text-[10px] font-black text-slate-900 uppercase text-left">Call Customer</h4>
                        </div>
                        <div class="card p-4 hover:border-slate-900 cursor-pointer transition-all text-left">
                            <span class="material-icons-outlined text-green-500 mb-2 text-left">chat</span>
                            <h4 class="text-[10px] font-black text-slate-900 uppercase text-left">WhatsApp</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-8 shrink-0 text-center">
                <button onclick="updateInquiryStatus('CONTACTED')" class="w-full py-5 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all text-center">
                     Mark as Contacted
                </button>
            </div>
        </div>
    `:'<div class="p-20 text-center uppercase text-[10px] font-black opacity-30">No inquiry selected</div>'}function jn(e){return e==="desktop-secondary"||e==="mobile"&&c.inquiryViewMode==="add"?tp():c.inquiryViewMode==="resolve"&&c.activeInquiry?ap():`
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            ${Qd()}
            <div class="px-8 text-left">
                ${Xd()}
                <div class="flex items-center justify-between mb-4 text-left">
                    <h3 class="text-[10px] font-black text-slate-950 uppercase tracking-widest text-left">Recent Inquiries</h3>
                    <button class="text-[9px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors text-right">View All</button>
                </div>
            </div>
            <div class="flex-1 overflow-y-auto px-8 space-y-3 custom-scrollbar pb-32 text-left">
                ${Zd()}
            </div>

            <!-- Floating Action Button -->
            <div class="absolute bottom-10 right-8 z-30 text-left">
                <button onclick="window.setInquiryViewMode('add')" class="w-14 h-14 bg-slate-950 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-center">
                    <span class="material-icons-outlined text-2xl text-center">add</span>
                </button>
            </div>
        </div>
    `}function np(){const t=window.getCache().campaigns||[];return`
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                    <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                        <span class="material-icons-outlined text-left">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                    </button>
                    <div class="text-center translate-x-1">
                        <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">Pre-Booking</h1>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Campaign Dashboard</p>
                    </div>
                    <button class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">search</span></button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto px-8 space-y-4 custom-scrollbar pb-32 text-left">
                ${t.map(s=>{var a;return`
                    <div onclick="window.setActiveCampaign(${JSON.stringify(s).replace(/"/g,"&quot;")}); window.setPreBookingViewMode('details')" class="card p-6 border-2 transition-all cursor-pointer relative overflow-hidden group text-left ${((a=c.activeCampaign)==null?void 0:a.id)===s.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                        <div class="flex justify-between items-start mb-6 text-left">
                            <div class="text-left">
                                <div class="flex items-center gap-2 mb-1 text-left">
                                    <div class="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse text-left"></div>
                                    <span class="text-[8px] font-black text-green-500 uppercase tracking-widest text-left">LIVE</span>
                                </div>
                                <h3 class="text-lg font-black text-slate-900 text-left">${s.title}</h3>
                            </div>
                            <span class="text-[8px] font-black text-slate-300 uppercase tracking-widest text-right">#${s.id}</span>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-4 text-left">
                            <div class="bg-slate-50/50 p-4 rounded-2xl border border-slate-100/50 text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">DEPOSIT</p>
                                <p class="text-xl font-black text-slate-900 text-left">₹${parseInt(s.deposit_amount).toLocaleString()}</p>
                            </div>
                            <div class="bg-slate-50/50 p-4 rounded-2xl border border-slate-100/50 text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">START DATE</p>
                                <p class="text-sm font-black text-slate-900 text-left">${new Date(s.start_date).toLocaleDateString()}</p>
                            </div>
                        </div>

                         <div class="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity text-left">
                            <span class="material-icons-outlined text-9xl text-left">rocket_launch</span>
                        </div>
                    </div>
                `}).join("")}

                ${t.length===0?`
                    <div class="py-20 text-center opacity-20">
                        <span class="material-icons-outlined text-4xl">rocket</span>
                        <p class="text-[10px] font-black uppercase tracking-[0.2em] mt-4">No campaigns active</p>
                    </div>
                `:""}

                <button onclick="window.setPreBookingViewMode('create')" class="w-full py-5 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 mt-4 active:scale-95 transition-all text-center">
                     <span class="material-icons-outlined text-lg text-left">add_circle</span> CREATE NEW CAMPAIGN
                </button>
            </div>
        </div>
    `}function lp(e){return`
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
                    <p class="text-[9px] font-black text-indigo-400 uppercase tracking-widest -mb-2 text-left">Campaign Details</p>
                    
                    <div class="text-left">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Campaign Title</label>
                        <input type="text" placeholder="e.g., Flagship Smartphone 16 Pro Launch" class="w-full h-14 px-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:ring-4 focus:ring-slate-950/5 focus:border-slate-950 shadow-sm transition-all focus:outline-none text-left">
                    </div>

                    <div class="text-left">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Product Selection</label>
                        <div class="relative text-left">
                            <span class="material-icons-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-left">search</span>
                            <input type="text" placeholder="Search from inventory..." class="w-full h-14 pl-12 pr-4 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:ring-4 focus:ring-slate-950/5 focus:border-slate-950 shadow-sm transition-all focus:outline-none text-left">
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 text-left">
                        <div class="text-left">
                            <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Deposit Amount</label>
                            <div class="relative text-left">
                                <span class="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-black text-[11px] text-left">₹</span>
                                <input type="number" placeholder="2,000" class="w-full h-14 pl-10 pr-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:ring-4 focus:ring-slate-950/5 focus:border-slate-950 shadow-sm transition-all focus:outline-none text-left">
                            </div>
                        </div>
                        <div class="text-left">
                            <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3 text-left">Duration (Days)</label>
                            <div class="relative text-left">
                                <span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg text-left">calendar_today</span>
                                <input type="text" placeholder="14 Days" class="w-full h-14 px-5 bg-white border border-slate-100 rounded-2xl text-[11px] font-black text-slate-900 focus:ring-4 focus:ring-slate-950/5 focus:border-slate-950 shadow-sm transition-all focus:outline-none text-left">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="space-y-6 text-left">
                    <p class="text-[9px] font-black text-indigo-400 uppercase tracking-widest -mb-2 text-left">Landing Page Customization</p>
                    
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
                <button onclick="window.setPreBookingViewMode('dashboard')" class="w-full py-5 bg-slate-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all text-center">
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
    `}function ip(e){const t=c.activeCampaign;return t?`
        <div class="h-full flex flex-col bg-white dot-grid overflow-hidden animate-slide-up relative text-left">
            <header class="p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center gap-3 mb-6 text-left">
                    <span class="text-[8px] font-black text-slate-300 uppercase tracking-widest text-left">PRE-BOOKING</span>
                    <span class="material-icons-outlined text-[10px] text-slate-300 text-left">chevron_right</span>
                    <span class="text-[8px] font-black text-slate-900 uppercase tracking-widest text-left">${t.product.toUpperCase()}</span>
                </div>
                
                <div class="flex items-center justify-between mb-8 text-left">
                    <div class="flex items-center gap-4 text-left">
                        <button onclick="window.setPreBookingViewMode('dashboard')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full transition-colors text-left">
                            <span class="material-icons-outlined text-lg text-left">arrow_back</span>
                        </button>
                        <h1 class="text-3xl font-black tracking-tighter text-slate-900 text-left">Campaign Details</h1>
                    </div>
                    <button class="w-10 h-10 flex items-center justify-center text-slate-400 bg-slate-50 rounded-xl text-left"><span class="material-icons-outlined text-left">more_horiz</span></button>
                </div>

                <div class="space-y-6 mb-8 text-left">
                     <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 text-left">Campaign Link</p>
                     <div class="card p-4 border-slate-100 flex items-center gap-4 bg-white shadow-sm text-left">
                        <div class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500 text-left">
                             <span class="material-symbols-outlined text-xl text-left">link</span>
                        </div>
                        <div class="flex-1 min-w-0 text-left">
                            <p class="text-xs font-black text-slate-950 truncate text-left">retailer.os/pre/${t.product.toLowerCase().replace(/ /g,"-")}</p>
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mt-1 text-left">Unique Campaign URL</p>
                        </div>
                        <button class="p-3 text-slate-400 hover:text-slate-900 transition-colors text-left"><span class="material-symbols-outlined text-left">share</span></button>
                     </div>
                </div>

                <div class="grid grid-cols-2 gap-4 mb-4 text-left">
                    <div class="bg-white card p-5 border-slate-100 text-left">
                        <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1 text-left">TOTAL LEADS</p>
                        <p class="text-2xl font-black text-slate-950 text-left">${(window.getCache().bookings||[]).filter(s=>s.campaign_id===t.id).length.toLocaleString()}</p>
                    </div>
                    <div class="bg-white card p-5 border-slate-100 text-left">
                        <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1 text-left">CONVERSION</p>
                        <p class="text-2xl font-black text-slate-950 text-left">--%</p>
                    </div>
                </div>

                <div class="flex items-center justify-between mt-8 mb-4 text-left">
                    <h3 class="text-[10px] font-black text-slate-950 uppercase tracking-widest text-left">Booking Log</h3>
                    <div class="px-2 py-1 bg-green-50 text-green-500 rounded-lg text-[8px] font-black tracking-widest text-right">LIVE</div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto px-8 space-y-4 custom-scrollbar pb-10 text-left">
                ${(window.getCache().bookings||[]).filter(s=>s.campaign_id===t.id).length===0?`
                   <div class="p-10 text-center opacity-30">
                        <p class="text-[10px] font-black uppercase tracking-widest">No bookings yet</p>
                   </div>
                `:(window.getCache().bookings||[]).filter(s=>s.campaign_id===t.id).map(s=>`
                    <div class="card p-5 border-slate-100 bg-white hover:border-slate-300 transition-all text-left">
                        <div class="flex justify-between items-start mb-4 text-left">
                            <div class="text-left">
                                <h4 class="text-sm font-black text-slate-950 mb-0.5 text-left">${s.customer_name}</h4>
                                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-tighter font-mono text-left">Deposited: ₹${s.amount}</p>
                            </div>
                            <span class="px-2 py-0.5 rounded-md text-[7px] font-black uppercase text-green-500 tracking-wider text-right">${s.status||"PAID"}</span>
                        </div>
                        <button class="w-full py-3 bg-slate-950 text-white rounded-xl text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2 group shadow-xl text-center">
                            CONVERT TO SALE <span class="material-icons-outlined text-base group-hover:translate-x-1 transition-transform text-center">chevron_right</span>
                        </button>
                    </div>
                `).join("")}
            </div>
            
             <footer class="p-6 bg-white shrink-0 mt-auto border-t border-slate-100 z-20 text-left">
                <div class="card p-3 flex items-center justify-between border-slate-100 bg-slate-50 relative text-left">
                    <div class="flex items-center gap-3 text-left">
                        <div class="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center font-black text-xs text-white text-center">AS</div>
                        <div class="text-left">
                            <p class="text-[10px] font-black text-slate-900 text-left">Apple Store - Mumbai Central</p>
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest text-left">Store Manager</p>
                        </div>
                    </div>
                    <button class="flex items-center gap-1 text-slate-900 font-black text-[8px] uppercase tracking-widest text-center">LOGOUT <span class="material-icons-outlined text-sm text-center">logout</span></button>
                </div>
            </footer>
        </div>
    `:""}function rp(e){return`
        <div class="h-full flex flex-col bg-slate-50 overflow-y-auto custom-scrollbar animate-slide-up text-left">
            <div class="w-full max-w-md mx-auto bg-white min-h-full flex flex-col shadow-2xl relative overflow-hidden text-left">
                <!-- Promo Header -->
                <header class="p-6 pb-4 flex justify-between items-center bg-white/40 absolute top-0 w-full z-20 backdrop-blur-md text-left">
                    <p class="text-[8px] font-black text-slate-950 uppercase tracking-[0.3em] text-left">EXCLUSIVE ACCESS</p>
                    <div class="flex items-center gap-1 px-3 py-1 bg-slate-950 text-white rounded-full text-left">
                         <span class="text-[8px] font-black uppercase tracking-widest text-left">APPLESTORE-MUMBAICENTRAL</span>
                         <span class="material-symbols-outlined text-[10px] text-left">verified</span>
                    </div>
                </header>

                <div class="relative w-full aspect-[4/5] bg-slate-950 overflow-hidden group text-left">
                    <img src="https://images.unsplash.com/photo-1726759081577-4c75ca7732a3?q=80&w=1000&auto=format&fit=crop" class="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[2s] text-left">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent text-left"></div>
                    
                    <div class="absolute inset-0 flex flex-col items-center justify-end p-10 pb-16 text-center text-white">
                        <div class="mb-10 text-center animate-pulse">
                            <p class="text-[8px] font-black uppercase tracking-[0.4em] mb-4 text-slate-400">PRE-BOOKING CLOSES IN</p>
                            <div class="flex gap-4 text-center justify-center">
                                <div class="text-center">
                                    <p class="text-2xl font-black tabular-nums">02</p>
                                    <p class="text-[7px] font-black text-slate-500 uppercase">DAYS</p>
                                </div>
                                <div class="text-center border-l border-white/10 pl-4">
                                    <p class="text-2xl font-black tabular-nums">14</p>
                                    <p class="text-[7px] font-black text-slate-500 uppercase">HOURS</p>
                                </div>
                                <div class="text-center border-l border-white/10 pl-4">
                                    <p class="text-2xl font-black tabular-nums">38</p>
                                    <p class="text-[7px] font-black text-slate-500 uppercase">MINS</p>
                                </div>
                                <div class="text-center border-l border-white/10 pl-4">
                                    <p class="text-2xl font-black tabular-nums">05</p>
                                    <p class="text-[7px] font-black text-slate-500 uppercase">SECS</p>
                                </div>
                            </div>
                        </div>

                        <h2 class="text-4xl font-black mb-2 tracking-tighter">iPhone 16 Pro</h2>
                        <p class="text-xs font-bold text-slate-400 mb-8 max-w-[200px]">The ultimate leap into the future.</p>
                        
                        <button class="px-8 py-2.5 border border-white/20 rounded-full text-[8px] font-black uppercase tracking-[0.2em] backdrop-blur-sm hover:bg-white hover:text-slate-950 transition-all text-center">RESERVE NOW</button>
                    </div>
                </div>

                <div class="p-10 space-y-12 text-left">
                    <div class="text-center">
                        <h3 class="text-2xl font-black tracking-tighter text-slate-950 mb-2">Reserve your device.</h3>
                        <p class="text-[10px] font-bold text-slate-400 mb-6">Secure yours with a fully refundable deposit.</p>
                        <div class="inline-block px-4 py-2 border-2 border-slate-950 text-[8px] font-black uppercase tracking-widest rounded-xl mb-12">VALID ONLY AT APPLE STORE - MUMBAI CENTRAL</div>
                    </div>

                    <div class="space-y-6 text-left">
                         <div class="text-left">
                            <label class="text-[8px] font-black text-slate-300 uppercase tracking-widest block mb-2 text-left">FULL NAME</label>
                            <input type="text" placeholder="John Doe" class="w-full h-14 px-5 bg-slate-50 rounded-2xl text-[11px] font-black text-slate-900 border-none focus:ring-4 focus:ring-slate-950/5 text-left">
                        </div>
                        <div class="text-left">
                            <label class="text-[8px] font-black text-slate-300 uppercase tracking-widest block mb-2 text-left">PHONE NUMBER</label>
                            <input type="text" placeholder="+91 98765 43210" class="w-full h-14 px-5 bg-slate-50 rounded-2xl text-[11px] font-black text-slate-900 border-none focus:ring-4 focus:ring-slate-950/5 text-left">
                        </div>
                        <div class="text-left">
                            <label class="text-[8px] font-black text-slate-300 uppercase tracking-widest block mb-2 text-left">EMAIL ADDRESS</label>
                            <input type="email" placeholder="john@example.com" class="w-full h-14 px-5 bg-slate-50 rounded-2xl text-[11px] font-black text-slate-900 border-none focus:ring-4 focus:ring-slate-950/5 text-left">
                        </div>
                    </div>

                    <div class="pt-6 text-center">
                        <button onclick="window.setPreBookingViewMode('dashboard')" class="w-full py-5 bg-slate-950 text-white rounded-3xl text-[12px] font-black uppercase tracking-[0.1em] shadow-2xl flex flex-col items-center justify-center gap-1 mb-8 active:scale-95 transition-all text-center">
                             <div class="text-center">Pay ₹5,000 Deposit</div>
                             <div class="text-[8px] font-bold opacity-30 tracking-widest text-center">INSTANT CONFIRMATION</div>
                        </button>

                        <div class="flex flex-col items-center gap-4 py-8 border-t border-slate-100 text-center">
                             <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest text-center">Supported Payment Methods</p>
                             <div class="flex gap-6 grayscale opacity-30 text-center">
                                <span class="material-icons-outlined text-xl text-center">credit_card</span>
                                <span class="material-icons-outlined text-xl text-center">payments</span>
                                <span class="material-symbols-outlined text-xl text-center">account_balance</span>
                                <span class="material-symbols-outlined text-xl text-center">account_balance_wallet</span>
                             </div>
                        </div>

                         <div class="bg-slate-50 p-6 rounded-3xl space-y-4 text-left">
                            <div class="flex items-center gap-3 mb-2 text-left">
                                <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-indigo-500 shadow-sm text-center"><span class="material-icons-outlined text-base text-center">info</span></div>
                                <h4 class="text-[10px] font-black text-slate-950 uppercase tracking-widest text-left">Pre-booking Benefits</h4>
                            </div>
                            <ul class="space-y-2 pl-11 relative text-left">
                                <li class="text-[9px] font-bold text-slate-500 flex items-start gap-2 text-left">
                                    <div class="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1 shrink-0 text-left"></div>
                                    Guaranteed Day 1 Delivery
                                </li>
                                <li class="text-[9px] font-bold text-slate-500 flex items-start gap-2 text-left">
                                    <div class="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1 shrink-0 text-left"></div>
                                    Exclusive 'Mumbai Central' Launch Invite
                                </li>
                                <li class="text-[9px] font-bold text-slate-500 flex items-start gap-2 text-left">
                                    <div class="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1 shrink-0 text-left"></div>
                                    Complimentary Premium Case
                                </li>
                            </ul>
                        </div>
                    </div>

                    <footer class="pt-20 pb-10 flex flex-col items-center gap-6 text-center">
                        <div class="flex items-center gap-3 opacity-30 grayscale text-center">
                             <div class="w-8 h-8 bg-slate-950 rounded-xl flex items-center justify-center text-center"><div class="w-2 h-2 bg-white rounded-full text-center"></div></div>
                             <h4 class="text-base font-black tracking-tighter text-slate-950 text-center">RetailerOS</h4>
                        </div>
                        <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest text-center uppercase">© 2024 APPLE STORE MUMBAI CENTRAL. ALL RIGHTS RESERVED.</p>
                        
                        <button class="flex items-center gap-3 px-5 py-3 border border-slate-100 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-900 shadow-sm bg-white hover:bg-slate-50 transition-colors mt-4 text-center">
                            <span class="material-icons-outlined text-base text-center">support_agent</span> Need Help?
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    `}function qn(e){return e==="desktop-secondary"||e==="mobile"&&c.preBookingViewMode==="create"?lp():c.preBookingViewMode==="details"&&c.activeCampaign?ip():c.preBookingViewMode==="public"?rp():np()}function op(){const e=window.getCache(),t=e.automations||[],s=e.automationMessages||[],a=t.filter(o=>o.status==="active").length;t.filter(o=>o.status==="completed").length,s.length;const n=s.filter(o=>o.status==="sent").length,l=s.filter(o=>o.status==="pending").length,d=new Date,r=new Date(Date.now()+7*864e5),p=s.filter(o=>o.status==="pending"&&new Date(o.scheduled_date)<=r).sort((o,u)=>new Date(o.scheduled_date)-new Date(u.scheduled_date)).slice(0,5);return`
        <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
             <div class="flex items-center justify-between mb-6 text-left">
                <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                    <span class="material-icons-outlined text-left">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">Automation</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">RetailerOS</p>
                </div>
                <button class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">settings</span></button>
            </div>
        </header>

        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-32 text-left">
            <!-- Stats Cards -->
            <div class="grid grid-cols-3 gap-3 text-left">
                <div class="card p-4 border-slate-200 shadow-sm text-center">
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${a}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Active</p>
                </div>
                <div class="card p-4 border-slate-200 shadow-sm text-center">
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${n}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Sent</p>
                </div>
                <div class="card p-4 border-slate-200 shadow-sm text-center">
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${l}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Scheduled</p>
                </div>
            </div>

            <!-- Upcoming Messages -->
            ${p.length>0?`
                <section class="space-y-4 text-left">
                    <div class="flex items-center justify-between px-1 text-left">
                        <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Upcoming Messages</h3>
                        <span class="text-[8px] font-black text-slate-300 uppercase">${p.length} scheduled</span>
                    </div>

                    <div class="space-y-2 text-left">
                        ${p.map(o=>{const u=t.find(S=>S.id===o.automation_id),h=new Date(o.scheduled_date),w=h.toDateString()===d.toDateString(),v=h.toDateString()===new Date(Date.now()+864e5).toDateString(),m=w?"Today":v?"Tomorrow":h.toLocaleDateString("en-GB",{day:"2-digit",month:"short"});return`
                                <div class="card p-4 border-2 border-transparent hover:border-slate-100 transition-all text-left">
                                    <div class="flex items-center gap-3 text-left">
                                        <div class="w-10 h-10 ${o.message_type==="welcome"?"bg-slate-900":o.message_type==="tips"?"bg-slate-700":o.message_type==="upsell"?"bg-slate-600":"bg-slate-500"} rounded-xl flex items-center justify-center text-white text-center">
                                            <span class="material-icons-outlined text-sm">${o.message_type==="welcome"?"waving_hand":o.message_type==="tips"?"lightbulb":o.message_type==="upsell"?"trending_up":o.message_type==="feedback"?"rate_review":"schedule"}</span>
                                        </div>
                                        <div class="flex-1 min-w-0 text-left">
                                            <h4 class="text-xs font-black text-slate-900 tracking-tight truncate">${o.title}</h4>
                                            <p class="text-[9px] font-bold text-slate-400 truncate">${(u==null?void 0:u.customer_name)||"Customer"}</p>
                                        </div>
                                        <div class="text-right shrink-0">
                                            <p class="text-[9px] font-black ${w?"text-slate-900":"text-slate-400"} uppercase">${m}</p>
                                            <p class="text-[8px] font-bold text-slate-300 uppercase">Day ${o.day_offset}</p>
                                        </div>
                                    </div>
                                </div>
                            `}).join("")}
                    </div>
                </section>
            `:""}

            <!-- Active Automations List -->
            <section class="space-y-4 text-left">
                <div class="flex items-center justify-between px-1 text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">All Automations</h3>
                    <span class="text-[8px] font-black text-slate-300 uppercase">${t.length} total</span>
                </div>

                <div class="space-y-3 text-left">
                    ${t.map(o=>{const u=s.filter(v=>v.automation_id===o.id),h=u.filter(v=>v.status==="sent").length;u.filter(v=>v.status==="pending").length;const w=u.length>0?Math.round(h/u.length*100):0;return`
                            <button type="button" onclick="window.setAutomationMode('details', '${o.id}')" class="card p-4 border-2 transition-all cursor-pointer text-left w-full ${c.activeAutomationId===o.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-100"}">
                                <div class="flex items-center gap-4 text-left">
                                    <div class="w-12 h-12 ${o.status==="active"?"bg-slate-900":"bg-slate-200"} rounded-xl flex items-center justify-center text-center">
                                        <span class="material-icons-outlined ${o.status==="active"?"text-white":"text-slate-400"} text-lg">smart_toy</span>
                                    </div>
                                    <div class="flex-1 min-w-0 text-left">
                                        <h4 class="text-sm font-black text-slate-900 tracking-tight truncate text-left">${o.name}</h4>
                                        <p class="text-[10px] font-bold text-slate-400 text-left">${o.customer_name}</p>
                                        <div class="flex items-center gap-3 mt-2">
                                            <div class="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                <div class="h-full bg-slate-900 rounded-full transition-all" style="width: ${w}%"></div>
                                            </div>
                                            <span class="text-[8px] font-black text-slate-400">${h}/${u.length}</span>
                                        </div>
                                    </div>
                                    <div class="text-right shrink-0">
                                        <div class="px-2 py-0.5 ${o.status==="active"?"bg-slate-900 text-white":"bg-slate-100 text-slate-400"} text-[8px] font-black rounded uppercase tracking-wider mb-1">${o.status}</div>
                                        <p class="text-[9px] font-bold text-slate-300 uppercase">${new Date(o.created_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}</p>
                                    </div>
                                </div>
                            </button>
                        `}).join("")}

                    ${t.length===0?`
                        <div class="py-16 text-center">
                            <span class="material-icons-outlined text-4xl text-slate-200 mb-4">smart_toy</span>
                            <p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">No automations yet</p>
                            <p class="text-[9px] font-bold text-slate-300 mt-1">Create one from a sale to get started</p>
                        </div>
                    `:""}
                </div>
            </section>
        </div>

        <!-- Floating Action Button -->
        <div class="absolute bottom-10 right-10 z-20 text-left">
            <button onclick="window.setAutomationMode('create')" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 text-center">
                <span class="material-icons-outlined text-2xl text-center">add</span>
            </button>
        </div>
    `}let ye=null,fe=null,yt="",Te="product_journey";const pn={product_journey:{name:"Product Journey",description:"Welcome message, tips, and feedback sequence",messages:[{day:0,type:"welcome",title:"Welcome Message",content:"Thank you for your purchase! Here are some tips to get started with your new {product}..."},{day:1,type:"tips",title:"Getting Started",content:"Have you set up {product} yet? Here is a quick guide to help you..."},{day:3,type:"tips",title:"Pro Tips",content:"Here are some advanced tips to get the most out of your {product}..."},{day:7,type:"upsell",title:"Accessories",content:"Enhance your {product} experience with our recommended accessories..."},{day:14,type:"feedback",title:"How is it going?",content:"It has been 2 weeks! We would love to hear your feedback..."}]},installation:{name:"Installation Follow-up",description:"For products requiring installation",messages:[{day:0,type:"welcome",title:"Order Confirmed",content:"Your {product} order is confirmed! Installation will be scheduled soon."},{day:1,type:"reminder",title:"Installation Reminder",content:"Your installation is scheduled. Our technician will arrive on time."},{day:3,type:"tips",title:"Maintenance Tips",content:"Here are some tips to keep your {product} running smoothly..."},{day:7,type:"feedback",title:"Installation Feedback",content:"How was your installation experience? Let us know!"}]},premium:{name:"Premium Care",description:"Extended engagement for high-value purchases",messages:[{day:0,type:"welcome",title:"Welcome to Premium",content:"Thank you for your premium purchase! You now have access to priority support."},{day:1,type:"tips",title:"Exclusive Features",content:"Discover the exclusive features of your {product}..."},{day:3,type:"tips",title:"Expert Tips",content:"Our experts share their top tips for your {product}..."},{day:7,type:"upsell",title:"Extended Warranty",content:"Protect your investment with our extended warranty plans..."},{day:14,type:"tips",title:"Advanced Features",content:"Ready for advanced features? Here is what you can do..."},{day:21,type:"upsell",title:"Upgrade Options",content:"Check out the latest upgrades available for your {product}..."},{day:30,type:"feedback",title:"Monthly Check-in",content:"How is your experience so far? We value your feedback!"}]}};window.resetAutomationForm=()=>{ye=null,fe=null,yt="",Te="product_journey",window._automationContext=null};window.selectAutomationCustomer=e=>{ye=e,fe=null,window.triggerRender()};window.selectAutomationSale=e=>{var n,l,d;fe=e;const t=window.getCache(),s=(n=t.sales)==null?void 0:n.find(r=>r.id===e),a=((l=t.saleItems)==null?void 0:l.filter(r=>r.sale_id===e))||[];s&&(yt=`${((d=a[0])==null?void 0:d.product_name)||"Product"} - Post-Purchase Journey`,s.installation_required?Te="installation":s.total_amount>=5e4&&(Te="premium")),window.triggerRender()};window.updateAutomationName=e=>{yt=e};window.selectAutomationTemplate=e=>{Te=e,window.triggerRender()};window.createAutomation=async()=>{var a,n,l;if(!ye||!fe||!yt){window.toast.warning("Please select a customer, sale, and enter a name");return}const e=window.getCache(),t=(a=e.customers)==null?void 0:a.find(d=>d.id===ye),s=pn[Te];if(!t||!s){window.toast.error("Invalid selection");return}try{const d=`AUTO-${Math.random().toString(36).substr(2,8).toUpperCase()}`,r=new Date;await M.automations.add({id:d,name:yt,customer_id:ye,customer_name:t.name,sale_id:fe,status:"active",created_at:r.toISOString()});const o=((l=(((n=e.saleItems)==null?void 0:n.filter(u=>u.sale_id===fe))||[])[0])==null?void 0:l.product_name)||"your product";for(const u of s.messages){const h=`MSG-${Math.random().toString(36).substr(2,8).toUpperCase()}`,w=new Date(r.getTime()+u.day*864e5),v=u.content.replace(/\{product\}/g,o).replace(/\{name\}/g,t.name.split(" ")[0]);if(await M.automations.addMessage({id:h,automation_id:d,message_type:u.type,title:u.title,content:v,day_offset:u.day,scheduled_date:w.toISOString(),status:u.day===0?"sent":"pending"}),u.day===0&&t.phone){let m="sent";try{window.toast.info("Sending welcome message via WhatsApp..."),m=(await window.sendWhatsAppMessage(t.phone,v)).success?"delivered":"sent"}catch(S){console.error("WATI welcome message error:",S),m="failed"}await M.communications.add({id:`COMM-${Math.random().toString(36).substr(2,8).toUpperCase()}`,customer_id:ye,type:"whatsapp",direction:"outgoing",content:v,sent_at:r.toISOString(),automation_id:d,sale_id:fe,status:m})}}await K(),window.toast.success("Automation created successfully!"),window.resetAutomationForm(),window.setAutomationMode("details",d)}catch(d){console.error("Error creating automation:",d),window.toast.error("Failed to create automation: "+d.message)}};function dl(e=!1){var r,p;const t=window.getCache(),s=t.customers||[],a=t.sales||[];if(window._automationContext&&!ye){const o=window._automationContext;ye=o.customerId,fe=o.transactionId,(p=(r=o.items)==null?void 0:r[0])!=null&&p.name&&(yt=`${o.items[0].name} - Post-Purchase Journey`),o.installationRequired?Te="installation":o.total>=5e4&&(Te="premium")}const n=ye?a.filter(o=>o.customer_id===ye&&o.status!=="draft"):[],l=s.find(o=>o.id===ye);a.find(o=>o.id===fe),fe&&(t.saleItems||[]).filter(o=>o.sale_id===fe);const d=pn[Te];return`
        <div class="h-full flex flex-col bg-white relative text-left">
            <header class="p-4 sm:p-6 pb-4 shrink-0 border-b border-slate-100 text-left">
                <div class="flex items-center gap-4 text-left">
                    <button onclick="window.resetAutomationForm(); window.setAutomationMode('dashboard')" class="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 shadow-sm text-center">
                        <span class="material-icons-outlined">chevron_left</span>
                    </button>
                    <div class="text-left">
                        <h2 class="text-lg font-black text-slate-900 tracking-tighter text-left">New Automation</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-left">Create Message Sequence</p>
                    </div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6 text-left">
                <!-- Step 1: Select Customer -->
                <div class="space-y-3 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">1. Select Customer</p>
                    
                    ${l?`
                        <div class="card p-4 border-2 border-slate-900 shadow-lg flex items-center justify-between relative overflow-hidden text-left">
                            <div class="flex items-center gap-4 text-left">
                                <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center font-black text-xs text-white text-center">
                                    ${l.name.split(" ").map(o=>o[0]).join("").toUpperCase().slice(0,2)}
                                </div>
                                <div class="text-left">
                                    <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">${l.name}</h4>
                                    <p class="text-[10px] font-bold text-slate-400 text-left">${l.phone||"No phone"}</p>
                                </div>
                            </div>
                            <button onclick="selectedCustomerId = null; selectedSaleId = null; window.triggerRender();" class="text-slate-400 hover:text-slate-900">
                                <span class="material-icons-outlined text-sm">close</span>
                            </button>
                        </div>
                    `:`
                        <div class="space-y-2 max-h-48 overflow-y-auto">
                            ${s.slice(0,10).map(o=>`
                                <button type="button" onclick="window.selectAutomationCustomer('${o.id}')" class="card p-3 w-full text-left hover:border-slate-300 transition-all flex items-center gap-3">
                                    <div class="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center font-black text-[10px] text-slate-400">
                                        ${o.name.split(" ").map(u=>u[0]).join("").toUpperCase().slice(0,2)}
                                    </div>
                                    <div class="text-left">
                                        <p class="text-xs font-black text-slate-900">${o.name}</p>
                                        <p class="text-[9px] font-bold text-slate-400">${o.phone||"No phone"}</p>
                                    </div>
                                </button>
                            `).join("")}
                        </div>
                    `}
                </div>

                <!-- Step 2: Select Sale -->
                ${ye?`
                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">2. Select Transaction</p>
                        
                        ${n.length===0?`
                            <div class="card p-6 text-center border-dashed">
                                <p class="text-[10px] font-bold text-slate-400">No completed sales for this customer</p>
                            </div>
                        `:`
                            <div class="space-y-2 max-h-48 overflow-y-auto">
                                ${n.map(o=>{var w;const u=(t.saleItems||[]).filter(v=>v.sale_id===o.id),h=fe===o.id;return`
                                        <button type="button" onclick="window.selectAutomationSale('${o.id}')" class="card p-4 w-full text-left transition-all ${h?"border-2 border-slate-900 shadow-lg":"hover:border-slate-300"}">
                                            <div class="flex justify-between items-start">
                                                <div class="text-left">
                                                    <p class="text-xs font-black text-slate-900">${((w=u[0])==null?void 0:w.product_name)||"Sale"}</p>
                                                    <p class="text-[9px] font-bold text-slate-400">Order #${o.id} • ₹${(o.total_amount||0).toLocaleString()}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 uppercase">${new Date(o.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}</span>
                                            </div>
                                            ${h?'<span class="material-icons-outlined text-slate-900 text-sm mt-2">check_circle</span>':""}
                                        </button>
                                    `}).join("")}
                            </div>
                        `}
                    </div>
                `:""}

                <!-- Step 3: Configure Automation -->
                ${fe?`
                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">3. Automation Name</p>
                        <input type="text" value="${yt}" onchange="window.updateAutomationName(this.value)" placeholder="e.g., iPhone 15 - Welcome Sequence" class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                    </div>

                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">4. Message Template</p>
                        <div class="grid grid-cols-1 gap-2">
                            ${Object.entries(pn).map(([o,u])=>`
                                <button type="button" onclick="window.selectAutomationTemplate('${o}')" class="card p-4 text-left transition-all ${Te===o?"border-2 border-slate-900 shadow-lg":"hover:border-slate-300"}">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 ${Te===o?"bg-slate-900 text-white":"bg-slate-100 text-slate-400"} rounded-xl flex items-center justify-center">
                                            <span class="material-icons-outlined text-sm">${o==="product_journey"?"route":o==="installation"?"build":"star"}</span>
                                        </div>
                                        <div class="flex-1">
                                            <p class="text-xs font-black text-slate-900">${u.name}</p>
                                            <p class="text-[9px] font-bold text-slate-400">${u.description}</p>
                                        </div>
                                        ${Te===o?'<span class="material-icons-outlined text-slate-900 text-sm">check_circle</span>':""}
                                    </div>
                                </button>
                            `).join("")}
                        </div>
                    </div>

                    <!-- Preview Messages -->
                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Message Sequence Preview</p>
                        <div class="relative pl-6 space-y-3 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-slate-200">
                            ${d.messages.map((o,u)=>`
                                <div class="relative text-left">
                                    <div class="absolute -left-6 top-0 w-4 h-4 ${o.type==="welcome"?"bg-slate-900":o.type==="tips"?"bg-slate-700":o.type==="upsell"?"bg-slate-600":o.type==="feedback"?"bg-slate-500":"bg-slate-400"} rounded-full flex items-center justify-center z-10">
                                        <span class="text-white text-[8px] font-black">${u+1}</span>
                                    </div>
                                    <div class="bg-slate-50 rounded-xl p-3">
                                        <div class="flex items-center justify-between mb-1">
                                            <span class="text-[8px] font-black text-slate-500 uppercase">Day ${o.day} • ${o.type}</span>
                                        </div>
                                        <p class="text-[10px] font-black text-slate-900">${o.title}</p>
                                    </div>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                `:""}
            </div>

            <!-- Footer Action -->
            ${fe&&yt?`
                <div class="p-4 sm:p-6 bg-white border-t border-slate-100 text-center shrink-0">
                    <button onclick="window.createAutomation()" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-center">
                        <span class="material-icons-outlined text-sm">play_circle</span> Start Automation
                    </button>
                </div>
            `:""}
        </div>
    `}window.sendAutomationMessage=async e=>{var t,s,a,n,l;try{const d=window.getCache(),r=(t=d.automationMessages)==null?void 0:t.find(S=>S.id===e),p=(s=d.automations)==null?void 0:s.find(S=>S.id===(r==null?void 0:r.automation_id)),o=(a=d.customers)==null?void 0:a.find(S=>S.id===(p==null?void 0:p.customer_id));if(!r||!p){window.toast.error("Message not found");return}if(!(o!=null&&o.phone)){window.toast.error("Customer phone number not found");return}window.toast.info("Sending WhatsApp message...");const h=((l=(((n=d.saleItems)==null?void 0:n.filter(S=>S.sale_id===p.sale_id))||[])[0])==null?void 0:l.product_name)||"your product",w=r.content.replace(/\{product\}/g,h).replace(/\{name\}/g,o.name.split(" ")[0]);let v="sent",m=null;try{m=await window.sendWhatsAppMessage(o.phone,w),m.success?(v="delivered",window.toast.success("WhatsApp message sent!")):(v="failed",window.toast.warning("Message queued but may not have been delivered"))}catch(S){console.error("WATI Error:",S),v="failed",window.toast.error("WhatsApp send failed: "+S.message)}await M.automations.updateMessageStatus(e,v==="failed"?"pending":"sent",new Date().toISOString()),await M.communications.add({id:`COMM-${Math.random().toString(36).substr(2,8).toUpperCase()}`,customer_id:p.customer_id,type:"whatsapp",direction:"outgoing",content:w,sent_at:new Date().toISOString(),automation_id:p.id,sale_id:p.sale_id,status:v}),await K()}catch(d){console.error("Error sending message:",d),window.toast.error("Failed to send message: "+d.message)}};window.toggleAutomationStatus=async e=>{var t;try{const a=(t=window.getCache().automations)==null?void 0:t.find(l=>l.id===e);if(!a)return;const n=a.status==="active"?"paused":"active";await M.automations.update(e,{status:n}),await K(),window.toast.success(`Automation ${n==="active"?"resumed":"paused"}`)}catch(s){console.error("Error toggling automation:",s),window.toast.error("Failed to update automation")}};window.deleteAutomation=async e=>{window.showConfirm("Are you sure you want to delete this automation? All scheduled messages will be cancelled.",async()=>{try{await M.automations.deleteMessages(e),await M.automations.delete(e),await K(),window.toast.success("Automation deleted"),window.setAutomationMode("dashboard")}catch(t){console.error("Error deleting automation:",t),window.toast.error("Failed to delete automation")}})};window.openWhatsAppMessage=(e,t)=>{const s=`https://wa.me/${(e==null?void 0:e.replace(/\D/g,""))||""}?text=${encodeURIComponent(t)}`;window.open(s,"_blank")};function pl(e,t=!1){var h,w,v;const s=window.getCache(),a=(h=s.automations)==null?void 0:h.find(m=>m.id===e);if(!a)return`
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50">smart_toy</span>
                    <p class="text-[10px] font-black uppercase tracking-widest">Automation not found</p>
                </div>
            </div>
        `;const n=(s.automationMessages||[]).filter(m=>m.automation_id===e).sort((m,S)=>m.day_offset-S.day_offset),l=(w=s.customers)==null?void 0:w.find(m=>m.id===a.customer_id),d=(v=s.sales)==null?void 0:v.find(m=>m.id===a.sale_id);d&&(s.saleItems||[]).filter(m=>m.sale_id===d.id);const r=n.filter(m=>m.status==="sent").length,p=n.filter(m=>m.status==="pending").length,o=n.length>0?Math.round(r/n.length*100):0,u=m=>{switch(m){case"welcome":return{icon:"waving_hand",bg:"bg-slate-900",text:"text-white"};case"tips":return{icon:"lightbulb",bg:"bg-slate-700",text:"text-white"};case"upsell":return{icon:"trending_up",bg:"bg-slate-600",text:"text-white"};case"feedback":return{icon:"rate_review",bg:"bg-slate-500",text:"text-white"};case"reminder":return{icon:"notifications",bg:"bg-slate-400",text:"text-white"};default:return{icon:"chat",bg:"bg-slate-300",text:"text-slate-700"}}};return`
        <div class="h-full flex flex-col bg-white text-left">
            <!-- Header -->
            <header class="p-4 sm:p-6 border-b border-slate-100 shrink-0">
                <div class="flex items-center gap-4 mb-4">
                    <button onclick="window.setAutomationMode('dashboard')" class="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 shadow-sm">
                        <span class="material-icons-outlined">chevron_left</span>
                    </button>
                    <div class="flex-1 min-w-0">
                        <h2 class="text-lg font-black text-slate-900 tracking-tighter truncate">${a.name}</h2>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">${a.customer_name}</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <button onclick="window.toggleAutomationStatus('${a.id}')" class="w-10 h-10 flex items-center justify-center ${a.status==="active"?"bg-slate-900 text-white":"bg-slate-100 text-slate-400"} rounded-xl hover:opacity-80 transition-all" title="${a.status==="active"?"Pause":"Resume"}">
                            <span class="material-icons-outlined text-sm">${a.status==="active"?"pause":"play_arrow"}</span>
                        </button>
                        <button onclick="window.deleteAutomation('${a.id}')" class="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 text-slate-400 rounded-xl hover:text-slate-900 hover:border-slate-300 transition-all" title="Delete">
                            <span class="material-icons-outlined text-sm">delete</span>
                        </button>
                    </div>
                </div>
                
                <!-- Progress Bar -->
                <div class="flex items-center gap-3">
                    <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div class="h-full bg-slate-900 rounded-full transition-all" style="width: ${o}%"></div>
                    </div>
                    <span class="text-[10px] font-black text-slate-500">${r}/${n.length}</span>
                </div>
            </header>

            <!-- Content -->
            <div class="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6">
                <!-- Stats -->
                <div class="grid grid-cols-3 gap-3">
                    <div class="card p-3 text-center">
                        <p class="text-xl font-black text-slate-900">${r}</p>
                        <p class="text-[8px] font-black text-slate-400 uppercase">Sent</p>
                    </div>
                    <div class="card p-3 text-center">
                        <p class="text-xl font-black text-slate-900">${p}</p>
                        <p class="text-[8px] font-black text-slate-400 uppercase">Scheduled</p>
                    </div>
                    <div class="card p-3 text-center">
                        <span class="text-xl font-black ${a.status==="active"?"text-slate-900":"text-slate-400"}">${a.status==="active"?"●":"○"}</span>
                        <p class="text-[8px] font-black text-slate-400 uppercase">${a.status}</p>
                    </div>
                </div>

                <!-- Customer Info -->
                ${l?`
                    <div class="card p-4 flex items-center gap-4">
                        <div class="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center font-black text-sm text-slate-400">
                            ${l.name.split(" ").map(m=>m[0]).join("").toUpperCase().slice(0,2)}
                        </div>
                        <div class="flex-1">
                            <p class="text-sm font-black text-slate-900">${l.name}</p>
                            <p class="text-[10px] font-bold text-slate-400">${l.phone||"No phone"}</p>
                        </div>
                        ${l.phone?`
                            <a href="https://wa.me/${l.phone.replace(/\D/g,"")}" target="_blank" class="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-slate-800 transition-all">
                                <span class="material-icons-outlined text-sm">chat</span>
                            </a>
                        `:""}
                    </div>
                `:""}

                <!-- Message Sequence -->
                <div class="space-y-3">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Message Sequence</h3>
                    
                    <div class="relative pl-8 space-y-4 before:absolute before:left-3 before:top-4 before:bottom-4 before:w-px before:bg-slate-200">
                        ${n.map((m,S)=>{const _=u(m.message_type),k=m.status==="sent",P=new Date(m.scheduled_date).toDateString()===new Date().toDateString();return new Date(m.scheduled_date)<new Date,`
                                <div class="relative">
                                    <div class="absolute -left-8 top-4 w-6 h-6 ${k?"bg-slate-900":"bg-white border-2 border-slate-200"} rounded-full flex items-center justify-center z-10">
                                        ${k?'<span class="material-icons-outlined text-white text-xs">check</span>':`<span class="text-[9px] font-black text-slate-400">${S+1}</span>`}
                                    </div>
                                    
                                    <div class="card p-4 ${k?"bg-slate-50 border-slate-100":P?"border-slate-900 shadow-lg":"border-slate-100"}">
                                        <div class="flex items-start gap-3">
                                            <div class="w-10 h-10 ${_.bg} rounded-xl flex items-center justify-center shrink-0">
                                                <span class="material-icons-outlined ${_.text} text-sm">${_.icon}</span>
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <div class="flex items-center justify-between mb-1">
                                                    <span class="text-[8px] font-black ${k?"text-slate-400":P?"text-slate-900":"text-slate-400"} uppercase">
                                                        Day ${m.day_offset} • ${m.message_type}
                                                    </span>
                                                    <span class="text-[8px] font-bold ${k?"text-slate-400":P?"text-slate-900":"text-slate-300"}">
                                                        ${k?"Sent":P?"Today":new Date(m.scheduled_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}
                                                    </span>
                                                </div>
                                                <h4 class="text-xs font-black text-slate-900 mb-1">${m.title}</h4>
                                                <p class="text-[10px] font-bold text-slate-500 line-clamp-2">${m.content}</p>
                                                
                                                ${!k&&(l!=null&&l.phone)?`
                                                    <div class="flex items-center gap-2 mt-3">
                                                        <button onclick="window.sendAutomationMessage('${m.id}')" class="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[9px] font-black uppercase flex items-center gap-1 hover:bg-slate-800 transition-all">
                                                            <span class="material-icons-outlined text-xs">send</span> Send Now
                                                        </button>
                                                        <button onclick="window.openWhatsAppMessage('${l.phone}', '${m.content.replace(/'/g,"\\'")}')" class="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-[9px] font-black uppercase flex items-center gap-1 hover:bg-slate-200 transition-all">
                                                            <span class="material-icons-outlined text-xs">chat</span> WhatsApp
                                                        </button>
                                                    </div>
                                                `:""}
                                                
                                                ${k&&m.sent_at?`
                                                    <p class="text-[8px] font-bold text-slate-300 mt-2 flex items-center gap-1">
                                                        <span class="material-icons-outlined text-xs">done_all</span>
                                                        Sent ${new Date(m.sent_at).toLocaleString("en-GB",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"})}
                                                    </p>
                                                `:""}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `}).join("")}
                    </div>
                </div>
            </div>
        </div>
    `}function On(e){const t=e==="mobile",s=e==="desktop-secondary";return window.setAutomationMode=(a,n=null)=>{c.automationViewMode=a,n!==null&&(c.activeAutomationId=n),C()},s?c.automationViewMode==="create"?dl():c.automationViewMode==="details"&&c.activeAutomationId?pl(c.activeAutomationId):`
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50 text-center">smart_toy</span>
                    <p class="text-[10px] font-black uppercase tracking-widest text-center">Select a workflow or create new</p>
                </div>
            </div>
        `:t&&c.automationViewMode==="create"?dl(!0):t&&c.automationViewMode==="details"?pl(c.activeAutomationId,!0):op()}function cp(e=!0){if(!e)return;const t=[c.currentApp];c.currentApp==="sales"?t.push(c.currentTab):c.currentApp==="clients"?(t.push(c.clientViewMode),c.selectedClient&&c.clientViewMode==="profile"&&t.push(encodeURIComponent(c.selectedClient))):c.currentApp==="reports"?t.push(c.reportsTab):c.currentApp==="repairs"?(t.push(c.repairTab),t.push(c.repairViewMode)):c.currentApp==="inventory"?(t.push(c.inventoryTab),t.push(c.inventoryMode)):c.currentApp==="marketplace"?(t.push(c.marketplaceTab),t.push(c.marketplaceViewMode)):c.currentApp==="inquiries"?t.push(c.inquiryViewMode):c.currentApp==="prebooking"?t.push(c.preBookingViewMode):c.currentApp==="automation"?t.push(c.automationViewMode):c.currentApp==="schemes"?t.push(c.schemesTab):c.currentApp==="settings"&&t.push(c.settingsView);const s="#/"+t.filter(Boolean).join("/");window.location.hash!==s&&window.history.pushState(null,"",s)}function ul(){const e=window.location.hash.replace("#/","");if(!e)return;const t=e.split("/"),s=t[0];s&&(c.currentApp=s),s==="sales"?t[1]&&(c.currentTab=t[1]):s==="clients"?(t[1]&&(c.clientViewMode=t[1]),t[2]&&(c.selectedClient=decodeURIComponent(t[2]))):s==="reports"?t[1]&&(c.reportsTab=t[1]):s==="repairs"?(t[1]&&(c.repairTab=t[1]),t[2]&&(c.repairViewMode=t[2])):s==="inventory"?(t[1]&&(c.inventoryTab=t[1]),t[2]&&(c.inventoryMode=t[2])):s==="marketplace"?(t[1]&&(c.marketplaceTab=t[1]),t[2]&&(c.marketplaceViewMode=t[2])):s==="inquiries"?t[1]&&(c.inquiryViewMode=t[1]):s==="prebooking"?t[1]&&(c.preBookingViewMode=t[1]):s==="automation"?t[1]&&(c.automationViewMode=t[1]):s==="schemes"?t[1]&&(c.schemesTab=t[1]):s==="settings"&&t[1]&&(c.settingsView=t[1]),C(!1)}function dp(){window.addEventListener("hashchange",ul),ul()}const St={endpoint:"https://live-mt-server.wati.io/319917",token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im1hcmtldGluZ0BuZXN0ZXIuaW4iLCJuYW1laWQiOiJtYXJrZXRpbmdAbmVzdGVyLmluIiwiZW1haWwiOiJtYXJrZXRpbmdAbmVzdGVyLmluIiwiYXV0aF90aW1lIjoiMDIvMTAvMjAyNSAwOTo1MDoxOSIsInRlbmFudF9pZCI6IjMxOTkxNyIsImp0aSI6ImFiNzBlNGU3LTAxNDUtNDg4NS1hYWU3LTQ3ZDc3YTA0NThhOSIsImRiX25hbWUiOiJtdC1wcm9kLVRlbmFudHMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBRE1JTklTVFJBVE9SIiwiZXhwIjoyNTM0MDIzMDA4MDAsImlzcyI6IkNsYXJlX0FJIiwiYXVkIjoiQ2xhcmVfQUkifQ.V1k2oIW0iDKep9_zG9WpS62LVcgXxj7vAndigvmZS2I"};function pp(e){if(!e)return null;let t=e.replace(/\D/g,"");return t.length===10&&(t="91"+t),t}async function up(e,t){var a;const s=pp(e);if(!s)throw new Error("Invalid phone number");try{const n=await fetch(`${St.endpoint}/api/v1/sendSessionMessage/${s}`,{method:"POST",headers:{Authorization:St.token,"Content-Type":"application/json"},body:JSON.stringify({messageText:t})}),l=await n.json();if(!n.ok){if(console.error("WATI API Error:",l),(a=l.message)!=null&&a.includes("session")||l.result===!1)return console.log("Session expired, trying template message..."),await xp(s,t);throw new Error(l.message||"Failed to send message")}return{success:!0,data:l}}catch(n){throw console.error("WATI Send Error:",n),n}}async function xp(e,t){try{const s=await fetch(`${St.endpoint}/api/v1/sendTemplateMessage`,{method:"POST",headers:{Authorization:St.token,"Content-Type":"application/json"},body:JSON.stringify({whatsappNumber:e,templateName:"retaileros_notification",parameters:[{name:"message",value:t}],broadcast_name:"RetailerOS"})}),a=await s.json();return!s.ok&&a.result===!1?(console.log("Template not found, trying interactive message..."),await fp(e,t)):{success:!0,data:a,method:"template"}}catch(s){throw console.error("Template message error:",s),s}}async function fp(e,t){try{const s=await fetch(`${St.endpoint}/api/v1/sendInteractiveButtonsMessage`,{method:"POST",headers:{Authorization:St.token,"Content-Type":"application/json"},body:JSON.stringify({whatsappNumber:e,header:{type:"Text",text:"RetailerOS"},body:t,footer:"Powered by RetailerOS",buttons:[{type:"reply",reply:{id:"reply_ok",title:"OK"}}]})}),a=await s.json();return{success:s.ok,data:a,method:"interactive"}}catch(s){throw console.error("Interactive message error:",s),s}}async function bp(){try{return(await fetch(`${St.endpoint}/api/v1/getContacts?pageSize=1`,{method:"GET",headers:{Authorization:St.token}})).ok}catch(e){return console.error("WATI connection test failed:",e),!1}}window.sendWhatsAppMessage=up;window.testWatiConnection=bp;let Rt=null,Ba=null;const xl={success:{icon:"check_circle",bg:"bg-slate-900",text:"text-white"},error:{icon:"error",bg:"bg-red-600",text:"text-white"},warning:{icon:"warning",bg:"bg-amber-500",text:"text-white"},info:{icon:"info",bg:"bg-slate-700",text:"text-white"}};function hp(){Rt||(Rt=document.createElement("div"),Rt.id="toast-container",Rt.className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center gap-2 pointer-events-none",document.body.appendChild(Rt))}function Os(e,t="info",s=3e3){hp(),Ba&&clearTimeout(Ba);const a=xl[t]||xl.info,n=document.createElement("div");return n.className=`
        ${a.bg} ${a.text} 
        px-5 py-3.5 rounded-2xl shadow-2xl 
        flex items-center gap-3 
        transform transition-all duration-300 
        opacity-0 translate-y-[-20px] scale-95
        pointer-events-auto
        max-w-[90vw] sm:max-w-md
    `.trim().replace(/\s+/g," "),n.innerHTML=`
        <span class="material-icons-outlined text-lg shrink-0">${a.icon}</span>
        <span class="text-sm font-bold leading-snug">${Ia(e)}</span>
    `,(t==="error"||e.length>50)&&(n.innerHTML+=`
            <button onclick="this.parentElement.remove()" class="ml-2 w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded-full transition-all shrink-0">
                <span class="material-icons-outlined text-sm">close</span>
            </button>
        `),Rt.innerHTML="",Rt.appendChild(n),requestAnimationFrame(()=>{n.classList.remove("opacity-0","translate-y-[-20px]","scale-95"),n.classList.add("opacity-100","translate-y-0","scale-100")}),Ba=setTimeout(()=>{mp(n)},s),n}function mp(e){!e||!e.parentElement||(e.classList.remove("opacity-100","translate-y-0","scale-100"),e.classList.add("opacity-0","translate-y-[-20px]","scale-95"),setTimeout(()=>{e.remove()},300))}function Ia(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}const gp={success:(e,t)=>Os(e,"success",t),error:(e,t)=>Os(e,"error",t||5e3),warning:(e,t)=>Os(e,"warning",t||4e3),info:(e,t)=>Os(e,"info",t)};function wp(e,t,s){const a=document.createElement("div");a.className="fixed inset-0 z-[9998] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4",a.innerHTML=`
        <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all duration-200 scale-95 opacity-0">
            <div class="p-6 text-center">
                <div class="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span class="material-icons-outlined text-2xl text-slate-600">help_outline</span>
                </div>
                <p class="text-sm font-bold text-slate-900 leading-relaxed">${Ia(e)}</p>
            </div>
            <div class="flex border-t border-slate-100">
                <button id="confirm-cancel" class="flex-1 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-slate-50 transition-all">
                    Cancel
                </button>
                <button id="confirm-ok" class="flex-1 py-4 text-[10px] font-black text-slate-900 uppercase tracking-widest bg-slate-50 hover:bg-slate-100 transition-all border-l border-slate-100">
                    Confirm
                </button>
            </div>
        </div>
    `,document.body.appendChild(a);const n=a.querySelector("div > div");requestAnimationFrame(()=>{n.classList.remove("scale-95","opacity-0"),n.classList.add("scale-100","opacity-100")}),a.querySelector("#confirm-cancel").onclick=()=>{ct(a),s&&s()},a.querySelector("#confirm-ok").onclick=()=>{ct(a),t&&t()},a.onclick=l=>{l.target===a&&(ct(a),s&&s())}}function ct(e){const t=e.querySelector("div > div");t.classList.remove("scale-100","opacity-100"),t.classList.add("scale-95","opacity-0"),setTimeout(()=>e.remove(),200)}function vp(e,t="",s,a){const n=document.createElement("div");n.className="fixed inset-0 z-[9998] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4",n.innerHTML=`
        <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all duration-200 scale-95 opacity-0">
            <div class="p-6">
                <p class="text-sm font-bold text-slate-900 mb-4">${Ia(e)}</p>
                <input type="text" id="prompt-input" value="${Ia(t)}" 
                       class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all"
                       autofocus>
            </div>
            <div class="flex border-t border-slate-100">
                <button id="prompt-cancel" class="flex-1 py-4 text-[10px] font-black text-slate-500 uppercase tracking-widest hover:bg-slate-50 transition-all">
                    Cancel
                </button>
                <button id="prompt-ok" class="flex-1 py-4 text-[10px] font-black text-slate-900 uppercase tracking-widest bg-slate-50 hover:bg-slate-100 transition-all border-l border-slate-100">
                    Add
                </button>
            </div>
        </div>
    `,document.body.appendChild(n);const l=n.querySelector("div > div"),d=n.querySelector("#prompt-input");requestAnimationFrame(()=>{l.classList.remove("scale-95","opacity-0"),l.classList.add("scale-100","opacity-100"),d.focus(),d.select()}),d.onkeydown=r=>{if(r.key==="Enter"){const p=d.value.trim();ct(n),p&&s&&s(p)}else r.key==="Escape"&&(ct(n),a&&a())},n.querySelector("#prompt-cancel").onclick=()=>{ct(n),a&&a()},n.querySelector("#prompt-ok").onclick=()=>{const r=d.value.trim();ct(n),r&&s&&s(r)},n.onclick=r=>{r.target===n&&(ct(n),a&&a())}}window.toast=gp;window.showToast=Os;window.showConfirm=wp;window.showPrompt=vp;function Li(){return c.currentApp==="sales"?c.currentTab==="new-sale"?Ei():Ti():c.currentApp==="clients"?$n("desktop-primary"):c.currentApp==="reports"?Cn("desktop-primary"):c.currentApp==="repairs"?An("desktop-primary"):c.currentApp==="marketing"?Rn("desktop-primary"):c.currentApp==="promoters"?En("desktop-primary"):c.currentApp==="inventory"?Tn("desktop-primary"):c.currentApp==="settings"?Mn("desktop-primary"):c.currentApp==="schemes"?Dn("desktop-primary"):c.currentApp==="marketplace"?Ln("desktop-primary"):c.currentApp==="inquiries"?jn("desktop-primary"):c.currentApp==="prebooking"?qn("desktop-primary"):c.currentApp==="automation"?On("desktop-primary"):'<div class="p-10 flex items-center justify-center h-full text-slate-300 font-bold uppercase tracking-widest">App Module Not Found</div>'}function yp(){return c.currentApp==="sales"?c.salesMode==="add-customer"?dn("desktop"):In():c.currentApp==="clients"?$n("desktop-secondary"):c.currentApp==="reports"?Cn("desktop-secondary"):c.currentApp==="repairs"?An("desktop-secondary"):c.currentApp==="marketing"?Rn("desktop-secondary"):c.currentApp==="promoters"?En("desktop-secondary"):c.currentApp==="inventory"?Tn("desktop-secondary"):c.currentApp==="settings"?Mn("desktop-secondary"):c.currentApp==="schemes"?Dn("desktop-secondary"):c.currentApp==="marketplace"?Ln("desktop-secondary"):c.currentApp==="inquiries"?jn("desktop-secondary"):c.currentApp==="prebooking"?qn("desktop-secondary"):c.currentApp==="automation"?On("desktop-secondary"):'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-2 opacity-50">grid_view</span><p class="text-[10px] font-black uppercase tracking-widest">Select an app to view details</p></div></div>'}function ji(){return Ua("desktop")}function kp(){return`
        <div class="h-full flex flex-row divide-x divide-slate-200 bg-white w-full">
            <!-- Col 1: App Menu (25% Width) -->
            <div class="w-[25%] shrink-0 h-full bg-white z-20 overflow-y-auto border-r border-slate-200">
                ${ji()}
            </div>

            <!-- Col 2: Active App (Flexible / Remaining Width ~45%) -->
            <div class="flex-1 bg-white h-full overflow-hidden flex flex-col relative z-10">
               ${c.isLoggedIn?c.currentApp==="launcher"?'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-4 opacity-20">arrow_back</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Select an App from the Menu</p></div></div>':Li():c.authMode==="register"?Fa("desktop-primary"):'<div class="h-full w-full bg-slate-950 flex flex-col items-center justify-center text-white/5 font-black text-[20vw] leading-none overflow-hidden select-none pointer-events-none"><div>OS</div></div>'}
            </div>

            <!-- Col 3: Preview (30% Width) -->
            <div class="w-[30%] shrink-0 bg-slate-50/50 h-full overflow-hidden flex flex-col relative dot-grid border-l border-slate-200">
                ${c.isLoggedIn?c.currentApp==="launcher"?'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-6xl mb-4 opacity-20">dashboard</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Retailer OS Environment</p></div></div>':yp():c.authMode==="register"?Fa("desktop-secondary"):'<div class="h-full w-full bg-slate-950/95 flex flex-col items-center justify-center text-white/5 font-black text-[15vw] leading-none overflow-hidden select-none pointer-events-none"><div>RETAILER</div></div>'}
            </div>
        </div>
    `}function _p(){return`
        <div class="h-full grid grid-cols-2 divide-x divide-slate-200 bg-white">
            <!-- Col 1: Sidebar / App Menu -->
            <div class="col-span-1 h-full bg-white z-20 overflow-y-auto">
                ${ji()}
            </div>

            <!-- Col 2: Primary Content -->
            <div class="col-span-1 bg-white h-full overflow-hidden flex flex-col relative z-10">
               ${c.currentApp==="launcher"?'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-4 opacity-20">arrow_back</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Select an App from the Menu</p></div></div>':Li()}
               
               <!-- Tablet Specific: Sticky Preview Button if Active -->
               ${c.currentApp==="sales"&&(c.currentTab==="new-sale"&&window.getActiveCart&&window.getActiveCart().length>0||c.currentTab==="history"&&c.salesHistoryId)?`
                    <div class="absolute bottom-6 right-6 z-50">
                        <button onclick="toggleMobileReceipt(true)" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                            <span class="material-icons-outlined">receipt_long</span>
                        </button>
                    </div>
                    ${c.showMobileReceipt?`
                        <div class="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-8">
                            <div class="bg-white w-full max-w-lg h-[80vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">
                                <div class="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                                    <h3 class="text-xs font-black text-slate-900 uppercase tracking-widest">Receipt Preview</h3>
                                    <button onclick="toggleMobileReceipt(false)" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-white rounded-full shadow-sm"><span class="material-icons-outlined text-lg">close</span></button>
                                </div>
                                <div class="overflow-y-auto flex-1 p-8 bg-slate-50/50">
                                    ${In()}
                                </div>
                            </div>
                        </div>
                    `:""}
               `:""}
            </div>
        </div>
    `}function Sp(){if(!c.isLoggedIn)return kl();if(c.currentApp==="launcher")return Ua("mobile");if(c.currentApp==="sales"){const t=window.getActiveCart&&window.getActiveCart().length>0,s=c.currentTab==="new-sale"&&t||c.currentTab==="history"&&c.salesHistoryId;return c.showMobileReceipt&&s?`
                <div class="fixed inset-0 z-[60] bg-white flex flex-col animate-slide-up">
                    <div class="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50 shrink-0">
                        <div class="flex items-center gap-2">
                             <button onclick="toggleMobileReceipt(false)" class="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-900"><span class="material-icons-outlined">arrow_back</span></button>
                             <h3 class="text-xs font-black text-slate-900 uppercase tracking-widest">Receipt Preview</h3>
                        </div>
                    </div>
                    <div class="overflow-y-auto flex-1 p-4 pb-20 bg-slate-50/50">
                        ${In()}
                    </div>
                </div>
            `:`
            <div class="flex flex-col w-full h-full overflow-hidden bg-slate-50 relative">
                ${c.currentTab==="new-sale"?Ei():Ti()}
                ${s?'<div class="h-28 shrink-0 w-full"></div>':""} <!-- Spacer inside flex flow pushing content up -->
            </div>
            ${s?`
            <div class="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100 z-50 w-full mb-safe">
                <button onclick="toggleMobileReceipt(true)" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase shadow-xl flex items-center justify-center gap-2">
                    <span class="material-icons-outlined text-sm">receipt_long</span> Preview Receipt
                </button>
            </div>
        `:""}
        `}let e="";if(c.currentApp==="clients")e=$n("mobile");else if(c.currentApp==="reports")e=Cn("mobile");else if(c.currentApp==="repairs")e=An("mobile");else if(c.currentApp==="marketing")e=Rn("mobile");else if(c.currentApp==="promoters")e=En("mobile");else if(c.currentApp==="inventory")e=Tn("mobile");else if(c.currentApp==="settings")e=Mn("mobile");else if(c.currentApp==="schemes")e=Dn("mobile");else if(c.currentApp==="marketplace")e=Ln("mobile");else if(c.currentApp==="inquiries")e=jn("mobile");else if(c.currentApp==="prebooking")e=qn("mobile");else if(c.currentApp==="automation")e=On("mobile");else return Ua("mobile");return`
        <div class="flex flex-col w-full h-full overflow-hidden bg-slate-50 relative">
            ${e}
        </div>
    `}function $a(){const e=document.getElementById("app");if(e)try{const t=window.innerWidth;t<768?e.innerHTML=Sp():t>=768&&t<1024?e.innerHTML=_p():e.innerHTML=kp()}catch(t){console.error(t),e.innerHTML=`< div class="p-4 text-red-500 font-bold" > Error: ${t.message} <br><small>${t.stack}</small></div>`}}wl($a);wl(cp);dp();window.addEventListener("resize",()=>{window.innerWidth!==c.viewportWidth&&(c.viewportWidth=window.innerWidth,c.gridCols=window.innerWidth<768?4:3,$a())});K().then(()=>{console.log("Initial data sync complete"),$a()}).catch(e=>{console.error("Initial sync failed:",e),$a()});

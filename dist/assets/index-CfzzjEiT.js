var Qn=Object.defineProperty;var cl=e=>{throw TypeError(e)};var Xn=(e,t,s)=>t in e?Qn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var _=(e,t,s)=>Xn(e,typeof t!="symbol"?t+"":t,s),ia=(e,t,s)=>t.has(e)||cl("Cannot "+s);var n=(e,t,s)=>(ia(e,t,"read from private field"),s?s.call(e):t.get(e)),u=(e,t,s)=>t.has(e)?cl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),d=(e,t,s,a)=>(ia(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),f=(e,t,s)=>(ia(e,t,"access private method"),s);var _e=(e,t,s,a)=>({set _(l){d(e,t,l,s)},get _(){return n(e,t,a)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(l){if(l.ep)return;l.ep=!0;const i=s(l);fetch(l.href,i)}})();const r={currentApp:window.innerWidth<768?"launcher":"sales",currentTab:"new-sale",salesHistoryId:"ORD-99281",showMobileReceipt:!1,reportsTab:"sales",repairTab:"active",repairViewMode:"search",selectedRepairDevice:null,selectedClient:"Arjun Malhotra",clientViewMode:"profile",promoterViewMode:"performance",inventoryTab:"brands",inventoryMode:"details",settingsView:"roles",viewportWidth:window.innerWidth,gridCols:window.innerWidth<768?4:3,schemesTab:"list",activeSchemeBrand:"Apple",activeScheme:"June Activation Bonus",showSchemeDetails:!1,marketplaceTab:"browse",marketplaceViewMode:"list",isLoggedIn:!1,authMode:"login",registrationStep:1,inquiryViewMode:"list",activeInquiry:null,preBookingViewMode:"dashboard",activeCampaign:null,automationViewMode:"dashboard",activeAutomationId:null},$l=[],jl=e=>{$l.push(e)},v=(e=!0)=>{$l.forEach(t=>t(e))};function Zn(e){r.currentApp=e,e==="clients"&&(r.clientViewMode="directory"),v()}function tr(e){r.currentTab=e,v()}function er(e){r.salesHistoryId=e,v()}function sr(e){r.showMobileReceipt=e,v()}function ar(e){r.reportsTab=e,v()}function lr(e){r.repairTab=e,v()}function nr(e,t=null){r.repairViewMode=e,t&&(r.selectedRepairDevice=t),v()}function rr(e){r.gridCols=e,v()}function Ll(e,t=null){r.clientViewMode=e,t&&(r.selectedClient=t),v()}function ir(e){r.schemesTab=e,v()}function or(e){r.activeSchemeBrand=e,v()}function cr(e){r.activeScheme=e,v()}function dr(e){r.showSchemeDetails=e,v()}function pr(e){r.marketplaceTab=e,v()}function xr(e){r.marketplaceViewMode=e,v()}function ur(e){r.isLoggedIn=e,r.currentApp=e?"sales":"launcher",v()}function fr(e){r.authMode=e,r.registrationStep=1,v()}function hr(e){r.registrationStep=e,v()}function br(e){r.inquiryViewMode=e,v()}function mr(e){r.activeInquiry=e,v()}function gr(e){r.preBookingViewMode=e,v()}function vr(e){r.activeCampaign=e,v()}function wr(e){r.automationViewMode=e,v()}function yr(e){r.activeAutomationId=e,v()}window.setApp=Zn;window.setTab=tr;window.setSalesHistoryId=er;window.toggleMobileReceipt=sr;window.setReportsTab=ar;window.setRepairTab=lr;window.setRepairMode=nr;window.setGridCols=rr;window.setClientMode=Ll;window.setSchemesTab=ir;window.setSchemeBrand=or;window.setScheme=cr;window.toggleSchemeDetails=dr;window.setMarketplaceTab=pr;window.setMarketplaceViewMode=xr;window.setLoginStatus=ur;window.setAuthMode=fr;window.setRegistrationStep=hr;window.setInquiryViewMode=br;window.setActiveInquiry=mr;window.setPreBookingViewMode=gr;window.setActiveCampaign=vr;window.setAutomationViewMode=wr;window.setActiveAutomation=yr;function kr(){return`
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
    `}function Sr(){const e=r.registrationStep;let t="";return e===1?t=`
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
        `),`
        <div class="h-full w-full flex flex-col items-center justify-center p-6 bg-white dot-grid relative overflow-hidden text-center">
            ${t}
            
            <div class="absolute bottom-6 flex items-center gap-2">
                <span class="material-icons-outlined text-indigo-400 text-xs">verified_user</span>
                <p class="text-[9px] font-black text-indigo-400 uppercase tracking-widest opacity-30">Secure ${e===2?"Verification":"Encryption"}</p>
            </div>
            <div class="w-40 h-1 bg-slate-100 absolute bottom-3 rounded-full"></div>
        </div>
    `}function Pl(){return r.authMode==="register"?Sr():kr()}const _r=[{n:"SALES DESK",i:"account_balance_wallet",k:"sales"},{n:"CLIENTS",i:"group",k:"clients"},{n:"INQUIRIES",i:"help_outline",k:"inquiries"},{n:"PROMOTERS",i:"business_center",k:"promoters"},{n:"INTERNAL STORE",i:"storefront"},{n:"INVENTORY",i:"inventory_2",k:"inventory"},{n:"REPAIRS",i:"build",k:"repairs"},{n:"MARKETPLACE",i:"swap_horizontal_circle",k:"marketplace"},{n:"CLAIMS",i:"verified_user"},{n:"SCHEMES",i:"percent",k:"schemes"},{n:"MARKETING",i:"campaign",k:"marketing"},{n:"AUTOMATION",i:"smart_toy",s:!0,k:"automation"},{n:"PRE-BOOKING",i:"rocket_launch",k:"prebooking"},{n:"REPORTS",i:"bar_chart",k:"reports"},{n:"SETTINGS",i:"settings",k:"settings"}];function Ar(e){const t=e?r.gridCols:4;return`
        <div class="card overflow-hidden border-slate-200">
            <div class="grid ${e&&{2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4"}[t]||"grid-cols-4"} divide-x divide-y divide-slate-100">
                ${_r.map(a=>`
                    <button onclick="setApp('${a.k||"launcher"}')" class="aspect-square flex flex-col items-center justify-center p-1.5 hover:bg-slate-50 transition-all ${r.currentApp===a.k?"bg-slate-100":""}">
                        <span class="${a.s?"material-symbols-outlined":"material-icons-outlined"} text-xl ${r.currentApp===a.k?"text-slate-900 font-bold":"text-slate-500"} mb-1">${a.i}</span>
                        <span class="text-[7px] font-black uppercase text-center tracking-wider leading-tight ${r.currentApp===a.k?"text-slate-900":"text-slate-500"} ${a.n.length>10?"max-w-[90%]":""}">${a.n}</span>
                    </button>
                `).join("")}
            </div>
        </div>
    `}function Rr(e){return`
        <footer class="p-4 bg-[#F8FAFC]/95 backdrop-blur-md border-t border-slate-100 shrink-0 mt-auto sticky bottom-0 z-20">
            ${r.isLoggedIn?`
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
                ${r.authMode==="login"?`
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
    `}function da(e){const t=e==="mobile";return`
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
                ${r.isLoggedIn?`
                    ${Ar(t)}

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
                         ${Pl()}
                    </div>
                `}
            </div>

            ${Rr(t)}
        </div>
    `}class A extends Error{constructor(s,a,l,i,o){a!==void 0&&(s=`${a}: ${s}`);super(s,{cause:o});_(this,"code");_(this,"extendedCode");_(this,"rawCode");this.code=a,this.extendedCode=l,this.rawCode=i,this.name="LibsqlError"}}class Te extends A{constructor(s,a,l,i,o,c){super(s,l,i,o,c);_(this,"statementIndex");this.statementIndex=a,this.name="LibsqlBatchError"}}function Cr(e){const t=Ir.exec(e);if(t===null)throw new A(`The URL '${e}' is not in a valid format`,"URL_INVALID");const s=t.groups,a=s.scheme,l=s.authority!==void 0?Er(s.authority):void 0,i=we(s.path),o=s.query!==void 0?qr(s.query):void 0,c=s.fragment!==void 0?we(s.fragment):void 0;return{scheme:a,authority:l,path:i,query:o,fragment:c}}const Ir=(()=>{const e="(?<scheme>[A-Za-z][A-Za-z.+-]*)",t="(?<authority>[^/?#]*)",s="(?<path>[^?#]*)",a="(?<query>[^#]*)",l="(?<fragment>.*)";return new RegExp(`^${e}:(//${t})?${s}(\\?${a})?(#${l})?$`,"su")})();function Er(e){const t=Tr.exec(e);if(t===null)throw new A("The authority part of the URL is not in a valid format","URL_INVALID");const s=t.groups,a=we(s.host_br??s.host),l=s.port?parseInt(s.port,10):void 0,i=s.username!==void 0?{username:we(s.username),password:s.password!==void 0?we(s.password):void 0}:void 0;return{host:a,port:l,userinfo:i}}const Tr=new RegExp("^((?<username>[^:]*)(:(?<password>.*))?@)?((?<host>[^:\\[\\]]*)|(\\[(?<host_br>[^\\[\\]]*)\\]))(:(?<port>[0-9]*))?$","su");function qr(e){const t=e.split("&"),s=[];for(const a of t){if(a==="")continue;let l,i;const o=a.indexOf("=");o<0?(l=a,i=""):(l=a.substring(0,o),i=a.substring(o+1)),s.push({key:we(l.replaceAll("+"," ")),value:we(i.replaceAll("+"," "))})}return{pairs:s}}function we(e){try{return decodeURIComponent(e)}catch(t){throw t instanceof URIError?new A(`URL component has invalid percent encoding: ${t}`,"URL_INVALID",void 0,void 0,t):t}}function pa(e,t,s){if(t===void 0)throw new A(`URL with scheme ${JSON.stringify(e+":")} requires authority (the "//" part)`,"URL_INVALID");const a=`${e}:`,l=Mr(t.host),i=$r(t.port),c=`//${jr(t.userinfo)}${l}${i}`;let p=s.split("/").map(encodeURIComponent).join("/");return p!==""&&!p.startsWith("/")&&(p="/"+p),new URL(`${a}${c}${p}`)}function Mr(e){return e.includes(":")?`[${encodeURI(e)}]`:encodeURI(e)}function $r(e){return e!==void 0?`:${e}`:""}function jr(e){if(e===void 0)return"";const t=encodeURIComponent(e.username),s=e.password!==void 0?`:${encodeURIComponent(e.password)}`:"";return`${t}${s}@`}const Ol="3.7.8",Lr=Ol,ss=typeof Buffer=="function",dl=typeof TextDecoder=="function"?new TextDecoder:void 0,pl=typeof TextEncoder=="function"?new TextEncoder:void 0,Pr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",ns=Array.prototype.slice.call(Pr),Os=(e=>{let t={};return e.forEach((s,a)=>t[s]=a),t})(ns),Or=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,U=String.fromCharCode.bind(String),xl=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):e=>new Uint8Array(Array.prototype.slice.call(e,0)),Dl=e=>e.replace(/=/g,"").replace(/[+\/]/g,t=>t=="+"?"-":"_"),Nl=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),Bl=e=>{let t,s,a,l,i="";const o=e.length%3;for(let c=0;c<e.length;){if((s=e.charCodeAt(c++))>255||(a=e.charCodeAt(c++))>255||(l=e.charCodeAt(c++))>255)throw new TypeError("invalid character found");t=s<<16|a<<8|l,i+=ns[t>>18&63]+ns[t>>12&63]+ns[t>>6&63]+ns[t&63]}return o?i.slice(0,o-3)+"===".substring(o):i},$a=typeof btoa=="function"?e=>btoa(e):ss?e=>Buffer.from(e,"binary").toString("base64"):Bl,xa=ss?e=>Buffer.from(e).toString("base64"):e=>{let s=[];for(let a=0,l=e.length;a<l;a+=4096)s.push(U.apply(null,e.subarray(a,a+4096)));return $a(s.join(""))},Ns=(e,t=!1)=>t?Dl(xa(e)):xa(e),Dr=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?U(192|t>>>6)+U(128|t&63):U(224|t>>>12&15)+U(128|t>>>6&63)+U(128|t&63)}else{var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return U(240|t>>>18&7)+U(128|t>>>12&63)+U(128|t>>>6&63)+U(128|t&63)}},Nr=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,Ul=e=>e.replace(Nr,Dr),ul=ss?e=>Buffer.from(e,"utf8").toString("base64"):pl?e=>xa(pl.encode(e)):e=>$a(Ul(e)),qe=(e,t=!1)=>t?Dl(ul(e)):ul(e),fl=e=>qe(e,!0),Br=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,Ur=e=>{switch(e.length){case 4:var t=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),s=t-65536;return U((s>>>10)+55296)+U((s&1023)+56320);case 3:return U((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return U((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},Vl=e=>e.replace(Br,Ur),Fl=e=>{if(e=e.replace(/\s+/g,""),!Or.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(e.length&3));let t,s,a,l=[];for(let i=0;i<e.length;)t=Os[e.charAt(i++)]<<18|Os[e.charAt(i++)]<<12|(s=Os[e.charAt(i++)])<<6|(a=Os[e.charAt(i++)]),s===64?l.push(U(t>>16&255)):a===64?l.push(U(t>>16&255,t>>8&255)):l.push(U(t>>16&255,t>>8&255,t&255));return l.join("")},ja=typeof atob=="function"?e=>atob(Nl(e)):ss?e=>Buffer.from(e,"base64").toString("binary"):Fl,Hl=ss?e=>xl(Buffer.from(e,"base64")):e=>xl(ja(e).split("").map(t=>t.charCodeAt(0))),zl=e=>Hl(Gl(e)),Vr=ss?e=>Buffer.from(e,"base64").toString("utf8"):dl?e=>dl.decode(Hl(e)):e=>Vl(ja(e)),Gl=e=>Nl(e.replace(/[-_]/g,t=>t=="-"?"+":"/")),ua=e=>Vr(Gl(e)),Fr=e=>{if(typeof e!="string")return!1;const t=e.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(t)||!/[^\s0-9a-zA-Z\-_]/.test(t)},Wl=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),Jl=function(){const e=(t,s)=>Object.defineProperty(String.prototype,t,Wl(s));e("fromBase64",function(){return ua(this)}),e("toBase64",function(t){return qe(this,t)}),e("toBase64URI",function(){return qe(this,!0)}),e("toBase64URL",function(){return qe(this,!0)}),e("toUint8Array",function(){return zl(this)})},Kl=function(){const e=(t,s)=>Object.defineProperty(Uint8Array.prototype,t,Wl(s));e("toBase64",function(t){return Ns(this,t)}),e("toBase64URI",function(){return Ns(this,!0)}),e("toBase64URL",function(){return Ns(this,!0)})},Hr=()=>{Jl(),Kl()},La={version:Ol,VERSION:Lr,atob:ja,atobPolyfill:Fl,btoa:$a,btoaPolyfill:Bl,fromBase64:ua,toBase64:qe,encode:qe,encodeURI:fl,encodeURL:fl,utob:Ul,btou:Vl,decode:ua,isValid:Fr,fromUint8Array:Ns,toUint8Array:zl,extendString:Jl,extendUint8Array:Kl,extendBuiltins:Hr},bs="https://github.com/libsql/libsql-client-ts#supported-urls";function fa(e){if(e==="write")return"BEGIN IMMEDIATE";if(e==="read")return"BEGIN TRANSACTION READONLY";if(e==="deferred")return"BEGIN DEFERRED";throw RangeError('Unknown transaction mode, supported values are "write", "read" and "deferred"')}class zr{constructor(t,s,a,l,i){_(this,"columns");_(this,"columnTypes");_(this,"rows");_(this,"rowsAffected");_(this,"lastInsertRowid");this.columns=t,this.columnTypes=s,this.rows=a,this.rowsAffected=l,this.lastInsertRowid=i}toJSON(){return{columns:this.columns,columnTypes:this.columnTypes,rows:this.rows.map(Gr),rowsAffected:this.rowsAffected,lastInsertRowid:this.lastInsertRowid!==void 0?""+this.lastInsertRowid:null}}}function Gr(e){return Array.prototype.map.call(e,Wr)}function Wr(e){return typeof e=="bigint"?""+e:e instanceof ArrayBuffer?La.fromUint8Array(new Uint8Array(e)):e}const hl=":memory:";function Jr(e,t){var y,Se;if(typeof e!="object")throw new TypeError(`Expected client configuration as object, got ${typeof e}`);let{url:s,authToken:a,tls:l,intMode:i,concurrency:o}=e;o=Math.max(0,o||20),i??(i="number");let c=[];s===hl&&(s="file::memory:");const p=Cr(s),b=p.scheme.toLowerCase(),m=b==="file"&&p.path===hl&&p.authority===void 0;let E;m?E={cache:{values:["shared","private"],update:(it,pt)=>c.push(`${it}=${pt}`)}}:E={tls:{values:["0","1"],update:(it,pt)=>l=pt==="1"},authToken:{update:(it,pt)=>a=pt}};for(const{key:it,value:pt}of((y=p.query)==null?void 0:y.pairs)??[]){if(!Object.hasOwn(E,it))throw new A(`Unsupported URL query parameter ${JSON.stringify(it)}`,"URL_PARAM_NOT_SUPPORTED");const Tt=E[it];if(Tt.values!==void 0&&!Tt.values.includes(pt))throw new A(`Unknown value for the "${it}" query argument: ${JSON.stringify(pt)}. Supported values are: [${Tt.values.map(la=>'"'+la+'"').join(", ")}]`,"URL_INVALID");Tt.update!==void 0&&(Tt==null||Tt.update(it,pt))}const K=c.length===0?"":`?${c.join("&")}`,G=p.path+K;let I;if(b==="libsql")if(l===!1){if(((Se=p.authority)==null?void 0:Se.port)===void 0)throw new A('A "libsql:" URL with ?tls=0 must specify an explicit port',"URL_INVALID");I="http"}else I="https";else I=b;if(I==="http"||I==="ws"?l??(l=!1):l??(l=!0),I!=="http"&&I!=="ws"&&I!=="https"&&I!=="wss"&&I!=="file")throw new A(`The client supports only "libsql:", "wss:", "ws:", "https:", "http:" and "file:" URLs, got ${JSON.stringify(p.scheme+":")}. For more information, please read ${bs}`,"URL_SCHEME_NOT_SUPPORTED");if(i!=="number"&&i!=="bigint"&&i!=="string")throw new TypeError(`Invalid value for intMode, expected "number", "bigint" or "string", got ${JSON.stringify(i)}`);if(p.fragment!==void 0)throw new A(`URL fragments are not supported: ${JSON.stringify("#"+p.fragment)}`,"URL_INVALID");return m?{scheme:"file",tls:!1,path:G,intMode:i,concurrency:o,syncUrl:e.syncUrl,syncInterval:e.syncInterval,readYourWrites:e.readYourWrites,offline:e.offline,fetch:e.fetch,authToken:void 0,encryptionKey:void 0,remoteEncryptionKey:void 0,authority:void 0}:{scheme:I,tls:l,authority:p.authority,path:G,authToken:a,intMode:i,concurrency:o,encryptionKey:e.encryptionKey,remoteEncryptionKey:e.remoteEncryptionKey,syncUrl:e.syncUrl,syncInterval:e.syncInterval,readYourWrites:e.readYourWrites,offline:e.offline,fetch:e.fetch}}let Ie;typeof WebSocket<"u"?Ie=WebSocket:typeof global<"u"?Ie=global.WebSocket:typeof window<"u"?Ie=window.WebSocket:typeof self<"u"&&(Ie=self.WebSocket);class Yl{constructor(){_(this,"intMode");this.intMode="number"}}class M extends Error{constructor(t){super(t),this.name="ClientError"}}class w extends M{constructor(t){super(t),this.name="ProtoError"}}class Ql extends M{constructor(s,a){super(s);_(this,"code");_(this,"proto");this.name="ResponseError",this.code=a.code,this.proto=a,this.stack=void 0}}class dt extends M{constructor(t,s){s!==void 0?(super(`${t}: ${s}`),this.cause=s):super(t),this.name="ClosedError"}}class Xl extends M{constructor(t){super(t),this.name="WebSocketUnsupportedError"}}class ha extends M{constructor(t){super(t),this.name="WebSocketError"}}class Bs extends M{constructor(s,a){super(s);_(this,"status");this.status=a,this.name="HttpServerError"}}class Xe extends M{constructor(t){super(t),this.name="ProtocolVersionError"}}class ae extends M{constructor(t){super(t),this.name="InternalError"}}class as extends M{constructor(t){super(t),this.name="MisuseError"}}function wt(e){if(typeof e=="string")return e;throw ls(e,"string")}function yt(e){if(e!=null){if(typeof e=="string")return e;throw ls(e,"string or null")}}function ye(e){if(typeof e=="number")return e;throw ls(e,"number")}function ms(e){if(typeof e=="boolean")return e;throw ls(e,"boolean")}function zs(e){if(Array.isArray(e))return e;throw ls(e,"array")}function V(e){if(e!==null&&typeof e=="object"&&!Array.isArray(e))return e;throw ls(e,"object")}function le(e,t){return zs(e).map(s=>t(V(s)))}function ls(e,t){if(e===void 0)return new w(`Expected ${t}, but the property was missing`);let s=typeof e;return e===null?s="null":Array.isArray(e)&&(s="array"),new w(`Expected ${t}, received ${s}`)}function Pa(e,t){return t(V(e))}var j,Jt,qt,re;class Kr{constructor(t){u(this,qt);u(this,j);u(this,Jt);d(this,j,t),d(this,Jt,!1)}begin(){n(this,j).push("{"),d(this,Jt,!0)}end(){n(this,j).push("}"),d(this,Jt,!1)}string(t,s){f(this,qt,re).call(this,t),n(this,j).push(JSON.stringify(s))}stringRaw(t,s){f(this,qt,re).call(this,t),n(this,j).push('"'),n(this,j).push(s),n(this,j).push('"')}number(t,s){f(this,qt,re).call(this,t),n(this,j).push(""+s)}boolean(t,s){f(this,qt,re).call(this,t),n(this,j).push(s?"true":"false")}object(t,s,a){f(this,qt,re).call(this,t),this.begin(),a(this,s),this.end()}arrayObjects(t,s,a){f(this,qt,re).call(this,t),n(this,j).push("[");for(let l=0;l<s.length;++l)l!==0&&n(this,j).push(","),this.begin(),a(this,s[l]),this.end();n(this,j).push("]")}}j=new WeakMap,Jt=new WeakMap,qt=new WeakSet,re=function(t){n(this,Jt)?(n(this,j).push('"'),d(this,Jt,!1)):n(this,j).push(',"'),n(this,j).push(t),n(this,j).push('":')};function Zl(e,t){const s=[],a=new Kr(s);return a.begin(),t(a,e),a.end(),s.join("")}const us=0,ba=1,ma=2,Yr=5;var St,vs,st;class Qr{constructor(t){u(this,St);u(this,vs);u(this,st);d(this,St,t),d(this,vs,new DataView(t.buffer,t.byteOffset,t.byteLength)),d(this,st,0)}varint(){let t=0;for(let s=0;;s+=7){const a=n(this,St)[_e(this,st)._++];if(t|=(a&127)<<s,!(a&128))break}return t}varintBig(){let t=0n;for(let s=0n;;s+=7n){const a=n(this,St)[_e(this,st)._++];if(t|=BigInt(a&127)<<s,!(a&128))break}return t}bytes(t){const s=new Uint8Array(n(this,St).buffer,n(this,St).byteOffset+n(this,st),t);return d(this,st,n(this,st)+t),s}double(){const t=n(this,vs).getFloat64(n(this,st),!0);return d(this,st,n(this,st)+8),t}skipVarint(){for(;n(this,St)[_e(this,st)._++]&128;);}skip(t){d(this,st,n(this,st)+t)}eof(){return n(this,st)>=n(this,St).byteLength}}St=new WeakMap,vs=new WeakMap,st=new WeakMap;var Y,W,ce,rs;class Xr{constructor(t){u(this,ce);u(this,Y);u(this,W);d(this,Y,t),d(this,W,-1)}setup(t){d(this,W,t)}bytes(){f(this,ce,rs).call(this,ma);const t=n(this,Y).varint();return n(this,Y).bytes(t)}string(){return new TextDecoder().decode(this.bytes())}message(t){return ea(this.bytes(),t)}int32(){return f(this,ce,rs).call(this,us),n(this,Y).varint()}uint32(){return this.int32()}bool(){return this.int32()!==0}uint64(){return f(this,ce,rs).call(this,us),n(this,Y).varintBig()}sint64(){const t=this.uint64();return t>>1n^-(t&1n)}double(){return f(this,ce,rs).call(this,ba),n(this,Y).double()}maybeSkip(){if(!(n(this,W)<0)){if(n(this,W)===us)n(this,Y).skipVarint();else if(n(this,W)===ba)n(this,Y).skip(8);else if(n(this,W)===ma){const t=n(this,Y).varint();n(this,Y).skip(t)}else if(n(this,W)===Yr)n(this,Y).skip(4);else throw new w(`Unexpected wire type ${n(this,W)}`);d(this,W,-1)}}}Y=new WeakMap,W=new WeakMap,ce=new WeakSet,rs=function(t){if(n(this,W)!==t)throw new w(`Expected wire type ${t}, got ${n(this,W)}`);d(this,W,-1)};function ea(e,t){const s=new Qr(e),a=new Xr(s);let l=t.default();for(;!s.eof();){const i=s.varint(),o=i>>3,c=i&7;a.setup(c);const p=t[o];if(p!==void 0){const b=p(a,l);b!==void 0&&(l=b)}a.maybeSkip()}return l}var ut,Kt,Me,Q,D,is,Us,tn,os;const ll=class ll{constructor(){u(this,D);u(this,ut);u(this,Kt);u(this,Me);u(this,Q);d(this,ut,new ArrayBuffer(256)),d(this,Kt,new Uint8Array(n(this,ut))),d(this,Me,new DataView(n(this,ut))),d(this,Q,0)}bytes(t,s){f(this,D,os).call(this,t,ma),f(this,D,Us).call(this,s.byteLength),f(this,D,is).call(this,s.byteLength),n(this,Kt).set(s,n(this,Q)),d(this,Q,n(this,Q)+s.byteLength)}string(t,s){this.bytes(t,new TextEncoder().encode(s))}message(t,s,a){const l=new ll;a(l,s),this.bytes(t,l.data())}int32(t,s){f(this,D,os).call(this,t,us),f(this,D,Us).call(this,s)}uint32(t,s){this.int32(t,s)}bool(t,s){this.int32(t,s?1:0)}sint64(t,s){f(this,D,os).call(this,t,us),f(this,D,tn).call(this,s<<1n^s>>63n)}double(t,s){f(this,D,os).call(this,t,ba),f(this,D,is).call(this,8),n(this,Me).setFloat64(n(this,Q),s,!0),d(this,Q,n(this,Q)+8)}data(){return new Uint8Array(n(this,ut),0,n(this,Q))}};ut=new WeakMap,Kt=new WeakMap,Me=new WeakMap,Q=new WeakMap,D=new WeakSet,is=function(t){if(n(this,Q)+t<=n(this,ut).byteLength)return;let s=n(this,ut).byteLength;for(;s<n(this,Q)+t;)s*=2;const a=new ArrayBuffer(s),l=new Uint8Array(a),i=new DataView(a);l.set(new Uint8Array(n(this,ut),0,n(this,Q))),d(this,ut,a),d(this,Kt,l),d(this,Me,i)},Us=function(t){f(this,D,is).call(this,5),t=0|t;do{let s=t&127;t>>>=7,s|=t?128:0,n(this,Kt)[_e(this,Q)._++]=s}while(t)},tn=function(t){f(this,D,is).call(this,10),t=t&0xffffffffffffffffn;do{let s=Number(t&0x7fn);t>>=7n,s|=t?128:0,n(this,Kt)[_e(this,Q)._++]=s}while(t)},os=function(t,s){f(this,D,Us).call(this,t<<3|s)};let ga=ll;function en(e,t){const s=new ga;return t(s,e),s.data()}var at,Mt;class cs{constructor(){u(this,at);u(this,Mt);d(this,at,new Set),d(this,Mt,new Set)}alloc(){for(const s of n(this,Mt))return n(this,Mt).delete(s),n(this,at).add(s),n(this,at).has(n(this,at).size-1)||n(this,Mt).add(n(this,at).size-1),s;const t=n(this,at).size;return n(this,at).add(t),t}free(t){if(!n(this,at).delete(t))throw new ae("Freeing an id that is not allocated");n(this,Mt).delete(n(this,at).size),t<n(this,at).size&&n(this,Mt).add(t)}}at=new WeakMap,Mt=new WeakMap;function $(e,t){throw new ae(t)}function fs(e){if(e===null)return null;if(typeof e=="string")return e;if(typeof e=="number"){if(!Number.isFinite(e))throw new RangeError("Only finite numbers (not Infinity or NaN) can be passed as arguments");return e}else if(typeof e=="bigint"){if(e<Zr||e>ti)throw new RangeError("This bigint value is too large to be represented as a 64-bit integer and passed as argument");return e}else{if(typeof e=="boolean")return e?1n:0n;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(e instanceof Uint8Array)return e;if(e instanceof Date)return+e.valueOf();if(typeof e=="object")return""+e.toString();throw new TypeError("Unsupported type of value")}}const Zr=-9223372036854775808n,ti=9223372036854775807n;function sn(e,t){if(e===null)return null;if(typeof e=="number")return e;if(typeof e=="string")return e;if(typeof e=="bigint")if(t==="number"){const s=Number(e);if(!Number.isSafeInteger(s))throw new RangeError("Received integer which is too large to be safely represented as a JavaScript number");return s}else{if(t==="bigint")return e;if(t==="string")return""+e;throw new as("Invalid value for IntMode")}else{if(e instanceof Uint8Array)return e.slice().buffer;throw e===void 0?new w("Received unrecognized type of Value"):$(e,"Impossible type of Value")}}function Ls(e){return{affectedRowCount:e.affectedRowCount,lastInsertRowid:e.lastInsertRowid,columnNames:e.cols.map(t=>t.name),columnDecltypes:e.cols.map(t=>t.decltype)}}function an(e,t){const s=Ls(e),a=e.rows.map(l=>rn(s.columnNames,l,t));return{...s,rows:a}}function ln(e,t){const s=Ls(e);let a;return e.rows.length>0&&(a=rn(s.columnNames,e.rows[0],t)),{...s,row:a}}function nn(e,t){const s=Ls(e);let a;return e.rows.length>0&&s.columnNames.length>0&&(a=sn(e.rows[0][0],t)),{...s,value:a}}function rn(e,t,s){const a={};Object.defineProperty(a,"length",{value:t.length});for(let l=0;l<t.length;++l){const i=sn(t[l],s);Object.defineProperty(a,l,{value:i});const o=e[l];o!==void 0&&!Object.hasOwn(a,o)&&Object.defineProperty(a,o,{value:i,enumerable:!0,configurable:!0,writable:!0})}return a}function Ze(e){return new Ql(e.message,e)}var $e,je,$t;class Oa{constructor(t,s){u(this,$e);u(this,je);u(this,$t);d(this,$e,t),d(this,je,s),d(this,$t,void 0)}_getSqlId(t){if(n(this,$e)!==t)throw new as("Attempted to use SQL text opened with other object");if(n(this,$t)!==void 0)throw new dt("SQL text is closed",n(this,$t));return n(this,je)}close(){this._setClosed(new M("SQL text was manually closed"))}_setClosed(t){n(this,$t)===void 0&&(d(this,$t,t),n(this,$e)._closeSql(n(this,je)))}get closed(){return n(this,$t)!==void 0}}$e=new WeakMap,je=new WeakMap,$t=new WeakMap;function va(e,t){return t instanceof Oa?{sqlId:t._getSqlId(e)}:{sql:""+t}}var _t,ft;class Gs{constructor(){u(this,_t);u(this,ft);d(this,_t,[]),d(this,ft,[])}get length(){return n(this,_t).length+n(this,ft).length}push(t){n(this,_t).push(t)}shift(){return n(this,ft).length===0&&n(this,_t).length>0&&(d(this,ft,n(this,_t).reverse()),d(this,_t,[])),n(this,ft).pop()}first(){return n(this,ft).length!==0?n(this,ft)[n(this,ft).length-1]:n(this,_t)[0]}}_t=new WeakMap,ft=new WeakMap;let on=class{constructor(t){_(this,"sql");_(this,"_args");_(this,"_namedArgs");this.sql=t,this._args=[],this._namedArgs=new Map}bindIndexes(t){this._args.length=0;for(const s of t)this._args.push(fs(s));return this}bindIndex(t,s){if(t!==(t|0)||t<=0)throw new RangeError("Index of a positional argument must be positive integer");for(;this._args.length<t;)this._args.push(null);return this._args[t-1]=fs(s),this}bindName(t,s){return this._namedArgs.set(t,fs(s)),this}unbindAll(){return this._args.length=0,this._namedArgs.clear(),this}};function cn(e,t,s){let a,l=[],i=[];if(t instanceof on){a=t.sql,l=t._args;for(const[p,b]of t._namedArgs.entries())i.push({name:p,value:b})}else Array.isArray(t)?(a=t[0],Array.isArray(t[1])?l=t[1].map(p=>fs(p)):i=Object.entries(t[1]).map(([p,b])=>({name:p,value:fs(b)}))):a=t;const{sql:o,sqlId:c}=va(e,a);return{sql:o,sqlId:c,args:l,namedArgs:i,wantRows:s}}var ws,Le,El;let ei=(El=class{constructor(t,s){_(this,"_stream");u(this,ws);_(this,"_steps");u(this,Le);this._stream=t,d(this,ws,s),this._steps=[],d(this,Le,!1)}step(){return new li(this)}execute(){if(n(this,Le))throw new as("This batch has already been executed");d(this,Le,!0);const t={steps:this._steps.map(s=>s.proto)};return n(this,ws)?ai(this._stream,this._steps,t):si(this._stream,this._steps,t)}},ws=new WeakMap,Le=new WeakMap,El);function si(e,t,s){return e._batch(s).then(a=>{for(let l=0;l<t.length;++l){const i=a.stepResults.get(l),o=a.stepErrors.get(l);t[l].callback(i,o)}})}async function ai(e,t,s){const a=await e._openCursor(s);try{let l=0,i,o=[];for(;;){const c=await a.next();if(c===void 0)break;if(c.type==="step_begin"){if(c.step<l||c.step>=t.length)throw new w("Server produced StepBeginEntry for unexpected step");if(i!==void 0)throw new w("Server produced StepBeginEntry before terminating previous step");for(let p=l;p<c.step;++p)t[p].callback(void 0,void 0);l=c.step+1,i=c,o=[]}else if(c.type==="step_end"){if(i===void 0)throw new w("Server produced StepEndEntry but no step is active");const p={cols:i.cols,rows:o,affectedRowCount:c.affectedRowCount,lastInsertRowid:c.lastInsertRowid};t[i.step].callback(p,void 0),i=void 0,o=[]}else if(c.type==="step_error"){if(i===void 0){if(c.step>=t.length)throw new w("Server produced StepErrorEntry for unexpected step");for(let p=l;p<c.step;++p)t[p].callback(void 0,void 0)}else{if(c.step!==i.step)throw new w("Server produced StepErrorEntry for unexpected step");i=void 0,o=[]}t[c.step].callback(void 0,c.error),l=c.step+1}else if(c.type==="row"){if(i===void 0)throw new w("Server produced RowEntry but no step is active");o.push(c.row)}else throw c.type==="error"?Ze(c.error):c.type==="none"?new w("Server produced unrecognized CursorEntry"):$(c,"Impossible CursorEntry")}if(i!==void 0)throw new w("Server closed Cursor before terminating active step");for(let c=l;c<t.length;++c)t[c].callback(void 0,void 0)}finally{a.close()}}var jt,de,ds,Tl;let li=(Tl=class{constructor(t){u(this,de);_(this,"_batch");u(this,jt);_(this,"_index");this._batch=t,d(this,jt,[]),this._index=void 0}condition(t){return n(this,jt).push(t._proto),this}query(t){return f(this,de,ds).call(this,t,!0,an)}queryRow(t){return f(this,de,ds).call(this,t,!0,ln)}queryValue(t){return f(this,de,ds).call(this,t,!0,nn)}run(t){return f(this,de,ds).call(this,t,!1,Ls)}},jt=new WeakMap,de=new WeakSet,ds=function(t,s,a){if(this._index!==void 0)throw new as("This BatchStep has already been added to the batch");const l=cn(this._batch._stream._sqlOwner(),t,s);let i;n(this,jt).length===0?i=void 0:n(this,jt).length===1?i=n(this,jt)[0]:i={type:"and",conds:n(this,jt).slice()};const o={stmt:l,condition:i};return new Promise((c,p)=>{const b=(m,E)=>{m!==void 0&&E!==void 0?p(new w("Server returned both result and error")):E!==void 0?p(Ze(E)):c(m!==void 0?a(m,this._batch._stream.intMode):void 0)};this._index=this._batch._steps.length,this._batch._steps.push({proto:o,callback:b})})},Tl),et=class ie{constructor(t,s){_(this,"_batch");_(this,"_proto");this._batch=t,this._proto=s}static ok(t){return new ie(t._batch,{type:"ok",step:bl(t)})}static error(t){return new ie(t._batch,{type:"error",step:bl(t)})}static not(t){return new ie(t._batch,{type:"not",cond:t._proto})}static and(t,s){for(const a of s)ml(t,a);return new ie(t,{type:"and",conds:s.map(a=>a._proto)})}static or(t,s){for(const a of s)ml(t,a);return new ie(t,{type:"or",conds:s.map(a=>a._proto)})}static isAutocommit(t){return t._stream.client()._ensureVersion(3,"BatchCond.isAutocommit()"),new ie(t,{type:"is_autocommit"})}};function bl(e){if(e._index===void 0)throw new as("Cannot add a condition referencing a step that has not been added to the batch");return e._index}function ml(e,t){if(t._batch!==e)throw new as("Cannot mix BatchCond objects for different Batch objects")}function ni(e){return{paramNames:e.params.map(t=>t.name),columns:e.cols,isExplain:e.isExplain,isReadonly:e.isReadonly}}var pe,ps;class dn{constructor(t){u(this,pe);_(this,"intMode");this.intMode=t}query(t){return f(this,pe,ps).call(this,t,!0,an)}queryRow(t){return f(this,pe,ps).call(this,t,!0,ln)}queryValue(t){return f(this,pe,ps).call(this,t,!0,nn)}run(t){return f(this,pe,ps).call(this,t,!1,Ls)}batch(t=!1){return new ei(this,t)}describe(t){const s=va(this._sqlOwner(),t);return this._describe(s).then(ni)}sequence(t){const s=va(this._sqlOwner(),t);return this._sequence(s)}}pe=new WeakSet,ps=function(t,s,a){const l=cn(this._sqlOwner(),t,s);return this._execute(l).then(i=>a(i,this.intMode))};class pn{}const ri=1e3,ii=10;var Xs,xe,Pe,Oe,ue,Lt,fe,Zs,xn;class oi extends pn{constructor(s,a,l){super();u(this,Zs);u(this,Xs);u(this,xe);u(this,Pe);u(this,Oe);u(this,ue);u(this,Lt);u(this,fe);d(this,Xs,s),d(this,xe,a),d(this,Pe,l),d(this,Oe,new Gs),d(this,ue,new Gs),d(this,Lt,void 0),d(this,fe,!1)}async next(){for(;;){if(n(this,Lt)!==void 0)throw new dt("Cursor is closed",n(this,Lt));for(;!n(this,fe)&&n(this,ue).length<ii;)n(this,ue).push(f(this,Zs,xn).call(this));const s=n(this,Oe).shift();if(n(this,fe)||s!==void 0)return s;await n(this,ue).shift().then(a=>{if(a!==void 0){for(const l of a.entries)n(this,Oe).push(l);n(this,fe)||d(this,fe,a.done)}})}}_setClosed(s){n(this,Lt)===void 0&&(d(this,Lt,s),n(this,xe)._sendCursorRequest(this,{type:"close_cursor",cursorId:n(this,Pe)}).catch(()=>{}),n(this,xe)._cursorClosed(this))}close(){this._setClosed(new M("Cursor was manually closed"))}get closed(){return n(this,Lt)!==void 0}}Xs=new WeakMap,xe=new WeakMap,Pe=new WeakMap,Oe=new WeakMap,ue=new WeakMap,Lt=new WeakMap,fe=new WeakMap,Zs=new WeakSet,xn=function(){return n(this,xe)._sendCursorRequest(this,{type:"fetch_cursor",cursorId:n(this,Pe),maxCount:ri}).then(s=>s,s=>{this._setClosed(s)})};var B,ot,Pt,lt,Yt,ht,L,Re,ya,Vs,Fs;const nl=class nl extends dn{constructor(s,a){super(s.intMode);u(this,L);u(this,B);u(this,ot);u(this,Pt);u(this,lt);u(this,Yt);u(this,ht);d(this,B,s),d(this,ot,a),d(this,Pt,new Gs),d(this,lt,void 0),d(this,Yt,!1),d(this,ht,void 0)}static open(s){const a=s._streamIdAlloc.alloc(),l=new nl(s,a),i=()=>{},o=p=>{var b;return f(b=l,L,Fs).call(b,p)},c={type:"open_stream",streamId:a};return s._sendRequest(c,{responseCallback:i,errorCallback:o}),l}client(){return n(this,B)}_sqlOwner(){return n(this,B)}_execute(s){return f(this,L,Re).call(this,{type:"execute",streamId:n(this,ot),stmt:s}).then(a=>a.result)}_batch(s){return f(this,L,Re).call(this,{type:"batch",streamId:n(this,ot),batch:s}).then(a=>a.result)}_describe(s){return n(this,B)._ensureVersion(2,"describe()"),f(this,L,Re).call(this,{type:"describe",streamId:n(this,ot),sql:s.sql,sqlId:s.sqlId}).then(a=>a.result)}_sequence(s){return n(this,B)._ensureVersion(2,"sequence()"),f(this,L,Re).call(this,{type:"sequence",streamId:n(this,ot),sql:s.sql,sqlId:s.sqlId}).then(a=>{})}getAutocommit(){return n(this,B)._ensureVersion(3,"getAutocommit()"),f(this,L,Re).call(this,{type:"get_autocommit",streamId:n(this,ot)}).then(s=>s.isAutocommit)}_openCursor(s){return n(this,B)._ensureVersion(3,"cursor"),new Promise((a,l)=>{f(this,L,ya).call(this,{type:"cursor",batch:s,cursorCallback:a,errorCallback:l})})}_sendCursorRequest(s,a){if(s!==n(this,lt))throw new ae("Cursor not associated with the stream attempted to execute a request");return new Promise((l,i)=>{n(this,ht)!==void 0?i(new dt("Stream is closed",n(this,ht))):n(this,B)._sendRequest(a,{responseCallback:l,errorCallback:i})})}_cursorClosed(s){if(s!==n(this,lt))throw new ae("Cursor was closed, but it was not associated with the stream");d(this,lt,void 0),f(this,L,Vs).call(this)}close(){f(this,L,Fs).call(this,new M("Stream was manually closed"))}closeGracefully(){d(this,Yt,!0),f(this,L,Vs).call(this)}get closed(){return n(this,ht)!==void 0||n(this,Yt)}};B=new WeakMap,ot=new WeakMap,Pt=new WeakMap,lt=new WeakMap,Yt=new WeakMap,ht=new WeakMap,L=new WeakSet,Re=function(s){return new Promise((a,l)=>{f(this,L,ya).call(this,{type:"request",request:s,responseCallback:a,errorCallback:l})})},ya=function(s){n(this,ht)!==void 0?s.errorCallback(new dt("Stream is closed",n(this,ht))):n(this,Yt)?s.errorCallback(new dt("Stream is closing",void 0)):(n(this,Pt).push(s),f(this,L,Vs).call(this))},Vs=function(){for(;;){const s=n(this,Pt).first();if(s===void 0&&n(this,lt)===void 0&&n(this,Yt)){f(this,L,Fs).call(this,new M("Stream was gracefully closed"));break}else if((s==null?void 0:s.type)==="request"&&n(this,lt)===void 0){const{request:a,responseCallback:l,errorCallback:i}=s;n(this,Pt).shift(),n(this,B)._sendRequest(a,{responseCallback:l,errorCallback:i})}else if((s==null?void 0:s.type)==="cursor"&&n(this,lt)===void 0){const{batch:a,cursorCallback:l}=s;n(this,Pt).shift();const i=n(this,B)._cursorIdAlloc.alloc(),o=new oi(n(this,B),this,i),c={type:"open_cursor",streamId:n(this,ot),cursorId:i,batch:a},p=()=>{},b=m=>o._setClosed(m);n(this,B)._sendRequest(c,{responseCallback:p,errorCallback:b}),d(this,lt,o),l(o)}else break}},Fs=function(s){if(n(this,ht)!==void 0)return;for(d(this,ht,s),n(this,lt)!==void 0&&n(this,lt)._setClosed(s);;){const o=n(this,Pt).shift();if(o!==void 0)o.errorCallback(s);else break}const a={type:"close_stream",streamId:n(this,ot)},l=()=>n(this,B)._streamIdAlloc.free(n(this,ot)),i=()=>{};n(this,B)._sendRequest(a,{responseCallback:l,errorCallback:i})};let wa=nl;function Da(e,t){t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId),e.arrayObjects("args",t.args,un),e.arrayObjects("named_args",t.namedArgs,ci),e.boolean("want_rows",t.wantRows)}function ci(e,t){e.string("name",t.name),e.object("value",t.value,un)}function Ws(e,t){e.arrayObjects("steps",t.steps,di)}function di(e,t){t.condition!==void 0&&e.object("condition",t.condition,ka),e.object("stmt",t.stmt,Da)}function ka(e,t){if(e.stringRaw("type",t.type),t.type==="ok"||t.type==="error")e.number("step",t.step);else if(t.type==="not")e.object("cond",t.cond,ka);else if(t.type==="and"||t.type==="or")e.arrayObjects("conds",t.conds,ka);else if(t.type!=="is_autocommit")throw $(t,"Impossible type of BatchCond")}function un(e,t){if(t===null)e.stringRaw("type","null");else if(typeof t=="bigint")e.stringRaw("type","integer"),e.stringRaw("value",""+t);else if(typeof t=="number")e.stringRaw("type","float"),e.number("value",t);else if(typeof t=="string")e.stringRaw("type","text"),e.string("value",t);else if(t instanceof Uint8Array)e.stringRaw("type","blob"),e.stringRaw("base64",La.fromUint8Array(t));else if(t!==void 0)throw $(t,"Impossible type of Value")}function pi(e,t){if(e.stringRaw("type",t.type),t.type==="hello")t.jwt!==void 0&&e.string("jwt",t.jwt);else if(t.type==="request")e.number("request_id",t.requestId),e.object("request",t.request,xi);else throw $(t,"Impossible type of ClientMsg")}function xi(e,t){if(e.stringRaw("type",t.type),t.type==="open_stream")e.number("stream_id",t.streamId);else if(t.type==="close_stream")e.number("stream_id",t.streamId);else if(t.type==="execute")e.number("stream_id",t.streamId),e.object("stmt",t.stmt,Da);else if(t.type==="batch")e.number("stream_id",t.streamId),e.object("batch",t.batch,Ws);else if(t.type==="open_cursor")e.number("stream_id",t.streamId),e.number("cursor_id",t.cursorId),e.object("batch",t.batch,Ws);else if(t.type==="close_cursor")e.number("cursor_id",t.cursorId);else if(t.type==="fetch_cursor")e.number("cursor_id",t.cursorId),e.number("max_count",t.maxCount);else if(t.type==="sequence")e.number("stream_id",t.streamId),t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="describe")e.number("stream_id",t.streamId),t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="store_sql")e.number("sql_id",t.sqlId),e.string("sql",t.sql);else if(t.type==="close_sql")e.number("sql_id",t.sqlId);else if(t.type==="get_autocommit")e.number("stream_id",t.streamId);else throw $(t,"Impossible type of Request")}function Na(e,t){t.sql!==void 0&&e.string(1,t.sql),t.sqlId!==void 0&&e.int32(2,t.sqlId);for(const s of t.args)e.message(3,s,fn);for(const s of t.namedArgs)e.message(4,s,ui);e.bool(5,t.wantRows)}function ui(e,t){e.string(1,t.name),e.message(2,t.value,fn)}function sa(e,t){for(const s of t.steps)e.message(1,s,fi)}function fi(e,t){t.condition!==void 0&&e.message(1,t.condition,Ba),e.message(2,t.stmt,Na)}function Ba(e,t){if(t.type==="ok")e.uint32(1,t.step);else if(t.type==="error")e.uint32(2,t.step);else if(t.type==="not")e.message(3,t.cond,Ba);else if(t.type==="and")e.message(4,t.conds,gl);else if(t.type==="or")e.message(5,t.conds,gl);else if(t.type==="is_autocommit")e.message(6,void 0,hn);else throw $(t,"Impossible type of BatchCond")}function gl(e,t){for(const s of t)e.message(1,s,Ba)}function fn(e,t){if(t===null)e.message(1,void 0,hn);else if(typeof t=="bigint")e.sint64(2,t);else if(typeof t=="number")e.double(3,t);else if(typeof t=="string")e.string(4,t);else if(t instanceof Uint8Array)e.bytes(5,t);else if(t!==void 0)throw $(t,"Impossible type of Value")}function hn(e,t){}function hi(e,t){if(t.type==="hello")e.message(1,t,bi);else if(t.type==="request")e.message(2,t,mi);else throw $(t,"Impossible type of ClientMsg")}function bi(e,t){t.jwt!==void 0&&e.string(1,t.jwt)}function mi(e,t){e.int32(1,t.requestId);const s=t.request;if(s.type==="open_stream")e.message(2,s,gi);else if(s.type==="close_stream")e.message(3,s,vi);else if(s.type==="execute")e.message(4,s,wi);else if(s.type==="batch")e.message(5,s,yi);else if(s.type==="open_cursor")e.message(6,s,ki);else if(s.type==="close_cursor")e.message(7,s,Si);else if(s.type==="fetch_cursor")e.message(8,s,_i);else if(s.type==="sequence")e.message(9,s,Ai);else if(s.type==="describe")e.message(10,s,Ri);else if(s.type==="store_sql")e.message(11,s,Ci);else if(s.type==="close_sql")e.message(12,s,Ii);else if(s.type==="get_autocommit")e.message(13,s,Ei);else throw $(s,"Impossible type of Request")}function gi(e,t){e.int32(1,t.streamId)}function vi(e,t){e.int32(1,t.streamId)}function wi(e,t){e.int32(1,t.streamId),e.message(2,t.stmt,Na)}function yi(e,t){e.int32(1,t.streamId),e.message(2,t.batch,sa)}function ki(e,t){e.int32(1,t.streamId),e.int32(2,t.cursorId),e.message(3,t.batch,sa)}function Si(e,t){e.int32(1,t.cursorId)}function _i(e,t){e.int32(1,t.cursorId),e.uint32(2,t.maxCount)}function Ai(e,t){e.int32(1,t.streamId),t.sql!==void 0&&e.string(2,t.sql),t.sqlId!==void 0&&e.int32(3,t.sqlId)}function Ri(e,t){e.int32(1,t.streamId),t.sql!==void 0&&e.string(2,t.sql),t.sqlId!==void 0&&e.int32(3,t.sqlId)}function Ci(e,t){e.int32(1,t.sqlId),e.string(2,t.sql)}function Ii(e,t){e.int32(1,t.sqlId)}function Ei(e,t){e.int32(1,t.streamId)}function ts(e){const t=wt(e.message),s=yt(e.code);return{message:t,code:s}}function Ua(e){const t=le(e.cols,bn),s=zs(e.rows).map(o=>le(o,wn)),a=ye(e.affected_row_count),l=yt(e.last_insert_rowid),i=l!==void 0?BigInt(l):void 0;return{cols:t,rows:s,affectedRowCount:a,lastInsertRowid:i}}function bn(e){const t=yt(e.name),s=yt(e.decltype);return{name:t,decltype:s}}function mn(e){const t=new Map;zs(e.step_results).forEach((a,l)=>{a!==null&&t.set(l,Ua(V(a)))});const s=new Map;return zs(e.step_errors).forEach((a,l)=>{a!==null&&s.set(l,ts(V(a)))}),{stepResults:t,stepErrors:s}}function gn(e){const t=wt(e.type);if(t==="step_begin"){const s=ye(e.step),a=le(e.cols,bn);return{type:"step_begin",step:s,cols:a}}else if(t==="step_end"){const s=ye(e.affected_row_count),a=yt(e.last_insert_rowid),l=a!==void 0?BigInt(a):void 0;return{type:"step_end",affectedRowCount:s,lastInsertRowid:l}}else if(t==="step_error"){const s=ye(e.step),a=ts(V(e.error));return{type:"step_error",step:s,error:a}}else{if(t==="row")return{type:"row",row:le(e.row,wn)};if(t==="error")return{type:"error",error:ts(V(e.error))};throw new w("Unexpected type of CursorEntry")}}function vn(e){const t=le(e.params,Ti),s=le(e.cols,qi),a=ms(e.is_explain),l=ms(e.is_readonly);return{params:t,cols:s,isExplain:a,isReadonly:l}}function Ti(e){return{name:yt(e.name)}}function qi(e){const t=wt(e.name),s=yt(e.decltype);return{name:t,decltype:s}}function wn(e){const t=wt(e.type);if(t==="null")return null;if(t==="integer"){const s=wt(e.value);return BigInt(s)}else{if(t==="float")return ye(e.value);if(t==="text")return wt(e.value);if(t==="blob")return La.toUint8Array(wt(e.base64));throw new w("Unexpected type of Value")}}function Mi(e){const t=wt(e.type);if(t==="hello_ok")return{type:"hello_ok"};if(t==="hello_error")return{type:"hello_error",error:ts(V(e.error))};if(t==="response_ok"){const s=ye(e.request_id),a=$i(V(e.response));return{type:"response_ok",requestId:s,response:a}}else if(t==="response_error"){const s=ye(e.request_id),a=ts(V(e.error));return{type:"response_error",requestId:s,error:a}}else throw new w("Unexpected type of ServerMsg")}function $i(e){const t=wt(e.type);if(t==="open_stream")return{type:"open_stream"};if(t==="close_stream")return{type:"close_stream"};if(t==="execute")return{type:"execute",result:Ua(V(e.result))};if(t==="batch")return{type:"batch",result:mn(V(e.result))};if(t==="open_cursor")return{type:"open_cursor"};if(t==="close_cursor")return{type:"close_cursor"};if(t==="fetch_cursor"){const s=le(e.entries,gn),a=ms(e.done);return{type:"fetch_cursor",entries:s,done:a}}else{if(t==="sequence")return{type:"sequence"};if(t==="describe")return{type:"describe",result:vn(V(e.result))};if(t==="store_sql")return{type:"store_sql"};if(t==="close_sql")return{type:"close_sql"};if(t==="get_autocommit")return{type:"get_autocommit",isAutocommit:ms(e.is_autocommit)};throw new w("Unexpected type of Response")}}const Et={default(){return{message:"",code:void 0}},1(e,t){t.message=e.string()},2(e,t){t.code=e.string()}},es={default(){return{cols:[],rows:[],affectedRowCount:0,lastInsertRowid:void 0}},1(e,t){t.cols.push(e.message(yn))},2(e,t){t.rows.push(e.message(kn))},3(e,t){t.affectedRowCount=Number(e.uint64())},4(e,t){t.lastInsertRowid=e.sint64()}},yn={default(){return{name:void 0,decltype:void 0}},1(e,t){t.name=e.string()},2(e,t){t.decltype=e.string()}},kn={default(){return[]},1(e,t){t.push(e.message(Ui))}},Js={default(){return{stepResults:new Map,stepErrors:new Map}},1(e,t){const[s,a]=e.message(ji);t.stepResults.set(s,a)},2(e,t){const[s,a]=e.message(Li);t.stepErrors.set(s,a)}},ji={default(){return[0,es.default()]},1(e,t){t[0]=e.uint32()},2(e,t){t[1]=e.message(es)}},Li={default(){return[0,Et.default()]},1(e,t){t[0]=e.uint32()},2(e,t){t[1]=e.message(Et)}},Sn={default(){return{type:"none"}},1(e){return e.message(Pi)},2(e){return e.message(Oi)},3(e){return e.message(Di)},4(e){return{type:"row",row:e.message(kn)}},5(e){return{type:"error",error:e.message(Et)}}},Pi={default(){return{type:"step_begin",step:0,cols:[]}},1(e,t){t.step=e.uint32()},2(e,t){t.cols.push(e.message(yn))}},Oi={default(){return{type:"step_end",affectedRowCount:0,lastInsertRowid:void 0}},1(e,t){t.affectedRowCount=e.uint32()},2(e,t){t.lastInsertRowid=e.uint64()}},Di={default(){return{type:"step_error",step:0,error:Et.default()}},1(e,t){t.step=e.uint32()},2(e,t){t.error=e.message(Et)}},Ks={default(){return{params:[],cols:[],isExplain:!1,isReadonly:!1}},1(e,t){t.params.push(e.message(Ni))},2(e,t){t.cols.push(e.message(Bi))},3(e,t){t.isExplain=e.bool()},4(e,t){t.isReadonly=e.bool()}},Ni={default(){return{name:void 0}},1(e,t){t.name=e.string()}},Bi={default(){return{name:"",decltype:void 0}},1(e,t){t.name=e.string()},2(e,t){t.decltype=e.string()}},Ui={default(){},1(e){return null},2(e){return e.sint64()},3(e){return e.double()},4(e){return e.string()},5(e){return e.bytes()}},Vi={default(){return{type:"none"}},1(e){return{type:"hello_ok"}},2(e){return e.message(Fi)},3(e){return e.message(zi)},4(e){return e.message(Hi)}},Fi={default(){return{type:"hello_error",error:Et.default()}},1(e,t){t.error=e.message(Et)}},Hi={default(){return{type:"response_error",requestId:0,error:Et.default()}},1(e,t){t.requestId=e.int32()},2(e,t){t.error=e.message(Et)}},zi={default(){return{type:"response_ok",requestId:0,response:{type:"none"}}},1(e,t){t.requestId=e.int32()},2(e,t){t.response={type:"open_stream"}},3(e,t){t.response={type:"close_stream"}},4(e,t){t.response=e.message(Gi)},5(e,t){t.response=e.message(Wi)},6(e,t){t.response={type:"open_cursor"}},7(e,t){t.response={type:"close_cursor"}},8(e,t){t.response=e.message(Ji)},9(e,t){t.response={type:"sequence"}},10(e,t){t.response=e.message(Ki)},11(e,t){t.response={type:"store_sql"}},12(e,t){t.response={type:"close_sql"}},13(e,t){t.response=e.message(Yi)}},Gi={default(){return{type:"execute",result:es.default()}},1(e,t){t.result=e.message(es)}},Wi={default(){return{type:"batch",result:Js.default()}},1(e,t){t.result=e.message(Js)}},Ji={default(){return{type:"fetch_cursor",entries:[],done:!1}},1(e,t){t.entries.push(e.message(Sn))},2(e,t){t.done=e.bool()}},Ki={default(){return{type:"describe",result:Ks.default()}},1(e,t){t.result=e.message(Ks)}},Yi={default(){return{type:"get_autocommit",isAutocommit:!1}},1(e,t){t.isAutocommit=e.bool()}},Qi=new Map([["hrana2",{version:2,encoding:"json"}],["hrana1",{version:1,encoding:"json"}]]),_n=new Map([["hrana3-protobuf",{version:3,encoding:"protobuf"}],["hrana3",{version:3,encoding:"json"}],["hrana2",{version:2,encoding:"json"}],["hrana1",{version:1,encoding:"json"}]]);var F,At,he,X,be,Z,De,bt,Qt,Ne,R,Sa,An,_a,Rn,Cn,kt,In,En,ql;let Xi=(ql=class extends Yl{constructor(s,a){super();u(this,R);u(this,F);u(this,At);u(this,he);u(this,X);u(this,be);u(this,Z);u(this,De);u(this,bt);u(this,Qt);_(this,"_streamIdAlloc");_(this,"_cursorIdAlloc");u(this,Ne);d(this,F,s),d(this,At,[]),d(this,he,!1),d(this,X,void 0),d(this,be,!1),d(this,Z,void 0),d(this,De,!1),d(this,bt,new Map),d(this,Qt,new cs),this._streamIdAlloc=new cs,this._cursorIdAlloc=new cs,d(this,Ne,new cs),n(this,F).binaryType="arraybuffer",n(this,F).addEventListener("open",()=>f(this,R,An).call(this)),n(this,F).addEventListener("close",l=>f(this,R,Cn).call(this,l)),n(this,F).addEventListener("error",l=>f(this,R,Rn).call(this,l)),n(this,F).addEventListener("message",l=>f(this,R,In).call(this,l)),f(this,R,Sa).call(this,{type:"hello",jwt:a})}getVersion(){return new Promise((s,a)=>{if(d(this,De,!0),n(this,X)!==void 0)a(n(this,X));else if(n(this,he))s(n(this,Z).version);else{const l=()=>s(n(this,Z).version);n(this,At).push({openCallback:l,errorCallback:a})}})}_ensureVersion(s,a){if(n(this,Z)===void 0||!n(this,De))throw new Xe(`${a} is supported only on protocol version ${s} and higher, but the version supported by the WebSocket server is not yet known. Use Client.getVersion() to wait until the version is available.`);if(n(this,Z).version<s)throw new Xe(`${a} is supported on protocol version ${s} and higher, but the WebSocket server only supports version ${n(this,Z).version}`)}_sendRequest(s,a){if(n(this,X)!==void 0){a.errorCallback(new dt("Client is closed",n(this,X)));return}const l=n(this,Qt).alloc();n(this,bt).set(l,{...a,type:s.type}),f(this,R,Sa).call(this,{type:"request",requestId:l,request:s})}openStream(){return wa.open(this)}storeSql(s){this._ensureVersion(2,"storeSql()");const a=n(this,Ne).alloc(),l=new Oa(this,a),i=()=>{},o=p=>l._setClosed(p),c={type:"store_sql",sqlId:a,sql:s};return this._sendRequest(c,{responseCallback:i,errorCallback:o}),l}_closeSql(s){if(n(this,X)!==void 0)return;const a=()=>n(this,Ne).free(s),l=o=>f(this,R,kt).call(this,o),i={type:"close_sql",sqlId:s};this._sendRequest(i,{responseCallback:a,errorCallback:l})}close(){f(this,R,kt).call(this,new M("Client was manually closed"))}get closed(){return n(this,X)!==void 0}},F=new WeakMap,At=new WeakMap,he=new WeakMap,X=new WeakMap,be=new WeakMap,Z=new WeakMap,De=new WeakMap,bt=new WeakMap,Qt=new WeakMap,Ne=new WeakMap,R=new WeakSet,Sa=function(s){if(n(this,X)!==void 0)throw new ae("Trying to send a message on a closed client");if(n(this,he))f(this,R,_a).call(this,s);else{const a=()=>f(this,R,_a).call(this,s),l=()=>{};n(this,At).push({openCallback:a,errorCallback:l})}},An=function(){const s=n(this,F).protocol;if(s===void 0){f(this,R,kt).call(this,new M("The `WebSocket.protocol` property is undefined. This most likely means that the WebSocket implementation provided by the environment is broken. If you are using Miniflare 2, please update to Miniflare 3, which fixes this problem."));return}else if(s==="")d(this,Z,{version:1,encoding:"json"});else if(d(this,Z,_n.get(s)),n(this,Z)===void 0){f(this,R,kt).call(this,new w(`Unrecognized WebSocket subprotocol: ${JSON.stringify(s)}`));return}for(const a of n(this,At))a.openCallback();n(this,At).length=0,d(this,he,!0)},_a=function(s){const a=n(this,Z).encoding;if(a==="json"){const l=Zl(s,pi);n(this,F).send(l)}else if(a==="protobuf"){const l=en(s,hi);n(this,F).send(l)}else throw $(a,"Impossible encoding")},Rn=function(s){const l=s.message??"WebSocket was closed due to an error";f(this,R,kt).call(this,new ha(l))},Cn=function(s){let a=`WebSocket was closed with code ${s.code}`;s.reason&&(a+=`: ${s.reason}`),f(this,R,kt).call(this,new ha(a))},kt=function(s){if(n(this,X)===void 0){d(this,X,s);for(const a of n(this,At))a.errorCallback(s);n(this,At).length=0;for(const[a,l]of n(this,bt).entries())l.errorCallback(s),n(this,Qt).free(a);n(this,bt).clear(),n(this,F).close()}},In=function(s){if(n(this,X)===void 0)try{let a;const l=n(this,Z).encoding;if(l==="json"){if(typeof s.data!="string"){n(this,F).close(3003,"Only text messages are accepted with JSON encoding"),f(this,R,kt).call(this,new w("Received non-text message from server with JSON encoding"));return}a=Pa(JSON.parse(s.data),Mi)}else if(l==="protobuf"){if(!(s.data instanceof ArrayBuffer)){n(this,F).close(3003,"Only binary messages are accepted with Protobuf encoding"),f(this,R,kt).call(this,new w("Received non-binary message from server with Protobuf encoding"));return}a=ea(new Uint8Array(s.data),Vi)}else throw $(l,"Impossible encoding");f(this,R,En).call(this,a)}catch(a){n(this,F).close(3007,"Could not handle message"),f(this,R,kt).call(this,a)}},En=function(s){if(s.type==="none")throw new w("Received an unrecognized ServerMsg");if(s.type==="hello_ok"||s.type==="hello_error"){if(n(this,be))throw new w("Received a duplicated hello response");if(d(this,be,!0),s.type==="hello_error")throw Ze(s.error);return}else if(!n(this,be))throw new w("Received a non-hello message before a hello response");if(s.type==="response_ok"){const a=s.requestId,l=n(this,bt).get(a);if(n(this,bt).delete(a),l===void 0)throw new w("Received unexpected OK response");n(this,Qt).free(a);try{if(l.type!==s.response.type)throw console.dir({responseState:l,msg:s}),new w("Received unexpected type of response");l.responseCallback(s.response)}catch(i){throw l.errorCallback(i),i}}else if(s.type==="response_error"){const a=s.requestId,l=n(this,bt).get(a);if(n(this,bt).delete(a),l===void 0)throw new w("Received unexpected error response");n(this,Qt).free(a),l.errorCallback(Ze(s.error))}else throw $(s,"Impossible ServerMsg type")},ql);var Ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Aa={exports:{}};(function(e,t){var s=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof Ds<"u"&&Ds,a=function(){function i(){this.fetch=!1,this.DOMException=s.DOMException}return i.prototype=s,new i}();(function(i){(function(o){var c=typeof i<"u"&&i||typeof self<"u"&&self||typeof Ds<"u"&&Ds||{},p={searchParams:"URLSearchParams"in c,iterable:"Symbol"in c&&"iterator"in Symbol,blob:"FileReader"in c&&"Blob"in c&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in c,arrayBuffer:"ArrayBuffer"in c};function b(x){return x&&DataView.prototype.isPrototypeOf(x)}if(p.arrayBuffer)var m=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],E=ArrayBuffer.isView||function(x){return x&&m.indexOf(Object.prototype.toString.call(x))>-1};function K(x){if(typeof x!="string"&&(x=String(x)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(x)||x==="")throw new TypeError('Invalid character in header field name: "'+x+'"');return x.toLowerCase()}function G(x){return typeof x!="string"&&(x=String(x)),x}function I(x){var h={next:function(){var g=x.shift();return{done:g===void 0,value:g}}};return p.iterable&&(h[Symbol.iterator]=function(){return h}),h}function y(x){this.map={},x instanceof y?x.forEach(function(h,g){this.append(g,h)},this):Array.isArray(x)?x.forEach(function(h){if(h.length!=2)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+h.length);this.append(h[0],h[1])},this):x&&Object.getOwnPropertyNames(x).forEach(function(h){this.append(h,x[h])},this)}y.prototype.append=function(x,h){x=K(x),h=G(h);var g=this.map[x];this.map[x]=g?g+", "+h:h},y.prototype.delete=function(x){delete this.map[K(x)]},y.prototype.get=function(x){return x=K(x),this.has(x)?this.map[x]:null},y.prototype.has=function(x){return this.map.hasOwnProperty(K(x))},y.prototype.set=function(x,h){this.map[K(x)]=G(h)},y.prototype.forEach=function(x,h){for(var g in this.map)this.map.hasOwnProperty(g)&&x.call(h,this.map[g],g,this)},y.prototype.keys=function(){var x=[];return this.forEach(function(h,g){x.push(g)}),I(x)},y.prototype.values=function(){var x=[];return this.forEach(function(h){x.push(h)}),I(x)},y.prototype.entries=function(){var x=[];return this.forEach(function(h,g){x.push([g,h])}),I(x)},p.iterable&&(y.prototype[Symbol.iterator]=y.prototype.entries);function Se(x){if(!x._noBody){if(x.bodyUsed)return Promise.reject(new TypeError("Already read"));x.bodyUsed=!0}}function it(x){return new Promise(function(h,g){x.onload=function(){h(x.result)},x.onerror=function(){g(x.error)}})}function pt(x){var h=new FileReader,g=it(h);return h.readAsArrayBuffer(x),g}function Tt(x){var h=new FileReader,g=it(h),C=/charset=([A-Za-z0-9_-]+)/.exec(x.type),T=C?C[1]:"utf-8";return h.readAsText(x,T),g}function la(x){for(var h=new Uint8Array(x),g=new Array(h.length),C=0;C<h.length;C++)g[C]=String.fromCharCode(h[C]);return g.join("")}function rl(x){if(x.slice)return x.slice(0);var h=new Uint8Array(x.byteLength);return h.set(new Uint8Array(x)),h.buffer}function il(){return this.bodyUsed=!1,this._initBody=function(x){this.bodyUsed=this.bodyUsed,this._bodyInit=x,x?typeof x=="string"?this._bodyText=x:p.blob&&Blob.prototype.isPrototypeOf(x)?this._bodyBlob=x:p.formData&&FormData.prototype.isPrototypeOf(x)?this._bodyFormData=x:p.searchParams&&URLSearchParams.prototype.isPrototypeOf(x)?this._bodyText=x.toString():p.arrayBuffer&&p.blob&&b(x)?(this._bodyArrayBuffer=rl(x.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):p.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(x)||E(x))?this._bodyArrayBuffer=rl(x):this._bodyText=x=Object.prototype.toString.call(x):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||(typeof x=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):p.searchParams&&URLSearchParams.prototype.isPrototypeOf(x)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},p.blob&&(this.blob=function(){var x=Se(this);if(x)return x;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var x=Se(this);return x||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else{if(p.blob)return this.blob().then(pt);throw new Error("could not read as ArrayBuffer")}},this.text=function(){var x=Se(this);if(x)return x;if(this._bodyBlob)return Tt(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(la(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},p.formData&&(this.formData=function(){return this.text().then(Jn)}),this.json=function(){return this.text().then(JSON.parse)},this}var Gn=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function Wn(x){var h=x.toUpperCase();return Gn.indexOf(h)>-1?h:x}function Gt(x,h){if(!(this instanceof Gt))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');h=h||{};var g=h.body;if(x instanceof Gt){if(x.bodyUsed)throw new TypeError("Already read");this.url=x.url,this.credentials=x.credentials,h.headers||(this.headers=new y(x.headers)),this.method=x.method,this.mode=x.mode,this.signal=x.signal,!g&&x._bodyInit!=null&&(g=x._bodyInit,x.bodyUsed=!0)}else this.url=String(x);if(this.credentials=h.credentials||this.credentials||"same-origin",(h.headers||!this.headers)&&(this.headers=new y(h.headers)),this.method=Wn(h.method||this.method||"GET"),this.mode=h.mode||this.mode||null,this.signal=h.signal||this.signal||function(){if("AbortController"in c){var k=new AbortController;return k.signal}}(),this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&g)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(g),(this.method==="GET"||this.method==="HEAD")&&(h.cache==="no-store"||h.cache==="no-cache")){var C=/([?&])_=[^&]*/;if(C.test(this.url))this.url=this.url.replace(C,"$1_="+new Date().getTime());else{var T=/\?/;this.url+=(T.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}Gt.prototype.clone=function(){return new Gt(this,{body:this._bodyInit})};function Jn(x){var h=new FormData;return x.trim().split("&").forEach(function(g){if(g){var C=g.split("="),T=C.shift().replace(/\+/g," "),k=C.join("=").replace(/\+/g," ");h.append(decodeURIComponent(T),decodeURIComponent(k))}}),h}function Kn(x){var h=new y,g=x.replace(/\r?\n[\t ]+/g," ");return g.split("\r").map(function(C){return C.indexOf(`
`)===0?C.substr(1,C.length):C}).forEach(function(C){var T=C.split(":"),k=T.shift().trim();if(k){var Ps=T.join(":").trim();try{h.append(k,Ps)}catch(ra){console.warn("Response "+ra.message)}}}),h}il.call(Gt.prototype);function xt(x,h){if(!(this instanceof xt))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(h||(h={}),this.type="default",this.status=h.status===void 0?200:h.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=h.statusText===void 0?"":""+h.statusText,this.headers=new y(h.headers),this.url=h.url||"",this._initBody(x)}il.call(xt.prototype),xt.prototype.clone=function(){return new xt(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new y(this.headers),url:this.url})},xt.error=function(){var x=new xt(null,{status:200,statusText:""});return x.ok=!1,x.status=0,x.type="error",x};var Yn=[301,302,303,307,308];xt.redirect=function(x,h){if(Yn.indexOf(h)===-1)throw new RangeError("Invalid status code");return new xt(null,{status:h,headers:{location:x}})},o.DOMException=c.DOMException;try{new o.DOMException}catch{o.DOMException=function(h,g){this.message=h,this.name=g;var C=Error(h);this.stack=C.stack},o.DOMException.prototype=Object.create(Error.prototype),o.DOMException.prototype.constructor=o.DOMException}function na(x,h){return new Promise(function(g,C){var T=new Gt(x,h);if(T.signal&&T.signal.aborted)return C(new o.DOMException("Aborted","AbortError"));var k=new XMLHttpRequest;function Ps(){k.abort()}k.onload=function(){var N={statusText:k.statusText,headers:Kn(k.getAllResponseHeaders()||"")};T.url.indexOf("file://")===0&&(k.status<200||k.status>599)?N.status=200:N.status=k.status,N.url="responseURL"in k?k.responseURL:N.headers.get("X-Request-URL");var ne="response"in k?k.response:k.responseText;setTimeout(function(){g(new xt(ne,N))},0)},k.onerror=function(){setTimeout(function(){C(new TypeError("Network request failed"))},0)},k.ontimeout=function(){setTimeout(function(){C(new TypeError("Network request timed out"))},0)},k.onabort=function(){setTimeout(function(){C(new o.DOMException("Aborted","AbortError"))},0)};function ra(N){try{return N===""&&c.location.href?c.location.href:N}catch{return N}}if(k.open(T.method,ra(T.url),!0),T.credentials==="include"?k.withCredentials=!0:T.credentials==="omit"&&(k.withCredentials=!1),"responseType"in k&&(p.blob?k.responseType="blob":p.arrayBuffer&&(k.responseType="arraybuffer")),h&&typeof h.headers=="object"&&!(h.headers instanceof y||c.Headers&&h.headers instanceof c.Headers)){var ol=[];Object.getOwnPropertyNames(h.headers).forEach(function(N){ol.push(K(N)),k.setRequestHeader(N,G(h.headers[N]))}),T.headers.forEach(function(N,ne){ol.indexOf(ne)===-1&&k.setRequestHeader(ne,N)})}else T.headers.forEach(function(N,ne){k.setRequestHeader(ne,N)});T.signal&&(T.signal.addEventListener("abort",Ps),k.onreadystatechange=function(){k.readyState===4&&T.signal.removeEventListener("abort",Ps)}),k.send(typeof T._bodyInit>"u"?null:T._bodyInit)})}return na.polyfill=!0,c.fetch||(c.fetch=na,c.Headers=y,c.Request=Gt,c.Response=xt),o.Headers=y,o.Request=Gt,o.Response=xt,o.fetch=na,o})({})})(a),a.fetch.ponyfill=!0,delete a.fetch.polyfill;var l=s.fetch?s:a;t=l.fetch,t.default=l.fetch,t.fetch=l.fetch,t.Headers=l.Headers,t.Request=l.Request,t.Response=l.Response,e.exports=t})(Aa,Aa.exports);var Ys=Aa.exports;let Ee;if(typeof queueMicrotask<"u")Ee=queueMicrotask;else{const e=Promise.resolve();Ee=t=>{e.then(t)}}var nt,mt,tt,ta,Tn;class to{constructor(t){u(this,ta);u(this,nt);u(this,mt);u(this,tt);d(this,nt,new Uint8Array(new ArrayBuffer(t))),d(this,mt,0),d(this,tt,0)}get length(){return n(this,tt)-n(this,mt)}data(){return n(this,nt).slice(n(this,mt),n(this,tt))}push(t){f(this,ta,Tn).call(this,t.byteLength),n(this,nt).set(t,n(this,tt)),d(this,tt,n(this,tt)+t.byteLength)}shift(t){d(this,mt,n(this,mt)+t)}}nt=new WeakMap,mt=new WeakMap,tt=new WeakMap,ta=new WeakSet,Tn=function(t){if(n(this,tt)+t<=n(this,nt).byteLength)return;const s=n(this,tt)-n(this,mt);if(s+t<=n(this,nt).byteLength&&2*n(this,tt)>=n(this,nt).byteLength)n(this,nt).copyWithin(0,n(this,mt),n(this,tt));else{let a=n(this,nt).byteLength;do a*=2;while(s+t>a);const l=new Uint8Array(new ArrayBuffer(a));l.set(n(this,nt).slice(n(this,mt),n(this,tt)),0),d(this,nt,l)}d(this,tt,s),d(this,mt,0)};function eo(e){const t=yt(e.baton),s=yt(e.base_url),a=le(e.results,so);return{baton:t,baseUrl:s,results:a}}function so(e){const t=wt(e.type);if(t==="ok")return{type:"ok",response:ao(V(e.response))};if(t==="error")return{type:"error",error:ts(V(e.error))};throw new w("Unexpected type of StreamResult")}function ao(e){const t=wt(e.type);if(t==="close")return{type:"close"};if(t==="execute")return{type:"execute",result:Ua(V(e.result))};if(t==="batch")return{type:"batch",result:mn(V(e.result))};if(t==="sequence")return{type:"sequence"};if(t==="describe")return{type:"describe",result:vn(V(e.result))};if(t==="store_sql")return{type:"store_sql"};if(t==="close_sql")return{type:"close_sql"};if(t==="get_autocommit")return{type:"get_autocommit",isAutocommit:ms(e.is_autocommit)};throw new w("Unexpected type of StreamResponse")}function lo(e){const t=yt(e.baton),s=yt(e.base_url);return{baton:t,baseUrl:s}}const no={default(){return{baton:void 0,baseUrl:void 0,results:[]}},1(e,t){t.baton=e.string()},2(e,t){t.baseUrl=e.string()},3(e,t){t.results.push(e.message(ro))}},ro={default(){return{type:"none"}},1(e){return{type:"ok",response:e.message(io)}},2(e){return{type:"error",error:e.message(Et)}}},io={default(){return{type:"none"}},1(e){return{type:"close"}},2(e){return e.message(oo)},3(e){return e.message(co)},4(e){return{type:"sequence"}},5(e){return e.message(po)},6(e){return{type:"store_sql"}},7(e){return{type:"close_sql"}},8(e){return e.message(xo)}},oo={default(){return{type:"execute",result:es.default()}},1(e,t){t.result=e.message(es)}},co={default(){return{type:"batch",result:Js.default()}},1(e,t){t.result=e.message(Js)}},po={default(){return{type:"describe",result:Ks.default()}},1(e,t){t.result=e.message(Ks)}},xo={default(){return{type:"get_autocommit",isAutocommit:!1}},1(e,t){t.isAutocommit=e.bool()}},uo={default(){return{baton:void 0,baseUrl:void 0}},1(e,t){t.baton=e.string()},2(e,t){t.baseUrl=e.string()}};var ys,me,Ot,Rt,Dt,Be,Ht,Ra,qn,Mn;class fo extends pn{constructor(s,a){super();u(this,Ht);u(this,ys);u(this,me);u(this,Ot);u(this,Rt);u(this,Dt);u(this,Be);d(this,ys,s),d(this,me,a),d(this,Ot,void 0),d(this,Rt,new to(16*1024)),d(this,Dt,void 0),d(this,Be,!1)}async open(s){if(s.body===null)throw new w("No response body for cursor request");d(this,Ot,s.body[Symbol.asyncIterator]());const a=await f(this,Ht,Ra).call(this,lo,uo);if(a===void 0)throw new w("Empty response to cursor request");return a}next(){return f(this,Ht,Ra).call(this,gn,Sn)}close(){this._setClosed(new M("Cursor was manually closed"))}_setClosed(s){n(this,Dt)===void 0&&(d(this,Dt,s),n(this,ys)._cursorClosed(this),n(this,Ot)!==void 0&&n(this,Ot).return())}get closed(){return n(this,Dt)!==void 0}}ys=new WeakMap,me=new WeakMap,Ot=new WeakMap,Rt=new WeakMap,Dt=new WeakMap,Be=new WeakMap,Ht=new WeakSet,Ra=async function(s,a){for(;;){if(n(this,Be))return;if(n(this,Dt)!==void 0)throw new dt("Cursor is closed",n(this,Dt));if(n(this,me)==="json"){const o=f(this,Ht,qn).call(this);if(o!==void 0){const c=new TextDecoder().decode(o),p=JSON.parse(c);return Pa(p,s)}}else if(n(this,me)==="protobuf"){const o=f(this,Ht,Mn).call(this);if(o!==void 0)return ea(o,a)}else throw $(n(this,me),"Impossible encoding");if(n(this,Ot)===void 0)throw new ae("Attempted to read from HTTP cursor before it was opened");const{value:l,done:i}=await n(this,Ot).next();if(i&&n(this,Rt).length===0)d(this,Be,!0);else{if(i)throw new w("Unexpected end of cursor stream");n(this,Rt).push(l)}}},qn=function(){const s=n(this,Rt).data(),l=s.indexOf(10);if(l<0)return;const i=s.slice(0,l);return n(this,Rt).shift(l+1),i},Mn=function(){const s=n(this,Rt).data();let a=0,l=0;for(;;){if(l>=s.byteLength)return;const o=s[l];if(a|=(o&127)<<7*l,l+=1,!(o&128))break}if(s.byteLength<l+a)return;const i=s.slice(l,l+a);return n(this,Rt).shift(l+a),i};function ho(e,t){t.baton!==void 0&&e.string("baton",t.baton),e.arrayObjects("requests",t.requests,bo)}function bo(e,t){if(e.stringRaw("type",t.type),t.type!=="close"){if(t.type==="execute")e.object("stmt",t.stmt,Da);else if(t.type==="batch")e.object("batch",t.batch,Ws);else if(t.type==="sequence")t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="describe")t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="store_sql")e.number("sql_id",t.sqlId),e.string("sql",t.sql);else if(t.type==="close_sql")e.number("sql_id",t.sqlId);else if(t.type!=="get_autocommit")throw $(t,"Impossible type of StreamRequest")}}function mo(e,t){t.baton!==void 0&&e.string("baton",t.baton),e.object("batch",t.batch,Ws)}function go(e,t){t.baton!==void 0&&e.string(1,t.baton);for(const s of t.requests)e.message(2,s,vo)}function vo(e,t){if(t.type==="close")e.message(1,t,wo);else if(t.type==="execute")e.message(2,t,yo);else if(t.type==="batch")e.message(3,t,ko);else if(t.type==="sequence")e.message(4,t,So);else if(t.type==="describe")e.message(5,t,_o);else if(t.type==="store_sql")e.message(6,t,Ao);else if(t.type==="close_sql")e.message(7,t,Ro);else if(t.type==="get_autocommit")e.message(8,t,Co);else throw $(t,"Impossible type of StreamRequest")}function wo(e,t){}function yo(e,t){e.message(1,t.stmt,Na)}function ko(e,t){e.message(1,t.batch,sa)}function So(e,t){t.sql!==void 0&&e.string(1,t.sql),t.sqlId!==void 0&&e.int32(2,t.sqlId)}function _o(e,t){t.sql!==void 0&&e.string(1,t.sql),t.sqlId!==void 0&&e.int32(2,t.sqlId)}function Ao(e,t){e.int32(1,t.sqlId),e.string(2,t.sql)}function Ro(e,t){e.int32(1,t.sqlId)}function Co(e,t){}function Io(e,t){t.baton!==void 0&&e.string(1,t.baton),e.message(2,t.batch,sa)}var Nt,Xt,Ue,ks,Ve,Zt,gt,te,Bt,Ut,ee,Ct,Fe,S,Wt,Ca,oe,$n,jn,Ia,Ln,Pn,Ea;class Eo extends dn{constructor(s,a,l,i,o){super(s.intMode);u(this,S);u(this,Nt);u(this,Xt);u(this,Ue);u(this,ks);u(this,Ve);u(this,Zt);u(this,gt);u(this,te);u(this,Bt);u(this,Ut);u(this,ee);u(this,Ct);u(this,Fe);d(this,Nt,s),d(this,Xt,a.toString()),d(this,Ue,l),d(this,ks,i),d(this,Ve,o),d(this,Zt,void 0),d(this,gt,new Gs),d(this,te,!1),d(this,Ut,!1),d(this,ee,!1),d(this,Ct,void 0),d(this,Fe,new cs)}client(){return n(this,Nt)}_sqlOwner(){return this}storeSql(s){const a=n(this,Fe).alloc();return f(this,S,Wt).call(this,{type:"store_sql",sqlId:a,sql:s}).then(()=>{},l=>this._setClosed(l)),new Oa(this,a)}_closeSql(s){n(this,Ct)===void 0&&f(this,S,Wt).call(this,{type:"close_sql",sqlId:s}).then(()=>n(this,Fe).free(s),a=>this._setClosed(a))}_execute(s){return f(this,S,Wt).call(this,{type:"execute",stmt:s}).then(a=>a.result)}_batch(s){return f(this,S,Wt).call(this,{type:"batch",batch:s}).then(a=>a.result)}_describe(s){return f(this,S,Wt).call(this,{type:"describe",sql:s.sql,sqlId:s.sqlId}).then(a=>a.result)}_sequence(s){return f(this,S,Wt).call(this,{type:"sequence",sql:s.sql,sqlId:s.sqlId}).then(a=>{})}getAutocommit(){return n(this,Nt)._ensureVersion(3,"getAutocommit()"),f(this,S,Wt).call(this,{type:"get_autocommit"}).then(s=>s.isAutocommit)}_openCursor(s){return new Promise((a,l)=>{f(this,S,Ca).call(this,{type:"cursor",batch:s,cursorCallback:a,errorCallback:l})})}_cursorClosed(s){if(s!==n(this,Bt))throw new ae("Cursor was closed, but it was not associated with the stream");d(this,Bt,void 0),Ee(()=>f(this,S,oe).call(this))}close(){this._setClosed(new M("Stream was manually closed"))}closeGracefully(){d(this,Ut,!0),Ee(()=>f(this,S,oe).call(this))}get closed(){return n(this,Ct)!==void 0||n(this,Ut)}_setClosed(s){if(n(this,Ct)===void 0){for(d(this,Ct,s),n(this,Bt)!==void 0&&n(this,Bt)._setClosed(s),n(this,Nt)._streamClosed(this);;){const a=n(this,gt).shift();if(a!==void 0)a.errorCallback(s);else break}(n(this,Zt)!==void 0||n(this,te))&&!n(this,ee)&&(n(this,gt).push({type:"pipeline",request:{type:"close"},responseCallback:()=>{},errorCallback:()=>{}}),d(this,ee,!0),Ee(()=>f(this,S,oe).call(this)))}}}Nt=new WeakMap,Xt=new WeakMap,Ue=new WeakMap,ks=new WeakMap,Ve=new WeakMap,Zt=new WeakMap,gt=new WeakMap,te=new WeakMap,Bt=new WeakMap,Ut=new WeakMap,ee=new WeakMap,Ct=new WeakMap,Fe=new WeakMap,S=new WeakSet,Wt=function(s){return new Promise((a,l)=>{f(this,S,Ca).call(this,{type:"pipeline",request:s,responseCallback:a,errorCallback:l})})},Ca=function(s){if(n(this,Ct)!==void 0)throw new dt("Stream is closed",n(this,Ct));if(n(this,Ut))throw new dt("Stream is closing",void 0);n(this,gt).push(s),Ee(()=>f(this,S,oe).call(this))},oe=function(){if(n(this,te)||n(this,Bt)!==void 0)return;if(n(this,Ut)&&n(this,gt).length===0){this._setClosed(new M("Stream was gracefully closed"));return}const s=n(this,Nt)._endpoint;if(s===void 0){n(this,Nt)._endpointPromise.then(()=>f(this,S,oe).call(this),l=>this._setClosed(l));return}const a=n(this,gt).shift();if(a!==void 0)if(a.type==="pipeline"){const l=[a];for(;;){const i=n(this,gt).first();if(i!==void 0&&i.type==="pipeline")l.push(i),n(this,gt).shift();else if(i===void 0&&n(this,Ut)&&!n(this,ee)){l.push({type:"pipeline",request:{type:"close"},responseCallback:()=>{},errorCallback:()=>{}}),d(this,ee,!0);break}else break}f(this,S,$n).call(this,s,l)}else if(a.type==="cursor")f(this,S,jn).call(this,s,a);else throw $(a,"Impossible type of QueueEntry")},$n=function(s,a){f(this,S,Ia).call(this,()=>f(this,S,Ln).call(this,a,s),l=>qo(l,s.encoding),l=>l.baton,l=>l.baseUrl,l=>To(a,l),l=>a.forEach(i=>i.errorCallback(l)))},jn=function(s,a){const l=new fo(this,s.encoding);d(this,Bt,l),f(this,S,Ia).call(this,()=>f(this,S,Pn).call(this,a,s),i=>l.open(i),i=>i.baton,i=>i.baseUrl,i=>a.cursorCallback(l),i=>a.errorCallback(i))},Ia=function(s,a,l,i,o,c){let p;try{const b=s();p=n(this,ks)(b)}catch(b){p=Promise.reject(b)}d(this,te,!0),p.then(b=>b.ok?a(b):Mo(b).then(m=>{throw m})).then(b=>{d(this,Zt,l(b)),d(this,Xt,i(b)??n(this,Xt)),o(b)}).catch(b=>{this._setClosed(b),c(b)}).finally(()=>{d(this,te,!1),f(this,S,oe).call(this)})},Ln=function(s,a){return f(this,S,Ea).call(this,new URL(a.pipelinePath,n(this,Xt)),{baton:n(this,Zt),requests:s.map(l=>l.request)},a.encoding,ho,go)},Pn=function(s,a){if(a.cursorPath===void 0)throw new Xe(`Cursors are supported only on protocol version 3 and higher, but the HTTP server only supports version ${a.version}.`);return f(this,S,Ea).call(this,new URL(a.cursorPath,n(this,Xt)),{baton:n(this,Zt),batch:s.batch},a.encoding,mo,Io)},Ea=function(s,a,l,i,o){let c,p;if(l==="json")c=Zl(a,i),p="application/json";else if(l==="protobuf")c=en(a,o),p="application/x-protobuf";else throw $(l,"Impossible encoding");const b=new Ys.Headers;return b.set("content-type",p),n(this,Ue)!==void 0&&b.set("authorization",`Bearer ${n(this,Ue)}`),n(this,Ve)!==void 0&&b.set("x-turso-encryption-key",n(this,Ve)),new Ys.Request(s.toString(),{method:"POST",headers:b,body:c})};function To(e,t){if(t.results.length!==e.length)throw new w("Server returned unexpected number of pipeline results");for(let s=0;s<e.length;++s){const a=t.results[s],l=e[s];if(a.type==="ok"){if(a.response.type!==l.request.type)throw new w("Received unexpected type of response");l.responseCallback(a.response)}else if(a.type==="error")l.errorCallback(Ze(a.error));else throw a.type==="none"?new w("Received unrecognized type of StreamResult"):$(a,"Received impossible type of StreamResult")}}async function qo(e,t){var s;if(t==="json"){const a=await e.json();return Pa(a,eo)}if(t==="protobuf"){const a=await e.arrayBuffer();return ea(new Uint8Array(a),no)}throw await((s=e.body)==null?void 0:s.cancel()),$(t,"Impossible encoding")}async function Mo(e){var a;const t=e.headers.get("content-type")??"text/plain";let s=`Server returned HTTP status ${e.status}`;if(t==="application/json"){const l=await e.json();return"message"in l?Ze(l):new Bs(s,e.status)}if(t==="text/plain"){const l=(await e.text()).trim();return l!==""&&(s+=`: ${l}`),new Bs(s,e.status)}return await((a=e.body)==null?void 0:a.cancel()),new Bs(s,e.status)}const $o=[{versionPath:"v3-protobuf",pipelinePath:"v3-protobuf/pipeline",cursorPath:"v3-protobuf/cursor",version:3,encoding:"protobuf"}],Ta={versionPath:"v2",pipelinePath:"v2/pipeline",cursorPath:void 0,version:2,encoding:"json"};var He,Ss,ze,_s,Vt,ge,Ge,Hs,Ml;let jo=(Ml=class extends Yl{constructor(s,a,l,i,o=2){super();u(this,Ge);u(this,He);u(this,Ss);u(this,ze);u(this,_s);u(this,Vt);u(this,ge);_(this,"_endpointPromise");_(this,"_endpoint");d(this,He,s),d(this,Ss,a),d(this,ze,l??Ys.fetch),d(this,_s,i),d(this,Vt,void 0),d(this,ge,new Set),o==3?(this._endpointPromise=Lo(n(this,ze),n(this,He)),this._endpointPromise.then(c=>this._endpoint=c,c=>f(this,Ge,Hs).call(this,c))):(this._endpointPromise=Promise.resolve(Ta),this._endpointPromise.then(c=>this._endpoint=c,c=>f(this,Ge,Hs).call(this,c)))}async getVersion(){return this._endpoint!==void 0?this._endpoint.version:(await this._endpointPromise).version}_ensureVersion(s,a){if(!(s<=Ta.version)){if(this._endpoint===void 0)throw new Xe(`${a} is supported only on protocol version ${s} and higher, but the version supported by the HTTP server is not yet known. Use Client.getVersion() to wait until the version is available.`);if(this._endpoint.version<s)throw new Xe(`${a} is supported only on protocol version ${s} and higher, but the HTTP server only supports version ${this._endpoint.version}.`)}}openStream(){if(n(this,Vt)!==void 0)throw new dt("Client is closed",n(this,Vt));const s=new Eo(this,n(this,He),n(this,Ss),n(this,ze),n(this,_s));return n(this,ge).add(s),s}_streamClosed(s){n(this,ge).delete(s)}close(){f(this,Ge,Hs).call(this,new M("Client was manually closed"))}get closed(){return n(this,Vt)!==void 0}},He=new WeakMap,Ss=new WeakMap,ze=new WeakMap,_s=new WeakMap,Vt=new WeakMap,ge=new WeakMap,Ge=new WeakSet,Hs=function(s){if(n(this,Vt)===void 0){d(this,Vt,s);for(const a of Array.from(n(this,ge)))a._setClosed(new dt("Client was closed",s))}},Ml);async function Lo(e,t){const s=e;for(const a of $o){const l=new URL(a.versionPath,t),i=new Ys.Request(l.toString(),{method:"GET"}),o=await s(i);if(await o.arrayBuffer(),o.ok)return a}return Ta}function On(e,t,s=2){if(typeof Ie>"u")throw new Xl("WebSockets are not supported in this environment");var a=void 0;s==3?a=Array.from(_n.keys()):a=Array.from(Qi.keys());const l=new Ie(e,a);return new Xi(l,t)}function vl(e,t,s,a,l=2){return new jo(e instanceof URL?e:new URL(e),t,s,a,l)}var We,Ft,J;class Dn{constructor(t,s){u(this,We);u(this,Ft);u(this,J);d(this,We,t),d(this,Ft,s),d(this,J,void 0)}execute(t){return this.batch([t]).then(s=>s[0])}async batch(t){const s=this._getStream();if(s.closed)throw new A("Cannot execute statements because the transaction is closed","TRANSACTION_CLOSED");try{const a=t.map(ke);let l;if(n(this,J)===void 0){this._getSqlCache().apply(a);const o=s.batch(n(this,Ft)>=3),c=o.step(),p=c.run(fa(n(this,We)));let b=c;l=a.map(m=>{const E=o.step().condition(et.ok(b));n(this,Ft)>=3&&E.condition(et.not(et.isAutocommit(o)));const K=E.query(m);return K.catch(()=>{}),b=E,K}),d(this,J,o.execute().then(()=>p).then(()=>{}));try{await n(this,J)}catch(m){throw this.close(),m}}else{n(this,Ft)<3&&await n(this,J),this._getSqlCache().apply(a);const o=s.batch(n(this,Ft)>=3);let c;l=a.map(p=>{const b=o.step();c!==void 0&&b.condition(et.ok(c)),n(this,Ft)>=3&&b.condition(et.not(et.isAutocommit(o)));const m=b.query(p);return m.catch(()=>{}),c=b,m}),await o.execute()}const i=[];for(let o=0;o<l.length;o++)try{const c=await l[o];if(c===void 0)throw new Te("Statement in a transaction was not executed, probably because the transaction has been rolled back",o,"TRANSACTION_CLOSED");i.push(aa(c))}catch(c){if(c instanceof Te)throw c;const p=q(c);throw p instanceof A?new Te(p.message,o,p.code,p.extendedCode,p.rawCode,p.cause instanceof Error?p.cause:void 0):p}return i}catch(a){throw q(a)}}async executeMultiple(t){const s=this._getStream();if(s.closed)throw new A("Cannot execute statements because the transaction is closed","TRANSACTION_CLOSED");try{if(n(this,J)===void 0){d(this,J,s.run(fa(n(this,We))).then(()=>{}));try{await n(this,J)}catch(a){throw this.close(),a}}else await n(this,J);await s.sequence(t)}catch(a){throw q(a)}}async rollback(){try{const t=this._getStream();if(t.closed||n(this,J)===void 0)return;const s=t.run("ROLLBACK").catch(a=>{throw q(a)});t.closeGracefully(),await s}catch(t){throw q(t)}finally{this.close()}}async commit(){try{const t=this._getStream();if(t.closed)throw new A("Cannot commit the transaction because it is already closed","TRANSACTION_CLOSED");if(n(this,J)!==void 0)await n(this,J);else return;const s=t.run("COMMIT").catch(a=>{throw q(a)});t.closeGracefully(),await s}catch(t){throw q(t)}finally{this.close()}}}We=new WeakMap,Ft=new WeakMap,J=new WeakMap;async function Qs(e,t,s,a,l=!1){l&&s.step().run("PRAGMA foreign_keys=off");const i=s.step(),o=i.run(fa(e));let c=i;const p=a.map(G=>{const I=s.step().condition(et.ok(c));t>=3&&I.condition(et.not(et.isAutocommit(s)));const y=I.query(G);return c=I,y}),b=s.step().condition(et.ok(c));t>=3&&b.condition(et.not(et.isAutocommit(s)));const m=b.run("COMMIT");s.step().condition(et.not(et.ok(b))).run("ROLLBACK").catch(G=>{}),l&&s.step().run("PRAGMA foreign_keys=on"),await s.execute();const K=[];await o;for(let G=0;G<p.length;G++)try{const I=await p[G];if(I===void 0)throw new Te("Statement in a batch was not executed, probably because the transaction has been rolled back",G,"TRANSACTION_CLOSED");K.push(aa(I))}catch(I){if(I instanceof Te)throw I;const y=q(I);throw y instanceof A?new Te(y.message,G,y.code,y.extendedCode,y.rawCode,y.cause instanceof Error?y.cause:void 0):y}return await m,K}function ke(e){let t,s;Array.isArray(e)?[t,s]=e:typeof e=="string"?t=e:(t=e.sql,s=e.args);const a=new on(t);if(s)if(Array.isArray(s))a.bindIndexes(s);else for(const[l,i]of Object.entries(s))a.bindName(l,i);return a}function aa(e){const t=e.columnNames.map(o=>o??""),s=e.columnDecltypes.map(o=>o??""),a=e.rows,l=e.affectedRowCount,i=e.lastInsertRowid!==void 0?e.lastInsertRowid:void 0;return new zr(t,s,a,l,i)}function q(e){if(e instanceof M){const t=Nn(e);return new A(e.message,t,void 0,void 0,e)}return e}function Nn(e){return e instanceof Ql&&e.code!==void 0?e.code:e instanceof w?"HRANA_PROTO_ERROR":e instanceof dt?e.cause instanceof M?Nn(e.cause):"HRANA_CLOSED_ERROR":e instanceof ha?"HRANA_WEBSOCKET_ERROR":e instanceof Bs?"SERVER_ERROR":e instanceof Xe?"PROTOCOL_VERSION_ERROR":e instanceof ae?"INTERNAL_ERROR":"UNKNOWN"}var As,It;class Va{constructor(t,s){u(this,As);u(this,It);_(this,"capacity");d(this,As,t),d(this,It,new Po),this.capacity=s}apply(t){if(this.capacity<=0)return;const s=new Set;for(const a of t){if(typeof a.sql!="string")continue;const l=a.sql;if(l.length>=5e3)continue;let i=n(this,It).get(l);if(i===void 0){for(;n(this,It).size+1>this.capacity;){const[o,c]=n(this,It).peekLru();if(s.has(c))break;c.close(),n(this,It).delete(o)}n(this,It).size+1<=this.capacity&&(i=n(this,As).storeSql(l),n(this,It).set(l,i))}i!==void 0&&(a.sql=i,s.add(i))}}}As=new WeakMap,It=new WeakMap;var vt;class Po{constructor(){u(this,vt);d(this,vt,new Map)}get(t){const s=n(this,vt).get(t);return s!==void 0&&(n(this,vt).delete(t),n(this,vt).set(t,s)),s}set(t,s){n(this,vt).set(t,s)}peekLru(){for(const t of n(this,vt).entries())return t}delete(t){n(this,vt).delete(t)}get size(){return n(this,vt).size}}vt=new WeakMap;function Oo(e){var t=0,s=[];function a(){t--,t<e&&l()}function l(){var p=s.shift();c.queue=s.length,p&&o(p.fn).then(p.resolve).catch(p.reject)}function i(p){return new Promise(function(b,m){s.push({fn:p,resolve:b,reject:m}),c.queue=s.length})}function o(p){t++;try{return Promise.resolve(p()).then(function(b){return a(),b},function(b){throw a(),b})}catch(b){return a(),Promise.reject(b)}}var c=function(p){return t>=e?i(p):o(p)};return c}function Do(e,t){var s=!1,a=this;return Promise.all(e.map(function(){var l=arguments;return a(function(){if(!s)return t.apply(void 0,l).catch(function(i){throw s=!0,i})})}))}function wl(e){return e.queue=0,e.map=Do,e}var No=function(e){return wl(e?Oo(e):function(t){return t()})};const Bn=Zi(No);function Bo(e){if(e.scheme!=="wss"&&e.scheme!=="ws")throw new A(`The WebSocket client supports only "libsql:", "wss:" and "ws:" URLs, got ${JSON.stringify(e.scheme+":")}. For more information, please read ${bs}`,"URL_SCHEME_NOT_SUPPORTED");if(e.encryptionKey!==void 0)throw new A("Encryption key is not supported by the remote client.","ENCRYPTION_KEY_NOT_SUPPORTED");if(e.scheme==="ws"&&e.tls)throw new A('A "ws:" URL cannot opt into TLS by using ?tls=1',"URL_INVALID");if(e.scheme==="wss"&&!e.tls)throw new A('A "wss:" URL cannot opt out of TLS by using ?tls=0',"URL_INVALID");const t=pa(e.scheme,e.authority,e.path);let s;try{s=On(t,e.authToken)}catch(a){if(a instanceof Xl){const l=e.scheme==="wss"?"https":"http",i=pa(l,e.authority,e.path);throw new A(`This environment does not support WebSockets, please switch to the HTTP client by using a "${l}:" URL (${JSON.stringify(i)}). For more information, please read ${bs}`,"WEBSOCKETS_NOT_SUPPORTED")}throw q(a)}return new Vo(s,t,e.authToken,e.intMode,e.concurrency)}const Uo=60*1e3,yl=100;var Rs,Cs,Is,P,H,Ma,Es,rt,Ce,xs;class Vo{constructor(t,s,a,l,i){u(this,rt);u(this,Rs);u(this,Cs);u(this,Is);u(this,P);u(this,H);_(this,"closed");_(this,"protocol");u(this,Ma);u(this,Es);d(this,Rs,s),d(this,Cs,a),d(this,Is,l),d(this,P,f(this,rt,xs).call(this,t)),d(this,H,void 0),this.closed=!1,this.protocol="ws",d(this,Es,Bn(i))}async limit(t){return n(this,Es).call(this,t)}async execute(t,s){let a;return typeof t=="string"?a={sql:t,args:s||[]}:a=t,this.limit(async()=>{const l=await f(this,rt,Ce).call(this);try{const i=ke(a);l.conn.sqlCache.apply([i]);const o=l.stream.query(i);l.stream.closeGracefully();const c=await o;return aa(c)}catch(i){throw q(i)}finally{this._closeStream(l)}})}async batch(t,s="deferred"){return this.limit(async()=>{const a=await f(this,rt,Ce).call(this);try{const i=t.map(m=>Array.isArray(m)?{sql:m[0],args:m[1]||[]}:m).map(ke),o=await a.conn.client.getVersion();a.conn.sqlCache.apply(i);const c=a.stream.batch(o>=3);return await Qs(s,o,c,i)}catch(l){throw q(l)}finally{this._closeStream(a)}})}async migrate(t){return this.limit(async()=>{const s=await f(this,rt,Ce).call(this);try{const a=t.map(ke),l=await s.conn.client.getVersion(),i=s.stream.batch(l>=3);return await Qs("deferred",l,i,a,!0)}catch(a){throw q(a)}finally{this._closeStream(s)}})}async transaction(t="write"){return this.limit(async()=>{const s=await f(this,rt,Ce).call(this);try{const a=await s.conn.client.getVersion();return new Fo(this,s,t,a)}catch(a){throw this._closeStream(s),q(a)}})}async executeMultiple(t){return this.limit(async()=>{const s=await f(this,rt,Ce).call(this);try{const a=s.stream.sequence(t);s.stream.closeGracefully(),await a}catch(a){throw q(a)}finally{this._closeStream(s)}})}sync(){throw new A("sync not supported in ws mode","SYNC_NOT_SUPPORTED")}async reconnect(){try{for(const a of Array.from(n(this,P).streamStates))try{a.stream.close()}catch{}n(this,P).client.close()}catch{}if(n(this,H)){try{n(this,H).client.close()}catch{}d(this,H,void 0)}const t=f(this,rt,xs).call(this),s=await t.client.getVersion();t.useSqlCache=s>=2,t.useSqlCache&&(t.sqlCache.capacity=yl),d(this,P,t),this.closed=!1}_closeStream(t){t.stream.close();const s=t.conn;s.streamStates.delete(t),s.streamStates.size===0&&s!==n(this,P)&&s.client.close()}close(){if(n(this,P).client.close(),this.closed=!0,n(this,H)){try{n(this,H).client.close()}catch{}d(this,H,void 0)}this.closed=!0}}Rs=new WeakMap,Cs=new WeakMap,Is=new WeakMap,P=new WeakMap,H=new WeakMap,Ma=new WeakMap,Es=new WeakMap,rt=new WeakSet,Ce=async function(){if(this.closed)throw new A("The client is closed","CLIENT_CLOSED");if(new Date().valueOf()-n(this,P).openTime.valueOf()>Uo&&n(this,H)===void 0){const l=f(this,rt,xs).call(this);d(this,H,l),l.client.getVersion().then(i=>{n(this,P)!==l&&n(this,P).streamStates.size===0&&n(this,P).client.close(),d(this,P,l),d(this,H,void 0)},i=>{d(this,H,void 0)})}if(n(this,P).client.closed)try{n(this,H)!==void 0?d(this,P,n(this,H)):d(this,P,f(this,rt,xs).call(this))}catch(l){throw q(l)}const a=n(this,P);try{a.useSqlCache===void 0&&(a.useSqlCache=await a.client.getVersion()>=2,a.useSqlCache&&(a.sqlCache.capacity=yl));const l=a.client.openStream();l.intMode=n(this,Is);const i={conn:a,stream:l};return a.streamStates.add(i),i}catch(l){throw q(l)}},xs=function(t){try{return t??(t=On(n(this,Rs),n(this,Cs))),{client:t,useSqlCache:void 0,sqlCache:new Va(t,0),openTime:new Date,streamStates:new Set}}catch(s){throw q(s)}};var Ts,se;class Fo extends Dn{constructor(s,a,l,i){super(l,i);u(this,Ts);u(this,se);d(this,Ts,s),d(this,se,a)}_getStream(){return n(this,se).stream}_getSqlCache(){return n(this,se).conn.sqlCache}close(){n(this,Ts)._closeStream(n(this,se))}get closed(){return n(this,se).stream.closed}}Ts=new WeakMap,se=new WeakMap;function Ho(e){if(e.scheme!=="https"&&e.scheme!=="http")throw new A(`The HTTP client supports only "libsql:", "https:" and "http:" URLs, got ${JSON.stringify(e.scheme+":")}. For more information, please read ${bs}`,"URL_SCHEME_NOT_SUPPORTED");if(e.encryptionKey!==void 0)throw new A("Encryption key is not supported by the remote client.","ENCRYPTION_KEY_NOT_SUPPORTED");if(e.scheme==="http"&&e.tls)throw new A('A "http:" URL cannot opt into TLS by using ?tls=1',"URL_INVALID");if(e.scheme==="https"&&!e.tls)throw new A('A "https:" URL cannot opt out of TLS by using ?tls=0',"URL_INVALID");const t=pa(e.scheme,e.authority,e.path);return new zo(t,e.authToken,e.intMode,e.fetch,e.concurrency,e.remoteEncryptionKey)}const Un=30;var O,Je,Ke,Ye,qs,Qe,Ms,$s;class zo{constructor(t,s,a,l,i,o){u(this,O);_(this,"protocol");u(this,Je);u(this,Ke);u(this,Ye);u(this,qs);u(this,Qe);u(this,Ms);u(this,$s);d(this,Je,t),d(this,Qe,s),d(this,Ke,a),d(this,Ye,l),d(this,qs,i),d(this,Ms,o),d(this,O,vl(n(this,Je),n(this,Qe),n(this,Ye),o)),n(this,O).intMode=n(this,Ke),this.protocol="http",d(this,$s,Bn(n(this,qs)))}async limit(t){return n(this,$s).call(this,t)}async execute(t,s){let a;return typeof t=="string"?a={sql:t,args:s||[]}:a=t,this.limit(async()=>{try{const l=ke(a);let i;const o=n(this,O).openStream();try{i=o.query(l)}finally{o.closeGracefully()}const c=await i;return aa(c)}catch(l){throw q(l)}})}async batch(t,s="deferred"){return this.limit(async()=>{try{const l=t.map(b=>Array.isArray(b)?{sql:b[0],args:b[1]||[]}:b).map(ke),i=await n(this,O).getVersion();let o;const c=n(this,O).openStream();try{new Va(c,Un).apply(l);const m=c.batch(!1);o=Qs(s,i,m,l)}finally{c.closeGracefully()}return await o}catch(a){throw q(a)}})}async migrate(t){return this.limit(async()=>{try{const s=t.map(ke),a=await n(this,O).getVersion();let l;const i=n(this,O).openStream();try{const c=i.batch(!1);l=Qs("deferred",a,c,s,!0)}finally{i.closeGracefully()}return await l}catch(s){throw q(s)}})}async transaction(t="write"){return this.limit(async()=>{try{const s=await n(this,O).getVersion();return new Go(n(this,O).openStream(),t,s)}catch(s){throw q(s)}})}async executeMultiple(t){return this.limit(async()=>{try{let s;const a=n(this,O).openStream();try{s=a.sequence(t)}finally{a.closeGracefully()}await s}catch(s){throw q(s)}})}sync(){throw new A("sync not supported in http mode","SYNC_NOT_SUPPORTED")}close(){n(this,O).close()}async reconnect(){try{this.closed||n(this,O).close()}finally{d(this,O,vl(n(this,Je),n(this,Qe),n(this,Ye),n(this,Ms))),n(this,O).intMode=n(this,Ke)}}get closed(){return n(this,O).closed}}O=new WeakMap,Je=new WeakMap,Ke=new WeakMap,Ye=new WeakMap,qs=new WeakMap,Qe=new WeakMap,Ms=new WeakMap,$s=new WeakMap;var ve,js;class Go extends Dn{constructor(s,a,l){super(a,l);u(this,ve);u(this,js);d(this,ve,s),d(this,js,new Va(s,Un))}_getStream(){return n(this,ve)}_getSqlCache(){return n(this,js)}close(){n(this,ve).close()}get closed(){return n(this,ve).closed}}ve=new WeakMap,js=new WeakMap;function Wo(e){return Jo(Jr(e))}function Jo(e){if(e.scheme==="ws"||e.scheme==="wss")return Bo(e);if(e.scheme==="http"||e.scheme==="https")return Ho(e);throw new A(`The client that uses Web standard APIs supports only "libsql:", "wss:", "ws:", "https:" and "http:" URLs, got ${JSON.stringify(e.scheme+":")}. For more information, please read ${bs}`,"URL_SCHEME_NOT_SUPPORTED")}const Ko={url:"libsql://retailer-os-digitalhues.aws-ap-south-1.turso.io",authToken:"eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAxODY2NzMsImlkIjoiNDcwMDliODAtYmJlYS00YzQ3LTk1MzQtY2NlYjg4OWUzYjFjIiwicmlkIjoiNTk1ODMwNWEtMjlkNy00OGU5LWJkNTctN2FiZWVjNzVjMWYwIn0.381aJkYkBtcCsSDyQkFNLZud9lOPi9TuT3uRZgLYS9BqrjLFb0Zc7P1qRWN0k16XkHQ7raDwhCUE9H1G8Q80BA"},Yo=Wo(Ko);async function Ae(e,t=[]){try{return(await Yo.execute({sql:e,args:t})).rows}catch(s){throw console.error("DB Query Error:",s,"SQL:",e),s}}const z={clients:{getAll:()=>Ae("SELECT * FROM customers"),add:e=>Ae("INSERT INTO customers (id, name, phone, email, joined_at, dob, location) VALUES (?, ?, ?, ?, ?, ?, ?)",[e.id,e.name,e.phone,e.email,new Date().toISOString(),e.dob,e.location])},sales:{getAll:()=>Ae("SELECT * FROM sales ORDER BY date DESC"),add:e=>Ae("INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status) VALUES (?, ?, ?, ?, ?, ?)",[e.id,e.customer_id,e.customer_name,e.date,e.total_amount,e.status]),addItem:e=>Ae("INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, imei) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",[e.id,e.sale_id,e.product_id,e.product_name,e.category,e.quantity,e.price,e.imei])},inventory:{getProducts:()=>Ae("SELECT * FROM products")}};async function zt(){console.group("🔄 Synchronizing Data with Turso...");try{const[e,t,s,a]=await Promise.all([z.query("SELECT * FROM customers"),z.query("SELECT * FROM products"),z.query("SELECT * FROM sales ORDER BY date DESC"),z.query("SELECT * FROM sale_items")]);window._db_cache={customers:e||[],products:t||[],sales:s||[],saleItems:a||[],inventoryLogs:[],inquiries:[],repairs:[],marketplace:[],schemes:[],campaigns:[],bookings:[],automations:[]},console.log("✅ Sync Complete. Tables cached.")}catch(e){console.error("❌ Data Sync Failed:",e)}finally{console.groupEnd(),v(!1)}}window.getCache=()=>window._db_cache||{customers:[],sales:[],products:[],inventoryLogs:[]};function qa(e){return`
        <header class="p-4 sm:p-8 pb-4 shrink-0">
            <div class="flex items-center justify-between mb-6">
                <button onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                    <span class="material-icons-outlined">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900">Sales Desk</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">${e==="new-sale"?"New Transaction":"Transaction History"}</p>
                </div>
                <button class="p-2 text-slate-400 hover:text-slate-900"><span class="material-symbols-outlined text-xl">${e==="new-sale"?"more_horiz":"search"}</span></button>
            </div>
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                <button onclick="setTab('new-sale')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${e==="new-sale"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">New Sale</button>
                <button onclick="setTab('history')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${e==="history"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">History</button>
            </div>
        </header>
    `}let ct=[],hs=null,gs="Select Customer";async function Qo(e){const s=window.getCache().products.find(a=>a.id===e);s&&(ct.push({...s,qty:1}),window.triggerRender())}function Xo(e,t){hs=e,gs=t,window.triggerRender()}async function Zo(){if(ct.length===0||!hs){alert("Please select a customer and add items to cart.");return}const e=document.getElementById("complete-txn-btn");e.disabled=!0,e.innerHTML="Processing...";try{const t="ORD-"+Math.random().toString(36).substr(2,6).toUpperCase(),s=ct.reduce((a,l)=>a+l.mop,0);await z.sales.add({id:t,customer_id:hs,customer_name:gs,date:new Date().toISOString(),total_amount:s,status:"completed"});for(const a of ct)await z.sales.addItem({id:"ITEM-"+Math.random().toString(36).substr(2,8).toUpperCase(),sale_id:t,product_id:a.id,product_name:a.name,category:a.category,quantity:1,price:a.mop,imei:"N/A"});ct=[],hs=null,gs="Select Customer",await zt(),window.setTab("history"),window.setSalesHistoryId(t)}catch(t){console.error(t),alert("Error completing transaction: "+t.message),e.disabled=!1,e.innerHTML="Complete Transaction"}}window.selectSaleCustomer=Xo;window.addProductToCart=Qo;window.completeTransaction=Zo;window.getActiveCart=()=>ct;window.getSelectedCustomer=()=>({id:hs,name:gs});window.clearCart=()=>{ct=[],window.triggerRender()};window.removeFromCart=e=>{ct.splice(e,1),window.triggerRender()};window.saveDraft=()=>{window.triggerRender()};window.toggleCustomerDropdown=e=>{e&&e.stopPropagation();const t=document.getElementById("customer-dropdown-menu");t&&t.classList.toggle("hidden")};window.addNewCustomer=async()=>{const e=prompt("Enter Customer Name:");if(!e)return;const t=prompt("Enter Customer Phone:"),s="CUST-"+Math.random().toString(36).substr(2,5).toUpperCase();try{await z.query("INSERT INTO customers (id, name, phone, joined_at) VALUES (?, ?, ?, ?)",[s,e,t||"N/A",new Date().toISOString()]),await zt(),window.selectSaleCustomer(s,e)}catch(a){console.error("Failed to create customer",a),alert("Failed to create customer")}};document.addEventListener("click",e=>{const t=document.getElementById("customer-dropdown-menu"),s=document.getElementById("customer-dropdown-trigger");t&&!t.classList.contains("hidden")&&s&&!s.contains(e.target)&&!t.contains(e.target)&&t.classList.add("hidden")});function Vn(){var o,c;const e=window.getCache(),t=e.products||[],s=e.customers||[],a=((c=(o=document.getElementById("sales-item-search"))==null?void 0:o.value)==null?void 0:c.toLowerCase())||"",l=a?t.filter(p=>p.name.toLowerCase().includes(a)):[],i=ct.reduce((p,b)=>p+b.mop,0);return`
        ${qa("new-sale")}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 sm:space-y-8 pb-32 text-left">

            <section class="space-y-3 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Customer Details</h3>

                <div class="relative text-left">
                    <div id="customer-dropdown-trigger" onclick="window.toggleCustomerDropdown(event)" class="card p-5 flex items-center justify-between cursor-pointer hover:border-slate-300 transition-all text-left">
                        <div class="flex items-center gap-4 text-slate-900 text-left">
                            <span class="material-icons-outlined text-slate-400">person</span>
                            <span class="text-sm font-black text-left">${gs}</span>
                        </div>
                        <span class="material-icons-outlined text-slate-300">expand_more</span>
                    </div>
                    <!-- Dropdown Content -->
                    <div id="customer-dropdown-menu" class="hidden absolute top-full left-0 right-0 z-50 bg-white border border-slate-100 rounded-2xl shadow-2xl max-h-60 overflow-y-auto text-left mt-2 flex flex-col">
                        <div onclick="window.addNewCustomer()" class="p-4 bg-slate-50 border-b border-slate-100 cursor-pointer flex items-center gap-3 text-blue-600 hover:bg-slate-100 sticky top-0 z-10">
                            <span class="material-icons-outlined text-sm">add_circle</span>
                            <span class="text-xs font-black uppercase tracking-widest">Create New Customer</span>
                        </div>
                        ${s.length===0?`
                             <div class="p-4 text-center text-slate-400 text-xs font-bold">No existing customers found</div>
                        `:s.map(p=>`
                            <div onclick="selectSaleCustomer('${p.id}', '${p.name.replace(/'/g,"\\'")}')" class="p-4 hover:bg-slate-50 cursor-pointer border-b border-slate-50 text-left">
                                <p class="text-xs font-black text-slate-900 text-left">${p.name}</p>
                                <p class="text-[9px] font-bold text-slate-400 text-left">${p.phone}</p>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </section>

            <section class="space-y-3 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Product Search</h3>
                <div class="relative text-left">
                    <span class="absolute left-5 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400">search</span>
                    <input type="text" id="sales-item-search" oninput="window.triggerRender(false)" placeholder="Search products..." class="w-full pl-14 pr-6 py-5 bg-white border border-slate-100 rounded-3xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                    
                    ${a?`
                        <div class="absolute top-full left-0 right-0 z-50 bg-white border border-slate-100 rounded-2xl shadow-2xl mt-2 overflow-hidden text-left">
                            ${l.length>0?l.map(p=>`
                                <div onclick="addProductToCart('${p.id}')" class="p-4 hover:bg-slate-50 cursor-pointer flex justify-between items-center text-left">
                                    <div class="text-left">
                                        <h4 class="text-xs font-black text-slate-900 text-left">${p.name}</h4>
                                        <p class="text-[9px] font-bold text-slate-400 uppercase text-left">${p.brand} • ${p.category}</p>
                                    </div>
                                    <p class="text-xs font-black text-slate-900 text-right">₹${p.mop.toLocaleString()}</p>
                                </div>
                            `).join(""):'<p class="p-6 text-[10px] text-slate-300 font-black uppercase text-center">No products found</p>'}
                        </div>
                    `:""}
                </div>
            </section>

            <section class="space-y-4 text-left">
                <div class="flex items-center justify-between text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Cart (${ct.length})</h3>
                    <button onclick="window.clearCart()" class="text-[9px] font-black text-slate-900 uppercase tracking-widest border-b-2 border-slate-900">Clear All</button>
                </div>
                
                <div class="space-y-3 text-left">
                    ${ct.map((p,b)=>`
                        <div class="card p-4 flex items-center gap-4 text-left">
                            <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shadow-inner text-left">
                                <span class="material-icons-outlined text-xl text-slate-300 text-left">devices</span>
                            </div>
                            <div class="flex-1 text-left">
                                <h4 class="text-sm font-black text-slate-900 text-left">${p.name}</h4>
                                <p class="text-[9px] font-bold text-slate-400 uppercase text-left">${p.category}</p>
                            </div>
                            <div class="text-right">
                                <p class="text-xs font-black text-right">₹${p.mop.toLocaleString()}</p>
                                <button onclick="window.removeFromCart(${b})" class="text-[8px] font-black text-red-400 uppercase text-right">Remove</button>
                            </div>
                        </div>
                    `).join("")}

                    ${ct.length===0?`
                        <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                            <span class="material-icons-outlined text-3xl text-slate-200 text-center">shopping_basket</span>
                            <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] text-center">Cart is empty</span>
                        </div>
                    `:""}
                </div>

                <div class="flex gap-3 pt-6 border-t border-slate-100 mt-6 text-left">
                    <button onclick="window.saveDraft()" class="flex-1 py-4 border-2 border-slate-900 rounded-2xl text-[10px] font-black uppercase hover:bg-slate-50 transition-all text-center">Save Draft</button>
                    <button id="complete-txn-btn" onclick="completeTransaction()" class="flex-[2] py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-center">
                        Complete Transaction (₹${i.toLocaleString()})
                        <span class="material-icons-outlined text-sm text-blue-400 text-center">arrow_forward</span>
                    </button>
                </div>
            </section>
        </div>
    `}function Fn(){const e=window.getCache(),t=e.sales||[],s=t.length>0?t:null;if(!s)return`
        ${qa("history")}
        <div class="h-full flex flex-col items-center justify-center text-slate-300 opacity-50">
            <span class="material-icons-outlined text-4xl mb-2">receipt_long</span>
            <p class="text-[10px] font-black uppercase tracking-widest text-center">No recent transactions</p>
        </div>`;const a=e.saleItems||[];return`
        ${qa("history")}
        <div class="scrolling-content px-8 space-y-8 pb-12 text-left">
             <section class="space-y-4 text-left">
                <div class="flex items-center justify-between text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Recent Transactions</h3>
                    <span class="text-[9px] font-black text-slate-900 uppercase tracking-widest text-right">Turso Live</span>
                </div>

                <div class="space-y-4 text-left">
                    ${s.map(l=>{const i=a.filter(p=>p.sale_id===l.id),o=i[0]?i[0].product_name:"Custom Sale",c=i.length>1?`+ ${i.length-1} more`:"";return`
                        <div onclick="window.setSalesHistoryId('${l.id}')" class="card p-6 border-2 transition-all cursor-pointer text-left ${r.salesHistoryId===l.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                            <div class="flex justify-between items-start mb-4 text-left">
                                <div class="text-left">
                                    <div class="flex items-center gap-2 mb-1 text-left">
                                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter text-left">Order #${l.id}</p>
                                        <span class="bg-slate-100 px-1.5 py-0.5 rounded text-[7px] font-black text-slate-400 flex items-center gap-1 uppercase tracking-tighter text-left">
                                            <span class="material-icons-outlined text-[10px] text-left">store</span> In-Store
                                        </span>
                                    </div>
                                    <h4 class="text-xl font-black text-slate-900 tracking-tighter text-left">${l.customer_name}</h4>
                                </div>
                                <p class="text-xl font-black text-slate-900 tracking-tighter text-right">₹${l.total_amount?parseInt(l.total_amount).toLocaleString():0}</p>
                            </div>
                            <div class="space-y-1 text-left">
                                <p class="text-[10px] font-bold text-slate-500 uppercase text-left">${o} ${c}</p>
                                <div class="flex items-center justify-between text-left">
                                    <p class="text-[9px] font-black text-green-500 uppercase text-left">Paid • Delivered</p>
                                    <p class="text-[9px] font-black text-slate-300 uppercase text-right">${new Date(l.date).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                    `}).join("")}
                </div>
             </section>
        </div>
    `}function Fa(){var s,a,l,i;const e=r.currentTab==="history";let t;if(e){const o=window.getCache(),c=(o.sales||[]).filter(p=>p.id===r.salesHistoryId);if(c.length>0){const p=c[0],b=(o.saleItems||[]).filter(E=>E.sale_id===p.id),m=p.total_amount||0;t={id:p.id,customer:p.customer_name,phone:((a=(s=o.customers)==null?void 0:s.find(E=>E.name===p.customer_name))==null?void 0:a.phone)||"N/A",date:new Date(p.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),time:new Date(p.date).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})+" IST",items:b.map(E=>({n:E.product_name,v:E.category||"Standard",p:"₹"+parseInt(E.price).toLocaleString(),imei:E.imei})),subtotal:"₹"+(m/1.18).toLocaleString(void 0,{maximumFractionDigits:2}),gst:"₹"+(m-m/1.18).toLocaleString(void 0,{maximumFractionDigits:2}),total:"₹"+parseInt(m).toLocaleString()}}else return`<div class="p-10 text-center opacity-40 flex flex-col items-center justify-center h-full">
                <span class="material-icons-outlined text-4xl mb-2">receipt_long</span>
                <p class="text-xs font-black uppercase tracking-widest">Select a transaction to view receipt</p>
            </div>`}else{const o=window.getActiveCart?window.getActiveCart():[],c=window.getSelectedCustomer?window.getSelectedCustomer():{name:"Walk-in Customer",id:null},p=o.reduce((b,m)=>b+m.mop,0);if(t={id:"DRAFT",customer:c.name,phone:((i=(l=window.getCache().customers)==null?void 0:l.find(b=>b.id===c.id))==null?void 0:i.phone)||"",date:new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),time:new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})+" IST",items:o.map(b=>({n:b.name,v:b.category,p:"₹"+b.mop.toLocaleString(),imei:null})),subtotal:"₹"+(p/1.18).toLocaleString(void 0,{maximumFractionDigits:2}),gst:"₹"+(p-p/1.18).toLocaleString(void 0,{maximumFractionDigits:2}),total:"₹"+p.toLocaleString()},o.length===0)return`<div class="p-10 text-center opacity-40 flex flex-col items-center justify-center h-full">
                <span class="material-icons-outlined text-4xl mb-2">shopping_cart</span>
                <p class="text-xs font-black uppercase tracking-widest">Add items to cart to preview invoice</p>
            </div>`}return`
        <div class="card p-8 bg-white text-slate-900 font-inter leading-relaxed shadow-sm relative h-full flex flex-col border border-slate-100">
            <!-- Header -->
            <div class="text-center border-b border-dashed border-slate-200 pb-6 mb-6">
                <h2 class="text-2xl font-black tracking-tighter mb-1">Invoice Preview</h2>
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">RetailerOS • System Generated</p>
                <div class="mt-4 flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest px-4">
                    <span>GSTIN: 27AAACR3456D1Z5</span>
                    <span>Order #${t.id}</span>
                </div>
            </div>

            <!-- Info Grid -->
            <div class="grid grid-cols-2 gap-8 mb-8">
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

            <!-- Items -->
            <div class="space-y-6 flex-1 overflow-y-auto custom-scrollbar pr-2 text-left">
                ${t.items.map(o=>`
                    <div>
                        <div class="flex justify-between items-start mb-2 text-left">
                            <div class="text-left">
                                <h4 class="text-sm font-black text-slate-900 text-left">${o.n}</h4>
                                <p class="text-[9px] font-bold text-slate-400 uppercase mt-0.5 text-left">${o.v}</p>
                            </div>
                            <p class="text-sm font-black text-slate-900 text-right">${o.p}</p>
                        </div>
                        ${o.imei?`
                            <div class="bg-slate-50 border border-slate-100 rounded-xl p-4 grid grid-cols-2 gap-4 text-left">
                                 <div class="col-span-2 flex items-center gap-2 text-[9px] font-black text-slate-900 uppercase tracking-widest border-b border-slate-200 pb-2 mb-1 text-left">
                                     <span class="material-icons-outlined text-xs">verified</span> Device Lifecycle Management
                                 </div>
                                 <div class="text-left">
                                     <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 text-left">IMEI 1</p>
                                     <p class="text-[9px] font-black text-slate-700 tabular-nums text-left">${o.imei}</p>
                                 </div>
                                 <div class="text-left">
                                     <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 text-left">SERIAL NUMBER</p>
                                     <p class="text-[9px] font-black text-slate-700 tabular-nums text-left">R5CW10AZ8XL</p>
                                 </div>
                                 <div class="text-left">
                                     <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 text-left">WARRANTY ENDS</p>
                                     <p class="text-[9px] font-black text-slate-900 tabular-nums text-left">23 Oct 2024</p>
                                 </div>
                                 <div class="text-left">
                                     <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 text-left">STATUS</p>
                                     <p class="text-[9px] font-black text-green-500 uppercase text-left">Active</p>
                                 </div>
                            </div>
                        `:""}
                    </div>
                `).join("")}
            </div>

            <!-- Footer Totals -->
            <div class="border-t border-dashed border-slate-200 pt-6 mt-6 space-y-2">
                <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">Subtotal</span><span>${t.subtotal}</span></div>
                <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">GST (18%)</span><span>${t.gst}</span></div>
                <div class="flex justify-between text-xl font-black text-slate-900 mt-4 items-center">
                    <span>Grand Total</span>
                    <span class="text-slate-900">${t.total}</span>
                </div>
            </div>
            
            <!-- Payment -->
            <div class="bg-green-50 border border-green-100 p-4 rounded-xl mt-6 flex justify-between items-center text-left">
                <div class="flex items-center gap-3 text-left">
                    <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"><span class="material-icons-outlined text-sm">account_balance_wallet</span></div>
                    <div class="text-left">
                         <p class="text-[9px] font-black text-green-700 uppercase tracking-widest text-left">Paid via UPI</p>
                         <p class="text-[8px] font-bold text-green-600 tracking-widest uppercase text-left">Ref: 329849202111</p>
                    </div>
                </div>
                <span class="text-[9px] font-black text-green-600 bg-white px-2 py-1 rounded shadow-sm uppercase tracking-widest">Authorized</span>
            </div>
            
            <!-- Print Button (Desktop & Mobile) -->
            <div class="flex justify-end gap-2 mt-4 no-print">
                 <button class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900"><span class="material-icons-outlined text-lg">share</span></button>
                 <button class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900"><span class="material-icons-outlined text-lg">print</span></button>
            </div>
        </div>
    `}function Ha(e,t="RETAILEROS",s=!1){return`
        <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
            <div class="flex items-center justify-between mb-6 text-left">
                <button onclick="${r.clientViewMode==="directory"?"setApp('launcher')":"setClientMode('directory')"}" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                    <span class="material-icons-outlined text-left">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">${r.clientViewMode==="directory"?"Back":"Directory"}</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">${e}</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">${t}</p>
                </div>
                <button class="p-2 text-slate-400 hover:text-slate-900 text-right"><span class="material-symbols-outlined text-xl text-right">${s?"search":"more_horiz"}</span></button>
            </div>
        </header>
    `}function kl(){const t=window.getCache().customers||[],s=t.length>0?t.map(a=>({n:a.name,p:a.phone||"No Phone",l:a.joined_at?new Date(a.joined_at).toLocaleDateString():"N/A"})):[{n:"No Clients Found",p:"Add your first client",l:"-"}];return`
        ${Ha("Clients","RETAILEROS",!0)}
        <div class="scrolling-content px-8 space-y-8 relative text-left">
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1 mb-2 text-left">
                <button class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg bg-white shadow-sm text-slate-900 text-center">Directory</button>
                <button class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg text-slate-400 text-center">Groups</button>
            </div>

            <div class="space-y-4 pb-24 text-left">
                <p class="text-[9px] font-black text-slate-300 border-b border-slate-100 pb-2 uppercase tracking-widest text-left">Database Connectivity: Turso Live</p>
                ${s.map(a=>`
                    <div onclick="setClientMode('profile', '${a.n}')" class="card p-5 border-2 transition-all flex items-center justify-between group cursor-pointer text-left ${r.selectedClient===a.n?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                        <div class="flex items-center gap-4 text-left">
                            <div class="w-11 h-11 rounded-full bg-slate-100 border border-slate-100 flex items-center justify-center font-black text-[10px] text-slate-400 text-center">${a.n.split(" ").map(l=>l[0]).join("")}</div>
                            <div class="text-left">
                                <h4 class="text-sm font-black text-slate-900 text-left">${a.n}</h4>
                                <p class="text-[10px] font-bold text-slate-400 -mt-0.5 text-left">${a.p}</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-[7px] font-black text-slate-300 uppercase tracking-tighter leading-none mb-1 text-right">Last Seen</p>
                            <p class="text-[10px] font-black text-slate-900 tracking-tighter text-right">${a.l}</p>
                        </div>
                    </div>
                `).join("")}
            </div>

            <!-- Floating Add Button -->
            <button onclick="setClientMode('add')" class="fixed sm:absolute bottom-8 right-8 w-14 h-14 bg-slate-900 text-white rounded-[20px] flex items-center justify-center shadow-2xl hover:scale-105 transition-transform z-20 text-center">
                <span class="material-icons-outlined text-2xl text-center">add</span>
            </button>
        </div>
    `}async function tc(){const e=document.getElementById("client-name").value,t=document.getElementById("client-phone").value,s=document.getElementById("client-email").value,a=document.getElementById("client-location").value;if(!e||!t){alert("Name and Phone are required.");return}const l=document.getElementById("save-client-btn"),i=l.innerHTML;l.innerHTML='<span class="material-icons-outlined animate-spin text-xs">sync</span> Saving...',l.disabled=!0;try{await z.clients.add({id:"CL-"+Math.random().toString(36).substr(2,6).toUpperCase(),name:e,phone:t,email:s,location:a}),await zt(),Ll("directory")}catch(o){alert("Error saving client: "+o.message),l.innerHTML=i,l.disabled=!1}}window.saveClient=tc;function Sl(e){const t=e==="desktop";return`
        ${t?"":Ha("New Client","RETAILEROS • CLIENTS")}
        <div class="${t?"h-full flex flex-col pt-12":"scrolling-content"} px-8 space-y-10 pb-12 text-left">
             ${t?`
                <div class="flex items-center gap-4 mb-2 text-left">
                     <div class="w-12 h-12 bg-slate-900 rounded-[18px] flex items-center justify-center shadow-lg text-center"><span class="material-icons-outlined text-white text-center">person_add</span></div>
                     <div class="text-left">
                        <h2 class="text-2xl font-black tracking-tighter text-left">New Client</h2>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] text-left">Ensuring data integrity in RetailerOS</p>
                     </div>
                </div>
             `:""}

            <div class="space-y-8 text-left">
                <div class="space-y-2 text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Full Name</label>
                    <input type="text" id="client-name" placeholder="e.g. Jonathan Ive" class="w-full px-6 py-5 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                </div>
                <div class="space-y-2 text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Mobile Number</label>
                    <input type="text" id="client-phone" placeholder="+91 98765 43210" class="w-full px-6 py-5 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                </div>
                <div class="space-y-2 text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Email Address</label>
                    <input type="email" id="client-email" placeholder="client@example.com" class="w-full px-6 py-5 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                </div>
                <div class="space-y-2 text-left relative">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Location</label>
                    <input type="text" id="client-location" placeholder="City, State" class="w-full px-6 py-5 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm pr-14 text-left">
                    <span class="absolute right-6 top-[42px] material-icons-outlined text-slate-300 text-right">location_on</span>
                </div>
            </div>

            <button id="save-client-btn" onclick="saveClient()" class="w-full py-5 bg-slate-900 text-white rounded-3xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 text-center">
                Save Client
                <span class="material-icons-outlined text-xs text-blue-400 text-center">done_all</span>
            </button>
        </div>
    `}function _l(e){const t=e==="desktop",s=window.getCache(),a=s.customers.find(c=>c.name===r.selectedClient)||{name:r.selectedClient,joined_at:new Date().toISOString()},l=a.name.split(" ").map(c=>c[0]).join(""),i=(s.sales||[]).filter(c=>c.customer_name===a.name),o=(s.inquiries||[]).filter(c=>c.customer_name===a.name);return`
        ${t?"":Ha("Client Profile","RETAILEROS")}
        <div class="scrolling-content px-8 space-y-12 pb-12 text-left">
            <div class="flex flex-col items-center pt-8 text-center">
                <div class="w-24 h-24 bg-slate-100 rounded-full mb-6 flex items-center justify-center font-black text-3xl text-slate-400 shadow-inner border-[6px] border-white relative text-center">
                    ${l}
                    <div class="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full text-center"></div>
                </div>
                <h2 class="text-3xl font-black tracking-tighter text-slate-900 text-center">${a.name}</h2>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 text-center">
                    ${a.location||"Premium Client"} • Joined ${new Date(a.joined_at).toLocaleDateString()}
                </p>
                
                <div class="flex items-center gap-4 mt-8 text-center justify-center">
                    <a href="tel:${a.phone}" class="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-900 hover:shadow-lg transition-all text-center"><span class="material-icons-outlined text-center">call</span></a>
                    <button class="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-900 hover:shadow-lg transition-all text-center"><span class="material-icons-outlined text-center">chat_bubble</span></button>
                    <button onclick="setApp('sales')" class="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl hover:scale-105 transition-all text-center"><span class="material-icons-outlined text-center">local_mall</span></button>
                </div>
            </div>

            <div class="space-y-6 text-left">
                <div class="flex justify-between items-center text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Unified Lifecycle Timeline</h3>
                    <button class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded text-right">Live Feed</button>
                </div>

                <!-- Timeline -->
                <div class="relative pl-10 space-y-10 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-slate-100 before:border-l before:border-dashed before:border-slate-200 text-left">
                    
                    ${i.length===0&&o.length===0&&(s.repairs||[]).filter(c=>c.customer_name===a.name).length===0?`
                        <div class="text-center py-20 opacity-30">
                            <span class="material-icons-outlined text-4xl mb-4">history_toggle_off</span>
                            <p class="text-[10px] font-black uppercase tracking-widest leading-relaxed">No lifecycle activities recorded<br>for this client yet.</p>
                        </div>
                    `:""}

                    <!-- Sales Activities -->
                    ${i.map(c=>`
                        <div class="relative text-left">
                            <div class="absolute -left-10 top-0 w-8 h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                <span class="material-icons-outlined text-xs text-green-500 text-center">shopping_cart</span>
                            </div>
                            <div class="card p-5 group hover:border-slate-300 transition-all text-left">
                                <div class="flex justify-between items-start mb-2 text-left">
                                    <div class="text-left">
                                        <h4 class="text-xs font-black text-slate-900 text-left">Sale Completed</h4>
                                        <p class="text-xl font-black tracking-tighter text-left">₹${c.price.toLocaleString()}</p>
                                    </div>
                                    <span class="text-[8px] font-black text-slate-300 tabular-nums lowercase tracking-widest text-right">${new Date(c.date).toLocaleDateString()}</span>
                                </div>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">${c.product_name}</p>
                            </div>
                        </div>
                    `).join("")}

                    <!-- Repair Activities -->
                    ${(s.repairs||[]).filter(c=>c.customer_name===a.name).map(c=>`
                        <div class="relative text-left">
                            <div class="absolute -left-10 top-0 w-8 h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                <span class="material-icons-outlined text-xs text-orange-500 text-center">build</span>
                            </div>
                            <div class="card p-5 group hover:border-slate-300 transition-all text-left">
                                <div class="flex justify-between items-start mb-2 text-left">
                                    <div class="text-left">
                                        <h4 class="text-xs font-black text-slate-900 text-left">Device Repair</h4>
                                        <p class="text-lg font-black tracking-tighter text-left">₹${c.cost||"Estimating"}</p>
                                    </div>
                                    <span class="text-[8px] font-black text-slate-300 tabular-nums lowercase tracking-widest text-right">${new Date(c.created_at).toLocaleDateString()}</span>
                                </div>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">${c.device_model} • ${c.status}</p>
                            </div>
                        </div>
                    `).join("")}

                    <!-- Inquiry Activities -->
                    ${o.map(c=>`
                        <div class="relative text-left">
                            <div class="absolute -left-10 top-0 w-8 h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                <span class="material-icons-outlined text-xs text-blue-500 text-center">info</span>
                            </div>
                            <div class="card p-5 flex justify-between items-start group hover:border-slate-300 transition-all text-left">
                                <div class="text-left">
                                    <h4 class="text-xs font-black text-slate-900 text-left">Product Inquiry</h4>
                                    <p class="text-[11px] font-bold text-slate-500 text-left">${c.request||"Interested in Product"}</p>
                                    <div class="flex items-center gap-1 mt-2 text-left">
                                        <div class="w-1 h-1 ${c.status==="PENDING"?"bg-yellow-400":"bg-green-400"} rounded-full text-left"></div>
                                        <p class="text-[8px] font-black text-slate-400 uppercase text-left">${c.status}</p>
                                    </div>
                                </div>
                                <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(c.date).toLocaleDateString()}</span>
                            </div>
                        </div>
                    `).join("")}
                </div>

                <div class="pt-8">
                     <button onclick="setApp('sales'); setTab('new-sale');" class="w-full py-5 bg-slate-900 text-white rounded-[20px] text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all text-center">
                        Initiate New Purchase
                    </button>
                    <button onclick="setClientMode('directory')" class="w-full py-4 text-[9px] font-black text-slate-300 uppercase underline decoration-slate-200 underline-offset-8 mt-4 text-center">Back to Directory</button>
                </div>
            </div>
        </div>
    `}function za(e){const t=e==="desktop-secondary",s=e==="desktop-primary";return t?r.clientViewMode==="add"?Sl("desktop"):r.clientViewMode==="profile"?_l("desktop"):`
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50 text-center">person_search</span>
                    <p class="text-[10px] font-black uppercase tracking-widest text-center">Select a client to view profile</p>
                </div>
            </div>
        `:s?kl():r.clientViewMode==="add"?Sl("mobile"):r.clientViewMode==="profile"?_l("mobile"):kl()}const oa=(e,t,s=[])=>`
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
                ${s.map(a=>`<button onclick="setReportsTab('${a}')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${r.reportsTab===a?"bg-white shadow-sm text-slate-900":"text-slate-400"}">${a.toUpperCase()}</button>`).join("")}
            </div>
        `:""}
    </header>
`;function ec(){var a;const e=window.getCache(),t=[{t:"Total Sales",v:e.sales?`₹${e.sales.reduce((l,i)=>l+parseInt(i.amount||i.total_amount),0).toLocaleString()}`:"₹0",p:e.sales?`+${e.sales.length}`:"0",i:"account_balance_wallet"},{t:"Clients",v:e.customers?e.customers.length.toLocaleString():"0",p:"Total",i:"group"},{t:"Inquiries",v:e.inquiries?e.inquiries.length.toLocaleString():"0",p:"Pending",i:"chat_bubble"},{t:"Repairs",v:e.repairs?e.repairs.length.toLocaleString():"0",p:"Active",i:"settings"},{t:"Schemes",v:e.schemes?`${e.schemes.length} Active`:"0",p:"Live",i:"percent"},{t:"Inventory",v:e.products?`₹${(e.products.reduce((l,i)=>l+parseInt(i.price)*parseInt(i.stock),0)/1e7).toFixed(1)}Cr`:"₹0",p:"Stock Value",i:"inventory_2"},{t:"Campaigns",v:e.campaigns?e.campaigns.length.toLocaleString():"0",p:"Pre-booking",i:"rocket_launch"},{t:"Automations",v:e.automations?e.automations.length.toLocaleString():"0",p:"Live",i:"bolt"}],s=`
        <div class="flex items-center gap-12 text-[13px] font-bold text-slate-600 pr-12 text-left">
            <span><strong class="text-slate-900 uppercase tracking-widest text-[10px]">Real-time Intelligence:</strong> Connected to Turso DB. Syncing ${t.reduce((l,i)=>l+parseInt(i.v.toString().replace(/[^0-9]/g,"")||0),0).toLocaleString()} data points.</span>
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
            ${t.map(l=>`
                <div class="card p-5 space-y-3 relative overflow-hidden group hover:border-slate-300 transition-all text-left">
                    <div class="flex justify-between items-start">
                        <div class="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                            <span class="material-icons-outlined text-sm text-slate-400">${l.i}</span>
                        </div>
                        <span class="text-[8px] font-black uppercase tracking-tighter ${l.p==="Live"||l.p.startsWith("+")?"text-green-500":"text-slate-400"}">${l.p}</span>
                    </div>
                    <div>
                        <h4 class="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1 text-left">${l.t}</h4>
                        <p class="text-lg font-black tracking-tighter text-slate-900 text-left">${l.v}</p>
                    </div>
                </div>
            `).join("")}
        </div>
    `}function sc(){return`<div class="card p-8 space-y-8 text-left"><div class="flex justify-between items-start text-left"><div class="text-left"><p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Revenue (30D)</p><h2 class="text-4xl font-black tracking-tighter text-slate-900 text-left">₹42.8L</h2></div><div class="bg-green-50 px-2 py-1 rounded-lg flex items-center gap-1"><span class="material-icons-outlined text-[10px] text-green-500">trending_up</span><span class="text-[10px] font-black text-green-600">+12.4%</span></div></div><div class="h-48 relative border-b border-slate-100 flex items-end justify-between px-2"><div class="absolute inset-0 flex items-center justify-center opacity-10"><h2 class="font-black text-8xl tracking-tighter text-slate-400">OS</h2></div><svg class="w-full h-full text-slate-900" viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M0 35 L20 30 L40 32 L60 15 L80 20 L100 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg><div class="absolute bottom-0 left-0 text-[8px] text-slate-300 font-black uppercase">01 Oct</div><div class="absolute bottom-0 left-1/2 -translate-x-1/2 text-[8px] text-slate-300 font-black uppercase">15 Oct</div><div class="absolute bottom-0 right-0 text-[8px] text-slate-300 font-black uppercase">30 Oct</div></div></div><div class="grid grid-cols-2 gap-4"><div class="card p-6 space-y-4 text-left"><div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center"><span class="material-icons-outlined text-slate-400 text-left">shopping_bag</span></div><div><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Avg Order Value</p><h4 class="text-xl font-black text-slate-900 text-left">₹18.2K</h4><p class="text-[8px] font-black text-slate-300 uppercase mt-1 text-left">vs ₹16.4K last month</p></div></div><div class="card p-6 space-y-4 text-left"><div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center"><span class="material-icons-outlined text-slate-400 text-left">category</span></div><div><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Top Category</p><h4 class="text-xl font-black text-slate-900 text-left">Smartphones</h4></div></div></div><section class="space-y-4 text-left"><div class="flex justify-between items-center px-1"><h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Daily Sales List</h3><button class="text-[8px] font-black text-slate-900 uppercase border-b border-slate-900">Export CSV</button></div><div class="space-y-3 text-left">${[{d:"Today, 24 Oct",c:"14 Orders",v:"₹1.42L",p:"+4.2%"},{d:"Yesterday, 23 Oct",c:"11 Orders",v:"₹1.18L",p:"-2.1%"},{d:"22 Oct",c:"18 Orders",v:"₹2.33L",p:"+1.8%"}].map(e=>`<div class="card p-5 group hover:bg-slate-50 transition-all cursor-pointer flex justify-between items-center"><div class="text-left"><h4 class="text-sm font-black text-slate-900 text-left">${e.d}</h4><p class="text-[10px] font-bold text-slate-400 capitalize -mt-0.5 text-left">${e.c}</p></div><div class="text-right"><p class="text-sm font-black text-slate-900 text-right">${e.v}</p><p class="text-[9px] font-black ${e.p.startsWith("+")?"text-green-500":"text-red-500"} uppercase text-right">${e.p}</p></div></div>`).join("")}</div></section>`}function ac(){return`<div class="grid grid-cols-2 gap-4 text-left"><div class="card p-6 space-y-3 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Blocked Capital</p><h3 class="text-xl font-black text-slate-900 text-left">₹84.2L</h3><p class="text-[8px] font-black text-red-500 uppercase flex items-center gap-1 text-left"><span class="animate-pulse">●</span> +2.4% vs last mo.</p></div><div class="card p-6 space-y-3 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Ageing > 90D</p><h3 class="text-xl font-black text-slate-900 text-left">124 <span class="text-[10px] font-bold text-slate-400 uppercase text-left">Units</span></h3><p class="text-[8px] font-black text-green-500 uppercase text-left">12.1% of total stock</p></div></div><div class="card p-8 space-y-6 text-left"><div class="flex justify-between items-center mb-2 text-left"><h3 class="text-[10px] font-black text-slate-900 uppercase tracking-widest text-left">Stock Distribution</h3><span class="material-icons-outlined text-slate-300 text-sm">info</span></div><div class="flex items-center gap-10 text-left"><div class="relative w-32 h-32 flex items-center justify-center text-left"><svg class="w-full h-full transform -rotate-90"><circle cx="64" cy="64" r="54" stroke="#f8fafc" stroke-width="20" fill="transparent" /><circle cx="64" cy="64" r="54" stroke="#0f172a" stroke-width="20" stroke-dasharray="340" stroke-dashoffset="100" fill="transparent" stroke-linecap="round" /></svg><div class="absolute text-center"><p class="text-[8px] font-black text-slate-400 uppercase leading-none mb-1 text-left">Total</p><p class="text-xl font-black tracking-tighter text-left">1,024</p></div></div><div class="flex-1 space-y-3 text-left">${[{l:"Apple",p:"45%",c:"bg-slate-900"},{l:"OnePlus",p:"25%",c:"bg-slate-500"},{l:"Samsung",p:"15%",c:"bg-slate-300"},{l:"Others",p:"15%",c:"bg-slate-100"}].map(e=>`<div class="flex items-center justify-between text-left"><div class="flex items-center gap-2 text-left"><div class="w-2 h-2 rounded-full ${e.c}"></div><span class="text-[10px] font-black text-slate-500 text-left">${e.l}</span></div><span class="text-[10px] font-black text-slate-900 text-right">${e.p}</span></div>`).join("")}</div></div></div><section class="space-y-4 text-left"><div class="flex justify-between items-center px-1 text-left"><h3 class="text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Low Stock Alerts</h3><span class="bg-red-50 text-red-500 text-[8px] font-black px-2 py-0.5 rounded uppercase text-left">5 Critical</span></div><div class="space-y-3 text-left">${[{n:"iPhone 15 Pro - 256GB",s:"SKU: APP-15P-256-NG",q:"2 Left",r:"Reorder pt: 5"},{n:"Watch Series 9 - 45mm",s:"SKU: APP-W9-45-ST",q:"0 Left",r:"Reorder pt: 3"},{n:"AirPods Pro (2nd Gen)",s:"SKU: APP-AP2-MGS",q:"8 Left",r:"Reorder pt: 10"}].map(e=>`<div class="card p-5 relative group hover:border-slate-300 transition-all cursor-pointer flex justify-between items-start text-left"><div><h4 class="text-sm font-black text-slate-900 text-left">${e.n}</h4><p class="text-[9px] font-bold text-slate-400 uppercase mt-0.5 text-left">${e.s}</p></div><div class="text-right"><p class="text-xs font-black text-red-500 uppercase text-right">${e.q}</p><p class="text-[8px] font-bold text-slate-300 uppercase mt-0.5 text-right">${e.r}</p></div></div>`).join("")}</div><button class="w-full py-4 text-[9px] font-black text-slate-300 uppercase underline decoration-slate-200 underline-offset-8 text-left">View All Alerts</button></section>`}function lc(){return'<section class="space-y-6 text-left"><h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Campaign Performance</h3><div class="card p-8 space-y-6 text-left"><div class="flex justify-between items-start text-left"><div><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Campaign Conversion Rate</p><h2 class="text-4xl font-black tracking-tighter text-slate-900 text-left">24.8%</h2></div><span class="bg-green-50 text-green-500 text-[8px] font-black px-2 py-1 rounded-lg text-left">+3.2%</span></div><div class="space-y-3 text-left"><div class="h-2.5 w-full bg-slate-50 rounded-full overflow-hidden text-left"><div class="h-full bg-blue-500 rounded-full shadow-inner text-left" style="width: 24.8%"></div></div><p class="text-[9px] font-bold text-slate-400 italic text-left">Derived from pre-booking landing pages</p></div></div><div class="card p-8 space-y-6 text-left"><div class="flex justify-between items-center text-left"><p class="text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">AI Image Usage</p><span class="material-symbols-outlined text-slate-200 text-xl text-left">grid_guides</span></div><div class="flex items-center justify-between text-left"><h2 class="text-5xl font-black tracking-tighter text-slate-900 text-left">1,284</h2><div class="flex flex-col items-end gap-1 text-left"><div class="w-24 h-2 bg-slate-50 rounded-full overflow-hidden border border-slate-100/50 text-left"><div class="h-full bg-slate-900 rounded-full text-left" style="width: 65%"></div></div><p class="text-[10px] font-black text-slate-300 tabular-nums text-left">65%</p></div></div></div><div class="space-y-4 text-left"><p class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Automation Metrics</p><div class="grid grid-cols-2 gap-4 text-left"><div class="card p-6 space-y-4 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Retention Rate</p><h4 class="text-2xl font-black text-slate-900 tracking-tighter text-left">88.4%</h4><div class="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden text-left"><div class="h-full bg-indigo-500 text-left" style="width: 88.4%"></div></div></div><div class="card p-6 space-y-4 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Upsell Conv.</p><h4 class="text-2xl font-black text-slate-900 tracking-tighter text-left">12.5%</h4><div class="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden text-left"><div class="h-full bg-green-500 text-left" style="width: 12.5%"></div></div></div></div></div></section>'}function Ga(e){const t={overview:{t:"Reports",s:"Business Intelligence"},sales:{t:"Sales",s:"Deep-Dive Analytics"},inventory:{t:"Inventory",s:"Stock & Logistics"},marketing:{t:"Marketing",s:"Campaign Insights"}},s={overview:ec(),sales:sc(),inventory:ac(),marketing:lc()};if(e==="desktop-primary")return`
            ${oa(t.overview.t,t.overview.s)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${s.overview}
            </div>
        `;if(e==="desktop-secondary"){const l=r.reportsTab==="overview"?"sales":r.reportsTab;return`
            ${oa(t[l].t,t[l].s,["sales","inventory","marketing"])}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${s[l]}
            </div>
        `}const a=t[r.reportsTab]||t.overview;return`
        ${oa(a.t,a.s,["overview","sales","inventory","marketing"])}
        <div class="scrolling-content px-8 space-y-8 pb-12">
            ${s[r.reportsTab]}
        </div>
    `}const ca=(e,t,s="",a=!1)=>`
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
                <button onclick="setRepairTab('active')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${r.repairTab==="active"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">Active Jobs</button>
                <button onclick="setRepairTab('history')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${r.repairTab==="history"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">History</button>
            </div>
        `:""}
    </header>
`;function nc(){return`
        <div class="space-y-8 animate-slide-up text-left">
            <div class="space-y-4 text-left">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Search Customer</p>
                <div class="relative text-left">
                    <span class="absolute left-5 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400 text-left">search</span>
                    <input type="text" id="repair-search-input" oninput="triggerRender(false)" placeholder="Search Name or Mobile..." class="w-full h-16 pl-14 pr-6 bg-slate-50 border border-slate-100 rounded-3xl text-sm font-black text-slate-900 focus:bg-white focus:border-slate-900 focus:shadow-2xl focus:shadow-slate-200/50 transition-all outline-none text-left">
                </div>
            </div>

            ${searchVal?`
                <div class="space-y-3 text-left">
                    <h3 class="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] px-1 text-left">Search Results</h3>
                    <div class="space-y-3 text-left">
                        ${filteredCustomers.map(e=>`
                            <div onclick="window.setRepairCustomer('${e.name}', '${e.phone}'); setRepairMode('intake');" class="card p-5 border-2 border-transparent hover:border-slate-200 cursor-pointer flex items-center justify-between text-left">
                                <div class="text-left">
                                    <h4 class="text-sm font-black text-slate-900 text-left">${e.name}</h4>
                                    <p class="text-[10px] font-bold text-slate-400 text-left">${e.phone}</p>
                                </div>
                                <span class="material-icons-outlined text-slate-300 text-left">arrow_forward</span>
                            </div>
                        `).join("")}
                        ${filteredCustomers.length===0?'<p class="text-center py-8 text-[10px] text-slate-300 font-black uppercase">No customer found</p>':""}
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
    `}async function rc(){const e=r.repairContext||{customer_name:"Walk-in",customer_phone:""},t=document.getElementById("repair-device").value,s=document.getElementById("repair-issue").value,a=document.getElementById("repair-cost").value;if(!t||!s){alert("Device and Issue are required.");return}const l=document.getElementById("create-job-btn");l.disabled=!0,l.innerText="Creating...";try{const i="REP-"+Math.random().toString(36).substr(2,6).toUpperCase();await z.query(`
            INSERT INTO repairs (id, customer_name, phone, device, issue, status, job_sheet_no, estimated_cost, assigned_to, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,[i,e.customer_name,e.customer_phone,t,s,"COLLECTED",i,a||"0","Unassigned",new Date().toISOString()]),await zt(),window.setActiveRepairJob(i),window.setRepairMode("status")}catch(i){alert("Error creating job: "+i.message),l.disabled=!1,l.innerText="Create Job Sheet"}}window.createJobSheet=rc;window.setActiveRepairJob=e=>{r.activeRepairId=e};function ic(){const e=r.repairContext||{customer_name:"New Walk-in",customer_phone:""};return`
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
    `}async function oc(e){if(r.activeRepairId)try{await z.query("UPDATE repairs SET status = ? WHERE id = ?",[e,r.activeRepairId]),await zt()}catch(t){alert("Update failed: "+t.message)}}window.updateRepairStatus=oc;function cc(){const e=window.getCache(),t=e.repairs.find(l=>l.id===r.activeRepairId)||e.repairs[0];if(!t)return'<div class="p-20 text-center opacity-30 text-[10px] font-black uppercase">No active job selected</div>';const s=[{l:"Collected",s:"COLLECTED",i:"done"},{l:"Sent to Brand",s:"SENT_TO_BRAND",i:"shipping"},{l:"At Service Center",s:"IN_REPAIR",i:"build"},{l:"Ready for Pickup",s:"READY",i:"check_circle"},{l:"Handed Over",s:"COMPLETED",i:"person"}],a=s.findIndex(l=>l.s===t.status);return`
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
                    ${s.map((l,i)=>{const o=i<=a,c=i===a;return`
                        <div class="flex items-start gap-8 relative text-left">
                            <div class="w-5 h-5 rounded-full flex items-center justify-center z-10 shrink-0 text-left ${o?"bg-blue-500 text-white":"bg-slate-100 border border-slate-200"}">
                                <span class="material-icons-outlined text-[12px] font-black text-left">${o?"done":""}</span>
                            </div>
                            <div class="text-left ${o?"":"opacity-30"}">
                                <h4 class="text-xs font-black text-slate-900 text-left ${c?"text-blue-500 underline underline-offset-4":""}">${l.l}</h4>
                                <p class="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-tighter text-left">
                                    ${c?"CURRENT STATUS":o?"COMPLETED":"PENDING"}
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
    `}function Al(){const t=window.getCache().repairs||[];return`
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
    `}function Wa(e){const t={search:{t:"RetailerOS",s:"Repairs Management",txn:null},intake:{t:"Device Intake",s:"Repair Management",txn:"TXN-4920"},status:{t:"Job ID: #REP-2024",s:"Repair Assignment",badge:"ACTIVE"},history:{t:"Job History",s:"Service Records",badge:null}},s={search:nc(),intake:ic(),status:cc()};if(e==="desktop-primary")return`
            ${ca(t.search.t,t.search.s,'<button class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900"><span class="material-icons-outlined text-xl">notifications</span></button>',!0)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${r.repairTab==="active"?s.search:Al()}
            </div>
        `;if(e==="desktop-secondary"){const o=r.repairViewMode==="search"?"status":r.repairViewMode,c=t[o],p=o==="intake"?`<span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded">${c.txn}</span>`:`<span class="bg-blue-50 text-blue-600 text-[8px] font-black px-2 py-1 rounded-full">${c.badge}</span>`;return`
            ${ca(c.t,c.s,p)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${r.repairTab==="history"?'<div class="card p-8 bg-slate-50 border-dashed border-2 border-slate-200 text-center py-20"><span class="material-icons-outlined text-4xl text-slate-200 mb-4">analytics</span><p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">Select a job card on the left<br>to view full service details.</p></div>':s[o]}
            </div>
        `}const a=r.repairTab==="history"?"history":r.repairViewMode,l=t[a],i=a==="intake"?`<span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded">${l.txn}</span>`:a==="status"?`<span class="bg-blue-50 text-blue-600 text-[8px] font-black px-2 py-1 rounded-full">${l.badge}</span>`:'<button class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900"><span class="material-icons-outlined text-xl">notifications</span></button>';return`
        ${ca(l.t,l.s,i,!0)}
        <div class="scrolling-content px-8 space-y-8 pb-12">
            ${r.repairTab==="history"?Al():s[r.repairViewMode]}
        </div>
    `}function dc(){return`
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
    `}function pc(){return`
        ${dc()}
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
    `}function xc(){return`
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
    `}function Ja(e){return e==="desktop-secondary"?xc():pc()}function uc(){return`
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
    `}function fc(){return`
        ${uc()}
        <div class="scrolling-content px-4 sm:px-8 space-y-3 pb-32">
            
            <!-- Card 1 -->
            <div onclick="setPromoterViewMode('performance')" class="card p-4 flex items-center justify-between group cursor-pointer border-2 transition-all ${r.promoterViewMode==="performance"?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
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
    `}function hc(){return`
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
    `}function bc(){return`
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
    `}function Ka(e){const t=e==="desktop-secondary";return window.setPromoterViewMode=s=>{r.promoterViewMode=s,v()},t?r.promoterViewMode==="onboarding"?hc():bc():fc()}function mc(){return`
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
                 <button onclick="setInventoryTab('brands')" class="flex-1 py-3 ${r.inventoryTab==="brands"?"bg-white shadow-sm text-slate-900":"text-slate-400"} text-[10px] font-black uppercase rounded-lg transition-all">Brands</button>
                 <button onclick="setInventoryTab('categories')" class="flex-1 py-3 ${r.inventoryTab==="categories"?"bg-white shadow-sm text-slate-900":"text-slate-400"} text-[10px] font-black uppercase rounded-lg transition-all">Category</button>
            </div>
        </header>
    `}function gc(){return`
        <div class="scrolling-content px-6 space-y-4 pb-32">
             <!-- Apple -->
            <div onclick="setInventoryMode('details')" class="card p-5 border-2 transition-all cursor-pointer group bg-white ${r.inventoryMode==="details"?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
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
    `}function vc(){const s=(window.getCache().products||[]).reduce((o,c)=>{const p=c.category||"Uncategorized";o[p]||(o[p]={count:0,blocked:0,margin:0,icon:"category"}),o[p].count+=parseInt(c.stock)||0;const b=parseInt(c.price)||0,m=b*.9;return o[p].blocked+=(parseInt(c.stock)||0)*m,o[p].margin+=(b-m)*(parseInt(c.stock)||0),p.toLowerCase().includes("phone")?o[p].icon="smartphone":p.toLowerCase().includes("tablet")?o[p].icon="tablet_mac":p.toLowerCase().includes("audio")&&(o[p].icon="headphones"),o},{}),a=Object.keys(s),l=Object.values(s).reduce((o,c)=>o+c.blocked,0),i=Object.values(s).reduce((o,c)=>o+c.margin,0);return`
        < div class="scrolling-content px-6 space-y-4 pb-32" >
            <div class="text-left mb-2 px-2">
                <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest border-l-2 border-slate-900 pl-2 text-left">INVENTORY > OVERVIEW</p>
                <h2 class="text-lg font-black text-slate-900 mt-1 text-left">Category Breakdown</h2>
            </div>

            ${a.length===0?`
                <div class="p-10 text-center opacity-30">
                    <p class="text-[10px] font-black uppercase tracking-widest">No inventory data available</p>
                </div>
            `:a.map(o=>{const c=s[o];return`
                <div onclick="state.activeCategory='${o}'; setInventoryMode('details')" class="card p-5 border-2 transition-all cursor-pointer group bg-white flex items-center justify-between border-transparent hover:border-slate-200 text-left">
                    <div class="flex items-center gap-4 text-left">
                        <div class="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600"><span class="material-icons-outlined text-lg">${c.icon}</span></div>
                        <div class="text-left">
                            <h3 class="text-sm font-black text-slate-900 text-left">${o}</h3>
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-wide text-left">STOCK COUNT: ${c.count}</p>
                        </div>
                    </div>
                     <span class="material-icons-outlined text-slate-300">chevron_right</span>
                </div>
                <div class="grid grid-cols-2 gap-4 px-2 -mt-2 mb-4 text-left">
                    <div class="text-left">
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 text-left">BLOCKED CAPITAL</p>
                        <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">₹${c.blocked.toLocaleString()}</h4>
                    </div>
                     <div class="text-right">
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 text-right">EXPECTED MARGIN</p>
                        <h4 class="text-sm font-black text-green-500 tracking-tight text-right">₹${c.margin.toLocaleString()}</h4>
                    </div>
                </div>
                `}).join("")}

            < !--Brand Health Widget-- >
        <div class="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm mt-4 text-left">
            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-3 text-left">BRAND HEALTH</p>
            <div class="flex gap-4 text-left">
                <div class="flex-1 bg-slate-900 rounded-xl p-3 text-white text-left">
                    <p class="text-[7px] font-black uppercase tracking-widest opacity-60 mb-1 text-left">TOTAL CAPITAL</p>
                    <p class="text-lg font-black tracking-tight text-white text-left">₹${(l/1e7).toFixed(2)} Cr</p>
                </div>
                <div class="flex-1 bg-slate-50 border border-slate-100 rounded-xl p-3 text-slate-900 flex justify-between items-center text-left">
                    <div class="text-left">
                        <p class="text-[7px] font-black uppercase tracking-widest opacity-40 mb-1 text-left">AVG. MARGIN</p>
                        <p class="text-lg font-black tracking-tight text-left">${l>0?(i/l*100).toFixed(1):0}%</p>
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
    `}async function wc(){const e=document.getElementById("inward-model").value,t=document.getElementById("inward-imei").value;if(document.getElementById("inward-sn").value,!e||!t){alert("Model name and IMEI are required.");return}const s=document.getElementById("confirm-inward-btn");s.disabled=!0,s.innerText="Syncing...";try{const a=await z.query("SELECT * FROM products WHERE name = ?",[e]);let l=1;if(a.length>0)l=parseInt(a[0].stock)+1,await z.query("UPDATE products SET stock = ? WHERE id = ?",[l,a[0].id]);else{const i="PRD-"+Math.random().toString(36).substr(2,6).toUpperCase();await z.query(`
                INSERT INTO products (id, name, category, brand, price, stock, imei)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `,[i,e,"Smartphone",e.split(" ")[0],5e4,1,t])}await z.query(`
            INSERT INTO inventory_logs (id, product_id, type, quantity, reason, date)
            VALUES (?, ?, ?, ?, ?, ?)
        `,["LOG-"+Math.random().toString(36).substr(2,6).toUpperCase(),e,"INWARD",1,"New Shipment Arrival",new Date().toISOString()]),await zt(),window.setInventoryMode("details")}catch(a){alert("Inward failed: "+a.message),s.disabled=!1,s.innerText="Confirm Inward"}}window.confirmInward=wc;function yc(){return`
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
    `}function kc(){return`
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
                
                ${cache.products.length===0?`
                    <div class="p-20 text-center opacity-30">
                        <span class="material-icons-outlined text-4xl mb-4">inventory_2</span>
                        <p class="text-[10px] font-black uppercase tracking-widest">No Inventory Found</p>
                    </div>
                `:cache.products.map(e=>{const t=parseInt(e.stock)||0,s=parseInt(e.price)||0,a=s*1.1,l=s*.9,i=t*l,o=(s-l)*t;return`
                    <div class="card p-5 bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-sm group text-left">
                        <div class="flex justify-between items-start mb-4 border-b border-dashed border-slate-100 pb-3 text-left">
                            <div class="text-left">
                                <h3 class="text-sm font-black text-slate-900 text-left">${e.name}</h3>
                                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wide mt-0.5 text-left">${e.color||"Standard"} • ${t} UNITS</p>
                            </div>
                            <span class="text-[8px] font-bold text-slate-300 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100 text-left">ID: ${e.id}</span>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mb-4 text-left">
                            <div class="text-left">
                                <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 text-left">BLOCKED CAPITAL</p>
                                <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">₹${i.toLocaleString()}</h4>
                            </div>
                             <div class="text-right">
                                <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 text-right">EXPECTED MARGIN</p>
                                <h4 class="text-sm font-black text-green-500 tracking-tight text-right">₹${o.toLocaleString()}</h4>
                            </div>
                        </div>
                        <div class="flex justify-between items-center text-center bg-slate-50 rounded-lg p-2 border border-slate-100">
                            <div>
                                <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest">MRP</p>
                                <p class="text-[9px] font-black text-slate-900">₹${a.toLocaleString()}</p>
                            </div>
                            <div>
                                <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest">MOP</p>
                                <p class="text-[9px] font-black text-slate-900">₹${s.toLocaleString()}</p>
                            </div>
                             <div>
                                <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest">DP (DIST.)</p>
                                <p class="text-[9px] font-black text-slate-900">₹${l.toLocaleString()}</p>
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
    `}function Ya(e){const t=e==="desktop-secondary";return window.setInventoryTab=s=>{r.inventoryTab=s,v()},window.setInventoryMode=s=>{r.inventoryMode=s,v()},t?r.inventoryMode==="inward"?yc():kc():`
        <div class="h-full flex flex-col relative bg-white">
            ${mc()}
            ${r.inventoryTab==="brands"?gc():vc()}
        </div>
    `}function Sc(e){return`
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
                        ${[{n:"Roles",i:"admin_panel_settings",k:"roles"},{n:"Finance",i:"account_balance",k:"accounting"},{n:"Ledger",i:"menu_book",k:"ledger"},{n:"Store",i:"store"},{n:"Security",i:"security"},{n:"Alerts",i:"notifications"},{n:"Taxes",i:"percent"},{n:"Plugins",i:"grid_view"},{n:"Teams",i:"hub"},{n:"Logs",i:"history"},{n:"Lang",i:"language"},{n:"Backup",i:"cloud_upload"},{n:"Bills",i:"description"},{n:"Scan",i:"qr_code_scanner"},{n:"Updates",i:"update"},{n:"API",i:"key"},{n:"Theme",i:"palette"},{n:"Help",i:"support"}].map(l=>`
                            <button onclick="${l.k?`window.setSettingsView('${l.k}')`:""}" class="aspect-square flex flex-col items-center justify-center p-1.5 hover:bg-slate-50 transition-all text-center ${r.settingsView===l.k?"bg-slate-100":""}">
                                <span class="material-icons-outlined text-xl ${r.settingsView===l.k?"text-slate-900 font-bold":"text-slate-500"} mb-1 text-center">${l.i}</span>
                                <span class="text-[7px] font-black uppercase text-center tracking-wider leading-tight ${r.settingsView===l.k?"text-slate-900":"text-slate-500"}">${l.n}</span>
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
    `}function _c(){const e=r.settingsSubView==="add",t=r.settingsActiveRole||"Store Manager";return`
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
                                    
                                    <div onclick="alert('Full permissions matrix view is coming soon!')" class="bg-slate-50 rounded-xl p-3 text-center text-[9px] font-black text-slate-400 uppercase tracking-widest cursor-pointer hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200">View Full permissions matrix</div>
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
    `}function Ac(){return`
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
    `}function Rc(){return`
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
    `}function Qa(e){const t=e==="desktop-secondary";return window.setSettingsView=s=>{r.settingsView=s,r.settingsSubView=null,v()},window.setSettingsSubView=s=>{r.settingsSubView=s,v()},window.setSettingsRole=s=>{r.settingsActiveRole=s,r.settingsSubView="detail",v()},window.saveNewRole=()=>{const s=document.querySelector('input[placeholder="e.g. Floor Supervisor"]');s&&s.value?(r.settingsActiveRole=s.value,r.settingsSubView="detail",alert(`Role "${s.value}" created successfully!`),v()):alert("Please enter a role name")},window.updateRole=()=>{alert("Role profile updated successfully!"),window.setSettingsSubView("detail")},t?r.settingsView==="roles"?_c():r.settingsView==="accounting"?Ac():r.settingsView==="ledger"?Rc():"":Sc(e)}function Cc(){return`
        <div class="space-y-4 text-left">
            ${[{id:"apple",n:"Apple",s:"PREMIUM PARTNER",amt:"₹4,82,500",live:12,comp:48,set:142,nSet:24,i:"apple"},{id:"nothing",n:"Nothing",s:"EMERGAGING BRAND",amt:"₹1,12,000",live:4,comp:15,set:56,nSet:8,i:"nothing"},{id:"oneplus",n:"OnePlus",s:"GLOBAL TECH",amt:"₹2,45,900",live:8,comp:32,set:98,nSet:12,i:"oneplus"}].map(t=>`
                <div onclick="selectSchemeBrand('${t.n}')" class="card p-5 border-2 transition-all group cursor-pointer relative overflow-hidden text-left ${r.activeBrand===t.n?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
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
    `}function Ic(){const t=window.getCache().schemes||[];return`
        <div class="space-y-4 animate-slide-up text-left">
            ${t.map(s=>{var a;return`
                <div onclick="window.setSchemeViewMode('details'); window.setActiveScheme(${JSON.stringify(s).replace(/"/g,"&quot;")})" class="card p-6 border-2 transition-all cursor-pointer group text-left ${((a=r.activeScheme)==null?void 0:a.id)===s.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
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
    `}function Ec(e){const t=e==="mobile",s=r.activeScheme;if(!s)return'<div class="p-10 text-center">Select a scheme to view details</div>';const l=(window.getCache().sales||[]).filter(o=>o.product_name.includes(s.brand)||o.items&&o.items.some(c=>c.name.includes(s.brand))),i={count:l.length,growth:"+0%",color:s.brand==="Apple"?"bg-indigo-950":s.brand==="Nothing"?"bg-slate-950":"bg-emerald-950"};return`
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
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest leading-none mb-1 text-left">BRAND: ${s.brand.toUpperCase()}</p>
                            <h3 class="text-sm font-black text-slate-900 text-left">${s.name}</h3>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3 text-left">
                         <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left">
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">PAYOUT</p>
                            <p class="text-[11px] font-black text-slate-900 text-left">₹${parseInt(s.payout).toLocaleString()}</p>
                        </div>
                         <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left">
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">VALID UNTIL</p>
                            <p class="text-[11px] font-black text-slate-900 text-left">${new Date(s.end_date).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>

                <!-- Metrics -->
                <div class="${i.color} rounded-[32px] p-6 text-white relative overflow-hidden text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 text-left">TOTAL ORDERS UNDER SCHEME</p>
                    <div class="flex items-end gap-3 text-left">
                        <h2 class="text-5xl font-black tracking-tighter text-left">${i.count}</h2>
                        <p class="text-[10px] font-bold text-green-400 mb-2 text-left">${i.growth} this week</p>
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
                        ${l.length===0?`
                            <div class="p-8 text-center opacity-30">
                                <p class="text-[10px] font-black uppercase tracking-widest">No qualifying sales found</p>
                            </div>
                        `:l.map(o=>`
                            <div class="card p-4 border-slate-100 hover:border-slate-300 transition-all cursor-pointer text-left">
                                <div class="flex justify-between items-start mb-2 text-left">
                                    <div class="text-left">
                                        <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">ORDER ID</p>
                                        <p class="text-xs font-black text-slate-900 text-left">${o.id}</p>
                                    </div>
                                     <div class="text-right">
                                        <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-right">DATE</p>
                                        <p class="text-[10px] font-black text-slate-900 text-right">${new Date(o.date).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <div class="flex justify-between items-end pt-3 border-t border-slate-50 text-left">
                                    <div class="text-left">
                                        <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">MODEL</p>
                                        <p class="text-[10px] font-bold text-slate-500 text-left">${o.product_name}</p>
                                    </div>
                                     <div class="text-right">
                                        <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-right">IMEI</p>
                                        <p class="text-[9px] font-bold text-slate-400 tracking-wider text-right">${o.imei||"N/A"}</p>
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
                <p class="text-[7px] font-bold text-slate-400 uppercase text-center mt-3 tracking-widest">COMPILING REPORT FOR ${s.b.toUpperCase()} SETTLEMENT</p>
            </div>
        </div>
    `}function Xa(e){const t=e==="desktop-secondary",s=e==="mobile";if(window.selectSchemeBrand=l=>{r.activeBrand=l,r.schemesTab="list",v()},window.selectScheme=l=>{r.activeScheme=l,s&&(r.showSchemeDetails=!0),v()},window.setSchemesTab=l=>{r.schemesTab=l,v()},window.toggleSchemeDetails=l=>{r.showSchemeDetails=l,v()},t||s&&r.showSchemeDetails)return Ec(e);const a=r.schemesTab==="brands";return`
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
                ${a?Cc():Ic()}
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
    `}function Tc(){const e=r.marketplaceTab==="browse";return`
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
    `}function qc(){const t=window.getCache().marketplace||[];return`
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
    `}function Mc(){return`
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
    `}function $c(e){return`
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
    `}function Za(e){if(e==="desktop-secondary"||e==="mobile"&&r.marketplaceViewMode==="add")return $c(e);const a=r.marketplaceTab==="browse";return`
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            ${Tc()}
            <div class="flex-1 overflow-y-auto px-8 space-y-6 custom-scrollbar pb-20 text-left">
                ${a?qc():Mc()}
            </div>

             <!-- Floating Action Button -->
            <div class="absolute bottom-32 right-8 z-30 text-left">
                <button onclick="window.setMarketplaceViewMode('add')" class="w-16 h-16 bg-slate-950 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-center">
                    <span class="material-icons-outlined text-3xl font-light text-center">add</span>
                </button>
            </div>
        </div>
    `}function jc(){return`
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
    `}function Lc(){return`
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
    `}function Pc(){const t=window.getCache().inquiries||[],s=a=>{switch(a){case"PENDING":return"bg-orange-50 text-orange-400";case"FULFILLED":return"bg-green-50 text-green-500";case"CONTACTED":return"bg-blue-50 text-blue-500";case"LOST SALE":return"bg-red-50 text-red-400";default:return"bg-slate-50 text-slate-400"}};return`
        <div class="space-y-3 text-left">
            ${t.map(a=>{var l;return`
                <div onclick="window.setActiveInquiry(${JSON.stringify(a).replace(/"/g,"&quot;")}); window.setInquiryViewMode('resolve')" class="card p-4 border-2 transition-all cursor-pointer flex items-center gap-4 text-left ${((l=r.activeInquiry)==null?void 0:l.id)===a.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
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
    `}async function Oc(){const e=document.getElementById("inq-customer").value,t=document.getElementById("inq-product").value,s=document.getElementById("inq-notes").value;if(!e||!t){alert("Customer and Product are required.");return}const a=document.getElementById("log-inquiry-btn");a.disabled=!0,a.innerText="Logging...";try{await z.query(`
            INSERT INTO inquiries (id, customer_name, product_name, request, status, created_at)
            VALUES (?, ?, ?, ?, ?, ?)
        `,["INQ-"+Math.random().toString(36).substr(2,6).toUpperCase(),e,t,s,"PENDING",new Date().toISOString()]),await zt(),window.setInquiryViewMode("list")}catch(l){alert("Error: "+l.message),a.disabled=!1,a.innerText="Log Inquiry"}}window.saveInquiry=Oc;function Dc(e){return`
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
    `}async function Nc(e){var t;if((t=r.activeInquiry)!=null&&t.id)try{await z.query("UPDATE inquiries SET status = ? WHERE id = ?",[e,r.activeInquiry.id]),await zt(),window.setInquiryViewMode("list")}catch(s){alert("Update failed: "+s.message)}}window.updateInquiryStatus=Nc;function Bc(){const e=r.activeInquiry;return e?`
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
    `:'<div class="p-20 text-center uppercase text-[10px] font-black opacity-30">No inquiry selected</div>'}function tl(e){return e==="desktop-secondary"||e==="mobile"&&r.inquiryViewMode==="add"?Dc():r.inquiryViewMode==="resolve"&&r.activeInquiry?Bc():`
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            ${jc()}
            <div class="px-8 text-left">
                ${Lc()}
                <div class="flex items-center justify-between mb-4 text-left">
                    <h3 class="text-[10px] font-black text-slate-950 uppercase tracking-widest text-left">Recent Inquiries</h3>
                    <button class="text-[9px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors text-right">View All</button>
                </div>
            </div>
            <div class="flex-1 overflow-y-auto px-8 space-y-3 custom-scrollbar pb-32 text-left">
                ${Pc()}
            </div>

            <!-- Floating Action Button -->
            <div class="absolute bottom-10 right-8 z-30 text-left">
                <button onclick="window.setInquiryViewMode('add')" class="w-14 h-14 bg-slate-950 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-center">
                    <span class="material-icons-outlined text-2xl text-center">add</span>
                </button>
            </div>
        </div>
    `}function Uc(){const t=window.getCache().campaigns||[];return`
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
                    <div onclick="window.setActiveCampaign(${JSON.stringify(s).replace(/"/g,"&quot;")}); window.setPreBookingViewMode('details')" class="card p-6 border-2 transition-all cursor-pointer relative overflow-hidden group text-left ${((a=r.activeCampaign)==null?void 0:a.id)===s.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
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
    `}function Vc(e){return`
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
    `}function Fc(e){const t=r.activeCampaign;return t?`
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
    `:""}function Hc(e){return`
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
    `}function el(e){return e==="desktop-secondary"||e==="mobile"&&r.preBookingViewMode==="create"?Vc():r.preBookingViewMode==="details"&&r.activeCampaign?Fc():r.preBookingViewMode==="public"?Hc():Uc()}function zc(){const e=window.getCache(),t=e.automations||[],s=e.sales||[];return`
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
                <button class="p-2 text-slate-400 hover:text-slate-900 text-left"><span class="material-symbols-outlined text-xl text-left">search</span></button>
            </div>
        </header>

        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-32 text-left">
            <!-- Stats Cards -->
            <div class="grid grid-cols-2 gap-4 text-left">
                <div class="card p-5 border-slate-200 shadow-sm text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Workflows</p>
                    <div class="flex items-baseline gap-2 text-left">
                        <h3 class="text-2xl font-black text-slate-900 tracking-tighter text-left">${t.length}</h3>
                        <span class="text-[9px] font-bold text-green-500 uppercase text-left">Live</span>
                    </div>
                </div>
                <div class="card p-5 border-slate-200 shadow-sm text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Recent Sales</p>
                    <div class="flex items-baseline gap-2 text-left">
                        <h3 class="text-2xl font-black text-slate-900 tracking-tighter text-left">${s.length}</h3>
                        <span class="text-[9px] font-bold text-blue-500 uppercase text-left">Tracked</span>
                    </div>
                </div>
            </div>

            <!-- Automations List -->
            <section class="space-y-4 text-left">
                <div class="flex items-center justify-between px-1 text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Active Automations</h3>
                    <button class="text-[8px] font-black text-slate-900 uppercase tracking-widest text-right">Settings</button>
                </div>

                <div class="space-y-3 text-left">
                    ${t.map(a=>`
                        <div class="card p-4 border-2 transition-all flex items-center justify-between text-left border-transparent hover:border-slate-100">
                            <div class="flex items-center gap-4 text-left">
                                <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-left">
                                    <span class="material-icons-outlined text-slate-300 text-sm">bolt</span>
                                </div>
                                <div class="text-left">
                                    <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">${a.name}</h4>
                                    <p class="text-[10px] font-bold text-slate-400 text-left">${a.type}</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="px-2 py-0.5 bg-green-50 text-[8px] font-black text-green-600 rounded uppercase tracking-wider mb-1 text-right">${a.status}</div>
                                <p class="text-[9px] font-bold text-slate-300 uppercase text-right">${new Date(a.created_at).toLocaleDateString()}</p>
                            </div>
                        </div>
                    `).join("")}

                    ${t.length===0?`
                        <div class="py-10 text-center opacity-20">
                            <p class="text-[10px] font-black uppercase tracking-widest">No automations configured</p>
                        </div>
                    `:""}
                </div>
            </section>
        </div>

        <!-- Floating Action Button -->
        <div class="absolute bottom-10 right-10 z-20 text-left">
            <button onclick="setAutomationMode('create')" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 text-center">
                <span class="material-icons-outlined text-2xl text-center">add</span>
            </button>
        </div>
    `}function Rl(e=!1){return`
        <div class="h-full flex flex-col bg-white dot-grid relative animate-slide-up text-left">
            <header class="p-6 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center gap-4 mb-6 text-left">
                    <button onclick="setAutomationMode('dashboard')" class="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 shadow-sm text-center">
                        <span class="material-icons-outlined text-left">chevron_left</span>
                    </button>
                    <div class="text-left">
                        <h2 class="text-xl font-black text-slate-900 tracking-tighter text-left">New Automation</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-left">RetailerOS</p>
                    </div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto px-6 sm:px-8 space-y-8 pb-32 text-left">
                <div class="space-y-3 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Select Customer</p>
                    <div class="card p-4 border-slate-200 text-left">
                        <p class="text-sm font-black text-slate-900 text-left">Arjun Mehta</p>
                    </div>
                    
                    <div class="card p-4 border-slate-900 shadow-lg flex items-center justify-between relative overflow-hidden text-left">
                        <div class="flex items-center gap-4 text-left">
                            <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center font-black text-xs text-white text-center">AM</div>
                            <div class="text-left">
                                <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">Arjun Mehta</h4>
                                <p class="text-[10px] font-bold text-slate-400 text-left">+91 98765 43210</p>
                            </div>
                        </div>
                        <div class="w-5 h-5 bg-slate-900 rounded-full flex items-center justify-center text-center">
                            <span class="material-icons-outlined text-white text-[12px] text-center">done</span>
                        </div>
                        <div class="absolute left-0 top-0 bottom-0 w-1 bg-slate-900 text-left"></div>
                    </div>
                </div>

                <div class="space-y-4 text-left">
                    <div class="flex items-center justify-between text-left">
                         <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Recent Transactions</p>
                         <span class="text-[9px] font-black text-slate-400 uppercase text-right">3 Found</span>
                    </div>

                    <div class="card p-5 border-2 border-slate-900 shadow-sm relative overflow-hidden text-left">
                        <div class="flex items-center gap-4 text-left">
                            <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-center">
                                <span class="material-icons-outlined text-slate-400 text-center">smartphone</span>
                            </div>
                            <div class="flex-1 text-left">
                                <div class="flex items-center justify-between text-left">
                                    <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">Nothing Phone 3a</h4>
                                    <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-right">Today</span>
                                </div>
                                <div class="flex items-center justify-between mt-0.5 text-left">
                                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wide text-left">Order #88219 • ₹23,999</p>
                                    <p class="text-[9px] font-bold text-slate-300 uppercase text-right">14:20 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card p-5 border border-slate-100 shadow-sm relative overflow-hidden opacity-60 text-left">
                        <div class="flex items-center gap-4 text-left">
                            <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-center">
                                <span class="material-icons-outlined text-slate-300 text-center">headphones</span>
                            </div>
                            <div class="flex-1 text-left">
                                <div class="flex items-center justify-between text-left">
                                    <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">Ear (2) Black</h4>
                                    <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-right">12 Oct</span>
                                </div>
                                <div class="flex items-center justify-between mt-0.5 text-left">
                                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wide text-left">Order #77102 • ₹9,999</p>
                                    <p class="text-[9px] font-bold text-slate-300 uppercase text-right">11:05 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Action -->
            <div class="absolute bottom-0 left-0 right-0 p-8 bg-white border-t border-slate-50 text-center">
                 <button class="w-full py-5 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl hover:scale-[1.01] transition-transform active:scale-95 flex items-center justify-center gap-3 text-center">
                    <span class="material-icons-outlined text-sm text-center">play_circle</span> Start Automation
                </button>
            </div>
        </div>
    `}function Cl(e,t=!1){return`
        <div class="h-full flex flex-col bg-white dot-grid relative animate-slide-up text-left">
            <header class="p-6 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                    <div class="flex items-center gap-4 text-left">
                        <button onclick="setAutomationMode('dashboard')" class="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 shadow-sm text-center">
                            <span class="material-icons-outlined text-center">chevron_left</span>
                        </button>
                        <div class="text-left">
                            <div class="flex items-center gap-2 text-left">
                                <p class="text-[9px] font-bold text-slate-300 uppercase tracking-widest text-left">Automation</p>
                                <span class="material-icons-outlined text-[10px] text-slate-300 transition-colors text-left">chevron_right</span>
                                <h2 class="text-sm font-black text-slate-900 tracking-tight text-left">Arjun Mehta</h2>
                            </div>
                            <p class="text-[9px] font-black text-green-500 uppercase tracking-[0.2em] mt-0.5 text-left">Active Sequence</p>
                        </div>
                    </div>
                    <button class="p-2 text-slate-400 hover:text-slate-900 text-right"><span class="material-symbols-outlined text-xl text-right">more_horiz</span></button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto px-6 sm:px-8 relative pt-6 custom-scrollbar text-left">
                <!-- Timeline Vertical Line -->
                <div class="absolute left-[39px] sm:left-[47px] top-0 bottom-0 w-px bg-slate-200 border-dashed border-l border-slate-200 text-left"></div>

                <div class="space-y-12 pb-40 relative z-10 text-left">
                    <!-- T+0 -->
                    <div class="flex gap-6 text-left">
                        <div class="shrink-0 w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-xl shadow-slate-200 relative z-10 text-center">T+0</div>
                        <div class="flex-1 card p-5 border-slate-100 shadow-sm relative text-left">
                             <div class="flex items-center justify-between mb-4 text-left">
                                <h4 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Purchase Confirmation</h4>
                                <span class="px-2 py-0.5 bg-green-50 text-[8px] font-black text-green-600 rounded uppercase tracking-wider text-right">Sent</span>
                             </div>
                             <p class="text-xs font-medium text-slate-600 leading-relaxed italic border-l-2 border-slate-100 pl-4 bg-slate-50/50 p-3 rounded-lg text-left">
                                "Hi Arjun! Thank you for choosing us. Your warranty for the new device is now active. View details here: retailer.os/w/2938"
                             </p>
                        </div>
                    </div>

                    <!-- T+3 -->
                    <div class="flex gap-6 text-left">
                        <div class="shrink-0 w-10 h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-[10px] font-black text-slate-400 relative z-10 text-center">T+3</div>
                        <div class="flex-1 card p-5 border-slate-100 shadow-sm relative text-left">
                             <div class="flex items-center justify-between mb-4 text-left">
                                <h4 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Educational Tip</h4>
                                <span class="px-2 py-0.5 bg-blue-50 text-[8px] font-black text-blue-600 rounded uppercase tracking-wider text-right">Scheduled</span>
                             </div>
                             <p class="text-xs font-medium text-slate-600 leading-relaxed italic border-l-2 border-slate-100 pl-4 bg-slate-50/50 p-3 rounded-lg text-left">
                                "Pro Tip: To maximize your battery health, try to keep your charge between 20% and 80%. Here's a guide to your settings..."
                             </p>
                        </div>
                    </div>

                    <!-- T+15 -->
                    <div class="flex gap-6 text-left">
                        <div class="shrink-0 w-10 h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-[10px] font-black text-slate-400 relative z-10 text-center">T+15</div>
                        <div class="flex-1 card p-5 border-slate-100 shadow-sm relative bg-white/50 border-dashed text-left">
                             <div class="flex items-center justify-between mb-4 text-left">
                                <h4 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Accessory Upsell</h4>
                                <span class="px-2 py-0.5 bg-slate-100 text-[8px] font-black text-slate-400 rounded uppercase tracking-wider text-right">Pending</span>
                             </div>
                             <p class="text-xs font-medium text-slate-400 leading-relaxed italic border-l-2 border-slate-100 pl-4 bg-slate-50/50 p-3 rounded-lg text-left">
                                "Found the perfect match? Get 15% off on all TWS and Cases this week only. Use code: MYNEWGEAR"
                             </p>
                        </div>
                    </div>

                     <!-- T+90 -->
                     <div class="flex gap-6 opacity-40 grayscale text-left">
                        <div class="shrink-0 w-10 h-10 bg-white border border-slate-100 rounded-full flex items-center justify-center text-[10px] font-black text-slate-300 relative z-10 text-center">T+90</div>
                        <div class="flex-1 card p-5 border-slate-100 shadow-sm relative text-left">
                             <div class="flex items-center justify-between mb-4 text-left">
                                <h4 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Upgrade Offer</h4>
                                <span class="px-2 py-0.5 bg-slate-50 text-[8px] font-black text-slate-300 rounded uppercase tracking-wider text-right">Locked</span>
                             </div>
                             <p class="text-xs font-medium text-slate-300 leading-relaxed italic border-l-2 border-slate-100 pl-4 p-3 rounded-lg text-left">
                                "Be the first to upgrade! The new flagship series launches tomorrow. Your loyalty trade-in value is estimated at ₹45,000."
                             </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Floating Action for Sequence -->
            <div class="absolute bottom-32 right-10 z-20 text-center">
                <button class="w-12 h-12 bg-slate-900 text-white rounded-xl shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 text-center">
                    <span class="material-icons-outlined text-lg text-center">add_comment</span>
                </button>
            </div>

            <!-- Footer Profile -->
            <div class="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-slate-50 flex items-center justify-between text-left">
                <div class="flex items-center gap-3 text-left">
                    <div class="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-black text-[10px] text-slate-400 text-center">AS</div>
                    <div class="text-left">
                        <h4 class="text-[11px] font-black text-slate-900 tracking-tight text-left">Apple Store - Mumbai Central</h4>
                        <p class="text-[7px] font-bold text-slate-400 uppercase tracking-widest text-left">Store Manager</p>
                    </div>
                </div>
                <button class="flex items-center gap-2 text-[8px] font-black text-slate-900 uppercase tracking-widest text-right">
                    Logout <span class="material-icons-outlined text-xs text-center">logout</span>
                </button>
            </div>
        </div>
    `}function sl(e){const t=e==="mobile",s=e==="desktop-secondary";return window.setAutomationMode=(a,l=null)=>{r.automationViewMode=a,l!==null&&(r.activeAutomationId=l),v()},s?r.automationViewMode==="create"?Rl():r.automationViewMode==="details"&&r.activeAutomationId?Cl():`
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50 text-center">smart_toy</span>
                    <p class="text-[10px] font-black uppercase tracking-widest text-center">Select a workflow or create new</p>
                </div>
            </div>
        `:t&&r.automationViewMode==="create"?Rl(!0):t&&r.automationViewMode==="details"?Cl(r.activeAutomationId,!0):zc()}function Gc(e=!0){if(!e)return;const t=[r.currentApp];r.currentApp==="sales"?t.push(r.currentTab):r.currentApp==="clients"?(t.push(r.clientViewMode),r.selectedClient&&r.clientViewMode==="profile"&&t.push(encodeURIComponent(r.selectedClient))):r.currentApp==="reports"?t.push(r.reportsTab):r.currentApp==="repairs"?(t.push(r.repairTab),t.push(r.repairViewMode)):r.currentApp==="inventory"?(t.push(r.inventoryTab),t.push(r.inventoryMode)):r.currentApp==="marketplace"?(t.push(r.marketplaceTab),t.push(r.marketplaceViewMode)):r.currentApp==="inquiries"?t.push(r.inquiryViewMode):r.currentApp==="prebooking"?t.push(r.preBookingViewMode):r.currentApp==="automation"?t.push(r.automationViewMode):r.currentApp==="schemes"?t.push(r.schemesTab):r.currentApp==="settings"&&t.push(r.settingsView);const s="#/"+t.filter(Boolean).join("/");window.location.hash!==s&&window.history.pushState(null,"",s)}function Il(){const e=window.location.hash.replace("#/","");if(!e)return;const t=e.split("/"),s=t[0];s&&(r.currentApp=s),s==="sales"?t[1]&&(r.currentTab=t[1]):s==="clients"?(t[1]&&(r.clientViewMode=t[1]),t[2]&&(r.selectedClient=decodeURIComponent(t[2]))):s==="reports"?t[1]&&(r.reportsTab=t[1]):s==="repairs"?(t[1]&&(r.repairTab=t[1]),t[2]&&(r.repairViewMode=t[2])):s==="inventory"?(t[1]&&(r.inventoryTab=t[1]),t[2]&&(r.inventoryMode=t[2])):s==="marketplace"?(t[1]&&(r.marketplaceTab=t[1]),t[2]&&(r.marketplaceViewMode=t[2])):s==="inquiries"?t[1]&&(r.inquiryViewMode=t[1]):s==="prebooking"?t[1]&&(r.preBookingViewMode=t[1]):s==="automation"?t[1]&&(r.automationViewMode=t[1]):s==="schemes"?t[1]&&(r.schemesTab=t[1]):s==="settings"&&t[1]&&(r.settingsView=t[1]),v(!1)}function Wc(){window.addEventListener("hashchange",Il),Il()}function Hn(){return r.currentApp==="sales"?r.currentTab==="new-sale"?Vn():Fn():r.currentApp==="clients"?za("desktop-primary"):r.currentApp==="reports"?Ga("desktop-primary"):r.currentApp==="repairs"?Wa("desktop-primary"):r.currentApp==="marketing"?Ja("desktop-primary"):r.currentApp==="promoters"?Ka("desktop-primary"):r.currentApp==="inventory"?Ya("desktop-primary"):r.currentApp==="settings"?Qa("desktop-primary"):r.currentApp==="schemes"?Xa("desktop-primary"):r.currentApp==="marketplace"?Za("desktop-primary"):r.currentApp==="inquiries"?tl("desktop-primary"):r.currentApp==="prebooking"?el("desktop-primary"):r.currentApp==="automation"?sl("desktop-primary"):'<div class="p-10 flex items-center justify-center h-full text-slate-300 font-bold uppercase tracking-widest">App Module Not Found</div>'}function Jc(){return r.currentApp==="sales"?Fa():r.currentApp==="clients"?za("desktop-secondary"):r.currentApp==="reports"?Ga("desktop-secondary"):r.currentApp==="repairs"?Wa("desktop-secondary"):r.currentApp==="marketing"?Ja("desktop-secondary"):r.currentApp==="promoters"?Ka("desktop-secondary"):r.currentApp==="inventory"?Ya("desktop-secondary"):r.currentApp==="settings"?Qa("desktop-secondary"):r.currentApp==="schemes"?Xa("desktop-secondary"):r.currentApp==="marketplace"?Za("desktop-secondary"):r.currentApp==="inquiries"?tl("desktop-secondary"):r.currentApp==="prebooking"?el("desktop-secondary"):r.currentApp==="automation"?sl("desktop-secondary"):'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-2 opacity-50">grid_view</span><p class="text-[10px] font-black uppercase tracking-widest">Select an app to view details</p></div></div>'}function zn(){return da("desktop")}function Kc(){return`
        <div class="h-full flex flex-row divide-x divide-slate-200 bg-white w-full">
            <!-- Col 1: App Menu (25% Width) -->
            <div class="w-[25%] shrink-0 h-full bg-white z-20 overflow-y-auto border-r border-slate-200">
                ${zn()}
            </div>

            <!-- Col 2: Active App (Flexible / Remaining Width ~45%) -->
            <div class="flex-1 bg-white h-full overflow-hidden flex flex-col relative z-10">
               ${r.isLoggedIn?r.currentApp==="launcher"?'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-4 opacity-20">arrow_back</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Select an App from the Menu</p></div></div>':Hn():'<div class="h-full w-full bg-slate-950 flex flex-col items-center justify-center text-white/5 font-black text-[20vw] leading-none overflow-hidden select-none pointer-events-none"><div>OS</div></div>'}
            </div>

            <!-- Col 3: Preview (30% Width) -->
            <div class="w-[30%] shrink-0 bg-slate-50/50 h-full overflow-hidden flex flex-col relative dot-grid border-l border-slate-200">
                ${r.isLoggedIn?r.currentApp==="launcher"?'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-6xl mb-4 opacity-20">dashboard</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Retailer OS Environment</p></div></div>':Jc():'<div class="h-full w-full bg-slate-950/95 flex flex-col items-center justify-center text-white/5 font-black text-[15vw] leading-none overflow-hidden select-none pointer-events-none"><div>RETAILER</div></div>'}
            </div>
        </div>
    `}function Yc(){return`
        <div class="h-full grid grid-cols-2 divide-x divide-slate-200 bg-white">
            <!-- Col 1: Sidebar / App Menu -->
            <div class="col-span-1 h-full bg-white z-20 overflow-y-auto">
                ${zn()}
            </div>

            <!-- Col 2: Primary Content -->
            <div class="col-span-1 bg-white h-full overflow-hidden flex flex-col relative z-10">
               ${r.currentApp==="launcher"?'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-4 opacity-20">arrow_back</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Select an App from the Menu</p></div></div>':Hn()}
               
               <!-- Tablet Specific: Sticky Preview Button if Active -->
               ${r.currentApp==="sales"&&(r.currentTab==="new-sale"||r.currentTab==="history"&&r.salesHistoryId)?`
                    <div class="absolute bottom-6 right-6 z-50">
                        <button onclick="toggleMobileReceipt(true)" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                            <span class="material-icons-outlined">receipt_long</span>
                        </button>
                    </div>
                    ${r.showMobileReceipt?`
                        <div class="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-8">
                            <div class="bg-white w-full max-w-lg h-[80vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">
                                <div class="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                                    <h3 class="text-xs font-black text-slate-900 uppercase tracking-widest">Receipt Preview</h3>
                                    <button onclick="toggleMobileReceipt(false)" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-white rounded-full shadow-sm"><span class="material-icons-outlined text-lg">close</span></button>
                                </div>
                                <div class="overflow-y-auto flex-1 p-8 bg-slate-50/50">
                                    ${Fa()}
                                </div>
                            </div>
                        </div>
                    `:""}
               `:""}
            </div>
        </div>
    `}function Qc(){if(!r.isLoggedIn)return Pl();if(r.currentApp==="launcher")return da("mobile");if(r.currentApp==="sales"){const t=r.currentTab==="new-sale"||r.currentTab==="history"&&r.salesHistoryId;return r.showMobileReceipt&&t?`
                <div class="fixed inset-0 z-[60] bg-white flex flex-col animate-slide-up">
                    <div class="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50 shrink-0">
                        <div class="flex items-center gap-2">
                             <button onclick="toggleMobileReceipt(false)" class="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-900"><span class="material-icons-outlined">arrow_back</span></button>
                             <h3 class="text-xs font-black text-slate-900 uppercase tracking-widest">Receipt Preview</h3>
                        </div>
                    </div>
                    <div class="overflow-y-auto flex-1 p-4 bg-slate-50/50">
                        ${Fa()}
                    </div>
                    <div class="p-4 border-t border-slate-100 bg-white shrink-0">
                        <button class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase shadow-lg flex items-center justify-center gap-2">
                            <span class="material-icons-outlined text-sm">print</span> Print Receipt
                        </button>
                    </div>
                </div>
            `:`
            <div class="flex flex-col w-full h-full overflow-hidden bg-slate-50 relative">
                ${r.currentTab==="new-sale"?Vn():Fn()}
                ${t?'<div class="h-28 shrink-0 w-full"></div>':""} <!-- Spacer inside flex flow pushing content up -->
            </div>
            ${t?`
            <div class="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100 z-50 w-full mb-safe">
                <button onclick="toggleMobileReceipt(true)" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase shadow-xl flex items-center justify-center gap-2">
                    <span class="material-icons-outlined text-sm">receipt_long</span> Preview Receipt
                </button>
            </div>
        `:""}
        `}let e="";if(r.currentApp==="clients")e=za("mobile");else if(r.currentApp==="reports")e=Ga("mobile");else if(r.currentApp==="repairs")e=Wa("mobile");else if(r.currentApp==="marketing")e=Ja("mobile");else if(r.currentApp==="promoters")e=Ka("mobile");else if(r.currentApp==="inventory")e=Ya("mobile");else if(r.currentApp==="settings")e=Qa("mobile");else if(r.currentApp==="schemes")e=Xa("mobile");else if(r.currentApp==="marketplace")e=Za("mobile");else if(r.currentApp==="inquiries")e=tl("mobile");else if(r.currentApp==="prebooking")e=el("mobile");else if(r.currentApp==="automation")e=sl("mobile");else return da("mobile");return`
        <div class="flex flex-col w-full h-full overflow-hidden bg-slate-50 relative">
            ${e}
        </div>
    `}function al(){const e=document.getElementById("app");if(e)try{const t=window.innerWidth;t<768?e.innerHTML=Qc():t>=768&&t<1024?e.innerHTML=Yc():e.innerHTML=Kc()}catch(t){console.error(t),e.innerHTML=`< div class="p-4 text-red-500 font-bold" > Error: ${t.message} <br><small>${t.stack}</small></div>`}}jl(al);jl(Gc);Wc();zt();window.addEventListener("resize",()=>{window.innerWidth!==r.viewportWidth&&(r.viewportWidth=window.innerWidth,r.gridCols=window.innerWidth<768?4:3,al())});al();

var Zi=Object.defineProperty;var zn=e=>{throw TypeError(e)};var er=(e,t,s)=>t in e?Zi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var L=(e,t,s)=>er(e,typeof t!="symbol"?t+"":t,s),Fa=(e,t,s)=>t.has(e)||zn("Cannot "+s);var i=(e,t,s)=>(Fa(e,t,"read from private field"),s?s.call(e):t.get(e)),b=(e,t,s)=>t.has(e)?zn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),x=(e,t,s,a)=>(Fa(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),g=(e,t,s)=>(Fa(e,t,"access private method"),s);var Yt=(e,t,s,a)=>({set _(n){x(e,t,n,s)},get _(){return i(e,t,a)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(n){if(n.ep)return;n.ep=!0;const l=s(n);fetch(n.href,l)}})();const tr=localStorage.getItem("retaileros_logged_in")==="true",sr=localStorage.getItem("retaileros_retailer_id")||null,ar=localStorage.getItem("retaileros_retailer_code")||null,nr=localStorage.getItem("retaileros_retailer_name")||null,d={retailerId:sr,retailerCode:ar,retailerName:nr,currentApp:window.innerWidth<768?"launcher":"sales",currentTab:"new-sale",salesMode:"default",salesHistoryId:"ORD-99281",historyViewMode:"completed",historyDateFilter:"today",historyFromDate:"",historyToDate:"",showMobileReceipt:!1,reportsTab:"sales",repairTab:"active",repairViewMode:"search",selectedRepairDevice:null,activeRepairId:null,repairContext:null,selectedClient:null,selectedClientId:null,clientViewMode:"directory",clientSearchQuery:"",clientInvoiceId:null,selectedGroupId:null,groupViewMode:"list",groupSearchQuery:"",promoterViewMode:"performance",inventoryTab:"brands",inventoryMode:"details",activeCategory:null,settingsView:"roles",viewportWidth:window.innerWidth,gridCols:window.innerWidth<768?4:3,schemesTab:"list",activeSchemeBrand:"Apple",activeScheme:"June Activation Bonus",showSchemeDetails:!1,marketplaceTab:"browse",marketplaceViewMode:"list",isLoggedIn:tr,authMode:"login",registrationStep:1,inquiryViewMode:"list",activeInquiry:null,preBookingViewMode:"dashboard",activeCampaign:null,automationViewMode:"dashboard",activeAutomationId:null},$l=[],El=e=>{$l.push(e)},I=(e=!0)=>{$l.forEach(t=>t(e))};function lr(e){d.currentApp=e,e==="clients"&&(d.clientViewMode="directory"),I()}function ir(e){d.currentTab=e,I()}function rr(e){d.salesHistoryId=e,e&&window.innerWidth<768&&(d.showMobileReceipt=!0),I()}function or(e){d.showMobileReceipt=e,I()}function cr(e){d.reportsTab=e,I()}function dr(e){d.repairTab=e,I()}function pr(e,t=null){d.repairViewMode=e,t&&(d.selectedRepairDevice=t),I()}function ur(e){d.gridCols=e,I()}function Il(e,t=null,s=null){d.clientViewMode=e,t&&(d.selectedClient=t),s&&(d.selectedClientId=s),e!=="invoice"&&(d.clientInvoiceId=null),I()}function xr(e){d.clientInvoiceId=e,d.clientViewMode="invoice",I()}function fr(e){d.schemesTab=e,I()}function br(e){d.activeSchemeBrand=e,I()}function mr(e){d.activeScheme=e,I()}function hr(e){d.showSchemeDetails=e,I()}function gr(e){d.marketplaceTab=e,I()}function vr(e){d.marketplaceViewMode=e,I()}function wr(e,t,s){d.retailerId=e,d.retailerCode=t,d.retailerName=s,localStorage.setItem("retaileros_retailer_id",e),localStorage.setItem("retaileros_retailer_code",t),localStorage.setItem("retaileros_retailer_name",s)}function Cl(){d.retailerId=null,d.retailerCode=null,d.retailerName=null,localStorage.removeItem("retaileros_retailer_id"),localStorage.removeItem("retaileros_retailer_code"),localStorage.removeItem("retaileros_retailer_name")}function yr(){return d.retailerId}function kr(e){d.isLoggedIn=e,e?localStorage.setItem("retaileros_logged_in","true"):(localStorage.removeItem("retaileros_logged_in"),Cl());const t=window.innerWidth<768;d.currentApp=e?t?"launcher":"sales":"launcher",I()}function _r(e){d.authMode=e,d.registrationStep=1,I()}function Sr(e){d.registrationStep=e,window.updateAuthContent?window.updateAuthContent():I()}function $r(e){d.inquiryViewMode=e,I()}function Er(e){d.activeInquiry=e,I()}function Ir(e){d.preBookingViewMode=e,I()}function Cr(e){d.activeCampaign=e,I()}function Rr(e){d.automationViewMode=e,I()}function Ar(e){d.activeAutomationId=e,I()}window.triggerRender=I;window.setApp=lr;window.setTab=ir;window.setSalesHistoryId=rr;window.toggleMobileReceipt=or;window.setReportsTab=cr;window.setRepairTab=dr;function Rl(e){d.salesMode=e,I()}window.setSalesMode=Rl;function Tr(e){d.historyViewMode=e,I()}function Mr(e){d.historyDateFilter=e,e!=="custom"&&(d.historyFromDate="",d.historyToDate=""),I()}function Dr(e,t){d.historyFromDate=e,d.historyToDate=t,d.historyDateFilter="custom",I()}window.setHistoryViewMode=Tr;window.setHistoryDateFilter=Mr;window.setHistoryCustomDates=Dr;window.setRepairMode=pr;window.setGridCols=ur;window.setClientMode=Il;window.viewClientInvoice=xr;window.setSchemesTab=fr;window.setSchemeBrand=br;window.setScheme=mr;window.toggleSchemeDetails=hr;window.setMarketplaceTab=gr;window.setMarketplaceViewMode=vr;window.setRetailer=wr;window.clearRetailer=Cl;window.getRetailerId=yr;window.setLoginStatus=kr;window.setAuthMode=_r;window.setRegistrationStep=Sr;window.setInquiryViewMode=$r;window.setActiveInquiry=Er;window.setPreBookingViewMode=Ir;window.setActiveCampaign=Cr;window.setAutomationViewMode=Rr;window.setActiveAutomation=Ar;function Lr(e){d.groupViewMode=e,I()}function jr(e){d.selectedGroupId=e,I()}window.setGroupViewMode=Lr;window.setSelectedGroup=jr;const Or="modulepreload",Pr=function(e){return"/"+e},Yn={},Us=function(t,s,a){let n=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));n=Promise.allSettled(s.map(p=>{if(p=Pr(p),p in Yn)return;Yn[p]=!0;const c=p.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${u}`))return;const y=document.createElement("link");if(y.rel=c?"stylesheet":Or,c||(y.as="script"),y.crossOrigin="",y.href=p,o&&y.setAttribute("nonce",o),document.head.appendChild(y),c)return new Promise((v,k)=>{y.addEventListener("load",v),y.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${p}`)))})}))}function l(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return n.then(r=>{for(const o of r||[])o.status==="rejected"&&l(o.reason);return t().catch(l)})};function Al(){return`
        <div class="h-full w-full flex flex-col items-center justify-center p-0 animate-slide-up">
            <!-- Header Section (Subtle for Sidebar) -->
            <div class="text-center mb-8">
                <p class="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">Enterprise Authentication</p>
            </div>

            <!-- Login Content -->
            <div class="w-full max-w-sm space-y-8">
                <div>
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Mobile Number or Store Code</p>
                    <div class="relative group">
                        <input type="text" id="login-identifier" placeholder="e.g. 9876543210 or ROS-20260206-0001" class="w-full h-14 pl-5 pr-12 bg-white border border-slate-100 rounded-2xl text-xs font-black text-slate-900 focus:ring-4 focus:ring-slate-950/5 focus:border-slate-950 transition-all shadow-sm">
                        <span class="material-icons-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">store</span>
                    </div>
                </div>

                <div id="login-error" class="hidden">
                    <div class="p-3 bg-red-50 border border-red-200 rounded-xl">
                        <p class="text-[10px] font-bold text-red-600" id="login-error-text"></p>
                    </div>
                </div>

                <div class="pt-4 space-y-3">
                    <button id="login-btn" onclick="window.loginWithCredentials()" class="w-full py-4 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl hover:scale-[1.02] active:scale-95 transition-all">
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
    `}window.loginWithCredentials=async function(){const e=document.getElementById("login-identifier"),t=e?e.value.trim():"",s=document.getElementById("login-error"),a=document.getElementById("login-error-text"),n=document.getElementById("login-btn");if(!t){s&&a&&(a.textContent="Please enter your mobile number or store code.",s.classList.remove("hidden"));return}s&&s.classList.add("hidden"),n&&(n.disabled=!0,n.textContent="Authenticating...");try{const{query:l}=await Us(async()=>{const{query:p}=await Promise.resolve().then(()=>In);return{query:p}},void 0);let r=null;if(/^\d{10}$/.test(t)){const p=await l("SELECT * FROM retailers WHERE mobile_number = ? AND status = 'active' LIMIT 1",[t]);p.length>0&&(r=p[0])}if(!r){const p=await l("SELECT * FROM retailers WHERE retailer_code = ? AND status = 'active' LIMIT 1",[t.toUpperCase()]);p.length>0&&(r=p[0])}if(!r){s&&a&&(a.textContent="No registered store found. Please check your mobile number or store code, or register first.",s.classList.remove("hidden"));return}window.setRetailer(r.id,r.retailer_code,r.retailer_name);const{syncData:o}=await Us(async()=>{const{syncData:p}=await Promise.resolve().then(()=>Pi);return{syncData:p}},void 0);await o(),window.setLoginStatus(!0)}catch(l){console.error("Login failed:",l),s&&a&&(a.textContent="Login failed: "+l.message,s.classList.remove("hidden"))}finally{n&&(n.disabled=!1,n.textContent="Authenticate")}};function Hs(e="mobile"){return e==="desktop-primary"?Nr():e==="desktop-secondary"?qr():Br()}function Nr(){const e=d.registrationStep;return e===3?`
            <div class="h-full w-full flex flex-col items-center justify-center p-8 bg-white dot-grid relative overflow-hidden text-center">
                <div class="animate-slide-up max-w-md">
                    <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span class="material-icons-outlined text-green-600 text-5xl">check_circle</span>
                    </div>
                    <h2 class="text-2xl font-black text-slate-900 mb-3">Almost There!</h2>
                    <p class="text-sm text-slate-500 mb-8">Please review and confirm your store details in the right panel to complete registration.</p>

                    <div class="space-y-3">
                        <div class="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                            <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                                <span class="material-icons-outlined text-white text-sm">done</span>
                            </div>
                            <div class="text-left">
                                <p class="text-[10px] font-black text-green-700 uppercase">Mobile Verified</p>
                                <p class="text-xs text-green-600">+91 98765 43210</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                            <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                                <span class="material-icons-outlined text-white text-sm">arrow_forward</span>
                            </div>
                            <div class="text-left">
                                <p class="text-[10px] font-black text-blue-700 uppercase">Next Step</p>
                                <p class="text-xs text-blue-600">Confirm store details →</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="absolute bottom-6 flex items-center gap-2">
                    <span class="material-icons-outlined text-indigo-400 text-xs">verified_user</span>
                    <p class="text-[9px] font-black text-indigo-400 uppercase tracking-widest opacity-30">Secure Encryption</p>
                </div>
            </div>
        `:`
        <div class="h-full w-full flex flex-col items-center justify-center p-8 bg-white dot-grid relative overflow-hidden text-center">
            ${mn(e)}

            <div class="absolute bottom-6 flex items-center gap-2">
                <span class="material-icons-outlined text-indigo-400 text-xs">verified_user</span>
                <p class="text-[9px] font-black text-indigo-400 uppercase tracking-widest opacity-30">Secure ${e===2?"Verification":"Encryption"}</p>
            </div>
        </div>
    `}function qr(){return d.registrationStep<3?`
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
            ${mn(3)}
        </div>
    `}function Br(){const e=d.registrationStep;return`
        <div class="h-full w-full flex flex-col items-center justify-center p-4 md:p-6 bg-white dot-grid relative overflow-y-auto">
            <div class="w-full flex-1 flex items-center justify-center py-8">
                ${mn(e)}
            </div>

            <div class="flex items-center gap-2 pb-4">
                <span class="material-icons-outlined text-indigo-400 text-xs">verified_user</span>
                <p class="text-[9px] font-black text-indigo-400 uppercase tracking-widest opacity-30">Secure ${e===2?"Verification":"Encryption"}</p>
            </div>
            <div class="w-40 h-1 bg-slate-100 rounded-full mb-3"></div>
        </div>
    `}function mn(e){let t="";if(e===1)t=`
            <div class="animate-slide-up w-full max-w-md mx-auto px-4 md:px-0">
                 <div class="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center shadow-2xl mb-6 mx-auto">
                    <span class="material-icons-outlined text-white text-3xl">terminal</span>
                </div>
                <h1 class="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 mb-1">Registration</h1>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 md:mb-12">RetailerOS Enterprise</p>

                <div class="card p-6 md:p-8 border-slate-100 shadow-xl text-left">
                    <p class="text-[9px] md:text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-3">Enter Mobile Number</p>
                    <div class="flex items-center gap-2 mb-6 md:mb-8">
                         <div class="h-14 md:h-14 px-3 md:px-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-2 shrink-0">
                            <div class="w-6 h-4 bg-gradient-to-r from-orange-400 via-white to-green-500 rounded-sm"></div>
                            <span class="text-sm font-black text-slate-900">+91</span>
                         </div>
                         <input
                            type="tel"
                            inputmode="numeric"
                            pattern="[0-9]*"
                            maxlength="10"
                            id="mobile-input"
                            placeholder="00000 00000"
                            class="flex-1 h-14 px-4 md:px-5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-black text-slate-900 tracking-wider focus:border-slate-900 focus:outline-none transition-colors">
                    </div>
                    <button onclick="window.requestOtp()" class="w-full py-5 md:py-4 bg-black text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl active:scale-98 transition-transform">
                        Request OTP
                    </button>
                </div>

                <p class="mt-6 md:mt-8 px-4 md:px-12 text-[8px] font-medium text-slate-400 leading-relaxed text-center">By continuing, you agree to our <span class="text-slate-900 underline">Terms of Service</span> and <span class="text-slate-900 underline">Privacy Policy</span></p>
            </div>
        `;else if(e===2)t=`
            <div class="animate-slide-up w-full max-w-sm mx-auto px-4 md:px-0">
                 <header class="flex items-center justify-between mb-8 md:mb-12 w-full">
                    <button onclick="window.setRegistrationStep(1)" class="w-10 h-10 md:w-8 md:h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 active:scale-95 transition-transform"><span class="material-icons-outlined text-lg">arrow_back</span></button>
                    <div class="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center shadow-lg">
                        <span class="material-icons-outlined text-white text-xl">terminal</span>
                    </div>
                    <div class="w-10 md:w-8"></div>
                </header>

                <div class="text-left w-full">
                    <h1 class="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 mb-2">Verify OTP</h1>
                    <p class="text-xs md:text-[11px] font-bold text-slate-400 leading-relaxed mb-2">We've sent a 6-digit code to <span class="text-slate-950">+91 ${(window._approvedRetailerData||{}).MobileNumber||"your number"}</span></p>
                    <div class="mb-6 md:mb-8 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <p class="text-[10px] font-bold text-blue-600 mb-1">💡 Development Mode</p>
                        <p class="text-[9px] text-blue-500">Use default OTP: <span class="font-black text-blue-700">444619</span> or any 6-digit code</p>
                    </div>

                    <div class="grid grid-cols-6 gap-2 md:gap-2 mb-6 md:mb-8" id="otp-container">
                        ${[0,1,2,3,4,5].map(n=>`
                            <input
                                type="text"
                                inputmode="numeric"
                                pattern="[0-9]"
                                maxlength="1"
                                id="otp-${n}"
                                class="h-16 md:h-14 bg-white border-2 border-slate-100 rounded-xl text-center text-2xl md:text-xl font-black text-slate-900 focus:border-slate-900 focus:outline-none transition-colors"
                                onkeydown="window.handleOtpKeydown(event, ${n})"
                                oninput="window.handleOtpInput(event, ${n})"
                                onpaste="window.handleOtpPaste(event)"
                            />`).join("")}
                    </div>

                    <p class="text-[10px] md:text-[10px] font-bold text-slate-400 text-center mb-8 md:mb-12">
                        Didn't receive the code? <button onclick="window.resendOtp()" class="text-indigo-500 underline">Resend Code</button>
                    </p>

                    <button onclick="window.verifyOtp()" class="w-full py-5 md:py-4 bg-black text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl ring-8 ring-black/5 active:scale-98 transition-transform">
                        Verify & Proceed
                    </button>
                </div>
            </div>
        `;else if(e===3){const s=window._approvedRetailerData||{};t=`
            <div class="animate-slide-up w-full max-w-md mx-auto px-4 md:px-0">
                <header class="flex items-center justify-between mb-6 md:mb-8">
                    <button onclick="window.setRegistrationStep(2)" class="w-10 h-10 md:w-8 md:h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 active:scale-95 transition-transform"><span class="material-icons-outlined text-lg">arrow_back</span></button>
                    <div class="flex gap-1">
                        <div class="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                        <div class="w-4 h-1.5 bg-slate-950 rounded-full"></div>
                    </div>
                </header>

                <div class="text-center mb-6 md:mb-8">
                    <h1 class="text-xl md:text-2xl font-black tracking-tighter text-slate-900 mb-1">Confirm Store Details</h1>
                    <p class="text-[9px] font-bold text-slate-400 leading-relaxed px-2">Please verify the business information retrieved from your profile.</p>
                </div>

                <div class="space-y-3 mb-6 md:mb-8">
                    ${[{l:"STORE NAME",v:s.RetailerName||"N/A"},{l:"OWNER NAME",v:s.ContactPerson||"N/A"},{l:"MOBILE NUMBER",v:s.MobileNumber||"N/A"},{l:"GSTIN",v:s.VATNnumber||"N/A"},{l:"EMAIL",v:s.Email||"N/A"},{l:"CITY",v:s.CityName||"N/A"},{l:"STATE",v:s.StateName||"N/A"}].map(a=>`
                        <div class="card p-4 border-slate-100 flex items-center justify-between">
                            <div class="text-left flex-1 min-w-0">
                                <p class="text-[7px] font-black text-indigo-400 uppercase tracking-widest mb-1">${a.l}</p>
                                <p class="text-[11px] md:text-[11px] font-black text-slate-900 truncate">${a.v}</p>
                            </div>
                             <div class="w-5 h-5 bg-slate-950 rounded-md flex items-center justify-center shrink-0 ml-3"><span class="material-icons-outlined text-white text-xs">done</span></div>
                        </div>
                    `).join("")}
                </div>

                <button onclick="window.finalizeRegistration()" class="w-full py-5 md:py-4 bg-black text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl ring-8 ring-black/5 active:scale-98 transition-transform">
                    Finalize Setup
                </button>
                <p class="text-[8px] font-black text-indigo-400 uppercase tracking-[0.2em] mt-4 md:mt-6 opacity-40 text-center">Details can be edited later in settings</p>
            </div>
        `}return t}window.handleOtpInput=function(e,t){const s=e.target.value;if(s&&!/^\d$/.test(s)){e.target.value="";return}if(s&&t<5){const a=document.getElementById(`otp-${t+1}`);a&&a.focus()}};window.handleOtpKeydown=function(e,t){if(e.key==="Backspace"){if(!document.getElementById(`otp-${t}`).value&&t>0){const a=document.getElementById(`otp-${t-1}`);a&&(a.focus(),a.select())}}else if(e.key==="ArrowLeft"&&t>0){e.preventDefault();const s=document.getElementById(`otp-${t-1}`);s&&s.focus()}else if(e.key==="ArrowRight"&&t<5){e.preventDefault();const s=document.getElementById(`otp-${t+1}`);s&&s.focus()}else e.key==="Enter"&&(e.preventDefault(),window.verifyOtp())};window.handleOtpPaste=function(e){e.preventDefault();const t=e.clipboardData.getData("text").trim();if(/^\d{6}$/.test(t)){for(let a=0;a<6;a++){const n=document.getElementById(`otp-${a}`);n&&(n.value=t[a])}const s=document.getElementById("otp-5");s&&s.focus()}};window.requestOtp=async function(){const e=document.getElementById("mobile-input"),t=e?e.value.trim():"";if(!t||t.length!==10){alert("Please enter a valid 10-digit mobile number");return}try{const{db:s}=await Us(async()=>{const{db:l}=await Promise.resolve().then(()=>In);return{db:l}},void 0);if(await s.retailers.isRegistered(t)){alert("This mobile number is already registered. Please login instead."),window.setAuthMode("login");return}const n=await s.approved.checkApproval(t);if(!n){alert("This mobile number is not approved for registration. Please contact support.");return}window._approvedRetailerData=n,console.log("Sending OTP to:",t),window.setRegistrationStep(2),setTimeout(()=>{const l=document.getElementById("otp-0");l&&l.focus()},100)}catch(s){console.error("Approval check failed:",s),s.message&&s.message.includes("401")?alert(`Database authentication error. Please contact the system administrator.

Technical: External database token has expired.`):s.message&&s.message.includes("network")?alert("Network connection error. Please check your internet connection and try again."):alert(`Unable to verify approval status. Please try again.

If the problem persists, contact support.

Error: `+s.message)}};window.verifyOtp=function(){const e=[];for(let a=0;a<6;a++){const n=document.getElementById(`otp-${a}`);n&&e.push(n.value)}const t=e.join("");if(t.length!==6){alert("Please enter all 6 digits");return}const s="444619";console.log("Verifying OTP:",t),t===s?console.log("✅ Default OTP accepted:",s):console.log("ℹ️  Development mode: Any OTP accepted"),window.setRegistrationStep(3)};window.resendOtp=function(){for(let t=0;t<6;t++){const s=document.getElementById(`otp-${t}`);s&&(s.value="")}const e=document.getElementById("otp-0");e&&e.focus(),console.log("Resending OTP..."),alert("OTP has been resent successfully!")};window.finalizeRegistration=async function(){try{const e=window._approvedRetailerData;if(!e){alert("Session expired. Please start registration again."),window.setRegistrationStep(1);return}const{db:t}=await Us(async()=>{const{db:n}=await Promise.resolve().then(()=>In);return{db:n}},void 0),s=await t.retailers.add(e);window.setRetailer(s.id,s.retailerCode,e.RetailerName),localStorage.setItem("retaileros_logged_in","true"),delete window._approvedRetailerData;const{syncData:a}=await Us(async()=>{const{syncData:n}=await Promise.resolve().then(()=>Pi);return{syncData:n}},void 0);await a(),window.setLoginStatus(!0),console.log("Registration completed successfully:",s)}catch(e){console.error("Registration failed:",e),alert("Registration failed. Please try again.")}};function Tl(){return d.authMode==="register"?Hs():Al()}const Fr=[{n:"SALES DESK",i:"account_balance_wallet",k:"sales"},{n:"CLIENTS",i:"group",k:"clients"},{n:"INQUIRIES",i:"help_outline",k:"inquiries"},{n:"PROMOTERS",i:"business_center",k:"promoters"},{n:"INTERNAL STORE",i:"storefront"},{n:"INVENTORY",i:"inventory_2",k:"inventory"},{n:"REPAIRS",i:"build",k:"repairs"},{n:"MARKETPLACE",i:"swap_horizontal_circle",k:"marketplace"},{n:"CLAIMS",i:"verified_user"},{n:"SCHEMES",i:"percent",k:"schemes"},{n:"MARKETING",i:"campaign",k:"marketing"},{n:"AUTOMATION",i:"smart_toy",s:!0,k:"automation"},{n:"PRE-BOOKING",i:"rocket_launch",k:"prebooking"},{n:"REPORTS",i:"bar_chart",k:"reports"},{n:"SETTINGS",i:"settings",k:"settings"}];function Vr(e){const t=e?d.gridCols:4;return`
        <div class="card overflow-hidden border-slate-200">
            <div class="grid ${e&&{2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4"}[t]||"grid-cols-4"} divide-x divide-y divide-slate-100">
                ${Fr.map(a=>`
                    <button onclick="setApp('${a.k||"launcher"}')" class="aspect-square flex flex-col items-center justify-center p-1.5 hover:bg-slate-50 transition-all ${d.currentApp===a.k?"bg-slate-100":""}">
                        <span class="${a.s?"material-symbols-outlined":"material-icons-outlined"} text-xl ${d.currentApp===a.k?"text-slate-900 font-bold":"text-slate-500"} mb-1">${a.i}</span>
                        <span class="text-[7px] font-black uppercase text-center tracking-wider leading-tight ${d.currentApp===a.k?"text-slate-900":"text-slate-500"} ${a.n.length>10?"max-w-[90%]":""}">${a.n}</span>
                    </button>
                `).join("")}
            </div>
        </div>
    `}function Ur(e){return`
        <footer class="p-4 bg-[#F8FAFC]/95 backdrop-blur-md border-t border-slate-100 shrink-0 mt-auto sticky bottom-0 z-20">
            ${d.isLoggedIn?`
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
                ${d.authMode==="login"?`
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
    `}function Ga(e){const t=e==="mobile";return`
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
                ${d.isLoggedIn?`
                    ${Vr(t)}

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
                    <!-- Auth View (Login only in desktop, full auth in mobile) -->
                    <div id="auth-container" class="h-full w-full py-10">
                         ${t?Tl():Al()}
                    </div>
                `}
            </div>

            ${Ur(t)}
        </div>
    `}class O extends Error{constructor(s,a,n,l,r){a!==void 0&&(s=`${a}: ${s}`);super(s,{cause:r});L(this,"code");L(this,"extendedCode");L(this,"rawCode");this.code=a,this.extendedCode=n,this.rawCode=l,this.name="LibsqlError"}}class Zt extends O{constructor(s,a,n,l,r,o){super(s,n,l,r,o);L(this,"statementIndex");this.statementIndex=a,this.name="LibsqlBatchError"}}function Hr(e){const t=Gr.exec(e);if(t===null)throw new O(`The URL '${e}' is not in a valid format`,"URL_INVALID");const s=t.groups,a=s.scheme,n=s.authority!==void 0?Wr(s.authority):void 0,l=Ht(s.path),r=s.query!==void 0?Yr(s.query):void 0,o=s.fragment!==void 0?Ht(s.fragment):void 0;return{scheme:a,authority:n,path:l,query:r,fragment:o}}const Gr=(()=>{const e="(?<scheme>[A-Za-z][A-Za-z.+-]*)",t="(?<authority>[^/?#]*)",s="(?<path>[^?#]*)",a="(?<query>[^#]*)",n="(?<fragment>.*)";return new RegExp(`^${e}:(//${t})?${s}(\\?${a})?(#${n})?$`,"su")})();function Wr(e){const t=zr.exec(e);if(t===null)throw new O("The authority part of the URL is not in a valid format","URL_INVALID");const s=t.groups,a=Ht(s.host_br??s.host),n=s.port?parseInt(s.port,10):void 0,l=s.username!==void 0?{username:Ht(s.username),password:s.password!==void 0?Ht(s.password):void 0}:void 0;return{host:a,port:n,userinfo:l}}const zr=new RegExp("^((?<username>[^:]*)(:(?<password>.*))?@)?((?<host>[^:\\[\\]]*)|(\\[(?<host_br>[^\\[\\]]*)\\]))(:(?<port>[0-9]*))?$","su");function Yr(e){const t=e.split("&"),s=[];for(const a of t){if(a==="")continue;let n,l;const r=a.indexOf("=");r<0?(n=a,l=""):(n=a.substring(0,r),l=a.substring(r+1)),s.push({key:Ht(n.replaceAll("+"," ")),value:Ht(l.replaceAll("+"," "))})}return{pairs:s}}function Ht(e){try{return decodeURIComponent(e)}catch(t){throw t instanceof URIError?new O(`URL component has invalid percent encoding: ${t}`,"URL_INVALID",void 0,void 0,t):t}}function Wa(e,t,s){if(t===void 0)throw new O(`URL with scheme ${JSON.stringify(e+":")} requires authority (the "//" part)`,"URL_INVALID");const a=`${e}:`,n=Jr(t.host),l=Kr(t.port),o=`//${Qr(t.userinfo)}${n}${l}`;let p=s.split("/").map(encodeURIComponent).join("/");return p!==""&&!p.startsWith("/")&&(p="/"+p),new URL(`${a}${o}${p}`)}function Jr(e){return e.includes(":")?`[${encodeURI(e)}]`:encodeURI(e)}function Kr(e){return e!==void 0?`:${e}`:""}function Qr(e){if(e===void 0)return"";const t=encodeURIComponent(e.username),s=e.password!==void 0?`:${encodeURIComponent(e.password)}`:"";return`${t}${s}@`}const Ml="3.7.8",Xr=Ml,Is=typeof Buffer=="function",Jn=typeof TextDecoder=="function"?new TextDecoder:void 0,Kn=typeof TextEncoder=="function"?new TextEncoder:void 0,Zr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",Ts=Array.prototype.slice.call(Zr),ua=(e=>{let t={};return e.forEach((s,a)=>t[s]=a),t})(Ts),eo=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,te=String.fromCharCode.bind(String),Qn=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):e=>new Uint8Array(Array.prototype.slice.call(e,0)),Dl=e=>e.replace(/=/g,"").replace(/[+\/]/g,t=>t=="+"?"-":"_"),Ll=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),jl=e=>{let t,s,a,n,l="";const r=e.length%3;for(let o=0;o<e.length;){if((s=e.charCodeAt(o++))>255||(a=e.charCodeAt(o++))>255||(n=e.charCodeAt(o++))>255)throw new TypeError("invalid character found");t=s<<16|a<<8|n,l+=Ts[t>>18&63]+Ts[t>>12&63]+Ts[t>>6&63]+Ts[t&63]}return r?l.slice(0,r-3)+"===".substring(r):l},hn=typeof btoa=="function"?e=>btoa(e):Is?e=>Buffer.from(e,"binary").toString("base64"):jl,za=Is?e=>Buffer.from(e).toString("base64"):e=>{let s=[];for(let a=0,n=e.length;a<n;a+=4096)s.push(te.apply(null,e.subarray(a,a+4096)));return hn(s.join(""))},ba=(e,t=!1)=>t?Dl(za(e)):za(e),to=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?te(192|t>>>6)+te(128|t&63):te(224|t>>>12&15)+te(128|t>>>6&63)+te(128|t&63)}else{var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return te(240|t>>>18&7)+te(128|t>>>12&63)+te(128|t>>>6&63)+te(128|t&63)}},so=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,Ol=e=>e.replace(so,to),Xn=Is?e=>Buffer.from(e,"utf8").toString("base64"):Kn?e=>za(Kn.encode(e)):e=>hn(Ol(e)),es=(e,t=!1)=>t?Dl(Xn(e)):Xn(e),Zn=e=>es(e,!0),ao=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,no=e=>{switch(e.length){case 4:var t=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),s=t-65536;return te((s>>>10)+55296)+te((s&1023)+56320);case 3:return te((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return te((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},Pl=e=>e.replace(ao,no),Nl=e=>{if(e=e.replace(/\s+/g,""),!eo.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(e.length&3));let t,s,a,n=[];for(let l=0;l<e.length;)t=ua[e.charAt(l++)]<<18|ua[e.charAt(l++)]<<12|(s=ua[e.charAt(l++)])<<6|(a=ua[e.charAt(l++)]),s===64?n.push(te(t>>16&255)):a===64?n.push(te(t>>16&255,t>>8&255)):n.push(te(t>>16&255,t>>8&255,t&255));return n.join("")},gn=typeof atob=="function"?e=>atob(Ll(e)):Is?e=>Buffer.from(e,"base64").toString("binary"):Nl,ql=Is?e=>Qn(Buffer.from(e,"base64")):e=>Qn(gn(e).split("").map(t=>t.charCodeAt(0))),Bl=e=>ql(Fl(e)),lo=Is?e=>Buffer.from(e,"base64").toString("utf8"):Jn?e=>Jn.decode(ql(e)):e=>Pl(gn(e)),Fl=e=>Ll(e.replace(/[-_]/g,t=>t=="-"?"+":"/")),Ya=e=>lo(Fl(e)),io=e=>{if(typeof e!="string")return!1;const t=e.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(t)||!/[^\s0-9a-zA-Z\-_]/.test(t)},Vl=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),Ul=function(){const e=(t,s)=>Object.defineProperty(String.prototype,t,Vl(s));e("fromBase64",function(){return Ya(this)}),e("toBase64",function(t){return es(this,t)}),e("toBase64URI",function(){return es(this,!0)}),e("toBase64URL",function(){return es(this,!0)}),e("toUint8Array",function(){return Bl(this)})},Hl=function(){const e=(t,s)=>Object.defineProperty(Uint8Array.prototype,t,Vl(s));e("toBase64",function(t){return ba(this,t)}),e("toBase64URI",function(){return ba(this,!0)}),e("toBase64URL",function(){return ba(this,!0)})},ro=()=>{Ul(),Hl()},vn={version:Ml,VERSION:Xr,atob:gn,atobPolyfill:Nl,btoa:hn,btoaPolyfill:jl,fromBase64:Ya,toBase64:es,encode:es,encodeURI:Zn,encodeURL:Zn,utob:Ol,btou:Pl,decode:Ya,isValid:io,fromUint8Array:ba,toUint8Array:Bl,extendString:Ul,extendUint8Array:Hl,extendBuiltins:ro},Gs="https://github.com/libsql/libsql-client-ts#supported-urls";function Ja(e){if(e==="write")return"BEGIN IMMEDIATE";if(e==="read")return"BEGIN TRANSACTION READONLY";if(e==="deferred")return"BEGIN DEFERRED";throw RangeError('Unknown transaction mode, supported values are "write", "read" and "deferred"')}class oo{constructor(t,s,a,n,l){L(this,"columns");L(this,"columnTypes");L(this,"rows");L(this,"rowsAffected");L(this,"lastInsertRowid");this.columns=t,this.columnTypes=s,this.rows=a,this.rowsAffected=n,this.lastInsertRowid=l}toJSON(){return{columns:this.columns,columnTypes:this.columnTypes,rows:this.rows.map(co),rowsAffected:this.rowsAffected,lastInsertRowid:this.lastInsertRowid!==void 0?""+this.lastInsertRowid:null}}}function co(e){return Array.prototype.map.call(e,po)}function po(e){return typeof e=="bigint"?""+e:e instanceof ArrayBuffer?vn.fromUint8Array(new Uint8Array(e)):e}const el=":memory:";function uo(e,t){var $,S;if(typeof e!="object")throw new TypeError(`Expected client configuration as object, got ${typeof e}`);let{url:s,authToken:a,tls:n,intMode:l,concurrency:r}=e;r=Math.max(0,r||20),l??(l="number");let o=[];s===el&&(s="file::memory:");const p=Hr(s),c=p.scheme.toLowerCase(),u=c==="file"&&p.path===el&&p.authority===void 0;let y;u?y={cache:{values:["shared","private"],update:(h,P)=>o.push(`${h}=${P}`)}}:y={tls:{values:["0","1"],update:(h,P)=>n=P==="1"},authToken:{update:(h,P)=>a=P}};for(const{key:h,value:P}of(($=p.query)==null?void 0:$.pairs)??[]){if(!Object.hasOwn(y,h))throw new O(`Unsupported URL query parameter ${JSON.stringify(h)}`,"URL_PARAM_NOT_SUPPORTED");const V=y[h];if(V.values!==void 0&&!V.values.includes(P))throw new O(`Unknown value for the "${h}" query argument: ${JSON.stringify(P)}. Supported values are: [${V.values.map(As=>'"'+As+'"').join(", ")}]`,"URL_INVALID");V.update!==void 0&&(V==null||V.update(h,P))}const v=o.length===0?"":`?${o.join("&")}`,k=p.path+v;let m;if(c==="libsql")if(n===!1){if(((S=p.authority)==null?void 0:S.port)===void 0)throw new O('A "libsql:" URL with ?tls=0 must specify an explicit port',"URL_INVALID");m="http"}else m="https";else m=c;if(m==="http"||m==="ws"?n??(n=!1):n??(n=!0),m!=="http"&&m!=="ws"&&m!=="https"&&m!=="wss"&&m!=="file")throw new O(`The client supports only "libsql:", "wss:", "ws:", "https:", "http:" and "file:" URLs, got ${JSON.stringify(p.scheme+":")}. For more information, please read ${Gs}`,"URL_SCHEME_NOT_SUPPORTED");if(l!=="number"&&l!=="bigint"&&l!=="string")throw new TypeError(`Invalid value for intMode, expected "number", "bigint" or "string", got ${JSON.stringify(l)}`);if(p.fragment!==void 0)throw new O(`URL fragments are not supported: ${JSON.stringify("#"+p.fragment)}`,"URL_INVALID");return u?{scheme:"file",tls:!1,path:k,intMode:l,concurrency:r,syncUrl:e.syncUrl,syncInterval:e.syncInterval,readYourWrites:e.readYourWrites,offline:e.offline,fetch:e.fetch,authToken:void 0,encryptionKey:void 0,remoteEncryptionKey:void 0,authority:void 0}:{scheme:m,tls:n,authority:p.authority,path:k,authToken:a,intMode:l,concurrency:r,encryptionKey:e.encryptionKey,remoteEncryptionKey:e.remoteEncryptionKey,syncUrl:e.syncUrl,syncInterval:e.syncInterval,readYourWrites:e.readYourWrites,offline:e.offline,fetch:e.fetch}}let Qt;typeof WebSocket<"u"?Qt=WebSocket:typeof global<"u"?Qt=global.WebSocket:typeof window<"u"?Qt=window.WebSocket:typeof self<"u"&&(Qt=self.WebSocket);class Gl{constructor(){L(this,"intMode");this.intMode="number"}}class G extends Error{constructor(t){super(t),this.name="ClientError"}}class A extends G{constructor(t){super(t),this.name="ProtoError"}}class Wl extends G{constructor(s,a){super(s);L(this,"code");L(this,"proto");this.name="ResponseError",this.code=a.code,this.proto=a,this.stack=void 0}}class Se extends G{constructor(t,s){s!==void 0?(super(`${t}: ${s}`),this.cause=s):super(t),this.name="ClosedError"}}class zl extends G{constructor(t){super(t),this.name="WebSocketUnsupportedError"}}class Ka extends G{constructor(t){super(t),this.name="WebSocketError"}}class ma extends G{constructor(s,a){super(s);L(this,"status");this.status=a,this.name="HttpServerError"}}class _s extends G{constructor(t){super(t),this.name="ProtocolVersionError"}}class St extends G{constructor(t){super(t),this.name="InternalError"}}class Cs extends G{constructor(t){super(t),this.name="MisuseError"}}function Le(e){if(typeof e=="string")return e;throw Rs(e,"string")}function Oe(e){if(e!=null){if(typeof e=="string")return e;throw Rs(e,"string or null")}}function Gt(e){if(typeof e=="number")return e;throw Rs(e,"number")}function Ws(e){if(typeof e=="boolean")return e;throw Rs(e,"boolean")}function ka(e){if(Array.isArray(e))return e;throw Rs(e,"array")}function se(e){if(e!==null&&typeof e=="object"&&!Array.isArray(e))return e;throw Rs(e,"object")}function $t(e,t){return ka(e).map(s=>t(se(s)))}function Rs(e,t){if(e===void 0)return new A(`Expected ${t}, but the property was missing`);let s=typeof e;return e===null?s="null":Array.isArray(e)&&(s="array"),new A(`Expected ${t}, received ${s}`)}function wn(e,t){return t(se(e))}var z,ut,ze,Ct;class xo{constructor(t){b(this,ze);b(this,z);b(this,ut);x(this,z,t),x(this,ut,!1)}begin(){i(this,z).push("{"),x(this,ut,!0)}end(){i(this,z).push("}"),x(this,ut,!1)}string(t,s){g(this,ze,Ct).call(this,t),i(this,z).push(JSON.stringify(s))}stringRaw(t,s){g(this,ze,Ct).call(this,t),i(this,z).push('"'),i(this,z).push(s),i(this,z).push('"')}number(t,s){g(this,ze,Ct).call(this,t),i(this,z).push(""+s)}boolean(t,s){g(this,ze,Ct).call(this,t),i(this,z).push(s?"true":"false")}object(t,s,a){g(this,ze,Ct).call(this,t),this.begin(),a(this,s),this.end()}arrayObjects(t,s,a){g(this,ze,Ct).call(this,t),i(this,z).push("[");for(let n=0;n<s.length;++n)n!==0&&i(this,z).push(","),this.begin(),a(this,s[n]),this.end();i(this,z).push("]")}}z=new WeakMap,ut=new WeakMap,ze=new WeakSet,Ct=function(t){i(this,ut)?(i(this,z).push('"'),x(this,ut,!1)):i(this,z).push(',"'),i(this,z).push(t),i(this,z).push('":')};function Yl(e,t){const s=[],a=new xo(s);return a.begin(),t(a,e),a.end(),s.join("")}const Fs=0,Qa=1,Xa=2,fo=5;var Ne,zs,he;class bo{constructor(t){b(this,Ne);b(this,zs);b(this,he);x(this,Ne,t),x(this,zs,new DataView(t.buffer,t.byteOffset,t.byteLength)),x(this,he,0)}varint(){let t=0;for(let s=0;;s+=7){const a=i(this,Ne)[Yt(this,he)._++];if(t|=(a&127)<<s,!(a&128))break}return t}varintBig(){let t=0n;for(let s=0n;;s+=7n){const a=i(this,Ne)[Yt(this,he)._++];if(t|=BigInt(a&127)<<s,!(a&128))break}return t}bytes(t){const s=new Uint8Array(i(this,Ne).buffer,i(this,Ne).byteOffset+i(this,he),t);return x(this,he,i(this,he)+t),s}double(){const t=i(this,zs).getFloat64(i(this,he),!0);return x(this,he,i(this,he)+8),t}skipVarint(){for(;i(this,Ne)[Yt(this,he)._++]&128;);}skip(t){x(this,he,i(this,he)+t)}eof(){return i(this,he)>=i(this,Ne).byteLength}}Ne=new WeakMap,zs=new WeakMap,he=new WeakMap;var ce,le,Dt,Ms;class mo{constructor(t){b(this,Dt);b(this,ce);b(this,le);x(this,ce,t),x(this,le,-1)}setup(t){x(this,le,t)}bytes(){g(this,Dt,Ms).call(this,Xa);const t=i(this,ce).varint();return i(this,ce).bytes(t)}string(){return new TextDecoder().decode(this.bytes())}message(t){return La(this.bytes(),t)}int32(){return g(this,Dt,Ms).call(this,Fs),i(this,ce).varint()}uint32(){return this.int32()}bool(){return this.int32()!==0}uint64(){return g(this,Dt,Ms).call(this,Fs),i(this,ce).varintBig()}sint64(){const t=this.uint64();return t>>1n^-(t&1n)}double(){return g(this,Dt,Ms).call(this,Qa),i(this,ce).double()}maybeSkip(){if(!(i(this,le)<0)){if(i(this,le)===Fs)i(this,ce).skipVarint();else if(i(this,le)===Qa)i(this,ce).skip(8);else if(i(this,le)===Xa){const t=i(this,ce).varint();i(this,ce).skip(t)}else if(i(this,le)===fo)i(this,ce).skip(4);else throw new A(`Unexpected wire type ${i(this,le)}`);x(this,le,-1)}}}ce=new WeakMap,le=new WeakMap,Dt=new WeakSet,Ms=function(t){if(i(this,le)!==t)throw new A(`Expected wire type ${t}, got ${i(this,le)}`);x(this,le,-1)};function La(e,t){const s=new bo(e),a=new mo(s);let n=t.default();for(;!s.eof();){const l=s.varint(),r=l>>3,o=l&7;a.setup(o);const p=t[r];if(p!==void 0){const c=p(a,n);c!==void 0&&(n=c)}a.maybeSkip()}return n}var Ee,xt,as,de,X,Ds,ha,Jl,Ls;const Un=class Un{constructor(){b(this,X);b(this,Ee);b(this,xt);b(this,as);b(this,de);x(this,Ee,new ArrayBuffer(256)),x(this,xt,new Uint8Array(i(this,Ee))),x(this,as,new DataView(i(this,Ee))),x(this,de,0)}bytes(t,s){g(this,X,Ls).call(this,t,Xa),g(this,X,ha).call(this,s.byteLength),g(this,X,Ds).call(this,s.byteLength),i(this,xt).set(s,i(this,de)),x(this,de,i(this,de)+s.byteLength)}string(t,s){this.bytes(t,new TextEncoder().encode(s))}message(t,s,a){const n=new Un;a(n,s),this.bytes(t,n.data())}int32(t,s){g(this,X,Ls).call(this,t,Fs),g(this,X,ha).call(this,s)}uint32(t,s){this.int32(t,s)}bool(t,s){this.int32(t,s?1:0)}sint64(t,s){g(this,X,Ls).call(this,t,Fs),g(this,X,Jl).call(this,s<<1n^s>>63n)}double(t,s){g(this,X,Ls).call(this,t,Qa),g(this,X,Ds).call(this,8),i(this,as).setFloat64(i(this,de),s,!0),x(this,de,i(this,de)+8)}data(){return new Uint8Array(i(this,Ee),0,i(this,de))}};Ee=new WeakMap,xt=new WeakMap,as=new WeakMap,de=new WeakMap,X=new WeakSet,Ds=function(t){if(i(this,de)+t<=i(this,Ee).byteLength)return;let s=i(this,Ee).byteLength;for(;s<i(this,de)+t;)s*=2;const a=new ArrayBuffer(s),n=new Uint8Array(a),l=new DataView(a);n.set(new Uint8Array(i(this,Ee),0,i(this,de))),x(this,Ee,a),x(this,xt,n),x(this,as,l)},ha=function(t){g(this,X,Ds).call(this,5),t=0|t;do{let s=t&127;t>>>=7,s|=t?128:0,i(this,xt)[Yt(this,de)._++]=s}while(t)},Jl=function(t){g(this,X,Ds).call(this,10),t=t&0xffffffffffffffffn;do{let s=Number(t&0x7fn);t>>=7n,s|=t?128:0,i(this,xt)[Yt(this,de)._++]=s}while(t)},Ls=function(t,s){g(this,X,ha).call(this,t<<3|s)};let Za=Un;function Kl(e,t){const s=new Za;return t(s,e),s.data()}var ge,Ye;class js{constructor(){b(this,ge);b(this,Ye);x(this,ge,new Set),x(this,Ye,new Set)}alloc(){for(const s of i(this,Ye))return i(this,Ye).delete(s),i(this,ge).add(s),i(this,ge).has(i(this,ge).size-1)||i(this,Ye).add(i(this,ge).size-1),s;const t=i(this,ge).size;return i(this,ge).add(t),t}free(t){if(!i(this,ge).delete(t))throw new St("Freeing an id that is not allocated");i(this,Ye).delete(i(this,ge).size),t<i(this,ge).size&&i(this,Ye).add(t)}}ge=new WeakMap,Ye=new WeakMap;function W(e,t){throw new St(t)}function Vs(e){if(e===null)return null;if(typeof e=="string")return e;if(typeof e=="number"){if(!Number.isFinite(e))throw new RangeError("Only finite numbers (not Infinity or NaN) can be passed as arguments");return e}else if(typeof e=="bigint"){if(e<ho||e>go)throw new RangeError("This bigint value is too large to be represented as a 64-bit integer and passed as argument");return e}else{if(typeof e=="boolean")return e?1n:0n;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(e instanceof Uint8Array)return e;if(e instanceof Date)return+e.valueOf();if(typeof e=="object")return""+e.toString();throw new TypeError("Unsupported type of value")}}const ho=-9223372036854775808n,go=9223372036854775807n;function Ql(e,t){if(e===null)return null;if(typeof e=="number")return e;if(typeof e=="string")return e;if(typeof e=="bigint")if(t==="number"){const s=Number(e);if(!Number.isSafeInteger(s))throw new RangeError("Received integer which is too large to be safely represented as a JavaScript number");return s}else{if(t==="bigint")return e;if(t==="string")return""+e;throw new Cs("Invalid value for IntMode")}else{if(e instanceof Uint8Array)return e.slice().buffer;throw e===void 0?new A("Received unrecognized type of Value"):W(e,"Impossible type of Value")}}function ca(e){return{affectedRowCount:e.affectedRowCount,lastInsertRowid:e.lastInsertRowid,columnNames:e.cols.map(t=>t.name),columnDecltypes:e.cols.map(t=>t.decltype)}}function Xl(e,t){const s=ca(e),a=e.rows.map(n=>ti(s.columnNames,n,t));return{...s,rows:a}}function Zl(e,t){const s=ca(e);let a;return e.rows.length>0&&(a=ti(s.columnNames,e.rows[0],t)),{...s,row:a}}function ei(e,t){const s=ca(e);let a;return e.rows.length>0&&s.columnNames.length>0&&(a=Ql(e.rows[0][0],t)),{...s,value:a}}function ti(e,t,s){const a={};Object.defineProperty(a,"length",{value:t.length});for(let n=0;n<t.length;++n){const l=Ql(t[n],s);Object.defineProperty(a,n,{value:l});const r=e[n];r!==void 0&&!Object.hasOwn(a,r)&&Object.defineProperty(a,r,{value:l,enumerable:!0,configurable:!0,writable:!0})}return a}function Ss(e){return new Wl(e.message,e)}var ns,ls,Je;class yn{constructor(t,s){b(this,ns);b(this,ls);b(this,Je);x(this,ns,t),x(this,ls,s),x(this,Je,void 0)}_getSqlId(t){if(i(this,ns)!==t)throw new Cs("Attempted to use SQL text opened with other object");if(i(this,Je)!==void 0)throw new Se("SQL text is closed",i(this,Je));return i(this,ls)}close(){this._setClosed(new G("SQL text was manually closed"))}_setClosed(t){i(this,Je)===void 0&&(x(this,Je,t),i(this,ns)._closeSql(i(this,ls)))}get closed(){return i(this,Je)!==void 0}}ns=new WeakMap,ls=new WeakMap,Je=new WeakMap;function en(e,t){return t instanceof yn?{sqlId:t._getSqlId(e)}:{sql:""+t}}var qe,Ie;class _a{constructor(){b(this,qe);b(this,Ie);x(this,qe,[]),x(this,Ie,[])}get length(){return i(this,qe).length+i(this,Ie).length}push(t){i(this,qe).push(t)}shift(){return i(this,Ie).length===0&&i(this,qe).length>0&&(x(this,Ie,i(this,qe).reverse()),x(this,qe,[])),i(this,Ie).pop()}first(){return i(this,Ie).length!==0?i(this,Ie)[i(this,Ie).length-1]:i(this,qe)[0]}}qe=new WeakMap,Ie=new WeakMap;let si=class{constructor(t){L(this,"sql");L(this,"_args");L(this,"_namedArgs");this.sql=t,this._args=[],this._namedArgs=new Map}bindIndexes(t){this._args.length=0;for(const s of t)this._args.push(Vs(s));return this}bindIndex(t,s){if(t!==(t|0)||t<=0)throw new RangeError("Index of a positional argument must be positive integer");for(;this._args.length<t;)this._args.push(null);return this._args[t-1]=Vs(s),this}bindName(t,s){return this._namedArgs.set(t,Vs(s)),this}unbindAll(){return this._args.length=0,this._namedArgs.clear(),this}};function ai(e,t,s){let a,n=[],l=[];if(t instanceof si){a=t.sql,n=t._args;for(const[p,c]of t._namedArgs.entries())l.push({name:p,value:c})}else Array.isArray(t)?(a=t[0],Array.isArray(t[1])?n=t[1].map(p=>Vs(p)):l=Object.entries(t[1]).map(([p,c])=>({name:p,value:Vs(c)}))):a=t;const{sql:r,sqlId:o}=en(e,a);return{sql:r,sqlId:o,args:n,namedArgs:l,wantRows:s}}var Ys,is,yl;let vo=(yl=class{constructor(t,s){L(this,"_stream");b(this,Ys);L(this,"_steps");b(this,is);this._stream=t,x(this,Ys,s),this._steps=[],x(this,is,!1)}step(){return new ko(this)}execute(){if(i(this,is))throw new Cs("This batch has already been executed");x(this,is,!0);const t={steps:this._steps.map(s=>s.proto)};return i(this,Ys)?yo(this._stream,this._steps,t):wo(this._stream,this._steps,t)}},Ys=new WeakMap,is=new WeakMap,yl);function wo(e,t,s){return e._batch(s).then(a=>{for(let n=0;n<t.length;++n){const l=a.stepResults.get(n),r=a.stepErrors.get(n);t[n].callback(l,r)}})}async function yo(e,t,s){const a=await e._openCursor(s);try{let n=0,l,r=[];for(;;){const o=await a.next();if(o===void 0)break;if(o.type==="step_begin"){if(o.step<n||o.step>=t.length)throw new A("Server produced StepBeginEntry for unexpected step");if(l!==void 0)throw new A("Server produced StepBeginEntry before terminating previous step");for(let p=n;p<o.step;++p)t[p].callback(void 0,void 0);n=o.step+1,l=o,r=[]}else if(o.type==="step_end"){if(l===void 0)throw new A("Server produced StepEndEntry but no step is active");const p={cols:l.cols,rows:r,affectedRowCount:o.affectedRowCount,lastInsertRowid:o.lastInsertRowid};t[l.step].callback(p,void 0),l=void 0,r=[]}else if(o.type==="step_error"){if(l===void 0){if(o.step>=t.length)throw new A("Server produced StepErrorEntry for unexpected step");for(let p=n;p<o.step;++p)t[p].callback(void 0,void 0)}else{if(o.step!==l.step)throw new A("Server produced StepErrorEntry for unexpected step");l=void 0,r=[]}t[o.step].callback(void 0,o.error),n=o.step+1}else if(o.type==="row"){if(l===void 0)throw new A("Server produced RowEntry but no step is active");r.push(o.row)}else throw o.type==="error"?Ss(o.error):o.type==="none"?new A("Server produced unrecognized CursorEntry"):W(o,"Impossible CursorEntry")}if(l!==void 0)throw new A("Server closed Cursor before terminating active step");for(let o=n;o<t.length;++o)t[o].callback(void 0,void 0)}finally{a.close()}}var Ke,Lt,Os,kl;let ko=(kl=class{constructor(t){b(this,Lt);L(this,"_batch");b(this,Ke);L(this,"_index");this._batch=t,x(this,Ke,[]),this._index=void 0}condition(t){return i(this,Ke).push(t._proto),this}query(t){return g(this,Lt,Os).call(this,t,!0,Xl)}queryRow(t){return g(this,Lt,Os).call(this,t,!0,Zl)}queryValue(t){return g(this,Lt,Os).call(this,t,!0,ei)}run(t){return g(this,Lt,Os).call(this,t,!1,ca)}},Ke=new WeakMap,Lt=new WeakSet,Os=function(t,s,a){if(this._index!==void 0)throw new Cs("This BatchStep has already been added to the batch");const n=ai(this._batch._stream._sqlOwner(),t,s);let l;i(this,Ke).length===0?l=void 0:i(this,Ke).length===1?l=i(this,Ke)[0]:l={type:"and",conds:i(this,Ke).slice()};const r={stmt:n,condition:l};return new Promise((o,p)=>{const c=(u,y)=>{u!==void 0&&y!==void 0?p(new A("Server returned both result and error")):y!==void 0?p(Ss(y)):o(u!==void 0?a(u,this._batch._stream.intMode):void 0)};this._index=this._batch._steps.length,this._batch._steps.push({proto:r,callback:c})})},kl),fe=class Rt{constructor(t,s){L(this,"_batch");L(this,"_proto");this._batch=t,this._proto=s}static ok(t){return new Rt(t._batch,{type:"ok",step:tl(t)})}static error(t){return new Rt(t._batch,{type:"error",step:tl(t)})}static not(t){return new Rt(t._batch,{type:"not",cond:t._proto})}static and(t,s){for(const a of s)sl(t,a);return new Rt(t,{type:"and",conds:s.map(a=>a._proto)})}static or(t,s){for(const a of s)sl(t,a);return new Rt(t,{type:"or",conds:s.map(a=>a._proto)})}static isAutocommit(t){return t._stream.client()._ensureVersion(3,"BatchCond.isAutocommit()"),new Rt(t,{type:"is_autocommit"})}};function tl(e){if(e._index===void 0)throw new Cs("Cannot add a condition referencing a step that has not been added to the batch");return e._index}function sl(e,t){if(t._batch!==e)throw new Cs("Cannot mix BatchCond objects for different Batch objects")}function _o(e){return{paramNames:e.params.map(t=>t.name),columns:e.cols,isExplain:e.isExplain,isReadonly:e.isReadonly}}var jt,Ps;class ni{constructor(t){b(this,jt);L(this,"intMode");this.intMode=t}query(t){return g(this,jt,Ps).call(this,t,!0,Xl)}queryRow(t){return g(this,jt,Ps).call(this,t,!0,Zl)}queryValue(t){return g(this,jt,Ps).call(this,t,!0,ei)}run(t){return g(this,jt,Ps).call(this,t,!1,ca)}batch(t=!1){return new vo(this,t)}describe(t){const s=en(this._sqlOwner(),t);return this._describe(s).then(_o)}sequence(t){const s=en(this._sqlOwner(),t);return this._sequence(s)}}jt=new WeakSet,Ps=function(t,s,a){const n=ai(this._sqlOwner(),t,s);return this._execute(n).then(l=>a(l,this.intMode))};class li{}const So=1e3,$o=10;var Ta,Ot,rs,os,Pt,Qe,Nt,Ma,ii;class Eo extends li{constructor(s,a,n){super();b(this,Ma);b(this,Ta);b(this,Ot);b(this,rs);b(this,os);b(this,Pt);b(this,Qe);b(this,Nt);x(this,Ta,s),x(this,Ot,a),x(this,rs,n),x(this,os,new _a),x(this,Pt,new _a),x(this,Qe,void 0),x(this,Nt,!1)}async next(){for(;;){if(i(this,Qe)!==void 0)throw new Se("Cursor is closed",i(this,Qe));for(;!i(this,Nt)&&i(this,Pt).length<$o;)i(this,Pt).push(g(this,Ma,ii).call(this));const s=i(this,os).shift();if(i(this,Nt)||s!==void 0)return s;await i(this,Pt).shift().then(a=>{if(a!==void 0){for(const n of a.entries)i(this,os).push(n);i(this,Nt)||x(this,Nt,a.done)}})}}_setClosed(s){i(this,Qe)===void 0&&(x(this,Qe,s),i(this,Ot)._sendCursorRequest(this,{type:"close_cursor",cursorId:i(this,rs)}).catch(()=>{}),i(this,Ot)._cursorClosed(this))}close(){this._setClosed(new G("Cursor was manually closed"))}get closed(){return i(this,Qe)!==void 0}}Ta=new WeakMap,Ot=new WeakMap,rs=new WeakMap,os=new WeakMap,Pt=new WeakMap,Qe=new WeakMap,Nt=new WeakMap,Ma=new WeakSet,ii=function(){return i(this,Ot)._sendCursorRequest(this,{type:"fetch_cursor",cursorId:i(this,rs),maxCount:So}).then(s=>s,s=>{this._setClosed(s)})};var ee,ke,Xe,ve,ft,Ce,Y,Jt,sn,ga,va;const Hn=class Hn extends ni{constructor(s,a){super(s.intMode);b(this,Y);b(this,ee);b(this,ke);b(this,Xe);b(this,ve);b(this,ft);b(this,Ce);x(this,ee,s),x(this,ke,a),x(this,Xe,new _a),x(this,ve,void 0),x(this,ft,!1),x(this,Ce,void 0)}static open(s){const a=s._streamIdAlloc.alloc(),n=new Hn(s,a),l=()=>{},r=p=>{var c;return g(c=n,Y,va).call(c,p)},o={type:"open_stream",streamId:a};return s._sendRequest(o,{responseCallback:l,errorCallback:r}),n}client(){return i(this,ee)}_sqlOwner(){return i(this,ee)}_execute(s){return g(this,Y,Jt).call(this,{type:"execute",streamId:i(this,ke),stmt:s}).then(a=>a.result)}_batch(s){return g(this,Y,Jt).call(this,{type:"batch",streamId:i(this,ke),batch:s}).then(a=>a.result)}_describe(s){return i(this,ee)._ensureVersion(2,"describe()"),g(this,Y,Jt).call(this,{type:"describe",streamId:i(this,ke),sql:s.sql,sqlId:s.sqlId}).then(a=>a.result)}_sequence(s){return i(this,ee)._ensureVersion(2,"sequence()"),g(this,Y,Jt).call(this,{type:"sequence",streamId:i(this,ke),sql:s.sql,sqlId:s.sqlId}).then(a=>{})}getAutocommit(){return i(this,ee)._ensureVersion(3,"getAutocommit()"),g(this,Y,Jt).call(this,{type:"get_autocommit",streamId:i(this,ke)}).then(s=>s.isAutocommit)}_openCursor(s){return i(this,ee)._ensureVersion(3,"cursor"),new Promise((a,n)=>{g(this,Y,sn).call(this,{type:"cursor",batch:s,cursorCallback:a,errorCallback:n})})}_sendCursorRequest(s,a){if(s!==i(this,ve))throw new St("Cursor not associated with the stream attempted to execute a request");return new Promise((n,l)=>{i(this,Ce)!==void 0?l(new Se("Stream is closed",i(this,Ce))):i(this,ee)._sendRequest(a,{responseCallback:n,errorCallback:l})})}_cursorClosed(s){if(s!==i(this,ve))throw new St("Cursor was closed, but it was not associated with the stream");x(this,ve,void 0),g(this,Y,ga).call(this)}close(){g(this,Y,va).call(this,new G("Stream was manually closed"))}closeGracefully(){x(this,ft,!0),g(this,Y,ga).call(this)}get closed(){return i(this,Ce)!==void 0||i(this,ft)}};ee=new WeakMap,ke=new WeakMap,Xe=new WeakMap,ve=new WeakMap,ft=new WeakMap,Ce=new WeakMap,Y=new WeakSet,Jt=function(s){return new Promise((a,n)=>{g(this,Y,sn).call(this,{type:"request",request:s,responseCallback:a,errorCallback:n})})},sn=function(s){i(this,Ce)!==void 0?s.errorCallback(new Se("Stream is closed",i(this,Ce))):i(this,ft)?s.errorCallback(new Se("Stream is closing",void 0)):(i(this,Xe).push(s),g(this,Y,ga).call(this))},ga=function(){for(;;){const s=i(this,Xe).first();if(s===void 0&&i(this,ve)===void 0&&i(this,ft)){g(this,Y,va).call(this,new G("Stream was gracefully closed"));break}else if((s==null?void 0:s.type)==="request"&&i(this,ve)===void 0){const{request:a,responseCallback:n,errorCallback:l}=s;i(this,Xe).shift(),i(this,ee)._sendRequest(a,{responseCallback:n,errorCallback:l})}else if((s==null?void 0:s.type)==="cursor"&&i(this,ve)===void 0){const{batch:a,cursorCallback:n}=s;i(this,Xe).shift();const l=i(this,ee)._cursorIdAlloc.alloc(),r=new Eo(i(this,ee),this,l),o={type:"open_cursor",streamId:i(this,ke),cursorId:l,batch:a},p=()=>{},c=u=>r._setClosed(u);i(this,ee)._sendRequest(o,{responseCallback:p,errorCallback:c}),x(this,ve,r),n(r)}else break}},va=function(s){if(i(this,Ce)!==void 0)return;for(x(this,Ce,s),i(this,ve)!==void 0&&i(this,ve)._setClosed(s);;){const r=i(this,Xe).shift();if(r!==void 0)r.errorCallback(s);else break}const a={type:"close_stream",streamId:i(this,ke)},n=()=>i(this,ee)._streamIdAlloc.free(i(this,ke)),l=()=>{};i(this,ee)._sendRequest(a,{responseCallback:n,errorCallback:l})};let tn=Hn;function kn(e,t){t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId),e.arrayObjects("args",t.args,ri),e.arrayObjects("named_args",t.namedArgs,Io),e.boolean("want_rows",t.wantRows)}function Io(e,t){e.string("name",t.name),e.object("value",t.value,ri)}function Sa(e,t){e.arrayObjects("steps",t.steps,Co)}function Co(e,t){t.condition!==void 0&&e.object("condition",t.condition,an),e.object("stmt",t.stmt,kn)}function an(e,t){if(e.stringRaw("type",t.type),t.type==="ok"||t.type==="error")e.number("step",t.step);else if(t.type==="not")e.object("cond",t.cond,an);else if(t.type==="and"||t.type==="or")e.arrayObjects("conds",t.conds,an);else if(t.type!=="is_autocommit")throw W(t,"Impossible type of BatchCond")}function ri(e,t){if(t===null)e.stringRaw("type","null");else if(typeof t=="bigint")e.stringRaw("type","integer"),e.stringRaw("value",""+t);else if(typeof t=="number")e.stringRaw("type","float"),e.number("value",t);else if(typeof t=="string")e.stringRaw("type","text"),e.string("value",t);else if(t instanceof Uint8Array)e.stringRaw("type","blob"),e.stringRaw("base64",vn.fromUint8Array(t));else if(t!==void 0)throw W(t,"Impossible type of Value")}function Ro(e,t){if(e.stringRaw("type",t.type),t.type==="hello")t.jwt!==void 0&&e.string("jwt",t.jwt);else if(t.type==="request")e.number("request_id",t.requestId),e.object("request",t.request,Ao);else throw W(t,"Impossible type of ClientMsg")}function Ao(e,t){if(e.stringRaw("type",t.type),t.type==="open_stream")e.number("stream_id",t.streamId);else if(t.type==="close_stream")e.number("stream_id",t.streamId);else if(t.type==="execute")e.number("stream_id",t.streamId),e.object("stmt",t.stmt,kn);else if(t.type==="batch")e.number("stream_id",t.streamId),e.object("batch",t.batch,Sa);else if(t.type==="open_cursor")e.number("stream_id",t.streamId),e.number("cursor_id",t.cursorId),e.object("batch",t.batch,Sa);else if(t.type==="close_cursor")e.number("cursor_id",t.cursorId);else if(t.type==="fetch_cursor")e.number("cursor_id",t.cursorId),e.number("max_count",t.maxCount);else if(t.type==="sequence")e.number("stream_id",t.streamId),t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="describe")e.number("stream_id",t.streamId),t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="store_sql")e.number("sql_id",t.sqlId),e.string("sql",t.sql);else if(t.type==="close_sql")e.number("sql_id",t.sqlId);else if(t.type==="get_autocommit")e.number("stream_id",t.streamId);else throw W(t,"Impossible type of Request")}function _n(e,t){t.sql!==void 0&&e.string(1,t.sql),t.sqlId!==void 0&&e.int32(2,t.sqlId);for(const s of t.args)e.message(3,s,oi);for(const s of t.namedArgs)e.message(4,s,To);e.bool(5,t.wantRows)}function To(e,t){e.string(1,t.name),e.message(2,t.value,oi)}function ja(e,t){for(const s of t.steps)e.message(1,s,Mo)}function Mo(e,t){t.condition!==void 0&&e.message(1,t.condition,Sn),e.message(2,t.stmt,_n)}function Sn(e,t){if(t.type==="ok")e.uint32(1,t.step);else if(t.type==="error")e.uint32(2,t.step);else if(t.type==="not")e.message(3,t.cond,Sn);else if(t.type==="and")e.message(4,t.conds,al);else if(t.type==="or")e.message(5,t.conds,al);else if(t.type==="is_autocommit")e.message(6,void 0,ci);else throw W(t,"Impossible type of BatchCond")}function al(e,t){for(const s of t)e.message(1,s,Sn)}function oi(e,t){if(t===null)e.message(1,void 0,ci);else if(typeof t=="bigint")e.sint64(2,t);else if(typeof t=="number")e.double(3,t);else if(typeof t=="string")e.string(4,t);else if(t instanceof Uint8Array)e.bytes(5,t);else if(t!==void 0)throw W(t,"Impossible type of Value")}function ci(e,t){}function Do(e,t){if(t.type==="hello")e.message(1,t,Lo);else if(t.type==="request")e.message(2,t,jo);else throw W(t,"Impossible type of ClientMsg")}function Lo(e,t){t.jwt!==void 0&&e.string(1,t.jwt)}function jo(e,t){e.int32(1,t.requestId);const s=t.request;if(s.type==="open_stream")e.message(2,s,Oo);else if(s.type==="close_stream")e.message(3,s,Po);else if(s.type==="execute")e.message(4,s,No);else if(s.type==="batch")e.message(5,s,qo);else if(s.type==="open_cursor")e.message(6,s,Bo);else if(s.type==="close_cursor")e.message(7,s,Fo);else if(s.type==="fetch_cursor")e.message(8,s,Vo);else if(s.type==="sequence")e.message(9,s,Uo);else if(s.type==="describe")e.message(10,s,Ho);else if(s.type==="store_sql")e.message(11,s,Go);else if(s.type==="close_sql")e.message(12,s,Wo);else if(s.type==="get_autocommit")e.message(13,s,zo);else throw W(s,"Impossible type of Request")}function Oo(e,t){e.int32(1,t.streamId)}function Po(e,t){e.int32(1,t.streamId)}function No(e,t){e.int32(1,t.streamId),e.message(2,t.stmt,_n)}function qo(e,t){e.int32(1,t.streamId),e.message(2,t.batch,ja)}function Bo(e,t){e.int32(1,t.streamId),e.int32(2,t.cursorId),e.message(3,t.batch,ja)}function Fo(e,t){e.int32(1,t.cursorId)}function Vo(e,t){e.int32(1,t.cursorId),e.uint32(2,t.maxCount)}function Uo(e,t){e.int32(1,t.streamId),t.sql!==void 0&&e.string(2,t.sql),t.sqlId!==void 0&&e.int32(3,t.sqlId)}function Ho(e,t){e.int32(1,t.streamId),t.sql!==void 0&&e.string(2,t.sql),t.sqlId!==void 0&&e.int32(3,t.sqlId)}function Go(e,t){e.int32(1,t.sqlId),e.string(2,t.sql)}function Wo(e,t){e.int32(1,t.sqlId)}function zo(e,t){e.int32(1,t.streamId)}function $s(e){const t=Le(e.message),s=Oe(e.code);return{message:t,code:s}}function $n(e){const t=$t(e.cols,di),s=ka(e.rows).map(r=>$t(r,fi)),a=Gt(e.affected_row_count),n=Oe(e.last_insert_rowid),l=n!==void 0?BigInt(n):void 0;return{cols:t,rows:s,affectedRowCount:a,lastInsertRowid:l}}function di(e){const t=Oe(e.name),s=Oe(e.decltype);return{name:t,decltype:s}}function pi(e){const t=new Map;ka(e.step_results).forEach((a,n)=>{a!==null&&t.set(n,$n(se(a)))});const s=new Map;return ka(e.step_errors).forEach((a,n)=>{a!==null&&s.set(n,$s(se(a)))}),{stepResults:t,stepErrors:s}}function ui(e){const t=Le(e.type);if(t==="step_begin"){const s=Gt(e.step),a=$t(e.cols,di);return{type:"step_begin",step:s,cols:a}}else if(t==="step_end"){const s=Gt(e.affected_row_count),a=Oe(e.last_insert_rowid),n=a!==void 0?BigInt(a):void 0;return{type:"step_end",affectedRowCount:s,lastInsertRowid:n}}else if(t==="step_error"){const s=Gt(e.step),a=$s(se(e.error));return{type:"step_error",step:s,error:a}}else{if(t==="row")return{type:"row",row:$t(e.row,fi)};if(t==="error")return{type:"error",error:$s(se(e.error))};throw new A("Unexpected type of CursorEntry")}}function xi(e){const t=$t(e.params,Yo),s=$t(e.cols,Jo),a=Ws(e.is_explain),n=Ws(e.is_readonly);return{params:t,cols:s,isExplain:a,isReadonly:n}}function Yo(e){return{name:Oe(e.name)}}function Jo(e){const t=Le(e.name),s=Oe(e.decltype);return{name:t,decltype:s}}function fi(e){const t=Le(e.type);if(t==="null")return null;if(t==="integer"){const s=Le(e.value);return BigInt(s)}else{if(t==="float")return Gt(e.value);if(t==="text")return Le(e.value);if(t==="blob")return vn.toUint8Array(Le(e.base64));throw new A("Unexpected type of Value")}}function Ko(e){const t=Le(e.type);if(t==="hello_ok")return{type:"hello_ok"};if(t==="hello_error")return{type:"hello_error",error:$s(se(e.error))};if(t==="response_ok"){const s=Gt(e.request_id),a=Qo(se(e.response));return{type:"response_ok",requestId:s,response:a}}else if(t==="response_error"){const s=Gt(e.request_id),a=$s(se(e.error));return{type:"response_error",requestId:s,error:a}}else throw new A("Unexpected type of ServerMsg")}function Qo(e){const t=Le(e.type);if(t==="open_stream")return{type:"open_stream"};if(t==="close_stream")return{type:"close_stream"};if(t==="execute")return{type:"execute",result:$n(se(e.result))};if(t==="batch")return{type:"batch",result:pi(se(e.result))};if(t==="open_cursor")return{type:"open_cursor"};if(t==="close_cursor")return{type:"close_cursor"};if(t==="fetch_cursor"){const s=$t(e.entries,ui),a=Ws(e.done);return{type:"fetch_cursor",entries:s,done:a}}else{if(t==="sequence")return{type:"sequence"};if(t==="describe")return{type:"describe",result:xi(se(e.result))};if(t==="store_sql")return{type:"store_sql"};if(t==="close_sql")return{type:"close_sql"};if(t==="get_autocommit")return{type:"get_autocommit",isAutocommit:Ws(e.is_autocommit)};throw new A("Unexpected type of Response")}}const He={default(){return{message:"",code:void 0}},1(e,t){t.message=e.string()},2(e,t){t.code=e.string()}},Es={default(){return{cols:[],rows:[],affectedRowCount:0,lastInsertRowid:void 0}},1(e,t){t.cols.push(e.message(bi))},2(e,t){t.rows.push(e.message(mi))},3(e,t){t.affectedRowCount=Number(e.uint64())},4(e,t){t.lastInsertRowid=e.sint64()}},bi={default(){return{name:void 0,decltype:void 0}},1(e,t){t.name=e.string()},2(e,t){t.decltype=e.string()}},mi={default(){return[]},1(e,t){t.push(e.message(lc))}},$a={default(){return{stepResults:new Map,stepErrors:new Map}},1(e,t){const[s,a]=e.message(Xo);t.stepResults.set(s,a)},2(e,t){const[s,a]=e.message(Zo);t.stepErrors.set(s,a)}},Xo={default(){return[0,Es.default()]},1(e,t){t[0]=e.uint32()},2(e,t){t[1]=e.message(Es)}},Zo={default(){return[0,He.default()]},1(e,t){t[0]=e.uint32()},2(e,t){t[1]=e.message(He)}},hi={default(){return{type:"none"}},1(e){return e.message(ec)},2(e){return e.message(tc)},3(e){return e.message(sc)},4(e){return{type:"row",row:e.message(mi)}},5(e){return{type:"error",error:e.message(He)}}},ec={default(){return{type:"step_begin",step:0,cols:[]}},1(e,t){t.step=e.uint32()},2(e,t){t.cols.push(e.message(bi))}},tc={default(){return{type:"step_end",affectedRowCount:0,lastInsertRowid:void 0}},1(e,t){t.affectedRowCount=e.uint32()},2(e,t){t.lastInsertRowid=e.uint64()}},sc={default(){return{type:"step_error",step:0,error:He.default()}},1(e,t){t.step=e.uint32()},2(e,t){t.error=e.message(He)}},Ea={default(){return{params:[],cols:[],isExplain:!1,isReadonly:!1}},1(e,t){t.params.push(e.message(ac))},2(e,t){t.cols.push(e.message(nc))},3(e,t){t.isExplain=e.bool()},4(e,t){t.isReadonly=e.bool()}},ac={default(){return{name:void 0}},1(e,t){t.name=e.string()}},nc={default(){return{name:"",decltype:void 0}},1(e,t){t.name=e.string()},2(e,t){t.decltype=e.string()}},lc={default(){},1(e){return null},2(e){return e.sint64()},3(e){return e.double()},4(e){return e.string()},5(e){return e.bytes()}},ic={default(){return{type:"none"}},1(e){return{type:"hello_ok"}},2(e){return e.message(rc)},3(e){return e.message(cc)},4(e){return e.message(oc)}},rc={default(){return{type:"hello_error",error:He.default()}},1(e,t){t.error=e.message(He)}},oc={default(){return{type:"response_error",requestId:0,error:He.default()}},1(e,t){t.requestId=e.int32()},2(e,t){t.error=e.message(He)}},cc={default(){return{type:"response_ok",requestId:0,response:{type:"none"}}},1(e,t){t.requestId=e.int32()},2(e,t){t.response={type:"open_stream"}},3(e,t){t.response={type:"close_stream"}},4(e,t){t.response=e.message(dc)},5(e,t){t.response=e.message(pc)},6(e,t){t.response={type:"open_cursor"}},7(e,t){t.response={type:"close_cursor"}},8(e,t){t.response=e.message(uc)},9(e,t){t.response={type:"sequence"}},10(e,t){t.response=e.message(xc)},11(e,t){t.response={type:"store_sql"}},12(e,t){t.response={type:"close_sql"}},13(e,t){t.response=e.message(fc)}},dc={default(){return{type:"execute",result:Es.default()}},1(e,t){t.result=e.message(Es)}},pc={default(){return{type:"batch",result:$a.default()}},1(e,t){t.result=e.message($a)}},uc={default(){return{type:"fetch_cursor",entries:[],done:!1}},1(e,t){t.entries.push(e.message(hi))},2(e,t){t.done=e.bool()}},xc={default(){return{type:"describe",result:Ea.default()}},1(e,t){t.result=e.message(Ea)}},fc={default(){return{type:"get_autocommit",isAutocommit:!1}},1(e,t){t.isAutocommit=e.bool()}},bc=new Map([["hrana2",{version:2,encoding:"json"}],["hrana1",{version:1,encoding:"json"}]]),gi=new Map([["hrana3-protobuf",{version:3,encoding:"protobuf"}],["hrana3",{version:3,encoding:"json"}],["hrana2",{version:2,encoding:"json"}],["hrana1",{version:1,encoding:"json"}]]);var ae,Be,qt,pe,Bt,ue,cs,Re,bt,ds,N,nn,vi,ln,wi,yi,Pe,ki,_i,_l;let mc=(_l=class extends Gl{constructor(s,a){super();b(this,N);b(this,ae);b(this,Be);b(this,qt);b(this,pe);b(this,Bt);b(this,ue);b(this,cs);b(this,Re);b(this,bt);L(this,"_streamIdAlloc");L(this,"_cursorIdAlloc");b(this,ds);x(this,ae,s),x(this,Be,[]),x(this,qt,!1),x(this,pe,void 0),x(this,Bt,!1),x(this,ue,void 0),x(this,cs,!1),x(this,Re,new Map),x(this,bt,new js),this._streamIdAlloc=new js,this._cursorIdAlloc=new js,x(this,ds,new js),i(this,ae).binaryType="arraybuffer",i(this,ae).addEventListener("open",()=>g(this,N,vi).call(this)),i(this,ae).addEventListener("close",n=>g(this,N,yi).call(this,n)),i(this,ae).addEventListener("error",n=>g(this,N,wi).call(this,n)),i(this,ae).addEventListener("message",n=>g(this,N,ki).call(this,n)),g(this,N,nn).call(this,{type:"hello",jwt:a})}getVersion(){return new Promise((s,a)=>{if(x(this,cs,!0),i(this,pe)!==void 0)a(i(this,pe));else if(i(this,qt))s(i(this,ue).version);else{const n=()=>s(i(this,ue).version);i(this,Be).push({openCallback:n,errorCallback:a})}})}_ensureVersion(s,a){if(i(this,ue)===void 0||!i(this,cs))throw new _s(`${a} is supported only on protocol version ${s} and higher, but the version supported by the WebSocket server is not yet known. Use Client.getVersion() to wait until the version is available.`);if(i(this,ue).version<s)throw new _s(`${a} is supported on protocol version ${s} and higher, but the WebSocket server only supports version ${i(this,ue).version}`)}_sendRequest(s,a){if(i(this,pe)!==void 0){a.errorCallback(new Se("Client is closed",i(this,pe)));return}const n=i(this,bt).alloc();i(this,Re).set(n,{...a,type:s.type}),g(this,N,nn).call(this,{type:"request",requestId:n,request:s})}openStream(){return tn.open(this)}storeSql(s){this._ensureVersion(2,"storeSql()");const a=i(this,ds).alloc(),n=new yn(this,a),l=()=>{},r=p=>n._setClosed(p),o={type:"store_sql",sqlId:a,sql:s};return this._sendRequest(o,{responseCallback:l,errorCallback:r}),n}_closeSql(s){if(i(this,pe)!==void 0)return;const a=()=>i(this,ds).free(s),n=r=>g(this,N,Pe).call(this,r),l={type:"close_sql",sqlId:s};this._sendRequest(l,{responseCallback:a,errorCallback:n})}close(){g(this,N,Pe).call(this,new G("Client was manually closed"))}get closed(){return i(this,pe)!==void 0}},ae=new WeakMap,Be=new WeakMap,qt=new WeakMap,pe=new WeakMap,Bt=new WeakMap,ue=new WeakMap,cs=new WeakMap,Re=new WeakMap,bt=new WeakMap,ds=new WeakMap,N=new WeakSet,nn=function(s){if(i(this,pe)!==void 0)throw new St("Trying to send a message on a closed client");if(i(this,qt))g(this,N,ln).call(this,s);else{const a=()=>g(this,N,ln).call(this,s),n=()=>{};i(this,Be).push({openCallback:a,errorCallback:n})}},vi=function(){const s=i(this,ae).protocol;if(s===void 0){g(this,N,Pe).call(this,new G("The `WebSocket.protocol` property is undefined. This most likely means that the WebSocket implementation provided by the environment is broken. If you are using Miniflare 2, please update to Miniflare 3, which fixes this problem."));return}else if(s==="")x(this,ue,{version:1,encoding:"json"});else if(x(this,ue,gi.get(s)),i(this,ue)===void 0){g(this,N,Pe).call(this,new A(`Unrecognized WebSocket subprotocol: ${JSON.stringify(s)}`));return}for(const a of i(this,Be))a.openCallback();i(this,Be).length=0,x(this,qt,!0)},ln=function(s){const a=i(this,ue).encoding;if(a==="json"){const n=Yl(s,Ro);i(this,ae).send(n)}else if(a==="protobuf"){const n=Kl(s,Do);i(this,ae).send(n)}else throw W(a,"Impossible encoding")},wi=function(s){const n=s.message??"WebSocket was closed due to an error";g(this,N,Pe).call(this,new Ka(n))},yi=function(s){let a=`WebSocket was closed with code ${s.code}`;s.reason&&(a+=`: ${s.reason}`),g(this,N,Pe).call(this,new Ka(a))},Pe=function(s){if(i(this,pe)===void 0){x(this,pe,s);for(const a of i(this,Be))a.errorCallback(s);i(this,Be).length=0;for(const[a,n]of i(this,Re).entries())n.errorCallback(s),i(this,bt).free(a);i(this,Re).clear(),i(this,ae).close()}},ki=function(s){if(i(this,pe)===void 0)try{let a;const n=i(this,ue).encoding;if(n==="json"){if(typeof s.data!="string"){i(this,ae).close(3003,"Only text messages are accepted with JSON encoding"),g(this,N,Pe).call(this,new A("Received non-text message from server with JSON encoding"));return}a=wn(JSON.parse(s.data),Ko)}else if(n==="protobuf"){if(!(s.data instanceof ArrayBuffer)){i(this,ae).close(3003,"Only binary messages are accepted with Protobuf encoding"),g(this,N,Pe).call(this,new A("Received non-binary message from server with Protobuf encoding"));return}a=La(new Uint8Array(s.data),ic)}else throw W(n,"Impossible encoding");g(this,N,_i).call(this,a)}catch(a){i(this,ae).close(3007,"Could not handle message"),g(this,N,Pe).call(this,a)}},_i=function(s){if(s.type==="none")throw new A("Received an unrecognized ServerMsg");if(s.type==="hello_ok"||s.type==="hello_error"){if(i(this,Bt))throw new A("Received a duplicated hello response");if(x(this,Bt,!0),s.type==="hello_error")throw Ss(s.error);return}else if(!i(this,Bt))throw new A("Received a non-hello message before a hello response");if(s.type==="response_ok"){const a=s.requestId,n=i(this,Re).get(a);if(i(this,Re).delete(a),n===void 0)throw new A("Received unexpected OK response");i(this,bt).free(a);try{if(n.type!==s.response.type)throw console.dir({responseState:n,msg:s}),new A("Received unexpected type of response");n.responseCallback(s.response)}catch(l){throw n.errorCallback(l),l}}else if(s.type==="response_error"){const a=s.requestId,n=i(this,Re).get(a);if(i(this,Re).delete(a),n===void 0)throw new A("Received unexpected error response");i(this,bt).free(a),n.errorCallback(Ss(s.error))}else throw W(s,"Impossible ServerMsg type")},_l);var xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rn={exports:{}};(function(e,t){var s=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof xa<"u"&&xa,a=function(){function l(){this.fetch=!1,this.DOMException=s.DOMException}return l.prototype=s,new l}();(function(l){(function(r){var o=typeof l<"u"&&l||typeof self<"u"&&self||typeof xa<"u"&&xa||{},p={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function c(f){return f&&DataView.prototype.isPrototypeOf(f)}if(p.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],y=ArrayBuffer.isView||function(f){return f&&u.indexOf(Object.prototype.toString.call(f))>-1};function v(f){if(typeof f!="string"&&(f=String(f)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(f)||f==="")throw new TypeError('Invalid character in header field name: "'+f+'"');return f.toLowerCase()}function k(f){return typeof f!="string"&&(f=String(f)),f}function m(f){var _={next:function(){var R=f.shift();return{done:R===void 0,value:R}}};return p.iterable&&(_[Symbol.iterator]=function(){return _}),_}function $(f){this.map={},f instanceof $?f.forEach(function(_,R){this.append(R,_)},this):Array.isArray(f)?f.forEach(function(_){if(_.length!=2)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+_.length);this.append(_[0],_[1])},this):f&&Object.getOwnPropertyNames(f).forEach(function(_){this.append(_,f[_])},this)}$.prototype.append=function(f,_){f=v(f),_=k(_);var R=this.map[f];this.map[f]=R?R+", "+_:_},$.prototype.delete=function(f){delete this.map[v(f)]},$.prototype.get=function(f){return f=v(f),this.has(f)?this.map[f]:null},$.prototype.has=function(f){return this.map.hasOwnProperty(v(f))},$.prototype.set=function(f,_){this.map[v(f)]=k(_)},$.prototype.forEach=function(f,_){for(var R in this.map)this.map.hasOwnProperty(R)&&f.call(_,this.map[R],R,this)},$.prototype.keys=function(){var f=[];return this.forEach(function(_,R){f.push(R)}),m(f)},$.prototype.values=function(){var f=[];return this.forEach(function(_){f.push(_)}),m(f)},$.prototype.entries=function(){var f=[];return this.forEach(function(_,R){f.push([R,_])}),m(f)},p.iterable&&($.prototype[Symbol.iterator]=$.prototype.entries);function S(f){if(!f._noBody){if(f.bodyUsed)return Promise.reject(new TypeError("Already read"));f.bodyUsed=!0}}function h(f){return new Promise(function(_,R){f.onload=function(){_(f.result)},f.onerror=function(){R(f.error)}})}function P(f){var _=new FileReader,R=h(_);return _.readAsArrayBuffer(f),R}function V(f){var _=new FileReader,R=h(_),q=/charset=([A-Za-z0-9_-]+)/.exec(f.type),F=q?q[1]:"utf-8";return _.readAsText(f,F),R}function As(f){for(var _=new Uint8Array(f),R=new Array(_.length),q=0;q<_.length;q++)R[q]=String.fromCharCode(_[q]);return R.join("")}function zt(f){if(f.slice)return f.slice(0);var _=new Uint8Array(f.byteLength);return _.set(new Uint8Array(f)),_.buffer}function Gn(){return this.bodyUsed=!1,this._initBody=function(f){this.bodyUsed=this.bodyUsed,this._bodyInit=f,f?typeof f=="string"?this._bodyText=f:p.blob&&Blob.prototype.isPrototypeOf(f)?this._bodyBlob=f:p.formData&&FormData.prototype.isPrototypeOf(f)?this._bodyFormData=f:p.searchParams&&URLSearchParams.prototype.isPrototypeOf(f)?this._bodyText=f.toString():p.arrayBuffer&&p.blob&&c(f)?(this._bodyArrayBuffer=zt(f.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):p.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(f)||y(f))?this._bodyArrayBuffer=zt(f):this._bodyText=f=Object.prototype.toString.call(f):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||(typeof f=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):p.searchParams&&URLSearchParams.prototype.isPrototypeOf(f)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},p.blob&&(this.blob=function(){var f=S(this);if(f)return f;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var f=S(this);return f||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else{if(p.blob)return this.blob().then(P);throw new Error("could not read as ArrayBuffer")}},this.text=function(){var f=S(this);if(f)return f;if(this._bodyBlob)return V(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(As(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},p.formData&&(this.formData=function(){return this.text().then(Ki)}),this.json=function(){return this.text().then(JSON.parse)},this}var Yi=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function Ji(f){var _=f.toUpperCase();return Yi.indexOf(_)>-1?_:f}function ct(f,_){if(!(this instanceof ct))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');_=_||{};var R=_.body;if(f instanceof ct){if(f.bodyUsed)throw new TypeError("Already read");this.url=f.url,this.credentials=f.credentials,_.headers||(this.headers=new $(f.headers)),this.method=f.method,this.mode=f.mode,this.signal=f.signal,!R&&f._bodyInit!=null&&(R=f._bodyInit,f.bodyUsed=!0)}else this.url=String(f);if(this.credentials=_.credentials||this.credentials||"same-origin",(_.headers||!this.headers)&&(this.headers=new $(_.headers)),this.method=Ji(_.method||this.method||"GET"),this.mode=_.mode||this.mode||null,this.signal=_.signal||this.signal||function(){if("AbortController"in o){var M=new AbortController;return M.signal}}(),this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&R)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(R),(this.method==="GET"||this.method==="HEAD")&&(_.cache==="no-store"||_.cache==="no-cache")){var q=/([?&])_=[^&]*/;if(q.test(this.url))this.url=this.url.replace(q,"$1_="+new Date().getTime());else{var F=/\?/;this.url+=(F.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}ct.prototype.clone=function(){return new ct(this,{body:this._bodyInit})};function Ki(f){var _=new FormData;return f.trim().split("&").forEach(function(R){if(R){var q=R.split("="),F=q.shift().replace(/\+/g," "),M=q.join("=").replace(/\+/g," ");_.append(decodeURIComponent(F),decodeURIComponent(M))}}),_}function Qi(f){var _=new $,R=f.replace(/\r?\n[\t ]+/g," ");return R.split("\r").map(function(q){return q.indexOf(`
`)===0?q.substr(1,q.length):q}).forEach(function(q){var F=q.split(":"),M=F.shift().trim();if(M){var pa=F.join(":").trim();try{_.append(M,pa)}catch(Ba){console.warn("Response "+Ba.message)}}}),_}Gn.call(ct.prototype);function $e(f,_){if(!(this instanceof $e))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(_||(_={}),this.type="default",this.status=_.status===void 0?200:_.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=_.statusText===void 0?"":""+_.statusText,this.headers=new $(_.headers),this.url=_.url||"",this._initBody(f)}Gn.call($e.prototype),$e.prototype.clone=function(){return new $e(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new $(this.headers),url:this.url})},$e.error=function(){var f=new $e(null,{status:200,statusText:""});return f.ok=!1,f.status=0,f.type="error",f};var Xi=[301,302,303,307,308];$e.redirect=function(f,_){if(Xi.indexOf(_)===-1)throw new RangeError("Invalid status code");return new $e(null,{status:_,headers:{location:f}})},r.DOMException=o.DOMException;try{new r.DOMException}catch{r.DOMException=function(_,R){this.message=_,this.name=R;var q=Error(_);this.stack=q.stack},r.DOMException.prototype=Object.create(Error.prototype),r.DOMException.prototype.constructor=r.DOMException}function qa(f,_){return new Promise(function(R,q){var F=new ct(f,_);if(F.signal&&F.signal.aborted)return q(new r.DOMException("Aborted","AbortError"));var M=new XMLHttpRequest;function pa(){M.abort()}M.onload=function(){var Z={statusText:M.statusText,headers:Qi(M.getAllResponseHeaders()||"")};F.url.indexOf("file://")===0&&(M.status<200||M.status>599)?Z.status=200:Z.status=M.status,Z.url="responseURL"in M?M.responseURL:Z.headers.get("X-Request-URL");var It="response"in M?M.response:M.responseText;setTimeout(function(){R(new $e(It,Z))},0)},M.onerror=function(){setTimeout(function(){q(new TypeError("Network request failed"))},0)},M.ontimeout=function(){setTimeout(function(){q(new TypeError("Network request timed out"))},0)},M.onabort=function(){setTimeout(function(){q(new r.DOMException("Aborted","AbortError"))},0)};function Ba(Z){try{return Z===""&&o.location.href?o.location.href:Z}catch{return Z}}if(M.open(F.method,Ba(F.url),!0),F.credentials==="include"?M.withCredentials=!0:F.credentials==="omit"&&(M.withCredentials=!1),"responseType"in M&&(p.blob?M.responseType="blob":p.arrayBuffer&&(M.responseType="arraybuffer")),_&&typeof _.headers=="object"&&!(_.headers instanceof $||o.Headers&&_.headers instanceof o.Headers)){var Wn=[];Object.getOwnPropertyNames(_.headers).forEach(function(Z){Wn.push(v(Z)),M.setRequestHeader(Z,k(_.headers[Z]))}),F.headers.forEach(function(Z,It){Wn.indexOf(It)===-1&&M.setRequestHeader(It,Z)})}else F.headers.forEach(function(Z,It){M.setRequestHeader(It,Z)});F.signal&&(F.signal.addEventListener("abort",pa),M.onreadystatechange=function(){M.readyState===4&&F.signal.removeEventListener("abort",pa)}),M.send(typeof F._bodyInit>"u"?null:F._bodyInit)})}return qa.polyfill=!0,o.fetch||(o.fetch=qa,o.Headers=$,o.Request=ct,o.Response=$e),r.Headers=$,r.Request=ct,r.Response=$e,r.fetch=qa,r})({})})(a),a.fetch.ponyfill=!0,delete a.fetch.polyfill;var n=s.fetch?s:a;t=n.fetch,t.default=n.fetch,t.fetch=n.fetch,t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response,e.exports=t})(rn,rn.exports);var Ia=rn.exports;let Xt;if(typeof queueMicrotask<"u")Xt=queueMicrotask;else{const e=Promise.resolve();Xt=t=>{e.then(t)}}var we,Ae,xe,Da,Si;class gc{constructor(t){b(this,Da);b(this,we);b(this,Ae);b(this,xe);x(this,we,new Uint8Array(new ArrayBuffer(t))),x(this,Ae,0),x(this,xe,0)}get length(){return i(this,xe)-i(this,Ae)}data(){return i(this,we).slice(i(this,Ae),i(this,xe))}push(t){g(this,Da,Si).call(this,t.byteLength),i(this,we).set(t,i(this,xe)),x(this,xe,i(this,xe)+t.byteLength)}shift(t){x(this,Ae,i(this,Ae)+t)}}we=new WeakMap,Ae=new WeakMap,xe=new WeakMap,Da=new WeakSet,Si=function(t){if(i(this,xe)+t<=i(this,we).byteLength)return;const s=i(this,xe)-i(this,Ae);if(s+t<=i(this,we).byteLength&&2*i(this,xe)>=i(this,we).byteLength)i(this,we).copyWithin(0,i(this,Ae),i(this,xe));else{let a=i(this,we).byteLength;do a*=2;while(s+t>a);const n=new Uint8Array(new ArrayBuffer(a));n.set(i(this,we).slice(i(this,Ae),i(this,xe)),0),x(this,we,n)}x(this,xe,s),x(this,Ae,0)};function vc(e){const t=Oe(e.baton),s=Oe(e.base_url),a=$t(e.results,wc);return{baton:t,baseUrl:s,results:a}}function wc(e){const t=Le(e.type);if(t==="ok")return{type:"ok",response:yc(se(e.response))};if(t==="error")return{type:"error",error:$s(se(e.error))};throw new A("Unexpected type of StreamResult")}function yc(e){const t=Le(e.type);if(t==="close")return{type:"close"};if(t==="execute")return{type:"execute",result:$n(se(e.result))};if(t==="batch")return{type:"batch",result:pi(se(e.result))};if(t==="sequence")return{type:"sequence"};if(t==="describe")return{type:"describe",result:xi(se(e.result))};if(t==="store_sql")return{type:"store_sql"};if(t==="close_sql")return{type:"close_sql"};if(t==="get_autocommit")return{type:"get_autocommit",isAutocommit:Ws(e.is_autocommit)};throw new A("Unexpected type of StreamResponse")}function kc(e){const t=Oe(e.baton),s=Oe(e.base_url);return{baton:t,baseUrl:s}}const _c={default(){return{baton:void 0,baseUrl:void 0,results:[]}},1(e,t){t.baton=e.string()},2(e,t){t.baseUrl=e.string()},3(e,t){t.results.push(e.message(Sc))}},Sc={default(){return{type:"none"}},1(e){return{type:"ok",response:e.message($c)}},2(e){return{type:"error",error:e.message(He)}}},$c={default(){return{type:"none"}},1(e){return{type:"close"}},2(e){return e.message(Ec)},3(e){return e.message(Ic)},4(e){return{type:"sequence"}},5(e){return e.message(Cc)},6(e){return{type:"store_sql"}},7(e){return{type:"close_sql"}},8(e){return e.message(Rc)}},Ec={default(){return{type:"execute",result:Es.default()}},1(e,t){t.result=e.message(Es)}},Ic={default(){return{type:"batch",result:$a.default()}},1(e,t){t.result=e.message($a)}},Cc={default(){return{type:"describe",result:Ea.default()}},1(e,t){t.result=e.message(Ea)}},Rc={default(){return{type:"get_autocommit",isAutocommit:!1}},1(e,t){t.isAutocommit=e.bool()}},Ac={default(){return{baton:void 0,baseUrl:void 0}},1(e,t){t.baton=e.string()},2(e,t){t.baseUrl=e.string()}};var Js,Ft,Ze,Fe,et,ps,ot,on,$i,Ei;class Tc extends li{constructor(s,a){super();b(this,ot);b(this,Js);b(this,Ft);b(this,Ze);b(this,Fe);b(this,et);b(this,ps);x(this,Js,s),x(this,Ft,a),x(this,Ze,void 0),x(this,Fe,new gc(16*1024)),x(this,et,void 0),x(this,ps,!1)}async open(s){if(s.body===null)throw new A("No response body for cursor request");x(this,Ze,s.body[Symbol.asyncIterator]());const a=await g(this,ot,on).call(this,kc,Ac);if(a===void 0)throw new A("Empty response to cursor request");return a}next(){return g(this,ot,on).call(this,ui,hi)}close(){this._setClosed(new G("Cursor was manually closed"))}_setClosed(s){i(this,et)===void 0&&(x(this,et,s),i(this,Js)._cursorClosed(this),i(this,Ze)!==void 0&&i(this,Ze).return())}get closed(){return i(this,et)!==void 0}}Js=new WeakMap,Ft=new WeakMap,Ze=new WeakMap,Fe=new WeakMap,et=new WeakMap,ps=new WeakMap,ot=new WeakSet,on=async function(s,a){for(;;){if(i(this,ps))return;if(i(this,et)!==void 0)throw new Se("Cursor is closed",i(this,et));if(i(this,Ft)==="json"){const r=g(this,ot,$i).call(this);if(r!==void 0){const o=new TextDecoder().decode(r),p=JSON.parse(o);return wn(p,s)}}else if(i(this,Ft)==="protobuf"){const r=g(this,ot,Ei).call(this);if(r!==void 0)return La(r,a)}else throw W(i(this,Ft),"Impossible encoding");if(i(this,Ze)===void 0)throw new St("Attempted to read from HTTP cursor before it was opened");const{value:n,done:l}=await i(this,Ze).next();if(l&&i(this,Fe).length===0)x(this,ps,!0);else{if(l)throw new A("Unexpected end of cursor stream");i(this,Fe).push(n)}}},$i=function(){const s=i(this,Fe).data(),n=s.indexOf(10);if(n<0)return;const l=s.slice(0,n);return i(this,Fe).shift(n+1),l},Ei=function(){const s=i(this,Fe).data();let a=0,n=0;for(;;){if(n>=s.byteLength)return;const r=s[n];if(a|=(r&127)<<7*n,n+=1,!(r&128))break}if(s.byteLength<n+a)return;const l=s.slice(n,n+a);return i(this,Fe).shift(n+a),l};function Mc(e,t){t.baton!==void 0&&e.string("baton",t.baton),e.arrayObjects("requests",t.requests,Dc)}function Dc(e,t){if(e.stringRaw("type",t.type),t.type!=="close"){if(t.type==="execute")e.object("stmt",t.stmt,kn);else if(t.type==="batch")e.object("batch",t.batch,Sa);else if(t.type==="sequence")t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="describe")t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="store_sql")e.number("sql_id",t.sqlId),e.string("sql",t.sql);else if(t.type==="close_sql")e.number("sql_id",t.sqlId);else if(t.type!=="get_autocommit")throw W(t,"Impossible type of StreamRequest")}}function Lc(e,t){t.baton!==void 0&&e.string("baton",t.baton),e.object("batch",t.batch,Sa)}function jc(e,t){t.baton!==void 0&&e.string(1,t.baton);for(const s of t.requests)e.message(2,s,Oc)}function Oc(e,t){if(t.type==="close")e.message(1,t,Pc);else if(t.type==="execute")e.message(2,t,Nc);else if(t.type==="batch")e.message(3,t,qc);else if(t.type==="sequence")e.message(4,t,Bc);else if(t.type==="describe")e.message(5,t,Fc);else if(t.type==="store_sql")e.message(6,t,Vc);else if(t.type==="close_sql")e.message(7,t,Uc);else if(t.type==="get_autocommit")e.message(8,t,Hc);else throw W(t,"Impossible type of StreamRequest")}function Pc(e,t){}function Nc(e,t){e.message(1,t.stmt,_n)}function qc(e,t){e.message(1,t.batch,ja)}function Bc(e,t){t.sql!==void 0&&e.string(1,t.sql),t.sqlId!==void 0&&e.int32(2,t.sqlId)}function Fc(e,t){t.sql!==void 0&&e.string(1,t.sql),t.sqlId!==void 0&&e.int32(2,t.sqlId)}function Vc(e,t){e.int32(1,t.sqlId),e.string(2,t.sql)}function Uc(e,t){e.int32(1,t.sqlId)}function Hc(e,t){}function Gc(e,t){t.baton!==void 0&&e.string(1,t.baton),e.message(2,t.batch,ja)}var tt,mt,us,Ks,xs,ht,Te,gt,st,at,vt,Ve,fs,D,dt,cn,At,Ii,Ci,dn,Ri,Ai,pn;class Wc extends ni{constructor(s,a,n,l,r){super(s.intMode);b(this,D);b(this,tt);b(this,mt);b(this,us);b(this,Ks);b(this,xs);b(this,ht);b(this,Te);b(this,gt);b(this,st);b(this,at);b(this,vt);b(this,Ve);b(this,fs);x(this,tt,s),x(this,mt,a.toString()),x(this,us,n),x(this,Ks,l),x(this,xs,r),x(this,ht,void 0),x(this,Te,new _a),x(this,gt,!1),x(this,at,!1),x(this,vt,!1),x(this,Ve,void 0),x(this,fs,new js)}client(){return i(this,tt)}_sqlOwner(){return this}storeSql(s){const a=i(this,fs).alloc();return g(this,D,dt).call(this,{type:"store_sql",sqlId:a,sql:s}).then(()=>{},n=>this._setClosed(n)),new yn(this,a)}_closeSql(s){i(this,Ve)===void 0&&g(this,D,dt).call(this,{type:"close_sql",sqlId:s}).then(()=>i(this,fs).free(s),a=>this._setClosed(a))}_execute(s){return g(this,D,dt).call(this,{type:"execute",stmt:s}).then(a=>a.result)}_batch(s){return g(this,D,dt).call(this,{type:"batch",batch:s}).then(a=>a.result)}_describe(s){return g(this,D,dt).call(this,{type:"describe",sql:s.sql,sqlId:s.sqlId}).then(a=>a.result)}_sequence(s){return g(this,D,dt).call(this,{type:"sequence",sql:s.sql,sqlId:s.sqlId}).then(a=>{})}getAutocommit(){return i(this,tt)._ensureVersion(3,"getAutocommit()"),g(this,D,dt).call(this,{type:"get_autocommit"}).then(s=>s.isAutocommit)}_openCursor(s){return new Promise((a,n)=>{g(this,D,cn).call(this,{type:"cursor",batch:s,cursorCallback:a,errorCallback:n})})}_cursorClosed(s){if(s!==i(this,st))throw new St("Cursor was closed, but it was not associated with the stream");x(this,st,void 0),Xt(()=>g(this,D,At).call(this))}close(){this._setClosed(new G("Stream was manually closed"))}closeGracefully(){x(this,at,!0),Xt(()=>g(this,D,At).call(this))}get closed(){return i(this,Ve)!==void 0||i(this,at)}_setClosed(s){if(i(this,Ve)===void 0){for(x(this,Ve,s),i(this,st)!==void 0&&i(this,st)._setClosed(s),i(this,tt)._streamClosed(this);;){const a=i(this,Te).shift();if(a!==void 0)a.errorCallback(s);else break}(i(this,ht)!==void 0||i(this,gt))&&!i(this,vt)&&(i(this,Te).push({type:"pipeline",request:{type:"close"},responseCallback:()=>{},errorCallback:()=>{}}),x(this,vt,!0),Xt(()=>g(this,D,At).call(this)))}}}tt=new WeakMap,mt=new WeakMap,us=new WeakMap,Ks=new WeakMap,xs=new WeakMap,ht=new WeakMap,Te=new WeakMap,gt=new WeakMap,st=new WeakMap,at=new WeakMap,vt=new WeakMap,Ve=new WeakMap,fs=new WeakMap,D=new WeakSet,dt=function(s){return new Promise((a,n)=>{g(this,D,cn).call(this,{type:"pipeline",request:s,responseCallback:a,errorCallback:n})})},cn=function(s){if(i(this,Ve)!==void 0)throw new Se("Stream is closed",i(this,Ve));if(i(this,at))throw new Se("Stream is closing",void 0);i(this,Te).push(s),Xt(()=>g(this,D,At).call(this))},At=function(){if(i(this,gt)||i(this,st)!==void 0)return;if(i(this,at)&&i(this,Te).length===0){this._setClosed(new G("Stream was gracefully closed"));return}const s=i(this,tt)._endpoint;if(s===void 0){i(this,tt)._endpointPromise.then(()=>g(this,D,At).call(this),n=>this._setClosed(n));return}const a=i(this,Te).shift();if(a!==void 0)if(a.type==="pipeline"){const n=[a];for(;;){const l=i(this,Te).first();if(l!==void 0&&l.type==="pipeline")n.push(l),i(this,Te).shift();else if(l===void 0&&i(this,at)&&!i(this,vt)){n.push({type:"pipeline",request:{type:"close"},responseCallback:()=>{},errorCallback:()=>{}}),x(this,vt,!0);break}else break}g(this,D,Ii).call(this,s,n)}else if(a.type==="cursor")g(this,D,Ci).call(this,s,a);else throw W(a,"Impossible type of QueueEntry")},Ii=function(s,a){g(this,D,dn).call(this,()=>g(this,D,Ri).call(this,a,s),n=>Yc(n,s.encoding),n=>n.baton,n=>n.baseUrl,n=>zc(a,n),n=>a.forEach(l=>l.errorCallback(n)))},Ci=function(s,a){const n=new Tc(this,s.encoding);x(this,st,n),g(this,D,dn).call(this,()=>g(this,D,Ai).call(this,a,s),l=>n.open(l),l=>l.baton,l=>l.baseUrl,l=>a.cursorCallback(n),l=>a.errorCallback(l))},dn=function(s,a,n,l,r,o){let p;try{const c=s();p=i(this,Ks)(c)}catch(c){p=Promise.reject(c)}x(this,gt,!0),p.then(c=>c.ok?a(c):Jc(c).then(u=>{throw u})).then(c=>{x(this,ht,n(c)),x(this,mt,l(c)??i(this,mt)),r(c)}).catch(c=>{this._setClosed(c),o(c)}).finally(()=>{x(this,gt,!1),g(this,D,At).call(this)})},Ri=function(s,a){return g(this,D,pn).call(this,new URL(a.pipelinePath,i(this,mt)),{baton:i(this,ht),requests:s.map(n=>n.request)},a.encoding,Mc,jc)},Ai=function(s,a){if(a.cursorPath===void 0)throw new _s(`Cursors are supported only on protocol version 3 and higher, but the HTTP server only supports version ${a.version}.`);return g(this,D,pn).call(this,new URL(a.cursorPath,i(this,mt)),{baton:i(this,ht),batch:s.batch},a.encoding,Lc,Gc)},pn=function(s,a,n,l,r){let o,p;if(n==="json")o=Yl(a,l),p="application/json";else if(n==="protobuf")o=Kl(a,r),p="application/x-protobuf";else throw W(n,"Impossible encoding");const c=new Ia.Headers;return c.set("content-type",p),i(this,us)!==void 0&&c.set("authorization",`Bearer ${i(this,us)}`),i(this,xs)!==void 0&&c.set("x-turso-encryption-key",i(this,xs)),new Ia.Request(s.toString(),{method:"POST",headers:c,body:o})};function zc(e,t){if(t.results.length!==e.length)throw new A("Server returned unexpected number of pipeline results");for(let s=0;s<e.length;++s){const a=t.results[s],n=e[s];if(a.type==="ok"){if(a.response.type!==n.request.type)throw new A("Received unexpected type of response");n.responseCallback(a.response)}else if(a.type==="error")n.errorCallback(Ss(a.error));else throw a.type==="none"?new A("Received unrecognized type of StreamResult"):W(a,"Received impossible type of StreamResult")}}async function Yc(e,t){var s;if(t==="json"){const a=await e.json();return wn(a,vc)}if(t==="protobuf"){const a=await e.arrayBuffer();return La(new Uint8Array(a),_c)}throw await((s=e.body)==null?void 0:s.cancel()),W(t,"Impossible encoding")}async function Jc(e){var a;const t=e.headers.get("content-type")??"text/plain";let s=`Server returned HTTP status ${e.status}`;if(t==="application/json"){const n=await e.json();return"message"in n?Ss(n):new ma(s,e.status)}if(t==="text/plain"){const n=(await e.text()).trim();return n!==""&&(s+=`: ${n}`),new ma(s,e.status)}return await((a=e.body)==null?void 0:a.cancel()),new ma(s,e.status)}const Kc=[{versionPath:"v3-protobuf",pipelinePath:"v3-protobuf/pipeline",cursorPath:"v3-protobuf/cursor",version:3,encoding:"protobuf"}],un={versionPath:"v2",pipelinePath:"v2/pipeline",cursorPath:void 0,version:2,encoding:"json"};var bs,Qs,ms,Xs,nt,Vt,hs,wa,Sl;let Qc=(Sl=class extends Gl{constructor(s,a,n,l,r=2){super();b(this,hs);b(this,bs);b(this,Qs);b(this,ms);b(this,Xs);b(this,nt);b(this,Vt);L(this,"_endpointPromise");L(this,"_endpoint");x(this,bs,s),x(this,Qs,a),x(this,ms,n??Ia.fetch),x(this,Xs,l),x(this,nt,void 0),x(this,Vt,new Set),r==3?(this._endpointPromise=Xc(i(this,ms),i(this,bs)),this._endpointPromise.then(o=>this._endpoint=o,o=>g(this,hs,wa).call(this,o))):(this._endpointPromise=Promise.resolve(un),this._endpointPromise.then(o=>this._endpoint=o,o=>g(this,hs,wa).call(this,o)))}async getVersion(){return this._endpoint!==void 0?this._endpoint.version:(await this._endpointPromise).version}_ensureVersion(s,a){if(!(s<=un.version)){if(this._endpoint===void 0)throw new _s(`${a} is supported only on protocol version ${s} and higher, but the version supported by the HTTP server is not yet known. Use Client.getVersion() to wait until the version is available.`);if(this._endpoint.version<s)throw new _s(`${a} is supported only on protocol version ${s} and higher, but the HTTP server only supports version ${this._endpoint.version}.`)}}openStream(){if(i(this,nt)!==void 0)throw new Se("Client is closed",i(this,nt));const s=new Wc(this,i(this,bs),i(this,Qs),i(this,ms),i(this,Xs));return i(this,Vt).add(s),s}_streamClosed(s){i(this,Vt).delete(s)}close(){g(this,hs,wa).call(this,new G("Client was manually closed"))}get closed(){return i(this,nt)!==void 0}},bs=new WeakMap,Qs=new WeakMap,ms=new WeakMap,Xs=new WeakMap,nt=new WeakMap,Vt=new WeakMap,hs=new WeakSet,wa=function(s){if(i(this,nt)===void 0){x(this,nt,s);for(const a of Array.from(i(this,Vt)))a._setClosed(new Se("Client was closed",s))}},Sl);async function Xc(e,t){const s=e;for(const a of Kc){const n=new URL(a.versionPath,t),l=new Ia.Request(n.toString(),{method:"GET"}),r=await s(l);if(await r.arrayBuffer(),r.ok)return a}return un}function Ti(e,t,s=2){if(typeof Qt>"u")throw new zl("WebSockets are not supported in this environment");var a=void 0;s==3?a=Array.from(gi.keys()):a=Array.from(bc.keys());const n=new Qt(e,a);return new mc(n,t)}function nl(e,t,s,a,n=2){return new Qc(e instanceof URL?e:new URL(e),t,s,a,n)}var gs,lt,ie;class Mi{constructor(t,s){b(this,gs);b(this,lt);b(this,ie);x(this,gs,t),x(this,lt,s),x(this,ie,void 0)}execute(t){return this.batch([t]).then(s=>s[0])}async batch(t){const s=this._getStream();if(s.closed)throw new O("Cannot execute statements because the transaction is closed","TRANSACTION_CLOSED");try{const a=t.map(Wt);let n;if(i(this,ie)===void 0){this._getSqlCache().apply(a);const r=s.batch(i(this,lt)>=3),o=r.step(),p=o.run(Ja(i(this,gs)));let c=o;n=a.map(u=>{const y=r.step().condition(fe.ok(c));i(this,lt)>=3&&y.condition(fe.not(fe.isAutocommit(r)));const v=y.query(u);return v.catch(()=>{}),c=y,v}),x(this,ie,r.execute().then(()=>p).then(()=>{}));try{await i(this,ie)}catch(u){throw this.close(),u}}else{i(this,lt)<3&&await i(this,ie),this._getSqlCache().apply(a);const r=s.batch(i(this,lt)>=3);let o;n=a.map(p=>{const c=r.step();o!==void 0&&c.condition(fe.ok(o)),i(this,lt)>=3&&c.condition(fe.not(fe.isAutocommit(r)));const u=c.query(p);return u.catch(()=>{}),o=c,u}),await r.execute()}const l=[];for(let r=0;r<n.length;r++)try{const o=await n[r];if(o===void 0)throw new Zt("Statement in a transaction was not executed, probably because the transaction has been rolled back",r,"TRANSACTION_CLOSED");l.push(Oa(o))}catch(o){if(o instanceof Zt)throw o;const p=H(o);throw p instanceof O?new Zt(p.message,r,p.code,p.extendedCode,p.rawCode,p.cause instanceof Error?p.cause:void 0):p}return l}catch(a){throw H(a)}}async executeMultiple(t){const s=this._getStream();if(s.closed)throw new O("Cannot execute statements because the transaction is closed","TRANSACTION_CLOSED");try{if(i(this,ie)===void 0){x(this,ie,s.run(Ja(i(this,gs))).then(()=>{}));try{await i(this,ie)}catch(a){throw this.close(),a}}else await i(this,ie);await s.sequence(t)}catch(a){throw H(a)}}async rollback(){try{const t=this._getStream();if(t.closed||i(this,ie)===void 0)return;const s=t.run("ROLLBACK").catch(a=>{throw H(a)});t.closeGracefully(),await s}catch(t){throw H(t)}finally{this.close()}}async commit(){try{const t=this._getStream();if(t.closed)throw new O("Cannot commit the transaction because it is already closed","TRANSACTION_CLOSED");if(i(this,ie)!==void 0)await i(this,ie);else return;const s=t.run("COMMIT").catch(a=>{throw H(a)});t.closeGracefully(),await s}catch(t){throw H(t)}finally{this.close()}}}gs=new WeakMap,lt=new WeakMap,ie=new WeakMap;async function Ca(e,t,s,a,n=!1){n&&s.step().run("PRAGMA foreign_keys=off");const l=s.step(),r=l.run(Ja(e));let o=l;const p=a.map(k=>{const m=s.step().condition(fe.ok(o));t>=3&&m.condition(fe.not(fe.isAutocommit(s)));const $=m.query(k);return o=m,$}),c=s.step().condition(fe.ok(o));t>=3&&c.condition(fe.not(fe.isAutocommit(s)));const u=c.run("COMMIT");s.step().condition(fe.not(fe.ok(c))).run("ROLLBACK").catch(k=>{}),n&&s.step().run("PRAGMA foreign_keys=on"),await s.execute();const v=[];await r;for(let k=0;k<p.length;k++)try{const m=await p[k];if(m===void 0)throw new Zt("Statement in a batch was not executed, probably because the transaction has been rolled back",k,"TRANSACTION_CLOSED");v.push(Oa(m))}catch(m){if(m instanceof Zt)throw m;const $=H(m);throw $ instanceof O?new Zt($.message,k,$.code,$.extendedCode,$.rawCode,$.cause instanceof Error?$.cause:void 0):$}return await u,v}function Wt(e){let t,s;Array.isArray(e)?[t,s]=e:typeof e=="string"?t=e:(t=e.sql,s=e.args);const a=new si(t);if(s)if(Array.isArray(s))a.bindIndexes(s);else for(const[n,l]of Object.entries(s))a.bindName(n,l);return a}function Oa(e){const t=e.columnNames.map(r=>r??""),s=e.columnDecltypes.map(r=>r??""),a=e.rows,n=e.affectedRowCount,l=e.lastInsertRowid!==void 0?e.lastInsertRowid:void 0;return new oo(t,s,a,n,l)}function H(e){if(e instanceof G){const t=Di(e);return new O(e.message,t,void 0,void 0,e)}return e}function Di(e){return e instanceof Wl&&e.code!==void 0?e.code:e instanceof A?"HRANA_PROTO_ERROR":e instanceof Se?e.cause instanceof G?Di(e.cause):"HRANA_CLOSED_ERROR":e instanceof Ka?"HRANA_WEBSOCKET_ERROR":e instanceof ma?"SERVER_ERROR":e instanceof _s?"PROTOCOL_VERSION_ERROR":e instanceof St?"INTERNAL_ERROR":"UNKNOWN"}var Zs,Ue;class En{constructor(t,s){b(this,Zs);b(this,Ue);L(this,"capacity");x(this,Zs,t),x(this,Ue,new Zc),this.capacity=s}apply(t){if(this.capacity<=0)return;const s=new Set;for(const a of t){if(typeof a.sql!="string")continue;const n=a.sql;if(n.length>=5e3)continue;let l=i(this,Ue).get(n);if(l===void 0){for(;i(this,Ue).size+1>this.capacity;){const[r,o]=i(this,Ue).peekLru();if(s.has(o))break;o.close(),i(this,Ue).delete(r)}i(this,Ue).size+1<=this.capacity&&(l=i(this,Zs).storeSql(n),i(this,Ue).set(n,l))}l!==void 0&&(a.sql=l,s.add(l))}}}Zs=new WeakMap,Ue=new WeakMap;var Me;class Zc{constructor(){b(this,Me);x(this,Me,new Map)}get(t){const s=i(this,Me).get(t);return s!==void 0&&(i(this,Me).delete(t),i(this,Me).set(t,s)),s}set(t,s){i(this,Me).set(t,s)}peekLru(){for(const t of i(this,Me).entries())return t}delete(t){i(this,Me).delete(t)}get size(){return i(this,Me).size}}Me=new WeakMap;function ed(e){var t=0,s=[];function a(){t--,t<e&&n()}function n(){var p=s.shift();o.queue=s.length,p&&r(p.fn).then(p.resolve).catch(p.reject)}function l(p){return new Promise(function(c,u){s.push({fn:p,resolve:c,reject:u}),o.queue=s.length})}function r(p){t++;try{return Promise.resolve(p()).then(function(c){return a(),c},function(c){throw a(),c})}catch(c){return a(),Promise.reject(c)}}var o=function(p){return t>=e?l(p):r(p)};return o}function td(e,t){var s=!1,a=this;return Promise.all(e.map(function(){var n=arguments;return a(function(){if(!s)return t.apply(void 0,n).catch(function(l){throw s=!0,l})})}))}function ll(e){return e.queue=0,e.map=td,e}var sd=function(e){return ll(e?ed(e):function(t){return t()})};const Li=hc(sd);function ad(e){if(e.scheme!=="wss"&&e.scheme!=="ws")throw new O(`The WebSocket client supports only "libsql:", "wss:" and "ws:" URLs, got ${JSON.stringify(e.scheme+":")}. For more information, please read ${Gs}`,"URL_SCHEME_NOT_SUPPORTED");if(e.encryptionKey!==void 0)throw new O("Encryption key is not supported by the remote client.","ENCRYPTION_KEY_NOT_SUPPORTED");if(e.scheme==="ws"&&e.tls)throw new O('A "ws:" URL cannot opt into TLS by using ?tls=1',"URL_INVALID");if(e.scheme==="wss"&&!e.tls)throw new O('A "wss:" URL cannot opt out of TLS by using ?tls=0',"URL_INVALID");const t=Wa(e.scheme,e.authority,e.path);let s;try{s=Ti(t,e.authToken)}catch(a){if(a instanceof zl){const n=e.scheme==="wss"?"https":"http",l=Wa(n,e.authority,e.path);throw new O(`This environment does not support WebSockets, please switch to the HTTP client by using a "${n}:" URL (${JSON.stringify(l)}). For more information, please read ${Gs}`,"WEBSOCKETS_NOT_SUPPORTED")}throw H(a)}return new ld(s,t,e.authToken,e.intMode,e.concurrency)}const nd=60*1e3,il=100;var ea,ta,sa,K,ne,bn,aa,ye,Kt,Ns;class ld{constructor(t,s,a,n,l){b(this,ye);b(this,ea);b(this,ta);b(this,sa);b(this,K);b(this,ne);L(this,"closed");L(this,"protocol");b(this,bn);b(this,aa);x(this,ea,s),x(this,ta,a),x(this,sa,n),x(this,K,g(this,ye,Ns).call(this,t)),x(this,ne,void 0),this.closed=!1,this.protocol="ws",x(this,aa,Li(l))}async limit(t){return i(this,aa).call(this,t)}async execute(t,s){let a;return typeof t=="string"?a={sql:t,args:s||[]}:a=t,this.limit(async()=>{const n=await g(this,ye,Kt).call(this);try{const l=Wt(a);n.conn.sqlCache.apply([l]);const r=n.stream.query(l);n.stream.closeGracefully();const o=await r;return Oa(o)}catch(l){throw H(l)}finally{this._closeStream(n)}})}async batch(t,s="deferred"){return this.limit(async()=>{const a=await g(this,ye,Kt).call(this);try{const l=t.map(u=>Array.isArray(u)?{sql:u[0],args:u[1]||[]}:u).map(Wt),r=await a.conn.client.getVersion();a.conn.sqlCache.apply(l);const o=a.stream.batch(r>=3);return await Ca(s,r,o,l)}catch(n){throw H(n)}finally{this._closeStream(a)}})}async migrate(t){return this.limit(async()=>{const s=await g(this,ye,Kt).call(this);try{const a=t.map(Wt),n=await s.conn.client.getVersion(),l=s.stream.batch(n>=3);return await Ca("deferred",n,l,a,!0)}catch(a){throw H(a)}finally{this._closeStream(s)}})}async transaction(t="write"){return this.limit(async()=>{const s=await g(this,ye,Kt).call(this);try{const a=await s.conn.client.getVersion();return new id(this,s,t,a)}catch(a){throw this._closeStream(s),H(a)}})}async executeMultiple(t){return this.limit(async()=>{const s=await g(this,ye,Kt).call(this);try{const a=s.stream.sequence(t);s.stream.closeGracefully(),await a}catch(a){throw H(a)}finally{this._closeStream(s)}})}sync(){throw new O("sync not supported in ws mode","SYNC_NOT_SUPPORTED")}async reconnect(){try{for(const a of Array.from(i(this,K).streamStates))try{a.stream.close()}catch{}i(this,K).client.close()}catch{}if(i(this,ne)){try{i(this,ne).client.close()}catch{}x(this,ne,void 0)}const t=g(this,ye,Ns).call(this),s=await t.client.getVersion();t.useSqlCache=s>=2,t.useSqlCache&&(t.sqlCache.capacity=il),x(this,K,t),this.closed=!1}_closeStream(t){t.stream.close();const s=t.conn;s.streamStates.delete(t),s.streamStates.size===0&&s!==i(this,K)&&s.client.close()}close(){if(i(this,K).client.close(),this.closed=!0,i(this,ne)){try{i(this,ne).client.close()}catch{}x(this,ne,void 0)}this.closed=!0}}ea=new WeakMap,ta=new WeakMap,sa=new WeakMap,K=new WeakMap,ne=new WeakMap,bn=new WeakMap,aa=new WeakMap,ye=new WeakSet,Kt=async function(){if(this.closed)throw new O("The client is closed","CLIENT_CLOSED");if(new Date().valueOf()-i(this,K).openTime.valueOf()>nd&&i(this,ne)===void 0){const n=g(this,ye,Ns).call(this);x(this,ne,n),n.client.getVersion().then(l=>{i(this,K)!==n&&i(this,K).streamStates.size===0&&i(this,K).client.close(),x(this,K,n),x(this,ne,void 0)},l=>{x(this,ne,void 0)})}if(i(this,K).client.closed)try{i(this,ne)!==void 0?x(this,K,i(this,ne)):x(this,K,g(this,ye,Ns).call(this))}catch(n){throw H(n)}const a=i(this,K);try{a.useSqlCache===void 0&&(a.useSqlCache=await a.client.getVersion()>=2,a.useSqlCache&&(a.sqlCache.capacity=il));const n=a.client.openStream();n.intMode=i(this,sa);const l={conn:a,stream:n};return a.streamStates.add(l),l}catch(n){throw H(n)}},Ns=function(t){try{return t??(t=Ti(i(this,ea),i(this,ta))),{client:t,useSqlCache:void 0,sqlCache:new En(t,0),openTime:new Date,streamStates:new Set}}catch(s){throw H(s)}};var na,wt;class id extends Mi{constructor(s,a,n,l){super(n,l);b(this,na);b(this,wt);x(this,na,s),x(this,wt,a)}_getStream(){return i(this,wt).stream}_getSqlCache(){return i(this,wt).conn.sqlCache}close(){i(this,na)._closeStream(i(this,wt))}get closed(){return i(this,wt).stream.closed}}na=new WeakMap,wt=new WeakMap;function rd(e){if(e.scheme!=="https"&&e.scheme!=="http")throw new O(`The HTTP client supports only "libsql:", "https:" and "http:" URLs, got ${JSON.stringify(e.scheme+":")}. For more information, please read ${Gs}`,"URL_SCHEME_NOT_SUPPORTED");if(e.encryptionKey!==void 0)throw new O("Encryption key is not supported by the remote client.","ENCRYPTION_KEY_NOT_SUPPORTED");if(e.scheme==="http"&&e.tls)throw new O('A "http:" URL cannot opt into TLS by using ?tls=1',"URL_INVALID");if(e.scheme==="https"&&!e.tls)throw new O('A "https:" URL cannot opt out of TLS by using ?tls=0',"URL_INVALID");const t=Wa(e.scheme,e.authority,e.path);return new od(t,e.authToken,e.intMode,e.fetch,e.concurrency,e.remoteEncryptionKey)}const ji=30;var Q,vs,ws,ys,la,ks,ia,ra;class od{constructor(t,s,a,n,l,r){b(this,Q);L(this,"protocol");b(this,vs);b(this,ws);b(this,ys);b(this,la);b(this,ks);b(this,ia);b(this,ra);x(this,vs,t),x(this,ks,s),x(this,ws,a),x(this,ys,n),x(this,la,l),x(this,ia,r),x(this,Q,nl(i(this,vs),i(this,ks),i(this,ys),r)),i(this,Q).intMode=i(this,ws),this.protocol="http",x(this,ra,Li(i(this,la)))}async limit(t){return i(this,ra).call(this,t)}async execute(t,s){let a;return typeof t=="string"?a={sql:t,args:s||[]}:a=t,this.limit(async()=>{try{const n=Wt(a);let l;const r=i(this,Q).openStream();try{l=r.query(n)}finally{r.closeGracefully()}const o=await l;return Oa(o)}catch(n){throw H(n)}})}async batch(t,s="deferred"){return this.limit(async()=>{try{const n=t.map(c=>Array.isArray(c)?{sql:c[0],args:c[1]||[]}:c).map(Wt),l=await i(this,Q).getVersion();let r;const o=i(this,Q).openStream();try{new En(o,ji).apply(n);const u=o.batch(!1);r=Ca(s,l,u,n)}finally{o.closeGracefully()}return await r}catch(a){throw H(a)}})}async migrate(t){return this.limit(async()=>{try{const s=t.map(Wt),a=await i(this,Q).getVersion();let n;const l=i(this,Q).openStream();try{const o=l.batch(!1);n=Ca("deferred",a,o,s,!0)}finally{l.closeGracefully()}return await n}catch(s){throw H(s)}})}async transaction(t="write"){return this.limit(async()=>{try{const s=await i(this,Q).getVersion();return new cd(i(this,Q).openStream(),t,s)}catch(s){throw H(s)}})}async executeMultiple(t){return this.limit(async()=>{try{let s;const a=i(this,Q).openStream();try{s=a.sequence(t)}finally{a.closeGracefully()}await s}catch(s){throw H(s)}})}sync(){throw new O("sync not supported in http mode","SYNC_NOT_SUPPORTED")}close(){i(this,Q).close()}async reconnect(){try{this.closed||i(this,Q).close()}finally{x(this,Q,nl(i(this,vs),i(this,ks),i(this,ys),i(this,ia))),i(this,Q).intMode=i(this,ws)}}get closed(){return i(this,Q).closed}}Q=new WeakMap,vs=new WeakMap,ws=new WeakMap,ys=new WeakMap,la=new WeakMap,ks=new WeakMap,ia=new WeakMap,ra=new WeakMap;var Ut,oa;class cd extends Mi{constructor(s,a,n){super(a,n);b(this,Ut);b(this,oa);x(this,Ut,s),x(this,oa,new En(s,ji))}_getStream(){return i(this,Ut)}_getSqlCache(){return i(this,oa)}close(){i(this,Ut).close()}get closed(){return i(this,Ut).closed}}Ut=new WeakMap,oa=new WeakMap;function Oi(e){return dd(uo(e))}function dd(e){if(e.scheme==="ws"||e.scheme==="wss")return ad(e);if(e.scheme==="http"||e.scheme==="https")return rd(e);throw new O(`The client that uses Web standard APIs supports only "libsql:", "wss:", "ws:", "https:" and "http:" URLs, got ${JSON.stringify(e.scheme+":")}. For more information, please read ${Gs}`,"URL_SCHEME_NOT_SUPPORTED")}const pd={url:"libsql://retailer-os-digitalhues.aws-ap-south-1.turso.io",authToken:"eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAxODY2NzMsImlkIjoiNDcwMDliODAtYmJlYS00YzQ3LTk1MzQtY2NlYjg4OWUzYjFjIiwicmlkIjoiNTk1ODMwNWEtMjlkNy00OGU5LWJkNTctN2FiZWVjNzVjMWYwIn0.381aJkYkBtcCsSDyQkFNLZud9lOPi9TuT3uRZgLYS9BqrjLFb0Zc7P1qRWN0k16XkHQ7raDwhCUE9H1G8Q80BA"},ud={url:"libsql://retailer-data-digitalhues.aws-ap-south-1.turso.io",authToken:"eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAyODMwNTgsImlkIjoiZTVmNzQ5MjMtMDFiMi00YzkxLTlmMjEtZTJhZDIxMzBmMmZmIiwicmlkIjoiZjQzNTc5NTMtN2E2OS00M2UzLWE3MWUtNDcyYzk1MWM1NTRiIn0.8dOIX1XeNnJswuRGhacgPypg_h_9_-bRAwBxtKhBX7rJ4bQuEtSz9Z6igZsvGrWxDlsYlHMo4V3KKIuIZRSuBA"},Tt=Oi(pd),rl=Oi(ud);async function w(e,t=[]){try{return(await Tt.execute({sql:e,args:t})).rows}catch(s){throw console.error("DB Query Error:",s.message,"SQL:",e,"Params:",t),s}}async function xd(e){try{return await Tt.batch(e)}catch(t){throw console.error("DB Transaction Error:",t),t}}function C(){return localStorage.getItem("retaileros_retailer_id")}const T={clients:{getAll:()=>{const e=C();return e?w("SELECT * FROM customers WHERE retailer_id = ?",[e]):w("SELECT * FROM customers")},add:e=>{const t=C();return w("INSERT INTO customers (id, name, phone, email, joined_at, dob, location, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",[e.id,e.name,e.phone||"",e.email||"",new Date().toISOString(),e.dob||null,e.location||"",t])},getById:e=>{const t=C();return t?w("SELECT * FROM customers WHERE id = ? AND retailer_id = ?",[e,t]):w("SELECT * FROM customers WHERE id = ?",[e])}},companies:{getAll:()=>{const e=C();return e?w("SELECT * FROM companies WHERE retailer_id = ?",[e]):w("SELECT * FROM companies")},add:e=>{const t=C();return w("INSERT INTO companies (id, name, gst_number, customer_id, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?)",[e.id,e.name,e.gst_number,e.customer_id,new Date().toISOString(),t])},getByCustomerId:e=>{const t=C();return t?w("SELECT * FROM companies WHERE customer_id = ? AND retailer_id = ?",[e,t]):w("SELECT * FROM companies WHERE customer_id = ?",[e])},getById:e=>{const t=C();return t?w("SELECT * FROM companies WHERE id = ? AND retailer_id = ?",[e,t]):w("SELECT * FROM companies WHERE id = ?",[e])}},sales:{getAll:()=>{const e=C();return e?w("SELECT * FROM sales WHERE retailer_id = ? ORDER BY date DESC",[e]):w("SELECT * FROM sales ORDER BY date DESC")},getById:e=>{const t=C();return t?w("SELECT * FROM sales WHERE id = ? AND retailer_id = ?",[e,t]):w("SELECT * FROM sales WHERE id = ?",[e])},getDrafts:()=>{const e=C();return e?w("SELECT * FROM sales WHERE status = 'draft' AND retailer_id = ? ORDER BY date DESC",[e]):w("SELECT * FROM sales WHERE status = 'draft' ORDER BY date DESC")},add:e=>{const t=C();return w(`INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode, payment_reference, gst_required, company_id, installation_required, installation_date, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.customer_id,e.customer_name,e.date,e.total_amount,e.status||"completed",e.payment_mode||null,e.payment_reference||null,e.gst_required||0,e.company_id||null,e.installation_required||0,e.installation_date||null,t])},update:e=>{const t=C(),s=t?"WHERE id = ? AND retailer_id = ?":"WHERE id = ?",a=[e.customer_id,e.customer_name,e.total_amount,e.status,e.payment_mode||null,e.payment_reference||null,e.gst_required||0,e.company_id||null,e.installation_required||0,e.installation_date||null,e.id];return t&&a.push(t),w(`UPDATE sales SET customer_id = ?, customer_name = ?, total_amount = ?, status = ?,
                 payment_mode = ?, payment_reference = ?, gst_required = ?, company_id = ?,
                 installation_required = ?, installation_date = ? ${s}`,a)},delete:e=>{const t=C();return t?w("DELETE FROM sales WHERE id = ? AND retailer_id = ?",[e,t]):w("DELETE FROM sales WHERE id = ?",[e])},addItem:e=>w(`INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, discount_type, discount_value, discount_amount, scheme_id, final_price, imei, serial_number, mac_id, manufacturing_date, installation_date, extra_fields)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.sale_id,e.product_id,e.product_name,e.category,e.quantity,e.price,e.discount_type||null,e.discount_value||null,e.discount_amount||null,e.scheme_id||null,e.final_price||e.price,e.imei||null,e.serial_number||null,e.mac_id||null,e.manufacturing_date||null,e.installation_date||null,e.extra_fields||null]),deleteItems:e=>w("DELETE FROM sale_items WHERE sale_id = ?",[e]),getItems:e=>w("SELECT * FROM sale_items WHERE sale_id = ?",[e])},inventory:{getProducts:()=>w("SELECT * FROM products")},schemes:{getAll:()=>w("SELECT * FROM schemes WHERE status = 'active' ORDER BY brand, name"),getById:e=>w("SELECT * FROM schemes WHERE id = ?",[e]),getByBrand:e=>w("SELECT * FROM schemes WHERE brand = ? AND status = 'active'",[e]),getByCategory:e=>w("SELECT * FROM schemes WHERE category = ? AND status = 'active'",[e]),getApplicable:(e,t,s)=>w(`SELECT * FROM schemes WHERE status = 'active'
             AND (brand = ? OR brand IS NULL)
             AND (category = ? OR category IS NULL)
             AND (min_price IS NULL OR min_price <= ?)
             AND (max_price IS NULL OR max_price >= ?)
             AND date(start_date) <= date('now') AND date(end_date) >= date('now')`,[e,t,s,s])},groups:{getAll:()=>{const e=C();return e?w("SELECT * FROM groups WHERE retailer_id = ? ORDER BY created_at DESC",[e]):w("SELECT * FROM groups ORDER BY created_at DESC")},add:e=>{const t=C();return w(`INSERT INTO groups (id, name, description, is_company, gst_number, contact_person, created_at, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.name,e.description||null,e.is_company||0,e.gst_number||null,e.contact_person||null,e.created_at,t])},getById:e=>{const t=C();return t?w("SELECT * FROM groups WHERE id = ? AND retailer_id = ?",[e,t]):w("SELECT * FROM groups WHERE id = ?",[e])},delete:e=>{const t=C();return t?w("DELETE FROM groups WHERE id = ? AND retailer_id = ?",[e,t]):w("DELETE FROM groups WHERE id = ?",[e])},getMembers:e=>{const t=C();return t?w("SELECT * FROM group_members WHERE group_id = ? AND retailer_id = ?",[e,t]):w("SELECT * FROM group_members WHERE group_id = ?",[e])},getAllMembers:()=>{const e=C();return e?w("SELECT * FROM group_members WHERE retailer_id = ?",[e]):w("SELECT * FROM group_members")},addMember:e=>{const t=C();return w("INSERT INTO group_members (id, group_id, customer_id, added_at, retailer_id) VALUES (?, ?, ?, ?, ?)",[e.id,e.group_id,e.customer_id,e.added_at,t])},removeMember:(e,t)=>{const s=C();return s?w("DELETE FROM group_members WHERE group_id = ? AND customer_id = ? AND retailer_id = ?",[e,t,s]):w("DELETE FROM group_members WHERE group_id = ? AND customer_id = ?",[e,t])},deleteMembers:e=>{const t=C();return t?w("DELETE FROM group_members WHERE group_id = ? AND retailer_id = ?",[e,t]):w("DELETE FROM group_members WHERE group_id = ?",[e])}},automations:{getAll:()=>{const e=C();return e?w("SELECT * FROM automations WHERE retailer_id = ? ORDER BY created_at DESC",[e]):w("SELECT * FROM automations ORDER BY created_at DESC")},getById:e=>{const t=C();return t?w("SELECT * FROM automations WHERE id = ? AND retailer_id = ?",[e,t]):w("SELECT * FROM automations WHERE id = ?",[e])},getByCustomer:e=>{const t=C();return t?w("SELECT * FROM automations WHERE customer_id = ? AND retailer_id = ? ORDER BY created_at DESC",[e,t]):w("SELECT * FROM automations WHERE customer_id = ? ORDER BY created_at DESC",[e])},getBySale:e=>{const t=C();return t?w("SELECT * FROM automations WHERE sale_id = ? AND retailer_id = ?",[e,t]):w("SELECT * FROM automations WHERE sale_id = ?",[e])},add:e=>{const t=C();return w(`INSERT INTO automations (id, name, customer_id, customer_name, sale_id, status, created_at, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.name,e.customer_id,e.customer_name,e.sale_id||null,e.status||"active",e.created_at||new Date().toISOString(),t])},update:(e,t)=>{const s=C();return s?w("UPDATE automations SET status = ?, completed_at = ? WHERE id = ? AND retailer_id = ?",[t.status,t.completed_at||null,e,s]):w("UPDATE automations SET status = ?, completed_at = ? WHERE id = ?",[t.status,t.completed_at||null,e])},delete:e=>{const t=C();return t?w("DELETE FROM automations WHERE id = ? AND retailer_id = ?",[e,t]):w("DELETE FROM automations WHERE id = ?",[e])},getMessages:e=>{const t=C();return t?w("SELECT * FROM automation_messages WHERE automation_id = ? AND retailer_id = ? ORDER BY day_offset",[e,t]):w("SELECT * FROM automation_messages WHERE automation_id = ? ORDER BY day_offset",[e])},getAllMessages:()=>{const e=C();return e?w("SELECT * FROM automation_messages WHERE retailer_id = ? ORDER BY scheduled_date",[e]):w("SELECT * FROM automation_messages ORDER BY scheduled_date")},addMessage:e=>{const t=C();return w(`INSERT INTO automation_messages (id, automation_id, message_type, title, content, day_offset, scheduled_date, status, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.automation_id,e.message_type,e.title,e.content,e.day_offset,e.scheduled_date,e.status||"pending",t])},updateMessageStatus:(e,t,s)=>{const a=C();return a?w("UPDATE automation_messages SET status = ?, sent_at = ? WHERE id = ? AND retailer_id = ?",[t,s,e,a]):w("UPDATE automation_messages SET status = ?, sent_at = ? WHERE id = ?",[t,s,e])},deleteMessages:e=>{const t=C();return t?w("DELETE FROM automation_messages WHERE automation_id = ? AND retailer_id = ?",[e,t]):w("DELETE FROM automation_messages WHERE automation_id = ?",[e])}},communications:{getAll:()=>{const e=C();return e?w("SELECT * FROM communication_log WHERE retailer_id = ? ORDER BY sent_at DESC",[e]):w("SELECT * FROM communication_log ORDER BY sent_at DESC")},getByCustomer:e=>{const t=C();return t?w("SELECT * FROM communication_log WHERE customer_id = ? AND retailer_id = ? ORDER BY sent_at DESC",[e,t]):w("SELECT * FROM communication_log WHERE customer_id = ? ORDER BY sent_at DESC",[e])},add:e=>{const t=C();return w(`INSERT INTO communication_log (id, customer_id, type, direction, content, sent_at, automation_id, sale_id, status, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.customer_id,e.type,e.direction||"outgoing",e.content,e.sent_at||new Date().toISOString(),e.automation_id||null,e.sale_id||null,e.status||"sent",t])},updateStatus:(e,t)=>{const s=C();return s?w("UPDATE communication_log SET status = ? WHERE id = ? AND retailer_id = ?",[t,e,s]):w("UPDATE communication_log SET status = ? WHERE id = ?",[t,e])}},inquiries:{getAll:()=>{const e=C();return e?w("SELECT * FROM inquiries WHERE retailer_id = ? ORDER BY created_at DESC",[e]):w("SELECT * FROM inquiries ORDER BY created_at DESC")},getById:e=>{const t=C();return t?w("SELECT * FROM inquiries WHERE id = ? AND retailer_id = ?",[e,t]):w("SELECT * FROM inquiries WHERE id = ?",[e])},add:e=>{const t=C();return w("INSERT INTO inquiries (id, customer_name, product_name, request, status, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?)",[e.id,e.customer_name,e.product_name,e.request,e.status||"PENDING",e.created_at||new Date().toISOString(),t])},updateStatus:(e,t)=>{const s=C();return s?w("UPDATE inquiries SET status = ? WHERE id = ? AND retailer_id = ?",[t,e,s]):w("UPDATE inquiries SET status = ? WHERE id = ?",[t,e])}},repairs:{getAll:()=>{const e=C();return e?w("SELECT * FROM repairs WHERE retailer_id = ? ORDER BY created_at DESC",[e]):w("SELECT * FROM repairs ORDER BY created_at DESC")},getById:e=>{const t=C();return t?w("SELECT * FROM repairs WHERE id = ? AND retailer_id = ?",[e,t]):w("SELECT * FROM repairs WHERE id = ?",[e])},add:e=>{const t=C();return w("INSERT INTO repairs (id, customer_name, phone, device, issue, status, job_sheet_no, estimated_cost, assigned_to, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[e.id,e.customer_name,e.phone,e.device,e.issue,e.status||"COLLECTED",e.job_sheet_no,e.estimated_cost||"0",e.assigned_to||"Unassigned",e.created_at||new Date().toISOString(),t])},updateStatus:(e,t)=>{const s=C();return s?w("UPDATE repairs SET status = ? WHERE id = ? AND retailer_id = ?",[t,e,s]):w("UPDATE repairs SET status = ? WHERE id = ?",[t,e])}},inventoryLogs:{getAll:()=>{const e=C();return e?w("SELECT * FROM inventory_logs WHERE retailer_id = ? ORDER BY date DESC",[e]):w("SELECT * FROM inventory_logs ORDER BY date DESC")},add:e=>{const t=C();return w("INSERT INTO inventory_logs (id, product_id, type, quantity, reason, date, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?)",[e.id,e.product_id,e.type,e.quantity,e.reason,e.date||new Date().toISOString(),t])}},approved:{checkApproval:async e=>{const t=`
                SELECT * FROM retailers
                WHERE MobileNumber = ?
                AND process_status = 'approved'
                AND Approval_Status = 'Approved'
                LIMIT 1
            `;try{const s=await rl.execute({sql:t,args:[e]});return s.rows.length>0?s.rows[0]:null}catch(s){throw console.error("Error checking approval:",s.message),s}},getByMobile:async e=>{const t="SELECT * FROM retailers WHERE MobileNumber = ? LIMIT 1";try{const s=await rl.execute({sql:t,args:[e]});return s.rows.length>0?s.rows[0]:null}catch(s){throw console.error("Error fetching retailer:",s.message),s}}},retailers:{isRegistered:async e=>(await Tt.execute({sql:"SELECT id FROM retailers WHERE mobile_number = ? LIMIT 1",args:[e]})).rows.length>0,generateCode:async()=>{const t=new Date().toISOString().slice(0,10).replace(/-/g,""),a=await Tt.execute({sql:"SELECT COUNT(*) as count FROM retailers WHERE retailer_code LIKE ?",args:[`ROS-${t}-%`]}),l=(parseInt(a.rows[0].count)+1).toString().padStart(4,"0");return`ROS-${t}-${l}`},add:async e=>{const t=await T.retailers.generateCode(),s=`retailer_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;return await Tt.execute({sql:`
                INSERT INTO retailers (
                    id, retailer_code, retailer_name, contact_person, email,
                    mobile_number, phone_number, address_line_1, address_line_2,
                    country_name, state_name, city_name, district_name, area_name, pin_code,
                    vat_number, pan_number, bank_name, bank_account_holder, bank_account_number,
                    bank_branch, bank_ifsc, parent_retailer_name, nd_name, rds_name,
                    salesman_name, reporting_to_name, csa_on_counter, counter_potential_volume,
                    counter_potential_value, retailer_category, retailer_category1,
                    retailer_classification, dob, creation_date, approval_remarks,
                    external_db_id, external_approval_status, external_process_status,
                    status, onboarded_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
            `,args:[s,t,e.RetailerName,e.ContactPerson,e.Email,e.MobileNumber,e.PhoneNumber,e.Address_Line_1,e.Address_Line_2,e.CountryName,e.StateName,e.CityName,e.DistrictName,e.AreaName,e.PinCode,e.VATNnumber,e.PAN_Number,e.Name_of_Bank,e.Name_of_Bank_Account_Holder,e.Bank_Account_Number,e.Branch_Location,e.IFSC_Code,e.ParentRetailerName,e.NDName,e.RDSName,e.SalesmanName,e.Reporting_To_Name,e.CSA_on_Counter,e.Counter_Potential_in_Volume,e.Counter_Potential_in_Value,e.Retailer_Category,e.RETAILER_CATEGORY1,e.RETAILER_CLASSIFICATION,e.DOB,e.Creation_Date,e.ApprovalRemarks,e.id,e.Approval_Status,e.process_status,"active"]}),{id:s,retailerCode:t}},getById:async e=>(await Tt.execute({sql:"SELECT * FROM retailers WHERE id = ?",args:[e]})).rows[0]||null,getAll:async()=>(await Tt.execute("SELECT * FROM retailers ORDER BY onboarded_at DESC")).rows}},In=Object.freeze(Object.defineProperty({__proto__:null,db:T,query:w,transaction:xd},Symbol.toStringTag,{value:"Module"}));async function J(){console.group("🔄 Synchronizing Data with Turso...");try{const e=localStorage.getItem("retaileros_retailer_id"),t=(h,P="")=>{const V=P?` ORDER BY ${P}`:"";return e?w(`SELECT * FROM ${h} WHERE retailer_id = ?${V}`,[e]):w(`SELECT * FROM ${h}${V}`)},[s,a,n,l,r,o,p,c,u,y,v,k,m,$,S]=await Promise.all([t("customers").catch(h=>(console.error("Sync customers failed:",h),[])),w("SELECT * FROM products").catch(h=>(console.error("Sync products failed:",h),[])),t("sales","date DESC").catch(h=>(console.error("Sync sales failed:",h),[])),(e?w("SELECT si.* FROM sale_items si INNER JOIN sales s ON si.sale_id = s.id WHERE s.retailer_id = ?",[e]):w("SELECT * FROM sale_items")).catch(h=>(console.error("Sync sale_items failed:",h),[])),t("companies").catch(h=>(console.error("Sync companies failed:",h),[])),t("groups","created_at DESC").catch(h=>(console.error("Sync groups failed:",h),[])),t("group_members").catch(h=>(console.error("Sync group_members failed:",h),[])),t("automations","created_at DESC").catch(h=>(console.error("Sync automations failed:",h),[])),t("automation_messages","scheduled_date").catch(h=>(console.error("Sync automation_messages failed:",h),[])),t("communication_log","sent_at DESC").catch(h=>(console.error("Sync communications failed:",h),[])),w("SELECT * FROM schemes WHERE status = 'active' ORDER BY brand, name").catch(h=>(console.error("Sync schemes failed:",h),[])),w("SELECT * FROM retailers ORDER BY onboarded_at DESC").catch(h=>(console.error("Sync retailers failed:",h),[])),t("inquiries","created_at DESC").catch(h=>(console.error("Sync inquiries failed:",h),[])),t("repairs","created_at DESC").catch(h=>(console.error("Sync repairs failed:",h),[])),t("inventory_logs","date DESC").catch(h=>(console.error("Sync inventory_logs failed:",h),[]))]);window._db_cache={customers:s||[],products:a||[],sales:n||[],saleItems:l||[],companies:r||[],groups:o||[],groupMembers:p||[],automations:c||[],automationMessages:u||[],communications:y||[],schemes:v||[],retailers:k||[],inquiries:m||[],repairs:$||[],inventoryLogs:S||[],marketplace:[],campaigns:[],bookings:[]},console.log("✅ Sync Complete. Tables cached:",{customers:s.length,products:a.length,sales:n.length,automations:c.length})}catch(e){console.error("❌ Data Sync Failed:",e),window.toast&&window.toast.error("Failed to sync data. Check your connection.")}finally{console.groupEnd(),I(!1)}}window.getCache=()=>window._db_cache||{customers:[],sales:[],products:[],saleItems:[],companies:[],groups:[],groupMembers:[],automations:[],automationMessages:[],communications:[],schemes:[],retailers:[],inventoryLogs:[],inquiries:[],repairs:[],marketplace:[],campaigns:[],bookings:[]};const Pi=Object.freeze(Object.defineProperty({__proto__:null,syncData:J},Symbol.toStringTag,{value:"Module"}));let yt=!1,re="",be={customers:[],sales:[]};window.toggleSalesSearch=()=>{yt=!yt,yt||(re="",be={customers:[],sales:[]}),window.triggerRender()};window.updateSalesSearch=e=>{const t=document.getElementById("sales-universal-search"),s=(t==null?void 0:t.selectionStart)||e.length;if(re=e.toLowerCase().trim(),!re){be={customers:[],sales:[]},window.triggerRender(!1),ol("sales-universal-search",s);return}const a=window.getCache(),n=a.customers||[],l=a.sales||[],r=a.saleItems||[];be.customers=n.filter(o=>{var p,c,u;return((p=o.name)==null?void 0:p.toLowerCase().includes(re))||((c=o.phone)==null?void 0:c.includes(re))||((u=o.email)==null?void 0:u.toLowerCase().includes(re))}).slice(0,5),be.sales=l.filter(o=>{var c,u;return(c=o.id)!=null&&c.toLowerCase().includes(re)||(u=o.customer_name)!=null&&u.toLowerCase().includes(re)?!0:r.filter(y=>y.sale_id===o.id).some(y=>{var v;return(v=y.product_name)==null?void 0:v.toLowerCase().includes(re)})}).slice(0,5),window.triggerRender(!1),ol("sales-universal-search",s)};function ol(e,t){setTimeout(()=>{const s=document.getElementById(e);s&&(s.focus(),s.setSelectionRange(t,t))},0)}window.selectSearchCustomer=(e,t)=>{d.historyViewMode="completed",d.historyDateFilter="all",window.setTab("history");const a=window.getCache().sales.find(n=>n.customer_id===e);a&&window.setSalesHistoryId(a.id),yt=!1,re="",be={customers:[],sales:[]},window.triggerRender()};window.selectSearchSale=e=>{window.setTab("history"),window.setSalesHistoryId(e),yt=!1,re="",be={customers:[],sales:[]},window.triggerRender()};function Ni(e){const t=be.customers.length>0||be.sales.length>0;return`
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
                <button type="button" onclick="window.toggleSalesSearch()" class="p-2 text-slate-400 hover:text-slate-900 ${yt?"bg-slate-100 rounded-full text-slate-900":""}">
                    <span class="material-icons-outlined text-xl">${yt?"close":"search"}</span>
                </button>
            </div>
            
            <!-- Search Bar -->
            ${yt?`
                <div class="mb-4 relative">
                    <div class="relative">
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400">search</span>
                        <input type="text" 
                               id="sales-universal-search"
                               value="${re}"
                               oninput="window.updateSalesSearch(this.value)" 
                               placeholder="Search customers, orders, products..." 
                               class="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm"
                               autofocus>
                    </div>
                    
                    <!-- Search Results Dropdown -->
                    ${re&&t?`
                        <div class="absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden max-h-80 overflow-y-auto">
                            ${be.customers.length>0?`
                                <div class="p-3 bg-slate-50 border-b border-slate-100">
                                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <span class="material-icons-outlined text-xs">person</span>
                                        Customers (${be.customers.length})
                                    </p>
                                </div>
                                ${be.customers.map(s=>{var a;return`
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
                            
                            ${be.sales.length>0?`
                                <div class="p-3 bg-slate-50 border-b border-slate-100">
                                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <span class="material-icons-outlined text-xs">receipt</span>
                                        Transactions (${be.sales.length})
                                    </p>
                                </div>
                                ${be.sales.map(s=>`
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
                    
                    ${re&&!t?`
                        <div class="absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl p-8 text-center">
                            <span class="material-icons-outlined text-3xl text-slate-200 mb-2">search_off</span>
                            <p class="text-xs font-bold text-slate-400">No results found for "${re}"</p>
                        </div>
                    `:""}
                </div>
            `:""}
            
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                <button type="button" onclick="setTab('new-sale')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${e==="new-sale"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">New Sale</button>
                <button type="button" onclick="setTab('history')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${e==="history"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">History</button>
            </div>
        </header>
    `}let ts=!1,ya="",E=[],je=null,it="Select Customer",oe=!1,Ge="",We="",da=!1,U="",rt="",kt=null;const ss=e=>`${e}-${Math.random().toString(36).substr(2,8).toUpperCase()}`,fd=["appliances","air conditioners","ac","washing machines","refrigerators","tvs","television","home theater","dishwasher","microwave","geyser","water heater"];function Cn(e){if(e.installation_required===1)return!0;const t=(e.category||"").toLowerCase();return fd.some(s=>t.includes(s))}async function bd(e){const t=window.getCache().products,s=window.getCache().schemes||[],a=t.find(n=>n.id===e);if(a){const n=Cn(a),l=s.filter(o=>{const p=!o.brand||o.brand===a.brand,c=!o.category||o.category===a.category,u=(!o.min_price||a.mop>=o.min_price)&&(!o.max_price||a.mop<=o.max_price),y=new Date(o.start_date)<=new Date&&new Date(o.end_date)>=new Date;return p&&c&&u&&y&&o.status==="active"});E.push({...a,qty:1,imei:"",serial_number:"",mac_id:"",manufacturing_date:"",showDetails:!1,installation_required:n,installation_date:"",discount_type:null,discount_value:0,discount_amount:0,scheme_id:null,scheme_name:null,final_price:a.mop,applicableSchemes:l,showDiscount:!1,extraFields:[]});const r=document.getElementById("sales-item-search");r&&(r.value=""),window.triggerRender()}}window.toggleCartItemDiscount=e=>{E[e]&&(E[e].showDiscount=!E[e].showDiscount,window.triggerRender())};window.applyStoreDiscount=(e,t)=>{if(E[e]){const s=E[e],a=parseFloat(t)||0;a>0&&a<=100?(s.discount_type="store",s.discount_value=a,s.discount_amount=Math.round(s.mop*a/100),s.scheme_id=null,s.scheme_name=null,s.final_price=s.mop-s.discount_amount):(s.discount_type=null,s.discount_value=0,s.discount_amount=0,s.scheme_id=null,s.scheme_name=null,s.final_price=s.mop),window.triggerRender()}};window.applySchemeDiscount=(e,t)=>{if(E[e]){const s=E[e],n=(window.getCache().schemes||[]).find(l=>l.id===t);n?(s.discount_type="scheme",s.scheme_id=n.id,s.scheme_name=n.name,n.discount_type==="percentage"?(s.discount_value=n.discount_value,s.discount_amount=Math.round(s.mop*n.discount_value/100)):(s.discount_value=n.discount_value,s.discount_amount=n.discount_value),s.final_price=s.mop-s.discount_amount):(s.discount_type=null,s.discount_value=0,s.discount_amount=0,s.scheme_id=null,s.scheme_name=null,s.final_price=s.mop),window.triggerRender()}};window.clearItemDiscount=e=>{if(E[e]){const t=E[e];t.discount_type=null,t.discount_value=0,t.discount_amount=0,t.scheme_id=null,t.scheme_name=null,t.final_price=t.mop,window.triggerRender()}};function qi(e,t){je=e,it=t;const s=document.getElementById("customer-dropdown-menu");s&&s.classList.add("hidden");const n=(window.getCache().companies||[]).find(l=>l.customer_id===e);n&&(Ge=n.name,We=n.gst_number),window.triggerRender()}window.updateCartItemDetail=(e,t,s)=>{E[e]&&(E[e][t]=s)};window.toggleCartItemDetails=e=>{E[e]&&(E[e].showDetails=!E[e].showDetails,window.triggerRender())};window.toggleItemInstallation=e=>{E[e]&&(E[e].installation_required=!E[e].installation_required,E[e].installation_required||(E[e].installation_date=""),window.triggerRender())};window.updateItemInstallationDate=(e,t)=>{E[e]&&(E[e].installation_date=t)};const md="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";function hd(){return localStorage.getItem("openai_api_key")||md}window.captureDeviceImage=async e=>{const t=hd(),s=document.createElement("input");s.type="file",s.accept="image/*",s.capture="environment",s.onchange=async a=>{const n=a.target.files[0];if(n){ts=!0,ya="Reading image...",window.triggerRender(!1);try{const l=await gd(n);ya="AI analyzing...",vd(e,ya);const r=E[e],o={name:r.name,brand:r.brand,category:r.category},p=await wd(l,o,t);E[e]&&p&&(p.imei&&(E[e].imei=p.imei),p.serial_number&&(E[e].serial_number=p.serial_number),p.mac_id&&(E[e].mac_id=p.mac_id),p.manufacturing_date&&(E[e].manufacturing_date=p.manufacturing_date),p.extraFields&&p.extraFields.length>0&&(E[e].extraFields=[...E[e].extraFields||[],...p.extraFields])),ts=!1,window.triggerRender(!1);const c=[];p.imei&&c.push("IMEI"),p.serial_number&&c.push("Serial"),p.mac_id&&c.push("MAC ID"),p.manufacturing_date&&c.push("Mfg Date"),p.extraFields&&p.extraFields.forEach(u=>c.push(u.label)),c.length>0?window.toast.success(`Found: ${c.join(", ")}`):window.toast.warning("No device details found. Try a clearer image.")}catch(l){console.error("AI Vision Error:",l),ts=!1,window.triggerRender(!1),window.toast.error(l.message||"Error analyzing image")}}},s.click()};function gd(e){return new Promise((t,s)=>{const a=new FileReader;a.onload=()=>{const n=a.result.split(",")[1];t(n)},a.onerror=s,a.readAsDataURL(e)})}function vd(e,t){const s=document.getElementById(`ocr-progress-${e}`);s&&(s.textContent=t)}async function wd(e,t,s){var p,c,u,y;const a=`You are analyzing a product label/box image to extract device information.

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
}`,n=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:JSON.stringify({model:"gpt-4o-mini",messages:[{role:"user",content:[{type:"text",text:a},{type:"image_url",image_url:{url:`data:image/jpeg;base64,${e}`,detail:"high"}}]}],max_tokens:1e3,temperature:.1})});if(!n.ok){const v=await n.json().catch(()=>({}));throw new Error(((p=v.error)==null?void 0:p.message)||`API Error: ${n.status}`)}const r=((y=(u=(c=(await n.json()).choices)==null?void 0:c[0])==null?void 0:u.message)==null?void 0:y.content)||"";console.log("AI Vision Response:",r);const o=r.match(/\{[\s\S]*\}/);if(!o)return{extraFields:[]};try{const v=JSON.parse(o[0]);return yd(v)}catch(v){return console.error("Failed to parse AI response:",v),{extraFields:[]}}}function yd(e){const t={imei:e.imei||null,serial_number:e.serial_number||e.serialNumber||null,mac_id:e.mac_id||e.macId||e.mac||null,manufacturing_date:e.manufacturing_date||e.manufacturingDate||e.mfg_date||null,extraFields:[]};return e.imei2&&t.extraFields.push({key:"imei2",label:"IMEI 2",value:e.imei2,type:"text"}),e.model&&t.extraFields.push({key:"model",label:"Model",value:e.model,type:"text"}),e.color&&t.extraFields.push({key:"color",label:"Color",value:e.color,type:"text"}),e.storage&&t.extraFields.push({key:"storage",label:"Storage",value:e.storage,type:"text"}),e.extraFields&&Array.isArray(e.extraFields)&&e.extraFields.forEach(s=>{s.value&&s.label&&(t.extraFields.some(n=>n.key===s.key)||t.extraFields.push({key:s.key||s.label.toLowerCase().replace(/\s+/g,"_"),label:s.label,value:s.value,type:s.type||"text"}))}),t}window.updateCartItemExtraField=(e,t,s)=>{E[e]&&E[e].extraFields[t]&&(E[e].extraFields[t].value=s)};window.addCustomExtraField=e=>{E[e]&&window.showPrompt('Enter field name (e.g., "IMEI 2", "Warranty Code"):',"",t=>{const s=t.toLowerCase().replace(/\s+/g,"_");E[e].extraFields=E[e].extraFields||[],E[e].extraFields.push({key:s,label:t,value:"",type:"text",custom:!0}),window.triggerRender()})};window.removeExtraField=(e,t)=>{E[e]&&E[e].extraFields&&(E[e].extraFields.splice(t,1),window.triggerRender())};window.toggleGstRequired=()=>{oe=!oe,window.triggerRender()};window.updateGstField=(e,t)=>{e==="companyName"&&(Ge=t),e==="gstNumber"&&(We=t.toUpperCase())};window.openPaymentModal=()=>{if(E.length===0||!je){window.toast.warning("Please select a customer and add items to cart");return}const e=E.filter(t=>t.installation_required&&!t.installation_date);if(e.length>0){window.toast.warning(`Set installation date for: ${e.map(t=>t.name).join(", ")}`);return}da=!0,window.triggerRender()};window.closePaymentModal=()=>{da=!1,U="",rt="",window.triggerRender()};window.selectPaymentMode=e=>{U=e,rt="",window.triggerRender()};window.updatePaymentReference=e=>{rt=e};window.confirmPayment=async()=>{if(!U){window.toast.warning("Please select a payment mode");return}if((U==="card"||U==="upi")&&!rt){window.toast.warning("Please enter the transaction reference");return}da=!1,await Bi()};async function Bi(){const e=document.getElementById("complete-txn-btn");e&&(e.disabled=!0,e.innerHTML="Processing...");try{const t=kt||ss("ORD"),s=E.reduce((o,p)=>o+(p.final_price||p.mop),0);let a=null;oe&&Ge&&We&&(a=ss("COMP"),await T.companies.add({id:a,name:Ge,gst_number:We,customer_id:je}));const n=E.some(o=>o.installation_required),r=E.filter(o=>o.installation_required&&o.installation_date).map(o=>o.installation_date).sort()[0]||null;kt?(await T.sales.deleteItems(kt),await T.sales.update({id:t,customer_id:je,customer_name:it,total_amount:s,status:"completed",payment_mode:U,payment_reference:rt,gst_required:oe?1:0,company_id:a,installation_required:n?1:0,installation_date:r})):await T.sales.add({id:t,customer_id:je,customer_name:it,date:new Date().toISOString(),total_amount:s,status:"completed",payment_mode:U,payment_reference:rt,gst_required:oe?1:0,company_id:a,installation_required:n?1:0,installation_date:r});for(const o of E)await T.sales.addItem({id:ss("ITEM"),sale_id:t,product_id:o.id,product_name:o.name,category:o.category,quantity:1,price:o.mop,discount_type:o.discount_type||null,discount_value:o.discount_value||null,discount_amount:o.discount_amount||null,scheme_id:o.scheme_id||null,final_price:o.final_price||o.mop,imei:o.imei||null,serial_number:o.serial_number||null,mac_id:o.mac_id||null,manufacturing_date:o.manufacturing_date||null,installation_date:o.installation_required?o.installation_date:null,extra_fields:o.extraFields&&o.extraFields.length>0?JSON.stringify(o.extraFields):null});Rn(),await J(),window.setTab("history"),window.setSalesHistoryId(t)}catch(t){console.error(t),window.toast.error("Error completing transaction: "+t.message),e&&(e.disabled=!1,e.innerHTML="Complete Transaction")}}async function kd(){if(E.length===0){window.toast.warning("Please add items to cart before saving draft");return}try{const e=kt||ss("DRF"),t=E.reduce((r,o)=>r+(o.final_price||o.mop),0);let s=null;oe&&Ge&&We&&(s=ss("COMP"),await T.companies.add({id:s,name:Ge,gst_number:We,customer_id:je}));const a=E.some(r=>r.installation_required),l=E.filter(r=>r.installation_required&&r.installation_date).map(r=>r.installation_date).sort()[0]||null;kt?(await T.sales.deleteItems(kt),await T.sales.update({id:e,customer_id:je,customer_name:it||"No Customer",total_amount:t,status:"draft",payment_mode:null,payment_reference:null,gst_required:oe?1:0,company_id:s,installation_required:a?1:0,installation_date:l})):await T.sales.add({id:e,customer_id:je,customer_name:it||"No Customer",date:new Date().toISOString(),total_amount:t,status:"draft",payment_mode:null,payment_reference:null,gst_required:oe?1:0,company_id:s,installation_required:a?1:0,installation_date:l});for(const r of E)await T.sales.addItem({id:ss("ITEM"),sale_id:e,product_id:r.id,product_name:r.name,category:r.category,quantity:1,price:r.mop,discount_type:r.discount_type||null,discount_value:r.discount_value||null,discount_amount:r.discount_amount||null,scheme_id:r.scheme_id||null,final_price:r.final_price||r.mop,imei:r.imei||null,serial_number:r.serial_number||null,mac_id:r.mac_id||null,manufacturing_date:r.manufacturing_date||null,installation_date:r.installation_required?r.installation_date:null,extra_fields:r.extraFields&&r.extraFields.length>0?JSON.stringify(r.extraFields):null});Rn(),await J(),window.setTab("history"),window.toast.success("Draft saved successfully!")}catch(e){console.error(e),window.toast.error("Error saving draft: "+e.message)}}async function _d(e){const t=window.getCache(),s=t.sales.find(l=>l.id===e);if(!s)return;if(kt=e,je=s.customer_id,it=s.customer_name,oe=s.gst_required===1,s.company_id){const l=t.companies.find(r=>r.id===s.company_id);l&&(Ge=l.name,We=l.gst_number)}const a=t.saleItems.filter(l=>l.sale_id===e),n=t.products;E=a.map(l=>{const r=n.find(c=>c.id===l.product_id)||{},o=l.installation_date||Cn(r);let p=[];if(l.extra_fields)try{p=JSON.parse(l.extra_fields)}catch(c){console.warn("Failed to parse extra fields:",c)}return{...r,id:l.product_id,name:l.product_name,category:l.category,mop:l.price,qty:l.quantity,imei:l.imei||"",serial_number:l.serial_number||"",mac_id:l.mac_id||"",manufacturing_date:l.manufacturing_date||"",showDetails:!1,installation_required:!!o,installation_date:l.installation_date||"",extraFields:p}}),window.setTab("new-sale"),window.triggerRender()}function Rn(){E=[],je=null,it="Select Customer",oe=!1,Ge="",We="",da=!1,U="",rt="",kt=null}window.selectSaleCustomer=qi;window.addProductToCart=bd;window.completeTransaction=Bi;window.saveDraft=kd;window.loadDraft=_d;window.getActiveCart=()=>E;window.getSelectedCustomer=()=>({id:je,name:it});window.getSaleState=()=>({gstRequired:oe,companyName:Ge,gstNumber:We,paymentMode:U,paymentReference:rt});window.clearCart=()=>{Rn(),window.triggerRender()};window.removeFromCart=e=>{E.splice(e,1),window.triggerRender()};window.toggleCustomerDropdown=e=>{e&&e.stopPropagation();const t=document.getElementById("customer-dropdown-menu");t&&t.classList.toggle("hidden")};let qs="";window.updateCustomerSearch=e=>{qs=e.toLowerCase(),window.triggerRender(!1)};window.addNewCustomer=async()=>{window.setSalesMode("add-customer");const e=document.getElementById("customer-dropdown-menu");e&&e.classList.add("hidden")};function Fi(){const e=window.getCache(),t=e.products||[],s=e.customers||[],a=qs?s.filter(c=>{var u;return c.name.toLowerCase().includes(qs)||((u=c.phone)==null?void 0:u.includes(qs))}):s,n=document.getElementById("sales-item-search"),l=n?n.value.toLowerCase():"",r=l?t.filter(c=>{var u;return c.name.toLowerCase().includes(l)||((u=c.brand)==null?void 0:u.toLowerCase().includes(l))}):[],o=E.reduce((c,u)=>c+(u.final_price||u.mop||0),0);E.reduce((c,u)=>c+(u.discount_amount||0),0);const p=E.filter(c=>c.installation_required).length;return`
        ${Ni("new-sale")}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-12 text-left">
            <!-- Customer Section -->
            <section class="space-y-3 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Customer Details</h3>

                <div class="relative text-left">
                    <button type="button" id="customer-dropdown-trigger" onclick="window.toggleCustomerDropdown(event)" class="card p-5 flex items-center justify-between cursor-pointer hover:border-slate-300 transition-all text-left w-full">
                        <div class="flex items-center gap-4 text-slate-900 text-left">
                            <span class="material-icons-outlined text-slate-400">person</span>
                            <span class="text-sm font-black text-left">${it}</span>
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
                        `:a.map(c=>`
                            <button type="button" onclick="window.selectSaleCustomer('${c.id}', '${c.name.replace(/'/g,"\\'")}')" class="p-4 hover:bg-slate-50 cursor-pointer border-b border-slate-50 text-left w-full">
                                <p class="text-xs font-black text-slate-900 text-left">${c.name}</p>
                                <p class="text-[9px] font-bold text-slate-400 text-left">${c.phone||""}</p>
                            </button>
                        `).join("")}
                    </div>
                </div>
            </section>

            <!-- GST Billing Section -->
            <section class="space-y-3 text-left">
                <div class="flex items-center justify-between">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">GST Billing</h3>
                    <button type="button" onclick="window.toggleGstRequired()" class="flex items-center gap-2 text-[9px] font-black uppercase ${oe?"text-slate-900":"text-slate-400"}">
                        <span class="material-icons-outlined text-sm">${oe?"check_box":"check_box_outline_blank"}</span>
                        ${oe?"Enabled":"Disabled"}
                    </button>
                </div>
                
                ${oe?`
                    <div class="card p-4 space-y-4">
                        <div>
                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Company Name</label>
                            <input type="text" value="${Ge}" oninput="window.updateGstField('companyName', this.value)" placeholder="Enter company name" class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                        </div>
                        <div>
                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">GST Number</label>
                            <input type="text" value="${We}" oninput="window.updateGstField('gstNumber', this.value)" placeholder="e.g. 27AAACR3456D1Z5" maxlength="15" class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold uppercase focus:outline-none focus:border-slate-900 transition-all">
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
                            ${r.length>0?r.map(c=>{var y;const u=Cn(c);return`
                                <button type="button" onclick="window.addProductToCart('${c.id}')" class="p-4 hover:bg-slate-50 cursor-pointer flex justify-between items-center text-left w-full border-b border-slate-50">
                                    <div class="text-left flex-1">
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <h4 class="text-xs font-black text-slate-900 text-left">${c.name}</h4>
                                            ${u?`
                                                <span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase flex items-center gap-0.5">
                                                    <span class="material-icons-outlined text-[10px]">build</span> Install
                                                </span>
                                            `:""}
                                        </div>
                                        <p class="text-[9px] font-bold text-slate-400 uppercase text-left">${c.brand} • ${c.category}</p>
                                    </div>
                                    <p class="text-xs font-black text-slate-900 text-right ml-2">₹${((y=c.mop)==null?void 0:y.toLocaleString())||0}</p>
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
                        Cart (${E.length})
                        ${p>0?`<span class="ml-2 text-slate-600">${p} install</span>`:""}
                    </h3>
                    <button type="button" onclick="window.clearCart()" class="text-[9px] font-black text-slate-900 uppercase tracking-widest border-b-2 border-slate-900">Clear All</button>
                </div>
                
                <div class="space-y-3 text-left">
                    ${E.map((c,u)=>{var y,v,k;return`
                        <div class="card overflow-hidden ${c.installation_required?"border-slate-300":""}">
                            <div class="p-4 flex items-center gap-4 text-left">
                                <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shadow-inner text-left shrink-0">
                                    <span class="material-icons-outlined text-xl text-slate-300 text-left">${c.installation_required?"home_repair_service":"devices"}</span>
                                </div>
                                <div class="flex-1 text-left min-w-0">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <h4 class="text-sm font-black text-slate-900 text-left truncate">${c.name}</h4>
                                        ${c.installation_required?`
                                            <span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase flex items-center gap-0.5 shrink-0">
                                                <span class="material-icons-outlined text-[10px]">build</span> Install
                                            </span>
                                        `:""}
                                    </div>
                                    <p class="text-[9px] font-bold text-slate-400 uppercase text-left">${c.category}</p>
                                </div>
                                <div class="text-right shrink-0">
                                    ${c.discount_amount>0?`
                                        <p class="text-[9px] font-bold text-slate-400 line-through text-right">₹${((y=c.mop)==null?void 0:y.toLocaleString())||0}</p>
                                        <p class="text-xs font-black text-right">₹${((v=c.final_price)==null?void 0:v.toLocaleString())||0}</p>
                                    `:`
                                        <p class="text-xs font-black text-right">₹${((k=c.mop)==null?void 0:k.toLocaleString())||0}</p>
                                    `}
                                    <button type="button" onclick="window.removeFromCart(${u})" class="text-[8px] font-black text-slate-400 uppercase text-right hover:text-slate-900">Remove</button>
                                </div>
                            </div>
                            
                            <!-- Discount Badge (if applied) -->
                            ${c.discount_amount>0?`
                                <div class="px-4 py-2 bg-slate-900 text-white flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <span class="material-icons-outlined text-sm">local_offer</span>
                                        <span class="text-[9px] font-black uppercase">
                                            ${c.discount_type==="scheme"?c.scheme_name:`Store Discount (${c.discount_value}%)`}
                                        </span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="text-[10px] font-black">-₹${c.discount_amount.toLocaleString()}</span>
                                        <button type="button" onclick="window.clearItemDiscount(${u})" class="text-white/60 hover:text-white">
                                            <span class="material-icons-outlined text-sm">close</span>
                                        </button>
                                    </div>
                                </div>
                            `:""}
                            
                            <!-- Discount Toggle -->
                            <button type="button" onclick="window.toggleCartItemDiscount(${u})" class="w-full px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-2 text-[9px] font-black ${c.discount_amount>0?"text-slate-900":"text-slate-500"} uppercase hover:bg-slate-100 transition-all">
                                <span class="material-icons-outlined text-sm">${c.showDiscount?"expand_less":"local_offer"}</span>
                                ${c.showDiscount?"Hide Discount":c.discount_amount>0?"Change Discount":"Add Discount"}
                            </button>
                            
                            ${c.showDiscount?`
                                <div class="p-4 bg-slate-50 border-t border-slate-100 space-y-4">
                                    <!-- Store Discount -->
                                    <div>
                                        <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Store Discount (%)</label>
                                        <div class="flex gap-2">
                                            ${[5,10,15,20].map(m=>`
                                                <button type="button" onclick="window.applyStoreDiscount(${u}, ${m})" class="flex-1 py-2 ${c.discount_type==="store"&&c.discount_value===m?"bg-slate-900 text-white":"bg-white border border-slate-200 text-slate-600"} rounded-lg text-[10px] font-black hover:bg-slate-800 hover:text-white transition-all">
                                                    ${m}%
                                                </button>
                                            `).join("")}
                                            <input type="number" placeholder="Other" min="1" max="100" onchange="window.applyStoreDiscount(${u}, this.value)" class="w-16 px-2 py-2 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-center focus:outline-none focus:border-slate-900">
                                        </div>
                                    </div>
                                    
                                    <!-- Scheme Discounts -->
                                    ${c.applicableSchemes&&c.applicableSchemes.length>0?`
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Brand Schemes</label>
                                            <div class="space-y-2">
                                                ${c.applicableSchemes.map(m=>`
                                                    <button type="button" onclick="window.applySchemeDiscount(${u}, '${m.id}')" class="w-full p-3 ${c.scheme_id===m.id?"bg-slate-900 text-white border-slate-900":"bg-white border border-slate-200 text-slate-700"} rounded-xl text-left flex items-center justify-between hover:border-slate-900 transition-all">
                                                        <div>
                                                            <p class="text-[10px] font-black">${m.name}</p>
                                                            <p class="text-[8px] font-bold ${c.scheme_id===m.id?"text-white/70":"text-slate-400"}">${m.brand}</p>
                                                        </div>
                                                        <span class="text-[10px] font-black ${c.scheme_id===m.id?"text-white":"text-slate-900"}">
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
                            ${c.installation_required?`
                                <div class="px-4 py-3 bg-slate-50 border-t border-slate-200 flex items-center gap-3">
                                    <span class="material-icons-outlined text-slate-500 text-sm">event</span>
                                    <div class="flex-1">
                                        <label class="text-[8px] font-black text-slate-600 uppercase tracking-widest block mb-1">Installation Date</label>
                                        <input type="date" value="${c.installation_date||""}" onchange="window.updateItemInstallationDate(${u}, this.value)" min="${new Date().toISOString().split("T")[0]}" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                    </div>
                                    <button type="button" onclick="window.toggleItemInstallation(${u})" class="text-[8px] font-black text-slate-400 uppercase hover:text-slate-600" title="Disable installation">
                                        <span class="material-icons-outlined text-sm">close</span>
                                    </button>
                                </div>
                            `:""}
                            
                            <!-- Device Details Toggle -->
                            <button type="button" onclick="window.toggleCartItemDetails(${u})" class="w-full px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-2 text-[9px] font-black text-slate-500 uppercase hover:bg-slate-100 transition-all">
                                <span class="material-icons-outlined text-sm">${c.showDetails?"expand_less":"expand_more"}</span>
                                ${c.showDetails?"Hide":"Add"} Device Details
                            </button>
                            
                            ${c.showDetails?`
                                <div class="p-4 bg-slate-50 border-t border-slate-100 space-y-3">
                                    <!-- AI Scan Button (Mobile Only) -->
                                    <button type="button" onclick="window.captureDeviceImage(${u})" class="w-full py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase flex items-center justify-center gap-2 hover:bg-slate-800 transition-all sm:hidden ${ts?"opacity-50 cursor-not-allowed":""}" ${ts?"disabled":""}>
                                        ${ts?`
                                            <span class="material-icons-outlined text-sm animate-spin">sync</span>
                                            <span id="ocr-progress-${u}">${ya||"Analyzing..."}</span>
                                        `:`
                                            <span class="material-icons-outlined text-sm">photo_camera</span>
                                            <span>Scan with AI</span>
                                        `}
                                    </button>
                                    
                                    <!-- Standard Fields -->
                                    <div class="grid grid-cols-2 gap-3">
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">IMEI Number</label>
                                            <input type="text" value="${c.imei||""}" onchange="window.updateCartItemDetail(${u}, 'imei', this.value)" placeholder="Enter IMEI" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                        </div>
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Serial Number</label>
                                            <input type="text" value="${c.serial_number||""}" onchange="window.updateCartItemDetail(${u}, 'serial_number', this.value)" placeholder="Enter Serial" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                        </div>
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">MAC ID</label>
                                            <input type="text" value="${c.mac_id||""}" onchange="window.updateCartItemDetail(${u}, 'mac_id', this.value)" placeholder="Enter MAC" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                        </div>
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Mfg. Date</label>
                                            <input type="date" value="${c.manufacturing_date||""}" onchange="window.updateCartItemDetail(${u}, 'manufacturing_date', this.value)" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                        </div>
                                    </div>
                                    
                                    <!-- Dynamic Extra Fields (from AI or manually added) -->
                                    ${c.extraFields&&c.extraFields.length>0?`
                                        <div class="pt-2 border-t border-slate-200">
                                            <div class="flex items-center justify-between mb-2">
                                                <span class="text-[8px] font-black text-slate-500 uppercase tracking-widest">Additional Fields</span>
                                            </div>
                                            <div class="grid grid-cols-2 gap-3">
                                                ${c.extraFields.map((m,$)=>`
                                                    <div class="relative">
                                                        <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">${m.label}</label>
                                                        <div class="flex gap-1">
                                                            <input type="${m.type||"text"}" 
                                                                   value="${m.value||""}" 
                                                                   onchange="window.updateCartItemExtraField(${u}, ${$}, this.value)" 
                                                                   placeholder="Enter ${m.label}"
                                                                   class="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                                            <button type="button" onclick="window.removeExtraField(${u}, ${$})" class="w-8 h-8 flex items-center justify-center text-slate-300 hover:text-slate-600 hover:bg-slate-200 rounded-lg transition-all" title="Remove field">
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
                                    ${c.installation_required?"":`
                                        <button type="button" onclick="window.toggleItemInstallation(${u})" class="w-full py-2 border border-dashed border-slate-300 text-slate-500 rounded-lg text-[9px] font-black uppercase flex items-center justify-center gap-1 hover:bg-slate-100 transition-all">
                                            <span class="material-icons-outlined text-sm">build</span>
                                            Add Installation
                                        </button>
                                    `}
                                </div>
                            `:""}
                        </div>
                    `}).join("")}

                    ${E.length===0?`
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
                    Complete (₹${o.toLocaleString()})
                    <span class="material-icons-outlined text-sm text-center">arrow_forward</span>
                </button>
            </div>
        </div>

        <!-- Payment Modal -->
        ${da?`
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
                            <button type="button" onclick="window.selectPaymentMode('cash')" class="p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${U==="cash"?"border-slate-900 bg-slate-50":"border-slate-100 hover:border-slate-300"}">
                                <span class="material-icons-outlined text-2xl ${U==="cash"?"text-slate-900":"text-slate-400"}">payments</span>
                                <span class="text-[10px] font-black uppercase ${U==="cash"?"text-slate-900":"text-slate-500"}">Cash</span>
                            </button>
                            <button type="button" onclick="window.selectPaymentMode('card')" class="p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${U==="card"?"border-slate-900 bg-slate-50":"border-slate-100 hover:border-slate-300"}">
                                <span class="material-icons-outlined text-2xl ${U==="card"?"text-slate-900":"text-slate-400"}">credit_card</span>
                                <span class="text-[10px] font-black uppercase ${U==="card"?"text-slate-900":"text-slate-500"}">Card</span>
                            </button>
                            <button type="button" onclick="window.selectPaymentMode('upi')" class="p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${U==="upi"?"border-slate-900 bg-slate-50":"border-slate-100 hover:border-slate-300"}">
                                <span class="material-icons-outlined text-2xl ${U==="upi"?"text-slate-900":"text-slate-400"}">qr_code</span>
                                <span class="text-[10px] font-black uppercase ${U==="upi"?"text-slate-900":"text-slate-500"}">UPI</span>
                            </button>
                        </div>

                        ${U==="card"||U==="upi"?`
                            <div>
                                <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">${U==="card"?"Card Reference / Last 4 Digits":"UPI Transaction ID"}</label>
                                <input type="text" value="${rt}" oninput="window.updatePaymentReference(this.value)" placeholder="${U==="card"?"Enter reference":"Enter UPI ID"}" class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                            </div>
                        `:""}

                        <div class="pt-4 border-t border-slate-100">
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-xs font-bold text-slate-500 uppercase">Total Amount</span>
                                <span class="text-xl font-black text-slate-900">₹${o.toLocaleString()}</span>
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
    `}function cl(e){const t=new Date(e);return t.setHours(0,0,0,0),t}function fa(e){const t=new Date(e);return t.setHours(23,59,59,999),t}function dl(e,t,s,a){if(t==="all")return e;const n=new Date,l=cl(n);return e.filter(r=>{const o=new Date(r.date);switch(t){case"today":return o>=l&&o<=fa(n);case"week":{const p=new Date(l);return p.setDate(p.getDate()-p.getDay()),o>=p&&o<=fa(n)}case"month":{const p=new Date(l.getFullYear(),l.getMonth(),1);return o>=p&&o<=fa(n)}case"custom":{if(!s&&!a)return!0;const p=s?cl(new Date(s)):new Date(0),c=a?fa(new Date(a)):new Date;return o>=p&&o<=c}default:return!0}})}window.toggleDateFilterDropdown=e=>{e&&e.stopPropagation();const t=document.getElementById("date-filter-dropdown");t&&t.classList.toggle("hidden")};window.updateHistoryFromDate=e=>{d.historyFromDate=e,d.historyToDate&&(d.historyDateFilter="custom",window.triggerRender())};window.updateHistoryToDate=e=>{d.historyToDate=e,d.historyFromDate&&(d.historyDateFilter="custom",window.triggerRender())};function Vi(){const e=window.getCache(),t=e.sales||[],s=e.saleItems||[],a=t.filter(k=>k.status==="draft"),n=t.filter(k=>k.status!=="draft"),l=d.historyViewMode||"completed",r=d.historyDateFilter||"all",o=dl(a,r,d.historyFromDate,d.historyToDate),p=dl(n,r,d.historyFromDate,d.historyToDate),c=l==="drafts"?o:p,u=()=>{switch(r){case"today":return"Today";case"week":return"This Week";case"month":return"This Month";case"custom":return d.historyFromDate||d.historyToDate?"Custom Range":"All Time";default:return"All Time"}},y=k=>{switch(k){case"cash":return"payments";case"card":return"credit_card";case"upi":return"qr_code";default:return"account_balance_wallet"}},v=k=>{switch(k){case"cash":return"Cash";case"card":return"Card";case"upi":return"UPI";default:return"Paid"}};return`
        ${Ni("history")}
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
                        <span class="text-slate-300 ml-1">(${c.length})</span>
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
                                <button type="button" onclick="window.setHistoryDateFilter('all'); window.toggleDateFilterDropdown();" class="w-full p-3 text-left rounded-xl text-xs font-bold hover:bg-slate-50 flex items-center gap-3 ${r==="all"?"bg-slate-100 text-slate-900":"text-slate-600"}">
                                    <span class="material-icons-outlined text-sm">all_inclusive</span>
                                    All Transactions
                                </button>
                                <button type="button" onclick="window.setHistoryDateFilter('today'); window.toggleDateFilterDropdown();" class="w-full p-3 text-left rounded-xl text-xs font-bold hover:bg-slate-50 flex items-center gap-3 ${r==="today"?"bg-slate-100 text-slate-900":"text-slate-600"}">
                                    <span class="material-icons-outlined text-sm">today</span>
                                    Today
                                </button>
                                <button type="button" onclick="window.setHistoryDateFilter('week'); window.toggleDateFilterDropdown();" class="w-full p-3 text-left rounded-xl text-xs font-bold hover:bg-slate-50 flex items-center gap-3 ${r==="week"?"bg-slate-100 text-slate-900":"text-slate-600"}">
                                    <span class="material-icons-outlined text-sm">date_range</span>
                                    This Week
                                </button>
                                <button type="button" onclick="window.setHistoryDateFilter('month'); window.toggleDateFilterDropdown();" class="w-full p-3 text-left rounded-xl text-xs font-bold hover:bg-slate-50 flex items-center gap-3 ${r==="month"?"bg-slate-100 text-slate-900":"text-slate-600"}">
                                    <span class="material-icons-outlined text-sm">calendar_month</span>
                                    This Month
                                </button>
                            </div>
                            
                            <div class="border-t border-slate-100 p-3 space-y-3">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Custom Date Range</p>
                                <div class="grid grid-cols-2 gap-2">
                                    <div>
                                        <label class="text-[8px] font-bold text-slate-400 uppercase mb-1 block">From</label>
                                        <input type="date" value="${d.historyFromDate||""}" onchange="window.updateHistoryFromDate(this.value)" class="w-full px-2 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900">
                                    </div>
                                    <div>
                                        <label class="text-[8px] font-bold text-slate-400 uppercase mb-1 block">To</label>
                                        <input type="date" value="${d.historyToDate||""}" onchange="window.updateHistoryToDate(this.value)" class="w-full px-2 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Transactions List -->
            ${c.length===0?`
                <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                    <span class="material-icons-outlined text-3xl text-slate-200">${l==="drafts"?"edit_note":"receipt_long"}</span>
                    <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                        No ${l==="drafts"?"saved drafts":"transactions"} found
                    </span>
                    <span class="text-[9px] font-bold text-slate-300">
                        ${r!=="all"?"Try adjusting your date filter":""}
                    </span>
                </div>
            `:`
                <section class="space-y-3 text-left">
                    ${l==="drafts"?`
                        <!-- Drafts List -->
                        ${o.map(k=>{const m=s.filter(h=>h.sale_id===k.id),$=m[0]?m[0].product_name:"No items",S=m.length>1?`+ ${m.length-1} more`:"";return`
                                <div class="card border-2 border-dashed overflow-hidden ${d.salesHistoryId===k.id?"border-slate-900 shadow-lg":"border-slate-200"}">
                                    <button type="button" onclick="window.setSalesHistoryId('${k.id}')" class="p-5 text-left w-full">
                                        <div class="flex justify-between items-start mb-3 text-left">
                                            <div class="text-left">
                                                <div class="flex items-center gap-2 mb-1 text-left">
                                                    <span class="bg-slate-900 text-white px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">
                                                        Draft
                                                    </span>
                                                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter text-left">#${k.id}</p>
                                                </div>
                                                <h4 class="text-lg font-black text-slate-900 tracking-tighter text-left">${k.customer_name||"No Customer"}</h4>
                                            </div>
                                            <p class="text-lg font-black text-slate-900 tracking-tighter text-right">₹${k.total_amount?parseInt(k.total_amount).toLocaleString():0}</p>
                                        </div>
                                        <div class="space-y-1 text-left">
                                            <p class="text-[10px] font-bold text-slate-500 uppercase text-left">${$} ${S}</p>
                                            <p class="text-[9px] font-black text-slate-300 uppercase text-left">${new Date(k.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</p>
                                        </div>
                                    </button>
                                    <div class="px-5 pb-4 flex gap-2">
                                        <button type="button" onclick="window.loadDraft('${k.id}')" class="flex-1 py-2.5 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1.5 hover:bg-slate-800 transition-all">
                                            <span class="material-icons-outlined text-sm">edit</span>
                                            Resume Draft
                                        </button>
                                        <button type="button" onclick="window.deleteDraft('${k.id}')" class="py-2.5 px-4 bg-white border border-slate-200 text-slate-500 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1.5 hover:bg-slate-100 transition-all">
                                            <span class="material-icons-outlined text-sm">delete</span>
                                        </button>
                                    </div>
                                </div>
                            `}).join("")}
                    `:`
                        <!-- Completed Transactions List -->
                        ${p.map(k=>{const m=s.filter(V=>V.sale_id===k.id),$=m[0]?m[0].product_name:"Custom Sale",S=m.length>1?`+ ${m.length-1} more`:"",h=y(k.payment_mode),P=v(k.payment_mode);return`
                                <button type="button" onclick="window.setSalesHistoryId('${k.id}')" class="card p-4 sm:p-6 border-2 transition-all cursor-pointer text-left w-full ${d.salesHistoryId===k.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                                    <div class="flex justify-between items-start mb-4 text-left">
                                        <div class="text-left flex-1 min-w-0">
                                            <div class="flex items-center gap-2 mb-1 text-left flex-wrap">
                                                <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter text-left">Order #${k.id}</p>
                                                <span class="bg-slate-100 px-1.5 py-0.5 rounded text-[7px] font-black text-slate-400 flex items-center gap-1 uppercase tracking-tighter text-left">
                                                    <span class="material-icons-outlined text-[10px] text-left">store</span> In-Store
                                                </span>
                                                ${k.gst_required?`
                                                    <span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-tighter">
                                                        GST
                                                    </span>
                                                `:""}
                                                ${k.installation_required?`
                                                    <span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-tighter flex items-center gap-0.5">
                                                        <span class="material-icons-outlined text-[10px]">build</span> Install
                                                    </span>
                                                `:""}
                                            </div>
                                            <h4 class="text-lg sm:text-xl font-black text-slate-900 tracking-tighter text-left truncate">${k.customer_name}</h4>
                                        </div>
                                        <p class="text-lg sm:text-xl font-black text-slate-900 tracking-tighter text-right shrink-0 ml-2">₹${k.total_amount?parseInt(k.total_amount).toLocaleString():0}</p>
                                    </div>
                                    <div class="space-y-1 text-left">
                                        <p class="text-[10px] font-bold text-slate-500 uppercase text-left truncate">${$} ${S}</p>
                                        <div class="flex items-center justify-between text-left">
                                            <p class="text-[9px] font-black text-slate-500 uppercase text-left flex items-center gap-1">
                                                <span class="material-icons-outlined text-xs">${h}</span>
                                                ${P} • Completed
                                            </p>
                                            <p class="text-[9px] font-black text-slate-300 uppercase text-right">${new Date(k.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</p>
                                        </div>
                                    </div>
                                </button>
                            `}).join("")}
                    `}
                </section>
            `}
        </div>
    `}window.deleteDraft=async e=>{window.showConfirm("Are you sure you want to delete this draft?",async()=>{try{await T.sales.deleteItems(e),await T.sales.delete(e),await J(),window.toast.success("Draft deleted successfully")}catch(t){console.error("Error deleting draft:",t),window.toast.error("Error deleting draft: "+t.message)}})};window.printReceipt=()=>{window.print()};window.shareWhatsApp=()=>{const e=Pa();if(!e)return;const t=Ui(e),s=`https://wa.me/?text=${encodeURIComponent(t)}`;window.open(s,"_blank")};window.automateTransaction=()=>{const e=Pa();if(!e){window.toast.warning("No transaction data to automate");return}window._automationContext={transactionId:e.id,customer:e.customer,phone:e.phone,items:e.items,total:e.total,date:e.date,installationRequired:e.installationRequired,installationDate:e.installationDate},window.setApp("automation"),window.setAutomationViewMode("create")};window.shareNative=async()=>{const e=Pa();if(!e)return;const t=Ui(e);if(navigator.share)try{await navigator.share({title:`Invoice #${e.id}`,text:t})}catch(s){s.name!=="AbortError"&&console.error("Share failed:",s)}else try{await navigator.clipboard.writeText(t),window.toast.success("Receipt copied to clipboard!")}catch(s){console.error("Copy failed:",s),window.toast.error("Failed to copy receipt")}};function Pa(){var s,a,n;const e=d.currentTab==="history",t=window.getCache();if(e){const l=(t.sales||[]).find(u=>u.id===d.salesHistoryId);if(!l)return null;const r=(t.saleItems||[]).filter(u=>u.sale_id===l.id),o=(s=t.customers)==null?void 0:s.find(u=>u.id===l.customer_id),p=l.company_id?(a=t.companies)==null?void 0:a.find(u=>u.id===l.company_id):null,c=l.total_amount||0;return{id:l.id,status:l.status,customer:l.customer_name,customerId:l.customer_id,phone:(o==null?void 0:o.phone)||"N/A",date:new Date(l.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),time:new Date(l.date).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})+" IST",items:r.map(u=>{let y=[];if(u.extra_fields)try{y=JSON.parse(u.extra_fields)}catch{}return{name:u.product_name,category:u.category||"Standard",price:u.price,imei:u.imei,serial_number:u.serial_number,mac_id:u.mac_id,manufacturing_date:u.manufacturing_date,installation_date:u.installation_date,extraFields:y}}),subtotal:c/1.18,gst:c-c/1.18,total:c,paymentMode:l.payment_mode,paymentReference:l.payment_reference,gstRequired:l.gst_required,company:p,installationRequired:l.installation_required,installationDate:l.installation_date}}else{const l=window.getActiveCart?window.getActiveCart():[],r=window.getSelectedCustomer?window.getSelectedCustomer():{name:"Walk-in Customer",id:null},o=window.getSaleState?window.getSaleState():{},p=(n=window.getCache().customers)==null?void 0:n.find(y=>y.id===r.id),c=l.reduce((y,v)=>y+(v.final_price||v.mop||0),0),u=l.reduce((y,v)=>y+(v.discount_amount||0),0);return l.length===0?null:{id:"DRAFT",status:"draft",customer:r.name,customerId:r.id,phone:(p==null?void 0:p.phone)||"",date:new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),time:new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})+" IST",items:l.map(y=>({name:y.name,category:y.category,price:y.mop,discount_type:y.discount_type,discount_value:y.discount_value,discount_amount:y.discount_amount,scheme_name:y.scheme_name,final_price:y.final_price||y.mop,imei:y.imei,serial_number:y.serial_number,mac_id:y.mac_id,manufacturing_date:y.manufacturing_date,installation_date:y.installation_required?y.installation_date:null,extraFields:y.extraFields||[]})),subtotal:c/1.18,gst:c-c/1.18,total:c,totalDiscount:u,paymentMode:o.paymentMode,paymentReference:o.paymentReference,gstRequired:o.gstRequired,company:o.gstRequired?{name:o.companyName,gst_number:o.gstNumber}:null,installationRequired:o.installationRequired,installationDate:o.installationDate}}}function Ui(e){let t=`INVOICE #${e.id}
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
`,t+="Powered by RetailerOS",t}function Sd(e){switch(e){case"cash":return"payments";case"card":return"credit_card";case"upi":return"qr_code";default:return"account_balance_wallet"}}function $d(e){switch(e){case"cash":return"Cash";case"card":return"Card";case"upi":return"UPI";default:return"Payment"}}function An(){const e=d.currentTab==="history",t=Pa();if(!t)return`<div class="p-10 text-center opacity-40 flex flex-col items-center justify-center h-full">
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
                            <span class="material-icons-outlined text-sm">${Sd(t.paymentMode)}</span>
                        </div>
                        <div class="text-left">
                            <p class="text-[9px] font-black uppercase tracking-widest text-left">Paid via ${$d(t.paymentMode)}</p>
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
    `}function Na(e,t="RETAILEROS"){return`
        <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
            <div class="flex items-center justify-between mb-6 text-left">
                <button onclick="${d.clientViewMode==="directory"||d.clientViewMode==="groups"?"setApp('launcher')":"setClientMode('directory')"}" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                    <span class="material-icons-outlined text-left">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">${d.clientViewMode==="directory"||d.clientViewMode==="groups"?"Back":"Directory"}</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">${e}</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">${t}</p>
                </div>
                <div class="w-10"></div>
            </div>
        </header>
    `}function pl(){const e=window.getCache(),t=e.customers||[],s=d.clientSearchQuery||"",n=[...s?t.filter(l=>l.name.toLowerCase().includes(s.toLowerCase())||l.phone&&l.phone.includes(s)||l.email&&l.email.toLowerCase().includes(s.toLowerCase())):t].sort((l,r)=>new Date(r.joined_at||0)-new Date(l.joined_at||0));return`
        ${Na("Clients","RETAILEROS")}
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
                `:n.map(l=>{var p;const r=(e.sales||[]).filter(c=>c.customer_id===l.id&&c.status!=="draft"),o=r.reduce((c,u)=>c+(u.total_amount||0),0);return(p=r[0])==null||p.date,`
                    <button type="button" onclick="window.setClientMode('profile', '${l.name.replace(/'/g,"\\'")}', '${l.id}')" class="card p-4 sm:p-5 border-2 transition-all flex items-center justify-between group cursor-pointer text-left w-full ${d.selectedClient===l.name?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                        <div class="flex items-center gap-3 sm:gap-4 text-left flex-1 min-w-0">
                            <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 border border-slate-100 flex items-center justify-center font-black text-[10px] text-slate-400 text-center shrink-0">${l.name.split(" ").map(c=>c[0]).join("").toUpperCase()}</div>
                            <div class="text-left flex-1 min-w-0">
                                <h4 class="text-sm font-black text-slate-900 text-left truncate">${l.name}</h4>
                                <p class="text-[10px] font-bold text-slate-400 -mt-0.5 text-left truncate">${l.phone||l.email||"No contact"}</p>
                            </div>
                        </div>
                        <div class="text-right shrink-0 ml-2">
                            ${o>0?`
                                <p class="text-xs font-black text-slate-900 tracking-tighter text-right">₹${o.toLocaleString()}</p>
                                <p class="text-[7px] font-black text-slate-300 uppercase tracking-tighter text-right">${r.length} orders</p>
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
    `}window.updateClientSearch=e=>{const t=document.getElementById("client-search-input"),s=(t==null?void 0:t.selectionStart)||e.length;d.clientSearchQuery=e,window.triggerRender(!1),setTimeout(()=>{const a=document.getElementById("client-search-input");a&&(a.focus(),a.setSelectionRange(s,s))},0)};async function Ed(){const e=document.getElementById("client-name"),t=document.getElementById("client-phone"),s=document.getElementById("client-email"),a=document.getElementById("client-location");if(!e||!t){console.error("Form inputs not found"),window.toast.error("Form error. Please try again.");return}const n=e.value.trim(),l=t.value.trim(),r=s.value.trim(),o=a?a.value.trim():"";if(!n||!l){window.toast.warning("Name and Phone are required");return}const p=document.getElementById("save-client-btn");let c="";p&&(c=p.innerHTML,p.innerHTML='<span class="material-icons-outlined animate-spin text-xs">sync</span> Saving...',p.disabled=!0);try{const u="CL-"+Math.random().toString(36).substr(2,6).toUpperCase();console.log("Saving client:",{id:u,name:n,phone:l,email:r,location:o}),await T.clients.add({id:u,name:n,phone:l,email:r,location:o}),console.log("Client saved successfully"),await J(),window.toast.success("Client added successfully!"),d.currentApp==="sales"?(qi(u,n),Rl("default")):Il("directory")}catch(u){console.error("Error saving client:",u),window.toast.error("Error saving client: "+u.message),p&&(p.innerHTML=c,p.disabled=!1)}}window.saveClient=Ed;function xn(e){const t=e==="desktop";return`
        ${t?"":Na("New Client","RETAILEROS • CLIENTS")}
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
    `}function ul(e){var $;const t=e==="desktop",s=window.getCache(),a=(($=s.customers)==null?void 0:$.find(S=>S.id===d.selectedClientId||S.name===d.selectedClient))||{name:d.selectedClient||"Unknown",joined_at:new Date().toISOString()},n=a.name?a.name.split(" ").map(S=>S[0]).join("").toUpperCase():"?",l=(s.sales||[]).filter(S=>S.customer_id===a.id&&S.status!=="draft").sort((S,h)=>new Date(h.date)-new Date(S.date)),r=s.saleItems||[],o=(s.inquiries||[]).filter(S=>S.customer_id===a.id||S.customer_name===a.name),p=(s.repairs||[]).filter(S=>S.customer_id===a.id||S.customer_name===a.name),c=(s.automations||[]).filter(S=>S.customer_id===a.id),u=s.automationMessages||[],y=(s.communications||[]).filter(S=>S.customer_id===a.id),v=l.reduce((S,h)=>S+(h.total_amount||0),0),k=l.length,m=[...l.map(S=>({type:"sale",date:S.date,data:S,items:r.filter(h=>h.sale_id===S.id)})),...p.map(S=>({type:"repair",date:S.created_at||S.date,data:S})),...o.map(S=>({type:"inquiry",date:S.date||S.created_at,data:S})),...c.map(S=>({type:"automation",date:S.created_at,data:S,messages:u.filter(h=>h.automation_id===S.id)})),...y.map(S=>({type:"communication",date:S.sent_at,data:S}))].sort((S,h)=>new Date(h.date)-new Date(S.date));return`
        ${t?"":Na("Client Profile","RETAILEROS")}
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
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">₹${v.toLocaleString()}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Total Spent</p>
                </div>
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${k}</p>
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
                        ${m.map(S=>{if(S.type==="sale"){const h=S.data,P=S.items;return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-600 text-center">shopping_cart</span>
                                        </div>
                                        <button type="button" onclick="window.viewClientInvoice('${h.id}')" class="card p-4 sm:p-5 group hover:border-slate-900 hover:shadow-lg transition-all text-left w-full cursor-pointer">
                                            <div class="flex justify-between items-start mb-3 text-left">
                                                <div class="text-left">
                                                    <div class="flex items-center gap-2 mb-1">
                                                        <h4 class="text-xs font-black text-slate-900 text-left">Purchase</h4>
                                                        ${h.gst_required?'<span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase">GST</span>':""}
                                                        ${h.payment_mode?`<span class="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[7px] font-black uppercase">${h.payment_mode}</span>`:""}
                                                    </div>
                                                    <p class="text-xl font-black tracking-tighter text-left">₹${(h.total_amount||0).toLocaleString()}</p>
                                                </div>
                                                <div class="flex items-center gap-2">
                                                    <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(h.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</span>
                                                    <span class="material-icons-outlined text-sm text-slate-300 group-hover:text-slate-900 transition-colors">chevron_right</span>
                                                </div>
                                            </div>
                                            <!-- Items List -->
                                            <div class="space-y-2 text-left">
                                                ${P.map(V=>`
                                                    <div class="flex justify-between items-center bg-slate-50 rounded-lg p-2">
                                                        <div class="text-left flex-1 min-w-0">
                                                            <p class="text-[10px] font-black text-slate-900 truncate">${V.product_name}</p>
                                                            <p class="text-[8px] font-bold text-slate-400 uppercase">${V.category||"Product"}</p>
                                                        </div>
                                                        <p class="text-[10px] font-black text-slate-600 ml-2">₹${(V.price||0).toLocaleString()}</p>
                                                    </div>
                                                `).join("")}
                                            </div>
                                            ${h.installation_required?`
                                                <div class="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 text-[9px] font-bold text-slate-500">
                                                    <span class="material-icons-outlined text-xs">build</span>
                                                    Installation ${h.installation_date?`on ${new Date(h.installation_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}`:"Required"}
                                                </div>
                                            `:""}
                                        </button>
                                    </div>
                                `}if(S.type==="repair"){const h=S.data;return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-500 text-center">build</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 group hover:border-slate-300 transition-all text-left">
                                            <div class="flex justify-between items-start mb-2 text-left">
                                                <div class="text-left">
                                                    <h4 class="text-xs font-black text-slate-900 text-left">Device Repair</h4>
                                                    <p class="text-lg font-black tracking-tighter text-left">₹${h.cost||"Estimating"}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(h.created_at||h.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</span>
                                            </div>
                                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">${h.device_model||"Device"} • ${h.status||"In Progress"}</p>
                                        </div>
                                    </div>
                                `}if(S.type==="inquiry"){const h=S.data;return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-400 text-center">info</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 flex justify-between items-start group hover:border-slate-300 transition-all text-left">
                                            <div class="text-left">
                                                <h4 class="text-xs font-black text-slate-900 text-left">Inquiry</h4>
                                                <p class="text-[11px] font-bold text-slate-500 text-left">${h.request||"Product Interest"}</p>
                                                <div class="flex items-center gap-1 mt-2 text-left">
                                                    <div class="w-1.5 h-1.5 ${h.status==="PENDING"||h.status==="pending"?"bg-slate-400":"bg-slate-900"} rounded-full text-left"></div>
                                                    <p class="text-[8px] font-black text-slate-400 uppercase text-left">${h.status||"Open"}</p>
                                                </div>
                                            </div>
                                            <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(h.date||h.created_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</span>
                                        </div>
                                    </div>
                                `}if(S.type==="automation"){const h=S.data,P=S.messages||[],V=P.filter(zt=>zt.status==="sent").length,As=P.filter(zt=>zt.status==="pending").length;return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-slate-900 border border-slate-900 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-white text-center">smart_toy</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 group hover:border-slate-300 transition-all text-left border-l-4 border-l-slate-900">
                                            <div class="flex justify-between items-start mb-2 text-left">
                                                <div class="text-left">
                                                    <div class="flex items-center gap-2 mb-1">
                                                        <h4 class="text-xs font-black text-slate-900 text-left">Automation</h4>
                                                        <span class="bg-slate-900 text-white px-1.5 py-0.5 rounded text-[7px] font-black uppercase">${h.status}</span>
                                                    </div>
                                                    <p class="text-sm font-black tracking-tight text-left">${h.name}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(h.created_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</span>
                                            </div>
                                            <div class="flex items-center gap-3 mt-3 text-left">
                                                <div class="flex items-center gap-1 text-[9px] font-bold text-slate-500">
                                                    <span class="material-icons-outlined text-xs">check_circle</span>
                                                    ${V} sent
                                                </div>
                                                <div class="flex items-center gap-1 text-[9px] font-bold text-slate-400">
                                                    <span class="material-icons-outlined text-xs">schedule</span>
                                                    ${As} scheduled
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `}if(S.type==="communication"){const h=S.data,P=h.type==="whatsapp"?"chat":h.type==="call"?"call":"mail",V=h.type==="whatsapp"?"WhatsApp":h.type==="call"?"Phone Call":"Email";return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-500 text-center">${P}</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 group hover:border-slate-300 transition-all text-left">
                                            <div class="flex justify-between items-start mb-2 text-left">
                                                <div class="text-left flex-1 min-w-0">
                                                    <div class="flex items-center gap-2 mb-1">
                                                        <h4 class="text-xs font-black text-slate-900 text-left">${V}</h4>
                                                        <span class="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[7px] font-black uppercase">${h.direction}</span>
                                                        ${h.status==="delivered"?'<span class="text-slate-400"><span class="material-icons-outlined text-xs">done_all</span></span>':""}
                                                    </div>
                                                    <p class="text-[10px] font-bold text-slate-500 text-left line-clamp-2">${h.content}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right shrink-0 ml-2">${new Date(h.sent_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}</span>
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
    `}const Hi=e=>`${e}-${Math.random().toString(36).substr(2,8).toUpperCase()}`;let j={name:"",description:"",isCompany:!1,gstNumber:"",contactPerson:""};function Id(){j={name:"",description:"",isCompany:!1,gstNumber:"",contactPerson:""}}window.updateGroupForm=(e,t)=>{j[e]=t,e==="isCompany"&&window.triggerRender(!1)};window.toggleGroupIsCompany=()=>{j.isCompany=!j.isCompany,window.triggerRender(!1)};window.saveGroup=async()=>{if(!j.name.trim()){window.toast.warning("Please enter a group name");return}const e=document.getElementById("save-group-btn");e&&(e.disabled=!0,e.innerHTML='<span class="material-icons-outlined animate-spin text-xs">sync</span> Saving...');try{const t=Hi("GRP");await T.groups.add({id:t,name:j.name.trim(),description:j.description.trim(),is_company:j.isCompany?1:0,gst_number:j.isCompany?j.gstNumber.trim():null,contact_person:j.isCompany?j.contactPerson.trim():null,created_at:new Date().toISOString()}),Id(),await J(),d.groupViewMode="list",d.selectedGroupId=t,window.toast.success(`${j.isCompany?"Company":"Group"} created successfully!`),window.triggerRender()}catch(t){console.error("Error saving group:",t),window.toast.error("Error saving group: "+t.message),e&&(e.disabled=!1,e.innerHTML="Create Group")}};window.deleteGroup=async e=>{window.showConfirm("Are you sure you want to delete this group? All member associations will be removed.",async()=>{try{await T.groups.deleteMembers(e),await T.groups.delete(e),await J(),d.selectedGroupId=null,d.groupViewMode="list",window.toast.success("Group deleted successfully"),window.triggerRender()}catch(t){console.error("Error deleting group:",t),window.toast.error("Error deleting group: "+t.message)}})};window.addMemberToGroup=async(e,t)=>{try{await T.groups.addMember({id:Hi("GM"),group_id:e,customer_id:t,added_at:new Date().toISOString()}),await J(),window.toast.success("Member added"),window.triggerRender(!1)}catch(s){console.error("Error adding member:",s),window.toast.error("Error adding member: "+s.message)}};window.removeMemberFromGroup=async(e,t)=>{try{await T.groups.removeMember(e,t),await J(),window.toast.info("Member removed"),window.triggerRender(!1)}catch(s){console.error("Error removing member:",s),window.toast.error("Error removing member: "+s.message)}};window.updateGroupSearch=e=>{const t=document.getElementById("group-search-input"),s=(t==null?void 0:t.selectionStart)||e.length;d.groupSearchQuery=e,window.triggerRender(!1),setTimeout(()=>{const a=document.getElementById("group-search-input");a&&(a.focus(),a.setSelectionRange(s,s))},0)};function Cd(){const e=window.getCache(),t=e.groups||[],s=e.groupMembers||[],a=d.groupSearchQuery||"",n=a?t.filter(o=>o.name.toLowerCase().includes(a.toLowerCase())||o.description&&o.description.toLowerCase().includes(a.toLowerCase())):t,l=n.filter(o=>o.is_company===1),r=n.filter(o=>o.is_company!==1);return`
        ${Na("Groups","RETAILEROS")}
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
                    ${n.length} Total • ${l.length} Companies • ${r.length} Groups
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
                            ${l.map(o=>{const p=s.filter(c=>c.group_id===o.id).length;return`
                                    <button type="button" onclick="window.setSelectedGroup('${o.id}'); window.setGroupViewMode('detail');" class="card p-4 sm:p-5 border-2 transition-all flex items-center justify-between group cursor-pointer text-left w-full mb-3 ${d.selectedGroupId===o.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                                        <div class="flex items-center gap-3 sm:gap-4 text-left flex-1 min-w-0">
                                            <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900 flex items-center justify-center text-white shrink-0">
                                                <span class="material-icons-outlined text-lg">business</span>
                                            </div>
                                            <div class="text-left flex-1 min-w-0">
                                                <h4 class="text-sm font-black text-slate-900 text-left truncate">${o.name}</h4>
                                                <p class="text-[10px] font-bold text-slate-400 -mt-0.5 text-left truncate">${o.gst_number||"No GST"}</p>
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
                    
                    ${r.length>0?`
                        <div class="pt-2">
                            <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-3">Groups</p>
                            ${r.map(o=>{const p=s.filter(c=>c.group_id===o.id).length;return`
                                    <button type="button" onclick="window.setSelectedGroup('${o.id}'); window.setGroupViewMode('detail');" class="card p-4 sm:p-5 border-2 transition-all flex items-center justify-between group cursor-pointer text-left w-full mb-3 ${d.selectedGroupId===o.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                                        <div class="flex items-center gap-3 sm:gap-4 text-left flex-1 min-w-0">
                                            <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 border border-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                                                <span class="material-icons-outlined text-lg">group</span>
                                            </div>
                                            <div class="text-left flex-1 min-w-0">
                                                <h4 class="text-sm font-black text-slate-900 text-left truncate">${o.name}</h4>
                                                <p class="text-[10px] font-bold text-slate-400 -mt-0.5 text-left truncate">${o.description||"No description"}</p>
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
    `}function Rd(){return`
        <div class="h-full flex flex-col">
            <!-- Header -->
            <div class="p-6 border-b border-slate-100 flex items-center justify-between shrink-0">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center">
                        <span class="material-icons-outlined text-white">add</span>
                    </div>
                    <div>
                        <h2 class="text-lg font-black text-slate-900 tracking-tighter">New ${j.isCompany?"Company":"Group"}</h2>
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
                        <div class="w-10 h-10 ${j.isCompany?"bg-slate-900":"bg-slate-100"} rounded-xl flex items-center justify-center transition-all">
                            <span class="material-icons-outlined text-lg ${j.isCompany?"text-white":"text-slate-400"}">${j.isCompany?"business":"group"}</span>
                        </div>
                        <div>
                            <h3 class="text-sm font-black text-slate-900">${j.isCompany?"Company":"Group"}</h3>
                            <p class="text-[9px] font-bold text-slate-400">${j.isCompany?"B2B with GST":"For marketing"}</p>
                        </div>
                    </div>
                    <button type="button" onclick="window.toggleGroupIsCompany()" class="w-11 h-6 ${j.isCompany?"bg-slate-900":"bg-slate-200"} rounded-full relative transition-all">
                        <div class="absolute top-0.5 ${j.isCompany?"right-0.5":"left-0.5"} w-5 h-5 bg-white rounded-full shadow transition-all"></div>
                    </button>
                </div>

                <!-- Form Fields -->
                <div class="space-y-2">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">${j.isCompany?"Company Name":"Group Name"} <span class="text-slate-300">*</span></label>
                    <input type="text" 
                           value="${j.name}"
                           oninput="window.updateGroupForm('name', this.value)" 
                           placeholder="${j.isCompany?"e.g. Reliance Industries":"e.g. VIP Customers"}" 
                           class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                </div>

                <div class="space-y-2">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Description</label>
                    <textarea 
                           oninput="window.updateGroupForm('description', this.value)" 
                           placeholder="${j.isCompany?"Company details, address...":"Purpose of this group..."}" 
                           rows="2"
                           class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all resize-none">${j.description}</textarea>
                </div>

                ${j.isCompany?`
                    <div class="space-y-2">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">GST Number</label>
                        <input type="text" 
                               value="${j.gstNumber}"
                               oninput="window.updateGroupForm('gstNumber', this.value.toUpperCase())" 
                               placeholder="e.g. 27AAACR3456D1Z5" 
                               maxlength="15"
                               class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold uppercase focus:outline-none focus:border-slate-900 transition-all">
                    </div>

                    <div class="space-y-2">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Contact Person</label>
                        <input type="text" 
                               value="${j.contactPerson}"
                               oninput="window.updateGroupForm('contactPerson', this.value)" 
                               placeholder="e.g. Mukesh Ambani" 
                               class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                    </div>
                `:""}

                <!-- Save Button -->
                <button type="button" id="save-group-btn" onclick="window.saveGroup()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4">
                    Create ${j.isCompany?"Company":"Group"}
                    <span class="material-icons-outlined text-xs">arrow_forward</span>
                </button>
            </div>
        </div>
    `}function Ad(){const e=window.getCache(),t=e.groups||[],s=e.groupMembers||[],a=e.customers||[],n=e.sales||[],l=t.find(u=>u.id===d.selectedGroupId);if(!l)return`
            <div class="h-full flex items-center justify-center text-slate-300 text-center p-8">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50">error_outline</span>
                    <p class="text-[10px] font-black uppercase tracking-widest">Group not found</p>
                </div>
            </div>
        `;const r=s.filter(u=>u.group_id===l.id).map(u=>u.customer_id),o=a.filter(u=>r.includes(u.id)),c=n.filter(u=>r.includes(u.customer_id)&&u.status!=="draft").reduce((u,y)=>u+(y.total_amount||0),0);return`
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
                        <p class="text-2xl font-black text-slate-900 tracking-tighter">${o.length}</p>
                        <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Members</p>
                    </div>
                    <div class="card p-4 text-center">
                        <p class="text-2xl font-black text-slate-900 tracking-tighter">₹${c.toLocaleString()}</p>
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
                        <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Members (${o.length})</h3>
                        <button onclick="window.setGroupViewMode('add-members')" class="text-[9px] font-black text-slate-900 uppercase flex items-center gap-1">
                            <span class="material-icons-outlined text-sm">person_add</span>
                            Add
                        </button>
                    </div>

                    ${o.length===0?`
                        <div class="card p-6 border-dashed border-slate-200 text-center">
                            <span class="material-icons-outlined text-2xl text-slate-200 mb-2">group_add</span>
                            <p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">No members yet</p>
                            <button onclick="window.setGroupViewMode('add-members')" class="mt-3 px-4 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase">
                                Add Members
                            </button>
                        </div>
                    `:`
                        <div class="space-y-2">
                            ${o.map(u=>{const v=n.filter(k=>k.customer_id===u.id&&k.status!=="draft").reduce((k,m)=>k+(m.total_amount||0),0);return`
                                    <div class="card p-3 flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-black text-[8px] text-slate-400">${u.name.split(" ").map(k=>k[0]).join("").toUpperCase()}</div>
                                            <div>
                                                <p class="text-xs font-black text-slate-900">${u.name}</p>
                                                <p class="text-[9px] font-bold text-slate-400">${u.phone||"No phone"}</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            ${v>0?`<span class="text-[9px] font-black text-slate-500">₹${v.toLocaleString()}</span>`:""}
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
    `}function Td(){const e=window.getCache(),t=e.groups||[],s=e.groupMembers||[],a=e.customers||[],n=t.find(o=>o.id===d.selectedGroupId);if(!n)return d.groupViewMode="list","";const l=s.filter(o=>o.group_id===n.id).map(o=>o.customer_id),r=a.filter(o=>!l.includes(o.id));return`
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
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Available Clients (${r.length})</h3>
                
                ${r.length===0?`
                    <div class="card p-8 border-dashed border-slate-200 text-center">
                        <span class="material-icons-outlined text-2xl text-slate-200 mb-2">check_circle</span>
                        <p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">All clients are members</p>
                    </div>
                `:`
                    <div class="space-y-2">
                        ${r.map(o=>`
                            <div class="card p-3 flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-black text-[8px] text-slate-400">${o.name.split(" ").map(p=>p[0]).join("").toUpperCase()}</div>
                                    <div>
                                        <p class="text-xs font-black text-slate-900">${o.name}</p>
                                        <p class="text-[9px] font-bold text-slate-400">${o.phone||o.email||"No contact"}</p>
                                    </div>
                                </div>
                                <button onclick="window.addMemberToGroup('${n.id}', '${o.id}')" class="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[8px] font-black uppercase">
                                    Add
                                </button>
                            </div>
                        `).join("")}
                    </div>
                `}
            </div>
        </div>
    `}function xl(){return Cd()}function fl(){switch(d.groupViewMode){case"create":return Rd();case"detail":return Ad();case"add-members":return Td();default:return`
                <div class="h-full flex items-center justify-center text-slate-300 text-center p-8">
                    <div class="text-center">
                        <span class="material-icons-outlined text-4xl mb-2 opacity-50">group</span>
                        <p class="text-[10px] font-black uppercase tracking-widest">Select a group to view details</p>
                    </div>
                </div>
            `}}function Md(e){switch(e){case"cash":return"payments";case"card":return"credit_card";case"upi":return"qr_code";default:return"account_balance_wallet"}}function Dd(e){switch(e){case"cash":return"Cash";case"card":return"Card";case"upi":return"UPI";default:return"Payment"}}function bl(e="desktop"){var u,y;const t=window.getCache(),s=d.clientInvoiceId,a=(t.sales||[]).find(v=>v.id===s);if(!a)return`
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50">receipt_long</span>
                    <p class="text-[10px] font-black uppercase tracking-widest">Invoice not found</p>
                </div>
            </div>
        `;const n=(t.saleItems||[]).filter(v=>v.sale_id===a.id),l=(u=t.customers)==null?void 0:u.find(v=>v.id===a.customer_id),r=a.company_id?(y=t.companies)==null?void 0:y.find(v=>v.id===a.company_id):null,o=a.total_amount||0,p=n.map(v=>{let k=[];if(v.extra_fields)try{k=JSON.parse(v.extra_fields)}catch{}return{name:v.product_name,category:v.category||"Standard",price:v.price,imei:v.imei,serial_number:v.serial_number,mac_id:v.mac_id,manufacturing_date:v.manufacturing_date,installation_date:v.installation_date,extraFields:k}}),c={id:a.id,status:a.status,customer:a.customer_name,phone:(l==null?void 0:l.phone)||"N/A",date:new Date(a.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),time:new Date(a.date).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})+" IST",items:p,subtotal:o/1.18,gst:o-o/1.18,total:o,paymentMode:a.payment_mode,paymentReference:a.payment_reference,gstRequired:a.gst_required,company:r,installationRequired:a.installation_required,installationDate:a.installation_date};return`
        <div class="h-full flex flex-col bg-white">
            <!-- Header with back button -->
            <div class="p-4 sm:p-6 border-b border-slate-100 flex items-center gap-4 shrink-0 bg-slate-50">
                <button onclick="window.setClientMode('profile')" class="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm">
                    <span class="material-icons-outlined">arrow_back</span>
                </button>
                <div>
                    <h2 class="text-sm font-black text-slate-900 tracking-tight">Invoice #${c.id}</h2>
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">${c.date}</p>
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
                            <span>Order #${c.id}</span>
                        </div>
                    </div>

                    <!-- Info Grid -->
                    <div class="grid grid-cols-2 gap-4 sm:gap-8 mb-6">
                        <div class="text-left">
                           <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Billed To</p>
                           <p class="text-sm font-black text-slate-900">${c.customer}</p>
                           <p class="text-[10px] font-bold text-slate-400">${c.phone}</p>
                        </div>
                        <div class="text-right">
                           <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Transaction</p>
                           <p class="text-sm font-black text-slate-900">${c.date}</p>
                           <p class="text-[10px] font-bold text-slate-400">${c.time}</p>
                        </div>
                    </div>

                    <!-- GST Company Info -->
                    ${c.gstRequired&&c.company?`
                        <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6">
                            <div class="flex items-center gap-2 text-[9px] font-black text-slate-600 uppercase tracking-widest mb-2">
                                <span class="material-icons-outlined text-sm">business</span>
                                GST Invoice
                            </div>
                            <p class="text-sm font-black text-slate-900">${c.company.name}</p>
                            <p class="text-[10px] font-bold text-slate-500">GSTIN: ${c.company.gst_number}</p>
                        </div>
                    `:""}

                    <!-- Items -->
                    <div class="space-y-4 text-left">
                        ${c.items.map(v=>`
                            <div class="pb-4 border-b border-slate-100 last:border-0">
                                <div class="flex justify-between items-start mb-2">
                                    <div class="flex-1 min-w-0">
                                        <h4 class="text-sm font-black text-slate-900 truncate">${v.name}</h4>
                                        <p class="text-[9px] font-bold text-slate-400 uppercase mt-0.5">${v.category}</p>
                                    </div>
                                    <p class="text-sm font-black text-slate-900 shrink-0 ml-2">₹${parseInt(v.price).toLocaleString()}</p>
                                </div>
                                ${v.imei||v.serial_number||v.mac_id||v.installation_date||v.extraFields&&v.extraFields.length>0?`
                                    <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 mt-2">
                                        <div class="flex items-center gap-2 text-[8px] font-black text-slate-500 uppercase tracking-widest mb-2">
                                            <span class="material-icons-outlined text-xs">verified</span> Device Info
                                        </div>
                                        <div class="grid grid-cols-2 gap-2">
                                            ${v.imei?`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">IMEI</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${v.imei}</p>
                                                </div>
                                            `:""}
                                            ${v.serial_number?`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">Serial</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${v.serial_number}</p>
                                                </div>
                                            `:""}
                                            ${v.mac_id?`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">MAC ID</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${v.mac_id}</p>
                                                </div>
                                            `:""}
                                            ${v.manufacturing_date?`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">Mfg. Date</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${new Date(v.manufacturing_date).toLocaleDateString("en-GB",{month:"short",year:"numeric"})}</p>
                                                </div>
                                            `:""}
                                            ${(v.extraFields||[]).map(k=>`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">${k.label}</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${k.value}</p>
                                                </div>
                                            `).join("")}
                                            ${v.installation_date?`
                                                <div class="col-span-2 pt-2 mt-2 border-t border-slate-200">
                                                    <p class="text-[7px] font-bold text-slate-500 uppercase flex items-center gap-1">
                                                        <span class="material-icons-outlined text-[10px]">build</span> Installation Date
                                                    </p>
                                                    <p class="text-[9px] font-black text-slate-700">${new Date(v.installation_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</p>
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
                        <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">Subtotal</span><span>₹${c.subtotal.toLocaleString(void 0,{maximumFractionDigits:2})}</span></div>
                        <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">GST (18%)</span><span>₹${c.gst.toLocaleString(void 0,{maximumFractionDigits:2})}</span></div>
                        <div class="flex justify-between text-xl font-black text-slate-900 mt-4 items-center">
                            <span>Grand Total</span>
                            <span>₹${parseInt(c.total).toLocaleString()}</span>
                        </div>
                    </div>
                    
                    <!-- Payment Status -->
                    ${c.paymentMode?`
                        <div class="bg-slate-900 text-white p-4 rounded-xl mt-6 flex justify-between items-center">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <span class="material-icons-outlined text-sm">${Md(c.paymentMode)}</span>
                                </div>
                                <div>
                                    <p class="text-[9px] font-black uppercase tracking-widest">Paid via ${Dd(c.paymentMode)}</p>
                                    ${c.paymentReference?`<p class="text-[8px] font-bold text-white/60 tracking-widest uppercase">Ref: ${c.paymentReference}</p>`:""}
                                </div>
                            </div>
                            <span class="text-[9px] font-black bg-white text-slate-900 px-2 py-1 rounded uppercase tracking-widest">Paid</span>
                        </div>
                    `:""}
                    
                    <!-- Action Buttons -->
                    <div class="flex justify-center gap-3 mt-6 pt-4 border-t border-slate-100">
                        <button type="button" onclick="window.shareInvoiceWhatsApp('${c.id}')" class="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-2 hover:bg-slate-200 transition-all">
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
    `}window.shareInvoiceWhatsApp=e=>{var o,p;const t=window.getCache(),s=(t.sales||[]).find(c=>c.id===e);if(!s)return;const a=(o=t.customers)==null?void 0:o.find(c=>c.id===s.customer_id),n=(t.saleItems||[]).filter(c=>c.sale_id===s.id);let l=`INVOICE #${s.id}
`;l+=`━━━━━━━━━━━━━━━━━━━━
`,l+=`${new Date(s.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}

`,l+=`${s.customer_name}
`,l+=`${(a==null?void 0:a.phone)||""}
`,l+=`
━━━━━━━━━━━━━━━━━━━━
`,l+=`ITEMS:
`,n.forEach(c=>{l+=`
• ${c.product_name}
`,l+=`  ${c.category||"Product"} - ₹${parseInt(c.price).toLocaleString()}
`}),l+=`
━━━━━━━━━━━━━━━━━━━━
`,l+=`TOTAL: ₹${parseInt(s.total_amount).toLocaleString()}
`,l+=`
Thank you for shopping!
`,l+="Powered by RetailerOS";const r=`https://wa.me/${((p=a==null?void 0:a.phone)==null?void 0:p.replace(/\D/g,""))||""}?text=${encodeURIComponent(l)}`;window.open(r,"_blank")};function Tn(e){const t=e==="desktop-secondary",s=e==="desktop-primary";return t?d.clientViewMode==="add"?xn("desktop"):d.clientViewMode==="invoice"?bl("desktop"):d.clientViewMode==="profile"?ul("desktop"):d.clientViewMode==="groups"?fl():`
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50 text-center">person_search</span>
                    <p class="text-[10px] font-black uppercase tracking-widest text-center">Select a client to view profile</p>
                </div>
            </div>
        `:s?d.clientViewMode==="groups"?xl():pl():d.clientViewMode==="add"?xn("mobile"):d.clientViewMode==="invoice"?bl("mobile"):d.clientViewMode==="profile"?ul("mobile"):d.clientViewMode==="groups"?d.groupViewMode==="detail"||d.groupViewMode==="create"||d.groupViewMode==="add-members"?fl():xl():pl()}const Va=(e,t,s=[])=>`
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
                ${s.map(a=>`<button onclick="setReportsTab('${a}')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${d.reportsTab===a?"bg-white shadow-sm text-slate-900":"text-slate-400"}">${a.toUpperCase()}</button>`).join("")}
            </div>
        `:""}
    </header>
`;function Ld(){var a;const e=window.getCache(),t=[{t:"Total Sales",v:e.sales?`₹${e.sales.reduce((n,l)=>n+parseInt(l.amount||l.total_amount),0).toLocaleString()}`:"₹0",p:e.sales?`+${e.sales.length}`:"0",i:"account_balance_wallet"},{t:"Clients",v:e.customers?e.customers.length.toLocaleString():"0",p:"Total",i:"group"},{t:"Inquiries",v:e.inquiries?e.inquiries.length.toLocaleString():"0",p:"Pending",i:"chat_bubble"},{t:"Repairs",v:e.repairs?e.repairs.length.toLocaleString():"0",p:"Active",i:"settings"},{t:"Schemes",v:e.schemes?`${e.schemes.length} Active`:"0",p:"Live",i:"percent"},{t:"Inventory",v:e.products?`₹${(e.products.reduce((n,l)=>n+parseInt(l.price)*parseInt(l.stock),0)/1e7).toFixed(1)}Cr`:"₹0",p:"Stock Value",i:"inventory_2"},{t:"Campaigns",v:e.campaigns?e.campaigns.length.toLocaleString():"0",p:"Pre-booking",i:"rocket_launch"},{t:"Automations",v:e.automations?e.automations.length.toLocaleString():"0",p:"Live",i:"bolt"}],s=`
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
    `}function jd(){return`<div class="card p-8 space-y-8 text-left"><div class="flex justify-between items-start text-left"><div class="text-left"><p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Revenue (30D)</p><h2 class="text-4xl font-black tracking-tighter text-slate-900 text-left">₹42.8L</h2></div><div class="bg-green-50 px-2 py-1 rounded-lg flex items-center gap-1"><span class="material-icons-outlined text-[10px] text-green-500">trending_up</span><span class="text-[10px] font-black text-green-600">+12.4%</span></div></div><div class="h-48 relative border-b border-slate-100 flex items-end justify-between px-2"><div class="absolute inset-0 flex items-center justify-center opacity-10"><h2 class="font-black text-8xl tracking-tighter text-slate-400">OS</h2></div><svg class="w-full h-full text-slate-900" viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M0 35 L20 30 L40 32 L60 15 L80 20 L100 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg><div class="absolute bottom-0 left-0 text-[8px] text-slate-300 font-black uppercase">01 Oct</div><div class="absolute bottom-0 left-1/2 -translate-x-1/2 text-[8px] text-slate-300 font-black uppercase">15 Oct</div><div class="absolute bottom-0 right-0 text-[8px] text-slate-300 font-black uppercase">30 Oct</div></div></div><div class="grid grid-cols-2 gap-4"><div class="card p-6 space-y-4 text-left"><div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center"><span class="material-icons-outlined text-slate-400 text-left">shopping_bag</span></div><div><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Avg Order Value</p><h4 class="text-xl font-black text-slate-900 text-left">₹18.2K</h4><p class="text-[8px] font-black text-slate-300 uppercase mt-1 text-left">vs ₹16.4K last month</p></div></div><div class="card p-6 space-y-4 text-left"><div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center"><span class="material-icons-outlined text-slate-400 text-left">category</span></div><div><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Top Category</p><h4 class="text-xl font-black text-slate-900 text-left">Smartphones</h4></div></div></div><section class="space-y-4 text-left"><div class="flex justify-between items-center px-1"><h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Daily Sales List</h3><button class="text-[8px] font-black text-slate-900 uppercase border-b border-slate-900">Export CSV</button></div><div class="space-y-3 text-left">${[{d:"Today, 24 Oct",c:"14 Orders",v:"₹1.42L",p:"+4.2%"},{d:"Yesterday, 23 Oct",c:"11 Orders",v:"₹1.18L",p:"-2.1%"},{d:"22 Oct",c:"18 Orders",v:"₹2.33L",p:"+1.8%"}].map(e=>`<div class="card p-5 group hover:bg-slate-50 transition-all cursor-pointer flex justify-between items-center"><div class="text-left"><h4 class="text-sm font-black text-slate-900 text-left">${e.d}</h4><p class="text-[10px] font-bold text-slate-400 capitalize -mt-0.5 text-left">${e.c}</p></div><div class="text-right"><p class="text-sm font-black text-slate-900 text-right">${e.v}</p><p class="text-[9px] font-black ${e.p.startsWith("+")?"text-green-500":"text-red-500"} uppercase text-right">${e.p}</p></div></div>`).join("")}</div></section>`}function Od(){return`<div class="grid grid-cols-2 gap-4 text-left"><div class="card p-6 space-y-3 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Blocked Capital</p><h3 class="text-xl font-black text-slate-900 text-left">₹84.2L</h3><p class="text-[8px] font-black text-red-500 uppercase flex items-center gap-1 text-left"><span class="animate-pulse">●</span> +2.4% vs last mo.</p></div><div class="card p-6 space-y-3 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Ageing > 90D</p><h3 class="text-xl font-black text-slate-900 text-left">124 <span class="text-[10px] font-bold text-slate-400 uppercase text-left">Units</span></h3><p class="text-[8px] font-black text-green-500 uppercase text-left">12.1% of total stock</p></div></div><div class="card p-8 space-y-6 text-left"><div class="flex justify-between items-center mb-2 text-left"><h3 class="text-[10px] font-black text-slate-900 uppercase tracking-widest text-left">Stock Distribution</h3><span class="material-icons-outlined text-slate-300 text-sm">info</span></div><div class="flex items-center gap-10 text-left"><div class="relative w-32 h-32 flex items-center justify-center text-left"><svg class="w-full h-full transform -rotate-90"><circle cx="64" cy="64" r="54" stroke="#f8fafc" stroke-width="20" fill="transparent" /><circle cx="64" cy="64" r="54" stroke="#0f172a" stroke-width="20" stroke-dasharray="340" stroke-dashoffset="100" fill="transparent" stroke-linecap="round" /></svg><div class="absolute text-center"><p class="text-[8px] font-black text-slate-400 uppercase leading-none mb-1 text-left">Total</p><p class="text-xl font-black tracking-tighter text-left">1,024</p></div></div><div class="flex-1 space-y-3 text-left">${[{l:"Apple",p:"45%",c:"bg-slate-900"},{l:"OnePlus",p:"25%",c:"bg-slate-500"},{l:"Samsung",p:"15%",c:"bg-slate-300"},{l:"Others",p:"15%",c:"bg-slate-100"}].map(e=>`<div class="flex items-center justify-between text-left"><div class="flex items-center gap-2 text-left"><div class="w-2 h-2 rounded-full ${e.c}"></div><span class="text-[10px] font-black text-slate-500 text-left">${e.l}</span></div><span class="text-[10px] font-black text-slate-900 text-right">${e.p}</span></div>`).join("")}</div></div></div><section class="space-y-4 text-left"><div class="flex justify-between items-center px-1 text-left"><h3 class="text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Low Stock Alerts</h3><span class="bg-red-50 text-red-500 text-[8px] font-black px-2 py-0.5 rounded uppercase text-left">5 Critical</span></div><div class="space-y-3 text-left">${[{n:"iPhone 15 Pro - 256GB",s:"SKU: APP-15P-256-NG",q:"2 Left",r:"Reorder pt: 5"},{n:"Watch Series 9 - 45mm",s:"SKU: APP-W9-45-ST",q:"0 Left",r:"Reorder pt: 3"},{n:"AirPods Pro (2nd Gen)",s:"SKU: APP-AP2-MGS",q:"8 Left",r:"Reorder pt: 10"}].map(e=>`<div class="card p-5 relative group hover:border-slate-300 transition-all cursor-pointer flex justify-between items-start text-left"><div><h4 class="text-sm font-black text-slate-900 text-left">${e.n}</h4><p class="text-[9px] font-bold text-slate-400 uppercase mt-0.5 text-left">${e.s}</p></div><div class="text-right"><p class="text-xs font-black text-red-500 uppercase text-right">${e.q}</p><p class="text-[8px] font-bold text-slate-300 uppercase mt-0.5 text-right">${e.r}</p></div></div>`).join("")}</div><button class="w-full py-4 text-[9px] font-black text-slate-300 uppercase underline decoration-slate-200 underline-offset-8 text-left">View All Alerts</button></section>`}function Pd(){return'<section class="space-y-6 text-left"><h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Campaign Performance</h3><div class="card p-8 space-y-6 text-left"><div class="flex justify-between items-start text-left"><div><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Campaign Conversion Rate</p><h2 class="text-4xl font-black tracking-tighter text-slate-900 text-left">24.8%</h2></div><span class="bg-green-50 text-green-500 text-[8px] font-black px-2 py-1 rounded-lg text-left">+3.2%</span></div><div class="space-y-3 text-left"><div class="h-2.5 w-full bg-slate-50 rounded-full overflow-hidden text-left"><div class="h-full bg-blue-500 rounded-full shadow-inner text-left" style="width: 24.8%"></div></div><p class="text-[9px] font-bold text-slate-400 italic text-left">Derived from pre-booking landing pages</p></div></div><div class="card p-8 space-y-6 text-left"><div class="flex justify-between items-center text-left"><p class="text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">AI Image Usage</p><span class="material-symbols-outlined text-slate-200 text-xl text-left">grid_guides</span></div><div class="flex items-center justify-between text-left"><h2 class="text-5xl font-black tracking-tighter text-slate-900 text-left">1,284</h2><div class="flex flex-col items-end gap-1 text-left"><div class="w-24 h-2 bg-slate-50 rounded-full overflow-hidden border border-slate-100/50 text-left"><div class="h-full bg-slate-900 rounded-full text-left" style="width: 65%"></div></div><p class="text-[10px] font-black text-slate-300 tabular-nums text-left">65%</p></div></div></div><div class="space-y-4 text-left"><p class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Automation Metrics</p><div class="grid grid-cols-2 gap-4 text-left"><div class="card p-6 space-y-4 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Retention Rate</p><h4 class="text-2xl font-black text-slate-900 tracking-tighter text-left">88.4%</h4><div class="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden text-left"><div class="h-full bg-indigo-500 text-left" style="width: 88.4%"></div></div></div><div class="card p-6 space-y-4 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Upsell Conv.</p><h4 class="text-2xl font-black text-slate-900 tracking-tighter text-left">12.5%</h4><div class="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden text-left"><div class="h-full bg-green-500 text-left" style="width: 12.5%"></div></div></div></div></div></section>'}function Mn(e){const t={overview:{t:"Reports",s:"Business Intelligence"},sales:{t:"Sales",s:"Deep-Dive Analytics"},inventory:{t:"Inventory",s:"Stock & Logistics"},marketing:{t:"Marketing",s:"Campaign Insights"}},s={overview:Ld(),sales:jd(),inventory:Od(),marketing:Pd()};if(e==="desktop-primary")return`
            ${Va(t.overview.t,t.overview.s)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${s.overview}
            </div>
        `;if(e==="desktop-secondary"){const n=d.reportsTab==="overview"?"sales":d.reportsTab;return`
            ${Va(t[n].t,t[n].s,["sales","inventory","marketing"])}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${s[n]}
            </div>
        `}const a=t[d.reportsTab]||t.overview;return`
        ${Va(a.t,a.s,["overview","sales","inventory","marketing"])}
        <div class="scrolling-content px-8 space-y-8 pb-12">
            ${s[d.reportsTab]}
        </div>
    `}const Ua=(e,t,s="",a=!1)=>`
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
                <button onclick="setRepairTab('active')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${d.repairTab==="active"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">Active Jobs</button>
                <button onclick="setRepairTab('history')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${d.repairTab==="history"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">History</button>
            </div>
        `:""}
    </header>
`;window.setRepairCustomer=(e,t)=>{d.repairContext={customer_name:e,customer_phone:t},I()};function Nd(){const e=document.getElementById("repair-search-input"),t=e?e.value.trim():"",s=window.getCache?window.getCache():{customers:[]},a=t?s.customers.filter(n=>n.name.toLowerCase().includes(t.toLowerCase())||n.phone.includes(t)):[];return`
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
    `}async function qd(){const e=d.repairContext||{customer_name:"Walk-in",customer_phone:""},t=document.getElementById("repair-device").value,s=document.getElementById("repair-issue").value,a=document.getElementById("repair-cost").value;if(!t||!s){alert("Device and Issue are required.");return}const n=document.getElementById("create-job-btn");n.disabled=!0,n.innerText="Creating...";try{const l="REP-"+Math.random().toString(36).substr(2,6).toUpperCase();await T.repairs.add({id:l,customer_name:e.customer_name,phone:e.customer_phone,device:t,issue:s,status:"COLLECTED",job_sheet_no:l,estimated_cost:a||"0",assigned_to:"Unassigned",created_at:new Date().toISOString()}),await J(),window.setActiveRepairJob(l),window.setRepairMode("status")}catch(l){alert("Error creating job: "+l.message),n.disabled=!1,n.innerText="Create Job Sheet"}}window.createJobSheet=qd;window.setActiveRepairJob=e=>{d.activeRepairId=e};function Bd(){const e=d.repairContext||{customer_name:"New Walk-in",customer_phone:""};return`
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
    `}async function Fd(e){if(d.activeRepairId)try{await T.repairs.updateStatus(d.activeRepairId,e),await J()}catch(t){alert("Update failed: "+t.message)}}window.updateRepairStatus=Fd;function Vd(){const e=window.getCache(),t=e.repairs.find(n=>n.id===d.activeRepairId)||e.repairs[0];if(!t)return'<div class="p-20 text-center opacity-30 text-[10px] font-black uppercase">No active job selected</div>';const s=[{l:"Collected",s:"COLLECTED",i:"done"},{l:"Sent to Brand",s:"SENT_TO_BRAND",i:"shipping"},{l:"At Service Center",s:"IN_REPAIR",i:"build"},{l:"Ready for Pickup",s:"READY",i:"check_circle"},{l:"Handed Over",s:"COMPLETED",i:"person"}],a=s.findIndex(n=>n.s===t.status);return`
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
                    ${s.map((n,l)=>{const r=l<=a,o=l===a;return`
                        <div class="flex items-start gap-8 relative text-left">
                            <div class="w-5 h-5 rounded-full flex items-center justify-center z-10 shrink-0 text-left ${r?"bg-blue-500 text-white":"bg-slate-100 border border-slate-200"}">
                                <span class="material-icons-outlined text-[12px] font-black text-left">${r?"done":""}</span>
                            </div>
                            <div class="text-left ${r?"":"opacity-30"}">
                                <h4 class="text-xs font-black text-slate-900 text-left ${o?"text-blue-500 underline underline-offset-4":""}">${n.l}</h4>
                                <p class="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-tighter text-left">
                                    ${o?"CURRENT STATUS":r?"COMPLETED":"PENDING"}
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
    `}function ml(){const t=window.getCache().repairs||[];return`
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
    `}function Dn(e){const t={search:{t:"RetailerOS",s:"Repairs Management",txn:null},intake:{t:"Device Intake",s:"Repair Management",txn:"TXN-4920"},status:{t:"Job ID: #REP-2024",s:"Repair Assignment",badge:"ACTIVE"},history:{t:"Job History",s:"Service Records",badge:null}},s={search:Nd(),intake:Bd(),status:Vd()};if(e==="desktop-primary")return`
            ${Ua(t.search.t,t.search.s,'<button class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900"><span class="material-icons-outlined text-xl">notifications</span></button>',!0)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${d.repairTab==="active"?s.search:ml()}
            </div>
        `;if(e==="desktop-secondary"){const r=d.repairViewMode==="search"?"status":d.repairViewMode,o=t[r],p=r==="intake"?`<span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded">${o.txn}</span>`:`<span class="bg-blue-50 text-blue-600 text-[8px] font-black px-2 py-1 rounded-full">${o.badge}</span>`;return`
            ${Ua(o.t,o.s,p)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${d.repairTab==="history"?'<div class="card p-8 bg-slate-50 border-dashed border-2 border-slate-200 text-center py-20"><span class="material-icons-outlined text-4xl text-slate-200 mb-4">analytics</span><p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">Select a job card on the left<br>to view full service details.</p></div>':s[r]}
            </div>
        `}const a=d.repairTab==="history"?"history":d.repairViewMode,n=t[a],l=a==="intake"?`<span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded">${n.txn}</span>`:a==="status"?`<span class="bg-blue-50 text-blue-600 text-[8px] font-black px-2 py-1 rounded-full">${n.badge}</span>`:'<button class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900"><span class="material-icons-outlined text-xl">notifications</span></button>';return`
        ${Ua(n.t,n.s,l,!0)}
        <div class="scrolling-content px-8 space-y-8 pb-12">
            ${d.repairTab==="history"?ml():s[d.repairViewMode]}
        </div>
    `}function Ud(){return`
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
    `}function Hd(){return`
        ${Ud()}
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
    `}function Gd(){return`
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
    `}function Ln(e){return e==="desktop-secondary"?Gd():Hd()}function Wd(){return`
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
    `}function zd(){return`
        ${Wd()}
        <div class="scrolling-content px-4 sm:px-8 space-y-3 pb-32">
            
            <!-- Card 1 -->
            <div onclick="setPromoterViewMode('performance')" class="card p-4 flex items-center justify-between group cursor-pointer border-2 transition-all ${d.promoterViewMode==="performance"?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
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
    `}function Yd(){return`
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
    `}function Jd(){return`
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
    `}function jn(e){const t=e==="desktop-secondary";return window.setPromoterViewMode=s=>{d.promoterViewMode=s,I()},t?d.promoterViewMode==="onboarding"?Yd():Jd():zd()}function Kd(){return`
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
                 <button onclick="setInventoryTab('brands')" class="flex-1 py-3 ${d.inventoryTab==="brands"?"bg-white shadow-sm text-slate-900":"text-slate-400"} text-[10px] font-black uppercase rounded-lg transition-all">Brands</button>
                 <button onclick="setInventoryTab('categories')" class="flex-1 py-3 ${d.inventoryTab==="categories"?"bg-white shadow-sm text-slate-900":"text-slate-400"} text-[10px] font-black uppercase rounded-lg transition-all">Category</button>
            </div>
        </header>
    `}function Qd(){return`
        <div class="scrolling-content px-6 space-y-4 pb-32">
             <!-- Apple -->
            <div onclick="setInventoryMode('details')" class="card p-5 border-2 transition-all cursor-pointer group bg-white ${d.inventoryMode==="details"?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
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
    `}function Xd(){const s=((window.getCache?window.getCache():{products:[]}).products||[]).reduce((r,o)=>{const p=o.category||"Uncategorized";r[p]||(r[p]={count:0,blocked:0,margin:0,icon:"category"}),r[p].count+=parseInt(o.stock)||0;const c=parseInt(o.price)||0,u=c*.9;return r[p].blocked+=(parseInt(o.stock)||0)*u,r[p].margin+=(c-u)*(parseInt(o.stock)||0),p.toLowerCase().includes("phone")?r[p].icon="smartphone":p.toLowerCase().includes("tablet")?r[p].icon="tablet_mac":p.toLowerCase().includes("audio")&&(r[p].icon="headphones"),r},{}),a=Object.keys(s),n=Object.values(s).reduce((r,o)=>r+o.blocked,0),l=Object.values(s).reduce((r,o)=>r+o.margin,0);return`
        < div class="scrolling-content px-6 space-y-4 pb-32" >
            <div class="text-left mb-2 px-2">
                <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest border-l-2 border-slate-900 pl-2 text-left">INVENTORY > OVERVIEW</p>
                <h2 class="text-lg font-black text-slate-900 mt-1 text-left">Category Breakdown</h2>
            </div>

            ${a.length===0?`
                <div class="p-10 text-center opacity-30">
                    <p class="text-[10px] font-black uppercase tracking-widest">No inventory data available</p>
                </div>
            `:a.map(r=>{const o=s[r];return`
                <div onclick="state.activeCategory='${r}'; setInventoryMode('details')" class="card p-5 border-2 transition-all cursor-pointer group bg-white flex items-center justify-between border-transparent hover:border-slate-200 text-left">
                    <div class="flex items-center gap-4 text-left">
                        <div class="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600"><span class="material-icons-outlined text-lg">${o.icon}</span></div>
                        <div class="text-left">
                            <h3 class="text-sm font-black text-slate-900 text-left">${r}</h3>
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-wide text-left">STOCK COUNT: ${o.count}</p>
                        </div>
                    </div>
                     <span class="material-icons-outlined text-slate-300">chevron_right</span>
                </div>
                <div class="grid grid-cols-2 gap-4 px-2 -mt-2 mb-4 text-left">
                    <div class="text-left">
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 text-left">BLOCKED CAPITAL</p>
                        <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">₹${o.blocked.toLocaleString()}</h4>
                    </div>
                     <div class="text-right">
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5 text-right">EXPECTED MARGIN</p>
                        <h4 class="text-sm font-black text-green-500 tracking-tight text-right">₹${o.margin.toLocaleString()}</h4>
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
    `}async function Zd(){const e=document.getElementById("inward-model").value,t=document.getElementById("inward-imei").value;if(document.getElementById("inward-sn").value,!e||!t){alert("Model name and IMEI are required.");return}const s=document.getElementById("confirm-inward-btn");s.disabled=!0,s.innerText="Syncing...";try{const a=await T.query("SELECT * FROM products WHERE name = ?",[e]);let n=1;if(a.length>0)n=parseInt(a[0].stock)+1,await T.query("UPDATE products SET stock = ? WHERE id = ?",[n,a[0].id]);else{const l="PRD-"+Math.random().toString(36).substr(2,6).toUpperCase();await T.query(`
                INSERT INTO products (id, name, category, brand, price, stock, imei)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `,[l,e,"Smartphone",e.split(" ")[0],5e4,1,t])}await T.inventoryLogs.add({id:"LOG-"+Math.random().toString(36).substr(2,6).toUpperCase(),product_id:e,type:"INWARD",quantity:1,reason:"New Shipment Arrival",date:new Date().toISOString()}),await J(),window.setInventoryMode("details")}catch(a){alert("Inward failed: "+a.message),s.disabled=!1,s.innerText="Confirm Inward"}}window.confirmInward=Zd;function ep(){return`
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
    `}function tp(){const t=(window.getCache?window.getCache():{products:[]}).products||[];return`
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
                `:t.map(s=>{const a=parseInt(s.stock)||0,n=parseInt(s.price)||0,l=n*1.1,r=n*.9,o=a*r,p=(n-r)*a;return`
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
                                <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">₹${o.toLocaleString()}</h4>
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
                                <p class="text-[9px] font-black text-slate-900">₹${r.toLocaleString()}</p>
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
    `}function On(e){const t=e==="desktop-secondary";return window.setInventoryTab=s=>{d.inventoryTab=s,I()},window.setInventoryMode=s=>{d.inventoryMode=s,I()},t?d.inventoryMode==="inward"?ep():tp():`
        <div class="h-full flex flex-col relative bg-white">
            ${Kd()}
            ${d.inventoryTab==="brands"?Qd():Xd()}
        </div>
    `}function sp(e){return`
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
                        ${[{n:"Roles",i:"admin_panel_settings",k:"roles"},{n:"Finance",i:"account_balance",k:"accounting"},{n:"Ledger",i:"menu_book",k:"ledger"},{n:"Store",i:"store",k:"store"},{n:"Security",i:"security",k:"security"},{n:"Alerts",i:"notifications",k:"alerts"},{n:"Taxes",i:"percent",k:"taxes"},{n:"Plugins",i:"grid_view",k:"plugins"},{n:"Teams",i:"hub",k:"teams"},{n:"Logs",i:"history",k:"logs"},{n:"Lang",i:"language",k:"lang"},{n:"Backup",i:"cloud_upload",k:"backup"},{n:"Bills",i:"description"},{n:"AI Config",i:"smart_toy",k:"ai"},{n:"Updates",i:"update",k:"updates"},{n:"API",i:"key"},{n:"Theme",i:"palette",k:"theme"},{n:"Help",i:"support",k:"help"}].map(n=>`
                            <button onclick="${n.k?`window.setSettingsView('${n.k}')`:""}" class="aspect-square flex flex-col items-center justify-center p-1.5 hover:bg-slate-50 transition-all text-center ${d.settingsView===n.k?"bg-slate-100":""}">
                                <span class="material-icons-outlined text-xl ${d.settingsView===n.k?"text-slate-900 font-bold":"text-slate-500"} mb-1 text-center">${n.i}</span>
                                <span class="text-[7px] font-black uppercase text-center tracking-wider leading-tight ${d.settingsView===n.k?"text-slate-900":"text-slate-500"}">${n.n}</span>
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
    `}function ap(){const e=d.settingsSubView==="add",t=d.settingsActiveRole||"Store Manager";return`
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
    `}function np(){return`
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
    `}function lp(){return`
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
    `}function ip(){const e=localStorage.getItem("openai_api_key")||"";return e?e.substring(0,7)+"..."+e.substring(e.length-4):""}window.saveOpenAIKey=()=>{var s;const e=document.getElementById("openai-key-input"),t=(s=e==null?void 0:e.value)==null?void 0:s.trim();if(!t){window.toast.warning("Please enter an API key");return}if(!t.startsWith("sk-")){window.toast.error('Invalid API key format. OpenAI keys start with "sk-"');return}localStorage.setItem("openai_api_key",t),window.toast.success("API key saved successfully!"),window.triggerRender()};window.removeOpenAIKey=()=>{window.showConfirm("Remove OpenAI API key? AI features will fall back to local processing.",()=>{localStorage.removeItem("openai_api_key"),window.toast.info("API key removed"),window.triggerRender()})};window.testOpenAIKey=async()=>{var s;const e=localStorage.getItem("openai_api_key");if(!e){window.toast.warning("No API key configured");return}const t=document.getElementById("test-key-btn");t&&(t.disabled=!0,t.innerHTML='<span class="material-icons-outlined text-sm animate-spin">sync</span> Testing...');try{const a=await fetch("https://api.openai.com/v1/models",{headers:{Authorization:`Bearer ${e}`}});if(a.ok)window.toast.success("API key is valid and working!");else{const n=await a.json();window.toast.error("API key test failed: "+(((s=n.error)==null?void 0:s.message)||"Unknown error"))}}catch(a){window.toast.error("Connection error: "+a.message)}finally{t&&(t.disabled=!1,t.innerHTML='<span class="material-icons-outlined text-sm">play_arrow</span> Test Connection')}};function rp(){const e=!!localStorage.getItem("openai_api_key"),t=ip();return`
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
    `}function op(){var n;const e=d.settingsSubView==="edit",t=window.getCache(),s=localStorage.getItem("retaileros_retailer_id"),a=((n=t.retailers)==null?void 0:n.find(l=>l.id===s))||null;return a?`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <!-- Header -->
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-6 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                        <span class="material-icons-outlined text-left">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                    </button>
                    <div class="text-center translate-x-1">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900 text-center">Store Profile</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Business Information</p>
                    </div>
                    <button onclick="window.setSettingsSubView('${e?null:"edit"}')" class="p-2 text-slate-400 hover:text-slate-900 text-left">
                        <span class="material-symbols-outlined text-xl text-left">${e?"close":"edit"}</span>
                    </button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">

                <!-- Store Header Card -->
                <div class="p-6 border-b border-slate-100 text-left">
                    <div class="card p-6 border-2 border-slate-900 shadow-xl text-left">
                        <div class="flex items-start gap-4 text-left">
                            <div class="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 text-left">
                                <span class="material-icons-outlined text-3xl text-white text-left">store</span>
                            </div>
                            <div class="flex-1 min-w-0 text-left">
                                <h3 class="text-lg font-black text-slate-900 mb-1 truncate text-left">${a.retailer_name||"Store Name"}</h3>
                                <p class="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 text-left">${a.retailer_code||"N/A"}</p>
                                <div class="flex items-center gap-2 text-left">
                                    <span class="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[8px] font-black uppercase text-left">${a.status||"Active"}</span>
                                    <span class="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-[8px] font-black uppercase text-left">${a.retailer_category||"Retailer"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Business Information -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Business Information
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        ${B("Contact Person",a.contact_person||"N/A","person")}
                        ${B("Email",a.email||"N/A","email")}
                        ${B("Mobile",a.mobile_number||"N/A","phone")}
                        ${B("Phone",a.phone_number||"N/A","call")}
                    </div>
                </div>

                <!-- Address Information -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Address
                    </p>

                    <div class="card p-4 border-slate-100 text-left">
                        <div class="space-y-2 text-left">
                            <p class="text-sm font-bold text-slate-900 text-left">${a.address_line_1||"N/A"}</p>
                            ${a.address_line_2?`<p class="text-sm font-bold text-slate-700 text-left">${a.address_line_2}</p>`:""}
                            <p class="text-xs text-slate-500 text-left">
                                ${a.area_name?a.area_name+", ":""}${a.city_name||"N/A"}, ${a.district_name||""} ${a.state_name||"N/A"} - ${a.pin_code||"N/A"}
                            </p>
                            <p class="text-xs font-bold text-slate-400 text-left">${a.country_name||"India"}</p>
                        </div>
                    </div>
                </div>

                <!-- Financial Information -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Financial Details
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        ${B("GST Number",a.vat_number||"N/A","receipt_long")}
                        ${B("PAN Number",a.pan_number||"N/A","credit_card")}
                    </div>
                </div>

                <!-- Bank Information -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Bank Details
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        ${B("Bank Name",a.bank_name||"N/A","account_balance")}
                        ${B("Account Holder",a.bank_account_holder||"N/A","person")}
                        ${B("Account Number",a.bank_account_number||"N/A","numbers")}
                        ${B("IFSC Code",a.bank_ifsc||"N/A","tag")}
                        ${B("Branch",a.bank_branch||"N/A","location_on")}
                    </div>
                </div>

                <!-- Hierarchy Information -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Hierarchy & Reporting
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        ${B("Parent Retailer",a.parent_retailer_name||"N/A","store")}
                        ${B("National Distributor",a.nd_name||"N/A","business")}
                        ${B("Regional Distributor",a.rds_name||"N/A","corporate_fare")}
                        ${B("Salesman",a.salesman_name||"N/A","badge")}
                        ${B("Reporting To",a.reporting_to_name||"N/A","supervisor_account")}
                    </div>
                </div>

                <!-- Business Metrics -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Business Metrics
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                        ${B("CSA on Counter",a.csa_on_counter||"N/A","groups")}
                        ${B("Potential Volume",a.counter_potential_volume||"N/A","inventory")}
                        ${B("Potential Value",a.counter_potential_value||"N/A","payments")}
                    </div>
                </div>

                <!-- Category & Classification -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Category & Classification
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                        ${B("Category",a.retailer_category||"N/A","category")}
                        ${B("Category 1",a.retailer_category1||"N/A","label")}
                        ${B("Classification",a.retailer_classification||"N/A","stars")}
                    </div>
                </div>

                <!-- Additional Information -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Additional Information
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        ${B("Date of Birth",a.dob?new Date(a.dob).toLocaleDateString():"N/A","cake")}
                        ${B("Creation Date",a.creation_date?new Date(a.creation_date).toLocaleDateString():"N/A","event")}
                        ${B("Onboarded At",a.onboarded_at?new Date(a.onboarded_at).toLocaleDateString():"N/A","schedule")}
                    </div>

                    ${a.approval_remarks?`
                        <div class="card p-4 bg-blue-50 border-blue-200 text-left">
                            <p class="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-2 text-left">Approval Remarks</p>
                            <p class="text-xs text-blue-900 text-left">${a.approval_remarks}</p>
                        </div>
                    `:""}
                </div>

                ${e?`
                    <!-- Edit Mode Actions -->
                    <div class="p-6 border-t border-slate-200 text-left">
                        <button onclick="window.toast.info('Edit functionality coming soon!')" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform text-center">
                            Save Changes
                        </button>
                    </div>
                `:""}
            </div>
        </div>
    `:`
            <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
                <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                    <div class="flex items-center justify-between mb-6 text-left">
                        <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                            <span class="material-icons-outlined text-left">chevron_left</span>
                            <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">Back</span>
                        </button>
                        <div class="text-center translate-x-1">
                            <h2 class="text-xl font-black tracking-tighter text-slate-900 text-center">Store Profile</h2>
                            <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">Business Information</p>
                        </div>
                        <div class="w-8"></div>
                    </div>
                </header>

                <div class="flex-1 overflow-y-auto custom-scrollbar p-6 flex items-center justify-center text-center">
                    <div class="animate-pulse">
                        <div class="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span class="material-icons-outlined text-3xl text-slate-300">store</span>
                        </div>
                        <p class="text-sm font-black text-slate-400">Loading store information...</p>
                        <p class="text-[9px] text-slate-300 mt-2">Please wait</p>
                    </div>
                </div>
            </div>
        `}function B(e,t,s){return`
        <div class="card p-3 border-slate-100 text-left">
            <div class="flex items-center gap-2 mb-1 text-left">
                <span class="material-icons-outlined text-slate-400 text-sm text-left">${s}</span>
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">${e}</p>
            </div>
            <p class="text-sm font-bold text-slate-900 truncate text-left">${t}</p>
        </div>
    `}function cp(){const e=(()=>{var a;const t=window.getCache(),s=localStorage.getItem("retaileros_retailer_id");return((a=t.retailers)==null?void 0:a.find(n=>n.id===s))||{}})();return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900 text-left">Security</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Access & Protection</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Store PIN -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> Store PIN
                    </p>
                    <div class="card p-4 flex items-center justify-between text-left">
                        <div class="flex items-center gap-3 text-left">
                            <div class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                                <span class="material-icons-outlined text-indigo-500">pin</span>
                            </div>
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">4-Digit Access PIN</p>
                                <p class="text-[9px] font-bold text-slate-400">Last changed 30 days ago</p>
                            </div>
                        </div>
                        <button onclick="window.toast.info('PIN management coming soon')" class="px-4 py-2 bg-slate-50 rounded-lg text-[8px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-100 transition-all">Change</button>
                    </div>
                </div>

                <!-- Two-Factor Authentication -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Two-Factor Authentication
                    </p>
                    <div class="card p-4 space-y-4 text-left">
                        <div class="flex items-center justify-between text-left">
                            <div class="flex items-center gap-3 text-left">
                                <div class="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-green-500">verified_user</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">OTP on Login</p>
                                    <p class="text-[9px] font-bold text-slate-400">SMS to ${e.mobile_number||"••••••••••"}</p>
                                </div>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full peer-focus:ring-2 peer-focus:ring-green-300 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="flex items-center justify-between text-left">
                            <div class="flex items-center gap-3 text-left">
                                <div class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-blue-500">email</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">Email Verification</p>
                                    <p class="text-[9px] font-bold text-slate-400">${e.email||"Not configured"}</p>
                                </div>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer">
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full peer-focus:ring-2 peer-focus:ring-green-300 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Session Management -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-amber-400 rounded-full"></span> Session Management
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Auto-Logout Timer</p>
                                <p class="text-[9px] font-bold text-slate-400">Automatically logout after inactivity</p>
                            </div>
                            <select class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-900 focus:outline-none">
                                <option>15 min</option>
                                <option selected>30 min</option>
                                <option>1 hour</option>
                                <option>4 hours</option>
                                <option>Never</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Remember Device</p>
                                <p class="text-[9px] font-bold text-slate-400">Skip 2FA on trusted devices</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Active Devices -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Active Devices
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="flex items-center gap-3 text-left">
                                <div class="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-green-500">computer</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">This Browser</p>
                                    <p class="text-[9px] font-bold text-green-500">Active Now</p>
                                </div>
                            </div>
                            <span class="text-[8px] font-bold text-slate-300 uppercase">Current</span>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="flex items-center gap-3 text-left">
                                <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-slate-400">smartphone</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">Mobile App</p>
                                    <p class="text-[9px] font-bold text-slate-400">Last active 2 hours ago</p>
                                </div>
                            </div>
                            <button onclick="window.toast.info('Device revoked')" class="px-3 py-1.5 bg-red-50 text-red-500 rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-red-100 transition-all">Revoke</button>
                        </div>
                    </div>
                </div>

                <!-- Login History -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Recent Login History
                    </p>
                    <div class="space-y-2 text-left">
                        ${[{time:"Today, 10:30 AM",device:"Chrome / macOS",ip:"192.168.1.x",status:"success"},{time:"Yesterday, 6:15 PM",device:"Safari / iPhone",ip:"49.36.xx.xx",status:"success"},{time:"Yesterday, 2:00 PM",device:"Chrome / Windows",ip:"103.xx.xx.xx",status:"failed"},{time:"3 days ago",device:"Chrome / macOS",ip:"192.168.1.x",status:"success"}].map(t=>`
                            <div class="flex items-center justify-between py-3 border-b border-slate-50 text-left">
                                <div class="text-left">
                                    <p class="text-[10px] font-bold text-slate-900">${t.device}</p>
                                    <p class="text-[8px] font-bold text-slate-400">${t.time} &middot; ${t.ip}</p>
                                </div>
                                <span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${t.status==="success"?"bg-green-50 text-green-500":"bg-red-50 text-red-500"}">${t.status}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.toast.info('Settings saved')" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform">
                        Save Security Settings
                    </button>
                </div>
            </div>
        </div>
    `}function dp(){const e=(()=>{var a;const t=window.getCache(),s=localStorage.getItem("retaileros_retailer_id");return((a=t.retailers)==null?void 0:a.find(n=>n.id===s))||{}})();return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Alerts</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Notifications & Reminders</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Notification Channels -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Notification Channels
                    </p>
                    <div class="space-y-3 text-left">
                        ${[{name:"WhatsApp",desc:`Messages to ${e.mobile_number||"••••••••••"}`,icon:"chat",color:"green",on:!0},{name:"SMS",desc:"Text alerts for critical events",icon:"sms",color:"blue",on:!1},{name:"Email",desc:e.email||"Not configured",icon:"email",color:"indigo",on:!0},{name:"Push Notifications",desc:"Browser & mobile push alerts",icon:"notifications_active",color:"amber",on:!0}].map(t=>`
                            <div class="card p-4 flex items-center justify-between text-left">
                                <div class="flex items-center gap-3 text-left">
                                    <div class="w-10 h-10 bg-${t.color}-50 rounded-xl flex items-center justify-center">
                                        <span class="material-icons-outlined text-${t.color}-500">${t.icon}</span>
                                    </div>
                                    <div class="text-left">
                                        <p class="text-xs font-black text-slate-900">${t.name}</p>
                                        <p class="text-[9px] font-bold text-slate-400">${t.desc}</p>
                                    </div>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" class="sr-only peer" ${t.on?"checked":""}>
                                    <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                                </label>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Inventory Alerts -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-red-400 rounded-full"></span> Inventory Alerts
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Low Stock Warning</p>
                                <p class="text-[9px] font-bold text-slate-400">Alert when product stock falls below threshold</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Low Stock Threshold</p>
                                <p class="text-[9px] font-bold text-slate-400">Minimum units before alert triggers</p>
                            </div>
                            <select class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-900 focus:outline-none">
                                <option>3 units</option>
                                <option selected>5 units</option>
                                <option>10 units</option>
                                <option>20 units</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Out of Stock Alert</p>
                                <p class="text-[9px] font-bold text-slate-400">Immediate alert when stock hits zero</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Sales Alerts -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Sales & Revenue
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Daily Sales Summary</p>
                                <p class="text-[9px] font-bold text-slate-400">End-of-day report via WhatsApp at 9 PM</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">High-Value Sale Alert</p>
                                <p class="text-[9px] font-bold text-slate-400">Notify when sale exceeds threshold</p>
                            </div>
                            <select class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-900 focus:outline-none">
                                <option>&#8377;10,000</option>
                                <option selected>&#8377;25,000</option>
                                <option>&#8377;50,000</option>
                                <option>&#8377;1,00,000</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">New Sale Notification</p>
                                <p class="text-[9px] font-bold text-slate-400">Real-time alert on every new sale</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer">
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Customer Alerts -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Customer Engagement
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Birthday Reminders</p>
                                <p class="text-[9px] font-bold text-slate-400">Get notified on customer birthdays</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Inactive Customer Alert</p>
                                <p class="text-[9px] font-bold text-slate-400">Flag customers with no purchase in 90 days</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Repair & Service -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-orange-400 rounded-full"></span> Repairs & Service
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Repair Status Change</p>
                                <p class="text-[9px] font-bold text-slate-400">Alert when repair job moves to next stage</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Installation Due</p>
                                <p class="text-[9px] font-bold text-slate-400">Reminder 1 day before scheduled installation</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.toast.info('Alert preferences saved')" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform">
                        Save Alert Preferences
                    </button>
                </div>
            </div>
        </div>
    `}function pp(){const e=(()=>{var n;const s=window.getCache(),a=localStorage.getItem("retaileros_retailer_id");return((n=s.retailers)==null?void 0:n.find(l=>l.id===a))||{}})(),t=(s,a)=>`
        <div class="flex items-center justify-between py-3 border-b border-slate-50 text-left">
            <div class="flex items-center gap-3 text-left">
                <div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center">
                    <span class="text-[10px] font-black text-slate-500">${a}%</span>
                </div>
                <p class="text-xs font-bold text-slate-900">${s}</p>
            </div>
            <select class="px-3 py-1.5 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                <option ${a===0?"selected":""}>0% (Exempt)</option>
                <option ${a===5?"selected":""}>5% GST</option>
                <option ${a===12?"selected":""}>12% GST</option>
                <option ${a===18?"selected":""}>18% GST</option>
                <option ${a===28?"selected":""}>28% GST</option>
            </select>
        </div>
    `;return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Taxes</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">GST & Tax Configuration</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- GST Registration -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> GST Registration
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        <div class="card p-3 text-left">
                            <div class="flex items-center gap-2 mb-1 text-left">
                                <span class="material-icons-outlined text-slate-400 text-sm">receipt_long</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">GSTIN</p>
                            </div>
                            <input type="text" value="${e.vat_number||""}" placeholder="e.g. 27AABCT1234F1Z5" class="w-full text-sm font-bold text-slate-900 bg-transparent border-0 p-0 focus:outline-none placeholder-slate-300">
                        </div>
                        <div class="card p-3 text-left">
                            <div class="flex items-center gap-2 mb-1 text-left">
                                <span class="material-icons-outlined text-slate-400 text-sm">credit_card</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">PAN Number</p>
                            </div>
                            <input type="text" value="${e.pan_number||""}" placeholder="e.g. AABCT1234F" class="w-full text-sm font-bold text-slate-900 bg-transparent border-0 p-0 focus:outline-none placeholder-slate-300">
                        </div>
                        <div class="card p-3 text-left">
                            <div class="flex items-center gap-2 mb-1 text-left">
                                <span class="material-icons-outlined text-slate-400 text-sm">location_on</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">State</p>
                            </div>
                            <p class="text-sm font-bold text-slate-900">${e.state_name||"Not set"}</p>
                        </div>
                        <div class="card p-3 text-left">
                            <div class="flex items-center gap-2 mb-1 text-left">
                                <span class="material-icons-outlined text-slate-400 text-sm">category</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Registration Type</p>
                            </div>
                            <select class="w-full text-sm font-bold text-slate-900 bg-transparent border-0 p-0 focus:outline-none">
                                <option selected>Regular</option>
                                <option>Composition</option>
                                <option>Unregistered</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Tax Rates by Category -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Tax Rates by Category
                    </p>
                    <div class="card p-4 space-y-1 text-left">
                        ${t("Smartphones",18)}
                        ${t("Laptops & Tablets",18)}
                        ${t("Audio & Wearables",18)}
                        ${t("Television",28)}
                        ${t("Air Conditioners",28)}
                        ${t("Appliances (Washing Machine, Fridge)",28)}
                        ${t("Accessories & Cables",18)}
                        ${t("Services & Repairs",18)}
                    </div>
                </div>

                <!-- HSN/SAC Codes -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-green-400 rounded-full"></span> HSN / SAC Codes
                    </p>
                    <div class="card p-4 space-y-1 text-left">
                        ${[{cat:"Mobile Phones",hsn:"8517"},{cat:"Laptops",hsn:"8471"},{cat:"Headphones & Audio",hsn:"8518"},{cat:"Television",hsn:"8528"},{cat:"Air Conditioners",hsn:"8415"},{cat:"Washing Machines",hsn:"8450"},{cat:"Refrigerators",hsn:"8418"},{cat:"Repair Services",hsn:"9987"}].map(s=>`
                            <div class="flex items-center justify-between py-3 border-b border-slate-50 text-left">
                                <p class="text-xs font-bold text-slate-900">${s.cat}</p>
                                <input type="text" value="${s.hsn}" class="w-20 text-right px-2 py-1 bg-slate-50 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none focus:bg-white focus:ring-1 focus:ring-slate-200">
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Invoice Settings -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-amber-400 rounded-full"></span> Invoice Configuration
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Show Tax Breakdown</p>
                                <p class="text-[9px] font-bold text-slate-400">Display CGST + SGST split on invoices</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Tax Inclusive Pricing</p>
                                <p class="text-[9px] font-bold text-slate-400">Product prices already include GST</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Invoice Prefix</p>
                                <p class="text-[9px] font-bold text-slate-400">Prefix for invoice numbers</p>
                            </div>
                            <input type="text" value="${(e.retailer_code||"ROS").split("-")[0]}-INV-" class="w-28 text-right px-3 py-2 bg-slate-50 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none focus:bg-white focus:ring-1 focus:ring-slate-200">
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">E-Invoice (IRN)</p>
                                <p class="text-[9px] font-bold text-slate-400">Enable e-invoicing via NIC portal</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer">
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.toast.info('Tax settings saved')" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform">
                        Save Tax Configuration
                    </button>
                </div>
            </div>
        </div>
    `}function up(){const e=[{name:"WhatsApp Business",desc:"Send automated messages, invoices & reminders to customers via WhatsApp Business API.",icon:"chat",color:"green",status:"connected",badge:"Active"},{name:"Tally Integration",desc:"Auto-sync sales, expenses & GST data directly into Tally ERP for seamless accounting.",icon:"calculate",color:"blue",status:"available",badge:"Connect"},{name:"Razorpay Payments",desc:"Accept UPI, cards, net banking & wallets. Auto-reconcile payments with sales records.",icon:"account_balance_wallet",color:"indigo",status:"available",badge:"Connect"},{name:"PhonePe POS",desc:"QR-based payments at counter. Instant settlement and daily reconciliation reports.",icon:"qr_code_scanner",color:"purple",status:"available",badge:"Connect"},{name:"MSG91 SMS",desc:"Transactional SMS for OTPs, invoices, payment confirmations & promotional campaigns.",icon:"sms",color:"amber",status:"available",badge:"Connect"},{name:"Thermal Printer",desc:"Connect Bluetooth or USB receipt printers for instant POS invoice printing.",icon:"print",color:"slate",status:"available",badge:"Setup"},{name:"Google Sheets",desc:"Export daily sales, inventory & customer data to Google Sheets automatically.",icon:"table_chart",color:"green",status:"available",badge:"Connect"},{name:"Shiprocket",desc:"Ship products to customers with tracking. Auto-generate shipping labels from sales.",icon:"local_shipping",color:"orange",status:"available",badge:"Connect"}];return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Plugins</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Integrations & Extensions</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Connected -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Connected
                    </p>
                    <div class="space-y-3 text-left">
                        ${e.filter(t=>t.status==="connected").map(t=>`
                            <div class="card p-5 border-green-100 bg-green-50/30 text-left">
                                <div class="flex items-start justify-between text-left">
                                    <div class="flex items-start gap-4 text-left">
                                        <div class="w-12 h-12 bg-${t.color}-100 rounded-2xl flex items-center justify-center shrink-0">
                                            <span class="material-icons-outlined text-${t.color}-500 text-xl">${t.icon}</span>
                                        </div>
                                        <div class="text-left">
                                            <p class="text-sm font-black text-slate-900">${t.name}</p>
                                            <p class="text-[10px] font-bold text-slate-500 mt-1 leading-relaxed">${t.desc}</p>
                                        </div>
                                    </div>
                                    <span class="shrink-0 ml-3 text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-green-100 text-green-600">${t.badge}</span>
                                </div>
                                <div class="flex gap-2 mt-4 pl-16 text-left">
                                    <button onclick="window.toast.info('Plugin settings coming soon')" class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-[8px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-50 transition-all">Configure</button>
                                    <button onclick="window.toast.info('Disconnected')" class="px-4 py-2 bg-white border border-red-200 rounded-lg text-[8px] font-black text-red-500 uppercase tracking-widest hover:bg-red-50 transition-all">Disconnect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Available -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Available Integrations
                    </p>
                    <div class="space-y-3 text-left">
                        ${e.filter(t=>t.status==="available").map(t=>`
                            <div class="card p-5 text-left hover:border-slate-300 transition-all">
                                <div class="flex items-start justify-between text-left">
                                    <div class="flex items-start gap-4 text-left">
                                        <div class="w-12 h-12 bg-${t.color}-50 rounded-2xl flex items-center justify-center shrink-0">
                                            <span class="material-icons-outlined text-${t.color}-500 text-xl">${t.icon}</span>
                                        </div>
                                        <div class="text-left">
                                            <p class="text-sm font-black text-slate-900">${t.name}</p>
                                            <p class="text-[10px] font-bold text-slate-500 mt-1 leading-relaxed">${t.desc}</p>
                                        </div>
                                    </div>
                                    <button onclick="window.toast.info('Integration setup coming soon')" class="shrink-0 ml-3 text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-all">${t.badge}</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <div class="p-6 pt-2 text-left">
                    <div class="card p-4 bg-slate-50 border-transparent text-center">
                        <span class="material-icons-outlined text-slate-300 text-2xl mb-2">extension</span>
                        <p class="text-[10px] font-black text-slate-400">More integrations coming soon</p>
                        <p class="text-[9px] font-bold text-slate-300 mt-1">Zoho Books, BusyWin, Marg ERP & more</p>
                    </div>
                </div>
            </div>
        </div>
    `}function xp(){const e=(()=>{var l;const a=window.getCache(),n=localStorage.getItem("retaileros_retailer_id");return((l=a.retailers)==null?void 0:l.find(r=>r.id===n))||{}})(),t=[{name:e.contact_person||"Store Owner",role:"Owner",phone:e.mobile_number||"—",status:"active",avatar:"person"},{name:"Ravi Kumar",role:"Store Manager",phone:"9876500001",status:"active",avatar:"person"},{name:"Priya Nair",role:"Sales Executive",phone:"9876500002",status:"active",avatar:"person"},{name:"Deepak Sharma",role:"Technician",phone:"9876500003",status:"invited",avatar:"person"}],s=[{name:"Owner",count:1,color:"indigo",perms:"Full access to all modules, settings & billing"},{name:"Store Manager",count:1,color:"blue",perms:"Sales, inventory, customers, reports. No billing or team settings"},{name:"Sales Executive",count:1,color:"green",perms:"New sales, customer lookup, inquiries. No reports or settings"},{name:"Technician",count:1,color:"amber",perms:"Repairs module only. View assigned jobs, update status"}];return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Teams</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Staff & Access Control</p>
                    </div>
                    <button onclick="window.toast.info('Invite flow coming soon')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined text-lg">person_add</span>
                    </button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Team Stats -->
                <div class="p-6 pb-0 text-left">
                    <div class="grid grid-cols-3 gap-3 text-left">
                        <div class="card p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">${t.filter(a=>a.status==="active").length}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Active</p>
                        </div>
                        <div class="card p-4 text-center">
                            <p class="text-2xl font-black text-amber-500">${t.filter(a=>a.status==="invited").length}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Pending</p>
                        </div>
                        <div class="card p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">${s.length}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Roles</p>
                        </div>
                    </div>
                </div>

                <!-- Team Members -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <div class="flex items-center justify-between text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                            <span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Team Members
                        </p>
                    </div>
                    <div class="space-y-3 text-left">
                        ${t.map((a,n)=>`
                            <div class="card p-4 flex items-center justify-between text-left ${a.status==="invited"?"border-dashed border-amber-200 bg-amber-50/20":""}">
                                <div class="flex items-center gap-3 text-left">
                                    <div class="w-10 h-10 ${n===0?"bg-indigo-100":"bg-slate-100"} rounded-full flex items-center justify-center">
                                        <span class="material-icons-outlined ${n===0?"text-indigo-500":"text-slate-400"}">${a.avatar}</span>
                                    </div>
                                    <div class="text-left">
                                        <div class="flex items-center gap-2 text-left">
                                            <p class="text-xs font-black text-slate-900">${a.name}</p>
                                            ${n===0?'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-600">You</span>':""}
                                        </div>
                                        <p class="text-[9px] font-bold text-slate-400">${a.role} &middot; ${a.phone}</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2 text-left">
                                    ${a.status==="invited"?'<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-amber-100 text-amber-600">Invited</span>':'<span class="w-2 h-2 bg-green-400 rounded-full"></span>'}
                                    ${n!==0?`<button onclick="window.toast.info('Member options coming soon')" class="text-slate-300 hover:text-slate-900 transition-colors"><span class="material-icons-outlined text-sm">more_vert</span></button>`:""}
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Roles & Permissions -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Roles & Permissions
                    </p>
                    <div class="space-y-3 text-left">
                        ${s.map(a=>`
                            <div class="card p-4 text-left hover:border-slate-300 transition-all cursor-pointer" onclick="window.toast.info('Role editor coming soon')">
                                <div class="flex items-center justify-between mb-2 text-left">
                                    <div class="flex items-center gap-2 text-left">
                                        <span class="w-3 h-3 bg-${a.color}-400 rounded-full"></span>
                                        <p class="text-xs font-black text-slate-900">${a.name}</p>
                                    </div>
                                    <span class="text-[8px] font-black text-slate-400 uppercase tracking-widest">${a.count} member${a.count>1?"s":""}</span>
                                </div>
                                <p class="text-[10px] font-bold text-slate-400 pl-5">${a.perms}</p>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Module Access Matrix -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Quick Access Matrix
                    </p>
                    <div class="card p-4 overflow-x-auto text-left">
                        <table class="w-full text-left">
                            <thead>
                                <tr class="text-[8px] font-black text-slate-400 uppercase tracking-widest">
                                    <th class="pb-3 pr-4">Module</th>
                                    <th class="pb-3 text-center">Owner</th>
                                    <th class="pb-3 text-center">Manager</th>
                                    <th class="pb-3 text-center">Sales</th>
                                    <th class="pb-3 text-center">Tech</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${[{mod:"Sales Desk",o:!0,m:!0,s:!0,t:!1},{mod:"Customers",o:!0,m:!0,s:!0,t:!1},{mod:"Inventory",o:!0,m:!0,s:!1,t:!1},{mod:"Reports",o:!0,m:!0,s:!1,t:!1},{mod:"Repairs",o:!0,m:!0,s:!1,t:!0},{mod:"Automation",o:!0,m:!0,s:!1,t:!1},{mod:"Settings",o:!0,m:!1,s:!1,t:!1}].map(a=>`
                                    <tr class="border-t border-slate-50">
                                        <td class="py-2.5 pr-4 text-[10px] font-bold text-slate-900">${a.mod}</td>
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${a.o?"text-green-500":"text-slate-200"}">${a.o?"check_circle":"cancel"}</span></td>
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${a.m?"text-green-500":"text-slate-200"}">${a.m?"check_circle":"cancel"}</span></td>
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${a.s?"text-green-500":"text-slate-200"}">${a.s?"check_circle":"cancel"}</span></td>
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${a.t?"text-green-500":"text-slate-200"}">${a.t?"check_circle":"cancel"}</span></td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.toast.info('Invite flow coming soon')" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">person_add</span> Invite Team Member
                    </button>
                </div>
            </div>
        </div>
    `}function fp(){const e=(()=>{var p;const r=window.getCache(),o=localStorage.getItem("retaileros_retailer_id");return((p=r.retailers)==null?void 0:p.find(c=>c.id===o))||{}})(),t=new Date,s=(r,o,p)=>{const c=new Date(t);return c.setDate(c.getDate()-r),c.setHours(o,p),c},a=[{action:"New sale created",detail:"ORD-001 — iPhone 15 Pro + AirPods (₹1,50,000)",user:e.contact_person||"Owner",icon:"shopping_cart",color:"green",time:s(0,14,30)},{action:"Customer added",detail:"Arjun Malhotra (9876543210)",user:e.contact_person||"Owner",icon:"person_add",color:"blue",time:s(0,14,25)},{action:"Automation triggered",detail:"Post-purchase journey for ORD-001",user:"System",icon:"smart_toy",color:"purple",time:s(0,14,31)},{action:"Repair job created",detail:"REP-A1B2C3 — iPhone screen replacement",user:"Ravi Kumar",icon:"build",color:"amber",time:s(0,12,15)},{action:"Stock updated",detail:"iPhone 15 Pro — Stock reduced to 9",user:"System",icon:"inventory_2",color:"slate",time:s(0,14,30)},{action:"Login successful",detail:"Browser: Chrome / macOS",user:e.contact_person||"Owner",icon:"login",color:"green",time:s(0,10,0)},{action:"Settings changed",detail:"Tax rates updated for Smartphones",user:e.contact_person||"Owner",icon:"settings",color:"indigo",time:s(1,18,45)},{action:"New sale created",detail:"ORD-002 — Samsung AC 1.5T (₹42,000)",user:"Ravi Kumar",icon:"shopping_cart",color:"green",time:s(1,16,20)},{action:"Inquiry logged",detail:"Galaxy S24 Ultra — Budget ₹1.2L",user:"Priya Nair",icon:"help_outline",color:"orange",time:s(1,15,0)},{action:"WhatsApp sent",detail:"Installation reminder to Priya Sharma",user:"System",icon:"chat",color:"green",time:s(1,9,0)},{action:"Backup completed",detail:"Auto backup — 2.4 MB exported",user:"System",icon:"cloud_done",color:"blue",time:s(2,3,0)},{action:"Failed login attempt",detail:"Unknown device — IP 103.xx.xx.xx",user:"Unknown",icon:"warning",color:"red",time:s(2,22,15)}],n=r=>{const o=Math.floor((t-r)/6e4);return o<60?`${o}m ago`:o<1440?`${Math.floor(o/60)}h ago`:o<2880?"Yesterday":`${Math.floor(o/1440)}d ago`},l=r=>r.toLocaleString("en-IN",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0});return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Activity Logs</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Audit Trail</p>
                    </div>
                    <button onclick="window.toast.info('Export coming soon')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined text-lg">download</span>
                    </button>
                </div>

                <!-- Filter Bar -->
                <div class="flex gap-2 mt-4 text-left overflow-x-auto pb-1">
                    ${["All","Sales","Inventory","Repairs","Auth","System"].map((r,o)=>`
                        <button class="px-3 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${o===0?"bg-slate-900 text-white":"bg-slate-50 text-slate-500 hover:bg-slate-100"}">${r}</button>
                    `).join("")}
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Today -->
                <div class="px-6 pt-4 pb-2 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Today</p>
                </div>
                <div class="px-6 text-left">
                    ${a.filter(r=>new Date(r.time).toDateString()===t.toDateString()).map(r=>`
                        <div class="flex items-start gap-3 py-4 border-b border-slate-50 text-left">
                            <div class="w-8 h-8 bg-${r.color}-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                <span class="material-icons-outlined text-${r.color}-500 text-sm">${r.icon}</span>
                            </div>
                            <div class="flex-1 min-w-0 text-left">
                                <div class="flex items-start justify-between gap-2 text-left">
                                    <p class="text-[11px] font-black text-slate-900">${r.action}</p>
                                    <span class="text-[8px] font-bold text-slate-400 whitespace-nowrap shrink-0">${n(r.time)}</span>
                                </div>
                                <p class="text-[10px] font-bold text-slate-500 mt-0.5 truncate">${r.detail}</p>
                                <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mt-1">${r.user} &middot; ${l(r.time)}</p>
                            </div>
                        </div>
                    `).join("")}
                </div>

                <!-- Yesterday -->
                <div class="px-6 pt-6 pb-2 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Yesterday</p>
                </div>
                <div class="px-6 text-left">
                    ${a.filter(r=>{const o=new Date(r.time),p=new Date(t);return p.setDate(p.getDate()-1),o.toDateString()===p.toDateString()}).map(r=>`
                        <div class="flex items-start gap-3 py-4 border-b border-slate-50 text-left">
                            <div class="w-8 h-8 bg-${r.color}-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                <span class="material-icons-outlined text-${r.color}-500 text-sm">${r.icon}</span>
                            </div>
                            <div class="flex-1 min-w-0 text-left">
                                <div class="flex items-start justify-between gap-2 text-left">
                                    <p class="text-[11px] font-black text-slate-900">${r.action}</p>
                                    <span class="text-[8px] font-bold text-slate-400 whitespace-nowrap shrink-0">${l(r.time)}</span>
                                </div>
                                <p class="text-[10px] font-bold text-slate-500 mt-0.5 truncate">${r.detail}</p>
                                <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mt-1">${r.user}</p>
                            </div>
                        </div>
                    `).join("")}
                </div>

                <!-- Older -->
                <div class="px-6 pt-6 pb-2 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Older</p>
                </div>
                <div class="px-6 text-left">
                    ${a.filter(r=>{const o=new Date(r.time),p=new Date(t);return p.setDate(p.getDate()-1),o.toDateString()!==t.toDateString()&&o.toDateString()!==p.toDateString()}).map(r=>`
                        <div class="flex items-start gap-3 py-4 border-b border-slate-50 text-left">
                            <div class="w-8 h-8 bg-${r.color}-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                <span class="material-icons-outlined text-${r.color}-500 text-sm">${r.icon}</span>
                            </div>
                            <div class="flex-1 min-w-0 text-left">
                                <div class="flex items-start justify-between gap-2 text-left">
                                    <p class="text-[11px] font-black text-slate-900">${r.action}</p>
                                    <span class="text-[8px] font-bold text-slate-400 whitespace-nowrap shrink-0">${n(r.time)}</span>
                                </div>
                                <p class="text-[10px] font-bold text-slate-500 mt-0.5 truncate">${r.detail}</p>
                                <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mt-1">${r.user} &middot; ${l(r.time)}</p>
                            </div>
                        </div>
                    `).join("")}
                </div>

                <div class="p-6 text-center">
                    <p class="text-[9px] font-bold text-slate-300">Showing last 7 days of activity</p>
                </div>
            </div>
        </div>
    `}function bp(){return`
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
                        ${[{code:"en",name:"English",native:"English",flag:"🇬🇧",selected:!0},{code:"hi",name:"Hindi",native:"हिन्दी",flag:"🇮🇳",selected:!1},{code:"ta",name:"Tamil",native:"தமிழ்",flag:"🇮🇳",selected:!1},{code:"te",name:"Telugu",native:"తెలుగు",flag:"🇮🇳",selected:!1},{code:"kn",name:"Kannada",native:"ಕನ್ನಡ",flag:"🇮🇳",selected:!1},{code:"ml",name:"Malayalam",native:"മലയാളം",flag:"🇮🇳",selected:!1},{code:"mr",name:"Marathi",native:"मराठी",flag:"🇮🇳",selected:!1},{code:"bn",name:"Bengali",native:"বাংলা",flag:"🇮🇳",selected:!1},{code:"gu",name:"Gujarati",native:"ગુજરાતી",flag:"🇮🇳",selected:!1},{code:"pa",name:"Punjabi",native:"ਪੰਜਾਬੀ",flag:"🇮🇳",selected:!1}].map(t=>`
                            <button class="card p-4 text-left flex items-center gap-3 transition-all ${t.selected?"border-slate-900 bg-slate-50 ring-1 ring-slate-900":"hover:border-slate-300"}">
                                <span class="text-lg">${t.flag}</span>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">${t.name}</p>
                                    <p class="text-[9px] font-bold text-slate-400">${t.native}</p>
                                </div>
                                ${t.selected?'<span class="material-icons-outlined text-slate-900 text-sm ml-auto">check_circle</span>':""}
                            </button>
                        `).join("")}
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
    `}function mp(){var a,n,l,r,o,p;const e=window.getCache(),t={customers:((a=e.customers)==null?void 0:a.length)||0,sales:((n=e.sales)==null?void 0:n.length)||0,products:((l=e.products)==null?void 0:l.length)||0,automations:((r=e.automations)==null?void 0:r.length)||0,repairs:((o=e.repairs)==null?void 0:o.length)||0,inquiries:((p=e.inquiries)==null?void 0:p.length)||0},s=Object.values(t).reduce((c,u)=>c+u,0);return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Backup</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Data Export & Restore</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Data Overview -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Your Data
                    </p>
                    <div class="grid grid-cols-3 gap-2 text-left">
                        <div class="card p-3 text-center">
                            <p class="text-lg font-black text-slate-900">${t.customers}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Customers</p>
                        </div>
                        <div class="card p-3 text-center">
                            <p class="text-lg font-black text-slate-900">${t.sales}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Sales</p>
                        </div>
                        <div class="card p-3 text-center">
                            <p class="text-lg font-black text-slate-900">${t.products}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Products</p>
                        </div>
                        <div class="card p-3 text-center">
                            <p class="text-lg font-black text-slate-900">${t.automations}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Automations</p>
                        </div>
                        <div class="card p-3 text-center">
                            <p class="text-lg font-black text-slate-900">${t.repairs}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Repairs</p>
                        </div>
                        <div class="card p-3 text-center">
                            <p class="text-lg font-black text-slate-900">${s}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Total</p>
                        </div>
                    </div>
                </div>

                <!-- Manual Export -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Export Data
                    </p>
                    <div class="space-y-3 text-left">
                        <p class="text-[10px] font-bold text-slate-500">Select what to include in your backup:</p>
                        ${[{name:"Customers & Groups",icon:"people",checked:!0},{name:"Sales & Invoices",icon:"receipt",checked:!0},{name:"Products & Inventory",icon:"inventory_2",checked:!0},{name:"Automations & Messages",icon:"smart_toy",checked:!0},{name:"Repairs & Service Jobs",icon:"build",checked:!1},{name:"Communication Logs",icon:"chat",checked:!1},{name:"Inquiries",icon:"help_outline",checked:!1}].map(c=>`
                            <div class="card p-3 flex items-center justify-between text-left">
                                <div class="flex items-center gap-3 text-left">
                                    <span class="material-icons-outlined text-slate-400 text-sm">${c.icon}</span>
                                    <p class="text-xs font-bold text-slate-900">${c.name}</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" class="sr-only peer" ${c.checked?"checked":""}>
                                    <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                                </label>
                            </div>
                        `).join("")}
                    </div>
                    <div class="flex items-center justify-between text-left">
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900">Export Format</p>
                        </div>
                        <select class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                            <option selected>CSV (Excel-compatible)</option>
                            <option>JSON (Developer format)</option>
                            <option>PDF Report</option>
                        </select>
                    </div>
                    <button onclick="window.toast.info('Export started — download will begin shortly')" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">download</span> Download Backup
                    </button>
                </div>

                <!-- Auto Backup -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> Automatic Backup
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Auto-Backup</p>
                                <p class="text-[9px] font-bold text-slate-400">Automatically backup data on schedule</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Frequency</p>
                                <p class="text-[9px] font-bold text-slate-400">How often to run auto-backup</p>
                            </div>
                            <select class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option>Daily</option>
                                <option selected>Weekly</option>
                                <option>Monthly</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Send to Email</p>
                                <p class="text-[9px] font-bold text-slate-400">Email backup file to store owner</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Backup History -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Backup History
                    </p>
                    <div class="space-y-2 text-left">
                        ${[{date:"Feb 6, 2026 — 3:00 AM",size:"2.4 MB",type:"Auto",status:"success"},{date:"Jan 30, 2026 — 3:00 AM",size:"2.1 MB",type:"Auto",status:"success"},{date:"Jan 23, 2026 — 11:30 AM",size:"1.8 MB",type:"Manual",status:"success"}].map(c=>`
                            <div class="flex items-center justify-between py-3 border-b border-slate-50 text-left">
                                <div class="flex items-center gap-3 text-left">
                                    <span class="material-icons-outlined text-green-500 text-sm">cloud_done</span>
                                    <div class="text-left">
                                        <p class="text-[10px] font-bold text-slate-900">${c.date}</p>
                                        <p class="text-[8px] font-bold text-slate-400">${c.size} &middot; ${c.type}</p>
                                    </div>
                                </div>
                                <button class="text-[8px] font-black text-indigo-500 uppercase tracking-widest hover:text-indigo-700">Download</button>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Data Retention -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-red-400 rounded-full"></span> Data Retention
                    </p>
                    <div class="card p-4 flex items-center justify-between text-left">
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900">Keep Backup History</p>
                            <p class="text-[9px] font-bold text-slate-400">Auto-delete old backups after period</p>
                        </div>
                        <select class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                            <option>30 days</option>
                            <option selected>90 days</option>
                            <option>1 year</option>
                            <option>Forever</option>
                        </select>
                    </div>
                    <div class="card p-4 bg-red-50 border-red-100 text-left">
                        <div class="flex items-start gap-3 text-left">
                            <span class="material-icons-outlined text-red-400 text-lg mt-0.5">warning</span>
                            <div class="text-left">
                                <p class="text-xs font-black text-red-600">Delete All Store Data</p>
                                <p class="text-[9px] font-bold text-red-400 mt-1">Permanently erase all data including customers, sales, inventory and automations. This action cannot be undone.</p>
                                <button onclick="window.toast.warning('Please contact support to delete your data')" class="mt-3 px-4 py-2 bg-white border border-red-200 rounded-lg text-[8px] font-black text-red-500 uppercase tracking-widest hover:bg-red-50 transition-all">Request Data Deletion</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `}function hp(){const e=[{version:"2.1.0",date:"February 6, 2026",tag:"Latest",tagColor:"green",highlights:[{icon:"shield",title:"Complete Multi-Tenant Isolation",desc:"Every table now filtered by retailer_id — your data is fully isolated from other stores."},{icon:"table_chart",title:"3 New Modules",desc:"Inquiries, Repairs, and Inventory Logs now fully integrated with tenant architecture."},{icon:"settings",title:"11 New Settings Pages",desc:"Security, Alerts, Taxes, Plugins, Teams, Logs, Language, Backup, Updates, Theme, and Help."}],changes:["Added retailer_id filtering to all 11 tenant-scoped tables","New tenant-aware CRUD helpers for inquiries, repairs, inventory_logs","Replaced raw SQL calls with proper db helpers in all modules","Sync layer now fetches inquiries, repairs, inventory_logs from DB","Settings dashboard fully functional with all sub-apps"]},{version:"2.0.0",date:"February 5, 2026",tag:"Major",tagColor:"indigo",highlights:[{icon:"store",title:"Multi-Tenant Architecture",desc:"Full SaaS multi-tenant design with row-level data isolation per retailer."},{icon:"login",title:"Real Authentication",desc:"DB-backed login via mobile number or store code. No more mock login."},{icon:"people",title:"Demo Retailers",desc:"TechZone Electronics and Digital World with isolated sample data for testing."}],changes:["Added retailer_id column to 8 tenant-scoped tables","State management for tenant identity (setRetailer/clearRetailer)","Tenant-filtered sync layer for all data queries","Real login flow with DB authentication","Settings > Store shows 40+ retailer fields","Created 2 demo retailers with isolated sample data"]},{version:"1.0.0",date:"January 2026",tag:"Initial",tagColor:"slate",highlights:[{icon:"rocket_launch",title:"RetailerOS Launch",desc:"Initial release with Sales Desk, Customers, Inventory, Automations, and Repairs modules."}],changes:["Sales Desk with new transaction flow","Customer management with groups","Product inventory with inward shipments","Automation sequences for post-purchase journeys","Repair job tracking with status lifecycle","WhatsApp communication log","Brand schemes and promotions","Settings with Roles, Finance, Ledger, AI Config"]}];return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Updates</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Release Notes & Changelog</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Current Version Banner -->
                <div class="p-6 pb-0 text-left">
                    <div class="card p-5 bg-gradient-to-br from-slate-900 to-slate-800 border-0 text-left relative overflow-hidden">
                        <div class="absolute -right-6 -top-6 w-24 h-24 bg-white/5 rounded-full"></div>
                        <div class="absolute -right-2 -bottom-8 w-16 h-16 bg-white/5 rounded-full"></div>
                        <div class="flex items-center justify-between text-left relative z-10">
                            <div class="text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Current Version</p>
                                <p class="text-3xl font-black text-white mt-1 tracking-tight">v${e[0].version}</p>
                                <p class="text-[9px] font-bold text-slate-400 mt-1">${e[0].date}</p>
                            </div>
                            <div class="text-right">
                                <span class="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-[8px] font-black uppercase tracking-widest">Up to date</span>
                                <p class="text-[8px] font-bold text-slate-500 mt-2">RetailerOS by DigitalHues</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Release Timeline -->
                ${e.map((t,s)=>`
                    <div class="p-6 ${s<e.length-1?"border-b border-dashed border-slate-200":""} text-left">
                        <div class="flex items-center gap-3 mb-4 text-left">
                            <div class="flex items-center gap-2 text-left">
                                <span class="text-sm font-black text-slate-900">v${t.version}</span>
                                <span class="text-[7px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-${t.tagColor}-100 text-${t.tagColor}-600">${t.tag}</span>
                            </div>
                            <span class="text-[9px] font-bold text-slate-400">${t.date}</span>
                        </div>

                        ${t.highlights?`
                            <div class="space-y-3 mb-4 text-left">
                                ${t.highlights.map(a=>`
                                    <div class="card p-4 flex items-start gap-3 text-left">
                                        <div class="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center shrink-0">
                                            <span class="material-icons-outlined text-indigo-500 text-sm">${a.icon}</span>
                                        </div>
                                        <div class="text-left">
                                            <p class="text-[11px] font-black text-slate-900">${a.title}</p>
                                            <p class="text-[10px] font-bold text-slate-500 mt-0.5 leading-relaxed">${a.desc}</p>
                                        </div>
                                    </div>
                                `).join("")}
                            </div>
                        `:""}

                        <div class="text-left">
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 pl-1">Changes</p>
                            <div class="space-y-1.5 text-left">
                                ${t.changes.map(a=>`
                                    <div class="flex items-start gap-2 text-left">
                                        <span class="w-1 h-1 bg-slate-300 rounded-full mt-1.5 shrink-0"></span>
                                        <p class="text-[10px] font-bold text-slate-600">${a}</p>
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                    </div>
                `).join("")}

                <div class="p-6 pt-0 text-center">
                    <p class="text-[9px] font-bold text-slate-300">Built with care by DigitalHues</p>
                </div>
            </div>
        </div>
    `}function gp(){const e=localStorage.getItem("retaileros_theme")||"light",t=localStorage.getItem("retaileros_accent")||"slate",s=localStorage.getItem("retaileros_density")||"comfortable",a=[{name:"Slate",key:"slate",bg:"bg-slate-900",ring:"ring-slate-900"},{name:"Indigo",key:"indigo",bg:"bg-indigo-600",ring:"ring-indigo-600"},{name:"Blue",key:"blue",bg:"bg-blue-600",ring:"ring-blue-600"},{name:"Emerald",key:"emerald",bg:"bg-emerald-600",ring:"ring-emerald-600"},{name:"Violet",key:"violet",bg:"bg-violet-600",ring:"ring-violet-600"},{name:"Rose",key:"rose",bg:"bg-rose-600",ring:"ring-rose-600"},{name:"Amber",key:"amber",bg:"bg-amber-600",ring:"ring-amber-600"},{name:"Teal",key:"teal",bg:"bg-teal-600",ring:"ring-teal-600"}];return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Theme</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Appearance & Display</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Mode -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> Mode
                    </p>
                    <div class="grid grid-cols-3 gap-3 text-left">
                        ${[{name:"Light",key:"light",icon:"light_mode",desc:"Clean white interface"},{name:"Dark",key:"dark",icon:"dark_mode",desc:"Easy on the eyes"},{name:"System",key:"system",icon:"settings_brightness",desc:"Match device setting"}].map(n=>`
                            <button class="card p-4 text-center transition-all ${e===n.key?"border-slate-900 bg-slate-50 ring-1 ring-slate-900":"hover:border-slate-300"}">
                                <span class="material-icons-outlined text-2xl ${e===n.key?"text-slate-900":"text-slate-400"} mb-2">${n.icon}</span>
                                <p class="text-[10px] font-black text-slate-900">${n.name}</p>
                                <p class="text-[8px] font-bold text-slate-400 mt-0.5">${n.desc}</p>
                            </button>
                        `).join("")}
                    </div>
                </div>

                <!-- Accent Color -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Accent Color
                    </p>
                    <div class="grid grid-cols-4 gap-3 text-left">
                        ${a.map(n=>`
                            <button class="flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${t===n.key?"bg-slate-50 ring-2 "+n.ring:"hover:bg-slate-50"}">
                                <div class="w-8 h-8 ${n.bg} rounded-full ${t===n.key?"ring-2 ring-offset-2 "+n.ring:""}"></div>
                                <span class="text-[8px] font-black text-slate-600 uppercase tracking-widest">${n.name}</span>
                            </button>
                        `).join("")}
                    </div>
                </div>

                <!-- Layout Density -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Layout Density
                    </p>
                    <div class="space-y-3 text-left">
                        ${[{name:"Compact",key:"compact",desc:"Smaller spacing, more content visible. Best for desktop.",icon:"density_small"},{name:"Comfortable",key:"comfortable",desc:"Balanced spacing for readability. Default experience.",icon:"density_medium"},{name:"Spacious",key:"spacious",desc:"Extra breathing room. Best for touch devices.",icon:"density_large"}].map(n=>`
                            <button class="card p-4 flex items-center gap-4 text-left w-full transition-all ${s===n.key?"border-slate-900 bg-slate-50 ring-1 ring-slate-900":"hover:border-slate-300"}">
                                <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-slate-500">${n.icon}</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">${n.name}</p>
                                    <p class="text-[9px] font-bold text-slate-400">${n.desc}</p>
                                </div>
                                ${s===n.key?'<span class="material-icons-outlined text-slate-900 text-sm ml-auto">check_circle</span>':""}
                            </button>
                        `).join("")}
                    </div>
                </div>

                <!-- Font Size -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-amber-400 rounded-full"></span> Font Size
                    </p>
                    <div class="card p-5 text-left">
                        <div class="flex items-center justify-between mb-3 text-left">
                            <span class="text-xs font-bold text-slate-400">A</span>
                            <span class="text-xl font-bold text-slate-400">A</span>
                        </div>
                        <input type="range" min="80" max="120" value="100" class="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-slate-900">
                        <p class="text-[9px] font-bold text-slate-400 text-center mt-2">100% (Default)</p>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Sidebar
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Collapsed by Default</p>
                                <p class="text-[9px] font-bold text-slate-400">Start with minimized sidebar</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer">
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Show App Labels</p>
                                <p class="text-[9px] font-bold text-slate-400">Display text labels under sidebar icons</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" checked>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Animations -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Motion
                    </p>
                    <div class="card p-4 flex items-center justify-between text-left">
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900">Animations</p>
                            <p class="text-[9px] font-bold text-slate-400">Enable slide & fade transitions</p>
                        </div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" class="sr-only peer" checked>
                            <div class="w-9 h-5 bg-slate-200 peer-checked:bg-green-500 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                        </label>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.toast.info('Theme preferences saved')" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform">
                        Apply Theme
                    </button>
                </div>
            </div>
        </div>
    `}function vp(){const e=(()=>{var l;const a=window.getCache(),n=localStorage.getItem("retaileros_retailer_id");return((l=a.retailers)==null?void 0:l.find(r=>r.id===n))||{}})(),t=[{q:"How do I add a new customer?",a:"Go to Clients app from the launcher, then tap the + button. Fill in the customer name and phone number to create a new record."},{q:"How do I create a sale?",a:'Open Sales Desk, tap "New Transaction", select or add a customer, add products from your inventory, choose payment method, and confirm the sale.'},{q:"How do I set up automation for a sale?",a:"After completing a sale, go to Automation app. Create a new sequence linked to the sale — you can schedule WhatsApp messages at different day intervals."},{q:"How does multi-tenant isolation work?",a:"Each retailer's data (customers, sales, inventory, etc.) is completely separate. When you log in, you only see your own store's data. No other retailer can access it."},{q:"How do I track repair jobs?",a:"Use the Repairs module to create job sheets. Each repair moves through a lifecycle: Collected > Sent to Brand > In Repair > Ready > Handed Over."},{q:"How do I export my data?",a:"Go to Settings > Backup. Select the data you want to export, choose CSV or JSON format, and download. You can also set up auto-backups."},{q:"Can I add staff members?",a:"Go to Settings > Teams to invite staff. Each team member gets a role (Owner, Manager, Sales, Technician) with specific module access."}];return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left">
            <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
                <div class="flex items-center justify-between mb-2 text-left">
                    <button onclick="window.setSettingsView(null)" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Help</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Support & Documentation</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Quick Support -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Quick Support
                    </p>
                    <div class="grid grid-cols-2 gap-3 text-left">
                        <button onclick="window.toast.info('Opening WhatsApp support...')" class="card p-4 text-center hover:border-green-300 hover:bg-green-50/30 transition-all">
                            <span class="material-icons-outlined text-green-500 text-2xl mb-2">chat</span>
                            <p class="text-[10px] font-black text-slate-900">WhatsApp</p>
                            <p class="text-[8px] font-bold text-slate-400 mt-0.5">Chat with us</p>
                        </button>
                        <button onclick="window.toast.info('Calling support...')" class="card p-4 text-center hover:border-blue-300 hover:bg-blue-50/30 transition-all">
                            <span class="material-icons-outlined text-blue-500 text-2xl mb-2">call</span>
                            <p class="text-[10px] font-black text-slate-900">Call Us</p>
                            <p class="text-[8px] font-bold text-slate-400 mt-0.5">1800-XXX-XXXX</p>
                        </button>
                        <button onclick="window.toast.info('Opening email...')" class="card p-4 text-center hover:border-indigo-300 hover:bg-indigo-50/30 transition-all">
                            <span class="material-icons-outlined text-indigo-500 text-2xl mb-2">email</span>
                            <p class="text-[10px] font-black text-slate-900">Email</p>
                            <p class="text-[8px] font-bold text-slate-400 mt-0.5">support@retaileros.in</p>
                        </button>
                        <button onclick="window.toast.info('Opening ticket system...')" class="card p-4 text-center hover:border-amber-300 hover:bg-amber-50/30 transition-all">
                            <span class="material-icons-outlined text-amber-500 text-2xl mb-2">confirmation_number</span>
                            <p class="text-[10px] font-black text-slate-900">Raise Ticket</p>
                            <p class="text-[8px] font-bold text-slate-400 mt-0.5">Track your issue</p>
                        </button>
                    </div>
                </div>

                <!-- Video Guides -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Guides & Tutorials
                    </p>
                    <div class="space-y-3 text-left">
                        ${[{title:"Getting Started",desc:"Complete setup guide for new retailers",icon:"rocket_launch",color:"indigo"},{title:"Sales & Billing",desc:"Create invoices, apply schemes, manage payments",icon:"receipt",color:"green"},{title:"Customer Management",desc:"Add customers, create groups, track engagement",icon:"people",color:"blue"},{title:"Inventory Control",desc:"Track stock, inward shipments, product catalog",icon:"inventory_2",color:"amber"},{title:"Automation Setup",desc:"Post-purchase sequences, WhatsApp campaigns",icon:"smart_toy",color:"purple"},{title:"Reports & Analytics",desc:"Sales reports, customer insights, performance",icon:"analytics",color:"teal"}].map(a=>`
                            <button onclick="window.toast.info('Guide: ${a.title} — coming soon')" class="card p-4 flex items-center gap-4 text-left w-full hover:border-slate-300 transition-all">
                                <div class="w-10 h-10 bg-${a.color}-50 rounded-xl flex items-center justify-center shrink-0">
                                    <span class="material-icons-outlined text-${a.color}-500">${a.icon}</span>
                                </div>
                                <div class="flex-1 text-left">
                                    <p class="text-xs font-black text-slate-900">${a.title}</p>
                                    <p class="text-[9px] font-bold text-slate-400">${a.desc}</p>
                                </div>
                                <span class="material-icons-outlined text-slate-300 text-sm">chevron_right</span>
                            </button>
                        `).join("")}
                    </div>
                </div>

                <!-- FAQ -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Frequently Asked Questions
                    </p>
                    <div class="space-y-2 text-left">
                        ${t.map((a,n)=>`
                            <details class="card overflow-hidden group text-left">
                                <summary class="p-4 cursor-pointer flex items-center justify-between text-left list-none">
                                    <p class="text-[11px] font-black text-slate-900 pr-4">${a.q}</p>
                                    <span class="material-icons-outlined text-slate-400 text-sm shrink-0 group-open:rotate-180 transition-transform">expand_more</span>
                                </summary>
                                <div class="px-4 pb-4 text-left">
                                    <p class="text-[10px] font-bold text-slate-500 leading-relaxed">${a.a}</p>
                                </div>
                            </details>
                        `).join("")}
                    </div>
                </div>

                <!-- Account Info -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Your Account
                    </p>
                    <div class="card p-4 bg-slate-50 border-transparent text-left">
                        <div class="grid grid-cols-2 gap-3 text-left">
                            <div class="text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Store</p>
                                <p class="text-xs font-bold text-slate-900">${e.retailer_name||"Your Store"}</p>
                            </div>
                            <div class="text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Code</p>
                                <p class="text-xs font-bold text-slate-900">${e.retailer_code||"—"}</p>
                            </div>
                            <div class="text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Plan</p>
                                <p class="text-xs font-bold text-green-600">Professional</p>
                            </div>
                            <div class="text-left">
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Version</p>
                                <p class="text-xs font-bold text-slate-900">v2.1.0</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Report Bug -->
                <div class="p-6 pt-0 text-left">
                    <button onclick="window.toast.info('Bug report form coming soon')" class="w-full py-4 bg-white border border-slate-200 text-slate-900 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">bug_report</span> Report a Bug
                    </button>
                </div>
            </div>
        </div>
    `}function Pn(e){const t=e==="desktop-secondary";return window.setSettingsView=s=>{d.settingsView=s,d.settingsSubView=null,I()},window.setSettingsSubView=s=>{d.settingsSubView=s,I()},window.setSettingsRole=s=>{d.settingsActiveRole=s,d.settingsSubView="detail",I()},window.saveNewRole=()=>{const s=document.querySelector('input[placeholder="e.g. Floor Supervisor"]');s&&s.value?(d.settingsActiveRole=s.value,d.settingsSubView="detail",window.toast.success(`Role "${s.value}" created successfully!`),I()):window.toast.warning("Please enter a role name")},window.updateRole=()=>{window.toast.success("Role profile updated successfully!"),window.setSettingsSubView("detail")},t?d.settingsView==="roles"?ap():d.settingsView==="accounting"?np():d.settingsView==="ledger"?lp():d.settingsView==="ai"?rp():d.settingsView==="store"?op():d.settingsView==="security"?cp():d.settingsView==="alerts"?dp():d.settingsView==="taxes"?pp():d.settingsView==="plugins"?up():d.settingsView==="teams"?xp():d.settingsView==="logs"?fp():d.settingsView==="lang"?bp():d.settingsView==="backup"?mp():d.settingsView==="updates"?hp():d.settingsView==="theme"?gp():d.settingsView==="help"?vp():"":sp(e)}function wp(){return`
        <div class="space-y-4 text-left">
            ${[{id:"apple",n:"Apple",s:"PREMIUM PARTNER",amt:"₹4,82,500",live:12,comp:48,set:142,nSet:24,i:"apple"},{id:"nothing",n:"Nothing",s:"EMERGAGING BRAND",amt:"₹1,12,000",live:4,comp:15,set:56,nSet:8,i:"nothing"},{id:"oneplus",n:"OnePlus",s:"GLOBAL TECH",amt:"₹2,45,900",live:8,comp:32,set:98,nSet:12,i:"oneplus"}].map(t=>`
                <div onclick="selectSchemeBrand('${t.n}')" class="card p-5 border-2 transition-all group cursor-pointer relative overflow-hidden text-left ${d.activeSchemeBrand===t.n?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
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
    `}window.setSchemeViewMode=e=>{d.showSchemeDetails=e==="details",I()};window.setActiveScheme=e=>{d.activeScheme=e,I()};function yp(){const t=(window.getCache?window.getCache():{schemes:[]}).schemes||[];return`
        <div class="space-y-4 animate-slide-up text-left">
            ${t.map(s=>{var a;return`
                <div onclick="window.setSchemeViewMode('details'); window.setActiveScheme(${JSON.stringify(s).replace(/"/g,"&quot;")})" class="card p-6 border-2 transition-all cursor-pointer group text-left ${((a=d.activeScheme)==null?void 0:a.id)===s.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
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
    `}function kp(e){const t=e==="mobile",s=d.activeScheme;if(!s)return'<div class="p-10 text-center">Select a scheme to view details</div>';const n=((window.getCache?window.getCache():{sales:[]}).sales||[]).filter(u=>{const y=u.product_name||"",v=typeof s=="object"&&s.brand?s.brand:"";return y.includes(v)||u.items&&u.items.some(k=>(k.name||"").includes(v))}),l=typeof s=="object"&&s.brand?s.brand:s,r=typeof s=="object"&&s.name?s.name:"Scheme",o=typeof s=="object"&&s.payout?s.payout:"0",p=typeof s=="object"&&s.end_date?s.end_date:new Date,c={count:n.length,growth:"+0%",color:l==="Apple"?"bg-indigo-950":l==="Nothing"?"bg-slate-950":"bg-emerald-950"};return`
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
                            <h3 class="text-sm font-black text-slate-900 text-left">${r}</h3>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3 text-left">
                         <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left">
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">PAYOUT</p>
                            <p class="text-[11px] font-black text-slate-900 text-left">₹${parseInt(o).toLocaleString()}</p>
                        </div>
                         <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left">
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">VALID UNTIL</p>
                            <p class="text-[11px] font-black text-slate-900 text-left">${new Date(p).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>

                <!-- Metrics -->
                <div class="${c.color} rounded-[32px] p-6 text-white relative overflow-hidden text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 text-left">TOTAL ORDERS UNDER SCHEME</p>
                    <div class="flex items-end gap-3 text-left">
                        <h2 class="text-5xl font-black tracking-tighter text-left">${c.count}</h2>
                        <p class="text-[10px] font-bold text-green-400 mb-2 text-left">${c.growth} this week</p>
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
    `}function Nn(e){const t=e==="desktop-secondary",s=e==="mobile";if(window.selectSchemeBrand=n=>{d.activeSchemeBrand=n,d.schemesTab="list",I()},window.selectScheme=n=>{d.activeScheme=n,s&&(d.showSchemeDetails=!0),I()},window.setSchemesTab=n=>{d.schemesTab=n,I()},window.toggleSchemeDetails=n=>{d.showSchemeDetails=n,I()},t||s&&d.showSchemeDetails)return kp(e);const a=d.schemesTab==="brands";return`
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
                ${a?wp():yp()}
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
    `}function _p(){const e=d.marketplaceTab==="browse";return`
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
    `}function Sp(){const t=window.getCache().marketplace||[];return`
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
    `}function $p(){return`
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
    `}function Ep(e){return`
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
    `}function qn(e){if(e==="desktop-secondary"||e==="mobile"&&d.marketplaceViewMode==="add")return Ep(e);const a=d.marketplaceTab==="browse";return`
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            ${_p()}
            <div class="flex-1 overflow-y-auto px-8 space-y-6 custom-scrollbar pb-20 text-left">
                ${a?Sp():$p()}
            </div>

             <!-- Floating Action Button -->
            <div class="absolute bottom-32 right-8 z-30 text-left">
                <button onclick="window.setMarketplaceViewMode('add')" class="w-16 h-16 bg-slate-950 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-center">
                    <span class="material-icons-outlined text-3xl font-light text-center">add</span>
                </button>
            </div>
        </div>
    `}function Ip(){return`
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
    `}function Cp(){return`
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
    `}function Rp(){const t=window.getCache().inquiries||[],s=a=>{switch(a){case"PENDING":return"bg-orange-50 text-orange-400";case"FULFILLED":return"bg-green-50 text-green-500";case"CONTACTED":return"bg-blue-50 text-blue-500";case"LOST SALE":return"bg-red-50 text-red-400";default:return"bg-slate-50 text-slate-400"}};return`
        <div class="space-y-3 text-left">
            ${t.map(a=>{var n;return`
                <div onclick="window.setActiveInquiry(${JSON.stringify(a).replace(/"/g,"&quot;")}); window.setInquiryViewMode('resolve')" class="card p-4 border-2 transition-all cursor-pointer flex items-center gap-4 text-left ${((n=d.activeInquiry)==null?void 0:n.id)===a.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
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
    `}async function Ap(){const e=document.getElementById("inq-customer").value,t=document.getElementById("inq-product").value,s=document.getElementById("inq-notes").value;if(!e||!t){alert("Customer and Product are required.");return}const a=document.getElementById("log-inquiry-btn");a.disabled=!0,a.innerText="Logging...";try{await T.inquiries.add({id:"INQ-"+Math.random().toString(36).substr(2,6).toUpperCase(),customer_name:e,product_name:t,request:s,status:"PENDING",created_at:new Date().toISOString()}),await J(),window.setInquiryViewMode("list")}catch(n){alert("Error: "+n.message),a.disabled=!1,a.innerText="Log Inquiry"}}window.saveInquiry=Ap;function Tp(e){return`
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
    `}async function Mp(e){var t;if((t=d.activeInquiry)!=null&&t.id)try{await T.inquiries.updateStatus(d.activeInquiry.id,e),await J(),window.setInquiryViewMode("list")}catch(s){alert("Update failed: "+s.message)}}window.updateInquiryStatus=Mp;function Dp(){const e=d.activeInquiry;return e?`
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
    `:'<div class="p-20 text-center uppercase text-[10px] font-black opacity-30">No inquiry selected</div>'}function Bn(e){return e==="desktop-secondary"||e==="mobile"&&d.inquiryViewMode==="add"?Tp():d.inquiryViewMode==="resolve"&&d.activeInquiry?Dp():`
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            ${Ip()}
            <div class="px-8 text-left">
                ${Cp()}
                <div class="flex items-center justify-between mb-4 text-left">
                    <h3 class="text-[10px] font-black text-slate-950 uppercase tracking-widest text-left">Recent Inquiries</h3>
                    <button class="text-[9px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors text-right">View All</button>
                </div>
            </div>
            <div class="flex-1 overflow-y-auto px-8 space-y-3 custom-scrollbar pb-32 text-left">
                ${Rp()}
            </div>

            <!-- Floating Action Button -->
            <div class="absolute bottom-10 right-8 z-30 text-left">
                <button onclick="window.setInquiryViewMode('add')" class="w-14 h-14 bg-slate-950 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-center">
                    <span class="material-icons-outlined text-2xl text-center">add</span>
                </button>
            </div>
        </div>
    `}function Lp(){const t=window.getCache().campaigns||[];return`
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
                    <div onclick="window.setActiveCampaign(${JSON.stringify(s).replace(/"/g,"&quot;")}); window.setPreBookingViewMode('details')" class="card p-6 border-2 transition-all cursor-pointer relative overflow-hidden group text-left ${((a=d.activeCampaign)==null?void 0:a.id)===s.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
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
    `}function jp(e){return`
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
    `}function Op(e){const t=d.activeCampaign;return t?`
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
    `:""}function Pp(e){return`
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
    `}function Fn(e){return e==="desktop-secondary"||e==="mobile"&&d.preBookingViewMode==="create"?jp():d.preBookingViewMode==="details"&&d.activeCampaign?Op():d.preBookingViewMode==="public"?Pp():Lp()}function Np(){const e=window.getCache(),t=e.automations||[],s=e.automationMessages||[],a=t.filter(c=>c.status==="active").length;t.filter(c=>c.status==="completed").length,s.length;const n=s.filter(c=>c.status==="sent").length,l=s.filter(c=>c.status==="pending").length,r=new Date,o=new Date(Date.now()+7*864e5),p=s.filter(c=>c.status==="pending"&&new Date(c.scheduled_date)<=o).sort((c,u)=>new Date(c.scheduled_date)-new Date(u.scheduled_date)).slice(0,5);return`
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
                        ${p.map(c=>{const u=t.find($=>$.id===c.automation_id),y=new Date(c.scheduled_date),v=y.toDateString()===r.toDateString(),k=y.toDateString()===new Date(Date.now()+864e5).toDateString(),m=v?"Today":k?"Tomorrow":y.toLocaleDateString("en-GB",{day:"2-digit",month:"short"});return`
                                <div class="card p-4 border-2 border-transparent hover:border-slate-100 transition-all text-left">
                                    <div class="flex items-center gap-3 text-left">
                                        <div class="w-10 h-10 ${c.message_type==="welcome"?"bg-slate-900":c.message_type==="tips"?"bg-slate-700":c.message_type==="upsell"?"bg-slate-600":"bg-slate-500"} rounded-xl flex items-center justify-center text-white text-center">
                                            <span class="material-icons-outlined text-sm">${c.message_type==="welcome"?"waving_hand":c.message_type==="tips"?"lightbulb":c.message_type==="upsell"?"trending_up":c.message_type==="feedback"?"rate_review":"schedule"}</span>
                                        </div>
                                        <div class="flex-1 min-w-0 text-left">
                                            <h4 class="text-xs font-black text-slate-900 tracking-tight truncate">${c.title}</h4>
                                            <p class="text-[9px] font-bold text-slate-400 truncate">${(u==null?void 0:u.customer_name)||"Customer"}</p>
                                        </div>
                                        <div class="text-right shrink-0">
                                            <p class="text-[9px] font-black ${v?"text-slate-900":"text-slate-400"} uppercase">${m}</p>
                                            <p class="text-[8px] font-bold text-slate-300 uppercase">Day ${c.day_offset}</p>
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
                    ${t.map(c=>{const u=s.filter(k=>k.automation_id===c.id),y=u.filter(k=>k.status==="sent").length;u.filter(k=>k.status==="pending").length;const v=u.length>0?Math.round(y/u.length*100):0;return`
                            <button type="button" onclick="window.setAutomationMode('details', '${c.id}')" class="card p-4 border-2 transition-all cursor-pointer text-left w-full ${d.activeAutomationId===c.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-100"}">
                                <div class="flex items-center gap-4 text-left">
                                    <div class="w-12 h-12 ${c.status==="active"?"bg-slate-900":"bg-slate-200"} rounded-xl flex items-center justify-center text-center">
                                        <span class="material-icons-outlined ${c.status==="active"?"text-white":"text-slate-400"} text-lg">smart_toy</span>
                                    </div>
                                    <div class="flex-1 min-w-0 text-left">
                                        <h4 class="text-sm font-black text-slate-900 tracking-tight truncate text-left">${c.name}</h4>
                                        <p class="text-[10px] font-bold text-slate-400 text-left">${c.customer_name}</p>
                                        <div class="flex items-center gap-3 mt-2">
                                            <div class="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                <div class="h-full bg-slate-900 rounded-full transition-all" style="width: ${v}%"></div>
                                            </div>
                                            <span class="text-[8px] font-black text-slate-400">${y}/${u.length}</span>
                                        </div>
                                    </div>
                                    <div class="text-right shrink-0">
                                        <div class="px-2 py-0.5 ${c.status==="active"?"bg-slate-900 text-white":"bg-slate-100 text-slate-400"} text-[8px] font-black rounded uppercase tracking-wider mb-1">${c.status}</div>
                                        <p class="text-[9px] font-bold text-slate-300 uppercase">${new Date(c.created_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}</p>
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
    `}let _e=null,me=null,_t="",De="product_journey";const fn={product_journey:{name:"Product Journey",description:"Welcome message, tips, and feedback sequence",messages:[{day:0,type:"welcome",title:"Welcome Message",content:"Thank you for your purchase! Here are some tips to get started with your new {product}..."},{day:1,type:"tips",title:"Getting Started",content:"Have you set up {product} yet? Here is a quick guide to help you..."},{day:3,type:"tips",title:"Pro Tips",content:"Here are some advanced tips to get the most out of your {product}..."},{day:7,type:"upsell",title:"Accessories",content:"Enhance your {product} experience with our recommended accessories..."},{day:14,type:"feedback",title:"How is it going?",content:"It has been 2 weeks! We would love to hear your feedback..."}]},installation:{name:"Installation Follow-up",description:"For products requiring installation",messages:[{day:0,type:"welcome",title:"Order Confirmed",content:"Your {product} order is confirmed! Installation will be scheduled soon."},{day:1,type:"reminder",title:"Installation Reminder",content:"Your installation is scheduled. Our technician will arrive on time."},{day:3,type:"tips",title:"Maintenance Tips",content:"Here are some tips to keep your {product} running smoothly..."},{day:7,type:"feedback",title:"Installation Feedback",content:"How was your installation experience? Let us know!"}]},premium:{name:"Premium Care",description:"Extended engagement for high-value purchases",messages:[{day:0,type:"welcome",title:"Welcome to Premium",content:"Thank you for your premium purchase! You now have access to priority support."},{day:1,type:"tips",title:"Exclusive Features",content:"Discover the exclusive features of your {product}..."},{day:3,type:"tips",title:"Expert Tips",content:"Our experts share their top tips for your {product}..."},{day:7,type:"upsell",title:"Extended Warranty",content:"Protect your investment with our extended warranty plans..."},{day:14,type:"tips",title:"Advanced Features",content:"Ready for advanced features? Here is what you can do..."},{day:21,type:"upsell",title:"Upgrade Options",content:"Check out the latest upgrades available for your {product}..."},{day:30,type:"feedback",title:"Monthly Check-in",content:"How is your experience so far? We value your feedback!"}]}};window.resetAutomationForm=()=>{_e=null,me=null,_t="",De="product_journey",window._automationContext=null};window.selectAutomationCustomer=e=>{_e=e,me=null,window.triggerRender()};window.selectAutomationSale=e=>{var n,l,r;me=e;const t=window.getCache(),s=(n=t.sales)==null?void 0:n.find(o=>o.id===e),a=((l=t.saleItems)==null?void 0:l.filter(o=>o.sale_id===e))||[];s&&(_t=`${((r=a[0])==null?void 0:r.product_name)||"Product"} - Post-Purchase Journey`,s.installation_required?De="installation":s.total_amount>=5e4&&(De="premium")),window.triggerRender()};window.updateAutomationName=e=>{_t=e};window.selectAutomationTemplate=e=>{De=e,window.triggerRender()};window.createAutomation=async()=>{var a,n,l;if(!_e||!me||!_t){window.toast.warning("Please select a customer, sale, and enter a name");return}const e=window.getCache(),t=(a=e.customers)==null?void 0:a.find(r=>r.id===_e),s=fn[De];if(!t||!s){window.toast.error("Invalid selection");return}try{const r=`AUTO-${Math.random().toString(36).substr(2,8).toUpperCase()}`,o=new Date;await T.automations.add({id:r,name:_t,customer_id:_e,customer_name:t.name,sale_id:me,status:"active",created_at:o.toISOString()});const c=((l=(((n=e.saleItems)==null?void 0:n.filter(u=>u.sale_id===me))||[])[0])==null?void 0:l.product_name)||"your product";for(const u of s.messages){const y=`MSG-${Math.random().toString(36).substr(2,8).toUpperCase()}`,v=new Date(o.getTime()+u.day*864e5),k=u.content.replace(/\{product\}/g,c).replace(/\{name\}/g,t.name.split(" ")[0]);if(await T.automations.addMessage({id:y,automation_id:r,message_type:u.type,title:u.title,content:k,day_offset:u.day,scheduled_date:v.toISOString(),status:u.day===0?"sent":"pending"}),u.day===0&&t.phone){let m="sent";try{window.toast.info("Sending welcome message via WhatsApp..."),m=(await window.sendWhatsAppMessage(t.phone,k)).success?"delivered":"sent"}catch($){console.error("WATI welcome message error:",$),m="failed"}await T.communications.add({id:`COMM-${Math.random().toString(36).substr(2,8).toUpperCase()}`,customer_id:_e,type:"whatsapp",direction:"outgoing",content:k,sent_at:o.toISOString(),automation_id:r,sale_id:me,status:m})}}await J(),window.toast.success("Automation created successfully!"),window.resetAutomationForm(),window.setAutomationMode("details",r)}catch(r){console.error("Error creating automation:",r),window.toast.error("Failed to create automation: "+r.message)}};function hl(e=!1){var o,p;const t=window.getCache(),s=t.customers||[],a=t.sales||[];if(window._automationContext&&!_e){const c=window._automationContext;_e=c.customerId,me=c.transactionId,(p=(o=c.items)==null?void 0:o[0])!=null&&p.name&&(_t=`${c.items[0].name} - Post-Purchase Journey`),c.installationRequired?De="installation":c.total>=5e4&&(De="premium")}const n=_e?a.filter(c=>c.customer_id===_e&&c.status!=="draft"):[],l=s.find(c=>c.id===_e);a.find(c=>c.id===me),me&&(t.saleItems||[]).filter(c=>c.sale_id===me);const r=fn[De];return`
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
                                    ${l.name.split(" ").map(c=>c[0]).join("").toUpperCase().slice(0,2)}
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
                            ${s.slice(0,10).map(c=>`
                                <button type="button" onclick="window.selectAutomationCustomer('${c.id}')" class="card p-3 w-full text-left hover:border-slate-300 transition-all flex items-center gap-3">
                                    <div class="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center font-black text-[10px] text-slate-400">
                                        ${c.name.split(" ").map(u=>u[0]).join("").toUpperCase().slice(0,2)}
                                    </div>
                                    <div class="text-left">
                                        <p class="text-xs font-black text-slate-900">${c.name}</p>
                                        <p class="text-[9px] font-bold text-slate-400">${c.phone||"No phone"}</p>
                                    </div>
                                </button>
                            `).join("")}
                        </div>
                    `}
                </div>

                <!-- Step 2: Select Sale -->
                ${_e?`
                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">2. Select Transaction</p>
                        
                        ${n.length===0?`
                            <div class="card p-6 text-center border-dashed">
                                <p class="text-[10px] font-bold text-slate-400">No completed sales for this customer</p>
                            </div>
                        `:`
                            <div class="space-y-2 max-h-48 overflow-y-auto">
                                ${n.map(c=>{var v;const u=(t.saleItems||[]).filter(k=>k.sale_id===c.id),y=me===c.id;return`
                                        <button type="button" onclick="window.selectAutomationSale('${c.id}')" class="card p-4 w-full text-left transition-all ${y?"border-2 border-slate-900 shadow-lg":"hover:border-slate-300"}">
                                            <div class="flex justify-between items-start">
                                                <div class="text-left">
                                                    <p class="text-xs font-black text-slate-900">${((v=u[0])==null?void 0:v.product_name)||"Sale"}</p>
                                                    <p class="text-[9px] font-bold text-slate-400">Order #${c.id} • ₹${(c.total_amount||0).toLocaleString()}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 uppercase">${new Date(c.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}</span>
                                            </div>
                                            ${y?'<span class="material-icons-outlined text-slate-900 text-sm mt-2">check_circle</span>':""}
                                        </button>
                                    `}).join("")}
                            </div>
                        `}
                    </div>
                `:""}

                <!-- Step 3: Configure Automation -->
                ${me?`
                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">3. Automation Name</p>
                        <input type="text" value="${_t}" onchange="window.updateAutomationName(this.value)" placeholder="e.g., iPhone 15 - Welcome Sequence" class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                    </div>

                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">4. Message Template</p>
                        <div class="grid grid-cols-1 gap-2">
                            ${Object.entries(fn).map(([c,u])=>`
                                <button type="button" onclick="window.selectAutomationTemplate('${c}')" class="card p-4 text-left transition-all ${De===c?"border-2 border-slate-900 shadow-lg":"hover:border-slate-300"}">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 ${De===c?"bg-slate-900 text-white":"bg-slate-100 text-slate-400"} rounded-xl flex items-center justify-center">
                                            <span class="material-icons-outlined text-sm">${c==="product_journey"?"route":c==="installation"?"build":"star"}</span>
                                        </div>
                                        <div class="flex-1">
                                            <p class="text-xs font-black text-slate-900">${u.name}</p>
                                            <p class="text-[9px] font-bold text-slate-400">${u.description}</p>
                                        </div>
                                        ${De===c?'<span class="material-icons-outlined text-slate-900 text-sm">check_circle</span>':""}
                                    </div>
                                </button>
                            `).join("")}
                        </div>
                    </div>

                    <!-- Preview Messages -->
                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Message Sequence Preview</p>
                        <div class="relative pl-6 space-y-3 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-slate-200">
                            ${r.messages.map((c,u)=>`
                                <div class="relative text-left">
                                    <div class="absolute -left-6 top-0 w-4 h-4 ${c.type==="welcome"?"bg-slate-900":c.type==="tips"?"bg-slate-700":c.type==="upsell"?"bg-slate-600":c.type==="feedback"?"bg-slate-500":"bg-slate-400"} rounded-full flex items-center justify-center z-10">
                                        <span class="text-white text-[8px] font-black">${u+1}</span>
                                    </div>
                                    <div class="bg-slate-50 rounded-xl p-3">
                                        <div class="flex items-center justify-between mb-1">
                                            <span class="text-[8px] font-black text-slate-500 uppercase">Day ${c.day} • ${c.type}</span>
                                        </div>
                                        <p class="text-[10px] font-black text-slate-900">${c.title}</p>
                                    </div>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                `:""}
            </div>

            <!-- Footer Action -->
            ${me&&_t?`
                <div class="p-4 sm:p-6 bg-white border-t border-slate-100 text-center shrink-0">
                    <button onclick="window.createAutomation()" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-center">
                        <span class="material-icons-outlined text-sm">play_circle</span> Start Automation
                    </button>
                </div>
            `:""}
        </div>
    `}window.sendAutomationMessage=async e=>{var t,s,a,n,l;try{const r=window.getCache(),o=(t=r.automationMessages)==null?void 0:t.find($=>$.id===e),p=(s=r.automations)==null?void 0:s.find($=>$.id===(o==null?void 0:o.automation_id)),c=(a=r.customers)==null?void 0:a.find($=>$.id===(p==null?void 0:p.customer_id));if(!o||!p){window.toast.error("Message not found");return}if(!(c!=null&&c.phone)){window.toast.error("Customer phone number not found");return}window.toast.info("Sending WhatsApp message...");const y=((l=(((n=r.saleItems)==null?void 0:n.filter($=>$.sale_id===p.sale_id))||[])[0])==null?void 0:l.product_name)||"your product",v=o.content.replace(/\{product\}/g,y).replace(/\{name\}/g,c.name.split(" ")[0]);let k="sent",m=null;try{m=await window.sendWhatsAppMessage(c.phone,v),m.success?(k="delivered",window.toast.success("WhatsApp message sent!")):(k="failed",window.toast.warning("Message queued but may not have been delivered"))}catch($){console.error("WATI Error:",$),k="failed",window.toast.error("WhatsApp send failed: "+$.message)}await T.automations.updateMessageStatus(e,k==="failed"?"pending":"sent",new Date().toISOString()),await T.communications.add({id:`COMM-${Math.random().toString(36).substr(2,8).toUpperCase()}`,customer_id:p.customer_id,type:"whatsapp",direction:"outgoing",content:v,sent_at:new Date().toISOString(),automation_id:p.id,sale_id:p.sale_id,status:k}),await J()}catch(r){console.error("Error sending message:",r),window.toast.error("Failed to send message: "+r.message)}};window.toggleAutomationStatus=async e=>{var t;try{const a=(t=window.getCache().automations)==null?void 0:t.find(l=>l.id===e);if(!a)return;const n=a.status==="active"?"paused":"active";await T.automations.update(e,{status:n}),await J(),window.toast.success(`Automation ${n==="active"?"resumed":"paused"}`)}catch(s){console.error("Error toggling automation:",s),window.toast.error("Failed to update automation")}};window.deleteAutomation=async e=>{window.showConfirm("Are you sure you want to delete this automation? All scheduled messages will be cancelled.",async()=>{try{await T.automations.deleteMessages(e),await T.automations.delete(e),await J(),window.toast.success("Automation deleted"),window.setAutomationMode("dashboard")}catch(t){console.error("Error deleting automation:",t),window.toast.error("Failed to delete automation")}})};window.openWhatsAppMessage=(e,t)=>{const s=`https://wa.me/${(e==null?void 0:e.replace(/\D/g,""))||""}?text=${encodeURIComponent(t)}`;window.open(s,"_blank")};function gl(e,t=!1){var y,v,k;const s=window.getCache(),a=(y=s.automations)==null?void 0:y.find(m=>m.id===e);if(!a)return`
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50">smart_toy</span>
                    <p class="text-[10px] font-black uppercase tracking-widest">Automation not found</p>
                </div>
            </div>
        `;const n=(s.automationMessages||[]).filter(m=>m.automation_id===e).sort((m,$)=>m.day_offset-$.day_offset),l=(v=s.customers)==null?void 0:v.find(m=>m.id===a.customer_id),r=(k=s.sales)==null?void 0:k.find(m=>m.id===a.sale_id);r&&(s.saleItems||[]).filter(m=>m.sale_id===r.id);const o=n.filter(m=>m.status==="sent").length,p=n.filter(m=>m.status==="pending").length,c=n.length>0?Math.round(o/n.length*100):0,u=m=>{switch(m){case"welcome":return{icon:"waving_hand",bg:"bg-slate-900",text:"text-white"};case"tips":return{icon:"lightbulb",bg:"bg-slate-700",text:"text-white"};case"upsell":return{icon:"trending_up",bg:"bg-slate-600",text:"text-white"};case"feedback":return{icon:"rate_review",bg:"bg-slate-500",text:"text-white"};case"reminder":return{icon:"notifications",bg:"bg-slate-400",text:"text-white"};default:return{icon:"chat",bg:"bg-slate-300",text:"text-slate-700"}}};return`
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
                        <div class="h-full bg-slate-900 rounded-full transition-all" style="width: ${c}%"></div>
                    </div>
                    <span class="text-[10px] font-black text-slate-500">${o}/${n.length}</span>
                </div>
            </header>

            <!-- Content -->
            <div class="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6">
                <!-- Stats -->
                <div class="grid grid-cols-3 gap-3">
                    <div class="card p-3 text-center">
                        <p class="text-xl font-black text-slate-900">${o}</p>
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
                        ${n.map((m,$)=>{const S=u(m.message_type),h=m.status==="sent",P=new Date(m.scheduled_date).toDateString()===new Date().toDateString();return new Date(m.scheduled_date)<new Date,`
                                <div class="relative">
                                    <div class="absolute -left-8 top-4 w-6 h-6 ${h?"bg-slate-900":"bg-white border-2 border-slate-200"} rounded-full flex items-center justify-center z-10">
                                        ${h?'<span class="material-icons-outlined text-white text-xs">check</span>':`<span class="text-[9px] font-black text-slate-400">${$+1}</span>`}
                                    </div>
                                    
                                    <div class="card p-4 ${h?"bg-slate-50 border-slate-100":P?"border-slate-900 shadow-lg":"border-slate-100"}">
                                        <div class="flex items-start gap-3">
                                            <div class="w-10 h-10 ${S.bg} rounded-xl flex items-center justify-center shrink-0">
                                                <span class="material-icons-outlined ${S.text} text-sm">${S.icon}</span>
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <div class="flex items-center justify-between mb-1">
                                                    <span class="text-[8px] font-black ${h?"text-slate-400":P?"text-slate-900":"text-slate-400"} uppercase">
                                                        Day ${m.day_offset} • ${m.message_type}
                                                    </span>
                                                    <span class="text-[8px] font-bold ${h?"text-slate-400":P?"text-slate-900":"text-slate-300"}">
                                                        ${h?"Sent":P?"Today":new Date(m.scheduled_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}
                                                    </span>
                                                </div>
                                                <h4 class="text-xs font-black text-slate-900 mb-1">${m.title}</h4>
                                                <p class="text-[10px] font-bold text-slate-500 line-clamp-2">${m.content}</p>
                                                
                                                ${!h&&(l!=null&&l.phone)?`
                                                    <div class="flex items-center gap-2 mt-3">
                                                        <button onclick="window.sendAutomationMessage('${m.id}')" class="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[9px] font-black uppercase flex items-center gap-1 hover:bg-slate-800 transition-all">
                                                            <span class="material-icons-outlined text-xs">send</span> Send Now
                                                        </button>
                                                        <button onclick="window.openWhatsAppMessage('${l.phone}', '${m.content.replace(/'/g,"\\'")}')" class="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-[9px] font-black uppercase flex items-center gap-1 hover:bg-slate-200 transition-all">
                                                            <span class="material-icons-outlined text-xs">chat</span> WhatsApp
                                                        </button>
                                                    </div>
                                                `:""}
                                                
                                                ${h&&m.sent_at?`
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
    `}function Vn(e){const t=e==="mobile",s=e==="desktop-secondary";return window.setAutomationMode=(a,n=null)=>{d.automationViewMode=a,n!==null&&(d.activeAutomationId=n),I()},s?d.automationViewMode==="create"?hl():d.automationViewMode==="details"&&d.activeAutomationId?gl(d.activeAutomationId):`
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50 text-center">smart_toy</span>
                    <p class="text-[10px] font-black uppercase tracking-widest text-center">Select a workflow or create new</p>
                </div>
            </div>
        `:t&&d.automationViewMode==="create"?hl(!0):t&&d.automationViewMode==="details"?gl(d.activeAutomationId,!0):Np()}function qp(e=!0){if(!e)return;const t=[d.currentApp];d.currentApp==="sales"?t.push(d.currentTab):d.currentApp==="clients"?(t.push(d.clientViewMode),d.selectedClient&&d.clientViewMode==="profile"&&t.push(encodeURIComponent(d.selectedClient))):d.currentApp==="reports"?t.push(d.reportsTab):d.currentApp==="repairs"?(t.push(d.repairTab),t.push(d.repairViewMode)):d.currentApp==="inventory"?(t.push(d.inventoryTab),t.push(d.inventoryMode)):d.currentApp==="marketplace"?(t.push(d.marketplaceTab),t.push(d.marketplaceViewMode)):d.currentApp==="inquiries"?t.push(d.inquiryViewMode):d.currentApp==="prebooking"?t.push(d.preBookingViewMode):d.currentApp==="automation"?t.push(d.automationViewMode):d.currentApp==="schemes"?t.push(d.schemesTab):d.currentApp==="settings"&&t.push(d.settingsView);const s="#/"+t.filter(Boolean).join("/");window.location.hash!==s&&window.history.pushState(null,"",s)}function vl(){const e=window.location.hash.replace("#/","");if(!e)return;const t=e.split("/"),s=t[0];s&&(d.currentApp=s),s==="sales"?t[1]&&(d.currentTab=t[1]):s==="clients"?(t[1]&&(d.clientViewMode=t[1]),t[2]&&(d.selectedClient=decodeURIComponent(t[2]))):s==="reports"?t[1]&&(d.reportsTab=t[1]):s==="repairs"?(t[1]&&(d.repairTab=t[1]),t[2]&&(d.repairViewMode=t[2])):s==="inventory"?(t[1]&&(d.inventoryTab=t[1]),t[2]&&(d.inventoryMode=t[2])):s==="marketplace"?(t[1]&&(d.marketplaceTab=t[1]),t[2]&&(d.marketplaceViewMode=t[2])):s==="inquiries"?t[1]&&(d.inquiryViewMode=t[1]):s==="prebooking"?t[1]&&(d.preBookingViewMode=t[1]):s==="automation"?t[1]&&(d.automationViewMode=t[1]):s==="schemes"?t[1]&&(d.schemesTab=t[1]):s==="settings"&&t[1]&&(d.settingsView=t[1]),I(!1)}function Bp(){window.addEventListener("hashchange",vl),vl()}const Et={endpoint:"https://live-mt-server.wati.io/319917",token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im1hcmtldGluZ0BuZXN0ZXIuaW4iLCJuYW1laWQiOiJtYXJrZXRpbmdAbmVzdGVyLmluIiwiZW1haWwiOiJtYXJrZXRpbmdAbmVzdGVyLmluIiwiYXV0aF90aW1lIjoiMDIvMTAvMjAyNSAwOTo1MDoxOSIsInRlbmFudF9pZCI6IjMxOTkxNyIsImp0aSI6ImFiNzBlNGU3LTAxNDUtNDg4NS1hYWU3LTQ3ZDc3YTA0NThhOSIsImRiX25hbWUiOiJtdC1wcm9kLVRlbmFudHMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBRE1JTklTVFJBVE9SIiwiZXhwIjoyNTM0MDIzMDA4MDAsImlzcyI6IkNsYXJlX0FJIiwiYXVkIjoiQ2xhcmVfQUkifQ.V1k2oIW0iDKep9_zG9WpS62LVcgXxj7vAndigvmZS2I"};function Fp(e){if(!e)return null;let t=e.replace(/\D/g,"");return t.length===10&&(t="91"+t),t}async function Vp(e,t){var a;const s=Fp(e);if(!s)throw new Error("Invalid phone number");try{const n=await fetch(`${Et.endpoint}/api/v1/sendSessionMessage/${s}`,{method:"POST",headers:{Authorization:Et.token,"Content-Type":"application/json"},body:JSON.stringify({messageText:t})}),l=await n.json();if(!n.ok){if(console.error("WATI API Error:",l),(a=l.message)!=null&&a.includes("session")||l.result===!1)return console.log("Session expired, trying template message..."),await Up(s,t);throw new Error(l.message||"Failed to send message")}return{success:!0,data:l}}catch(n){throw console.error("WATI Send Error:",n),n}}async function Up(e,t){try{const s=await fetch(`${Et.endpoint}/api/v1/sendTemplateMessage`,{method:"POST",headers:{Authorization:Et.token,"Content-Type":"application/json"},body:JSON.stringify({whatsappNumber:e,templateName:"retaileros_notification",parameters:[{name:"message",value:t}],broadcast_name:"RetailerOS"})}),a=await s.json();return!s.ok&&a.result===!1?(console.log("Template not found, trying interactive message..."),await Hp(e,t)):{success:!0,data:a,method:"template"}}catch(s){throw console.error("Template message error:",s),s}}async function Hp(e,t){try{const s=await fetch(`${Et.endpoint}/api/v1/sendInteractiveButtonsMessage`,{method:"POST",headers:{Authorization:Et.token,"Content-Type":"application/json"},body:JSON.stringify({whatsappNumber:e,header:{type:"Text",text:"RetailerOS"},body:t,footer:"Powered by RetailerOS",buttons:[{type:"reply",reply:{id:"reply_ok",title:"OK"}}]})}),a=await s.json();return{success:s.ok,data:a,method:"interactive"}}catch(s){throw console.error("Interactive message error:",s),s}}async function Gp(){try{return(await fetch(`${Et.endpoint}/api/v1/getContacts?pageSize=1`,{method:"GET",headers:{Authorization:Et.token}})).ok}catch(e){return console.error("WATI connection test failed:",e),!1}}window.sendWhatsAppMessage=Vp;window.testWatiConnection=Gp;let Mt=null,Ha=null;const wl={success:{icon:"check_circle",bg:"bg-slate-900",text:"text-white"},error:{icon:"error",bg:"bg-red-600",text:"text-white"},warning:{icon:"warning",bg:"bg-amber-500",text:"text-white"},info:{icon:"info",bg:"bg-slate-700",text:"text-white"}};function Wp(){Mt||(Mt=document.createElement("div"),Mt.id="toast-container",Mt.className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center gap-2 pointer-events-none",document.body.appendChild(Mt))}function Bs(e,t="info",s=3e3){Wp(),Ha&&clearTimeout(Ha);const a=wl[t]||wl.info,n=document.createElement("div");return n.className=`
        ${a.bg} ${a.text} 
        px-5 py-3.5 rounded-2xl shadow-2xl 
        flex items-center gap-3 
        transform transition-all duration-300 
        opacity-0 translate-y-[-20px] scale-95
        pointer-events-auto
        max-w-[90vw] sm:max-w-md
    `.trim().replace(/\s+/g," "),n.innerHTML=`
        <span class="material-icons-outlined text-lg shrink-0">${a.icon}</span>
        <span class="text-sm font-bold leading-snug">${Ra(e)}</span>
    `,(t==="error"||e.length>50)&&(n.innerHTML+=`
            <button onclick="this.parentElement.remove()" class="ml-2 w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded-full transition-all shrink-0">
                <span class="material-icons-outlined text-sm">close</span>
            </button>
        `),Mt.innerHTML="",Mt.appendChild(n),requestAnimationFrame(()=>{n.classList.remove("opacity-0","translate-y-[-20px]","scale-95"),n.classList.add("opacity-100","translate-y-0","scale-100")}),Ha=setTimeout(()=>{zp(n)},s),n}function zp(e){!e||!e.parentElement||(e.classList.remove("opacity-100","translate-y-0","scale-100"),e.classList.add("opacity-0","translate-y-[-20px]","scale-95"),setTimeout(()=>{e.remove()},300))}function Ra(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}const Yp={success:(e,t)=>Bs(e,"success",t),error:(e,t)=>Bs(e,"error",t||5e3),warning:(e,t)=>Bs(e,"warning",t||4e3),info:(e,t)=>Bs(e,"info",t)};function Jp(e,t,s){const a=document.createElement("div");a.className="fixed inset-0 z-[9998] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4",a.innerHTML=`
        <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all duration-200 scale-95 opacity-0">
            <div class="p-6 text-center">
                <div class="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span class="material-icons-outlined text-2xl text-slate-600">help_outline</span>
                </div>
                <p class="text-sm font-bold text-slate-900 leading-relaxed">${Ra(e)}</p>
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
    `,document.body.appendChild(a);const n=a.querySelector("div > div");requestAnimationFrame(()=>{n.classList.remove("scale-95","opacity-0"),n.classList.add("scale-100","opacity-100")}),a.querySelector("#confirm-cancel").onclick=()=>{pt(a),s&&s()},a.querySelector("#confirm-ok").onclick=()=>{pt(a),t&&t()},a.onclick=l=>{l.target===a&&(pt(a),s&&s())}}function pt(e){const t=e.querySelector("div > div");t.classList.remove("scale-100","opacity-100"),t.classList.add("scale-95","opacity-0"),setTimeout(()=>e.remove(),200)}function Kp(e,t="",s,a){const n=document.createElement("div");n.className="fixed inset-0 z-[9998] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4",n.innerHTML=`
        <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all duration-200 scale-95 opacity-0">
            <div class="p-6">
                <p class="text-sm font-bold text-slate-900 mb-4">${Ra(e)}</p>
                <input type="text" id="prompt-input" value="${Ra(t)}" 
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
    `,document.body.appendChild(n);const l=n.querySelector("div > div"),r=n.querySelector("#prompt-input");requestAnimationFrame(()=>{l.classList.remove("scale-95","opacity-0"),l.classList.add("scale-100","opacity-100"),r.focus(),r.select()}),r.onkeydown=o=>{if(o.key==="Enter"){const p=r.value.trim();pt(n),p&&s&&s(p)}else o.key==="Escape"&&(pt(n),a&&a())},n.querySelector("#prompt-cancel").onclick=()=>{pt(n),a&&a()},n.querySelector("#prompt-ok").onclick=()=>{const o=r.value.trim();pt(n),o&&s&&s(o)},n.onclick=o=>{o.target===n&&(pt(n),a&&a())}}window.toast=Yp;window.showToast=Bs;window.showConfirm=Jp;window.showPrompt=Kp;function Gi(){return d.currentApp==="sales"?d.currentTab==="new-sale"?Fi():Vi():d.currentApp==="clients"?Tn("desktop-primary"):d.currentApp==="reports"?Mn("desktop-primary"):d.currentApp==="repairs"?Dn("desktop-primary"):d.currentApp==="marketing"?Ln("desktop-primary"):d.currentApp==="promoters"?jn("desktop-primary"):d.currentApp==="inventory"?On("desktop-primary"):d.currentApp==="settings"?Pn("desktop-primary"):d.currentApp==="schemes"?Nn("desktop-primary"):d.currentApp==="marketplace"?qn("desktop-primary"):d.currentApp==="inquiries"?Bn("desktop-primary"):d.currentApp==="prebooking"?Fn("desktop-primary"):d.currentApp==="automation"?Vn("desktop-primary"):'<div class="p-10 flex items-center justify-center h-full text-slate-300 font-bold uppercase tracking-widest">App Module Not Found</div>'}function Qp(){return d.currentApp==="sales"?d.salesMode==="add-customer"?xn("desktop"):An():d.currentApp==="clients"?Tn("desktop-secondary"):d.currentApp==="reports"?Mn("desktop-secondary"):d.currentApp==="repairs"?Dn("desktop-secondary"):d.currentApp==="marketing"?Ln("desktop-secondary"):d.currentApp==="promoters"?jn("desktop-secondary"):d.currentApp==="inventory"?On("desktop-secondary"):d.currentApp==="settings"?Pn("desktop-secondary"):d.currentApp==="schemes"?Nn("desktop-secondary"):d.currentApp==="marketplace"?qn("desktop-secondary"):d.currentApp==="inquiries"?Bn("desktop-secondary"):d.currentApp==="prebooking"?Fn("desktop-secondary"):d.currentApp==="automation"?Vn("desktop-secondary"):'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-2 opacity-50">grid_view</span><p class="text-[10px] font-black uppercase tracking-widest">Select an app to view details</p></div></div>'}function Wi(){return Ga("desktop")}function Xp(){return`
        <div class="h-full flex flex-row divide-x divide-slate-200 bg-white w-full">
            <!-- Col 1: App Menu (25% Width) -->
            <div class="w-[25%] shrink-0 h-full bg-white z-20 overflow-y-auto border-r border-slate-200">
                ${Wi()}
            </div>

            <!-- Col 2: Active App (Flexible / Remaining Width ~45%) -->
            <div class="flex-1 bg-white h-full overflow-hidden flex flex-col relative z-10">
               ${d.isLoggedIn?d.currentApp==="launcher"?'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-4 opacity-20">arrow_back</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Select an App from the Menu</p></div></div>':Gi():d.authMode==="register"?Hs("desktop-primary"):'<div class="h-full w-full bg-slate-950 flex flex-col items-center justify-center text-white/5 font-black text-[20vw] leading-none overflow-hidden select-none pointer-events-none"><div>OS</div></div>'}
            </div>

            <!-- Col 3: Preview (30% Width) -->
            <div class="w-[30%] shrink-0 bg-slate-50/50 h-full overflow-hidden flex flex-col relative dot-grid border-l border-slate-200">
                ${d.isLoggedIn?d.currentApp==="launcher"?'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-6xl mb-4 opacity-20">dashboard</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Retailer OS Environment</p></div></div>':Qp():d.authMode==="register"?Hs("desktop-secondary"):'<div class="h-full w-full bg-slate-950/95 flex flex-col items-center justify-center text-white/5 font-black text-[15vw] leading-none overflow-hidden select-none pointer-events-none"><div>RETAILER</div></div>'}
            </div>
        </div>
    `}function Zp(){return`
        <div class="h-full grid grid-cols-2 divide-x divide-slate-200 bg-white">
            <!-- Col 1: Sidebar / App Menu -->
            <div class="col-span-1 h-full bg-white z-20 overflow-y-auto">
                ${Wi()}
            </div>

            <!-- Col 2: Primary Content -->
            <div class="col-span-1 bg-white h-full overflow-hidden flex flex-col relative z-10">
               ${d.currentApp==="launcher"?'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-4 opacity-20">arrow_back</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Select an App from the Menu</p></div></div>':Gi()}
               
               <!-- Tablet Specific: Sticky Preview Button if Active -->
               ${d.currentApp==="sales"&&(d.currentTab==="new-sale"&&window.getActiveCart&&window.getActiveCart().length>0||d.currentTab==="history"&&d.salesHistoryId)?`
                    <div class="absolute bottom-6 right-6 z-50">
                        <button onclick="toggleMobileReceipt(true)" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                            <span class="material-icons-outlined">receipt_long</span>
                        </button>
                    </div>
                    ${d.showMobileReceipt?`
                        <div class="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-8">
                            <div class="bg-white w-full max-w-lg h-[80vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">
                                <div class="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                                    <h3 class="text-xs font-black text-slate-900 uppercase tracking-widest">Receipt Preview</h3>
                                    <button onclick="toggleMobileReceipt(false)" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-white rounded-full shadow-sm"><span class="material-icons-outlined text-lg">close</span></button>
                                </div>
                                <div class="overflow-y-auto flex-1 p-8 bg-slate-50/50">
                                    ${An()}
                                </div>
                            </div>
                        </div>
                    `:""}
               `:""}
            </div>
        </div>
    `}function zi(){if(!d.isLoggedIn)return`
            <div class="h-full w-full bg-white">
                ${Tl()}
            </div>
        `;if(d.currentApp==="launcher")return Ga("mobile");if(d.currentApp==="sales"){const t=window.getActiveCart&&window.getActiveCart().length>0,s=d.currentTab==="new-sale"&&t||d.currentTab==="history"&&d.salesHistoryId;return d.showMobileReceipt&&s?`
                <div class="fixed inset-0 z-[60] bg-white flex flex-col animate-slide-up">
                    <div class="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50 shrink-0">
                        <div class="flex items-center gap-2">
                             <button onclick="toggleMobileReceipt(false)" class="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-900"><span class="material-icons-outlined">arrow_back</span></button>
                             <h3 class="text-xs font-black text-slate-900 uppercase tracking-widest">Receipt Preview</h3>
                        </div>
                    </div>
                    <div class="overflow-y-auto flex-1 p-4 pb-20 bg-slate-50/50">
                        ${An()}
                    </div>
                </div>
            `:`
            <div class="flex flex-col w-full h-full overflow-hidden bg-slate-50 relative">
                ${d.currentTab==="new-sale"?Fi():Vi()}
                ${s?'<div class="h-28 shrink-0 w-full"></div>':""} <!-- Spacer inside flex flow pushing content up -->
            </div>
            ${s?`
            <div class="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100 z-50 w-full mb-safe">
                <button onclick="toggleMobileReceipt(true)" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase shadow-xl flex items-center justify-center gap-2">
                    <span class="material-icons-outlined text-sm">receipt_long</span> Preview Receipt
                </button>
            </div>
        `:""}
        `}let e="";if(d.currentApp==="clients")e=Tn("mobile");else if(d.currentApp==="reports")e=Mn("mobile");else if(d.currentApp==="repairs")e=Dn("mobile");else if(d.currentApp==="marketing")e=Ln("mobile");else if(d.currentApp==="promoters")e=jn("mobile");else if(d.currentApp==="inventory")e=On("mobile");else if(d.currentApp==="settings")e=Pn("mobile");else if(d.currentApp==="schemes")e=Nn("mobile");else if(d.currentApp==="marketplace")e=qn("mobile");else if(d.currentApp==="inquiries")e=Bn("mobile");else if(d.currentApp==="prebooking")e=Fn("mobile");else if(d.currentApp==="automation")e=Vn("mobile");else return Ga("mobile");return`
        <div class="flex flex-col w-full h-full overflow-hidden bg-slate-50 relative">
            ${e}
        </div>
    `}function Aa(){const e=document.getElementById("app");if(e)try{const t=window.innerWidth;t<768?e.innerHTML=zi():t>=768&&t<1024?e.innerHTML=Zp():e.innerHTML=Xp()}catch(t){console.error(t),e.innerHTML=`< div class="p-4 text-red-500 font-bold" > Error: ${t.message} <br><small>${t.stack}</small></div>`}}function eu(){const e=window.innerWidth;if(e<768){const t=document.getElementById("app");t&&(t.innerHTML=zi())}else{const t=document.querySelector(".flex-1.bg-white.h-full.overflow-hidden.flex.flex-col.relative.z-10")||document.querySelector(".col-span-1.bg-white.h-full.overflow-hidden.flex.flex-col.relative.z-10"),s=document.querySelector(".w-\\[30\\%\\].shrink-0.bg-slate-50\\/50.h-full.overflow-hidden.flex.flex-col.relative.dot-grid.border-l.border-slate-200");t&&(t.innerHTML=d.authMode==="register"?Hs("desktop-primary"):'<div class="h-full w-full bg-slate-950 flex flex-col items-center justify-center text-white/5 font-black text-[20vw] leading-none overflow-hidden select-none pointer-events-none"><div>OS</div></div>'),s&&e>=1024&&(s.innerHTML=d.authMode==="register"?Hs("desktop-secondary"):'<div class="h-full w-full bg-slate-950/95 flex flex-col items-center justify-center text-white/5 font-black text-[15vw] leading-none overflow-hidden select-none pointer-events-none"><div>RETAILER</div></div>')}}window.updateAuthContent=eu;El(Aa);El(qp);Bp();window.addEventListener("resize",()=>{window.innerWidth!==d.viewportWidth&&(d.viewportWidth=window.innerWidth,d.gridCols=window.innerWidth<768?4:3,Aa())});J().then(()=>{console.log("Initial data sync complete"),Aa()}).catch(e=>{console.error("Initial sync failed:",e),Aa()});

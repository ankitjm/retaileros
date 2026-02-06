var nr=Object.defineProperty;var Zn=e=>{throw TypeError(e)};var lr=(e,t,s)=>t in e?nr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var q=(e,t,s)=>lr(e,typeof t!="symbol"?t+"":t,s),Wa=(e,t,s)=>t.has(e)||Zn("Cannot "+s);var c=(e,t,s)=>(Wa(e,t,"read from private field"),s?s.call(e):t.get(e)),k=(e,t,s)=>t.has(e)?Zn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),m=(e,t,s,a)=>(Wa(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),S=(e,t,s)=>(Wa(e,t,"access private method"),s);var es=(e,t,s,a)=>({set _(n){m(e,t,n,s)},get _(){return c(e,t,a)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(n){if(n.ep)return;n.ep=!0;const l=s(n);fetch(n.href,l)}})();const ir=localStorage.getItem("retaileros_logged_in")==="true",rr=localStorage.getItem("retaileros_retailer_id")||null,or=localStorage.getItem("retaileros_retailer_code")||null,cr=localStorage.getItem("retaileros_retailer_name")||null,p={retailerId:rr,retailerCode:or,retailerName:cr,currentApp:window.innerWidth<768?"launcher":"sales",currentTab:"new-sale",salesMode:"default",salesHistoryId:"ORD-99281",historyViewMode:"completed",historyDateFilter:"today",historyFromDate:"",historyToDate:"",showMobileReceipt:!1,reportsTab:"sales",repairTab:"active",repairViewMode:"search",selectedRepairDevice:null,activeRepairId:null,repairContext:null,selectedClient:null,selectedClientId:null,clientViewMode:"directory",clientSearchQuery:"",clientInvoiceId:null,selectedGroupId:null,groupViewMode:"list",groupSearchQuery:"",promoterViewMode:"performance",inventoryTab:"brands",inventoryMode:"details",activeCategory:null,settingsView:"roles",viewportWidth:window.innerWidth,gridCols:window.innerWidth<768?4:3,schemesTab:"list",activeSchemeBrand:"Apple",activeScheme:"June Activation Bonus",showSchemeDetails:!1,marketplaceTab:"browse",marketplaceViewMode:"list",myStoreTab:"dashboard",myStoreViewMode:"list",activeStoreOrderId:null,activeListingId:null,isLoggedIn:ir,authMode:"login",registrationStep:1,inquiryViewMode:"list",activeInquiry:null,preBookingViewMode:"dashboard",activeCampaign:null,automationViewMode:"dashboard",activeAutomationId:null},Ol=[],Ll=e=>{Ol.push(e)},D=(e=!0)=>{Ol.forEach(t=>t(e))};function dr(e){p.currentApp=e,e==="clients"&&(p.clientViewMode="directory"),D()}function pr(e){p.currentTab=e,D()}function ur(e){p.salesHistoryId=e,e&&window.innerWidth<768&&(p.showMobileReceipt=!0),D()}function xr(e){p.showMobileReceipt=e,D()}function fr(e){p.reportsTab=e,D()}function br(e){p.repairTab=e,D()}function mr(e,t=null){p.repairViewMode=e,t&&(p.selectedRepairDevice=t),D()}function hr(e){p.gridCols=e,D()}function jl(e,t=null,s=null){p.clientViewMode=e,t&&(p.selectedClient=t),s&&(p.selectedClientId=s),e!=="invoice"&&(p.clientInvoiceId=null),D()}function gr(e){p.clientInvoiceId=e,p.clientViewMode="invoice",D()}function vr(e){p.schemesTab=e,D()}function wr(e){p.activeSchemeBrand=e,D()}function yr(e){p.activeScheme=e,D()}function kr(e){p.showSchemeDetails=e,D()}function _r(e){p.marketplaceTab=e,D()}function Sr(e){p.marketplaceViewMode=e,D()}function $r(e,t,s){p.retailerId=e,p.retailerCode=t,p.retailerName=s,localStorage.setItem("retaileros_retailer_id",e),localStorage.setItem("retaileros_retailer_code",t),localStorage.setItem("retaileros_retailer_name",s)}function Pl(){p.retailerId=null,p.retailerCode=null,p.retailerName=null,localStorage.removeItem("retaileros_retailer_id"),localStorage.removeItem("retaileros_retailer_code"),localStorage.removeItem("retaileros_retailer_name")}function Er(){return p.retailerId}function Ir(e){p.isLoggedIn=e,e?localStorage.setItem("retaileros_logged_in","true"):(localStorage.removeItem("retaileros_logged_in"),Pl());const t=window.innerWidth<768;p.currentApp=e?t?"launcher":"sales":"launcher",D()}function Cr(e){p.authMode=e,p.registrationStep=1,D()}function Rr(e){p.registrationStep=e,window.updateAuthContent?window.updateAuthContent():D()}function Ar(e){p.inquiryViewMode=e,D()}function Tr(e){p.activeInquiry=e,D()}function Mr(e){p.preBookingViewMode=e,D()}function Dr(e){p.activeCampaign=e,D()}function Or(e){p.automationViewMode=e,D()}function Lr(e){p.activeAutomationId=e,D()}window.triggerRender=D;window.setApp=dr;window.setTab=pr;window.setSalesHistoryId=ur;window.toggleMobileReceipt=xr;window.setReportsTab=fr;window.setRepairTab=br;function Nl(e){p.salesMode=e,D()}window.setSalesMode=Nl;function jr(e){p.historyViewMode=e,D()}function Pr(e){p.historyDateFilter=e,e!=="custom"&&(p.historyFromDate="",p.historyToDate=""),D()}function Nr(e,t){p.historyFromDate=e,p.historyToDate=t,p.historyDateFilter="custom",D()}window.setHistoryViewMode=jr;window.setHistoryDateFilter=Pr;window.setHistoryCustomDates=Nr;window.setRepairMode=mr;window.setGridCols=hr;window.setClientMode=jl;window.viewClientInvoice=gr;window.setSchemesTab=vr;window.setSchemeBrand=wr;window.setScheme=yr;window.toggleSchemeDetails=kr;window.setMarketplaceTab=_r;window.setMarketplaceViewMode=Sr;function qr(e){p.myStoreTab=e,p.myStoreViewMode="list",D()}function Br(e){p.myStoreViewMode=e,D()}function Fr(e){p.activeStoreOrderId=e,p.myStoreViewMode="order-detail",D()}function Ur(e){p.activeListingId=e,D()}window.setMyStoreTab=qr;window.setMyStoreViewMode=Br;window.setActiveStoreOrder=Fr;window.setActiveListing=Ur;window.setRetailer=$r;window.clearRetailer=Pl;window.getRetailerId=Er;window.setLoginStatus=Ir;window.setAuthMode=Cr;window.setRegistrationStep=Rr;window.setInquiryViewMode=Ar;window.setActiveInquiry=Tr;window.setPreBookingViewMode=Mr;window.setActiveCampaign=Dr;window.setAutomationViewMode=Or;window.setActiveAutomation=Lr;function Vr(e){p.groupViewMode=e,D()}function Hr(e){p.selectedGroupId=e,D()}window.setGroupViewMode=Vr;window.setSelectedGroup=Hr;const Gr="modulepreload",Wr=function(e){return"/"+e},el={},Ys=function(t,s,a){let n=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),r=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.allSettled(s.map(d=>{if(d=Wr(d),d in el)return;el[d]=!0;const o=d.endsWith(".css"),u=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${u}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":Gr,o||(f.as="script"),f.crossOrigin="",f.href=d,r&&f.setAttribute("nonce",r),document.head.appendChild(f),o)return new Promise((b,h)=>{f.addEventListener("load",b),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${d}`)))})}))}function l(i){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=i,window.dispatchEvent(r),!r.defaultPrevented)throw i}return n.then(i=>{for(const r of i||[])r.status==="rejected"&&l(r.reason);return t().catch(l)})};function ql(){return`
        <div class="h-full w-full flex flex-col items-center justify-center p-0 animate-slide-up">
            <!-- Header Section (Subtle for Sidebar) -->
            <div class="text-center mb-8">
                <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Enterprise Authentication</p>
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
                    <div class="p-3 bg-slate-100 border border-slate-200 rounded-xl">
                        <p class="text-[10px] font-bold text-slate-600" id="login-error-text"></p>
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
                <span class="material-icons-outlined text-slate-400 text-sm">verified_user</span>
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">End-to-end Encrypted</p>
            </div>
        </div>
    `}window.loginWithCredentials=async function(){const e=document.getElementById("login-identifier"),t=e?e.value.trim():"",s=document.getElementById("login-error"),a=document.getElementById("login-error-text"),n=document.getElementById("login-btn");if(!t){s&&a&&(a.textContent="Please enter your mobile number or store code.",s.classList.remove("hidden"));return}s&&s.classList.add("hidden"),n&&(n.disabled=!0,n.textContent="Authenticating...");try{const{query:l}=await Ys(async()=>{const{query:d}=await Promise.resolve().then(()=>Dn);return{query:d}},void 0);let i=null;if(/^\d{10}$/.test(t)){const d=await l("SELECT * FROM retailers WHERE mobile_number = ? AND status = 'active' LIMIT 1",[t]);d.length>0&&(i=d[0])}if(!i){const d=await l("SELECT * FROM retailers WHERE retailer_code = ? AND status = 'active' LIMIT 1",[t.toUpperCase()]);d.length>0&&(i=d[0])}if(!i){s&&a&&(a.textContent="No registered store found. Please check your mobile number or store code, or register first.",s.classList.remove("hidden"));return}window.setRetailer(i.id,i.retailer_code,i.retailer_name);const{syncData:r}=await Ys(async()=>{const{syncData:d}=await Promise.resolve().then(()=>Wi);return{syncData:d}},void 0);await r(),window.setLoginStatus(!0)}catch(l){console.error("Login failed:",l),s&&a&&(a.textContent="Login failed: "+l.message,s.classList.remove("hidden"))}finally{n&&(n.disabled=!1,n.textContent="Authenticate")}};function Js(e="mobile"){return e==="desktop-primary"?zr():e==="desktop-secondary"?Yr():Jr()}function zr(){const e=p.registrationStep;return e===3?`
            <div class="h-full w-full flex flex-col items-center justify-center p-8 bg-white dot-grid relative overflow-hidden text-center">
                <div class="animate-slide-up max-w-md">
                    <div class="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span class="material-icons-outlined text-slate-900 text-5xl">check_circle</span>
                    </div>
                    <h2 class="text-2xl font-black text-slate-900 mb-3">Almost There!</h2>
                    <p class="text-sm text-slate-500 mb-8">Please review and confirm your store details in the right panel to complete registration.</p>

                    <div class="space-y-3">
                        <div class="flex items-center gap-3 p-4 bg-slate-100 border border-slate-200 rounded-xl">
                            <div class="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center shrink-0">
                                <span class="material-icons-outlined text-white text-sm">done</span>
                            </div>
                            <div class="text-left">
                                <p class="text-[10px] font-black text-slate-900 uppercase">Mobile Verified</p>
                                <p class="text-xs text-slate-600">+91 98765 43210</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                            <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center shrink-0">
                                <span class="material-icons-outlined text-slate-600 text-sm">arrow_forward</span>
                            </div>
                            <div class="text-left">
                                <p class="text-[10px] font-black text-slate-600 uppercase">Next Step</p>
                                <p class="text-xs text-slate-500">Confirm store details →</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="absolute bottom-6 flex items-center gap-2">
                    <span class="material-icons-outlined text-slate-400 text-xs">verified_user</span>
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest opacity-30">Secure Encryption</p>
                </div>
            </div>
        `:`
        <div class="h-full w-full flex flex-col items-center justify-center p-8 bg-white dot-grid relative overflow-hidden text-center">
            ${kn(e)}

            <div class="absolute bottom-6 flex items-center gap-2">
                <span class="material-icons-outlined text-slate-400 text-xs">verified_user</span>
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest opacity-30">Secure ${e===2?"Verification":"Encryption"}</p>
            </div>
        </div>
    `}function Yr(){return p.registrationStep<3?`
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
            ${kn(3)}
        </div>
    `}function Jr(){const e=p.registrationStep;return`
        <div class="h-full w-full flex flex-col items-center justify-center p-4 md:p-6 bg-white dot-grid relative overflow-y-auto">
            <div class="w-full flex-1 flex items-center justify-center py-8">
                ${kn(e)}
            </div>

            <div class="flex items-center gap-2 pb-4">
                <span class="material-icons-outlined text-slate-400 text-xs">verified_user</span>
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest opacity-30">Secure ${e===2?"Verification":"Encryption"}</p>
            </div>
            <div class="w-40 h-1 bg-slate-100 rounded-full mb-3"></div>
        </div>
    `}function kn(e){let t="";if(e===1)t=`
            <div class="animate-slide-up w-full max-w-md mx-auto px-4 md:px-0">
                 <div class="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center shadow-2xl mb-6 mx-auto">
                    <span class="material-icons-outlined text-white text-3xl">terminal</span>
                </div>
                <h1 class="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 mb-1">Registration</h1>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 md:mb-12">RetailerOS Enterprise</p>

                <div class="card p-6 md:p-8 border-slate-100 shadow-xl text-left">
                    <p class="text-[9px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Enter Mobile Number</p>
                    <div class="flex items-center gap-2 mb-6 md:mb-8">
                         <div class="h-14 md:h-14 px-3 md:px-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-2 shrink-0">
                            <div class="w-6 h-4 bg-slate-900 rounded-sm"></div>
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
                    <div class="mb-6 md:mb-8 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                        <p class="text-[10px] font-bold text-slate-600 mb-1">Development Mode</p>
                        <p class="text-[9px] text-slate-500">Use default OTP: <span class="font-black text-slate-900">444619</span> or any 6-digit code</p>
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
                        Didn't receive the code? <button onclick="window.resendOtp()" class="text-slate-500 underline">Resend Code</button>
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
                                <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-1">${a.l}</p>
                                <p class="text-[11px] md:text-[11px] font-black text-slate-900 truncate">${a.v}</p>
                            </div>
                             <div class="w-5 h-5 bg-slate-950 rounded-md flex items-center justify-center shrink-0 ml-3"><span class="material-icons-outlined text-white text-xs">done</span></div>
                        </div>
                    `).join("")}
                </div>

                <button onclick="window.finalizeRegistration()" class="w-full py-5 md:py-4 bg-black text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-xl ring-8 ring-black/5 active:scale-98 transition-transform">
                    Finalize Setup
                </button>
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mt-4 md:mt-6 opacity-40 text-center">Details can be edited later in settings</p>
            </div>
        `}return t}window.handleOtpInput=function(e,t){const s=e.target.value;if(s&&!/^\d$/.test(s)){e.target.value="";return}if(s&&t<5){const a=document.getElementById(`otp-${t+1}`);a&&a.focus()}};window.handleOtpKeydown=function(e,t){if(e.key==="Backspace"){if(!document.getElementById(`otp-${t}`).value&&t>0){const a=document.getElementById(`otp-${t-1}`);a&&(a.focus(),a.select())}}else if(e.key==="ArrowLeft"&&t>0){e.preventDefault();const s=document.getElementById(`otp-${t-1}`);s&&s.focus()}else if(e.key==="ArrowRight"&&t<5){e.preventDefault();const s=document.getElementById(`otp-${t+1}`);s&&s.focus()}else e.key==="Enter"&&(e.preventDefault(),window.verifyOtp())};window.handleOtpPaste=function(e){e.preventDefault();const t=e.clipboardData.getData("text").trim();if(/^\d{6}$/.test(t)){for(let a=0;a<6;a++){const n=document.getElementById(`otp-${a}`);n&&(n.value=t[a])}const s=document.getElementById("otp-5");s&&s.focus()}};window.requestOtp=async function(){const e=document.getElementById("mobile-input"),t=e?e.value.trim():"";if(!t||t.length!==10){alert("Please enter a valid 10-digit mobile number");return}try{const{db:s}=await Ys(async()=>{const{db:l}=await Promise.resolve().then(()=>Dn);return{db:l}},void 0);if(await s.retailers.isRegistered(t)){alert("This mobile number is already registered. Please login instead."),window.setAuthMode("login");return}const n=await s.approved.checkApproval(t);if(!n){alert("This mobile number is not approved for registration. Please contact support.");return}window._approvedRetailerData=n,console.log("Sending OTP to:",t),window.setRegistrationStep(2),setTimeout(()=>{const l=document.getElementById("otp-0");l&&l.focus()},100)}catch(s){console.error("Approval check failed:",s),s.message&&s.message.includes("401")?alert(`Database authentication error. Please contact the system administrator.

Technical: External database token has expired.`):s.message&&s.message.includes("network")?alert("Network connection error. Please check your internet connection and try again."):alert(`Unable to verify approval status. Please try again.

If the problem persists, contact support.

Error: `+s.message)}};window.verifyOtp=function(){const e=[];for(let a=0;a<6;a++){const n=document.getElementById(`otp-${a}`);n&&e.push(n.value)}const t=e.join("");if(t.length!==6){alert("Please enter all 6 digits");return}const s="444619";console.log("Verifying OTP:",t),t===s?console.log("✅ Default OTP accepted:",s):console.log("ℹ️  Development mode: Any OTP accepted"),window.setRegistrationStep(3)};window.resendOtp=function(){for(let t=0;t<6;t++){const s=document.getElementById(`otp-${t}`);s&&(s.value="")}const e=document.getElementById("otp-0");e&&e.focus(),console.log("Resending OTP..."),alert("OTP has been resent successfully!")};window.finalizeRegistration=async function(){try{const e=window._approvedRetailerData;if(!e){alert("Session expired. Please start registration again."),window.setRegistrationStep(1);return}const{db:t}=await Ys(async()=>{const{db:n}=await Promise.resolve().then(()=>Dn);return{db:n}},void 0),s=await t.retailers.add(e);window.setRetailer(s.id,s.retailerCode,e.RetailerName),localStorage.setItem("retaileros_logged_in","true"),delete window._approvedRetailerData;const{syncData:a}=await Ys(async()=>{const{syncData:n}=await Promise.resolve().then(()=>Wi);return{syncData:n}},void 0);await a(),window.setLoginStatus(!0),console.log("Registration completed successfully:",s)}catch(e){console.error("Registration failed:",e),alert("Registration failed. Please try again.")}};function Bl(){return p.authMode==="register"?Js():ql()}const Kr=[{n:"SALES DESK",i:"account_balance_wallet",k:"sales"},{n:"CLIENTS",i:"group",k:"clients"},{n:"INQUIRIES",i:"help_outline",k:"inquiries"},{n:"PROMOTERS",i:"business_center",k:"promoters"},{n:"MY STORE",i:"storefront",k:"mystore"},{n:"INVENTORY",i:"inventory_2",k:"inventory"},{n:"REPAIRS",i:"build",k:"repairs"},{n:"MARKETPLACE",i:"swap_horizontal_circle",k:"marketplace"},{n:"CLAIMS",i:"verified_user"},{n:"SCHEMES",i:"percent",k:"schemes"},{n:"MARKETING",i:"campaign",k:"marketing"},{n:"AUTOMATION",i:"smart_toy",s:!0,k:"automation"},{n:"PRE-BOOKING",i:"rocket_launch",k:"prebooking"},{n:"REPORTS",i:"bar_chart",k:"reports"},{n:"SETTINGS",i:"settings",k:"settings"}];function Qr(e){const t=e?p.gridCols:4;return`
        <div class="card overflow-hidden border-slate-200">
            <div class="grid ${e&&{2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4"}[t]||"grid-cols-4"} divide-x divide-y divide-slate-100">
                ${Kr.map(a=>`
                    <button onclick="setApp('${a.k||"launcher"}')" class="aspect-square flex flex-col items-center justify-center p-1.5 hover:bg-slate-50 transition-all ${p.currentApp===a.k?"bg-slate-100":""}">
                        <span class="${a.s?"material-symbols-outlined":"material-icons-outlined"} text-xl ${p.currentApp===a.k?"text-slate-900 font-bold":"text-slate-500"} mb-1">${a.i}</span>
                        <span class="text-[7px] font-black uppercase text-center tracking-wider leading-tight ${p.currentApp===a.k?"text-slate-900":"text-slate-500"} ${a.n.length>10?"max-w-[90%]":""}">${a.n}</span>
                    </button>
                `).join("")}
            </div>
        </div>
    `}function Xr(e){return`
        <footer class="p-4 bg-[#F8FAFC]/95 backdrop-blur-md border-t border-slate-100 shrink-0 mt-auto sticky bottom-0 z-20">
            ${p.isLoggedIn?`
                <div class="card p-3 flex items-center justify-between border-slate-200/50 shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-black text-[10px] text-slate-900 shadow-inner">AM</div>
                        <div class="text-left ${e?"":"hidden xl:block"}">
                            <p class="text-xs font-black text-slate-900">Arjun M.</p>
                            <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Apple Store - Mumbai Central</p>
                        </div>
                    </div>
                    <button onclick="setLoginStatus(false)" class="flex items-center gap-2 group p-1.5 hover:bg-slate-50 rounded-lg transition-all" title="Logout">
                            <span class="material-icons-outlined text-lg text-slate-900 group-hover:text-slate-400 transition-all">logout</span>
                    </button>
                </div>
            `:`
                ${p.authMode==="login"?`
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
    `}function Qa(e){const t=e==="mobile";return`
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
                ${p.isLoggedIn?`
                    ${Qr(t)}

                    ${t?`
                    <!-- Mobile Only News Ticker -->
                    <div class="news-ticker-container mt-6">
                        <div class="news-ticker">
                            <span class="text-[9px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-6">
                                <span class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-slate-900 rounded-full animate-pulse"></div> TELECOM: 5G rollout reaches 92% urban coverage</span>
                            </span>
                        </div>
                    </div>`:""}
                `:`
                    <!-- Auth View (Login only in desktop, full auth in mobile) -->
                    <div id="auth-container" class="h-full w-full py-10">
                         ${t?Bl():ql()}
                    </div>
                `}
            </div>

            ${Xr(t)}
        </div>
    `}class F extends Error{constructor(s,a,n,l,i){a!==void 0&&(s=`${a}: ${s}`);super(s,{cause:i});q(this,"code");q(this,"extendedCode");q(this,"rawCode");this.code=a,this.extendedCode=n,this.rawCode=l,this.name="LibsqlError"}}class ls extends F{constructor(s,a,n,l,i,r){super(s,n,l,i,r);q(this,"statementIndex");this.statementIndex=a,this.name="LibsqlBatchError"}}function Zr(e){const t=eo.exec(e);if(t===null)throw new F(`The URL '${e}' is not in a valid format`,"URL_INVALID");const s=t.groups,a=s.scheme,n=s.authority!==void 0?to(s.authority):void 0,l=Qt(s.path),i=s.query!==void 0?ao(s.query):void 0,r=s.fragment!==void 0?Qt(s.fragment):void 0;return{scheme:a,authority:n,path:l,query:i,fragment:r}}const eo=(()=>{const e="(?<scheme>[A-Za-z][A-Za-z.+-]*)",t="(?<authority>[^/?#]*)",s="(?<path>[^?#]*)",a="(?<query>[^#]*)",n="(?<fragment>.*)";return new RegExp(`^${e}:(//${t})?${s}(\\?${a})?(#${n})?$`,"su")})();function to(e){const t=so.exec(e);if(t===null)throw new F("The authority part of the URL is not in a valid format","URL_INVALID");const s=t.groups,a=Qt(s.host_br??s.host),n=s.port?parseInt(s.port,10):void 0,l=s.username!==void 0?{username:Qt(s.username),password:s.password!==void 0?Qt(s.password):void 0}:void 0;return{host:a,port:n,userinfo:l}}const so=new RegExp("^((?<username>[^:]*)(:(?<password>.*))?@)?((?<host>[^:\\[\\]]*)|(\\[(?<host_br>[^\\[\\]]*)\\]))(:(?<port>[0-9]*))?$","su");function ao(e){const t=e.split("&"),s=[];for(const a of t){if(a==="")continue;let n,l;const i=a.indexOf("=");i<0?(n=a,l=""):(n=a.substring(0,i),l=a.substring(i+1)),s.push({key:Qt(n.replaceAll("+"," ")),value:Qt(l.replaceAll("+"," "))})}return{pairs:s}}function Qt(e){try{return decodeURIComponent(e)}catch(t){throw t instanceof URIError?new F(`URL component has invalid percent encoding: ${t}`,"URL_INVALID",void 0,void 0,t):t}}function Xa(e,t,s){if(t===void 0)throw new F(`URL with scheme ${JSON.stringify(e+":")} requires authority (the "//" part)`,"URL_INVALID");const a=`${e}:`,n=no(t.host),l=lo(t.port),r=`//${io(t.userinfo)}${n}${l}`;let d=s.split("/").map(encodeURIComponent).join("/");return d!==""&&!d.startsWith("/")&&(d="/"+d),new URL(`${a}${r}${d}`)}function no(e){return e.includes(":")?`[${encodeURI(e)}]`:encodeURI(e)}function lo(e){return e!==void 0?`:${e}`:""}function io(e){if(e===void 0)return"";const t=encodeURIComponent(e.username),s=e.password!==void 0?`:${encodeURIComponent(e.password)}`:"";return`${t}${s}@`}const Fl="3.7.8",ro=Fl,Ds=typeof Buffer=="function",tl=typeof TextDecoder=="function"?new TextDecoder:void 0,sl=typeof TextEncoder=="function"?new TextEncoder:void 0,oo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",js=Array.prototype.slice.call(oo),ha=(e=>{let t={};return e.forEach((s,a)=>t[s]=a),t})(js),co=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,le=String.fromCharCode.bind(String),al=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):e=>new Uint8Array(Array.prototype.slice.call(e,0)),Ul=e=>e.replace(/=/g,"").replace(/[+\/]/g,t=>t=="+"?"-":"_"),Vl=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),Hl=e=>{let t,s,a,n,l="";const i=e.length%3;for(let r=0;r<e.length;){if((s=e.charCodeAt(r++))>255||(a=e.charCodeAt(r++))>255||(n=e.charCodeAt(r++))>255)throw new TypeError("invalid character found");t=s<<16|a<<8|n,l+=js[t>>18&63]+js[t>>12&63]+js[t>>6&63]+js[t&63]}return i?l.slice(0,i-3)+"===".substring(i):l},_n=typeof btoa=="function"?e=>btoa(e):Ds?e=>Buffer.from(e,"binary").toString("base64"):Hl,Za=Ds?e=>Buffer.from(e).toString("base64"):e=>{let s=[];for(let a=0,n=e.length;a<n;a+=4096)s.push(le.apply(null,e.subarray(a,a+4096)));return _n(s.join(""))},wa=(e,t=!1)=>t?Ul(Za(e)):Za(e),po=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?le(192|t>>>6)+le(128|t&63):le(224|t>>>12&15)+le(128|t>>>6&63)+le(128|t&63)}else{var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return le(240|t>>>18&7)+le(128|t>>>12&63)+le(128|t>>>6&63)+le(128|t&63)}},uo=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,Gl=e=>e.replace(uo,po),nl=Ds?e=>Buffer.from(e,"utf8").toString("base64"):sl?e=>Za(sl.encode(e)):e=>_n(Gl(e)),is=(e,t=!1)=>t?Ul(nl(e)):nl(e),ll=e=>is(e,!0),xo=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,fo=e=>{switch(e.length){case 4:var t=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),s=t-65536;return le((s>>>10)+55296)+le((s&1023)+56320);case 3:return le((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return le((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},Wl=e=>e.replace(xo,fo),zl=e=>{if(e=e.replace(/\s+/g,""),!co.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(e.length&3));let t,s,a,n=[];for(let l=0;l<e.length;)t=ha[e.charAt(l++)]<<18|ha[e.charAt(l++)]<<12|(s=ha[e.charAt(l++)])<<6|(a=ha[e.charAt(l++)]),s===64?n.push(le(t>>16&255)):a===64?n.push(le(t>>16&255,t>>8&255)):n.push(le(t>>16&255,t>>8&255,t&255));return n.join("")},Sn=typeof atob=="function"?e=>atob(Vl(e)):Ds?e=>Buffer.from(e,"base64").toString("binary"):zl,Yl=Ds?e=>al(Buffer.from(e,"base64")):e=>al(Sn(e).split("").map(t=>t.charCodeAt(0))),Jl=e=>Yl(Kl(e)),bo=Ds?e=>Buffer.from(e,"base64").toString("utf8"):tl?e=>tl.decode(Yl(e)):e=>Wl(Sn(e)),Kl=e=>Vl(e.replace(/[-_]/g,t=>t=="-"?"+":"/")),en=e=>bo(Kl(e)),mo=e=>{if(typeof e!="string")return!1;const t=e.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(t)||!/[^\s0-9a-zA-Z\-_]/.test(t)},Ql=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),Xl=function(){const e=(t,s)=>Object.defineProperty(String.prototype,t,Ql(s));e("fromBase64",function(){return en(this)}),e("toBase64",function(t){return is(this,t)}),e("toBase64URI",function(){return is(this,!0)}),e("toBase64URL",function(){return is(this,!0)}),e("toUint8Array",function(){return Jl(this)})},Zl=function(){const e=(t,s)=>Object.defineProperty(Uint8Array.prototype,t,Ql(s));e("toBase64",function(t){return wa(this,t)}),e("toBase64URI",function(){return wa(this,!0)}),e("toBase64URL",function(){return wa(this,!0)})},ho=()=>{Xl(),Zl()},$n={version:Fl,VERSION:ro,atob:Sn,atobPolyfill:zl,btoa:_n,btoaPolyfill:Hl,fromBase64:en,toBase64:is,encode:is,encodeURI:ll,encodeURL:ll,utob:Gl,btou:Wl,decode:en,isValid:mo,fromUint8Array:wa,toUint8Array:Jl,extendString:Xl,extendUint8Array:Zl,extendBuiltins:ho},Ks="https://github.com/libsql/libsql-client-ts#supported-urls";function tn(e){if(e==="write")return"BEGIN IMMEDIATE";if(e==="read")return"BEGIN TRANSACTION READONLY";if(e==="deferred")return"BEGIN DEFERRED";throw RangeError('Unknown transaction mode, supported values are "write", "read" and "deferred"')}class go{constructor(t,s,a,n,l){q(this,"columns");q(this,"columnTypes");q(this,"rows");q(this,"rowsAffected");q(this,"lastInsertRowid");this.columns=t,this.columnTypes=s,this.rows=a,this.rowsAffected=n,this.lastInsertRowid=l}toJSON(){return{columns:this.columns,columnTypes:this.columnTypes,rows:this.rows.map(vo),rowsAffected:this.rowsAffected,lastInsertRowid:this.lastInsertRowid!==void 0?""+this.lastInsertRowid:null}}}function vo(e){return Array.prototype.map.call(e,wo)}function wo(e){return typeof e=="bigint"?""+e:e instanceof ArrayBuffer?$n.fromUint8Array(new Uint8Array(e)):e}const il=":memory:";function yo(e,t){var x,y;if(typeof e!="object")throw new TypeError(`Expected client configuration as object, got ${typeof e}`);let{url:s,authToken:a,tls:n,intMode:l,concurrency:i}=e;i=Math.max(0,i||20),l??(l="number");let r=[];s===il&&(s="file::memory:");const d=Zr(s),o=d.scheme.toLowerCase(),u=o==="file"&&d.path===il&&d.authority===void 0;let f;u?f={cache:{values:["shared","private"],update:(_,R)=>r.push(`${_}=${R}`)}}:f={tls:{values:["0","1"],update:(_,R)=>n=R==="1"},authToken:{update:(_,R)=>a=R}};for(const{key:_,value:R}of((x=d.query)==null?void 0:x.pairs)??[]){if(!Object.hasOwn(f,_))throw new F(`Unsupported URL query parameter ${JSON.stringify(_)}`,"URL_PARAM_NOT_SUPPORTED");const M=f[_];if(M.values!==void 0&&!M.values.includes(R))throw new F(`Unknown value for the "${_}" query argument: ${JSON.stringify(R)}. Supported values are: [${M.values.map(E=>'"'+E+'"').join(", ")}]`,"URL_INVALID");M.update!==void 0&&(M==null||M.update(_,R))}const b=r.length===0?"":`?${r.join("&")}`,h=d.path+b;let v;if(o==="libsql")if(n===!1){if(((y=d.authority)==null?void 0:y.port)===void 0)throw new F('A "libsql:" URL with ?tls=0 must specify an explicit port',"URL_INVALID");v="http"}else v="https";else v=o;if(v==="http"||v==="ws"?n??(n=!1):n??(n=!0),v!=="http"&&v!=="ws"&&v!=="https"&&v!=="wss"&&v!=="file")throw new F(`The client supports only "libsql:", "wss:", "ws:", "https:", "http:" and "file:" URLs, got ${JSON.stringify(d.scheme+":")}. For more information, please read ${Ks}`,"URL_SCHEME_NOT_SUPPORTED");if(l!=="number"&&l!=="bigint"&&l!=="string")throw new TypeError(`Invalid value for intMode, expected "number", "bigint" or "string", got ${JSON.stringify(l)}`);if(d.fragment!==void 0)throw new F(`URL fragments are not supported: ${JSON.stringify("#"+d.fragment)}`,"URL_INVALID");return u?{scheme:"file",tls:!1,path:h,intMode:l,concurrency:i,syncUrl:e.syncUrl,syncInterval:e.syncInterval,readYourWrites:e.readYourWrites,offline:e.offline,fetch:e.fetch,authToken:void 0,encryptionKey:void 0,remoteEncryptionKey:void 0,authority:void 0}:{scheme:v,tls:n,authority:d.authority,path:h,authToken:a,intMode:l,concurrency:i,encryptionKey:e.encryptionKey,remoteEncryptionKey:e.remoteEncryptionKey,syncUrl:e.syncUrl,syncInterval:e.syncInterval,readYourWrites:e.readYourWrites,offline:e.offline,fetch:e.fetch}}let as;typeof WebSocket<"u"?as=WebSocket:typeof global<"u"?as=global.WebSocket:typeof window<"u"?as=window.WebSocket:typeof self<"u"&&(as=self.WebSocket);class ei{constructor(){q(this,"intMode");this.intMode="number"}}class Y extends Error{constructor(t){super(t),this.name="ClientError"}}class j extends Y{constructor(t){super(t),this.name="ProtoError"}}class ti extends Y{constructor(s,a){super(s);q(this,"code");q(this,"proto");this.name="ResponseError",this.code=a.code,this.proto=a,this.stack=void 0}}class Ae extends Y{constructor(t,s){s!==void 0?(super(`${t}: ${s}`),this.cause=s):super(t),this.name="ClosedError"}}class si extends Y{constructor(t){super(t),this.name="WebSocketUnsupportedError"}}class sn extends Y{constructor(t){super(t),this.name="WebSocketError"}}class ya extends Y{constructor(s,a){super(s);q(this,"status");this.status=a,this.name="HttpServerError"}}class Rs extends Y{constructor(t){super(t),this.name="ProtocolVersionError"}}class At extends Y{constructor(t){super(t),this.name="InternalError"}}class Os extends Y{constructor(t){super(t),this.name="MisuseError"}}function qe(e){if(typeof e=="string")return e;throw Ls(e,"string")}function Fe(e){if(e!=null){if(typeof e=="string")return e;throw Ls(e,"string or null")}}function Xt(e){if(typeof e=="number")return e;throw Ls(e,"number")}function Qs(e){if(typeof e=="boolean")return e;throw Ls(e,"boolean")}function Ia(e){if(Array.isArray(e))return e;throw Ls(e,"array")}function ie(e){if(e!==null&&typeof e=="object"&&!Array.isArray(e))return e;throw Ls(e,"object")}function Tt(e,t){return Ia(e).map(s=>t(ie(s)))}function Ls(e,t){if(e===void 0)return new j(`Expected ${t}, but the property was missing`);let s=typeof e;return e===null?s="null":Array.isArray(e)&&(s="array"),new j(`Expected ${t}, received ${s}`)}function En(e,t){return t(ie(e))}var X,gt,Ze,Lt;class ko{constructor(t){k(this,Ze);k(this,X);k(this,gt);m(this,X,t),m(this,gt,!1)}begin(){c(this,X).push("{"),m(this,gt,!0)}end(){c(this,X).push("}"),m(this,gt,!1)}string(t,s){S(this,Ze,Lt).call(this,t),c(this,X).push(JSON.stringify(s))}stringRaw(t,s){S(this,Ze,Lt).call(this,t),c(this,X).push('"'),c(this,X).push(s),c(this,X).push('"')}number(t,s){S(this,Ze,Lt).call(this,t),c(this,X).push(""+s)}boolean(t,s){S(this,Ze,Lt).call(this,t),c(this,X).push(s?"true":"false")}object(t,s,a){S(this,Ze,Lt).call(this,t),this.begin(),a(this,s),this.end()}arrayObjects(t,s,a){S(this,Ze,Lt).call(this,t),c(this,X).push("[");for(let n=0;n<s.length;++n)n!==0&&c(this,X).push(","),this.begin(),a(this,s[n]),this.end();c(this,X).push("]")}}X=new WeakMap,gt=new WeakMap,Ze=new WeakSet,Lt=function(t){c(this,gt)?(c(this,X).push('"'),m(this,gt,!1)):c(this,X).push(',"'),c(this,X).push(t),c(this,X).push('":')};function ai(e,t){const s=[],a=new ko(s);return a.begin(),t(a,e),a.end(),s.join("")}const Ws=0,an=1,nn=2,_o=5;var Ve,Xs,_e;class So{constructor(t){k(this,Ve);k(this,Xs);k(this,_e);m(this,Ve,t),m(this,Xs,new DataView(t.buffer,t.byteOffset,t.byteLength)),m(this,_e,0)}varint(){let t=0;for(let s=0;;s+=7){const a=c(this,Ve)[es(this,_e)._++];if(t|=(a&127)<<s,!(a&128))break}return t}varintBig(){let t=0n;for(let s=0n;;s+=7n){const a=c(this,Ve)[es(this,_e)._++];if(t|=BigInt(a&127)<<s,!(a&128))break}return t}bytes(t){const s=new Uint8Array(c(this,Ve).buffer,c(this,Ve).byteOffset+c(this,_e),t);return m(this,_e,c(this,_e)+t),s}double(){const t=c(this,Xs).getFloat64(c(this,_e),!0);return m(this,_e,c(this,_e)+8),t}skipVarint(){for(;c(this,Ve)[es(this,_e)._++]&128;);}skip(t){m(this,_e,c(this,_e)+t)}eof(){return c(this,_e)>=c(this,Ve).byteLength}}Ve=new WeakMap,Xs=new WeakMap,_e=new WeakMap;var be,ce,Bt,Ps;class $o{constructor(t){k(this,Bt);k(this,be);k(this,ce);m(this,be,t),m(this,ce,-1)}setup(t){m(this,ce,t)}bytes(){S(this,Bt,Ps).call(this,nn);const t=c(this,be).varint();return c(this,be).bytes(t)}string(){return new TextDecoder().decode(this.bytes())}message(t){return qa(this.bytes(),t)}int32(){return S(this,Bt,Ps).call(this,Ws),c(this,be).varint()}uint32(){return this.int32()}bool(){return this.int32()!==0}uint64(){return S(this,Bt,Ps).call(this,Ws),c(this,be).varintBig()}sint64(){const t=this.uint64();return t>>1n^-(t&1n)}double(){return S(this,Bt,Ps).call(this,an),c(this,be).double()}maybeSkip(){if(!(c(this,ce)<0)){if(c(this,ce)===Ws)c(this,be).skipVarint();else if(c(this,ce)===an)c(this,be).skip(8);else if(c(this,ce)===nn){const t=c(this,be).varint();c(this,be).skip(t)}else if(c(this,ce)===_o)c(this,be).skip(4);else throw new j(`Unexpected wire type ${c(this,ce)}`);m(this,ce,-1)}}}be=new WeakMap,ce=new WeakMap,Bt=new WeakSet,Ps=function(t){if(c(this,ce)!==t)throw new j(`Expected wire type ${t}, got ${c(this,ce)}`);m(this,ce,-1)};function qa(e,t){const s=new So(e),a=new $o(s);let n=t.default();for(;!s.eof();){const l=s.varint(),i=l>>3,r=l&7;a.setup(r);const d=t[i];if(d!==void 0){const o=d(a,n);o!==void 0&&(n=o)}a.maybeSkip()}return n}var Te,vt,cs,me,se,Ns,ka,ni,qs;const Kn=class Kn{constructor(){k(this,se);k(this,Te);k(this,vt);k(this,cs);k(this,me);m(this,Te,new ArrayBuffer(256)),m(this,vt,new Uint8Array(c(this,Te))),m(this,cs,new DataView(c(this,Te))),m(this,me,0)}bytes(t,s){S(this,se,qs).call(this,t,nn),S(this,se,ka).call(this,s.byteLength),S(this,se,Ns).call(this,s.byteLength),c(this,vt).set(s,c(this,me)),m(this,me,c(this,me)+s.byteLength)}string(t,s){this.bytes(t,new TextEncoder().encode(s))}message(t,s,a){const n=new Kn;a(n,s),this.bytes(t,n.data())}int32(t,s){S(this,se,qs).call(this,t,Ws),S(this,se,ka).call(this,s)}uint32(t,s){this.int32(t,s)}bool(t,s){this.int32(t,s?1:0)}sint64(t,s){S(this,se,qs).call(this,t,Ws),S(this,se,ni).call(this,s<<1n^s>>63n)}double(t,s){S(this,se,qs).call(this,t,an),S(this,se,Ns).call(this,8),c(this,cs).setFloat64(c(this,me),s,!0),m(this,me,c(this,me)+8)}data(){return new Uint8Array(c(this,Te),0,c(this,me))}};Te=new WeakMap,vt=new WeakMap,cs=new WeakMap,me=new WeakMap,se=new WeakSet,Ns=function(t){if(c(this,me)+t<=c(this,Te).byteLength)return;let s=c(this,Te).byteLength;for(;s<c(this,me)+t;)s*=2;const a=new ArrayBuffer(s),n=new Uint8Array(a),l=new DataView(a);n.set(new Uint8Array(c(this,Te),0,c(this,me))),m(this,Te,a),m(this,vt,n),m(this,cs,l)},ka=function(t){S(this,se,Ns).call(this,5),t=0|t;do{let s=t&127;t>>>=7,s|=t?128:0,c(this,vt)[es(this,me)._++]=s}while(t)},ni=function(t){S(this,se,Ns).call(this,10),t=t&0xffffffffffffffffn;do{let s=Number(t&0x7fn);t>>=7n,s|=t?128:0,c(this,vt)[es(this,me)._++]=s}while(t)},qs=function(t,s){S(this,se,ka).call(this,t<<3|s)};let ln=Kn;function li(e,t){const s=new ln;return t(s,e),s.data()}var Se,et;class Bs{constructor(){k(this,Se);k(this,et);m(this,Se,new Set),m(this,et,new Set)}alloc(){for(const s of c(this,et))return c(this,et).delete(s),c(this,Se).add(s),c(this,Se).has(c(this,Se).size-1)||c(this,et).add(c(this,Se).size-1),s;const t=c(this,Se).size;return c(this,Se).add(t),t}free(t){if(!c(this,Se).delete(t))throw new At("Freeing an id that is not allocated");c(this,et).delete(c(this,Se).size),t<c(this,Se).size&&c(this,et).add(t)}}Se=new WeakMap,et=new WeakMap;function J(e,t){throw new At(t)}function zs(e){if(e===null)return null;if(typeof e=="string")return e;if(typeof e=="number"){if(!Number.isFinite(e))throw new RangeError("Only finite numbers (not Infinity or NaN) can be passed as arguments");return e}else if(typeof e=="bigint"){if(e<Eo||e>Io)throw new RangeError("This bigint value is too large to be represented as a 64-bit integer and passed as argument");return e}else{if(typeof e=="boolean")return e?1n:0n;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(e instanceof Uint8Array)return e;if(e instanceof Date)return+e.valueOf();if(typeof e=="object")return""+e.toString();throw new TypeError("Unsupported type of value")}}const Eo=-9223372036854775808n,Io=9223372036854775807n;function ii(e,t){if(e===null)return null;if(typeof e=="number")return e;if(typeof e=="string")return e;if(typeof e=="bigint")if(t==="number"){const s=Number(e);if(!Number.isSafeInteger(s))throw new RangeError("Received integer which is too large to be safely represented as a JavaScript number");return s}else{if(t==="bigint")return e;if(t==="string")return""+e;throw new Os("Invalid value for IntMode")}else{if(e instanceof Uint8Array)return e.slice().buffer;throw e===void 0?new j("Received unrecognized type of Value"):J(e,"Impossible type of Value")}}function fa(e){return{affectedRowCount:e.affectedRowCount,lastInsertRowid:e.lastInsertRowid,columnNames:e.cols.map(t=>t.name),columnDecltypes:e.cols.map(t=>t.decltype)}}function ri(e,t){const s=fa(e),a=e.rows.map(n=>di(s.columnNames,n,t));return{...s,rows:a}}function oi(e,t){const s=fa(e);let a;return e.rows.length>0&&(a=di(s.columnNames,e.rows[0],t)),{...s,row:a}}function ci(e,t){const s=fa(e);let a;return e.rows.length>0&&s.columnNames.length>0&&(a=ii(e.rows[0][0],t)),{...s,value:a}}function di(e,t,s){const a={};Object.defineProperty(a,"length",{value:t.length});for(let n=0;n<t.length;++n){const l=ii(t[n],s);Object.defineProperty(a,n,{value:l});const i=e[n];i!==void 0&&!Object.hasOwn(a,i)&&Object.defineProperty(a,i,{value:l,enumerable:!0,configurable:!0,writable:!0})}return a}function As(e){return new ti(e.message,e)}var ds,ps,tt;class In{constructor(t,s){k(this,ds);k(this,ps);k(this,tt);m(this,ds,t),m(this,ps,s),m(this,tt,void 0)}_getSqlId(t){if(c(this,ds)!==t)throw new Os("Attempted to use SQL text opened with other object");if(c(this,tt)!==void 0)throw new Ae("SQL text is closed",c(this,tt));return c(this,ps)}close(){this._setClosed(new Y("SQL text was manually closed"))}_setClosed(t){c(this,tt)===void 0&&(m(this,tt,t),c(this,ds)._closeSql(c(this,ps)))}get closed(){return c(this,tt)!==void 0}}ds=new WeakMap,ps=new WeakMap,tt=new WeakMap;function rn(e,t){return t instanceof In?{sqlId:t._getSqlId(e)}:{sql:""+t}}var He,Me;class Ca{constructor(){k(this,He);k(this,Me);m(this,He,[]),m(this,Me,[])}get length(){return c(this,He).length+c(this,Me).length}push(t){c(this,He).push(t)}shift(){return c(this,Me).length===0&&c(this,He).length>0&&(m(this,Me,c(this,He).reverse()),m(this,He,[])),c(this,Me).pop()}first(){return c(this,Me).length!==0?c(this,Me)[c(this,Me).length-1]:c(this,He)[0]}}He=new WeakMap,Me=new WeakMap;let pi=class{constructor(t){q(this,"sql");q(this,"_args");q(this,"_namedArgs");this.sql=t,this._args=[],this._namedArgs=new Map}bindIndexes(t){this._args.length=0;for(const s of t)this._args.push(zs(s));return this}bindIndex(t,s){if(t!==(t|0)||t<=0)throw new RangeError("Index of a positional argument must be positive integer");for(;this._args.length<t;)this._args.push(null);return this._args[t-1]=zs(s),this}bindName(t,s){return this._namedArgs.set(t,zs(s)),this}unbindAll(){return this._args.length=0,this._namedArgs.clear(),this}};function ui(e,t,s){let a,n=[],l=[];if(t instanceof pi){a=t.sql,n=t._args;for(const[d,o]of t._namedArgs.entries())l.push({name:d,value:o})}else Array.isArray(t)?(a=t[0],Array.isArray(t[1])?n=t[1].map(d=>zs(d)):l=Object.entries(t[1]).map(([d,o])=>({name:d,value:zs(o)}))):a=t;const{sql:i,sqlId:r}=rn(e,a);return{sql:i,sqlId:r,args:n,namedArgs:l,wantRows:s}}var Zs,us,Al;let Co=(Al=class{constructor(t,s){q(this,"_stream");k(this,Zs);q(this,"_steps");k(this,us);this._stream=t,m(this,Zs,s),this._steps=[],m(this,us,!1)}step(){return new To(this)}execute(){if(c(this,us))throw new Os("This batch has already been executed");m(this,us,!0);const t={steps:this._steps.map(s=>s.proto)};return c(this,Zs)?Ao(this._stream,this._steps,t):Ro(this._stream,this._steps,t)}},Zs=new WeakMap,us=new WeakMap,Al);function Ro(e,t,s){return e._batch(s).then(a=>{for(let n=0;n<t.length;++n){const l=a.stepResults.get(n),i=a.stepErrors.get(n);t[n].callback(l,i)}})}async function Ao(e,t,s){const a=await e._openCursor(s);try{let n=0,l,i=[];for(;;){const r=await a.next();if(r===void 0)break;if(r.type==="step_begin"){if(r.step<n||r.step>=t.length)throw new j("Server produced StepBeginEntry for unexpected step");if(l!==void 0)throw new j("Server produced StepBeginEntry before terminating previous step");for(let d=n;d<r.step;++d)t[d].callback(void 0,void 0);n=r.step+1,l=r,i=[]}else if(r.type==="step_end"){if(l===void 0)throw new j("Server produced StepEndEntry but no step is active");const d={cols:l.cols,rows:i,affectedRowCount:r.affectedRowCount,lastInsertRowid:r.lastInsertRowid};t[l.step].callback(d,void 0),l=void 0,i=[]}else if(r.type==="step_error"){if(l===void 0){if(r.step>=t.length)throw new j("Server produced StepErrorEntry for unexpected step");for(let d=n;d<r.step;++d)t[d].callback(void 0,void 0)}else{if(r.step!==l.step)throw new j("Server produced StepErrorEntry for unexpected step");l=void 0,i=[]}t[r.step].callback(void 0,r.error),n=r.step+1}else if(r.type==="row"){if(l===void 0)throw new j("Server produced RowEntry but no step is active");i.push(r.row)}else throw r.type==="error"?As(r.error):r.type==="none"?new j("Server produced unrecognized CursorEntry"):J(r,"Impossible CursorEntry")}if(l!==void 0)throw new j("Server closed Cursor before terminating active step");for(let r=n;r<t.length;++r)t[r].callback(void 0,void 0)}finally{a.close()}}var st,Ft,Fs,Tl;let To=(Tl=class{constructor(t){k(this,Ft);q(this,"_batch");k(this,st);q(this,"_index");this._batch=t,m(this,st,[]),this._index=void 0}condition(t){return c(this,st).push(t._proto),this}query(t){return S(this,Ft,Fs).call(this,t,!0,ri)}queryRow(t){return S(this,Ft,Fs).call(this,t,!0,oi)}queryValue(t){return S(this,Ft,Fs).call(this,t,!0,ci)}run(t){return S(this,Ft,Fs).call(this,t,!1,fa)}},st=new WeakMap,Ft=new WeakSet,Fs=function(t,s,a){if(this._index!==void 0)throw new Os("This BatchStep has already been added to the batch");const n=ui(this._batch._stream._sqlOwner(),t,s);let l;c(this,st).length===0?l=void 0:c(this,st).length===1?l=c(this,st)[0]:l={type:"and",conds:c(this,st).slice()};const i={stmt:n,condition:l};return new Promise((r,d)=>{const o=(u,f)=>{u!==void 0&&f!==void 0?d(new j("Server returned both result and error")):f!==void 0?d(As(f)):r(u!==void 0?a(u,this._batch._stream.intMode):void 0)};this._index=this._batch._steps.length,this._batch._steps.push({proto:i,callback:o})})},Tl),we=class jt{constructor(t,s){q(this,"_batch");q(this,"_proto");this._batch=t,this._proto=s}static ok(t){return new jt(t._batch,{type:"ok",step:rl(t)})}static error(t){return new jt(t._batch,{type:"error",step:rl(t)})}static not(t){return new jt(t._batch,{type:"not",cond:t._proto})}static and(t,s){for(const a of s)ol(t,a);return new jt(t,{type:"and",conds:s.map(a=>a._proto)})}static or(t,s){for(const a of s)ol(t,a);return new jt(t,{type:"or",conds:s.map(a=>a._proto)})}static isAutocommit(t){return t._stream.client()._ensureVersion(3,"BatchCond.isAutocommit()"),new jt(t,{type:"is_autocommit"})}};function rl(e){if(e._index===void 0)throw new Os("Cannot add a condition referencing a step that has not been added to the batch");return e._index}function ol(e,t){if(t._batch!==e)throw new Os("Cannot mix BatchCond objects for different Batch objects")}function Mo(e){return{paramNames:e.params.map(t=>t.name),columns:e.cols,isExplain:e.isExplain,isReadonly:e.isReadonly}}var Ut,Us;class xi{constructor(t){k(this,Ut);q(this,"intMode");this.intMode=t}query(t){return S(this,Ut,Us).call(this,t,!0,ri)}queryRow(t){return S(this,Ut,Us).call(this,t,!0,oi)}queryValue(t){return S(this,Ut,Us).call(this,t,!0,ci)}run(t){return S(this,Ut,Us).call(this,t,!1,fa)}batch(t=!1){return new Co(this,t)}describe(t){const s=rn(this._sqlOwner(),t);return this._describe(s).then(Mo)}sequence(t){const s=rn(this._sqlOwner(),t);return this._sequence(s)}}Ut=new WeakSet,Us=function(t,s,a){const n=ui(this._sqlOwner(),t,s);return this._execute(n).then(l=>a(l,this.intMode))};class fi{}const Do=1e3,Oo=10;var ja,Vt,xs,fs,Ht,at,Gt,Pa,bi;class Lo extends fi{constructor(s,a,n){super();k(this,Pa);k(this,ja);k(this,Vt);k(this,xs);k(this,fs);k(this,Ht);k(this,at);k(this,Gt);m(this,ja,s),m(this,Vt,a),m(this,xs,n),m(this,fs,new Ca),m(this,Ht,new Ca),m(this,at,void 0),m(this,Gt,!1)}async next(){for(;;){if(c(this,at)!==void 0)throw new Ae("Cursor is closed",c(this,at));for(;!c(this,Gt)&&c(this,Ht).length<Oo;)c(this,Ht).push(S(this,Pa,bi).call(this));const s=c(this,fs).shift();if(c(this,Gt)||s!==void 0)return s;await c(this,Ht).shift().then(a=>{if(a!==void 0){for(const n of a.entries)c(this,fs).push(n);c(this,Gt)||m(this,Gt,a.done)}})}}_setClosed(s){c(this,at)===void 0&&(m(this,at,s),c(this,Vt)._sendCursorRequest(this,{type:"close_cursor",cursorId:c(this,xs)}).catch(()=>{}),c(this,Vt)._cursorClosed(this))}close(){this._setClosed(new Y("Cursor was manually closed"))}get closed(){return c(this,at)!==void 0}}ja=new WeakMap,Vt=new WeakMap,xs=new WeakMap,fs=new WeakMap,Ht=new WeakMap,at=new WeakMap,Gt=new WeakMap,Pa=new WeakSet,bi=function(){return c(this,Vt)._sendCursorRequest(this,{type:"fetch_cursor",cursorId:c(this,xs),maxCount:Do}).then(s=>s,s=>{this._setClosed(s)})};var ne,Ce,nt,$e,wt,De,Z,ts,cn,_a,Sa;const Qn=class Qn extends xi{constructor(s,a){super(s.intMode);k(this,Z);k(this,ne);k(this,Ce);k(this,nt);k(this,$e);k(this,wt);k(this,De);m(this,ne,s),m(this,Ce,a),m(this,nt,new Ca),m(this,$e,void 0),m(this,wt,!1),m(this,De,void 0)}static open(s){const a=s._streamIdAlloc.alloc(),n=new Qn(s,a),l=()=>{},i=d=>{var o;return S(o=n,Z,Sa).call(o,d)},r={type:"open_stream",streamId:a};return s._sendRequest(r,{responseCallback:l,errorCallback:i}),n}client(){return c(this,ne)}_sqlOwner(){return c(this,ne)}_execute(s){return S(this,Z,ts).call(this,{type:"execute",streamId:c(this,Ce),stmt:s}).then(a=>a.result)}_batch(s){return S(this,Z,ts).call(this,{type:"batch",streamId:c(this,Ce),batch:s}).then(a=>a.result)}_describe(s){return c(this,ne)._ensureVersion(2,"describe()"),S(this,Z,ts).call(this,{type:"describe",streamId:c(this,Ce),sql:s.sql,sqlId:s.sqlId}).then(a=>a.result)}_sequence(s){return c(this,ne)._ensureVersion(2,"sequence()"),S(this,Z,ts).call(this,{type:"sequence",streamId:c(this,Ce),sql:s.sql,sqlId:s.sqlId}).then(a=>{})}getAutocommit(){return c(this,ne)._ensureVersion(3,"getAutocommit()"),S(this,Z,ts).call(this,{type:"get_autocommit",streamId:c(this,Ce)}).then(s=>s.isAutocommit)}_openCursor(s){return c(this,ne)._ensureVersion(3,"cursor"),new Promise((a,n)=>{S(this,Z,cn).call(this,{type:"cursor",batch:s,cursorCallback:a,errorCallback:n})})}_sendCursorRequest(s,a){if(s!==c(this,$e))throw new At("Cursor not associated with the stream attempted to execute a request");return new Promise((n,l)=>{c(this,De)!==void 0?l(new Ae("Stream is closed",c(this,De))):c(this,ne)._sendRequest(a,{responseCallback:n,errorCallback:l})})}_cursorClosed(s){if(s!==c(this,$e))throw new At("Cursor was closed, but it was not associated with the stream");m(this,$e,void 0),S(this,Z,_a).call(this)}close(){S(this,Z,Sa).call(this,new Y("Stream was manually closed"))}closeGracefully(){m(this,wt,!0),S(this,Z,_a).call(this)}get closed(){return c(this,De)!==void 0||c(this,wt)}};ne=new WeakMap,Ce=new WeakMap,nt=new WeakMap,$e=new WeakMap,wt=new WeakMap,De=new WeakMap,Z=new WeakSet,ts=function(s){return new Promise((a,n)=>{S(this,Z,cn).call(this,{type:"request",request:s,responseCallback:a,errorCallback:n})})},cn=function(s){c(this,De)!==void 0?s.errorCallback(new Ae("Stream is closed",c(this,De))):c(this,wt)?s.errorCallback(new Ae("Stream is closing",void 0)):(c(this,nt).push(s),S(this,Z,_a).call(this))},_a=function(){for(;;){const s=c(this,nt).first();if(s===void 0&&c(this,$e)===void 0&&c(this,wt)){S(this,Z,Sa).call(this,new Y("Stream was gracefully closed"));break}else if((s==null?void 0:s.type)==="request"&&c(this,$e)===void 0){const{request:a,responseCallback:n,errorCallback:l}=s;c(this,nt).shift(),c(this,ne)._sendRequest(a,{responseCallback:n,errorCallback:l})}else if((s==null?void 0:s.type)==="cursor"&&c(this,$e)===void 0){const{batch:a,cursorCallback:n}=s;c(this,nt).shift();const l=c(this,ne)._cursorIdAlloc.alloc(),i=new Lo(c(this,ne),this,l),r={type:"open_cursor",streamId:c(this,Ce),cursorId:l,batch:a},d=()=>{},o=u=>i._setClosed(u);c(this,ne)._sendRequest(r,{responseCallback:d,errorCallback:o}),m(this,$e,i),n(i)}else break}},Sa=function(s){if(c(this,De)!==void 0)return;for(m(this,De,s),c(this,$e)!==void 0&&c(this,$e)._setClosed(s);;){const i=c(this,nt).shift();if(i!==void 0)i.errorCallback(s);else break}const a={type:"close_stream",streamId:c(this,Ce)},n=()=>c(this,ne)._streamIdAlloc.free(c(this,Ce)),l=()=>{};c(this,ne)._sendRequest(a,{responseCallback:n,errorCallback:l})};let on=Qn;function Cn(e,t){t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId),e.arrayObjects("args",t.args,mi),e.arrayObjects("named_args",t.namedArgs,jo),e.boolean("want_rows",t.wantRows)}function jo(e,t){e.string("name",t.name),e.object("value",t.value,mi)}function Ra(e,t){e.arrayObjects("steps",t.steps,Po)}function Po(e,t){t.condition!==void 0&&e.object("condition",t.condition,dn),e.object("stmt",t.stmt,Cn)}function dn(e,t){if(e.stringRaw("type",t.type),t.type==="ok"||t.type==="error")e.number("step",t.step);else if(t.type==="not")e.object("cond",t.cond,dn);else if(t.type==="and"||t.type==="or")e.arrayObjects("conds",t.conds,dn);else if(t.type!=="is_autocommit")throw J(t,"Impossible type of BatchCond")}function mi(e,t){if(t===null)e.stringRaw("type","null");else if(typeof t=="bigint")e.stringRaw("type","integer"),e.stringRaw("value",""+t);else if(typeof t=="number")e.stringRaw("type","float"),e.number("value",t);else if(typeof t=="string")e.stringRaw("type","text"),e.string("value",t);else if(t instanceof Uint8Array)e.stringRaw("type","blob"),e.stringRaw("base64",$n.fromUint8Array(t));else if(t!==void 0)throw J(t,"Impossible type of Value")}function No(e,t){if(e.stringRaw("type",t.type),t.type==="hello")t.jwt!==void 0&&e.string("jwt",t.jwt);else if(t.type==="request")e.number("request_id",t.requestId),e.object("request",t.request,qo);else throw J(t,"Impossible type of ClientMsg")}function qo(e,t){if(e.stringRaw("type",t.type),t.type==="open_stream")e.number("stream_id",t.streamId);else if(t.type==="close_stream")e.number("stream_id",t.streamId);else if(t.type==="execute")e.number("stream_id",t.streamId),e.object("stmt",t.stmt,Cn);else if(t.type==="batch")e.number("stream_id",t.streamId),e.object("batch",t.batch,Ra);else if(t.type==="open_cursor")e.number("stream_id",t.streamId),e.number("cursor_id",t.cursorId),e.object("batch",t.batch,Ra);else if(t.type==="close_cursor")e.number("cursor_id",t.cursorId);else if(t.type==="fetch_cursor")e.number("cursor_id",t.cursorId),e.number("max_count",t.maxCount);else if(t.type==="sequence")e.number("stream_id",t.streamId),t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="describe")e.number("stream_id",t.streamId),t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="store_sql")e.number("sql_id",t.sqlId),e.string("sql",t.sql);else if(t.type==="close_sql")e.number("sql_id",t.sqlId);else if(t.type==="get_autocommit")e.number("stream_id",t.streamId);else throw J(t,"Impossible type of Request")}function Rn(e,t){t.sql!==void 0&&e.string(1,t.sql),t.sqlId!==void 0&&e.int32(2,t.sqlId);for(const s of t.args)e.message(3,s,hi);for(const s of t.namedArgs)e.message(4,s,Bo);e.bool(5,t.wantRows)}function Bo(e,t){e.string(1,t.name),e.message(2,t.value,hi)}function Ba(e,t){for(const s of t.steps)e.message(1,s,Fo)}function Fo(e,t){t.condition!==void 0&&e.message(1,t.condition,An),e.message(2,t.stmt,Rn)}function An(e,t){if(t.type==="ok")e.uint32(1,t.step);else if(t.type==="error")e.uint32(2,t.step);else if(t.type==="not")e.message(3,t.cond,An);else if(t.type==="and")e.message(4,t.conds,cl);else if(t.type==="or")e.message(5,t.conds,cl);else if(t.type==="is_autocommit")e.message(6,void 0,gi);else throw J(t,"Impossible type of BatchCond")}function cl(e,t){for(const s of t)e.message(1,s,An)}function hi(e,t){if(t===null)e.message(1,void 0,gi);else if(typeof t=="bigint")e.sint64(2,t);else if(typeof t=="number")e.double(3,t);else if(typeof t=="string")e.string(4,t);else if(t instanceof Uint8Array)e.bytes(5,t);else if(t!==void 0)throw J(t,"Impossible type of Value")}function gi(e,t){}function Uo(e,t){if(t.type==="hello")e.message(1,t,Vo);else if(t.type==="request")e.message(2,t,Ho);else throw J(t,"Impossible type of ClientMsg")}function Vo(e,t){t.jwt!==void 0&&e.string(1,t.jwt)}function Ho(e,t){e.int32(1,t.requestId);const s=t.request;if(s.type==="open_stream")e.message(2,s,Go);else if(s.type==="close_stream")e.message(3,s,Wo);else if(s.type==="execute")e.message(4,s,zo);else if(s.type==="batch")e.message(5,s,Yo);else if(s.type==="open_cursor")e.message(6,s,Jo);else if(s.type==="close_cursor")e.message(7,s,Ko);else if(s.type==="fetch_cursor")e.message(8,s,Qo);else if(s.type==="sequence")e.message(9,s,Xo);else if(s.type==="describe")e.message(10,s,Zo);else if(s.type==="store_sql")e.message(11,s,ec);else if(s.type==="close_sql")e.message(12,s,tc);else if(s.type==="get_autocommit")e.message(13,s,sc);else throw J(s,"Impossible type of Request")}function Go(e,t){e.int32(1,t.streamId)}function Wo(e,t){e.int32(1,t.streamId)}function zo(e,t){e.int32(1,t.streamId),e.message(2,t.stmt,Rn)}function Yo(e,t){e.int32(1,t.streamId),e.message(2,t.batch,Ba)}function Jo(e,t){e.int32(1,t.streamId),e.int32(2,t.cursorId),e.message(3,t.batch,Ba)}function Ko(e,t){e.int32(1,t.cursorId)}function Qo(e,t){e.int32(1,t.cursorId),e.uint32(2,t.maxCount)}function Xo(e,t){e.int32(1,t.streamId),t.sql!==void 0&&e.string(2,t.sql),t.sqlId!==void 0&&e.int32(3,t.sqlId)}function Zo(e,t){e.int32(1,t.streamId),t.sql!==void 0&&e.string(2,t.sql),t.sqlId!==void 0&&e.int32(3,t.sqlId)}function ec(e,t){e.int32(1,t.sqlId),e.string(2,t.sql)}function tc(e,t){e.int32(1,t.sqlId)}function sc(e,t){e.int32(1,t.streamId)}function Ts(e){const t=qe(e.message),s=Fe(e.code);return{message:t,code:s}}function Tn(e){const t=Tt(e.cols,vi),s=Ia(e.rows).map(i=>Tt(i,_i)),a=Xt(e.affected_row_count),n=Fe(e.last_insert_rowid),l=n!==void 0?BigInt(n):void 0;return{cols:t,rows:s,affectedRowCount:a,lastInsertRowid:l}}function vi(e){const t=Fe(e.name),s=Fe(e.decltype);return{name:t,decltype:s}}function wi(e){const t=new Map;Ia(e.step_results).forEach((a,n)=>{a!==null&&t.set(n,Tn(ie(a)))});const s=new Map;return Ia(e.step_errors).forEach((a,n)=>{a!==null&&s.set(n,Ts(ie(a)))}),{stepResults:t,stepErrors:s}}function yi(e){const t=qe(e.type);if(t==="step_begin"){const s=Xt(e.step),a=Tt(e.cols,vi);return{type:"step_begin",step:s,cols:a}}else if(t==="step_end"){const s=Xt(e.affected_row_count),a=Fe(e.last_insert_rowid),n=a!==void 0?BigInt(a):void 0;return{type:"step_end",affectedRowCount:s,lastInsertRowid:n}}else if(t==="step_error"){const s=Xt(e.step),a=Ts(ie(e.error));return{type:"step_error",step:s,error:a}}else{if(t==="row")return{type:"row",row:Tt(e.row,_i)};if(t==="error")return{type:"error",error:Ts(ie(e.error))};throw new j("Unexpected type of CursorEntry")}}function ki(e){const t=Tt(e.params,ac),s=Tt(e.cols,nc),a=Qs(e.is_explain),n=Qs(e.is_readonly);return{params:t,cols:s,isExplain:a,isReadonly:n}}function ac(e){return{name:Fe(e.name)}}function nc(e){const t=qe(e.name),s=Fe(e.decltype);return{name:t,decltype:s}}function _i(e){const t=qe(e.type);if(t==="null")return null;if(t==="integer"){const s=qe(e.value);return BigInt(s)}else{if(t==="float")return Xt(e.value);if(t==="text")return qe(e.value);if(t==="blob")return $n.toUint8Array(qe(e.base64));throw new j("Unexpected type of Value")}}function lc(e){const t=qe(e.type);if(t==="hello_ok")return{type:"hello_ok"};if(t==="hello_error")return{type:"hello_error",error:Ts(ie(e.error))};if(t==="response_ok"){const s=Xt(e.request_id),a=ic(ie(e.response));return{type:"response_ok",requestId:s,response:a}}else if(t==="response_error"){const s=Xt(e.request_id),a=Ts(ie(e.error));return{type:"response_error",requestId:s,error:a}}else throw new j("Unexpected type of ServerMsg")}function ic(e){const t=qe(e.type);if(t==="open_stream")return{type:"open_stream"};if(t==="close_stream")return{type:"close_stream"};if(t==="execute")return{type:"execute",result:Tn(ie(e.result))};if(t==="batch")return{type:"batch",result:wi(ie(e.result))};if(t==="open_cursor")return{type:"open_cursor"};if(t==="close_cursor")return{type:"close_cursor"};if(t==="fetch_cursor"){const s=Tt(e.entries,yi),a=Qs(e.done);return{type:"fetch_cursor",entries:s,done:a}}else{if(t==="sequence")return{type:"sequence"};if(t==="describe")return{type:"describe",result:ki(ie(e.result))};if(t==="store_sql")return{type:"store_sql"};if(t==="close_sql")return{type:"close_sql"};if(t==="get_autocommit")return{type:"get_autocommit",isAutocommit:Qs(e.is_autocommit)};throw new j("Unexpected type of Response")}}const Je={default(){return{message:"",code:void 0}},1(e,t){t.message=e.string()},2(e,t){t.code=e.string()}},Ms={default(){return{cols:[],rows:[],affectedRowCount:0,lastInsertRowid:void 0}},1(e,t){t.cols.push(e.message(Si))},2(e,t){t.rows.push(e.message($i))},3(e,t){t.affectedRowCount=Number(e.uint64())},4(e,t){t.lastInsertRowid=e.sint64()}},Si={default(){return{name:void 0,decltype:void 0}},1(e,t){t.name=e.string()},2(e,t){t.decltype=e.string()}},$i={default(){return[]},1(e,t){t.push(e.message(fc))}},Aa={default(){return{stepResults:new Map,stepErrors:new Map}},1(e,t){const[s,a]=e.message(rc);t.stepResults.set(s,a)},2(e,t){const[s,a]=e.message(oc);t.stepErrors.set(s,a)}},rc={default(){return[0,Ms.default()]},1(e,t){t[0]=e.uint32()},2(e,t){t[1]=e.message(Ms)}},oc={default(){return[0,Je.default()]},1(e,t){t[0]=e.uint32()},2(e,t){t[1]=e.message(Je)}},Ei={default(){return{type:"none"}},1(e){return e.message(cc)},2(e){return e.message(dc)},3(e){return e.message(pc)},4(e){return{type:"row",row:e.message($i)}},5(e){return{type:"error",error:e.message(Je)}}},cc={default(){return{type:"step_begin",step:0,cols:[]}},1(e,t){t.step=e.uint32()},2(e,t){t.cols.push(e.message(Si))}},dc={default(){return{type:"step_end",affectedRowCount:0,lastInsertRowid:void 0}},1(e,t){t.affectedRowCount=e.uint32()},2(e,t){t.lastInsertRowid=e.uint64()}},pc={default(){return{type:"step_error",step:0,error:Je.default()}},1(e,t){t.step=e.uint32()},2(e,t){t.error=e.message(Je)}},Ta={default(){return{params:[],cols:[],isExplain:!1,isReadonly:!1}},1(e,t){t.params.push(e.message(uc))},2(e,t){t.cols.push(e.message(xc))},3(e,t){t.isExplain=e.bool()},4(e,t){t.isReadonly=e.bool()}},uc={default(){return{name:void 0}},1(e,t){t.name=e.string()}},xc={default(){return{name:"",decltype:void 0}},1(e,t){t.name=e.string()},2(e,t){t.decltype=e.string()}},fc={default(){},1(e){return null},2(e){return e.sint64()},3(e){return e.double()},4(e){return e.string()},5(e){return e.bytes()}},bc={default(){return{type:"none"}},1(e){return{type:"hello_ok"}},2(e){return e.message(mc)},3(e){return e.message(gc)},4(e){return e.message(hc)}},mc={default(){return{type:"hello_error",error:Je.default()}},1(e,t){t.error=e.message(Je)}},hc={default(){return{type:"response_error",requestId:0,error:Je.default()}},1(e,t){t.requestId=e.int32()},2(e,t){t.error=e.message(Je)}},gc={default(){return{type:"response_ok",requestId:0,response:{type:"none"}}},1(e,t){t.requestId=e.int32()},2(e,t){t.response={type:"open_stream"}},3(e,t){t.response={type:"close_stream"}},4(e,t){t.response=e.message(vc)},5(e,t){t.response=e.message(wc)},6(e,t){t.response={type:"open_cursor"}},7(e,t){t.response={type:"close_cursor"}},8(e,t){t.response=e.message(yc)},9(e,t){t.response={type:"sequence"}},10(e,t){t.response=e.message(kc)},11(e,t){t.response={type:"store_sql"}},12(e,t){t.response={type:"close_sql"}},13(e,t){t.response=e.message(_c)}},vc={default(){return{type:"execute",result:Ms.default()}},1(e,t){t.result=e.message(Ms)}},wc={default(){return{type:"batch",result:Aa.default()}},1(e,t){t.result=e.message(Aa)}},yc={default(){return{type:"fetch_cursor",entries:[],done:!1}},1(e,t){t.entries.push(e.message(Ei))},2(e,t){t.done=e.bool()}},kc={default(){return{type:"describe",result:Ta.default()}},1(e,t){t.result=e.message(Ta)}},_c={default(){return{type:"get_autocommit",isAutocommit:!1}},1(e,t){t.isAutocommit=e.bool()}},Sc=new Map([["hrana2",{version:2,encoding:"json"}],["hrana1",{version:1,encoding:"json"}]]),Ii=new Map([["hrana3-protobuf",{version:3,encoding:"protobuf"}],["hrana3",{version:3,encoding:"json"}],["hrana2",{version:2,encoding:"json"}],["hrana1",{version:1,encoding:"json"}]]);var re,Ge,Wt,he,zt,ge,bs,Oe,yt,ms,U,pn,Ci,un,Ri,Ai,Ue,Ti,Mi,Ml;let $c=(Ml=class extends ei{constructor(s,a){super();k(this,U);k(this,re);k(this,Ge);k(this,Wt);k(this,he);k(this,zt);k(this,ge);k(this,bs);k(this,Oe);k(this,yt);q(this,"_streamIdAlloc");q(this,"_cursorIdAlloc");k(this,ms);m(this,re,s),m(this,Ge,[]),m(this,Wt,!1),m(this,he,void 0),m(this,zt,!1),m(this,ge,void 0),m(this,bs,!1),m(this,Oe,new Map),m(this,yt,new Bs),this._streamIdAlloc=new Bs,this._cursorIdAlloc=new Bs,m(this,ms,new Bs),c(this,re).binaryType="arraybuffer",c(this,re).addEventListener("open",()=>S(this,U,Ci).call(this)),c(this,re).addEventListener("close",n=>S(this,U,Ai).call(this,n)),c(this,re).addEventListener("error",n=>S(this,U,Ri).call(this,n)),c(this,re).addEventListener("message",n=>S(this,U,Ti).call(this,n)),S(this,U,pn).call(this,{type:"hello",jwt:a})}getVersion(){return new Promise((s,a)=>{if(m(this,bs,!0),c(this,he)!==void 0)a(c(this,he));else if(c(this,Wt))s(c(this,ge).version);else{const n=()=>s(c(this,ge).version);c(this,Ge).push({openCallback:n,errorCallback:a})}})}_ensureVersion(s,a){if(c(this,ge)===void 0||!c(this,bs))throw new Rs(`${a} is supported only on protocol version ${s} and higher, but the version supported by the WebSocket server is not yet known. Use Client.getVersion() to wait until the version is available.`);if(c(this,ge).version<s)throw new Rs(`${a} is supported on protocol version ${s} and higher, but the WebSocket server only supports version ${c(this,ge).version}`)}_sendRequest(s,a){if(c(this,he)!==void 0){a.errorCallback(new Ae("Client is closed",c(this,he)));return}const n=c(this,yt).alloc();c(this,Oe).set(n,{...a,type:s.type}),S(this,U,pn).call(this,{type:"request",requestId:n,request:s})}openStream(){return on.open(this)}storeSql(s){this._ensureVersion(2,"storeSql()");const a=c(this,ms).alloc(),n=new In(this,a),l=()=>{},i=d=>n._setClosed(d),r={type:"store_sql",sqlId:a,sql:s};return this._sendRequest(r,{responseCallback:l,errorCallback:i}),n}_closeSql(s){if(c(this,he)!==void 0)return;const a=()=>c(this,ms).free(s),n=i=>S(this,U,Ue).call(this,i),l={type:"close_sql",sqlId:s};this._sendRequest(l,{responseCallback:a,errorCallback:n})}close(){S(this,U,Ue).call(this,new Y("Client was manually closed"))}get closed(){return c(this,he)!==void 0}},re=new WeakMap,Ge=new WeakMap,Wt=new WeakMap,he=new WeakMap,zt=new WeakMap,ge=new WeakMap,bs=new WeakMap,Oe=new WeakMap,yt=new WeakMap,ms=new WeakMap,U=new WeakSet,pn=function(s){if(c(this,he)!==void 0)throw new At("Trying to send a message on a closed client");if(c(this,Wt))S(this,U,un).call(this,s);else{const a=()=>S(this,U,un).call(this,s),n=()=>{};c(this,Ge).push({openCallback:a,errorCallback:n})}},Ci=function(){const s=c(this,re).protocol;if(s===void 0){S(this,U,Ue).call(this,new Y("The `WebSocket.protocol` property is undefined. This most likely means that the WebSocket implementation provided by the environment is broken. If you are using Miniflare 2, please update to Miniflare 3, which fixes this problem."));return}else if(s==="")m(this,ge,{version:1,encoding:"json"});else if(m(this,ge,Ii.get(s)),c(this,ge)===void 0){S(this,U,Ue).call(this,new j(`Unrecognized WebSocket subprotocol: ${JSON.stringify(s)}`));return}for(const a of c(this,Ge))a.openCallback();c(this,Ge).length=0,m(this,Wt,!0)},un=function(s){const a=c(this,ge).encoding;if(a==="json"){const n=ai(s,No);c(this,re).send(n)}else if(a==="protobuf"){const n=li(s,Uo);c(this,re).send(n)}else throw J(a,"Impossible encoding")},Ri=function(s){const n=s.message??"WebSocket was closed due to an error";S(this,U,Ue).call(this,new sn(n))},Ai=function(s){let a=`WebSocket was closed with code ${s.code}`;s.reason&&(a+=`: ${s.reason}`),S(this,U,Ue).call(this,new sn(a))},Ue=function(s){if(c(this,he)===void 0){m(this,he,s);for(const a of c(this,Ge))a.errorCallback(s);c(this,Ge).length=0;for(const[a,n]of c(this,Oe).entries())n.errorCallback(s),c(this,yt).free(a);c(this,Oe).clear(),c(this,re).close()}},Ti=function(s){if(c(this,he)===void 0)try{let a;const n=c(this,ge).encoding;if(n==="json"){if(typeof s.data!="string"){c(this,re).close(3003,"Only text messages are accepted with JSON encoding"),S(this,U,Ue).call(this,new j("Received non-text message from server with JSON encoding"));return}a=En(JSON.parse(s.data),lc)}else if(n==="protobuf"){if(!(s.data instanceof ArrayBuffer)){c(this,re).close(3003,"Only binary messages are accepted with Protobuf encoding"),S(this,U,Ue).call(this,new j("Received non-binary message from server with Protobuf encoding"));return}a=qa(new Uint8Array(s.data),bc)}else throw J(n,"Impossible encoding");S(this,U,Mi).call(this,a)}catch(a){c(this,re).close(3007,"Could not handle message"),S(this,U,Ue).call(this,a)}},Mi=function(s){if(s.type==="none")throw new j("Received an unrecognized ServerMsg");if(s.type==="hello_ok"||s.type==="hello_error"){if(c(this,zt))throw new j("Received a duplicated hello response");if(m(this,zt,!0),s.type==="hello_error")throw As(s.error);return}else if(!c(this,zt))throw new j("Received a non-hello message before a hello response");if(s.type==="response_ok"){const a=s.requestId,n=c(this,Oe).get(a);if(c(this,Oe).delete(a),n===void 0)throw new j("Received unexpected OK response");c(this,yt).free(a);try{if(n.type!==s.response.type)throw console.dir({responseState:n,msg:s}),new j("Received unexpected type of response");n.responseCallback(s.response)}catch(l){throw n.errorCallback(l),l}}else if(s.type==="response_error"){const a=s.requestId,n=c(this,Oe).get(a);if(c(this,Oe).delete(a),n===void 0)throw new j("Received unexpected error response");c(this,yt).free(a),n.errorCallback(As(s.error))}else throw J(s,"Impossible ServerMsg type")},Ml);var ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ec(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xn={exports:{}};(function(e,t){var s=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof ga<"u"&&ga,a=function(){function l(){this.fetch=!1,this.DOMException=s.DOMException}return l.prototype=s,new l}();(function(l){(function(i){var r=typeof l<"u"&&l||typeof self<"u"&&self||typeof ga<"u"&&ga||{},d={searchParams:"URLSearchParams"in r,iterable:"Symbol"in r&&"iterator"in Symbol,blob:"FileReader"in r&&"Blob"in r&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in r,arrayBuffer:"ArrayBuffer"in r};function o(w){return w&&DataView.prototype.isPrototypeOf(w)}if(d.arrayBuffer)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],f=ArrayBuffer.isView||function(w){return w&&u.indexOf(Object.prototype.toString.call(w))>-1};function b(w){if(typeof w!="string"&&(w=String(w)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(w)||w==="")throw new TypeError('Invalid character in header field name: "'+w+'"');return w.toLowerCase()}function h(w){return typeof w!="string"&&(w=String(w)),w}function v(w){var $={next:function(){var L=w.shift();return{done:L===void 0,value:L}}};return d.iterable&&($[Symbol.iterator]=function(){return $}),$}function x(w){this.map={},w instanceof x?w.forEach(function($,L){this.append(L,$)},this):Array.isArray(w)?w.forEach(function($){if($.length!=2)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+$.length);this.append($[0],$[1])},this):w&&Object.getOwnPropertyNames(w).forEach(function($){this.append($,w[$])},this)}x.prototype.append=function(w,$){w=b(w),$=h($);var L=this.map[w];this.map[w]=L?L+", "+$:$},x.prototype.delete=function(w){delete this.map[b(w)]},x.prototype.get=function(w){return w=b(w),this.has(w)?this.map[w]:null},x.prototype.has=function(w){return this.map.hasOwnProperty(b(w))},x.prototype.set=function(w,$){this.map[b(w)]=h($)},x.prototype.forEach=function(w,$){for(var L in this.map)this.map.hasOwnProperty(L)&&w.call($,this.map[L],L,this)},x.prototype.keys=function(){var w=[];return this.forEach(function($,L){w.push(L)}),v(w)},x.prototype.values=function(){var w=[];return this.forEach(function($){w.push($)}),v(w)},x.prototype.entries=function(){var w=[];return this.forEach(function($,L){w.push([L,$])}),v(w)},d.iterable&&(x.prototype[Symbol.iterator]=x.prototype.entries);function y(w){if(!w._noBody){if(w.bodyUsed)return Promise.reject(new TypeError("Already read"));w.bodyUsed=!0}}function _(w){return new Promise(function($,L){w.onload=function(){$(w.result)},w.onerror=function(){L(w.error)}})}function R(w){var $=new FileReader,L=_($);return $.readAsArrayBuffer(w),L}function M(w){var $=new FileReader,L=_($),V=/charset=([A-Za-z0-9_-]+)/.exec(w.type),G=V?V[1]:"utf-8";return $.readAsText(w,G),L}function E(w){for(var $=new Uint8Array(w),L=new Array($.length),V=0;V<$.length;V++)L[V]=String.fromCharCode($[V]);return L.join("")}function O(w){if(w.slice)return w.slice(0);var $=new Uint8Array(w.byteLength);return $.set(new Uint8Array(w)),$.buffer}function Q(){return this.bodyUsed=!1,this._initBody=function(w){this.bodyUsed=this.bodyUsed,this._bodyInit=w,w?typeof w=="string"?this._bodyText=w:d.blob&&Blob.prototype.isPrototypeOf(w)?this._bodyBlob=w:d.formData&&FormData.prototype.isPrototypeOf(w)?this._bodyFormData=w:d.searchParams&&URLSearchParams.prototype.isPrototypeOf(w)?this._bodyText=w.toString():d.arrayBuffer&&d.blob&&o(w)?(this._bodyArrayBuffer=O(w.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):d.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(w)||f(w))?this._bodyArrayBuffer=O(w):this._bodyText=w=Object.prototype.toString.call(w):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||(typeof w=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):d.searchParams&&URLSearchParams.prototype.isPrototypeOf(w)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},d.blob&&(this.blob=function(){var w=y(this);if(w)return w;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var w=y(this);return w||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else{if(d.blob)return this.blob().then(R);throw new Error("could not read as ArrayBuffer")}},this.text=function(){var w=y(this);if(w)return w;if(this._bodyBlob)return M(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(E(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},d.formData&&(this.formData=function(){return this.text().then(T)}),this.json=function(){return this.text().then(JSON.parse)},this}var bt=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function Xe(w){var $=w.toUpperCase();return bt.indexOf($)>-1?$:w}function xe(w,$){if(!(this instanceof xe))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');$=$||{};var L=$.body;if(w instanceof xe){if(w.bodyUsed)throw new TypeError("Already read");this.url=w.url,this.credentials=w.credentials,$.headers||(this.headers=new x(w.headers)),this.method=w.method,this.mode=w.mode,this.signal=w.signal,!L&&w._bodyInit!=null&&(L=w._bodyInit,w.bodyUsed=!0)}else this.url=String(w);if(this.credentials=$.credentials||this.credentials||"same-origin",($.headers||!this.headers)&&(this.headers=new x($.headers)),this.method=Xe($.method||this.method||"GET"),this.mode=$.mode||this.mode||null,this.signal=$.signal||this.signal||function(){if("AbortController"in r){var P=new AbortController;return P.signal}}(),this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&L)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(L),(this.method==="GET"||this.method==="HEAD")&&($.cache==="no-store"||$.cache==="no-cache")){var V=/([?&])_=[^&]*/;if(V.test(this.url))this.url=this.url.replace(V,"$1_="+new Date().getTime());else{var G=/\?/;this.url+=(G.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}xe.prototype.clone=function(){return new xe(this,{body:this._bodyInit})};function T(w){var $=new FormData;return w.trim().split("&").forEach(function(L){if(L){var V=L.split("="),G=V.shift().replace(/\+/g," "),P=V.join("=").replace(/\+/g," ");$.append(decodeURIComponent(G),decodeURIComponent(P))}}),$}function Dt(w){var $=new x,L=w.replace(/\r?\n[\t ]+/g," ");return L.split("\r").map(function(V){return V.indexOf(`
`)===0?V.substr(1,V.length):V}).forEach(function(V){var G=V.split(":"),P=G.shift().trim();if(P){var ma=G.join(":").trim();try{$.append(P,ma)}catch(Ga){console.warn("Response "+Ga.message)}}}),$}Q.call(xe.prototype);function fe(w,$){if(!(this instanceof fe))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if($||($={}),this.type="default",this.status=$.status===void 0?200:$.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=$.statusText===void 0?"":""+$.statusText,this.headers=new x($.headers),this.url=$.url||"",this._initBody(w)}Q.call(fe.prototype),fe.prototype.clone=function(){return new fe(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new x(this.headers),url:this.url})},fe.error=function(){var w=new fe(null,{status:200,statusText:""});return w.ok=!1,w.status=0,w.type="error",w};var ar=[301,302,303,307,308];fe.redirect=function(w,$){if(ar.indexOf($)===-1)throw new RangeError("Invalid status code");return new fe(null,{status:$,headers:{location:w}})},i.DOMException=r.DOMException;try{new i.DOMException}catch{i.DOMException=function($,L){this.message=$,this.name=L;var V=Error($);this.stack=V.stack},i.DOMException.prototype=Object.create(Error.prototype),i.DOMException.prototype.constructor=i.DOMException}function Ha(w,$){return new Promise(function(L,V){var G=new xe(w,$);if(G.signal&&G.signal.aborted)return V(new i.DOMException("Aborted","AbortError"));var P=new XMLHttpRequest;function ma(){P.abort()}P.onload=function(){var ae={statusText:P.statusText,headers:Dt(P.getAllResponseHeaders()||"")};G.url.indexOf("file://")===0&&(P.status<200||P.status>599)?ae.status=200:ae.status=P.status,ae.url="responseURL"in P?P.responseURL:ae.headers.get("X-Request-URL");var Ot="response"in P?P.response:P.responseText;setTimeout(function(){L(new fe(Ot,ae))},0)},P.onerror=function(){setTimeout(function(){V(new TypeError("Network request failed"))},0)},P.ontimeout=function(){setTimeout(function(){V(new TypeError("Network request timed out"))},0)},P.onabort=function(){setTimeout(function(){V(new i.DOMException("Aborted","AbortError"))},0)};function Ga(ae){try{return ae===""&&r.location.href?r.location.href:ae}catch{return ae}}if(P.open(G.method,Ga(G.url),!0),G.credentials==="include"?P.withCredentials=!0:G.credentials==="omit"&&(P.withCredentials=!1),"responseType"in P&&(d.blob?P.responseType="blob":d.arrayBuffer&&(P.responseType="arraybuffer")),$&&typeof $.headers=="object"&&!($.headers instanceof x||r.Headers&&$.headers instanceof r.Headers)){var Xn=[];Object.getOwnPropertyNames($.headers).forEach(function(ae){Xn.push(b(ae)),P.setRequestHeader(ae,h($.headers[ae]))}),G.headers.forEach(function(ae,Ot){Xn.indexOf(Ot)===-1&&P.setRequestHeader(Ot,ae)})}else G.headers.forEach(function(ae,Ot){P.setRequestHeader(Ot,ae)});G.signal&&(G.signal.addEventListener("abort",ma),P.onreadystatechange=function(){P.readyState===4&&G.signal.removeEventListener("abort",ma)}),P.send(typeof G._bodyInit>"u"?null:G._bodyInit)})}return Ha.polyfill=!0,r.fetch||(r.fetch=Ha,r.Headers=x,r.Request=xe,r.Response=fe),i.Headers=x,i.Request=xe,i.Response=fe,i.fetch=Ha,i})({})})(a),a.fetch.ponyfill=!0,delete a.fetch.polyfill;var n=s.fetch?s:a;t=n.fetch,t.default=n.fetch,t.fetch=n.fetch,t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response,e.exports=t})(xn,xn.exports);var Ma=xn.exports;let ns;if(typeof queueMicrotask<"u")ns=queueMicrotask;else{const e=Promise.resolve();ns=t=>{e.then(t)}}var Ee,Le,ve,Na,Di;class Ic{constructor(t){k(this,Na);k(this,Ee);k(this,Le);k(this,ve);m(this,Ee,new Uint8Array(new ArrayBuffer(t))),m(this,Le,0),m(this,ve,0)}get length(){return c(this,ve)-c(this,Le)}data(){return c(this,Ee).slice(c(this,Le),c(this,ve))}push(t){S(this,Na,Di).call(this,t.byteLength),c(this,Ee).set(t,c(this,ve)),m(this,ve,c(this,ve)+t.byteLength)}shift(t){m(this,Le,c(this,Le)+t)}}Ee=new WeakMap,Le=new WeakMap,ve=new WeakMap,Na=new WeakSet,Di=function(t){if(c(this,ve)+t<=c(this,Ee).byteLength)return;const s=c(this,ve)-c(this,Le);if(s+t<=c(this,Ee).byteLength&&2*c(this,ve)>=c(this,Ee).byteLength)c(this,Ee).copyWithin(0,c(this,Le),c(this,ve));else{let a=c(this,Ee).byteLength;do a*=2;while(s+t>a);const n=new Uint8Array(new ArrayBuffer(a));n.set(c(this,Ee).slice(c(this,Le),c(this,ve)),0),m(this,Ee,n)}m(this,ve,s),m(this,Le,0)};function Cc(e){const t=Fe(e.baton),s=Fe(e.base_url),a=Tt(e.results,Rc);return{baton:t,baseUrl:s,results:a}}function Rc(e){const t=qe(e.type);if(t==="ok")return{type:"ok",response:Ac(ie(e.response))};if(t==="error")return{type:"error",error:Ts(ie(e.error))};throw new j("Unexpected type of StreamResult")}function Ac(e){const t=qe(e.type);if(t==="close")return{type:"close"};if(t==="execute")return{type:"execute",result:Tn(ie(e.result))};if(t==="batch")return{type:"batch",result:wi(ie(e.result))};if(t==="sequence")return{type:"sequence"};if(t==="describe")return{type:"describe",result:ki(ie(e.result))};if(t==="store_sql")return{type:"store_sql"};if(t==="close_sql")return{type:"close_sql"};if(t==="get_autocommit")return{type:"get_autocommit",isAutocommit:Qs(e.is_autocommit)};throw new j("Unexpected type of StreamResponse")}function Tc(e){const t=Fe(e.baton),s=Fe(e.base_url);return{baton:t,baseUrl:s}}const Mc={default(){return{baton:void 0,baseUrl:void 0,results:[]}},1(e,t){t.baton=e.string()},2(e,t){t.baseUrl=e.string()},3(e,t){t.results.push(e.message(Dc))}},Dc={default(){return{type:"none"}},1(e){return{type:"ok",response:e.message(Oc)}},2(e){return{type:"error",error:e.message(Je)}}},Oc={default(){return{type:"none"}},1(e){return{type:"close"}},2(e){return e.message(Lc)},3(e){return e.message(jc)},4(e){return{type:"sequence"}},5(e){return e.message(Pc)},6(e){return{type:"store_sql"}},7(e){return{type:"close_sql"}},8(e){return e.message(Nc)}},Lc={default(){return{type:"execute",result:Ms.default()}},1(e,t){t.result=e.message(Ms)}},jc={default(){return{type:"batch",result:Aa.default()}},1(e,t){t.result=e.message(Aa)}},Pc={default(){return{type:"describe",result:Ta.default()}},1(e,t){t.result=e.message(Ta)}},Nc={default(){return{type:"get_autocommit",isAutocommit:!1}},1(e,t){t.isAutocommit=e.bool()}},qc={default(){return{baton:void 0,baseUrl:void 0}},1(e,t){t.baton=e.string()},2(e,t){t.baseUrl=e.string()}};var ea,Yt,lt,We,it,hs,ft,fn,Oi,Li;class Bc extends fi{constructor(s,a){super();k(this,ft);k(this,ea);k(this,Yt);k(this,lt);k(this,We);k(this,it);k(this,hs);m(this,ea,s),m(this,Yt,a),m(this,lt,void 0),m(this,We,new Ic(16*1024)),m(this,it,void 0),m(this,hs,!1)}async open(s){if(s.body===null)throw new j("No response body for cursor request");m(this,lt,s.body[Symbol.asyncIterator]());const a=await S(this,ft,fn).call(this,Tc,qc);if(a===void 0)throw new j("Empty response to cursor request");return a}next(){return S(this,ft,fn).call(this,yi,Ei)}close(){this._setClosed(new Y("Cursor was manually closed"))}_setClosed(s){c(this,it)===void 0&&(m(this,it,s),c(this,ea)._cursorClosed(this),c(this,lt)!==void 0&&c(this,lt).return())}get closed(){return c(this,it)!==void 0}}ea=new WeakMap,Yt=new WeakMap,lt=new WeakMap,We=new WeakMap,it=new WeakMap,hs=new WeakMap,ft=new WeakSet,fn=async function(s,a){for(;;){if(c(this,hs))return;if(c(this,it)!==void 0)throw new Ae("Cursor is closed",c(this,it));if(c(this,Yt)==="json"){const i=S(this,ft,Oi).call(this);if(i!==void 0){const r=new TextDecoder().decode(i),d=JSON.parse(r);return En(d,s)}}else if(c(this,Yt)==="protobuf"){const i=S(this,ft,Li).call(this);if(i!==void 0)return qa(i,a)}else throw J(c(this,Yt),"Impossible encoding");if(c(this,lt)===void 0)throw new At("Attempted to read from HTTP cursor before it was opened");const{value:n,done:l}=await c(this,lt).next();if(l&&c(this,We).length===0)m(this,hs,!0);else{if(l)throw new j("Unexpected end of cursor stream");c(this,We).push(n)}}},Oi=function(){const s=c(this,We).data(),n=s.indexOf(10);if(n<0)return;const l=s.slice(0,n);return c(this,We).shift(n+1),l},Li=function(){const s=c(this,We).data();let a=0,n=0;for(;;){if(n>=s.byteLength)return;const i=s[n];if(a|=(i&127)<<7*n,n+=1,!(i&128))break}if(s.byteLength<n+a)return;const l=s.slice(n,n+a);return c(this,We).shift(n+a),l};function Fc(e,t){t.baton!==void 0&&e.string("baton",t.baton),e.arrayObjects("requests",t.requests,Uc)}function Uc(e,t){if(e.stringRaw("type",t.type),t.type!=="close"){if(t.type==="execute")e.object("stmt",t.stmt,Cn);else if(t.type==="batch")e.object("batch",t.batch,Ra);else if(t.type==="sequence")t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="describe")t.sql!==void 0&&e.string("sql",t.sql),t.sqlId!==void 0&&e.number("sql_id",t.sqlId);else if(t.type==="store_sql")e.number("sql_id",t.sqlId),e.string("sql",t.sql);else if(t.type==="close_sql")e.number("sql_id",t.sqlId);else if(t.type!=="get_autocommit")throw J(t,"Impossible type of StreamRequest")}}function Vc(e,t){t.baton!==void 0&&e.string("baton",t.baton),e.object("batch",t.batch,Ra)}function Hc(e,t){t.baton!==void 0&&e.string(1,t.baton);for(const s of t.requests)e.message(2,s,Gc)}function Gc(e,t){if(t.type==="close")e.message(1,t,Wc);else if(t.type==="execute")e.message(2,t,zc);else if(t.type==="batch")e.message(3,t,Yc);else if(t.type==="sequence")e.message(4,t,Jc);else if(t.type==="describe")e.message(5,t,Kc);else if(t.type==="store_sql")e.message(6,t,Qc);else if(t.type==="close_sql")e.message(7,t,Xc);else if(t.type==="get_autocommit")e.message(8,t,Zc);else throw J(t,"Impossible type of StreamRequest")}function Wc(e,t){}function zc(e,t){e.message(1,t.stmt,Rn)}function Yc(e,t){e.message(1,t.batch,Ba)}function Jc(e,t){t.sql!==void 0&&e.string(1,t.sql),t.sqlId!==void 0&&e.int32(2,t.sqlId)}function Kc(e,t){t.sql!==void 0&&e.string(1,t.sql),t.sqlId!==void 0&&e.int32(2,t.sqlId)}function Qc(e,t){e.int32(1,t.sqlId),e.string(2,t.sql)}function Xc(e,t){e.int32(1,t.sqlId)}function Zc(e,t){}function ed(e,t){t.baton!==void 0&&e.string(1,t.baton),e.message(2,t.batch,Ba)}var rt,kt,gs,ta,vs,_t,je,St,ot,ct,$t,ze,ws,N,mt,bn,Pt,ji,Pi,mn,Ni,qi,hn;class td extends xi{constructor(s,a,n,l,i){super(s.intMode);k(this,N);k(this,rt);k(this,kt);k(this,gs);k(this,ta);k(this,vs);k(this,_t);k(this,je);k(this,St);k(this,ot);k(this,ct);k(this,$t);k(this,ze);k(this,ws);m(this,rt,s),m(this,kt,a.toString()),m(this,gs,n),m(this,ta,l),m(this,vs,i),m(this,_t,void 0),m(this,je,new Ca),m(this,St,!1),m(this,ct,!1),m(this,$t,!1),m(this,ze,void 0),m(this,ws,new Bs)}client(){return c(this,rt)}_sqlOwner(){return this}storeSql(s){const a=c(this,ws).alloc();return S(this,N,mt).call(this,{type:"store_sql",sqlId:a,sql:s}).then(()=>{},n=>this._setClosed(n)),new In(this,a)}_closeSql(s){c(this,ze)===void 0&&S(this,N,mt).call(this,{type:"close_sql",sqlId:s}).then(()=>c(this,ws).free(s),a=>this._setClosed(a))}_execute(s){return S(this,N,mt).call(this,{type:"execute",stmt:s}).then(a=>a.result)}_batch(s){return S(this,N,mt).call(this,{type:"batch",batch:s}).then(a=>a.result)}_describe(s){return S(this,N,mt).call(this,{type:"describe",sql:s.sql,sqlId:s.sqlId}).then(a=>a.result)}_sequence(s){return S(this,N,mt).call(this,{type:"sequence",sql:s.sql,sqlId:s.sqlId}).then(a=>{})}getAutocommit(){return c(this,rt)._ensureVersion(3,"getAutocommit()"),S(this,N,mt).call(this,{type:"get_autocommit"}).then(s=>s.isAutocommit)}_openCursor(s){return new Promise((a,n)=>{S(this,N,bn).call(this,{type:"cursor",batch:s,cursorCallback:a,errorCallback:n})})}_cursorClosed(s){if(s!==c(this,ot))throw new At("Cursor was closed, but it was not associated with the stream");m(this,ot,void 0),ns(()=>S(this,N,Pt).call(this))}close(){this._setClosed(new Y("Stream was manually closed"))}closeGracefully(){m(this,ct,!0),ns(()=>S(this,N,Pt).call(this))}get closed(){return c(this,ze)!==void 0||c(this,ct)}_setClosed(s){if(c(this,ze)===void 0){for(m(this,ze,s),c(this,ot)!==void 0&&c(this,ot)._setClosed(s),c(this,rt)._streamClosed(this);;){const a=c(this,je).shift();if(a!==void 0)a.errorCallback(s);else break}(c(this,_t)!==void 0||c(this,St))&&!c(this,$t)&&(c(this,je).push({type:"pipeline",request:{type:"close"},responseCallback:()=>{},errorCallback:()=>{}}),m(this,$t,!0),ns(()=>S(this,N,Pt).call(this)))}}}rt=new WeakMap,kt=new WeakMap,gs=new WeakMap,ta=new WeakMap,vs=new WeakMap,_t=new WeakMap,je=new WeakMap,St=new WeakMap,ot=new WeakMap,ct=new WeakMap,$t=new WeakMap,ze=new WeakMap,ws=new WeakMap,N=new WeakSet,mt=function(s){return new Promise((a,n)=>{S(this,N,bn).call(this,{type:"pipeline",request:s,responseCallback:a,errorCallback:n})})},bn=function(s){if(c(this,ze)!==void 0)throw new Ae("Stream is closed",c(this,ze));if(c(this,ct))throw new Ae("Stream is closing",void 0);c(this,je).push(s),ns(()=>S(this,N,Pt).call(this))},Pt=function(){if(c(this,St)||c(this,ot)!==void 0)return;if(c(this,ct)&&c(this,je).length===0){this._setClosed(new Y("Stream was gracefully closed"));return}const s=c(this,rt)._endpoint;if(s===void 0){c(this,rt)._endpointPromise.then(()=>S(this,N,Pt).call(this),n=>this._setClosed(n));return}const a=c(this,je).shift();if(a!==void 0)if(a.type==="pipeline"){const n=[a];for(;;){const l=c(this,je).first();if(l!==void 0&&l.type==="pipeline")n.push(l),c(this,je).shift();else if(l===void 0&&c(this,ct)&&!c(this,$t)){n.push({type:"pipeline",request:{type:"close"},responseCallback:()=>{},errorCallback:()=>{}}),m(this,$t,!0);break}else break}S(this,N,ji).call(this,s,n)}else if(a.type==="cursor")S(this,N,Pi).call(this,s,a);else throw J(a,"Impossible type of QueueEntry")},ji=function(s,a){S(this,N,mn).call(this,()=>S(this,N,Ni).call(this,a,s),n=>ad(n,s.encoding),n=>n.baton,n=>n.baseUrl,n=>sd(a,n),n=>a.forEach(l=>l.errorCallback(n)))},Pi=function(s,a){const n=new Bc(this,s.encoding);m(this,ot,n),S(this,N,mn).call(this,()=>S(this,N,qi).call(this,a,s),l=>n.open(l),l=>l.baton,l=>l.baseUrl,l=>a.cursorCallback(n),l=>a.errorCallback(l))},mn=function(s,a,n,l,i,r){let d;try{const o=s();d=c(this,ta)(o)}catch(o){d=Promise.reject(o)}m(this,St,!0),d.then(o=>o.ok?a(o):nd(o).then(u=>{throw u})).then(o=>{m(this,_t,n(o)),m(this,kt,l(o)??c(this,kt)),i(o)}).catch(o=>{this._setClosed(o),r(o)}).finally(()=>{m(this,St,!1),S(this,N,Pt).call(this)})},Ni=function(s,a){return S(this,N,hn).call(this,new URL(a.pipelinePath,c(this,kt)),{baton:c(this,_t),requests:s.map(n=>n.request)},a.encoding,Fc,Hc)},qi=function(s,a){if(a.cursorPath===void 0)throw new Rs(`Cursors are supported only on protocol version 3 and higher, but the HTTP server only supports version ${a.version}.`);return S(this,N,hn).call(this,new URL(a.cursorPath,c(this,kt)),{baton:c(this,_t),batch:s.batch},a.encoding,Vc,ed)},hn=function(s,a,n,l,i){let r,d;if(n==="json")r=ai(a,l),d="application/json";else if(n==="protobuf")r=li(a,i),d="application/x-protobuf";else throw J(n,"Impossible encoding");const o=new Ma.Headers;return o.set("content-type",d),c(this,gs)!==void 0&&o.set("authorization",`Bearer ${c(this,gs)}`),c(this,vs)!==void 0&&o.set("x-turso-encryption-key",c(this,vs)),new Ma.Request(s.toString(),{method:"POST",headers:o,body:r})};function sd(e,t){if(t.results.length!==e.length)throw new j("Server returned unexpected number of pipeline results");for(let s=0;s<e.length;++s){const a=t.results[s],n=e[s];if(a.type==="ok"){if(a.response.type!==n.request.type)throw new j("Received unexpected type of response");n.responseCallback(a.response)}else if(a.type==="error")n.errorCallback(As(a.error));else throw a.type==="none"?new j("Received unrecognized type of StreamResult"):J(a,"Received impossible type of StreamResult")}}async function ad(e,t){var s;if(t==="json"){const a=await e.json();return En(a,Cc)}if(t==="protobuf"){const a=await e.arrayBuffer();return qa(new Uint8Array(a),Mc)}throw await((s=e.body)==null?void 0:s.cancel()),J(t,"Impossible encoding")}async function nd(e){var a;const t=e.headers.get("content-type")??"text/plain";let s=`Server returned HTTP status ${e.status}`;if(t==="application/json"){const n=await e.json();return"message"in n?As(n):new ya(s,e.status)}if(t==="text/plain"){const n=(await e.text()).trim();return n!==""&&(s+=`: ${n}`),new ya(s,e.status)}return await((a=e.body)==null?void 0:a.cancel()),new ya(s,e.status)}const ld=[{versionPath:"v3-protobuf",pipelinePath:"v3-protobuf/pipeline",cursorPath:"v3-protobuf/cursor",version:3,encoding:"protobuf"}],gn={versionPath:"v2",pipelinePath:"v2/pipeline",cursorPath:void 0,version:2,encoding:"json"};var ys,sa,ks,aa,dt,Jt,_s,$a,Dl;let id=(Dl=class extends ei{constructor(s,a,n,l,i=2){super();k(this,_s);k(this,ys);k(this,sa);k(this,ks);k(this,aa);k(this,dt);k(this,Jt);q(this,"_endpointPromise");q(this,"_endpoint");m(this,ys,s),m(this,sa,a),m(this,ks,n??Ma.fetch),m(this,aa,l),m(this,dt,void 0),m(this,Jt,new Set),i==3?(this._endpointPromise=rd(c(this,ks),c(this,ys)),this._endpointPromise.then(r=>this._endpoint=r,r=>S(this,_s,$a).call(this,r))):(this._endpointPromise=Promise.resolve(gn),this._endpointPromise.then(r=>this._endpoint=r,r=>S(this,_s,$a).call(this,r)))}async getVersion(){return this._endpoint!==void 0?this._endpoint.version:(await this._endpointPromise).version}_ensureVersion(s,a){if(!(s<=gn.version)){if(this._endpoint===void 0)throw new Rs(`${a} is supported only on protocol version ${s} and higher, but the version supported by the HTTP server is not yet known. Use Client.getVersion() to wait until the version is available.`);if(this._endpoint.version<s)throw new Rs(`${a} is supported only on protocol version ${s} and higher, but the HTTP server only supports version ${this._endpoint.version}.`)}}openStream(){if(c(this,dt)!==void 0)throw new Ae("Client is closed",c(this,dt));const s=new td(this,c(this,ys),c(this,sa),c(this,ks),c(this,aa));return c(this,Jt).add(s),s}_streamClosed(s){c(this,Jt).delete(s)}close(){S(this,_s,$a).call(this,new Y("Client was manually closed"))}get closed(){return c(this,dt)!==void 0}},ys=new WeakMap,sa=new WeakMap,ks=new WeakMap,aa=new WeakMap,dt=new WeakMap,Jt=new WeakMap,_s=new WeakSet,$a=function(s){if(c(this,dt)===void 0){m(this,dt,s);for(const a of Array.from(c(this,Jt)))a._setClosed(new Ae("Client was closed",s))}},Dl);async function rd(e,t){const s=e;for(const a of ld){const n=new URL(a.versionPath,t),l=new Ma.Request(n.toString(),{method:"GET"}),i=await s(l);if(await i.arrayBuffer(),i.ok)return a}return gn}function Bi(e,t,s=2){if(typeof as>"u")throw new si("WebSockets are not supported in this environment");var a=void 0;s==3?a=Array.from(Ii.keys()):a=Array.from(Sc.keys());const n=new as(e,a);return new $c(n,t)}function dl(e,t,s,a,n=2){return new id(e instanceof URL?e:new URL(e),t,s,a,n)}var Ss,pt,de;class Fi{constructor(t,s){k(this,Ss);k(this,pt);k(this,de);m(this,Ss,t),m(this,pt,s),m(this,de,void 0)}execute(t){return this.batch([t]).then(s=>s[0])}async batch(t){const s=this._getStream();if(s.closed)throw new F("Cannot execute statements because the transaction is closed","TRANSACTION_CLOSED");try{const a=t.map(Zt);let n;if(c(this,de)===void 0){this._getSqlCache().apply(a);const i=s.batch(c(this,pt)>=3),r=i.step(),d=r.run(tn(c(this,Ss)));let o=r;n=a.map(u=>{const f=i.step().condition(we.ok(o));c(this,pt)>=3&&f.condition(we.not(we.isAutocommit(i)));const b=f.query(u);return b.catch(()=>{}),o=f,b}),m(this,de,i.execute().then(()=>d).then(()=>{}));try{await c(this,de)}catch(u){throw this.close(),u}}else{c(this,pt)<3&&await c(this,de),this._getSqlCache().apply(a);const i=s.batch(c(this,pt)>=3);let r;n=a.map(d=>{const o=i.step();r!==void 0&&o.condition(we.ok(r)),c(this,pt)>=3&&o.condition(we.not(we.isAutocommit(i)));const u=o.query(d);return u.catch(()=>{}),r=o,u}),await i.execute()}const l=[];for(let i=0;i<n.length;i++)try{const r=await n[i];if(r===void 0)throw new ls("Statement in a transaction was not executed, probably because the transaction has been rolled back",i,"TRANSACTION_CLOSED");l.push(Fa(r))}catch(r){if(r instanceof ls)throw r;const d=z(r);throw d instanceof F?new ls(d.message,i,d.code,d.extendedCode,d.rawCode,d.cause instanceof Error?d.cause:void 0):d}return l}catch(a){throw z(a)}}async executeMultiple(t){const s=this._getStream();if(s.closed)throw new F("Cannot execute statements because the transaction is closed","TRANSACTION_CLOSED");try{if(c(this,de)===void 0){m(this,de,s.run(tn(c(this,Ss))).then(()=>{}));try{await c(this,de)}catch(a){throw this.close(),a}}else await c(this,de);await s.sequence(t)}catch(a){throw z(a)}}async rollback(){try{const t=this._getStream();if(t.closed||c(this,de)===void 0)return;const s=t.run("ROLLBACK").catch(a=>{throw z(a)});t.closeGracefully(),await s}catch(t){throw z(t)}finally{this.close()}}async commit(){try{const t=this._getStream();if(t.closed)throw new F("Cannot commit the transaction because it is already closed","TRANSACTION_CLOSED");if(c(this,de)!==void 0)await c(this,de);else return;const s=t.run("COMMIT").catch(a=>{throw z(a)});t.closeGracefully(),await s}catch(t){throw z(t)}finally{this.close()}}}Ss=new WeakMap,pt=new WeakMap,de=new WeakMap;async function Da(e,t,s,a,n=!1){n&&s.step().run("PRAGMA foreign_keys=off");const l=s.step(),i=l.run(tn(e));let r=l;const d=a.map(h=>{const v=s.step().condition(we.ok(r));t>=3&&v.condition(we.not(we.isAutocommit(s)));const x=v.query(h);return r=v,x}),o=s.step().condition(we.ok(r));t>=3&&o.condition(we.not(we.isAutocommit(s)));const u=o.run("COMMIT");s.step().condition(we.not(we.ok(o))).run("ROLLBACK").catch(h=>{}),n&&s.step().run("PRAGMA foreign_keys=on"),await s.execute();const b=[];await i;for(let h=0;h<d.length;h++)try{const v=await d[h];if(v===void 0)throw new ls("Statement in a batch was not executed, probably because the transaction has been rolled back",h,"TRANSACTION_CLOSED");b.push(Fa(v))}catch(v){if(v instanceof ls)throw v;const x=z(v);throw x instanceof F?new ls(x.message,h,x.code,x.extendedCode,x.rawCode,x.cause instanceof Error?x.cause:void 0):x}return await u,b}function Zt(e){let t,s;Array.isArray(e)?[t,s]=e:typeof e=="string"?t=e:(t=e.sql,s=e.args);const a=new pi(t);if(s)if(Array.isArray(s))a.bindIndexes(s);else for(const[n,l]of Object.entries(s))a.bindName(n,l);return a}function Fa(e){const t=e.columnNames.map(i=>i??""),s=e.columnDecltypes.map(i=>i??""),a=e.rows,n=e.affectedRowCount,l=e.lastInsertRowid!==void 0?e.lastInsertRowid:void 0;return new go(t,s,a,n,l)}function z(e){if(e instanceof Y){const t=Ui(e);return new F(e.message,t,void 0,void 0,e)}return e}function Ui(e){return e instanceof ti&&e.code!==void 0?e.code:e instanceof j?"HRANA_PROTO_ERROR":e instanceof Ae?e.cause instanceof Y?Ui(e.cause):"HRANA_CLOSED_ERROR":e instanceof sn?"HRANA_WEBSOCKET_ERROR":e instanceof ya?"SERVER_ERROR":e instanceof Rs?"PROTOCOL_VERSION_ERROR":e instanceof At?"INTERNAL_ERROR":"UNKNOWN"}var na,Ye;class Mn{constructor(t,s){k(this,na);k(this,Ye);q(this,"capacity");m(this,na,t),m(this,Ye,new od),this.capacity=s}apply(t){if(this.capacity<=0)return;const s=new Set;for(const a of t){if(typeof a.sql!="string")continue;const n=a.sql;if(n.length>=5e3)continue;let l=c(this,Ye).get(n);if(l===void 0){for(;c(this,Ye).size+1>this.capacity;){const[i,r]=c(this,Ye).peekLru();if(s.has(r))break;r.close(),c(this,Ye).delete(i)}c(this,Ye).size+1<=this.capacity&&(l=c(this,na).storeSql(n),c(this,Ye).set(n,l))}l!==void 0&&(a.sql=l,s.add(l))}}}na=new WeakMap,Ye=new WeakMap;var Pe;class od{constructor(){k(this,Pe);m(this,Pe,new Map)}get(t){const s=c(this,Pe).get(t);return s!==void 0&&(c(this,Pe).delete(t),c(this,Pe).set(t,s)),s}set(t,s){c(this,Pe).set(t,s)}peekLru(){for(const t of c(this,Pe).entries())return t}delete(t){c(this,Pe).delete(t)}get size(){return c(this,Pe).size}}Pe=new WeakMap;function cd(e){var t=0,s=[];function a(){t--,t<e&&n()}function n(){var d=s.shift();r.queue=s.length,d&&i(d.fn).then(d.resolve).catch(d.reject)}function l(d){return new Promise(function(o,u){s.push({fn:d,resolve:o,reject:u}),r.queue=s.length})}function i(d){t++;try{return Promise.resolve(d()).then(function(o){return a(),o},function(o){throw a(),o})}catch(o){return a(),Promise.reject(o)}}var r=function(d){return t>=e?l(d):i(d)};return r}function dd(e,t){var s=!1,a=this;return Promise.all(e.map(function(){var n=arguments;return a(function(){if(!s)return t.apply(void 0,n).catch(function(l){throw s=!0,l})})}))}function pl(e){return e.queue=0,e.map=dd,e}var pd=function(e){return pl(e?cd(e):function(t){return t()})};const Vi=Ec(pd);function ud(e){if(e.scheme!=="wss"&&e.scheme!=="ws")throw new F(`The WebSocket client supports only "libsql:", "wss:" and "ws:" URLs, got ${JSON.stringify(e.scheme+":")}. For more information, please read ${Ks}`,"URL_SCHEME_NOT_SUPPORTED");if(e.encryptionKey!==void 0)throw new F("Encryption key is not supported by the remote client.","ENCRYPTION_KEY_NOT_SUPPORTED");if(e.scheme==="ws"&&e.tls)throw new F('A "ws:" URL cannot opt into TLS by using ?tls=1',"URL_INVALID");if(e.scheme==="wss"&&!e.tls)throw new F('A "wss:" URL cannot opt out of TLS by using ?tls=0',"URL_INVALID");const t=Xa(e.scheme,e.authority,e.path);let s;try{s=Bi(t,e.authToken)}catch(a){if(a instanceof si){const n=e.scheme==="wss"?"https":"http",l=Xa(n,e.authority,e.path);throw new F(`This environment does not support WebSockets, please switch to the HTTP client by using a "${n}:" URL (${JSON.stringify(l)}). For more information, please read ${Ks}`,"WEBSOCKETS_NOT_SUPPORTED")}throw z(a)}return new fd(s,t,e.authToken,e.intMode,e.concurrency)}const xd=60*1e3,ul=100;var la,ia,ra,ee,oe,yn,oa,Ie,ss,Vs;class fd{constructor(t,s,a,n,l){k(this,Ie);k(this,la);k(this,ia);k(this,ra);k(this,ee);k(this,oe);q(this,"closed");q(this,"protocol");k(this,yn);k(this,oa);m(this,la,s),m(this,ia,a),m(this,ra,n),m(this,ee,S(this,Ie,Vs).call(this,t)),m(this,oe,void 0),this.closed=!1,this.protocol="ws",m(this,oa,Vi(l))}async limit(t){return c(this,oa).call(this,t)}async execute(t,s){let a;return typeof t=="string"?a={sql:t,args:s||[]}:a=t,this.limit(async()=>{const n=await S(this,Ie,ss).call(this);try{const l=Zt(a);n.conn.sqlCache.apply([l]);const i=n.stream.query(l);n.stream.closeGracefully();const r=await i;return Fa(r)}catch(l){throw z(l)}finally{this._closeStream(n)}})}async batch(t,s="deferred"){return this.limit(async()=>{const a=await S(this,Ie,ss).call(this);try{const l=t.map(u=>Array.isArray(u)?{sql:u[0],args:u[1]||[]}:u).map(Zt),i=await a.conn.client.getVersion();a.conn.sqlCache.apply(l);const r=a.stream.batch(i>=3);return await Da(s,i,r,l)}catch(n){throw z(n)}finally{this._closeStream(a)}})}async migrate(t){return this.limit(async()=>{const s=await S(this,Ie,ss).call(this);try{const a=t.map(Zt),n=await s.conn.client.getVersion(),l=s.stream.batch(n>=3);return await Da("deferred",n,l,a,!0)}catch(a){throw z(a)}finally{this._closeStream(s)}})}async transaction(t="write"){return this.limit(async()=>{const s=await S(this,Ie,ss).call(this);try{const a=await s.conn.client.getVersion();return new bd(this,s,t,a)}catch(a){throw this._closeStream(s),z(a)}})}async executeMultiple(t){return this.limit(async()=>{const s=await S(this,Ie,ss).call(this);try{const a=s.stream.sequence(t);s.stream.closeGracefully(),await a}catch(a){throw z(a)}finally{this._closeStream(s)}})}sync(){throw new F("sync not supported in ws mode","SYNC_NOT_SUPPORTED")}async reconnect(){try{for(const a of Array.from(c(this,ee).streamStates))try{a.stream.close()}catch{}c(this,ee).client.close()}catch{}if(c(this,oe)){try{c(this,oe).client.close()}catch{}m(this,oe,void 0)}const t=S(this,Ie,Vs).call(this),s=await t.client.getVersion();t.useSqlCache=s>=2,t.useSqlCache&&(t.sqlCache.capacity=ul),m(this,ee,t),this.closed=!1}_closeStream(t){t.stream.close();const s=t.conn;s.streamStates.delete(t),s.streamStates.size===0&&s!==c(this,ee)&&s.client.close()}close(){if(c(this,ee).client.close(),this.closed=!0,c(this,oe)){try{c(this,oe).client.close()}catch{}m(this,oe,void 0)}this.closed=!0}}la=new WeakMap,ia=new WeakMap,ra=new WeakMap,ee=new WeakMap,oe=new WeakMap,yn=new WeakMap,oa=new WeakMap,Ie=new WeakSet,ss=async function(){if(this.closed)throw new F("The client is closed","CLIENT_CLOSED");if(new Date().valueOf()-c(this,ee).openTime.valueOf()>xd&&c(this,oe)===void 0){const n=S(this,Ie,Vs).call(this);m(this,oe,n),n.client.getVersion().then(l=>{c(this,ee)!==n&&c(this,ee).streamStates.size===0&&c(this,ee).client.close(),m(this,ee,n),m(this,oe,void 0)},l=>{m(this,oe,void 0)})}if(c(this,ee).client.closed)try{c(this,oe)!==void 0?m(this,ee,c(this,oe)):m(this,ee,S(this,Ie,Vs).call(this))}catch(n){throw z(n)}const a=c(this,ee);try{a.useSqlCache===void 0&&(a.useSqlCache=await a.client.getVersion()>=2,a.useSqlCache&&(a.sqlCache.capacity=ul));const n=a.client.openStream();n.intMode=c(this,ra);const l={conn:a,stream:n};return a.streamStates.add(l),l}catch(n){throw z(n)}},Vs=function(t){try{return t??(t=Bi(c(this,la),c(this,ia))),{client:t,useSqlCache:void 0,sqlCache:new Mn(t,0),openTime:new Date,streamStates:new Set}}catch(s){throw z(s)}};var ca,Et;class bd extends Fi{constructor(s,a,n,l){super(n,l);k(this,ca);k(this,Et);m(this,ca,s),m(this,Et,a)}_getStream(){return c(this,Et).stream}_getSqlCache(){return c(this,Et).conn.sqlCache}close(){c(this,ca)._closeStream(c(this,Et))}get closed(){return c(this,Et).stream.closed}}ca=new WeakMap,Et=new WeakMap;function md(e){if(e.scheme!=="https"&&e.scheme!=="http")throw new F(`The HTTP client supports only "libsql:", "https:" and "http:" URLs, got ${JSON.stringify(e.scheme+":")}. For more information, please read ${Ks}`,"URL_SCHEME_NOT_SUPPORTED");if(e.encryptionKey!==void 0)throw new F("Encryption key is not supported by the remote client.","ENCRYPTION_KEY_NOT_SUPPORTED");if(e.scheme==="http"&&e.tls)throw new F('A "http:" URL cannot opt into TLS by using ?tls=1',"URL_INVALID");if(e.scheme==="https"&&!e.tls)throw new F('A "https:" URL cannot opt out of TLS by using ?tls=0',"URL_INVALID");const t=Xa(e.scheme,e.authority,e.path);return new hd(t,e.authToken,e.intMode,e.fetch,e.concurrency,e.remoteEncryptionKey)}const Hi=30;var te,$s,Es,Is,da,Cs,pa,ua;class hd{constructor(t,s,a,n,l,i){k(this,te);q(this,"protocol");k(this,$s);k(this,Es);k(this,Is);k(this,da);k(this,Cs);k(this,pa);k(this,ua);m(this,$s,t),m(this,Cs,s),m(this,Es,a),m(this,Is,n),m(this,da,l),m(this,pa,i),m(this,te,dl(c(this,$s),c(this,Cs),c(this,Is),i)),c(this,te).intMode=c(this,Es),this.protocol="http",m(this,ua,Vi(c(this,da)))}async limit(t){return c(this,ua).call(this,t)}async execute(t,s){let a;return typeof t=="string"?a={sql:t,args:s||[]}:a=t,this.limit(async()=>{try{const n=Zt(a);let l;const i=c(this,te).openStream();try{l=i.query(n)}finally{i.closeGracefully()}const r=await l;return Fa(r)}catch(n){throw z(n)}})}async batch(t,s="deferred"){return this.limit(async()=>{try{const n=t.map(o=>Array.isArray(o)?{sql:o[0],args:o[1]||[]}:o).map(Zt),l=await c(this,te).getVersion();let i;const r=c(this,te).openStream();try{new Mn(r,Hi).apply(n);const u=r.batch(!1);i=Da(s,l,u,n)}finally{r.closeGracefully()}return await i}catch(a){throw z(a)}})}async migrate(t){return this.limit(async()=>{try{const s=t.map(Zt),a=await c(this,te).getVersion();let n;const l=c(this,te).openStream();try{const r=l.batch(!1);n=Da("deferred",a,r,s,!0)}finally{l.closeGracefully()}return await n}catch(s){throw z(s)}})}async transaction(t="write"){return this.limit(async()=>{try{const s=await c(this,te).getVersion();return new gd(c(this,te).openStream(),t,s)}catch(s){throw z(s)}})}async executeMultiple(t){return this.limit(async()=>{try{let s;const a=c(this,te).openStream();try{s=a.sequence(t)}finally{a.closeGracefully()}await s}catch(s){throw z(s)}})}sync(){throw new F("sync not supported in http mode","SYNC_NOT_SUPPORTED")}close(){c(this,te).close()}async reconnect(){try{this.closed||c(this,te).close()}finally{m(this,te,dl(c(this,$s),c(this,Cs),c(this,Is),c(this,pa))),c(this,te).intMode=c(this,Es)}}get closed(){return c(this,te).closed}}te=new WeakMap,$s=new WeakMap,Es=new WeakMap,Is=new WeakMap,da=new WeakMap,Cs=new WeakMap,pa=new WeakMap,ua=new WeakMap;var Kt,xa;class gd extends Fi{constructor(s,a,n){super(a,n);k(this,Kt);k(this,xa);m(this,Kt,s),m(this,xa,new Mn(s,Hi))}_getStream(){return c(this,Kt)}_getSqlCache(){return c(this,xa)}close(){c(this,Kt).close()}get closed(){return c(this,Kt).closed}}Kt=new WeakMap,xa=new WeakMap;function Gi(e){return vd(yo(e))}function vd(e){if(e.scheme==="ws"||e.scheme==="wss")return ud(e);if(e.scheme==="http"||e.scheme==="https")return md(e);throw new F(`The client that uses Web standard APIs supports only "libsql:", "wss:", "ws:", "https:" and "http:" URLs, got ${JSON.stringify(e.scheme+":")}. For more information, please read ${Ks}`,"URL_SCHEME_NOT_SUPPORTED")}const wd={url:"libsql://retailer-os-digitalhues.aws-ap-south-1.turso.io",authToken:"eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAxODY2NzMsImlkIjoiNDcwMDliODAtYmJlYS00YzQ3LTk1MzQtY2NlYjg4OWUzYjFjIiwicmlkIjoiNTk1ODMwNWEtMjlkNy00OGU5LWJkNTctN2FiZWVjNzVjMWYwIn0.381aJkYkBtcCsSDyQkFNLZud9lOPi9TuT3uRZgLYS9BqrjLFb0Zc7P1qRWN0k16XkHQ7raDwhCUE9H1G8Q80BA"},yd={url:"libsql://retailer-data-digitalhues.aws-ap-south-1.turso.io",authToken:"eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NzAyODMwNTgsImlkIjoiZTVmNzQ5MjMtMDFiMi00YzkxLTlmMjEtZTJhZDIxMzBmMmZmIiwicmlkIjoiZjQzNTc5NTMtN2E2OS00M2UzLWE3MWUtNDcyYzk1MWM1NTRiIn0.8dOIX1XeNnJswuRGhacgPypg_h_9_-bRAwBxtKhBX7rJ4bQuEtSz9Z6igZsvGrWxDlsYlHMo4V3KKIuIZRSuBA"},Nt=Gi(wd),xl=Gi(yd);async function g(e,t=[]){try{return(await Nt.execute({sql:e,args:t})).rows}catch(s){throw console.error("DB Query Error:",s.message,"SQL:",e,"Params:",t),s}}async function kd(e){try{return await Nt.batch(e)}catch(t){throw console.error("DB Transaction Error:",t),t}}function I(){return localStorage.getItem("retaileros_retailer_id")}const C={clients:{getAll:()=>{const e=I();return e?g("SELECT * FROM customers WHERE retailer_id = ?",[e]):g("SELECT * FROM customers")},add:e=>{const t=I();return g("INSERT INTO customers (id, name, phone, email, joined_at, dob, location, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",[e.id,e.name,e.phone||"",e.email||"",new Date().toISOString(),e.dob||null,e.location||"",t])},getById:e=>{const t=I();return t?g("SELECT * FROM customers WHERE id = ? AND retailer_id = ?",[e,t]):g("SELECT * FROM customers WHERE id = ?",[e])}},companies:{getAll:()=>{const e=I();return e?g("SELECT * FROM companies WHERE retailer_id = ?",[e]):g("SELECT * FROM companies")},add:e=>{const t=I();return g("INSERT INTO companies (id, name, gst_number, customer_id, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?)",[e.id,e.name,e.gst_number,e.customer_id,new Date().toISOString(),t])},getByCustomerId:e=>{const t=I();return t?g("SELECT * FROM companies WHERE customer_id = ? AND retailer_id = ?",[e,t]):g("SELECT * FROM companies WHERE customer_id = ?",[e])},getById:e=>{const t=I();return t?g("SELECT * FROM companies WHERE id = ? AND retailer_id = ?",[e,t]):g("SELECT * FROM companies WHERE id = ?",[e])}},sales:{getAll:()=>{const e=I();return e?g("SELECT * FROM sales WHERE retailer_id = ? ORDER BY date DESC",[e]):g("SELECT * FROM sales ORDER BY date DESC")},getById:e=>{const t=I();return t?g("SELECT * FROM sales WHERE id = ? AND retailer_id = ?",[e,t]):g("SELECT * FROM sales WHERE id = ?",[e])},getDrafts:()=>{const e=I();return e?g("SELECT * FROM sales WHERE status = 'draft' AND retailer_id = ? ORDER BY date DESC",[e]):g("SELECT * FROM sales WHERE status = 'draft' ORDER BY date DESC")},add:e=>{const t=I();return g(`INSERT INTO sales (id, customer_id, customer_name, date, total_amount, status, payment_mode, payment_reference, gst_required, company_id, installation_required, installation_date, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.customer_id,e.customer_name,e.date,e.total_amount,e.status||"completed",e.payment_mode||null,e.payment_reference||null,e.gst_required||0,e.company_id||null,e.installation_required||0,e.installation_date||null,t])},update:e=>{const t=I(),s=t?"WHERE id = ? AND retailer_id = ?":"WHERE id = ?",a=[e.customer_id,e.customer_name,e.total_amount,e.status,e.payment_mode||null,e.payment_reference||null,e.gst_required||0,e.company_id||null,e.installation_required||0,e.installation_date||null,e.id];return t&&a.push(t),g(`UPDATE sales SET customer_id = ?, customer_name = ?, total_amount = ?, status = ?,
                 payment_mode = ?, payment_reference = ?, gst_required = ?, company_id = ?,
                 installation_required = ?, installation_date = ? ${s}`,a)},delete:e=>{const t=I();return t?g("DELETE FROM sales WHERE id = ? AND retailer_id = ?",[e,t]):g("DELETE FROM sales WHERE id = ?",[e])},addItem:e=>g(`INSERT INTO sale_items (id, sale_id, product_id, product_name, category, quantity, price, discount_type, discount_value, discount_amount, scheme_id, final_price, imei, serial_number, mac_id, manufacturing_date, installation_date, extra_fields)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.sale_id,e.product_id,e.product_name,e.category,e.quantity,e.price,e.discount_type||null,e.discount_value||null,e.discount_amount||null,e.scheme_id||null,e.final_price||e.price,e.imei||null,e.serial_number||null,e.mac_id||null,e.manufacturing_date||null,e.installation_date||null,e.extra_fields||null]),deleteItems:e=>g("DELETE FROM sale_items WHERE sale_id = ?",[e]),getItems:e=>g("SELECT * FROM sale_items WHERE sale_id = ?",[e])},inventory:{getProducts:()=>g("SELECT * FROM products")},schemes:{getAll:()=>g("SELECT * FROM schemes WHERE status = 'active' ORDER BY brand, name"),getById:e=>g("SELECT * FROM schemes WHERE id = ?",[e]),getByBrand:e=>g("SELECT * FROM schemes WHERE brand = ? AND status = 'active'",[e]),getByCategory:e=>g("SELECT * FROM schemes WHERE category = ? AND status = 'active'",[e]),getApplicable:(e,t,s)=>g(`SELECT * FROM schemes WHERE status = 'active'
             AND (brand = ? OR brand IS NULL)
             AND (category = ? OR category IS NULL)
             AND (min_price IS NULL OR min_price <= ?)
             AND (max_price IS NULL OR max_price >= ?)
             AND date(start_date) <= date('now') AND date(end_date) >= date('now')`,[e,t,s,s])},groups:{getAll:()=>{const e=I();return e?g("SELECT * FROM groups WHERE retailer_id = ? ORDER BY created_at DESC",[e]):g("SELECT * FROM groups ORDER BY created_at DESC")},add:e=>{const t=I();return g(`INSERT INTO groups (id, name, description, is_company, gst_number, contact_person, created_at, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.name,e.description||null,e.is_company||0,e.gst_number||null,e.contact_person||null,e.created_at,t])},getById:e=>{const t=I();return t?g("SELECT * FROM groups WHERE id = ? AND retailer_id = ?",[e,t]):g("SELECT * FROM groups WHERE id = ?",[e])},delete:e=>{const t=I();return t?g("DELETE FROM groups WHERE id = ? AND retailer_id = ?",[e,t]):g("DELETE FROM groups WHERE id = ?",[e])},getMembers:e=>{const t=I();return t?g("SELECT * FROM group_members WHERE group_id = ? AND retailer_id = ?",[e,t]):g("SELECT * FROM group_members WHERE group_id = ?",[e])},getAllMembers:()=>{const e=I();return e?g("SELECT * FROM group_members WHERE retailer_id = ?",[e]):g("SELECT * FROM group_members")},addMember:e=>{const t=I();return g("INSERT INTO group_members (id, group_id, customer_id, added_at, retailer_id) VALUES (?, ?, ?, ?, ?)",[e.id,e.group_id,e.customer_id,e.added_at,t])},removeMember:(e,t)=>{const s=I();return s?g("DELETE FROM group_members WHERE group_id = ? AND customer_id = ? AND retailer_id = ?",[e,t,s]):g("DELETE FROM group_members WHERE group_id = ? AND customer_id = ?",[e,t])},deleteMembers:e=>{const t=I();return t?g("DELETE FROM group_members WHERE group_id = ? AND retailer_id = ?",[e,t]):g("DELETE FROM group_members WHERE group_id = ?",[e])}},automations:{getAll:()=>{const e=I();return e?g("SELECT * FROM automations WHERE retailer_id = ? ORDER BY created_at DESC",[e]):g("SELECT * FROM automations ORDER BY created_at DESC")},getById:e=>{const t=I();return t?g("SELECT * FROM automations WHERE id = ? AND retailer_id = ?",[e,t]):g("SELECT * FROM automations WHERE id = ?",[e])},getByCustomer:e=>{const t=I();return t?g("SELECT * FROM automations WHERE customer_id = ? AND retailer_id = ? ORDER BY created_at DESC",[e,t]):g("SELECT * FROM automations WHERE customer_id = ? ORDER BY created_at DESC",[e])},getBySale:e=>{const t=I();return t?g("SELECT * FROM automations WHERE sale_id = ? AND retailer_id = ?",[e,t]):g("SELECT * FROM automations WHERE sale_id = ?",[e])},add:e=>{const t=I();return g(`INSERT INTO automations (id, name, customer_id, customer_name, sale_id, status, created_at, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.name,e.customer_id,e.customer_name,e.sale_id||null,e.status||"active",e.created_at||new Date().toISOString(),t])},update:(e,t)=>{const s=I();return s?g("UPDATE automations SET status = ?, completed_at = ? WHERE id = ? AND retailer_id = ?",[t.status,t.completed_at||null,e,s]):g("UPDATE automations SET status = ?, completed_at = ? WHERE id = ?",[t.status,t.completed_at||null,e])},delete:e=>{const t=I();return t?g("DELETE FROM automations WHERE id = ? AND retailer_id = ?",[e,t]):g("DELETE FROM automations WHERE id = ?",[e])},getMessages:e=>{const t=I();return t?g("SELECT * FROM automation_messages WHERE automation_id = ? AND retailer_id = ? ORDER BY day_offset",[e,t]):g("SELECT * FROM automation_messages WHERE automation_id = ? ORDER BY day_offset",[e])},getAllMessages:()=>{const e=I();return e?g("SELECT * FROM automation_messages WHERE retailer_id = ? ORDER BY scheduled_date",[e]):g("SELECT * FROM automation_messages ORDER BY scheduled_date")},addMessage:e=>{const t=I();return g(`INSERT INTO automation_messages (id, automation_id, message_type, title, content, day_offset, scheduled_date, status, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.automation_id,e.message_type,e.title,e.content,e.day_offset,e.scheduled_date,e.status||"pending",t])},updateMessageStatus:(e,t,s)=>{const a=I();return a?g("UPDATE automation_messages SET status = ?, sent_at = ? WHERE id = ? AND retailer_id = ?",[t,s,e,a]):g("UPDATE automation_messages SET status = ?, sent_at = ? WHERE id = ?",[t,s,e])},deleteMessages:e=>{const t=I();return t?g("DELETE FROM automation_messages WHERE automation_id = ? AND retailer_id = ?",[e,t]):g("DELETE FROM automation_messages WHERE automation_id = ?",[e])}},communications:{getAll:()=>{const e=I();return e?g("SELECT * FROM communication_log WHERE retailer_id = ? ORDER BY sent_at DESC",[e]):g("SELECT * FROM communication_log ORDER BY sent_at DESC")},getByCustomer:e=>{const t=I();return t?g("SELECT * FROM communication_log WHERE customer_id = ? AND retailer_id = ? ORDER BY sent_at DESC",[e,t]):g("SELECT * FROM communication_log WHERE customer_id = ? ORDER BY sent_at DESC",[e])},add:e=>{const t=I();return g(`INSERT INTO communication_log (id, customer_id, type, direction, content, sent_at, automation_id, sale_id, status, retailer_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,[e.id,e.customer_id,e.type,e.direction||"outgoing",e.content,e.sent_at||new Date().toISOString(),e.automation_id||null,e.sale_id||null,e.status||"sent",t])},updateStatus:(e,t)=>{const s=I();return s?g("UPDATE communication_log SET status = ? WHERE id = ? AND retailer_id = ?",[t,e,s]):g("UPDATE communication_log SET status = ? WHERE id = ?",[t,e])}},inquiries:{getAll:()=>{const e=I();return e?g("SELECT * FROM inquiries WHERE retailer_id = ? ORDER BY created_at DESC",[e]):g("SELECT * FROM inquiries ORDER BY created_at DESC")},getById:e=>{const t=I();return t?g("SELECT * FROM inquiries WHERE id = ? AND retailer_id = ?",[e,t]):g("SELECT * FROM inquiries WHERE id = ?",[e])},add:e=>{const t=I();return g("INSERT INTO inquiries (id, customer_name, product_name, request, status, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?)",[e.id,e.customer_name,e.product_name,e.request,e.status||"PENDING",e.created_at||new Date().toISOString(),t])},updateStatus:(e,t)=>{const s=I();return s?g("UPDATE inquiries SET status = ? WHERE id = ? AND retailer_id = ?",[t,e,s]):g("UPDATE inquiries SET status = ? WHERE id = ?",[t,e])}},repairs:{getAll:()=>{const e=I();return e?g("SELECT * FROM repairs WHERE retailer_id = ? ORDER BY created_at DESC",[e]):g("SELECT * FROM repairs ORDER BY created_at DESC")},getById:e=>{const t=I();return t?g("SELECT * FROM repairs WHERE id = ? AND retailer_id = ?",[e,t]):g("SELECT * FROM repairs WHERE id = ?",[e])},add:e=>{const t=I();return g("INSERT INTO repairs (id, customer_name, phone, device, issue, status, job_sheet_no, estimated_cost, assigned_to, created_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[e.id,e.customer_name,e.phone,e.device,e.issue,e.status||"COLLECTED",e.job_sheet_no,e.estimated_cost||"0",e.assigned_to||"Unassigned",e.created_at||new Date().toISOString(),t])},updateStatus:(e,t)=>{const s=I();return s?g("UPDATE repairs SET status = ? WHERE id = ? AND retailer_id = ?",[t,e,s]):g("UPDATE repairs SET status = ? WHERE id = ?",[t,e])}},inventoryLogs:{getAll:()=>{const e=I();return e?g("SELECT * FROM inventory_logs WHERE retailer_id = ? ORDER BY date DESC",[e]):g("SELECT * FROM inventory_logs ORDER BY date DESC")},add:e=>{const t=I();return g("INSERT INTO inventory_logs (id, product_id, type, quantity, reason, date, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?)",[e.id,e.product_id,e.type,e.quantity,e.reason,e.date||new Date().toISOString(),t])}},settings:{getAll:()=>{const e=I();return e?g("SELECT category, settings FROM retailer_settings WHERE retailer_id = ?",[e]):Promise.resolve([])},get:e=>{const t=I();return t?g("SELECT settings FROM retailer_settings WHERE retailer_id = ? AND category = ?",[t,e]):Promise.resolve([])},save:(e,t)=>{const s=I();if(!s)return Promise.resolve();const a=`setting_${s}_${e}`;return g("INSERT OR REPLACE INTO retailer_settings (id, retailer_id, category, settings, updated_at) VALUES (?, ?, ?, ?, ?)",[a,s,e,JSON.stringify(t),new Date().toISOString()])}},teamMembers:{getAll:()=>{const e=I();return e?g("SELECT * FROM team_members WHERE retailer_id = ? ORDER BY created_at",[e]):g("SELECT * FROM team_members ORDER BY created_at")},add:e=>{const t=I(),s=new Date().toISOString();return g("INSERT INTO team_members (id, retailer_id, name, role, phone, email, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",[e.id,t,e.name,e.role,e.phone||null,e.email||null,e.status||"invited",s,s])},update:(e,t)=>{const s=I();return g("UPDATE team_members SET name = ?, role = ?, phone = ?, status = ?, updated_at = ? WHERE id = ? AND retailer_id = ?",[t.name,t.role,t.phone,t.status,new Date().toISOString(),e,s])},delete:e=>{const t=I();return t?g("DELETE FROM team_members WHERE id = ? AND retailer_id = ?",[e,t]):g("DELETE FROM team_members WHERE id = ?",[e])}},teamRoles:{getAll:()=>{const e=I();return e?g("SELECT * FROM team_roles WHERE retailer_id = ? ORDER BY created_at",[e]):g("SELECT * FROM team_roles ORDER BY created_at")},add:e=>{const t=I(),s=new Date().toISOString();return g("INSERT INTO team_roles (id, retailer_id, name, permissions, description, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)",[e.id,t,e.name,JSON.stringify(e.permissions),e.description||null,s,s])},update:(e,t)=>{const s=I();return g("UPDATE team_roles SET name = ?, permissions = ?, description = ?, updated_at = ? WHERE id = ? AND retailer_id = ?",[t.name,JSON.stringify(t.permissions),t.description,new Date().toISOString(),e,s])},delete:e=>{const t=I();return t?g("DELETE FROM team_roles WHERE id = ? AND retailer_id = ?",[e,t]):g("DELETE FROM team_roles WHERE id = ?",[e])}},plugins:{getAll:()=>{const e=I();return e?g("SELECT * FROM retailer_plugins WHERE retailer_id = ?",[e]):Promise.resolve([])},upsert:(e,t,s)=>{const a=I();if(!a)return Promise.resolve();const n=`plugin_${a}_${e}`,l=new Date().toISOString(),i=t==="connected"?l:null;return g("INSERT OR REPLACE INTO retailer_plugins (id, retailer_id, plugin_key, status, config, connected_at, updated_at) VALUES (?, ?, ?, ?, ?, COALESCE((SELECT connected_at FROM retailer_plugins WHERE id = ?), ?), ?)",[n,a,e,t,s?JSON.stringify(s):null,n,i,l])}},activityLogs:{getAll:(e=50)=>{const t=I();return t?g("SELECT * FROM activity_logs WHERE retailer_id = ? ORDER BY created_at DESC LIMIT ?",[t,e]):g("SELECT * FROM activity_logs ORDER BY created_at DESC LIMIT ?",[e])},add:e=>{const t=I(),s=e.id||`log_${Date.now()}_${Math.random().toString(36).substr(2,6)}`;return g("INSERT INTO activity_logs (id, retailer_id, action, detail, user_name, icon, color, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",[s,t,e.action,e.detail||null,e.user_name||null,e.icon||null,e.color||null,new Date().toISOString()])}},storeListings:{getAll:()=>{const e=I();return e?g("SELECT * FROM store_listings WHERE retailer_id = ? ORDER BY created_at DESC",[e]):g("SELECT * FROM store_listings ORDER BY created_at DESC")},getById:e=>{const t=I();return t?g("SELECT * FROM store_listings WHERE id = ? AND retailer_id = ?",[e,t]):g("SELECT * FROM store_listings WHERE id = ?",[e])},add:e=>{const t=I(),s=new Date().toISOString();return g("INSERT INTO store_listings (id, product_id, product_name, brand, category, base_price, listing_price, description, status, stock_qty, created_at, updated_at, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[e.id,e.product_id,e.product_name,e.brand||null,e.category||null,e.base_price,e.listing_price,e.description||null,e.status||"draft",e.stock_qty||0,s,s,t])},update:(e,t)=>{const s=I(),a=new Date().toISOString();return g("UPDATE store_listings SET listing_price = ?, description = ?, status = ?, stock_qty = ?, updated_at = ? WHERE id = ? AND retailer_id = ?",[t.listing_price,t.description,t.status,t.stock_qty,a,e,s])},delete:e=>{const t=I();return t?g("DELETE FROM store_listings WHERE id = ? AND retailer_id = ?",[e,t]):g("DELETE FROM store_listings WHERE id = ?",[e])}},storeOrders:{getAll:()=>{const e=I();return e?g("SELECT * FROM store_orders WHERE retailer_id = ? ORDER BY order_date DESC",[e]):g("SELECT * FROM store_orders ORDER BY order_date DESC")},getById:e=>{const t=I();return t?g("SELECT * FROM store_orders WHERE id = ? AND retailer_id = ?",[e,t]):g("SELECT * FROM store_orders WHERE id = ?",[e])},add:e=>{const t=I();return g("INSERT INTO store_orders (id, order_number, customer_name, customer_phone, customer_email, shipping_address_line1, shipping_address_line2, shipping_city, shipping_state, shipping_pincode, order_date, total_amount, order_status, payment_status, payment_mode, payment_reference, tracking_number, courier_name, shipped_date, delivered_date, notes, sale_id, retailer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[e.id,e.order_number,e.customer_name,e.customer_phone||null,e.customer_email||null,e.shipping_address_line1||null,e.shipping_address_line2||null,e.shipping_city||null,e.shipping_state||null,e.shipping_pincode||null,e.order_date,e.total_amount,e.order_status||"pending",e.payment_status||"pending",e.payment_mode||null,e.payment_reference||null,e.tracking_number||null,e.courier_name||null,e.shipped_date||null,e.delivered_date||null,e.notes||null,e.sale_id||null,t])},updateStatus:(e,t,s={})=>{const a=I(),n=["order_status = ?"],l=[t];s.tracking_number!==void 0&&(n.push("tracking_number = ?"),l.push(s.tracking_number)),s.courier_name!==void 0&&(n.push("courier_name = ?"),l.push(s.courier_name)),s.shipped_date!==void 0&&(n.push("shipped_date = ?"),l.push(s.shipped_date)),s.delivered_date!==void 0&&(n.push("delivered_date = ?"),l.push(s.delivered_date)),s.sale_id!==void 0&&(n.push("sale_id = ?"),l.push(s.sale_id)),s.payment_status!==void 0&&(n.push("payment_status = ?"),l.push(s.payment_status)),l.push(e),a&&l.push(a);const i=a?"WHERE id = ? AND retailer_id = ?":"WHERE id = ?";return g(`UPDATE store_orders SET ${n.join(", ")} ${i}`,l)},addItem:e=>g("INSERT INTO store_order_items (id, order_id, listing_id, product_id, product_name, category, quantity, unit_price, discount_amount, final_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[e.id,e.order_id,e.listing_id||null,e.product_id,e.product_name,e.category||null,e.quantity,e.unit_price,e.discount_amount||0,e.final_price]),getItems:e=>g("SELECT * FROM store_order_items WHERE order_id = ?",[e]),deleteItems:e=>g("DELETE FROM store_order_items WHERE order_id = ?",[e])},approved:{checkApproval:async e=>{const t=`
                SELECT * FROM retailers
                WHERE MobileNumber = ?
                AND process_status = 'approved'
                AND Approval_Status = 'Approved'
                LIMIT 1
            `;try{const s=await xl.execute({sql:t,args:[e]});return s.rows.length>0?s.rows[0]:null}catch(s){throw console.error("Error checking approval:",s.message),s}},getByMobile:async e=>{const t="SELECT * FROM retailers WHERE MobileNumber = ? LIMIT 1";try{const s=await xl.execute({sql:t,args:[e]});return s.rows.length>0?s.rows[0]:null}catch(s){throw console.error("Error fetching retailer:",s.message),s}}},retailers:{isRegistered:async e=>(await Nt.execute({sql:"SELECT id FROM retailers WHERE mobile_number = ? LIMIT 1",args:[e]})).rows.length>0,generateCode:async()=>{const t=new Date().toISOString().slice(0,10).replace(/-/g,""),a=await Nt.execute({sql:"SELECT COUNT(*) as count FROM retailers WHERE retailer_code LIKE ?",args:[`ROS-${t}-%`]}),l=(parseInt(a.rows[0].count)+1).toString().padStart(4,"0");return`ROS-${t}-${l}`},add:async e=>{const t=await C.retailers.generateCode(),s=`retailer_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;return await Nt.execute({sql:`
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
            `,args:[s,t,e.RetailerName,e.ContactPerson,e.Email,e.MobileNumber,e.PhoneNumber,e.Address_Line_1,e.Address_Line_2,e.CountryName,e.StateName,e.CityName,e.DistrictName,e.AreaName,e.PinCode,e.VATNnumber,e.PAN_Number,e.Name_of_Bank,e.Name_of_Bank_Account_Holder,e.Bank_Account_Number,e.Branch_Location,e.IFSC_Code,e.ParentRetailerName,e.NDName,e.RDSName,e.SalesmanName,e.Reporting_To_Name,e.CSA_on_Counter,e.Counter_Potential_in_Volume,e.Counter_Potential_in_Value,e.Retailer_Category,e.RETAILER_CATEGORY1,e.RETAILER_CLASSIFICATION,e.DOB,e.Creation_Date,e.ApprovalRemarks,e.id,e.Approval_Status,e.process_status,"active"]}),{id:s,retailerCode:t}},getById:async e=>(await Nt.execute({sql:"SELECT * FROM retailers WHERE id = ?",args:[e]})).rows[0]||null,getAll:async()=>(await Nt.execute("SELECT * FROM retailers ORDER BY onboarded_at DESC")).rows}};window.saveSettings=async function(e){const t=document.querySelector(`[data-settings-category="${e}"]`);if(!t){console.error("No settings container for",e);return}const s={};t.querySelectorAll('input[type="checkbox"][data-field]').forEach(a=>{s[a.dataset.field]=a.checked}),t.querySelectorAll("select[data-field]").forEach(a=>{s[a.dataset.field]=a.value}),t.querySelectorAll('input[type="text"][data-field], input[type="range"][data-field], input[type="number"][data-field]').forEach(a=>{s[a.dataset.field]=a.type==="range"||a.type==="number"?Number(a.value):a.value}),t.querySelectorAll("[data-field-group]").forEach(a=>{const n=a.querySelector('[data-active="true"]');n&&(s[a.dataset.fieldGroup]=n.dataset.value)});try{await C.settings.save(e,s),window._db_cache.retailerSettings||(window._db_cache.retailerSettings={}),window._db_cache.retailerSettings[e]=s;const a=(()=>{var i;const n=window.getCache(),l=localStorage.getItem("retaileros_retailer_id");return((i=n.retailers)==null?void 0:i.find(r=>r.id===l))||{}})();C.activityLogs.add({action:"settings",detail:`Updated ${e} settings`,user_name:a.contact_person||"Owner",icon:"settings",color:"slate"}),window.toast&&window.toast.success("Settings saved")}catch(a){console.error("Failed to save settings:",a),window.toast&&window.toast.error("Failed to save settings")}};const Dn=Object.freeze(Object.defineProperty({__proto__:null,db:C,query:g,transaction:kd},Symbol.toStringTag,{value:"Module"}));async function K(){console.group("🔄 Synchronizing Data with Turso...");try{const e=localStorage.getItem("retaileros_retailer_id"),t=(T,Dt="")=>{const fe=Dt?` ORDER BY ${Dt}`:"";return e?g(`SELECT * FROM ${T} WHERE retailer_id = ?${fe}`,[e]):g(`SELECT * FROM ${T}${fe}`)},[s,a,n,l,i,r,d,o,u,f,b,h,v,x,y,_,R,M,E,O,Q,bt,Xe]=await Promise.all([t("customers").catch(T=>(console.error("Sync customers failed:",T),[])),g("SELECT * FROM products").catch(T=>(console.error("Sync products failed:",T),[])),t("sales","date DESC").catch(T=>(console.error("Sync sales failed:",T),[])),(e?g("SELECT si.* FROM sale_items si INNER JOIN sales s ON si.sale_id = s.id WHERE s.retailer_id = ?",[e]):g("SELECT * FROM sale_items")).catch(T=>(console.error("Sync sale_items failed:",T),[])),t("companies").catch(T=>(console.error("Sync companies failed:",T),[])),t("groups","created_at DESC").catch(T=>(console.error("Sync groups failed:",T),[])),t("group_members").catch(T=>(console.error("Sync group_members failed:",T),[])),t("automations","created_at DESC").catch(T=>(console.error("Sync automations failed:",T),[])),t("automation_messages","scheduled_date").catch(T=>(console.error("Sync automation_messages failed:",T),[])),t("communication_log","sent_at DESC").catch(T=>(console.error("Sync communications failed:",T),[])),g("SELECT * FROM schemes WHERE status = 'active' ORDER BY brand, name").catch(T=>(console.error("Sync schemes failed:",T),[])),g("SELECT * FROM retailers ORDER BY onboarded_at DESC").catch(T=>(console.error("Sync retailers failed:",T),[])),t("inquiries","created_at DESC").catch(T=>(console.error("Sync inquiries failed:",T),[])),t("repairs","created_at DESC").catch(T=>(console.error("Sync repairs failed:",T),[])),t("inventory_logs","date DESC").catch(T=>(console.error("Sync inventory_logs failed:",T),[])),t("retailer_settings").catch(T=>(console.error("Sync retailer_settings failed:",T),[])),t("team_members","created_at").catch(T=>(console.error("Sync team_members failed:",T),[])),t("team_roles","created_at").catch(T=>(console.error("Sync team_roles failed:",T),[])),t("retailer_plugins").catch(T=>(console.error("Sync retailer_plugins failed:",T),[])),t("activity_logs","created_at DESC").catch(T=>(console.error("Sync activity_logs failed:",T),[])),t("store_listings","created_at DESC").catch(T=>(console.error("Sync store_listings failed:",T),[])),t("store_orders","order_date DESC").catch(T=>(console.error("Sync store_orders failed:",T),[])),(e?g("SELECT soi.* FROM store_order_items soi INNER JOIN store_orders so ON soi.order_id = so.id WHERE so.retailer_id = ?",[e]):g("SELECT * FROM store_order_items")).catch(T=>(console.error("Sync store_order_items failed:",T),[]))]),xe={};(_||[]).forEach(T=>{try{xe[T.category]=JSON.parse(T.settings)}catch{xe[T.category]={}}}),window._db_cache={customers:s||[],products:a||[],sales:n||[],saleItems:l||[],companies:i||[],groups:r||[],groupMembers:d||[],automations:o||[],automationMessages:u||[],communications:f||[],schemes:b||[],retailers:h||[],inquiries:v||[],repairs:x||[],inventoryLogs:y||[],retailerSettings:xe,teamMembers:R||[],teamRoles:M||[],retailerPlugins:E||[],activityLogs:O||[],storeListings:Q||[],storeOrders:bt||[],storeOrderItems:Xe||[],marketplace:[],campaigns:[],bookings:[]},console.log("✅ Sync Complete. Tables cached:",{customers:s.length,products:a.length,sales:n.length,automations:o.length})}catch(e){console.error("❌ Data Sync Failed:",e),window.toast&&window.toast.error("Failed to sync data. Check your connection.")}finally{console.groupEnd(),D(!1)}}window.getCache=()=>window._db_cache||{customers:[],sales:[],products:[],saleItems:[],companies:[],groups:[],groupMembers:[],automations:[],automationMessages:[],communications:[],schemes:[],retailers:[],inventoryLogs:[],inquiries:[],repairs:[],retailerSettings:{},teamMembers:[],teamRoles:[],retailerPlugins:[],activityLogs:[],storeListings:[],storeOrders:[],storeOrderItems:[],marketplace:[],campaigns:[],bookings:[]};const Wi=Object.freeze(Object.defineProperty({__proto__:null,syncData:K},Symbol.toStringTag,{value:"Module"}));let It=!1,pe="",ye={customers:[],sales:[]};window.toggleSalesSearch=()=>{It=!It,It||(pe="",ye={customers:[],sales:[]}),window.triggerRender()};window.updateSalesSearch=e=>{const t=document.getElementById("sales-universal-search"),s=(t==null?void 0:t.selectionStart)||e.length;if(pe=e.toLowerCase().trim(),!pe){ye={customers:[],sales:[]},window.triggerRender(!1),fl("sales-universal-search",s);return}const a=window.getCache(),n=a.customers||[],l=a.sales||[],i=a.saleItems||[];ye.customers=n.filter(r=>{var d,o,u;return((d=r.name)==null?void 0:d.toLowerCase().includes(pe))||((o=r.phone)==null?void 0:o.includes(pe))||((u=r.email)==null?void 0:u.toLowerCase().includes(pe))}).slice(0,5),ye.sales=l.filter(r=>{var o,u;return(o=r.id)!=null&&o.toLowerCase().includes(pe)||(u=r.customer_name)!=null&&u.toLowerCase().includes(pe)?!0:i.filter(f=>f.sale_id===r.id).some(f=>{var b;return(b=f.product_name)==null?void 0:b.toLowerCase().includes(pe)})}).slice(0,5),window.triggerRender(!1),fl("sales-universal-search",s)};function fl(e,t){setTimeout(()=>{const s=document.getElementById(e);s&&(s.focus(),s.setSelectionRange(t,t))},0)}window.selectSearchCustomer=(e,t)=>{p.historyViewMode="completed",p.historyDateFilter="all",window.setTab("history");const a=window.getCache().sales.find(n=>n.customer_id===e);a&&window.setSalesHistoryId(a.id),It=!1,pe="",ye={customers:[],sales:[]},window.triggerRender()};window.selectSearchSale=e=>{window.setTab("history"),window.setSalesHistoryId(e),It=!1,pe="",ye={customers:[],sales:[]},window.triggerRender()};function zi(e){const t=ye.customers.length>0||ye.sales.length>0;return`
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
                <button type="button" onclick="window.toggleSalesSearch()" class="p-2 text-slate-400 hover:text-slate-900 ${It?"bg-slate-100 rounded-full text-slate-900":""}">
                    <span class="material-icons-outlined text-xl">${It?"close":"search"}</span>
                </button>
            </div>
            
            <!-- Search Bar -->
            ${It?`
                <div class="mb-4 relative">
                    <div class="relative">
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400">search</span>
                        <input type="text" 
                               id="sales-universal-search"
                               value="${pe}"
                               oninput="window.updateSalesSearch(this.value)" 
                               placeholder="Search customers, orders, products..." 
                               class="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm"
                               autofocus>
                    </div>
                    
                    <!-- Search Results Dropdown -->
                    ${pe&&t?`
                        <div class="absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden max-h-80 overflow-y-auto">
                            ${ye.customers.length>0?`
                                <div class="p-3 bg-slate-50 border-b border-slate-100">
                                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <span class="material-icons-outlined text-xs">person</span>
                                        Customers (${ye.customers.length})
                                    </p>
                                </div>
                                ${ye.customers.map(s=>{var a;return`
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
                            
                            ${ye.sales.length>0?`
                                <div class="p-3 bg-slate-50 border-b border-slate-100">
                                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <span class="material-icons-outlined text-xs">receipt</span>
                                        Transactions (${ye.sales.length})
                                    </p>
                                </div>
                                ${ye.sales.map(s=>`
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
                    
                    ${pe&&!t?`
                        <div class="absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl p-8 text-center">
                            <span class="material-icons-outlined text-3xl text-slate-200 mb-2">search_off</span>
                            <p class="text-xs font-bold text-slate-400">No results found for "${pe}"</p>
                        </div>
                    `:""}
                </div>
            `:""}
            
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                <button type="button" onclick="setTab('new-sale')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${e==="new-sale"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">New Sale</button>
                <button type="button" onclick="setTab('history')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${e==="history"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">History</button>
            </div>
        </header>
    `}let rs=!1,Ea="",A=[],Be=null,ut="Select Customer",ue=!1,Ke="",Qe="",ba=!1,W="",xt="",Ct=null;const os=e=>`${e}-${Math.random().toString(36).substr(2,8).toUpperCase()}`,_d=["appliances","air conditioners","ac","washing machines","refrigerators","tvs","television","home theater","dishwasher","microwave","geyser","water heater"];function On(e){if(e.installation_required===1)return!0;const t=(e.category||"").toLowerCase();return _d.some(s=>t.includes(s))}async function Sd(e){const t=window.getCache().products,s=window.getCache().schemes||[],a=t.find(n=>n.id===e);if(a){const n=On(a),l=s.filter(r=>{const d=!r.brand||r.brand===a.brand,o=!r.category||r.category===a.category,u=(!r.min_price||a.mop>=r.min_price)&&(!r.max_price||a.mop<=r.max_price),f=new Date(r.start_date)<=new Date&&new Date(r.end_date)>=new Date;return d&&o&&u&&f&&r.status==="active"});A.push({...a,qty:1,imei:"",serial_number:"",mac_id:"",manufacturing_date:"",showDetails:!1,installation_required:n,installation_date:"",discount_type:null,discount_value:0,discount_amount:0,scheme_id:null,scheme_name:null,final_price:a.mop,applicableSchemes:l,showDiscount:!1,extraFields:[]});const i=document.getElementById("sales-item-search");i&&(i.value=""),window.triggerRender()}}window.toggleCartItemDiscount=e=>{A[e]&&(A[e].showDiscount=!A[e].showDiscount,window.triggerRender())};window.applyStoreDiscount=(e,t)=>{if(A[e]){const s=A[e],a=parseFloat(t)||0;a>0&&a<=100?(s.discount_type="store",s.discount_value=a,s.discount_amount=Math.round(s.mop*a/100),s.scheme_id=null,s.scheme_name=null,s.final_price=s.mop-s.discount_amount):(s.discount_type=null,s.discount_value=0,s.discount_amount=0,s.scheme_id=null,s.scheme_name=null,s.final_price=s.mop),window.triggerRender()}};window.applySchemeDiscount=(e,t)=>{if(A[e]){const s=A[e],n=(window.getCache().schemes||[]).find(l=>l.id===t);n?(s.discount_type="scheme",s.scheme_id=n.id,s.scheme_name=n.name,n.discount_type==="percentage"?(s.discount_value=n.discount_value,s.discount_amount=Math.round(s.mop*n.discount_value/100)):(s.discount_value=n.discount_value,s.discount_amount=n.discount_value),s.final_price=s.mop-s.discount_amount):(s.discount_type=null,s.discount_value=0,s.discount_amount=0,s.scheme_id=null,s.scheme_name=null,s.final_price=s.mop),window.triggerRender()}};window.clearItemDiscount=e=>{if(A[e]){const t=A[e];t.discount_type=null,t.discount_value=0,t.discount_amount=0,t.scheme_id=null,t.scheme_name=null,t.final_price=t.mop,window.triggerRender()}};function Yi(e,t){Be=e,ut=t;const s=document.getElementById("customer-dropdown-menu");s&&s.classList.add("hidden");const n=(window.getCache().companies||[]).find(l=>l.customer_id===e);n&&(Ke=n.name,Qe=n.gst_number),window.triggerRender()}window.updateCartItemDetail=(e,t,s)=>{A[e]&&(A[e][t]=s)};window.toggleCartItemDetails=e=>{A[e]&&(A[e].showDetails=!A[e].showDetails,window.triggerRender())};window.toggleItemInstallation=e=>{A[e]&&(A[e].installation_required=!A[e].installation_required,A[e].installation_required||(A[e].installation_date=""),window.triggerRender())};window.updateItemInstallationDate=(e,t)=>{A[e]&&(A[e].installation_date=t)};const $d="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";function Ed(){return localStorage.getItem("openai_api_key")||$d}window.captureDeviceImage=async e=>{const t=Ed(),s=document.createElement("input");s.type="file",s.accept="image/*",s.capture="environment",s.onchange=async a=>{const n=a.target.files[0];if(n){rs=!0,Ea="Reading image...",window.triggerRender(!1);try{const l=await Id(n);Ea="AI analyzing...",Cd(e,Ea);const i=A[e],r={name:i.name,brand:i.brand,category:i.category},d=await Rd(l,r,t);A[e]&&d&&(d.imei&&(A[e].imei=d.imei),d.serial_number&&(A[e].serial_number=d.serial_number),d.mac_id&&(A[e].mac_id=d.mac_id),d.manufacturing_date&&(A[e].manufacturing_date=d.manufacturing_date),d.extraFields&&d.extraFields.length>0&&(A[e].extraFields=[...A[e].extraFields||[],...d.extraFields])),rs=!1,window.triggerRender(!1);const o=[];d.imei&&o.push("IMEI"),d.serial_number&&o.push("Serial"),d.mac_id&&o.push("MAC ID"),d.manufacturing_date&&o.push("Mfg Date"),d.extraFields&&d.extraFields.forEach(u=>o.push(u.label)),o.length>0?window.toast.success(`Found: ${o.join(", ")}`):window.toast.warning("No device details found. Try a clearer image.")}catch(l){console.error("AI Vision Error:",l),rs=!1,window.triggerRender(!1),window.toast.error(l.message||"Error analyzing image")}}},s.click()};function Id(e){return new Promise((t,s)=>{const a=new FileReader;a.onload=()=>{const n=a.result.split(",")[1];t(n)},a.onerror=s,a.readAsDataURL(e)})}function Cd(e,t){const s=document.getElementById(`ocr-progress-${e}`);s&&(s.textContent=t)}async function Rd(e,t,s){var d,o,u,f;const a=`You are analyzing a product label/box image to extract device information.

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
}`,n=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:JSON.stringify({model:"gpt-4o-mini",messages:[{role:"user",content:[{type:"text",text:a},{type:"image_url",image_url:{url:`data:image/jpeg;base64,${e}`,detail:"high"}}]}],max_tokens:1e3,temperature:.1})});if(!n.ok){const b=await n.json().catch(()=>({}));throw new Error(((d=b.error)==null?void 0:d.message)||`API Error: ${n.status}`)}const i=((f=(u=(o=(await n.json()).choices)==null?void 0:o[0])==null?void 0:u.message)==null?void 0:f.content)||"";console.log("AI Vision Response:",i);const r=i.match(/\{[\s\S]*\}/);if(!r)return{extraFields:[]};try{const b=JSON.parse(r[0]);return Ad(b)}catch(b){return console.error("Failed to parse AI response:",b),{extraFields:[]}}}function Ad(e){const t={imei:e.imei||null,serial_number:e.serial_number||e.serialNumber||null,mac_id:e.mac_id||e.macId||e.mac||null,manufacturing_date:e.manufacturing_date||e.manufacturingDate||e.mfg_date||null,extraFields:[]};return e.imei2&&t.extraFields.push({key:"imei2",label:"IMEI 2",value:e.imei2,type:"text"}),e.model&&t.extraFields.push({key:"model",label:"Model",value:e.model,type:"text"}),e.color&&t.extraFields.push({key:"color",label:"Color",value:e.color,type:"text"}),e.storage&&t.extraFields.push({key:"storage",label:"Storage",value:e.storage,type:"text"}),e.extraFields&&Array.isArray(e.extraFields)&&e.extraFields.forEach(s=>{s.value&&s.label&&(t.extraFields.some(n=>n.key===s.key)||t.extraFields.push({key:s.key||s.label.toLowerCase().replace(/\s+/g,"_"),label:s.label,value:s.value,type:s.type||"text"}))}),t}window.updateCartItemExtraField=(e,t,s)=>{A[e]&&A[e].extraFields[t]&&(A[e].extraFields[t].value=s)};window.addCustomExtraField=e=>{A[e]&&window.showPrompt('Enter field name (e.g., "IMEI 2", "Warranty Code"):',"",t=>{const s=t.toLowerCase().replace(/\s+/g,"_");A[e].extraFields=A[e].extraFields||[],A[e].extraFields.push({key:s,label:t,value:"",type:"text",custom:!0}),window.triggerRender()})};window.removeExtraField=(e,t)=>{A[e]&&A[e].extraFields&&(A[e].extraFields.splice(t,1),window.triggerRender())};window.toggleGstRequired=()=>{ue=!ue,window.triggerRender()};window.updateGstField=(e,t)=>{e==="companyName"&&(Ke=t),e==="gstNumber"&&(Qe=t.toUpperCase())};window.openPaymentModal=()=>{if(A.length===0||!Be){window.toast.warning("Please select a customer and add items to cart");return}const e=A.filter(t=>t.installation_required&&!t.installation_date);if(e.length>0){window.toast.warning(`Set installation date for: ${e.map(t=>t.name).join(", ")}`);return}ba=!0,window.triggerRender()};window.closePaymentModal=()=>{ba=!1,W="",xt="",window.triggerRender()};window.selectPaymentMode=e=>{W=e,xt="",window.triggerRender()};window.updatePaymentReference=e=>{xt=e};window.confirmPayment=async()=>{if(!W){window.toast.warning("Please select a payment mode");return}if((W==="card"||W==="upi")&&!xt){window.toast.warning("Please enter the transaction reference");return}ba=!1,await Ji()};async function Ji(){const e=document.getElementById("complete-txn-btn");e&&(e.disabled=!0,e.innerHTML="Processing...");try{const t=Ct||os("ORD"),s=A.reduce((r,d)=>r+(d.final_price||d.mop),0);let a=null;ue&&Ke&&Qe&&(a=os("COMP"),await C.companies.add({id:a,name:Ke,gst_number:Qe,customer_id:Be}));const n=A.some(r=>r.installation_required),i=A.filter(r=>r.installation_required&&r.installation_date).map(r=>r.installation_date).sort()[0]||null;Ct?(await C.sales.deleteItems(Ct),await C.sales.update({id:t,customer_id:Be,customer_name:ut,total_amount:s,status:"completed",payment_mode:W,payment_reference:xt,gst_required:ue?1:0,company_id:a,installation_required:n?1:0,installation_date:i})):await C.sales.add({id:t,customer_id:Be,customer_name:ut,date:new Date().toISOString(),total_amount:s,status:"completed",payment_mode:W,payment_reference:xt,gst_required:ue?1:0,company_id:a,installation_required:n?1:0,installation_date:i});for(const r of A)await C.sales.addItem({id:os("ITEM"),sale_id:t,product_id:r.id,product_name:r.name,category:r.category,quantity:1,price:r.mop,discount_type:r.discount_type||null,discount_value:r.discount_value||null,discount_amount:r.discount_amount||null,scheme_id:r.scheme_id||null,final_price:r.final_price||r.mop,imei:r.imei||null,serial_number:r.serial_number||null,mac_id:r.mac_id||null,manufacturing_date:r.manufacturing_date||null,installation_date:r.installation_required?r.installation_date:null,extra_fields:r.extraFields&&r.extraFields.length>0?JSON.stringify(r.extraFields):null});Ln(),await K(),window.setTab("history"),window.setSalesHistoryId(t)}catch(t){console.error(t),window.toast.error("Error completing transaction: "+t.message),e&&(e.disabled=!1,e.innerHTML="Complete Transaction")}}async function Td(){if(A.length===0){window.toast.warning("Please add items to cart before saving draft");return}try{const e=Ct||os("DRF"),t=A.reduce((i,r)=>i+(r.final_price||r.mop),0);let s=null;ue&&Ke&&Qe&&(s=os("COMP"),await C.companies.add({id:s,name:Ke,gst_number:Qe,customer_id:Be}));const a=A.some(i=>i.installation_required),l=A.filter(i=>i.installation_required&&i.installation_date).map(i=>i.installation_date).sort()[0]||null;Ct?(await C.sales.deleteItems(Ct),await C.sales.update({id:e,customer_id:Be,customer_name:ut||"No Customer",total_amount:t,status:"draft",payment_mode:null,payment_reference:null,gst_required:ue?1:0,company_id:s,installation_required:a?1:0,installation_date:l})):await C.sales.add({id:e,customer_id:Be,customer_name:ut||"No Customer",date:new Date().toISOString(),total_amount:t,status:"draft",payment_mode:null,payment_reference:null,gst_required:ue?1:0,company_id:s,installation_required:a?1:0,installation_date:l});for(const i of A)await C.sales.addItem({id:os("ITEM"),sale_id:e,product_id:i.id,product_name:i.name,category:i.category,quantity:1,price:i.mop,discount_type:i.discount_type||null,discount_value:i.discount_value||null,discount_amount:i.discount_amount||null,scheme_id:i.scheme_id||null,final_price:i.final_price||i.mop,imei:i.imei||null,serial_number:i.serial_number||null,mac_id:i.mac_id||null,manufacturing_date:i.manufacturing_date||null,installation_date:i.installation_required?i.installation_date:null,extra_fields:i.extraFields&&i.extraFields.length>0?JSON.stringify(i.extraFields):null});Ln(),await K(),window.setTab("history"),window.toast.success("Draft saved successfully!")}catch(e){console.error(e),window.toast.error("Error saving draft: "+e.message)}}async function Md(e){const t=window.getCache(),s=t.sales.find(l=>l.id===e);if(!s)return;if(Ct=e,Be=s.customer_id,ut=s.customer_name,ue=s.gst_required===1,s.company_id){const l=t.companies.find(i=>i.id===s.company_id);l&&(Ke=l.name,Qe=l.gst_number)}const a=t.saleItems.filter(l=>l.sale_id===e),n=t.products;A=a.map(l=>{const i=n.find(o=>o.id===l.product_id)||{},r=l.installation_date||On(i);let d=[];if(l.extra_fields)try{d=JSON.parse(l.extra_fields)}catch(o){console.warn("Failed to parse extra fields:",o)}return{...i,id:l.product_id,name:l.product_name,category:l.category,mop:l.price,qty:l.quantity,imei:l.imei||"",serial_number:l.serial_number||"",mac_id:l.mac_id||"",manufacturing_date:l.manufacturing_date||"",showDetails:!1,installation_required:!!r,installation_date:l.installation_date||"",extraFields:d}}),window.setTab("new-sale"),window.triggerRender()}function Ln(){A=[],Be=null,ut="Select Customer",ue=!1,Ke="",Qe="",ba=!1,W="",xt="",Ct=null}window.selectSaleCustomer=Yi;window.addProductToCart=Sd;window.completeTransaction=Ji;window.saveDraft=Td;window.loadDraft=Md;window.getActiveCart=()=>A;window.getSelectedCustomer=()=>({id:Be,name:ut});window.getSaleState=()=>({gstRequired:ue,companyName:Ke,gstNumber:Qe,paymentMode:W,paymentReference:xt});window.clearCart=()=>{Ln(),window.triggerRender()};window.removeFromCart=e=>{A.splice(e,1),window.triggerRender()};window.toggleCustomerDropdown=e=>{e&&e.stopPropagation();const t=document.getElementById("customer-dropdown-menu");t&&t.classList.toggle("hidden")};let Hs="";window.updateCustomerSearch=e=>{Hs=e.toLowerCase(),window.triggerRender(!1)};window.addNewCustomer=async()=>{window.setSalesMode("add-customer");const e=document.getElementById("customer-dropdown-menu");e&&e.classList.add("hidden")};function Ki(){const e=window.getCache(),t=e.products||[],s=e.customers||[],a=Hs?s.filter(o=>{var u;return o.name.toLowerCase().includes(Hs)||((u=o.phone)==null?void 0:u.includes(Hs))}):s,n=document.getElementById("sales-item-search"),l=n?n.value.toLowerCase():"",i=l?t.filter(o=>{var u;return o.name.toLowerCase().includes(l)||((u=o.brand)==null?void 0:u.toLowerCase().includes(l))}):[],r=A.reduce((o,u)=>o+(u.final_price||u.mop||0),0);A.reduce((o,u)=>o+(u.discount_amount||0),0);const d=A.filter(o=>o.installation_required).length;return`
        ${zi("new-sale")}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-12 text-left">
            <!-- Customer Section -->
            <section class="space-y-3 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Customer Details</h3>

                <div class="relative text-left">
                    <button type="button" id="customer-dropdown-trigger" onclick="window.toggleCustomerDropdown(event)" class="card p-5 flex items-center justify-between cursor-pointer hover:border-slate-300 transition-all text-left w-full">
                        <div class="flex items-center gap-4 text-slate-900 text-left">
                            <span class="material-icons-outlined text-slate-400">person</span>
                            <span class="text-sm font-black text-left">${ut}</span>
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
                                       value="${Hs}"
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
                    <button type="button" onclick="window.toggleGstRequired()" class="flex items-center gap-2 text-[9px] font-black uppercase ${ue?"text-slate-900":"text-slate-400"}">
                        <span class="material-icons-outlined text-sm">${ue?"check_box":"check_box_outline_blank"}</span>
                        ${ue?"Enabled":"Disabled"}
                    </button>
                </div>
                
                ${ue?`
                    <div class="card p-4 space-y-4">
                        <div>
                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Company Name</label>
                            <input type="text" value="${Ke}" oninput="window.updateGstField('companyName', this.value)" placeholder="Enter company name" class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                        </div>
                        <div>
                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">GST Number</label>
                            <input type="text" value="${Qe}" oninput="window.updateGstField('gstNumber', this.value)" placeholder="e.g. 27AAACR3456D1Z5" maxlength="15" class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold uppercase focus:outline-none focus:border-slate-900 transition-all">
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
                            ${i.length>0?i.map(o=>{var f;const u=On(o);return`
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
                                    <p class="text-xs font-black text-slate-900 text-right ml-2">₹${((f=o.mop)==null?void 0:f.toLocaleString())||0}</p>
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
                        Cart (${A.length})
                        ${d>0?`<span class="ml-2 text-slate-600">${d} install</span>`:""}
                    </h3>
                    <button type="button" onclick="window.clearCart()" class="text-[9px] font-black text-slate-900 uppercase tracking-widest border-b-2 border-slate-900">Clear All</button>
                </div>
                
                <div class="space-y-3 text-left">
                    ${A.map((o,u)=>{var f,b,h;return`
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
                                        <p class="text-[9px] font-bold text-slate-400 line-through text-right">₹${((f=o.mop)==null?void 0:f.toLocaleString())||0}</p>
                                        <p class="text-xs font-black text-right">₹${((b=o.final_price)==null?void 0:b.toLocaleString())||0}</p>
                                    `:`
                                        <p class="text-xs font-black text-right">₹${((h=o.mop)==null?void 0:h.toLocaleString())||0}</p>
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
                                            ${[5,10,15,20].map(v=>`
                                                <button type="button" onclick="window.applyStoreDiscount(${u}, ${v})" class="flex-1 py-2 ${o.discount_type==="store"&&o.discount_value===v?"bg-slate-900 text-white":"bg-white border border-slate-200 text-slate-600"} rounded-lg text-[10px] font-black hover:bg-slate-800 hover:text-white transition-all">
                                                    ${v}%
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
                                                ${o.applicableSchemes.map(v=>`
                                                    <button type="button" onclick="window.applySchemeDiscount(${u}, '${v.id}')" class="w-full p-3 ${o.scheme_id===v.id?"bg-slate-900 text-white border-slate-900":"bg-white border border-slate-200 text-slate-700"} rounded-xl text-left flex items-center justify-between hover:border-slate-900 transition-all">
                                                        <div>
                                                            <p class="text-[10px] font-black">${v.name}</p>
                                                            <p class="text-[8px] font-bold ${o.scheme_id===v.id?"text-white/70":"text-slate-400"}">${v.brand}</p>
                                                        </div>
                                                        <span class="text-[10px] font-black ${o.scheme_id===v.id?"text-white":"text-slate-900"}">
                                                            ${v.discount_type==="percentage"?`${v.discount_value}%`:`₹${v.discount_value.toLocaleString()}`} OFF
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
                                    <button type="button" onclick="window.captureDeviceImage(${u})" class="w-full py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase flex items-center justify-center gap-2 hover:bg-slate-800 transition-all sm:hidden ${rs?"opacity-50 cursor-not-allowed":""}" ${rs?"disabled":""}>
                                        ${rs?`
                                            <span class="material-icons-outlined text-sm animate-spin">sync</span>
                                            <span id="ocr-progress-${u}">${Ea||"Analyzing..."}</span>
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
                                                ${o.extraFields.map((v,x)=>`
                                                    <div class="relative">
                                                        <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">${v.label}</label>
                                                        <div class="flex gap-1">
                                                            <input type="${v.type||"text"}" 
                                                                   value="${v.value||""}" 
                                                                   onchange="window.updateCartItemExtraField(${u}, ${x}, this.value)" 
                                                                   placeholder="Enter ${v.label}"
                                                                   class="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                                            <button type="button" onclick="window.removeExtraField(${u}, ${x})" class="w-8 h-8 flex items-center justify-center text-slate-300 hover:text-slate-600 hover:bg-slate-200 rounded-lg transition-all" title="Remove field">
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

                    ${A.length===0?`
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
        ${ba?`
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
                            <button type="button" onclick="window.selectPaymentMode('cash')" class="p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${W==="cash"?"border-slate-900 bg-slate-50":"border-slate-100 hover:border-slate-300"}">
                                <span class="material-icons-outlined text-2xl ${W==="cash"?"text-slate-900":"text-slate-400"}">payments</span>
                                <span class="text-[10px] font-black uppercase ${W==="cash"?"text-slate-900":"text-slate-500"}">Cash</span>
                            </button>
                            <button type="button" onclick="window.selectPaymentMode('card')" class="p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${W==="card"?"border-slate-900 bg-slate-50":"border-slate-100 hover:border-slate-300"}">
                                <span class="material-icons-outlined text-2xl ${W==="card"?"text-slate-900":"text-slate-400"}">credit_card</span>
                                <span class="text-[10px] font-black uppercase ${W==="card"?"text-slate-900":"text-slate-500"}">Card</span>
                            </button>
                            <button type="button" onclick="window.selectPaymentMode('upi')" class="p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${W==="upi"?"border-slate-900 bg-slate-50":"border-slate-100 hover:border-slate-300"}">
                                <span class="material-icons-outlined text-2xl ${W==="upi"?"text-slate-900":"text-slate-400"}">qr_code</span>
                                <span class="text-[10px] font-black uppercase ${W==="upi"?"text-slate-900":"text-slate-500"}">UPI</span>
                            </button>
                        </div>

                        ${W==="card"||W==="upi"?`
                            <div>
                                <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">${W==="card"?"Card Reference / Last 4 Digits":"UPI Transaction ID"}</label>
                                <input type="text" value="${xt}" oninput="window.updatePaymentReference(this.value)" placeholder="${W==="card"?"Enter reference":"Enter UPI ID"}" class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
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
    `}function bl(e){const t=new Date(e);return t.setHours(0,0,0,0),t}function va(e){const t=new Date(e);return t.setHours(23,59,59,999),t}function za(e,t,s,a){if(t==="all")return e;const n=new Date,l=bl(n);return e.filter(i=>{const r=new Date(i.date);switch(t){case"today":return r>=l&&r<=va(n);case"week":{const d=new Date(l);return d.setDate(d.getDate()-d.getDay()),r>=d&&r<=va(n)}case"month":{const d=new Date(l.getFullYear(),l.getMonth(),1);return r>=d&&r<=va(n)}case"custom":{if(!s&&!a)return!0;const d=s?bl(new Date(s)):new Date(0),o=a?va(new Date(a)):new Date;return r>=d&&r<=o}default:return!0}})}window.toggleDateFilterDropdown=e=>{e&&e.stopPropagation();const t=document.getElementById("date-filter-dropdown");t&&t.classList.toggle("hidden")};window.updateHistoryFromDate=e=>{p.historyFromDate=e,p.historyToDate&&(p.historyDateFilter="custom",window.triggerRender())};window.updateHistoryToDate=e=>{p.historyToDate=e,p.historyFromDate&&(p.historyDateFilter="custom",window.triggerRender())};function Qi(){const e=window.getCache(),t=e.sales||[],s=e.saleItems||[],a=(e.storeOrders||[]).filter(x=>x.order_status!=="delivered"&&x.order_status!=="cancelled"),n=t.filter(x=>x.status==="draft"),l=t.filter(x=>x.status!=="draft"),i=p.historyViewMode||"completed",r=p.historyDateFilter||"all",d=za(n,r,p.historyFromDate,p.historyToDate),o=za(l,r,p.historyFromDate,p.historyToDate),u=za(a.map(x=>({...x,date:x.order_date})),r,p.historyFromDate,p.historyToDate),f=i==="drafts"?d:i==="online"?u:o,b=()=>{switch(r){case"today":return"Today";case"week":return"This Week";case"month":return"This Month";case"custom":return p.historyFromDate||p.historyToDate?"Custom Range":"All Time";default:return"All Time"}},h=x=>{switch(x){case"cash":return"payments";case"card":return"credit_card";case"upi":return"qr_code";default:return"account_balance_wallet"}},v=x=>{switch(x){case"cash":return"Cash";case"card":return"Card";case"upi":return"UPI";default:return"Paid"}};return`
        ${zi("history")}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-12 text-left">
            <!-- Toggle & Filter Section -->
            <section class="space-y-4">
                <!-- View Mode Toggle -->
                <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                    <button type="button" onclick="window.setHistoryViewMode('completed')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-2 ${i==="completed"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">
                        <span class="material-icons-outlined text-sm">check_circle</span>
                        <span class="hidden sm:inline">Completed</span> (${l.length})
                    </button>
                    <button type="button" onclick="window.setHistoryViewMode('online')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-2 relative ${i==="online"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">
                        <span class="material-icons-outlined text-sm">public</span>
                        <span class="hidden sm:inline">Online</span> (${a.length})
                        ${a.filter(x=>x.order_status==="pending").length>0?`<span class="absolute -top-1 right-1 w-4 h-4 bg-slate-900 text-white text-[7px] font-black rounded-full flex items-center justify-center">${a.filter(x=>x.order_status==="pending").length}</span>`:""}
                    </button>
                    <button type="button" onclick="window.setHistoryViewMode('drafts')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-2 ${i==="drafts"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">
                        <span class="material-icons-outlined text-sm">edit_note</span>
                        <span class="hidden sm:inline">Drafts</span> (${n.length})
                    </button>
                </div>

                <!-- Date Filter -->
                <div class="flex items-center justify-between gap-3">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        ${i==="drafts"?"Saved Drafts":"Completed"}
                        <span class="text-slate-300 ml-1">(${f.length})</span>
                    </h3>
                    
                    <div class="relative">
                        <button type="button" onclick="window.toggleDateFilterDropdown(event)" class="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-[9px] font-black text-slate-600 uppercase hover:border-slate-300 transition-all">
                            <span class="material-icons-outlined text-sm">calendar_today</span>
                            ${b()}
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
                                        <input type="date" value="${p.historyFromDate||""}" onchange="window.updateHistoryFromDate(this.value)" class="w-full px-2 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900">
                                    </div>
                                    <div>
                                        <label class="text-[8px] font-bold text-slate-400 uppercase mb-1 block">To</label>
                                        <input type="date" value="${p.historyToDate||""}" onchange="window.updateHistoryToDate(this.value)" class="w-full px-2 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Transactions List -->
            ${f.length===0?`
                <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                    <span class="material-icons-outlined text-3xl text-slate-200">${i==="drafts"?"edit_note":i==="online"?"public":"receipt_long"}</span>
                    <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                        No ${i==="drafts"?"saved drafts":i==="online"?"pending online orders":"transactions"} found
                    </span>
                    <span class="text-[9px] font-bold text-slate-300">
                        ${i==="online"?"Delivered orders appear in Completed tab":r!=="all"?"Try adjusting your date filter":""}
                    </span>
                </div>
            `:`
                <section class="space-y-3 text-left">
                    ${i==="online"?`
                        <!-- Online Orders List -->
                        ${u.map(x=>{const y=(e.storeOrderItems||[]).filter(E=>E.order_id===x.id),_=y[0]?y[0].product_name:"Order items",R=y.length>1?`+ ${y.length-1} more`:"",M=E=>{switch(E){case"pending":return'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-slate-200 text-slate-600">Pending</span>';case"confirmed":return'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-slate-300 text-slate-700">Confirmed</span>';case"shipped":return'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-slate-300 text-slate-700">Shipped</span>';default:return""}};return`
                                <button type="button" onclick="window.setApp('mystore'); window.setActiveStoreOrder('${x.id}')" class="card p-4 sm:p-6 border-2 transition-all cursor-pointer text-left w-full border-transparent hover:border-slate-200">
                                    <div class="flex justify-between items-start mb-4 text-left">
                                        <div class="text-left flex-1 min-w-0">
                                            <div class="flex items-center gap-2 mb-1 text-left flex-wrap">
                                                <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter text-left">${x.order_number}</p>
                                                <span class="bg-slate-900 px-1.5 py-0.5 rounded text-[7px] font-black text-white flex items-center gap-1 uppercase tracking-tighter">
                                                    <span class="material-icons-outlined text-[10px]">public</span> Online
                                                </span>
                                                ${M(x.order_status)}
                                                ${x.payment_status==="paid"?'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-900 text-white">Paid</span>':x.payment_mode==="cod"?'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-200 text-slate-600">COD</span>':""}
                                            </div>
                                            <h4 class="text-lg sm:text-xl font-black text-slate-900 tracking-tighter text-left truncate">${x.customer_name}</h4>
                                        </div>
                                        <p class="text-lg sm:text-xl font-black text-slate-900 tracking-tighter text-right shrink-0 ml-2">₹${x.total_amount?parseInt(x.total_amount).toLocaleString():0}</p>
                                    </div>
                                    <div class="space-y-1 text-left">
                                        <p class="text-[10px] font-bold text-slate-500 uppercase text-left truncate">${_} ${R}</p>
                                        <div class="flex items-center justify-between text-left">
                                            <p class="text-[9px] font-black text-slate-500 uppercase text-left flex items-center gap-1">
                                                <span class="material-icons-outlined text-xs">language</span>
                                                ${x.payment_mode==="cod"?"COD":x.payment_mode==="upi"?"UPI":"Online"} • ${x.shipping_city||"Ship pending"}
                                            </p>
                                            <p class="text-[9px] font-black text-slate-300 uppercase text-right">${new Date(x.order_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</p>
                                        </div>
                                    </div>
                                </button>
                            `}).join("")}
                    `:i==="drafts"?`
                        <!-- Drafts List -->
                        ${d.map(x=>{const y=s.filter(M=>M.sale_id===x.id),_=y[0]?y[0].product_name:"No items",R=y.length>1?`+ ${y.length-1} more`:"";return`
                                <div class="card border-2 border-dashed overflow-hidden ${p.salesHistoryId===x.id?"border-slate-900 shadow-lg":"border-slate-200"}">
                                    <button type="button" onclick="window.setSalesHistoryId('${x.id}')" class="p-5 text-left w-full">
                                        <div class="flex justify-between items-start mb-3 text-left">
                                            <div class="text-left">
                                                <div class="flex items-center gap-2 mb-1 text-left">
                                                    <span class="bg-slate-900 text-white px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">
                                                        Draft
                                                    </span>
                                                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter text-left">#${x.id}</p>
                                                </div>
                                                <h4 class="text-lg font-black text-slate-900 tracking-tighter text-left">${x.customer_name||"No Customer"}</h4>
                                            </div>
                                            <p class="text-lg font-black text-slate-900 tracking-tighter text-right">₹${x.total_amount?parseInt(x.total_amount).toLocaleString():0}</p>
                                        </div>
                                        <div class="space-y-1 text-left">
                                            <p class="text-[10px] font-bold text-slate-500 uppercase text-left">${_} ${R}</p>
                                            <p class="text-[9px] font-black text-slate-300 uppercase text-left">${new Date(x.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</p>
                                        </div>
                                    </button>
                                    <div class="px-5 pb-4 flex gap-2">
                                        <button type="button" onclick="window.loadDraft('${x.id}')" class="flex-1 py-2.5 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1.5 hover:bg-slate-800 transition-all">
                                            <span class="material-icons-outlined text-sm">edit</span>
                                            Resume Draft
                                        </button>
                                        <button type="button" onclick="window.deleteDraft('${x.id}')" class="py-2.5 px-4 bg-white border border-slate-200 text-slate-500 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1.5 hover:bg-slate-100 transition-all">
                                            <span class="material-icons-outlined text-sm">delete</span>
                                        </button>
                                    </div>
                                </div>
                            `}).join("")}
                    `:`
                        <!-- Completed Transactions List -->
                        ${o.map(x=>{const y=s.filter(O=>O.sale_id===x.id),_=y[0]?y[0].product_name:"Custom Sale",R=y.length>1?`+ ${y.length-1} more`:"",M=h(x.payment_mode),E=v(x.payment_mode);return`
                                <button type="button" onclick="window.setSalesHistoryId('${x.id}')" class="card p-4 sm:p-6 border-2 transition-all cursor-pointer text-left w-full ${p.salesHistoryId===x.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                                    <div class="flex justify-between items-start mb-4 text-left">
                                        <div class="text-left flex-1 min-w-0">
                                            <div class="flex items-center gap-2 mb-1 text-left flex-wrap">
                                                <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter text-left">Order #${x.id}</p>
                                                <span class="px-1.5 py-0.5 rounded text-[7px] font-black ${x.source==="online"?"bg-slate-900 text-white":"bg-slate-100 text-slate-400"} flex items-center gap-1 uppercase tracking-tighter text-left">
                                                    <span class="material-icons-outlined text-[10px] text-left">${x.source==="online"?"public":"store"}</span> ${x.source==="online"?"Online":"In-Store"}
                                                </span>
                                                ${x.gst_required?`
                                                    <span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-tighter">
                                                        GST
                                                    </span>
                                                `:""}
                                                ${x.installation_required?`
                                                    <span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-tighter flex items-center gap-0.5">
                                                        <span class="material-icons-outlined text-[10px]">build</span> Install
                                                    </span>
                                                `:""}
                                            </div>
                                            <h4 class="text-lg sm:text-xl font-black text-slate-900 tracking-tighter text-left truncate">${x.customer_name}</h4>
                                        </div>
                                        <p class="text-lg sm:text-xl font-black text-slate-900 tracking-tighter text-right shrink-0 ml-2">₹${x.total_amount?parseInt(x.total_amount).toLocaleString():0}</p>
                                    </div>
                                    <div class="space-y-1 text-left">
                                        <p class="text-[10px] font-bold text-slate-500 uppercase text-left truncate">${_} ${R}</p>
                                        <div class="flex items-center justify-between text-left">
                                            <p class="text-[9px] font-black text-slate-500 uppercase text-left flex items-center gap-1">
                                                <span class="material-icons-outlined text-xs">${M}</span>
                                                ${E} • Completed
                                            </p>
                                            <p class="text-[9px] font-black text-slate-300 uppercase text-right">${new Date(x.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</p>
                                        </div>
                                    </div>
                                </button>
                            `}).join("")}
                    `}
                </section>
            `}
        </div>
    `}window.deleteDraft=async e=>{window.showConfirm("Are you sure you want to delete this draft?",async()=>{try{await C.sales.deleteItems(e),await C.sales.delete(e),await K(),window.toast.success("Draft deleted successfully")}catch(t){console.error("Error deleting draft:",t),window.toast.error("Error deleting draft: "+t.message)}})};window.printReceipt=()=>{window.print()};window.shareWhatsApp=()=>{const e=Ua();if(!e)return;const t=Xi(e),s=`https://wa.me/?text=${encodeURIComponent(t)}`;window.open(s,"_blank")};window.automateTransaction=()=>{const e=Ua();if(!e){window.toast.warning("No transaction data to automate");return}window._automationContext={transactionId:e.id,customer:e.customer,phone:e.phone,items:e.items,total:e.total,date:e.date,installationRequired:e.installationRequired,installationDate:e.installationDate},window.setApp("automation"),window.setAutomationViewMode("create")};window.shareNative=async()=>{const e=Ua();if(!e)return;const t=Xi(e);if(navigator.share)try{await navigator.share({title:`Invoice #${e.id}`,text:t})}catch(s){s.name!=="AbortError"&&console.error("Share failed:",s)}else try{await navigator.clipboard.writeText(t),window.toast.success("Receipt copied to clipboard!")}catch(s){console.error("Copy failed:",s),window.toast.error("Failed to copy receipt")}};function Ua(){var s,a,n;const e=p.currentTab==="history",t=window.getCache();if(e){const l=(t.sales||[]).find(u=>u.id===p.salesHistoryId);if(!l)return null;const i=(t.saleItems||[]).filter(u=>u.sale_id===l.id),r=(s=t.customers)==null?void 0:s.find(u=>u.id===l.customer_id),d=l.company_id?(a=t.companies)==null?void 0:a.find(u=>u.id===l.company_id):null,o=l.total_amount||0;return{id:l.id,status:l.status,customer:l.customer_name,customerId:l.customer_id,phone:(r==null?void 0:r.phone)||"N/A",date:new Date(l.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),time:new Date(l.date).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})+" IST",items:i.map(u=>{let f=[];if(u.extra_fields)try{f=JSON.parse(u.extra_fields)}catch{}return{name:u.product_name,category:u.category||"Standard",price:u.price,imei:u.imei,serial_number:u.serial_number,mac_id:u.mac_id,manufacturing_date:u.manufacturing_date,installation_date:u.installation_date,extraFields:f}}),subtotal:o/1.18,gst:o-o/1.18,total:o,paymentMode:l.payment_mode,paymentReference:l.payment_reference,gstRequired:l.gst_required,company:d,installationRequired:l.installation_required,installationDate:l.installation_date}}else{const l=window.getActiveCart?window.getActiveCart():[],i=window.getSelectedCustomer?window.getSelectedCustomer():{name:"Walk-in Customer",id:null},r=window.getSaleState?window.getSaleState():{},d=(n=window.getCache().customers)==null?void 0:n.find(f=>f.id===i.id),o=l.reduce((f,b)=>f+(b.final_price||b.mop||0),0),u=l.reduce((f,b)=>f+(b.discount_amount||0),0);return l.length===0?null:{id:"DRAFT",status:"draft",customer:i.name,customerId:i.id,phone:(d==null?void 0:d.phone)||"",date:new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),time:new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})+" IST",items:l.map(f=>({name:f.name,category:f.category,price:f.mop,discount_type:f.discount_type,discount_value:f.discount_value,discount_amount:f.discount_amount,scheme_name:f.scheme_name,final_price:f.final_price||f.mop,imei:f.imei,serial_number:f.serial_number,mac_id:f.mac_id,manufacturing_date:f.manufacturing_date,installation_date:f.installation_required?f.installation_date:null,extraFields:f.extraFields||[]})),subtotal:o/1.18,gst:o-o/1.18,total:o,totalDiscount:u,paymentMode:r.paymentMode,paymentReference:r.paymentReference,gstRequired:r.gstRequired,company:r.gstRequired?{name:r.companyName,gst_number:r.gstNumber}:null,installationRequired:r.installationRequired,installationDate:r.installationDate}}}function Xi(e){let t=`INVOICE #${e.id}
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
`,t+="Powered by RetailerOS",t}function Dd(e){switch(e){case"cash":return"payments";case"card":return"credit_card";case"upi":return"qr_code";default:return"account_balance_wallet"}}function Od(e){switch(e){case"cash":return"Cash";case"card":return"Card";case"upi":return"UPI";default:return"Payment"}}function jn(){const e=p.currentTab==="history",t=Ua();if(!t)return`<div class="p-10 text-center opacity-40 flex flex-col items-center justify-center h-full">
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
                            <span class="material-icons-outlined text-sm">${Dd(t.paymentMode)}</span>
                        </div>
                        <div class="text-left">
                            <p class="text-[9px] font-black uppercase tracking-widest text-left">Paid via ${Od(t.paymentMode)}</p>
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
    `}function Va(e,t="RETAILEROS"){return`
        <header class="p-4 sm:p-8 pb-4 shrink-0 text-left">
            <div class="flex items-center justify-between mb-6 text-left">
                <button onclick="${p.clientViewMode==="directory"||p.clientViewMode==="groups"?"setApp('launcher')":"setClientMode('directory')"}" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors text-left">
                    <span class="material-icons-outlined text-left">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block text-left">${p.clientViewMode==="directory"||p.clientViewMode==="groups"?"Back":"Directory"}</span>
                </button>
                <div class="text-center translate-x-1">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900 text-center">${e}</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1 text-center">${t}</p>
                </div>
                <div class="w-10"></div>
            </div>
        </header>
    `}function ml(){const e=window.getCache(),t=e.customers||[],s=p.clientSearchQuery||"",n=[...s?t.filter(l=>l.name.toLowerCase().includes(s.toLowerCase())||l.phone&&l.phone.includes(s)||l.email&&l.email.toLowerCase().includes(s.toLowerCase())):t].sort((l,i)=>new Date(i.joined_at||0)-new Date(l.joined_at||0));return`
        ${Va("Clients","RETAILEROS")}
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
                `:n.map(l=>{var d;const i=(e.sales||[]).filter(o=>o.customer_id===l.id&&o.status!=="draft"),r=i.reduce((o,u)=>o+(u.total_amount||0),0);return(d=i[0])==null||d.date,`
                    <button type="button" onclick="window.setClientMode('profile', '${l.name.replace(/'/g,"\\'")}', '${l.id}')" class="card p-4 sm:p-5 border-2 transition-all flex items-center justify-between group cursor-pointer text-left w-full ${p.selectedClient===l.name?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
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
                                <p class="text-[7px] font-black text-slate-300 uppercase tracking-tighter text-right">${i.length} orders</p>
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
    `}window.updateClientSearch=e=>{const t=document.getElementById("client-search-input"),s=(t==null?void 0:t.selectionStart)||e.length;p.clientSearchQuery=e,window.triggerRender(!1),setTimeout(()=>{const a=document.getElementById("client-search-input");a&&(a.focus(),a.setSelectionRange(s,s))},0)};async function Ld(){const e=document.getElementById("client-name"),t=document.getElementById("client-phone"),s=document.getElementById("client-email"),a=document.getElementById("client-location");if(!e||!t){console.error("Form inputs not found"),window.toast.error("Form error. Please try again.");return}const n=e.value.trim(),l=t.value.trim(),i=s.value.trim(),r=a?a.value.trim():"";if(!n||!l){window.toast.warning("Name and Phone are required");return}const d=document.getElementById("save-client-btn");let o="";d&&(o=d.innerHTML,d.innerHTML='<span class="material-icons-outlined animate-spin text-xs">sync</span> Saving...',d.disabled=!0);try{const u="CL-"+Math.random().toString(36).substr(2,6).toUpperCase();console.log("Saving client:",{id:u,name:n,phone:l,email:i,location:r}),await C.clients.add({id:u,name:n,phone:l,email:i,location:r}),console.log("Client saved successfully"),await K(),window.toast.success("Client added successfully!"),p.currentApp==="sales"?(Yi(u,n),Nl("default")):jl("directory")}catch(u){console.error("Error saving client:",u),window.toast.error("Error saving client: "+u.message),d&&(d.innerHTML=o,d.disabled=!1)}}window.saveClient=Ld;function vn(e){const t=e==="desktop";return`
        ${t?"":Va("New Client","RETAILEROS • CLIENTS")}
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
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Full Name <span class="text-slate-900">*</span></label>
                    <input type="text" id="client-name" placeholder="e.g. Jonathan Ive" class="w-full px-5 py-4 bg-white border border-slate-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                </div>
                <div class="space-y-2 text-left">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 text-left">Mobile Number <span class="text-slate-900">*</span></label>
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
    `}function hl(e){var x;const t=e==="desktop",s=window.getCache(),a=((x=s.customers)==null?void 0:x.find(y=>y.id===p.selectedClientId||y.name===p.selectedClient))||{name:p.selectedClient||"Unknown",joined_at:new Date().toISOString()},n=a.name?a.name.split(" ").map(y=>y[0]).join("").toUpperCase():"?",l=(s.sales||[]).filter(y=>y.customer_id===a.id&&y.status!=="draft").sort((y,_)=>new Date(_.date)-new Date(y.date)),i=s.saleItems||[],r=(s.inquiries||[]).filter(y=>y.customer_id===a.id||y.customer_name===a.name),d=(s.repairs||[]).filter(y=>y.customer_id===a.id||y.customer_name===a.name),o=(s.automations||[]).filter(y=>y.customer_id===a.id),u=s.automationMessages||[],f=(s.communications||[]).filter(y=>y.customer_id===a.id),b=l.reduce((y,_)=>y+(_.total_amount||0),0),h=l.length,v=[...l.map(y=>({type:"sale",date:y.date,data:y,items:i.filter(_=>_.sale_id===y.id)})),...d.map(y=>({type:"repair",date:y.created_at||y.date,data:y})),...r.map(y=>({type:"inquiry",date:y.date||y.created_at,data:y})),...o.map(y=>({type:"automation",date:y.created_at,data:y,messages:u.filter(_=>_.automation_id===y.id)})),...f.map(y=>({type:"communication",date:y.sent_at,data:y}))].sort((y,_)=>new Date(_.date)-new Date(y.date));return`
        ${t?"":Va("Client Profile","RETAILEROS")}
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
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">₹${b.toLocaleString()}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Total Spent</p>
                </div>
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${h}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Orders</p>
                </div>
            </div>

            <!-- Timeline Section -->
            <div class="space-y-6 text-left">
                <div class="flex justify-between items-center text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Activity Timeline</h3>
                    <span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded text-right">${v.length} events</span>
                </div>

                ${v.length===0?`
                    <div class="text-center py-16 opacity-30">
                        <span class="material-icons-outlined text-4xl mb-4">history_toggle_off</span>
                        <p class="text-[10px] font-black uppercase tracking-widest leading-relaxed">No activities recorded<br>for this client yet.</p>
                    </div>
                `:`
                    <!-- Timeline -->
                    <div class="relative pl-8 sm:pl-10 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-slate-100 before:border-l before:border-dashed before:border-slate-200 text-left">
                        ${v.map(y=>{if(y.type==="sale"){const _=y.data,R=y.items;return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-600 text-center">shopping_cart</span>
                                        </div>
                                        <button type="button" onclick="window.viewClientInvoice('${_.id}')" class="card p-4 sm:p-5 group hover:border-slate-900 hover:shadow-lg transition-all text-left w-full cursor-pointer">
                                            <div class="flex justify-between items-start mb-3 text-left">
                                                <div class="text-left">
                                                    <div class="flex items-center gap-2 mb-1">
                                                        <h4 class="text-xs font-black text-slate-900 text-left">Purchase</h4>
                                                        ${_.gst_required?'<span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase">GST</span>':""}
                                                        ${_.payment_mode?`<span class="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[7px] font-black uppercase">${_.payment_mode}</span>`:""}
                                                    </div>
                                                    <p class="text-xl font-black tracking-tighter text-left">₹${(_.total_amount||0).toLocaleString()}</p>
                                                </div>
                                                <div class="flex items-center gap-2">
                                                    <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(_.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</span>
                                                    <span class="material-icons-outlined text-sm text-slate-300 group-hover:text-slate-900 transition-colors">chevron_right</span>
                                                </div>
                                            </div>
                                            <!-- Items List -->
                                            <div class="space-y-2 text-left">
                                                ${R.map(M=>`
                                                    <div class="flex justify-between items-center bg-slate-50 rounded-lg p-2">
                                                        <div class="text-left flex-1 min-w-0">
                                                            <p class="text-[10px] font-black text-slate-900 truncate">${M.product_name}</p>
                                                            <p class="text-[8px] font-bold text-slate-400 uppercase">${M.category||"Product"}</p>
                                                        </div>
                                                        <p class="text-[10px] font-black text-slate-600 ml-2">₹${(M.price||0).toLocaleString()}</p>
                                                    </div>
                                                `).join("")}
                                            </div>
                                            ${_.installation_required?`
                                                <div class="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 text-[9px] font-bold text-slate-500">
                                                    <span class="material-icons-outlined text-xs">build</span>
                                                    Installation ${_.installation_date?`on ${new Date(_.installation_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}`:"Required"}
                                                </div>
                                            `:""}
                                        </button>
                                    </div>
                                `}if(y.type==="repair"){const _=y.data;return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-500 text-center">build</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 group hover:border-slate-300 transition-all text-left">
                                            <div class="flex justify-between items-start mb-2 text-left">
                                                <div class="text-left">
                                                    <h4 class="text-xs font-black text-slate-900 text-left">Device Repair</h4>
                                                    <p class="text-lg font-black tracking-tighter text-left">₹${_.cost||"Estimating"}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(_.created_at||_.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</span>
                                            </div>
                                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">${_.device_model||"Device"} • ${_.status||"In Progress"}</p>
                                        </div>
                                    </div>
                                `}if(y.type==="inquiry"){const _=y.data;return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-400 text-center">info</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 flex justify-between items-start group hover:border-slate-300 transition-all text-left">
                                            <div class="text-left">
                                                <h4 class="text-xs font-black text-slate-900 text-left">Inquiry</h4>
                                                <p class="text-[11px] font-bold text-slate-500 text-left">${_.request||"Product Interest"}</p>
                                                <div class="flex items-center gap-1 mt-2 text-left">
                                                    <div class="w-1.5 h-1.5 ${_.status==="PENDING"||_.status==="pending"?"bg-slate-400":"bg-slate-900"} rounded-full text-left"></div>
                                                    <p class="text-[8px] font-black text-slate-400 uppercase text-left">${_.status||"Open"}</p>
                                                </div>
                                            </div>
                                            <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(_.date||_.created_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</span>
                                        </div>
                                    </div>
                                `}if(y.type==="automation"){const _=y.data,R=y.messages||[],M=R.filter(O=>O.status==="sent").length,E=R.filter(O=>O.status==="pending").length;return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-slate-900 border border-slate-900 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-white text-center">smart_toy</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 group hover:border-slate-300 transition-all text-left border-l-4 border-l-slate-900">
                                            <div class="flex justify-between items-start mb-2 text-left">
                                                <div class="text-left">
                                                    <div class="flex items-center gap-2 mb-1">
                                                        <h4 class="text-xs font-black text-slate-900 text-left">Automation</h4>
                                                        <span class="bg-slate-900 text-white px-1.5 py-0.5 rounded text-[7px] font-black uppercase">${_.status}</span>
                                                    </div>
                                                    <p class="text-sm font-black tracking-tight text-left">${_.name}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right">${new Date(_.created_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</span>
                                            </div>
                                            <div class="flex items-center gap-3 mt-3 text-left">
                                                <div class="flex items-center gap-1 text-[9px] font-bold text-slate-500">
                                                    <span class="material-icons-outlined text-xs">check_circle</span>
                                                    ${M} sent
                                                </div>
                                                <div class="flex items-center gap-1 text-[9px] font-bold text-slate-400">
                                                    <span class="material-icons-outlined text-xs">schedule</span>
                                                    ${E} scheduled
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `}if(y.type==="communication"){const _=y.data,R=_.type==="whatsapp"?"chat":_.type==="call"?"call":"mail",M=_.type==="whatsapp"?"WhatsApp":_.type==="call"?"Phone Call":"Email";return`
                                    <div class="relative text-left">
                                        <div class="absolute -left-8 sm:-left-10 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-white border border-slate-100 rounded-xl flex items-center justify-center z-10 shadow-sm text-center">
                                            <span class="material-icons-outlined text-xs text-slate-500 text-center">${R}</span>
                                        </div>
                                        <div class="card p-4 sm:p-5 group hover:border-slate-300 transition-all text-left">
                                            <div class="flex justify-between items-start mb-2 text-left">
                                                <div class="text-left flex-1 min-w-0">
                                                    <div class="flex items-center gap-2 mb-1">
                                                        <h4 class="text-xs font-black text-slate-900 text-left">${M}</h4>
                                                        <span class="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[7px] font-black uppercase">${_.direction}</span>
                                                        ${_.status==="delivered"?'<span class="text-slate-400"><span class="material-icons-outlined text-xs">done_all</span></span>':""}
                                                    </div>
                                                    <p class="text-[10px] font-bold text-slate-500 text-left line-clamp-2">${_.content}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 tabular-nums uppercase tracking-widest text-right shrink-0 ml-2">${new Date(_.sent_at).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}</span>
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
    `}const Zi=e=>`${e}-${Math.random().toString(36).substr(2,8).toUpperCase()}`;let B={name:"",description:"",isCompany:!1,gstNumber:"",contactPerson:""};function jd(){B={name:"",description:"",isCompany:!1,gstNumber:"",contactPerson:""}}window.updateGroupForm=(e,t)=>{B[e]=t,e==="isCompany"&&window.triggerRender(!1)};window.toggleGroupIsCompany=()=>{B.isCompany=!B.isCompany,window.triggerRender(!1)};window.saveGroup=async()=>{if(!B.name.trim()){window.toast.warning("Please enter a group name");return}const e=document.getElementById("save-group-btn");e&&(e.disabled=!0,e.innerHTML='<span class="material-icons-outlined animate-spin text-xs">sync</span> Saving...');try{const t=Zi("GRP");await C.groups.add({id:t,name:B.name.trim(),description:B.description.trim(),is_company:B.isCompany?1:0,gst_number:B.isCompany?B.gstNumber.trim():null,contact_person:B.isCompany?B.contactPerson.trim():null,created_at:new Date().toISOString()}),jd(),await K(),p.groupViewMode="list",p.selectedGroupId=t,window.toast.success(`${B.isCompany?"Company":"Group"} created successfully!`),window.triggerRender()}catch(t){console.error("Error saving group:",t),window.toast.error("Error saving group: "+t.message),e&&(e.disabled=!1,e.innerHTML="Create Group")}};window.deleteGroup=async e=>{window.showConfirm("Are you sure you want to delete this group? All member associations will be removed.",async()=>{try{await C.groups.deleteMembers(e),await C.groups.delete(e),await K(),p.selectedGroupId=null,p.groupViewMode="list",window.toast.success("Group deleted successfully"),window.triggerRender()}catch(t){console.error("Error deleting group:",t),window.toast.error("Error deleting group: "+t.message)}})};window.addMemberToGroup=async(e,t)=>{try{await C.groups.addMember({id:Zi("GM"),group_id:e,customer_id:t,added_at:new Date().toISOString()}),await K(),window.toast.success("Member added"),window.triggerRender(!1)}catch(s){console.error("Error adding member:",s),window.toast.error("Error adding member: "+s.message)}};window.removeMemberFromGroup=async(e,t)=>{try{await C.groups.removeMember(e,t),await K(),window.toast.info("Member removed"),window.triggerRender(!1)}catch(s){console.error("Error removing member:",s),window.toast.error("Error removing member: "+s.message)}};window.updateGroupSearch=e=>{const t=document.getElementById("group-search-input"),s=(t==null?void 0:t.selectionStart)||e.length;p.groupSearchQuery=e,window.triggerRender(!1),setTimeout(()=>{const a=document.getElementById("group-search-input");a&&(a.focus(),a.setSelectionRange(s,s))},0)};function Pd(){const e=window.getCache(),t=e.groups||[],s=e.groupMembers||[],a=p.groupSearchQuery||"",n=a?t.filter(r=>r.name.toLowerCase().includes(a.toLowerCase())||r.description&&r.description.toLowerCase().includes(a.toLowerCase())):t,l=n.filter(r=>r.is_company===1),i=n.filter(r=>r.is_company!==1);return`
        ${Va("Groups","RETAILEROS")}
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
                    ${n.length} Total • ${l.length} Companies • ${i.length} Groups
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
                            ${l.map(r=>{const d=s.filter(o=>o.group_id===r.id).length;return`
                                    <button type="button" onclick="window.setSelectedGroup('${r.id}'); window.setGroupViewMode('detail');" class="card p-4 sm:p-5 border-2 transition-all flex items-center justify-between group cursor-pointer text-left w-full mb-3 ${p.selectedGroupId===r.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
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
                                            <p class="text-xs font-black text-slate-900 tracking-tighter text-right">${d}</p>
                                            <p class="text-[7px] font-black text-slate-300 uppercase tracking-tighter text-right">Members</p>
                                        </div>
                                    </button>
                                `}).join("")}
                        </div>
                    `:""}
                    
                    ${i.length>0?`
                        <div class="pt-2">
                            <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-3">Groups</p>
                            ${i.map(r=>{const d=s.filter(o=>o.group_id===r.id).length;return`
                                    <button type="button" onclick="window.setSelectedGroup('${r.id}'); window.setGroupViewMode('detail');" class="card p-4 sm:p-5 border-2 transition-all flex items-center justify-between group cursor-pointer text-left w-full mb-3 ${p.selectedGroupId===r.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
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
                                            <p class="text-xs font-black text-slate-900 tracking-tighter text-right">${d}</p>
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
    `}function Nd(){return`
        <div class="h-full flex flex-col">
            <!-- Header -->
            <div class="p-6 border-b border-slate-100 flex items-center justify-between shrink-0">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center">
                        <span class="material-icons-outlined text-white">add</span>
                    </div>
                    <div>
                        <h2 class="text-lg font-black text-slate-900 tracking-tighter">New ${B.isCompany?"Company":"Group"}</h2>
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
                        <div class="w-10 h-10 ${B.isCompany?"bg-slate-900":"bg-slate-100"} rounded-xl flex items-center justify-center transition-all">
                            <span class="material-icons-outlined text-lg ${B.isCompany?"text-white":"text-slate-400"}">${B.isCompany?"business":"group"}</span>
                        </div>
                        <div>
                            <h3 class="text-sm font-black text-slate-900">${B.isCompany?"Company":"Group"}</h3>
                            <p class="text-[9px] font-bold text-slate-400">${B.isCompany?"B2B with GST":"For marketing"}</p>
                        </div>
                    </div>
                    <button type="button" onclick="window.toggleGroupIsCompany()" class="w-11 h-6 ${B.isCompany?"bg-slate-900":"bg-slate-200"} rounded-full relative transition-all">
                        <div class="absolute top-0.5 ${B.isCompany?"right-0.5":"left-0.5"} w-5 h-5 bg-white rounded-full shadow transition-all"></div>
                    </button>
                </div>

                <!-- Form Fields -->
                <div class="space-y-2">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">${B.isCompany?"Company Name":"Group Name"} <span class="text-slate-300">*</span></label>
                    <input type="text" 
                           value="${B.name}"
                           oninput="window.updateGroupForm('name', this.value)" 
                           placeholder="${B.isCompany?"e.g. Reliance Industries":"e.g. VIP Customers"}" 
                           class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                </div>

                <div class="space-y-2">
                    <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Description</label>
                    <textarea 
                           oninput="window.updateGroupForm('description', this.value)" 
                           placeholder="${B.isCompany?"Company details, address...":"Purpose of this group..."}" 
                           rows="2"
                           class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all resize-none">${B.description}</textarea>
                </div>

                ${B.isCompany?`
                    <div class="space-y-2">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">GST Number</label>
                        <input type="text" 
                               value="${B.gstNumber}"
                               oninput="window.updateGroupForm('gstNumber', this.value.toUpperCase())" 
                               placeholder="e.g. 27AAACR3456D1Z5" 
                               maxlength="15"
                               class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold uppercase focus:outline-none focus:border-slate-900 transition-all">
                    </div>

                    <div class="space-y-2">
                        <label class="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Contact Person</label>
                        <input type="text" 
                               value="${B.contactPerson}"
                               oninput="window.updateGroupForm('contactPerson', this.value)" 
                               placeholder="e.g. Mukesh Ambani" 
                               class="w-full px-4 py-3 bg-white border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                    </div>
                `:""}

                <!-- Save Button -->
                <button type="button" id="save-group-btn" onclick="window.saveGroup()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4">
                    Create ${B.isCompany?"Company":"Group"}
                    <span class="material-icons-outlined text-xs">arrow_forward</span>
                </button>
            </div>
        </div>
    `}function qd(){const e=window.getCache(),t=e.groups||[],s=e.groupMembers||[],a=e.customers||[],n=e.sales||[],l=t.find(u=>u.id===p.selectedGroupId);if(!l)return`
            <div class="h-full flex items-center justify-center text-slate-300 text-center p-8">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50">error_outline</span>
                    <p class="text-[10px] font-black uppercase tracking-widest">Group not found</p>
                </div>
            </div>
        `;const i=s.filter(u=>u.group_id===l.id).map(u=>u.customer_id),r=a.filter(u=>i.includes(u.id)),o=n.filter(u=>i.includes(u.customer_id)&&u.status!=="draft").reduce((u,f)=>u+(f.total_amount||0),0);return`
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
                            ${r.map(u=>{const b=n.filter(h=>h.customer_id===u.id&&h.status!=="draft").reduce((h,v)=>h+(v.total_amount||0),0);return`
                                    <div class="card p-3 flex items-center justify-between">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-black text-[8px] text-slate-400">${u.name.split(" ").map(h=>h[0]).join("").toUpperCase()}</div>
                                            <div>
                                                <p class="text-xs font-black text-slate-900">${u.name}</p>
                                                <p class="text-[9px] font-bold text-slate-400">${u.phone||"No phone"}</p>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2">
                                            ${b>0?`<span class="text-[9px] font-black text-slate-500">₹${b.toLocaleString()}</span>`:""}
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
    `}function Bd(){const e=window.getCache(),t=e.groups||[],s=e.groupMembers||[],a=e.customers||[],n=t.find(r=>r.id===p.selectedGroupId);if(!n)return p.groupViewMode="list","";const l=s.filter(r=>r.group_id===n.id).map(r=>r.customer_id),i=a.filter(r=>!l.includes(r.id));return`
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
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Available Clients (${i.length})</h3>
                
                ${i.length===0?`
                    <div class="card p-8 border-dashed border-slate-200 text-center">
                        <span class="material-icons-outlined text-2xl text-slate-200 mb-2">check_circle</span>
                        <p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">All clients are members</p>
                    </div>
                `:`
                    <div class="space-y-2">
                        ${i.map(r=>`
                            <div class="card p-3 flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-black text-[8px] text-slate-400">${r.name.split(" ").map(d=>d[0]).join("").toUpperCase()}</div>
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
    `}function gl(){return Pd()}function vl(){switch(p.groupViewMode){case"create":return Nd();case"detail":return qd();case"add-members":return Bd();default:return`
                <div class="h-full flex items-center justify-center text-slate-300 text-center p-8">
                    <div class="text-center">
                        <span class="material-icons-outlined text-4xl mb-2 opacity-50">group</span>
                        <p class="text-[10px] font-black uppercase tracking-widest">Select a group to view details</p>
                    </div>
                </div>
            `}}function Fd(e){switch(e){case"cash":return"payments";case"card":return"credit_card";case"upi":return"qr_code";default:return"account_balance_wallet"}}function Ud(e){switch(e){case"cash":return"Cash";case"card":return"Card";case"upi":return"UPI";default:return"Payment"}}function wl(e="desktop"){var u,f;const t=window.getCache(),s=p.clientInvoiceId,a=(t.sales||[]).find(b=>b.id===s);if(!a)return`
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50">receipt_long</span>
                    <p class="text-[10px] font-black uppercase tracking-widest">Invoice not found</p>
                </div>
            </div>
        `;const n=(t.saleItems||[]).filter(b=>b.sale_id===a.id),l=(u=t.customers)==null?void 0:u.find(b=>b.id===a.customer_id),i=a.company_id?(f=t.companies)==null?void 0:f.find(b=>b.id===a.company_id):null,r=a.total_amount||0,d=n.map(b=>{let h=[];if(b.extra_fields)try{h=JSON.parse(b.extra_fields)}catch{}return{name:b.product_name,category:b.category||"Standard",price:b.price,imei:b.imei,serial_number:b.serial_number,mac_id:b.mac_id,manufacturing_date:b.manufacturing_date,installation_date:b.installation_date,extraFields:h}}),o={id:a.id,status:a.status,customer:a.customer_name,phone:(l==null?void 0:l.phone)||"N/A",date:new Date(a.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}),time:new Date(a.date).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0})+" IST",items:d,subtotal:r/1.18,gst:r-r/1.18,total:r,paymentMode:a.payment_mode,paymentReference:a.payment_reference,gstRequired:a.gst_required,company:i,installationRequired:a.installation_required,installationDate:a.installation_date};return`
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
                        ${o.items.map(b=>`
                            <div class="pb-4 border-b border-slate-100 last:border-0">
                                <div class="flex justify-between items-start mb-2">
                                    <div class="flex-1 min-w-0">
                                        <h4 class="text-sm font-black text-slate-900 truncate">${b.name}</h4>
                                        <p class="text-[9px] font-bold text-slate-400 uppercase mt-0.5">${b.category}</p>
                                    </div>
                                    <p class="text-sm font-black text-slate-900 shrink-0 ml-2">₹${parseInt(b.price).toLocaleString()}</p>
                                </div>
                                ${b.imei||b.serial_number||b.mac_id||b.installation_date||b.extraFields&&b.extraFields.length>0?`
                                    <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 mt-2">
                                        <div class="flex items-center gap-2 text-[8px] font-black text-slate-500 uppercase tracking-widest mb-2">
                                            <span class="material-icons-outlined text-xs">verified</span> Device Info
                                        </div>
                                        <div class="grid grid-cols-2 gap-2">
                                            ${b.imei?`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">IMEI</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${b.imei}</p>
                                                </div>
                                            `:""}
                                            ${b.serial_number?`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">Serial</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${b.serial_number}</p>
                                                </div>
                                            `:""}
                                            ${b.mac_id?`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">MAC ID</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${b.mac_id}</p>
                                                </div>
                                            `:""}
                                            ${b.manufacturing_date?`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">Mfg. Date</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${new Date(b.manufacturing_date).toLocaleDateString("en-GB",{month:"short",year:"numeric"})}</p>
                                                </div>
                                            `:""}
                                            ${(b.extraFields||[]).map(h=>`
                                                <div>
                                                    <p class="text-[7px] font-bold text-slate-400 uppercase">${h.label}</p>
                                                    <p class="text-[9px] font-black text-slate-700 tabular-nums">${h.value}</p>
                                                </div>
                                            `).join("")}
                                            ${b.installation_date?`
                                                <div class="col-span-2 pt-2 mt-2 border-t border-slate-200">
                                                    <p class="text-[7px] font-bold text-slate-500 uppercase flex items-center gap-1">
                                                        <span class="material-icons-outlined text-[10px]">build</span> Installation Date
                                                    </p>
                                                    <p class="text-[9px] font-black text-slate-700">${new Date(b.installation_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</p>
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
                                    <span class="material-icons-outlined text-sm">${Fd(o.paymentMode)}</span>
                                </div>
                                <div>
                                    <p class="text-[9px] font-black uppercase tracking-widest">Paid via ${Ud(o.paymentMode)}</p>
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
    `}window.shareInvoiceWhatsApp=e=>{var r,d;const t=window.getCache(),s=(t.sales||[]).find(o=>o.id===e);if(!s)return;const a=(r=t.customers)==null?void 0:r.find(o=>o.id===s.customer_id),n=(t.saleItems||[]).filter(o=>o.sale_id===s.id);let l=`INVOICE #${s.id}
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
`,l+="Powered by RetailerOS";const i=`https://wa.me/${((d=a==null?void 0:a.phone)==null?void 0:d.replace(/\D/g,""))||""}?text=${encodeURIComponent(l)}`;window.open(i,"_blank")};function Pn(e){const t=e==="desktop-secondary",s=e==="desktop-primary";return t?p.clientViewMode==="add"?vn("desktop"):p.clientViewMode==="invoice"?wl("desktop"):p.clientViewMode==="profile"?hl("desktop"):p.clientViewMode==="groups"?vl():`
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50 text-center">person_search</span>
                    <p class="text-[10px] font-black uppercase tracking-widest text-center">Select a client to view profile</p>
                </div>
            </div>
        `:s?p.clientViewMode==="groups"?gl():ml():p.clientViewMode==="add"?vn("mobile"):p.clientViewMode==="invoice"?wl("mobile"):p.clientViewMode==="profile"?hl("mobile"):p.clientViewMode==="groups"?p.groupViewMode==="detail"||p.groupViewMode==="create"||p.groupViewMode==="add-members"?vl():gl():ml()}const Ya=(e,t,s=[])=>`
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
                ${s.map(a=>`<button onclick="setReportsTab('${a}')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${p.reportsTab===a?"bg-white shadow-sm text-slate-900":"text-slate-400"}">${a.toUpperCase()}</button>`).join("")}
            </div>
        `:""}
    </header>
`;function Vd(){var a;const e=window.getCache(),t=[{t:"Total Sales",v:e.sales?`₹${e.sales.reduce((n,l)=>n+parseInt(l.amount||l.total_amount),0).toLocaleString()}`:"₹0",p:e.sales?`+${e.sales.length}`:"0",i:"account_balance_wallet"},{t:"Clients",v:e.customers?e.customers.length.toLocaleString():"0",p:"Total",i:"group"},{t:"Inquiries",v:e.inquiries?e.inquiries.length.toLocaleString():"0",p:"Pending",i:"chat_bubble"},{t:"Repairs",v:e.repairs?e.repairs.length.toLocaleString():"0",p:"Active",i:"settings"},{t:"Schemes",v:e.schemes?`${e.schemes.length} Active`:"0",p:"Live",i:"percent"},{t:"Inventory",v:e.products?`₹${(e.products.reduce((n,l)=>n+parseInt(l.price)*parseInt(l.stock),0)/1e7).toFixed(1)}Cr`:"₹0",p:"Stock Value",i:"inventory_2"},{t:"Campaigns",v:e.campaigns?e.campaigns.length.toLocaleString():"0",p:"Pre-booking",i:"rocket_launch"},{t:"Automations",v:e.automations?e.automations.length.toLocaleString():"0",p:"Live",i:"bolt"}],s=`
        <div class="flex items-center gap-12 text-[13px] font-bold text-slate-600 pr-12 text-left">
            <span><strong class="text-slate-900 uppercase tracking-widest text-[10px]">Real-time Intelligence:</strong> Connected to Turso DB. Syncing ${t.reduce((n,l)=>n+parseInt(l.v.toString().replace(/[^0-9]/g,"")||0),0).toLocaleString()} data points.</span>
            <span class="w-1.5 h-1.5 bg-slate-200 rounded-full shrink-0"></span>
            <span><strong class="text-slate-900 uppercase tracking-widest text-[10px]">Sales Performance:</strong> Weekend footfall has surged by <strong class="text-slate-900">14.5%</strong> compared to the previous cycle.</span>
            <span class="w-1.5 h-1.5 bg-slate-200 rounded-full shrink-0"></span>
            <span><strong class="text-slate-900 uppercase tracking-widest text-[10px]">Automations:</strong> Lead generation is currently processing <strong class="text-slate-900">${((a=e.inquiries)==null?void 0:a.length)||0} active inquiries</strong>.</span>
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
                        <span class="text-[8px] font-black uppercase tracking-tighter ${n.p==="Live"||n.p.startsWith("+")?"text-slate-900":"text-slate-400"}">${n.p}</span>
                    </div>
                    <div>
                        <h4 class="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1 text-left">${n.t}</h4>
                        <p class="text-lg font-black tracking-tighter text-slate-900 text-left">${n.v}</p>
                    </div>
                </div>
            `).join("")}
        </div>
    `}function Hd(){return`<div class="card p-8 space-y-8 text-left"><div class="flex justify-between items-start text-left"><div class="text-left"><p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Revenue (30D)</p><h2 class="text-4xl font-black tracking-tighter text-slate-900 text-left">₹42.8L</h2></div><div class="bg-slate-100 px-2 py-1 rounded-lg flex items-center gap-1"><span class="material-icons-outlined text-[10px] text-slate-900">trending_up</span><span class="text-[10px] font-black text-slate-900">+12.4%</span></div></div><div class="h-48 relative border-b border-slate-100 flex items-end justify-between px-2"><div class="absolute inset-0 flex items-center justify-center opacity-10"><h2 class="font-black text-8xl tracking-tighter text-slate-400">OS</h2></div><svg class="w-full h-full text-slate-900" viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M0 35 L20 30 L40 32 L60 15 L80 20 L100 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg><div class="absolute bottom-0 left-0 text-[8px] text-slate-300 font-black uppercase">01 Oct</div><div class="absolute bottom-0 left-1/2 -translate-x-1/2 text-[8px] text-slate-300 font-black uppercase">15 Oct</div><div class="absolute bottom-0 right-0 text-[8px] text-slate-300 font-black uppercase">30 Oct</div></div></div><div class="grid grid-cols-2 gap-4"><div class="card p-6 space-y-4 text-left"><div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center"><span class="material-icons-outlined text-slate-400 text-left">shopping_bag</span></div><div><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Avg Order Value</p><h4 class="text-xl font-black text-slate-900 text-left">₹18.2K</h4><p class="text-[8px] font-black text-slate-300 uppercase mt-1 text-left">vs ₹16.4K last month</p></div></div><div class="card p-6 space-y-4 text-left"><div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center"><span class="material-icons-outlined text-slate-400 text-left">category</span></div><div><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Top Category</p><h4 class="text-xl font-black text-slate-900 text-left">Smartphones</h4></div></div></div><section class="space-y-4 text-left"><div class="flex justify-between items-center px-1"><h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Daily Sales List</h3><button class="text-[8px] font-black text-slate-900 uppercase border-b border-slate-900">Export CSV</button></div><div class="space-y-3 text-left">${[{d:"Today, 24 Oct",c:"14 Orders",v:"₹1.42L",p:"+4.2%"},{d:"Yesterday, 23 Oct",c:"11 Orders",v:"₹1.18L",p:"-2.1%"},{d:"22 Oct",c:"18 Orders",v:"₹2.33L",p:"+1.8%"}].map(e=>`<div class="card p-5 group hover:bg-slate-50 transition-all cursor-pointer flex justify-between items-center"><div class="text-left"><h4 class="text-sm font-black text-slate-900 text-left">${e.d}</h4><p class="text-[10px] font-bold text-slate-400 capitalize -mt-0.5 text-left">${e.c}</p></div><div class="text-right"><p class="text-sm font-black text-slate-900 text-right">${e.v}</p><p class="text-[9px] font-black ${e.p.startsWith("+")?"text-slate-900":"text-slate-400"} uppercase text-right">${e.p}</p></div></div>`).join("")}</div></section>`}function Gd(){return`<div class="grid grid-cols-2 gap-4 text-left"><div class="card p-6 space-y-3 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Blocked Capital</p><h3 class="text-xl font-black text-slate-900 text-left">₹84.2L</h3><p class="text-[8px] font-black text-slate-500 uppercase flex items-center gap-1 text-left"><span class="animate-pulse">●</span> +2.4% vs last mo.</p></div><div class="card p-6 space-y-3 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Ageing > 90D</p><h3 class="text-xl font-black text-slate-900 text-left">124 <span class="text-[10px] font-bold text-slate-400 uppercase text-left">Units</span></h3><p class="text-[8px] font-black text-slate-500 uppercase text-left">12.1% of total stock</p></div></div><div class="card p-8 space-y-6 text-left"><div class="flex justify-between items-center mb-2 text-left"><h3 class="text-[10px] font-black text-slate-900 uppercase tracking-widest text-left">Stock Distribution</h3><span class="material-icons-outlined text-slate-300 text-sm">info</span></div><div class="flex items-center gap-10 text-left"><div class="relative w-32 h-32 flex items-center justify-center text-left"><svg class="w-full h-full transform -rotate-90"><circle cx="64" cy="64" r="54" stroke="#f8fafc" stroke-width="20" fill="transparent" /><circle cx="64" cy="64" r="54" stroke="#0f172a" stroke-width="20" stroke-dasharray="340" stroke-dashoffset="100" fill="transparent" stroke-linecap="round" /></svg><div class="absolute text-center"><p class="text-[8px] font-black text-slate-400 uppercase leading-none mb-1 text-left">Total</p><p class="text-xl font-black tracking-tighter text-left">1,024</p></div></div><div class="flex-1 space-y-3 text-left">${[{l:"Apple",p:"45%",c:"bg-slate-900"},{l:"OnePlus",p:"25%",c:"bg-slate-500"},{l:"Samsung",p:"15%",c:"bg-slate-300"},{l:"Others",p:"15%",c:"bg-slate-100"}].map(e=>`<div class="flex items-center justify-between text-left"><div class="flex items-center gap-2 text-left"><div class="w-2 h-2 rounded-full ${e.c}"></div><span class="text-[10px] font-black text-slate-500 text-left">${e.l}</span></div><span class="text-[10px] font-black text-slate-900 text-right">${e.p}</span></div>`).join("")}</div></div></div><section class="space-y-4 text-left"><div class="flex justify-between items-center px-1 text-left"><h3 class="text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Low Stock Alerts</h3><span class="bg-slate-100 text-slate-500 text-[8px] font-black px-2 py-0.5 rounded uppercase text-left">5 Critical</span></div><div class="space-y-3 text-left">${[{n:"iPhone 15 Pro - 256GB",s:"SKU: APP-15P-256-NG",q:"2 Left",r:"Reorder pt: 5"},{n:"Watch Series 9 - 45mm",s:"SKU: APP-W9-45-ST",q:"0 Left",r:"Reorder pt: 3"},{n:"AirPods Pro (2nd Gen)",s:"SKU: APP-AP2-MGS",q:"8 Left",r:"Reorder pt: 10"}].map(e=>`<div class="card p-5 relative group hover:border-slate-300 transition-all cursor-pointer flex justify-between items-start text-left"><div><h4 class="text-sm font-black text-slate-900 text-left">${e.n}</h4><p class="text-[9px] font-bold text-slate-400 uppercase mt-0.5 text-left">${e.s}</p></div><div class="text-right"><p class="text-xs font-black text-slate-500 uppercase text-right">${e.q}</p><p class="text-[8px] font-bold text-slate-300 uppercase mt-0.5 text-right">${e.r}</p></div></div>`).join("")}</div><button class="w-full py-4 text-[9px] font-black text-slate-300 uppercase underline decoration-slate-200 underline-offset-8 text-left">View All Alerts</button></section>`}function Wd(){return'<section class="space-y-6 text-left"><h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Campaign Performance</h3><div class="card p-8 space-y-6 text-left"><div class="flex justify-between items-start text-left"><div><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Campaign Conversion Rate</p><h2 class="text-4xl font-black tracking-tighter text-slate-900 text-left">24.8%</h2></div><span class="bg-slate-100 text-slate-900 text-[8px] font-black px-2 py-1 rounded-lg text-left">+3.2%</span></div><div class="space-y-3 text-left"><div class="h-2.5 w-full bg-slate-50 rounded-full overflow-hidden text-left"><div class="h-full bg-slate-500 rounded-full shadow-inner text-left" style="width: 24.8%"></div></div><p class="text-[9px] font-bold text-slate-400 italic text-left">Derived from pre-booking landing pages</p></div></div><div class="card p-8 space-y-6 text-left"><div class="flex justify-between items-center text-left"><p class="text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">AI Image Usage</p><span class="material-symbols-outlined text-slate-200 text-xl text-left">grid_guides</span></div><div class="flex items-center justify-between text-left"><h2 class="text-5xl font-black tracking-tighter text-slate-900 text-left">1,284</h2><div class="flex flex-col items-end gap-1 text-left"><div class="w-24 h-2 bg-slate-50 rounded-full overflow-hidden border border-slate-100/50 text-left"><div class="h-full bg-slate-900 rounded-full text-left" style="width: 65%"></div></div><p class="text-[10px] font-black text-slate-300 tabular-nums text-left">65%</p></div></div></div><div class="space-y-4 text-left"><p class="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1 text-left">Automation Metrics</p><div class="grid grid-cols-2 gap-4 text-left"><div class="card p-6 space-y-4 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Retention Rate</p><h4 class="text-2xl font-black text-slate-900 tracking-tighter text-left">88.4%</h4><div class="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden text-left"><div class="h-full bg-slate-700 text-left" style="width: 88.4%"></div></div></div><div class="card p-6 space-y-4 text-left"><p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">Upsell Conv.</p><h4 class="text-2xl font-black text-slate-900 tracking-tighter text-left">12.5%</h4><div class="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden text-left"><div class="h-full bg-slate-500 text-left" style="width: 12.5%"></div></div></div></div></div></section>'}function Nn(e){const t={overview:{t:"Reports",s:"Business Intelligence"},sales:{t:"Sales",s:"Deep-Dive Analytics"},inventory:{t:"Inventory",s:"Stock & Logistics"},marketing:{t:"Marketing",s:"Campaign Insights"}},s={overview:Vd(),sales:Hd(),inventory:Gd(),marketing:Wd()};if(e==="desktop-primary")return`
            ${Ya(t.overview.t,t.overview.s)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${s.overview}
            </div>
        `;if(e==="desktop-secondary"){const n=p.reportsTab==="overview"?"sales":p.reportsTab;return`
            ${Ya(t[n].t,t[n].s,["sales","inventory","marketing"])}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${s[n]}
            </div>
        `}const a=t[p.reportsTab]||t.overview;return`
        ${Ya(a.t,a.s,["overview","sales","inventory","marketing"])}
        <div class="scrolling-content px-8 space-y-8 pb-12">
            ${s[p.reportsTab]}
        </div>
    `}const Ja=(e,t,s="",a=!1)=>`
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
                <button onclick="setRepairTab('active')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${p.repairTab==="active"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">Active Jobs</button>
                <button onclick="setRepairTab('history')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all ${p.repairTab==="history"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">History</button>
            </div>
        `:""}
    </header>
`;window.setRepairCustomer=(e,t)=>{p.repairContext={customer_name:e,customer_phone:t},D()};function zd(){const e=document.getElementById("repair-search-input"),t=e?e.value.trim():"",s=window.getCache?window.getCache():{customers:[]},a=t?s.customers.filter(n=>n.name.toLowerCase().includes(t.toLowerCase())||n.phone.includes(t)):[];return`
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
    `}async function Yd(){const e=p.repairContext||{customer_name:"Walk-in",customer_phone:""},t=document.getElementById("repair-device").value,s=document.getElementById("repair-issue").value,a=document.getElementById("repair-cost").value;if(!t||!s){alert("Device and Issue are required.");return}const n=document.getElementById("create-job-btn");n.disabled=!0,n.innerText="Creating...";try{const l="REP-"+Math.random().toString(36).substr(2,6).toUpperCase();await C.repairs.add({id:l,customer_name:e.customer_name,phone:e.customer_phone,device:t,issue:s,status:"COLLECTED",job_sheet_no:l,estimated_cost:a||"0",assigned_to:"Unassigned",created_at:new Date().toISOString()}),await K(),window.setActiveRepairJob(l),window.setRepairMode("status")}catch(l){alert("Error creating job: "+l.message),n.disabled=!1,n.innerText="Create Job Sheet"}}window.createJobSheet=Yd;window.setActiveRepairJob=e=>{p.activeRepairId=e};function Jd(){const e=p.repairContext||{customer_name:"New Walk-in",customer_phone:""};return`
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
    `}async function Kd(e){if(p.activeRepairId)try{await C.repairs.updateStatus(p.activeRepairId,e),await K()}catch(t){alert("Update failed: "+t.message)}}window.updateRepairStatus=Kd;function Qd(){const e=window.getCache(),t=e.repairs.find(n=>n.id===p.activeRepairId)||e.repairs[0];if(!t)return'<div class="p-20 text-center opacity-30 text-[10px] font-black uppercase">No active job selected</div>';const s=[{l:"Collected",s:"COLLECTED",i:"done"},{l:"Sent to Brand",s:"SENT_TO_BRAND",i:"shipping"},{l:"At Service Center",s:"IN_REPAIR",i:"build"},{l:"Ready for Pickup",s:"READY",i:"check_circle"},{l:"Handed Over",s:"COMPLETED",i:"person"}],a=s.findIndex(n=>n.s===t.status);return`
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
                    ${s.map((n,l)=>{const i=l<=a,r=l===a;return`
                        <div class="flex items-start gap-8 relative text-left">
                            <div class="w-5 h-5 rounded-full flex items-center justify-center z-10 shrink-0 text-left ${i?"bg-slate-900 text-white":"bg-slate-100 border border-slate-200"}">
                                <span class="material-icons-outlined text-[12px] font-black text-left">${i?"done":""}</span>
                            </div>
                            <div class="text-left ${i?"":"opacity-30"}">
                                <h4 class="text-xs font-black text-slate-900 text-left ${r?"text-slate-900 underline underline-offset-4":""}">${n.l}</h4>
                                <p class="text-[9px] font-bold text-slate-400 mt-1 uppercase tracking-tighter text-left">
                                    ${r?"CURRENT STATUS":i?"COMPLETED":"PENDING"}
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
    `}function yl(){const t=window.getCache().repairs||[];return`
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
                            <span class="text-[9px] font-black uppercase text-right ${s.status==="COMPLETED"?"text-slate-900":"text-slate-400"}">${s.status}</span>
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
    `}function qn(e){const t={search:{t:"RetailerOS",s:"Repairs Management",txn:null},intake:{t:"Device Intake",s:"Repair Management",txn:"TXN-4920"},status:{t:"Job ID: #REP-2024",s:"Repair Assignment",badge:"ACTIVE"},history:{t:"Job History",s:"Service Records",badge:null}},s={search:zd(),intake:Jd(),status:Qd()};if(e==="desktop-primary")return`
            ${Ja(t.search.t,t.search.s,'<button class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900"><span class="material-icons-outlined text-xl">notifications</span></button>',!0)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${p.repairTab==="active"?s.search:yl()}
            </div>
        `;if(e==="desktop-secondary"){const i=p.repairViewMode==="search"?"status":p.repairViewMode,r=t[i],d=i==="intake"?`<span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded">${r.txn}</span>`:`<span class="bg-slate-200 text-slate-600 text-[8px] font-black px-2 py-1 rounded-full">${r.badge}</span>`;return`
            ${Ja(r.t,r.s,d)}
            <div class="scrolling-content px-8 space-y-8 pb-12">
                ${p.repairTab==="history"?'<div class="card p-8 bg-slate-50 border-dashed border-2 border-slate-200 text-center py-20"><span class="material-icons-outlined text-4xl text-slate-200 mb-4">analytics</span><p class="text-[10px] font-black text-slate-300 uppercase tracking-widest">Select a job card on the left<br>to view full service details.</p></div>':s[i]}
            </div>
        `}const a=p.repairTab==="history"?"history":p.repairViewMode,n=t[a],l=a==="intake"?`<span class="text-[8px] font-black text-slate-300 bg-slate-50 px-2 py-1 rounded">${n.txn}</span>`:a==="status"?`<span class="bg-slate-200 text-slate-600 text-[8px] font-black px-2 py-1 rounded-full">${n.badge}</span>`:'<button class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900"><span class="material-icons-outlined text-xl">notifications</span></button>';return`
        ${Ja(n.t,n.s,l,!0)}
        <div class="scrolling-content px-8 space-y-8 pb-12">
            ${p.repairTab==="history"?yl():s[p.repairViewMode]}
        </div>
    `}function Xd(){return`
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
    `}window._marketingState||(window._marketingState={generatedImageUrl:null,generatedPrompt:null,isGenerating:!1,uploadedImages:[],currentSuggestions:[],lastError:null});const Zd=["Diwali special offer poster for mobile phones under ₹15,000","New iPhone launch announcement for electronics store","Independence Day sale banner with 20% off on all appliances","Grand opening celebration poster for electronics showroom","EMI offer creative for Samsung Galaxy series smartphones","Navratri festive discount poster for home appliances","Back to school deals on laptops and tablets","Summer sale poster for air conditioners and coolers","Republic Day clearance sale for TVs and home theater","Raksha Bandhan gift guide for smartphones and watches","Year end stock clearance for washing machines and fridges","New store branch opening announcement poster","Cashback offer poster for credit card payments on electronics","Exchange offer creative for old phone trade-in program","Service center launch poster for mobile and laptop repairs","Holi celebration offer on phone cases and accessories","Wedding season deals on premium home appliances","Monsoon sale on waterproof gadgets and devices","Christmas and New Year electronics mega sale poster","Flash sale countdown poster for limited stock flagship phones"];function ep(){if(window._marketingState.currentSuggestions.length===0){const e=[...Zd].sort(()=>Math.random()-.5);window._marketingState.currentSuggestions=e.slice(0,5)}return window._marketingState.currentSuggestions}window._refreshMarketingSuggestions=()=>{window._marketingState.currentSuggestions=[],window.triggerRender()};window._fillMarketingPrompt=e=>{const t=document.getElementById("marketing-prompt");t&&(t.value=e)};window._uploadMarketingImage=()=>{const e=document.createElement("input");e.type="file",e.accept="image/*",e.multiple=!0,e.onchange=t=>{Array.from(t.target.files).forEach(a=>{const n=new FileReader;n.onload=l=>{window._marketingState.uploadedImages.push({base64:l.target.result,name:a.name,size:(a.size/1024).toFixed(0)+" KB"}),window.triggerRender()},n.readAsDataURL(a)})},e.click()};window._removeMarketingImage=e=>{window._marketingState.uploadedImages.splice(e,1),window.triggerRender()};window._generateCreative=async()=>{var n,l,i,r,d,o,u;const e=localStorage.getItem("openai_api_key");if(!e){window.toast&&window.toast.error("Please configure OpenAI API key in Settings → AI Config");return}const t=document.getElementById("marketing-prompt"),s=(n=t==null?void 0:t.value)==null?void 0:n.trim();if(!s){window.toast&&window.toast.error("Enter a prompt to generate a creative");return}const a=window._marketingState;a.isGenerating=!0,a.lastError=null,a.generatedPrompt=s,window.triggerRender();try{let f=s;if(a.uploadedImages.length>0){const x=a.uploadedImages.map(_=>({type:"image_url",image_url:{url:_.base64,detail:"low"}})),y=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:"gpt-4o-mini",messages:[{role:"user",content:[{type:"text",text:`You are a marketing creative expert for an Indian electronics retail store. The user wants to create a marketing creative with this prompt: "${s}". They have uploaded reference images. Analyze the images and create an enhanced, detailed DALL-E prompt that incorporates visual elements from the images. Keep the Indian retail context. Output ONLY the enhanced prompt, nothing else. Max 200 words.`},...x]}],max_tokens:300})});y.ok&&(f=((r=(i=(l=(await y.json()).choices)==null?void 0:l[0])==null?void 0:i.message)==null?void 0:r.content)||s)}const b=`Create a professional marketing poster/creative for an Indian electronics retail store. Style: modern, clean, vibrant, professional. ${f}. The design should be suitable for social media, WhatsApp status, and print. Include bold typography if text is needed. Indian market context.`,h=await fetch("https://api.openai.com/v1/images/generations",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:"dall-e-3",prompt:b,n:1,size:"1024x1024",quality:"standard"})});if(!h.ok){const x=await h.json().catch(()=>({}));throw new Error(((d=x.error)==null?void 0:d.message)||`API error: ${h.status}`)}const v=await h.json();if(a.generatedImageUrl=((u=(o=v.data)==null?void 0:o[0])==null?void 0:u.url)||null,a.generatedPrompt=s,a.generatedImageUrl)window.toast&&window.toast.success("Creative generated!");else throw new Error("No image returned from API")}catch(f){console.error("Creative generation failed:",f),a.lastError=f.message,window.toast&&window.toast.error("Generation failed: "+f.message)}finally{a.isGenerating=!1,window.triggerRender()}};function kl(){const t=!!localStorage.getItem("openai_api_key"),s=window._marketingState,a=ep();return`
        ${Xd()}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 sm:space-y-8 pb-32">
            <!-- API Key Check -->
            ${t?"":`
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
            `}

            <!-- Prompt Input -->
            <div class="relative text-left">
                <textarea id="marketing-prompt" placeholder="Describe the marketing creative you want to generate..." class="w-full h-36 p-5 bg-white border border-slate-200 rounded-3xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm resize-none leading-relaxed text-left" ${s.isGenerating?"disabled":""}>${s.generatedPrompt||""}</textarea>
            </div>

            <button type="button" onclick="window._generateCreative()" class="w-full py-5 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-3 ${s.isGenerating?"opacity-50 pointer-events-none":""} ${t?"":"opacity-30 pointer-events-none"}">
                ${s.isGenerating?`
                    <span class="animate-spin material-icons-outlined text-lg">progress_activity</span> Generating...
                `:`
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
                    ${a.map(n=>`
                        <button type="button" onclick="window._fillMarketingPrompt('${n.replace(/'/g,"\\'")}')" class="px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-all text-left">
                            ${n}
                        </button>
                    `).join("")}
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
                ${s.uploadedImages.length>0?`
                    <div class="flex gap-2 flex-wrap">
                        ${s.uploadedImages.map((n,l)=>`
                            <div class="relative w-20 h-20 rounded-xl overflow-hidden border border-slate-200 group">
                                <img src="${n.base64}" alt="${n.name}" class="w-full h-full object-cover">
                                <button type="button" onclick="window._removeMarketingImage(${l})" class="absolute top-1 right-1 w-5 h-5 bg-slate-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span class="material-icons-outlined text-xs">close</span>
                                </button>
                                <div class="absolute bottom-0 left-0 right-0 bg-black/50 px-1 py-0.5">
                                    <p class="text-[7px] font-bold text-white truncate">${n.name}</p>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:""}

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
    `}function _l(){const e=window._marketingState||{};return window._downloadCreative=async()=>{if(e.generatedImageUrl)try{const s=await(await fetch(e.generatedImageUrl)).blob(),a=URL.createObjectURL(s),n=document.createElement("a");n.href=a,n.download=`creative-${Date.now()}.png`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(a),window.toast&&window.toast.success("Creative downloaded!")}catch(t){console.error("Download failed:",t),window.toast&&window.toast.error("Failed to download. Try right-click → Save Image.")}},window._regenerateCreative=()=>{const t=document.getElementById("marketing-prompt");t&&e.generatedPrompt&&(t.value=e.generatedPrompt),window._generateCreative()},window._refineCreative=()=>{var l;const t=document.getElementById("refine-prompt"),s=document.getElementById("marketing-prompt");if(!((l=t==null?void 0:t.value)!=null&&l.trim()))return;const a=t.value.trim(),n=(e.generatedPrompt||"")+". Additional: "+a;s&&(s.value=n),e.generatedPrompt=n,window._generateCreative()},e.isGenerating?`
            <div class="h-full flex flex-col items-center justify-center p-8 text-center space-y-6">
                <div class="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center animate-pulse">
                    <span class="material-icons-outlined text-3xl text-slate-400 animate-spin">progress_activity</span>
                </div>
                <div class="text-center">
                    <h3 class="text-lg font-black text-slate-900 tracking-tighter mb-1">Generating Creative</h3>
                    <p class="text-[10px] font-bold text-slate-400">This may take 10-20 seconds...</p>
                </div>
            </div>
        `:e.lastError&&!e.generatedImageUrl?`
            <div class="h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
                <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
                    <span class="material-icons-outlined text-2xl text-slate-400">error_outline</span>
                </div>
                <div class="text-center">
                    <h3 class="text-sm font-black text-slate-900 tracking-tighter mb-1">Generation Failed</h3>
                    <p class="text-[10px] font-bold text-slate-400 max-w-xs">${e.lastError}</p>
                </div>
                <button type="button" onclick="window._regenerateCreative()" class="px-6 py-3 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all">
                    Try Again
                </button>
            </div>
        `:e.generatedImageUrl?`
            <div class="h-full flex flex-col p-6 sm:p-8">
                <!-- Header -->
                <div class="text-center border-b border-dashed border-slate-200 pb-4 mb-4">
                    <h2 class="text-xl font-black tracking-tighter mb-1">Generated Creative</h2>
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">AI Marketing Creative</p>
                </div>

                <!-- Image -->
                <div class="flex-1 flex items-center justify-center overflow-hidden mb-4">
                    <div class="card border border-slate-200 shadow-sm overflow-hidden rounded-2xl relative group max-w-sm w-full">
                        <img src="${e.generatedImageUrl}" alt="Generated creative" class="w-full h-auto" crossorigin="anonymous">
                        <div class="absolute top-3 right-3 bg-slate-900 text-white text-[8px] font-black uppercase px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">1024 x 1024</div>
                    </div>
                </div>

                <!-- Prompt Used -->
                <div class="bg-slate-50 border border-slate-200 p-3 rounded-xl mb-4 text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Prompt Used</p>
                    <p class="text-[10px] font-bold text-slate-600 leading-relaxed">${e.generatedPrompt||""}</p>
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
        `:`
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
    `}function Bn(e){const t=e==="desktop-secondary",s=e==="mobile";if(t)return _l();if(s){const a=window._marketingState||{},n=a.generatedImageUrl||a.isGenerating||a.lastError;return`
            ${kl()}
            ${n?`
                <div class="px-4 pb-8">
                    ${_l()}
                </div>
            `:""}
        `}return kl()}function tp(){return`
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
    `}function sp(){return`
        ${tp()}
        <div class="scrolling-content px-4 sm:px-8 space-y-3 pb-32">
            
            <!-- Card 1 -->
            <div onclick="setPromoterViewMode('performance')" class="card p-4 flex items-center justify-between group cursor-pointer border-2 transition-all ${p.promoterViewMode==="performance"?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                <div class="flex items-center gap-4 text-left">
                    <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-black text-sm text-left">RS</div>
                    <div class="text-left">
                        <h3 class="text-sm font-black text-slate-900 text-left">Rohan S.</h3>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wide text-left">PREMIUM BRAND</p>
                    </div>
                </div>
                <div class="text-right">
                    <p class="text-[7px] font-black text-slate-300 uppercase tracking-widest mb-1 text-right">CHECK-IN</p>
                    <div class="w-10 h-5 bg-slate-900 rounded-full relative cursor-pointer ml-auto"><div class="w-3 h-3 bg-white rounded-full absolute right-1 top-1 shadow-sm"></div></div>
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
                    <div class="w-10 h-5 bg-slate-900 rounded-full relative cursor-pointer ml-auto"><div class="w-3 h-3 bg-white rounded-full absolute right-1 top-1 shadow-sm"></div></div>
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
    `}function ap(){return`
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
    `}function np(){return`
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
    `}function Fn(e){const t=e==="desktop-secondary";return window.setPromoterViewMode=s=>{p.promoterViewMode=s,D()},t?p.promoterViewMode==="onboarding"?ap():np():sp()}function lp(){return`
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
                 <button onclick="setInventoryTab('brands')" class="flex-1 py-3 ${p.inventoryTab==="brands"?"bg-white shadow-sm text-slate-900":"text-slate-400"} text-[10px] font-black uppercase rounded-lg transition-all">Brands</button>
                 <button onclick="setInventoryTab('categories')" class="flex-1 py-3 ${p.inventoryTab==="categories"?"bg-white shadow-sm text-slate-900":"text-slate-400"} text-[10px] font-black uppercase rounded-lg transition-all">Category</button>
            </div>
        </header>
    `}function ip(){return`
        <div class="scrolling-content px-6 space-y-4 pb-32">
             <!-- Apple -->
            <div onclick="setInventoryMode('details')" class="card p-5 border-2 transition-all cursor-pointer group bg-white ${p.inventoryMode==="details"?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                <div class="flex justify-between items-start mb-4">
                    <div class="text-left">
                        <h3 class="text-lg font-black text-slate-900">Apple</h3>
                        <span class="bg-slate-100 text-slate-600 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide inline-block mt-1">Premium</span>
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
                        <span class="bg-slate-100 text-slate-600 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide inline-block mt-1">Electronics</span>
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
                        <span class="bg-slate-100 text-slate-600 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide inline-block mt-1">Audio & Mobile</span>
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
    `}function rp(){const s=((window.getCache?window.getCache():{products:[]}).products||[]).reduce((i,r)=>{const d=r.category||"Uncategorized";i[d]||(i[d]={count:0,blocked:0,margin:0,icon:"category"}),i[d].count+=parseInt(r.stock)||0;const o=parseInt(r.price)||0,u=o*.9;return i[d].blocked+=(parseInt(r.stock)||0)*u,i[d].margin+=(o-u)*(parseInt(r.stock)||0),d.toLowerCase().includes("phone")?i[d].icon="smartphone":d.toLowerCase().includes("tablet")?i[d].icon="tablet_mac":d.toLowerCase().includes("audio")&&(i[d].icon="headphones"),i},{}),a=Object.keys(s),n=Object.values(s).reduce((i,r)=>i+r.blocked,0),l=Object.values(s).reduce((i,r)=>i+r.margin,0);return`
        < div class="scrolling-content px-6 space-y-4 pb-32" >
            <div class="text-left mb-2 px-2">
                <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest border-l-2 border-slate-900 pl-2 text-left">INVENTORY > OVERVIEW</p>
                <h2 class="text-lg font-black text-slate-900 mt-1 text-left">Category Breakdown</h2>
            </div>

            ${a.length===0?`
                <div class="p-10 text-center opacity-30">
                    <p class="text-[10px] font-black uppercase tracking-widest">No inventory data available</p>
                </div>
            `:a.map(i=>{const r=s[i];return`
                <div onclick="state.activeCategory='${i}'; setInventoryMode('details')" class="card p-5 border-2 transition-all cursor-pointer group bg-white flex items-center justify-between border-transparent hover:border-slate-200 text-left">
                    <div class="flex items-center gap-4 text-left">
                        <div class="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600"><span class="material-icons-outlined text-lg">${r.icon}</span></div>
                        <div class="text-left">
                            <h3 class="text-sm font-black text-slate-900 text-left">${i}</h3>
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
                        <h4 class="text-sm font-black text-slate-900 tracking-tight text-right">₹${r.margin.toLocaleString()}</h4>
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
    `}async function op(){const e=document.getElementById("inward-model").value,t=document.getElementById("inward-imei").value;if(document.getElementById("inward-sn").value,!e||!t){alert("Model name and IMEI are required.");return}const s=document.getElementById("confirm-inward-btn");s.disabled=!0,s.innerText="Syncing...";try{const a=await C.query("SELECT * FROM products WHERE name = ?",[e]);let n=1;if(a.length>0)n=parseInt(a[0].stock)+1,await C.query("UPDATE products SET stock = ? WHERE id = ?",[n,a[0].id]);else{const l="PRD-"+Math.random().toString(36).substr(2,6).toUpperCase();await C.query(`
                INSERT INTO products (id, name, category, brand, price, stock, imei)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `,[l,e,"Smartphone",e.split(" ")[0],5e4,1,t])}await C.inventoryLogs.add({id:"LOG-"+Math.random().toString(36).substr(2,6).toUpperCase(),product_id:e,type:"INWARD",quantity:1,reason:"New Shipment Arrival",date:new Date().toISOString()}),await K(),window.setInventoryMode("details")}catch(a){alert("Inward failed: "+a.message),s.disabled=!1,s.innerText="Confirm Inward"}}window.confirmInward=op;function cp(){return`
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
    `}function dp(){const t=(window.getCache?window.getCache():{products:[]}).products||[];return`
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
                `:t.map(s=>{const a=parseInt(s.stock)||0,n=parseInt(s.price)||0,l=n*1.1,i=n*.9,r=a*i,d=(n-i)*a;return`
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
                                <h4 class="text-sm font-black text-slate-900 tracking-tight text-right">₹${d.toLocaleString()}</h4>
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
                                <p class="text-[9px] font-black text-slate-900">₹${i.toLocaleString()}</p>
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
    `}function Un(e){const t=e==="desktop-secondary";return window.setInventoryTab=s=>{p.inventoryTab=s,D()},window.setInventoryMode=s=>{p.inventoryMode=s,D()},t?p.inventoryMode==="inward"?cp():dp():`
        <div class="h-full flex flex-col relative bg-white">
            ${lp()}
            ${p.inventoryTab==="brands"?ip():rp()}
        </div>
    `}function pp(e){return`
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
                            <button onclick="${n.k?`window.setSettingsView('${n.k}')`:""}" class="aspect-square flex flex-col items-center justify-center p-1.5 hover:bg-slate-50 transition-all text-center ${p.settingsView===n.k?"bg-slate-100":""}">
                                <span class="material-icons-outlined text-xl ${p.settingsView===n.k?"text-slate-900 font-bold":"text-slate-500"} mb-1 text-center">${n.i}</span>
                                <span class="text-[7px] font-black uppercase text-center tracking-wider leading-tight ${p.settingsView===n.k?"text-slate-900":"text-slate-500"}">${n.n}</span>
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
                             <div class="flex items-center gap-1.5 text-[9px] font-black text-slate-900 uppercase tracking-wide text-left">
                                <span class="w-1.5 h-1.5 bg-slate-900 rounded-full animate-pulse text-left"></span> Optimal
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
    `}function up(){const e=p.settingsSubView==="add",t=p.settingsActiveRole||"Store Manager";return`
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
    `}function xp(){return`
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
    `}function fp(){return`
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
                            <p class="text-[8px] font-black text-slate-900 uppercase tracking-wide text-right">CR BALANCE</p>
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
                                <span class="text-slate-400 text-right">₹12,400</span>
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
                                 <p class="text-xs font-black text-slate-400 text-right">₹(5,92,000.00)</p>
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
    `}function bp(){const e=localStorage.getItem("openai_api_key")||"";return e?e.substring(0,7)+"..."+e.substring(e.length-4):""}window.saveOpenAIKey=()=>{var s;const e=document.getElementById("openai-key-input"),t=(s=e==null?void 0:e.value)==null?void 0:s.trim();if(!t){window.toast.warning("Please enter an API key");return}if(!t.startsWith("sk-")){window.toast.error('Invalid API key format. OpenAI keys start with "sk-"');return}localStorage.setItem("openai_api_key",t),window.toast.success("API key saved successfully!"),window.triggerRender()};window.removeOpenAIKey=()=>{window.showConfirm("Remove OpenAI API key? AI features will fall back to local processing.",()=>{localStorage.removeItem("openai_api_key"),window.toast.info("API key removed"),window.triggerRender()})};window.testOpenAIKey=async()=>{var s;const e=localStorage.getItem("openai_api_key");if(!e){window.toast.warning("No API key configured");return}const t=document.getElementById("test-key-btn");t&&(t.disabled=!0,t.innerHTML='<span class="material-icons-outlined text-sm animate-spin">sync</span> Testing...');try{const a=await fetch("https://api.openai.com/v1/models",{headers:{Authorization:`Bearer ${e}`}});if(a.ok)window.toast.success("API key is valid and working!");else{const n=await a.json();window.toast.error("API key test failed: "+(((s=n.error)==null?void 0:s.message)||"Unknown error"))}}catch(a){window.toast.error("Connection error: "+a.message)}finally{t&&(t.disabled=!1,t.innerHTML='<span class="material-icons-outlined text-sm">play_arrow</span> Test Connection')}};function mp(){const e=!!localStorage.getItem("openai_api_key"),t=bp();return`
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
    `}function hp(){var n;const e=p.settingsSubView==="edit",t=window.getCache(),s=localStorage.getItem("retaileros_retailer_id"),a=((n=t.retailers)==null?void 0:n.find(l=>l.id===s))||null;return a?`
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
                                    <span class="px-2 py-0.5 bg-slate-900 text-white rounded text-[8px] font-black uppercase text-left">${a.status||"Active"}</span>
                                    <span class="px-2 py-0.5 bg-slate-200 text-slate-600 rounded text-[8px] font-black uppercase text-left">${a.retailer_category||"Retailer"}</span>
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
                        ${H("Contact Person",a.contact_person||"N/A","person")}
                        ${H("Email",a.email||"N/A","email")}
                        ${H("Mobile",a.mobile_number||"N/A","phone")}
                        ${H("Phone",a.phone_number||"N/A","call")}
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
                        ${H("GST Number",a.vat_number||"N/A","receipt_long")}
                        ${H("PAN Number",a.pan_number||"N/A","credit_card")}
                    </div>
                </div>

                <!-- Bank Information -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Bank Details
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        ${H("Bank Name",a.bank_name||"N/A","account_balance")}
                        ${H("Account Holder",a.bank_account_holder||"N/A","person")}
                        ${H("Account Number",a.bank_account_number||"N/A","numbers")}
                        ${H("IFSC Code",a.bank_ifsc||"N/A","tag")}
                        ${H("Branch",a.bank_branch||"N/A","location_on")}
                    </div>
                </div>

                <!-- Hierarchy Information -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Hierarchy & Reporting
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        ${H("Parent Retailer",a.parent_retailer_name||"N/A","store")}
                        ${H("National Distributor",a.nd_name||"N/A","business")}
                        ${H("Regional Distributor",a.rds_name||"N/A","corporate_fare")}
                        ${H("Salesman",a.salesman_name||"N/A","badge")}
                        ${H("Reporting To",a.reporting_to_name||"N/A","supervisor_account")}
                    </div>
                </div>

                <!-- Business Metrics -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Business Metrics
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                        ${H("CSA on Counter",a.csa_on_counter||"N/A","groups")}
                        ${H("Potential Volume",a.counter_potential_volume||"N/A","inventory")}
                        ${H("Potential Value",a.counter_potential_value||"N/A","payments")}
                    </div>
                </div>

                <!-- Category & Classification -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Category & Classification
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                        ${H("Category",a.retailer_category||"N/A","category")}
                        ${H("Category 1",a.retailer_category1||"N/A","label")}
                        ${H("Classification",a.retailer_classification||"N/A","stars")}
                    </div>
                </div>

                <!-- Additional Information -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Additional Information
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        ${H("Date of Birth",a.dob?new Date(a.dob).toLocaleDateString():"N/A","cake")}
                        ${H("Creation Date",a.creation_date?new Date(a.creation_date).toLocaleDateString():"N/A","event")}
                        ${H("Onboarded At",a.onboarded_at?new Date(a.onboarded_at).toLocaleDateString():"N/A","schedule")}
                    </div>

                    ${a.approval_remarks?`
                        <div class="card p-4 bg-slate-50 border-slate-200 text-left">
                            <p class="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2 text-left">Approval Remarks</p>
                            <p class="text-xs text-slate-900 text-left">${a.approval_remarks}</p>
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
        `}function H(e,t,s){return`
        <div class="card p-3 border-slate-100 text-left">
            <div class="flex items-center gap-2 mb-1 text-left">
                <span class="material-icons-outlined text-slate-400 text-sm text-left">${s}</span>
                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest text-left">${e}</p>
            </div>
            <p class="text-sm font-bold text-slate-900 truncate text-left">${t}</p>
        </div>
    `}function gp(){var l;const e=(()=>{var d;const i=window.getCache(),r=localStorage.getItem("retaileros_retailer_id");return((d=i.retailers)==null?void 0:d.find(o=>o.id===r))||{}})(),s=((l=window.getCache().retailerSettings)==null?void 0:l.security)||{},a={otp_on_login:s.otp_on_login??!0,email_verification:s.email_verification??!1,auto_logout_timer:s.auto_logout_timer??"30 min",remember_device:s.remember_device??!0},n=["15 min","30 min","1 hour","4 hours","Never"];return`
        <div data-settings-category="security" class="h-full flex flex-col relative bg-white animate-slide-up text-left">
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
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Store PIN
                    </p>
                    <div class="card p-4 flex items-center justify-between text-left">
                        <div class="flex items-center gap-3 text-left">
                            <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                <span class="material-icons-outlined text-slate-500">pin</span>
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
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Two-Factor Authentication
                    </p>
                    <div class="card p-4 space-y-4 text-left">
                        <div class="flex items-center justify-between text-left">
                            <div class="flex items-center gap-3 text-left">
                                <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-slate-500">verified_user</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">OTP on Login</p>
                                    <p class="text-[9px] font-bold text-slate-400">SMS to ${e.mobile_number||"••••••••••"}</p>
                                </div>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="otp_on_login" class="sr-only peer" ${a.otp_on_login?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full peer-focus:ring-2 peer-focus:ring-slate-300 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="flex items-center justify-between text-left">
                            <div class="flex items-center gap-3 text-left">
                                <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-slate-500">email</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">Email Verification</p>
                                    <p class="text-[9px] font-bold text-slate-400">${e.email||"Not configured"}</p>
                                </div>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="email_verification" class="sr-only peer" ${a.email_verification?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full peer-focus:ring-2 peer-focus:ring-slate-300 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Session Management -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Session Management
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Auto-Logout Timer</p>
                                <p class="text-[9px] font-bold text-slate-400">Automatically logout after inactivity</p>
                            </div>
                            <select data-field="auto_logout_timer" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-900 focus:outline-none">
                                ${n.map(i=>`<option ${a.auto_logout_timer===i?"selected":""}>${i}</option>`).join("")}
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Remember Device</p>
                                <p class="text-[9px] font-bold text-slate-400">Skip 2FA on trusted devices</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="remember_device" class="sr-only peer" ${a.remember_device?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
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
                                <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-white">computer</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">This Browser</p>
                                    <p class="text-[9px] font-bold text-slate-900">Active Now</p>
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
                            <button onclick="window.toast.info('Device revoked')" class="px-3 py-1.5 bg-slate-100 text-slate-400 rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all">Revoke</button>
                        </div>
                    </div>
                </div>

                <!-- Login History -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Recent Login History
                    </p>
                    <div class="space-y-2 text-left">
                        ${[{time:"Today, 10:30 AM",device:"Chrome / macOS",ip:"192.168.1.x",status:"success"},{time:"Yesterday, 6:15 PM",device:"Safari / iPhone",ip:"49.36.xx.xx",status:"success"},{time:"Yesterday, 2:00 PM",device:"Chrome / Windows",ip:"103.xx.xx.xx",status:"failed"},{time:"3 days ago",device:"Chrome / macOS",ip:"192.168.1.x",status:"success"}].map(i=>`
                            <div class="flex items-center justify-between py-3 border-b border-slate-50 text-left">
                                <div class="text-left">
                                    <p class="text-[10px] font-bold text-slate-900">${i.device}</p>
                                    <p class="text-[8px] font-bold text-slate-400">${i.time} &middot; ${i.ip}</p>
                                </div>
                                <span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${i.status==="success"?"bg-slate-900 text-white":"bg-slate-100 text-slate-400"}">${i.status}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.saveSettings('security')" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Save Security Settings
                    </button>
                </div>
            </div>
        </div>
    `}function vp(){var i;const e=(()=>{var o;const r=window.getCache(),d=localStorage.getItem("retaileros_retailer_id");return((o=r.retailers)==null?void 0:o.find(u=>u.id===d))||{}})(),s=((i=window.getCache().retailerSettings)==null?void 0:i.alerts)||{},a={whatsapp_notifications:s.whatsapp_notifications??!0,sms_notifications:s.sms_notifications??!1,email_notifications:s.email_notifications??!0,push_notifications:s.push_notifications??!0,low_stock_warning:s.low_stock_warning??!0,low_stock_threshold:s.low_stock_threshold??"5 units",out_of_stock_alert:s.out_of_stock_alert??!0,daily_sales_summary:s.daily_sales_summary??!0,high_value_sale_threshold:s.high_value_sale_threshold??"₹25,000",new_sale_notification:s.new_sale_notification??!1,birthday_reminders:s.birthday_reminders??!0,inactive_customer_alert:s.inactive_customer_alert??!0,repair_status_change:s.repair_status_change??!0,installation_due:s.installation_due??!0},n=["3 units","5 units","10 units","20 units"],l=["₹10,000","₹25,000","₹50,000","₹1,00,000"];return`
        <div data-settings-category="alerts" class="h-full flex flex-col relative bg-white animate-slide-up text-left">
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
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Notification Channels
                    </p>
                    <div class="space-y-3 text-left">
                        ${[{name:"WhatsApp",field:"whatsapp_notifications",desc:`Messages to ${e.mobile_number||"••••••••••"}`,icon:"chat",color:"green"},{name:"SMS",field:"sms_notifications",desc:"Text alerts for critical events",icon:"sms",color:"blue"},{name:"Email",field:"email_notifications",desc:e.email||"Not configured",icon:"email",color:"indigo"},{name:"Push Notifications",field:"push_notifications",desc:"Browser & mobile push alerts",icon:"notifications_active",color:"amber"}].map(r=>`
                            <div class="card p-4 flex items-center justify-between text-left">
                                <div class="flex items-center gap-3 text-left">
                                    <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                        <span class="material-icons-outlined text-slate-500">${r.icon}</span>
                                    </div>
                                    <div class="text-left">
                                        <p class="text-xs font-black text-slate-900">${r.name}</p>
                                        <p class="text-[9px] font-bold text-slate-400">${r.desc}</p>
                                    </div>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" data-field="${r.field}" class="sr-only peer" ${a[r.field]?"checked":""}>
                                    <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                                </label>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Inventory Alerts -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Inventory Alerts
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Low Stock Warning</p>
                                <p class="text-[9px] font-bold text-slate-400">Alert when product stock falls below threshold</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="low_stock_warning" class="sr-only peer" ${a.low_stock_warning?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Low Stock Threshold</p>
                                <p class="text-[9px] font-bold text-slate-400">Minimum units before alert triggers</p>
                            </div>
                            <select data-field="low_stock_threshold" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-900 focus:outline-none">
                                ${n.map(r=>`<option ${a.low_stock_threshold===r?"selected":""}>${r}</option>`).join("")}
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Out of Stock Alert</p>
                                <p class="text-[9px] font-bold text-slate-400">Immediate alert when stock hits zero</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="out_of_stock_alert" class="sr-only peer" ${a.out_of_stock_alert?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Sales Alerts -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Sales & Revenue
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Daily Sales Summary</p>
                                <p class="text-[9px] font-bold text-slate-400">End-of-day report via WhatsApp at 9 PM</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="daily_sales_summary" class="sr-only peer" ${a.daily_sales_summary?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">High-Value Sale Alert</p>
                                <p class="text-[9px] font-bold text-slate-400">Notify when sale exceeds threshold</p>
                            </div>
                            <select data-field="high_value_sale_threshold" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-900 focus:outline-none">
                                ${l.map(r=>`<option ${a.high_value_sale_threshold===r?"selected":""}>${r}</option>`).join("")}
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">New Sale Notification</p>
                                <p class="text-[9px] font-bold text-slate-400">Real-time alert on every new sale</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="new_sale_notification" class="sr-only peer" ${a.new_sale_notification?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Customer Alerts -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Customer Engagement
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Birthday Reminders</p>
                                <p class="text-[9px] font-bold text-slate-400">Get notified on customer birthdays</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="birthday_reminders" class="sr-only peer" ${a.birthday_reminders?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Inactive Customer Alert</p>
                                <p class="text-[9px] font-bold text-slate-400">Flag customers with no purchase in 90 days</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="inactive_customer_alert" class="sr-only peer" ${a.inactive_customer_alert?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Repair & Service -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Repairs & Service
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Repair Status Change</p>
                                <p class="text-[9px] font-bold text-slate-400">Alert when repair job moves to next stage</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="repair_status_change" class="sr-only peer" ${a.repair_status_change?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Installation Due</p>
                                <p class="text-[9px] font-bold text-slate-400">Reminder 1 day before scheduled installation</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="installation_due" class="sr-only peer" ${a.installation_due?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.saveSettings('alerts')" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Save Alert Preferences
                    </button>
                </div>
            </div>
        </div>
    `}function wp(){var u;const e=(()=>{var h;const f=window.getCache(),b=localStorage.getItem("retaileros_retailer_id");return((h=f.retailers)==null?void 0:h.find(v=>v.id===b))||{}})(),s=((u=window.getCache().retailerSettings)==null?void 0:u.taxes)||{},a={gstin:s.gstin??e.vat_number??"",pan:s.pan??e.pan_number??"",registration_type:s.registration_type??"Regular",show_tax_breakdown:s.show_tax_breakdown??!0,tax_inclusive_pricing:s.tax_inclusive_pricing??!0,invoice_prefix:s.invoice_prefix??`${(e.retailer_code||"ROS").split("-")[0]}-INV-`,e_invoice_enabled:s.e_invoice_enabled??!1},n=s.gst_rates||{smartphones:18,laptops_tablets:18,audio_wearables:18,television:28,air_conditioners:28,appliances:28,accessories:18,services_repairs:18},l=s.hsn_codes||{mobile_phones:"8517",laptops:"8471",headphones_audio:"8518",television:"8528",air_conditioners:"8415",washing_machines:"8450",refrigerators:"8418",repair_services:"9987"},i=[0,5,12,18,28],r=[{label:"Smartphones",key:"smartphones"},{label:"Laptops & Tablets",key:"laptops_tablets"},{label:"Audio & Wearables",key:"audio_wearables"},{label:"Television",key:"television"},{label:"Air Conditioners",key:"air_conditioners"},{label:"Appliances (Washing Machine, Fridge)",key:"appliances"},{label:"Accessories & Cables",key:"accessories"},{label:"Services & Repairs",key:"services_repairs"}],d=[{label:"Mobile Phones",key:"mobile_phones"},{label:"Laptops",key:"laptops"},{label:"Headphones & Audio",key:"headphones_audio"},{label:"Television",key:"television"},{label:"Air Conditioners",key:"air_conditioners"},{label:"Washing Machines",key:"washing_machines"},{label:"Refrigerators",key:"refrigerators"},{label:"Repair Services",key:"repair_services"}],o=["Regular","Composition","Unregistered"];return window.saveTaxSettings=async function(){var h,v,x,y,_,R,M;const f=document.querySelector('[data-settings-category="taxes"]');if(!f)return;const b={gstin:((h=f.querySelector('[data-field="gstin"]'))==null?void 0:h.value)||"",pan:((v=f.querySelector('[data-field="pan"]'))==null?void 0:v.value)||"",registration_type:((x=f.querySelector('[data-field="registration_type"]'))==null?void 0:x.value)||"Regular",show_tax_breakdown:((y=f.querySelector('[data-field="show_tax_breakdown"]'))==null?void 0:y.checked)??!0,tax_inclusive_pricing:((_=f.querySelector('[data-field="tax_inclusive_pricing"]'))==null?void 0:_.checked)??!0,invoice_prefix:((R=f.querySelector('[data-field="invoice_prefix"]'))==null?void 0:R.value)||"ROS-INV-",e_invoice_enabled:((M=f.querySelector('[data-field="e_invoice_enabled"]'))==null?void 0:M.checked)??!1,gst_rates:{},hsn_codes:{}};f.querySelectorAll("[data-gst-key]").forEach(E=>{const O=parseInt(E.value);b.gst_rates[E.dataset.gstKey]=isNaN(O)?18:O}),f.querySelectorAll("[data-hsn-key]").forEach(E=>{b.hsn_codes[E.dataset.hsnKey]=E.value});try{await C.settings.save("taxes",b),window._db_cache.retailerSettings||(window._db_cache.retailerSettings={}),window._db_cache.retailerSettings.taxes=b;const E=(()=>{var bt;const O=window.getCache(),Q=localStorage.getItem("retaileros_retailer_id");return((bt=O.retailers)==null?void 0:bt.find(Xe=>Xe.id===Q))||{}})();C.activityLogs.add({action:"settings",detail:"Updated tax configuration",user_name:E.contact_person||"Owner",icon:"percent",color:"slate"}),window.toast&&window.toast.success("Tax settings saved")}catch(E){console.error("Failed to save tax settings:",E),window.toast&&window.toast.error("Failed to save tax settings")}},`
        <div data-settings-category="taxes" class="h-full flex flex-col relative bg-white animate-slide-up text-left">
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
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> GST Registration
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                        <div class="card p-3 text-left">
                            <div class="flex items-center gap-2 mb-1 text-left">
                                <span class="material-icons-outlined text-slate-400 text-sm">receipt_long</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">GSTIN</p>
                            </div>
                            <input type="text" data-field="gstin" value="${a.gstin}" placeholder="e.g. 27AABCT1234F1Z5" class="w-full text-sm font-bold text-slate-900 bg-transparent border-0 p-0 focus:outline-none placeholder-slate-300">
                        </div>
                        <div class="card p-3 text-left">
                            <div class="flex items-center gap-2 mb-1 text-left">
                                <span class="material-icons-outlined text-slate-400 text-sm">credit_card</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">PAN Number</p>
                            </div>
                            <input type="text" data-field="pan" value="${a.pan}" placeholder="e.g. AABCT1234F" class="w-full text-sm font-bold text-slate-900 bg-transparent border-0 p-0 focus:outline-none placeholder-slate-300">
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
                            <select data-field="registration_type" class="w-full text-sm font-bold text-slate-900 bg-transparent border-0 p-0 focus:outline-none">
                                ${o.map(f=>`<option ${a.registration_type===f?"selected":""}>${f}</option>`).join("")}
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Tax Rates by Category -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Tax Rates by Category
                    </p>
                    <div class="card p-4 space-y-1 text-left">
                        ${r.map(f=>`
                            <div class="flex items-center justify-between py-3 border-b border-slate-50 text-left">
                                <div class="flex items-center gap-3 text-left">
                                    <div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center">
                                        <span class="text-[10px] font-black text-slate-500">${n[f.key]}%</span>
                                    </div>
                                    <p class="text-xs font-bold text-slate-900">${f.label}</p>
                                </div>
                                <select data-gst-key="${f.key}" class="px-3 py-1.5 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                    ${i.map(b=>`<option value="${b}" ${n[f.key]===b?"selected":""}>${b===0?"0% (Exempt)":b+"% GST"}</option>`).join("")}
                                </select>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- HSN/SAC Codes -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> HSN / SAC Codes
                    </p>
                    <div class="card p-4 space-y-1 text-left">
                        ${d.map(f=>`
                            <div class="flex items-center justify-between py-3 border-b border-slate-50 text-left">
                                <p class="text-xs font-bold text-slate-900">${f.label}</p>
                                <input type="text" data-hsn-key="${f.key}" value="${l[f.key]}" class="w-20 text-right px-2 py-1 bg-slate-50 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none focus:bg-white focus:ring-1 focus:ring-slate-200">
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Invoice Settings -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Invoice Configuration
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Show Tax Breakdown</p>
                                <p class="text-[9px] font-bold text-slate-400">Display CGST + SGST split on invoices</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="show_tax_breakdown" class="sr-only peer" ${a.show_tax_breakdown?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Tax Inclusive Pricing</p>
                                <p class="text-[9px] font-bold text-slate-400">Product prices already include GST</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="tax_inclusive_pricing" class="sr-only peer" ${a.tax_inclusive_pricing?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Invoice Prefix</p>
                                <p class="text-[9px] font-bold text-slate-400">Prefix for invoice numbers</p>
                            </div>
                            <input type="text" data-field="invoice_prefix" value="${a.invoice_prefix}" class="w-28 text-right px-3 py-2 bg-slate-50 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none focus:bg-white focus:ring-1 focus:ring-slate-200">
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">E-Invoice (IRN)</p>
                                <p class="text-[9px] font-bold text-slate-400">Enable e-invoicing via NIC portal</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="e_invoice_enabled" class="sr-only peer" ${a.e_invoice_enabled?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.saveTaxSettings()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Save Tax Configuration
                    </button>
                </div>
            </div>
        </div>
    `}function yp(){const t=window.getCache().retailerPlugins||[],s={};t.forEach(d=>{s[d.plugin_key]=d.status});const a=[{label:"Payments & POS",plugins:[{name:"Pine Labs POS",key:"pine_labs_pos",desc:"Accept card, UPI, wallet & EMI payments on Pine Labs terminals. Auto-push sale amount to device, capture transaction ID and settle instantly.",icon:"point_of_sale",color:"blue"},{name:"Razorpay Payments",key:"razorpay",desc:"Accept UPI, cards, net banking & wallets online. Auto-reconcile payments with sales records.",icon:"account_balance_wallet",color:"indigo"},{name:"PhonePe POS",key:"phonepe_pos",desc:"QR-based payments at counter. Instant settlement and daily reconciliation reports.",icon:"qr_code_scanner",color:"purple"},{name:"Paytm for Business",key:"paytm_business",desc:"Accept Paytm wallet, UPI & Paytm Postpaid. Sound box alerts and auto-settlement.",icon:"payments",color:"blue"}]},{label:"Consumer Finance & EMI",plugins:[{name:"Bajaj Finserv EMI",key:"bajaj_finserv_emi",desc:"Offer No-Cost EMI & low-cost EMI on Bajaj Finserv cards. Instant approval at checkout, auto-capture EMI tenure and subvention.",icon:"credit_score",color:"blue"},{name:"HDFC Consumer Finance",key:"hdfc_consumer_finance",desc:"Enable HDFC consumer durable loans at POS. Approve customers via Aadhar OTP, auto-link loan ID to sale invoice.",icon:"account_balance",color:"indigo"},{name:"IDFC First Finance",key:"idfc_first_finance",desc:"Consumer durable loans with instant digital approval. Support for 3–24 month tenures on electronics & appliances.",icon:"savings",color:"purple"},{name:"Home Credit",key:"home_credit",desc:"EMI for non-card customers. Aadhar-based approval in 5 minutes for smartphones, appliances & electronics.",icon:"approval",color:"amber"},{name:"ZestMoney / DMI Finance",key:"zestmoney_dmi",desc:"Buy Now Pay Later and no-cost EMI for online & in-store. Instant credit line for customers without credit cards.",icon:"currency_rupee",color:"green"}]},{label:"Telecom & Recharge",plugins:[{name:"Jio Partner",key:"jio_partner",desc:"Activate Jio SIMs, process recharges & sell JioFiber plans from your store. Earn commission on every transaction.",icon:"sim_card",color:"blue"},{name:"Airtel Mitra",key:"airtel_mitra",desc:"Activate Airtel prepaid & postpaid connections, process recharges, sell Airtel Xstream & DTH plans.",icon:"cell_tower",color:"red"},{name:"Vi (Vodafone Idea)",key:"vi_vodafone",desc:"Process Vi recharges, new SIM activations & postpaid upgrades. Track commissions per transaction.",icon:"signal_cellular_alt",color:"rose"},{name:"BSNL Retailer",key:"bsnl_retailer",desc:"BSNL SIM activations, recharges & broadband plan bookings. Government ID verification support.",icon:"router",color:"slate"},{name:"Multi-Recharge API",key:"multi_recharge_api",desc:"Unified recharge API for all operators — prepaid, postpaid, DTH, broadband & electricity bills from one dashboard.",icon:"bolt",color:"amber"}]},{label:"Brand & Warranty",plugins:[{name:"Samsung Partner Portal",key:"samsung_partner",desc:"Sync Samsung product catalog, claim brand warranty registrations & submit display incentive claims.",icon:"devices",color:"blue"},{name:"Xiaomi Retail Suite",key:"xiaomi_retail",desc:"Access Mi product feed, process Mi Extended Warranty activations & sync sell-out data for incentives.",icon:"smartphone",color:"orange"},{name:"OneAssist / Onsitego",key:"oneassist_onsitego",desc:"Sell extended warranty & damage protection plans at POS. Instant policy issuance linked to sale invoice.",icon:"verified_user",color:"green"}]},{label:"Communication",plugins:[{name:"WhatsApp Business",key:"whatsapp_business",desc:"Send automated messages, invoices & reminders to customers via WhatsApp Business API.",icon:"chat",color:"green"},{name:"MSG91 SMS",key:"msg91_sms",desc:"Transactional SMS for OTPs, invoices, payment confirmations & promotional campaigns.",icon:"sms",color:"amber"}]},{label:"Accounting & ERP",plugins:[{name:"Tally Integration",key:"tally",desc:"Auto-sync sales, expenses & GST data directly into Tally ERP for seamless accounting.",icon:"calculate",color:"blue"},{name:"Google Sheets",key:"google_sheets",desc:"Export daily sales, inventory & customer data to Google Sheets automatically.",icon:"table_chart",color:"green"}]},{label:"Hardware & Logistics",plugins:[{name:"Thermal Printer",key:"thermal_printer",desc:"Connect Bluetooth or USB receipt printers for instant POS invoice printing.",icon:"print",color:"slate"},{name:"Barcode Scanner",key:"barcode_scanner",desc:"Pair Bluetooth or USB barcode scanners. Auto-lookup products by EAN/UPC code during billing.",icon:"qr_code",color:"slate"},{name:"Shiprocket",key:"shiprocket",desc:"Ship products to customers with tracking. Auto-generate shipping labels from sales.",icon:"local_shipping",color:"orange"}]}];a.forEach(d=>{d.plugins.forEach(o=>{o.status=s[o.key]||"available"})});const n=a.flatMap(d=>d.plugins),l=n.filter(d=>d.status==="connected").length,i=n.filter(d=>d.status==="available").length;window._togglePlugin=async function(d,o,u){const f=u==="connected"?"available":"connected";try{await C.plugins.upsert(d,f,null);const b=(window._db_cache.retailerPlugins||[]).findIndex(v=>v.plugin_key===d);b>=0?window._db_cache.retailerPlugins[b].status=f:window._db_cache.retailerPlugins.push({plugin_key:d,status:f});const h=(()=>{var y;const v=window.getCache(),x=localStorage.getItem("retaileros_retailer_id");return((y=v.retailers)==null?void 0:y.find(_=>_.id===x))||{}})();C.activityLogs.add({action:"plugin",detail:`${f==="connected"?"Connected":"Disconnected"} ${o}`,user_name:h.contact_person||"Owner",icon:"extension",color:"slate"}),window.toast&&window.toast.success(f==="connected"?`${o} connected`:`${o} disconnected`),window.setSettingsView&&window.setSettingsView("plugins")}catch(b){console.error("Plugin toggle failed:",b),window.toast&&window.toast.error("Failed to update plugin")}};const r=d=>{const o=d.status==="connected";return`
            <div class="card p-5 ${o?"border-slate-200 bg-slate-50/30":"hover:border-slate-300"} transition-all text-left">
                <div class="flex items-start justify-between text-left">
                    <div class="flex items-start gap-4 text-left">
                        <div class="w-12 h-12 ${o?"bg-slate-100":"bg-slate-50"} rounded-2xl flex items-center justify-center shrink-0">
                            <span class="material-icons-outlined text-slate-500 text-xl">${d.icon}</span>
                        </div>
                        <div class="text-left">
                            <p class="text-sm font-black text-slate-900">${d.name}</p>
                            <p class="text-[10px] font-bold text-slate-500 mt-1 leading-relaxed">${d.desc}</p>
                        </div>
                    </div>
                    ${o?'<span class="shrink-0 ml-3 text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-900 text-white">Active</span>':`<button onclick="window._togglePlugin('${d.key}','${d.name.replace(/'/g,"\\'")}','available')" class="shrink-0 ml-3 text-[8px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-all">Connect</button>`}
                </div>
                ${o?`
                    <div class="flex gap-2 mt-4 pl-16 text-left">
                        <button onclick="window.toast.info('Plugin settings coming soon')" class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-[8px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-50 transition-all">Configure</button>
                        <button onclick="window._togglePlugin('${d.key}','${d.name.replace(/'/g,"\\'")}','connected')" class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-[8px] font-black text-slate-400 uppercase tracking-widest hover:bg-slate-50 transition-all">Disconnect</button>
                    </div>
                `:""}
            </div>
        `};return`
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
                <!-- Stats -->
                <div class="p-6 pb-0 text-left">
                    <div class="grid grid-cols-2 gap-3 text-left">
                        <div class="card p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">${l}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Connected</p>
                        </div>
                        <div class="card p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">${i}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Available</p>
                        </div>
                    </div>
                </div>

                <!-- Categories -->
                ${a.map(d=>`
                    <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                            <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> ${d.label}
                        </p>
                        <div class="space-y-3 text-left">
                            ${d.plugins.map(o=>r(o)).join("")}
                        </div>
                    </div>
                `).join("")}

                <div class="p-6 pt-2 text-left">
                    <div class="card p-4 bg-slate-50 border-transparent text-center">
                        <span class="material-icons-outlined text-slate-300 text-2xl mb-2">extension</span>
                        <p class="text-[10px] font-black text-slate-400">More integrations coming soon</p>
                        <p class="text-[9px] font-bold text-slate-300 mt-1">Zoho Books, BusyWin, Marg ERP, Vivo, Oppo & more</p>
                    </div>
                </div>
            </div>
        </div>
    `}function kp(){const e=(()=>{var u;const d=window.getCache(),o=localStorage.getItem("retaileros_retailer_id");return((u=d.retailers)==null?void 0:u.find(f=>f.id===o))||{}})(),t=window.getCache(),s=t.teamMembers||[],a=t.teamRoles||[],n=s.length>0?s:[{id:"owner",name:e.contact_person||"Store Owner",role:"Owner",phone:e.mobile_number||"—",status:"active"}],l=a.length>0?a.map(d=>{let o=d.permissions;try{o=typeof o=="string"?JSON.parse(o):o}catch{o={}}return{...d,permissions:o,count:n.filter(u=>u.role===d.name).length}}):[{name:"Owner",count:n.filter(d=>d.role==="Owner").length||1,color:"slate",description:"Full access to all modules, settings & billing"},{name:"Store Manager",count:n.filter(d=>d.role==="Store Manager").length,color:"slate",description:"Sales, inventory, customers, reports. No billing or team settings"},{name:"Sales Executive",count:n.filter(d=>d.role==="Sales Executive").length,color:"slate",description:"New sales, customer lookup, inquiries. No reports or settings"},{name:"Technician",count:n.filter(d=>d.role==="Technician").length,color:"slate",description:"Repairs module only. View assigned jobs, update status"}],i=l.length>0?l.map(d=>d.name):["Owner","Store Manager","Sales Executive","Technician"];window._addTeamMember=async function(){const d=prompt("Team member name:");if(!d||!d.trim())return;const o=prompt("Phone number:"),u=prompt(`Role (${i.join(", ")}):`);if(!u)return;const f=`tm_${Date.now()}_${Math.random().toString(36).substr(2,6)}`;try{await C.teamMembers.add({id:f,name:d.trim(),role:u,phone:o||null,email:null,status:"invited"}),window._db_cache.teamMembers||(window._db_cache.teamMembers=[]),window._db_cache.teamMembers.push({id:f,name:d.trim(),role:u,phone:o,status:"invited"});const b=(()=>{var x;const h=window.getCache(),v=localStorage.getItem("retaileros_retailer_id");return((x=h.retailers)==null?void 0:x.find(y=>y.id===v))||{}})();C.activityLogs.add({action:"team",detail:`Added team member ${d.trim()}`,user_name:b.contact_person||"Owner",icon:"person_add",color:"slate"}),window.toast&&window.toast.success(`${d.trim()} invited`),window.setSettingsView&&window.setSettingsView("teams")}catch(b){console.error("Add member failed:",b),window.toast&&window.toast.error("Failed to add member")}},window._removeTeamMember=async function(d,o){if(confirm(`Remove ${o} from the team?`))try{await C.teamMembers.delete(d),window._db_cache.teamMembers&&(window._db_cache.teamMembers=window._db_cache.teamMembers.filter(f=>f.id!==d));const u=(()=>{var h;const f=window.getCache(),b=localStorage.getItem("retaileros_retailer_id");return((h=f.retailers)==null?void 0:h.find(v=>v.id===b))||{}})();C.activityLogs.add({action:"team",detail:`Removed team member ${o}`,user_name:u.contact_person||"Owner",icon:"person_remove",color:"slate"}),window.toast&&window.toast.success(`${o} removed`),window.setSettingsView&&window.setSettingsView("teams")}catch(u){console.error("Remove member failed:",u),window.toast&&window.toast.error("Failed to remove member")}};const r={Owner:"slate","Store Manager":"slate","Sales Executive":"slate",Technician:"slate"};return`
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
                    <button onclick="window._addTeamMember()" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined text-lg">person_add</span>
                    </button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                <!-- Team Stats -->
                <div class="p-6 pb-0 text-left">
                    <div class="grid grid-cols-3 gap-3 text-left">
                        <div class="card p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">${n.filter(d=>d.status==="active").length}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Active</p>
                        </div>
                        <div class="card p-4 text-center">
                            <p class="text-2xl font-black text-slate-400">${n.filter(d=>d.status==="invited").length}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Pending</p>
                        </div>
                        <div class="card p-4 text-center">
                            <p class="text-2xl font-black text-slate-900">${l.length}</p>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Roles</p>
                        </div>
                    </div>
                </div>

                <!-- Team Members -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <div class="flex items-center justify-between text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                            <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Team Members
                        </p>
                    </div>
                    <div class="space-y-3 text-left">
                        ${n.map((d,o)=>{const u=d.role==="Owner"&&o===0;return`
                            <div class="card p-4 flex items-center justify-between text-left ${d.status==="invited"?"border-dashed border-slate-200 bg-slate-50/20":""}">
                                <div class="flex items-center gap-3 text-left">
                                    <div class="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                                        <span class="material-icons-outlined ${u?"text-slate-500":"text-slate-400"}">person</span>
                                    </div>
                                    <div class="text-left">
                                        <div class="flex items-center gap-2 text-left">
                                            <p class="text-xs font-black text-slate-900">${d.name}</p>
                                            ${u?'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-900 text-white">You</span>':""}
                                        </div>
                                        <p class="text-[9px] font-bold text-slate-400">${d.role} &middot; ${d.phone||"—"}</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2 text-left">
                                    ${d.status==="invited"?'<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-200 text-slate-600">Invited</span>':'<span class="w-2 h-2 bg-slate-900 rounded-full"></span>'}
                                    ${u?"":`<button onclick="window._removeTeamMember('${d.id}','${(d.name||"").replace(/'/g,"\\'")}')" class="text-slate-300 hover:text-slate-900 transition-colors"><span class="material-icons-outlined text-sm">close</span></button>`}
                                </div>
                            </div>
                        `}).join("")}
                    </div>
                </div>

                <!-- Roles & Permissions -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Roles & Permissions
                    </p>
                    <div class="space-y-3 text-left">
                        ${l.map(d=>{const o=d.color||r[d.name]||"slate",u=d.description||(typeof d.permissions=="object"?Object.keys(d.permissions).join(", "):String(d.permissions||"")),f=d.count||0;return`
                            <div class="card p-4 text-left hover:border-slate-300 transition-all cursor-pointer" onclick="window.toast.info('Role editor coming soon')">
                                <div class="flex items-center justify-between mb-2 text-left">
                                    <div class="flex items-center gap-2 text-left">
                                        <span class="w-3 h-3 bg-${o}-400 rounded-full"></span>
                                        <p class="text-xs font-black text-slate-900">${d.name}</p>
                                    </div>
                                    <span class="text-[8px] font-black text-slate-400 uppercase tracking-widest">${f} member${f!==1?"s":""}</span>
                                </div>
                                <p class="text-[10px] font-bold text-slate-400 pl-5">${u}</p>
                            </div>
                        `}).join("")}
                    </div>
                </div>

                <!-- Module Access Matrix -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Quick Access Matrix
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
                                ${[{mod:"Sales Desk",o:!0,m:!0,s:!0,t:!1},{mod:"Customers",o:!0,m:!0,s:!0,t:!1},{mod:"Inventory",o:!0,m:!0,s:!1,t:!1},{mod:"Reports",o:!0,m:!0,s:!1,t:!1},{mod:"Repairs",o:!0,m:!0,s:!1,t:!0},{mod:"Automation",o:!0,m:!0,s:!1,t:!1},{mod:"Settings",o:!0,m:!1,s:!1,t:!1}].map(d=>`
                                    <tr class="border-t border-slate-50">
                                        <td class="py-2.5 pr-4 text-[10px] font-bold text-slate-900">${d.mod}</td>
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${d.o?"text-slate-900":"text-slate-300"}">${d.o?"check_circle":"cancel"}</span></td>
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${d.m?"text-slate-900":"text-slate-300"}">${d.m?"check_circle":"cancel"}</span></td>
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${d.s?"text-slate-900":"text-slate-300"}">${d.s?"check_circle":"cancel"}</span></td>
                                        <td class="py-2.5 text-center"><span class="material-icons-outlined text-sm ${d.t?"text-slate-900":"text-slate-300"}">${d.t?"check_circle":"cancel"}</span></td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window._addTeamMember()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">person_add</span> Invite Team Member
                    </button>
                </div>
            </div>
        </div>
    `}function _p(){(()=>{var x;const h=window.getCache(),v=localStorage.getItem("retaileros_retailer_id");return((x=h.retailers)==null?void 0:x.find(y=>y.id===v))||{}})();const t=window.getCache().activityLogs||[],s=new Date,a=t.length>0?t.map(h=>({action:h.action||"Activity",detail:h.detail||"",user:h.user_name||"System",icon:h.icon||"info",color:h.color||"slate",time:new Date(h.created_at)})):[{action:"No activity yet",detail:"Actions like sales, settings changes, and logins will appear here",user:"System",icon:"info",color:"slate",time:s}],n=h=>{const v=Math.floor((s-h)/6e4);return v<1?"Just now":v<60?`${v}m ago`:v<1440?`${Math.floor(v/60)}h ago`:v<2880?"Yesterday":`${Math.floor(v/1440)}d ago`},l=h=>h.toLocaleString("en-IN",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit",hour12:!0}),i=s.toDateString(),r=new Date(s);r.setDate(r.getDate()-1);const d=r.toDateString(),o=a.filter(h=>h.time.toDateString()===i),u=a.filter(h=>h.time.toDateString()===d),f=a.filter(h=>h.time.toDateString()!==i&&h.time.toDateString()!==d),b=(h,v)=>`
        <div class="flex items-start gap-3 py-4 border-b border-slate-50 text-left">
            <div class="w-8 h-8 bg-${h.color}-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <span class="material-icons-outlined text-${h.color}-500 text-sm">${h.icon}</span>
            </div>
            <div class="flex-1 min-w-0 text-left">
                <div class="flex items-start justify-between gap-2 text-left">
                    <p class="text-[11px] font-black text-slate-900">${h.action}</p>
                    <span class="text-[8px] font-bold text-slate-400 whitespace-nowrap shrink-0">${v?n(h.time):l(h.time)}</span>
                </div>
                <p class="text-[10px] font-bold text-slate-500 mt-0.5 truncate">${h.detail}</p>
                <p class="text-[8px] font-black text-slate-300 uppercase tracking-widest mt-1">${h.user} &middot; ${l(h.time)}</p>
            </div>
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
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Activity Logs</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Audit Trail</p>
                    </div>
                    <button onclick="window.toast.info('Export coming soon')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined text-lg">download</span>
                    </button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto custom-scrollbar text-left">
                ${o.length>0?`
                    <div class="px-6 pt-4 pb-2 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Today</p>
                    </div>
                    <div class="px-6 text-left">
                        ${o.map(h=>b(h,!0)).join("")}
                    </div>
                `:""}

                ${u.length>0?`
                    <div class="px-6 pt-6 pb-2 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Yesterday</p>
                    </div>
                    <div class="px-6 text-left">
                        ${u.map(h=>b(h,!1)).join("")}
                    </div>
                `:""}

                ${f.length>0?`
                    <div class="px-6 pt-6 pb-2 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Older</p>
                    </div>
                    <div class="px-6 text-left">
                        ${f.map(h=>b(h,!1)).join("")}
                    </div>
                `:""}

                ${a.length===0?`
                    <div class="p-6 text-center">
                        <span class="material-icons-outlined text-slate-200 text-4xl mb-3">history</span>
                        <p class="text-[10px] font-black text-slate-400">No activity recorded yet</p>
                        <p class="text-[9px] font-bold text-slate-300 mt-1">Actions will appear here as you use the app</p>
                    </div>
                `:""}

                <div class="p-6 text-center">
                    <p class="text-[9px] font-bold text-slate-300">Showing last ${a.length} activit${a.length===1?"y":"ies"}</p>
                </div>
            </div>
        </div>
    `}function Sp(){var n;const t=((n=window.getCache().retailerSettings)==null?void 0:n.language)||{},s={app_language:t.app_language??"en",whatsapp_lang:t.whatsapp_lang??"English",invoice_lang:t.invoice_lang??"English",currency_format:t.currency_format??"₹ INR",number_format:t.number_format??"Indian (1,00,000)",date_format:t.date_format??"DD/MM/YYYY",time_format:t.time_format??"12-hour",timezone:t.timezone??"IST (UTC+5:30)"},a=[{code:"en",name:"English",native:"English",flag:"🇬🇧"},{code:"hi",name:"Hindi",native:"हिन्दी",flag:"🇮🇳"},{code:"ta",name:"Tamil",native:"தமிழ்",flag:"🇮🇳"},{code:"te",name:"Telugu",native:"తెలుగు",flag:"🇮🇳"},{code:"kn",name:"Kannada",native:"ಕನ್ನಡ",flag:"🇮🇳"},{code:"ml",name:"Malayalam",native:"മലയാളം",flag:"🇮🇳"},{code:"mr",name:"Marathi",native:"मराठी",flag:"🇮🇳"},{code:"bn",name:"Bengali",native:"বাংলা",flag:"🇮🇳"},{code:"gu",name:"Gujarati",native:"ગુજરાતી",flag:"🇮🇳"},{code:"pa",name:"Punjabi",native:"ਪੰਜਾਬੀ",flag:"🇮🇳"}];return`
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
                    <input type="text" data-field="app_language" value="${s.app_language}" class="hidden">
                    <div class="grid grid-cols-2 gap-2 text-left">
                        ${a.map(l=>`
                            <button data-lang-btn onclick="document.querySelector('[data-field=app_language]').value='${l.code}'; this.closest('[data-settings-category]').querySelectorAll('[data-lang-btn]').forEach(b => b.classList.remove('border-slate-900','bg-slate-50','ring-1','ring-slate-900')); this.classList.add('border-slate-900','bg-slate-50','ring-1','ring-slate-900')" class="card p-4 text-left flex items-center gap-3 transition-all ${s.app_language===l.code?"border-slate-900 bg-slate-50 ring-1 ring-slate-900":"hover:border-slate-300"}">
                                <span class="text-lg">${l.flag}</span>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">${l.name}</p>
                                    <p class="text-[9px] font-bold text-slate-400">${l.native}</p>
                                </div>
                                ${s.app_language===l.code?'<span class="material-icons-outlined text-slate-900 text-sm ml-auto">check_circle</span>':""}
                            </button>
                        `).join("")}
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
                                <option ${s.whatsapp_lang==="English"?"selected":""}>English</option>
                                <option ${s.whatsapp_lang==="Hindi"?"selected":""}>Hindi</option>
                                <option ${s.whatsapp_lang==="Regional (auto-detect)"?"selected":""}>Regional (auto-detect)</option>
                            </select>
                        </div>
                        <div class="flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Invoice Language</p>
                                <p class="text-[9px] font-bold text-slate-400">Language on printed/PDF invoices</p>
                            </div>
                            <select data-field="invoice_lang" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option ${s.invoice_lang==="English"?"selected":""}>English</option>
                                <option ${s.invoice_lang==="Hindi"?"selected":""}>Hindi</option>
                                <option ${s.invoice_lang==="Bilingual (EN + HI)"?"selected":""}>Bilingual (EN + HI)</option>
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
                                <option ${s.currency_format==="₹ INR"?"selected":""}>&#8377; INR (Indian Rupee)</option>
                                <option ${s.currency_format==="$ USD"?"selected":""}>$ USD</option>
                                <option ${s.currency_format==="AED (Dirham)"?"selected":""}>AED (Dirham)</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Number Format</p>
                                <p class="text-[9px] font-bold text-slate-400">Indian (1,00,000) vs International (100,000)</p>
                            </div>
                            <select data-field="number_format" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option ${s.number_format==="Indian (1,00,000)"?"selected":""}>Indian (1,00,000)</option>
                                <option ${s.number_format==="International (100,000)"?"selected":""}>International (100,000)</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Date Format</p>
                                <p class="text-[9px] font-bold text-slate-400">How dates appear across the app</p>
                            </div>
                            <select data-field="date_format" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option ${s.date_format==="DD/MM/YYYY"?"selected":""}>DD/MM/YYYY</option>
                                <option ${s.date_format==="MM/DD/YYYY"?"selected":""}>MM/DD/YYYY</option>
                                <option ${s.date_format==="YYYY-MM-DD"?"selected":""}>YYYY-MM-DD</option>
                                <option ${s.date_format==="DD Mon YYYY"?"selected":""}>DD Mon YYYY</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Time Format</p>
                                <p class="text-[9px] font-bold text-slate-400">12-hour or 24-hour clock</p>
                            </div>
                            <select data-field="time_format" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option value="12-hour" ${s.time_format==="12-hour"?"selected":""}>12-hour (2:30 PM)</option>
                                <option value="24-hour" ${s.time_format==="24-hour"?"selected":""}>24-hour (14:30)</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Timezone</p>
                                <p class="text-[9px] font-bold text-slate-400">Store timezone for scheduling</p>
                            </div>
                            <select data-field="timezone" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option ${s.timezone==="IST (UTC+5:30)"?"selected":""}>IST (UTC+5:30)</option>
                                <option ${s.timezone==="GST (UTC+4:00)"?"selected":""}>GST (UTC+4:00)</option>
                                <option ${s.timezone==="SGT (UTC+8:00)"?"selected":""}>SGT (UTC+8:00)</option>
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
    `}function $p(){var l,i,r,d,o,u,f;const e=window.getCache(),t={customers:((l=e.customers)==null?void 0:l.length)||0,sales:((i=e.sales)==null?void 0:i.length)||0,products:((r=e.products)==null?void 0:r.length)||0,automations:((d=e.automations)==null?void 0:d.length)||0,repairs:((o=e.repairs)==null?void 0:o.length)||0,inquiries:((u=e.inquiries)==null?void 0:u.length)||0},s=Object.values(t).reduce((b,h)=>b+h,0),a=((f=e.retailerSettings)==null?void 0:f.backup)||{},n={auto_backup_enabled:a.auto_backup_enabled??!0,backup_frequency:a.backup_frequency??"Weekly",send_to_email:a.send_to_email??!0,retention_period:a.retention_period??"90 days",export_format:a.export_format??"CSV (Excel-compatible)"};return`
        <div class="h-full flex flex-col relative bg-white animate-slide-up text-left" data-settings-category="backup">
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
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Your Data
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
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Export Data
                    </p>
                    <div class="space-y-3 text-left">
                        <p class="text-[10px] font-bold text-slate-500">Select what to include in your backup:</p>
                        ${[{name:"Customers & Groups",icon:"people",checked:!0},{name:"Sales & Invoices",icon:"receipt",checked:!0},{name:"Products & Inventory",icon:"inventory_2",checked:!0},{name:"Automations & Messages",icon:"smart_toy",checked:!0},{name:"Repairs & Service Jobs",icon:"build",checked:!1},{name:"Communication Logs",icon:"chat",checked:!1},{name:"Inquiries",icon:"help_outline",checked:!1}].map(b=>`
                            <div class="card p-3 flex items-center justify-between text-left">
                                <div class="flex items-center gap-3 text-left">
                                    <span class="material-icons-outlined text-slate-400 text-sm">${b.icon}</span>
                                    <p class="text-xs font-bold text-slate-900">${b.name}</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" class="sr-only peer" ${b.checked?"checked":""}>
                                    <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                                </label>
                            </div>
                        `).join("")}
                    </div>
                    <div class="flex items-center justify-between text-left">
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900">Export Format</p>
                        </div>
                        <select data-field="export_format" onchange="window.saveSettings('backup')" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                            <option ${n.export_format==="CSV (Excel-compatible)"?"selected":""}>CSV (Excel-compatible)</option>
                            <option ${n.export_format==="JSON (Developer format)"?"selected":""}>JSON (Developer format)</option>
                            <option ${n.export_format==="PDF Report"?"selected":""}>PDF Report</option>
                        </select>
                    </div>
                    <button onclick="window.toast.info('Export started — download will begin shortly')" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">download</span> Download Backup
                    </button>
                </div>

                <!-- Auto Backup -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Automatic Backup
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Auto-Backup</p>
                                <p class="text-[9px] font-bold text-slate-400">Automatically backup data on schedule</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" data-field="auto_backup_enabled" onchange="window.saveSettings('backup')" ${n.auto_backup_enabled?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Frequency</p>
                                <p class="text-[9px] font-bold text-slate-400">How often to run auto-backup</p>
                            </div>
                            <select data-field="backup_frequency" onchange="window.saveSettings('backup')" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                                <option ${n.backup_frequency==="Daily"?"selected":""}>Daily</option>
                                <option ${n.backup_frequency==="Weekly"?"selected":""}>Weekly</option>
                                <option ${n.backup_frequency==="Monthly"?"selected":""}>Monthly</option>
                            </select>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Send to Email</p>
                                <p class="text-[9px] font-bold text-slate-400">Email backup file to store owner</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" data-field="send_to_email" onchange="window.saveSettings('backup')" ${n.send_to_email?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
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
                        ${[{date:"Feb 6, 2026 — 3:00 AM",size:"2.4 MB",type:"Auto",status:"success"},{date:"Jan 30, 2026 — 3:00 AM",size:"2.1 MB",type:"Auto",status:"success"},{date:"Jan 23, 2026 — 11:30 AM",size:"1.8 MB",type:"Manual",status:"success"}].map(b=>`
                            <div class="flex items-center justify-between py-3 border-b border-slate-50 text-left">
                                <div class="flex items-center gap-3 text-left">
                                    <span class="material-icons-outlined text-slate-500 text-sm">cloud_done</span>
                                    <div class="text-left">
                                        <p class="text-[10px] font-bold text-slate-900">${b.date}</p>
                                        <p class="text-[8px] font-bold text-slate-400">${b.size} &middot; ${b.type}</p>
                                    </div>
                                </div>
                                <button class="text-[8px] font-black text-slate-500 uppercase tracking-widest hover:text-slate-900">Download</button>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Data Retention -->
                <div class="p-6 space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Data Retention
                    </p>
                    <div class="card p-4 flex items-center justify-between text-left">
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900">Keep Backup History</p>
                            <p class="text-[9px] font-bold text-slate-400">Auto-delete old backups after period</p>
                        </div>
                        <select data-field="retention_period" onchange="window.saveSettings('backup')" class="px-3 py-2 bg-slate-50 border-0 rounded-lg text-[10px] font-black text-slate-700 focus:outline-none">
                            <option ${n.retention_period==="30 days"?"selected":""}>30 days</option>
                            <option ${n.retention_period==="90 days"?"selected":""}>90 days</option>
                            <option ${n.retention_period==="1 year"?"selected":""}>1 year</option>
                            <option ${n.retention_period==="Forever"?"selected":""}>Forever</option>
                        </select>
                    </div>
                    <div class="card p-4 bg-slate-100 border-slate-200 text-left">
                        <div class="flex items-start gap-3 text-left">
                            <span class="material-icons-outlined text-slate-500 text-lg mt-0.5">warning</span>
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-500">Delete All Store Data</p>
                                <p class="text-[9px] font-bold text-slate-500 mt-1">Permanently erase all data including customers, sales, inventory and automations. This action cannot be undone.</p>
                                <button onclick="window.toast.warning('Please contact support to delete your data')" class="mt-3 px-4 py-2 bg-white border border-slate-200 rounded-lg text-[8px] font-black text-slate-400 uppercase tracking-widest hover:bg-slate-50 transition-all">Request Data Deletion</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `}function Ep(){const e=[{version:"2.1.0",date:"February 6, 2026",tag:"Latest",tagColor:"slate",highlights:[{icon:"shield",title:"Complete Multi-Tenant Isolation",desc:"Every table now filtered by retailer_id — your data is fully isolated from other stores."},{icon:"table_chart",title:"3 New Modules",desc:"Inquiries, Repairs, and Inventory Logs now fully integrated with tenant architecture."},{icon:"settings",title:"11 New Settings Pages",desc:"Security, Alerts, Taxes, Plugins, Teams, Logs, Language, Backup, Updates, Theme, and Help."}],changes:["Added retailer_id filtering to all 11 tenant-scoped tables","New tenant-aware CRUD helpers for inquiries, repairs, inventory_logs","Replaced raw SQL calls with proper db helpers in all modules","Sync layer now fetches inquiries, repairs, inventory_logs from DB","Settings dashboard fully functional with all sub-apps"]},{version:"2.0.0",date:"February 5, 2026",tag:"Major",tagColor:"slate",highlights:[{icon:"store",title:"Multi-Tenant Architecture",desc:"Full SaaS multi-tenant design with row-level data isolation per retailer."},{icon:"login",title:"Real Authentication",desc:"DB-backed login via mobile number or store code. No more mock login."},{icon:"people",title:"Demo Retailers",desc:"TechZone Electronics and Digital World with isolated sample data for testing."}],changes:["Added retailer_id column to 8 tenant-scoped tables","State management for tenant identity (setRetailer/clearRetailer)","Tenant-filtered sync layer for all data queries","Real login flow with DB authentication","Settings > Store shows 40+ retailer fields","Created 2 demo retailers with isolated sample data"]},{version:"1.0.0",date:"January 2026",tag:"Initial",tagColor:"slate",highlights:[{icon:"rocket_launch",title:"RetailerOS Launch",desc:"Initial release with Sales Desk, Customers, Inventory, Automations, and Repairs modules."}],changes:["Sales Desk with new transaction flow","Customer management with groups","Product inventory with inward shipments","Automation sequences for post-purchase journeys","Repair job tracking with status lifecycle","WhatsApp communication log","Brand schemes and promotions","Settings with Roles, Finance, Ledger, AI Config"]}];return`
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
                                <span class="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-[8px] font-black uppercase tracking-widest">Up to date</span>
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
                                        <div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                                            <span class="material-icons-outlined text-slate-500 text-sm">${a.icon}</span>
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
    `}function Ip(){var n;const t=((n=window.getCache().retailerSettings)==null?void 0:n.theme)||{},s={display_mode:t.display_mode??localStorage.getItem("retaileros_theme")??"light",accent_color:t.accent_color??localStorage.getItem("retaileros_accent")??"slate",layout_density:t.layout_density??localStorage.getItem("retaileros_density")??"comfortable",font_size:t.font_size??100,sidebar_collapsed:t.sidebar_collapsed??!1,show_app_labels:t.show_app_labels??!0,animations_enabled:t.animations_enabled??!0},a=[{name:"Slate",key:"slate",bg:"bg-slate-900",ring:"ring-slate-900"},{name:"Indigo",key:"indigo",bg:"bg-indigo-600",ring:"ring-indigo-600"},{name:"Blue",key:"blue",bg:"bg-blue-600",ring:"ring-blue-600"},{name:"Emerald",key:"emerald",bg:"bg-emerald-600",ring:"ring-emerald-600"},{name:"Violet",key:"violet",bg:"bg-violet-600",ring:"ring-violet-600"},{name:"Rose",key:"rose",bg:"bg-rose-600",ring:"ring-rose-600"},{name:"Amber",key:"amber",bg:"bg-amber-600",ring:"ring-amber-600"},{name:"Teal",key:"teal",bg:"bg-teal-600",ring:"ring-teal-600"}];return window.saveThemeSettings=async function(){const l=document.querySelector('[data-settings-category="theme"]');if(!l)return;const i={};l.querySelectorAll('input[type="hidden"][data-field], input[type="text"][data-field]').forEach(r=>{i[r.dataset.field]=r.value}),l.querySelectorAll('input[type="range"][data-field]').forEach(r=>{i[r.dataset.field]=Number(r.value)}),l.querySelectorAll('input[type="checkbox"][data-field]').forEach(r=>{i[r.dataset.field]=r.checked}),i.display_mode&&localStorage.setItem("retaileros_theme",i.display_mode),i.accent_color&&localStorage.setItem("retaileros_accent",i.accent_color),i.layout_density&&localStorage.setItem("retaileros_density",i.layout_density);try{await C.settings.save("theme",i),window._db_cache.retailerSettings||(window._db_cache.retailerSettings={}),window._db_cache.retailerSettings.theme=i,window.toast&&window.toast.success("Theme saved")}catch(r){console.error("Failed to save theme:",r),window.toast&&window.toast.error("Failed to save theme")}},window._selectThemeOption=function(l,i){const r=document.querySelector(`[data-field="${l}"]`);r&&(r.value=i);const d=r==null?void 0:r.closest(".grid, .space-y-3");d&&d.querySelectorAll("[data-option-btn]").forEach(o=>{const u=o.dataset.optionValue===i;l==="accent_color"?(o.className=o.className.replace(/bg-slate-50 ring-2 ring-\w+-\d+/g,"").replace("hover:bg-slate-50",""),u?o.classList.add("bg-slate-50"):o.classList.add("hover:bg-slate-50")):(o.classList.toggle("border-slate-900",u),o.classList.toggle("bg-slate-50",u),o.classList.toggle("ring-1",u),o.classList.toggle("ring-slate-900",u),o.classList.toggle("hover:border-slate-300",!u))})},`
        <div data-settings-category="theme" class="h-full flex flex-col relative bg-white animate-slide-up text-left">
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
                <input type="hidden" data-field="display_mode" value="${s.display_mode}">
                <input type="hidden" data-field="accent_color" value="${s.accent_color}">
                <input type="hidden" data-field="layout_density" value="${s.layout_density}">

                <!-- Mode -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Mode
                    </p>
                    <div class="grid grid-cols-3 gap-3 text-left">
                        ${[{name:"Light",key:"light",icon:"light_mode",desc:"Clean white interface"},{name:"Dark",key:"dark",icon:"dark_mode",desc:"Easy on the eyes"},{name:"System",key:"system",icon:"settings_brightness",desc:"Match device setting"}].map(l=>`
                            <button data-option-btn data-option-value="${l.key}" onclick="window._selectThemeOption('display_mode','${l.key}')" class="card p-4 text-center transition-all ${s.display_mode===l.key?"border-slate-900 bg-slate-50 ring-1 ring-slate-900":"hover:border-slate-300"}">
                                <span class="material-icons-outlined text-2xl ${s.display_mode===l.key?"text-slate-900":"text-slate-400"} mb-2">${l.icon}</span>
                                <p class="text-[10px] font-black text-slate-900">${l.name}</p>
                                <p class="text-[8px] font-bold text-slate-400 mt-0.5">${l.desc}</p>
                            </button>
                        `).join("")}
                    </div>
                </div>

                <!-- Accent Color -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Accent Color
                    </p>
                    <div class="grid grid-cols-4 gap-3 text-left">
                        ${a.map(l=>`
                            <button data-option-btn data-option-value="${l.key}" onclick="window._selectThemeOption('accent_color','${l.key}')" class="flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${s.accent_color===l.key?"bg-slate-50 ring-2 "+l.ring:"hover:bg-slate-50"}">
                                <div class="w-8 h-8 ${l.bg} rounded-full ${s.accent_color===l.key?"ring-2 ring-offset-2 "+l.ring:""}"></div>
                                <span class="text-[8px] font-black text-slate-600 uppercase tracking-widest">${l.name}</span>
                            </button>
                        `).join("")}
                    </div>
                </div>

                <!-- Layout Density -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Layout Density
                    </p>
                    <div class="space-y-3 text-left">
                        ${[{name:"Compact",key:"compact",desc:"Smaller spacing, more content visible. Best for desktop.",icon:"density_small"},{name:"Comfortable",key:"comfortable",desc:"Balanced spacing for readability. Default experience.",icon:"density_medium"},{name:"Spacious",key:"spacious",desc:"Extra breathing room. Best for touch devices.",icon:"density_large"}].map(l=>`
                            <button data-option-btn data-option-value="${l.key}" onclick="window._selectThemeOption('layout_density','${l.key}')" class="card p-4 flex items-center gap-4 text-left w-full transition-all ${s.layout_density===l.key?"border-slate-900 bg-slate-50 ring-1 ring-slate-900":"hover:border-slate-300"}">
                                <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                                    <span class="material-icons-outlined text-slate-500">${l.icon}</span>
                                </div>
                                <div class="text-left">
                                    <p class="text-xs font-black text-slate-900">${l.name}</p>
                                    <p class="text-[9px] font-bold text-slate-400">${l.desc}</p>
                                </div>
                                ${s.layout_density===l.key?'<span class="material-icons-outlined text-slate-900 text-sm ml-auto">check_circle</span>':""}
                            </button>
                        `).join("")}
                    </div>
                </div>

                <!-- Font Size -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Font Size
                    </p>
                    <div class="card p-5 text-left">
                        <div class="flex items-center justify-between mb-3 text-left">
                            <span class="text-xs font-bold text-slate-400">A</span>
                            <span class="text-xl font-bold text-slate-400">A</span>
                        </div>
                        <input type="range" data-field="font_size" min="80" max="120" value="${s.font_size}" class="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer accent-slate-900">
                        <p class="text-[9px] font-bold text-slate-400 text-center mt-2">${s.font_size}% ${s.font_size===100?"(Default)":""}</p>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Sidebar
                    </p>
                    <div class="space-y-3 text-left">
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Collapsed by Default</p>
                                <p class="text-[9px] font-bold text-slate-400">Start with minimized sidebar</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="sidebar_collapsed" class="sr-only peer" ${s.sidebar_collapsed?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                            </label>
                        </div>
                        <div class="card p-4 flex items-center justify-between text-left">
                            <div class="text-left">
                                <p class="text-xs font-black text-slate-900">Show App Labels</p>
                                <p class="text-[9px] font-bold text-slate-400">Display text labels under sidebar icons</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" data-field="show_app_labels" class="sr-only peer" ${s.show_app_labels?"checked":""}>
                                <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
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
                            <input type="checkbox" data-field="animations_enabled" class="sr-only peer" ${s.animations_enabled?"checked":""}>
                            <div class="w-9 h-5 bg-slate-200 peer-checked:bg-slate-900 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full"></div>
                        </label>
                    </div>
                </div>

                <div class="p-6 pt-0 text-left">
                    <button onclick="window.saveThemeSettings()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Apply Theme
                    </button>
                </div>
            </div>
        </div>
    `}function Cp(){const e=(()=>{var l;const a=window.getCache(),n=localStorage.getItem("retaileros_retailer_id");return((l=a.retailers)==null?void 0:l.find(i=>i.id===n))||{}})(),t=[{q:"How do I add a new customer?",a:"Go to Clients app from the launcher, then tap the + button. Fill in the customer name and phone number to create a new record."},{q:"How do I create a sale?",a:'Open Sales Desk, tap "New Transaction", select or add a customer, add products from your inventory, choose payment method, and confirm the sale.'},{q:"How do I set up automation for a sale?",a:"After completing a sale, go to Automation app. Create a new sequence linked to the sale — you can schedule WhatsApp messages at different day intervals."},{q:"How does multi-tenant isolation work?",a:"Each retailer's data (customers, sales, inventory, etc.) is completely separate. When you log in, you only see your own store's data. No other retailer can access it."},{q:"How do I track repair jobs?",a:"Use the Repairs module to create job sheets. Each repair moves through a lifecycle: Collected > Sent to Brand > In Repair > Ready > Handed Over."},{q:"How do I export my data?",a:"Go to Settings > Backup. Select the data you want to export, choose CSV or JSON format, and download. You can also set up auto-backups."},{q:"Can I add staff members?",a:"Go to Settings > Teams to invite staff. Each team member gets a role (Owner, Manager, Sales, Technician) with specific module access."}];return`
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
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Quick Support
                    </p>
                    <div class="grid grid-cols-2 gap-3 text-left">
                        <button onclick="window.toast.info('Opening WhatsApp support...')" class="card p-4 text-center border-slate-200 hover:border-slate-900 hover:text-slate-900 transition-all">
                            <span class="material-icons-outlined text-slate-500 text-2xl mb-2">chat</span>
                            <p class="text-[10px] font-black text-slate-900">WhatsApp</p>
                            <p class="text-[8px] font-bold text-slate-400 mt-0.5">Chat with us</p>
                        </button>
                        <button onclick="window.toast.info('Calling support...')" class="card p-4 text-center border-slate-200 hover:border-slate-900 hover:text-slate-900 transition-all">
                            <span class="material-icons-outlined text-slate-500 text-2xl mb-2">call</span>
                            <p class="text-[10px] font-black text-slate-900">Call Us</p>
                            <p class="text-[8px] font-bold text-slate-400 mt-0.5">1800-XXX-XXXX</p>
                        </button>
                        <button onclick="window.toast.info('Opening email...')" class="card p-4 text-center border-slate-200 hover:border-slate-900 hover:text-slate-900 transition-all">
                            <span class="material-icons-outlined text-slate-500 text-2xl mb-2">email</span>
                            <p class="text-[10px] font-black text-slate-900">Email</p>
                            <p class="text-[8px] font-bold text-slate-400 mt-0.5">support@retaileros.in</p>
                        </button>
                        <button onclick="window.toast.info('Opening ticket system...')" class="card p-4 text-center border-slate-200 hover:border-slate-900 hover:text-slate-900 transition-all">
                            <span class="material-icons-outlined text-slate-500 text-2xl mb-2">confirmation_number</span>
                            <p class="text-[10px] font-black text-slate-900">Raise Ticket</p>
                            <p class="text-[8px] font-bold text-slate-400 mt-0.5">Track your issue</p>
                        </button>
                    </div>
                </div>

                <!-- Video Guides -->
                <div class="p-6 space-y-4 border-b border-dashed border-slate-200 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Guides & Tutorials
                    </p>
                    <div class="space-y-3 text-left">
                        ${[{title:"Getting Started",desc:"Complete setup guide for new retailers",icon:"rocket_launch",color:"indigo"},{title:"Sales & Billing",desc:"Create invoices, apply schemes, manage payments",icon:"receipt",color:"green"},{title:"Customer Management",desc:"Add customers, create groups, track engagement",icon:"people",color:"blue"},{title:"Inventory Control",desc:"Track stock, inward shipments, product catalog",icon:"inventory_2",color:"amber"},{title:"Automation Setup",desc:"Post-purchase sequences, WhatsApp campaigns",icon:"smart_toy",color:"purple"},{title:"Reports & Analytics",desc:"Sales reports, customer insights, performance",icon:"analytics",color:"teal"}].map(a=>`
                            <button onclick="window.toast.info('Guide: ${a.title} — coming soon')" class="card p-4 flex items-center gap-4 text-left w-full hover:border-slate-300 transition-all">
                                <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                                    <span class="material-icons-outlined text-slate-500">${a.icon}</span>
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
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Frequently Asked Questions
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
                                <p class="text-xs font-bold text-slate-900">Professional</p>
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
                    <button onclick="window.toast.info('Bug report form coming soon')" class="w-full py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">bug_report</span> Report a Bug
                    </button>
                </div>
            </div>
        </div>
    `}function Vn(e){const t=e==="mobile",s=e==="desktop-secondary";if(window.setSettingsView=a=>{p.settingsView=a,p.settingsSubView=null,D()},window.setSettingsSubView=a=>{p.settingsSubView=a,D()},window.setSettingsRole=a=>{p.settingsActiveRole=a,p.settingsSubView="detail",D()},window.saveNewRole=()=>{const a=document.querySelector('input[placeholder="e.g. Floor Supervisor"]');a&&a.value?(p.settingsActiveRole=a.value,p.settingsSubView="detail",window.toast.success(`Role "${a.value}" created successfully!`),D()):window.toast.warning("Please enter a role name")},window.updateRole=()=>{window.toast.success("Role profile updated successfully!"),window.setSettingsSubView("detail")},s||t&&p.settingsView){if(p.settingsView==="roles")return up();if(p.settingsView==="accounting")return xp();if(p.settingsView==="ledger")return fp();if(p.settingsView==="ai")return mp();if(p.settingsView==="store")return hp();if(p.settingsView==="security")return gp();if(p.settingsView==="alerts")return vp();if(p.settingsView==="taxes")return wp();if(p.settingsView==="plugins")return yp();if(p.settingsView==="teams")return kp();if(p.settingsView==="logs")return _p();if(p.settingsView==="lang")return Sp();if(p.settingsView==="backup")return $p();if(p.settingsView==="updates")return Ep();if(p.settingsView==="theme")return Ip();if(p.settingsView==="help")return Cp();if(s)return""}return pp(e)}function Rp(){return`
        <div class="space-y-4 text-left">
            ${[{id:"apple",n:"Apple",s:"PREMIUM PARTNER",amt:"₹4,82,500",live:12,comp:48,set:142,nSet:24,i:"apple"},{id:"nothing",n:"Nothing",s:"EMERGAGING BRAND",amt:"₹1,12,000",live:4,comp:15,set:56,nSet:8,i:"nothing"},{id:"oneplus",n:"OnePlus",s:"GLOBAL TECH",amt:"₹2,45,900",live:8,comp:32,set:98,nSet:12,i:"oneplus"}].map(t=>`
                <div onclick="selectSchemeBrand('${t.n}')" class="card p-5 border-2 transition-all group cursor-pointer relative overflow-hidden text-left ${p.activeSchemeBrand===t.n?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
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
                                <div class="w-1.5 h-1.5 bg-slate-900 rounded-full text-left"></div>
                                <p class="text-[8px] font-black text-slate-900 uppercase tracking-widest text-left">Settled: ${t.set}</p>
                            </div>
                            <div class="flex items-center gap-1.5 text-left">
                                <div class="w-1.5 h-1.5 bg-slate-300 rounded-full text-left"></div>
                                <p class="text-[8px] font-black text-slate-900 uppercase tracking-widest text-left">Not Settled: ${t.nSet}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `).join("")}
        </div>
    `}window.setSchemeViewMode=e=>{p.showSchemeDetails=e==="details",D()};window.setActiveScheme=e=>{p.activeScheme=e,D()};function Ap(){const t=(window.getCache?window.getCache():{schemes:[]}).schemes||[];return`
        <div class="space-y-4 animate-slide-up text-left">
            ${t.map(s=>{var a;return`
                <div onclick="window.setSchemeViewMode('details'); window.setActiveScheme(${JSON.stringify(s).replace(/"/g,"&quot;")})" class="card p-6 border-2 transition-all cursor-pointer group text-left ${((a=p.activeScheme)==null?void 0:a.id)===s.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                    <div class="flex justify-between items-start mb-4 text-left">
                        <div class="text-left">
                            <h3 class="text-lg font-black text-slate-900 text-left">${s.name}</h3>
                            <span class="bg-slate-100 text-slate-600 text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide inline-block mt-1 text-left">${s.brand}</span>
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
    `}function Tp(e){const t=e==="mobile",s=p.activeScheme;if(!s)return'<div class="p-10 text-center">Select a scheme to view details</div>';const n=((window.getCache?window.getCache():{sales:[]}).sales||[]).filter(u=>{const f=u.product_name||"",b=typeof s=="object"&&s.brand?s.brand:"";return f.includes(b)||u.items&&u.items.some(h=>(h.name||"").includes(b))}),l=typeof s=="object"&&s.brand?s.brand:s,i=typeof s=="object"&&s.name?s.name:"Scheme",r=typeof s=="object"&&s.payout?s.payout:"0",d=typeof s=="object"&&s.end_date?s.end_date:new Date,o={count:n.length,growth:"+0%",color:"bg-slate-950"};return`
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
                            <h3 class="text-sm font-black text-slate-900 text-left">${i}</h3>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3 text-left">
                         <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left">
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">PAYOUT</p>
                            <p class="text-[11px] font-black text-slate-900 text-left">₹${parseInt(r).toLocaleString()}</p>
                        </div>
                         <div class="bg-slate-50 border border-slate-100 rounded-xl p-3 text-left">
                            <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1 text-left">VALID UNTIL</p>
                            <p class="text-[11px] font-black text-slate-900 text-left">${new Date(d).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>

                <!-- Metrics -->
                <div class="${o.color} rounded-[32px] p-6 text-white relative overflow-hidden text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 text-left">TOTAL ORDERS UNDER SCHEME</p>
                    <div class="flex items-end gap-3 text-left">
                        <h2 class="text-5xl font-black tracking-tighter text-left">${o.count}</h2>
                        <p class="text-[10px] font-bold text-slate-900 mb-2 text-left">${o.growth} this week</p>
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
    `}function Hn(e){const t=e==="desktop-secondary",s=e==="mobile";if(window.selectSchemeBrand=n=>{p.activeSchemeBrand=n,p.schemesTab="list",D()},window.selectScheme=n=>{p.activeScheme=n,s&&(p.showSchemeDetails=!0),D()},window.setSchemesTab=n=>{p.schemesTab=n,D()},window.toggleSchemeDetails=n=>{p.showSchemeDetails=n,D()},t||s&&p.showSchemeDetails)return Tp(e);const a=p.schemesTab==="brands";return`
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
                ${a?Rp():Ap()}
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
    `}function Mp(){const e=p.marketplaceTab==="browse";return`
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
    `}function Dp(){const t=window.getCache().marketplace||[];return`
        <div class="grid grid-cols-2 gap-4 animate-slide-up text-left">
            ${t.map(s=>`
                <div class="card bg-white border-slate-100 hover:border-slate-300 transition-all cursor-pointer overflow-hidden p-0 h-fit text-left">
                    <div class="aspect-square bg-slate-50/50 flex items-center justify-center py-8 relative text-left">
                        <span class="material-icons-outlined text-4xl text-slate-200 text-left">shopping_bag</span>
                        <span class="absolute top-2 right-2 px-1.5 py-0.5 rounded-[4px] text-[6px] font-black uppercase tracking-wider text-left bg-slate-900 text-white">LIVE</span>
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
    `}function Op(){return`
        <div class="space-y-4 animate-slide-up text-left">
            ${[{id:"o1",t:"Flagship X Pro - 256GB",d:"Space Black • Sealed Box",s:"14 Units",inq:"8 New",st:"ACTIVE",i:"tablet_android"},{id:"o2",t:"Premium Audio Buds G2",d:"White • Demo Units",s:"5 Units",inq:"0 New",st:"PAUSED",i:"headset"},{id:"o3",t:'Smart Pad Ultra 11"',d:"Silver • WiFi Only",s:"2 Units",inq:"2 New",st:"ACTIVE",i:"tablet_mac"}].map(t=>`
                <div class="card p-5 border-slate-100 hover:border-slate-300 transition-all flex gap-4 pr-3 text-left">
                    <div class="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 text-left">
                        <span class="material-icons-outlined text-slate-300 text-left">${t.i}</span>
                    </div>
                    <div class="flex-1 text-left">
                        <div class="flex justify-between items-start mb-1 text-left">
                            <h3 class="text-sm font-black text-slate-900 text-left">${t.t}</h3>
                            <span class="px-2 py-0.5 rounded-full text-[7px] font-black uppercase text-right ${t.st==="ACTIVE"?"bg-slate-900 text-white":"bg-slate-200 text-slate-600"}">${t.st}</span>
                        </div>
                        <p class="text-[10px] font-bold text-slate-400 text-left">${t.d}</p>
                        <div class="flex gap-4 mt-3 pt-3 border-t border-slate-50 text-left">
                            <div class="text-left">
                                <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-0.5 text-left">STOCK</p>
                                <p class="text-[10px] font-black text-slate-900 text-left">${t.s}</p>
                            </div>
                            <div class="text-left">
                                <p class="text-[7px] font-bold text-slate-300 uppercase tracking-widest mb-0.5 text-left">INQUIRIES</p>
                                <p class="text-[10px] font-black text-slate-900 text-left">${t.inq}</p>
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
    `}function Lp(e){return`
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
    `}function Gn(e){if(e==="desktop-secondary"||e==="mobile"&&p.marketplaceViewMode==="add")return Lp(e);const a=p.marketplaceTab==="browse";return`
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            ${Mp()}
            <div class="flex-1 overflow-y-auto px-8 space-y-6 custom-scrollbar pb-20 text-left">
                ${a?Dp():Op()}
            </div>

             <!-- Floating Action Button -->
            <div class="absolute bottom-32 right-8 z-30 text-left">
                <button onclick="window.setMarketplaceViewMode('add')" class="w-16 h-16 bg-slate-950 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-center">
                    <span class="material-icons-outlined text-3xl font-light text-center">add</span>
                </button>
            </div>
        </div>
    `}function jp(){return`
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
    `}function Pp(){return`
        <div class="grid grid-cols-2 gap-4 mb-8 text-left">
            <div class="card p-5 border-slate-100 shadow-sm relative overflow-hidden group text-left">
                <div class="flex justify-between items-start mb-2 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Unfulfilled</p>
                    <span class="material-icons-outlined text-slate-900 text-sm text-left">trending_down</span>
                </div>
                <h2 class="text-3xl font-black text-slate-900 mb-1 text-left">142</h2>
                <p class="text-[8px] font-black text-slate-900 uppercase tracking-widest leading-none text-left">Lost Sales: $12.4K</p>
                <div class="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity text-left">
                    <span class="material-icons-outlined text-8xl text-left">error_outline</span>
                </div>
            </div>
            <div class="card p-5 border-slate-100 shadow-sm relative overflow-hidden group text-left">
                <div class="flex justify-between items-start mb-2 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Demand Met</p>
                    <span class="material-icons-outlined text-slate-900 text-sm text-left">check_circle</span>
                </div>
                <h2 class="text-3xl font-black text-slate-900 mb-1 text-left">84%</h2>
                <p class="text-[8px] font-black text-slate-900 uppercase tracking-widest leading-none text-left">+12% VS Last Month</p>
                 <div class="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity text-left">
                    <span class="material-icons-outlined text-8xl text-left">verified_user</span>
                </div>
            </div>
        </div>
    `}function Np(){const t=window.getCache().inquiries||[],s=a=>{switch(a){case"PENDING":return"bg-slate-200 text-slate-600";case"FULFILLED":return"bg-slate-900 text-white";case"CONTACTED":return"bg-slate-300 text-slate-700";case"LOST SALE":return"bg-slate-100 text-slate-400";default:return"bg-slate-50 text-slate-400"}};return`
        <div class="space-y-3 text-left">
            ${t.map(a=>{var n;return`
                <div onclick="window.setActiveInquiry(${JSON.stringify(a).replace(/"/g,"&quot;")}); window.setInquiryViewMode('resolve')" class="card p-4 border-2 transition-all cursor-pointer flex items-center gap-4 text-left ${((n=p.activeInquiry)==null?void 0:n.id)===a.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
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
    `}async function qp(){const e=document.getElementById("inq-customer").value,t=document.getElementById("inq-product").value,s=document.getElementById("inq-notes").value;if(!e||!t){alert("Customer and Product are required.");return}const a=document.getElementById("log-inquiry-btn");a.disabled=!0,a.innerText="Logging...";try{await C.inquiries.add({id:"INQ-"+Math.random().toString(36).substr(2,6).toUpperCase(),customer_name:e,product_name:t,request:s,status:"PENDING",created_at:new Date().toISOString()}),await K(),window.setInquiryViewMode("list")}catch(n){alert("Error: "+n.message),a.disabled=!1,a.innerText="Log Inquiry"}}window.saveInquiry=qp;function Bp(e){return`
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
    `}async function Fp(e){var t;if((t=p.activeInquiry)!=null&&t.id)try{await C.inquiries.updateStatus(p.activeInquiry.id,e),await K(),window.setInquiryViewMode("list")}catch(s){alert("Update failed: "+s.message)}}window.updateInquiryStatus=Fp;function Up(){const e=p.activeInquiry;return e?`
        <div class="h-full flex flex-col bg-white animate-slide-up text-left">
            <header class="p-8 pb-4 shrink-0 flex items-center justify-between text-left">
                <button onclick="window.setInquiryViewMode('list')" class="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full text-left">
                    <span class="material-icons-outlined text-lg text-left">arrow_back</span>
                </button>
                <div class="flex gap-2 text-left">
                    <button onclick="updateInquiryStatus('LOST SALE')" class="px-4 py-2 bg-slate-100 text-slate-400 rounded-xl text-[9px] font-black uppercase tracking-widest text-left">Lost Sale</button>
                    <button onclick="updateInquiryStatus('FULFILLED')" class="px-4 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest text-left">Won Sale</button>
                </div>
            </header>

            <div class="flex-1 overflow-y-auto p-8 pt-4 space-y-8 custom-scrollbar text-left">
                <div class="text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Product Interest</p>
                    <h2 class="text-2xl font-black text-slate-900 tracking-tighter text-left">${e.product_name||e.request}</h2>
                    <div class="flex items-center gap-2 mt-2 text-left">
                         <span class="bg-slate-200 text-slate-600 text-[8px] font-black px-1.5 py-0.5 rounded uppercase text-left">${e.status}</span>
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
                            <span class="material-icons-outlined text-slate-400 mb-2 text-left">call</span>
                            <h4 class="text-[10px] font-black text-slate-900 uppercase text-left">Call Customer</h4>
                        </div>
                        <div class="card p-4 hover:border-slate-900 cursor-pointer transition-all text-left">
                            <span class="material-icons-outlined text-slate-400 mb-2 text-left">chat</span>
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
    `:'<div class="p-20 text-center uppercase text-[10px] font-black opacity-30">No inquiry selected</div>'}function Wn(e){return e==="desktop-secondary"||e==="mobile"&&p.inquiryViewMode==="add"?Bp():p.inquiryViewMode==="resolve"&&p.activeInquiry?Up():`
        <div class="h-full flex flex-col bg-white overflow-hidden relative text-left">
            ${jp()}
            <div class="px-8 text-left">
                ${Pp()}
                <div class="flex items-center justify-between mb-4 text-left">
                    <h3 class="text-[10px] font-black text-slate-950 uppercase tracking-widest text-left">Recent Inquiries</h3>
                    <button class="text-[9px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors text-right">View All</button>
                </div>
            </div>
            <div class="flex-1 overflow-y-auto px-8 space-y-3 custom-scrollbar pb-32 text-left">
                ${Np()}
            </div>

            <!-- Floating Action Button -->
            <div class="absolute bottom-10 right-8 z-30 text-left">
                <button onclick="window.setInquiryViewMode('add')" class="w-14 h-14 bg-slate-950 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-center">
                    <span class="material-icons-outlined text-2xl text-center">add</span>
                </button>
            </div>
        </div>
    `}function Vp(){const t=window.getCache().campaigns||[];return`
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
                    <div onclick="window.setActiveCampaign(${JSON.stringify(s).replace(/"/g,"&quot;")}); window.setPreBookingViewMode('details')" class="card p-6 border-2 transition-all cursor-pointer relative overflow-hidden group text-left ${((a=p.activeCampaign)==null?void 0:a.id)===s.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                        <div class="flex justify-between items-start mb-6 text-left">
                            <div class="text-left">
                                <div class="flex items-center gap-2 mb-1 text-left">
                                    <div class="w-1.5 h-1.5 bg-slate-900 rounded-full animate-pulse text-left"></div>
                                    <span class="text-[8px] font-black text-slate-900 uppercase tracking-widest text-left">LIVE</span>
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
    `}function Hp(e){return`
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
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest -mb-2 text-left">Campaign Details</p>
                    
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
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest -mb-2 text-left">Landing Page Customization</p>
                    
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
    `}function Gp(e){const t=p.activeCampaign;return t?`
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
                        <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 text-left">
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
                    <div class="px-2 py-1 bg-slate-900 text-white rounded-lg text-[8px] font-black tracking-widest text-right">LIVE</div>
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
                            <span class="px-2 py-0.5 rounded-md text-[7px] font-black uppercase text-slate-900 tracking-wider text-right">${s.status||"PAID"}</span>
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
    `:""}function Wp(e){return`
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
                                <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-sm text-center"><span class="material-icons-outlined text-base text-center">info</span></div>
                                <h4 class="text-[10px] font-black text-slate-950 uppercase tracking-widest text-left">Pre-booking Benefits</h4>
                            </div>
                            <ul class="space-y-2 pl-11 relative text-left">
                                <li class="text-[9px] font-bold text-slate-500 flex items-start gap-2 text-left">
                                    <div class="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 shrink-0 text-left"></div>
                                    Guaranteed Day 1 Delivery
                                </li>
                                <li class="text-[9px] font-bold text-slate-500 flex items-start gap-2 text-left">
                                    <div class="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 shrink-0 text-left"></div>
                                    Exclusive 'Mumbai Central' Launch Invite
                                </li>
                                <li class="text-[9px] font-bold text-slate-500 flex items-start gap-2 text-left">
                                    <div class="w-1.5 h-1.5 bg-slate-900 rounded-full mt-1 shrink-0 text-left"></div>
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
    `}function zn(e){return e==="desktop-secondary"||e==="mobile"&&p.preBookingViewMode==="create"?Hp():p.preBookingViewMode==="details"&&p.activeCampaign?Gp():p.preBookingViewMode==="public"?Wp():Vp()}function zp(){const e=window.getCache(),t=e.automations||[],s=e.automationMessages||[],a=t.filter(o=>o.status==="active").length;t.filter(o=>o.status==="completed").length,s.length;const n=s.filter(o=>o.status==="sent").length,l=s.filter(o=>o.status==="pending").length,i=new Date,r=new Date(Date.now()+7*864e5),d=s.filter(o=>o.status==="pending"&&new Date(o.scheduled_date)<=r).sort((o,u)=>new Date(o.scheduled_date)-new Date(u.scheduled_date)).slice(0,5);return`
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
            ${d.length>0?`
                <section class="space-y-4 text-left">
                    <div class="flex items-center justify-between px-1 text-left">
                        <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Upcoming Messages</h3>
                        <span class="text-[8px] font-black text-slate-300 uppercase">${d.length} scheduled</span>
                    </div>

                    <div class="space-y-2 text-left">
                        ${d.map(o=>{const u=t.find(x=>x.id===o.automation_id),f=new Date(o.scheduled_date),b=f.toDateString()===i.toDateString(),h=f.toDateString()===new Date(Date.now()+864e5).toDateString(),v=b?"Today":h?"Tomorrow":f.toLocaleDateString("en-GB",{day:"2-digit",month:"short"});return`
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
                                            <p class="text-[9px] font-black ${b?"text-slate-900":"text-slate-400"} uppercase">${v}</p>
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
                    ${t.map(o=>{const u=s.filter(h=>h.automation_id===o.id),f=u.filter(h=>h.status==="sent").length;u.filter(h=>h.status==="pending").length;const b=u.length>0?Math.round(f/u.length*100):0;return`
                            <button type="button" onclick="window.setAutomationMode('details', '${o.id}')" class="card p-4 border-2 transition-all cursor-pointer text-left w-full ${p.activeAutomationId===o.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-100"}">
                                <div class="flex items-center gap-4 text-left">
                                    <div class="w-12 h-12 ${o.status==="active"?"bg-slate-900":"bg-slate-200"} rounded-xl flex items-center justify-center text-center">
                                        <span class="material-icons-outlined ${o.status==="active"?"text-white":"text-slate-400"} text-lg">smart_toy</span>
                                    </div>
                                    <div class="flex-1 min-w-0 text-left">
                                        <h4 class="text-sm font-black text-slate-900 tracking-tight truncate text-left">${o.name}</h4>
                                        <p class="text-[10px] font-bold text-slate-400 text-left">${o.customer_name}</p>
                                        <div class="flex items-center gap-3 mt-2">
                                            <div class="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                <div class="h-full bg-slate-900 rounded-full transition-all" style="width: ${b}%"></div>
                                            </div>
                                            <span class="text-[8px] font-black text-slate-400">${f}/${u.length}</span>
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
    `}let Re=null,ke=null,Rt="",Ne="product_journey";const wn={product_journey:{name:"Product Journey",description:"Welcome message, tips, and feedback sequence",messages:[{day:0,type:"welcome",title:"Welcome Message",content:"Thank you for your purchase! Here are some tips to get started with your new {product}..."},{day:1,type:"tips",title:"Getting Started",content:"Have you set up {product} yet? Here is a quick guide to help you..."},{day:3,type:"tips",title:"Pro Tips",content:"Here are some advanced tips to get the most out of your {product}..."},{day:7,type:"upsell",title:"Accessories",content:"Enhance your {product} experience with our recommended accessories..."},{day:14,type:"feedback",title:"How is it going?",content:"It has been 2 weeks! We would love to hear your feedback..."}]},installation:{name:"Installation Follow-up",description:"For products requiring installation",messages:[{day:0,type:"welcome",title:"Order Confirmed",content:"Your {product} order is confirmed! Installation will be scheduled soon."},{day:1,type:"reminder",title:"Installation Reminder",content:"Your installation is scheduled. Our technician will arrive on time."},{day:3,type:"tips",title:"Maintenance Tips",content:"Here are some tips to keep your {product} running smoothly..."},{day:7,type:"feedback",title:"Installation Feedback",content:"How was your installation experience? Let us know!"}]},premium:{name:"Premium Care",description:"Extended engagement for high-value purchases",messages:[{day:0,type:"welcome",title:"Welcome to Premium",content:"Thank you for your premium purchase! You now have access to priority support."},{day:1,type:"tips",title:"Exclusive Features",content:"Discover the exclusive features of your {product}..."},{day:3,type:"tips",title:"Expert Tips",content:"Our experts share their top tips for your {product}..."},{day:7,type:"upsell",title:"Extended Warranty",content:"Protect your investment with our extended warranty plans..."},{day:14,type:"tips",title:"Advanced Features",content:"Ready for advanced features? Here is what you can do..."},{day:21,type:"upsell",title:"Upgrade Options",content:"Check out the latest upgrades available for your {product}..."},{day:30,type:"feedback",title:"Monthly Check-in",content:"How is your experience so far? We value your feedback!"}]}};window.resetAutomationForm=()=>{Re=null,ke=null,Rt="",Ne="product_journey",window._automationContext=null};window.selectAutomationCustomer=e=>{Re=e,ke=null,window.triggerRender()};window.selectAutomationSale=e=>{var n,l,i;ke=e;const t=window.getCache(),s=(n=t.sales)==null?void 0:n.find(r=>r.id===e),a=((l=t.saleItems)==null?void 0:l.filter(r=>r.sale_id===e))||[];s&&(Rt=`${((i=a[0])==null?void 0:i.product_name)||"Product"} - Post-Purchase Journey`,s.installation_required?Ne="installation":s.total_amount>=5e4&&(Ne="premium")),window.triggerRender()};window.updateAutomationName=e=>{Rt=e};window.selectAutomationTemplate=e=>{Ne=e,window.triggerRender()};window.createAutomation=async()=>{var a,n,l;if(!Re||!ke||!Rt){window.toast.warning("Please select a customer, sale, and enter a name");return}const e=window.getCache(),t=(a=e.customers)==null?void 0:a.find(i=>i.id===Re),s=wn[Ne];if(!t||!s){window.toast.error("Invalid selection");return}try{const i=`AUTO-${Math.random().toString(36).substr(2,8).toUpperCase()}`,r=new Date;await C.automations.add({id:i,name:Rt,customer_id:Re,customer_name:t.name,sale_id:ke,status:"active",created_at:r.toISOString()});const o=((l=(((n=e.saleItems)==null?void 0:n.filter(u=>u.sale_id===ke))||[])[0])==null?void 0:l.product_name)||"your product";for(const u of s.messages){const f=`MSG-${Math.random().toString(36).substr(2,8).toUpperCase()}`,b=new Date(r.getTime()+u.day*864e5),h=u.content.replace(/\{product\}/g,o).replace(/\{name\}/g,t.name.split(" ")[0]);if(await C.automations.addMessage({id:f,automation_id:i,message_type:u.type,title:u.title,content:h,day_offset:u.day,scheduled_date:b.toISOString(),status:u.day===0?"sent":"pending"}),u.day===0&&t.phone){let v="sent";try{window.toast.info("Sending welcome message via WhatsApp..."),v=(await window.sendWhatsAppMessage(t.phone,h)).success?"delivered":"sent"}catch(x){console.error("WATI welcome message error:",x),v="failed"}await C.communications.add({id:`COMM-${Math.random().toString(36).substr(2,8).toUpperCase()}`,customer_id:Re,type:"whatsapp",direction:"outgoing",content:h,sent_at:r.toISOString(),automation_id:i,sale_id:ke,status:v})}}await K(),window.toast.success("Automation created successfully!"),window.resetAutomationForm(),window.setAutomationMode("details",i)}catch(i){console.error("Error creating automation:",i),window.toast.error("Failed to create automation: "+i.message)}};function Sl(e=!1){var r,d;const t=window.getCache(),s=t.customers||[],a=t.sales||[];if(window._automationContext&&!Re){const o=window._automationContext;Re=o.customerId,ke=o.transactionId,(d=(r=o.items)==null?void 0:r[0])!=null&&d.name&&(Rt=`${o.items[0].name} - Post-Purchase Journey`),o.installationRequired?Ne="installation":o.total>=5e4&&(Ne="premium")}const n=Re?a.filter(o=>o.customer_id===Re&&o.status!=="draft"):[],l=s.find(o=>o.id===Re);a.find(o=>o.id===ke),ke&&(t.saleItems||[]).filter(o=>o.sale_id===ke);const i=wn[Ne];return`
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
                ${Re?`
                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">2. Select Transaction</p>
                        
                        ${n.length===0?`
                            <div class="card p-6 text-center border-dashed">
                                <p class="text-[10px] font-bold text-slate-400">No completed sales for this customer</p>
                            </div>
                        `:`
                            <div class="space-y-2 max-h-48 overflow-y-auto">
                                ${n.map(o=>{var b;const u=(t.saleItems||[]).filter(h=>h.sale_id===o.id),f=ke===o.id;return`
                                        <button type="button" onclick="window.selectAutomationSale('${o.id}')" class="card p-4 w-full text-left transition-all ${f?"border-2 border-slate-900 shadow-lg":"hover:border-slate-300"}">
                                            <div class="flex justify-between items-start">
                                                <div class="text-left">
                                                    <p class="text-xs font-black text-slate-900">${((b=u[0])==null?void 0:b.product_name)||"Sale"}</p>
                                                    <p class="text-[9px] font-bold text-slate-400">Order #${o.id} • ₹${(o.total_amount||0).toLocaleString()}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 uppercase">${new Date(o.date).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}</span>
                                            </div>
                                            ${f?'<span class="material-icons-outlined text-slate-900 text-sm mt-2">check_circle</span>':""}
                                        </button>
                                    `}).join("")}
                            </div>
                        `}
                    </div>
                `:""}

                <!-- Step 3: Configure Automation -->
                ${ke?`
                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">3. Automation Name</p>
                        <input type="text" value="${Rt}" onchange="window.updateAutomationName(this.value)" placeholder="e.g., iPhone 15 - Welcome Sequence" class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                    </div>

                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">4. Message Template</p>
                        <div class="grid grid-cols-1 gap-2">
                            ${Object.entries(wn).map(([o,u])=>`
                                <button type="button" onclick="window.selectAutomationTemplate('${o}')" class="card p-4 text-left transition-all ${Ne===o?"border-2 border-slate-900 shadow-lg":"hover:border-slate-300"}">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 ${Ne===o?"bg-slate-900 text-white":"bg-slate-100 text-slate-400"} rounded-xl flex items-center justify-center">
                                            <span class="material-icons-outlined text-sm">${o==="product_journey"?"route":o==="installation"?"build":"star"}</span>
                                        </div>
                                        <div class="flex-1">
                                            <p class="text-xs font-black text-slate-900">${u.name}</p>
                                            <p class="text-[9px] font-bold text-slate-400">${u.description}</p>
                                        </div>
                                        ${Ne===o?'<span class="material-icons-outlined text-slate-900 text-sm">check_circle</span>':""}
                                    </div>
                                </button>
                            `).join("")}
                        </div>
                    </div>

                    <!-- Preview Messages -->
                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Message Sequence Preview</p>
                        <div class="relative pl-6 space-y-3 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-slate-200">
                            ${i.messages.map((o,u)=>`
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
            ${ke&&Rt?`
                <div class="p-4 sm:p-6 bg-white border-t border-slate-100 text-center shrink-0">
                    <button onclick="window.createAutomation()" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-center">
                        <span class="material-icons-outlined text-sm">play_circle</span> Start Automation
                    </button>
                </div>
            `:""}
        </div>
    `}window.sendAutomationMessage=async e=>{var t,s,a,n,l;try{const i=window.getCache(),r=(t=i.automationMessages)==null?void 0:t.find(x=>x.id===e),d=(s=i.automations)==null?void 0:s.find(x=>x.id===(r==null?void 0:r.automation_id)),o=(a=i.customers)==null?void 0:a.find(x=>x.id===(d==null?void 0:d.customer_id));if(!r||!d){window.toast.error("Message not found");return}if(!(o!=null&&o.phone)){window.toast.error("Customer phone number not found");return}window.toast.info("Sending WhatsApp message...");const f=((l=(((n=i.saleItems)==null?void 0:n.filter(x=>x.sale_id===d.sale_id))||[])[0])==null?void 0:l.product_name)||"your product",b=r.content.replace(/\{product\}/g,f).replace(/\{name\}/g,o.name.split(" ")[0]);let h="sent",v=null;try{v=await window.sendWhatsAppMessage(o.phone,b),v.success?(h="delivered",window.toast.success("WhatsApp message sent!")):(h="failed",window.toast.warning("Message queued but may not have been delivered"))}catch(x){console.error("WATI Error:",x),h="failed",window.toast.error("WhatsApp send failed: "+x.message)}await C.automations.updateMessageStatus(e,h==="failed"?"pending":"sent",new Date().toISOString()),await C.communications.add({id:`COMM-${Math.random().toString(36).substr(2,8).toUpperCase()}`,customer_id:d.customer_id,type:"whatsapp",direction:"outgoing",content:b,sent_at:new Date().toISOString(),automation_id:d.id,sale_id:d.sale_id,status:h}),await K()}catch(i){console.error("Error sending message:",i),window.toast.error("Failed to send message: "+i.message)}};window.toggleAutomationStatus=async e=>{var t;try{const a=(t=window.getCache().automations)==null?void 0:t.find(l=>l.id===e);if(!a)return;const n=a.status==="active"?"paused":"active";await C.automations.update(e,{status:n}),await K(),window.toast.success(`Automation ${n==="active"?"resumed":"paused"}`)}catch(s){console.error("Error toggling automation:",s),window.toast.error("Failed to update automation")}};window.deleteAutomation=async e=>{window.showConfirm("Are you sure you want to delete this automation? All scheduled messages will be cancelled.",async()=>{try{await C.automations.deleteMessages(e),await C.automations.delete(e),await K(),window.toast.success("Automation deleted"),window.setAutomationMode("dashboard")}catch(t){console.error("Error deleting automation:",t),window.toast.error("Failed to delete automation")}})};window.openWhatsAppMessage=(e,t)=>{const s=`https://wa.me/${(e==null?void 0:e.replace(/\D/g,""))||""}?text=${encodeURIComponent(t)}`;window.open(s,"_blank")};function $l(e,t=!1){var f,b,h;const s=window.getCache(),a=(f=s.automations)==null?void 0:f.find(v=>v.id===e);if(!a)return`
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50">smart_toy</span>
                    <p class="text-[10px] font-black uppercase tracking-widest">Automation not found</p>
                </div>
            </div>
        `;const n=(s.automationMessages||[]).filter(v=>v.automation_id===e).sort((v,x)=>v.day_offset-x.day_offset),l=(b=s.customers)==null?void 0:b.find(v=>v.id===a.customer_id),i=(h=s.sales)==null?void 0:h.find(v=>v.id===a.sale_id);i&&(s.saleItems||[]).filter(v=>v.sale_id===i.id);const r=n.filter(v=>v.status==="sent").length,d=n.filter(v=>v.status==="pending").length,o=n.length>0?Math.round(r/n.length*100):0,u=v=>{switch(v){case"welcome":return{icon:"waving_hand",bg:"bg-slate-900",text:"text-white"};case"tips":return{icon:"lightbulb",bg:"bg-slate-700",text:"text-white"};case"upsell":return{icon:"trending_up",bg:"bg-slate-600",text:"text-white"};case"feedback":return{icon:"rate_review",bg:"bg-slate-500",text:"text-white"};case"reminder":return{icon:"notifications",bg:"bg-slate-400",text:"text-white"};default:return{icon:"chat",bg:"bg-slate-300",text:"text-slate-700"}}};return`
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
                        <p class="text-xl font-black text-slate-900">${d}</p>
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
                            ${l.name.split(" ").map(v=>v[0]).join("").toUpperCase().slice(0,2)}
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
                        ${n.map((v,x)=>{const y=u(v.message_type),_=v.status==="sent",R=new Date(v.scheduled_date).toDateString()===new Date().toDateString();return new Date(v.scheduled_date)<new Date,`
                                <div class="relative">
                                    <div class="absolute -left-8 top-4 w-6 h-6 ${_?"bg-slate-900":"bg-white border-2 border-slate-200"} rounded-full flex items-center justify-center z-10">
                                        ${_?'<span class="material-icons-outlined text-white text-xs">check</span>':`<span class="text-[9px] font-black text-slate-400">${x+1}</span>`}
                                    </div>
                                    
                                    <div class="card p-4 ${_?"bg-slate-50 border-slate-100":R?"border-slate-900 shadow-lg":"border-slate-100"}">
                                        <div class="flex items-start gap-3">
                                            <div class="w-10 h-10 ${y.bg} rounded-xl flex items-center justify-center shrink-0">
                                                <span class="material-icons-outlined ${y.text} text-sm">${y.icon}</span>
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <div class="flex items-center justify-between mb-1">
                                                    <span class="text-[8px] font-black ${_?"text-slate-400":R?"text-slate-900":"text-slate-400"} uppercase">
                                                        Day ${v.day_offset} • ${v.message_type}
                                                    </span>
                                                    <span class="text-[8px] font-bold ${_?"text-slate-400":R?"text-slate-900":"text-slate-300"}">
                                                        ${_?"Sent":R?"Today":new Date(v.scheduled_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}
                                                    </span>
                                                </div>
                                                <h4 class="text-xs font-black text-slate-900 mb-1">${v.title}</h4>
                                                <p class="text-[10px] font-bold text-slate-500 line-clamp-2">${v.content}</p>
                                                
                                                ${!_&&(l!=null&&l.phone)?`
                                                    <div class="flex items-center gap-2 mt-3">
                                                        <button onclick="window.sendAutomationMessage('${v.id}')" class="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[9px] font-black uppercase flex items-center gap-1 hover:bg-slate-800 transition-all">
                                                            <span class="material-icons-outlined text-xs">send</span> Send Now
                                                        </button>
                                                        <button onclick="window.openWhatsAppMessage('${l.phone}', '${v.content.replace(/'/g,"\\'")}')" class="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-[9px] font-black uppercase flex items-center gap-1 hover:bg-slate-200 transition-all">
                                                            <span class="material-icons-outlined text-xs">chat</span> WhatsApp
                                                        </button>
                                                    </div>
                                                `:""}
                                                
                                                ${_&&v.sent_at?`
                                                    <p class="text-[8px] font-bold text-slate-300 mt-2 flex items-center gap-1">
                                                        <span class="material-icons-outlined text-xs">done_all</span>
                                                        Sent ${new Date(v.sent_at).toLocaleString("en-GB",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"})}
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
    `}function Yn(e){const t=e==="mobile",s=e==="desktop-secondary";return window.setAutomationMode=(a,n=null)=>{p.automationViewMode=a,n!==null&&(p.activeAutomationId=n),D()},s?p.automationViewMode==="create"?Sl():p.automationViewMode==="details"&&p.activeAutomationId?$l(p.activeAutomationId):`
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50 text-center">smart_toy</span>
                    <p class="text-[10px] font-black uppercase tracking-widest text-center">Select a workflow or create new</p>
                </div>
            </div>
        `:t&&p.automationViewMode==="create"?Sl(!0):t&&p.automationViewMode==="details"?$l(p.activeAutomationId,!0):zp()}function Yp(){const t=window.getCache().storeOrders||[],s=t.filter(n=>n.order_status==="pending"||n.order_status==="confirmed").length,a=t.filter(n=>n.order_status==="confirmed").length;return`
        <header class="p-4 sm:p-8 pb-4 shrink-0">
            <div class="flex items-center justify-between mb-6">
                <button type="button" onclick="setApp('launcher')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                    <span class="material-icons-outlined">chevron_left</span>
                    <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                </button>
                <div class="text-center">
                    <h1 class="text-xl font-black tracking-tighter text-slate-900">My Store</h1>
                    <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">Ecommerce Management</p>
                </div>
                <div class="w-8"></div>
            </div>

            <!-- Tabs -->
            <div class="flex bg-slate-100 p-1 rounded-xl gap-1">
                <button type="button" onclick="window.setMyStoreTab('dashboard')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-1.5 ${p.myStoreTab==="dashboard"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">
                    <span class="material-icons-outlined text-sm">dashboard</span>
                    <span class="hidden sm:inline">Dashboard</span>
                </button>
                <button type="button" onclick="window.setMyStoreTab('listings')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-1.5 ${p.myStoreTab==="listings"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">
                    <span class="material-icons-outlined text-sm">inventory_2</span>
                    <span class="hidden sm:inline">Listings</span>
                </button>
                <button type="button" onclick="window.setMyStoreTab('orders')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-1.5 relative ${p.myStoreTab==="orders"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">
                    <span class="material-icons-outlined text-sm">shopping_bag</span>
                    <span class="hidden sm:inline">Orders</span>
                    ${s>0?`<span class="absolute -top-1 right-2 w-4 h-4 bg-slate-900 text-white text-[7px] font-black rounded-full flex items-center justify-center">${s}</span>`:""}
                </button>
                <button type="button" onclick="window.setMyStoreTab('shipping')" class="flex-1 py-3 text-[10px] font-black uppercase rounded-lg transition-all flex items-center justify-center gap-1.5 relative ${p.myStoreTab==="shipping"?"bg-white shadow-sm text-slate-900":"text-slate-400"}">
                    <span class="material-icons-outlined text-sm">local_shipping</span>
                    <span class="hidden sm:inline">Shipping</span>
                    ${a>0?`<span class="absolute -top-1 right-2 w-4 h-4 bg-slate-900 text-white text-[7px] font-black rounded-full flex items-center justify-center">${a}</span>`:""}
                </button>
            </div>
        </header>
    `}function Jp(e){const t=window.getCache(),s=t.storeListings||[],a=t.storeOrders||[],n=t.storeOrderItems||[],l=localStorage.getItem("retaileros_retailer_id"),i=(t.retailers||[]).find(E=>E.id===l)||{},d=`https://store.retaileros.in/${localStorage.getItem("retaileros_retailer_code")||"your-store"}`,o=s.filter(E=>E.status==="active").length,u=a.length,b=a.filter(E=>E.order_status==="delivered").reduce((E,O)=>E+(parseInt(O.total_amount)||0),0),h=a.filter(E=>E.order_status==="pending").length,v=a.filter(E=>E.order_status==="confirmed").length,x=a.filter(E=>E.order_status==="shipped").length,y=a.slice(0,5),_={};n.forEach(E=>{const O=E.product_name||"Unknown";_[O]=(_[O]||0)+(E.quantity||1)});const R=Object.entries(_).sort((E,O)=>O[1]-E[1]).slice(0,3);window._copyStoreUrl=async()=>{try{await navigator.clipboard.writeText(d),window.toast&&window.toast.success("Store URL copied!")}catch{window.toast&&window.toast.error("Failed to copy")}};const M=E=>{switch(E){case"pending":return'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-slate-200 text-slate-600">Pending</span>';case"confirmed":return'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-slate-300 text-slate-700">Confirmed</span>';case"shipped":return'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-slate-300 text-slate-700">Shipped</span>';case"delivered":return'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-slate-900 text-white">Delivered</span>';case"cancelled":return'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-400">Cancelled</span>';default:return""}};return`
        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-12 text-left flex-1 overflow-y-auto">
            <!-- Store URL -->
            <div class="card p-5 border-slate-200 shadow-sm text-left">
                <div class="flex items-center justify-between mb-3 text-left">
                    <div class="text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Your Online Store</p>
                        <h3 class="text-sm font-black text-slate-900 tracking-tight text-left">${i.store_name||i.contact_person||"My Store"}</h3>
                    </div>
                    <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                        <span class="material-icons-outlined text-slate-500">language</span>
                    </div>
                </div>
                <div class="flex items-center gap-2 text-left">
                    <div class="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-left overflow-hidden">
                        <p class="text-[10px] font-bold text-slate-500 truncate">${d}</p>
                    </div>
                    <button type="button" onclick="window._copyStoreUrl()" class="px-4 py-3 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center gap-1.5 shrink-0">
                        <span class="material-icons-outlined text-sm">content_copy</span> Copy
                    </button>
                </div>
                <div class="flex items-center gap-4 mt-3 text-left">
                    <span class="text-[8px] font-bold text-slate-500 flex items-center gap-1">
                        <span class="w-1.5 h-1.5 bg-slate-900 rounded-full"></span> Store Live
                    </span>
                    <span class="text-[8px] font-bold text-slate-400">${o} products listed</span>
                </div>
            </div>

            <!-- Quick Stats -->
            <div class="grid grid-cols-2 gap-3 text-left">
                <div class="card p-4 text-left">
                    <div class="flex items-center justify-between mb-2 text-left">
                        <span class="material-icons-outlined text-lg text-slate-400">inventory_2</span>
                        <span class="text-[8px] font-black text-slate-500 uppercase">Active</span>
                    </div>
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${o}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Listings</p>
                </div>
                <div class="card p-4 text-left">
                    <div class="flex items-center justify-between mb-2 text-left">
                        <span class="material-icons-outlined text-lg text-slate-400">shopping_bag</span>
                        <span class="text-[8px] font-black text-slate-500 uppercase">${h>0?h+" new":"All"}</span>
                    </div>
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${u}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Orders</p>
                </div>
                <div class="card p-4 text-left">
                    <div class="flex items-center justify-between mb-2 text-left">
                        <span class="material-icons-outlined text-lg text-slate-400">payments</span>
                    </div>
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${b>0?"₹"+b.toLocaleString():"₹0"}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Online Revenue</p>
                </div>
                <div class="card p-4 text-left">
                    <div class="flex items-center justify-between mb-2 text-left">
                        <span class="material-icons-outlined text-lg text-slate-400">pending_actions</span>
                    </div>
                    <p class="text-2xl font-black text-slate-900 tracking-tighter">${h+v+x}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">In Progress</p>
                </div>
            </div>

            <!-- Recent Orders -->
            <section class="space-y-3 text-left">
                <div class="flex items-center justify-between text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Recent Orders
                    </p>
                    ${a.length>5?`
                        <button type="button" onclick="window.setMyStoreTab('orders')" class="text-[8px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors">View All</button>
                    `:""}
                </div>
                ${y.length===0?`
                    <div class="card p-8 border-dashed border-slate-200 text-center bg-slate-50/20">
                        <span class="material-icons-outlined text-2xl text-slate-200 mb-1">shopping_bag</span>
                        <p class="text-[9px] font-bold text-slate-300">No orders yet — share your store URL to start receiving orders</p>
                    </div>
                `:`
                    <div class="space-y-2">
                        ${y.map(E=>`
                            <button type="button" onclick="window.setActiveStoreOrder('${E.id}')" class="card p-3 sm:p-4 border-2 transition-all cursor-pointer text-left w-full ${p.activeStoreOrderId===E.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                                <div class="flex items-center justify-between text-left">
                                    <div class="flex items-center gap-3 flex-1 min-w-0 text-left">
                                        <div class="text-left flex-1 min-w-0">
                                            <div class="flex items-center gap-2 mb-0.5 text-left">
                                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-tighter">${E.order_number}</p>
                                                ${M(E.order_status)}
                                            </div>
                                            <p class="text-xs font-black text-slate-900 truncate">${E.customer_name}</p>
                                        </div>
                                    </div>
                                    <div class="text-right shrink-0 ml-2">
                                        <p class="text-sm font-black text-slate-900 tracking-tighter">₹${parseInt(E.total_amount||0).toLocaleString()}</p>
                                        <p class="text-[8px] font-bold text-slate-300">${new Date(E.order_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short"})}</p>
                                    </div>
                                </div>
                            </button>
                        `).join("")}
                    </div>
                `}
            </section>

            <!-- Top Products -->
            ${R.length>0?`
                <section class="space-y-3 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Top Selling Products
                    </p>
                    <div class="card p-4 space-y-3">
                        ${R.map(([E,O],Q)=>`
                            <div class="flex items-center justify-between ${Q<R.length-1?"pb-3 border-b border-slate-50":""} text-left">
                                <div class="flex items-center gap-3 text-left">
                                    <span class="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[9px] font-black text-slate-400">${Q+1}</span>
                                    <p class="text-xs font-black text-slate-900 truncate">${E}</p>
                                </div>
                                <p class="text-[9px] font-black text-slate-400">${O} sold</p>
                            </div>
                        `).join("")}
                    </div>
                </section>
            `:""}
        </div>
    `}function Kp(e){const s=window.getCache().storeListings||[],a=s.filter(i=>i.status==="active").length,n=s.filter(i=>i.status==="draft").length;s.filter(i=>i.status==="inactive").length;const l=i=>{switch(i){case"active":return'<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-900 text-white">Active</span>';case"draft":return'<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-200 text-slate-600">Draft</span>';case"inactive":return'<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-100 text-slate-400">Inactive</span>';default:return""}};return window._deleteStoreListing=async(i,r)=>{if(confirm(`Remove "${r}" from your store?`))try{await C.storeListings.delete(i),window._db_cache.storeListings&&(window._db_cache.storeListings=window._db_cache.storeListings.filter(o=>o.id!==i));const d=(()=>{var f;const o=window.getCache(),u=localStorage.getItem("retaileros_retailer_id");return((f=o.retailers)==null?void 0:f.find(b=>b.id===u))||{}})();C.activityLogs.add({action:"store",detail:`Removed listing: ${r}`,user_name:d.contact_person||"Owner",icon:"remove_shopping_cart",color:"red"}),window.toast&&window.toast.success("Listing removed"),window.triggerRender()}catch(d){console.error("Delete listing failed:",d),window.toast&&window.toast.error("Failed to remove listing")}},window._toggleListingStatus=async(i,r)=>{const d=r==="active"?"inactive":"active";try{const o=s.find(f=>f.id===i);if(!o)return;await C.storeListings.update(i,{listing_price:o.listing_price,description:o.description,status:d,stock_qty:o.stock_qty});const u=window._db_cache.storeListings.findIndex(f=>f.id===i);u>=0&&(window._db_cache.storeListings[u].status=d),window.toast&&window.toast.success(d==="active"?"Listing activated":"Listing deactivated"),window.triggerRender()}catch(o){console.error("Toggle listing failed:",o),window.toast&&window.toast.error("Failed to update listing")}},`
        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-12 text-left flex-1 overflow-y-auto">
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-3 text-left">
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900">${a}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Live</p>
                </div>
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-400">${n}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Drafts</p>
                </div>
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900">${s.length}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Total</p>
                </div>
            </div>

            <!-- Listings List -->
            <section class="space-y-3 text-left">
                <div class="flex items-center justify-between text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Product Listings
                    </h3>
                </div>

                ${s.length===0?`
                    <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                        <span class="material-icons-outlined text-3xl text-slate-200">storefront</span>
                        <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">No products listed yet</span>
                        <span class="text-[9px] font-bold text-slate-300">Add products from your inventory to your online store</span>
                        <button type="button" onclick="window.setMyStoreViewMode('add-listing')" class="mt-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all">
                            Add First Listing
                        </button>
                    </div>
                `:`
                    ${s.map(i=>`
                        <button type="button" onclick="window.setActiveListing('${i.id}')" class="card p-4 sm:p-5 border-2 transition-all cursor-pointer text-left w-full ${p.activeListingId===i.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                            <div class="flex items-start justify-between text-left">
                                <div class="flex-1 min-w-0 text-left">
                                    <div class="flex items-center gap-2 mb-1 flex-wrap text-left">
                                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter">${i.brand||""} ${i.category||""}</p>
                                        ${l(i.status)}
                                    </div>
                                    <h4 class="text-sm font-black text-slate-900 tracking-tight truncate text-left">${i.product_name}</h4>
                                    ${i.description?`<p class="text-[10px] font-bold text-slate-400 mt-1 truncate text-left">${i.description}</p>`:""}
                                </div>
                                <div class="text-right shrink-0 ml-3">
                                    <p class="text-lg font-black text-slate-900 tracking-tighter">${i.listing_price?"₹"+parseInt(i.listing_price).toLocaleString():"—"}</p>
                                    ${i.base_price&&i.base_price!==i.listing_price?`<p class="text-[9px] font-bold text-slate-300 line-through">₹${parseInt(i.base_price).toLocaleString()}</p>`:""}
                                </div>
                            </div>
                            <div class="flex items-center justify-between mt-3 pt-3 border-t border-slate-50 text-left">
                                <div class="flex items-center gap-3 text-left">
                                    <span class="text-[9px] font-black text-slate-400 flex items-center gap-1">
                                        <span class="material-icons-outlined text-xs">inventory_2</span>
                                        ${i.stock_qty||0} in stock
                                    </span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <button type="button" onclick="window._toggleListingStatus('${i.id}','${i.status}')" class="px-3 py-1.5 rounded-lg text-[8px] font-black uppercase tracking-widest transition-all ${i.status==="active"?"bg-white text-slate-400 border border-slate-200 hover:bg-slate-50":"bg-slate-900 text-white hover:bg-slate-800"}">
                                        ${i.status==="active"?"Deactivate":"Activate"}
                                    </button>
                                    <button type="button" onclick="window._deleteStoreListing('${i.id}','${(i.product_name||"").replace(/'/g,"\\'")}')" class="p-1.5 rounded-lg text-slate-300 hover:text-slate-400 hover:bg-slate-50 transition-all">
                                        <span class="material-icons-outlined text-sm">delete</span>
                                    </button>
                                </div>
                            </div>
                        </button>
                    `).join("")}
                `}
            </section>
        </div>

        <!-- FAB: Add Listing -->
        <div class="absolute bottom-8 right-8 z-30">
            <button type="button" onclick="window.setMyStoreViewMode('add-listing')" class="w-14 h-14 bg-slate-950 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                <span class="material-icons-outlined text-2xl">add</span>
            </button>
        </div>
    `}function El(){const e=window.getCache(),t=e.products||[],a=(e.storeListings||[]).map(l=>l.product_id),n=t.filter(l=>!a.includes(l.id));return window._saveStoreListing=async()=>{var h,v,x,y,_;const l=document.getElementById("add-listing-form");if(!l)return;const i=(h=l.querySelector('[data-field="product_id"]'))==null?void 0:h.value;if(!i){window.toast&&window.toast.error("Select a product");return}const r=t.find(R=>R.id===i);if(!r)return;const d=parseFloat((v=l.querySelector('[data-field="listing_price"]'))==null?void 0:v.value)||r.mop||r.price,o=((x=l.querySelector('[data-field="description"]'))==null?void 0:x.value)||"",u=parseInt((y=l.querySelector('[data-field="stock_qty"]'))==null?void 0:y.value)||0,f=((_=l.querySelector('[data-field="status"]'))==null?void 0:_.value)||"draft",b=`sl_${Date.now()}_${Math.random().toString(36).substr(2,6)}`;try{await C.storeListings.add({id:b,product_id:r.id,product_name:r.name,brand:r.brand,category:r.category,base_price:r.price,listing_price:d,description:o,status:f,stock_qty:u}),window._db_cache.storeListings||(window._db_cache.storeListings=[]),window._db_cache.storeListings.unshift({id:b,product_id:r.id,product_name:r.name,brand:r.brand,category:r.category,base_price:r.price,listing_price:d,description:o,status:f,stock_qty:u,created_at:new Date().toISOString()});const R=(()=>{var O;const M=window.getCache(),E=localStorage.getItem("retaileros_retailer_id");return((O=M.retailers)==null?void 0:O.find(Q=>Q.id===E))||{}})();C.activityLogs.add({action:"store",detail:`Listed product: ${r.name}`,user_name:R.contact_person||"Owner",icon:"add_shopping_cart",color:"green"}),window.toast&&window.toast.success("Product listed on store"),window.setMyStoreViewMode("list")}catch(R){console.error("Save listing failed:",R),window.toast&&window.toast.error("Failed to save listing")}},window._onProductSelect=l=>{const i=t.find(o=>o.id===l.value);if(!i)return;const r=document.querySelector('[data-field="listing_price"]'),d=document.querySelector('[data-field="stock_qty"]');r&&(r.value=i.mop||i.price||0),d&&(d.value=i.in_stock||0)},`
        <div class="h-full flex flex-col relative bg-white animate-slide-up">
            <header class="p-4 sm:p-8 pb-4 shrink-0">
                <div class="flex items-center justify-between mb-2">
                    <button type="button" onclick="window.setMyStoreViewMode('list')" class="flex items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors">
                        <span class="material-icons-outlined">chevron_left</span>
                        <span class="text-xs font-black uppercase tracking-widest hidden sm:block">Back</span>
                    </button>
                    <div class="text-center">
                        <h2 class="text-xl font-black tracking-tighter text-slate-900">Add Listing</h2>
                        <p class="text-[9px] font-bold text-slate-300 uppercase tracking-[0.2em] -mt-1">List Product on Store</p>
                    </div>
                    <div class="w-8"></div>
                </div>
            </header>

            <div id="add-listing-form" class="flex-1 overflow-y-auto custom-scrollbar px-4 sm:px-8 space-y-6 pb-12 text-left">
                <!-- Product Selection -->
                <div class="space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Select Product
                    </p>
                    <div class="card p-4 text-left">
                        <select data-field="product_id" onchange="window._onProductSelect(this)" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-slate-900">
                            <option value="">Choose from inventory...</option>
                            ${n.map(l=>`
                                <option value="${l.id}">${l.name} ${l.brand?"("+l.brand+")":""} — ₹${parseInt(l.price||0).toLocaleString()}</option>
                            `).join("")}
                        </select>
                        ${n.length===0?`
                            <p class="text-[9px] font-bold text-slate-500 mt-2">All products are already listed on your store</p>
                        `:""}
                    </div>
                </div>

                <!-- Pricing -->
                <div class="space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Pricing
                    </p>
                    <div class="card p-4 text-left">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="material-icons-outlined text-slate-400 text-sm">currency_rupee</span>
                            <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Listing Price</p>
                        </div>
                        <input type="number" data-field="listing_price" placeholder="0" class="w-full text-2xl font-black text-slate-900 bg-transparent border-0 p-0 focus:outline-none placeholder-slate-200">
                        <p class="text-[9px] font-bold text-slate-300 mt-1">Set the price customers see on your store</p>
                    </div>
                </div>

                <!-- Description -->
                <div class="space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Description
                    </p>
                    <div class="card p-4 text-left">
                        <textarea data-field="description" rows="3" placeholder="Product description for your store..." class="w-full text-xs font-bold text-slate-900 bg-transparent border-0 p-0 focus:outline-none placeholder-slate-300 resize-none"></textarea>
                    </div>
                </div>

                <!-- Stock & Status -->
                <div class="space-y-4 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Stock & Visibility
                    </p>
                    <div class="grid grid-cols-2 gap-3 text-left">
                        <div class="card p-4 text-left">
                            <div class="flex items-center gap-2 mb-1">
                                <span class="material-icons-outlined text-slate-400 text-sm">inventory_2</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Stock Qty</p>
                            </div>
                            <input type="number" data-field="stock_qty" value="0" min="0" class="w-full text-lg font-black text-slate-900 bg-transparent border-0 p-0 focus:outline-none">
                        </div>
                        <div class="card p-4 text-left">
                            <div class="flex items-center gap-2 mb-1">
                                <span class="material-icons-outlined text-slate-400 text-sm">visibility</span>
                                <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Status</p>
                            </div>
                            <select data-field="status" class="w-full text-sm font-black text-slate-900 bg-transparent border-0 p-0 focus:outline-none">
                                <option value="draft">Draft</option>
                                <option value="active">Active (Live)</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Save Button -->
                <button type="button" onclick="window._saveStoreListing()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    <span class="material-icons-outlined text-sm">add_shopping_cart</span>
                    List on Store
                </button>
            </div>
        </div>
    `}function Qp(){const e=window.getCache(),s=(e.storeListings||[]).find(o=>o.id===p.activeListingId);if(!s)return`<div class="h-full flex items-center justify-center text-slate-300">
            <div class="text-center">
                <span class="material-icons-outlined text-4xl mb-2 opacity-50">inventory_2</span>
                <p class="text-[10px] font-black uppercase tracking-widest">Select a listing to view details</p>
            </div>
        </div>`;const a=o=>{switch(o){case"active":return'<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-900 text-white">Active</span>';case"draft":return'<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-200 text-slate-600">Draft</span>';case"inactive":return'<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-100 text-slate-400">Inactive</span>';default:return""}},l=(e.storeOrderItems||[]).filter(o=>o.listing_id===s.id),i=l.reduce((o,u)=>o+(u.quantity||1),0),r=l.reduce((o,u)=>o+(parseInt(u.final_price)||0),0);window._saveListingEdit=async()=>{const o=document.getElementById("edit-listing-price"),u=document.getElementById("edit-listing-desc"),f=document.getElementById("edit-listing-stock");if(o)try{await C.storeListings.update(s.id,{listing_price:parseInt(o.value)||s.listing_price,description:u.value||s.description,status:s.status,stock_qty:parseInt(f.value)||s.stock_qty});const b=window._db_cache.storeListings.findIndex(h=>h.id===s.id);b>=0&&(window._db_cache.storeListings[b].listing_price=parseInt(o.value)||s.listing_price,window._db_cache.storeListings[b].description=u.value||s.description,window._db_cache.storeListings[b].stock_qty=parseInt(f.value)||s.stock_qty),window.toast&&window.toast.success("Listing updated"),window.triggerRender()}catch(b){console.error("Save listing edit failed:",b),window.toast&&window.toast.error("Failed to save")}};const d=o=>o?new Date(o).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"—";return`
        <div id="listing-detail" class="card p-6 sm:p-8 bg-white text-slate-900 leading-relaxed shadow-sm relative h-full flex flex-col border border-slate-100">
            <!-- Header -->
            <div class="text-center border-b border-dashed border-slate-200 pb-6 mb-6">
                <h2 class="text-xl font-black tracking-tighter mb-1">Listing Details</h2>
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Product Listing</p>
                <div class="mt-4 flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest px-4">
                    <span>${s.brand||""} ${s.category||""}</span>
                    <span>${a(s.status)}</span>
                </div>
            </div>

            <!-- Product Info -->
            <div class="mb-6 text-left">
                <h3 class="text-lg font-black text-slate-900 tracking-tight text-left">${s.product_name}</h3>
                ${s.description?`<p class="text-[10px] font-bold text-slate-400 mt-1 text-left">${s.description}</p>`:""}
            </div>

            <!-- Price Grid -->
            <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="text-left">
                    <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">Listing Price</p>
                    <p class="text-xl font-black text-slate-900 text-left">₹${parseInt(s.listing_price||0).toLocaleString()}</p>
                </div>
                <div class="text-right">
                    <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-right">Base Price (MOP)</p>
                    <p class="text-xl font-black ${s.base_price!==s.listing_price?"text-slate-400 line-through":"text-slate-900"} text-right">₹${parseInt(s.base_price||0).toLocaleString()}</p>
                </div>
            </div>

            <!-- Stats -->
            <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6">
                <div class="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <p class="text-lg font-black text-slate-900">${s.stock_qty||0}</p>
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">In Stock</p>
                    </div>
                    <div>
                        <p class="text-lg font-black text-slate-900">${i}</p>
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Sold</p>
                    </div>
                    <div>
                        <p class="text-lg font-black text-slate-900">${r>0?"₹"+r.toLocaleString():"₹0"}</p>
                        <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Revenue</p>
                    </div>
                </div>
            </div>

            <!-- Edit Fields -->
            <div class="space-y-4 flex-1 overflow-y-auto custom-scrollbar text-left">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 text-left">
                    <span class="material-icons-outlined text-xs">edit</span> Edit Listing
                </p>
                <div class="text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Listing Price (₹)</p>
                    <input type="number" id="edit-listing-price" value="${s.listing_price||""}" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-slate-900 transition-all">
                </div>
                <div class="text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Description</p>
                    <textarea id="edit-listing-desc" rows="3" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-slate-900 transition-all resize-none">${s.description||""}</textarea>
                </div>
                <div class="text-left">
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">Stock Quantity</p>
                    <input type="number" id="edit-listing-stock" value="${s.stock_qty||0}" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-slate-900 transition-all">
                </div>

                <button type="button" onclick="window._saveListingEdit()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    <span class="material-icons-outlined text-sm">save</span> Save Changes
                </button>
            </div>

            <!-- Footer Info -->
            <div class="border-t border-dashed border-slate-200 pt-4 mt-4 text-left">
                <div class="flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>Listed: ${d(s.created_at)}</span>
                    <span>Updated: ${d(s.updated_at)}</span>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-2 mt-4">
                <button type="button" onclick="window._toggleListingStatus('${s.id}','${s.status}')" class="flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${s.status==="active"?"bg-white border border-slate-200 text-slate-400 hover:bg-slate-50":"bg-slate-900 text-white border border-slate-900 hover:bg-slate-800"}">
                    <span class="material-icons-outlined text-sm">${s.status==="active"?"pause_circle":"play_circle"}</span>
                    ${s.status==="active"?"Deactivate":"Activate"}
                </button>
                <button type="button" onclick="window._deleteStoreListing('${s.id}','${(s.product_name||"").replace(/'/g,"\\'")}')" class="py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest bg-white border border-slate-200 text-slate-400 hover:text-slate-400 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                    <span class="material-icons-outlined text-sm">delete</span>
                </button>
            </div>
        </div>
    `}function Xp(e){const t=window.getCache(),s=t.storeOrders||[],a=t.storeOrderItems||[];window._storeOrderFilter=window._storeOrderFilter||"all",window._setOrderFilter=u=>{window._storeOrderFilter=u,window.triggerRender()};const n=window._storeOrderFilter,l=n==="all"?s:s.filter(u=>u.order_status===n),i={all:s.length,pending:s.filter(u=>u.order_status==="pending").length,confirmed:s.filter(u=>u.order_status==="confirmed").length,shipped:s.filter(u=>u.order_status==="shipped").length,delivered:s.filter(u=>u.order_status==="delivered").length,cancelled:s.filter(u=>u.order_status==="cancelled").length},r=u=>{switch(u){case"pending":return'<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-200 text-slate-600">Pending</span>';case"confirmed":return'<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-300 text-slate-700">Confirmed</span>';case"shipped":return'<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-300 text-slate-700">Shipped</span>';case"delivered":return'<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-900 text-white">Delivered</span>';case"cancelled":return'<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-slate-100 text-slate-400">Cancelled</span>';default:return""}},d=u=>u==="paid"?'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-900 text-white">Paid</span>':u==="failed"?'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-100 text-slate-400">Failed</span>':'<span class="text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-200 text-slate-600">COD</span>';return window._createTestOrder=async()=>{const f=(window.getCache().storeListings||[]).filter(M=>M.status==="active");if(f.length===0){window.toast&&window.toast.error("No active listings to order from");return}const b=f[0],h=`so_${Date.now()}_${Math.random().toString(36).substr(2,6)}`,v=`WEB-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${String(s.length+1).padStart(4,"0")}`,x=["Aarav Patel","Sneha Gupta","Rohan Mehta","Kavya Sharma","Vikram Singh"],y=["Mumbai","Delhi","Bangalore","Pune","Chennai"],_=x[Math.floor(Math.random()*x.length)],R=y[Math.floor(Math.random()*y.length)];try{const M={id:h,order_number:v,customer_name:_,customer_phone:"98"+Math.floor(1e7+Math.random()*9e7),customer_email:_.split(" ")[0].toLowerCase()+"@gmail.com",shipping_address_line1:Math.floor(100+Math.random()*900)+", Sector "+Math.floor(1+Math.random()*30),shipping_city:R,shipping_state:R==="Mumbai"?"Maharashtra":R==="Delhi"?"Delhi":R==="Bangalore"?"Karnataka":R==="Pune"?"Maharashtra":"Tamil Nadu",shipping_pincode:String(1e5+Math.floor(Math.random()*5e5)),order_date:new Date().toISOString(),total_amount:b.listing_price,order_status:"pending",payment_status:Math.random()>.3?"paid":"pending",payment_mode:Math.random()>.5?"online":"cod"};await C.storeOrders.add(M);const E=`soi_${Date.now()}_${Math.random().toString(36).substr(2,6)}`;await C.storeOrders.addItem({id:E,order_id:h,listing_id:b.id,product_id:b.product_id,product_name:b.product_name,category:b.category,quantity:1,unit_price:b.listing_price,final_price:b.listing_price}),window._db_cache.storeOrders||(window._db_cache.storeOrders=[]),window._db_cache.storeOrders.unshift(M),window._db_cache.storeOrderItems||(window._db_cache.storeOrderItems=[]),window._db_cache.storeOrderItems.push({id:E,order_id:h,listing_id:b.id,product_id:b.product_id,product_name:b.product_name,category:b.category,quantity:1,unit_price:b.listing_price,discount_amount:0,final_price:b.listing_price}),C.activityLogs.add({action:"store",detail:`New online order ${v} from ${_}`,user_name:"System",icon:"shopping_bag",color:"blue"}),window.toast&&window.toast.success(`Test order ${v} created`),window.triggerRender()}catch(M){console.error("Create test order failed:",M),window.toast&&window.toast.error("Failed to create test order")}},`
        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-12 text-left flex-1 overflow-y-auto">
            <!-- Filter Pills -->
            <div class="flex gap-2 overflow-x-auto pb-1 text-left">
                ${[{key:"all",label:"All"},{key:"pending",label:"Pending"},{key:"confirmed",label:"Confirmed"},{key:"shipped",label:"Shipped"},{key:"delivered",label:"Delivered"}].map(u=>`
                    <button type="button" onclick="window._setOrderFilter('${u.key}')" class="px-3 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${n===u.key?"bg-slate-900 text-white":"bg-slate-50 text-slate-500 hover:bg-slate-100"}">
                        ${u.label} ${i[u.key]>0?`(${i[u.key]})`:""}
                    </button>
                `).join("")}
            </div>

            <!-- Orders List -->
            ${l.length===0?`
                <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                    <span class="material-icons-outlined text-3xl text-slate-200">shopping_bag</span>
                    <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
                        ${n==="all"?"No orders yet":`No ${n} orders`}
                    </span>
                    <span class="text-[9px] font-bold text-slate-300">Online orders will appear here</span>
                    <button type="button" onclick="window._createTestOrder()" class="mt-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all">
                        Create Test Order
                    </button>
                </div>
            `:`
                <section class="space-y-3 text-left">
                    ${l.map(u=>{const f=a.filter(v=>v.order_id===u.id),b=f[0]?f[0].product_name:"Order items",h=f.length>1?`+ ${f.length-1} more`:"";return`
                            <button type="button" onclick="window.setActiveStoreOrder('${u.id}')" class="card p-4 sm:p-5 border-2 transition-all cursor-pointer text-left w-full ${p.activeStoreOrderId===u.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                                <div class="flex justify-between items-start mb-3 text-left">
                                    <div class="text-left flex-1 min-w-0">
                                        <div class="flex items-center gap-2 mb-1 flex-wrap text-left">
                                            <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter">${u.order_number}</p>
                                            ${r(u.order_status)}
                                            ${d(u.payment_status)}
                                        </div>
                                        <h4 class="text-lg font-black text-slate-900 tracking-tighter truncate text-left">${u.customer_name}</h4>
                                    </div>
                                    <p class="text-lg font-black text-slate-900 tracking-tighter text-right shrink-0 ml-2">₹${u.total_amount?parseInt(u.total_amount).toLocaleString():0}</p>
                                </div>
                                <div class="space-y-1 text-left">
                                    <p class="text-[10px] font-bold text-slate-500 uppercase truncate text-left">${b} ${h}</p>
                                    <div class="flex items-center justify-between text-left">
                                        <p class="text-[9px] font-black text-slate-400 uppercase flex items-center gap-1">
                                            <span class="material-icons-outlined text-xs">public</span>
                                            Online &middot; ${u.payment_mode==="cod"?"COD":u.payment_mode==="upi"?"UPI":"Online"}
                                        </p>
                                        <p class="text-[9px] font-black text-slate-300 uppercase">${new Date(u.order_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</p>
                                    </div>
                                </div>
                            </button>
                        `}).join("")}
                </section>
            `}
        </div>

        <!-- FAB: Create Test Order -->
        ${s.length>0?`
            <div class="absolute bottom-8 right-8 z-30">
                <button type="button" onclick="window._createTestOrder()" class="w-14 h-14 bg-slate-950 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform" title="Create test order">
                    <span class="material-icons-outlined text-2xl">add</span>
                </button>
            </div>
        `:""}
    `}function Zp(e){switch(e){case"cash":case"cod":return"payments";case"card":return"credit_card";case"upi":return"qr_code";case"online":return"language";default:return"account_balance_wallet"}}function eu(e){switch(e){case"cash":case"cod":return"Cash on Delivery";case"card":return"Card";case"upi":return"UPI";case"online":return"Online Payment";default:return"Payment"}}function Il(){const e=window.getCache(),t=e.storeOrders||[],s=e.storeOrderItems||[],a=t.find(x=>x.id===p.activeStoreOrderId);if(!a)return`<div class="h-full flex items-center justify-center text-slate-300">
            <div class="text-center">
                <span class="material-icons-outlined text-4xl mb-2 opacity-50">search_off</span>
                <p class="text-[10px] font-black uppercase tracking-widest">Select an order to view details</p>
            </div>
        </div>`;const n=s.filter(x=>x.order_id===a.id),l=a.order_status==="cancelled",i=a.order_status==="delivered",r=a.payment_status==="paid",d=parseInt(a.total_amount)||0,o=d/1.18,u=d-o,f=["pending","confirmed","shipped","delivered"],b=f.indexOf(a.order_status),h=x=>x?new Date(x).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"—",v=x=>x?new Date(x).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}):"";return window._confirmOrder=async x=>{try{await C.storeOrders.updateStatus(x,"confirmed");const y=window._db_cache.storeOrders.findIndex(R=>R.id===x);y>=0&&(window._db_cache.storeOrders[y].order_status="confirmed");const _=(()=>{var E;const R=window.getCache(),M=localStorage.getItem("retaileros_retailer_id");return((E=R.retailers)==null?void 0:E.find(O=>O.id===M))||{}})();C.activityLogs.add({action:"store",detail:`Confirmed order ${a.order_number}`,user_name:_.contact_person||"Owner",icon:"check_circle",color:"blue"}),window.toast&&window.toast.success("Order confirmed"),window.triggerRender()}catch(y){console.error("Confirm order failed:",y),window.toast&&window.toast.error("Failed to confirm order")}},window._shipOrder=async x=>{var M,E;const y=document.getElementById("shipping-form"),_=((M=y==null?void 0:y.querySelector('[data-field="tracking_number"]'))==null?void 0:M.value)||"",R=((E=y==null?void 0:y.querySelector('[data-field="courier_name"]'))==null?void 0:E.value)||"";if(!_){window.toast&&window.toast.error("Enter tracking number");return}if(!R){window.toast&&window.toast.error("Enter courier name");return}try{const O=new Date().toISOString();await C.storeOrders.updateStatus(x,"shipped",{tracking_number:_,courier_name:R,shipped_date:O});const Q=window._db_cache.storeOrders.findIndex(Xe=>Xe.id===x);Q>=0&&(window._db_cache.storeOrders[Q].order_status="shipped",window._db_cache.storeOrders[Q].tracking_number=_,window._db_cache.storeOrders[Q].courier_name=R,window._db_cache.storeOrders[Q].shipped_date=O);const bt=(()=>{var T;const Xe=window.getCache(),xe=localStorage.getItem("retaileros_retailer_id");return((T=Xe.retailers)==null?void 0:T.find(Dt=>Dt.id===xe))||{}})();C.activityLogs.add({action:"store",detail:`Shipped order ${a.order_number} via ${R}`,user_name:bt.contact_person||"Owner",icon:"local_shipping",color:"purple"}),window.toast&&window.toast.success("Order marked as shipped"),window.triggerRender()}catch(O){console.error("Ship order failed:",O),window.toast&&window.toast.error("Failed to update shipping")}},window._deliverOrder=async x=>{try{const y=new Date().toISOString(),_=`sale_${Date.now()}_${Math.random().toString(36).substr(2,6)}`;await C.sales.add({id:_,customer_id:null,customer_name:a.customer_name,date:y,total_amount:a.total_amount,status:"completed",payment_mode:a.payment_mode==="cod"?"cash":a.payment_mode==="upi"?"upi":"card",payment_reference:a.payment_reference||a.order_number,gst_required:0,company_id:null,installation_required:0,installation_date:null,source:"online"});for(const M of n){const E=`si_${Date.now()}_${Math.random().toString(36).substr(2,6)}`;await C.sales.addItem({id:E,sale_id:_,product_id:M.product_id,product_name:M.product_name,category:M.category||null,quantity:M.quantity,price:M.unit_price,discount_type:null,discount_value:0,discount_amount:M.discount_amount||0,scheme_id:null,final_price:M.final_price,imei:null,serial_number:null,mac_id:null,manufacturing_date:null,installation_date:null,extra_fields:null})}await C.storeOrders.updateStatus(x,"delivered",{delivered_date:y,sale_id:_,payment_status:"paid"}),await K();const R=(()=>{var O;const M=window.getCache(),E=localStorage.getItem("retaileros_retailer_id");return((O=M.retailers)==null?void 0:O.find(Q=>Q.id===E))||{}})();C.activityLogs.add({action:"store",detail:`Order ${a.order_number} delivered & invoice created`,user_name:R.contact_person||"Owner",icon:"check_circle",color:"green"}),window.toast&&window.toast.success("Order delivered & sale recorded")}catch(y){console.error("Deliver order failed:",y),window.toast&&window.toast.error("Failed to mark as delivered")}},window._cancelOrder=async x=>{if(confirm("Cancel this order?"))try{await C.storeOrders.updateStatus(x,"cancelled");const y=window._db_cache.storeOrders.findIndex(R=>R.id===x);y>=0&&(window._db_cache.storeOrders[y].order_status="cancelled");const _=(()=>{var E;const R=window.getCache(),M=localStorage.getItem("retaileros_retailer_id");return((E=R.retailers)==null?void 0:E.find(O=>O.id===M))||{}})();C.activityLogs.add({action:"store",detail:`Cancelled order ${a.order_number}`,user_name:_.contact_person||"Owner",icon:"cancel",color:"red"}),window.toast&&window.toast.success("Order cancelled"),window.triggerRender()}catch(y){console.error("Cancel order failed:",y),window.toast&&window.toast.error("Failed to cancel order")}},window._shareOrderWhatsApp=()=>{let x=`ORDER #${a.order_number}
`;x+=`━━━━━━━━━━━━━━━━━━━━
`,x+=`${h(a.order_date)}

`,x+=`Customer: ${a.customer_name}
`,x+=`Phone: ${a.customer_phone||"N/A"}
`,a.shipping_city&&(x+=`City: ${a.shipping_city}
`),x+=`
━━━━━━━━━━━━━━━━━━━━
ITEMS:
`,n.forEach(y=>{x+=`• ${y.product_name} - ₹${parseInt(y.final_price).toLocaleString()}
`}),x+=`
━━━━━━━━━━━━━━━━━━━━
`,x+=`TOTAL: ₹${d.toLocaleString()}
`,x+=`Status: ${a.order_status.toUpperCase()}
`,a.tracking_number&&(x+=`Tracking: ${a.tracking_number}
`),x+=`
Powered by RetailerOS`,window.open(`https://wa.me/?text=${encodeURIComponent(x)}`,"_blank")},window._printOrder=()=>{window.print()},`
        <div id="order-detail" class="card p-6 sm:p-8 bg-white text-slate-900 leading-relaxed shadow-sm relative h-full flex flex-col border border-slate-100 print:shadow-none print:border-0">
            <!-- Header -->
            <div class="text-center border-b border-dashed border-slate-200 pb-6 mb-6">
                <h2 class="text-2xl font-black tracking-tighter mb-1">${i?"Invoice":l?"Cancelled Order":"Order"}</h2>
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">RetailerOS • Online Order</p>
                <div class="mt-4 flex justify-between text-[8px] font-bold text-slate-400 uppercase tracking-widest px-4">
                    <span>Order #${a.order_number}</span>
                    <span class="text-slate-500 font-black">${a.order_status.toUpperCase()}</span>
                </div>
            </div>

            <!-- Info Grid -->
            <div class="grid grid-cols-2 gap-4 sm:gap-8 mb-6">
                <div class="text-left">
                    <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-left">Customer</p>
                    <p class="text-sm font-black text-slate-900 text-left">${a.customer_name}</p>
                    <p class="text-[10px] font-bold text-slate-400 text-left">${a.customer_phone||"—"}</p>
                    ${a.customer_email?`<p class="text-[10px] font-bold text-slate-400 text-left">${a.customer_email}</p>`:""}
                </div>
                <div class="text-right">
                    <p class="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-right">Order Date</p>
                    <p class="text-sm font-black text-slate-900 text-right">${h(a.order_date)}</p>
                    <p class="text-[10px] font-bold text-slate-400 text-right">${v(a.order_date)}</p>
                </div>
            </div>

            <!-- Shipping Address -->
            ${a.shipping_address_line1||a.shipping_city?`
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6 flex items-start gap-3">
                    <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 shrink-0 mt-0.5">
                        <span class="material-icons-outlined text-sm">location_on</span>
                    </div>
                    <div class="text-left">
                        <p class="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-1">Shipping Address</p>
                        <p class="text-xs font-bold text-slate-900">${a.shipping_address_line1||""}</p>
                        ${a.shipping_address_line2?`<p class="text-xs font-bold text-slate-700">${a.shipping_address_line2}</p>`:""}
                        <p class="text-[10px] font-bold text-slate-500">${[a.shipping_city,a.shipping_state,a.shipping_pincode].filter(Boolean).join(", ")}</p>
                    </div>
                </div>
            `:""}

            <!-- Tracking Info -->
            ${a.tracking_number?`
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6 flex items-center gap-3">
                    <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 shrink-0">
                        <span class="material-icons-outlined text-sm">local_shipping</span>
                    </div>
                    <div class="flex-1 text-left">
                        <p class="text-[9px] font-black text-slate-600 uppercase tracking-widest">Shipment Details</p>
                        <div class="flex items-center gap-4 mt-1">
                            <span class="text-xs font-bold text-slate-900">${a.courier_name||"—"}</span>
                            <span class="text-xs font-black text-slate-900 font-mono">${a.tracking_number}</span>
                        </div>
                        <div class="flex items-center gap-4 mt-1">
                            ${a.shipped_date?`<span class="text-[9px] font-bold text-slate-400">Shipped: ${h(a.shipped_date)}</span>`:""}
                            ${a.delivered_date?`<span class="text-[9px] font-bold text-slate-500">Delivered: ${h(a.delivered_date)}</span>`:""}
                        </div>
                    </div>
                </div>
            `:""}

            <!-- Status Progress (compact) -->
            ${l?"":`
                <div class="flex items-center justify-between mb-6 px-2">
                    ${f.map((x,y)=>`
                        <div class="flex flex-col items-center gap-1">
                            <div class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${y<=b?"bg-slate-900 text-white":"bg-slate-100 text-slate-300"}">
                                ${y<=b?'<span class="material-icons-outlined text-xs">check</span>':'<span class="material-icons-outlined text-xs">circle</span>'}
                            </div>
                            <p class="text-[6px] font-black uppercase tracking-widest ${y<=b?"text-slate-700":"text-slate-300"}">${x}</p>
                        </div>
                        ${y<f.length-1?`<div class="flex-1 h-0.5 mx-1 ${y<b?"bg-slate-900":"bg-slate-100"}"></div>`:""}
                    `).join("")}
                </div>
            `}

            <!-- Items -->
            <div class="space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-2 text-left">
                ${n.map(x=>`
                    <div class="pb-4 border-b border-slate-100 last:border-0">
                        <div class="flex justify-between items-start mb-1 text-left">
                            <div class="text-left flex-1 min-w-0">
                                <h4 class="text-sm font-black text-slate-900 text-left truncate">${x.product_name}</h4>
                                <p class="text-[9px] font-bold text-slate-400 uppercase mt-0.5 text-left">${x.category||"Standard"} · Qty: ${x.quantity}</p>
                            </div>
                            <div class="text-right shrink-0 ml-2">
                                <p class="text-sm font-black text-slate-900">₹${parseInt(x.final_price).toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                `).join("")}
            </div>

            <!-- Totals -->
            <div class="border-t border-dashed border-slate-200 pt-6 mt-4 space-y-2">
                <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">Subtotal</span><span>₹${o.toLocaleString(void 0,{maximumFractionDigits:2})}</span></div>
                <div class="flex justify-between text-[10px] font-bold text-slate-500 uppercase"><span class="tracking-widest">GST (18%)</span><span>₹${u.toLocaleString(void 0,{maximumFractionDigits:2})}</span></div>
                <div class="flex justify-between text-xl font-black text-slate-900 mt-4 items-center">
                    <span>Grand Total</span>
                    <span class="text-slate-900">₹${d.toLocaleString()}</span>
                </div>
            </div>

            <!-- Payment Status -->
            ${r?`
                <div class="bg-slate-900 text-white p-4 rounded-xl mt-6 flex justify-between items-center text-left">
                    <div class="flex items-center gap-3 text-left">
                        <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span class="material-icons-outlined text-sm">${Zp(a.payment_mode)}</span>
                        </div>
                        <div class="text-left">
                            <p class="text-[9px] font-black uppercase tracking-widest text-left">Paid via ${eu(a.payment_mode)}</p>
                            ${a.payment_reference?`<p class="text-[8px] font-bold text-white/60 tracking-widest uppercase text-left">Ref: ${a.payment_reference}</p>`:""}
                        </div>
                    </div>
                    <span class="text-[9px] font-black bg-white text-slate-900 px-2 py-1 rounded uppercase tracking-widest">Paid</span>
                </div>
            `:l?`
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mt-6 flex items-center gap-3">
                    <div class="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                        <span class="material-icons-outlined text-sm">cancel</span>
                    </div>
                    <div>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Order Cancelled</p>
                        <p class="text-[8px] font-bold text-slate-400">This order has been cancelled</p>
                    </div>
                </div>
            `:`
                <div class="bg-slate-100 border border-slate-200 p-4 rounded-xl mt-6 flex items-center gap-3">
                    <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                        <span class="material-icons-outlined text-sm">pending</span>
                    </div>
                    <div>
                        <p class="text-[9px] font-black text-slate-600 uppercase tracking-widest">Payment ${a.payment_mode==="cod"?"on Delivery":"Pending"}</p>
                        <p class="text-[8px] font-bold text-slate-400">${a.payment_mode==="cod"?"Cash on Delivery":"Awaiting payment confirmation"}</p>
                    </div>
                </div>
            `}

            <!-- Shipping Form (when confirmed, ready to ship) -->
            ${a.order_status==="confirmed"?`
                <div id="shipping-form" class="space-y-3 mt-6 no-print">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="material-icons-outlined text-xs">local_shipping</span> Ship This Order
                    </p>
                    <div>
                        <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Courier Name</p>
                        <input type="text" data-field="courier_name" placeholder="e.g. BlueDart, Delhivery, DTDC" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-slate-900">
                    </div>
                    <div>
                        <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Tracking Number</p>
                        <input type="text" data-field="tracking_number" placeholder="e.g. AWB123456789" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-slate-900 font-mono">
                    </div>
                </div>
            `:""}

            <!-- Action Buttons -->
            ${!l&&!i?`
                <div class="space-y-3 mt-6 no-print">
                    ${a.order_status==="pending"?`
                        <button type="button" onclick="window._confirmOrder('${a.id}')" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                            <span class="material-icons-outlined text-sm">thumb_up</span> Confirm Order
                        </button>
                    `:""}
                    ${a.order_status==="confirmed"?`
                        <button type="button" onclick="window._shipOrder('${a.id}')" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                            <span class="material-icons-outlined text-sm">local_shipping</span> Mark as Shipped
                        </button>
                    `:""}
                    ${a.order_status==="shipped"?`
                        <button type="button" onclick="window._deliverOrder('${a.id}')" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                            <span class="material-icons-outlined text-sm">check_circle</span> Mark as Delivered
                        </button>
                    `:""}
                    <button type="button" onclick="window._cancelOrder('${a.id}')" class="w-full py-3 bg-white border border-slate-200 text-slate-400 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                        <span class="material-icons-outlined text-sm">cancel</span> Cancel Order
                    </button>
                </div>
            `:""}

            ${i&&a.sale_id?`
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mt-6 flex items-center gap-3 text-left">
                    <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 shrink-0">
                        <span class="material-icons-outlined text-sm">receipt_long</span>
                    </div>
                    <div class="text-left">
                        <p class="text-[9px] font-black text-slate-700 uppercase tracking-widest">Invoice Created in Sales Desk</p>
                        <p class="text-[8px] font-bold text-slate-500">Sale ID: ${a.sale_id}</p>
                    </div>
                </div>
            `:""}

            <!-- Footer Action Icons -->
            <div class="flex justify-end gap-2 mt-4 no-print">
                <button type="button" onclick="window._shareOrderWhatsApp()" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" title="Share via WhatsApp">
                    <span class="material-icons-outlined text-lg">chat</span>
                </button>
                <button type="button" onclick="window._printOrder()" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" title="Print">
                    <span class="material-icons-outlined text-lg">print</span>
                </button>
            </div>
        </div>
    `}function tu(e){const t=window.getCache(),s=t.storeOrders||[],a=t.storeOrderItems||[],n=s.filter(d=>d.order_status==="confirmed"),l=s.filter(d=>d.order_status==="shipped"),i=s.filter(d=>d.order_status==="delivered"),r=(d,o)=>{const u=a.filter(b=>b.order_id===d.id),f=u[0]?u[0].product_name:"Order items";return`
            <button type="button" onclick="window.setActiveStoreOrder('${d.id}')" class="card p-4 border-2 transition-all cursor-pointer text-left w-full ${p.activeStoreOrderId===d.id?"border-slate-900 shadow-lg":"border-transparent hover:border-slate-200"}">
                <div class="flex justify-between items-start mb-2 text-left">
                    <div class="text-left flex-1 min-w-0">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-tighter">${d.order_number}</p>
                        <h4 class="text-sm font-black text-slate-900 tracking-tight truncate text-left">${d.customer_name}</h4>
                    </div>
                    <p class="text-sm font-black text-slate-900 tracking-tighter shrink-0 ml-2">₹${parseInt(d.total_amount).toLocaleString()}</p>
                </div>
                <div class="flex items-center justify-between text-left">
                    <p class="text-[10px] font-bold text-slate-500 truncate">${f}</p>
                    <div class="flex items-center gap-2 shrink-0 ml-2">
                        ${o==="transit"&&d.courier_name?`
                            <span class="text-[8px] font-bold text-slate-500">${d.courier_name}</span>
                        `:""}
                        ${o==="delivered"?`
                            <span class="text-[8px] font-bold text-slate-500">${d.delivered_date?new Date(d.delivered_date).toLocaleDateString("en-GB",{day:"2-digit",month:"short"}):"Delivered"}</span>
                        `:""}
                        <p class="text-[9px] font-black text-slate-300">${[d.shipping_city,d.shipping_pincode].filter(Boolean).join(" ")}</p>
                    </div>
                </div>
            </button>
        `};return`
        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-12 text-left flex-1 overflow-y-auto">
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-3 text-left">
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900">${n.length}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Ready</p>
                </div>
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900">${l.length}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">In Transit</p>
                </div>
                <div class="card p-4 text-center">
                    <p class="text-2xl font-black text-slate-900">${i.length}</p>
                    <p class="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Delivered</p>
                </div>
            </div>

            <!-- Ready to Ship -->
            <section class="space-y-3 text-left">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> Ready to Ship (${n.length})
                </p>
                ${n.length===0?`
                    <div class="card p-8 border-dashed border-slate-200 text-center bg-slate-50/20">
                        <span class="material-icons-outlined text-2xl text-slate-200 mb-1">inventory_2</span>
                        <p class="text-[9px] font-bold text-slate-300">No orders awaiting shipment</p>
                    </div>
                `:n.map(d=>r(d,"ready")).join("")}
            </section>

            <!-- In Transit -->
            <section class="space-y-3 text-left">
                <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> In Transit (${l.length})
                </p>
                ${l.length===0?`
                    <div class="card p-8 border-dashed border-slate-200 text-center bg-slate-50/20">
                        <span class="material-icons-outlined text-2xl text-slate-200 mb-1">local_shipping</span>
                        <p class="text-[9px] font-bold text-slate-300">No shipments in transit</p>
                    </div>
                `:l.map(d=>r(d,"transit")).join("")}
            </section>

            <!-- Recently Delivered -->
            ${i.length>0?`
                <section class="space-y-3 text-left">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-slate-900 rounded-full"></span> Recently Delivered (${i.length})
                    </p>
                    ${i.slice(0,5).map(d=>r(d,"delivered")).join("")}
                </section>
            `:""}
        </div>
    `}function Jn(e){const t=e==="mobile";if(e==="desktop-secondary"){if(p.myStoreViewMode==="order-detail"&&p.activeStoreOrderId)return Il();if(p.myStoreViewMode==="add-listing")return El();if(p.activeListingId&&p.myStoreTab==="listings")return Qp();if(p.myStoreTab==="dashboard"){const l=window.getCache().storeListings||[];return`<div class="h-full flex flex-col p-6 sm:p-8 text-left">
                <div class="text-center border-b border-dashed border-slate-200 pb-6 mb-6">
                    <h2 class="text-xl font-black tracking-tighter mb-1">Store Overview</h2>
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Quick Actions</p>
                </div>
                <div class="space-y-3 flex-1 text-left">
                    <button type="button" onclick="window.setMyStoreTab('listings'); window.setMyStoreViewMode('add-listing')" class="card p-4 w-full border-2 border-transparent hover:border-slate-200 transition-all cursor-pointer text-left flex items-center gap-3">
                        <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                            <span class="material-icons-outlined text-slate-500">add_circle</span>
                        </div>
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900">Add New Listing</p>
                            <p class="text-[9px] font-bold text-slate-400">List a product from your inventory</p>
                        </div>
                    </button>
                    <button type="button" onclick="window.setMyStoreTab('orders')" class="card p-4 w-full border-2 border-transparent hover:border-slate-200 transition-all cursor-pointer text-left flex items-center gap-3">
                        <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                            <span class="material-icons-outlined text-slate-500">shopping_bag</span>
                        </div>
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900">Manage Orders</p>
                            <p class="text-[9px] font-bold text-slate-400">View and process incoming orders</p>
                        </div>
                    </button>
                    <button type="button" onclick="window.setMyStoreTab('shipping')" class="card p-4 w-full border-2 border-transparent hover:border-slate-200 transition-all cursor-pointer text-left flex items-center gap-3">
                        <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                            <span class="material-icons-outlined text-slate-500">local_shipping</span>
                        </div>
                        <div class="text-left">
                            <p class="text-xs font-black text-slate-900">Shipping Queue</p>
                            <p class="text-[9px] font-bold text-slate-400">Orders ready to ship</p>
                        </div>
                    </button>
                </div>
                <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl mt-4">
                    <div class="grid grid-cols-2 gap-4 text-center">
                        <div>
                            <p class="text-lg font-black text-slate-900">${l.filter(r=>r.status==="active").length}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Live Products</p>
                        </div>
                        <div>
                            <p class="text-lg font-black text-slate-900">${l.length}</p>
                            <p class="text-[7px] font-black text-slate-400 uppercase tracking-widest">Total Listings</p>
                        </div>
                    </div>
                </div>
            </div>`}return`<div class="h-full flex items-center justify-center text-slate-300">
            <div class="text-center">
                <span class="material-icons-outlined text-4xl mb-2 opacity-50">storefront</span>
                <p class="text-[10px] font-black uppercase tracking-widest">Select an item to view details</p>
            </div>
        </div>`}if(t){if(p.myStoreViewMode==="order-detail"&&p.activeStoreOrderId)return Il();if(p.myStoreViewMode==="add-listing")return El()}const a=()=>{switch(p.myStoreTab){case"dashboard":return Jp();case"orders":return Xp();case"shipping":return tu();default:return Kp()}};return`
        <div class="h-full flex flex-col relative bg-white">
            ${Yp()}
            ${a()}
        </div>
    `}function su(e=!0){if(!e)return;const t=[p.currentApp];p.currentApp==="sales"?t.push(p.currentTab):p.currentApp==="clients"?(t.push(p.clientViewMode),p.selectedClient&&p.clientViewMode==="profile"&&t.push(encodeURIComponent(p.selectedClient))):p.currentApp==="reports"?t.push(p.reportsTab):p.currentApp==="repairs"?(t.push(p.repairTab),t.push(p.repairViewMode)):p.currentApp==="inventory"?(t.push(p.inventoryTab),t.push(p.inventoryMode)):p.currentApp==="marketplace"?(t.push(p.marketplaceTab),t.push(p.marketplaceViewMode)):p.currentApp==="inquiries"?t.push(p.inquiryViewMode):p.currentApp==="prebooking"?t.push(p.preBookingViewMode):p.currentApp==="automation"?t.push(p.automationViewMode):p.currentApp==="schemes"?t.push(p.schemesTab):p.currentApp==="settings"?t.push(p.settingsView):p.currentApp==="mystore"&&(t.push(p.myStoreTab),p.myStoreViewMode!=="list"&&t.push(p.myStoreViewMode));const s="#/"+t.filter(Boolean).join("/");window.location.hash!==s&&window.history.pushState(null,"",s)}function Cl(){const e=window.location.hash.replace("#/","");if(!e)return;const t=e.split("/"),s=t[0];s&&(p.currentApp=s),s==="sales"?t[1]&&(p.currentTab=t[1]):s==="clients"?(t[1]&&(p.clientViewMode=t[1]),t[2]&&(p.selectedClient=decodeURIComponent(t[2]))):s==="reports"?t[1]&&(p.reportsTab=t[1]):s==="repairs"?(t[1]&&(p.repairTab=t[1]),t[2]&&(p.repairViewMode=t[2])):s==="inventory"?(t[1]&&(p.inventoryTab=t[1]),t[2]&&(p.inventoryMode=t[2])):s==="marketplace"?(t[1]&&(p.marketplaceTab=t[1]),t[2]&&(p.marketplaceViewMode=t[2])):s==="inquiries"?t[1]&&(p.inquiryViewMode=t[1]):s==="prebooking"?t[1]&&(p.preBookingViewMode=t[1]):s==="automation"?t[1]&&(p.automationViewMode=t[1]):s==="schemes"?t[1]&&(p.schemesTab=t[1]):s==="settings"?t[1]&&(p.settingsView=t[1]):s==="mystore"&&(t[1]&&(p.myStoreTab=t[1]),t[2]&&(p.myStoreViewMode=t[2])),D(!1)}function au(){window.addEventListener("hashchange",Cl),Cl()}const Mt={endpoint:"https://live-mt-server.wati.io/319917",token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im1hcmtldGluZ0BuZXN0ZXIuaW4iLCJuYW1laWQiOiJtYXJrZXRpbmdAbmVzdGVyLmluIiwiZW1haWwiOiJtYXJrZXRpbmdAbmVzdGVyLmluIiwiYXV0aF90aW1lIjoiMDIvMTAvMjAyNSAwOTo1MDoxOSIsInRlbmFudF9pZCI6IjMxOTkxNyIsImp0aSI6ImFiNzBlNGU3LTAxNDUtNDg4NS1hYWU3LTQ3ZDc3YTA0NThhOSIsImRiX25hbWUiOiJtdC1wcm9kLVRlbmFudHMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBRE1JTklTVFJBVE9SIiwiZXhwIjoyNTM0MDIzMDA4MDAsImlzcyI6IkNsYXJlX0FJIiwiYXVkIjoiQ2xhcmVfQUkifQ.V1k2oIW0iDKep9_zG9WpS62LVcgXxj7vAndigvmZS2I"};function nu(e){if(!e)return null;let t=e.replace(/\D/g,"");return t.length===10&&(t="91"+t),t}async function lu(e,t){var a;const s=nu(e);if(!s)throw new Error("Invalid phone number");try{const n=await fetch(`${Mt.endpoint}/api/v1/sendSessionMessage/${s}`,{method:"POST",headers:{Authorization:Mt.token,"Content-Type":"application/json"},body:JSON.stringify({messageText:t})}),l=await n.json();if(!n.ok){if(console.error("WATI API Error:",l),(a=l.message)!=null&&a.includes("session")||l.result===!1)return console.log("Session expired, trying template message..."),await iu(s,t);throw new Error(l.message||"Failed to send message")}return{success:!0,data:l}}catch(n){throw console.error("WATI Send Error:",n),n}}async function iu(e,t){try{const s=await fetch(`${Mt.endpoint}/api/v1/sendTemplateMessage`,{method:"POST",headers:{Authorization:Mt.token,"Content-Type":"application/json"},body:JSON.stringify({whatsappNumber:e,templateName:"retaileros_notification",parameters:[{name:"message",value:t}],broadcast_name:"RetailerOS"})}),a=await s.json();return!s.ok&&a.result===!1?(console.log("Template not found, trying interactive message..."),await ru(e,t)):{success:!0,data:a,method:"template"}}catch(s){throw console.error("Template message error:",s),s}}async function ru(e,t){try{const s=await fetch(`${Mt.endpoint}/api/v1/sendInteractiveButtonsMessage`,{method:"POST",headers:{Authorization:Mt.token,"Content-Type":"application/json"},body:JSON.stringify({whatsappNumber:e,header:{type:"Text",text:"RetailerOS"},body:t,footer:"Powered by RetailerOS",buttons:[{type:"reply",reply:{id:"reply_ok",title:"OK"}}]})}),a=await s.json();return{success:s.ok,data:a,method:"interactive"}}catch(s){throw console.error("Interactive message error:",s),s}}async function ou(){try{return(await fetch(`${Mt.endpoint}/api/v1/getContacts?pageSize=1`,{method:"GET",headers:{Authorization:Mt.token}})).ok}catch(e){return console.error("WATI connection test failed:",e),!1}}window.sendWhatsAppMessage=lu;window.testWatiConnection=ou;let qt=null,Ka=null;const Rl={success:{icon:"check_circle",bg:"bg-slate-900",text:"text-white"},error:{icon:"error",bg:"bg-slate-800",text:"text-white"},warning:{icon:"warning",bg:"bg-slate-600",text:"text-white"},info:{icon:"info",bg:"bg-slate-700",text:"text-white"}};function cu(){qt||(qt=document.createElement("div"),qt.id="toast-container",qt.className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center gap-2 pointer-events-none",document.body.appendChild(qt))}function Gs(e,t="info",s=3e3){cu(),Ka&&clearTimeout(Ka);const a=Rl[t]||Rl.info,n=document.createElement("div");return n.className=`
        ${a.bg} ${a.text} 
        px-5 py-3.5 rounded-2xl shadow-2xl 
        flex items-center gap-3 
        transform transition-all duration-300 
        opacity-0 translate-y-[-20px] scale-95
        pointer-events-auto
        max-w-[90vw] sm:max-w-md
    `.trim().replace(/\s+/g," "),n.innerHTML=`
        <span class="material-icons-outlined text-lg shrink-0">${a.icon}</span>
        <span class="text-sm font-bold leading-snug">${Oa(e)}</span>
    `,(t==="error"||e.length>50)&&(n.innerHTML+=`
            <button onclick="this.parentElement.remove()" class="ml-2 w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded-full transition-all shrink-0">
                <span class="material-icons-outlined text-sm">close</span>
            </button>
        `),qt.innerHTML="",qt.appendChild(n),requestAnimationFrame(()=>{n.classList.remove("opacity-0","translate-y-[-20px]","scale-95"),n.classList.add("opacity-100","translate-y-0","scale-100")}),Ka=setTimeout(()=>{du(n)},s),n}function du(e){!e||!e.parentElement||(e.classList.remove("opacity-100","translate-y-0","scale-100"),e.classList.add("opacity-0","translate-y-[-20px]","scale-95"),setTimeout(()=>{e.remove()},300))}function Oa(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}const pu={success:(e,t)=>Gs(e,"success",t),error:(e,t)=>Gs(e,"error",t||5e3),warning:(e,t)=>Gs(e,"warning",t||4e3),info:(e,t)=>Gs(e,"info",t)};function uu(e,t,s){const a=document.createElement("div");a.className="fixed inset-0 z-[9998] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4",a.innerHTML=`
        <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all duration-200 scale-95 opacity-0">
            <div class="p-6 text-center">
                <div class="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span class="material-icons-outlined text-2xl text-slate-600">help_outline</span>
                </div>
                <p class="text-sm font-bold text-slate-900 leading-relaxed">${Oa(e)}</p>
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
    `,document.body.appendChild(a);const n=a.querySelector("div > div");requestAnimationFrame(()=>{n.classList.remove("scale-95","opacity-0"),n.classList.add("scale-100","opacity-100")}),a.querySelector("#confirm-cancel").onclick=()=>{ht(a),s&&s()},a.querySelector("#confirm-ok").onclick=()=>{ht(a),t&&t()},a.onclick=l=>{l.target===a&&(ht(a),s&&s())}}function ht(e){const t=e.querySelector("div > div");t.classList.remove("scale-100","opacity-100"),t.classList.add("scale-95","opacity-0"),setTimeout(()=>e.remove(),200)}function xu(e,t="",s,a){const n=document.createElement("div");n.className="fixed inset-0 z-[9998] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4",n.innerHTML=`
        <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all duration-200 scale-95 opacity-0">
            <div class="p-6">
                <p class="text-sm font-bold text-slate-900 mb-4">${Oa(e)}</p>
                <input type="text" id="prompt-input" value="${Oa(t)}" 
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
    `,document.body.appendChild(n);const l=n.querySelector("div > div"),i=n.querySelector("#prompt-input");requestAnimationFrame(()=>{l.classList.remove("scale-95","opacity-0"),l.classList.add("scale-100","opacity-100"),i.focus(),i.select()}),i.onkeydown=r=>{if(r.key==="Enter"){const d=i.value.trim();ht(n),d&&s&&s(d)}else r.key==="Escape"&&(ht(n),a&&a())},n.querySelector("#prompt-cancel").onclick=()=>{ht(n),a&&a()},n.querySelector("#prompt-ok").onclick=()=>{const r=i.value.trim();ht(n),r&&s&&s(r)},n.onclick=r=>{r.target===n&&(ht(n),a&&a())}}window.toast=pu;window.showToast=Gs;window.showConfirm=uu;window.showPrompt=xu;function er(){return p.currentApp==="sales"?p.currentTab==="new-sale"?Ki():Qi():p.currentApp==="clients"?Pn("desktop-primary"):p.currentApp==="reports"?Nn("desktop-primary"):p.currentApp==="repairs"?qn("desktop-primary"):p.currentApp==="marketing"?Bn("desktop-primary"):p.currentApp==="promoters"?Fn("desktop-primary"):p.currentApp==="inventory"?Un("desktop-primary"):p.currentApp==="settings"?Vn("desktop-primary"):p.currentApp==="schemes"?Hn("desktop-primary"):p.currentApp==="marketplace"?Gn("desktop-primary"):p.currentApp==="inquiries"?Wn("desktop-primary"):p.currentApp==="prebooking"?zn("desktop-primary"):p.currentApp==="automation"?Yn("desktop-primary"):p.currentApp==="mystore"?Jn("desktop-primary"):'<div class="p-10 flex items-center justify-center h-full text-slate-300 font-bold uppercase tracking-widest">App Module Not Found</div>'}function fu(){return p.currentApp==="sales"?p.salesMode==="add-customer"?vn("desktop"):jn():p.currentApp==="clients"?Pn("desktop-secondary"):p.currentApp==="reports"?Nn("desktop-secondary"):p.currentApp==="repairs"?qn("desktop-secondary"):p.currentApp==="marketing"?Bn("desktop-secondary"):p.currentApp==="promoters"?Fn("desktop-secondary"):p.currentApp==="inventory"?Un("desktop-secondary"):p.currentApp==="settings"?Vn("desktop-secondary"):p.currentApp==="schemes"?Hn("desktop-secondary"):p.currentApp==="marketplace"?Gn("desktop-secondary"):p.currentApp==="inquiries"?Wn("desktop-secondary"):p.currentApp==="prebooking"?zn("desktop-secondary"):p.currentApp==="automation"?Yn("desktop-secondary"):p.currentApp==="mystore"?Jn("desktop-secondary"):'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-2 opacity-50">grid_view</span><p class="text-[10px] font-black uppercase tracking-widest">Select an app to view details</p></div></div>'}function tr(){return Qa("desktop")}function bu(){return`
        <div class="h-full flex flex-row divide-x divide-slate-200 bg-white w-full">
            <!-- Col 1: App Menu (25% Width) -->
            <div class="w-[25%] shrink-0 h-full bg-white z-20 overflow-y-auto border-r border-slate-200">
                ${tr()}
            </div>

            <!-- Col 2: Active App (Flexible / Remaining Width ~45%) -->
            <div class="flex-1 bg-white h-full overflow-hidden flex flex-col relative z-10">
               ${p.isLoggedIn?p.currentApp==="launcher"?'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-4 opacity-20">arrow_back</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Select an App from the Menu</p></div></div>':er():p.authMode==="register"?Js("desktop-primary"):'<div class="h-full w-full bg-slate-950 flex flex-col items-center justify-center text-white/5 font-black text-[20vw] leading-none overflow-hidden select-none pointer-events-none"><div>OS</div></div>'}
            </div>

            <!-- Col 3: Preview (30% Width) -->
            <div class="w-[30%] shrink-0 bg-slate-50/50 h-full overflow-hidden flex flex-col relative dot-grid border-l border-slate-200">
                ${p.isLoggedIn?p.currentApp==="launcher"?'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-6xl mb-4 opacity-20">dashboard</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Retailer OS Environment</p></div></div>':fu():p.authMode==="register"?Js("desktop-secondary"):'<div class="h-full w-full bg-slate-950/95 flex flex-col items-center justify-center text-white/5 font-black text-[15vw] leading-none overflow-hidden select-none pointer-events-none"><div>RETAILER</div></div>'}
            </div>
        </div>
    `}function mu(){return`
        <div class="h-full grid grid-cols-2 divide-x divide-slate-200 bg-white">
            <!-- Col 1: Sidebar / App Menu -->
            <div class="col-span-1 h-full bg-white z-20 overflow-y-auto">
                ${tr()}
            </div>

            <!-- Col 2: Primary Content -->
            <div class="col-span-1 bg-white h-full overflow-hidden flex flex-col relative z-10">
               ${p.currentApp==="launcher"?'<div class="h-full flex items-center justify-center text-slate-300"><div class="text-center"><span class="material-icons-outlined text-4xl mb-4 opacity-20">arrow_back</span><p class="text-[10px] font-black uppercase tracking-widest opacity-40">Select an App from the Menu</p></div></div>':er()}
               
               <!-- Tablet Specific: Sticky Preview Button if Active -->
               ${p.currentApp==="sales"&&(p.currentTab==="new-sale"&&window.getActiveCart&&window.getActiveCart().length>0||p.currentTab==="history"&&p.salesHistoryId)?`
                    <div class="absolute bottom-6 right-6 z-50">
                        <button onclick="toggleMobileReceipt(true)" class="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
                            <span class="material-icons-outlined">receipt_long</span>
                        </button>
                    </div>
                    ${p.showMobileReceipt?`
                        <div class="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-8">
                            <div class="bg-white w-full max-w-lg h-[80vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-slide-up">
                                <div class="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                                    <h3 class="text-xs font-black text-slate-900 uppercase tracking-widest">Receipt Preview</h3>
                                    <button onclick="toggleMobileReceipt(false)" class="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 bg-white rounded-full shadow-sm"><span class="material-icons-outlined text-lg">close</span></button>
                                </div>
                                <div class="overflow-y-auto flex-1 p-8 bg-slate-50/50">
                                    ${jn()}
                                </div>
                            </div>
                        </div>
                    `:""}
               `:""}
            </div>
        </div>
    `}function sr(){if(!p.isLoggedIn)return`
            <div class="h-full w-full bg-white">
                ${Bl()}
            </div>
        `;if(p.currentApp==="launcher")return Qa("mobile");if(p.currentApp==="sales"){const t=window.getActiveCart&&window.getActiveCart().length>0,s=p.currentTab==="new-sale"&&t||p.currentTab==="history"&&p.salesHistoryId;return p.showMobileReceipt&&s?`
                <div class="fixed inset-0 z-[60] bg-white flex flex-col animate-slide-up">
                    <div class="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50 shrink-0">
                        <div class="flex items-center gap-2">
                             <button onclick="toggleMobileReceipt(false)" class="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-900"><span class="material-icons-outlined">arrow_back</span></button>
                             <h3 class="text-xs font-black text-slate-900 uppercase tracking-widest">Receipt Preview</h3>
                        </div>
                    </div>
                    <div class="overflow-y-auto flex-1 p-4 pb-20 bg-slate-50/50">
                        ${jn()}
                    </div>
                </div>
            `:`
            <div class="flex flex-col w-full h-full overflow-hidden bg-slate-50 relative">
                ${p.currentTab==="new-sale"?Ki():Qi()}
                ${s?'<div class="h-28 shrink-0 w-full"></div>':""} <!-- Spacer inside flex flow pushing content up -->
            </div>
            ${s?`
            <div class="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100 z-50 w-full mb-safe">
                <button onclick="toggleMobileReceipt(true)" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase shadow-xl flex items-center justify-center gap-2">
                    <span class="material-icons-outlined text-sm">receipt_long</span> Preview Receipt
                </button>
            </div>
        `:""}
        `}let e="";if(p.currentApp==="clients")e=Pn("mobile");else if(p.currentApp==="reports")e=Nn("mobile");else if(p.currentApp==="repairs")e=qn("mobile");else if(p.currentApp==="marketing")e=Bn("mobile");else if(p.currentApp==="promoters")e=Fn("mobile");else if(p.currentApp==="inventory")e=Un("mobile");else if(p.currentApp==="settings")e=Vn("mobile");else if(p.currentApp==="schemes")e=Hn("mobile");else if(p.currentApp==="marketplace")e=Gn("mobile");else if(p.currentApp==="inquiries")e=Wn("mobile");else if(p.currentApp==="prebooking")e=zn("mobile");else if(p.currentApp==="automation")e=Yn("mobile");else if(p.currentApp==="mystore")e=Jn("mobile");else return Qa("mobile");return`
        <div class="flex flex-col w-full h-full overflow-hidden bg-slate-50 relative">
            ${e}
        </div>
    `}function La(){const e=document.getElementById("app");if(e)try{const t=window.innerWidth;t<768?e.innerHTML=sr():t>=768&&t<1024?e.innerHTML=mu():e.innerHTML=bu()}catch(t){console.error(t),e.innerHTML=`< div class="p-4 text-slate-500 font-bold" > Error: ${t.message} <br><small>${t.stack}</small></div>`}}function hu(){const e=window.innerWidth;if(e<768){const t=document.getElementById("app");t&&(t.innerHTML=sr())}else{const t=document.querySelector(".flex-1.bg-white.h-full.overflow-hidden.flex.flex-col.relative.z-10")||document.querySelector(".col-span-1.bg-white.h-full.overflow-hidden.flex.flex-col.relative.z-10"),s=document.querySelector(".w-\\[30\\%\\].shrink-0.bg-slate-50\\/50.h-full.overflow-hidden.flex.flex-col.relative.dot-grid.border-l.border-slate-200");t&&(t.innerHTML=p.authMode==="register"?Js("desktop-primary"):'<div class="h-full w-full bg-slate-950 flex flex-col items-center justify-center text-white/5 font-black text-[20vw] leading-none overflow-hidden select-none pointer-events-none"><div>OS</div></div>'),s&&e>=1024&&(s.innerHTML=p.authMode==="register"?Js("desktop-secondary"):'<div class="h-full w-full bg-slate-950/95 flex flex-col items-center justify-center text-white/5 font-black text-[15vw] leading-none overflow-hidden select-none pointer-events-none"><div>RETAILER</div></div>')}}window.updateAuthContent=hu;Ll(La);Ll(su);au();window.addEventListener("resize",()=>{window.innerWidth!==p.viewportWidth&&(p.viewportWidth=window.innerWidth,p.gridCols=window.innerWidth<768?4:3,La())});K().then(()=>{console.log("Initial data sync complete"),La()}).catch(e=>{console.error("Initial sync failed:",e),La()});

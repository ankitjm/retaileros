import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useInView } from "motion/react";
import { 
  Smartphone, 
  ChevronRight, 
  Play, 
  Layout, 
  CheckCircle2, 
  ShieldCheck, 
  Users,
  Search,
  ArrowRight,
  Menu,
  X,
  Smartphone as PhoneIcon,
  Receipt,
  Package,
  BarChart3,
  Box,
  Monitor,
  ShoppingCart,
  TrendingUp,
  ChevronLeft,
  Scan,
  CreditCard,
  Store,
  MessageSquare,
  Cloud,
  Settings,
  Shield,
  Zap,
  Gift,
  Truck,
  Database,
  Smartphone as DeviceIcon,
  FileText,
  Bell,
  Wallet,
  HelpCircle,
  Briefcase,
  Wrench,
  ArrowLeftRight,
  Percent,
  Megaphone,
  Bot,
  Rocket
} from "lucide-react";

// --- Custom Hooks ---

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mousePosition;
};

const BentoFeatures = () => {
  return (
    <section className="py-14 md:py-20 bg-white overflow-hidden" id="features">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/5 rounded-full border border-brand/10 mb-6">
            <Layout className="w-3.5 h-3.5 text-brand" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand">Core Modules</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Surgical precision for <br />
            <span className="text-slate-400 font-headline italic">modern Indian retailers</span>
          </h2>
        </motion.div>

        <div className="bento-grid">
          {/* Sales Intelligence — 2×2 hero card */}
          <motion.div whileHover={{ y: -5 }} className="col-span-1 md:col-span-2 row-span-2 glass-panel rounded-2xl p-6 md:p-8 flex flex-col justify-between group overflow-hidden relative cursor-pointer">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[80px] group-hover:bg-brand/10 transition-colors" />
            <div className="absolute bottom-0 right-0 w-36 h-36 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity pointer-events-none">
              <img src="/images/drive/app-screenshot-09.png" alt="" className="w-full h-full object-contain" aria-hidden="true" />
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg shadow-brand/20 mb-5 border border-white/20">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Sales Intelligence</h3>
              <p className="text-slate-500 font-medium uppercase text-[10px] tracking-widest mb-4">Real-time Performance Metrics</p>
              <ul className="space-y-4">
                {['Live Profit Tracking', 'Staff Performance Leaderboards', 'Predictive Stock Insights'].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex items-center gap-2 text-brand font-black text-xs uppercase tracking-widest">Connect Analytics <ArrowRight className="w-4 h-4" /></div>
          </motion.div>

          {/* GST Billing — 2×1 with stationery image */}
          <motion.div whileHover={{ y: -5 }} className="col-span-1 md:col-span-2 row-span-1 glass-panel rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between group overflow-hidden cursor-pointer">
            <div className="space-y-4 relative z-10 w-full md:w-3/5">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg mb-4 group-hover:rotate-12 transition-transform">
                <Receipt className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Compliant GST Billing</h3>
              <p className="text-slate-500 text-sm font-medium">HSN auto-mapping and one-click filing.</p>
            </div>
            <div className="hidden md:block w-36 h-28 rounded-2xl overflow-hidden flex-shrink-0 group-hover:rotate-3 group-hover:scale-105 transition-transform shadow-md">
              <img src="/images/drive/app-screenshot-08.png" alt="Brand stationery" className="w-full h-full object-cover object-center" />
            </div>
          </motion.div>

          {/* IMEI Control — 1×1 */}
          <motion.div whileHover={{ y: -5 }} className="col-span-1 row-span-1 glass-panel rounded-2xl p-5 md:p-6 flex flex-col justify-between group cursor-pointer">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg mb-6"><Box className="w-5 h-5 text-white" /></div>
            <div>
              <h4 className="text-base font-black text-slate-900 mb-1">IMEI Control</h4>
              <p className="text-xs text-slate-500 font-bold">Serial-level stock tracking.</p>
            </div>
          </motion.div>

          {/* Service Hub — 1×1 */}
          <motion.div whileHover={{ y: -5 }} className="col-span-1 row-span-1 glass-panel rounded-2xl p-5 md:p-6 flex flex-col justify-between group cursor-pointer">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg mb-6"><Wrench className="w-5 h-5 text-white" /></div>
            <div>
              <h4 className="text-base font-black text-slate-900 mb-1">Service Hub</h4>
              <p className="text-xs text-slate-500 font-bold">Status tracking for repairs.</p>
            </div>
          </motion.div>

          {/* Schemes Management — 2×1 with brand materials image */}
          <motion.div whileHover={{ y: -5 }} className="col-span-1 md:col-span-2 row-span-1 glass-panel rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between group overflow-hidden cursor-pointer">
            <div className="space-y-3 relative z-10 w-full md:w-3/5">
              <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center shadow-lg mb-4 group-hover:rotate-12 transition-transform">
                <Percent className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Schemes Management</h3>
              <p className="text-slate-500 text-sm font-medium">EMI plans, cashbacks, and brand promotions — automated end-to-end.</p>
            </div>
            <div className="hidden md:block w-36 h-28 rounded-2xl overflow-hidden flex-shrink-0 group-hover:rotate-3 group-hover:scale-105 transition-transform shadow-md">
              <img src="/images/drive/app-screenshot-01.png" alt="Brand materials" className="w-full h-full object-cover object-center" />
            </div>
          </motion.div>

          {/* Marketplace Integration — 2×1 with social/device mockup */}
          <motion.div whileHover={{ y: -5 }} className="col-span-1 md:col-span-2 row-span-1 glass-panel rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between group overflow-hidden cursor-pointer">
            <div className="space-y-3 relative z-10 w-full md:w-3/5">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg mb-4 group-hover:rotate-12 transition-transform">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Marketplace Integration</h3>
              <p className="text-slate-500 text-sm font-medium">Sync listings, orders, and inventory across Flipkart, Amazon, and more.</p>
            </div>
            <div className="hidden md:block w-36 h-28 rounded-2xl overflow-hidden flex-shrink-0 group-hover:rotate-3 group-hover:scale-105 transition-transform shadow-md">
              <img src="/images/drive/app-screenshot-07.png" alt="Multi-channel presence" className="w-full h-full object-cover object-center" />
            </div>
          </motion.div>

          {/* Pre-Booking System — 1×1 */}
          <motion.div whileHover={{ y: -5 }} className="col-span-1 row-span-1 glass-panel rounded-2xl p-5 md:p-6 flex flex-col justify-between group cursor-pointer overflow-hidden relative">
            <div className="absolute bottom-0 right-0 w-24 h-24 opacity-[0.07] group-hover:opacity-[0.14] transition-opacity pointer-events-none">
              <img src="/images/drive/app-screenshot-04.png" alt="" className="w-full h-full object-contain" aria-hidden="true" />
            </div>
            <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center shadow-lg mb-6 relative z-10"><Rocket className="w-5 h-5 text-white" /></div>
            <div className="relative z-10">
              <h4 className="text-base font-black text-slate-900 mb-1">Pre-Booking</h4>
              <p className="text-xs text-slate-500 font-bold">Reserve launches before stock arrives.</p>
            </div>
          </motion.div>

          {/* Automation Hub — 1×1 */}
          <motion.div whileHover={{ y: -5 }} className="col-span-1 row-span-1 glass-panel rounded-2xl p-5 md:p-6 flex flex-col justify-between group cursor-pointer">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg mb-6"><Bot className="w-5 h-5 text-white" /></div>
            <div>
              <h4 className="text-base font-black text-slate-900 mb-1">Automation Hub</h4>
              <p className="text-xs text-slate-500 font-bold">Triggers, alerts, and task workflows.</p>
            </div>
          </motion.div>

          {/* Customer Inquiry Management — 1×1 */}
          <motion.div whileHover={{ y: -5 }} className="col-span-1 row-span-1 glass-panel rounded-2xl p-5 md:p-6 flex flex-col justify-between group cursor-pointer">
            <div className="w-10 h-10 bg-rose-500 rounded-xl flex items-center justify-center shadow-lg mb-6"><HelpCircle className="w-5 h-5 text-white" /></div>
            <div>
              <h4 className="text-base font-black text-slate-900 mb-1">Inquiry Management</h4>
              <p className="text-xs text-slate-500 font-bold">Track, convert, and follow up on leads.</p>
            </div>
          </motion.div>

          {/* Notifications Center — 1×1 */}
          <motion.div whileHover={{ y: -5 }} className="col-span-1 row-span-1 glass-panel rounded-2xl p-5 md:p-6 flex flex-col justify-between group cursor-pointer">
            <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg mb-6"><Bell className="w-5 h-5 text-white" /></div>
            <div>
              <h4 className="text-base font-black text-slate-900 mb-1">Notifications</h4>
              <p className="text-xs text-slate-500 font-bold">Smart alerts for sales, stock, and tasks.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Navbar = ({ onNavigate }: { onNavigate: (view: 'home' | 'billing') => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled 
          ? 'bg-white/60 backdrop-blur-2xl border-b border-slate-200/50 py-3' 
          : 'bg-transparent py-6'
      } px-6 md:px-12`}>
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-500">
              <Layout className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter font-headline text-slate-900">
              Retailer<span className="text-brand">OS</span>
            </span>
          </motion.div>
          
          <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold text-slate-500 uppercase tracking-widest">
            {['Features', 'Inquiry', 'Pricing', 'Demo'].map((item, idx) => (
              <motion.a 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                href={`#${item.toLowerCase()}`} 
                className="hover:text-slate-900 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <a
              href="/app/"
              className="group relative px-7 py-3 bg-slate-900 text-white rounded-full font-bold text-sm overflow-hidden shadow-2xl shadow-slate-900/10 hover:shadow-brand/20 transition-all active:scale-95 inline-flex"
            >
              <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                Launch Dashboard <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </motion.div>
        </div>
      </nav>
    </>
  );
};

const InteractiveStore = ({ onSell, onScheme }: { onSell: (phone: any) => void, onScheme: (phone: any) => void }) => {
  const defaultPhones = [
    { 
      id: 'i15pm', 
      brand: 'Apple', 
      model: 'iPhone 15 Pro Max', 
      price: '₹1,59,900', 
      stock: '15', 
      img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=400&auto=format&fit=crop',
      schemes: 'No Cost EMI | Exchange Bonus up to ₹10,000'
    },
    { 
      id: 's24u', 
      brand: 'Samsung', 
      model: 'Galaxy S24 Ultra', 
      price: '₹1,29,999', 
      stock: '12', 
      img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=400&auto=format&fit=crop',
      schemes: 'Free Galaxy Watch 6 | 24 Months No Cost EMI'
    },
    { 
      id: 'op12', 
      brand: 'OnePlus', 
      model: 'OnePlus 12', 
      price: '₹64,999', 
      stock: '20', 
      img: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=400&auto=format&fit=crop',
      schemes: 'Instant Bank Discount ₹5,000 | Free Buds Z2'
    },
    { 
      id: 'p8p', 
      brand: 'Google', 
      model: 'Pixel 8 Pro', 
      price: '₹1,06,999', 
      stock: '8', 
      img: 'https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?q=80&w=400&auto=format&fit=crop',
      schemes: 'Exchange Bonus ₹8,000 | Free Fitbit Charge 6'
    },
    { 
      id: 'mi14u', 
      brand: 'Xiaomi', 
      model: 'Xiaomi 14 Ultra', 
      price: '₹99,999', 
      stock: '10', 
      img: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=400&auto=format&fit=crop',
      schemes: 'Professional Photography Kit Free | Bank Offer ₹7,000'
    },
    { 
      id: 'vx100p', 
      brand: 'Vivo', 
      model: 'X100 Pro', 
      price: '₹89,999', 
      stock: '12', 
      img: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=400&auto=format&fit=crop',
      schemes: 'V-Shield Protection Free | Instant Cashback ₹5,000'
    },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto flex items-center justify-center p-2">
      {/* High-End Glass Workspace */}
      <div className="absolute inset-0 z-0 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200/50 shadow-xl bg-slate-50/30 backdrop-blur-sm" />
      
      <div className="absolute -inset-4 bg-gradient-to-br from-brand/5 via-transparent to-blue-500/5 rounded-[4rem] blur-3xl opacity-50 pointer-events-none" />

      <div className="w-full h-full p-4 md:p-8 relative z-10">
        <div className="grid grid-cols-3 gap-x-4 md:gap-x-6 gap-y-6 md:gap-y-10">
          {defaultPhones.map((phone, index) => (
            <motion.div 
              key={phone.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center group"
            >
              {/* Refined Stand Reveal */}
              <div className="absolute bottom-6 w-10 md:w-14 h-1.5 bg-slate-200/50 rounded-full blur-sm opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 w-8 md:w-12 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent rounded-full shadow-lg" />
              
              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  whileHover={{ y: -15, scale: 1.05 }}
                  className="relative cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                >
                  <div className="w-12 h-20 md:w-16 md:h-28 rounded-lg md:rounded-xl overflow-hidden shadow-lg border border-white/20 bg-black relative isolate">
                    <img 
                      src={phone.img} 
                      alt={phone.model}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/40" />
                  </div>

                  {/* Hover Floating Actions */}
                  <div className="absolute -top-36 md:-top-44 left-1/2 -translate-x-1/2 w-48 md:w-56 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-500 scale-95 group-hover:scale-100 z-50">
                    <div className="bg-white/90 backdrop-blur-2xl rounded-2xl p-4 md:p-5 border border-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] ring-1 ring-slate-900/5">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[9px] font-black text-brand uppercase tracking-widest">{phone.brand}</span>
                            <h4 className="text-xs md:text-sm font-black text-slate-900 leading-tight mt-0.5">{phone.model}</h4>
                          </div>
                          <div className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[9px] font-bold">In Stock</div>
                        </div>

                        <div className="pt-2 border-t border-slate-100">
                          <div className="flex justify-between items-baseline">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Best Price</span>
                            <span className="text-sm md:text-base font-black text-slate-900 tracking-tight">{phone.price}</span>
                          </div>
                        </div>

                          <div className="flex gap-3 pt-1">
                          <button 
                            onClick={(e: React.MouseEvent) => { e.stopPropagation(); onScheme(phone); }}
                            className="flex-1 py-2 bg-slate-50 hover:bg-slate-100 text-slate-900 text-[9px] md:text-[10px] font-black rounded-lg transition-all uppercase tracking-widest"
                          >
                            Schemes
                          </button>
                          <button 
                            onClick={(e: React.MouseEvent) => { e.stopPropagation(); onSell(phone); }}
                            className="flex-1 py-2 bg-brand text-white text-[9px] md:text-[10px] font-black rounded-lg transition-all uppercase tracking-widest shadow-md shadow-brand/20 active:scale-95"
                          >
                            Sell
                          </button>
                        </div>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/90 rotate-45 border-r border-b border-white" />
                    </div>
                  </div>
                </motion.div>

                <div className="mt-4 text-center">
                  <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-wider group-hover:text-slate-900 transition-colors duration-300">
                    {phone.model}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ feature }: { feature: any }) => {
  return (
    <div className="flex-shrink-0 w-[280px] md:w-[440px] h-[320px] md:h-[340px] bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex border border-slate-100 card-glow">
      {/* Left Side: Details */}
      <div className="w-1/2 p-4 md:p-6 flex flex-col justify-between">
        <div className="space-y-3 md:space-y-4">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${feature.iconBg}`}>
            <feature.icon className={`w-4 h-4 ${feature.iconColor}`} />
          </div>
          
          <div className="space-y-2 md:space-y-3">
            <h3 className="text-base md:text-xl font-black text-slate-900 leading-tight">
              {feature.title}
            </h3>
            <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">
              {feature.description}
            </p>
          </div>

          <ul className="space-y-2 md:space-y-3">
            {feature.bullets.map((bullet: string, i: number) => (
              <li key={i} className="flex items-center gap-2 md:gap-3">
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5 text-orange-600" />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-slate-600">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <button className="flex items-center gap-2 text-brand font-bold text-[10px] md:text-xs uppercase tracking-widest group hover:gap-3 transition-all duration-300">
          Learn more 
          <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Right Side: Visual */}
      <div className="w-1/2 bg-slate-100 relative overflow-hidden group border-l border-slate-100">
        <img 
          src={feature.image} 
          alt={feature.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          crossOrigin="anonymous"
        />
        {/* Soft gradient from bottom to allow white text to pop without hiding the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80" />
        
        {/* Subtle corner light */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-[80px] rounded-full mix-blend-overlay"></div>

        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 right-6 md:right-8 z-10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 md:p-5 shadow-2xl flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0 border border-white/30 backdrop-blur-md`}>
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-[10px] md:text-xs font-black text-white/70 uppercase tracking-[0.2em] mb-1">{feature.visualText}</p>
              <p className="text-white font-bold text-sm md:text-base leading-tight">Seeing {feature.title} in action</p>
            </div>
          </div>
        </div>
        
        {/* Default visible badge when not hovering */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 z-10 group-hover:opacity-0 transition-opacity duration-300">
           <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-full px-4 py-2 flex items-center gap-2">
             <feature.icon className="w-4 h-4 text-white" />
             <span className="text-xs font-bold text-white tracking-wider">{feature.title}</span>
           </div>
        </div>
      </div>
    </div>
  );
};

const FeaturesCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const features = [
    { title: "Smart Alerts", description: "Real-time stock & payment notifications on your phone.", icon: Bell, iconBg: "bg-red-50", iconColor: "text-red-700", bullets: ["Low stock warnings", "Payment reminders"], visualText: "STAY ALERT", image: "/images/khosha-social-mockup.png" },
    { title: "Telecom CRM", description: "Manage customer profiles and phone purchase history.", icon: Users, iconBg: "bg-blue-50", iconColor: "text-blue-700", bullets: ["Customer loyalty", "History tracking"], visualText: "KNOW CLIENTS", image: "/images/khosha-brand-mockup.png" },
    { title: "Trade Hub", description: "Seamlessly buy/sell stock with verified distributors.", icon: ArrowLeftRight, iconBg: "bg-indigo-50", iconColor: "text-indigo-700", bullets: ["B2B Marketplace", "Price analysis"], visualText: "TRADE HUB", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop" },
    { title: "WhatsApp Marketing", description: "Send automated stock updates to your local customers.", icon: Megaphone, iconBg: "bg-green-50", iconColor: "text-green-700", bullets: ["Auto-broadcast", "Campaign ROI"], visualText: "DRIVE SALES", image: "/images/khosha-social-mockup.png" }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 bg-slate-50/50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8 flex justify-between items-end">
        <div>
           <p className="text-[10px] font-black text-brand uppercase tracking-[0.3em] mb-3">Deep Capabilities</p>
           <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">The Full Ecosystem</h3>
        </div>
        <div className="flex gap-4">
          <button onClick={() => scroll('left')} className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-slate-50 border border-slate-100"><ChevronLeft className="w-4 h-4 text-slate-900" /></button>
          <button onClick={() => scroll('right')} className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-slate-50 border border-slate-100"><ChevronRight className="w-4 h-4 text-slate-900" /></button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-5 overflow-x-auto px-6 md:px-[calc((100vw-1400px)/2+48px)] pb-8 no-scrollbar snap-x snap-mandatory">
        {features.map((f, i) => (
          <div key={i} className="snap-center">
            <FeatureCard feature={f} />
          </div>
        ))}
      </div>
    </section>
  );
};

const InlineSchemeView = ({ phone, onClose }: { phone: any; onClose: () => void }) => {
  const schemes = phone.schemes.split('|').map((s: string) => s.trim());
  return (
    <motion.div
      key="schemes"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-2xl mx-auto rounded-2xl md:rounded-3xl border border-slate-200/50 shadow-xl overflow-hidden bg-white"
    >
      {/* Mac-style chrome bar */}
      <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex items-center gap-1.5">
            <Layout className="w-3 h-3 text-white/40" />
            <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">Inside RetailerOS — Scheme Manager</span>
          </div>
        </div>
        <button onClick={onClose} className="p-1 rounded hover:bg-white/10 transition-colors">
          <X className="w-3.5 h-3.5 text-white/50" />
        </button>
      </div>

      {/* Sub-header */}
      <div className="bg-slate-50 border-b border-slate-100 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Percent className="w-4 h-4 text-emerald-600" />
          </div>
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Scheme Manager</p>
            <p className="text-xs font-black text-slate-900">{phone.brand} {phone.model}</p>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[9px] font-bold rounded-full border border-emerald-100 uppercase tracking-wide">{phone.stock} in stock</span>
      </div>

      {/* Scheme cards */}
      <div className="p-5 space-y-3">
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Active Manufacturer Offers</p>
        {schemes.map((scheme: string, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-3 p-3.5 bg-gradient-to-r from-emerald-50 to-white border border-emerald-100/80 rounded-xl"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 leading-snug">{scheme}</p>
              <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">Valid till month end</p>
            </div>
          </motion.div>
        ))}

        <div className="pt-2 pb-1 flex items-center gap-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
          <div className="flex-1 h-px bg-slate-100" />
          <span>MRP</span>
          <span className="text-slate-900 text-sm font-black">{phone.price}</span>
          <div className="flex-1 h-px bg-slate-100" />
        </div>
      </div>

      {/* Footer actions */}
      <div className="px-5 pb-5 flex gap-3">
        <button
          onClick={onClose}
          className="flex-1 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 font-black rounded-xl text-[9px] uppercase tracking-widest transition-all border border-slate-100"
        >
          ← Back
        </button>
        <button className="flex-[2] py-2.5 bg-slate-900 hover:bg-brand text-white font-black rounded-xl text-[9px] uppercase tracking-widest transition-all shadow-lg shadow-slate-900/10 active:scale-95">
          Apply &amp; Sell Now
        </button>
      </div>
    </motion.div>
  );
};

const InlineInvoiceView = ({ phone, onClose }: { phone: any; onClose: () => void }) => {
  const [invoiceNum] = useState(() => `ROS-${Math.floor(10000 + Math.random() * 90000)}`);
  const today = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  const raw = parseFloat(phone.price.replace(/[₹,]/g, ''));
  const base = Math.round(raw / 1.18);
  const cgst = Math.round((raw - base) / 2);
  const sgst = cgst;

  return (
    <motion.div
      key="invoice"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-2xl mx-auto rounded-2xl md:rounded-3xl border border-slate-200/50 shadow-xl overflow-hidden bg-white"
    >
      {/* Mac-style chrome bar */}
      <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex items-center gap-1.5">
            <Layout className="w-3 h-3 text-white/40" />
            <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">Inside RetailerOS — Billing</span>
          </div>
        </div>
        <button onClick={onClose} className="p-1 rounded hover:bg-white/10 transition-colors">
          <X className="w-3.5 h-3.5 text-white/50" />
        </button>
      </div>

      {/* Invoice header */}
      <div className="bg-slate-50 border-b border-slate-100 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-900 rounded-xl flex items-center justify-center shadow-md">
            <Receipt className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Sales Invoice</p>
            <p className="text-xs font-black text-slate-900">{invoiceNum}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Date</p>
          <p className="text-xs font-black text-slate-900">{today}</p>
        </div>
      </div>

      {/* Item table */}
      <div className="p-5 space-y-4">
        <div className="border border-slate-100 rounded-xl overflow-hidden">
          <div className="grid grid-cols-12 gap-1 px-4 py-2 bg-slate-50 text-[9px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
            <span className="col-span-6">Item</span>
            <span className="col-span-2 text-center">Qty</span>
            <span className="col-span-2 text-right">Base</span>
            <span className="col-span-2 text-right">Total</span>
          </div>
          <div className="grid grid-cols-12 gap-1 px-4 py-3 items-center">
            <div className="col-span-6">
              <p className="text-xs font-black text-slate-900">{phone.model}</p>
              <p className="text-[9px] font-bold text-slate-400">{phone.brand} · GST @18%</p>
            </div>
            <span className="col-span-2 text-center text-xs font-black text-slate-700">1</span>
            <span className="col-span-2 text-right text-xs font-black text-slate-600">₹{base.toLocaleString('en-IN')}</span>
            <span className="col-span-2 text-right text-xs font-black text-slate-900">{phone.price}</span>
          </div>
        </div>

        {/* GST breakdown */}
        <div className="space-y-2 px-1">
          {[['CGST @9%', `₹${cgst.toLocaleString('en-IN')}`], ['SGST @9%', `₹${sgst.toLocaleString('en-IN')}`]].map(([label, value]) => (
            <div key={label} className="flex justify-between text-[10px] font-bold text-slate-400">
              <span>{label}</span><span>{value}</span>
            </div>
          ))}
          <div className="flex justify-between text-sm font-black text-slate-900 pt-2 border-t border-slate-100 mt-2">
            <span>Total Payable</span><span>{phone.price}</span>
          </div>
        </div>

        {/* Customer placeholder */}
        <div className="bg-slate-50 rounded-xl px-4 py-3 flex items-center gap-3 border border-slate-100">
          <Users className="w-4 h-4 text-slate-400 shrink-0" />
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Walk-in Customer</p>
            <p className="text-xs font-bold text-slate-600">Cash Sale · No GST Invoice</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5 flex gap-3">
        <button
          onClick={onClose}
          className="flex-1 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 font-black rounded-xl text-[9px] uppercase tracking-widest transition-all border border-slate-100"
        >
          ← Back
        </button>
        <button className="flex-[2] py-2.5 bg-brand text-white font-black rounded-xl text-[9px] uppercase tracking-widest transition-all shadow-lg shadow-brand/20 active:scale-95 flex items-center justify-center gap-2">
          <FileText className="w-3 h-3" /> Print Invoice
        </button>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const [activePanel, setActivePanel] = useState<null | 'scheme' | 'invoice'>(null);
  const [selectedPhone, setSelectedPhone] = useState<any>(null);

  const handleSell = (phone: any) => { setSelectedPhone(phone); setActivePanel('invoice'); };
  const handleScheme = (phone: any) => { setSelectedPhone(phone); setActivePanel('scheme'); };
  const handleClose = () => { setActivePanel(null); };

  return (
    <section className="relative h-[100vh] flex flex-col justify-center overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-brand/5 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] bg-blue-500/5 blur-[100px] rounded-full" 
        />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-6 items-center">
        <div className="space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-50 border border-slate-200/60 rounded-full shadow-sm">
              <div className="relative">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-40" />
              </div>
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-none">
                Built for Indian Mobile &amp; Electronics Retailers
              </span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-[3.5rem] font-headline font-black leading-[0.95] tracking-[-0.03em] text-slate-900"
          >
            Step into the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-brand-light">New Age</span> <br />
            of Indian Retail
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-slate-500 font-medium max-w-md leading-relaxed font-sans"
          >
            The surgical-grade intelligence suite for mobile commerce. Effortless scaling, precision billing, and total inventory control.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2"
          >
            <a href="/app/" className="group relative px-7 py-3 bg-brand text-white rounded-full font-bold text-sm shadow-lg shadow-brand/20 hover:shadow-brand/30 overflow-hidden active:scale-95 transition-all inline-block">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">Get Started Now</span>
            </a>
            <a href="#inquiry" className="group px-7 py-3 bg-white border border-slate-200 text-slate-900 rounded-full font-semibold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm inline-flex">
              <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0 group-hover:scale-90 transition-transform">
                <Play className="w-3 h-3 text-white fill-white ml-0.5" />
              </div>
              Watch Demo
            </a>
          </motion.div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {activePanel === null ? (
              <motion.div
                key="store"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <InteractiveStore onSell={handleSell} onScheme={handleScheme} />
              </motion.div>
            ) : activePanel === 'scheme' ? (
              <InlineSchemeView phone={selectedPhone} onClose={handleClose} />
            ) : (
              <InlineInvoiceView phone={selectedPhone} onClose={handleClose} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  return (
    <div className="py-10 relative overflow-hidden bg-slate-50/50">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <motion.div 
                key={i} 
                whileHover={{ y: -4, scale: 1.05, zIndex: 20 }}
                className="w-10 h-10 rounded-full border-3 border-white bg-slate-100 shadow-md overflow-hidden relative cursor-pointer"
              >
                <img src={`https://i.pravatar.cc/150?u=${i+100}`} alt="user" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
          <p className="text-sm font-semibold text-slate-400 tracking-tight">
            Built for <span className="text-slate-900 font-bold">Indian Telecom &amp; Electronics Retailers</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {['Samsung', 'Apple', 'Xiaomi', 'Vivo'].map(brand => (
            <div key={brand} className="text-lg md:text-xl font-black text-slate-900 tracking-tighter hover:text-brand transition-colors cursor-default">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const OnboardingSection = () => {
  const [formData, setFormData] = useState({
    storeName: '',
    gstin: '',
    phone: '',
    stock: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const steps = [
    {
      id: 'storeName',
      title: 'Identify Your Store',
      description: 'Enter your store name and city to get started.',
      icon: Store,
    },
    {
      id: 'gstin',
      title: 'Business Verification',
      description: 'Provide your GSTIN for automated tax compliance.',
      icon: ShieldCheck,
    },
    {
      id: 'phone',
      title: 'Owner Contact',
      description: 'Secure your account with your mobile number.',
      icon: PhoneIcon,
    },
    {
      id: 'stock',
      title: 'Initial Inventory',
      description: 'Tell us your current stock level to sync your data.',
      icon: Package,
    }
  ];

  const isStepFilled = (id: string) => {
    return formData[id as keyof typeof formData].length > 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) {
      setSubmitError('Mobile number is required.');
      return;
    }
    setSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/analytics/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.storeName || undefined,
          phone: formData.phone,
          store_type: formData.gstin ? 'gstin:' + formData.gstin : 'telecom_retailer',
          city: formData.stock ? 'stock:' + formData.stock : undefined,
          source: 'onboarding_form',
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Submission failed');
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="inquiry" className="py-14 bg-white relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Steps */}
          <div className="space-y-8 relative">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full border border-primary/8 w-fit">
                <Zap className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Fast Onboarding</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-[1.15]">
                Go live in <br />
                <span className="text-primary italic">minutes</span>
              </h2>
              <p className="text-slate-500 font-medium max-w-sm text-xs">
                Scale your retail empire with zero friction. Follow these simple steps.
              </p>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-4 bottom-4 w-px bg-slate-100" />

              {steps.map((step, index) => {
                const filled = isStepFilled(step.id);
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 relative group h-[80px] pt-[20px]"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 z-10 transition-all duration-700 ${
                      filled ? 'bg-slate-900 text-white scale-105 shadow-lg shadow-slate-900/20' : 'bg-slate-50 text-slate-400 border border-slate-200/50'
                    }`}>
                      <step.icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1.5 pt-1">
                      <h3 className={`text-base font-bold transition-colors duration-500 tracking-tight ${filled ? 'text-slate-900' : 'text-slate-400'}`}>
                        {step.title}
                      </h3>
                      <p className="text-slate-500 text-[11px] font-medium leading-relaxed max-w-xs">{step.description}</p>
                    </div>

                    {/* Connecting Line to the right (visible on desktop) */}
                    <div className={`hidden lg:block absolute left-12 top-[52px] h-px transition-all duration-700 origin-left ${
                      filled ? 'bg-primary w-[calc(100%+80px)] opacity-30' : 'bg-slate-100 w-0 opacity-0'
                    }`} />
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="pt-0 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl" />

              {submitted ? (
                <div className="relative z-10 flex flex-col items-center justify-center gap-4 py-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-emerald-500" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-slate-900 font-bold text-base">We've got your details!</p>
                    <p className="text-slate-500 text-sm font-medium">Our team will reach out to you shortly.</p>
                  </div>
                  <a
                    href="/app/"
                    className="mt-2 px-6 py-2.5 bg-primary text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all shadow-md shadow-primary/15 inline-flex items-center gap-2 group"
                  >
                    Launch App
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ) : (
                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Store Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Mobile World"
                      className="w-full h-10 px-4 bg-white rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/5 outline-none transition-all text-sm font-medium text-slate-900"
                      value={formData.storeName}
                      onChange={(e) => setFormData({...formData, storeName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">GSTIN Number</label>
                    <input
                      type="text"
                      placeholder="22AAAAA0000A1Z5"
                      className="w-full h-10 px-4 bg-white rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/5 outline-none transition-all text-sm font-medium text-slate-900"
                      value={formData.gstin}
                      onChange={(e) => setFormData({...formData, gstin: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Mobile Number <span className="text-primary">*</span></label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      className="w-full h-10 px-4 bg-white rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/5 outline-none transition-all text-sm font-medium text-slate-900"
                      value={formData.phone}
                      onChange={(e) => { setFormData({...formData, phone: e.target.value}); setSubmitError(''); }}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Initial Stock Count</label>
                    <input
                      type="number"
                      placeholder="Estimated units"
                      className="w-full h-10 px-4 bg-white rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/5 outline-none transition-all text-sm font-medium text-slate-900"
                      value={formData.stock}
                      onChange={(e) => setFormData({...formData, stock: e.target.value})}
                    />
                  </div>

                  {submitError && (
                    <p className="text-red-500 text-xs font-medium">{submitError}</p>
                  )}

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full h-10 bg-primary text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-md shadow-primary/15 group disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? 'Sending…' : 'Get Started'}
                      {!submitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResponsiveSection = () => {
  return (
    <section className="py-14 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-15">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 rounded-full border border-white/8"
          >
            <Monitor className="w-3 h-3 text-white/60" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Device Agnostic</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-extrabold leading-tight"
          >
            Responsive. Reliable. Everywhere.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 font-medium text-sm"
          >
            Run your store from the counter or on the go. RetailerOS adapts perfectly to every device in your workflow.
          </motion.p>
        </div>

        {/* Mockup Showcase */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Main Desktop/Laptop Mockup */}
          <div className="relative z-20 bg-slate-800 rounded-2xl p-1.5 shadow-xl border border-white/10 overflow-hidden">
            <div className="bg-slate-900 rounded-xl overflow-hidden aspect-[16/10] relative">
              <img 
                src="/images/desktop-dashboard.png" 
                alt="RetailerOS Desktop Dashboard" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              {/* UI Overlay Elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <div className="absolute top-6 left-6 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
            </div>
          </div>

          {/* Tablet Mockup */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute -right-12 -bottom-12 w-[45%] z-30 hidden md:block"
          >
            <div className="bg-slate-800 rounded-[24px] p-1.5 shadow-2xl border border-white/10 overflow-hidden">
              <div className="bg-slate-900 rounded-[18px] overflow-hidden aspect-[4/3]">
                <img 
                  src="/images/tablet-dashboard.png" 
                  alt="RetailerOS Tablet View" 
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile Mockup */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -left-8 bottom-12 w-[22%] z-40 hidden md:block"
          >
            <div className="bg-slate-800 rounded-[40px] p-2 shadow-2xl border border-white/10 overflow-hidden">
              <div className="bg-slate-900 rounded-[32px] overflow-hidden aspect-[9/19.5] relative">
                <img 
                  src="/images/mobile-dashboard.png" 
                  alt="RetailerOS Mobile App" 
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-900 rounded-full" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-14 border-t border-white/8 pt-10">
          <div className="space-y-4">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Cloud className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-base font-bold">Cloud Sync</h3>
            <p className="text-slate-500 text-xs leading-relaxed">Real-time data sync across all devices. Start a bill on tablet, finish on desktop.</p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-orange-500" />
            </div>
            <h3 className="text-base font-bold">Offline First</h3>
            <p className="text-slate-500 text-xs leading-relaxed">Internet down? No problem. Works offline and syncs when you're back online.</p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
            </div>
            <h3 className="text-base font-bold">Secure Access</h3>
            <p className="text-slate-500 text-xs leading-relaxed">Bank-grade encryption for your business data on every device.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-16 bg-white text-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[100px] -ml-48 -mb-48" />
      </div>
      
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900">
            Ready to scale your <br />
            <span className="text-brand italic">retail empire?</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium max-w-lg mx-auto">
            Join thousands of successful retailers who have transformed their business with RetailerOS.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href="/app/" className="bg-brand text-white px-7 py-3 rounded-xl font-bold text-sm hover:bg-brand-dark transition-all shadow-md shadow-brand/20 active:scale-95 inline-block">
              Get Started Now
            </a>
            <a href="#inquiry" className="bg-slate-50 border border-slate-200 text-primary px-7 py-3 rounded-xl font-bold text-sm hover:bg-slate-100 transition-all active:scale-95 inline-block">
              Request a Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <Layout className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tighter font-headline text-primary">RetailerOS</span>
            </div>
            <p className="text-slate-500 text-sm font-medium max-w-xs leading-relaxed">
              The ultimate operating system for modern Indian retailers. Built with precision for Telecom and Consumer Electronics stores. A product of{' '}
              <a href="https://khoshasystems.com/products/retaileros" className="text-brand hover:underline font-semibold" target="_blank" rel="noopener noreferrer">Kosha Systems</a>.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Product</h4>
            <ul className="space-y-2.5 text-sm text-slate-500 font-medium">
              <li><a href="#features" className="hover:text-primary transition-colors duration-300">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors duration-300">Pricing</a></li>
              <li><a href="https://khoshasystems.com/products/retaileros" className="hover:text-primary transition-colors duration-300" target="_blank" rel="noopener noreferrer">Product Page</a></li>
              <li><a href="/app/" className="hover:text-primary transition-colors duration-300">Launch App</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-2.5 text-sm text-slate-500 font-medium">
              <li><a href="https://khoshasystems.com" className="hover:text-primary transition-colors duration-300" target="_blank" rel="noopener noreferrer">Kosha Systems</a></li>
              <li><a href="#inquiry" className="hover:text-primary transition-colors duration-300">Contact</a></li>
              <li><a href="https://khoshasystems.com/products/retaileros" className="hover:text-primary transition-colors duration-300" target="_blank" rel="noopener noreferrer">About RetailerOS</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-2.5 text-sm text-slate-500 font-medium">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            © 2026 RetailerOS by <a href="https://khoshasystems.com" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">Kosha Systems</a> · Unhive Ventures LLP
          </p>
          <div className="flex gap-6">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
              <Settings className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
              <Users className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand/20 bg-white overflow-x-hidden relative">
        <Navbar onNavigate={() => {}} />

        <main className="pt-16">
          <Hero />
          <TrustSection />
          <BentoFeatures />
          <FeaturesCarousel />
          <OnboardingSection />
          <ResponsiveSection />
          <CTASection />
        <Footer />
      </main>


    </div>
  );
}

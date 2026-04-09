import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Receipt, 
  Plus, 
  History, 
  Settings, 
  TrendingUp, 
  ArrowLeft, 
  Download, 
  Trash2, 
  CheckCircle2,
  IndianRupee,
  Percent,
  FileText
} from 'lucide-react';

interface InvoiceItem {
  id: string;
  description: string;
  hsnCode: string;
  quantity: number;
  rate: number;
  gstRate: number;
}

interface Invoice {
  id: string;
  customerName: string;
  customerGstin?: string;
  date: string;
  items: InvoiceItem[];
  totalAmount: number;
  totalTax: number;
  cgst: number;
  sgst: number;
  igst: number;
}

const GSTBillingModule = ({ prefilledPhone }: { prefilledPhone?: any }) => {
  const [view, setView] = useState<'dashboard' | 'create' | 'history' | 'settings'>('dashboard');
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [taxRates, setTaxRates] = useState({ cgst: 9, sgst: 9, igst: 18 });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  
  // Form State
  const [customerName, setCustomerName] = useState('');
  const [customerGstin, setCustomerGstin] = useState('');
  const [items, setItems] = useState<InvoiceItem[]>([]);
  const [isIgst, setIsIgst] = useState(false);

  // Load data
  useEffect(() => {
    const savedInvoices = localStorage.getItem('retailer_invoices');
    if (savedInvoices) setInvoices(JSON.parse(savedInvoices));
    
    const savedTax = localStorage.getItem('retailer_tax_rates');
    if (savedTax) setTaxRates(JSON.parse(savedTax));
  }, []);

  // Handle prefilled phone
  useEffect(() => {
    if (prefilledPhone) {
      setView('create');
      const price = parseFloat(prefilledPhone.price.replace(/[₹,]/g, ''));
      setItems([{
        id: Date.now().toString(),
        description: `${prefilledPhone.brand} ${prefilledPhone.model}`,
        hsnCode: prefilledPhone.hsn || '8517',
        quantity: 1,
        rate: price,
        gstRate: 18
      }]);
    }
  }, [prefilledPhone]);

  // Save data
  useEffect(() => {
    localStorage.setItem('retailer_invoices', JSON.stringify(invoices));
  }, [invoices]);

  useEffect(() => {
    localStorage.setItem('retailer_tax_rates', JSON.stringify(taxRates));
  }, [taxRates]);

  const calculateTotals = (items: InvoiceItem[]) => {
    let subtotal = 0;
    let tax = 0;
    items.forEach(item => {
      const lineTotal = item.quantity * item.rate;
      subtotal += lineTotal;
      tax += (lineTotal * item.gstRate) / 100;
    });
    return { subtotal, tax };
  };

  const handleGenerateClick = () => {
    if (!isLoggedIn) {
      setShowSignIn(true);
    } else {
      handleAddInvoice();
    }
  };

  const handleAddInvoice = () => {
    const { subtotal, tax } = calculateTotals(items);
    const newInvoice: Invoice = {
      id: `INV-${Date.now()}`,
      customerName,
      customerGstin,
      date: new Date().toISOString(),
      items,
      totalAmount: subtotal + tax,
      totalTax: tax,
      cgst: isIgst ? 0 : tax / 2,
      sgst: isIgst ? 0 : tax / 2,
      igst: isIgst ? tax : 0,
    };
    setInvoices([newInvoice, ...invoices]);
    setView('history');
    // Reset form
    setCustomerName('');
    setCustomerGstin('');
    setItems([]);
  };

  const addItem = () => {
    setItems([...items, { 
      id: Date.now().toString(), 
      description: '', 
      hsnCode: '', 
      quantity: 1, 
      rate: 0, 
      gstRate: isIgst ? taxRates.igst : (taxRates.cgst + taxRates.sgst) 
    }]);
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: any) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const totalSales = invoices.reduce((acc, inv) => acc + inv.totalAmount, 0);
  const totalTaxCollected = invoices.reduce((acc, inv) => acc + inv.totalTax, 0);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden relative">
      {/* Sign In Modal Overlay */}
      <AnimatePresence>
        {showSignIn && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-slate-100 text-center"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-blue-500 animate-spin-slow" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Authentication Required</h3>
              <p className="text-slate-500 text-sm font-medium mb-8">Please sign in to your RetailerOS account to generate official GST invoices.</p>
              
              <div className="space-y-3">
                <button 
                  onClick={() => {
                    setIsLoggedIn(true);
                    setShowSignIn(false);
                  }}
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
                >
                  Sign In with Google
                </button>
                <button 
                  onClick={() => setShowSignIn(false)}
                  className="w-full py-4 bg-slate-100 text-slate-500 rounded-xl font-bold hover:bg-slate-200 transition-all"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="bg-slate-900 p-8 text-white flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-blue-500 p-2.5 rounded-xl">
            <Receipt className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight">GST Billing Module</h2>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">RetailerOS Intelligence</p>
          </div>
        </div>
        
        <div className="flex gap-2 items-center">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/10 mr-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-widest text-white/60">Live Schemes Active</span>
          </div>
          <button 
            onClick={() => setView('dashboard')}
            className={`p-2 rounded-lg transition-colors ${view === 'dashboard' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white'}`}
          >
            <TrendingUp className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setView('history')}
            className={`p-2 rounded-lg transition-colors ${view === 'history' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white'}`}
          >
            <History className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setView('settings')}
            className={`p-2 rounded-lg transition-colors ${view === 'settings' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white'}`}
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-8 min-h-[500px]">
        <AnimatePresence mode="wait">
          {view === 'dashboard' && (
            <motion.div 
              key="dashboard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Total Sales</p>
                  <p className="text-2xl font-black text-slate-900">₹{totalSales.toLocaleString()}</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">GST Collected</p>
                  <p className="text-2xl font-black text-blue-600">₹{totalTaxCollected.toLocaleString()}</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">Invoices</p>
                  <p className="text-2xl font-black text-emerald-600">{invoices.length}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <h3 className="text-lg font-bold text-slate-900">Quick Actions</h3>
                <button 
                  onClick={() => setView('create')}
                  className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg"
                >
                  <Plus className="w-5 h-5" />
                  New GST Invoice
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recent Activity</p>
                  {invoices.slice(0, 3).map(inv => (
                    <div key={inv.id} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:border-slate-200 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-slate-500" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{inv.customerName}</p>
                          <p className="text-[10px] text-slate-400 font-medium">{inv.id} • {new Date(inv.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <p className="text-sm font-black text-slate-900">₹{inv.totalAmount.toLocaleString()}</p>
                    </div>
                  ))}
                  {invoices.length === 0 && (
                    <div className="text-center py-12 border-2 border-dashed border-slate-100 rounded-2xl">
                      <p className="text-slate-400 font-medium">No invoices generated yet.</p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Live Intelligence</p>
                    <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded">Real-time</span>
                  </div>
                  <div className="bg-slate-900 rounded-2xl p-6 text-white space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest">Active Market Schemes</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                        <span className="text-[10px] font-bold">Samsung S24 Ultra</span>
                        <span className="text-[10px] font-black text-blue-400">₹2,500 OFF</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                        <span className="text-[10px] font-bold">Apple 15 Pro Max</span>
                        <span className="text-[10px] font-black text-blue-400">Trade-in Bonus</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                        <span className="text-[10px] font-bold">OnePlus 12</span>
                        <span className="text-[10px] font-black text-blue-400">Student Pack</span>
                      </div>
                    </div>
                    <button className="w-full py-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors">View All Intelligence</button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {view === 'create' && (
            <motion.div 
              key="create"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-8">
                <button onClick={() => setView('dashboard')} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <h3 className="text-xl font-bold text-slate-900">Generate New Invoice</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Customer Name</label>
                  <input 
                    type="text" 
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter customer name"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Customer GSTIN (Optional)</label>
                  <input 
                    type="text" 
                    value={customerGstin}
                    onChange={(e) => setCustomerGstin(e.target.value)}
                    placeholder="27AAAAA0000A1Z5"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 py-4">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className={`w-10 h-6 rounded-full transition-colors relative ${isIgst ? 'bg-blue-500' : 'bg-slate-200'}`}>
                    <input 
                      type="checkbox" 
                      className="hidden" 
                      checked={isIgst}
                      onChange={() => setIsIgst(!isIgst)}
                    />
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isIgst ? 'left-5' : 'left-1'}`} />
                  </div>
                  <span className="text-xs font-bold text-slate-600">Inter-state Transaction (IGST)</span>
                </label>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Invoice Items</p>
                  <button 
                    onClick={addItem}
                    className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline"
                  >
                    <Plus className="w-3 h-3" /> Add Item
                  </button>
                </div>

                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="grid grid-cols-12 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 items-end">
                      <div className="col-span-4 space-y-1">
                        <label className="text-[8px] font-bold text-slate-400 uppercase">Description</label>
                        <input 
                          type="text" 
                          value={item.description}
                          onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                        />
                      </div>
                      <div className="col-span-2 space-y-1">
                        <label className="text-[8px] font-bold text-slate-400 uppercase">Qty</label>
                        <input 
                          type="number" 
                          value={item.quantity}
                          onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value))}
                          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                        />
                      </div>
                      <div className="col-span-3 space-y-1">
                        <label className="text-[8px] font-bold text-slate-400 uppercase">Rate</label>
                        <input 
                          type="number" 
                          value={item.rate}
                          onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value))}
                          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                        />
                      </div>
                      <div className="col-span-2 space-y-1">
                        <label className="text-[8px] font-bold text-slate-400 uppercase">GST %</label>
                        <input 
                          type="number" 
                          value={item.gstRate}
                          onChange={(e) => updateItem(item.id, 'gstRate', parseFloat(e.target.value))}
                          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                        />
                      </div>
                      <div className="col-span-1 flex justify-end">
                        <button onClick={() => removeItem(item.id)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col items-end space-y-2">
                <div className="flex justify-between w-48 text-sm">
                  <span className="text-slate-400 font-medium">Subtotal</span>
                  <span className="text-slate-900 font-bold">₹{calculateTotals(items).subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between w-48 text-sm">
                  <span className="text-slate-400 font-medium">Total GST</span>
                  <span className="text-slate-900 font-bold">₹{calculateTotals(items).tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between w-48 text-lg pt-2 border-t border-slate-100">
                  <span className="text-slate-900 font-black">Total</span>
                  <span className="text-blue-600 font-black">₹{(calculateTotals(items).subtotal + calculateTotals(items).tax).toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-8 flex justify-end gap-4">
                <button 
                  onClick={() => setView('dashboard')}
                  className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-all"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleGenerateClick}
                  disabled={!customerName || items.length === 0}
                  className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Save & Generate Invoice
                </button>
              </div>
            </motion.div>
          )}

          {view === 'history' && (
            <motion.div 
              key="history"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <button onClick={() => setView('dashboard')} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <h3 className="text-xl font-bold text-slate-900">Invoice History</h3>
                </div>
                <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
                  <div className="px-3 py-1 bg-white rounded-md shadow-sm text-[10px] font-bold text-slate-900">ALL</div>
                  <div className="px-3 py-1 text-[10px] font-bold text-slate-400">PAID</div>
                  <div className="px-3 py-1 text-[10px] font-bold text-slate-400">PENDING</div>
                </div>
              </div>

              <div className="space-y-3">
                {invoices.map(inv => (
                  <div key={inv.id} className="group flex items-center justify-between p-5 bg-white border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                        <FileText className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-base font-bold text-slate-900">{inv.customerName}</p>
                          <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[8px] font-black rounded uppercase">Paid</span>
                        </div>
                        <p className="text-xs text-slate-400 font-medium">{inv.id} • {new Date(inv.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Amount</p>
                        <p className="text-base font-black text-slate-900">₹{inv.totalAmount.toLocaleString()}</p>
                      </div>
                      <button className="p-2.5 bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white rounded-xl transition-all">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
                {invoices.length === 0 && (
                  <div className="text-center py-24 border-2 border-dashed border-slate-100 rounded-3xl">
                    <Receipt className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                    <p className="text-slate-400 font-bold">No invoices found in the system.</p>
                    <button onClick={() => setView('create')} className="mt-4 text-blue-600 font-bold text-sm hover:underline">Create your first invoice</button>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {view === 'settings' && (
            <motion.div 
              key="settings"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <button onClick={() => setView('dashboard')} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <h3 className="text-xl font-bold text-slate-900">Tax Configuration</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Percent className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">CGST Rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number" 
                      value={taxRates.cgst}
                      onChange={(e) => setTaxRates({ ...taxRates, cgst: parseFloat(e.target.value) })}
                      className="w-full bg-transparent text-2xl font-black text-slate-900 focus:outline-none"
                    />
                    <span className="text-xl font-bold text-slate-400">%</span>
                  </div>
                </div>
                <div className="space-y-3 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Percent className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">SGST Rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number" 
                      value={taxRates.sgst}
                      onChange={(e) => setTaxRates({ ...taxRates, sgst: parseFloat(e.target.value) })}
                      className="w-full bg-transparent text-2xl font-black text-slate-900 focus:outline-none"
                    />
                    <span className="text-xl font-bold text-slate-400">%</span>
                  </div>
                </div>
                <div className="space-y-3 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Percent className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">IGST Rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number" 
                      value={taxRates.igst}
                      onChange={(e) => setTaxRates({ ...taxRates, igst: parseFloat(e.target.value) })}
                      className="w-full bg-transparent text-2xl font-black text-slate-900 focus:outline-none"
                    />
                    <span className="text-xl font-bold text-slate-400">%</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <p className="text-sm font-bold text-blue-900">Auto-Tax Calculation Enabled</p>
                  <p className="text-xs text-blue-700 font-medium mt-1">RetailerOS will automatically apply these rates to all new invoices based on the transaction type.</p>
                </div>
              </div>

              <div className="pt-8 flex justify-end">
                <button 
                  onClick={() => setView('dashboard')}
                  className="bg-slate-900 text-white px-12 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl"
                >
                  Save Configuration
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Footer Branding */}
      <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Secure GST Engine v2.4</span>
        </div>
        <IndianRupee className="w-4 h-4 text-slate-300" />
      </div>
    </div>
  );
};

export default GSTBillingModule;

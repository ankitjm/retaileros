import { state } from '../../state.js';
import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';

// Local form state
let selectedCustomerId = null;
let selectedSaleId = null;
let automationName = '';
let selectedTemplate = 'product_journey';

// Message templates
const MESSAGE_TEMPLATES = {
    product_journey: {
        name: 'Product Journey',
        description: 'Welcome message, tips, and feedback sequence',
        messages: [
            { day: 0, type: 'welcome', title: 'Welcome Message', content: 'Thank you for your purchase! Here are some tips to get started with your new {product}...' },
            { day: 1, type: 'tips', title: 'Getting Started', content: 'Have you set up {product} yet? Here is a quick guide to help you...' },
            { day: 3, type: 'tips', title: 'Pro Tips', content: 'Here are some advanced tips to get the most out of your {product}...' },
            { day: 7, type: 'upsell', title: 'Accessories', content: 'Enhance your {product} experience with our recommended accessories...' },
            { day: 14, type: 'feedback', title: 'How is it going?', content: 'It has been 2 weeks! We would love to hear your feedback...' }
        ]
    },
    installation: {
        name: 'Installation Follow-up',
        description: 'For products requiring installation',
        messages: [
            { day: 0, type: 'welcome', title: 'Order Confirmed', content: 'Your {product} order is confirmed! Installation will be scheduled soon.' },
            { day: 1, type: 'reminder', title: 'Installation Reminder', content: 'Your installation is scheduled. Our technician will arrive on time.' },
            { day: 3, type: 'tips', title: 'Maintenance Tips', content: 'Here are some tips to keep your {product} running smoothly...' },
            { day: 7, type: 'feedback', title: 'Installation Feedback', content: 'How was your installation experience? Let us know!' }
        ]
    },
    premium: {
        name: 'Premium Care',
        description: 'Extended engagement for high-value purchases',
        messages: [
            { day: 0, type: 'welcome', title: 'Welcome to Premium', content: 'Thank you for your premium purchase! You now have access to priority support.' },
            { day: 1, type: 'tips', title: 'Exclusive Features', content: 'Discover the exclusive features of your {product}...' },
            { day: 3, type: 'tips', title: 'Expert Tips', content: 'Our experts share their top tips for your {product}...' },
            { day: 7, type: 'upsell', title: 'Extended Warranty', content: 'Protect your investment with our extended warranty plans...' },
            { day: 14, type: 'tips', title: 'Advanced Features', content: 'Ready for advanced features? Here is what you can do...' },
            { day: 21, type: 'upsell', title: 'Upgrade Options', content: 'Check out the latest upgrades available for your {product}...' },
            { day: 30, type: 'feedback', title: 'Monthly Check-in', content: 'How is your experience so far? We value your feedback!' }
        ]
    }
};

// Reset form state
window.resetAutomationForm = () => {
    selectedCustomerId = null;
    selectedSaleId = null;
    automationName = '';
    selectedTemplate = 'product_journey';
    window._automationContext = null;
};

// Select customer for automation
window.selectAutomationCustomer = (customerId) => {
    selectedCustomerId = customerId;
    selectedSaleId = null;
    window.triggerRender();
};

// Select sale for automation
window.selectAutomationSale = (saleId) => {
    selectedSaleId = saleId;
    const cache = window.getCache();
    const sale = cache.sales?.find(s => s.id === saleId);
    const saleItems = cache.saleItems?.filter(i => i.sale_id === saleId) || [];
    
    if (sale) {
        const productName = saleItems[0]?.product_name || 'Product';
        automationName = `${productName} - Post-Purchase Journey`;
        
        // Check if installation required
        if (sale.installation_required) {
            selectedTemplate = 'installation';
        } else if (sale.total_amount >= 50000) {
            selectedTemplate = 'premium';
        }
    }
    window.triggerRender();
};

// Update automation name
window.updateAutomationName = (name) => {
    automationName = name;
};

// Select template
window.selectAutomationTemplate = (templateKey) => {
    selectedTemplate = templateKey;
    window.triggerRender();
};

// Create automation
window.createAutomation = async () => {
    if (!selectedCustomerId || !selectedSaleId || !automationName) {
        window.toast.warning('Please select a customer, sale, and enter a name');
        return;
    }
    
    const cache = window.getCache();
    const customer = cache.customers?.find(c => c.id === selectedCustomerId);
    const template = MESSAGE_TEMPLATES[selectedTemplate];
    
    if (!customer || !template) {
        window.toast.error('Invalid selection');
        return;
    }
    
    try {
        const automationId = `AUTO-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
        const now = new Date();
        
        // Create automation
        await db.automations.add({
            id: automationId,
            name: automationName,
            customer_id: selectedCustomerId,
            customer_name: customer.name,
            sale_id: selectedSaleId,
            status: 'active',
            created_at: now.toISOString()
        });
        
        // Get sale items for personalization
        const saleItems = cache.saleItems?.filter(i => i.sale_id === selectedSaleId) || [];
        const productName = saleItems[0]?.product_name || 'your product';
        
        // Create messages from template
        for (const msg of template.messages) {
            const messageId = `MSG-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
            const scheduledDate = new Date(now.getTime() + msg.day * 86400000);
            
            // Personalize content
            const personalizedContent = msg.content
                .replace(/\{product\}/g, productName)
                .replace(/\{name\}/g, customer.name.split(' ')[0]);
            
            await db.automations.addMessage({
                id: messageId,
                automation_id: automationId,
                message_type: msg.type,
                title: msg.title,
                content: personalizedContent,
                day_offset: msg.day,
                scheduled_date: scheduledDate.toISOString(),
                status: msg.day === 0 ? 'sent' : 'pending'
            });
            
            // Send the first message via WATI and log it
            if (msg.day === 0 && customer.phone) {
                let status = 'sent';
                try {
                    window.toast.info('Sending welcome message via WhatsApp...');
                    const watiResponse = await window.sendWhatsAppMessage(customer.phone, personalizedContent);
                    status = watiResponse.success ? 'delivered' : 'sent';
                } catch (watiErr) {
                    console.error('WATI welcome message error:', watiErr);
                    status = 'failed';
                }
                
                await db.communications.add({
                    id: `COMM-${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
                    customer_id: selectedCustomerId,
                    type: 'whatsapp',
                    direction: 'outgoing',
                    content: personalizedContent,
                    sent_at: now.toISOString(),
                    automation_id: automationId,
                    sale_id: selectedSaleId,
                    status: status
                });
            }
        }
        
        // Sync and navigate
        await syncData();
        window.toast.success('Automation created successfully!');
        window.resetAutomationForm();
        window.setAutomationMode('details', automationId);
        
    } catch (err) {
        console.error('Error creating automation:', err);
        window.toast.error('Failed to create automation: ' + err.message);
    }
};

export function renderNewAutomationForm(isMobile = false) {
    const cache = window.getCache();
    const customers = cache.customers || [];
    const sales = cache.sales || [];
    
    // Check for context from sales app
    if (window._automationContext && !selectedCustomerId) {
        const ctx = window._automationContext;
        selectedCustomerId = ctx.customerId;
        selectedSaleId = ctx.transactionId;
        if (ctx.items?.[0]?.name) {
            automationName = `${ctx.items[0].name} - Post-Purchase Journey`;
        }
        if (ctx.installationRequired) {
            selectedTemplate = 'installation';
        } else if (ctx.total >= 50000) {
            selectedTemplate = 'premium';
        }
    }
    
    // Get customer sales
    const customerSales = selectedCustomerId 
        ? sales.filter(s => s.customer_id === selectedCustomerId && s.status !== 'draft')
        : [];
    
    // Selected objects
    const selectedCustomer = customers.find(c => c.id === selectedCustomerId);
    const selectedSale = sales.find(s => s.id === selectedSaleId);
    const saleItems = selectedSaleId ? (cache.saleItems || []).filter(i => i.sale_id === selectedSaleId) : [];
    
    // Current template
    const template = MESSAGE_TEMPLATES[selectedTemplate];

    return `
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
                    
                    ${selectedCustomer ? `
                        <div class="card p-4 border-2 border-slate-900 shadow-lg flex items-center justify-between relative overflow-hidden text-left">
                            <div class="flex items-center gap-4 text-left">
                                <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center font-black text-xs text-white text-center">
                                    ${selectedCustomer.name.split(' ').map(x => x[0]).join('').toUpperCase().slice(0, 2)}
                                </div>
                                <div class="text-left">
                                    <h4 class="text-sm font-black text-slate-900 tracking-tight text-left">${selectedCustomer.name}</h4>
                                    <p class="text-[10px] font-bold text-slate-400 text-left">${selectedCustomer.phone || 'No phone'}</p>
                                </div>
                            </div>
                            <button onclick="selectedCustomerId = null; selectedSaleId = null; window.triggerRender();" class="text-slate-400 hover:text-slate-900">
                                <span class="material-icons-outlined text-sm">close</span>
                            </button>
                        </div>
                    ` : `
                        <div class="space-y-2 max-h-48 overflow-y-auto">
                            ${customers.slice(0, 10).map(c => `
                                <button type="button" onclick="window.selectAutomationCustomer('${c.id}')" class="card p-3 w-full text-left hover:border-slate-300 transition-all flex items-center gap-3">
                                    <div class="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center font-black text-[10px] text-slate-400">
                                        ${c.name.split(' ').map(x => x[0]).join('').toUpperCase().slice(0, 2)}
                                    </div>
                                    <div class="text-left">
                                        <p class="text-xs font-black text-slate-900">${c.name}</p>
                                        <p class="text-[9px] font-bold text-slate-400">${c.phone || 'No phone'}</p>
                                    </div>
                                </button>
                            `).join('')}
                        </div>
                    `}
                </div>

                <!-- Step 2: Select Sale -->
                ${selectedCustomerId ? `
                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">2. Select Transaction</p>
                        
                        ${customerSales.length === 0 ? `
                            <div class="card p-6 text-center border-dashed">
                                <p class="text-[10px] font-bold text-slate-400">No completed sales for this customer</p>
                            </div>
                        ` : `
                            <div class="space-y-2 max-h-48 overflow-y-auto">
                                ${customerSales.map(s => {
                                    const items = (cache.saleItems || []).filter(i => i.sale_id === s.id);
                                    const isSelected = selectedSaleId === s.id;
                                    return `
                                        <button type="button" onclick="window.selectAutomationSale('${s.id}')" class="card p-4 w-full text-left transition-all ${isSelected ? 'border-2 border-slate-900 shadow-lg' : 'hover:border-slate-300'}">
                                            <div class="flex justify-between items-start">
                                                <div class="text-left">
                                                    <p class="text-xs font-black text-slate-900">${items[0]?.product_name || 'Sale'}</p>
                                                    <p class="text-[9px] font-bold text-slate-400">Order #${s.id} • ₹${(s.total_amount || 0).toLocaleString()}</p>
                                                </div>
                                                <span class="text-[8px] font-black text-slate-300 uppercase">${new Date(s.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</span>
                                            </div>
                                            ${isSelected ? `<span class="material-icons-outlined text-slate-900 text-sm mt-2">check_circle</span>` : ''}
                                        </button>
                                    `;
                                }).join('')}
                            </div>
                        `}
                    </div>
                ` : ''}

                <!-- Step 3: Configure Automation -->
                ${selectedSaleId ? `
                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">3. Automation Name</p>
                        <input type="text" value="${automationName}" onchange="window.updateAutomationName(this.value)" placeholder="e.g., iPhone 15 - Welcome Sequence" class="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                    </div>

                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">4. Message Template</p>
                        <div class="grid grid-cols-1 gap-2">
                            ${Object.entries(MESSAGE_TEMPLATES).map(([key, t]) => `
                                <button type="button" onclick="window.selectAutomationTemplate('${key}')" class="card p-4 text-left transition-all ${selectedTemplate === key ? 'border-2 border-slate-900 shadow-lg' : 'hover:border-slate-300'}">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 ${selectedTemplate === key ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'} rounded-xl flex items-center justify-center">
                                            <span class="material-icons-outlined text-sm">${key === 'product_journey' ? 'route' : key === 'installation' ? 'build' : 'star'}</span>
                                        </div>
                                        <div class="flex-1">
                                            <p class="text-xs font-black text-slate-900">${t.name}</p>
                                            <p class="text-[9px] font-bold text-slate-400">${t.description}</p>
                                        </div>
                                        ${selectedTemplate === key ? `<span class="material-icons-outlined text-slate-900 text-sm">check_circle</span>` : ''}
                                    </div>
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Preview Messages -->
                    <div class="space-y-3 text-left">
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Message Sequence Preview</p>
                        <div class="relative pl-6 space-y-3 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-slate-200">
                            ${template.messages.map((msg, idx) => `
                                <div class="relative text-left">
                                    <div class="absolute -left-6 top-0 w-4 h-4 ${msg.type === 'welcome' ? 'bg-slate-900' : msg.type === 'tips' ? 'bg-slate-700' : msg.type === 'upsell' ? 'bg-slate-600' : msg.type === 'feedback' ? 'bg-slate-500' : 'bg-slate-400'} rounded-full flex items-center justify-center z-10">
                                        <span class="text-white text-[8px] font-black">${idx + 1}</span>
                                    </div>
                                    <div class="bg-slate-50 rounded-xl p-3">
                                        <div class="flex items-center justify-between mb-1">
                                            <span class="text-[8px] font-black text-slate-500 uppercase">Day ${msg.day} • ${msg.type}</span>
                                        </div>
                                        <p class="text-[10px] font-black text-slate-900">${msg.title}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>

            <!-- Footer Action -->
            ${selectedSaleId && automationName ? `
                <div class="p-4 sm:p-6 bg-white border-t border-slate-100 text-center shrink-0">
                    <button onclick="window.createAutomation()" class="w-full py-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-center">
                        <span class="material-icons-outlined text-sm">play_circle</span> Start Automation
                    </button>
                </div>
            ` : ''}
        </div>
    `;
}

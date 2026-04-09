import { state } from '../../state.js';
import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';

// Send message manually via WATI WhatsApp
window.sendAutomationMessage = async (messageId) => {
    try {
        const cache = window.getCache();
        const message = cache.automationMessages?.find(m => m.id === messageId);
        const automation = cache.automations?.find(a => a.id === message?.automation_id);
        const customer = cache.customers?.find(c => c.id === automation?.customer_id);
        
        if (!message || !automation) {
            window.toast.error('Message not found');
            return;
        }
        
        if (!customer?.phone) {
            window.toast.error('Customer phone number not found');
            return;
        }
        
        // Show sending state
        window.toast.info('Sending WhatsApp message...');
        
        // Personalize message content
        const saleItems = cache.saleItems?.filter(i => i.sale_id === automation.sale_id) || [];
        const productName = saleItems[0]?.product_name || 'your product';
        const personalizedContent = message.content
            .replace(/\{product\}/g, productName)
            .replace(/\{name\}/g, customer.name.split(' ')[0]);
        
        // Send via WATI
        let status = 'sent';
        let watiResponse = null;
        
        try {
            watiResponse = await window.sendWhatsAppMessage(customer.phone, personalizedContent);
            if (watiResponse.success) {
                status = 'delivered';
                window.toast.success('WhatsApp message sent!');
            } else {
                status = 'failed';
                window.toast.warning('Message queued but may not have been delivered');
            }
        } catch (watiErr) {
            console.error('WATI Error:', watiErr);
            status = 'failed';
            window.toast.error('WhatsApp send failed: ' + watiErr.message);
        }
        
        // Update message status
        await db.automations.updateMessageStatus(messageId, status === 'failed' ? 'pending' : 'sent', new Date().toISOString());
        
        // Log communication
        await db.communications.add({
            id: `COMM-${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
            customer_id: automation.customer_id,
            type: 'whatsapp',
            direction: 'outgoing',
            content: personalizedContent,
            sent_at: new Date().toISOString(),
            automation_id: automation.id,
            sale_id: automation.sale_id,
            status: status
        });
        
        await syncData();
        
    } catch (err) {
        console.error('Error sending message:', err);
        window.toast.error('Failed to send message: ' + err.message);
    }
};

// Pause/Resume automation
window.toggleAutomationStatus = async (automationId) => {
    try {
        const cache = window.getCache();
        const automation = cache.automations?.find(a => a.id === automationId);
        
        if (!automation) return;
        
        const newStatus = automation.status === 'active' ? 'paused' : 'active';
        await db.automations.update(automationId, { status: newStatus });
        
        await syncData();
        window.toast.success(`Automation ${newStatus === 'active' ? 'resumed' : 'paused'}`);
        
    } catch (err) {
        console.error('Error toggling automation:', err);
        window.toast.error('Failed to update automation');
    }
};

// Delete automation
window.deleteAutomation = async (automationId) => {
    window.showConfirm('Are you sure you want to delete this automation? All scheduled messages will be cancelled.', async () => {
        try {
            await db.automations.deleteMessages(automationId);
            await db.automations.delete(automationId);
            
            await syncData();
            window.toast.success('Automation deleted');
            window.setAutomationMode('dashboard');
            
        } catch (err) {
            console.error('Error deleting automation:', err);
            window.toast.error('Failed to delete automation');
        }
    });
};

// Open WhatsApp with message
window.openWhatsAppMessage = (phone, content) => {
    const url = `https://wa.me/${phone?.replace(/\D/g, '') || ''}?text=${encodeURIComponent(content)}`;
    window.open(url, '_blank');
};

export function renderAutomationSequence(automationId, isMobile = false) {
    const cache = window.getCache();
    const automation = cache.automations?.find(a => a.id === automationId);
    
    if (!automation) {
        return `
            <div class="h-full flex items-center justify-center text-slate-300 text-center">
                <div class="text-center">
                    <span class="material-icons-outlined text-4xl mb-2 opacity-50">smart_toy</span>
                    <p class="text-[10px] font-black uppercase tracking-widest">Automation not found</p>
                </div>
            </div>
        `;
    }
    
    const messages = (cache.automationMessages || [])
        .filter(m => m.automation_id === automationId)
        .sort((a, b) => a.day_offset - b.day_offset);
    
    const customer = cache.customers?.find(c => c.id === automation.customer_id);
    const sale = cache.sales?.find(s => s.id === automation.sale_id);
    const saleItems = sale ? (cache.saleItems || []).filter(i => i.sale_id === sale.id) : [];
    
    // Stats
    const sentCount = messages.filter(m => m.status === 'sent').length;
    const pendingCount = messages.filter(m => m.status === 'pending').length;
    const progress = messages.length > 0 ? Math.round((sentCount / messages.length) * 100) : 0;
    
    // Message type icons and colors
    const getTypeStyle = (type) => {
        switch (type) {
            case 'welcome': return { icon: 'waving_hand', bg: 'bg-slate-900', text: 'text-white' };
            case 'tips': return { icon: 'lightbulb', bg: 'bg-slate-700', text: 'text-white' };
            case 'upsell': return { icon: 'trending_up', bg: 'bg-slate-600', text: 'text-white' };
            case 'feedback': return { icon: 'rate_review', bg: 'bg-slate-500', text: 'text-white' };
            case 'reminder': return { icon: 'notifications', bg: 'bg-slate-400', text: 'text-white' };
            default: return { icon: 'chat', bg: 'bg-slate-300', text: 'text-slate-700' };
        }
    };

    return `
        <div class="h-full flex flex-col bg-white text-left">
            <!-- Header -->
            <header class="p-4 sm:p-6 border-b border-slate-100 shrink-0">
                <div class="flex items-center gap-4 mb-4">
                    <button onclick="window.setAutomationMode('dashboard')" class="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 shadow-sm">
                        <span class="material-icons-outlined">chevron_left</span>
                    </button>
                    <div class="flex-1 min-w-0">
                        <h2 class="text-lg font-black text-slate-900 tracking-tighter truncate">${automation.name}</h2>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">${automation.customer_name}</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <button onclick="window.toggleAutomationStatus('${automation.id}')" class="w-10 h-10 flex items-center justify-center ${automation.status === 'active' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400'} rounded-xl hover:opacity-80 transition-all" title="${automation.status === 'active' ? 'Pause' : 'Resume'}">
                            <span class="material-icons-outlined text-sm">${automation.status === 'active' ? 'pause' : 'play_arrow'}</span>
                        </button>
                        <button onclick="window.deleteAutomation('${automation.id}')" class="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 text-slate-400 rounded-xl hover:text-slate-900 hover:border-slate-300 transition-all" title="Delete">
                            <span class="material-icons-outlined text-sm">delete</span>
                        </button>
                    </div>
                </div>
                
                <!-- Progress Bar -->
                <div class="flex items-center gap-3">
                    <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div class="h-full bg-slate-900 rounded-full transition-all" style="width: ${progress}%"></div>
                    </div>
                    <span class="text-[10px] font-black text-slate-500">${sentCount}/${messages.length}</span>
                </div>
            </header>

            <!-- Content -->
            <div class="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6">
                <!-- Stats -->
                <div class="grid grid-cols-3 gap-3">
                    <div class="card p-3 text-center">
                        <p class="text-xl font-black text-slate-900">${sentCount}</p>
                        <p class="text-[8px] font-black text-slate-400 uppercase">Sent</p>
                    </div>
                    <div class="card p-3 text-center">
                        <p class="text-xl font-black text-slate-900">${pendingCount}</p>
                        <p class="text-[8px] font-black text-slate-400 uppercase">Scheduled</p>
                    </div>
                    <div class="card p-3 text-center">
                        <span class="text-xl font-black ${automation.status === 'active' ? 'text-slate-900' : 'text-slate-400'}">${automation.status === 'active' ? '●' : '○'}</span>
                        <p class="text-[8px] font-black text-slate-400 uppercase">${automation.status}</p>
                    </div>
                </div>

                <!-- Customer Info -->
                ${customer ? `
                    <div class="card p-4 flex items-center gap-4">
                        <div class="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center font-black text-sm text-slate-400">
                            ${customer.name.split(' ').map(x => x[0]).join('').toUpperCase().slice(0, 2)}
                        </div>
                        <div class="flex-1">
                            <p class="text-sm font-black text-slate-900">${customer.name}</p>
                            <p class="text-[10px] font-bold text-slate-400">${customer.phone || 'No phone'}</p>
                        </div>
                        ${customer.phone ? `
                            <a href="https://wa.me/${customer.phone.replace(/\D/g, '')}" target="_blank" class="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-slate-800 transition-all">
                                <span class="material-icons-outlined text-sm">chat</span>
                            </a>
                        ` : ''}
                    </div>
                ` : ''}

                <!-- Message Sequence -->
                <div class="space-y-3">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Message Sequence</h3>
                    
                    <div class="relative pl-8 space-y-4 before:absolute before:left-3 before:top-4 before:bottom-4 before:w-px before:bg-slate-200">
                        ${messages.map((msg, idx) => {
                            const style = getTypeStyle(msg.message_type);
                            const isSent = msg.status === 'sent';
                            const isToday = new Date(msg.scheduled_date).toDateString() === new Date().toDateString();
                            const isPast = new Date(msg.scheduled_date) < new Date() && !isSent;
                            
                            return `
                                <div class="relative">
                                    <div class="absolute -left-8 top-4 w-6 h-6 ${isSent ? 'bg-slate-900' : 'bg-white border-2 border-slate-200'} rounded-full flex items-center justify-center z-10">
                                        ${isSent ? `<span class="material-icons-outlined text-white text-xs">check</span>` : `<span class="text-[9px] font-black text-slate-400">${idx + 1}</span>`}
                                    </div>
                                    
                                    <div class="card p-4 ${isSent ? 'bg-slate-50 border-slate-100' : isToday ? 'border-slate-900 shadow-lg' : 'border-slate-100'}">
                                        <div class="flex items-start gap-3">
                                            <div class="w-10 h-10 ${style.bg} rounded-xl flex items-center justify-center shrink-0">
                                                <span class="material-icons-outlined ${style.text} text-sm">${style.icon}</span>
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <div class="flex items-center justify-between mb-1">
                                                    <span class="text-[8px] font-black ${isSent ? 'text-slate-400' : isToday ? 'text-slate-900' : 'text-slate-400'} uppercase">
                                                        Day ${msg.day_offset} • ${msg.message_type}
                                                    </span>
                                                    <span class="text-[8px] font-bold ${isSent ? 'text-slate-400' : isToday ? 'text-slate-900' : 'text-slate-300'}">
                                                        ${isSent ? 'Sent' : isToday ? 'Today' : new Date(msg.scheduled_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
                                                    </span>
                                                </div>
                                                <h4 class="text-xs font-black text-slate-900 mb-1">${msg.title}</h4>
                                                <p class="text-[10px] font-bold text-slate-500 line-clamp-2">${msg.content}</p>
                                                
                                                ${!isSent && customer?.phone ? `
                                                    <div class="flex items-center gap-2 mt-3">
                                                        <button onclick="window.sendAutomationMessage('${msg.id}')" class="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[9px] font-black uppercase flex items-center gap-1 hover:bg-slate-800 transition-all">
                                                            <span class="material-icons-outlined text-xs">send</span> Send Now
                                                        </button>
                                                        <button onclick="window.openWhatsAppMessage('${customer.phone}', '${msg.content.replace(/'/g, "\\'")}')" class="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-[9px] font-black uppercase flex items-center gap-1 hover:bg-slate-200 transition-all">
                                                            <span class="material-icons-outlined text-xs">chat</span> WhatsApp
                                                        </button>
                                                    </div>
                                                ` : ''}
                                                
                                                ${isSent && msg.sent_at ? `
                                                    <p class="text-[8px] font-bold text-slate-300 mt-2 flex items-center gap-1">
                                                        <span class="material-icons-outlined text-xs">done_all</span>
                                                        Sent ${new Date(msg.sent_at).toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                                                    </p>
                                                ` : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

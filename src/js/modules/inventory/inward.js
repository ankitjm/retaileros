import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';

export async function confirmInward() {
    const model = document.getElementById('inward-model').value;
    const imei = document.getElementById('inward-imei').value;
    const sn = document.getElementById('inward-sn').value;

    if (!model || !imei) {
        alert("Model name and IMEI are required.");
        return;
    }

    const btn = document.getElementById('confirm-inward-btn');
    btn.disabled = true;
    btn.innerText = 'Syncing...';

    try {
        // 1. Add/Update Product
        // For simplicity, we'll check if product exists by name or create new
        const existing = await db.query("SELECT * FROM products WHERE name = ?", [model]);
        let stock = 1;
        if (existing.length > 0) {
            stock = parseInt(existing[0].stock) + 1;
            await db.query("UPDATE products SET stock = ? WHERE id = ?", [stock, existing[0].id]);
        } else {
            const id = 'PRD-' + Math.random().toString(36).substr(2, 6).toUpperCase();
            await db.query(`
                INSERT INTO products (id, name, category, brand, price, stock, imei)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `, [id, model, 'Smartphone', model.split(' ')[0], 50000, 1, imei]);
        }

        // 2. Add Inventory Log
        await db.query(`
            INSERT INTO inventory_logs (id, product_id, type, quantity, reason, date)
            VALUES (?, ?, ?, ?, ?, ?)
        `, [
            'LOG-' + Math.random().toString(36).substr(2, 6).toUpperCase(),
            model,
            'INWARD',
            1,
            'New Shipment Arrival',
            new Date().toISOString()
        ]);

        await syncData();
        window.setInventoryMode('details');
    } catch (err) {
        alert("Inward failed: " + err.message);
        btn.disabled = false;
        btn.innerText = 'Confirm Inward';
    }
}

window.confirmInward = confirmInward;

export function renderInwardShipment() {
    return `
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
    `;
}

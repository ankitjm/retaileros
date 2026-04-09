import { state } from '../../state.js';
import { db } from '../../utils/db.js';
import { syncData } from '../../utils/sync.js';
import { renderSalesHeader } from './header.js';

// AI Processing state
let isProcessingImage = false;
let processingStatus = '';

// Local transaction state
let activeCart = [];
let selectedCustomerId = null;
let selectedCustomerName = "Select Customer";

// GST billing state
let gstRequired = false;
let companyName = '';
let gstNumber = '';

// Payment modal state
let showPaymentModal = false;
let selectedPaymentMode = '';
let paymentReference = '';

// Split payment state: array of { mode, amount, reference }
let splitPayments = [];
let splitAmountInput = '';

// Draft editing state
let editingDraftId = null;

// Search state (preserved across renders)
let productSearchQuery = '';

// Mobile UX state
let activeItemSheet = null;
let batchScanMode = false;
let showCustomerSheet = false;

// Helper to generate IDs
const generateId = (prefix) => `${prefix}-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;

// Categories that require installation by default
const INSTALLATION_CATEGORIES = [
    'appliances', 'air conditioners', 'ac', 'washing machines', 
    'refrigerators', 'tvs', 'television', 'home theater', 
    'dishwasher', 'microwave', 'geyser', 'water heater'
];

// Check if product requires installation (by flag or category)
function productRequiresInstallation(product) {
    if (product.installation_required === 1) return true;
    const category = (product.category || '').toLowerCase();
    return INSTALLATION_CATEGORIES.some(cat => category.includes(cat));
}

export async function addProductToCart(id) {
    const products = window.getCache().products;
    const schemes = window.getCache().schemes || [];
    const item = products.find(p => p.id === id);
    if (item) {
        const needsInstallation = productRequiresInstallation(item);
        
        // Find applicable schemes for this product
        const applicableSchemes = schemes.filter(s => {
            const brandMatch = !s.brand || s.brand === item.brand;
            const categoryMatch = !s.category || s.category === item.category;
            const priceMatch = (!s.min_price || item.mop >= s.min_price) && (!s.max_price || item.mop <= s.max_price);
            const dateMatch = new Date(s.start_date) <= new Date() && new Date(s.end_date) >= new Date();
            return brandMatch && categoryMatch && priceMatch && dateMatch && s.status === 'active';
        });
        
        // Add with device details fields, installation, discount, and dynamic extra fields
        activeCart.push({ 
            ...item, 
            qty: 1,
            imei: '',
            serial_number: '',
            mac_id: '',
            manufacturing_date: '',
            showDetails: false,
            // Per-item installation
            installation_required: needsInstallation,
            installation_date: '',
            // Discount fields
            discount_type: null, // 'store' | 'scheme' | null
            discount_value: 0, // percentage or fixed amount
            discount_amount: 0, // calculated discount amount
            scheme_id: null,
            scheme_name: null,
            final_price: item.mop, // price after discount
            applicableSchemes: applicableSchemes,
            showDiscount: false,
            // Dynamic extra fields from AI (e.g., imei2, model, color, storage, etc.)
            extraFields: []
        });
        // Clear search and re-render
        productSearchQuery = '';
        const searchInput = document.getElementById('sales-item-search');
        if (searchInput) searchInput.value = '';
        const resultsContainer = document.getElementById('sales-search-results');
        if (resultsContainer) resultsContainer.innerHTML = '';
        const clearBtn = document.getElementById('sales-search-clear');
        if (clearBtn) clearBtn.style.display = 'none';
        window.triggerRender();
    }
}

// Toggle discount panel for cart item
window.toggleCartItemDiscount = (idx) => {
    if (activeCart[idx]) {
        activeCart[idx].showDiscount = !activeCart[idx].showDiscount;
        const scrollEl = document.querySelector('.scrolling-content');
        const scrollTop = scrollEl ? scrollEl.scrollTop : 0;
        window.triggerRender();
        requestAnimationFrame(() => {
            if (scrollEl) scrollEl.scrollTop = scrollTop;
            const card = document.querySelector(`[data-cart-item="${idx}"]`);
            if (card && activeCart[idx].showDiscount) {
                setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
            }
        });
    }
};

// Apply store discount (percentage)
window.applyStoreDiscount = (idx, percentage) => {
    if (activeCart[idx]) {
        const item = activeCart[idx];
        const discountPercent = parseFloat(percentage) || 0;
        if (discountPercent > 0 && discountPercent <= 100) {
            item.discount_type = 'store';
            item.discount_value = discountPercent;
            item.discount_amount = Math.round(item.mop * discountPercent / 100);
            item.scheme_id = null;
            item.scheme_name = null;
            item.final_price = item.mop - item.discount_amount;
            item.showDiscount = false;
        } else {
            // Clear discount
            item.discount_type = null;
            item.discount_value = 0;
            item.discount_amount = 0;
            item.scheme_id = null;
            item.scheme_name = null;
            item.final_price = item.mop;
        }
        window.triggerRender();
    }
};

// Apply scheme discount
window.applySchemeDiscount = (idx, schemeId) => {
    if (activeCart[idx]) {
        const item = activeCart[idx];
        const schemes = window.getCache().schemes || [];
        const scheme = schemes.find(s => s.id === schemeId);
        
        if (scheme) {
            item.discount_type = 'scheme';
            item.scheme_id = scheme.id;
            item.scheme_name = scheme.name;
            
            if (scheme.discount_type === 'percentage') {
                item.discount_value = scheme.discount_value;
                item.discount_amount = Math.round(item.mop * scheme.discount_value / 100);
            } else {
                // Fixed discount
                item.discount_value = scheme.discount_value;
                item.discount_amount = scheme.discount_value;
            }
            item.final_price = item.mop - item.discount_amount;
            item.showDiscount = false;
        } else {
            // Clear discount
            item.discount_type = null;
            item.discount_value = 0;
            item.discount_amount = 0;
            item.scheme_id = null;
            item.scheme_name = null;
            item.final_price = item.mop;
        }
        window.triggerRender();
    }
};

// Clear discount from item
window.clearItemDiscount = (idx) => {
    if (activeCart[idx]) {
        const item = activeCart[idx];
        item.discount_type = null;
        item.discount_value = 0;
        item.discount_amount = 0;
        item.scheme_id = null;
        item.scheme_name = null;
        item.final_price = item.mop;
        window.triggerRender();
    }
};

export function selectSaleCustomer(id, name) {
    selectedCustomerId = id;
    selectedCustomerName = name;
    // Close the dropdown after selection
    const dropdown = document.getElementById('customer-dropdown-menu');
    if (dropdown) dropdown.classList.add('hidden');
    
    // Check if customer has existing company for GST
    const companies = window.getCache().companies || [];
    const existingCompany = companies.find(c => c.customer_id === id);
    if (existingCompany) {
        companyName = existingCompany.name;
        gstNumber = existingCompany.gst_number;
    }
    
    window.triggerRender();
}

// Update device details for cart item
window.updateCartItemDetail = (idx, field, value) => {
    if (activeCart[idx]) {
        activeCart[idx][field] = value;
    }
};

// Toggle device details expansion
window.toggleCartItemDetails = (idx) => {
    if (activeCart[idx]) {
        activeCart[idx].showDetails = !activeCart[idx].showDetails;
        const scrollEl = document.querySelector('.scrolling-content');
        const scrollTop = scrollEl ? scrollEl.scrollTop : 0;
        window.triggerRender();
        requestAnimationFrame(() => {
            if (scrollEl) scrollEl.scrollTop = scrollTop;
            const card = document.querySelector(`[data-cart-item="${idx}"]`);
            if (card && activeCart[idx].showDetails) {
                setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
            }
        });
    }
};

// Toggle installation for a cart item
window.toggleItemInstallation = (idx) => {
    if (activeCart[idx]) {
        activeCart[idx].installation_required = !activeCart[idx].installation_required;
        if (!activeCart[idx].installation_required) {
            activeCart[idx].installation_date = '';
        }
        window.triggerRender();
    }
};

// Update installation date for a cart item
window.updateItemInstallationDate = (idx, value) => {
    if (activeCart[idx]) {
        activeCart[idx].installation_date = value;
    }
};

// AI Image Capture - Send image directly to Vision API
// Temporary: Fallback API key for testing (remove in production)
const TEMP_API_KEY = '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';

function getOpenAIKey() {
    return localStorage.getItem('openai_api_key') || TEMP_API_KEY;
}

window.captureDeviceImage = async (idx) => {
    // Get API key (from localStorage or fallback)
    const apiKey = getOpenAIKey();
    if (!apiKey) {
        window.toast.warning('Please configure OpenAI API key in Settings → AI Config');
        return;
    }
    
    // Create file input for camera capture
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment'; // Use back camera on mobile
    
    input.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        isProcessingImage = true;
        processingStatus = 'Reading image...';
        window.triggerRender(false);
        
        try {
            // Convert image to base64
            const base64Image = await fileToBase64(file);
            
            processingStatus = 'AI analyzing...';
            updateProcessingStatus(idx, processingStatus);
            
            // Get product info for context
            const cartItem = activeCart[idx];
            const productInfo = {
                name: cartItem.name,
                brand: cartItem.brand,
                category: cartItem.category
            };
            
            // Send to OpenAI Vision API
            const aiResult = await analyzeImageWithAI(base64Image, productInfo, apiKey);
            
            // Apply results to cart item
            if (activeCart[idx] && aiResult) {
                if (aiResult.imei) activeCart[idx].imei = aiResult.imei;
                if (aiResult.serial_number) activeCart[idx].serial_number = aiResult.serial_number;
                if (aiResult.mac_id) activeCart[idx].mac_id = aiResult.mac_id;
                if (aiResult.manufacturing_date) activeCart[idx].manufacturing_date = aiResult.manufacturing_date;
                
                // Add dynamic extra fields
                if (aiResult.extraFields && aiResult.extraFields.length > 0) {
                    activeCart[idx].extraFields = [
                        ...(activeCart[idx].extraFields || []),
                        ...aiResult.extraFields
                    ];
                }
            }
            
            isProcessingImage = false;
            window.triggerRender(false);
            
            // Show what was found
            const foundItems = [];
            if (aiResult.imei) foundItems.push('IMEI');
            if (aiResult.serial_number) foundItems.push('Serial');
            if (aiResult.mac_id) foundItems.push('MAC ID');
            if (aiResult.manufacturing_date) foundItems.push('Mfg Date');
            if (aiResult.extraFields) {
                aiResult.extraFields.forEach(f => foundItems.push(f.label));
            }
            
            if (foundItems.length > 0) {
                window.toast.success(`Found: ${foundItems.join(', ')}`);
            } else {
                window.toast.warning('No device details found. Try a clearer image.');
            }
        } catch (err) {
            console.error('AI Vision Error:', err);
            isProcessingImage = false;
            window.triggerRender(false);
            window.toast.error(err.message || 'Error analyzing image');
        }
    };
    
    input.click();
};

// Convert file to base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            // Get base64 without the data:image/... prefix
            const base64 = reader.result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Update processing status in UI
function updateProcessingStatus(idx, status) {
    const el = document.getElementById(`ocr-progress-${idx}`);
    if (el) el.textContent = status;
}

// Analyze image with OpenAI Vision API
async function analyzeImageWithAI(base64Image, productInfo, apiKey) {
    const prompt = `You are analyzing a product label/box image to extract device information.

Product: ${productInfo.name}
Brand: ${productInfo.brand || 'Unknown'}
Category: ${productInfo.category || 'Electronics'}

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
}`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'user',
                    content: [
                        { type: 'text', text: prompt },
                        {
                            type: 'image_url',
                            image_url: {
                                url: `data:image/jpeg;base64,${base64Image}`,
                                detail: 'high'
                            }
                        }
                    ]
                }
            ],
            max_tokens: 1000,
            temperature: 0.1
        })
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `API Error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';
    
    console.log('AI Vision Response:', content);
    
    // Parse JSON from response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
        return { extraFields: [] };
    }
    
    try {
        const result = JSON.parse(jsonMatch[0]);
        return normalizeAIResult(result);
    } catch (e) {
        console.error('Failed to parse AI response:', e);
        return { extraFields: [] };
    }
}

// Normalize AI result to expected format
function normalizeAIResult(result) {
    const normalized = {
        imei: result.imei || null,
        serial_number: result.serial_number || result.serialNumber || null,
        mac_id: result.mac_id || result.macId || result.mac || null,
        manufacturing_date: result.manufacturing_date || result.manufacturingDate || result.mfg_date || null,
        extraFields: []
    };
    
    // Add IMEI2 as extra field if present
    if (result.imei2) {
        normalized.extraFields.push({
            key: 'imei2',
            label: 'IMEI 2',
            value: result.imei2,
            type: 'text'
        });
    }
    
    // Add model as extra field
    if (result.model) {
        normalized.extraFields.push({
            key: 'model',
            label: 'Model',
            value: result.model,
            type: 'text'
        });
    }
    
    // Add color as extra field
    if (result.color) {
        normalized.extraFields.push({
            key: 'color',
            label: 'Color',
            value: result.color,
            type: 'text'
        });
    }
    
    // Add storage as extra field
    if (result.storage) {
        normalized.extraFields.push({
            key: 'storage',
            label: 'Storage',
            value: result.storage,
            type: 'text'
        });
    }
    
    // Add any extra fields from AI
    if (result.extraFields && Array.isArray(result.extraFields)) {
        result.extraFields.forEach(field => {
            if (field.value && field.label) {
                // Avoid duplicates
                const exists = normalized.extraFields.some(f => f.key === field.key);
                if (!exists) {
                    normalized.extraFields.push({
                        key: field.key || field.label.toLowerCase().replace(/\s+/g, '_'),
                        label: field.label,
                        value: field.value,
                        type: field.type || 'text'
                    });
                }
            }
        });
    }
    
    return normalized;
}

// Analyze product image for quick scan (identify product + extract IMEI)
async function analyzeProductImage(base64Image, apiKey) {
    const prompt = `You are analyzing a product box/label image at an electronics retail store.
Extract ALL information you can find:
1. Product name / model (e.g., "iPhone 15 Pro Max 256GB", "Samsung Galaxy S24 Ultra")
2. IMEI number (15 digits)
3. Serial number
4. Any other identifiers

Return ONLY valid JSON:
{
  "product_match": "Product name as written on box",
  "model": "Model number",
  "brand": "Brand name",
  "imei": "IMEI if found",
  "serial_number": "Serial if found",
  "extraFields": [{"key": "field", "label": "Label", "value": "value"}]
}
If a field is not found, omit it.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [{
                role: 'user',
                content: [
                    { type: 'text', text: prompt },
                    { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${base64Image}`, detail: 'high' } }
                ]
            }],
            max_tokens: 500,
            temperature: 0.1
        })
    });

    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error?.message || `API Error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || '';
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return {};
    try { return JSON.parse(jsonMatch[0]); } catch (e) { return {}; }
}

// Update extra field value
window.updateCartItemExtraField = (cartIdx, fieldIdx, value) => {
    if (activeCart[cartIdx] && activeCart[cartIdx].extraFields[fieldIdx]) {
        activeCart[cartIdx].extraFields[fieldIdx].value = value;
    }
};

// Add custom extra field
window.addCustomExtraField = (cartIdx) => {
    if (activeCart[cartIdx]) {
        window.showPrompt('Enter field name (e.g., "IMEI 2", "Warranty Code"):', '', (fieldName) => {
            const key = fieldName.toLowerCase().replace(/\s+/g, '_');
            activeCart[cartIdx].extraFields = activeCart[cartIdx].extraFields || [];
            activeCart[cartIdx].extraFields.push({
                key,
                label: fieldName,
                value: '',
                type: 'text',
                custom: true
            });
            window.triggerRender();
        });
    }
};

// Remove extra field
window.removeExtraField = (cartIdx, fieldIdx) => {
    if (activeCart[cartIdx] && activeCart[cartIdx].extraFields) {
        activeCart[cartIdx].extraFields.splice(fieldIdx, 1);
        window.triggerRender();
    }
};

// GST toggle
window.toggleGstRequired = () => {
    gstRequired = !gstRequired;
    window.triggerRender();
};

window.updateGstField = (field, value) => {
    if (field === 'companyName') companyName = value;
    if (field === 'gstNumber') gstNumber = value.toUpperCase();
};

// Payment modal functions
window.openPaymentModal = () => {
    if (activeCart.length === 0 || !selectedCustomerId) {
        window.toast.warning("Please select a customer and add items to cart");
        return;
    }
    
    // Check if any items requiring installation don't have a date set
    const missingInstallDates = activeCart.filter(item => 
        item.installation_required && !item.installation_date
    );
    
    if (missingInstallDates.length > 0) {
        window.toast.warning(`Set installation date for: ${missingInstallDates.map(i => i.name).join(', ')}`);
        return;
    }
    
    showPaymentModal = true;
    window.triggerRender();
};

window.closePaymentModal = () => {
    showPaymentModal = false;
    selectedPaymentMode = '';
    paymentReference = '';
    splitPayments = [];
    splitAmountInput = '';
    window.triggerRender();
};

window.selectPaymentMode = (mode) => {
    selectedPaymentMode = mode;
    paymentReference = '';
    window.triggerRender();
};

window.updatePaymentReference = (value) => {
    paymentReference = value;
};

window.updateSplitAmount = (value) => {
    splitAmountInput = value;
};

// Add a split payment entry
window.addSplitPayment = () => {
    if (!selectedPaymentMode) {
        window.toast.warning("Select a payment mode first");
        return;
    }
    const total = activeCart.reduce((sum, item) => sum + ((item.final_price || item.mop || 0) * (item.qty || 1)), 0);
    const paidSoFar = splitPayments.reduce((sum, p) => sum + p.amount, 0);
    const remaining = total - paidSoFar;
    const amount = parseFloat(splitAmountInput) || remaining;
    if (amount <= 0) {
        window.toast.warning("Enter a valid amount");
        return;
    }
    if (amount > remaining + 0.01) {
        window.toast.warning(`Amount exceeds remaining balance of ₹${remaining.toLocaleString()}`);
        return;
    }
    if ((selectedPaymentMode === 'card' || selectedPaymentMode === 'upi') && !paymentReference) {
        window.toast.warning("Enter the transaction reference");
        return;
    }
    splitPayments.push({
        mode: selectedPaymentMode,
        amount: Math.min(amount, remaining),
        reference: paymentReference || ''
    });
    selectedPaymentMode = '';
    paymentReference = '';
    splitAmountInput = '';
    window.triggerRender(false);
};

// Remove a split payment entry
window.removeSplitPayment = (idx) => {
    splitPayments.splice(idx, 1);
    window.triggerRender(false);
};

window.confirmPayment = async () => {
    const total = activeCart.reduce((sum, item) => sum + ((item.final_price || item.mop || 0) * (item.qty || 1)), 0);

    if (splitPayments.length > 0) {
        // Split payment mode
        const paidTotal = splitPayments.reduce((sum, p) => sum + p.amount, 0);
        if (Math.abs(paidTotal - total) > 1) {
            window.toast.warning(`Payment total ₹${paidTotal.toLocaleString()} doesn't match invoice ₹${total.toLocaleString()}`);
            return;
        }
        // Combine into a payment string
        selectedPaymentMode = splitPayments.map(p => p.mode).join('+');
        paymentReference = splitPayments.map(p => `${p.mode}:₹${p.amount}${p.reference ? '('+p.reference+')' : ''}`).join(' | ');
    } else {
        // Single payment mode
        if (!selectedPaymentMode) {
            window.toast.warning("Please select a payment mode");
            return;
        }
        if ((selectedPaymentMode === 'card' || selectedPaymentMode === 'upi') && !paymentReference) {
            window.toast.warning("Please enter the transaction reference");
            return;
        }
    }

    showPaymentModal = false;
    await completeTransaction();
};

export async function completeTransaction() {
    const btn = document.getElementById('complete-txn-btn');
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = 'Processing...';
    }

    try {
        const txnId = editingDraftId || generateId('ORD');
        // Use final_price which accounts for discounts × qty
        const totalAmount = activeCart.reduce((sum, item) => sum + ((item.final_price || item.mop) * (item.qty || 1)), 0);
        let companyId = null;

        // Save company if GST is required
        if (gstRequired && companyName && gstNumber) {
            companyId = generateId('COMP');
            await db.companies.add({
                id: companyId,
                name: companyName,
                gst_number: gstNumber,
                customer_id: selectedCustomerId
            });
        }

        // Check if any items require installation
        const hasInstallation = activeCart.some(item => item.installation_required);
        // Get earliest installation date for the sale record
        const installDates = activeCart
            .filter(item => item.installation_required && item.installation_date)
            .map(item => item.installation_date)
            .sort();
        const earliestInstallDate = installDates[0] || null;

        // Delete existing items if editing draft
        if (editingDraftId) {
            await db.sales.deleteItems(editingDraftId);
            await db.sales.update({
                id: txnId,
                customer_id: selectedCustomerId,
                customer_name: selectedCustomerName,
                total_amount: totalAmount,
                status: 'completed',
                payment_mode: selectedPaymentMode,
                payment_reference: paymentReference,
                gst_required: gstRequired ? 1 : 0,
                company_id: companyId,
                installation_required: hasInstallation ? 1 : 0,
                installation_date: earliestInstallDate
            });
        } else {
            // Create new Sale Record
            await db.sales.add({
                id: txnId,
                customer_id: selectedCustomerId,
                customer_name: selectedCustomerName,
                date: new Date().toISOString(),
                total_amount: totalAmount,
                status: 'completed',
                payment_mode: selectedPaymentMode,
                payment_reference: paymentReference,
                gst_required: gstRequired ? 1 : 0,
                company_id: companyId,
                installation_required: hasInstallation ? 1 : 0,
                installation_date: earliestInstallDate
            });
        }

        // Create Sale Items with device details, discounts, per-item installation date, and extra fields
        for (const item of activeCart) {
            await db.sales.addItem({
                id: generateId('ITEM'),
                sale_id: txnId,
                product_id: item.id,
                product_name: item.name,
                category: item.category,
                quantity: item.qty || 1,
                price: item.mop,
                discount_type: item.discount_type || null,
                discount_value: item.discount_value || null,
                discount_amount: item.discount_amount || null,
                scheme_id: item.scheme_id || null,
                final_price: item.final_price || item.mop,
                imei: item.imei || null,
                serial_number: item.serial_number || null,
                mac_id: item.mac_id || null,
                manufacturing_date: item.manufacturing_date || null,
                installation_date: item.installation_required ? item.installation_date : null,
                extra_fields: item.extraFields && item.extraFields.length > 0 ? JSON.stringify(item.extraFields) : null
            });
        }

        resetSaleState();
        await syncData();
        window.setTab('history');
        window.setSalesHistoryId(txnId);
    } catch (err) {
        console.error(err);
        window.toast.error("Error completing transaction: " + err.message);
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = 'Complete Transaction';
        }
    }
}

// Save as draft
export async function saveDraft() {
    if (activeCart.length === 0) {
        window.toast.warning("Please add items to cart before saving draft");
        return;
    }

    try {
        const txnId = editingDraftId || generateId('DRF');
        // Use final_price which accounts for discounts × qty
        const totalAmount = activeCart.reduce((sum, item) => sum + ((item.final_price || item.mop) * (item.qty || 1)), 0);
        let companyId = null;

        // Save company if GST is required
        if (gstRequired && companyName && gstNumber) {
            companyId = generateId('COMP');
            await db.companies.add({
                id: companyId,
                name: companyName,
                gst_number: gstNumber,
                customer_id: selectedCustomerId
            });
        }

        const hasInstallation = activeCart.some(item => item.installation_required);
        const installDates = activeCart
            .filter(item => item.installation_required && item.installation_date)
            .map(item => item.installation_date)
            .sort();
        const earliestInstallDate = installDates[0] || null;

        if (editingDraftId) {
            await db.sales.deleteItems(editingDraftId);
            await db.sales.update({
                id: txnId,
                customer_id: selectedCustomerId,
                customer_name: selectedCustomerName || 'No Customer',
                total_amount: totalAmount,
                status: 'draft',
                payment_mode: null,
                payment_reference: null,
                gst_required: gstRequired ? 1 : 0,
                company_id: companyId,
                installation_required: hasInstallation ? 1 : 0,
                installation_date: earliestInstallDate
            });
        } else {
            await db.sales.add({
                id: txnId,
                customer_id: selectedCustomerId,
                customer_name: selectedCustomerName || 'No Customer',
                date: new Date().toISOString(),
                total_amount: totalAmount,
                status: 'draft',
                payment_mode: null,
                payment_reference: null,
                gst_required: gstRequired ? 1 : 0,
                company_id: companyId,
                installation_required: hasInstallation ? 1 : 0,
                installation_date: earliestInstallDate
            });
        }

        // Save cart items with discounts, per-item installation dates and extra fields
        for (const item of activeCart) {
            await db.sales.addItem({
                id: generateId('ITEM'),
                sale_id: txnId,
                product_id: item.id,
                product_name: item.name,
                category: item.category,
                quantity: item.qty || 1,
                price: item.mop,
                discount_type: item.discount_type || null,
                discount_value: item.discount_value || null,
                discount_amount: item.discount_amount || null,
                scheme_id: item.scheme_id || null,
                final_price: item.final_price || item.mop,
                imei: item.imei || null,
                serial_number: item.serial_number || null,
                mac_id: item.mac_id || null,
                manufacturing_date: item.manufacturing_date || null,
                installation_date: item.installation_required ? item.installation_date : null,
                extra_fields: item.extraFields && item.extraFields.length > 0 ? JSON.stringify(item.extraFields) : null
            });
        }

        resetSaleState();
        await syncData();
        window.setTab('history');
        window.toast.success("Draft saved successfully!");
    } catch (err) {
        console.error(err);
        window.toast.error("Error saving draft: " + err.message);
    }
}

// Load draft for editing
export async function loadDraft(saleId) {
    const cache = window.getCache();
    const sale = cache.sales.find(s => s.id === saleId);
    if (!sale) return;

    editingDraftId = saleId;
    selectedCustomerId = sale.customer_id;
    selectedCustomerName = sale.customer_name;
    gstRequired = sale.gst_required === 1;

    // Load company info if GST required
    if (sale.company_id) {
        const company = cache.companies.find(c => c.id === sale.company_id);
        if (company) {
            companyName = company.name;
            gstNumber = company.gst_number;
        }
    }

    // Load cart items with per-item installation and extra fields
    const items = cache.saleItems.filter(i => i.sale_id === saleId);
    const products = cache.products;
    
    activeCart = items.map(item => {
        const product = products.find(p => p.id === item.product_id) || {};
        const needsInstallation = item.installation_date || productRequiresInstallation(product);
        
        // Parse extra fields from JSON if stored
        let extraFields = [];
        if (item.extra_fields) {
            try {
                extraFields = JSON.parse(item.extra_fields);
            } catch (e) {
                console.warn('Failed to parse extra fields:', e);
            }
        }
        
        return {
            ...product,
            id: item.product_id,
            name: item.product_name,
            category: item.category,
            mop: item.price,
            qty: item.quantity,
            imei: item.imei || '',
            serial_number: item.serial_number || '',
            mac_id: item.mac_id || '',
            manufacturing_date: item.manufacturing_date || '',
            showDetails: false,
            installation_required: needsInstallation ? true : false,
            installation_date: item.installation_date || '',
            extraFields: extraFields
        };
    });

    window.setTab('new-sale');
    window.triggerRender();
}

function resetSaleState() {
    activeCart = [];
    selectedCustomerId = null;
    selectedCustomerName = "Select Customer";
    gstRequired = false;
    companyName = '';
    gstNumber = '';
    showPaymentModal = false;
    selectedPaymentMode = '';
    paymentReference = '';
    splitPayments = [];
    splitAmountInput = '';
    editingDraftId = null;
    productSearchQuery = '';
    activeItemSheet = null;
    batchScanMode = false;
    showCustomerSheet = false;
    showAddCustomerSheet = false;
}

// Global exposure
window.selectSaleCustomer = selectSaleCustomer;
window.addProductToCart = addProductToCart;
window.completeTransaction = completeTransaction;
window.saveDraft = saveDraft;
window.loadDraft = loadDraft;
window.getActiveCart = () => activeCart;
window.getSelectedCustomer = () => ({ id: selectedCustomerId, name: selectedCustomerName });
window.getSaleState = () => ({
    gstRequired,
    companyName,
    gstNumber,
    paymentMode: selectedPaymentMode,
    paymentReference
});

window.clearCart = () => {
    resetSaleState();
    window.triggerRender();
};

window.removeFromCart = (idx) => {
    activeCart.splice(idx, 1);
    window.triggerRender();
};

window.toggleCustomerDropdown = (e) => {
    if (e) e.stopPropagation();
    const el = document.getElementById('customer-dropdown-menu');
    if (el) el.classList.toggle('hidden');
};

// Local search state for customer dropdown
let customerSearch = '';

window.updateCustomerSearch = (val) => {
    customerSearch = val.toLowerCase();
    window.triggerRender(false);
    requestAnimationFrame(() => {
        const input = document.getElementById('customer-sheet-search');
        if (input) {
            input.focus();
            input.setSelectionRange(val.length, val.length);
        }
    });
};

// Add customer state
let showAddCustomerSheet = false;

window.addNewCustomer = async () => {
    showCustomerSheet = false;
    customerSearch = '';
    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
        // Show inline add-customer bottom sheet on mobile/tablet
        showAddCustomerSheet = true;
        window.triggerRender(false);
        requestAnimationFrame(() => {
            const input = document.getElementById('new-customer-name');
            if (input) input.focus();
        });
    } else {
        // Desktop: replace right column
        window.setSalesMode('add-customer');
        window.triggerRender();
    }
};

window.closeAddCustomerSheet = () => {
    showAddCustomerSheet = false;
    window.triggerRender(false);
};

window.saveNewCustomerInline = async () => {
    const nameInput = document.getElementById('new-customer-name');
    const phoneInput = document.getElementById('new-customer-phone');
    const emailInput = document.getElementById('new-customer-email');

    const name = nameInput?.value.trim();
    const phone = phoneInput?.value.trim();

    if (!name || !phone) {
        window.toast.warning('Name and Phone are required');
        return;
    }

    const btn = document.getElementById('save-new-customer-btn');
    if (btn) { btn.disabled = true; btn.innerHTML = 'Saving...'; }

    try {
        const newId = 'CL-' + Math.random().toString(36).substr(2, 6).toUpperCase();
        await db.clients.add({
            id: newId,
            name,
            phone,
            email: emailInput?.value.trim() || ''
        });
        await syncData();
        selectSaleCustomer(newId, name);
        showAddCustomerSheet = false;
        window.toast.success('Customer added!');
        window.triggerRender();
    } catch (err) {
        console.error(err);
        window.toast.error('Error: ' + err.message);
        if (btn) { btn.disabled = false; btn.innerHTML = 'Save Customer'; }
    }
};

// Product search — direct DOM update, no full re-render
window.updateProductSearch = (val) => {
    productSearchQuery = val;
    const resultsContainer = document.getElementById('sales-search-results');
    const clearBtn = document.getElementById('sales-search-clear');
    if (resultsContainer) {
        resultsContainer.innerHTML = buildSearchResultsHTML(val);
    }
    if (clearBtn) {
        clearBtn.style.display = val ? '' : 'none';
    }
};

// Build search results HTML (extracted for direct DOM update)
function buildSearchResultsHTML(query) {
    const searchVal = (query || '').toLowerCase();
    if (!searchVal) return '';
    const products = (window.getCache().products || []);
    const filtered = products.filter(p => p.name.toLowerCase().includes(searchVal) || p.brand?.toLowerCase().includes(searchVal) || p.sku?.includes(searchVal));
    if (filtered.length > 0) {
        return `<div class="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden max-h-64 overflow-y-auto">
            ${filtered.slice(0, 8).map(p => {
                const needsInstall = productRequiresInstallation(p);
                return `<button type="button" onclick="window.addProductToCart('${p.id}')" class="w-full p-3.5 flex items-center gap-3 text-left border-b border-slate-50 active:bg-slate-50 transition-colors">
                    <div class="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                        <span class="material-icons-outlined text-slate-400 text-sm">${needsInstall ? 'home_repair_service' : 'smartphone'}</span>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-xs font-black text-slate-900 truncate">${p.name}</p>
                        <p class="text-[9px] font-bold text-slate-400 uppercase">${p.brand} · ${p.category}</p>
                    </div>
                    <span class="text-xs font-black text-slate-900 font-mono shrink-0">₹${p.mop?.toLocaleString() || 0}</span>
                </button>`;
            }).join('')}
        </div>`;
    }
    return `<div class="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
        <div class="p-6 text-center">
            <span class="material-icons-outlined text-2xl text-slate-200 mb-1">search_off</span>
            <p class="text-[10px] font-black text-slate-300 uppercase">No products found</p>
        </div>
    </div>`;
}

// Quantity stepper
window.updateCartQty = (idx, delta) => {
    if (activeCart[idx]) {
        const newQty = Math.max(1, (activeCart[idx].qty || 1) + delta);
        activeCart[idx].qty = newQty;
        window.triggerRender(false);
    }
};

// Item options bottom sheet
window.openItemSheet = (idx) => {
    activeItemSheet = idx;
    window.triggerRender(false);
};
window.closeItemSheet = () => {
    activeItemSheet = null;
    window.triggerRender(false);
};

// Customer bottom sheet
window.openCustomerSheet = () => {
    showCustomerSheet = true;
    window.triggerRender(false);
    requestAnimationFrame(() => {
        const input = document.getElementById('customer-sheet-search');
        if (input) input.focus();
    });
};
window.closeCustomerSheet = () => {
    showCustomerSheet = false;
    customerSearch = '';
    window.triggerRender(false);
};

// Batch scan mode
window.toggleBatchScan = () => {
    batchScanMode = !batchScanMode;
    window.triggerRender(false);
};

// Quick scan from search bar — identifies product + IMEI from photo
window.quickScanIMEI = async () => {
    const apiKey = getOpenAIKey();
    if (!apiKey) {
        window.toast.warning('Configure OpenAI API key in Settings → AI');
        return;
    }
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment';
    input.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        isProcessingImage = true;
        processingStatus = 'Scanning...';
        window.triggerRender(false);
        try {
            const base64Image = await fileToBase64(file);
            processingStatus = 'Identifying product...';
            window.triggerRender(false);
            const result = await analyzeProductImage(base64Image, apiKey);
            isProcessingImage = false;
            if (result.product_match) {
                const products = window.getCache().products || [];
                const query = (result.product_match || '').toLowerCase();
                const model = (result.model || '').toLowerCase();
                const brand = (result.brand || '').toLowerCase();
                const matched = products.find(p => {
                    const pName = p.name.toLowerCase();
                    const pBrand = (p.brand || '').toLowerCase();
                    return pName.includes(query) || query.includes(pName) ||
                           (model && pName.includes(model)) ||
                           (brand && pBrand === brand && model && pName.includes(model));
                });
                if (matched) {
                    await addProductToCart(matched.id);
                    const lastIdx = activeCart.length - 1;
                    if (result.imei && activeCart[lastIdx]) activeCart[lastIdx].imei = result.imei;
                    if (result.serial_number && activeCart[lastIdx]) activeCart[lastIdx].serial_number = result.serial_number;
                    if (result.extraFields && activeCart[lastIdx]) {
                        activeCart[lastIdx].extraFields = [...(activeCart[lastIdx].extraFields || []), ...result.extraFields];
                    }
                    window.toast.success(`Added: ${matched.name}${result.imei ? ' · IMEI captured' : ''}`);
                } else {
                    window.toast.warning(`Could not match "${result.product_match}" to inventory. Add manually.`);
                    if (result.imei) {
                        productSearchQuery = result.product_match || result.imei;
                    }
                }
            } else if (result.imei) {
                window.toast.info(`IMEI: ${result.imei} — search for the product to add it.`);
                productSearchQuery = result.imei;
            } else {
                window.toast.warning('No product or IMEI found. Try a clearer image.');
            }
            window.triggerRender(false);
        } catch (err) {
            console.error('Quick scan error:', err);
            isProcessingImage = false;
            window.triggerRender(false);
            window.toast.error(err.message || 'Scan failed');
        }
    };
    input.click();
};

// Batch scan capture — same as quickScan but stays in batch mode
window.batchScanCapture = async () => {
    const apiKey = getOpenAIKey();
    if (!apiKey) {
        window.toast.warning('Configure OpenAI API key in Settings → AI');
        return;
    }
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment';
    input.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        isProcessingImage = true;
        processingStatus = 'Scanning...';
        window.triggerRender(false);
        try {
            const base64Image = await fileToBase64(file);
            processingStatus = 'Identifying...';
            window.triggerRender(false);
            const result = await analyzeProductImage(base64Image, apiKey);
            isProcessingImage = false;
            if (result.product_match) {
                const products = window.getCache().products || [];
                const query = (result.product_match || '').toLowerCase();
                const model = (result.model || '').toLowerCase();
                const brand = (result.brand || '').toLowerCase();
                const matched = products.find(p => {
                    const pName = p.name.toLowerCase();
                    const pBrand = (p.brand || '').toLowerCase();
                    return pName.includes(query) || query.includes(pName) ||
                           (model && pName.includes(model)) ||
                           (brand && pBrand === brand && model && pName.includes(model));
                });
                if (matched) {
                    await addProductToCart(matched.id);
                    const lastIdx = activeCart.length - 1;
                    if (result.imei && activeCart[lastIdx]) activeCart[lastIdx].imei = result.imei;
                    if (result.serial_number && activeCart[lastIdx]) activeCart[lastIdx].serial_number = result.serial_number;
                    window.toast.success(`✓ ${matched.name}`);
                } else {
                    window.toast.warning(`Not in inventory: ${result.product_match}`);
                }
            } else {
                window.toast.warning('Could not identify product.');
            }
            window.triggerRender(false);
        } catch (err) {
            isProcessingImage = false;
            window.triggerRender(false);
            window.toast.error('Scan failed');
        }
    };
    input.click();
};

export function renderSales() {
    const cache = window.getCache();
    const products = cache.products || [];
    const allCustomers = cache.customers || [];

    // Filter customers based on search
    const customers = customerSearch
        ? allCustomers.filter(c => c.name.toLowerCase().includes(customerSearch) || c.phone?.includes(customerSearch))
        : allCustomers;

    // Product search
    const searchVal = productSearchQuery.toLowerCase();
    const filteredProducts = searchVal
        ? products.filter(p => p.name.toLowerCase().includes(searchVal) || p.brand?.toLowerCase().includes(searchVal) || p.sku?.includes(searchVal))
        : [];

    // Calculate totals (account for qty)
    const total = activeCart.reduce((sum, item) => sum + ((item.final_price || item.mop || 0) * (item.qty || 1)), 0);
    const totalDiscount = activeCart.reduce((sum, item) => sum + ((item.discount_amount || 0) * (item.qty || 1)), 0);
    const totalQty = activeCart.reduce((sum, item) => sum + (item.qty || 1), 0);
    const installationCount = activeCart.filter(item => item.installation_required).length;
    const today = new Date().toISOString().split('T')[0];

    // Desktop: constrain bottom sheets to center column (between 25% sidebar and 30% preview)
    const isDesktop = window.innerWidth >= 1024;
    const sheetStyle = isDesktop ? 'left: 25%; right: 30%;' : 'left: 0; right: 0;';
    const sheetClass = isDesktop ? 'fixed bottom-0 z-50' : 'fixed bottom-0 inset-x-0 z-50';
    const overlayClass = 'fixed inset-0 bg-black/40 z-40';

    // Get active item for sheet
    const sheetItem = activeItemSheet !== null ? activeCart[activeItemSheet] : null;
    const sheetIdx = activeItemSheet;

    return `
        ${renderSalesHeader('new-sale')}

        <!-- Customer Chip + Search/Scan Bar (sticky) -->
        <div class="px-4 pt-3 pb-2 space-y-2.5 shrink-0">
            <!-- Customer Chip + New Sale -->
            <div class="flex items-center gap-2">
                <button type="button" onclick="window.openCustomerSheet()" class="flex items-center gap-2 px-3.5 py-2 bg-white border border-slate-200 rounded-full active:bg-slate-50 transition-colors min-w-0 flex-1">
                    <span class="material-icons-outlined text-sm text-slate-400">person</span>
                    <span class="text-xs font-black text-slate-900 truncate">${selectedCustomerName}</span>
                    <span class="material-icons-outlined text-sm text-slate-300">expand_more</span>
                </button>
                ${activeCart.length > 0 ? `
                    <button type="button" onclick="if(confirm('Clear current invoice and start a new sale?')) window.clearCart()" class="flex items-center gap-1.5 px-3 py-2 border border-slate-200 rounded-full text-slate-500 active:bg-red-50 active:text-red-500 active:border-red-200 transition-colors shrink-0">
                        <span class="material-icons-outlined text-sm">restart_alt</span>
                        <span class="text-[9px] font-black uppercase tracking-wider">New</span>
                    </button>
                ` : ''}
            </div>

            <!-- Unified Search + Scan Bar (relative wrapper for dropdown) -->
            <div class="relative">
                <div class="flex items-center gap-2">
                    <div class="flex-1 flex items-center bg-white border border-slate-200 rounded-2xl px-4 py-3 focus-within:border-slate-900 transition-colors">
                        <span class="material-icons-outlined text-slate-400 text-lg mr-2.5 shrink-0">search</span>
                        <input type="text" id="sales-item-search"
                               value="${productSearchQuery}"
                               oninput="window.updateProductSearch(this.value)"
                               placeholder="Search product or enter IMEI..."
                               inputmode="search"
                               class="flex-1 bg-transparent text-sm font-bold text-slate-900 placeholder:text-slate-400 outline-none border-none min-w-0">
                        <button type="button" id="sales-search-clear" onclick="window.updateProductSearch(''); document.getElementById('sales-item-search').value='';" class="ml-1 text-slate-300 hover:text-slate-600 shrink-0" style="${productSearchQuery ? '' : 'display:none'}">
                            <span class="material-icons-outlined text-sm">close</span>
                        </button>
                    </div>
                    <button type="button" onclick="window.quickScanIMEI()" class="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center shrink-0 active:scale-95 transition-transform shadow-sm ${isProcessingImage ? 'opacity-50' : ''}" ${isProcessingImage ? 'disabled' : ''} title="Scan product label">
                        <span class="material-icons-outlined text-lg">${isProcessingImage ? 'sync' : 'photo_camera'}</span>
                    </button>
                </div>
                <!-- Search Results Dropdown (absolute, stays within column) -->
                <div id="sales-search-results" class="absolute top-full left-0 right-0 z-50 mt-1">
                    ${searchVal ? buildSearchResultsHTML(searchVal) : ''}
                </div>
            </div>

            <!-- Batch Scan Link -->
            <div class="flex items-center justify-between">
                <button type="button" onclick="window.toggleBatchScan()" class="flex items-center gap-1.5 text-[9px] font-black text-slate-500 uppercase tracking-widest active:text-slate-900">
                    <span class="material-icons-outlined text-sm">qr_code_scanner</span>
                    Batch Scan Mode
                </button>
                ${isProcessingImage ? `
                    <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">
                        <span class="material-icons-outlined text-sm animate-spin">sync</span>
                        ${processingStatus}
                    </span>
                ` : ''}
            </div>
        </div>

        <!-- Cart Content -->
        <div class="scrolling-content px-4 ${activeCart.length > 0 ? 'pb-36' : 'pb-6'} space-y-3 text-left">

            ${activeCart.length > 0 ? `
                <!-- Cart Header -->
                <div class="flex items-center justify-between pt-2">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        Cart · ${totalQty} item${totalQty !== 1 ? 's' : ''}
                        ${installationCount > 0 ? `<span class="ml-1 text-slate-500">· ${installationCount} install</span>` : ''}
                    </h3>
                    <button type="button" onclick="window.clearCart()" class="text-[9px] font-black text-slate-900 uppercase tracking-widest active:opacity-50">Clear</button>
                </div>

                <!-- Cart Items -->
                ${activeCart.map((item, idx) => {
                    const qty = item.qty || 1;
                    const unitPrice = item.final_price || item.mop || 0;
                    const lineTotal = unitPrice * qty;
                    return `
                    <div class="card overflow-hidden" data-cart-item="${idx}">
                        <!-- Main Row — tap for options -->
                        <button type="button" onclick="window.openItemSheet(${idx})" class="w-full p-3.5 flex items-start gap-3 text-left active:bg-slate-50 transition-colors">
                            <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                                <span class="material-icons-outlined text-lg text-slate-300">${item.installation_required ? 'home_repair_service' : 'smartphone'}</span>
                            </div>
                            <div class="flex-1 min-w-0">
                                <h4 class="text-sm font-black text-slate-900 truncate text-left">${item.name}</h4>
                                <p class="text-[9px] font-bold text-slate-400 uppercase text-left">${item.brand || ''} · ${item.category}</p>
                                <!-- Inline Badges -->
                                <div class="flex items-center gap-1.5 mt-1.5 flex-wrap">
                                    ${item.discount_amount > 0 ? `
                                        <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[8px] font-black bg-slate-900 text-white">
                                            <span class="material-icons-outlined text-[10px]">local_offer</span>
                                            -₹${item.discount_amount.toLocaleString()}
                                        </span>
                                    ` : ''}
                                    ${item.installation_required ? `
                                        <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[8px] font-black bg-slate-100 text-slate-600">
                                            <span class="material-icons-outlined text-[10px]">build</span> Install
                                        </span>
                                    ` : ''}
                                    ${item.imei ? `
                                        <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[8px] font-black bg-slate-100 text-slate-600">
                                            <span class="material-icons-outlined text-[10px]">verified</span> IMEI
                                        </span>
                                    ` : ''}
                                    ${item.serial_number ? `
                                        <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[8px] font-black bg-slate-100 text-slate-600">S/N</span>
                                    ` : ''}
                                </div>
                            </div>
                            <div class="text-right shrink-0 flex flex-col items-end">
                                ${item.discount_amount > 0 ? `
                                    <p class="text-[9px] font-bold text-slate-400 line-through font-mono">₹${item.mop?.toLocaleString()}</p>
                                    <p class="text-sm font-black font-mono text-slate-900">₹${lineTotal.toLocaleString()}</p>
                                ` : `
                                    <p class="text-sm font-black font-mono text-slate-900">₹${lineTotal.toLocaleString()}</p>
                                `}
                                ${qty > 1 ? `<p class="text-[8px] font-bold text-slate-400 font-mono">₹${unitPrice.toLocaleString()} × ${qty}</p>` : ''}
                                <span class="material-icons-outlined text-xs text-slate-300 mt-1">chevron_right</span>
                            </div>
                        </button>

                        <!-- Qty + IMEI Row -->
                        <div class="px-3.5 pb-3 flex items-center gap-2" onclick="event.stopPropagation()">
                            <!-- Qty Stepper -->
                            <div class="flex items-center bg-slate-50 rounded-xl border border-slate-100 shrink-0">
                                <button type="button" onclick="window.updateCartQty(${idx}, -1)" class="w-8 h-9 flex items-center justify-center text-slate-400 active:text-slate-900 active:bg-slate-200 rounded-l-xl transition-colors ${qty <= 1 ? 'opacity-30 pointer-events-none' : ''}">
                                    <span class="material-icons-outlined text-sm">remove</span>
                                </button>
                                <span class="w-7 text-center text-xs font-black text-slate-900 font-mono">${qty}</span>
                                <button type="button" onclick="window.updateCartQty(${idx}, 1)" class="w-8 h-9 flex items-center justify-center text-slate-400 active:text-slate-900 active:bg-slate-200 rounded-r-xl transition-colors">
                                    <span class="material-icons-outlined text-sm">add</span>
                                </button>
                            </div>
                            <!-- IMEI -->
                            <div class="flex-1 flex items-center bg-slate-50 rounded-xl px-3 py-2.5 border border-slate-100 focus-within:border-slate-900 transition-colors">
                                <span class="text-[8px] font-black text-slate-400 uppercase tracking-wider mr-2 shrink-0">IMEI</span>
                                <input type="text" value="${item.imei || ''}"
                                       onchange="window.updateCartItemDetail(${idx}, 'imei', this.value)"
                                       placeholder="Enter or scan"
                                       inputmode="numeric"
                                       maxlength="15"
                                       class="flex-1 bg-transparent text-xs font-bold font-mono text-slate-700 placeholder:text-slate-300 outline-none border-none min-w-0">
                            </div>
                            <button type="button" onclick="window.captureDeviceImage(${idx})" class="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 active:bg-slate-200 shrink-0 transition-colors" title="Scan IMEI">
                                <span class="material-icons-outlined text-sm">photo_camera</span>
                            </button>
                            <button type="button" onclick="window.removeFromCart(${idx})" class="w-9 h-9 rounded-xl flex items-center justify-center text-slate-300 active:text-red-500 active:bg-red-50 shrink-0 transition-colors" title="Remove">
                                <span class="material-icons-outlined text-sm">close</span>
                            </button>
                        </div>
                    </div>
                `}).join('')}
            ` : `
                <!-- Empty Cart State -->
                <div class="flex flex-col items-center justify-center py-20 px-8 text-center">
                    <div class="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                        <span class="material-icons-outlined text-3xl text-slate-300">shopping_basket</span>
                    </div>
                    <h3 class="text-sm font-black text-slate-900 mb-1">No items yet</h3>
                    <p class="text-xs font-bold text-slate-400 mb-6 max-w-[240px]">Search for products above or scan a product label to start billing</p>
                    <button type="button" onclick="document.getElementById('sales-item-search')?.focus()" class="bg-slate-900 text-white text-[10px] font-black uppercase px-5 py-3 rounded-xl active:scale-95 transition-transform">
                        <span class="material-icons-outlined text-sm mr-1 align-text-bottom">search</span>
                        Search Products
                    </button>
                </div>
            `}
        </div>

        <!-- Floating Checkout Bar -->
        ${activeCart.length > 0 ? `
            <div class="absolute bottom-0 left-0 right-0 z-30 bg-white border-t border-slate-200 shadow-xl px-4 pt-3 pb-4 pb-safe">
                <div class="flex items-center justify-between mb-2.5">
                    <div>
                        <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest">${totalQty} item${totalQty !== 1 ? 's' : ''}</span>
                        ${totalDiscount > 0 ? `
                            <span class="text-[9px] font-black text-slate-500 ml-2">· Saved ₹${totalDiscount.toLocaleString()}</span>
                        ` : ''}
                    </div>
                    <span class="text-lg font-black font-mono text-slate-900">₹${total.toLocaleString()}</span>
                </div>
                <div class="flex gap-2">
                    <button type="button" onclick="window.saveDraft()" class="py-3.5 px-5 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl text-[10px] font-black uppercase active:scale-95 transition-transform">
                        Draft
                    </button>
                    <button type="button" id="complete-txn-btn" onclick="window.openPaymentModal()" class="flex-1 py-3.5 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg">
                        Charge ₹${total.toLocaleString()}
                        <span class="material-icons-outlined text-sm">arrow_forward</span>
                    </button>
                </div>
            </div>
        ` : ''}

        <!-- ===== BOTTOM SHEETS ===== -->

        <!-- Customer Selection Sheet -->
        ${showCustomerSheet ? `
            <div onclick="window.closeCustomerSheet()" class="${overlayClass}"></div>
            <div class="${sheetClass} bg-white rounded-t-3xl shadow-2xl animate-slide-up" style="max-height: 80vh; display: flex; flex-direction: column; ${sheetStyle}">
                <div class="flex justify-center pt-3 pb-1 shrink-0"><div class="w-10 h-1 rounded-full bg-slate-300"></div></div>
                <div class="px-4 py-3 border-b border-slate-100 shrink-0">
                    <div class="flex items-center bg-slate-100 rounded-xl px-3 py-2.5">
                        <span class="material-icons-outlined text-slate-400 text-sm mr-2">search</span>
                        <input type="text" id="customer-sheet-search"
                               value="${customerSearch}"
                               oninput="window.updateCustomerSearch(this.value)"
                               placeholder="Search by name or phone..."
                               class="flex-1 bg-transparent text-sm font-bold text-slate-900 placeholder:text-slate-400 outline-none border-none">
                    </div>
                </div>
                <button type="button" onclick="window.addNewCustomer()" class="w-full px-4 py-3 bg-slate-900 text-white text-[10px] font-black uppercase flex items-center justify-center gap-2 active:bg-slate-800 shrink-0">
                    <span class="material-icons-outlined text-sm">add</span> New Customer
                </button>
                <div class="overflow-y-auto flex-1">
                    ${customers.length === 0 ? `
                        <div class="p-8 text-center">
                            <p class="text-xs font-bold text-slate-400">No customers found</p>
                        </div>
                    ` : customers.map(c => `
                        <button type="button" onclick="window.selectSaleCustomer('${c.id}', '${c.name.replace(/'/g, "\\'")}'); window.closeCustomerSheet();"
                                class="w-full px-4 py-3.5 border-b border-slate-50 text-left flex items-center gap-3 active:bg-slate-50 transition-colors">
                            <div class="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                                <span class="material-icons-outlined text-slate-400 text-sm">person</span>
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-black text-slate-900 truncate text-left">${c.name}</p>
                                <p class="text-[10px] font-bold text-slate-400 text-left">${c.phone || ''}</p>
                            </div>
                            ${selectedCustomerId === c.id ? '<span class="material-icons-outlined text-slate-900 text-sm">check</span>' : ''}
                        </button>
                    `).join('')}
                </div>
            </div>
        ` : ''}

        <!-- Add New Customer Sheet (mobile/tablet) -->
        ${showAddCustomerSheet ? `
            <div onclick="window.closeAddCustomerSheet()" class="${overlayClass}"></div>
            <div class="${sheetClass} bg-white rounded-t-3xl shadow-2xl animate-slide-up" style="max-height: 85vh; display: flex; flex-direction: column; ${sheetStyle}">
                <div class="flex justify-center pt-3 pb-1 shrink-0"><div class="w-10 h-1 rounded-full bg-slate-300"></div></div>
                <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between shrink-0">
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center">
                            <span class="material-icons-outlined text-white text-sm">person_add</span>
                        </div>
                        <h2 class="text-base font-black text-slate-900">New Customer</h2>
                    </div>
                    <button type="button" onclick="window.closeAddCustomerSheet()" class="w-8 h-8 flex items-center justify-center rounded-full active:bg-slate-100">
                        <span class="material-icons-outlined text-slate-400">close</span>
                    </button>
                </div>
                <div class="overflow-y-auto flex-1 p-4 space-y-4">
                    <div class="space-y-1">
                        <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Full Name <span class="text-slate-900">*</span></label>
                        <input type="text" id="new-customer-name" placeholder="e.g. Rahul Sharma" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                    </div>
                    <div class="space-y-1">
                        <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Mobile Number <span class="text-slate-900">*</span></label>
                        <input type="tel" id="new-customer-phone" placeholder="+91 98765 43210" inputmode="tel" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                    </div>
                    <div class="space-y-1">
                        <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Email (optional)</label>
                        <input type="email" id="new-customer-email" placeholder="email@example.com" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all">
                    </div>
                </div>
                <div class="sticky bottom-0 p-4 bg-white border-t border-slate-100 shrink-0 pb-safe">
                    <button type="button" id="save-new-customer-btn" onclick="window.saveNewCustomerInline()" class="w-full py-3.5 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase active:scale-95 transition-transform">
                        Save Customer
                    </button>
                </div>
            </div>
        ` : ''}

        <!-- Item Options Sheet -->
        ${sheetItem ? `
            <div onclick="window.closeItemSheet()" class="${overlayClass}"></div>
            <div class="${sheetClass} bg-white rounded-t-3xl shadow-2xl animate-slide-up" style="max-height: 88vh; display: flex; flex-direction: column; ${sheetStyle}">
                <div class="flex justify-center pt-3 pb-1 shrink-0"><div class="w-10 h-1 rounded-full bg-slate-300"></div></div>

                <!-- Item Header -->
                <div class="px-4 py-3 border-b border-slate-100 flex items-center gap-3 shrink-0">
                    <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                        <span class="material-icons-outlined text-slate-400">${sheetItem.installation_required ? 'home_repair_service' : 'smartphone'}</span>
                    </div>
                    <div class="flex-1 min-w-0">
                        <h3 class="text-sm font-black text-slate-900 truncate">${sheetItem.name}</h3>
                        <p class="text-[10px] font-bold text-slate-400">${sheetItem.brand || ''} · ₹${sheetItem.mop?.toLocaleString()}</p>
                    </div>
                    <button type="button" onclick="window.closeItemSheet()" class="w-8 h-8 flex items-center justify-center rounded-full active:bg-slate-100">
                        <span class="material-icons-outlined text-slate-400 text-lg">close</span>
                    </button>
                </div>

                <div class="overflow-y-auto flex-1 p-4 space-y-6">
                    <!-- Discount Section -->
                    <div>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Discount</p>
                        <div class="flex gap-2 mb-3">
                            ${[5, 10, 15, 20].map(pct => `
                                <button type="button" onclick="window.applyStoreDiscount(${sheetIdx}, ${pct})" class="flex-1 py-2.5 ${sheetItem.discount_type === 'store' && sheetItem.discount_value === pct ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'} rounded-xl text-[10px] font-black active:scale-95 transition-all">
                                    ${pct}%
                                </button>
                            `).join('')}
                            <input type="number" placeholder="%" min="1" max="100"
                                   onchange="window.applyStoreDiscount(${sheetIdx}, this.value)"
                                   class="w-14 px-2 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-[10px] font-bold text-center focus:outline-none focus:border-slate-900">
                        </div>
                        ${sheetItem.discount_amount > 0 ? `
                            <div class="flex items-center justify-between bg-slate-900 text-white px-3.5 py-2.5 rounded-xl">
                                <span class="text-[10px] font-black">${sheetItem.discount_type === 'scheme' ? sheetItem.scheme_name : `${sheetItem.discount_value}% off`}</span>
                                <div class="flex items-center gap-2">
                                    <span class="text-[10px] font-black font-mono">-₹${sheetItem.discount_amount.toLocaleString()}</span>
                                    <button type="button" onclick="window.clearItemDiscount(${sheetIdx})" class="text-white/60 active:text-white"><span class="material-icons-outlined text-sm">close</span></button>
                                </div>
                            </div>
                        ` : ''}
                        ${(sheetItem.applicableSchemes && sheetItem.applicableSchemes.length > 0) ? `
                            <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-4 mb-2">Brand Schemes</p>
                            <div class="space-y-2">
                                ${sheetItem.applicableSchemes.map(s => `
                                    <button type="button" onclick="window.applySchemeDiscount(${sheetIdx}, '${s.id}')" class="w-full p-3 ${sheetItem.scheme_id === s.id ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-700'} rounded-xl text-left flex items-center justify-between active:scale-98 transition-all">
                                        <div>
                                            <p class="text-[10px] font-black">${s.name}</p>
                                            <p class="text-[8px] font-bold ${sheetItem.scheme_id === s.id ? 'text-white/70' : 'text-slate-400'}">${s.brand}</p>
                                        </div>
                                        <span class="text-[10px] font-black">${s.discount_type === 'percentage' ? `${s.discount_value}%` : `₹${s.discount_value.toLocaleString()}`} OFF</span>
                                    </button>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>

                    <!-- Device Details Section -->
                    <div>
                        <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Device Details</p>

                        <!-- AI Scan -->
                        <button type="button" onclick="window.captureDeviceImage(${sheetIdx})" class="w-full py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase flex items-center justify-center gap-2 active:scale-95 transition-transform mb-3 ${isProcessingImage ? 'opacity-50 cursor-not-allowed' : ''}" ${isProcessingImage ? 'disabled' : ''}>
                            ${isProcessingImage ? `
                                <span class="material-icons-outlined text-sm animate-spin">sync</span>
                                <span id="ocr-progress-${sheetIdx}">${processingStatus || 'Analyzing...'}</span>
                            ` : `
                                <span class="material-icons-outlined text-sm">photo_camera</span>
                                Scan Label with AI
                            `}
                        </button>

                        <div class="grid grid-cols-2 gap-3">
                            <div class="space-y-1">
                                <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Serial Number</label>
                                <input type="text" value="${sheetItem.serial_number || ''}" onchange="window.updateCartItemDetail(${sheetIdx}, 'serial_number', this.value)" placeholder="Enter serial" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                            </div>
                            <div class="space-y-1">
                                <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest">MAC Address</label>
                                <input type="text" value="${sheetItem.mac_id || ''}" onchange="window.updateCartItemDetail(${sheetIdx}, 'mac_id', this.value)" placeholder="Enter MAC" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                            </div>
                            <div class="space-y-1">
                                <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Mfg. Date</label>
                                <input type="date" value="${sheetItem.manufacturing_date || ''}" onchange="window.updateCartItemDetail(${sheetIdx}, 'manufacturing_date', this.value)" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                            </div>
                        </div>

                        <!-- Extra Fields -->
                        ${(sheetItem.extraFields && sheetItem.extraFields.length > 0) ? `
                            <div class="grid grid-cols-2 gap-3 mt-3">
                                ${sheetItem.extraFields.map((field, fi) => `
                                    <div class="space-y-1">
                                        <div class="flex items-center justify-between">
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest">${field.label}</label>
                                            <button type="button" onclick="window.removeExtraField(${sheetIdx}, ${fi})" class="text-slate-300 active:text-slate-600"><span class="material-icons-outlined text-xs">close</span></button>
                                        </div>
                                        <input type="text" value="${field.value || ''}" onchange="window.updateCartItemExtraField(${sheetIdx}, ${fi}, this.value)" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}

                        <button type="button" onclick="window.addCustomExtraField(${sheetIdx})" class="mt-3 w-full py-2.5 border border-dashed border-slate-300 text-slate-500 rounded-xl text-[9px] font-black uppercase flex items-center justify-center gap-1 active:bg-slate-50 transition-colors">
                            <span class="material-icons-outlined text-sm">add</span> Add Custom Field
                        </button>
                    </div>

                    <!-- Installation Section -->
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Installation</p>
                            <button type="button" onclick="window.toggleItemInstallation(${sheetIdx})" class="flex items-center gap-1.5 text-xs font-bold ${sheetItem.installation_required ? 'text-slate-900' : 'text-slate-400'}">
                                <span class="material-icons-outlined text-sm">${sheetItem.installation_required ? 'check_box' : 'check_box_outline_blank'}</span>
                                Required
                            </button>
                        </div>
                        ${sheetItem.installation_required ? `
                            <div class="space-y-1">
                                <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Installation Date</label>
                                <input type="date" value="${sheetItem.installation_date || ''}" onchange="window.updateItemInstallationDate(${sheetIdx}, this.value)" min="${today}" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                            </div>
                        ` : ''}
                    </div>
                </div>

                <!-- Done Button -->
                <div class="sticky bottom-0 p-4 bg-white border-t border-slate-100 shrink-0 pb-safe">
                    <button type="button" onclick="window.closeItemSheet()" class="w-full py-3.5 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase active:scale-95 transition-transform">
                        Done
                    </button>
                </div>
            </div>
        ` : ''}

        <!-- Batch Scan Overlay -->
        ${batchScanMode ? `
            <div class="fixed z-[60] bg-white flex flex-col" style="top: 0; bottom: 0; ${sheetStyle}">
                <div class="flex items-center justify-between px-4 py-3 border-b border-slate-200 shrink-0">
                    <div>
                        <h2 class="text-base font-black text-slate-900">Batch Scan</h2>
                        <p class="text-[10px] font-bold text-slate-400">${activeCart.length} item${activeCart.length !== 1 ? 's' : ''} scanned</p>
                    </div>
                    <button type="button" onclick="window.toggleBatchScan()" class="px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase rounded-xl active:scale-95 transition-transform">Done</button>
                </div>
                <div class="flex-1 overflow-y-auto p-4 space-y-2">
                    ${activeCart.length > 0 ? activeCart.map((item, i) => `
                        <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                            <span class="material-icons-outlined text-slate-400 text-sm">check_circle</span>
                            <div class="flex-1 min-w-0">
                                <p class="text-xs font-black text-slate-900 truncate">${item.name}</p>
                                <p class="text-[10px] font-bold text-slate-400 font-mono">${item.imei || 'No IMEI'}</p>
                            </div>
                            <span class="text-xs font-black font-mono text-slate-900">₹${item.mop?.toLocaleString()}</span>
                        </div>
                    `).join('') : `
                        <div class="flex flex-col items-center justify-center py-20 text-center">
                            <div class="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                                <span class="material-icons-outlined text-3xl text-slate-300">qr_code_scanner</span>
                            </div>
                            <h3 class="text-sm font-black text-slate-900 mb-1">Ready to scan</h3>
                            <p class="text-xs font-bold text-slate-400 max-w-[240px]">Point camera at product labels or barcodes. Each scan adds the item to your cart.</p>
                        </div>
                    `}
                </div>
                <div class="border-t border-slate-200 px-4 pt-3 pb-4 pb-safe bg-white shrink-0">
                    ${activeCart.length > 0 ? `
                        <div class="flex justify-between items-center mb-3">
                            <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest">${activeCart.length} items</span>
                            <span class="text-lg font-black font-mono text-slate-900">₹${total.toLocaleString()}</span>
                        </div>
                    ` : ''}
                    <button type="button" onclick="window.batchScanCapture()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-sm font-black uppercase flex items-center justify-center gap-2 active:scale-95 transition-transform ${isProcessingImage ? 'opacity-50' : ''}" ${isProcessingImage ? 'disabled' : ''}>
                        ${isProcessingImage ? `
                            <span class="material-icons-outlined animate-spin">sync</span>
                            ${processingStatus || 'Scanning...'}
                        ` : `
                            <span class="material-icons-outlined">photo_camera</span>
                            Scan Next Item
                        `}
                    </button>
                </div>
            </div>
        ` : ''}

        <!-- Payment Bottom Sheet -->
        ${showPaymentModal ? (() => {
            const paidSoFar = splitPayments.reduce((sum, p) => sum + p.amount, 0);
            const remaining = total - paidSoFar;
            const modeIcons = { cash: 'payments', card: 'credit_card', upi: 'qr_code' };
            const modeLabels = { cash: 'Cash', card: 'Card', upi: 'UPI' };
            return `
            <div onclick="window.closePaymentModal()" class="${overlayClass}"></div>
            <div class="${sheetClass} bg-white rounded-t-3xl shadow-2xl animate-slide-up" style="max-height: 90vh; display: flex; flex-direction: column; ${sheetStyle}">
                <div class="flex justify-center pt-3 pb-1 shrink-0"><div class="w-10 h-1 rounded-full bg-slate-300"></div></div>
                <div class="px-4 py-3 border-b border-slate-100 flex items-center justify-between shrink-0">
                    <h2 class="text-base font-black text-slate-900">Payment</h2>
                    <button type="button" onclick="window.closePaymentModal()" class="w-8 h-8 flex items-center justify-center rounded-full active:bg-slate-100">
                        <span class="material-icons-outlined text-slate-400">close</span>
                    </button>
                </div>
                <div class="overflow-y-auto flex-1 p-4 space-y-4">
                    <!-- GST Toggle -->
                    <div class="flex items-center justify-between py-2 border-b border-slate-100">
                        <span class="text-xs font-black text-slate-700">GST Invoice</span>
                        <button type="button" onclick="window.toggleGstRequired()" class="flex items-center gap-1.5 text-xs font-bold ${gstRequired ? 'text-slate-900' : 'text-slate-400'}">
                            <span class="material-icons-outlined text-lg">${gstRequired ? 'toggle_on' : 'toggle_off'}</span>
                        </button>
                    </div>
                    ${gstRequired ? `
                        <div class="space-y-3 p-3 bg-slate-50 rounded-xl">
                            <div class="space-y-1">
                                <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Company Name</label>
                                <input type="text" value="${companyName}" oninput="window.updateGstField('companyName', this.value)" placeholder="Enter company name" class="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                            </div>
                            <div class="space-y-1">
                                <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest">GST Number</label>
                                <input type="text" value="${gstNumber}" oninput="window.updateGstField('gstNumber', this.value)" placeholder="27AAACR3456D1Z5" maxlength="15" class="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold uppercase focus:outline-none focus:border-slate-900 transition-all">
                            </div>
                        </div>
                    ` : ''}

                    <!-- Split payments already added -->
                    ${splitPayments.length > 0 ? `
                        <div>
                            <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Payment Splits</p>
                            <div class="space-y-2">
                                ${splitPayments.map((sp, si) => `
                                    <div class="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl">
                                        <span class="material-icons-outlined text-slate-400 text-sm">${modeIcons[sp.mode] || 'payments'}</span>
                                        <span class="text-xs font-black text-slate-700 flex-1">${modeLabels[sp.mode] || sp.mode}${sp.reference ? ' · ' + sp.reference : ''}</span>
                                        <span class="text-xs font-black font-mono text-slate-900">₹${sp.amount.toLocaleString()}</span>
                                        <button type="button" onclick="window.removeSplitPayment(${si})" class="w-6 h-6 flex items-center justify-center text-slate-300 active:text-red-500">
                                            <span class="material-icons-outlined text-sm">close</span>
                                        </button>
                                    </div>
                                `).join('')}
                            </div>
                            ${remaining > 0 ? `
                                <p class="text-[9px] font-black text-slate-500 mt-2">Remaining: <span class="font-mono">₹${remaining.toLocaleString()}</span></p>
                            ` : `
                                <p class="text-[9px] font-black text-green-600 mt-2 flex items-center gap-1"><span class="material-icons-outlined text-xs">check_circle</span> Fully covered</p>
                            `}
                        </div>
                    ` : ''}

                    <!-- Payment Mode Selection -->
                    ${remaining > 0 || splitPayments.length === 0 ? `
                        <div>
                            <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">${splitPayments.length > 0 ? 'Add Another Payment' : 'Payment Mode'}</p>
                            <div class="grid grid-cols-3 gap-2">
                                ${['cash', 'card', 'upi'].map(mode => `
                                    <button type="button" onclick="window.selectPaymentMode('${mode}')" class="p-3.5 rounded-2xl border-2 flex flex-col items-center gap-1.5 active:scale-95 transition-all ${selectedPaymentMode === mode ? 'border-slate-900 bg-slate-50' : 'border-slate-100'}">
                                        <span class="material-icons-outlined text-xl ${selectedPaymentMode === mode ? 'text-slate-900' : 'text-slate-400'}">${modeIcons[mode]}</span>
                                        <span class="text-[10px] font-black uppercase ${selectedPaymentMode === mode ? 'text-slate-900' : 'text-slate-500'}">${modeLabels[mode]}</span>
                                    </button>`).join('')}
                            </div>
                        </div>
                        ${selectedPaymentMode ? `
                            ${(selectedPaymentMode === 'card' || selectedPaymentMode === 'upi') ? `
                                <div class="space-y-1">
                                    <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest">${selectedPaymentMode === 'card' ? 'Card Ref / Last 4 Digits' : 'UPI Transaction ID'}</label>
                                    <input type="text" value="${paymentReference}" oninput="window.updatePaymentReference(this.value)" placeholder="${selectedPaymentMode === 'card' ? 'Enter reference' : 'Enter UPI ID'}" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                </div>
                            ` : ''}
                            <!-- Amount input for split -->
                            <div class="space-y-1">
                                <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest">Amount${splitPayments.length === 0 ? ' (leave empty for full amount)' : ''}</label>
                                <div class="flex items-center gap-2">
                                    <input type="number" value="${splitAmountInput}" oninput="window.updateSplitAmount(this.value)" placeholder="₹${remaining.toLocaleString()}" min="1" max="${remaining}" class="flex-1 px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold font-mono focus:outline-none focus:border-slate-900 transition-all">
                                    <button type="button" onclick="window.addSplitPayment()" class="px-4 py-2.5 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase active:scale-95 transition-transform shrink-0">
                                        ${splitPayments.length > 0 ? 'Add' : 'Split'}
                                    </button>
                                </div>
                            </div>
                        ` : ''}
                    ` : ''}
                </div>
                <!-- Confirm Button -->
                <div class="sticky bottom-0 p-4 bg-white border-t border-slate-100 shrink-0 pb-safe">
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Total</span>
                        <span class="text-xl font-black font-mono text-slate-900">₹${total.toLocaleString()}</span>
                    </div>
                    <button type="button" onclick="window.confirmPayment()" class="w-full py-3.5 bg-slate-900 text-white rounded-2xl text-sm font-black uppercase flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg ${(!selectedPaymentMode && splitPayments.length === 0) || (splitPayments.length > 0 && remaining > 1) ? 'opacity-40 pointer-events-none' : ''}">
                        <span class="material-icons-outlined text-sm">check_circle</span>
                        ${splitPayments.length > 0 ? 'Confirm Split Payment' : 'Confirm Payment'}
                    </button>
                </div>
            </div>
        `})() : ''}
    `;
}

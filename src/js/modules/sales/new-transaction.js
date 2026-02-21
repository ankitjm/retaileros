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

// Draft editing state
let editingDraftId = null;

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
        // Clear search
        const searchInput = document.getElementById('sales-item-search');
        if (searchInput) searchInput.value = '';
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

window.confirmPayment = async () => {
    if (!selectedPaymentMode) {
        window.toast.warning("Please select a payment mode");
        return;
    }
    if ((selectedPaymentMode === 'card' || selectedPaymentMode === 'upi') && !paymentReference) {
        window.toast.warning("Please enter the transaction reference");
        return;
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
        // Use final_price which accounts for discounts
        const totalAmount = activeCart.reduce((sum, item) => sum + (item.final_price || item.mop), 0);
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
                quantity: 1,
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
        // Use final_price which accounts for discounts
        const totalAmount = activeCart.reduce((sum, item) => sum + (item.final_price || item.mop), 0);
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
                quantity: 1,
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
    editingDraftId = null;
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
};

window.addNewCustomer = async () => {
    // Switch to Add Customer Mode (Desktop Preview Pane)
    window.setSalesMode('add-customer');

    // Close dropdown
    const el = document.getElementById('customer-dropdown-menu');
    if (el) el.classList.add('hidden');
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
    const searchInput = document.getElementById('sales-item-search');
    const searchVal = searchInput ? searchInput.value.toLowerCase() : '';
    const filteredProducts = searchVal
        ? products.filter(p => p.name.toLowerCase().includes(searchVal) || p.brand?.toLowerCase().includes(searchVal))
        : [];

    // Calculate total (using final_price which accounts for discounts)
    const total = activeCart.reduce((sum, item) => sum + (item.final_price || item.mop || 0), 0);
    const totalDiscount = activeCart.reduce((sum, item) => sum + (item.discount_amount || 0), 0);
    
    // Count items needing installation
    const installationCount = activeCart.filter(item => item.installation_required).length;

    return `
        ${renderSalesHeader('new-sale')}
        <div class="scrolling-content px-4 sm:px-8 space-y-6 pb-12 text-left">
            <!-- Customer Section -->
            <section class="space-y-3 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Customer Details</h3>

                <div class="relative text-left">
                    <button type="button" id="customer-dropdown-trigger" onclick="window.toggleCustomerDropdown(event)" class="card p-5 flex items-center justify-between cursor-pointer hover:border-slate-300 transition-all text-left w-full">
                        <div class="flex items-center gap-4 text-slate-900 text-left">
                            <span class="material-icons-outlined text-slate-400">person</span>
                            <span class="text-sm font-black text-left">${selectedCustomerName}</span>
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
                                       value="${customerSearch}"
                                       oninput="window.updateCustomerSearch(this.value)" 
                                       placeholder="Search customer..." 
                                       class="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                             </div>
                        </div>

                        <button type="button" onclick="window.addNewCustomer()" class="p-4 bg-slate-900 text-white border-b border-slate-900 cursor-pointer flex items-center justify-center gap-2 hover:bg-slate-800 sticky top-[60px] z-10">
                            <span class="material-icons-outlined text-xs">add</span>
                            <span class="text-[10px] font-black uppercase tracking-widest">Create New Customer</span>
                        </button>

                        ${customers.length === 0 ? `
                             <div class="p-4 text-center text-slate-400 text-xs font-bold">No customers found</div>
                        ` : customers.map(c => `
                            <button type="button" onclick="window.selectSaleCustomer('${c.id}', '${c.name.replace(/'/g, "\\'")}')" class="p-4 hover:bg-slate-50 cursor-pointer border-b border-slate-50 text-left w-full">
                                <p class="text-xs font-black text-slate-900 text-left">${c.name}</p>
                                <p class="text-[9px] font-bold text-slate-400 text-left">${c.phone || ''}</p>
                            </button>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- GST Billing Section -->
            <section class="space-y-3 text-left">
                <div class="flex items-center justify-between">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">GST Billing</h3>
                    <button type="button" onclick="window.toggleGstRequired()" class="flex items-center gap-2 text-[9px] font-black uppercase ${gstRequired ? 'text-slate-900' : 'text-slate-400'}">
                        <span class="material-icons-outlined text-sm">${gstRequired ? 'check_box' : 'check_box_outline_blank'}</span>
                        ${gstRequired ? 'Enabled' : 'Disabled'}
                    </button>
                </div>
                
                ${gstRequired ? `
                    <div class="card p-4 space-y-4">
                        <div>
                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Company Name</label>
                            <input type="text" value="${companyName}" oninput="window.updateGstField('companyName', this.value)" placeholder="Enter company name" class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                        </div>
                        <div>
                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">GST Number</label>
                            <input type="text" value="${gstNumber}" oninput="window.updateGstField('gstNumber', this.value)" placeholder="e.g. 27AAACR3456D1Z5" maxlength="15" class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold uppercase focus:outline-none focus:border-slate-900 transition-all">
                        </div>
                    </div>
                ` : ''}
            </section>

            <!-- Product Search Section -->
            <section class="space-y-3 text-left">
                <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">Product Search</h3>
                <div class="relative text-left">
                    <span class="absolute left-5 top-1/2 -translate-y-1/2 material-icons-outlined text-slate-400">search</span>
                    <input type="text" id="sales-item-search" oninput="window.triggerRender(false)" placeholder="Search products..." class="w-full pl-14 pr-6 py-5 bg-white border border-slate-100 rounded-3xl text-sm font-bold focus:outline-none focus:border-slate-900 transition-all shadow-sm text-left">
                    
                    ${searchVal ? `
                        <div class="absolute top-full left-0 right-0 z-50 bg-white border border-slate-100 rounded-2xl shadow-2xl mt-2 overflow-hidden text-left max-h-60 overflow-y-auto">
                            ${filteredProducts.length > 0 ? filteredProducts.map(p => {
                                const needsInstall = productRequiresInstallation(p);
                                return `
                                <button type="button" onclick="window.addProductToCart('${p.id}')" class="p-4 hover:bg-slate-50 cursor-pointer flex justify-between items-center text-left w-full border-b border-slate-50">
                                    <div class="text-left flex-1">
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <h4 class="text-xs font-black text-slate-900 text-left">${p.name}</h4>
                                            ${needsInstall ? `
                                                <span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase flex items-center gap-0.5">
                                                    <span class="material-icons-outlined text-[10px]">build</span> Install
                                                </span>
                                            ` : ''}
                                        </div>
                                        <p class="text-[9px] font-bold text-slate-400 uppercase text-left">${p.brand} • ${p.category}</p>
                                    </div>
                                    <p class="text-xs font-black text-slate-900 text-right ml-2">₹${p.mop?.toLocaleString() || 0}</p>
                                </button>
                            `}).join('') : '<p class="p-6 text-[10px] text-slate-300 font-black uppercase text-center">No products found</p>'}
                        </div>
                    ` : ''}
                </div>
            </section>

            <!-- Cart Section -->
            <section class="space-y-4 text-left">
                <div class="flex items-center justify-between text-left">
                    <h3 class="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left">
                        Cart (${activeCart.length})
                        ${installationCount > 0 ? `<span class="ml-2 text-slate-600">${installationCount} install</span>` : ''}
                    </h3>
                    <button type="button" onclick="window.clearCart()" class="text-[9px] font-black text-slate-900 uppercase tracking-widest border-b-2 border-slate-900">Clear All</button>
                </div>
                
                <div class="space-y-3 text-left">
                    ${activeCart.map((item, idx) => `
                        <div class="card overflow-hidden ${item.installation_required ? 'border-slate-300' : ''}" data-cart-item="${idx}">
                            <div class="p-4 flex items-center gap-4 text-left">
                                <div class="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shadow-inner text-left shrink-0">
                                    <span class="material-icons-outlined text-xl text-slate-300 text-left">${item.installation_required ? 'home_repair_service' : 'devices'}</span>
                                </div>
                                <div class="flex-1 text-left min-w-0">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <h4 class="text-sm font-black text-slate-900 text-left truncate">${item.name}</h4>
                                        ${item.installation_required ? `
                                            <span class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[7px] font-black uppercase flex items-center gap-0.5 shrink-0">
                                                <span class="material-icons-outlined text-[10px]">build</span> Install
                                            </span>
                                        ` : ''}
                                    </div>
                                    <p class="text-[9px] font-bold text-slate-400 uppercase text-left">${item.category}</p>
                                </div>
                                <div class="text-right shrink-0">
                                    ${item.discount_amount > 0 ? `
                                        <p class="text-[9px] font-bold text-slate-400 line-through text-right">₹${item.mop?.toLocaleString() || 0}</p>
                                        <p class="text-xs font-black text-right">₹${item.final_price?.toLocaleString() || 0}</p>
                                    ` : `
                                        <p class="text-xs font-black text-right">₹${item.mop?.toLocaleString() || 0}</p>
                                    `}
                                    <button type="button" onclick="window.removeFromCart(${idx})" class="text-[8px] font-black text-slate-400 uppercase text-right hover:text-slate-900">Remove</button>
                                </div>
                            </div>
                            
                            <!-- Discount Badge (if applied) -->
                            ${item.discount_amount > 0 ? `
                                <div class="px-4 py-2 bg-slate-900 text-white flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <span class="material-icons-outlined text-sm">local_offer</span>
                                        <span class="text-[9px] font-black uppercase">
                                            ${item.discount_type === 'scheme' ? item.scheme_name : `Store Discount (${item.discount_value}%)`}
                                        </span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="text-[10px] font-black">-₹${item.discount_amount.toLocaleString()}</span>
                                        <button type="button" onclick="window.clearItemDiscount(${idx})" class="text-white/60 hover:text-white">
                                            <span class="material-icons-outlined text-sm">close</span>
                                        </button>
                                    </div>
                                </div>
                            ` : ''}
                            
                            <!-- Discount Toggle -->
                            <button type="button" onclick="window.toggleCartItemDiscount(${idx})" class="w-full px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-2 text-[9px] font-black ${item.discount_amount > 0 ? 'text-slate-900' : 'text-slate-500'} uppercase hover:bg-slate-100 transition-all">
                                <span class="material-icons-outlined text-sm">${item.showDiscount ? 'expand_less' : 'local_offer'}</span>
                                ${item.showDiscount ? 'Hide Discount' : (item.discount_amount > 0 ? 'Change Discount' : 'Add Discount')}
                            </button>
                            
                            ${item.showDiscount ? `
                                <div class="p-4 bg-slate-50 border-t border-slate-100 space-y-4">
                                    <!-- Store Discount -->
                                    <div>
                                        <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Store Discount (%)</label>
                                        <div class="flex gap-2">
                                            ${[5, 10, 15, 20].map(pct => `
                                                <button type="button" onclick="window.applyStoreDiscount(${idx}, ${pct})" class="flex-1 py-2 ${item.discount_type === 'store' && item.discount_value === pct ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-600'} rounded-lg text-[10px] font-black hover:bg-slate-800 hover:text-white transition-all">
                                                    ${pct}%
                                                </button>
                                            `).join('')}
                                            <input type="number" placeholder="Other" min="1" max="100" onchange="window.applyStoreDiscount(${idx}, this.value)" class="w-16 px-2 py-2 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-center focus:outline-none focus:border-slate-900">
                                        </div>
                                    </div>
                                    
                                    <!-- Scheme Discounts -->
                                    ${(item.applicableSchemes && item.applicableSchemes.length > 0) ? `
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Brand Schemes</label>
                                            <div class="space-y-2">
                                                ${item.applicableSchemes.map(scheme => `
                                                    <button type="button" onclick="window.applySchemeDiscount(${idx}, '${scheme.id}')" class="w-full p-3 ${item.scheme_id === scheme.id ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border border-slate-200 text-slate-700'} rounded-xl text-left flex items-center justify-between hover:border-slate-900 transition-all">
                                                        <div>
                                                            <p class="text-[10px] font-black">${scheme.name}</p>
                                                            <p class="text-[8px] font-bold ${item.scheme_id === scheme.id ? 'text-white/70' : 'text-slate-400'}">${scheme.brand}</p>
                                                        </div>
                                                        <span class="text-[10px] font-black ${item.scheme_id === scheme.id ? 'text-white' : 'text-slate-900'}">
                                                            ${scheme.discount_type === 'percentage' ? `${scheme.discount_value}%` : `₹${scheme.discount_value.toLocaleString()}`} OFF
                                                        </span>
                                                    </button>
                                                `).join('')}
                                            </div>
                                        </div>
                                    ` : `
                                        <div class="text-center py-3 opacity-50">
                                            <p class="text-[9px] font-bold text-slate-400">No brand schemes available for this product</p>
                                        </div>
                                    `}
                                </div>
                            ` : ''}
                            
                            <!-- Installation Date (for products requiring installation) -->
                            ${item.installation_required ? `
                                <div class="px-4 py-3 bg-slate-50 border-t border-slate-200 flex items-center gap-3">
                                    <span class="material-icons-outlined text-slate-500 text-sm">event</span>
                                    <div class="flex-1">
                                        <label class="text-[8px] font-black text-slate-600 uppercase tracking-widest block mb-1">Installation Date</label>
                                        <input type="date" value="${item.installation_date || ''}" onchange="window.updateItemInstallationDate(${idx}, this.value)" min="${new Date().toISOString().split('T')[0]}" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                    </div>
                                    <button type="button" onclick="window.toggleItemInstallation(${idx})" class="text-[8px] font-black text-slate-400 uppercase hover:text-slate-600" title="Disable installation">
                                        <span class="material-icons-outlined text-sm">close</span>
                                    </button>
                                </div>
                            ` : ''}
                            
                            <!-- Device Details Toggle -->
                            <button type="button" onclick="window.toggleCartItemDetails(${idx})" class="w-full px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-2 text-[9px] font-black text-slate-500 uppercase hover:bg-slate-100 transition-all">
                                <span class="material-icons-outlined text-sm">${item.showDetails ? 'expand_less' : 'expand_more'}</span>
                                ${item.showDetails ? 'Hide' : 'Add'} Device Details
                            </button>
                            
                            ${item.showDetails ? `
                                <div class="p-4 bg-slate-50 border-t border-slate-100 space-y-3">
                                    <!-- AI Scan Button (Mobile Only) -->
                                    <button type="button" onclick="window.captureDeviceImage(${idx})" class="w-full py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase flex items-center justify-center gap-2 hover:bg-slate-800 transition-all sm:hidden ${isProcessingImage ? 'opacity-50 cursor-not-allowed' : ''}" ${isProcessingImage ? 'disabled' : ''}>
                                        ${isProcessingImage ? `
                                            <span class="material-icons-outlined text-sm animate-spin">sync</span>
                                            <span id="ocr-progress-${idx}">${processingStatus || 'Analyzing...'}</span>
                                        ` : `
                                            <span class="material-icons-outlined text-sm">photo_camera</span>
                                            <span>Scan with AI</span>
                                        `}
                                    </button>
                                    
                                    <!-- Standard Fields -->
                                    <div class="grid grid-cols-2 gap-3">
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">IMEI Number</label>
                                            <input type="text" value="${item.imei || ''}" onchange="window.updateCartItemDetail(${idx}, 'imei', this.value)" placeholder="Enter IMEI" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                        </div>
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Serial Number</label>
                                            <input type="text" value="${item.serial_number || ''}" onchange="window.updateCartItemDetail(${idx}, 'serial_number', this.value)" placeholder="Enter Serial" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                        </div>
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">MAC ID</label>
                                            <input type="text" value="${item.mac_id || ''}" onchange="window.updateCartItemDetail(${idx}, 'mac_id', this.value)" placeholder="Enter MAC" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                        </div>
                                        <div>
                                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Mfg. Date</label>
                                            <input type="date" value="${item.manufacturing_date || ''}" onchange="window.updateCartItemDetail(${idx}, 'manufacturing_date', this.value)" class="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                        </div>
                                    </div>
                                    
                                    <!-- Dynamic Extra Fields (from AI or manually added) -->
                                    ${(item.extraFields && item.extraFields.length > 0) ? `
                                        <div class="pt-2 border-t border-slate-200">
                                            <div class="flex items-center justify-between mb-2">
                                                <span class="text-[8px] font-black text-slate-500 uppercase tracking-widest">Additional Fields</span>
                                            </div>
                                            <div class="grid grid-cols-2 gap-3">
                                                ${item.extraFields.map((field, fieldIdx) => `
                                                    <div class="relative">
                                                        <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">${field.label}</label>
                                                        <div class="flex gap-1">
                                                            <input type="${field.type || 'text'}" 
                                                                   value="${field.value || ''}" 
                                                                   onchange="window.updateCartItemExtraField(${idx}, ${fieldIdx}, this.value)" 
                                                                   placeholder="Enter ${field.label}"
                                                                   class="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                                                            <button type="button" onclick="window.removeExtraField(${idx}, ${fieldIdx})" class="w-8 h-8 flex items-center justify-center text-slate-300 hover:text-slate-600 hover:bg-slate-200 rounded-lg transition-all" title="Remove field">
                                                                <span class="material-icons-outlined text-sm">close</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        </div>
                                    ` : ''}
                                    
                                    <!-- Add Custom Field Button -->
                                    <button type="button" onclick="window.addCustomExtraField(${idx})" class="w-full py-2 border border-dashed border-slate-300 text-slate-500 rounded-lg text-[9px] font-black uppercase flex items-center justify-center gap-1 hover:bg-slate-100 transition-all">
                                        <span class="material-icons-outlined text-sm">add</span>
                                        Add Custom Field
                                    </button>
                                    
                                    <!-- Manual installation toggle for products that don't auto-require it -->
                                    ${!item.installation_required ? `
                                        <button type="button" onclick="window.toggleItemInstallation(${idx})" class="w-full py-2 border border-dashed border-slate-300 text-slate-500 rounded-lg text-[9px] font-black uppercase flex items-center justify-center gap-1 hover:bg-slate-100 transition-all">
                                            <span class="material-icons-outlined text-sm">build</span>
                                            Add Installation
                                        </button>
                                    ` : ''}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}

                    ${activeCart.length === 0 ? `
                        <div class="card p-12 border-dashed border-slate-200 flex flex-col items-center gap-3 bg-slate-50/20 text-center">
                            <span class="material-icons-outlined text-3xl text-slate-200 text-center">shopping_basket</span>
                            <span class="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] text-center">Cart is empty</span>
                        </div>
                    ` : ''}
                </div>
            </section>

            <!-- Action Buttons -->
            <div class="flex gap-3 pt-6 border-t border-slate-100 mt-6 text-left">
                <button type="button" onclick="window.saveDraft()" class="flex-1 py-4 border-2 border-slate-900 rounded-2xl text-[10px] font-black uppercase hover:bg-slate-50 transition-all text-center">Save Draft</button>
                <button type="button" id="complete-txn-btn" onclick="window.openPaymentModal()" class="flex-[2] py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-center">
                    Complete (₹${total.toLocaleString()})
                    <span class="material-icons-outlined text-sm text-center">arrow_forward</span>
                </button>
            </div>
        </div>

        <!-- Payment Modal -->
        ${showPaymentModal ? `
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
                            <button type="button" onclick="window.selectPaymentMode('cash')" class="p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${selectedPaymentMode === 'cash' ? 'border-slate-900 bg-slate-50' : 'border-slate-100 hover:border-slate-300'}">
                                <span class="material-icons-outlined text-2xl ${selectedPaymentMode === 'cash' ? 'text-slate-900' : 'text-slate-400'}">payments</span>
                                <span class="text-[10px] font-black uppercase ${selectedPaymentMode === 'cash' ? 'text-slate-900' : 'text-slate-500'}">Cash</span>
                            </button>
                            <button type="button" onclick="window.selectPaymentMode('card')" class="p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${selectedPaymentMode === 'card' ? 'border-slate-900 bg-slate-50' : 'border-slate-100 hover:border-slate-300'}">
                                <span class="material-icons-outlined text-2xl ${selectedPaymentMode === 'card' ? 'text-slate-900' : 'text-slate-400'}">credit_card</span>
                                <span class="text-[10px] font-black uppercase ${selectedPaymentMode === 'card' ? 'text-slate-900' : 'text-slate-500'}">Card</span>
                            </button>
                            <button type="button" onclick="window.selectPaymentMode('upi')" class="p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all ${selectedPaymentMode === 'upi' ? 'border-slate-900 bg-slate-50' : 'border-slate-100 hover:border-slate-300'}">
                                <span class="material-icons-outlined text-2xl ${selectedPaymentMode === 'upi' ? 'text-slate-900' : 'text-slate-400'}">qr_code</span>
                                <span class="text-[10px] font-black uppercase ${selectedPaymentMode === 'upi' ? 'text-slate-900' : 'text-slate-500'}">UPI</span>
                            </button>
                        </div>

                        ${(selectedPaymentMode === 'card' || selectedPaymentMode === 'upi') ? `
                            <div>
                                <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">${selectedPaymentMode === 'card' ? 'Card Reference / Last 4 Digits' : 'UPI Transaction ID'}</label>
                                <input type="text" value="${paymentReference}" oninput="window.updatePaymentReference(this.value)" placeholder="${selectedPaymentMode === 'card' ? 'Enter reference' : 'Enter UPI ID'}" class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:outline-none focus:border-slate-900 transition-all">
                            </div>
                        ` : ''}

                        <div class="pt-4 border-t border-slate-100">
                            <div class="flex justify-between items-center mb-4">
                                <span class="text-xs font-bold text-slate-500 uppercase">Total Amount</span>
                                <span class="text-xl font-black text-slate-900">₹${total.toLocaleString()}</span>
                            </div>
                            <button type="button" onclick="window.confirmPayment()" class="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                                <span class="material-icons-outlined text-sm">check_circle</span>
                                Confirm Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ` : ''}
    `;
}

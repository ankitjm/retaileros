/**
 * WATI WhatsApp Business API Integration
 * All calls proxy through /api/whatsapp — no credentials in browser.
 */

function getToken() {
    return localStorage.getItem('retaileros_session_token');
}

async function apiPost(path, body) {
    const token = getToken();
    const response = await fetch(path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || `HTTP ${response.status}`);
    }

    return data;
}

/**
 * Format phone number for WhatsApp (remove +, spaces, etc.)
 */
function formatPhoneNumber(phone) {
    if (!phone) return null;
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 10 ? '91' + cleaned : cleaned;
}

/**
 * Send a session/text message via WATI
 */
export async function sendWhatsAppMessage(phone, message) {
    const formattedPhone = formatPhoneNumber(phone);

    if (!formattedPhone) {
        throw new Error('Invalid phone number');
    }

    try {
        return await apiPost('/api/whatsapp/send', { phone: formattedPhone, message });
    } catch (err) {
        console.error('WATI Send Error:', err);
        throw err;
    }
}

/**
 * Send a template message via WATI
 */
export async function sendTemplateMessage(phone, templateName, parameters = [], broadcastName = 'RetailerOS') {
    const formattedPhone = formatPhoneNumber(phone);

    if (!formattedPhone) {
        throw new Error('Invalid phone number');
    }

    try {
        return await apiPost('/api/whatsapp/template', {
            phone: formattedPhone,
            templateName,
            parameters,
            broadcastName
        });
    } catch (err) {
        console.error('WATI Template Error:', err);
        throw err;
    }
}

/**
 * Check if WATI is configured and working
 */
export async function testWatiConnection() {
    try {
        const response = await fetch((window._apiBase||'')+'/api/health');
        return response.ok;
    } catch {
        return false;
    }
}

// Expose to window for use in automation and inline handlers
window.sendWhatsAppMessage = sendWhatsAppMessage;
window.testWatiConnection = testWatiConnection;

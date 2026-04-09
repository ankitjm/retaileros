/**
 * WATI WhatsApp Business API Integration
 * Sends WhatsApp messages via WATI platform
 */

// WATI Configuration (temporary - should be in settings later)
const WATI_CONFIG = {
    endpoint: 'https://live-mt-server.wati.io/319917',
    token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im1hcmtldGluZ0BuZXN0ZXIuaW4iLCJuYW1laWQiOiJtYXJrZXRpbmdAbmVzdGVyLmluIiwiZW1haWwiOiJtYXJrZXRpbmdAbmVzdGVyLmluIiwiYXV0aF90aW1lIjoiMDIvMTAvMjAyNSAwOTo1MDoxOSIsInRlbmFudF9pZCI6IjMxOTkxNyIsImp0aSI6ImFiNzBlNGU3LTAxNDUtNDg4NS1hYWU3LTQ3ZDc3YTA0NThhOSIsImRiX25hbWUiOiJtdC1wcm9kLVRlbmFudHMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBRE1JTklTVFJBVE9SIiwiZXhwIjoyNTM0MDIzMDA4MDAsImlzcyI6IkNsYXJlX0FJIiwiYXVkIjoiQ2xhcmVfQUkifQ.V1k2oIW0iDKep9_zG9WpS62LVcgXxj7vAndigvmZS2I'
};

/**
 * Format phone number for WhatsApp (remove +, spaces, etc.)
 * @param {string} phone - Phone number in any format
 * @returns {string} - Formatted phone number (e.g., 919876543210)
 */
function formatPhoneNumber(phone) {
    if (!phone) return null;
    // Remove all non-digits
    let cleaned = phone.replace(/\D/g, '');
    // Add India country code if not present
    if (cleaned.length === 10) {
        cleaned = '91' + cleaned;
    }
    return cleaned;
}

/**
 * Send a session/text message via WATI
 * @param {string} phone - Customer phone number
 * @param {string} message - Message content
 * @returns {Promise<object>} - API response
 */
export async function sendWhatsAppMessage(phone, message) {
    const formattedPhone = formatPhoneNumber(phone);
    
    if (!formattedPhone) {
        throw new Error('Invalid phone number');
    }
    
    try {
        const response = await fetch(`${WATI_CONFIG.endpoint}/api/v1/sendSessionMessage/${formattedPhone}`, {
            method: 'POST',
            headers: {
                'Authorization': WATI_CONFIG.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messageText: message
            })
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            console.error('WATI API Error:', data);
            // If session message fails, try template message
            if (data.message?.includes('session') || data.result === false) {
                console.log('Session expired, trying template message...');
                return await sendTemplateMessage(formattedPhone, message);
            }
            throw new Error(data.message || 'Failed to send message');
        }
        
        return { success: true, data };
        
    } catch (err) {
        console.error('WATI Send Error:', err);
        throw err;
    }
}

/**
 * Send a template message via WATI (for when session is expired)
 * @param {string} phone - Customer phone number (formatted)
 * @param {string} message - Message content (will be used as parameter)
 * @returns {Promise<object>} - API response
 */
async function sendTemplateMessage(phone, message) {
    try {
        // Try sending as a basic template (you may need to configure this in WATI)
        const response = await fetch(`${WATI_CONFIG.endpoint}/api/v1/sendTemplateMessage`, {
            method: 'POST',
            headers: {
                'Authorization': WATI_CONFIG.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                whatsappNumber: phone,
                templateName: 'retaileros_notification', // Configure this template in WATI
                parameters: [
                    { name: 'message', value: message }
                ],
                broadcast_name: 'RetailerOS'
            })
        });
        
        const data = await response.json();
        
        if (!response.ok && data.result === false) {
            // Template doesn't exist, fall back to interactive message
            console.log('Template not found, trying interactive message...');
            return await sendInteractiveMessage(phone, message);
        }
        
        return { success: true, data, method: 'template' };
        
    } catch (err) {
        console.error('Template message error:', err);
        throw err;
    }
}

/**
 * Send an interactive message via WATI
 * @param {string} phone - Customer phone number (formatted)
 * @param {string} message - Message content
 * @returns {Promise<object>} - API response
 */
async function sendInteractiveMessage(phone, message) {
    try {
        const response = await fetch(`${WATI_CONFIG.endpoint}/api/v1/sendInteractiveButtonsMessage`, {
            method: 'POST',
            headers: {
                'Authorization': WATI_CONFIG.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                whatsappNumber: phone,
                header: {
                    type: 'Text',
                    text: 'RetailerOS'
                },
                body: message,
                footer: 'Powered by RetailerOS',
                buttons: [
                    {
                        type: 'reply',
                        reply: {
                            id: 'reply_ok',
                            title: 'OK'
                        }
                    }
                ]
            })
        });
        
        const data = await response.json();
        return { success: response.ok, data, method: 'interactive' };
        
    } catch (err) {
        console.error('Interactive message error:', err);
        throw err;
    }
}

/**
 * Get WATI contact info
 * @param {string} phone - Customer phone number
 * @returns {Promise<object>} - Contact info
 */
export async function getContactInfo(phone) {
    const formattedPhone = formatPhoneNumber(phone);
    
    try {
        const response = await fetch(`${WATI_CONFIG.endpoint}/api/v1/getContact/${formattedPhone}`, {
            method: 'GET',
            headers: {
                'Authorization': WATI_CONFIG.token
            }
        });
        
        return await response.json();
        
    } catch (err) {
        console.error('Get contact error:', err);
        return null;
    }
}

/**
 * Check if WATI is configured and working
 * @returns {Promise<boolean>}
 */
export async function testWatiConnection() {
    try {
        const response = await fetch(`${WATI_CONFIG.endpoint}/api/v1/getContacts?pageSize=1`, {
            method: 'GET',
            headers: {
                'Authorization': WATI_CONFIG.token
            }
        });
        
        return response.ok;
        
    } catch (err) {
        console.error('WATI connection test failed:', err);
        return false;
    }
}

// Expose to window for use in automation
window.sendWhatsAppMessage = sendWhatsAppMessage;
window.testWatiConnection = testWatiConnection;

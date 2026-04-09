import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

function getConfig() {
    return {
        endpoint: process.env.WATI_ENDPOINT,
        token: process.env.WATI_TOKEN
    };
}

function formatPhone(phone) {
    const digits = phone.replace(/\D/g, '');
    return digits.length === 10 ? '91' + digits : digits;
}

/**
 * POST /api/whatsapp/send
 * { phone, message }
 * Send a session/text message via WATI
 */
router.post('/send', requireAuth, async (req, res) => {
    const { phone, message } = req.body;

    if (!phone || !message) {
        return res.status(400).json({ error: 'phone and message are required' });
    }

    const { endpoint, token } = getConfig();
    if (!endpoint || !token) {
        return res.status(503).json({ error: 'WhatsApp not configured' });
    }

    const formattedPhone = formatPhone(phone);

    try {
        const response = await fetch(`${endpoint}/api/v1/sendSessionMessage/${formattedPhone}`, {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ messageText: message })
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({ error: data.message || 'WATI error', data });
        }

        res.json({ success: true, data });
    } catch (err) {
        console.error('[WhatsApp Send Error]', err.message);
        res.status(502).json({ error: err.message });
    }
});

/**
 * POST /api/whatsapp/template
 * { phone, templateName, parameters: [{ name, value }], broadcastName? }
 * Send a WATI template message
 */
router.post('/template', requireAuth, async (req, res) => {
    const { phone, templateName, parameters = [], broadcastName = 'RetailerOS' } = req.body;

    if (!phone || !templateName) {
        return res.status(400).json({ error: 'phone and templateName are required' });
    }

    const { endpoint, token } = getConfig();
    if (!endpoint || !token) {
        return res.status(503).json({ error: 'WhatsApp not configured' });
    }

    const formattedPhone = formatPhone(phone);

    try {
        const response = await fetch(`${endpoint}/api/v1/sendTemplateMessage`, {
            method: 'POST',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                whatsappNumber: formattedPhone,
                templateName,
                broadcast_name: broadcastName,
                parameters
            })
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({ error: data.message || 'WATI error', data });
        }

        res.json({ success: true, data });
    } catch (err) {
        console.error('[WhatsApp Template Error]', err.message);
        res.status(502).json({ error: err.message });
    }
});

export { router as whatsappRouter };

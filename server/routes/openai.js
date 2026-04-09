import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

/**
 * POST /api/openai/generate
 * { prompt, size?, quality?, n? }
 * Generate image via DALL-E 3
 */
router.post('/generate', requireAuth, async (req, res) => {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
        return res.status(503).json({ error: 'OpenAI not configured' });
    }

    const {
        prompt,
        size = '1024x1024',
        quality = 'standard',
        n = 1
    } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'prompt is required' });
    }

    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'dall-e-3',
                prompt,
                size,
                quality,
                n
            })
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({ error: data.error?.message || 'OpenAI error' });
        }

        res.json(data);
    } catch (err) {
        console.error('[OpenAI Generate Error]', err.message);
        res.status(502).json({ error: err.message });
    }
});

/**
 * POST /api/openai/vision
 * { prompt, imageUrl?, imageBase64? }
 * Analyse image via GPT-4 Vision
 */
router.post('/vision', requireAuth, async (req, res) => {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
        return res.status(503).json({ error: 'OpenAI not configured' });
    }

    const { prompt, imageUrl, imageBase64 } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'prompt is required' });
    }

    const imageContent = imageUrl
        ? { type: 'image_url', image_url: { url: imageUrl } }
        : imageBase64
            ? { type: 'image_url', image_url: { url: imageBase64 } }
            : null;

    const messages = [
        {
            role: 'user',
            content: imageContent
                ? [{ type: 'text', text: prompt }, imageContent]
                : prompt
        }
    ];

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-4o',
                messages,
                max_tokens: 500
            })
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({ error: data.error?.message || 'OpenAI error' });
        }

        res.json({ text: data.choices[0]?.message?.content || '' });
    } catch (err) {
        console.error('[OpenAI Vision Error]', err.message);
        res.status(502).json({ error: err.message });
    }
});

export { router as openaiRouter };

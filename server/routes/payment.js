/**
 * RetailerOS Payment Routes — Razorpay (primary) + Stripe (fallback)
 *
 * Billing entity: Unhive Ventures LLP
 * Plans:
 *   quarterly — ₹14,999/quarter + 18% GST
 *   yearly    — ₹39,996/year (₹9,999/quarter × 4) + 18% GST
 *
 * Env vars required:
 *   RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET   — Razorpay credentials
 *   STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET — Stripe credentials (fallback)
 *   APP_BASE_URL — e.g. https://retaileros.in (for Stripe redirect URLs)
 */

import { Router } from 'express';
import { createHmac, randomUUID } from 'crypto';
import { pool } from '../db/client.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// ── Plan definitions ─────────────────────────────────────────────────────────

const PLANS = {
    quarterly: {
        id: 'quarterly',
        name: 'Quarterly Plan',
        description: 'Billed every 3 months. Cancel any time.',
        price_per_quarter: 14999,
        price_base: 14999,
        billing_months: 3,
        gst_rate: 18,
        currency: 'INR',
        savings: null,
    },
    yearly: {
        id: 'yearly',
        name: 'Annual Plan',
        description: 'Billed once per year. Save ₹19,000 vs quarterly.',
        price_per_quarter: 9999,
        price_base: 39996,   // 9999 × 4
        billing_months: 12,
        gst_rate: 18,
        currency: 'INR',
        savings: 19996,      // (14999 - 9999) × 4 quarters per year, roughly
    },
};

function calcGst(base, rate) {
    return Math.round(base * rate / 100 * 100) / 100;
}

function calcTotal(base, rate) {
    const gst = calcGst(base, rate);
    return Math.round((base + gst) * 100) / 100;
}

function planWithAmounts(plan) {
    const gst_amount = calcGst(plan.price_base, plan.gst_rate);
    const price_total = calcTotal(plan.price_base, plan.gst_rate);
    return { ...plan, gst_amount, price_total };
}

// ── GET /api/payment/plans — public ─────────────────────────────────────────

router.get('/plans', (req, res) => {
    res.json({ plans: Object.values(PLANS).map(planWithAmounts) });
});

// ── GET /api/payment/subscription — active sub for the logged-in retailer ───

router.get('/subscription', requireAuth, async (req, res) => {
    const result = await pool.query(
        `SELECT id, plan_id, status, billing_start, billing_end,
                invoice_number, amount_total, payment_provider, created_at
         FROM retailer_subscriptions
         WHERE retailer_id = $1 AND status = 'active'
         ORDER BY billing_end DESC
         LIMIT 1`,
        [req.retailer_id]
    );
    res.json({ subscription: result.rows[0] || null });
});

// ── POST /api/payment/create-order — create Razorpay order ──────────────────

router.post('/create-order', requireAuth, async (req, res) => {
    const { plan_id } = req.body;
    const plan = PLANS[plan_id];
    if (!plan) return res.status(400).json({ error: 'Invalid plan. Must be "quarterly" or "yearly".' });

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
        return res.status(503).json({ error: 'Payment gateway not configured. Please contact support.' });
    }

    const total = calcTotal(plan.price_base, plan.gst_rate);
    const amountPaise = Math.round(total * 100); // Razorpay uses paise

    let order;
    try {
        const { default: Razorpay } = await import('razorpay');
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        order = await razorpay.orders.create({
            amount: amountPaise,
            currency: 'INR',
            receipt: `ros_${req.retailer_id.slice(-8)}_${Date.now()}`,
            notes: { retailer_id: req.retailer_id, plan_id },
        });
    } catch (err) {
        console.error('[Payment] Razorpay order creation failed:', err.message);
        return res.status(502).json({ error: 'Failed to create payment order. Please try again.' });
    }

    // Persist pending subscription record
    const subId = randomUUID();
    await pool.query(
        `INSERT INTO retailer_subscriptions
         (id, retailer_id, plan_id, status, payment_provider, razorpay_order_id,
          amount_base, gst_amount, amount_total, currency)
         VALUES ($1, $2, $3, 'pending', 'razorpay', $4, $5, $6, $7, 'INR')`,
        [
            subId, req.retailer_id, plan_id, order.id,
            plan.price_base,
            calcGst(plan.price_base, plan.gst_rate),
            total,
        ]
    );

    res.json({
        order_id: order.id,
        amount: amountPaise,
        currency: 'INR',
        key_id: process.env.RAZORPAY_KEY_ID,
        subscription_id: subId,
        plan: planWithAmounts(plan),
    });
});

// ── POST /api/payment/verify — verify Razorpay payment signature ─────────────

router.post('/verify', requireAuth, async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, plan_id } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
        return res.status(400).json({ error: 'Missing payment verification fields' });
    }

    // Verify HMAC signature
    const hmac = createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const expectedSig = hmac.digest('hex');

    if (expectedSig !== razorpay_signature) {
        console.warn('[Payment] Signature mismatch for order:', razorpay_order_id);
        return res.status(400).json({ error: 'Payment verification failed — invalid signature' });
    }

    const plan = PLANS[plan_id];
    if (!plan) return res.status(400).json({ error: 'Invalid plan' });

    const now = new Date();
    const billingEnd = new Date(now);
    billingEnd.setMonth(billingEnd.getMonth() + plan.billing_months);

    const invoiceNum = await generateInvoiceNumber();

    const result = await pool.query(
        `UPDATE retailer_subscriptions
         SET status = 'active',
             razorpay_payment_id = $1,
             razorpay_signature = $2,
             invoice_number = $3,
             billing_start = $4,
             billing_end = $5,
             updated_at = NOW()::text
         WHERE razorpay_order_id = $6 AND retailer_id = $7
         RETURNING id, plan_id, invoice_number, billing_start, billing_end, amount_total`,
        [
            razorpay_payment_id, razorpay_signature,
            invoiceNum, now.toISOString(), billingEnd.toISOString(),
            razorpay_order_id, req.retailer_id,
        ]
    );

    if (!result.rows[0]) {
        return res.status(404).json({ error: 'Subscription record not found for this order' });
    }

    res.json({
        success: true,
        subscription: result.rows[0],
        invoice_number: invoiceNum,
    });
});

// ── POST /api/payment/create-stripe-session — Stripe fallback ───────────────

router.post('/create-stripe-session', requireAuth, async (req, res) => {
    const { plan_id } = req.body;
    const plan = PLANS[plan_id];
    if (!plan) return res.status(400).json({ error: 'Invalid plan' });

    if (!process.env.STRIPE_SECRET_KEY) {
        return res.status(503).json({ error: 'Stripe not configured. Please use Razorpay.' });
    }

    const total = calcTotal(plan.price_base, plan.gst_rate);
    const amountPaise = Math.round(total * 100);
    const baseUrl = process.env.APP_BASE_URL || 'https://retaileros.in';

    let session;
    try {
        const Stripe = (await import('stripe')).default;
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        session = await stripe.checkout.sessions.create({
            mode: 'payment',
            currency: 'inr',
            line_items: [{
                price_data: {
                    currency: 'inr',
                    unit_amount: amountPaise,
                    product_data: {
                        name: `RetailerOS — ${plan.name}`,
                        description: `${plan.description} | Billed by Unhive Ventures LLP | Incl. 18% GST`,
                    },
                },
                quantity: 1,
            }],
            metadata: { retailer_id: req.retailer_id, plan_id },
            success_url: `${baseUrl}/pay?stripe_success=1&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${baseUrl}/pay?stripe_cancelled=1`,
        });
    } catch (err) {
        console.error('[Payment] Stripe session creation failed:', err.message);
        return res.status(502).json({ error: 'Failed to create Stripe session. Please try Razorpay.' });
    }

    // Persist pending subscription record
    const subId = randomUUID();
    await pool.query(
        `INSERT INTO retailer_subscriptions
         (id, retailer_id, plan_id, status, payment_provider, stripe_session_id,
          amount_base, gst_amount, amount_total, currency)
         VALUES ($1, $2, $3, 'pending', 'stripe', $4, $5, $6, $7, 'INR')`,
        [
            subId, req.retailer_id, plan_id, session.id,
            plan.price_base,
            calcGst(plan.price_base, plan.gst_rate),
            total,
        ]
    );

    res.json({ checkout_url: session.url, subscription_id: subId });
});

// ── POST /api/payment/stripe-webhook — Stripe webhook handler ───────────────
// Mount this BEFORE express.json() in server — raw body needed for sig verification

router.post('/stripe-webhook', async (req, res) => {
    if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
        return res.status(503).send('Stripe not configured');
    }

    const sig = req.headers['stripe-signature'];
    let event;

    try {
        const Stripe = (await import('stripe')).default;
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        console.error('[Stripe webhook] Signature verification failed:', err.message);
        return res.status(400).send(`Webhook error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const { retailer_id, plan_id } = session.metadata;
        const plan = PLANS[plan_id];

        if (!plan || !retailer_id) {
            console.warn('[Stripe webhook] Missing metadata:', session.id);
            return res.json({ received: true });
        }

        const now = new Date();
        const billingEnd = new Date(now);
        billingEnd.setMonth(billingEnd.getMonth() + plan.billing_months);
        const invoiceNum = await generateInvoiceNumber();

        await pool.query(
            `UPDATE retailer_subscriptions
             SET status = 'active',
                 stripe_payment_intent = $1,
                 invoice_number = $2,
                 billing_start = $3,
                 billing_end = $4,
                 updated_at = NOW()::text
             WHERE stripe_session_id = $5 AND retailer_id = $6`,
            [
                session.payment_intent, invoiceNum,
                now.toISOString(), billingEnd.toISOString(),
                session.id, retailer_id,
            ]
        );

        console.log('[Stripe webhook] Subscription activated:', invoiceNum, 'for retailer:', retailer_id);
    }

    res.json({ received: true });
});

// ── GET /api/payment/invoice/:subscriptionId — GST invoice HTML ──────────────

router.get('/invoice/:subscriptionId', requireAuth, async (req, res) => {
    const result = await pool.query(
        `SELECT s.*, r.retailer_name, r.contact_person, r.email, r.mobile_number,
                r.city_name, r.state_name, r.gst_number, r.address
         FROM retailer_subscriptions s
         JOIN retailers r ON r.id = s.retailer_id
         WHERE s.id = $1 AND s.retailer_id = $2 AND s.status = 'active'`,
        [req.params.subscriptionId, req.retailer_id]
    );

    if (!result.rows[0]) return res.status(404).json({ error: 'Invoice not found' });

    const sub = result.rows[0];
    const plan = PLANS[sub.plan_id] || { name: sub.plan_id, billing_months: 3, description: '' };

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Content-Disposition', `inline; filename="invoice-${sub.invoice_number}.html"`);
    res.send(generateInvoiceHtml(sub, plan));
});

// ── Helpers ──────────────────────────────────────────────────────────────────

async function generateInvoiceNumber() {
    const year = new Date().getFullYear();
    const result = await pool.query(
        `SELECT COUNT(*) AS c FROM retailer_subscriptions WHERE invoice_number LIKE $1`,
        [`INV-${year}-%`]
    );
    const seq = (parseInt(result.rows[0].c, 10) + 1).toString().padStart(5, '0');
    return `INV-${year}-${seq}`;
}

function fmt(amount) {
    return (amount ?? 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function generateInvoiceHtml(sub, plan) {
    const invoiceDate = sub.created_at
        ? new Date(sub.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })
        : '-';
    const billingStart = sub.billing_start
        ? new Date(sub.billing_start).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
        : '-';
    const billingEnd = sub.billing_end
        ? new Date(sub.billing_end).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
        : '-';

    const customerName = sub.retailer_name || sub.contact_person || 'Valued Customer';

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Invoice ${sub.invoice_number} — RetailerOS</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', Arial, sans-serif; font-size: 13px; color: #1e293b; background: #f8fafc; }
  .page { max-width: 800px; margin: 40px auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; }
  .header { background: #0f172a; color: #fff; padding: 32px 40px; display: flex; justify-content: space-between; align-items: flex-start; }
  .company-name { font-size: 20px; font-weight: 800; letter-spacing: -0.5px; }
  .company-tagline { font-size: 11px; color: #94a3b8; margin-top: 4px; }
  .company-gst { font-size: 11px; color: #cbd5e1; margin-top: 12px; line-height: 1.6; }
  .invoice-title { font-size: 28px; font-weight: 800; color: #fff; text-align: right; letter-spacing: -1px; }
  .invoice-meta { text-align: right; margin-top: 8px; font-size: 12px; color: #94a3b8; line-height: 1.8; }
  .invoice-meta strong { color: #e2e8f0; }
  .body { padding: 32px 40px; }
  .bill-to { margin-bottom: 28px; }
  .label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; margin-bottom: 8px; }
  .bill-name { font-size: 15px; font-weight: 700; color: #0f172a; }
  .bill-detail { font-size: 12px; color: #64748b; line-height: 1.7; margin-top: 4px; }
  hr { border: none; border-top: 1px solid #e2e8f0; margin: 24px 0; }
  table { width: 100%; border-collapse: collapse; }
  thead tr { background: #0f172a; color: #fff; }
  th { padding: 10px 14px; text-align: left; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  th:last-child { text-align: right; }
  td { padding: 14px 14px; border-bottom: 1px solid #f1f5f9; vertical-align: top; }
  td:last-child { text-align: right; font-weight: 600; }
  .item-name { font-weight: 600; color: #0f172a; }
  .item-desc { font-size: 11px; color: #64748b; margin-top: 4px; }
  .totals { display: flex; justify-content: flex-end; margin-top: 20px; }
  .totals-table { width: 280px; }
  .totals-table td { border: none; padding: 5px 0; font-size: 13px; color: #475569; }
  .totals-table td:last-child { text-align: right; font-weight: 600; color: #1e293b; }
  .total-row td { font-size: 15px; font-weight: 800; color: #0f172a; padding-top: 12px; border-top: 2px solid #0f172a; }
  .payment-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin-top: 24px; font-size: 12px; }
  .payment-box .label { margin-bottom: 10px; }
  .payment-row { display: flex; justify-content: space-between; color: #64748b; margin-top: 5px; }
  .payment-row strong { color: #1e293b; }
  .footer { text-align: center; font-size: 10px; color: #94a3b8; padding: 20px 40px 28px; border-top: 1px solid #e2e8f0; line-height: 1.8; }
  .print-btn { display: block; margin: 24px auto 0; background: #0f172a; color: #fff; border: none; padding: 10px 28px; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer; }
  .print-btn:hover { background: #1e293b; }
  @media print {
    body { background: #fff; }
    .page { border: none; border-radius: 0; margin: 0; }
    .no-print { display: none !important; }
  }
</style>
</head>
<body>
<div class="page">
  <div class="header">
    <div>
      <div class="company-name">Unhive Ventures LLP</div>
      <div class="company-tagline">RetailerOS — Business Management Platform</div>
      <div class="company-gst">
        GSTIN: <strong style="color:#e2e8f0">To be updated</strong><br>
        SAC Code: 998314 (Computer Programming &amp; IT Services)<br>
        Bengaluru, Karnataka — 560001
      </div>
    </div>
    <div>
      <div class="invoice-title">TAX INVOICE</div>
      <div class="invoice-meta">
        Invoice No.: <strong>${sub.invoice_number}</strong><br>
        Date: <strong>${invoiceDate}</strong><br>
        Place of Supply: Karnataka (29)
      </div>
    </div>
  </div>

  <div class="body">
    <div class="bill-to">
      <div class="label">Bill To</div>
      <div class="bill-name">${customerName}</div>
      <div class="bill-detail">
        ${sub.address ? sub.address + '<br>' : ''}
        ${[sub.city_name, sub.state_name].filter(Boolean).join(', ')}<br>
        ${sub.email ? 'Email: ' + sub.email + '<br>' : ''}
        ${sub.mobile_number ? 'Mobile: ' + sub.mobile_number + '<br>' : ''}
        ${sub.gst_number ? '<strong>GSTIN: ' + sub.gst_number + '</strong>' : 'GSTIN: Not provided (Unregistered Dealer)'}
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th style="width:4%">#</th>
          <th>Description</th>
          <th style="width:10%">SAC</th>
          <th style="width:24%">Subscription Period</th>
          <th style="width:16%; text-align:right">Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <div class="item-name">RetailerOS — ${plan.name}</div>
            <div class="item-desc">${plan.description} · Cloud-based retail management platform<br>All modules included: Inventory, Sales, Billing, CRM, Analytics</div>
          </td>
          <td>998314</td>
          <td style="font-size:11px; color:#64748b;">${billingStart}<br>to ${billingEnd}</td>
          <td>₹${fmt(sub.amount_base)}</td>
        </tr>
      </tbody>
    </table>

    <div class="totals">
      <table class="totals-table">
        <tr>
          <td>Taxable Value</td>
          <td>₹${fmt(sub.amount_base)}</td>
        </tr>
        <tr>
          <td>IGST @ 18%</td>
          <td>₹${fmt(sub.gst_amount)}</td>
        </tr>
        <tr class="total-row">
          <td>Total Payable</td>
          <td>₹${fmt(sub.amount_total)}</td>
        </tr>
      </table>
    </div>

    <div class="payment-box">
      <div class="label">Payment Details</div>
      <div class="payment-row">
        <span>Payment Method</span>
        <strong>${sub.payment_provider === 'razorpay' ? 'Razorpay' : sub.payment_provider === 'stripe' ? 'Stripe' : '-'}</strong>
      </div>
      <div class="payment-row">
        <span>Payment Reference</span>
        <strong>${sub.razorpay_payment_id || sub.stripe_payment_intent || '-'}</strong>
      </div>
      <div class="payment-row">
        <span>Amount Paid</span>
        <strong>₹${fmt(sub.amount_total)}</strong>
      </div>
    </div>

    <hr>

    <div style="font-size:11px; color:#64748b; line-height:1.8;">
      <strong style="color:#1e293b;">Terms &amp; Notes:</strong><br>
      • This is a computer-generated invoice and does not require a physical signature.<br>
      • Services are provided on a SaaS basis. No refunds after subscription activation.<br>
      • For support: support@retaileros.in | For billing: billing@retaileros.in
    </div>
  </div>

  <div class="footer">
    Unhive Ventures LLP &nbsp;·&nbsp; RetailerOS &nbsp;·&nbsp; support@retaileros.in<br>
    This invoice is electronically generated and is legally valid under the Information Technology Act, 2000.
  </div>
</div>

<div class="no-print" style="text-align:center; padding: 24px;">
  <button class="print-btn" onclick="window.print()">⬇ Download / Print Invoice</button>
</div>
</body>
</html>`;
}

export { router as paymentRouter };

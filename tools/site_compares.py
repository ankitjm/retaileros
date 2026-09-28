# -*- coding: utf-8 -*-
"""
Comparison pages for the tools Indian electronics retailers actually use:
Tally, Marg, Zoho Books + Inventory, APX ERP. Merged into
site_content.COMPARES (see the bottom of site_content.py).

Same rules as site_content.py: every competitor claim was read on the vendor's
own site on the date in `source`; features absent from their pages are
"Not listed", never "No". Research notes with the exact URLs:
tools/research/compare-*.json. Re-check before changing any claim.

Claims about RetailerOS stay inside PRODUCT-DOCUMENT.md: scheme claims come
from scheme sales; warranty is tracked on the unit's IMEI/serial history.
"""
CHECKED = '28 September 2026'

TALLY = {
    'slug': 'tally-alternative', 'nav': 'RetailerOS vs Tally', 'vs': 'Tally',
    'title': 'RetailerOS vs Tally for Electronics Retail | RetailerOS',
    'desc': 'Tally is built for accountants; RetailerOS is built for the retail counter. Compare IMEI tracking, brand schemes, repairs, WhatsApp and pricing.',
    'h1': 'Tally is built for your accountant. <em>RetailerOS is built for your counter.</em>',
    'answer': 'TallyPrime is accounting software, and it is excellent at it: ledgers, GST returns filed from the software, e-invoicing and the books your CA works from. It was not built to run an electronics counter. Tally\'s own pages describe batch tracking, not IMEI or serial tracking — that comes from third-party add-ons — and there is no brand scheme or repair job card workflow. RetailerOS is built for that counter.',
    'cols': ['What you need', 'TallyPrime', 'RetailerOS'],
    'rows': [
        ('Built for<small>Where the software starts from</small>', 'P:Accounting', 'P:The counter'),
        ('GST invoicing, e-invoice, e-way bill', 'Y', 'Y'),
        ('GST returns filed from the software<small>GSTR-1, 3B, 2A/2B reconciliation</small>', 'Y', 'P:Summaries'),
        ('Ledgers, P&L, balance sheet', 'Y', 'P:Day book & ledgers'),
        ('IMEI / serial tracking<small>Per unit, purchase to warranty</small>', 'P:Third-party add-on', 'Y'),
        ('Brand scheme tracking & claims', 'P:Not listed', 'Y'),
        ('Repair job cards', 'P:Not listed', 'Y'),
        ('WhatsApp bills & reminders', 'P:Paid add-on', 'Y'),
        ('Several stores, one owner login', 'P:Godowns / branches', 'Y'),
        ('Runs in the browser & on phones', 'P:Desktop; cloud access extra', 'Y'),
        ('Starting price<small>excl. GST</small>', 'P:₹750/mo or ₹22,500 once', 'P:Free · ₹3,999/mo'),
    ],
    'them_good': [
        'Deep accounting and GST: returns filed from the software, 2A/2B reconciliation, e-invoicing, multi-GSTIN',
        'A one-time lifetime licence (₹22,500 Silver, ₹67,500 Gold, plus GST), with yearly renewal for updates',
        'Works offline on the desktop',
        'Nearly every CA in India already knows it',
    ],
    'us_more': [
        'IMEI and serial tracking built in — no add-on to buy and maintain',
        'Brand schemes tracked against targets, with claims built from the sales that earned them',
        'Repair and service job cards, from intake to handover',
        'WhatsApp receipts and follow-ups included in the plan',
        'Several stores from one owner login, in the browser and on phones',
        'Published per-store pricing, with a free plan',
    ],
    'who': [
        ('Choose Tally if', 'You mainly need books and GST returns, you sell few serialised items, and your counter is simple.'),
        ('Choose RetailerOS if', 'You sell phones, appliances or electronics by serial number and lose time on schemes or repairs.'),
        ('Many retailers use both', 'Their accountant stays on Tally for the books, and the counter runs on RetailerOS.'),
    ],
    'faqs': [
        ('Is RetailerOS a replacement for Tally?', 'For running the retail counter, yes: billing, stock, IMEI and serial tracking, schemes and repairs. For filing-grade accounts and GST returns, Tally is stronger, and many retailers keep their accountant on Tally for the books.'),
        ('Does Tally track IMEI numbers?', 'Tally\'s own pages describe batch tracking, not IMEI or serial tracking. Serial-number tracking for TallyPrime is sold by third-party add-on vendors. RetailerOS tracks every unit by IMEI or serial number as standard.'),
        ('Does Tally send bills on WhatsApp?', 'Yes, since TallyPrime 4.0, as a paid subscription (₹1,300 a year plus GST, plus Meta message charges) that needs an active Tally Software Services plan.'),
        ('How much does Tally cost?', 'TallyPrime Silver is ₹750 a month, ₹8,100 a year or ₹22,500 for a lifetime licence; Gold is ₹2,250 a month, ₹24,300 a year or ₹67,500 lifetime (all plus GST). A lifetime licence includes one year of updates; renewing costs ₹4,500 a year for Silver or ₹13,500 for Gold. Prices from Tally\'s site, checked 28 September 2026.'),
        ('Can I move my data from Tally to RetailerOS?', 'Yes. There is a step-by-step migration guide on the Resources page.'),
    ],
    'source': 'TallyPrime details from tallysolutions.com and help.tallysolutions.com (pricing, features, WhatsApp, batch tracking), checked ' + CHECKED + '. Third-party add-on: antraweb.com.',
    'chat': 'Comparing us with Tally? Most retailers keep Tally for the books and run the counter on RetailerOS. Happy to show you how on a short call.',
}

MARG = {
    'slug': 'marg-erp-alternative', 'nav': 'RetailerOS vs Marg', 'vs': 'Marg ERP',
    'title': 'RetailerOS vs Marg ERP for Mobile & Electronics Shops | RetailerOS',
    'desc': 'Marg ERP 9+ is desktop billing and accounting with IMEI tracking. RetailerOS adds brand scheme tracking, repair job cards and cloud multi-store.',
    'h1': 'Marg runs the books well. <em>RetailerOS runs the electronics counter.</em>',
    'answer': 'Marg ERP 9+ is installed billing and accounting software, strongest in pharmacy and FMCG, with a mobile-shop edition that tracks every handset by IMEI and serial number. It is sold as a one-time licence plus a yearly renewal. RetailerOS is cloud software built only for consumer electronics retail: it adds brand scheme tracking with claims, repair job cards and every store on one owner login.',
    'cols': ['What you need', 'Marg ERP 9+', 'RetailerOS'],
    'rows': [
        ('Built for<small>Where the software starts from</small>', 'P:Pharma & FMCG first', 'P:Electronics retail'),
        ('GST invoicing, e-invoice, e-way bill', 'Y', 'Y'),
        ('GST returns & full accounts', 'Y', 'P:Summaries'),
        ('IMEI / serial tracking', 'Y', 'Y'),
        ('Brand scheme tracking & claims<small>Samsung, Vivo, Oppo, appliance brands</small>', 'P:Not listed', 'Y'),
        ('Repair job cards', 'P:Not listed', 'Y'),
        ('WhatsApp bills', 'Y', 'Y'),
        ('Several stores', 'P:Branch sync, stock transfer', 'Y'),
        ('Where it runs', 'P:Windows desktop; cloud hosting extra', 'P:Browser & phones'),
        ('Pricing model<small>excl. GST</small>', 'P:Licence from ₹5,550 + yearly fee', 'P:Free · ₹3,999/mo'),
    ],
    'them_good': [
        'Full accounting and compliance in one package: GST returns, e-invoice, e-way bill, TDS/TCS, balance sheet',
        'IMEI and serial tracking with IMEI-wise sale reports',
        'A one-time licence — the Gold edition allows unlimited users',
        'A large local support network (850+ centres, per Marg)',
        'Ordering straight into a distributor\'s Marg system, where suppliers also use Marg',
    ],
    'us_more': [
        'Built only for consumer electronics retail, not adapted from pharmacy software',
        'Brand schemes tracked against targets, with claims from the sales that earned them',
        'Repair and service job cards, from intake to handover',
        'Cloud from day one: every store and the owner on one login, on any phone',
        'Pre-booking, WhatsApp automation and an online store in the same system',
        'Published monthly pricing, with a free plan and no licence to buy',
    ],
    'who': [
        ('Choose Marg if', 'You want installed software with deep accounting, a one-time licence and a local support centre nearby.'),
        ('Choose RetailerOS if', 'Brand schemes, repairs or running several stores are where your time and margin go.'),
        ('Moving from Marg', 'We bring your products, stock and customer balances over, and you can run both side by side for a week.'),
    ],
    'faqs': [
        ('Does Marg track IMEI numbers?', 'Yes. Marg\'s mobile-shop edition tracks handsets by IMEI and serial number and has an IMEI-wise sale report. RetailerOS does too, and adds brand scheme claims and repair job cards on the same unit history.'),
        ('How much does Marg ERP cost?', 'Marg ERP 9+ is a one-time licence — Nano ₹5,550, Basic ₹10,300, Silver ₹13,900, Gold ₹26,000 — plus a yearly charge (₹2,400 to ₹19,100 by edition), all plus GST. Hosting on Marg Cloud is extra per user. Marg notes final prices vary with requirements. Prices from Marg\'s price list, checked 28 September 2026.'),
        ('Is Marg cloud software?', 'Marg ERP 9+ is installed Windows software; Marg Cloud hosts it for an extra yearly fee per user. MargBooks is a separate cloud product with different plans. RetailerOS runs in the browser and on phones on every plan.'),
        ('Which is better for a mobile shop chain?', 'Marg suits owners who want installed software with strong accounting. RetailerOS suits chains that need every store on one live owner view, brand scheme tracking and repairs, without installing anything.'),
    ],
    'source': 'Marg details from margcompusoft.com (price list, mobile-shop pages, features, download) and care.margcompusoft.com, checked ' + CHECKED + '. Marg ERP 9+ and MargBooks are different products; this page compares Marg ERP 9+.',
    'chat': 'Comparing us with Marg? I can show you brand schemes and repairs on RetailerOS in 15 minutes.',
}

ZOHO = {
    'slug': 'zoho-books-inventory-alternative', 'nav': 'RetailerOS vs Zoho', 'vs': 'Zoho Books & Inventory',
    'title': 'RetailerOS vs Zoho Books & Inventory for Retail | RetailerOS',
    'desc': 'Zoho Books and Inventory are strong cloud accounting and stock tools for any business. RetailerOS is built for the electronics counter.',
    'h1': 'Zoho is built for every business. <em>RetailerOS is built for electronics retail.</em>',
    'answer': 'Zoho Books is cloud accounting with GST filing, and Zoho Inventory manages stock and orders; they share one account, and Zoho POS handles counter billing. Serial number tracking comes on higher plans. None of them is built for electronics retail: brand scheme tracking and repair job cards are not listed. RetailerOS puts the counter, IMEI tracking, schemes and repairs in one product.',
    'cols': ['What you need', 'Zoho Books + Inventory', 'RetailerOS'],
    'rows': [
        ('Built for<small>Where the software starts from</small>', 'P:Any business', 'P:Electronics retail'),
        ('GST invoicing, e-invoice, e-way bill', 'Y', 'Y'),
        ('GST returns filed from the software', 'Y', 'P:Summaries'),
        ('IMEI / serial tracking', 'P:From ₹2,299/mo (Inventory Premium)', 'Y'),
        ('Brand scheme tracking & claims', 'P:Not listed', 'Y'),
        ('Repair job cards', 'P:Not listed', 'Y'),
        ('WhatsApp bills & reminders', 'P:Paid message credits', 'Y'),
        ('Several stores', 'P:Locations & branches by plan', 'Y'),
        ('Online selling<small>Amazon, Shopify and more</small>', 'Y', 'P:Your own online store'),
        ('Products to buy', 'P:Books + Inventory (+ POS)', 'P:One'),
    ],
    'them_good': [
        'Compliance-grade cloud accounting: GSTR-1 filed to the portal, e-invoicing, P&L and balance sheet',
        'A genuinely free Books plan for businesses under ₹25 lakh a year',
        'Strong online selling: Amazon, Shopify, WooCommerce and 40+ couriers',
        'Books, Inventory, POS, CRM and more in one Zoho account',
    ],
    'us_more': [
        'One product for the whole electronics counter, instead of three to set up and connect',
        'IMEI and serial tracking on every paid plan',
        'Brand schemes tracked against targets, with claims from the sales that earned them',
        'Repair and service job cards, from intake to handover',
        'Pre-booking for launches and WhatsApp follow-up sequences built in',
        'Priced per store, with 3 staff logins included in each',
    ],
    'who': [
        ('Choose Zoho if', 'You sell a wide mix online and offline, need full cloud accounting, and do not deal in brand schemes or repairs.'),
        ('Choose RetailerOS if', 'You run a phone, appliance or electronics counter and want schemes, repairs and IMEI history in one system.'),
        ('Keep Zoho Books for the books', 'Some retailers keep their accounts in Zoho Books and run the counter on RetailerOS.'),
    ],
    'faqs': [
        ('Does Zoho track IMEI numbers?', 'Yes, as serial number tracking: in Zoho Inventory from the Premium plan (₹2,299 a month, billed yearly), in Zoho Books from the Elite plan (₹4,999), and in Zoho POS from Standard (₹649 per location). Prices from zoho.com/in, checked 28 September 2026, excluding GST.'),
        ('Does Zoho handle brand schemes or repairs?', 'Brand scheme claims and repair job cards are not listed on Zoho Books, Inventory or POS pages. RetailerOS includes both.'),
        ('How much does Zoho cost?', 'Zoho Books runs from free (under ₹25 lakh revenue) to ₹7,999 a month; Zoho Inventory from free to ₹7,499; Zoho POS from free to ₹2,099 per location — billed yearly, excluding GST. A retail counter usually needs two of them.'),
        ('Can I keep Zoho Books for accounts?', 'Yes. Many retailers keep their accountant on their existing books and run the counter on RetailerOS.'),
    ],
    'source': 'Zoho details from zoho.com/in (Books, Inventory and POS pricing, feature and help pages), checked ' + CHECKED + '.',
    'chat': 'Comparing us with Zoho? I can show you how one system handles your counter, schemes and repairs.',
}

APX = {
    'slug': 'apx-erp-alternative', 'nav': 'RetailerOS vs APX', 'vs': 'APX ERP',
    'title': 'RetailerOS vs APX ERP for Mobile Retail | RetailerOS',
    'desc': 'APX ERP runs some of India\'s largest mobile chains as a custom ERP. RetailerOS is published-price software for single stores and growing chains.',
    'h1': 'APX is an ERP for the largest chains. <em>RetailerOS is ready for yours today.</em>',
    'answer': 'APX ERP from APX Solution, Chennai (apxsolution.in), is a full retail and distribution ERP used by several of India\'s largest mobile chains. It has IMEI tracking, a schemes, targets and claims module, service handling and full accounts, sold through tailored implementations with no published prices. RetailerOS is ready-to-use software with published per-store pricing, for single stores and growing chains.',
    'cols': ['What you need', 'APX ERP', 'RetailerOS'],
    'rows': [
        ('Built for<small>Where the software starts from</small>', 'P:Large chains & distribution', 'P:Stores & growing chains'),
        ('IMEI / serial tracking', 'Y', 'Y'),
        ('Brand schemes, targets & claims', 'Y', 'Y'),
        ('Service / repairs', 'Y', 'Y'),
        ('E-invoice & e-way bill', 'Y', 'Y'),
        ('Full accounts<small>ledgers, bank reconciliation, statements</small>', 'Y', 'P:Summaries'),
        ('Dealer & distributor management', 'Y', 'P:Not included'),
        ('WhatsApp receipts & follow-up sequences', 'P:Bulk WhatsApp listed', 'Y'),
        ('Pre-booking & online store', 'P:Not listed', 'Y'),
        ('Pricing', 'P:On request', 'P:Published · free plan'),
        ('Getting started', 'P:Tailored implementation', 'P:Sign up and bill today'),
    ],
    'them_good': [
        'A long track record with very large mobile chains, some with hundreds of stores',
        'A full ERP: schemes and claims, approvals, dealer and distributor management, full accounts',
        'Consumer-finance and device-protection partnerships that matter to phone retailers',
        'Implementation tailored to each client',
    ],
    'us_more': [
        'Published prices — ₹3,999 a month for Shop, ₹7,499 for Pro, and ₹3,499 for each store you add',
        'Start the same day: sign up, add products and bill, with a free plan to try it',
        'WhatsApp receipts and automated follow-up sequences after every sale',
        'Pre-booking for launches, AI marketing creatives and an online store',
        'Built for a single counter as much as for a chain of fifty',
    ],
    'who': [
        ('Choose APX if', 'You run a very large chain — a hundred stores or more — with distribution, and want a custom ERP implementation.'),
        ('Choose RetailerOS if', 'You run one store or a growing chain and want electronics-retail software you can start on today, at a known price.'),
        ('Growing into a chain', 'RetailerOS Pro adds each new store at ₹3,499 a month, with its stock, staff and cash from day one.'),
    ],
    'faqs': [
        ('Who uses APX ERP?', 'APX ERP is made by APX Solution, Chennai (apxsolution.in). Its client list includes several of India\'s largest mobile retail chains, many running 100 or more stores.'),
        ('How much does APX ERP cost?', 'APX does not publish prices; its site offers a "Get Price" enquiry and tailored implementations. RetailerOS prices are published: free for 50 bills a month, ₹3,999 a month for Shop, and ₹7,499 for the first Pro store plus ₹3,499 for each additional store.'),
        ('Does APX track schemes and IMEI numbers?', 'Yes. APX lists IMEI and serial tracking and a "Schemes, Targets & Incentives" module covering schemes, claims and credit notes. RetailerOS includes IMEI tracking, schemes against brand targets and scheme claims too.'),
        ('Which should a 10-store chain choose?', 'If you want a custom ERP with distribution and full accounts, talk to APX. If you want to be live this week at a published price, with every store on one owner login, RetailerOS Pro is built for that.'),
    ],
    'source': 'APX details from apxsolution.in (ERP modules, clients, partners, about) and its Google Play listing, checked ' + CHECKED + '.',
    'chat': 'Comparing us with APX? I can show you RetailerOS Pro on your own store count in 15 minutes.',
}

# APX ERP (apxsolution.in) — confirmed by Ankit 28 September 2026.
APX_CONFIRMED = True
NEW_ORDER = ['tally-alternative', 'marg-erp-alternative', 'zoho-books-inventory-alternative'] + (['apx-erp-alternative'] if APX_CONFIRMED else []) + [
             'vyapar-alternative', 'paper-register-and-excel', 'retaileros-ai']

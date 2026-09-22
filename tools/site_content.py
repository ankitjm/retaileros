# -*- coding: utf-8 -*-
"""
Page content for the generated retaileros.in pages.

RULES FOR EDITING — these are why the pages are safe to publish:
  * Claims about RetailerOS must match a module description on the homepage.
    Do NOT claim: offline mode, inter-store stock transfers, Tally sync, or the
    homepage's "4.8 rating" / "1,000+ retailers" — none are verified.
  * Claims about a named competitor must be checked against that competitor's
    own site, and dated. Use "Not listed" (not "No") when a feature is simply
    absent from their page: absence from a web page is not proof of absence.
  * Used-phone buy-back is IN DEVELOPMENT. Always label it that way.
"""

VERIFIED = '22 September 2026'

# ── comparisons ──────────────────────────────────────────────
COMPARES = [
  {
    'slug': 'tally-alternative', 'nav': 'RetailerOS vs Tally', 'vs': 'Tally',
    'title': 'RetailerOS vs Tally for Electronics Retail | RetailerOS',
    'desc': 'Tally is built for accountants; RetailerOS is built for the retail counter. Compare IMEI and serial tracking, brand schemes, warranty claims and repair job cards.',
    'h1': 'Tally is built for your accountant. <em>RetailerOS is built for your counter.</em>',
    'answer': 'Tally is accounting software, and it is very good at it: ledgers, vouchers, GST returns and the books your CA works from. It was not built to run a retail counter. Tracking IMEI or serial numbers in TallyPrime needs a paid third-party add-on, and there is no built-in workflow for brand scheme claims, repair job cards or warranty claims. RetailerOS is built for exactly that counter, for consumer electronics retail.',
    'them_good': [
      'Deep accounting — ledgers, vouchers, balance sheet and profit and loss',
      'GST returns in the format most Indian CAs already know',
      'Licences from monthly through to a one-time perpetual licence',
      'Decades of trust: nearly every accountant in India can use it',
    ],
    'us_more': [
      'IMEI and serial tracking built in — no add-on to buy and maintain',
      'Brand scheme cashback reconciled instead of kept in a side spreadsheet',
      'Warranty claims filed and tracked through to settlement',
      'Repair and service job cards, from intake to handover',
      'Counter-first billing with receipts on WhatsApp',
      'Several stores from one login, each with its own stock, staff and cash',
    ],
    'cols': ['What you need', 'Tally', 'RetailerOS'],
    'rows': [
      ('Built for<small>Where the software starts from</small>', 'P:Accounting', 'P:The counter'),
      ('GST-compliant invoicing', 'Y', 'Y'),
      ('Ledgers and GST returns<small>Filing-grade books</small>', 'Y', 'P:Summaries'),
      ('IMEI / serial tracking<small>Per unit, purchase to warranty</small>', 'P:Paid add-on', 'Y'),
      ('Brand scheme reconciliation', 'P:Not built in', 'Y'),
      ('Warranty claim filing', 'P:Not built in', 'Y'),
      ('Repair job cards', 'P:Not built in', 'Y'),
      ('Customer khaata', 'Y', 'Y'),
    ],
    'who': [
      ('Choose Tally if', 'You mainly need books and GST returns, you sell few serialised items, and your counter is simple.'),
      ('Choose RetailerOS if', 'You sell phones, appliances or electronics by serial number and lose time on schemes, warranty claims or repairs.'),
      ('Many retailers use both', 'Their accountant stays on Tally for the books, and the counter runs on RetailerOS.'),
    ],
    'faqs': [
      ('Is RetailerOS a replacement for Tally?', 'For running the retail counter, yes: billing, stock, IMEI and serial tracking, schemes, warranty claims and repairs. For filing-grade accounts and GST returns, Tally is stronger. RetailerOS includes day books, ledgers and GST return summaries, and many retailers keep their accountant on Tally for the books.'),
      ('Does Tally track IMEI numbers?', 'Not out of the box. IMEI and serial number tracking in TallyPrime is available through paid third-party add-ons and customisation. RetailerOS tracks every unit by IMEI or serial number as a standard feature.'),
      ('Can I move my data from Tally to RetailerOS?', 'Yes. There is a step-by-step migration guide on the Resources page, and on the Chain plan the migration is done for you.'),
      ('How much does RetailerOS cost compared with Tally?', 'RetailerOS is a subscription: free for up to 50 bills a month, Rs 3,999 a month for one store, and Rs 7,499 a month for the first store on Chain plus Rs 3,499 for each additional store. Tally is licensed per user, from monthly to a one-time perpetual licence; check Tally or your reseller for current prices.'),
    ],
    'source': 'Tally details from public TallyPrime licensing and add-on information, checked %s.' % VERIFIED,
    'chat': 'Comparing us with Tally? Most retailers keep Tally for the books and run the counter on RetailerOS. Happy to show you how on a short call.',
  },
  {
    'slug': 'vyapar-alternative', 'nav': 'RetailerOS vs Vyapar', 'vs': 'Vyapar',
    'title': 'RetailerOS vs Vyapar for Mobile & Electronics Shops | RetailerOS',
    'desc': 'An honest comparison. Vyapar is low-cost billing that tracks IMEIs. RetailerOS adds brand scheme reconciliation, warranty claim filing, repair job cards and multi-store management.',
    'h1': 'RetailerOS vs Vyapar: <em>billing, or the whole store?</em>',
    'answer': 'Vyapar is good-value billing software. It starts at Rs 283 a month on annual billing, and it already tracks IMEI numbers and warranty periods, shares bills on WhatsApp and works offline. If billing is what you need, it is hard to beat on price. RetailerOS costs more because it runs the rest of an electronics retail business: it reconciles brand scheme cashback, files warranty claims through to settlement, runs repair job cards, and manages several stores from one login.',
    'them_good': [
      'Very low price — a free mobile plan, and paid plans from Rs 283 a month billed annually',
      'Tracks IMEI numbers and checks whether a product is in warranty',
      'Sends bills on WhatsApp, and notifications by SMS and email',
      'Works without internet and syncs when you are back online',
      'Runs on phones and computers at the same time',
    ],
    'us_more': [
      'Brand scheme cashback reconciled and queued for claiming',
      'Warranty claims filed and tracked to settlement — not just a coverage check',
      'Full repair job cards: intake, diagnosis, repair and handover',
      'Multi-store: per-store stock, staff, cash register and invoice numbering',
      'Pre-booking deposits for launch models',
      'A B2B marketplace for buying and selling stock with other dealers',
    ],
    'cols': ['What you need', 'Vyapar', 'RetailerOS'],
    'rows': [
      ('Starting price', 'P:Free · ₹283/mo', 'P:Free · ₹3,999/mo'),
      ('GST-compliant billing', 'Y', 'Y'),
      ('IMEI / serial tracking', 'Y', 'Y'),
      ('Warranty period check', 'Y', 'Y'),
      ('Bills on WhatsApp', 'Y', 'Y'),
      ('Warranty claim filing<small>Through to settlement</small>', 'P:Not listed', 'Y'),
      ('Brand scheme reconciliation', 'P:Not listed', 'Y'),
      ('Repair job cards<small>Intake to handover</small>', 'P:Service income', 'Y'),
      ('Multi-store management<small>Per-store stock, staff, cash</small>', 'P:Multi-device', 'Y'),
      ('Dealer marketplace', 'P:Not listed', 'Y'),
    ],
    'who': [
      ('Choose Vyapar if', 'You run one small shop, billing is the main job, and keeping cost as low as possible matters most.'),
      ('Choose RetailerOS if', 'Scheme cashback, warranty claims or repairs are costing you time or money, or you run more than one store.'),
      ('Not sure?', 'RetailerOS is free for up to 50 bills a month, so you can run both side by side before deciding.'),
    ],
    'faqs': [
      ('Does Vyapar track IMEI numbers?', 'Yes. Vyapar can store IMEI numbers for each phone and check warranty periods. RetailerOS does too; the difference is what happens next — RetailerOS files the warranty claim and tracks it to settlement, and reconciles brand scheme cashback.'),
      ('Why does RetailerOS cost more than Vyapar?', 'Vyapar focuses on billing, accounting and stock. RetailerOS runs the wider retail operation — scheme reconciliation, warranty claims, repair job cards, staff and multi-store management — which is where electronics retailers usually lose time or money.'),
      ('Can I move from Vyapar to RetailerOS?', 'Yes. Vyapar and spreadsheet imports are supported, and on the Chain plan the migration is done for you.'),
      ('Is there a free plan to try it?', 'Yes. RetailerOS is free for up to 50 bills a month, with no card needed, so you can try it alongside your current software.'),
    ],
    'source': 'Vyapar details from vyaparapp.in, checked %s. "Not listed" means the feature is not listed on Vyapar\'s mobile-shop page — check with Vyapar for their current plans. Vyapar prices are billed annually and exclude GST.' % VERIFIED,
    'chat': 'Comparing us with Vyapar? Honest answer: if you only need billing, Vyapar is cheaper. If schemes, warranty claims or repairs cost you time, let me show you the difference.',
  },
  {
    'slug': 'paper-register-and-excel', 'nav': 'vs paper & Excel', 'vs': 'paper and Excel',
    'title': 'Moving Your Shop from Paper Registers and Excel | RetailerOS',
    'desc': 'What a paper register and Excel quietly cost an electronics shop — missed scheme cashback, IMEI hunts and lost khaata entries — and how to move off them for free.',
    'h1': 'Still running the shop on <em>a register and Excel?</em>',
    'answer': 'A paper register and a spreadsheet cost nothing to start, but they cost an electronics shop every day: time spent hunting for an IMEI, scheme cashback that is never claimed because nobody reconciled it, and khaata balances that drift. RetailerOS replaces both, and it is free for up to 50 bills a month, so moving off paper costs nothing.',
    'them_good': [
      'No cost and nothing to learn',
      'Works with no power and no internet',
      'Everyone in the shop already knows how to use it',
    ],
    'us_more': [
      'Find any IMEI or serial number in seconds instead of turning pages',
      'Scheme cashback tracked so it is actually claimed',
      'Khaata balances that are always current, per customer',
      'Live stock count after every sale and purchase',
      'GST invoices produced automatically, not written out',
      'Receipts sent to the customer on WhatsApp',
    ],
    'cols': ['Daily job', 'Paper & Excel', 'RetailerOS'],
    'rows': [
      ('GST invoice', 'P:Written by hand', 'P:Automatic'),
      ('Find a handset by IMEI', 'P:Turn the pages', 'P:Seconds'),
      ('Scheme cashback', 'P:Often missed', 'P:Tracked'),
      ('Customer khaata', 'P:Easy to lose', 'P:Always current'),
      ('Stock count', 'P:Manual count', 'P:Live'),
      ('Cost to start', 'P:Free', 'P:Free'),
    ],
    'who': [
      ('Start on Free', '50 bills a month, the four core modules, and unlimited customer and IMEI history — free, forever.'),
      ('Move to Shop when you are busy', 'Rs 3,999 a month adds IMEI Tracker, Schemes, Repairs, Claims and reports.'),
      ('Keep the register if you like', 'Plenty of shops run both for a month until they trust the numbers.'),
    ],
    'faqs': [
      ('Is RetailerOS really free?', 'Yes. The Free plan covers 50 bills a month, one store and the four core modules — Sales Desk, Invoices, Inventory and Clients — with no card needed and no time limit.'),
      ('How long does it take to move off paper?', 'About ten minutes to set up the store. You can import existing stock and customers from a spreadsheet.'),
      ('Will my staff be able to use it?', 'Every screen has Hindi labels, and Marathi, Gujarati and Tamil are supported. Each staff member can pick their own language.'),
      ('What if we go over 50 bills a month?', 'Billing is never blocked. You can move to Shop, which covers 750 bills a month.'),
    ],
    'source': '',
    'chat': 'Moving off a paper register? It is free for up to 50 bills a month. I can help you get your stock and customers in.',
  },
  {
    'slug': 'retaileros-ai', 'nav': 'RetailerOS vs retaileros.ai', 'vs': 'retaileros.ai',
    'title': 'RetailerOS (retaileros.in) and retaileros.ai Are Different Companies | RetailerOS',
    'desc': 'RetailerOS at retaileros.in and retaileros.ai are separate companies with different products. Here is how to tell them apart.',
    'h1': 'retaileros.in and retaileros.ai are <em>different companies.</em>',
    'answer': 'RetailerOS at retaileros.in is built in India by Khosha Systems for consumer electronics retail, priced in rupees, with IMEI and serial tracking, GST invoicing, brand scheme reconciliation and warranty claims. retaileros.ai is a separate company offering point-of-sale software for general retail, priced in US dollars. The names are similar; the companies, products and customers are not.',
    'them_good': [
      'Point-of-sale for general retail — hardware, jewellery, liquor, pet, apparel and grocery',
      'Priced in US dollars, per store and per user',
      'Amazon and eBay marketplace listing',
    ],
    'us_more': [
      'Built in India for consumer electronics retail',
      'Priced in rupees, with GST-compliant invoicing',
      'IMEI and serial tracking on every unit',
      'Brand scheme reconciliation and warranty claim filing',
      'Hindi, Marathi, Gujarati and Tamil on every screen',
    ],
    'cols': ['', 'retaileros.ai', 'RetailerOS (retaileros.in)'],
    'rows': [
      ('Company', 'P:Separate company', 'P:Khosha Systems'),
      ('Built for', 'P:General retail', 'P:Electronics retail'),
      ('Priced in', 'P:US dollars', 'P:Indian rupees'),
      ('GST invoicing', 'P:Not listed', 'Y'),
      ('IMEI / serial tracking', 'P:Not listed', 'Y'),
      ('Brand scheme reconciliation', 'P:Not listed', 'Y'),
      ('Indian languages', 'P:Not listed', 'Y'),
      ('Amazon & eBay listing', 'Y', 'P:Dealer marketplace'),
    ],
    'who': [
      ('Looking for US point-of-sale software?', 'You want retaileros.ai. We are not affiliated with them.'),
      ('Running an electronics shop in India?', 'You are in the right place — RetailerOS at retaileros.in.'),
    ],
    'faqs': [
      ('Is RetailerOS the same as retaileros.ai?', 'No. RetailerOS at retaileros.in and retaileros.ai are separate, unaffiliated companies with different products.'),
      ('Which one is for Indian mobile and electronics shops?', 'RetailerOS at retaileros.in, built by Khosha Systems for Indian consumer electronics retail, with GST invoicing and IMEI and serial tracking.'),
      ('How do I reach the right company?', 'For RetailerOS in India, use retaileros.in or WhatsApp +91 88849 72272. For retaileros.ai, use their own website.'),
    ],
    'source': 'retaileros.ai details from their public website and pricing page, checked %s. "Not listed" means the feature is not listed on their site.' % VERIFIED,
    'chat': 'Looking for RetailerOS for an Indian electronics shop? You are in the right place. Want a quick walkthrough?',
  },
]

# ── solutions ────────────────────────────────────────────────
SOLUTIONS = [
  {
    'slug': 'mobile-phone-retail', 'nav': 'Mobile phone retail',
    'title': 'Mobile Shop Billing Software with IMEI Tracking | RetailerOS',
    'desc': 'Billing software for Indian mobile phone shops: GST bills, IMEI tracking on every handset, Vivo, Samsung and Oppo scheme reconciliation, warranty claims and repairs. Free for 50 bills a month.',
    'eyebrow': 'Mobile phone retail',
    'h1': 'Mobile shop software that <em>tracks every handset.</em>',
    'answer': 'RetailerOS runs a mobile phone counter end to end: GST bills in about 30 seconds, every handset tracked by IMEI from purchase to warranty, Vivo, Samsung and Oppo scheme cashback reconciled, warranty claims filed to settlement, repairs on job cards and customer khaata kept current. It is free for up to 50 bills a month.',
    'cards': [
      ('Bill in about 30 seconds', 'Scan the IMEI at the Sales Desk, take payment and print or WhatsApp the GST invoice.', ''),
      ('Every handset, by IMEI', 'Full chain of custody for each phone — who supplied it, who bought it, and its warranty.', ''),
      ('Scheme cashback, claimed', 'Vivo, Samsung and Oppo offers surface at billing, and cashback is queued for claiming.', ''),
      ('Warranty claims to settlement', 'File brand warranty claims and track each one until it is settled.', ''),
      ('Repairs on job cards', 'Intake, diagnosis, repair and handover, with the handset\'s IMEI history attached.', ''),
      ('Pre-bookings for launches', 'Take a deposit and hold a launch model for a customer before stock arrives.', ''),
      ('Customer khaata', 'A running credit ledger per customer, with purchase history alongside.', ''),
      ('Used-phone buy-back', 'Buy back, grade, price and resell second-hand phones with their full IMEI history.', 'In development'),
    ],
    'faqs': [
      ('Can I scan IMEI numbers while billing?', 'Yes. IMEIs are scanned at the Sales Desk during billing, and each one is added to that handset\'s chain of custody.'),
      ('Does RetailerOS handle Vivo, Samsung and Oppo schemes?', 'Yes. The Schemes module surfaces applicable brand and bank offers at billing and keeps cashback claims queued for reconciliation.'),
      ('Can I find which customer bought a particular phone?', 'Yes. Search the IMEI and you see the full history of that handset, including the sale.'),
      ('Does it handle used or second-hand phones?', 'A used-phone buy-back workflow is in development: buying from a customer, grading, pricing and reselling with the full IMEI history. It is not available yet.'),
      ('How much does it cost for a mobile shop?', 'Free for up to 50 bills a month. Shop is Rs 3,999 a month for one store and 750 bills. For two or more stores, Chain is Rs 7,499 a month for the first store plus Rs 3,499 for each additional store.'),
    ],
    'chat': 'Run a mobile shop? I can show you IMEI tracking and scheme reconciliation on a real counter in 15 minutes.',
  },
  {
    'slug': 'appliance-and-ac-dealers', 'nav': 'Appliance & AC dealers',
    'title': 'Billing Software for Appliance, AC & TV Dealers | RetailerOS',
    'desc': 'Serial number tracking, brand schemes and EMI offers, warranty claims and service job cards for Indian appliance, AC, refrigerator and TV dealers.',
    'eyebrow': 'Appliance, AC and TV dealers',
    'h1': 'Every AC, fridge and TV, <em>tracked by serial number.</em>',
    'answer': 'RetailerOS tracks every air conditioner, refrigerator, washing machine and television by serial number, from the day it arrives to the day its warranty ends. It surfaces brand and bank offers and EMIs at billing, reconciles scheme cashback, files warranty claims, and runs service and callout job cards — all on GST invoices.',
    'cards': [
      ('Serial number tracking', 'Each unit tracked individually, with full chain of custody from supplier to customer.', ''),
      ('Brand offers and EMIs', 'Applicable brand and bank offers and EMI options surface while the bill is being made.', ''),
      ('Scheme cashback reconciled', 'Cashback is queued for claiming instead of living in a side spreadsheet.', ''),
      ('Warranty claims', 'File brand warranty claims and track them to settlement.', ''),
      ('Service and callouts', 'Job cards for AC servicing and appliance callouts, from intake to handover.', ''),
      ('Customer credit', 'A running khaata for customers who pay in parts.', ''),
      ('Purchase orders', 'Vendor orders and goods-received notes, with stock updated on arrival.', ''),
      ('More than one showroom', 'Run every showroom from one login, each with its own stock, staff and cash.', ''),
    ],
    'faqs': [
      ('Can RetailerOS track serial numbers for appliances?', 'Yes. Air conditioners, refrigerators, washing machines, televisions and laptops are tracked by serial number in the same way handsets are tracked by IMEI.'),
      ('Does it show EMI and bank offers at billing?', 'Yes. The Schemes module surfaces applicable brand discounts, bank offers and EMI options while the bill is being created.'),
      ('Does it handle AC servicing?', 'Yes. The Repairs module runs job cards for repairs and service, including AC servicing and appliance callouts.'),
      ('Can I run several showrooms?', 'Yes, on the Chain plan: Rs 7,499 a month for the first store plus Rs 3,499 for each additional store, with a minimum of two.'),
    ],
    'chat': 'Sell ACs, fridges or TVs? I can show you serial tracking and warranty claims for appliances in 15 minutes.',
  },
  {
    'slug': 'multi-store-chains', 'nav': 'Multi-store chains',
    'title': 'Multi-Store Retail Software for Electronics Chains | RetailerOS',
    'desc': 'Run every store from one login. Per-store stock, staff, cash and invoice numbering, with one owner view. Rs 7,499 for the first store and Rs 3,499 for each additional store.',
    'eyebrow': 'Multi-store chains',
    'h1': 'Run every store <em>from one login.</em>',
    'answer': 'RetailerOS runs a chain of electronics stores from one owner login. Each store keeps its own stock, staff, cash register and invoice numbering, and you see all of them together. On the Chain plan the first store is Rs 7,499 a month and each additional store is Rs 3,499, with a minimum of two stores, and every store comes with 3 staff logins.',
    'cards': [
      ('One owner dashboard', 'Today\'s revenue, tasks and quick actions across every store, on one screen.', ''),
      ('Stock by location', 'Stock levels and movement kept separately for each store.', ''),
      ('Remote discount approval', 'Staff raise a discount request at the counter; you approve it from wherever you are.', ''),
      ('Staff by store', 'Profiles, attendance, shifts and commission, with roles set store by store.', ''),
      ('Cash close per counter', 'Each store opens and closes its own shifts, so a mismatch traces to one counter.', ''),
      ('Own invoice numbering', 'Taxes, invoice series and print templates configured per store.', ''),
      ('Compare stores', 'Sales trends and staff leaderboards show which store is pulling ahead.', ''),
      ('Cross-store IMEI search', 'Find any unit\'s history no matter which store took it in.', ''),
    ],
    'faqs': [
      ('Is there a minimum number of stores on Chain?', 'Yes. Chain needs a minimum of two stores: Rs 7,499 a month for the first store and Rs 3,499 for each additional store, so two stores is Rs 10,998 a month before any billing discount.'),
      ('Do I pay extra for staff logins?', 'No. Every store includes 3 staff logins, so a 15-store chain gets 45 logins. Extra logins are Rs 499 a month each, only if one store needs more than three.'),
      ('Can each store have its own invoice numbering?', 'Yes. Taxes, invoice numbering and print templates are store-level settings.'),
      ('Is there an upper limit on stores?', 'No. Chain has no cap. For rollouts across many cities, talk to us about a custom setup.'),
      ('Does the quarterly or annual discount apply to additional stores?', 'Yes. Quarterly billing saves 5% and annual billing saves 15% on the whole bill, including each additional store.'),
    ],
    'chat': 'Running more than one store? Tell me how many and I will give you the exact monthly figure.',
  },
  {
    'slug': 'repair-and-service-centres', 'nav': 'Repair & service centres',
    'title': 'Job Card Software for Repair & Service Centres | RetailerOS',
    'desc': 'Repair job cards from intake to handover, full device history by IMEI or serial number, and brand warranty claims tracked to settlement — for Indian repair and service centres.',
    'eyebrow': 'Repair and service centres',
    'h1': 'Repairs on job cards, <em>not on scraps of paper.</em>',
    'answer': 'RetailerOS runs repairs on job cards — device intake, diagnosis, repair and customer handover — with the device\'s full IMEI or serial history one search away and brand warranty claims filed and tracked to settlement. Service billing goes out on GST invoices, with the receipt on the customer\'s WhatsApp.',
    'cards': [
      ('Job cards', 'Intake, diagnosis, repair and delivery, so no device sits untracked on the bench.', ''),
      ('Device history', 'Search an IMEI or serial number to see the full history of that unit.', ''),
      ('Warranty claims', 'File brand warranty claims and track them through to settlement.', ''),
      ('Parts and purchasing', 'Stock levels, vendor orders and goods-received notes for spares.', ''),
      ('Service billing', 'GST invoices for service work, with receipts on WhatsApp.', ''),
      ('Customer records', 'Every customer\'s devices and repair history in one place.', ''),
    ],
    'faqs': [
      ('What does a repair job card track?', 'Each job card follows the device from intake through diagnosis and repair to handover to the customer.'),
      ('Can I see a device\'s past repairs?', 'Yes. Searching the IMEI or serial number shows that unit\'s full history.'),
      ('Does RetailerOS file warranty claims with brands?', 'Yes. The Claims module tracks brand warranty claims from filing to settlement.'),
      ('Which plan includes repairs?', 'Repairs and Claims are on the Shop plan, Rs 3,999 a month for one store, and on Chain.'),
    ],
    'chat': 'Run a repair or service centre? I can show you job cards and warranty claims in 15 minutes.',
  },
]

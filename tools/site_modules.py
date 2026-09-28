# -*- coding: utf-8 -*-
"""
Module landing pages: /modules/<slug>/ and the /modules/ hub.

RULES (same as site_content.py, plus):
- Describe only what the module does today. Anything not built yet gets
  status 'soon' and is shown as "Coming soon" — never as a current feature.
- Source of truth for behaviour: PRODUCT-DOCUMENT.md (module SOPs) and the
  owner. Last reviewed with the owner: 28 September 2026.
- `plan` must match the tier of the module in tools/site_pages.py MODULES.
- `answer` is the first paragraph on the page and the one answer engines lift:
  2-3 plain sentences that fully answer "what is <module> in RetailerOS?".
- `demo` picks an illustrated mock-up (see site_pages.module_demo()).
"""

PLAN = {'free': 'Free', 'shop': 'Shop', 'chain': 'Pro', 'soon': 'Coming soon'}

MODULE_PAGES = [
  {
    'slug': 'schemes', 'name': 'Schemes', 'plan': 'shop',
    'title': 'Brand Scheme Tracking for Electronics Retailers | RetailerOS',
    'desc': 'Track every Samsung, Vivo, Oppo and appliance brand scheme in one place: targets, incentive slabs, eligible sales and the claims you are owed.',
    'eyebrow': 'Schemes module',
    'h1': 'Every brand scheme, <em>tracked to the rupee.</em>',
    'answer': 'The Schemes module in RetailerOS keeps every brand and bank scheme you are running in one place — what it pays, which products it covers and how long it runs. It tracks your sales against each brand\'s target and incentive slab as you bill, and every sale made under a scheme becomes a claim you can follow until the brand pays.',
    'features': [
      ('One scheme catalogue', 'Flat or percentage payouts, eligible brands and categories, start and end dates, and the full eligibility terms for each scheme.', ''),
      ('Brand target tracker', 'Your sales against each brand\'s quarterly target, in rupees and in units, with the incentive slab you are on and how far you are from the next one.', ''),
      ('Applied at the counter', 'Pick the scheme on the bill; the discount lands on the invoice and the sale is tagged to the scheme automatically.', ''),
      ('Claims from real sales', 'Every scheme sale becomes a claim with product, IMEI or serial, scheme and amount — ready to file with the brand or distributor.', ''),
      ('Brand-wise summary', 'Active and completed schemes per brand, and the total payout still on the table.', ''),
      ('Nothing left unclaimed', 'See at a glance which claims are pending and which are settled, instead of reconciling a spreadsheet at quarter end.', ''),
    ],
    'steps': [
      ('Add the scheme', 'Brand, products, payout and dates — once, for every counter.'),
      ('Bill as usual', 'Choose the scheme on the sale; the discount and tag are applied.'),
      ('Watch the target', 'The tracker updates with every bill: green when you have hit it, amber when you are close.'),
      ('File the claim', 'Scheme sales roll up into claims you track until the money arrives.'),
    ],
    'demo': 'tracker',
    'examples': [
      ('Quarter-end push', 'Samsung sits at 86% of its target with nine days left. The tracker shows the shortfall in units, so the floor knows which models to push.'),
      ('Festival cashback', 'A bank offer runs for Diwali week. Every eligible bill is tagged, so the cashback claim is one list — not a search through invoices.'),
      ('Slab jump', 'Crossing ₹10 lakh on Vivo moves you to a higher incentive slab. You see exactly how much more you need to sell to get there.'),
    ],
    'faqs': [
      ('Which brands does the Schemes module support?', 'Any brand you sell. Schemes are set up per brand and category, so it works for mobile brands like Samsung, Vivo and Oppo and for appliance, TV and IT brands alike.'),
      ('Does RetailerOS file the claim with the brand for me?', 'RetailerOS builds the claim list from your scheme sales — product, IMEI or serial, scheme and amount — ready to submit. You file it with the brand or distributor the way you do today, and track it until it is settled.'),
      ('Can I see how close I am to a brand target?', 'Yes. The brand target tracker shows actual sales against target in rupees and units, colour-coded green, amber or grey, with the incentive slab you are on.'),
      ('Which plan includes Schemes?', 'Schemes and Claims are included on the Shop plan (₹3,999 a month) and on Pro.'),
    ],
    'related': ['automation', 'pre-booking', 'marketing'],
    'chat': 'Losing track of brand schemes? I can show you the target tracker in a 15-minute demo.',
  },
  {
    'slug': 'automation', 'name': 'Automation', 'plan': 'chain',
    'title': 'WhatsApp Automation for Retail Stores | RetailerOS',
    'desc': 'Automatic WhatsApp follow-ups after every purchase, birthday wishes and timed campaigns that educate, upsell and bring customers back to your store.',
    'eyebrow': 'Automation module',
    'h1': 'Follow up with every customer, <em>without lifting the phone.</em>',
    'answer': 'The Automation module sends WhatsApp messages to your customers on a schedule you set. Attach a campaign to a purchase and RetailerOS sends a sequence over the following days — a thank-you, a how-to, a check-in, an accessory offer — and it can send birthday wishes automatically. Every message is logged against the customer.',
    'features': [
      ('Post-purchase sequences', 'A series of messages timed from the day of the sale: day 0, day 3, day 7, day 30 — whatever the product needs.', ''),
      ('Birthday wishes', 'A greeting, and an offer if you like, on each customer\'s birthday.', ''),
      ('Campaigns you reuse', 'Build a sequence once — "new smartphone", "AC installation", "laptop" — and attach it to any sale.', ''),
      ('Educate, then upsell', 'Set-up tips first, then the case, the screen guard, the extended warranty, at the moment they are useful.', ''),
      ('Sent, pending, failed', 'Each message shows its status, and every one is kept in the customer\'s history.', ''),
      ('Your WhatsApp', 'Messages go out through your connected WhatsApp Business number, so replies come to you.', ''),
    ],
    'steps': [
      ('Build a campaign', 'Write the messages and the day each one goes out.'),
      ('Pick the trigger', 'After a sale, on a birthday, or started by hand.'),
      ('Let it run', 'RetailerOS sends each message on its day.'),
      ('See the results', 'Status for every message, in each customer\'s timeline.'),
    ],
    'demo': 'timeline',
    'examples': [
      ('A new phone', 'Day 0: thank you and the invoice. Day 3: how to move WhatsApp chats across. Day 10: 15% off a case and screen guard. Day 330: the warranty ends next month.'),
      ('An AC installation', 'Day 1: how installation went. Day 90: a cleaning reminder before summer. Day 365: annual service offer.'),
      ('Birthdays', 'A wish on the day, with an accessory voucher valid for the week — customers come back to the store to use it.'),
    ],
    'faqs': [
      ('What can RetailerOS automation do?', 'It sends WhatsApp messages on a schedule: a sequence of messages after a purchase, timed in days from the sale, and birthday wishes. You write the messages once as a campaign and attach it to sales.'),
      ('Does it use my WhatsApp number?', 'Messages go out through your connected WhatsApp Business number, so customers see your store and their replies come to you.'),
      ('Can I stop a sequence for one customer?', 'Yes. Each automation is tied to a customer and a sale, and shows every message with its status, so you can see what has gone and what is still scheduled.'),
      ('Which plan includes Automation?', 'Automation is part of the Pro plan, which also includes 2,000 WhatsApp messages a month.'),
    ],
    'related': ['marketing', 'pre-booking', 'schemes'],
    'chat': 'Want every customer followed up automatically on WhatsApp? I can show you a campaign in 15 minutes.',
  },
  {
    'slug': 'marketing', 'name': 'Marketing', 'plan': 'chain',
    'title': 'AI Marketing Creatives for Retail Stores | RetailerOS',
    'desc': 'Describe the offer and RetailerOS creates the banner or social post for you — festival sales, launches and brand offers, ready to share on WhatsApp.',
    'eyebrow': 'Marketing module',
    'h1': 'Your next festival banner, <em>made in seconds.</em>',
    'answer': 'The Marketing module creates promotional images for your store with AI. Describe what you want — "Diwali offer, 20% off Samsung phones" — and RetailerOS generates the banner or social post, which you can download or share on WhatsApp. Add a product photo and it suggests marketing copy for it.',
    'features': [
      ('Describe it, get a creative', 'Type the offer in plain words; RetailerOS generates a banner or post to match.', ''),
      ('Copy from a product photo', 'Upload a product photo and get suggested headlines and captions for it.', ''),
      ('Sizes for each channel', 'Pick the format — a WhatsApp status, an Instagram post, a shop-window print.', ''),
      ('Share straight away', 'Download the image or send it on WhatsApp from the same screen.', ''),
      ('For every occasion', 'Diwali, Onam, Pongal, Eid, a new launch, a clearance sale, a bank offer.', ''),
      ('No designer on call', 'What used to be a request to an agency and a two-day wait is a minute at the counter.', ''),
    ],
    'steps': [
      ('Describe the offer', 'What you are selling, the discount, the occasion.'),
      ('Pick a size', 'Status, post or print.'),
      ('Generate and preview', 'See the creative and try again if you want a different take.'),
      ('Share it', 'Download, or send it on WhatsApp.'),
    ],
    'demo': 'creative',
    'examples': [
      ('Launch day', '"iPhone launch — pre-book now with ₹2,000" becomes a status image the whole staff shares the same morning.'),
      ('Festival week', 'Five creatives for Diwali week — one per brand offer — made before the store opens.'),
      ('Slow stock', 'A product photo of last season\'s TV becomes a clearance post with a suggested caption.'),
    ],
    'faqs': [
      ('How does the RetailerOS marketing module work?', 'You describe the creative you need in plain words — the product, the offer, the occasion — and RetailerOS generates the image with AI. You can preview it, generate again, then download it or share it on WhatsApp.'),
      ('Can it write captions too?', 'Yes. Upload a product photo and it suggests marketing copy you can edit and use with the image.'),
      ('Do I need design skills?', 'No. If you can describe the offer, you can make the creative.'),
      ('Which plan includes Marketing?', 'Marketing is part of the Pro plan.'),
    ],
    'related': ['automation', 'pre-booking', 'marketplace'],
    'chat': 'Want to make your next festival banner in seconds? I can show you in a quick demo.',
  },
  {
    'slug': 'pre-booking', 'name': 'Pre-booking', 'plan': 'shop',
    'title': 'Pre-booking & Launch Deposits for Retail Stores | RetailerOS',
    'desc': 'Take advance bookings for new phone and appliance launches with a shareable booking page, track deposits and turn each booking into a sale on arrival.',
    'eyebrow': 'Pre-booking module',
    'h1': 'Sell the launch <em>before the stock arrives.</em>',
    'answer': 'The Pre-booking module lets you take advance bookings for upcoming launches. Create a campaign with the product, deposit and dates, share its booking page with customers on WhatsApp, and track every booking as pending or confirmed. When the stock arrives, each booking becomes a sale with the deposit already deducted.',
    'features': [
      ('Launch campaigns', 'A campaign per launch: product, deposit amount, start and end dates, description and image.', ''),
      ('A public booking page', 'Every campaign gets its own link to share on WhatsApp — customers book themselves.', ''),
      ('Walk-in bookings too', 'Staff can take a booking at the counter with the customer\'s name, number and advance.', ''),
      ('Pending and confirmed', 'See which deposits are in and which are only promises.', ''),
      ('Booking to bill', 'When the stock lands, turn the booking into a sale; the advance comes off the total.', ''),
      ('Know your demand', 'How many people want the launch before you place the order with your distributor.', ''),
    ],
    'steps': [
      ('Create the campaign', 'Product, deposit and dates.'),
      ('Share the link', 'Send the booking page to your customers on WhatsApp.'),
      ('Collect deposits', 'Bookings come in as pending; mark them confirmed when paid.'),
      ('Convert on arrival', 'Bill each booking; the advance is already deducted.'),
    ],
    'demo': 'campaign',
    'examples': [
      ('Flagship phone launch', '120 pre-bookings at ₹2,000 each before launch day tell you exactly how many units to order.'),
      ('Summer AC rush', 'Book installation slots in March, before the queue — and before the customer walks into another store.'),
      ('Limited stock', 'Twenty units of a new colour: first come, first served, and everyone else goes on a waitlist.'),
    ],
    'faqs': [
      ('What is pre-booking in RetailerOS?', 'A way to take advance bookings and deposits for products that have not arrived yet. You create a campaign with a public booking page, customers book through it or at the counter, and each booking converts into a sale when the stock arrives.'),
      ('Can customers pre-book online?', 'Yes. Each campaign has its own booking page that you share on WhatsApp, and customers book from their phone.'),
      ('What happens to the deposit when the product arrives?', 'You turn the booking into a sale and the advance already paid is deducted from the total.'),
      ('Which plan includes Pre-booking?', 'Pre-booking is included on the Shop plan (₹3,999 a month) and on Pro.'),
    ],
    'related': ['marketing', 'automation', 'schemes'],
    'chat': 'Got a launch coming up? I can show you how pre-booking works in 15 minutes.',
  },
  {
    'slug': 'marketplace', 'name': 'Marketplace', 'plan': 'chain',
    'title': 'Online Store & Retailer Marketplace | RetailerOS',
    'desc': 'Your own online store for customers, run from RetailerOS. Coming soon: a marketplace where RetailerOS retailers buy and sell stock with each other.',
    'eyebrow': 'Marketplace module',
    'h1': 'Sell beyond the counter — <em>to customers and to other retailers.</em>',
    'answer': 'The Marketplace module gives your store two new places to sell. Your online store is an e-commerce site for your customers, with listings, orders and shipping run from RetailerOS. The retailer marketplace — coming soon — lets RetailerOS retailers buy and sell stock with each other, so excess and open-box stock finds a buyer.',
    'split': [
      ('Your online store', 'B2C · for your customers', '', [
        'Listings from your own catalogue, with an online price that can differ from the counter',
        'Orders that move from pending to confirmed, shipped and delivered',
        'Courier and tracking number on every shipment',
        'Stock quantity and description set for each listing',
      ]),
      ('Retailer marketplace', 'B2B · between RetailerOS retailers', 'soon', [
        'List excess, slow-moving or open-box stock for other retailers',
        'Browse what other stores are offering, new or open box',
        'Buy stock you need from a retailer instead of waiting on a distributor',
        'Only RetailerOS retailers can see and trade',
      ]),
    ],
    'features': [],
    'steps': [
      ('Pick the products', 'Choose from your catalogue what to sell online.'),
      ('Set online prices', 'Price, stock and description for each listing.'),
      ('Take orders', 'Orders arrive in RetailerOS alongside your counter sales.'),
      ('Ship and track', 'Add the courier and tracking number; mark it delivered.'),
    ],
    'demo': 'storefront',
    'examples': [
      ('Your own website', 'Customers browse your phones and accessories online and order for delivery — from your store, not a marketplace that competes with you.'),
      ('Open-box stock', 'Three open-box TVs sitting in your back room become an offer to other retailers who need them.'),
      ('A shortfall', 'A customer wants a colour you have run out of. Another RetailerOS store in the city has two.'),
    ],
    'faqs': [
      ('Does RetailerOS give me an online store?', 'Yes. The Marketplace module includes an online store for your customers: you list products from your catalogue with online prices, and manage orders and shipping from RetailerOS.'),
      ('What is the RetailerOS retailer marketplace?', 'A marketplace where RetailerOS retailers can buy and sell stock with each other — excess, slow-moving or open-box units. It is coming soon.'),
      ('Can other retailers see my prices?', 'Only what you choose to list on the retailer marketplace. Your online store is for your customers, and your counter prices stay yours.'),
      ('Which plan includes the Marketplace?', 'The Marketplace module is part of the Pro plan.'),
    ],
    'related': ['stores', 'marketing', 'pre-booking'],
    'chat': 'Thinking of selling online? I can walk you through your own RetailerOS store in 15 minutes.',
  },
  {
    'slug': 'stores', 'name': 'Stores', 'plan': 'chain',
    'title': 'Multi-Store Management for Retail Chains | RetailerOS',
    'desc': 'Run every store from one owner login: stock, cash, staff and performance per location, with cross-store IMEI search and 3 staff logins per store.',
    'eyebrow': 'Stores module',
    'h1': 'Every store, <em>one owner login.</em>',
    'answer': 'The Stores module runs several locations from one RetailerOS account. Each store keeps its own stock, staff, cash register and invoice numbering, and you see all of them — sales, stock and performance — from one owner login. It is part of the Pro plan, and every store includes 3 staff logins.',
    'features': [
      ('One owner view', 'Today\'s revenue, bills and stock for every store on one screen.', ''),
      ('Stock per location', 'Brands, products and stock levels held separately for each store.', ''),
      ('Cross-store IMEI search', 'Find a handset by IMEI or serial, whichever branch took it in.', ''),
      ('Staff per store', 'Roles, shifts and commission set store by store; 3 logins included with each.', ''),
      ('Own invoice series', 'Taxes, numbering and print templates per store, so each location\'s GST paperwork stays clean.', ''),
      ('Compare stores', 'Performance reports across locations, so you know which store needs you.', ''),
    ],
    'steps': [
      ('Add your stores', 'Name, address and GST details for each location.'),
      ('Assign staff', 'Each store brings 3 logins; set roles per store.'),
      ('Bill in every store', 'Each counter runs on its own stock and cash.'),
      ('Watch them all', 'One owner login for every location.'),
    ],
    'demo': 'stores',
    'examples': [
      ('Closing time', 'Instead of calling five managers at 9 PM, you open one screen and see each store\'s day.'),
      ('Wrong branch', 'A customer brings a phone for warranty to a different branch. One IMEI search shows where it was sold.'),
      ('Where to invest', 'Store 3 sells twice the accessories per phone. Now you know which store\'s playbook to copy.'),
    ],
    'faqs': [
      ('How many stores can I run on RetailerOS?', 'As many as you have. On Pro, the first is ₹7,499 a month and each additional store is ₹3,499 a month.'),
      ('Does each store get its own logins?', 'Yes. Every store includes 3 staff logins, and roles are set per store.'),
      ('Can each store have its own invoice numbering?', 'Yes. Taxes, invoice numbering and print templates are store-level settings.'),
      ('Can I find a handset sold at another branch?', 'Yes. Cross-store IMEI and serial search comes with the Pro plan.'),
    ],
    'related': ['marketplace', 'automation', 'schemes'],
    'chat': 'Running more than one store? I can show you the owner view across every location in 15 minutes.',
  },
]

MODULE_PAGES += [
  {
    'slug': 'finance', 'name': 'Finance', 'plan': 'shop',
    'title': 'Accounting Reports for Your CA | RetailerOS Finance',
    'desc': 'Expenses, customer ledgers and sales from your counter in files your accountant can use. Journal entries and GST reports coming soon.',
    'eyebrow': 'Finance module · for your accountant',
    'h1': 'Everything your accountant needs, <em>straight from the counter.</em>',
    'answer': 'The Finance module turns what happens at your counter into records your accountant can work from. Every expense is logged with its category and payment mode, every customer has a running ledger, and sales download as a file for your CA. A journal view of every entry and downloadable income, expense and GST reports are coming soon.',
    'features': [
      ('Expenses by category', 'Rent, salary, electricity, marketing and more — each with its payment mode, and a monthly category breakdown.', ''),
      ('Customer ledgers', 'A running khaata for every customer and business account, updated by every bill and payment.', ''),
      ('Sales for your CA', 'Download sales as a spreadsheet file for any period, ready for your accountant.', ''),
      ('Accounting export', 'Export your sales data from settings for month-end work with your accountant.', ''),
      ('Journal entries', 'Every bill, expense and payment shown as a journal entry, in one place your accountant can review.', 'soon'),
      ('Income, expense & GST reports', 'Download month-end income, expense and GST reports — sales and purchase registers, tax summaries — for filing.', 'soon'),
    ],
    'steps': [
      ('Bill as usual', 'Sales, payments and khaata are recorded as you work.'),
      ('Log expenses', 'Add each expense with its category and how it was paid.'),
      ('Download for your CA', 'Pick the period and download the file.'),
      ('Close the month', 'Your accountant files from the reports, not from a shoebox of bills.'),
    ],
    'demo': 'journal',
    'examples': [
      ('Month-end in minutes', 'Instead of handing over a bag of bills, you send your CA one download for the month.'),
      ('Where the money went', 'Rent, salaries and electricity side by side, so you see which cost grew this month.'),
      ('Khaata that adds up', 'Every customer\'s balance matches their bills and payments, so there is nothing to reconcile.'),
    ],
    'faqs': [
      ('Can my accountant get reports from RetailerOS?', 'Yes. Sales download as a spreadsheet file for any period, expenses are recorded by category and payment mode, and customer ledgers are kept up to date. Downloadable income, expense and GST reports are coming soon.'),
      ('Does RetailerOS show journal entries?', 'A journal view of every bill, expense and payment is coming soon.'),
      ('Do I still need an accountant?', 'Yes, for filing returns and your books. RetailerOS gives your accountant clean records from the counter, so they spend their time on filing rather than data entry.'),
      ('Which plan includes Finance?', 'Finance is included on the Shop plan (₹3,999 a month) and on Pro.'),
    ],
    'related': ['schemes', 'stores', 'automation'],
    'chat': 'Want your accountant to stop chasing you for bills? I can show you the Finance module in 15 minutes.',
  },
  {
    'slug': 'device-protection', 'name': 'Device Protection', 'plan': 'soon', 'soon': True,
    'title': 'Sell Device Protection Plans at the Counter | RetailerOS',
    'desc': 'Offer extended warranty and damage protection on phones, ACs and TVs at billing, earn on every plan, and raise claims from RetailerOS. Coming soon.',
    'eyebrow': 'Device Protection · coming soon',
    'h1': 'Protection plans, <em>sold on the same bill.</em>',
    'answer': 'Device Protection, coming soon to RetailerOS, will let your counter offer extended warranty and damage protection plans on the phones, ACs and TVs you sell — right on the bill. Each plan is tied to the unit\'s IMEI or serial number, and where the plan provider supports it, claims will be raised from RetailerOS.',
    'features': [
      ('Offered at billing', 'When a phone or appliance is billed, the matching protection plans appear on the same screen.', 'soon'),
      ('On the same invoice', 'The plan is added to the customer\'s bill and receipt, with no second system to use.', 'soon'),
      ('Tied to the unit', 'Every plan is linked to the IMEI or serial number it covers.', 'soon'),
      ('Claims from the counter', 'When a covered device comes back, raise the claim from RetailerOS where the provider allows it.', 'soon'),
      ('Earnings per plan', 'See what each plan sold earns your store, by staff member and by month.', 'soon'),
      ('Reminders before expiry', 'A WhatsApp nudge to renew before cover runs out.', 'soon'),
    ],
    'steps': [
      ('Bill the device', 'Scan the IMEI or serial number as usual.'),
      ('Offer a plan', 'The plans for that product show on screen.'),
      ('Add it to the bill', 'The customer pays once; cover is linked to the unit.'),
      ('Claim when needed', 'Raise the claim from the device\'s record.'),
    ],
    'demo': 'protection',
    'examples': [
      ('A new flagship phone', 'Screen damage and extended warranty offered at the counter, when the customer is most likely to say yes.'),
      ('An AC installation', 'Extended warranty on the compressor, added to the same bill as the installation.'),
      ('A cracked screen', 'The customer walks in; one search on the IMEI shows the cover, and the claim starts from there.'),
    ],
    'faqs': [
      ('When will Device Protection be available?', 'It is coming soon. Book a demo if you want to be among the first stores to use it.'),
      ('Which protection providers will it work with?', 'RetailerOS is building integrations with device-protection providers. Where a provider offers an API, plans and claims will run from RetailerOS.'),
      ('Will my store earn on each plan?', 'Plans are sold by your store, and the earnings on each one will be shown in RetailerOS.'),
      ('Can I raise claims from RetailerOS?', 'Where the plan provider supports it, yes — claims will be raised from the device\'s record in RetailerOS.'),
    ],
    'related': ['schemes', 'automation', 'pre-booking'],
    'chat': 'Interested in selling protection plans at your counter? Tell me a bit about your store and we will keep you posted.',
  },
]

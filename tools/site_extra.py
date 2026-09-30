# -*- coding: utf-8 -*-
"""/search/, /refer/ and the 404 page. Called from site_pages.build()."""
import html
from urllib.parse import quote
e = lambda s: html.escape(s, quote=True)

# Referral terms — business rules, confirm with Ankit before changing.
REFER_GOAL = 5          # retailers who must start a paid plan
REFER_REWARD = '12 months of your current plan, free'

# Support contact details, in one place. The email inbox must exist (Ankit to create support@).
WA_NUMBER = '918884972272'
WA_DISPLAY = '+91 88849 72272'
WA_REPLY = '4 hours'
SUPPORT_HOURS = '10 AM–7 PM IST'
SUPPORT_EMAIL = 'support@khoshasystems.com'
EMAIL_REPLY = '48 hours'

POPULAR = [('Pricing', '/pricing/'), ('All 26 modules', '/modules/'), ('Compare RetailerOS', '/compare/'),
           ('Questions & answers', '/answers.html'), ('Mobile phone stores', '/solutions/mobile-phone-retail/'),
           ('Free resources', '/resources.html')]


def pages(B):
    out = []
    pop = ''.join('<a class="card" href="%s"><h3>%s</h3><span class="go">Open &rarr;</span></a>' % (h, e(n)) for n, h in POPULAR)

    # ── /search/ ──
    body = '''<section class="hero-s"><div class="wrap narrow" id="rs-page">
  <span class="eyebrow">Search</span>
  <h1>Search <em>RetailerOS.</em></h1>
  <form id="rs-form" class="rs-box rs-box-page" action="/search/" role="search">
    <input id="rs-q" type="search" name="q" placeholder="Search modules, pricing, comparisons, answers…" aria-label="Search the site" autocomplete="off">
  </form>
  <p id="rs-count" class="rs-count" aria-live="polite"></p>
  <div id="rs-results" class="rs-results"></div>
</div></section>
<section class="sec alt"><div class="wrap"><div class="sec-head"><h2>Popular pages</h2></div><div class="cards">%s</div></div></section>''' % pop
    out.append(B.page(path='/search/', title='Search RetailerOS', desc='Search RetailerOS: modules, pricing, comparisons, answers and resources.',
                      active=None, trail=[('Search', '/search/')], body=body + '<script src="/assets/search.js?v=%s" defer></script>' % B.H.SEARCH_V,
                      chat_msg='Can\'t find something? Ask me and I will point you to it.', chat_primary=('See pricing', '/pricing/'),
                      chat_delay=40, noindex=True))

    # ── /refer/ ──
    rows = ''.join('''<div class="ref-row"><span class="ref-n">%d</span>
        <input name="n%d" placeholder="Retailer's name" aria-label="Retailer %d name" autocomplete="off">
        <input name="s%d" placeholder="Shop &amp; city" aria-label="Retailer %d shop and city" autocomplete="off">
        <input name="p%d" type="tel" inputmode="tel" placeholder="Mobile number" aria-label="Retailer %d mobile" autocomplete="off"></div>''' % (i, i, i, i, i, i, i)
        for i in range(1, REFER_GOAL + 1))
    faqs = [
        ('How does the RetailerOS referral work?', 'Refer retailers you know. When %d of them start a paid plan (Shop or Pro), you get %s.' % (REFER_GOAL, REFER_REWARD)),
        ('Do the retailers I refer have to be RetailerOS customers already?', 'No — refer retailers who are not on RetailerOS yet. They must be new customers and start a paid plan to count.'),
        ('Can I refer fewer than %d?' % REFER_GOAL, 'Yes. Send them as you think of them; they add up. The year free unlocks once %d have started a paid plan.' % REFER_GOAL),
        ('Will you spam the retailers I refer?', 'No. We contact each one once to introduce RetailerOS and mention that you referred them. Only refer people who are happy to hear from us.'),
    ]
    body = '''<section class="hero-s ref-hero"><div class="wrap narrow">
  <span class="eyebrow">Referral programme</span>
  <h1>Refer %d retailers. <em>Get a year free.</em></h1>
  <p class="answer">Know other shop owners who still bill on paper, Excel or old software? Refer them to RetailerOS. When %d of them start a paid plan, you get %s.</p>
</div></section>
<section class="sec alt"><div class="wrap narrow">
  <div class="sec-head"><h2>How it works</h2></div>
  <ol class="mod-steps"><li><h3>Tell us who</h3><p>Add retailers you know below — name, shop and number.</p></li>
    <li><h3>We introduce RetailerOS</h3><p>We reach out once, mention you, and set them up.</p></li>
    <li><h3>They start a paid plan</h3><p>Each one that starts Shop or Pro counts towards your %d.</p></li>
    <li><h3>You get a year free</h3><p>%s.</p></li></ol>
</div></section>
<section class="sec"><div class="wrap narrow">
  <div class="sec-head"><h2>Refer retailers</h2><p>Send it over WhatsApp — it opens with everything filled in, you press send.</p></div>
  <form id="ref-form" class="ref-form" autocomplete="off">
    <div class="ref-me"><label>Your name<input name="me" required placeholder="Your name"></label>
      <label>Your shop &amp; city<input name="myshop" required placeholder="Shop name, city"></label></div>
    %s
    <p class="ref-err" id="ref-err" role="alert"></p>
    <button class="btn btn-primary" type="submit">Send referrals on WhatsApp</button>
    <p class="ref-note">Only refer retailers who are happy to hear from us. We contact each one once.</p>
  </form>
</div></section>
<section class="sec alt"><div class="wrap narrow"><div class="sec-head"><h2>Questions</h2></div>%s</div></section>
<script>
(function () {
  var f = document.getElementById('ref-form'); if (!f) return;
  f.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var g = function (n) { return (f.elements[n].value || '').trim(); }, list = [];
    for (var i = 1; i <= %d; i++) { if (g('n' + i) || g('p' + i)) list.push(i + '. ' + g('n' + i) + ' - ' + g('s' + i) + ' - ' + g('p' + i)); }
    var err = document.getElementById('ref-err');
    if (!g('me') || !g('myshop')) { err.textContent = 'Please add your name and shop.'; return; }
    if (!list.length) { err.textContent = 'Add at least one retailer.'; return; }
    err.textContent = '';
    var msg = 'Hi RetailerOS, I would like to refer these retailers.\\n\\nMe: ' + g('me') + ', ' + g('myshop') + '\\n\\n' + list.join('\\n');
    if (window.rosTrack) rosTrack('generate_lead', { method: 'referral', referrals: list.length });
    var u = 'https://wa.me/918884972272?text=' + encodeURIComponent(msg);
    if (!window.open(u, '_blank', 'noopener')) location.href = u;
  });
})();
</script>''' % (REFER_GOAL, REFER_GOAL, REFER_REWARD, REFER_GOAL, REFER_REWARD[0].upper() + REFER_REWARD[1:], rows, B.faq_html(faqs), REFER_GOAL)
    out.append(B.page(path='/refer/', title='Refer 5 Retailers, Get a Year Free | RetailerOS',
                      desc='Refer retailers to RetailerOS. When 5 of them start a paid plan, you get 12 months of your plan free.',
                      active=None, trail=[('Refer & earn', '/refer/')], body=body, faqs=faqs,
                      chat_msg='Questions about referring retailers? Ask me.', chat_primary=('See pricing', '/pricing/'), chat_delay=45))

    # ── /contact.html ──
    wa = 'https://wa.me/%s?text=%s' % (WA_NUMBER, quote('Hi RetailerOS, I need help with: '))
    faqs = [
        ('How do I contact RetailerOS support?', 'Message us on WhatsApp at %s, or email %s. WhatsApp is fastest.' % (WA_DISPLAY, SUPPORT_EMAIL)),
        ('What are your support hours?', 'The team replies %s.' % SUPPORT_HOURS),
        ('How quickly will I get a reply?', 'On WhatsApp, within %s during support hours. By email, within %s.' % (WA_REPLY, EMAIL_REPLY)),
        ('Can I get a phone call?', 'On the Pro plan, yes: ask for a call back on WhatsApp and we will ring you. On other plans, support is on WhatsApp and email.'),
        ('Will RetailerOS ever ask for my OTP?', 'No. Never share your one-time password (OTP) with anyone, including someone who says they are from RetailerOS.'),
        ('I am not a customer yet. Who do I talk to?', 'Book a 15-minute demo, or message us on WhatsApp with your questions about plans and pricing.'),
    ]
    topics = ['Help using RetailerOS', 'Login or account', 'My plan or payment', 'Pricing or a demo', 'Something else']
    body = '''<section class="hero-s"><div class="wrap narrow">
  <span class="eyebrow">Contact &amp; support</span>
  <h1>Talk to a real person. <em>On WhatsApp.</em></h1>
  <p class="answer">Stuck on a bill, a login or a GST question? Message the RetailerOS team on WhatsApp at <a href="%(wa)s" target="_blank" rel="noopener">%(wa_d)s</a> and we reply within %(wa_r)s, %(hours)s. You can also email <a href="mailto:%(email)s">%(email)s</a>.</p>
  <div class="hero-cta"><a class="btn btn-primary" href="%(wa)s" target="_blank" rel="noopener">Chat on WhatsApp</a><a class="btn btn-ghost" href="mailto:%(email)s">Email support</a></div>
</div></section>
<section class="sec alt"><div class="wrap">
  <div class="sec-head"><h2>Ways to reach us</h2></div>
  <div class="ct-grid">
    <div class="ct-card ct-main"><span class="ct-k">Fastest</span><h3>WhatsApp</h3><p class="ct-v"><a href="%(wa)s" target="_blank" rel="noopener">%(wa_d)s</a></p>
      <p>Replies within %(wa_r)s, %(hours)s. Send a screenshot if something looks wrong; it helps us fix it faster.</p></div>
    <div class="ct-card"><span class="ct-k">Email</span><h3>Support inbox</h3><p class="ct-v"><a href="mailto:%(email)s">%(email_w)s</a></p>
      <p>Replies within %(em_r)s. Best for detailed questions, invoices and anything with attachments.</p></div>
    <div class="ct-card"><span class="ct-k">Pro plan</span><h3>Phone call back</h3><p class="ct-v">Ask on WhatsApp</p>
      <p>On Pro, ask for a call back on WhatsApp and we will ring you at a time that suits the shop.</p></div>
    <div class="ct-card"><span class="ct-k">New to RetailerOS</span><h3>Book a demo</h3><p class="ct-v"><a href="/#book-demo">15 minutes, on video</a></p>
      <p>See RetailerOS on your kind of counter and get your questions about plans and pricing answered.</p></div>
  </div>
</div></section>
<section class="sec"><div class="wrap narrow">
  <div class="sec-head"><h2>Send us your question</h2><p>Fill this in and WhatsApp opens with it ready. You just press send.</p></div>
  <form id="ct-form" class="ref-form ct-form" autocomplete="on" novalidate>
    <div class="ref-me"><label>Your name<input name="name" required autocomplete="name" placeholder="Your name"></label>
      <label>Shop name &amp; city<input name="shop" required autocomplete="organization" placeholder="Shop name, city"></label></div>
    <div class="ref-me"><label>Registered mobile<input name="phone" type="tel" inputmode="numeric" autocomplete="tel-national" maxlength="11" placeholder="98765 43210"></label>
      <label>What is it about?<select name="topic">%(opts)s</select></label></div>
    <label class="ct-msg">Your message<textarea name="msg" rows="4" required placeholder="Tell us what happened, and on which screen."></textarea></label>
    <p class="ref-err" id="ct-err" role="alert"></p>
    <div class="ct-actions"><button class="btn btn-primary" type="submit">Send on WhatsApp</button>
      <button class="btn btn-ghost" type="button" id="ct-email">Send by email instead</button></div>
    <p class="ref-note">Customers: include your shop name and registered mobile so we can find your account. We will never ask for your OTP.</p>
  </form>
</div></section>
<section class="sec alt"><div class="wrap">
  <div class="sec-head"><h2>Find the answer yourself</h2></div>
  <div class="cards">
    <a class="card" href="/answers.html"><h3>Questions &amp; answers</h3><p>Billing, GST, IMEI tracking, plans and more.</p><span class="go">Open &rarr;</span></a>
    <a class="card" href="/search/"><h3>Search the site</h3><p>Modules, pricing, comparisons and answers in one search.</p><span class="go">Search &rarr;</span></a>
    <a class="card" href="/pricing/"><h3>Plans &amp; pricing</h3><p>Free, Shop and Pro, monthly, quarterly or yearly.</p><span class="go">See pricing &rarr;</span></a>
    <a class="card" href="/resources.html"><h3>Resources</h3><p>Guides and templates for running the counter.</p><span class="go">Open &rarr;</span></a>
  </div>
</div></section>
<section class="sec"><div class="wrap narrow">
  <div class="sec-head"><h2>Questions</h2></div>%(faq)s
  <div class="ct-other">
    <h3>Other contacts</h3>
    <p>Privacy and data requests: <a href="mailto:privacy@khoshasystems.com">privacy@khoshasystems.com</a><br>
       Security reports: <a href="mailto:security@khoshasystems.com">security@khoshasystems.com</a><br>
       Legal: <a href="mailto:legal@khoshasystems.com">legal@khoshasystems.com</a></p>
    <p>RetailerOS is a product of <a href="https://khoshasystems.com" target="_blank" rel="noopener">Khosha Systems</a>, Bengaluru, India.</p>
  </div>
</div></section>
<script>
(function () {
  var f = document.getElementById('ct-form'); if (!f) return;
  var err = document.getElementById('ct-err');
  var g = function (n) { return (f.elements[n].value || '').trim(); };
  function compose() {
    if (!g('name') || !g('shop')) { err.textContent = 'Please add your name and shop.'; return null; }
    if (!g('msg')) { err.textContent = 'Please tell us what you need help with.'; f.elements.msg.focus(); return null; }
    var p = g('phone').replace(/\\D/g, '').replace(/^91(?=\\d{10}$)/, '');
    if (p && !/^[6-9]\\d{9}$/.test(p)) { err.textContent = 'Please enter a 10-digit mobile number, or leave it empty.'; f.elements.phone.focus(); return null; }
    err.textContent = '';
    return { topic: g('topic'), text: 'Hi RetailerOS, I need help.\\n\\nTopic: ' + g('topic') + '\\nName: ' + g('name') + '\\nShop: ' + g('shop') +
      (p ? '\\nMobile: ' + p : '') + '\\n\\n' + g('msg') };
  }
  function go(url) { var w = window.open(url, '_blank'); if (w) { w.opener = null; } else { location.href = url; } }
  f.addEventListener('submit', function (ev) {
    ev.preventDefault(); var m = compose(); if (!m) return;
    if (window.rosTrack) rosTrack('generate_lead', { method: 'contact_whatsapp', topic: m.topic });
    go('https://wa.me/%(wa_n)s?text=' + encodeURIComponent(m.text));
  });
  document.getElementById('ct-email').addEventListener('click', function () {
    var m = compose(); if (!m) return;
    if (window.rosTrack) rosTrack('generate_lead', { method: 'contact_email', topic: m.topic });
    location.href = 'mailto:%(email)s?subject=' + encodeURIComponent('Support: ' + m.topic + ' (' + g('shop') + ')') + '&body=' + encodeURIComponent(m.text);
  });
})();
</script>''' % dict(wa=e(wa), wa_d=WA_DISPLAY, wa_r=WA_REPLY, hours=SUPPORT_HOURS, email=SUPPORT_EMAIL, em_r=EMAIL_REPLY, wa_n=WA_NUMBER, email_w=SUPPORT_EMAIL.replace('@', '@<wbr>'),
                    opts=''.join('<option>%s</option>' % e(t) for t in topics), faq=B.faq_html(faqs))
    contact_ld = {'@context': 'https://schema.org', '@type': 'ContactPage', 'name': 'Contact RetailerOS support', 'url': B.SITE + '/contact.html',
                  'mainEntity': {'@type': 'Organization', 'name': 'Khosha Systems', 'url': 'https://khoshasystems.com',
                                 'address': {'@type': 'PostalAddress', 'addressLocality': 'Bengaluru', 'addressRegion': 'Karnataka', 'addressCountry': 'IN'},
                                 'brand': {'@type': 'Brand', 'name': 'RetailerOS'},
                                 'contactPoint': [{'@type': 'ContactPoint', 'contactType': 'customer support', 'telephone': '+91-88849-72272',
                                                   'email': SUPPORT_EMAIL, 'areaServed': 'IN', 'availableLanguage': ['English', 'Hindi']}]}}
    out.append(B.page(path='/contact.html', title='Contact RetailerOS Support: WhatsApp & Email | RetailerOS',
                      desc='Reach RetailerOS support on WhatsApp at %s (replies within %s, %s) or email %s. New? Book a 15-minute demo.' % (WA_DISPLAY, WA_REPLY, SUPPORT_HOURS, SUPPORT_EMAIL),
                      active='contact', trail=[('Contact', '/contact.html')], body=body, faqs=faqs, extra_ld=[contact_ld],
                      chat_msg='Need help? Ask me, or message the team on WhatsApp.', chat_primary=('Chat on WhatsApp', wa), chat_delay=60))

    # ── 404 ──
    body = '''<section class="hero-s nf"><div class="wrap narrow">
  <p class="nf-code" aria-hidden="true">404</p>
  <h1>This page is <em>off the shelf.</em></h1>
  <p class="lede">The link may be old or mistyped. Search for what you need, or pick one of these.</p>
  <form class="rs-box rs-box-page" action="/search/" role="search"><input type="search" name="q" placeholder="Search modules, pricing, answers…" aria-label="Search the site" autofocus></form>
  <div class="hero-cta"><a class="btn btn-primary" href="/">Go to the homepage</a><a class="btn btn-ghost" href="/#book-demo">Book a 15-minute demo</a></div>
</div></section>
<section class="sec alt"><div class="wrap"><div class="sec-head"><h2>Popular pages</h2></div><div class="cards">%s</div></div></section>''' % pop
    out.append(B.page(path='/404/', title='Page not found | RetailerOS', desc='This page could not be found. Search RetailerOS or go to the homepage.',
                      active=None, trail=[('Page not found', '/404/')], body=body,
                      chat_msg='Looking for something? Ask me.', chat_primary=('See pricing', '/pricing/'), chat_delay=60, noindex=True))
    return out

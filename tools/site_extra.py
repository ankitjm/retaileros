# -*- coding: utf-8 -*-
"""/search/, /refer/ and the 404 page. Called from site_pages.build()."""
import html
e = lambda s: html.escape(s, quote=True)

# Referral terms — business rules, confirm with Ankit before changing.
REFER_GOAL = 5          # retailers who must start a paid plan
REFER_REWARD = '12 months of your current plan, free'

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

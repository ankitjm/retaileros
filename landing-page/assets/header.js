/* RetailerOS — the one site header: mobile menu, scrolled state, signed-in label.
   Markup: tools/site_header.py. Styles: assets/header.css. */
(function () {
  var bar = document.getElementById('rh');
  var menu = document.getElementById('rh-menu');
  if (!bar) return;
  var burger = bar.querySelector('.rh-burger');
  var root = document.documentElement;

  function setOpen(open) {
    if (!menu || !burger) return;
    if (open) {
      menu.style.setProperty('--rh-top', Math.round(bar.getBoundingClientRect().bottom) + 'px');
      menu.hidden = false;
      menu.classList.add('rh-anim');
    } else {
      menu.hidden = true;
      menu.classList.remove('rh-anim');
    }
    bar.classList.toggle('rh-open', open);
    root.classList.toggle('rh-lock', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (burger && menu) {
    burger.addEventListener('click', function () { setOpen(menu.hidden); });
    // any link in the sheet closes it (deep links like /#start open a modal on the homepage)
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) { setOpen(false); burger.focus(); }
    });
    // desktop has no sheet: never leave it open (or the page locked) after a resize
    var mq = window.matchMedia('(min-width: 1000px)');
    var onMq = function () { if (mq.matches) setOpen(false); };
    if (mq.addEventListener) mq.addEventListener('change', onMq); else if (mq.addListener) mq.addListener(onMq);
  }

  // hairline + shadow once the page scrolls under the bar
  var ticking = false;
  function onScroll() {
    ticking = false;
    bar.classList.toggle('rh-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  // Signed in on app.retaileros.in? The app drops a non-sensitive flag cookie on
  // .retaileros.in (localStorage can't cross origins). Then "Sign in" says so.
  var signedIn = document.cookie.split('; ').some(function (c) { return c.trim() === 'ros_signed_in=1'; });
  if (signedIn) {
    Array.prototype.forEach.call(document.querySelectorAll('.rh .signin, .rh-menu .signin'), function (el) {
      el.textContent = el.getAttribute('data-label-in') || 'Access account';
      el.setAttribute('href', 'https://app.retaileros.in/');
    });
  }
})();

/* ═══ Search: header icon / menu box → overlay with live results; Enter → /search/?q= ═══ */
(function () {
  var trigger = document.querySelector('.rh .rh-search');
  function loadSearch(cb) {
    if (window.rosSearch) return cb();
    var s = document.createElement('script'); s.src = '/assets/search.js?v=' + ((trigger && trigger.getAttribute('data-sv')) || '1'); s.onload = cb; document.head.appendChild(s);
  }
  var ov = null, input, list, sel = -1;
  function build() {
    ov = document.createElement('div'); ov.className = 'rs-overlay'; ov.hidden = true;
    ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-label', 'Search RetailerOS');
    ov.innerHTML = '<div class="rs-panel"><form class="rs-box" action="/search/" role="search">' +
      '<input type="search" name="q" placeholder="Search modules, pricing, comparisons, answers…" aria-label="Search the site" autocomplete="off">' +
      '<button type="button" class="rs-close">Esc</button></form><div class="rs-list"><p class="rs-hint">Try <a href="/search/?q=IMEI">IMEI</a>, ' +
      '<a href="/search/?q=pricing">pricing</a>, <a href="/search/?q=Tally">Tally</a> or <a href="/search/?q=schemes">schemes</a>.</p></div></div>';
    document.body.appendChild(ov);
    input = ov.querySelector('input'); list = ov.querySelector('.rs-list');
    ov.addEventListener('click', function (e) { if (e.target === ov || e.target.closest('.rs-close')) close(); });
    var t;
    input.addEventListener('input', function () {
      clearTimeout(t); var q = input.value.trim();
      t = setTimeout(function () {
        if (q.length < 2) return;
        rosSearch.search(q, 7).then(function (res) {
          sel = -1;
          list.innerHTML = (res.length ? res.map(rosSearch.row).join('') + '<a class="rs-all" href="/search/?q=' + encodeURIComponent(q) + '">See all results</a>'
            : '<p class="rs-hint">No matches yet.</p>') + (rosSearch.isQuestion(q) || !res.length ? rosSearch.askRow(q) : '');
        });
      }, 120);
    });
    input.addEventListener('keydown', function (e) {
      var items = list.querySelectorAll('a.rs-item');
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault(); if (!items.length) return;
        sel = (sel + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
        items.forEach(function (a, i) { a.classList.toggle('on', i === sel); }); items[sel].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter' && sel > -1 && items[sel]) { e.preventDefault(); location.href = items[sel].href; }
    });
    ov.querySelector('form').addEventListener('submit', function () { if (window.rosTrack) rosTrack('search', { search_term: input.value.trim(), via: 'overlay' }); });
  }
  function open(e) {
    if (e) e.preventDefault();
    if (!ov) build();
    loadSearch(function () {});
    ov.hidden = false; document.documentElement.classList.add('rh-lock'); setTimeout(function () { input.focus(); }, 30);
  }
  function close() { if (!ov) return; ov.hidden = true; document.documentElement.classList.remove('rh-lock'); }
  if (trigger) trigger.addEventListener('click', open);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && ov && !ov.hidden) close();
    var typing = /INPUT|TEXTAREA|SELECT/.test((document.activeElement || {}).tagName || '');
    if (!typing && (e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k'))) { e.preventDefault(); open(); }
  });
  if (document.getElementById('rs-page')) loadSearch(function () {});
})();

/* ═══ Analytics: one helper for GA4, Meta pixel and GTM, plus engagement buckets ═══
   rosTrack(name, params) sends to whatever is installed — add the pixel/GTM later,
   no code change needed. Buckets count ACTIVE time only (tab visible and the visitor
   did something in the last 30 s): 30 s, 60 s, 90 s. A per-visitor profile in
   localStorage ('ros_v') records visits, best bucket and first/last traffic source,
   and is sent to GA4 as user properties so audiences can be built from it. */
(function () {
  function store(k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem(k) || 'null'); localStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; } }
  window.rosTrack = function (name, params) {
    params = params || {};
    try { if (window.gtag) gtag('event', name, params); } catch (e) {}
    try { if (window.fbq) fbq('trackCustom', name, params); } catch (e) {}
    try { (window.dataLayer = window.dataLayer || []).push(Object.assign({ event: 'ros_' + name }, params)); } catch (e) {}
  };
  var now = Date.now(), v = store('ros_v') || { first: now, visits: 0, last: 0, best: 0, pages: 0 };
  var q = new URLSearchParams(location.search), src = q.get('utm_source') || (document.referrer && new URL(document.referrer).hostname !== location.hostname ? new URL(document.referrer).hostname : '');
  if (src) { if (!v.src1) v.src1 = src; v.src = src; if (q.get('utm_campaign')) v.camp = q.get('utm_campaign'); }
  var newVisit = now - (v.last || 0) > 30 * 60 * 1000;
  if (newVisit) { v.visits++; if (v.visits > 1) rosTrack('return_visit', { visit_number: v.visits, best_bucket: v.best }); }
  v.last = now; v.pages++; store('ros_v', v);
  function props() {
    try { if (window.gtag) gtag('set', 'user_properties', { ros_engagement: v.best ? v.best + 's' : 'under30s', ros_visits: v.visits, ros_first_source: v.src1 || 'direct' }); } catch (e) {}
  }
  props();

  var active = 0, lastAct = now, fired = {};
  ['mousemove', 'keydown', 'scroll', 'touchstart', 'click'].forEach(function (ev) { addEventListener(ev, function () { lastAct = Date.now(); }, { passive: true }); });
  setInterval(function () {
    if (document.visibilityState !== 'visible' || Date.now() - lastAct > 30000) return;
    active++;
    [30, 60, 90].forEach(function (b) {
      if (active >= b && !fired[b]) {
        fired[b] = 1; rosTrack('engaged_' + b + 's', { bucket: b, page: location.pathname, visit_number: v.visits });
        if (b > (v.best || 0)) { v.best = b; store('ros_v', v); props(); }
      }
    });
  }, 1000);

  var depth = {};
  addEventListener('scroll', function () {
    var h = document.documentElement, p = (h.scrollTop + innerHeight) / h.scrollHeight * 100;
    [25, 50, 75, 90].forEach(function (d) { if (p >= d && !depth[d]) { depth[d] = 1; rosTrack('scroll_depth', { percent: d, page: location.pathname }); } });
  }, { passive: true });

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a,button'); if (!a) return;
    var href = a.getAttribute('href') || '';
    if (a.matches('[data-cta="onboard"]')) rosTrack('cta_start_free', { location: (a.closest('section,header,footer') || {}).className || '' });
    else if (a.matches('[data-demo-open]')) rosTrack('cta_book_demo', {});
    else if (href.indexOf('wa.me') > -1) rosTrack('whatsapp_click', { from: location.pathname });
    else if (href.indexOf('app.retaileros.in') > -1) rosTrack('sign_in_click', {});
    else if (href.indexOf('/refer/') === 0) rosTrack('referral_click', { from: location.pathname });
  });
  window.rosVisitor = v;
})();

/* ═══ Exit pop-up: once every 3 days, never in the first 12 s, never over a modal or chat.
   Desktop: the pointer leaves through the top of the window. Phones: after 40 s of
   reading, a quick scroll back up (the usual "about to leave" gesture). ═══ */
(function () {
  if (/^\/(search|refer)\//.test(location.pathname)) return;
  var KEY = 'ros_exit', t0 = Date.now(), shown = false;
  function recently() { try { return Date.now() - (+localStorage.getItem(KEY) || 0) < 3 * 864e5; } catch (e) { return true; } }
  function busy() { return document.querySelector('.modal-overlay.open, .demo-overlay:not([hidden]), .chatbot.open, .rchat.open, .rs-overlay:not([hidden]), .rh.rh-open'); }
  function show(how) {
    if (shown || recently() || busy() || Date.now() - t0 < 12000) return;
    shown = true; try { localStorage.setItem(KEY, Date.now()); } catch (e) {}
    var wa = 'https://wa.me/918884972272?text=' + encodeURIComponent('Hi RetailerOS, please add me to your updates for retailers.');
    var el = document.createElement('div'); el.className = 'xp'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-labelledby', 'xp-h');
    el.innerHTML = '<div class="xp-card"><button class="xp-x" type="button" aria-label="Close">×</button>' +
      '<p class="xp-kick">Before you go</p><h2 id="xp-h">Take the pricing with you.</h2>' +
      '<p class="xp-sub">Our 4-page pricing proposal — plans, rates, store examples and terms. Share it with your partners.</p>' +
      '<a class="xp-main" href="/assets/RetailerOS-Pricing-Proposal.pdf" download data-track="proposal_download">Download the pricing proposal (PDF)</a>' +
      '<div class="xp-more"><a href="/refer/">Refer 5 retailers → get a year free</a><a href="' + wa + '" target="_blank" rel="noopener">Get retail tips on WhatsApp</a></div></div>';
    document.body.appendChild(el);
    rosTrack('exit_popup_shown', { how: how, page: location.pathname });
    function close() { el.remove(); }
    el.addEventListener('click', function (e) {
      if (e.target === el || e.target.closest('.xp-x')) { rosTrack('exit_popup_close', {}); close(); }
      else if (e.target.closest('a')) { rosTrack('exit_popup_click', { what: e.target.closest('a').textContent.trim().slice(0, 40) }); setTimeout(close, 200); }
    });
    document.addEventListener('keydown', function k(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', k); } });
  }
  document.addEventListener('mouseout', function (e) { if (!e.relatedTarget && e.clientY <= 0 && !matchMedia('(pointer: coarse)').matches) show('exit_intent'); });
  var lastY = scrollY, lastT = Date.now();
  addEventListener('scroll', function () {
    var y = scrollY, t = Date.now();
    if (matchMedia('(pointer: coarse)').matches && Date.now() - t0 > 40000 && lastY - y > 450 && t - lastT < 600 && y > 300) show('scroll_up');
    if (t - lastT > 600) { lastY = y; lastT = t; }
  }, { passive: true });
})();

/* retaileros.in · shared behaviour for the multi-page site */
(function () {
  'use strict';
  var WA = '918884972272';
  var isSmall = window.matchMedia('(max-width: 760px)').matches;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function store(get, key, val) {
    try { if (get) return sessionStorage.getItem(key); sessionStorage.setItem(key, val); } catch (e) { return null; }
  }

  /* ── mobile menu ─────────────────────────────────────── */
  var menu = document.getElementById('mnav');
  var openBtn = document.querySelector('.menu-btn');
  var closeBtn = document.querySelector('.mnav-close');
  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (openBtn) openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
    if (open && closeBtn) closeBtn.focus(); else if (!open && openBtn) openBtn.focus();
  }
  if (openBtn) openBtn.addEventListener('click', function () { setMenu(true); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setMenu(false); });
  if (menu) menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu && menu.classList.contains('open')) setMenu(false);
  });

  /* ── "Sign in" becomes "Access account" for signed-in users ──
     The app keeps its token in localStorage on app.retaileros.in, which this
     origin cannot read. It works once the app also sets a non-sensitive
     ros_signed_in=1 cookie on .retaileros.in (see README). */
  if (document.cookie.split('; ').some(function (c) { return c.trim() === 'ros_signed_in=1'; })) {
    document.querySelectorAll('.signin').forEach(function (a) {
      a.textContent = 'Access account';
      a.href = 'https://app.retaileros.in/';
      a.classList.add('authed');
    });
  }

  /* ── proactive chat ──────────────────────────────────────
     Opens itself once per visit, after a page-specific delay or once the
     visitor is halfway down the page. Never re-opens after a dismissal. */
  var chat = document.getElementById('rchat');
  if (chat) {
    var card = chat.querySelector('.rchat-card');
    var launcher = chat.querySelector('.rchat-btn');
    var dot = chat.querySelector('.rchat-dot');
    var delay = parseInt(document.body.getAttribute('data-chat-delay') || '20', 10) * 1000;
    if (isSmall) delay = Math.round(delay * 1.6);
    var seenKey = document.body.hasAttribute('data-chat-priority') ? 'ros_chat_seen:' + location.pathname : 'ros_chat_seen';
    function setChat(open, manual) {
      chat.classList.toggle('open', open);
      launcher.setAttribute('aria-expanded', open ? 'true' : 'false');
      card.setAttribute('aria-hidden', open ? 'false' : 'true');
      if (dot) dot.hidden = true;
      if (open) { store(false, 'ros_chat_seen', '1'); store(false, seenKey, '1'); }
      if (!open && manual) store(false, 'ros_chat_dismissed', '1');
    }
    launcher.addEventListener('click', function () { setChat(!chat.classList.contains('open'), true); });
    chat.querySelector('.rchat-x').addEventListener('click', function () { setChat(false, true); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && chat.classList.contains('open')) setChat(false, true);
    });
    chat.querySelectorAll('.rchat-opts a, .rchat-opts button').forEach(function (el) {
      el.addEventListener('click', function () { setChat(false, false); });
    });
    // WhatsApp link carries the page the visitor was reading
    var wa = chat.querySelector('.wa');
    if (wa) wa.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(
      'Hi RetailerOS — I was reading "' + document.title.split(' | ')[0] + '" and have a question.');

    var fired = false;
    function auto() {
      if (fired || store(true, 'ros_chat_dismissed') || store(true, seenKey)) return;
      fired = true;
      if (dot) dot.hidden = false;
      setChat(true, false);
    }
    if (!store(true, 'ros_chat_dismissed') && !store(true, seenKey)) {
      var t = setTimeout(auto, delay);
      window.addEventListener('scroll', function onScroll() {
        var h = document.documentElement;
        if ((h.scrollTop + window.innerHeight) / h.scrollHeight > 0.55) {
          clearTimeout(t); window.removeEventListener('scroll', onScroll); auto();
        }
      }, { passive: true });
    }
  }

  /* ── pricing: billing cycle + store calculator ───────── */
  var P = {
    shop:  { monthly: 3999, quarterly: 3799, annual: 3399 },
    first: { monthly: 7499, quarterly: 7124, annual: 6374 },
    extra: { monthly: 3499, quarterly: 3324, annual: 2974 }
  };
  var MONTHS = { monthly: 1, quarterly: 3, annual: 12 };
  function inr(n) { return '₹' + Math.round(n).toLocaleString('en-IN'); }
  function monthlyFor(plan, stores, cycle) {
    if (plan === 'free') return 0;
    if (plan === 'shop') return P.shop[cycle];
    return P.first[cycle] + (stores - 1) * P.extra[cycle];
  }

  var cycle = 'quarterly';
  function paintCycle() {
    document.querySelectorAll('.cycle button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.cycle === cycle ? 'true' : 'false');
    });
    document.querySelectorAll('[data-by-cycle]').forEach(function (el) {
      try { var m = JSON.parse(el.getAttribute('data-by-cycle')); if (m[cycle] != null) el.innerHTML = m[cycle]; } catch (e) {}
    });
    calc();
  }
  document.querySelectorAll('.cycle button').forEach(function (b) {
    b.addEventListener('click', function () { cycle = b.dataset.cycle; paintCycle(); });
  });

  var cPlan = 'chain', cStores = 2;
  var input = document.getElementById('storeCount');
  function calc() {
    var out = document.getElementById('calcOut');
    if (!out) return;
    if (cPlan === 'shop') cStores = 1;
    if (cPlan === 'chain' && cStores < 2) cStores = 2;
    if (input) { if (document.activeElement !== input) input.value = cStores; input.disabled = cPlan !== 'chain'; }
    document.querySelectorAll('[data-calc-plan]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.calcPlan === cPlan ? 'true' : 'false');
    });
    document.querySelectorAll('[data-calc-cycle]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.calcCycle === cycle ? 'true' : 'false');
    });
    var perMonth = monthlyFor(cPlan, cStores, cycle);
    var list = monthlyFor(cPlan, cStores, 'monthly');
    var billed = perMonth * MONTHS[cycle];
    var saved = (list - perMonth) * 12;
    document.getElementById('cBig').innerHTML = inr(perMonth) + ' <small>/ month + GST</small>';
    document.getElementById('cStores').textContent = cStores + (cStores === 1 ? ' store' : ' stores');
    document.getElementById('cPer').textContent = inr(perMonth / cStores) + ' / store / month';
    document.getElementById('cLogins').textContent = (cStores * 3) + ' included';
    document.getElementById('cBilled').textContent = inr(billed) + (cycle === 'monthly' ? ' a month' : cycle === 'quarterly' ? ' a quarter' : ' a year');
    document.getElementById('cYear').textContent = inr(perMonth * 12);
    var hint = document.getElementById('cHint');
    if (cPlan === 'chain') {
      hint.innerHTML = 'First store ' + inr(P.first[cycle]) + ' + ' + (cStores - 1) + ' additional × ' + inr(P.extra[cycle]) +
        '. ' + (saved > 0 ? '<strong>You save ' + inr(saved) + ' a year</strong> against monthly billing.' : 'Pay quarterly to save 5%, or yearly to save 15%.');
    } else {
      hint.innerHTML = saved > 0 ? '<strong>You save ' + inr(saved) + ' a year</strong> against monthly billing.' : 'Pay quarterly to save 5%, or yearly to save 15%.';
    }
  }
  document.querySelectorAll('[data-calc-plan]').forEach(function (b) {
    b.addEventListener('click', function () { cPlan = b.dataset.calcPlan; calc(); });
  });
  document.querySelectorAll('[data-calc-cycle]').forEach(function (b) {
    b.addEventListener('click', function () { cycle = b.dataset.calcCycle; paintCycle(); });
  });
  function step(d) { cStores = Math.max(2, Math.min(500, (parseInt(cStores, 10) || 2) + d)); calc(); }
  var dn = document.getElementById('storeDown'), up = document.getElementById('storeUp');
  if (dn) dn.addEventListener('click', function () { step(-1); });
  if (up) up.addEventListener('click', function () { step(1); });
  if (input) {
    input.addEventListener('input', function () {
      var v = parseInt(input.value, 10);
      if (!isNaN(v) && v >= 2) { cStores = Math.min(500, v); calc(); }
    });
    input.addEventListener('change', function () {
      var v = parseInt(input.value, 10);
      cStores = isNaN(v) ? 2 : Math.max(2, Math.min(500, v)); input.value = cStores; calc();
    });
  }
  if (document.querySelector('.cycle') || document.getElementById('calcOut')) paintCycle();
})();

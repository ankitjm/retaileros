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

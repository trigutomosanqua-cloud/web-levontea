/* ============ Le Vontea — script.js ============ */
(function () {
  'use strict';

  /* ---------- Mobile hamburger menu ---------- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('nav-menu');

  function closeMenu() {
    if (!menu || !burger) return;
    menu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Buka menu');
  }

  function toggleMenu() {
    if (!menu || !burger) return;
    var open = menu.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
  }

  if (burger && menu) {
    burger.addEventListener('click', toggleMenu);

    // Close menu when a link inside is clicked
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    // Reset state if resized to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) closeMenu();
    });
  }

  /* ---------- Scroll-reveal (IntersectionObserver) ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  // Stagger siblings that share a grid/row
  document.querySelectorAll('.about__cards, .why__grid, .moments__grid, .statrow__inner, .social__links, .hero__ctas, .hero__chips, .product__features').forEach(function (group) {
    var kids = group.querySelectorAll('.reveal');
    kids.forEach(function (el, i) {
      el.style.setProperty('--reveal-delay', (i * 0.09) + 's');
    });
  });

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show everything
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ---------- Active-section nav highlighting ---------- */
  var navLinks = document.querySelectorAll('.nav__link[data-section]');
  var sections = [];
  navLinks.forEach(function (link) {
    var target = document.getElementById(link.getAttribute('data-section'));
    if (target) sections.push({ link: link, el: target });
  });

  function setActive(id) {
    navLinks.forEach(function (link) {
      link.classList.toggle('is-active', link.getAttribute('data-section') === id);
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      // Pick the entry closest to being "in the middle"
      var visible = entries
        .filter(function (e) { return e.isIntersecting; })
        .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });
      if (visible.length) {
        var id = visible[0].target.id;
        if (sections.some(function (s) { return s.el.id === id; })) {
          setActive(id);
        }
      }
    }, { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] });

    sections.forEach(function (s) {
      sectionObserver.observe(s.el);
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();

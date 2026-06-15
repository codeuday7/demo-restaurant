/**
 * Saffron & Stone — Restaurant Website
 * main.js — Vanilla JS interactions
 * No external libraries. No jQuery. No frameworks.
 */

/* ─────────────────────────────────────────────────────────────
   STICKY NAVIGATION
───────────────────────────────────────────────────────────── */
(function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 80);
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run once on load
})();


/* ─────────────────────────────────────────────────────────────
   MOBILE HAMBURGER MENU
───────────────────────────────────────────────────────────── */
(function initMobileMenu() {
  const hamburger    = document.getElementById('hamburger');
  const overlay      = document.getElementById('nav-overlay');
  const closeBtn     = document.getElementById('nav-close');
  const overlayLinks = document.querySelectorAll('.nav-overlay-link');
  if (!hamburger || !overlay) return;

  function openMenu() {
    overlay.classList.add('open');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeBtn && closeBtn.focus();
  }

  function closeMenu() {
    overlay.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    hamburger.focus();
  }

  hamburger.addEventListener('click', openMenu);
  closeBtn && closeBtn.addEventListener('click', closeMenu);
  overlayLinks.forEach(link => link.addEventListener('click', closeMenu));

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeMenu();
  });

  // Close on background click
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeMenu();
  });
})();


/* ─────────────────────────────────────────────────────────────
   SCROLL REVEAL — INTERSECTION OBSERVER
───────────────────────────────────────────────────────────── */
(function initScrollReveal() {
  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();


/* ─────────────────────────────────────────────────────────────
   MENU — TABS (DESKTOP) & ACCORDION (MOBILE)
───────────────────────────────────────────────────────────── */
(function initMenu() {
  // ── Desktop Tabs ──
  const tabs   = document.querySelectorAll('.menu-tab');
  const panels = document.querySelectorAll('.menu-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('aria-controls');

      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        // Re-trigger reveal animations for items in new panel
        targetPanel.querySelectorAll('.reveal:not(.revealed)').forEach(el => {
          el.classList.add('revealed');
        });
      }
    });
  });

  // ── Mobile Accordion ──
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body   = item.querySelector('.accordion-body');
    if (!header || !body) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      accordionItems.forEach(i => {
        i.classList.remove('open');
        const h = i.querySelector('.accordion-header');
        if (h) h.setAttribute('aria-expanded', 'false');
        const b = i.querySelector('.accordion-body');
        if (b) b.style.maxHeight = '';
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // Set initial heights for open items
  document.querySelectorAll('.accordion-item.open').forEach(item => {
    const body = item.querySelector('.accordion-body');
    if (body) body.style.maxHeight = body.scrollHeight + 'px';
  });
})();


/* ─────────────────────────────────────────────────────────────
   GALLERY LIGHTBOX
───────────────────────────────────────────────────────────── */
(function initLightbox() {
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn    = document.getElementById('lightbox-close');
  const prevBtn     = document.getElementById('lightbox-prev');
  const nextBtn     = document.getElementById('lightbox-next');
  if (!lightbox || !lightboxImg) return;

  // Build a deduplicated image list from data-index attributes
  // Both mobile and desktop grids exist in DOM — use src to deduplicate
  const seen = new Set();
  const images = []; // { src, alt }

  // Prefer desktop grid first for higher-quality ordering
  ['gallery-grid-desktop', 'gallery-grid-mobile'].forEach(cls => {
    document.querySelectorAll(`.${cls} .gallery-item img`).forEach(img => {
      if (!seen.has(img.src)) {
        seen.add(img.src);
        images.push({ src: img.src, alt: img.alt || 'Gallery image' });
      }
    });
  });

  let currentIndex = 0;

  function updateImage() {
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
  }

  function openLightbox(index) {
    currentIndex = Math.max(0, Math.min(index, images.length - 1));
    updateImage();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn && closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }

  // Bind click on every gallery item — match by src to find correct index
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (!img) return;
      const idx = images.findIndex(i => i.src === img.src);
      openLightbox(idx >= 0 ? idx : 0);
    });
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });

  closeBtn && closeBtn.addEventListener('click', closeLightbox);
  prevBtn  && prevBtn.addEventListener('click', showPrev);
  nextBtn  && nextBtn.addEventListener('click', showNext);

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  // Touch swipe
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener('touchend', e => {
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 50) delta < 0 ? showNext() : showPrev();
  }, { passive: true });
})();


/* ─────────────────────────────────────────────────────────────
   SMOOTH SCROLLING FOR ANCHOR LINKS
───────────────────────────────────────────────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navHeight = document.getElementById('nav')?.offsetHeight || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();


/* ─────────────────────────────────────────────────────────────
   HERO ANIMATION — ensure all hero elements animate even if
   fonts load late
───────────────────────────────────────────────────────────── */
(function initHeroAnimations() {
  // Force all hero animated elements to be visible after 2s
  // as a fallback in case CSS animation doesn't fire
  setTimeout(() => {
    ['.hero-eyebrow', '.hero h1', '.hero-tagline', '.hero-cta', '.hero-scroll-cue'].forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  }, 2000);
})();


/* ─────────────────────────────────────────────────────────────
   ACTIVE NAV LINK — highlight active section
───────────────────────────────────────────────────────────── */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  if (!sections.length || !navLinks.length) return;

  const sectionMap = {};
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) sectionMap[href.slice(1)] = link;
  });

  function updateActive() {
    const scrollY = window.scrollY + 100;
    let activeId = null;

    sections.forEach(section => {
      if (section.offsetTop <= scrollY) activeId = section.id;
    });

    navLinks.forEach(link => link.removeAttribute('aria-current'));
    if (activeId && sectionMap[activeId]) {
      sectionMap[activeId].setAttribute('aria-current', 'page');
    }
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
})();

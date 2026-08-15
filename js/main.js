(function () {
  "use strict";

  /* ---------------------------------------------------------
     Sticky header shadow on scroll
     --------------------------------------------------------- */
  var header = document.getElementById("site-header");
  function onScroll() {
    if (window.scrollY > 8) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------------------------------------------------
     Mobile nav toggle
     --------------------------------------------------------- */
  var navToggle = document.getElementById("nav-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  var menuOpen = false;

  function setMenu(open) {
    menuOpen = open;
    mobileMenu.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  }

  navToggle.addEventListener("click", function () {
    setMenu(!menuOpen);
  });

  mobileMenu.querySelectorAll("[data-menu-link]").forEach(function (link) {
    link.addEventListener("click", function () { setMenu(false); });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menuOpen) setMenu(false);
  });

  /* ---------------------------------------------------------
     Menu category tabs
     --------------------------------------------------------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".menu-tab"));
  var panels = {};
  tabs.forEach(function (tab) {
    var panel = document.getElementById(tab.getAttribute("aria-controls"));
    panels[tab.dataset.tab] = panel;

    tab.addEventListener("click", function () { activateTab(tab); });

    tab.addEventListener("keydown", function (e) {
      var idx = tabs.indexOf(tab);
      var next = null;
      if (e.key === "ArrowRight") next = tabs[(idx + 1) % tabs.length];
      if (e.key === "ArrowLeft") next = tabs[(idx - 1 + tabs.length) % tabs.length];
      if (e.key === "Home") next = tabs[0];
      if (e.key === "End") next = tabs[tabs.length - 1];
      if (next) {
        e.preventDefault();
        next.focus();
        activateTab(next);
      }
    });
  });

  function activateTab(tab) {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var outgoing = tabs
      .filter(function (t) { return t.getAttribute("aria-selected") === "true" && t !== tab; })
      .map(function (t) { return panels[t.dataset.tab]; });

    tabs.forEach(function (t) {
      var selected = t === tab;
      t.setAttribute("aria-selected", String(selected));
      t.tabIndex = selected ? 0 : -1;
    });

    var incoming = panels[tab.dataset.tab];

    if (reduceMotion || !outgoing.length) {
      outgoing.forEach(function (p) { p.hidden = true; p.classList.remove("is-active", "is-leaving"); });
      incoming.hidden = false;
      incoming.classList.add("is-active");
      return;
    }

    // Fade the old panel out (translateY 0 -> 8px, opacity 1 -> 0),
    // then swap and fade the new one in (translateY 12px -> 0, opacity 0 -> 1).
    outgoing.forEach(function (p) {
      p.classList.remove("is-active");
      p.classList.add("is-leaving");
    });
    window.setTimeout(function () {
      outgoing.forEach(function (p) { p.hidden = true; p.classList.remove("is-leaving"); });
      incoming.hidden = false;
      incoming.classList.add("is-active");
    }, 220);
  }

  /* ---------------------------------------------------------
     Scroll reveal animations
     --------------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal, .reveal-scale, .mask-trigger");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------------------------------------------------------
     Subtle hero parallax — desktop only, tiny movement, disabled
     for reduced motion. Capped well under the ~25-40px target.
     --------------------------------------------------------- */
  var heroMedia = document.getElementById("hero-media");
  var reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  var desktopQuery = window.matchMedia("(min-width: 900px)");

  if (heroMedia) {
    var heroScene = heroMedia.querySelector(".scene");
    var parallaxTicking = false;
    var MAX_PARALLAX = 34;

    function updateHeroParallax() {
      if (reduceMotionQuery.matches || !desktopQuery.matches) {
        heroScene.style.transform = "";
        return;
      }
      var offset = Math.max(-MAX_PARALLAX, Math.min(MAX_PARALLAX, window.scrollY * 0.04));
      heroScene.style.transform = "translateY(" + offset + "px)";
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!parallaxTicking) {
          window.requestAnimationFrame(function () {
            updateHeroParallax();
            parallaxTicking = false;
          });
          parallaxTicking = true;
        }
      },
      { passive: true }
    );
    updateHeroParallax();
  }

  /* ---------------------------------------------------------
     Footer year
     --------------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     Hours: highlight today + accurate open/closed status
     computed in the restaurant's local timezone (US/Eastern)
     --------------------------------------------------------- */
  var HOURS = {
    0: null,               // Sunday - closed
    1: [11 * 60, 20 * 60],
    2: [11 * 60, 20 * 60],
    3: [11 * 60, 20 * 60],
    4: [11 * 60, 20 * 60],
    5: [11 * 60, 20 * 60],
    6: [12 * 60, 20 * 60]
  };
  var TZ = "America/New_York";

  function getRestaurantNow() {
    // Build a reliable {weekday, minutes} reading for the restaurant's timezone
    var parts = new Intl.DateTimeFormat("en-US", {
      timeZone: TZ,
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }).formatToParts(new Date());

    var weekdayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    var weekday, hour, minute;
    parts.forEach(function (p) {
      if (p.type === "weekday") weekday = weekdayMap[p.value];
      if (p.type === "hour") hour = parseInt(p.value, 10);
      if (p.type === "minute") minute = parseInt(p.value, 10);
    });
    if (hour === 24) hour = 0;
    return { weekday: weekday, minutes: hour * 60 + minute };
  }

  function renderHours() {
    var now = getRestaurantNow();
    if (now.weekday === undefined) return; // Intl not fully supported, skip status

    var todayRange = HOURS[now.weekday];
    var isOpen = !!todayRange && now.minutes >= todayRange[0] && now.minutes < todayRange[1];

    var wrap = document.getElementById("hours-status-wrap");
    if (wrap) {
      var badge = document.createElement("span");
      badge.className = "hours-status " + (isOpen ? "hours-status--open" : "hours-status--closed");
      badge.textContent = isOpen ? "Open Today" : "Closed Today";
      wrap.innerHTML = "";
      wrap.appendChild(badge);
    }

    var list = document.getElementById("hours-list");
    if (list) {
      Array.prototype.forEach.call(list.children, function (li) {
        var day = parseInt(li.getAttribute("data-day"), 10);
        li.classList.toggle("is-today", day === now.weekday);
      });
    }
  }

  renderHours();
})();

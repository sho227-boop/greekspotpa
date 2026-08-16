(function () {
  "use strict";

  /* ---------------------------------------------------------
     Mobile nav toggle
     --------------------------------------------------------- */
  var navToggle = document.getElementById("nav-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  var menuOpen = false;

  if (navToggle && mobileMenu) {
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
  }

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
    tabs.forEach(function (t) {
      var selected = t === tab;
      t.setAttribute("aria-selected", String(selected));
      t.tabIndex = selected ? 0 : -1;
      var panel = panels[t.dataset.tab];
      panel.hidden = !selected;
      panel.classList.toggle("is-active", selected);
    });
  }

  /* ---------------------------------------------------------
     Subtle fade-up for section headings on scroll
     --------------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
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
    if (now.weekday === undefined) return;

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

/* Rujul Chaudhari — portfolio
   Scroll reveal + nav section highlighting.
   IntersectionObserver only: no scroll listeners, no layout thrash. */

(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll("[data-reveal]");

  function showAll() {
    for (var i = 0; i < targets.length; i++) targets[i].classList.add("is-in");
  }

  /* Motion off, or no IntersectionObserver: render everything at once
     rather than animating. */
  if (reduced || !("IntersectionObserver" in window)) {
    showAll();
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );

    for (var j = 0; j < targets.length; j++) io.observe(targets[j]);

    /* Safety net: reveal anything still hidden but on-screen after load
       (observer that never fired, restored scroll position). */
    window.addEventListener("load", function () {
      window.setTimeout(function () {
        for (var k = 0; k < targets.length; k++) {
          var t = targets[k];
          if (!t.classList.contains("is-in") &&
              t.getBoundingClientRect().top < window.innerHeight) {
            t.classList.add("is-in");
          }
        }
      }, 400);
    });
  }

  /* Mark the nav link for the section currently in view. */
  var links = document.querySelectorAll(".nav-links a");
  if (links.length && "IntersectionObserver" in window) {
    var byId = {};
    for (var l = 0; l < links.length; l++) {
      byId[links[l].getAttribute("href").slice(1)] = links[l];
    }

    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = byId[entry.target.id];
          if (!link || !entry.isIntersecting) return;
          for (var m = 0; m < links.length; m++) links[m].removeAttribute("aria-current");
          link.setAttribute("aria-current", "true");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    Object.keys(byId).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) spy.observe(section);
    });
  }
})();

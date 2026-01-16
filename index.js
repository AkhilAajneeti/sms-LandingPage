(function ($) {
  "use strict";

  var windowOn = $(window);
  ////////////////////////////////////////////////////
  // 01. PreLoader Js
  windowOn.on("load", function () {
    $("#loading").fadeOut(500);
  });

  const headerBorder = document.querySelector(".header__border");
  const centerNavbar = document.querySelector(".centernavbar");

  let lastScrollY = window.scrollY;

  // store original heights
  const headerBorderHeight = headerBorder.offsetHeight;
  const centerNavbarHeight = centerNavbar.offsetHeight;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollY && currentScroll > 80) {
      // 🔽 scroll DOWN → hide + remove space
      headerBorder.style.transform = "translateY(-100%)";
      headerBorder.style.opacity = "0";
      headerBorder.style.height = "0";
      headerBorder.style.padding = "0";
      headerBorder.style.margin = "0";

      centerNavbar.style.transform = "translateY(-100%)";
      centerNavbar.style.opacity = "0";
      centerNavbar.style.height = "0";
      centerNavbar.style.padding = "0";
      centerNavbar.style.margin = "0";
    } else {
      // 🔼 scroll UP → restore
      headerBorder.style.transform = "translateY(0)";
      headerBorder.style.opacity = "1";
      headerBorder.style.height = headerBorderHeight + "px";

      centerNavbar.style.transform = "translateY(0)";
      centerNavbar.style.opacity = "1";
      centerNavbar.style.height = centerNavbarHeight + "px";
    }

    lastScrollY = currentScroll;
  });

  document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileOverlay = document.getElementById("mobileOverlay");
    const mobileCloseBtn = document.getElementById("mobileCloseBtn");

    function openMenu() {
      mobileMenu.classList.add("active");
      mobileOverlay.classList.add("active");
    }

    function closeMenu() {
      mobileMenu.classList.remove("active");
      mobileOverlay.classList.remove("active");

      // close all dropdowns when sidebar closes
      document
        .querySelectorAll(".mobile-dropdown.open")
        .forEach((item) => item.classList.remove("open"));
    }

    mobileMenuBtn?.addEventListener("click", openMenu);
    mobileOverlay?.addEventListener("click", closeMenu);
    mobileCloseBtn?.addEventListener("click", closeMenu);

    /* ===============================
               ACCORDION SUBMENU LOGIC (FIXED)
            =============================== */
    document.querySelectorAll(".mobile-toggle").forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();

        const currentItem = toggle.closest(".mobile-dropdown");
        if (!currentItem) return;

        // ✅ close ONLY same-level siblings
        const siblings = currentItem.parentElement.querySelectorAll(
          ":scope > .mobile-dropdown.open"
        );

        siblings.forEach((item) => {
          if (item !== currentItem) {
            item.classList.remove("open");
          }
        });

        // toggle current
        currentItem.classList.toggle("open");
      });
    });
  });
  // submenue's
  document.querySelectorAll(".submenu-item > a").forEach((link) => {
    link.addEventListener("click", function (e) {
      // ONLY handle desktop submenu on small screens
      if (window.innerWidth <= 991) {
        e.preventDefault();

        const submenu = this.nextElementSibling;
        if (!submenu || !submenu.classList.contains("submenu--level2")) return;

        // close other desktop level-2 submenus
        document.querySelectorAll(".submenu--level2.open").forEach((menu) => {
          if (menu !== submenu) menu.classList.remove("open");
        });

        submenu.classList.toggle("open");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    /* ===============================
               HEADER SHADOW ON SCROLL
            =============================== */
    const header = document.getElementById("mainHeader");

    if (header) {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
          header.classList.add("shadow-lg");
        } else {
          header.classList.remove("shadow-lg");
        }
      });
    }

    /* ===============================
               COUNTER ANIMATION
            =============================== */
    const counters = document.querySelectorAll("[data-count]");
    const speed = 200;

    if (counters.length) {
      const animateCounter = (counter) => {
        const target = +counter.getAttribute("data-count");
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(() => animateCounter(counter), 1);
        } else {
          counter.innerText = target;
        }
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      counters.forEach((counter) => observer.observe(counter));
    }

    /* ===============================
               COUNTDOWN TIMER (SAFE)
            =============================== */
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    const countdownTimer = document.getElementById("countdownTimer");

    if (daysEl && hoursEl && minutesEl && secondsEl) {
      function updateCountdown() {
        const deadline = new Date("2025-02-28T23:59:59").getTime();
        const now = Date.now();
        const distance = deadline - now;

        if (distance <= 0) {
          clearInterval(countdownInterval);
          if (countdownTimer) {
            countdownTimer.innerHTML =
              '<div class="text-2xl font-bold">Admissions Closed</div>';
          }
          return;
        }

        daysEl.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        hoursEl.innerText = Math.floor((distance / (1000 * 60 * 60)) % 24);
        minutesEl.innerText = Math.floor((distance / (1000 * 60)) % 60);
        secondsEl.innerText = Math.floor((distance / 1000) % 60);
      }

      const countdownInterval = setInterval(updateCountdown, 1000);
      updateCountdown();
    }

    /* ===============================
               SCROLL REVEAL
            =============================== */
    const revealElements = document.querySelectorAll(".card, .reveal");

    if (revealElements.length) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      revealElements.forEach((el) => {
        el.classList.add("reveal");
        revealObserver.observe(el);
      });
    }

    /* ===============================
               SMOOTH SCROLL
            =============================== */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const target = document.querySelector(anchor.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  });

  // swiper's

  var swiper = new Swiper(".student__slider", {
    spaceBetween: 30,
    slidesPerView: 2,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

    var swiper = new Swiper(".book__slider", {
    spaceBetween: 30,
    slidesPerView: 2,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  // green audit-->scope of work
  document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".greenAudit_slider", {
      loop: true,
      spaceBetween: 30,
      speed: 800, // same as smartSpeed
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      slidesPerView: 1,

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });
  });
})(jQuery);
AOS.init({
  duration: 900, // animation speed
  easing: "ease-out-cubic",
  once: true, // ek hi baar animate
  offset: 120, // scroll se pehle trigger
});

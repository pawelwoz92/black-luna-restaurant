// app.js

document.addEventListener("DOMContentLoaded", () => {
  // =======================
  // 1) Reveal-on-scroll
  // =======================
  const targets = document.querySelectorAll(".reveal-on-scroll");

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("revealed"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));
  }

  // =======================
  // 2) Hamburger menu
  // =======================
  const nav = document.querySelector(".main-nav");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav-grid a");

  if (nav && navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // zamykamy menu po kliknięciu w link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // =======================
  // 3) Scroll to top
  // =======================
  const scrollTopBtn = document.querySelector(".scroll-top");

  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        scrollTopBtn.classList.add("is-visible");
      } else {
        scrollTopBtn.classList.remove("is-visible");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.body.classList.add("page-loaded");
});

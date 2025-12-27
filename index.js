
document.addEventListener("DOMContentLoaded", () => {

  const mobileMenuBtn  = document.getElementById("mobileMenuBtn");
  const mobileMenu     = document.getElementById("mobileMenu");
  const mobileOverlay  = document.getElementById("mobileOverlay");
  const mobileCloseBtn = document.getElementById("mobileCloseBtn");

  function openMenu() {
    mobileMenu.classList.add("active");
    mobileOverlay.classList.add("active");
  }

  function closeMenu() {
    mobileMenu.classList.remove("active");
    mobileOverlay.classList.remove("active");

    // close all dropdowns
    document
      .querySelectorAll(".mobile-dropdown.open")
      .forEach(item => item.classList.remove("open"));
  }

  /* OPEN */
  mobileMenuBtn?.addEventListener("click", openMenu);

  /* CLOSE */
  mobileOverlay?.addEventListener("click", closeMenu);
  mobileCloseBtn?.addEventListener("click", closeMenu);

  /* SUBMENU TOGGLE */
  document.querySelectorAll(".mobile-toggle").forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      toggle.parentElement.classList.toggle("open");
    });
  });

});


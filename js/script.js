// change navbar stylea on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// Show/hide faq answer
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // Change icon
    const icon = faq.querySelector(".faq_icon i");

    if (icon.className === "fa fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa fa-plus";
    }
  });
});

// show/hide menu btn
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline";
  menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  menuBtn.style.display = "inline";
  closeBtn.style.display = "none";
});



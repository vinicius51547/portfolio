// Navbar
const nav = document.querySelector("#nav");

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition > 10) {
    if (!nav.classList.contains("scrolled-down")) {
      nav.classList.add("scrolled-down");
    }
  } else {
    if (nav.classList.contains("scrolled-down")) {
      nav.classList.remove("scrolled-down");
    }
  }
};

document.addEventListener("scroll", onScroll);

// Menu
const menuButton = document.getElementById("menu-button");
const closeIcon = document.getElementById("close-menu");
const menu = document.getElementById("menu");
const body = document.querySelector("body");
const overlay = document.querySelector("#overlay");
const menuLinks = document.querySelectorAll("#menu a");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
  overlay.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  menu.classList.remove("open");
  overlay.style.display = "none";
});

body.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.classList.remove("open");
    overlay.style.display = "none";
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    overlay.style.display = "none";
  });
});


// Scroll suave
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.offsetTop;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', function (event) {
    event.preventDefault();
    var target = this.getAttribute('href');
    var duration = 1000;
    smoothScroll(target, duration);
  });
});

// DropDown
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// Portifolio slider
let swiper = new Swiper(".swiper-container", {
  speed: 500,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


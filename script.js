document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.getElementById("nav-menu");
  const productDropdown = document.getElementById("productDropdown");
  const dropdownMenu = document.getElementById("dropdown-menu");

  menuIcon.addEventListener("click", function () {
    navMenu.classList.toggle("fa-times");
    navMenu.classList.toggle("active");
  });

  productDropdown.addEventListener("click", function (event) {
    event.preventDefault();
    dropdownMenu.classList.toggle("active");
  });
});

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".services-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".ms365-benefits-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".students-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});


let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelector(".game-slides");
  const totalSlides = slides.children.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  const offset = -currentSlide * 100;

  slides.style.transform = `translateX(${offset}%)`;
}


document.getElementById("learn-more").addEventListener("click", function () {
  window.location.href = "https://www.microsoft.com/en-us/microsoft-365";
});

document
  .getElementById("signin-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Sign-in functionality is not implemented in this demo.");
  });




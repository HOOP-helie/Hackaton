const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  spaceBetween: 50,
  speed: 600,
  initialSlide: 0,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

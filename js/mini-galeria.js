document.addEventListener("DOMContentLoaded", function() {
  function initializeSwiper(selector) {
    var swiperEl = document.querySelector(selector);
    Object.assign(swiperEl, {
      grabCursor: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          origin: "left center",
          translate: ["-5%", 0, -200],
          rotate: [0, 100, 0],
        },
        next: {
          origin: "right center",
          translate: ["5%", 0, -200],
          rotate: [0, -100, 0],
        },
      },
    });
    swiperEl.initialize();
  }

  var swiperSelectors = [".mySwiper6", ".mySwiper1", ".mySwiper2", ".mySwiper3"];

  swiperSelectors.forEach(function (selector) {
    initializeSwiper(selector);
  });
});

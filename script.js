var swiper = new Swiper('.sneaker-slider', {
    grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 10,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
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

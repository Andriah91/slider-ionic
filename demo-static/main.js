

const sliderEl = document.querySelector('.spring-slider');

createSpringSlider(sliderEl, {
  
  slidesPerView: 1,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper('.swiper-container', {
    speed: 800,
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 4,
        }
      },
    autoplay: {
        delay: 2000,
    },
  });
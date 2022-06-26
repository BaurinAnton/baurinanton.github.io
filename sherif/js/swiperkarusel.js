var swiper = new Swiper('.swiper-container1', {
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1.2,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 1.5,
      },
      1280: {
        slidesPerView: 3,
        centeredSlides: false,
      }
    },
  });
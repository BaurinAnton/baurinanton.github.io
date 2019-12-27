var swiper = new Swiper('.swiper-container.work', {
    autoHeight: true, //enable auto height
    spaceBetween: 30,
    slidesPerView: 2,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.work',
      prevEl: '.swiper-button-prev.work',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1020: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  });
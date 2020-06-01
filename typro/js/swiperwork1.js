var swiper = new Swiper('.work1', {
    autoHeight: true,
    direction: 'vertical',
    slidesPerView: 2,
    loop: true,
    speed: 1000,
    breakpoints: {
        300: {
            centeredSlides: false,
            spaceBetween: 20,
        },
        768: {
            spaceBetween: 30,
            slidesPerView: 4,
        },
        1025: {
            centeredSlides: true,
            spaceBetween: 30,
            slidesPerView: 2,
        }
      },
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
});
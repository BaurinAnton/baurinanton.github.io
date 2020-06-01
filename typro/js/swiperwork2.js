var swiper = new Swiper('.work2', {
    direction: 'vertical',
    slidesPerView: 2,
    autoHeight: true,
    loop: true,
    breakpoints: {
        300: {
            spaceBetween: 20,
        },
        768: {
            spaceBetween: 30,
            slidesPerView: 4,
        },
        1025: {
            spaceBetween: 30,
            slidesPerView: 2,
        }
    },
    speed: 1000,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
});
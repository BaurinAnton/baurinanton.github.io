var swiper = new Swiper('.work2', {
    direction: 'vertical',
    slidesPerView: 2,
    autoHeight: true,
    loop: true,
    speed: 1000,
    breakpoints: {
        300: {
            spaceBetween: 20,
        },
        768: {
            spaceBetween: 30,
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
});
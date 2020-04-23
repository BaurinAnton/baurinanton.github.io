var swiper = new Swiper('.workphone', {
    loop: true,
    speed: 1000,
    pagination: {
        el: '.swiper-pagination-mobile',
        type: 'progressbar',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
});
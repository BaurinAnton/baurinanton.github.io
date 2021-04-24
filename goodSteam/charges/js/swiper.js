var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 40,
    breakpoints: {
        1400: {
            slidesPerView: 5,
        },
        992: {
            slidesPerView: 3.3,
            spaceBetween: 40,
            centeredSlides: true,
            loop: true,
        },
        768: {
            slidesPerView: 3.3,
            spaceBetween: 40,
            centeredSlides: true,
            loop: true,
        },
        576: {
            slidesPerView: 2.4,
            spaceBetween: 40,
            centeredSlides: true,
            loop: true,
        },
        300: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true,
            loop: true,
        },
    },
});
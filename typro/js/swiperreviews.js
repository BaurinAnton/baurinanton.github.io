var swiper = new Swiper('.reviewsswiper', {
    breakpoints: {  
        320: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 1.4,
          }
        },
    spaceBetween: 30,
    loop: true,
    zoom: true,
    centeredSlides: true,
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
});
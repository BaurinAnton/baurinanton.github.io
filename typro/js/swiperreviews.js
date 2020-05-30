var swiper = new Swiper('.reviewsswiper', {
    breakpoints: {  
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1.2,
          }, 
          768: {
            slidesPerView: 1.7,
          }, 
          1025: {
            slidesPerView: 1.4,
          },
        },
    spaceBetween: 20,
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
        delay: 3500,
        disableOnInteraction: true,
    },
});
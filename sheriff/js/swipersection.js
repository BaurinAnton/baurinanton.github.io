var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    speed: 800,
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
    loop: true,
    autoplay: {
        delay: 2000,
    },
    direction: getDirection(),
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      }
    }
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 1 ? 'vertical' : 'horizontal';

    return direction;
  }
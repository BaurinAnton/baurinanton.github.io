const getBurger = document.getElementById("burger")
const menuActive = document.getElementById("header_menu")
let getMenuActive = false
getBurger.onclick = () => {
    if (getMenuActive == false) {
        menuActive.classList.remove('header_menu_active')
        menuActive.classList.remove('header_menu_no_active')
        menuActive.classList.add('header_menu')
        getMenuActive = true
    }
    else {
        menuActive.classList.remove('header_menu')
        menuActive.classList.remove('header_menu_no_active')
        menuActive.classList.add('header_menu_active')
        getMenuActive = false
    }
}
const getHeaderCatalogButton = document.getElementById("header_catalog_button")
const headerCatalog = document.getElementById("header_catalog")
let getheaderCatalogActive = false
getHeaderCatalogButton.onclick = () => {
    if (getheaderCatalogActive == false) {
        headerCatalog.classList.remove('header_catalog')
        headerCatalog.classList.remove('header_catalog_no_active')
        headerCatalog.classList.add('header_catalog_active')
        getheaderCatalogActive = true
    }
    else {
        headerCatalog.classList.remove('header_catalog_active')
        headerCatalog.classList.remove('header_catalog_no_active')
        headerCatalog.classList.add('header_catalog')
        getheaderCatalogActive = false
    }
}
let swiperCompany = new Swiper('.swiper-container', {
    breakpoints: {
        1140: {
            slidesPerView: 5,
        },
        992: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
            centeredSlides: true,
        },
        320: {
            slidesPerView: 1.5,
            centeredSlides: true,
        },
    },
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
let swiperAbout = new Swiper('.swiper-container-about', {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    speed: 800,
    pagination: {
        el: '.swiper-pagination-about',
        clickable: true,
    },
});
let swiperAboutMobile = new Swiper('.swiper-container-about-mobile', {
    centeredSlides: true,
    loop: true,
    spaceBetween: 55,
    autoplay: {
        delay: 2000,
    },
    speed: 800,
    pagination: {
        el: '.swiper-pagination-about-mobile',
        clickable: true,
    },
    breakpoints: {
        993: {
            slidesPerView: 3.5,
        },
        768: {
            slidesPerView: 2.2,
        },
        320: {
            slidesPerView: 1.7,
            spaceBetween: 30,
        },
    },
});
let swiperReadyMade = new Swiper('.swiper-container-ready-meade', {
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    speed: 800,
    spaceBetween: 55,
    pagination: {
        el: '.swiper-pagination-ready-meade',
        clickable: true,
    },
    breakpoints: {
        993: {
            slidesPerView: 3.5,
        },
        768: {
            slidesPerView: 2.2,
            spaceBetween: 55,
        },
        320: {
            slidesPerView: 1.7,
            spaceBetween: 30,
        },
    },
});
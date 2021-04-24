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
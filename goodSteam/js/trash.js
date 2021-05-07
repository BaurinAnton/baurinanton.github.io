let elemTrashQuantityDesktop = document.getElementById('trash_charges_desktop')
let elemTrashQuantityMobile = document.getElementById('trash_charges_mobile')

// Вывод количество товаров в иконку корзины
function setQuantityTrash() {
    if (!JSON.parse(localStorage.getItem('trashTotal'))) {
        elemTrashQuantityDesktop.innerText = 0
        elemTrashQuantityMobile.innerText = 0
    }
    else {
        elemTrashQuantityDesktop.innerText = JSON.parse(localStorage.getItem('trashTotal')).quantityOfProduct
        elemTrashQuantityMobile.innerText = JSON.parse(localStorage.getItem('trashTotal')).quantityOfProduct
    }
}

setQuantityTrash()

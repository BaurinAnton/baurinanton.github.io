let elemTrashQuantityDesktop = document.getElementById('trash_charges_desktop')
let elemTrashQuantityMobile = document.getElementById('trash_charges_mobile')

// Подчет количества товара в корзине
function setStorage() {
    let curentStorage = JSON.parse(localStorage.getItem('trashTotal'))
    if (!curentStorage) {
        const newItemStore = { quantityOfProduct: 1 }
        curentStorage = newItemStore
        localStorage.setItem('trashTotal', JSON.stringify(curentStorage))
    }
    else {
        const newItemStore = ++curentStorage.quantityOfProduct
        curentStorage.quantityOfProduct = newItemStore
        localStorage.setItem('trashTotal', JSON.stringify(curentStorage))
    }
}
// Работа с информацией товара
function setProductDescription(Product, product, quantity, initialPrice, totalPrice) {
    let curentStorage = JSON.parse(localStorage.getItem(Product))
    if (!curentStorage) {
        const newItemStore = { nameProduct: product, quantityProduct: quantity, initialPriceProduct: initialPrice, totalPriceProduct: totalPrice }
        curentStorage = newItemStore
        localStorage.setItem(Product, JSON.stringify(curentStorage))
        setStorage()
        setQuantityTrash()
    }
    else {
        const newItemStoreQuantity = ++curentStorage.quantityProduct
        const newItemStorePrice = +curentStorage.totalPriceProduct + initialPrice
        curentStorage.quantityProduct = newItemStoreQuantity
        curentStorage.totalPriceProduct = newItemStorePrice
        console.log(curentStorage)
        localStorage.setItem(Product, JSON.stringify(curentStorage))
        setStorage()
        setQuantityTrash()
    }
}

// Массив кнопок
function getButton() {
    buttonArray = new Array
    for (i = 0; i < 9; i++) {
        buttonArray[i] = document.getElementById(`button${i}`)
    }
}

// Сохранение информации о продукте по клику на кнопку, подсчет товаров в корзине
function setProductDescriptionButtonClick() {
    buttonArray[0].onclick = () => (setProductDescription('Product0', 'K-46', 1, 10800, 10800, 1))
    buttonArray[1].onclick = () => (setProductDescription('Product1', 'K-58', 1, 12700, 12700), 2)
    buttonArray[2].onclick = () => (setProductDescription('Product2', 'K-63', 1, 24900, 24900, 3))
    buttonArray[3].onclick = () => (setProductDescription('Product3', 'Цилиндр 50', 1, 1900, 1900, 4))
    buttonArray[4].onclick = () => (setProductDescription('Product4', 'K-53', 1, 5400, 5400, 5))
    buttonArray[5].onclick = () => (setProductDescription('Product5', 'Брусок', 1, 3500, 3500, 6))
    buttonArray[6].onclick = () => (setProductDescription('Product6', 'Сектор', 1, 3200, 3200, 7))
    buttonArray[7].onclick = () => (setProductDescription('Product7', 'Ядро-150', 1, 4800, 4800, 8))
    buttonArray[8].onclick = () => (setProductDescription('Product8', 'За 1кг. Размеры под заказ.', 1, 250, 250, 9))
}

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
getButton()
setProductDescriptionButtonClick()
setQuantityTrash()

const productTotalQuantity = document.getElementById('product_quantity')
let elemTrashQuantityDesktop = document.getElementById('trash_charges_desktop')
let elemTrashQuantityMobile = document.getElementById('trash_charges_mobile')
let buttonBackEnd = document.getElementById('buttonBackEnd')
const productTrash = document.getElementById('row_product')
const clearTrashProduction = document.getElementById('clear_trash')
// Генерация товара в корзине
function productGeneration() {
    if (JSON.parse(localStorage.getItem('trashTotal')) == null) {
        productTotalQuantity.innerText = '0'
        productTrash.insertAdjacentHTML('beforeend', `<h1 id="empty_trash">В корзине пока ничего нет</h1>`)
    }
    else {
        productTotalQuantity.innerText = JSON.parse(localStorage.getItem('trashTotal')).quantityOfProduct
    }
    for (i = 0; i < 9; i++) {
        if (JSON.parse(localStorage.getItem(`Product${i}`)) == null) {
            continue
        }
        else {
            productTrash.insertAdjacentHTML('beforeend', `<div class="row_box" id="row_box${i}">
            <img src="./img/zaryad.svg" class="logo" alt="logo">
            <div class="column">
                <h5>${JSON.parse(localStorage.getItem(`Product${i}`)).nameProduct}</h5>
                <h6>заряды</h6>
            </div>
            <div class="column">
                <img src="./img/strelaLeft.svg" alt="strela" id="button_decrease_${i}">
                <span id="quantity_${i}">${JSON.parse(localStorage.getItem(`Product${i}`)).quantityProduct}</span>
                <img src="./img/strelaRight.svg" alt="strela" id="button_increase_${i}">
            </div>
            <div class="column">
                <span id="price_${i}">${JSON.parse(localStorage.getItem(`Product${i}`)).totalPriceProduct}</span>
                <span>₽</span>
            </div>
        </div>`)
        }
    }
}

// Сохранение кнопок декремента, инкремента в массив
function setProductQuantity() {
    buttonChangingQuantity = new Array
    for (i = 0; i < 9; i++) {
        if (JSON.parse(localStorage.getItem(`Product${i}`)) == null) {
            continue
        }
        else {
            buttonChangingQuantity[i] = { buttonDecrease: document.getElementById(`button_decrease_${i}`), buttonIncrease: document.getElementById(`button_increase_${i}`) }
        }
    }
}

// Работа кнопок декремента, инкремента
function changeInformationToButton() {
    buttonChangingQuantity.forEach(function (buttonChanging, i) {
        buttonChanging.buttonIncrease.onclick = () => (setProductDescriptionIncrease(`Product${i}`, i))
        buttonChanging.buttonDecrease.onclick = () => (setProductDescriptionDecrease(`Product${i}`, i))
    })
}
// Изменение количества и цены товара при инкременте
function setProductDescriptionIncrease(Product, quantityProductTrash) {
    const curentStorage = JSON.parse(localStorage.getItem(Product))
    const curentStorageTrash = JSON.parse(localStorage.getItem('trashTotal'))
    const newItemStoreQuantity = ++curentStorage.quantityProduct
    const newItemStoreQuantityTrash = ++curentStorageTrash.quantityOfProduct
    const newItemStorePrice = curentStorage.totalPriceProduct + curentStorage.initialPriceProduct
    curentStorage.quantityProduct = newItemStoreQuantity
    curentStorageTrash.quantityOfProduct = newItemStoreQuantityTrash
    curentStorage.totalPriceProduct = newItemStorePrice
    localStorage.setItem(Product, JSON.stringify(curentStorage))
    localStorage.setItem('trashTotal', JSON.stringify(curentStorageTrash))
    document.getElementById(`quantity_${quantityProductTrash}`).innerText = curentStorage.quantityProduct
    document.getElementById(`price_${quantityProductTrash}`).innerText = curentStorage.totalPriceProduct
    productTotalQuantity.innerText = newItemStoreQuantityTrash
    setTotalPrice()
    setQuantityTrash()
}
// Изменение количества и цены товара при декременте
function setProductDescriptionDecrease(Product, quantityProductTrash) {
    const curentStorage = JSON.parse(localStorage.getItem(Product))
    const curentStorageTrash = JSON.parse(localStorage.getItem('trashTotal'))
    if (curentStorage.quantityProduct > 1) {
        const newItemStoreQuantity = --curentStorage.quantityProduct
        const newItemStoreQuantityTrash = --curentStorageTrash.quantityOfProduct
        const newItemStorePrice = curentStorage.totalPriceProduct - curentStorage.initialPriceProduct
        curentStorage.quantityProduct = newItemStoreQuantity
        curentStorageTrash.quantityOfProduct = newItemStoreQuantityTrash
        curentStorage.totalPriceProduct = newItemStorePrice
        localStorage.setItem(Product, JSON.stringify(curentStorage))
        localStorage.setItem('trashTotal', JSON.stringify(curentStorageTrash))
        document.getElementById(`quantity_${quantityProductTrash}`).innerText = curentStorage.quantityProduct
        document.getElementById(`price_${quantityProductTrash}`).innerText = curentStorage.totalPriceProduct
        productTotalQuantity.innerText = newItemStoreQuantityTrash
        setTotalPrice()
        setQuantityTrash()

    }
    else {
        if (confirm('Вы действительно хотите удалить товар?')) {
            console.log("Удален товар.")
            localStorage.removeItem(Product)
            const newItemStoreQuantityTrash = --curentStorageTrash.quantityOfProduct
            const newItemStorePrice = curentStorage.totalPriceProduct - curentStorage.initialPriceProduct
            curentStorageTrash.quantityOfProduct = newItemStoreQuantityTrash
            curentStorage.totalPriceProduct = newItemStorePrice
            localStorage.setItem('trashTotal', JSON.stringify(curentStorageTrash))
            document.getElementById(`price_${quantityProductTrash}`).innerText = curentStorage.totalPriceProduct
            productTotalQuantity.innerText = newItemStoreQuantityTrash
            document.getElementById(`row_box${quantityProductTrash}`).remove()
            setTotalPrice()
            setQuantityTrash()
            if (localStorage.length <= 1) {
                clearTrash()
            }
        }
    }
}

// Подсчёт общей цены
function setTotalPrice() {
    let fullPrice = 0
    let curentStorage = JSON.parse(localStorage.getItem('trashTotal'))
    const productTotalPrice = document.getElementById('full_price')
    for (i = 0; i < 9; i++) {
        if (JSON.parse(localStorage.getItem(`Product${i}`)) == null) {
            continue
        }
        else {
            fullPrice = fullPrice + JSON.parse(localStorage.getItem(`Product${i}`)).totalPriceProduct
        }
    }
    productTotalPrice.innerText = fullPrice + '₽'
    if (JSON.parse(localStorage.getItem('trashTotal')) != null) {
        curentStorage.trashTotal = fullPrice
        localStorage.setItem('trashTotal', JSON.stringify(curentStorage))
    }
}

// Количество товаров в иконке корзины
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
// Очистка корзины
function clearTrash() {
    localStorage.clear()
    location.reload(true)
}
// Проверка валидности введенных данных (ФИО, номер телефона)
function checkingCustomerInformation() {
    let name, tel
    name = prompt('Введите, пожалуйста, Ваше ФИО:', 'Иванов Иван Иванович')
    name ? tel = prompt('Введите Ваш номер телефона:', 'X-XXX-XXX-XX-XX'): ''
    tel ? sendJSON(name, tel): ''
}
// Отправка данных на Back-End
function sendJSON(name, tel) {
    if (JSON.parse(localStorage.getItem('trashTotal')) != null) {
        let curentStorage = JSON.parse(localStorage.getItem('clientInformation'))
        if (!curentStorage) {
            const newItemStore = { nameClient: name, telClient: tel }
            curentStorage = newItemStore
            localStorage.setItem('clientInformation', JSON.stringify(curentStorage))
        }
        let xhr = new XMLHttpRequest();
        let url = " ";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        let data = JSON.stringify(localStorage)
        xhr.send(data);
        productTrash.innerHTML = `<h1 id="empty_trash">Спасибо за покупку! <br/> Мы с Вами свяжемся</h1>`
        setTimeout(() => (clearTrash()), 1500)
    }
}
productGeneration()
setProductQuantity()
changeInformationToButton()
setTotalPrice()
setQuantityTrash()
clearTrashProduction.onclick = () => (clearTrash())
buttonBackEnd.onclick = () => (checkingCustomerInformation())
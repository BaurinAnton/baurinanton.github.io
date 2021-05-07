let bellOrder = document.getElementById('bell_order')
const bellOrderDesktop = `<a href="#contacts" class="box_bell">
                            <span>ЗАКАЗАТЬ</span>
                            <div>
                                <img src="./img/Main/SectionMain/bell.svg" alt="bell">
                            </div>
                            </a>`
const bellOrderMobile = `<a href="tel:+79255428463" class="box_bell">
                            <span>ЗАКАЗАТЬ</span>
                            <div>
                                <img src="./img/Main/SectionMain/bell.svg" alt="bell">
                            </div>
                            </a>`
function changeBellOrder() {
    if (window.innerWidth > 992) {
        bellOrder.innerHTML = bellOrderDesktop
    }
    else if (window.innerWidth <= 992) {
        bellOrder.innerHTML = bellOrderMobile
    }
}
changeBellOrder()
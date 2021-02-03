let button1 = document.getElementById('activeButtonNav1')
let button2 = document.getElementById('activeButtonNav2')
let button3 = document.getElementById('activeButtonNav3')
let button4 = document.getElementById('activeButtonNav4')
let button5 = document.getElementById('activeButtonNav5')
button1.onclick = () => {
    button2.classList.remove('activeButton')     
    button3.classList.remove('activeButton')     
    button4.classList.remove('activeButton')     
    button5.classList.remove('activeButton')
    button1.classList.add('activeButton')     
}
button2.onclick = () => {
    button1.classList.remove('activeButton')     
    button3.classList.remove('activeButton')     
    button4.classList.remove('activeButton')     
    button5.classList.remove('activeButton')
    button2.classList.add('activeButton')     
}
button3.onclick = () => {
    button1.classList.remove('activeButton')     
    button2.classList.remove('activeButton')     
    button4.classList.remove('activeButton')     
    button5.classList.remove('activeButton')
    button3.classList.add('activeButton')     
}
button4.onclick = () => {
    button1.classList.remove('activeButton')     
    button2.classList.remove('activeButton')     
    button3.classList.remove('activeButton')     
    button5.classList.remove('activeButton')
    button4.classList.add('activeButton')     
}
button5.onclick = () => {
    button1.classList.remove('activeButton')     
    button2.classList.remove('activeButton')     
    button3.classList.remove('activeButton')     
    button4.classList.remove('activeButton')
    button5.classList.add('activeButton')     
}
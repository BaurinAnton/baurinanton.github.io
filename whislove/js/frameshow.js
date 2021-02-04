let sectionFrame = document.getElementById('sectionShow')
let buttonShow = document.getElementById('buttonFrameShow')
let removeSection = document.getElementById('sectionHide')
let overflow = document.getElementById('body')
buttonShow.onclick = () => {
    sectionFrame.style.display = 'grid'
    overflow.style.overflow = 'hidden'
}
removeSection.onclick = () => {
    sectionFrame.style.display = 'none'
    overflow.style.overflow = 'auto'
}

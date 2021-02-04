let sectionFrame = document.getElementById('sectionShow')
let buttonShow = document.getElementById('buttonFrameShow')
let removeSection = document.getElementById('sectionHide')
buttonShow.onclick = () => {
    sectionFrame.style.display = 'grid'
}
removeSection.onclick = () => {
    sectionFrame.style.display = 'none'
}

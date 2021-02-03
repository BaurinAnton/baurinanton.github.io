let hide = document.getElementById('showHideButton')
let collapse = document.getElementById('divCollapse')
hide.onclick = () => {
    if (collapse.style.display == 'none') {
        collapse.style.display = 'flex'           
    }
    else if (collapse.style.display == 'flex') {
        collapse.style.display = 'none'    
    }   
};
let activeMenuOne = document.getElementById('activemenu1')
let activeMenuTo = document.getElementById('activemenu2')
let activeMenuTri = document.getElementById('activemenu3')
activeMenuOne.onclick = () => {
    activeMenuTo.classList.remove('activeButton') 
    activeMenuTri.classList.remove('activeButton') 
    activeMenuOne.classList.add('activeButton') 
    collapse.style.display = 'none'
};
activeMenuTo.onclick = () => {
    activeMenuOne.classList.remove('activeButton') 
    activeMenuTri.classList.remove('activeButton') 
    activeMenuTo.classList.add('activeButton') 
    collapse.style.display = 'none'    
};
activeMenuTri.onclick = () => {
    activeMenuOne.classList.remove('activeButton') 
    activeMenuTo.classList.remove('activeButton') 
    activeMenuTri.classList.add('activeButton')
    collapse.style.display = 'none'     
};

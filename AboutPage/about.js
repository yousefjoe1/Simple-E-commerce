const openMenu = document.querySelector('.open-menu') 
const headerUl = document.querySelector('header ul')
const closeMenu = document.querySelector('.close-menu')
openMenu.addEventListener('click',()=> {
    headerUl.style.right = '1px'
})

closeMenu.addEventListener('click',()=> {
    headerUl.style.right = '-300px'
})
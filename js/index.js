const botaoMenu = document.querySelector('.menu-button')
const menuLateral = document.querySelector('.nav')
const main = document.querySelector('.main')

botaoMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('nav--active')
})
main.addEventListener('click', () => {
    menuLateral.classList.remove('nav--active')
})
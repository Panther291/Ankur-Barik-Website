const hamMenu = document.querySelector('#ham-menu')
const offScreen = document.querySelector('#off-screen-menu')
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('ham-menu-active')
    offScreen.classList.toggle('off-screen-menu-active')
})


const menuIcon = document.querySelector('#menuIcon')
menu = document.querySelector('#menu-content')

menuIcon.addEventListener('click', (e) => {

    menu.classList.toggle('activate');
    document.body.classList.toggle('opacity')

    const route = e.target.getAttribute('src');

    if(route == "/imgs/main/mobile/burger-menu.webp") {
        e.target.setAttribute('src', "/imgs/main/mobile/burger-menu-clear.webp")
    } else {
        e.target.setAttribute('src', "/imgs/main/mobile/burger-menu.webp")
    }
})
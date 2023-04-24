

const menuIcon = document.querySelector('#menuIcon')
menu = document.querySelector('#menu-content')

menuIcon.addEventListener('click', (e) => {

    menu.classList.toggle('activate');
    document.body.classList.toggle('opacity')

    const route = e.target.getAttribute('src');

    if(route == "/assets/bx-menu.svg") {
        e.target.setAttribute('src', "/assets/bx-menu2.svg")
    } else {
        e.target.setAttribute('src', "/assets/bx-menu.svg")
    }
})
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import hamburguerMenu from '@assets/bx-menu.svg'

import style from '@styles/css/menuMobile.css'

const MenuPhone = () => {
    
    const [menu, setMenu] = useState(false)

    return (
        <menu className={style.menuMobile}>
        <img id="menuIcon" src={hamburguerMenu} onClick={() => {setMenu(!menu)}} alt="hamburger-icon" />
        <ul className={menu ? style.activate : style.opacity} id="menu-content">
            <p><u>Menú</u></p>
            <li>
                <Link to="/">Main</Link>
            </li>
            <li>
                <Link to="/about">About me</Link>
            </li>
            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        </menu>
    )
}

export default MenuPhone
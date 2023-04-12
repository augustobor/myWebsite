import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import style from '../style/css/menuMobile'

const MenuPhone = () => {
    
    const [menu, setMenu] = useState(false)

    return (
        <menu className={style.menuMobile}>
        <img id="menuIcon" src="/assets/bx-menu.svg" onClick={() => {setMenu(!menu)}} alt="hamburger-icon" />
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
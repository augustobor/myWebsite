import React from 'react'

import style from '@styles/css/menuDesktop.module.css'

const MenuDesktop = () => {

    return (
        <menu className={style.MenuDesktop}>
         <ul id="menu-content">
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

export default MenuDesktop
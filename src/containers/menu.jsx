import React from 'react'
import MenuPhone from '@components/menuPhone'
import MenuDesktop from '@components/menuDesktop' 


const Menu = () => {
    const screenWidth = screen.width
    return (
    (screenWidth > 620)
        ? <MenuPhone />
        : <MenuDesktop />
    )
}

export default Menu
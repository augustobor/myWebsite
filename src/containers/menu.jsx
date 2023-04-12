import React from 'react'

const Menu = () => {
    const screenWidth = screen.width
    return (
    (screenWidth > 620)
        ? <MenuPhone />
        : <MenuDesktop />
    )
}

export default Menu
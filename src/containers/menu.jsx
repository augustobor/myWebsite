import React from 'react'
import MenuPhone from '@components/menuPhone'
import MenuDesktop from '@components/menuDesktop' 


const Menu = () => {
    return (
    (window.innerWidth < 760)
        ? <MenuPhone />
        : <MenuDesktop />
    )
}

export default Menu
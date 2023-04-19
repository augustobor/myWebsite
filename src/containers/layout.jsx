import React from 'react'
import Footer from '../components/footer'
import Menu from '../containers/menu'


const Layout = (children) => {
    <>
        <Menu />
            {children}
        <Footer />
    </>
}

export default Layout
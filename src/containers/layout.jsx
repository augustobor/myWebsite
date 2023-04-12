import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'


const Layout = ({ children }) => {
    <>
        <Header />
        {children}
        <Footer />
    </>
}

export default Layout
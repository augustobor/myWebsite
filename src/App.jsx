import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '@pages/main'
import About from '@pages/about'
import Portfolio from '@pages/portfolio'
import Contact from '@pages/contact'
import Menu from '@containers/menu.jsx'
import Footer from '@components/footer.jsx'

import '@styles/css/style.config.module.css'

const App = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route exact path='/' element={<Main />}/>
                <Route exact path='/about' element={<About />}/>
                <Route exact path='/portfolio' element={<Portfolio />}/>
                <Route exact path='/contact' element={<Contact />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
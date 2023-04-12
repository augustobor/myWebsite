import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/main'
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import Layout from './containers/layout'

const App = () => {
    return (
        <Layout>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Main />}/>
                    <Route exact path='/about' element={<About />}/>
                    <Route exact path='/portfolio' element={<Portfolio />}/>
                    <Route exact path='/contact' element={<Contact />}/>
                </Routes>
            </BrowserRouter>
        </Layout>
    )
}

export default App
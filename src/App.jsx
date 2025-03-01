import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '@pages/main'
import Footer from '@components/footer.jsx'

import '@styles/css/style.config.module.css'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Main />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
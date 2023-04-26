 
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import './styles/App.scss'

import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Services from './components/Services'
import './styles/mediaquery.scss'
const App = () => {
  return (
    <div>
        <Router>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='services' element={<Services />} />

           
          </Routes>
          <Footer />
        </Router>
    </div>
  )
}

export default App

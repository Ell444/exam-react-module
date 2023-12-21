import { useState, useEffect } from 'react'
import './App.scss'
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'



function App() {



  return (<>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='about' element={<AboutPage />} />
      <Route path='search' element={<SearchPage />} />
    </Routes>

  </>)
}

export default App

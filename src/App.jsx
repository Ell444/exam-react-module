import { useState, useEffect } from 'react'
import './App.scss'
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'


function App() {



  return (<>
    <div>
      <SearchPage />
      <HomePage />
      <AboutPage />


    </div>
  </>)
}

export default App

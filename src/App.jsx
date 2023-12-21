import './App.scss'
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import PersonPage from './components/PersonPage'
const apiKey = import.meta.env.VITE_API_KEY;



function App() {



  return (<>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/person/:id' element={<PersonPage />} />
    </Routes>

  </>)
}

export default App

import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/pages/Home'
import Personajes from './components/pages/Personajes'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:id' element={<Personajes/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

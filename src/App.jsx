import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Personajes from './components/Personajes'
import Planetas from './components/Planetas'
import Navbar from './components/navbar'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Personajes />} />
        <Route path="/personajes" element={<Personajes></Personajes>} />
        <Route path='/Planetas' element={<Planetas></Planetas>}> </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}


export default App

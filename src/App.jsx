import React from 'react'
import Navber from './Component/Navbar/Navber'
import Inicio from './Component/Inicio'
import Tienda from './Component/Tienda'
import Contacto from './Component/Contacto'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'

const App = () => {
  return (
    <div>
     <Navber/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/inicio' element={ <Inicio/>}/>
        <Route path='/tienda' element={ <Tienda/>}/>
        <Route path='/contacto' element={ <Contacto/>}/>
      </Routes>
    </div>
  )
}

export default App
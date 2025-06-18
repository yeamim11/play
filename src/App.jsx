import React from 'react'
import Navber from './Component/Navbar/Navber'
import Inicio from './Component/Inicio'
import Tienda from './Component/Tienda'
import Contacto from './Component/Contacto'


const App = () => {
  return (
    <div>
      <Navber />
      <Inicio />
      <Tienda />
      <Contacto />
    </div>
  )
}

export default App
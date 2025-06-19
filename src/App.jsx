import React, { useEffect } from 'react'
import Navber from './Component/Navbar/Navber'
import Inicio from './Component/Inicio'
import Tienda from './Component/Tienda'
import Contacto from './Component/Contacto'
import Banner from './Component/Banner'
import Aos from 'aos'
import 'aos/dist/aos.css'


const App = () => {
    
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  })
  
  return (
    <div>
      <Navber />
      <Banner/>
      <Inicio />
      <Tienda />
      <Contacto />
    </div>
  )
}

export default App
import React from 'react'

const Navber = () => {
  return (
    <div className='bg-gray-800 text-white p-4 flex justify-between items-center'>
      <div className='text-2xl font-bold'>
        <a href="/">Mi Tienda</a>
      </div>
      <nav className='space-x-4'>
        <a href="/" className='hover:text-gray-400'>Home</a>
        <a href="/inicio" className='hover:text-gray-400'>Inicio</a>
        <a href="/tienda" className='hover:text-gray-400'>Tienda</a>
        <a href="/contacto" className='hover:text-gray-400'>Contacto</a>
      </nav> 
    </div>
  )
}

export default Navber
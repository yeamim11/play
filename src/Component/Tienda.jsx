import React from 'react'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const Tienda = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-[#121212] text-white py-14 px-5 md:px-20 gap-14 md:gap-44 mt-10'>
      
      {/* Left Side - Seminarios */}
      <div className="text-center flex flex-col items-center justify-center gap-6 md:gap-9 px-2 md:px-20">
        <h2 className='text-3xl md:text-4xl font-semibold'>Seminarios</h2>
        <p className='text-lg md:text-xl font-medium'>
          Enterate acerca de nuestros seminarios
        </p>
        <button className="bg-[#FE7C45] hover:bg-[#e86c34] text-white font-semibold py-3 px-8 rounded-md transition duration-300 text-lg shadow-lg">
          Ver más 
        </button>
      </div>

      {/* Right Side - Info Card */}
      <div className="bg-[#FE7C45] text-white w-full max-w-sm mx-auto p-6 md:p-8 rounded-lg shadow-lg shadow-white/50">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">Info</h2>
        
        <div className="flex items-start gap-4 mb-5">
          <FiPhone size={24} />
          <div>
            <p className="font-semibold">Telefono:</p>
            <p>+54 9 113345679</p>
          </div>
        </div>

        <div className="flex items-start gap-4 mb-5">
          <FiMail size={24} />
          <div>
            <p className="font-semibold">E-mail:</p>
            <p>ACPFBA@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FiMapPin size={24} />
          <div>
            <p className="font-semibold">Dirección:</p>
            <p>Calle cualquiera 1234</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tienda
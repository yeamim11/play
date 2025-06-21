import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import asd from '../../assets/image-CB.png'

const Footer = () => {
  return (
      // <hr className='bg-white font-bold' />
    <div className='mt-7 bg-black py-10 grid grid-cols-1 md:grid-cols-2 text-white px-10 gap-10 md:gap-0'>
      
      <div className="flex flex-col justify-center items-center ">
        <p className='text-[22px] font-semibold'>
          Seguinos en nuestras redes sociales
        </p>
        <div className="flex justify-center md:justify-start mt-4 gap-10">
          <FaFacebookSquare className='text-4xl cursor-pointer hover:text-blue-600' />
          <FaInstagramSquare className='text-4xl cursor-pointer hover:text-pink-600' />
          <FaLinkedin className='text-4xl cursor-pointer hover:text-blue-700' />
        </div>
      </div>
      {/* ==================== */}
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white text-black p-2">
          <p className='text-center'>Desarrollado por :</p>
          <img src={asd} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer

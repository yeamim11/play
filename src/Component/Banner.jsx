import React from 'react'
import ball from '../assets/ball-img.png'
import whatsapp from '../assets/Whatsapp-Icon.png'
const Banner = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 bg-black text-white md:py-14 md:px-20 px-5 py-14 items-center ">
                <div className="img" >
                    <img src={ball} alt="ball" />
                </div>
                {/* ================= */}
                <div className="text">
                    <h1 className='text-right justify-start text-2xl md:text-4xl font-semibold'>
                        Asoc. Civil de Preparadores Físicos de Basquetbol Argentino
                    </h1>
                    <p className='text-right justify-start mt-14'>
                        Buscamos promover el desarrollo profesional y la excelencia en la preparación física de nuestros atletas. Trabajamos para potenciar el rendimiento de los jugadores y contribuir al crecimiento de nuestro deporte nacional. ¡Unite y juntos llevemos el básquet argentino a otro nivel!
                    </p>
                    <div className=" hidden md:flex justify-end items-center  md:mt-5">
                    <img src={whatsapp} alt="whatsapp" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
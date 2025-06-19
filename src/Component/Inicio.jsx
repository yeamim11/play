import React from 'react';
import card from '../assets/img-logo.png';

const cardData = [
  { title: 'Socio Nuevo', price: '$8.000' },
  { title: 'Socio Pleno', price: '$8.000' },
  { title: 'Renovación', price: '$6.500' },
];

const Inicio = () => {
  return (
    <div className='mt-7 bg-black py-10'>
      <h1 className="text-center text-white text-3xl md:text-4xl font-semibold mb-10">
        Asóciate
      </h1>

      <div className="px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" >
        {cardData.map((cardItem, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-start transition transform hover:-translate-y-2 hover:shadow-xl duration-300 w-[339px] h-[506px] mx-auto"
          >
            <h2 className="text-xl font-bold mb-2">ACPFBA</h2>
            <img src={card} alt="card" className="w-80  h-80 object-contain mb-4" />
            <div className="w-full px-5">
            <p className="text-lg font-medium mb-1">{cardItem.title}</p>
            <p className="text-xl font-bold mb-4">{cardItem.price}</p>
            <button className="w-full bg-[#FE7C45] hover:bg-[#e86c34] text-white py-2 px-4 font-semibold rounded transition duration-300">
              Comprar ahora
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inicio;

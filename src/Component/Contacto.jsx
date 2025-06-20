import React from 'react'
import man from '../assets/basket-player.png'

const Contacto = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "50e5de90-cfc8-4ff5-be69-e8cfbf75c146");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#121212] text-white py-14 px-5 md:px-20 gap-14 md:gap-44 mt-10">
      {/* Left Image */}
      <div className="flex justify-center items-center">
        <img src={man} alt="Basket Player" className="w-[300px] md:w-[400px]" />
      </div>

      {/* Right Form */}
      <div className="bg-[#1E1E1E] p-8 rounded-lg w-full shadow-lg">
        <h2 className="text-2xl text-white font-bold mb-6 text-center">Contactanos</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-3 rounded-md text-black bg-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Apellido"
              className="w-full p-3 rounded-md text-black bg-white focus:outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md text-black bg-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Telefono"
            className="w-full p-3 rounded-md text-black bg-white focus:outline-none"
          />
          <textarea
            placeholder="Mensaje"
            rows="4"
            className="w-full p-3 rounded-md text-black bg-white focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold py-3 rounded-md cursor-pointer"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contacto

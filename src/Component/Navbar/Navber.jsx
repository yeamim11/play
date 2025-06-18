// import React, { useState } from 'react'
// import { GiShoppingCart } from 'react-icons/gi';
// import { IoClose } from 'react-icons/io5';
// import { MdMenu } from 'react-icons/md';
// import { Link } from 'react-router-dom'

// const Navber = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className='bg-black text-white p-4 md:p-6 '>
//       <nav className='flex justify-between items-center mx-auto'>
//         <div>
//           <h1 className="text-white text-xl md:text-3xl font-bold"><a href="/">ACPFBA</a></h1>
//         </div>
//         {/* ================== */}
//         <div className='flex justify-between items-center gap-4 md:gap-10 font-semibold'>
//           <ul className="hidden md:flex justify-between items-center gap-10 text-white">
//             <li className="text-lg font-semibold transition-all duration-200 hover:text-[#FE7C45] hover:underline hover:underline-offset-4">
//               <Link to="/inicio">Inicio</Link>
//             </li>
//             <li className="text-lg font-semibold transition-all duration-200 hover:text-[#FE7C45] hover:underline hover:underline-offset-4">
//               <Link to="/contacto">Contacto</Link>
//             </li>
//             <li className="text-lg font-semibold transition-all duration-200 hover:text-[#FE7C45] hover:underline hover:underline-offset-4">
//               <Link to="/tienda">Tienda</Link>
//             </li>
//             <button className="px-5 py-1 bg-[#fe7c45] text-black text-lg font-semibold hover:scale-105">
//               Login
//             </button>
//           </ul>
//           <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(true)}>
//             <MdMenu />
//           </button>
//           <GiShoppingCart className='w-[45px] h-[45px] text-white' />
//         </div>
//         {/* ============================= mobile ======================= */}
//         <div className={`fixed top-0 right-0 w-64 h-screen bg-[#FE7C45]/90 text-white flex flex-col items-start gap-6 p-6 transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 md:hidden`}>
//           <button className="absolute right-10 top-6 text-4xl mt-10" onClick={() => setMenuOpen(false)}>
//             <IoClose />
//           </button>

//           <ul className="mt-20 space-y-4">
//             <li><Link  className="text-lg font-semibold transition-all duration-200 hover:text-[#0c0c0c] hover:underline hover:underline-offset-4"to="/inicio" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
//             <li><Link  className="text-lg font-semibold transition-all duration-200 hover:text-[#0c0c0c] hover:underline hover:underline-offset-4"to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
//             <li><Link className="text-lg font-semibold transition-all duration-200 hover:text-[#0c0c0c] hover:underline hover:underline-offset-4" to="/tienda" onClick={() => setMenuOpen(false)}>Tienda</Link></li>
//           </ul>
//           <button onClick={() => setMenuOpen(false)} className="px-5 py-1 bg-[#090909] text-white text-lg font-semibold hover:scale-105">
//               Login
//             </button>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navber







import React, { useState } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Login from './auth/Login'; // 🔗 Import Login Component

const Navber = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // 🔘 Show login modal

  return (
    <div className='bg-black text-white p-4 md:p-6 relative'>
      <nav className='flex justify-between items-center mx-auto'>
        <div>
          <h1 className="text-white text-xl md:text-3xl font-bold"><a href="/">ACPFBA</a></h1>
        </div>
        <div className='flex justify-between items-center gap-4 md:gap-10 font-semibold'>
          <ul className="hidden md:flex justify-between items-center gap-10 text-white">
            <li className="text-lg font-semibold transition-all duration-200 hover:text-[#FE7C45] hover:underline hover:underline-offset-4">
              <Link to="/inicio">Inicio</Link>
            </li>
            <li className="text-lg font-semibold transition-all duration-200 hover:text-[#FE7C45] hover:underline hover:underline-offset-4">
              <Link to="/contacto">Contacto</Link>
            </li>
            <li className="text-lg font-semibold transition-all duration-200 hover:text-[#FE7C45] hover:underline hover:underline-offset-4">
              <Link to="/tienda">Tienda</Link>
            </li>
            <button
              onClick={() => setShowLogin(true)}
              className="px-5 py-1 bg-[#fe7c45] text-black text-lg font-semibold hover:scale-105"
            >
              Login
            </button>
          </ul>
          <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(true)}>
            <MdMenu />
          </button>
          <GiShoppingCart className='w-[45px] h-[45px] text-white' />
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 w-64 h-screen bg-[#FE7C45]/90 text-white flex flex-col items-start gap-6 p-6 transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 md:hidden`}>
          <button className="absolute right-10 top-6 text-4xl mt-10" onClick={() => setMenuOpen(false)}>
            <IoClose />
          </button>

          <ul className="mt-20 space-y-4">
            <li><Link className="text-lg font-semibold hover:underline" to="/inicio" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
            <li><Link className="text-lg font-semibold hover:underline" to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
            <li><Link className="text-lg font-semibold hover:underline" to="/tienda" onClick={() => setMenuOpen(false)}>Tienda</Link></li>
          </ul>
          <button
            onClick={() => {
              setMenuOpen(false);
              setShowLogin(true);
            }}
            className="px-5 py-1 bg-[#090909] text-white text-lg font-semibold hover:scale-105"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default Navber;
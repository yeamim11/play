import React from 'react';
import { IoClose } from 'react-icons/io5';
import basketball from '../../../assets/box.png'; // Replace with your image path

const Login = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-[#1f1f1f] rounded-lg w-[90%] md:w-[800px] flex flex-col md:flex-row overflow-hidden relative">
        <button className="absolute top-4 right-4 text-white text-2xl" onClick={onClose}><IoClose /></button>

        <div className="w-full md:w-1/2 p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">Log in</h2>
          <input type="email" placeholder="Email address or user name" className="w-full mb-4 p-2 rounded bg-black border border-gray-500" />
          <input type="password" placeholder="Password" className="w-full mb-4 p-2 rounded bg-black border border-gray-500" />

          <div className="flex items-center mb-2 ">
            <input  type="checkbox" className="mr-2 cursor-pointer" />
            <label className="text-sm">Remember me</label>
          </div>

          <div className="flex items-center mb-4 ">
            <input  type="checkbox" className="mr-2 cursor-pointer" />
            <label className="text-sm">By continuing, you agree to the Terms of Use and Privacy Policy</label>
          </div>

          <button onClick={onClose} className="bg-[#FE7C45] w-full py-2 rounded text-black font-semibold hover:scale-105 cursor-pointer">Log in</button>
          <p className="mt-2 text-center text-sm cursor-pointer text-gray-400 hover:underline">Forget your password</p>

          <hr className="my-4 border-gray-600" />

          <div className="flex justify-center gap-4">
            <span className="text-white text-sm">Or continue with</span>
          </div>

          <div className="flex justify-center gap-6 mt-4 cursor-pointer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6" />
            <img src="https://cdn-icons-png.flaticon.com/512/732/732228.png" alt="Apple" className="w-6" />
            <img src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="Google" className="w-6" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-6" />
          </div>
        </div>

        <div className="hidden md:block w-1/2">
          <img src={basketball} alt="Basketball" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Signup = () => {


  
  
  const handleRegister = (e) =>{
    e.preventDefault(true);

    
  }
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="w-full max-w-md p-6 bg-gray-500  shadow-xl rounded-2xl">
        <img
          className="mx-auto mb-4 h-16 w-auto"
          src={assets.logo}
          alt="logo"
        />
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Sign Up
        </h2>
        <form onSubmit={handleRegister}>
          <label className="block text-xl font-semibold mb-1">Username</label>
          <input
            type="text"
            placeholder="Enter Your Username"
            className="w-full mb-4 px-4 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="block text-xl font-semibold mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full mb-4 px-4 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="block text-xl font-semibold mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full mb-4 px-4 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="text-center text-base font-medium text-gray-900 mb-4">
            Have an account?
            <span className="ml-2 text-green-600 font-semibold cursor-pointer hover:underline">
              Login
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

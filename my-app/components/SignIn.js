"use client"
import React, { useState } from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { PiEyeSlashFill } from "react-icons/pi";
export default function LoginPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-full max-w-md p-8 bg-gray-900 rounded-lg shadow-lg">
        <p className="text-gray-400 text-center mb-6">SYNIMA - All in one platform for your business</p>
        <h2 className="text-2xl font-bold text-white text-center mb-4">Sign in</h2>

        <label className="block text-gray-400">Email</label>
        <input type="email" placeholder="your@email.com" className="w-full px-4 py-2 mt-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <label className="block text-gray-400 mt-4">Password</label>
        
        <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="••••••"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400 hover:text-white"
              onClick={togglePasswordVisibility}>{isPasswordVisible ?  <PiEyeSlashFill /> : <IoEyeSharp /> }</span>
          </div>

        <div className="flex items-center justify-between mt-4">
          <a className="text-blue-500 hover:underline cursor-pointer">Forgot your password?</a>
        </div>

        <button className="w-full mt-6 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-300 transition">Sign in</button>

        <p className="text-center text-gray-500 mt-4">Powered by <span className="text-blue-400">Syntigic Inc &copy;</span></p>
      </div>
    </div>
  );
}

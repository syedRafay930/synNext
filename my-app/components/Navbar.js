import React from 'react';
import { FiMenu } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiCircleAlert } from "react-icons/ci";

const Navbar = ({ toggleSidebar, selectedMenu = "Dashboard" }) => {
    return (
        <div className="sm:ml-64 relative z-50">
            <nav className="dark:bg-gray-900 p-4 flex justify-between items-center">
                <button onClick={toggleSidebar} className="sm:hidden text-gray-500 dark:text-white">
                    <FiMenu size={24} />
                </button>
                <div className="flex items-center gap-6 ml-auto text-2xl text-gray-900 dark:text-white">
                    <IoMailOutline />
                    <IoMdNotificationsOutline />
                    <CiCircleAlert />
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-[#2479c4]">
                <div className="max-w-screen-xl px-4 py-3 mx-auto flex justify-between items-center text-white text-xl font-bold">
                    <span>{selectedMenu}</span>
                    <nav className="hidden sm:flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li>
                                <a href="#" className="text-sm font-medium text-gray-300 hover:text-white">Home</a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                    <a href="#" className="ms-1 text-sm font-medium text-gray-300 hover:text-white md:ms-2">Menu</a>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                    <span className="ms-1 text-sm font-medium text-gray-400 md:ms-2">{selectedMenu}</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

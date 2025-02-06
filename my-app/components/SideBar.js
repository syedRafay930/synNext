import React, { useState } from 'react';
import { MdOutlineDashboard, MdOutlineCreate } from "react-icons/md";
import { FaListUl } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";
import { VscFileSymlinkDirectory } from "react-icons/vsc";
import { FiX } from "react-icons/fi";

const SideBar = ({ isOpen, toggleSidebar, setSelectedMenu }) => {
    return (
        <aside className={`fixed top-0 left-0 z-40 w-64 h-screen bg-white border-r border-gray-200 dark:bg-[#081627] dark:border-gray-700 transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`} aria-label="Sidebar">
            {/* Close Button for Mobile */}
            <button onClick={toggleSidebar} className="sm:hidden absolute top-4 right-4 text-gray-500 dark:text-white">
                <FiX size={24} />
            </button>
            
            {/* Logo Section */}
            <div className="flex items-center justify-start py-6 px-7 border-b border-gray-200 dark:border-gray-700">
                <a href="#" className="text-xl font-bold text-gray-900 dark:text-white tracking-widest">SYNIMA</a>
            </div>

            {/* Navigation Links */}
            <div className="h-full px-4 pb-4 overflow-y-auto bg-white dark:bg-[#081627]">
                <ul className="space-y-2 font-medium">
                    <li>
                        <button onClick={() => setSelectedMenu("Dashboard")} className="flex w-full text-left items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <MdOutlineDashboard className="text-lg" />
                            <span className="ml-3">Dashboard</span>
                        </button>
                    </li>

                    <hr className="my-4 border-gray-300 dark:border-gray-600" />

                    <li className="text-gray-500 uppercase text-sm font-bold px-3 pt-2 dark:text-gray-400">
                        Menu
                    </li>

                    <li>
                        <button onClick={() => setSelectedMenu("Create Profile")} className="flex w-full text-left items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <MdOutlineCreate className="text-lg" />
                           <a> <span className="ml-3">Create Profile</span></a>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setSelectedMenu("List of Users")} className="flex w-full text-left items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaListUl className="text-lg" />
                            <span className="ml-3">List of Users</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setSelectedMenu("List of Contacts")} className="flex w-full text-left items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <RiContactsLine className="text-lg" />
                            <span className="ml-3">List of Contacts</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setSelectedMenu("Contact Directory")} className="flex w-full text-left items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <VscFileSymlinkDirectory className="text-lg" />
                            <span className="ml-3">Contact Directory</span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default SideBar;

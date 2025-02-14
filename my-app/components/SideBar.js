import React, { useEffect } from 'react';
import { MdOutlineDashboard, MdOutlineCreate } from "react-icons/md";
import { FaListUl } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";
import { VscFileSymlinkDirectory } from "react-icons/vsc";
import { FiX } from "react-icons/fi";
import Link from 'next/link';

const SideBar = ({ isOpen, toggleSidebar, setSelectedMenu }) => {

    useEffect(() => {
        // Default active menu set karega agar localStorage empty hai
        if (!localStorage.getItem("activeMenu")) {
            localStorage.setItem("activeMenu", "Dashboard");
        }
    }, []);

    const handleMenuClick = (menuName) => {
        localStorage.setItem("activeMenu", menuName);
    };

    const activeMenu = localStorage.getItem("activeMenu");
    
    return (
        <aside
            className={`sticky top-0 left-0 z-40 w-64 h-[100px] bg-white dark:bg-[#081627] dark:border-gray-700 transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                } sm:translate-x-0`}
            aria-label="Sidebar"
        >
            {/* Close Button for Mobile */}
            <button onClick={toggleSidebar} className="sm:hidden absolute top-4 right-4 text-gray-500 dark:text-white">
                <FiX size={24} />
            </button>

            {/* Logo Section */}
            <div className="flex items-center justify-start py-3.5 px-7 border-b border-gray-200 dark:border-gray-700">
                <a href="#" className="text-xl font-bold text-gray-900 dark:text-white tracking-widest">
                    SYNIMA
                </a>
            </div>

            {/* Navigation Links */}
            <div className="h-screen px-4 pb-4 overflow-y-auto bg-white dark:bg-[#081627]">
                <ul className="space-y-2 font-medium">
                <li>
                        <Link href="/">
                            <button 
                                onClick={() => handleMenuClick("Dashboard")}
                                className={`flex w-full text-left items-center p-3 rounded-lg transition ${
                                    activeMenu === "Dashboard"
                                        ? "text-blue-500 border-l-4 mt-1 border-blue-500 dark:bg-gray-700"
                                        : "text-gray-900 dark:text-white mt-1 hover:bg-gray-100 dark:hover:bg-gray-700"
                                }`}
                            >
                                <MdOutlineDashboard />
                                <span className="ml-3">Dashboard</span>
                            </button>
                        </Link>
                    </li>
                
                    <li className="text-gray-500 uppercase text-sm font-bold px-3 pt-2 dark:text-gray-400">
                        Menu
                    </li>

                    <li>
                        <Link href="/CreateProfile">
                            <button 
                                onClick={() => handleMenuClick("Create User")}
                                className={`flex w-full text-left items-center p-3 rounded-lg transition ${
                                    activeMenu === "Create User"
                                        ? "text-blue-500 border-l-4 border-blue-500 bg-gray-100 dark:bg-gray-700"
                                        : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                }`}
                            >
                                <MdOutlineCreate />
                                <span className="ml-3">Create User</span>
                            </button>
                        </Link>
                    </li>

                    <li>
                        <Link href="/UserList">
                            <button 
                                onClick={() => handleMenuClick("List of Users")}
                                className={`flex w-full text-left items-center p-3 rounded-lg transition ${
                                    activeMenu === "List of Users"
                                        ? "text-blue-500 border-l-4 border-blue-500 bg-gray-100 dark:bg-gray-700"
                                        : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                }`}
                            >
                                <FaListUl />
                                <span className="ml-3">List of Users</span>
                            </button>
                        </Link>
                    </li>

                    <li>
                        <Link href="/ContactList">
                            <button 
                                onClick={() => handleMenuClick("List of Contacts")}
                                className={`flex w-full text-left items-center p-3 rounded-lg transition ${
                                    activeMenu === "List of Contacts"
                                        ? "text-blue-500 border-l-4 border-blue-500 bg-gray-100 dark:bg-gray-700"
                                        : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                }`}
                            >
                                <RiContactsLine />
                                <span className="ml-3">List of Contacts</span>
                            </button>
                        </Link>
                    </li>

                    <li>
                        <Link href="/ContactDirectory">
                            <button 
                                onClick={() => handleMenuClick("Contact Directory")}
                                className={`flex w-full text-left items-center p-3 rounded-lg transition ${
                                    activeMenu === "Contact Directory"
                                        ? "text-blue-500 border-l-4 border-blue-500 bg-gray-100 dark:bg-gray-700"
                                        : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                }`}
                            >
                                <VscFileSymlinkDirectory />
                                <span className="ml-3">Contact Directory</span>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default SideBar;

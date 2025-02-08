import React, { useState } from 'react';
import { MdOutlineDashboard, MdOutlineCreate } from "react-icons/md";
import { FaListUl } from "react-icons/fa6";
import { RiContactsLine } from "react-icons/ri";
import { VscFileSymlinkDirectory } from "react-icons/vsc";
import { FiX } from "react-icons/fi";
import Link from 'next/link';
const SideBar = React.memo(({ isOpen, toggleSidebar, setSelectedMenu }) => { 
    
    return (
        <aside className={`fixed top-0 left-0 z-40 w-64 h-screen bg-white border-r border-gray-200 dark:bg-[#081627] dark:border-gray-700 transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`} aria-label="Sidebar">
            {/* Close Button for Mobile */}
            <button onClick={toggleSidebar} className="sm:hidden absolute top-4 right-4 text-gray-500 dark:text-white">
                <FiX size={24} />
            </button>

            {/* Logo Section */}
            <div className="flex items-center justify-start py-3.5 px-7 border-b border-gray-200 dark:border-gray-700">
                <a href="#" className="text-xl font-bold text-gray-900 dark:text-white tracking-widest">SYNIMA</a>
            </div>

            {/* Navigation Links */}
            <div className="h-full px-4 pb-4 overflow-y-auto bg-white dark:bg-[#081627]">
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link href="/">
                            <button onClick={() => setSelectedMenu("Dashboard")} className="flex w-full text-left items-center p-3 text-gray-900 rounded-none border-b border-gray-200 dark:border-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <MdOutlineDashboard className="text-lg" />
                                <span className="ml-3">Dashboard</span>
                            </button>
                        </Link>
                    </li>

                    <li className="text-gray-500 uppercase text-sm font-bold px-3 pt-2 dark:text-gray-400">
                        Menu
                    </li>

                    <li>
                        <Link href="/CreateProfile">
                            <button onClick={() => setSelectedMenu("Create User")} className="flex w-full text-left items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <MdOutlineCreate className="text-lg" />
                                <span className="ml-3">Create User</span>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/UserList">
                            <button onClick={() => setSelectedMenu("List of Users")} className="flex w-full text-left items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FaListUl className="text-lg" />
                                <span className="ml-3">List of Users</span>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/ContactList">
                            <button onClick={() => setSelectedMenu("List of Contacts")} className="flex w-full text-left items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <RiContactsLine className="text-lg" />
                                <span className="ml-3">List of Contacts</span>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/ContactDirectory">
                            <button onClick={() => setSelectedMenu("Contact Directory")} className="flex w-full text-left items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <VscFileSymlinkDirectory className="text-lg" />
                                <span className="ml-3">Contact Directory</span>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
});

export default SideBar;

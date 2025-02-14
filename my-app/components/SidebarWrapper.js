"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";

export default function SidebarWrapper({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const pathname = usePathname(); 

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const isSignInRoute = pathname === "/SignIn";
  const contentClass = isSignInRoute ? '' : 'p-1 pt-[7rem] bg-gray-100 w-full min-h-screen'; 

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar for larger screens, and overlay on mobile */}
      {!isSignInRoute && (
        <>
          <div className={`fixed top-0 left-0  z-50 h-screen w-64 shadow-lg transition-transform transform ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} md:relative md:translate-x-0`}>
            <SideBar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} setSelectedMenu={setSelectedMenu} />
          </div>
        </>
      )}

      <div className="flex-1 flex flex-col w-full">

        {!isSignInRoute && (
          <div className="fixed top-0 w-full z-40 transition-transform duration-300">
          <Navbar toggleSidebar={toggleSidebar} selectedMenu={selectedMenu} />
          </div>
        )}

        <main className={`${contentClass}`}>
          {children}
        </main>
      </div>
    </div>
  );
}

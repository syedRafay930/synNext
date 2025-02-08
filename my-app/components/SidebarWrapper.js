"use client";
import { useState } from "react";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";

export default function SidebarWrapper({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        setSelectedMenu={setSelectedMenu}
      />

      {/* Content Area with Navbar & Page Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? "ml-64" : "sm:ml-0"}`}>
        {/* Navbar */}
        <Navbar
          isOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          selectedMenu={selectedMenu}
        />

        {/* Page Content */}
        <main className="p-4 sm:ml-64 mt-[7rem]">{children}</main>
      </div>
    </div>
  );
}
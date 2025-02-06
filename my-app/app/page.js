"use client";
import { useState } from "react";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    
  };
  return (
    <div className="flex">
      <SideBar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} setSelectedMenu={setSelectedMenu} />
      <div className={`w-full transition-all duration-300 ${sidebarOpen ? "ml-64" : "sm:ml-0"}`}>
        <Navbar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} selectedMenu={selectedMenu} />
      </div>
    </div>
  );
}

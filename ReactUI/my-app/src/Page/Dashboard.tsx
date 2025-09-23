import { useState } from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";

export default function DashBoard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}       // trạng thái mở/đóng
        onToggle={() => setSidebarOpen(!sidebarOpen)} // callback toggle (dùng nếu muốn nút toggle trong Sidebar)
      />

      {/* Content area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Main content */}
        <main className="flex-1 p-6 bg-gray-100 overflow-auto">
          <h1 className="text-2xl font-bold">DashBoard</h1>
        </main>
      </div>
    </div>
  );
}

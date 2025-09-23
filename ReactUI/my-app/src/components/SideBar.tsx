import React, { type JSX } from "react";
import { FaHome, FaUser, FaCog, FaBox } from "react-icons/fa";
import { FaDashcube, FaHouseChimneyUser } from "react-icons/fa6";

interface MenuItem {
  name: string;
  icon: JSX.Element;
  path: string;
}

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void; // callback để toggle
}

const menuItems: MenuItem[] = [
  { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
  { name: "Module", icon: <FaBox />, path: "/Module" },
  { name: "tenant", icon: <FaHouseChimneyUser />, path: "/Module" },
  { name: "Settings", icon: <FaCog />, path: "/settings" },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`bg-[#008CB8] text-white font-bold text-1xl h-screen p-4 relative transition-all duration-500 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Nút toggle luôn hiển thị */}
   {/* Logo trên, tên dưới */}
       <div className="flex flex-col items-center mb-6 h-20">
        <div className={`${isOpen ? "visible" : "invisible"}  flex flex-col items-center`}>
          <img
            src="imgpublic/NGS.png"
            alt="Logo"
            className="w-40 h-16 object-cover mb-2"
          />
          <span className="text-xl font-bold text-center">NextGenSchool</span>
        </div>
      </div>

     <ul className="mt-4 flex flex-col gap-2">
  {menuItems.map((item) => (
    <li
      key={item.name}
      className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 cursor-pointer"
    >
      {/* Icon luôn có width cố định */}
      <span className="w-6 h-6 flex items-center justify-center text-lg">
        {item.icon}
      </span>

      {/* Text chỉ hiển thị khi sidebar mở */}
      {isOpen && <span className="whitespace-nowrap">{item.name}</span>}
    </li>
  ))}
</ul>
    </div>
  );
};

export default Sidebar;

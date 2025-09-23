import React, { type JSX } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaCog, FaBox } from "react-icons/fa";
import { FaHouseChimneyUser } from "react-icons/fa6";

interface MenuItem {
  name: string;
  icon: JSX.Element;
  path: string;
}

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const menuItems: MenuItem[] = [
  { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
  { name: "Module", icon: <FaBox />, path: "/module" },
  { name: "Tenant", icon: <FaHouseChimneyUser />, path: "/tenant" },
  { name: "Settings", icon: <FaCog />, path: "/settings" },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`bg-[#008CB8] text-white font-bold h-screen p-4 relative transition-all duration-500 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Logo */}
      <div className="flex flex-col items-center mb-6 h-20">
        {isOpen ? (
          <div className="flex flex-col items-center">
            <img
              src="/imgpublic/NGS.png"
              alt="Logo"
              className="w-40 h-16 object-cover mb-2"
            />
            <span className="text-xl font-bold text-center">NextGenSchool</span>
          </div>
        ) : (
          // Khi thu gọn: giữ khoảng trống, nhưng logo ẩn đi để không ảnh hưởng icon
          <div className="w-10 h-10" />
        )}
      </div>

      {/* Menu */}
      <ul className="mt-4 flex flex-col gap-2">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded cursor-pointer transition ${
                  isActive ? "bg-white text-[#008CB8]" : "hover:bg-gray-700"
                }`
              }
            >
              <span className="w-6 h-6 flex items-center justify-center text-lg">
                {item.icon}
              </span>
              {isOpen && <span className="whitespace-nowrap">{item.name}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

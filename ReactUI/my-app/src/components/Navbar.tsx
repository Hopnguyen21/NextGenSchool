import React from "react";
import { FaBars, FaBell } from "react-icons/fa";
import DropdownMenu from "../components/Navcompo/DropdownMenu";
import { useUser } from "../Context/UserContext";

interface NavbarProps {
  onToggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const { user } = useUser(); // Lấy thông tin user từ context

  return (
    <nav className="bg-white shadow px-4 py-2 flex items-center justify-between sticky top-0 z-50">
      {/* Left: toggle + logo + title */}
      <div className="flex items-center gap-4">
        <button onClick={onToggleSidebar} className="text-gray-600 text-xl focus:outline-none">
          <FaBars />
        </button>
        <img src="imgpublic/NGS.png" alt="Logo" className="w-30 h-10 object-cover mb-1" />
        <span className="font-bold text-lg">My Dashboard</span>
      </div>

      {/* Right: notifications + dropdown */}
      <div className="flex items-center gap-4">
        <button className="relative text-gray-600 text-xl focus:outline-none">
          <FaBell />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>

        {/* Truyền userName + roleName từ context */}
        <DropdownMenu
          userName={user?.userName}
          roleName={user?.roleName}
          avatarUrl={user?.avatarUrl}
        />
      </div>
    </nav>
  );
};

export default Navbar;

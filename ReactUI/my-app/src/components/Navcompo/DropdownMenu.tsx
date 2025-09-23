import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

interface DropdownMenuProps {
  userName?: string;
  avatarUrl?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ userName = "John Doe", avatarUrl }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 focus:outline-none"
      >
        {avatarUrl ? (
          <img src={avatarUrl} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
        ) : (
          <FaUserCircle className="w-8 h-8 text-gray-600" />
        )}
        <span className="hidden md:block">{userName}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-40 bg-white border rounded shadow-lg py-1 z-50">
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Profile</button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Settings</button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">Logout</button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

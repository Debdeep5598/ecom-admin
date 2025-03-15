"use client";
import { useEffect, useState } from "react";
import { FaUser, FaKey, FaBell } from "react-icons/fa";
import Link from "next/link";

export default function Header({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  const [headerWidth, setHeaderWidth] = useState("w-[calc(100%-256px)]");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let timeout: NodeJS.Timeout | null = null; // Stores timeout reference

  useEffect(() => {
    setHeaderWidth(isSidebarOpen ? "w-[calc(100%-256px)]" : "w-[calc(100%-80px)]");
  }, [isSidebarOpen]);

  const handleMouseEnter = () => {
    if (timeout) clearTimeout(timeout); // Cancel closing if user returns
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // Wait 300ms before closing (smooth UX)
  };

  return (
    <header
      className={`fixed top-0 left-auto right-0 bg-white shadow-md p-4 flex justify-between items-center transition-all duration-300 ${headerWidth} z-50`}
    >
      {/* Empty Title Placeholder */}
      <h1 className="text-lg font-semibold text-gray-800"></h1>

      {/* Notification & Profile Section */}
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <div className="relative cursor-pointer">
          <FaBell className="text-gray-700 text-2xl" />
          {/* Red Dot for Active Notification */}
          <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-red-600 rounded-full"></span>
        </div>

        {/* Profile Image with Dropdown */}
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="w-12 h-12 bg-black rounded-full overflow-hidden cursor-pointer">
            <img src="/admin.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-md py-2 z-[9999] border border-gray-200"
              onMouseEnter={handleMouseEnter} // Prevent closing when inside dropdown
              onMouseLeave={handleMouseLeave} // Delayed close when leaving dropdown
            >
              {/* Profile Options */}
              <Link href="/profile" className="flex items-center gap-3 px-5 py-2 text-sm hover:bg-gray-100">
                <FaUser className="text-gray-700 text-lg" /> Your Profile
              </Link>
              <Link href="/change-password" className="flex items-center gap-3 px-5 py-2 text-sm hover:bg-gray-100">
                <FaKey className="text-gray-700 text-lg" /> Change Password
              </Link>

              {/* Divider */}
              <hr className="border-gray-300 my-2" />

              {/* Logout Button */}
              <button
                className="mx-auto block w-[92%] px-3 py-1 text-sm font-semibold text-white bg-red-600 rounded-md shadow-md border-b-4 border-red-700 active:border-b-0 active:translate-y-[2px] hover:bg-red-700 transition-all"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

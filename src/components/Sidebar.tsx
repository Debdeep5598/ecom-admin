"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaBars, FaTimes, FaTachometerAlt, FaBox, FaShoppingCart, FaUsers, FaPercentage,
  FaMoneyBill, FaWallet, FaStar, FaChartBar, FaCog, FaChevronDown, FaChevronUp, FaChevronRight
} from "react-icons/fa";

export default function Sidebar({ setSidebarOpen }: { setSidebarOpen: (isOpen: boolean) => void }) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen === null) {
      setIsOpen(true);
      setSidebarOpen(true);
    }
  }, [isOpen]);

  const toggleDropdown = (section: string) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  const toggleSidebar = () => {
    setIsOpen((prev) => (prev === null ? true : !prev));
    setSidebarOpen((prev) => !prev);
  };

  if (isOpen === null) return null;

  return (
    <aside
      className={`bg-[#0a1f44] text-white h-screen fixed transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Profile Section */}
      <div className="relative w-full">
        <img src="/banner1.jpg" alt="Profile Banner" className="w-full h-28 object-cover" />
        <div className="absolute top-2 left-2 w-12 h-12 bg-black rounded-full overflow-hidden">
          <img src="/admin.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <button className="absolute top-3 right-3 text-white text-lg p-2 bg-[#0a1f44] rounded-full" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-1 text-xs font-bold px-4">
          Vivek Oberoi
        </div>
      </div>

      {/* Sidebar Menu */}
      <nav className="mt-6 space-y-2 overflow-y-auto h-[80vh] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
        <SidebarLink href="/dashboard" icon={<FaTachometerAlt />} text="Dashboard" isOpen={isOpen} />
        <SidebarLink href="/products" icon={<FaBox />} text="Products" isOpen={isOpen} />
        <SidebarLink href="/orders" icon={<FaShoppingCart />} text="Orders" isOpen={isOpen} />
        <SidebarLink href="/customers" icon={<FaUsers />} text="Customers" isOpen={isOpen} />
        <SidebarLink href="/discounts" icon={<FaPercentage />} text="Discounts & Coupons" isOpen={isOpen} />
        <SidebarLink href="/transactions" icon={<FaMoneyBill />} text="Transactions" isOpen={isOpen} />
        <SidebarLink href="/refunds" icon={<FaWallet />} text="Refunds & Returns" isOpen={isOpen} />
        <SidebarLink href="/reviews" icon={<FaStar />} text="Reviews & Ratings" isOpen={isOpen} />

        {/* Reports Dropdown */}
        <DropdownItem
          icon={<FaChartBar />}
          text="Reports & Analytics"
          isOpen={isOpen}
          openDropdown={openDropdown}
          setOpenDropdown={() => toggleDropdown("Reports & Analytics")}
        >
<SidebarLink href="/reports/sales" icon={<FaChevronRight />} text="Sales Report" isOpen={isOpen} />
<SidebarLink href="/reports/customer" icon={<FaChevronRight />} text="Customer Insights" isOpen={isOpen} />
<SidebarLink href="/reports/inventory" icon={<FaChevronRight />} text="Inventory Summary" isOpen={isOpen} />
<SidebarLink href="/reports/revenue" icon={<FaChevronRight />} text="Revenue Breakdown" isOpen={isOpen} />

        </DropdownItem>

        <SidebarLink href="/settings" icon={<FaCog />} text="Store Settings" isOpen={isOpen} />
      </nav>
    </aside>
  );
}

// Sidebar Link Component
function SidebarLink({ href, icon, text, isOpen }: { href: string; icon: JSX.Element; text: string; isOpen: boolean }) {
  return (
    <Link href={href} className="flex items-center gap-3 p-3 rounded-md hover:bg-[#152a52] transition-all">
      <span className="text-lg">{icon}</span>
      {isOpen && <span>{text}</span>}
    </Link>
  );
}

// Dropdown Component
function DropdownItem({
  icon,
  text,
  children,
  isOpen,
  openDropdown,
  setOpenDropdown
}: {
  icon: JSX.Element;
  text: string;
  children: JSX.Element;
  isOpen: boolean;
  openDropdown: string | null;
  setOpenDropdown: () => void;
}) {
  return (
    <div>
      <div
        className="flex items-center justify-between p-3 rounded-md hover:bg-[#152a52] transition-all cursor-pointer"
        onClick={setOpenDropdown}
      >
        <div className="flex items-center gap-3">
          <span className="text-lg">{icon}</span>
          {isOpen && <span>{text}</span>}
        </div>
        {isOpen && (openDropdown === text ? <FaChevronUp /> : <FaChevronDown />)}
      </div>
      {openDropdown === text && <div className="pl-6 space-y-1">{children}</div>}
    </div>
  );
}

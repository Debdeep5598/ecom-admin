"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body className="flex">
        {/* Sidebar - Only one instance */}
        <Sidebar setSidebarOpen={setSidebarOpen} />

        {/* Main Content Area */}
        <div className={`flex flex-col transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-20"} w-full`}>
          {/* Header */}
          <Header isSidebarOpen={isSidebarOpen} />

          {/* Main Page Content */}
          <main className="p-6 mt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}

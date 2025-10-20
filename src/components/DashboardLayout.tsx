"use client";
import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/dashboard/expenses", label: "Expenses" },
    { href: "/dashboard/balances", label: "Balances" },
    { href: "/dashboard/statistics", label: "Statistics" },
    { href: "/dashboard/groups", label: "Groups" },
  ];

  return (
    <div className="relative">
      {/* Top button for small screen */}
      <div className="lg:hidden bg-accent flex justify-end items-center p-4">
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-primary text-white"
        >
          {open ? "Close Menu" : "Open Menu"}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 pt-12 left-0 h-screen w-64 bg-secondary border-r transition-transform duration-300 ${
          open ? "translate-x-0 z-30" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <ul className="p-4 space-y-3 min-h-full bg-secondary text-base-content">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link href={item.href}>
                  <span
                    className={`btn w-full rounded-2xl border-0 text-lg transition-all duration-200 
                    ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-105"
                        : "bg-primary text-blue-600 hover:bg-blue-100"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Main content */}
      <div className="lg:ml-64 p-4 bg-accent min-h-screen">{children}</div>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0  bg-opacity-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;

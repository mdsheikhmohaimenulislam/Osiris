"use client";
import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // ✅ simple toggle state

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
        className={`fixed  top-0 pt-12 left-0 h-screen w-64 bg-secondary border-r transition-transform duration-300 ${
          open ? "translate-x-0 z-30" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <ul className="p-4 space-y-3 min-h-full bg-secondary text-base-content">
          <li>
            <Link
              href="/dashboard/expenses"
              // onClick={() => setOpen(false)} // close menu after navigation
              className={`flex items-center space-x-2 ${
                pathname === "/dashboard/expenses" ? "active" : ""
              }`}
            >
              <span className="btn rounded-2xl w-full text-blue-600 hover:bg-accent bg-primary border-0">
                Expenses
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/balances"
              // onClick={() => setOpen(false)}
              className={`flex items-center space-x-2 ${
                pathname === "/dashboard/balances" ? "active" : ""
              }`}
            >
              <span className="btn w-full rounded-2xl hover:bg-accent bg-primary text-blue-600 border-0">
                Balances
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/statistics"
              // onClick={() => setOpen(false)}
              className={`flex items-center space-x-2 ${
                pathname.startsWith("/dashboard/statistics") ? "active" : ""
              }`}
            >
              <span className="btn w-full rounded-2xl hover:bg-accent bg-primary text-blue-600 border-0">
                Statistics
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/groups"
              // onClick={() => setOpen(false)}
              className={`flex items-center space-x-2 ${
                pathname.startsWith("/dashboard/groups") ? "active" : ""
              }`}
            >
              <span className="btn w-full rounded-2xl hover:bg-accent bg-primary text-blue-600 border-0">
                Groups
              </span>
            </Link>
          </li>
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

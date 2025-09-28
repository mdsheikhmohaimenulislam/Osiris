"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import {
//   WalletIcon,
//   ChartPieIcon,
//   ChartBarIcon,
//   UsersIcon,
// } from "@heroicons/react/24/outline";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="drawer  lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="ml-0 lg:ml-64 drawer-content flex flex-col h-screen overflow-auto bg-accent p-4 ">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden mb-4"
        >
          Open Menu
        </label>
        {children}
      </div>
      <div className="fixed  top-0 pt-13 left-0 h-screen w-64 bg-secondary border-r  ">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="  p-4 space-y-3  min-h-full bg-secondary  text-base-content  sticky">
          <li>
            <Link
              href="/dashboard/expenses"
              className={`flex items-center space-x-2 ${
                pathname === "/dashboard/expenses" ? "active" : ""
              }`}
            >
              <span className="btn rounded-2xl w-full  text-blue-600 hover:bg-accent bg-primary border-0">
                Expenses
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/balances"
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
    </div>
  );
};

export default DashboardLayout;

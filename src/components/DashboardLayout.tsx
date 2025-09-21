"use client";
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WalletIcon, ChartPieIcon, ChartBarIcon, UsersIcon } from '@heroicons/react/24/outline'; 


interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center bg-gray-200 p-4">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mb-4">
          Open Menu
        </label>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <li>
            <Link 
              href="/dashboard/expenses" 
              className={`flex items-center space-x-2 ${pathname === '/dashboard/expenses' ? 'active' : ''}`}
            >
              <WalletIcon className="h-5 w-5" />
              <span className='btn bg-orange-300 text-blue-600'>Expenses</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/dashboard/balances" 
              className={`flex items-center space-x-2 ${pathname === '/dashboard/balances' ? 'active' : ''}`}
            >
              <ChartPieIcon className="h-5 w-5" />
              <span className='btn bg-orange-300 text-blue-600'>Balances</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/statistics"
              className={`flex items-center space-x-2 ${pathname.startsWith('/dashboard/statistics') ? 'active' : ''}`}
            >
              <ChartBarIcon className="h-5 w-5" />
              <span className='btn bg-orange-300 text-blue-600'>Statistics</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/groups"
              className={`flex items-center space-x-2 ${pathname.startsWith('/dashboard/groups') ? 'active' : ''}`}
            >
              <UsersIcon className="h-5 w-5" />
              <span className='btn bg-orange-300 text-blue-600'>Groups</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Cog6ToothIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* add any item if needed */}
      </div>

      <div className="navbar-center">
        <Link href="/" className="flex items-center gap-2 normal-case text-xl font-bold">
          <Image
            src="/osiris1.png"
            alt="Osiris Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span>Osiris</span>
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-outline btn-primary">Profile</label>
          <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
            <li>
              <Link href="/dashboard/settings" className="flex items-center gap-2">
                <Cog6ToothIcon className="h-5 w-5" />
                Settings
              </Link>
            </li>
            <li>
              <a>
                <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
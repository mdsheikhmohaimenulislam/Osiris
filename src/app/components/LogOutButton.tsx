"use client";
import { signOut } from "next-auth/react";

export default function LogOutButton() {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <button
      onClick={handleLogout}
      className="btn bg-red-500 text-white rounded "
    >
      Log Out
    </button>
  );
}

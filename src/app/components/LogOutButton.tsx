"use client";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";

export default function LogOutButton() {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
      toast.success("Logged out successfully!");
  };

  return (
    <p
      onClick={handleLogout}
      className=" text-white rounded "
    >
      Log Out
    </p>
  );
}

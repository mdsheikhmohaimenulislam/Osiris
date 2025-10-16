"use client";
import DashboardLayout from "@/components/DashboardLayout";
import AddFrom from "../../components/AddFrom/page";
import { FormEvent } from "react";

export default function CreateExpensePage() {
  const handleFromSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const values = Object.fromEntries(data.entries()) as Record<string, FormDataEntryValue>;

    console.log(values);
    console.log("hello");
  };

  return (
    <DashboardLayout>
      {/* Form */}
      <AddFrom handleFromSubmit={handleFromSubmit} />
    </DashboardLayout>
  );
}

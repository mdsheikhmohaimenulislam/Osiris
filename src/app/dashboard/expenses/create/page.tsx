"use client";

import DashboardLayout from "@/components/DashboardLayout";
import AddFrom from "../../components/AddFrom/page";
import { FormEvent } from "react";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function CreateExpensePage() {
  const router = useRouter();
  const { data: session } = useSession();
  const handleFromSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries()) as Record<
      string,
      FormDataEntryValue
    >;

    // simple validation
    if (!values.title || !values.amount) {
      toast.error("Please fill out all required fields.");
      return;
    }

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await res.json();
      if (res.ok) {
        toast.success("Expense created successfully!");
        form.reset();
        router.push("/dashboard/expenses");
      } else {
        toast.error(result.error || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit expense.");
    }
  };

  return (
    <DashboardLayout>
      {/* Form */}

      <AddFrom handleFromSubmit={handleFromSubmit} session={session} />
    </DashboardLayout>
  );
}

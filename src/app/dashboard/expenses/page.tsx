"use client";

import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";
import { FaPlus, FaDownload } from "react-icons/fa";
import ExpensesFromData from "../components/ExpensesFromData/page";
import { useEffect, useState } from "react";
// import { useState } from "react";

export interface Expense {
  _id: string;
  title: string;
  date: string;
  currency: string;
  category: string;
  amount: number;
  Income: number;
  description: string;
  email: string;
  PaidBy: string;
  notes: string;
  expense: string;
  splitMode: string;
  Participants: string;
  createdAt: string;
}

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  useEffect(() => {
    const expensesFetchData = async () => {
      const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
      if (!serverUrl) return;

      try {
        const res = await fetch(`${serverUrl}/api/auth`);
        const result = await res.json();

        if (result.success) {
          setExpenses(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch expenses:", error);
      }
    };

    expensesFetchData();
  }, []);

  return (
    <DashboardLayout>
      <>
        <div className="container  p-6 space-y-6">
          {/* Header */}
          <div className="flex  flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-black">Expenses</h2>
              <p className="text-sm text-gray-500">
                Track and manage all your daily expenses here
              </p>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <button className="btn btn-outline btn-primary">
                <FaDownload />
              </button>
              <Link href={"/dashboard/expenses/create"}>
                <button className="btn btn-primary">
                  <FaPlus />
                </button>
              </Link>
            </div>
          </div>

          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search expenses..."
              className="input input-bordered w-full"
            />
          </div>

          {/* data content */}
          {expenses.map((expense) => (
            <ExpensesFromData key={expense._id} expense={expense} />
          ))}
        </div>
      </>
    </DashboardLayout>
  );
}

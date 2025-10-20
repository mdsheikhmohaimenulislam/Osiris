import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";
import {
  FaPlus,
  FaDownload,
  FaMoneyBill,
  FaChevronRight,
} from "react-icons/fa";
// import { useState } from "react";

interface Expense {
  id: number;
  title: string;
  notes: string;
  amount: number;
  date: string;
}

export default function ExpensesPage() {
  const expenses = [
    {
      id: 1,
      title: "Groceries",
      notes: "Walmart shopping",
      amount: -125.5,
      date: "2025-09-19",
    },
    {
      id: 2,
      title: "Utilities",
      notes: "Electricity bill",
      amount: -85,
      date: "2025-09-18",
    },
    {
      id: 3,
      title: "Utilities",
      notes: "Electricity bill",
      amount: -85,
      date: "2025-09-18",
    },
    {
      id: 4,
      title: "Utilities",
      notes: "Electricity bill",
      amount: -85,
      date: "2025-09-18",
    },
  ];

  return (
    <DashboardLayout>
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

        {/* Expenses List */}
        <div className="space-y-4">
          {expenses.map((expense) => (
            <div
              key={expense.id}
              className="flex items-center  border-2  hover:scale-102 transition-transform hover:shadow-2xl justify-between bg-white shadow-md p-4 rounded-lg"
            >
              {/* Left icon */}
              <FaMoneyBill className="text-green-600 text-xl" />

              {/* Middle info */}
              <div className="flex-1  text-black px-4">
                <h3 className=" font-semibold text-black">{expense.title}</h3>
                <p className="text-sm text-gray-500">{expense.notes}</p>
              </div>

              {/* Right side */}
              <div className="text-right">
                <p className="font-bold text-error">${expense.amount}</p>
                <p className="text-xs text-gray-500">{expense.date}</p>
              </div>

              {/* Action arrow */}
              <button className="ml-4 btn btn-sm btn-ghost">
                <FaChevronRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

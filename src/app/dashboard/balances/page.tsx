"use client";

import { useState, useMemo } from "react";
import Card from "@/components/ui/Card"; // custom Card
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";
import { PlusCircle, TrendingUp, TrendingDown, Wallet } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";

export default function BalancePage() {
  // Dummy data (পরে API থেকে আনতে পারবে)
  const [transactions] = useState([
    {
      id: 1,
      title: "Restaurant",
      amount: -50,
      date: "2025-09-20",
      category: "Food",
    },
    {
      id: 2,
      title: "Freelance Work",
      amount: 300,
      date: "2025-09-18",
      category: "Income",
    },
    {
      id: 3,
      title: "Bus Ticket",
      amount: -15,
      date: "2025-09-17",
      category: "Travel",
    },
    {
      id: 4,
      title: "Snacks",
      amount: -20,
      date: "2025-09-15",
      category: "Food",
    },
  ]);

  // মোট Income/Expense/Balance হিসাব
  const totalIncome = transactions
    .filter((t) => t.amount > 0)
    .reduce((a, b) => a + b.amount, 0);
  const totalExpense = transactions
    .filter((t) => t.amount < 0)
    .reduce((a, b) => a + b.amount, 0);
  const balance = totalIncome + totalExpense;

  // Expense by Category ডাইনামিকালি তৈরি করা
  const expenseByCategory = useMemo(() => {
    const data: Record<string, number> = {};
    transactions.forEach((t) => {
      if (t.amount < 0) {
        data[t.category] = (data[t.category] || 0) + Math.abs(t.amount);
      }
    });
    return Object.keys(data).map((key) => ({
      name: key,
      value: data[key],
    }));
  }, [transactions]);

  const COLORS = ["#4ade80", "#60a5fa", "#facc15", "#f87171", "#a78bfa"];

  const barData = [
    { month: "Jan", expense: 200, income: 500 },
    { month: "Feb", expense: 150, income: 400 },
    { month: "Mar", expense: 300, income: 600 },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6   bg-accent  ">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Balance</p>
                <p className="text-2xl font-bold">${balance}</p>
              </div>
              <Wallet className="text-green-500 w-8 h-8" />
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Income</p>
                <p className="text-2xl font-bold text-green-600">
                  ${totalIncome}
                </p>
              </div>
              <TrendingUp className="text-green-500 w-8 h-8" />
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Expenses</p>
                <p className="text-2xl font-bold text-red-600">
                  ${Math.abs(totalExpense)}
                </p>
              </div>
              <TrendingDown className="text-red-500 w-8 h-8" />
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Expense by Category">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={expenseByCategory}
                  dataKey="value"
                  outerRadius={100}
                  label
                >
                  {expenseByCategory.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          <Card title="Monthly Overview">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="income" fill="#4ade80" />
                <Bar dataKey="expense" fill="#f87171" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card title="Recent Transactions">
          <ul className="space-y-3">
            {transactions.map((t) => (
              <li key={t.id} className="flex justify-between border-b pb-2">
                <div>
                  <p className="font-medium">{t.title}</p>
                  <p className="text-sm text-gray-500">{t.date}</p>
                </div>
                <div
                  className={`font-bold ${
                    t.amount > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  ${t.amount}
                </div>
              </li>
            ))}
          </ul>
        </Card>

        {/* Floating Add Button */}
        <Link href={"/dashboard/expenses/create"}>
          <button className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-accent transition">
            <PlusCircle className="w-6 h-6" />
          </button>
        </Link>
      </div>
    </DashboardLayout>
  );
}

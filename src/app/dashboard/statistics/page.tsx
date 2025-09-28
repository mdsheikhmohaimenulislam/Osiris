"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { TrendingUp, TrendingDown, Award } from "lucide-react";

// Demo Data
const incomeExpenseData = [
  { month: "Jan", income: 1200, expense: 800 },
  { month: "Feb", income: 1600, expense: 1200 },
  { month: "Mar", income: 1800, expense: 1000 },
  { month: "Apr", income: 1400, expense: 1700 },
  { month: "May", income: 2000, expense: 1500 },
];

const categoryData = [
  { name: "Food", value: 600 },
  { name: "Travel", value: 300 },
  { name: "Shopping", value: 500 },
  { name: "Others", value: 200 },
];

const yearlyData = [
  { month: "Jan", income: 1200, expense: 800 },
  { month: "Feb", income: 1600, expense: 1200 },
  { month: "Mar", income: 1800, expense: 1000 },
  { month: "Apr", income: 1400, expense: 1700 },
  { month: "May", income: 2000, expense: 1500 },
  { month: "Jun", income: 2200, expense: 1800 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function StatisticsPage() {
  const [selectedYear, setSelectedYear] = useState("2025");

  const totalIncome = incomeExpenseData.reduce((sum, d) => sum + d.income, 0);
  const totalExpense = incomeExpenseData.reduce((sum, d) => sum + d.expense, 0);
  const savingsRatio = ((totalIncome - totalExpense) / totalIncome) * 100;

  const topCategory = categoryData.reduce((max, d) =>
    d.value > max.value ? d : max
  );

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto p-8 text-gray-900">
        <h1 className="text-3xl font-bold mb-6">📊 Expense Statistics</h1>

        {/* Filters */}
        <div className="flex justify-end mb-6">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
          </select>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
            <TrendingUp className="w-10 h-10 text-green-500" />
            <div>
              <h2 className="text-lg font-semibold">Highest Income</h2>
              <p className="text-2xl font-bold">
                ${Math.max(...incomeExpenseData.map((d) => d.income))}
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
            <TrendingDown className="w-10 h-10 text-red-500" />
            <div>
              <h2 className="text-lg font-semibold">Highest Expense</h2>
              <p className="text-2xl font-bold">
                ${Math.max(...incomeExpenseData.map((d) => d.expense))}
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4">
            <Award className="w-10 h-10 text-yellow-500" />
            <div>
              <h2 className="text-lg font-semibold">Top Category</h2>
              <p className="text-2xl font-bold">{topCategory.name}</p>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Income vs Expense Trend */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">
              Income vs Expense Trend
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={incomeExpenseData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="income"
                  stroke="#4ade80"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="expense"
                  stroke="#f87171"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Category Wise Expense */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">
              Category-wise Expenses
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                >
                  {categoryData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Yearly Overview */}
        <div className="mt-8 bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4">
            Yearly Overview ({selectedYear})
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={yearlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#4ade80" />
              <Bar dataKey="expense" fill="#f87171" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Savings Ratio */}
        <div className="mt-8 bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-lg font-semibold mb-4">Savings Ratio</h2>
          <div className="w-32 h-32 mx-auto rounded-full border-8 border-gray-200 flex items-center justify-center relative">
            <div
              className="absolute top-0 left-0 w-32 h-32 rounded-full border-8 border-green-500"
              style={{
                clipPath: `inset(${100 - savingsRatio}% 0 0 0)`,
              }}
            ></div>
            <span className="text-xl font-bold">
              {savingsRatio.toFixed(1)}%
            </span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

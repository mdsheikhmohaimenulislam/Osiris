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
import { motion } from "framer-motion";

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

const COLORS = ["#00C49F", "#FFBB28", "#0088FE", "#FF8042"];

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
      <div className="max-w-7xl mx-auto p-6 md:p-10 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen text-gray-900">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold mb-8 text-slate-800 tracking-tight"
        >
          📊 Expense & Income Overview
        </motion.h1>

        {/* Filter */}
        <div className="flex justify-end mb-8">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="p-2 rounded-xl border bg-white shadow-sm hover:shadow-md transition"
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
          </select>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: <TrendingUp className="w-10 h-10 text-green-500" />,
              title: "Highest Income",
              value: `$${Math.max(...incomeExpenseData.map((d) => d.income))}`,
            },
            {
              icon: <TrendingDown className="w-10 h-10 text-red-500" />,
              title: "Highest Expense",
              value: `$${Math.max(...incomeExpenseData.map((d) => d.expense))}`,
            },
            {
              icon: <Award className="w-10 h-10 text-yellow-500" />,
              title: "Top Category",
              value: topCategory.name,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 flex items-center gap-5 border border-slate-100 transition-all duration-300"
            >
              {item.icon}
              <div>
                <h2 className="text-lg font-medium text-slate-600">
                  {item.title}
                </h2>
                <p className="text-2xl font-bold text-slate-800">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Line Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-lg font-semibold mb-4 text-slate-700">
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
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-lg font-semibold mb-4 text-slate-700">
              Category-wise Expenses
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {categoryData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 hidden md:block bg-white rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-lg font-semibold mb-4 text-slate-700">
            Yearly Overview ({selectedYear})
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={yearlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#4ade80" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expense" fill="#f87171" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Savings Ratio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 bg-white rounded-2xl shadow-lg p-6 text-center"
        >
          <h2 className="text-lg font-semibold mb-6 text-slate-700">
            Savings Ratio
          </h2>
          <div className="relative w-36 h-36 mx-auto">
            <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
            <div
              className="absolute inset-0 rounded-full border-8 border-green-500"
              style={{
                clipPath: `inset(${100 - savingsRatio}% 0 0 0)`,
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-slate-800">
              {savingsRatio.toFixed(1)}%
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}

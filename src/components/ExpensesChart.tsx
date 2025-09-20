"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Sample data
const data = [
  { name: 'Jan', Groceries: 400, Utilities: 240 },
  { name: 'Feb', Groceries: 300, Utilities: 139 },
  { name: 'Mar', Groceries: 200, Utilities: 980 },
  { name: 'Apr', Groceries: 278, Utilities: 390 },
  { name: 'May', Groceries: 189, Utilities: 480 },
  { name: 'Jun', Groceries: 239, Utilities: 380 },
  { name: 'Jul', Groceries: 349, Utilities: 430 },
];

const ExpensesChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Groceries" fill="#FFD700" />
        <Bar dataKey="Utilities" fill="#0D47A1" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExpensesChart;
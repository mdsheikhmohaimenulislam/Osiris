"use client";

import DashboardLayout from '@/components/DashboardLayout';
import Card from '@/components/ui/Card';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

// Sample data for a line chart
const monthlyData = [
  { name: 'Jan', spending: 250, saving: 150 },
  { name: 'Feb', spending: 300, saving: 200 },
  { name: 'Mar', spending: 280, saving: 220 },
  { name: 'Apr', spending: 350, saving: 180 },
  { name: 'May', spending: 320, saving: 250 },
  { name: 'Jun', spending: 400, saving: 100 },
];

// Sample data for a pie chart
const pieData = [
  { name: 'Food', value: 400 },
  { name: 'Rent', value: 300 },
  { name: 'Entertainment', value: 300 },
  { name: 'Transport', value: 200 },
  { name: 'Utilities', value: 278 },
];

const COLORS = ['#FFD700', '#0D47A1', '#8884d8', '#82ca9d', '#ffc658'];

export default function StatisticsPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Financial Statistics</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Monthly Spending Chart */}
          <Card title="Monthly Spending & Saving Trend">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="spending" stroke="#dc2626" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="saving" stroke="#16a34a" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
          {/* Expense Categories Chart (Pie Chart) */}
          <Card title="Expense Categories Breakdown">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={(entry) => entry.name}
                >
                  {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
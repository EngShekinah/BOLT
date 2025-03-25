import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { TrendingUp, BarChart3 } from 'lucide-react';

export function AnalyticsDashboard() {
  const [monthlyData] = useState([
    { name: 'Jan', sales: 12, lastYear: 10 },
    { name: 'Feb', sales: 19, lastYear: 15 },
    { name: 'Mar', sales: 15, lastYear: 14 },
    { name: 'Apr', sales: 21, lastYear: 18 },
    { name: 'May', sales: 16, lastYear: 20 },
    { name: 'Jun', sales: 14, lastYear: 13 }
  ]);

  const pieData = [
    { name: 'Caskets', value: 35 },
    { name: 'Urns', value: 25 },
    { name: 'Memorial Items', value: 40 }
  ];

  const COLORS = ['#0284c7', '#9333ea', '#0ea5e9'];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold text-gray-900">Advanced Analytics Dashboard</h1>
        <p className="mt-2 text-gray-600">Visualize key metrics and year-over-year comparisons</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900">Monthly Sales Comparison</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#0ea5e9" name="This Year" />
                <Line type="monotone" dataKey="lastYear" stroke="#9333ea" name="Last Year" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900">Sales Growth</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#0ea5e9" name="This Year" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Inventory Distribution</h2>
            <TrendingUp className="w-5 h-5 text-primary-600" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

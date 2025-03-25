import React from 'react';
import { Package, TrendingUp, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export function InventoryPage() {
  const inventoryStats = [
    {
      id: 1,
      category: "Caskets",
      inStock: 24,
      onOrder: 6,
      lowStock: false
    },
    {
      id: 2,
      category: "Urns",
      inStock: 15,
      onOrder: 10,
      lowStock: true
    },
    {
      id: 3,
      category: "Memorial Items",
      inStock: 150,
      onOrder: 25,
      lowStock: false
    }
  ];

  const monthlyData = [
    { name: 'Jan', sales: 12 },
    { name: 'Feb', sales: 19 },
    { name: 'Mar', sales: 15 },
    { name: 'Apr', sales: 21 },
    { name: 'May', sales: 16 },
    { name: 'Jun', sales: 14 }
  ];

  const pieData = [
    { name: 'Caskets', value: 35 },
    { name: 'Urns', value: 25 },
    { name: 'Memorial Items', value: 40 }
  ];

  const COLORS = ['#0284c7', '#9333ea', '#0ea5e9'];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold text-gray-900">Inventory Management</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {inventoryStats.map((stat) => (
          <div key={stat.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Package className="w-5 h-5 text-primary-600 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">{stat.category}</h3>
              </div>
              {stat.lowStock && (
                <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-800">
                  Low Stock
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">In Stock</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.inStock}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">On Order</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.onOrder}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Monthly Sales</h2>
            <BarChart3 className="w-5 h-5 text-primary-600" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#0ea5e9" />
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
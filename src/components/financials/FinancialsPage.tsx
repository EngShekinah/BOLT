import React from 'react';
import { DollarSign, TrendingUp, CreditCard, FileText } from 'lucide-react';

export function FinancialsPage() {
  const financialMetrics = [
    {
      id: 1,
      title: "Monthly Revenue",
      amount: "$125,430",
      trend: "+12.5%",
      positive: true
    },
    {
      id: 2,
      title: "Outstanding Invoices",
      amount: "$23,850",
      count: "15 invoices"
    },
    {
      id: 3,
      title: "Average Service Value",
      amount: "$8,450",
      trend: "+5.2%",
      positive: true
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      service: "Full Service Package - Wilson Family",
      amount: "$12,500",
      date: "2024-03-01",
      status: "Paid"
    },
    {
      id: 2,
      service: "Memorial Service - Rodriguez Family",
      amount: "$5,800",
      date: "2024-02-28",
      status: "Pending"
    },
    {
      id: 3,
      service: "Direct Cremation - Thompson Family",
      amount: "$2,300",
      date: "2024-02-27",
      status: "Paid"
    }
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold text-gray-900">Financial Management</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {financialMetrics.map((metric) => (
          <div key={metric.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">{metric.title}</h3>
              <DollarSign className="w-5 h-5 text-primary-600" />
            </div>
            <p className="text-2xl font-semibold text-gray-900">{metric.amount}</p>
            {metric.trend && (
              <p className={`text-sm ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
                {metric.trend} from last month
              </p>
            )}
            {metric.count && (
              <p className="text-sm text-gray-600">{metric.count}</p>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Transactions</h2>
            <CreditCard className="w-5 h-5 text-primary-600" />
          </div>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-900">{transaction.service}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    transaction.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {transaction.status}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{transaction.date}</span>
                  <span className="font-medium text-gray-900">{transaction.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Financial Reports</h2>
            <FileText className="w-5 h-5 text-primary-600" />
          </div>
          <div className="space-y-4">
            <button className="w-full p-4 bg-gray-50 rounded-lg text-left hover:bg-gray-100">
              <h3 className="font-medium text-gray-900">Monthly Revenue Report</h3>
              <p className="text-sm text-gray-600">March 2024</p>
            </button>
            <button className="w-full p-4 bg-gray-50 rounded-lg text-left hover:bg-gray-100">
              <h3 className="font-medium text-gray-900">Quarterly Financial Statement</h3>
              <p className="text-sm text-gray-600">Q1 2024</p>
            </button>
            <button className="w-full p-4 bg-gray-50 rounded-lg text-left hover:bg-gray-100">
              <h3 className="font-medium text-gray-900">Annual Tax Report</h3>
              <p className="text-sm text-gray-600">2023</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';

interface DashboardMetricProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  trend: string;
}

export function DashboardMetric({ icon, title, value, trend }: DashboardMetricProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="bg-gray-50 p-3 rounded-lg">{icon}</div>
        <span className="text-sm text-gray-500">{trend}</span>
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}
import React from 'react';
import { FileText, Download } from 'lucide-react';

export function ReportGeneration() {
  const reports = [
    {
      id: 1,
      name: "Monthly Revenue Report",
      date: "March 2025",
      type: "Financial"
    },
    {
      id: 2,
      name: "Quarterly Financial Statement",
      date: "Q1 2025",
      type: "Financial"
    },
    {
      id: 3,
      name: "Annual Tax Report",
      date: "2024",
      type: "Financial"
    },
    {
      id: 4,
      name: "Service Performance Report",
      date: "March 2025",
      type: "Operational"
    }
  ];

  const handleDownload = (report) => {
    // Implement download logic here
    console.log(`Downloading ${report.name}`);
  };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold text-gray-900">Report Generation</h1>
        <p className="mt-2 text-gray-600">Generate and download financial and operational reports</p>
      </header>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-4">
          {reports.map((report) => (
            <div key={report.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <FileText className="w-8 h-8 text-primary-600 mr-4" />
                <div>
                  <h3 className="font-medium text-gray-900">{report.name}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>{report.date}</span>
                    <span className="mx-2">•</span>
                    <span>{report.type}</span>
                  </div>
                </div>
              </div>
              <button onClick={() => handleDownload(report)} className="p-2 text-gray-600 hover:text-gray-900">
                <Download className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

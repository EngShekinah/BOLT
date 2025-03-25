import React from 'react';
import { FileText, Upload, Search, Filter } from 'lucide-react';

export function DocumentsPage() {
  const documents = [
    {
      id: 1,
      name: "Death Certificate - James Wilson",
      type: "Legal Document",
      date: "2024-03-01",
      status: "Pending Signature"
    },
    {
      id: 2,
      name: "Service Agreement - Rodriguez Family",
      type: "Contract",
      date: "2024-02-28",
      status: "Completed"
    },
    {
      id: 3,
      name: "Insurance Claim Form - Thompson",
      type: "Insurance",
      date: "2024-02-27",
      status: "In Progress"
    }
  ];

  return (
    <div className="space-y-6" aria-label="Document Management">
      <header>
        <h1 className="text-3xl font-semibold text-gray-900">Document Management</h1>
      </header>

      <div className="bg-white rounded-lg shadow-sm p-6" aria-label="Document List">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="relative flex-1" aria-label="Search Documents">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search documents..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              aria-label="Search Input"
            />
          </div>
          <div className="flex gap-4">
            <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200" aria-label="Filter Documents">
              <Filter className="w-4 h-4 mr-2" aria-hidden="true" />
              Filter
            </button>
            <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700" aria-label="Upload Document">
              <Upload className="w-4 h-4 mr-2" aria-hidden="true" />
              Upload
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {documents.map((doc) => (
            <div key={doc.id} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100" aria-label={`Document: ${doc.name}`}>
              <FileText className="w-8 h-8 text-primary-600 mr-4" aria-hidden="true" />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{doc.name}</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <span>{doc.type}</span>
                  <span className="mx-2">•</span>
                  <span>{doc.date}</span>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  doc.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  doc.status === 'Pending Signature' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}
                aria-label={`Status: ${doc.status}`}
              >
                {doc.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
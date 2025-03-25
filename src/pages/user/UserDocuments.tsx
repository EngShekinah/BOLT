import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';

export function UserDocuments() {
  const documents = [
    {
      id: 1,
      name: "Service Agreement",
      type: "PDF",
      date: "2024-03-01",
      size: "245 KB"
    },
    {
      id: 2,
      name: "Payment Receipt",
      type: "PDF",
      date: "2024-02-28",
      size: "125 KB"
    }
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold text-gray-900">My Documents</h1>
      </header>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <FileText className="w-8 h-8 text-primary-600 mr-4" />
                  <div>
                    <h3 className="font-medium text-gray-900">{doc.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <span>{doc.type}</span>
                      <span className="mx-2">•</span>
                      <span>{doc.date}</span>
                      <span className="mx-2">•</span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-600 hover:text-gray-900">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
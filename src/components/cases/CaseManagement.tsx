import React from 'react';
import { Users, Phone, Mail, Calendar } from 'lucide-react';

export function CaseManagement() {
  const cases = [
    {
      id: 1,
      name: "James Wilson",
      status: "Active",
      type: "Full Service",
      date: "2024-03-15",
      contact: "Mary Wilson",
      phone: "(555) 123-4567",
      email: "mary@example.com"
    },
    {
      id: 2,
      name: "Sarah Thompson",
      status: "Pending",
      type: "Memorial Service",
      date: "2024-03-18",
      contact: "John Thompson",
      phone: "(555) 234-5678",
      email: "john@example.com"
    },
    {
      id: 3,
      name: "Robert Davis",
      status: "Completed",
      type: "Cremation",
      date: "2024-03-10",
      contact: "Jane Davis",
      phone: "(555) 345-6789",
      email: "jane@example.com"
    }
  ];

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-900">Case Management</h1>
        <button className="btn-primary btn">
          <Users className="w-5 h-5 mr-2" />
          New Case
        </button>
      </header>

      <div className="bg-white shadow-sm rounded-lg">
        <div className="p-6">
          <div className="space-y-4">
            {cases.map((case_) => (
              <div key={case_.id} className="border rounded-lg p-4 hover:bg-gray-50">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-lg font-medium text-gray-900">{case_.name}</h3>
                      <span className={`ml-3 px-3 py-1 rounded-full text-sm ${
                        case_.status === 'Active' ? 'bg-green-100 text-green-800' :
                        case_.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {case_.status}
                      </span>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{case_.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{case_.contact}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>{case_.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>{case_.email}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="text-primary-600 hover:text-primary-700">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
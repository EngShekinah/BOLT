import React from 'react';
import { Building, Users, Clock } from 'lucide-react';

export function FacilitiesPage() {
  const facilities = [
    {
      id: 1,
      name: "Main Chapel",
      capacity: 200,
      status: "Available",
      nextService: "2:00 PM",
      maintenance: "Up to date",
      lastCleaning: "Today, 6:00 AM"
    },
    {
      id: 2,
      name: "Memorial Hall",
      capacity: 150,
      status: "In Use",
      currentEvent: "Wilson Memorial Service",
      endsAt: "12:30 PM",
      nextService: "3:00 PM"
    },
    {
      id: 3,
      name: "Family Room A",
      capacity: 30,
      status: "Reserved",
      nextService: "1:00 PM",
      maintenance: "Scheduled for tomorrow"
    }
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold text-gray-900">Facilities Management</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((facility) => (
          <div key={facility.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Building className="w-5 h-5 text-primary-600 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">{facility.name}</h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                facility.status === 'Available' ? 'bg-green-100 text-green-800' :
                facility.status === 'In Use' ? 'bg-red-100 text-red-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {facility.status}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Users className="w-4 h-4 mr-2" />
                <span>Capacity: {facility.capacity} people</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>Next Service: {facility.nextService}</span>
              </div>
              {facility.maintenance && (
                <div className="text-sm text-gray-500">
                  Maintenance: {facility.maintenance}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
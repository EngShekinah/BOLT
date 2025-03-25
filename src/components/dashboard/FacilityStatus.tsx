import React from 'react';
import { Building } from 'lucide-react';

export function FacilityStatus() {
  const facilities = [
    {
      id: 1,
      name: "Chapel A",
      status: "Available",
      nextService: "10:00 AM",
      capacity: "120 seats"
    },
    {
      id: 2,
      name: "Viewing Room 1",
      status: "In Use",
      nextAvailable: "3:00 PM",
      capacity: "40 seats"
    },
    {
      id: 3,
      name: "Refrigeration Unit",
      status: "75% Capacity",
      available: "6 spaces",
      maintenance: "Up to date"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Facility Status</h2>
        <Building className="w-5 h-5 text-gray-500" />
      </div>
      <div className="space-y-4">
        {facilities.map((facility) => (
          <div key={facility.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">{facility.name}</h3>
              <p className="text-sm text-gray-500">{facility.capacity}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{facility.status}</p>
              <p className="text-sm text-gray-500">
                {facility.nextService || facility.nextAvailable || facility.available}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
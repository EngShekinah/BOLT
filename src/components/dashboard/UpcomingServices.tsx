import React from 'react';
import { Calendar } from 'lucide-react';

export function UpcomingServices() {
  const services = [
    {
      id: 1,
      name: "James Wilson",
      type: "Memorial Service",
      time: "10:00 AM",
      location: "Chapel A",
      status: "Confirmed"
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      type: "Viewing",
      time: "2:00 PM",
      location: "Viewing Room 2",
      status: "In Progress"
    },
    {
      id: 3,
      name: "Robert Johnson",
      type: "Burial Service",
      time: "4:00 PM",
      location: "Evergreen Cemetery",
      status: "Pending"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Upcoming Services</h2>
        <Calendar className="w-5 h-5 text-gray-500" />
      </div>
      <div className="space-y-4">
        {services.map((service) => (
          <div key={service.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900">{service.name}</h3>
              <p className="text-sm text-gray-500">{service.type}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{service.time}</p>
              <p className="text-sm text-gray-500">{service.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
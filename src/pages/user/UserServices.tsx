import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export function UserServices() {
  const services = [
    {
      id: 1,
      type: "Memorial Service",
      date: "2024-03-15",
      time: "10:00 AM",
      location: "Main Chapel",
      status: "Confirmed"
    },
    {
      id: 2,
      type: "Viewing",
      date: "2024-03-14",
      time: "2:00 PM",
      location: "Viewing Room 1",
      status: "Pending"
    }
  ];

  return (
    <div className="space-y-6" aria-label="User Services">
      <header>
        <h1 className="text-3xl font-semibold text-gray-900">My Services</h1>
      </header>

      <div className="bg-white rounded-lg shadow-sm" aria-label="Service List">
        <div className="p-6">
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.id} className="border rounded-lg p-4" aria-label={`Service: ${service.type}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{service.type}</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                        <span>{service.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
                        <span>{service.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
                        <span>{service.location}</span>
                      </div>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      service.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}
                    aria-label={`Status: ${service.status}`}
                  >
                    {service.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
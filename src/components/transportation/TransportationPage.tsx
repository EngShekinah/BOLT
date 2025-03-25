import React from 'react';
import { Truck, Calendar, MapPin, Clock } from 'lucide-react';

export function TransportationPage() {
  const vehicles = [
    {
      id: 1,
      type: "Hearse",
      status: "Available",
      lastService: "2024-02-15",
      nextMaintenance: "2024-03-15",
      mileage: "45,230"
    },
    {
      id: 2,
      type: "Family Limousine",
      status: "In Service",
      currentTrip: "Wilson Family - Memorial Service",
      returnTime: "2:00 PM",
      mileage: "32,450"
    }
  ];

  const upcomingTransfers = [
    {
      id: 1,
      type: "Hospital Transfer",
      location: "St. Mary's Hospital",
      time: "3:00 PM",
      driver: "John Smith"
    },
    {
      id: 2,
      type: "Cemetery Transfer",
      location: "Evergreen Memorial Park",
      time: "4:30 PM",
      driver: "Michael Brown"
    }
  ];

  return (
    <div className="space-y-6" aria-label="Transportation Management">
      <header>
        <h1 className="text-3xl font-semibold text-gray-900">Transportation Management</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6" aria-label="Fleet Status">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Fleet Status</h2>
            <Truck className="w-5 h-5 text-primary-600" aria-hidden="true" />
          </div>
          <div className="space-y-4">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="p-4 bg-gray-50 rounded-lg" aria-label={`Vehicle: ${vehicle.type}`}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-900">{vehicle.type}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    vehicle.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`} aria-label={`Status: ${vehicle.status}`}>
                    {vehicle.status}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Mileage: {vehicle.mileage}</p>
                  {vehicle.currentTrip && <p>Current: {vehicle.currentTrip}</p>}
                  {vehicle.nextMaintenance && <p>Next Service: {vehicle.nextMaintenance}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6" aria-label="Upcoming Transfers">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Upcoming Transfers</h2>
            <Calendar className="w-5 h-5 text-primary-600" aria-hidden="true" />
          </div>
          <div className="space-y-4">
            {upcomingTransfers.map((transfer) => (
              <div key={transfer.id} className="p-4 bg-gray-50 rounded-lg" aria-label={`Transfer: ${transfer.type}`}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-900">{transfer.type}</h3>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-1" aria-hidden="true" />
                    <span>{transfer.time}</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" aria-hidden="true" />
                  <span>{transfer.location}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Driver: {transfer.driver}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
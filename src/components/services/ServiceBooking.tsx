import React, { useState } from 'react';

export function ServiceBooking() {
  const [services] = useState([
    { id: 1, name: 'Traditional Funeral Service', available: true },
    { id: 2, name: 'Cremation Service', available: false },
    { id: 3, name: 'Memorial Service', available: true },
    { id: 4, name: 'Graveside Service', available: true },
  ]);

  const [selectedService, setSelectedService] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = (service) => {
    setSelectedService(service);
    setBookingConfirmed(true);
  };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold text-gray-900">Service Booking</h1>
        <p className="mt-2 text-gray-600">Book a service online with real-time availability</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900">{service.name}</h2>
            <p className={`mt-2 text-sm ${service.available ? 'text-green-600' : 'text-red-600'}`}>
              {service.available ? 'Available' : 'Unavailable'}
            </p>
            {service.available && (
              <button
                onClick={() => handleBooking(service)}
                className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                Book Now
              </button>
            )}
          </div>
        ))}
      </div>

      {bookingConfirmed && selectedService && (
        <div className="bg-green-100 p-4 rounded-lg">
          <p className="text-green-800">
            Booking confirmed for: <strong>{selectedService.name}</strong>
          </p>
        </div>
      )}
    </div>
  );
}
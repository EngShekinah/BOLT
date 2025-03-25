import React from 'react';
import { Calendar, FileText, Clock } from 'lucide-react';
import { ServiceBooking } from '../../components/services/ServiceBooking';

export function UserDashboard() {
  return (
    <div className="space-y-6" aria-label="User Dashboard">
      <header>
        <h1 className="text-3xl font-semibold text-gray-900">My Dashboard</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6" aria-label="Upcoming Services">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Upcoming Services</h2>
            <Calendar className="w-5 h-5 text-primary-600" aria-hidden="true" />
          </div>
          <p className="text-gray-600">No upcoming services scheduled</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6" aria-label="Recent Documents">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Recent Documents</h2>
            <FileText className="w-5 h-5 text-primary-600" aria-hidden="true" />
          </div>
          <p className="text-gray-600">No recent documents</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6" aria-label="Appointments">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Appointments</h2>
            <Clock className="w-5 h-5 text-primary-600" aria-hidden="true" />
          </div>
          <p className="text-gray-600">No upcoming appointments</p>
        </div>
      </div>

      <ServiceBooking />
    </div>
  );
}
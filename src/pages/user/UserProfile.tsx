import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';

export function UserProfile() {
  return (
    <div className="space-y-6" aria-label="User Profile">
      <header>
        <h1 className="text-3xl font-semibold text-gray-900">My Profile</h1>
      </header>

      <div className="bg-white rounded-lg shadow-sm" aria-label="Profile Information">
        <div className="p-6">
          <div className="flex items-center space-x-4">
            <div className="bg-primary-100 p-3 rounded-full" aria-hidden="true">
              <User className="w-8 h-8 text-primary-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">John Doe</h2>
              <p className="text-gray-600">Member since 2024</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2" aria-label="Contact Details">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <div className="mt-1 flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-2" aria-hidden="true" />
                <span id="email" className="text-gray-900">john.doe@example.com</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
                Phone
              </label>
              <div className="mt-1 flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-2" aria-hidden="true" />
                <span id="phone" className="text-gray-900">(555) 123-4567</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="address">
                Address
              </label>
              <div className="mt-1 flex items-center">
                <MapPin className="w-5 h-5 text-gray-400 mr-2" aria-hidden="true" />
                <span id="address" className="text-gray-900">123 Main St, Anytown, ST 12345</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button className="btn-primary btn" aria-label="Edit Profile">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
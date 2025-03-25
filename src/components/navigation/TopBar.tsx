import React from 'react';
import { Bell, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNotifications } from '../../contexts/NotificationContext';

export function TopBar() {
  const { user, logout } = useAuth();
  const { notifications } = useNotifications();

  return (
    <header className="bg-gradient-to-r from-primary-600 to-secondary-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-white">
              Grace Memorial Services
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-white/80 hover:text-white">
              <Bell className="w-5 h-5" />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 transform translate-x-1/2 -translate-y-1/2"></span>
              )}
            </button>
            <button className="p-2 text-white/80 hover:text-white">
              <Settings className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-white">{user?.name}</span>
              <button
                onClick={logout}
                className="p-2 text-white/80 hover:text-white"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
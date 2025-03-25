import React from 'react';
import { Outlet } from 'react-router-dom';
import { UserSidebar } from '../navigation/UserSidebar';
import { UserTopBar } from '../navigation/UserTopBar';

export function UserLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <UserTopBar />
      <div className="flex">
        <UserSidebar />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
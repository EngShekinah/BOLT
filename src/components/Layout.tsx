import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './navigation/Sidebar';
import { TopBar } from './navigation/TopBar';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
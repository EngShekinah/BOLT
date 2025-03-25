import React from 'react';
import { Outlet } from 'react-router-dom';
import { PublicHeader } from '../navigation/PublicHeader';
import { PublicFooter } from '../navigation/PublicFooter';

export function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <PublicFooter />
    </div>
  );
}
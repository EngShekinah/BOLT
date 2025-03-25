import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { PublicLayout } from './components/layouts/PublicLayout';
import { AdminLayout } from './components/layouts/AdminLayout';
import { UserLayout } from './components/layouts/UserLayout';
import { LandingPage } from './pages/public/LandingPage';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { AdminRoute } from './components/auth/AdminRoute';

// Admin Pages
import { Dashboard } from './components/dashboard/Dashboard';
import { CaseManagement } from './components/cases/CaseManagement';
import { ServiceManagement } from './components/services/ServiceManagement';
import { FacilitiesPage } from './components/facilities/FacilitiesPage';
import { TransportationPage } from './components/transportation/TransportationPage';
import { InventoryPage } from './components/inventory/InventoryPage';
import { FinancialsPage } from './components/financials/FinancialsPage';
import { DocumentsPage } from './components/documents/DocumentsPage';
import { SettingsPage } from './components/settings/SettingsPage';
import { ReportGeneration } from './components/reports/ReportGeneration';
import { AnalyticsDashboard } from './components/analytics/AnalyticsDashboard';

// User Pages
import { UserDashboard } from './pages/user/UserDashboard';
import { UserProfile } from './pages/user/UserProfile';
import { UserServices } from './pages/user/UserServices';
import { UserDocuments } from './pages/user/UserDocuments';

export function App() {
  return (
    <Router>
      <AuthProvider>
        <NotificationProvider>
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout />}>
              <Route index element={<LandingPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>

            {/* Admin Routes */}
            <Route path="admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
              <Route index element={<Dashboard />} />
              <Route path="cases" element={<CaseManagement />} />
              <Route path="services" element={<ServiceManagement />} />
              <Route path="facilities" element={<FacilitiesPage />} />
              <Route path="transportation" element={<TransportationPage />} />
              <Route path="inventory" element={<InventoryPage />} />
              <Route path="financials" element={<FinancialsPage />} />
              <Route path="documents" element={<DocumentsPage />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="reports" element={<ReportGeneration />} />
              <Route path="analytics" element={<AnalyticsDashboard />} />
            </Route>

            {/* User Routes */}
            <Route path="dashboard" element={<ProtectedRoute><UserLayout /></ProtectedRoute>}>
              <Route index element={<UserDashboard />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="services" element={<UserServices />} />
              <Route path="documents" element={<UserDocuments />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </NotificationProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout
import { Navbar, Footer } from '../components/layout/Navigation';
import { PublicLayout, DashboardLayout } from '../components/layout/Layouts';

// Constants
import { ROUTES } from '../constants';

// Lazy loading Pages for Performance (Code Splitting)
const HomePremium = lazy(() => import('../pages/HomePremium'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const FindDonorsPage = lazy(() => import('../pages/FindDonorsPage'));
const EmergencyRequestPage = lazy(() => import('../pages/EmergencyRequestPage'));
const DirectoryPage = lazy(() => import('../pages/DirectoryPage'));
const DonorDashboardPage = lazy(() => import('../pages/DonorDashboardPage'));
const HospitalDashboardPage = lazy(() => import('../pages/HospitalDashboardPage'));
const AdminDashboardPage = lazy(() => import('../pages/AdminDashboardPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

// A simple fallback spinner while chunks load
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-gray-50">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-red-200 border-t-red-600"></div>
  </div>
);

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Public Routes */}
          <Route
            path={ROUTES.HOME}
          element={
            <PublicLayout>
              <HomePremium />
            </PublicLayout>
          }
        />
        <Route
          path={ROUTES.LOGIN}
          element={
            <PublicLayout>
              <LoginPage />
            </PublicLayout>
          }
        />
        <Route
          path={ROUTES.REGISTER}
          element={
            <PublicLayout>
              <RegisterPage />
            </PublicLayout>
          }
        />
        <Route
          path={ROUTES.FIND_DONORS}
          element={
            <PublicLayout>
              <FindDonorsPage />
            </PublicLayout>
          }
        />
        <Route
          path={ROUTES.DIRECTORY}
          element={
            <PublicLayout>
              <DirectoryPage />
            </PublicLayout>
          }
        />

        {/* Protected Routes */}
        <Route path={ROUTES.EMERGENCY_REQUEST} element={<EmergencyRequestPage />} />
        <Route path={ROUTES.DONOR_DASHBOARD} element={<DonorDashboardPage />} />
        <Route path={ROUTES.HOSPITAL_DASHBOARD} element={<HospitalDashboardPage />} />
        <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminDashboardPage />} />

        {/* Placeholders for other protected routes */}
        <Route path={ROUTES.DONOR_PROFILE} element={<Navigate to={ROUTES.DONOR_DASHBOARD} />} />
        <Route path={ROUTES.DONOR_HISTORY} element={<Navigate to={ROUTES.DONOR_DASHBOARD} />} />
        <Route path={ROUTES.HOSPITAL_PROFILE} element={<Navigate to={ROUTES.HOSPITAL_DASHBOARD} />} />
        <Route path={ROUTES.HOSPITAL_BLOOD_BANK} element={<Navigate to={ROUTES.HOSPITAL_DASHBOARD} />} />
        <Route path={ROUTES.HOSPITAL_REQUESTS} element={<Navigate to={ROUTES.HOSPITAL_DASHBOARD} />} />
        <Route path={ROUTES.ADMIN_USERS} element={<Navigate to={ROUTES.ADMIN_DASHBOARD} />} />
        <Route path={ROUTES.ADMIN_REQUESTS} element={<Navigate to={ROUTES.ADMIN_DASHBOARD} />} />
        <Route path={ROUTES.ADMIN_VERIFICATION} element={<Navigate to={ROUTES.ADMIN_DASHBOARD} />} />

        {/* Placeholder pages */}
        <Route path={ROUTES.ABOUT} element={<HomePremium />} />
        <Route path={ROUTES.CONTACT} element={<HomePremium />} />

        {/* 404 */}
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default AppRoutes;

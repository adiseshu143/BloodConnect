import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LoadingSpinner } from '../ui/BasicComponents';
import { DashboardLayout as Layout } from './Navigation';
import { ROUTES } from '../../constants';

export const DashboardLayout = Layout;

export const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { isAuthenticated, user, loading, hasRole } = useAuth();

  if (loading) {
    return (
      <div className="page-container flex-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  if (requiredRole && !hasRole(requiredRole)) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return children;
};

export const PublicLayout = ({ children }) => {
  return (
    <div className="page-container">
      {children}
    </div>
  );
};

export const AuthLayout = ({ children, title = '', description = '' }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-primary-500 to-primary-600 flex-center p-4">
      <div className="w-full max-w-md bg-surface rounded-xl shadow-2xl p-8">
        {title && <h1 className="text-3xl font-bold mb-2 text-center">{title}</h1>}
        {description && (
          <p className="text-text-muted text-center mb-8">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export const EmptyLayout = ({ children }) => {
  return <div className="page-container">{children}</div>;
};

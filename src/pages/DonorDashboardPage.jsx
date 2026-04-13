import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ProtectedRoute, DashboardLayout } from '../components/layout/Layouts';
import { DataCard, StatsGrid, RequestCard, RequestTimeline } from '../components/ui/DataComponents';
import { Button, Checkbox } from '../components/ui/FormComponents';
import { Heart, MapPin, TrendingUp, History, Bell, Settings, LogOut } from 'lucide-react';
import { mockBloodRequests, mockDonationHistory, mockRequestTimeline } from '../data/mockData';
import { ROUTES } from '../constants';
import { useNavigate } from 'react-router-dom';

const DonorDashboardPage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isAvailable, setIsAvailable] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { href: ROUTES.DONOR_DASHBOARD, label: 'Dashboard', icon: Heart, active: true },
    { href: ROUTES.DONOR_PROFILE, label: 'My Profile', icon: Settings },
    { href: ROUTES.DONOR_HISTORY, label: 'Donation History', icon: History },
    { isSection: true, label: 'Support' },
    { href: '#', label: 'Help & Support', icon: Bell },
    { href: ROUTES.HOME, label: 'Back to Home', icon: Heart },
  ];

  const stats = [
    {
      title: 'Total Donations',
      value: '5',
      icon: Heart,
      trend: 1,
      trendLabel: '+1 this year',
    },
    {
      title: 'Lives Helped',
      value: '12',
      icon: TrendingUp,
      trend: 3,
      trendLabel: '+3 since joining',
    },
    {
      title: 'Readiness Score',
      value: '95%',
      icon: TrendingUp,
      trend: null,
      trendLabel: 'Excellent',
    },
    {
      title: 'Recognition',
      value: 'Gold',
      icon: Heart,
      trend: null,
      trendLabel: 'Top Donor',
    },
  ];

  const handleLogout = () => {
    logout();
    navigate(ROUTES.HOME);
  };

  return (
    <ProtectedRoute requiredRole="donor">
      <DashboardLayout
        sidebarItems={sidebarItems}
        title="Donor Dashboard"
        description="Welcome back! Manage your donations and impact"
      >
        {/* Availability Status */}
        <div className="bg-linear-to-r from-secondary-500 to-secondary-600 text-white rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Donation Availability</h2>
              <p className="text-white/80">
                Your profile is currently{' '}
                <span className="font-bold">{isAvailable ? 'VISIBLE' : 'HIDDEN'}</span> to
                hospitals
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold">Make me available</span>
              <Checkbox
                checked={isAvailable}
                onChange={(e) => setIsAvailable(e.target.checked)}
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Impact</h2>
          <StatsGrid stats={stats} />
        </div>

        {/* Active Requests */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Active Requests Near You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockBloodRequests.slice(0, 3).map((request) => (
              <RequestCard
                key={request.id}
                request={request}
                showActions={true}
              />
            ))}
          </div>
        </div>

        {/* Recent Donations */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Recent Donations</h2>
          <div className="bg-surface border border-border rounded-lg p-6">
            {mockDonationHistory.length > 0 ? (
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Date</th>
                    <th className="text-left py-3 px-4 font-semibold">Hospital</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockDonationHistory.map((donation) => (
                    <tr key={donation.id} className="border-b border-border hover:bg-gray-50">
                      <td className="py-3 px-4">{donation.date}</td>
                      <td className="py-3 px-4">{donation.hospitalName}</td>
                      <td className="py-3 px-4">
                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-semibold">
                          {donation.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-text-muted">No donations yet</p>
            )}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <div className="bg-surface border border-border rounded-lg p-6">
            <RequestTimeline events={mockRequestTimeline} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary" size="lg">
            Edit Profile
          </Button>
          <Button variant="outline" size="lg">
            View Schedule
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default DonorDashboardPage;

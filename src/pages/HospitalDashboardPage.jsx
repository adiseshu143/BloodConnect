import React, { useState } from 'react';
import { ProtectedRoute, DashboardLayout } from '../components/layout/Layouts';
import { DataCard, StatsGrid, RequestCard, Table } from '../components/ui/DataComponents';
import { Button } from '../components/ui/BasicComponents';
import { Tabs } from '../components/ui/BasicComponents';
import { Heart, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { mockBloodRequests, mockBloodBankInventory } from '../data/mockData';
import { ROUTES } from '../constants';

const HospitalDashboardPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const sidebarItems = [
    { href: ROUTES.HOSPITAL_DASHBOARD, label: 'Dashboard', icon: Heart, active: true },
    { href: ROUTES.HOSPITAL_REQUESTS, label: 'Blood Requests', icon: AlertCircle },
    { href: ROUTES.HOSPITAL_BLOOD_BANK, label: 'Blood Bank', icon: Heart },
    { href: ROUTES.HOSPITAL_PROFILE, label: 'Settings', icon: Heart },
    { isSection: true, label: 'Support' },
    { href: ROUTES.HOME, label: 'Back to Home', icon: Heart },
  ];

  const stats = [
    {
      title: 'Active Requests',
      value: '12',
      icon: AlertCircle,
      trend: 2,
      trendLabel: '+2 today',
    },
    {
      title: 'Fulfilled Requests',
      value: '287',
      icon: CheckCircle,
      trend: null,
      trendLabel: 'All time',
    },
    {
      title: 'Available Donors',
      value: '542',
      icon: Heart,
      trend: null,
      trendLabel: 'In network',
    },
    {
      title: 'Response Time',
      value: '8 min',
      icon: TrendingUp,
      trend: null,
      trendLabel: 'Average',
    },
  ];

  const tabs = [
    {
      label: 'Overview',
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Active Blood Requests</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockBloodRequests.slice(0, 2).map((request) => (
                <RequestCard key={request.id} request={request} showActions={true} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Blood Bank Inventory</h3>
            <div className="bg-surface border border-border rounded-lg p-6 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Blood Group</th>
                    <th className="text-left py-3 px-4 font-semibold">Units</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockBloodBankInventory.map((inv) => (
                    <tr key={inv.bloodGroup} className="border-b border-border hover:bg-gray-50">
                      <td className="py-3 px-4 font-semibold">{inv.bloodGroup}</td>
                      <td className="py-3 px-4">{inv.units} units</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            inv.lowStock
                              ? 'bg-accent/20 text-accent'
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {inv.lowStock ? 'Low Stock' : 'In Stock'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: 'Analytics',
      content: (
        <div className="bg-surface border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="font-semibold">Avg Response Time</span>
              <span className="text-2xl font-bold text-primary-500">8 min</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="font-semibold">Success Rate</span>
              <span className="text-2xl font-bold text-secondary-500">96%</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="font-semibold">Total Matches</span>
              <span className="text-2xl font-bold text-primary-500">287</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <ProtectedRoute requiredRole="hospital">
      <DashboardLayout
        sidebarItems={sidebarItems}
        title="Hospital Dashboard"
        description="Manage blood requests and blood bank inventory"
      >
        {/* Stats */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Metrics</h2>
          <StatsGrid stats={stats} />
        </div>

        {/* Tabs */}
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="secondary" size="lg">
            Create New Request
          </Button>
          <Button variant="outline" size="lg">
            View Donor Network
          </Button>
          <Button variant="outline" size="lg">
            Download Report
          </Button>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default HospitalDashboardPage;

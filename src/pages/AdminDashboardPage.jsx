import React, { useState } from 'react';
import { ProtectedRoute, DashboardLayout } from '../components/layout/Layouts';
import { DataCard, StatsGrid, Table } from '../components/ui/DataComponents';
import { Button, Badge, Tabs } from '../components/ui/BasicComponents';
import { Users, AlertCircle, CheckCircle, TrendingUp, Shield } from 'lucide-react';
import { mockAdminDashboard, mockVerificationQueue } from '../data/mockData';
import { ROUTES } from '../constants';

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const sidebarItems = [
    { href: ROUTES.ADMIN_DASHBOARD, label: 'Dashboard', icon: Shield, active: true },
    { href: ROUTES.ADMIN_USERS, label: 'Users', icon: Users },
    { href: ROUTES.ADMIN_VERIFICATION, label: 'Verification Queue', icon: AlertCircle },
    { href: ROUTES.ADMIN_REQUESTS, label: 'Requests', icon: TrendingUp },
    { isSection: true, label: 'System' },
    { href: ROUTES.HOME, label: 'Back to Home', icon: Shield },
  ];

  const stats = [
    {
      title: 'Total Users',
      value: mockAdminDashboard.totalUsers.toLocaleString(),
      icon: Users,
      trend: 45,
      trendLabel: '+45 this week',
    },
    {
      title: 'Verified Donors',
      value: mockAdminDashboard.totalDonors.toLocaleString(),
      icon: Users,
      trend: 12,
      trendLabel: '+12 today',
    },
    {
      title: 'Active Hospitals',
      value: mockAdminDashboard.totalHospitals.toLocaleString(),
      icon: CheckCircle,
      trend: 2,
      trendLabel: '+2 this month',
    },
    {
      title: 'Pending Requests',
      value: mockAdminDashboard.totalRequests.toLocaleString(),
      icon: AlertCircle,
      trend: 23,
      trendLabel: 'Urgent',
    },
  ];

  const verificationColumns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Type', accessor: 'type', Cell: (row) => <Badge variant="primary">{row.type}</Badge> },
    { Header: 'Status', accessor: 'verificationStatus' },
    { Header: 'Submitted', accessor: 'submittedAt' },
    { Header: 'Action', accessor: 'id', Cell: () => <Button size="sm">Review</Button> },
  ];

  const tabs = [
    {
      label: 'Overview',
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4">System Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(mockAdminDashboard.systemMetrics).map(([key, value]) => (
                <div key={key} className="bg-surface border border-border rounded-lg p-4">
                  <p className="text-text-muted text-sm mb-1 capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </p>
                  <p className="text-2xl font-bold text-primary-500">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Verification Queue</h3>
            <div className="bg-surface border border-border rounded-lg p-6 overflow-x-auto">
              <Table columns={verificationColumns} data={mockVerificationQueue} />
            </div>
          </div>
        </div>
      ),
    },
    {
      label: 'Users',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface border border-border rounded-lg p-6">
            <h4 className="font-semibold mb-4">Donor Statistics</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Total Donors</span>
                <span className="font-bold">{mockAdminDashboard.totalDonors}</span>
              </div>
              <div className="flex justify-between">
                <span>Pending Verification</span>
                <span className="font-bold text-accent">
                  {mockAdminDashboard.pendingVerifications.donors}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Active Today</span>
                <span className="font-bold text-secondary-500">
                  {Math.floor(mockAdminDashboard.totalDonors * 0.45)}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-lg p-6">
            <h4 className="font-semibold mb-4">Hospital Statistics</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Total Hospitals</span>
                <span className="font-bold">{mockAdminDashboard.totalHospitals}</span>
              </div>
              <div className="flex justify-between">
                <span>Pending Verification</span>
                <span className="font-bold text-accent">
                  {mockAdminDashboard.pendingVerifications.hospitals}
                </span>
              </div>
              <div className="flex justify-between">
                <span>With Blood Bank</span>
                <span className="font-bold text-secondary-500">
                  {Math.floor(mockAdminDashboard.totalHospitals * 0.8)}
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: 'Recent Requests',
      content: (
        <div className="bg-surface border border-border rounded-lg p-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold">Hospital</th>
                <th className="text-left py-3 px-4 font-semibold">Blood Group</th>
                <th className="text-left py-3 px-4 font-semibold">Priority</th>
                <th className="text-left py-3 px-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockAdminDashboard.recentRequests.map((req) => (
                <tr key={req.id} className="border-b border-border hover:bg-gray-50">
                  <td className="py-3 px-4">{req.hospitalName}</td>
                  <td className="py-3 px-4 font-bold">{req.bloodGroup}</td>
                  <td className="py-3 px-4">
                    <Badge variant={req.priority === 'critical' ? 'urgent' : 'primary'}>
                      {req.priority}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant="secondary">{req.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
  ];

  return (
    <ProtectedRoute requiredRole="admin">
      <DashboardLayout
        sidebarItems={sidebarItems}
        title="Admin Dashboard"
        description="System management and oversight"
      >
        {/* Stats */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">System Overview</h2>
          <StatsGrid stats={stats} />
        </div>

        {/* Alert for Pending Verifications */}
        {(mockAdminDashboard.pendingVerifications.donors > 0 ||
          mockAdminDashboard.pendingVerifications.hospitals > 0) && (
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-8">
            <p className="font-semibold text-accent">
              ⚠️ {mockAdminDashboard.pendingVerifications.donors} donor and{' '}
              {mockAdminDashboard.pendingVerifications.hospitals} hospital verifications pending
            </p>
          </div>
        )}

        {/* Tabs */}
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="secondary" size="lg">
            Review Verifications
          </Button>
          <Button variant="outline" size="lg">
            Generate Report
          </Button>
          <Button variant="outline" size="lg">
            System Settings
          </Button>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default AdminDashboardPage;

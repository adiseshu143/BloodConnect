export const BLOOD_GROUPS = [
  'O+',
  'O-',
  'A+',
  'A-',
  'B+',
  'B-',
  'AB+',
  'AB-',
];

export const USER_ROLES = {
  DONOR: 'donor',
  PATIENT: 'patient',
  HOSPITAL: 'hospital',
  ADMIN: 'admin',
};

export const REQUEST_STATUS = {
  PENDING: 'pending',
  MATCHED: 'matched',
  IN_TRANSIT: 'in_transit',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
  URGENT: 'urgent',
};

export const DONOR_STATUS = {
  AVAILABLE: 'available',
  UNAVAILABLE: 'unavailable',
  NOT_VERIFIED: 'not_verified',
  SUSPENDED: 'suspended',
};

export const HOSPITAL_STATUS = {
  VERIFIED: 'verified',
  PENDING: 'pending',
  REJECTED: 'rejected',
  SUSPENDED: 'suspended',
};

export const ROUTES = {
  // Public
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  ABOUT: '/about',
  CONTACT: '/contact',
  NOT_FOUND: '/404',

  // Protected - General
  FIND_DONORS: '/find-donors',
  EMERGENCY_REQUEST: '/emergency-request',
  DIRECTORY: '/directory',

  // Donor
  DONOR_DASHBOARD: '/donor-dashboard',
  DONOR_PROFILE: '/donor-profile',
  DONOR_AVAILABILITY: '/donor-availability',
  DONOR_HISTORY: '/donor-history',

  // Hospital
  HOSPITAL_DASHBOARD: '/hospital-dashboard',
  HOSPITAL_PROFILE: '/hospital-profile',
  HOSPITAL_REQUESTS: '/hospital-requests',
  HOSPITAL_BLOOD_BANK: '/hospital-blood-bank',

  // Admin
  ADMIN_DASHBOARD: '/admin-dashboard',
  ADMIN_USERS: '/admin-users',
  ADMIN_REQUESTS: '/admin-requests',
  ADMIN_VERIFICATION: '/admin-verification',
};

export const VERIFICATION_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  UNDER_REVIEW: 'under_review',
};

export const READINESS_SCORE_THRESHOLDS = {
  EXCELLENT: 90,
  GOOD: 75,
  FAIR: 60,
  LOW: 0,
};

export const COLORS = {
  primary: '#1D3557',
  secondary: '#2A9D8F',
  accent: '#E63946',
  background: '#F8FBFF',
  surface: '#FFFFFF',
  textPrimary: '#1F2937',
  textMuted: '#6B7280',
  border: '#D9E2EC',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
};

export const EMERGENCY_PRIORITY = {
  CRITICAL: 'critical',
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low',
};

export const DISTANCE_UNITS = {
  KM: 'km',
  MILES: 'miles',
};

export const DEFAULT_MAP_ZOOM = 13;
export const DEFAULT_MAP_CENTER = { lat: 28.6139, lng: 77.2090 }; // Delhi, India

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
export const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:3001';

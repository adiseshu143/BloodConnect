import { calculateDistance } from '../utils/helpers';

// Mock Donors
export const mockDonors = [
  {
    id: 1,
    name: 'Raj Kumar',
    phone: '9876543210',
    email: 'raj@example.com',
    bloodGroup: 'O+',
    location: 'Delhi, India',
    coordinates: { lat: 28.6139, lng: 77.209 },
    status: 'available',
    isAvailable: true,
    readinessScore: 95,
    lastDonationDate: '2025-12-15',
    lastActivityDate: new Date().toISOString(),
    verified: true,
    distance: 2.3,
    initials: 'RK',
  },
  {
    id: 2,
    name: 'Priya Singh',
    phone: '9876543211',
    email: 'priya@example.com',
    bloodGroup: 'A+',
    location: 'New Delhi, India',
    coordinates: { lat: 28.5244, lng: 77.1855 },
    status: 'available',
    isAvailable: true,
    readinessScore: 85,
    lastDonationDate: '2025-11-20',
    lastActivityDate: new Date().toISOString(),
    verified: true,
    distance: 5.1,
    initials: 'PS',
  },
  {
    id: 3,
    name: 'Amit Patel',
    phone: '9876543212',
    email: 'amit@example.com',
    bloodGroup: 'B+',
    location: 'Delhi, India',
    coordinates: { lat: 28.4595, lng: 77.0266 },
    status: 'unavailable',
    isAvailable: false,
    readinessScore: 30,
    lastDonationDate: '2025-10-10',
    lastActivityDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    verified: true,
    distance: 12.5,
    initials: 'AP',
  },
  {
    id: 4,
    name: 'Sarah Williams',
    phone: '9876543213',
    email: 'sarah@example.com',
    bloodGroup: 'AB-',
    location: 'Noida, India',
    coordinates: { lat: 28.5921, lng: 77.3869 },
    status: 'available',
    isAvailable: true,
    readinessScore: 88,
    lastDonationDate: '2025-12-01',
    lastActivityDate: new Date().toISOString(),
    verified: false,
    distance: 8.2,
    initials: 'SW',
  },
  {
    id: 5,
    name: 'Vikram Reddy',
    phone: '9876543214',
    email: 'vikram@example.com',
    bloodGroup: 'O-',
    location: 'Delhi, India',
    coordinates: { lat: 28.6129, lng: 77.2295 },
    status: 'available',
    isAvailable: true,
    readinessScore: 92,
    lastDonationDate: '2025-12-10',
    lastActivityDate: new Date().toISOString(),
    verified: true,
    distance: 1.8,
    initials: 'VR',
  },
];

// Mock Hospitals
export const mockHospitals = [
  {
    id: 1,
    name: 'All India Institute of Medical Sciences',
    abbreviation: 'AIIMS',
    address: 'Ansari Nagar, New Delhi',
    phone: '011-2659-5000',
    emergencyContact: '911',
    coordinates: { lat: 28.5688, lng: 77.2501 },
    hasBloodBank: true,
    verified: true,
    bloodGroups: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
    contactPerson: 'Dr. Sharma',
    email: 'bloodbank@aiims.edu.in',
  },
  {
    id: 2,
    name: 'Apollo Hospitals',
    abbreviation: 'Apollo',
    address: 'Sarita Vihar, New Delhi',
    phone: '011-2988-9090',
    emergencyContact: '1860-500-4425',
    coordinates: { lat: 28.5487, lng: 77.2471 },
    hasBloodBank: true,
    verified: true,
    bloodGroups: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
    contactPerson: 'Dr. Patel',
    email: 'bloodbank@apollodelhi.com',
  },
  {
    id: 3,
    name: 'Fortis Hospital',
    abbreviation: 'Fortis',
    address: 'Okhla Road, New Delhi',
    phone: '011-4119-1111',
    emergencyContact: '1860-120-9999',
    coordinates: { lat: 28.5309, lng: 77.2506 },
    hasBloodBank: true,
    verified: true,
    bloodGroups: ['O+', 'A+', 'B+', 'AB+'],
    contactPerson: 'Dr. Singh',
    email: 'bloodbank@fortis.com',
  },
];

// Mock Blood Requests
export const mockBloodRequests = [
  {
    id: 1,
    hospitalId: 1,
    hospitalName: 'AIIMS New Delhi',
    bloodGroup: 'O+',
    unitsNeeded: 4,
    priority: 'critical',
    status: 'urgent',
    description: 'Emergency blood needed for accident victim',
    location: 'Ansari Nagar, New Delhi',
    coordinates: { lat: 28.5688, lng: 77.2501 },
    createdAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    urgencyLevel: 'critical',
    timeRemaining: 1,
    matchedDonors: [1, 5],
  },
  {
    id: 2,
    hospitalId: 2,
    hospitalName: 'Apollo Hospitals',
    bloodGroup: 'AB-',
    unitsNeeded: 2,
    priority: 'high',
    status: 'pending',
    description: 'Blood needed for upcoming surgery',
    location: 'Sarita Vihar, New Delhi',
    coordinates: { lat: 28.5487, lng: 77.2471 },
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    urgencyLevel: 'high',
    timeRemaining: 4,
    matchedDonors: [4],
  },
  {
    id: 3,
    hospitalId: 1,
    hospitalName: 'AIIMS New Delhi',
    bloodGroup: 'A+',
    unitsNeeded: 3,
    priority: 'medium',
    status: 'matched',
    description: 'Regular blood stock for hospital',
    location: 'Ansari Nagar, New Delhi',
    coordinates: { lat: 28.5688, lng: 77.2501 },
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    urgencyLevel: 'medium',
    timeRemaining: 8,
    matchedDonors: [2],
  },
];

// Mock User Profiles
export const mockUserProfile = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  phone: '9876543210',
  role: 'donor',
  bloodGroup: 'O+',
  dateOfBirth: '1990-05-15',
  gender: 'male',
  address: 'Delhi, India',
  city: 'Delhi',
  state: 'Delhi',
  pinCode: '110001',
  verified: true,
  totalDonations: 5,
  lastDonationDate: '2025-12-15',
  readinessScore: 95,
  isAvailable: true,
  profileCompletion: 100,
  createdAt: '2024-01-15',
};

// Mock Analytics Data
export const mockAnalytics = {
  totalDonors: 5234,
  totalRequests: 1289,
  successfulMatches: 987,
  averageResponseTime: '12 minutes',
  bloodGroupDistribution: {
    'O+': 38,
    'O-': 7,
    'A+': 34,
    'A-': 6,
    'B+': 9,
    'B-': 2,
    'AB+': 3,
    'AB-': 1,
  },
};

// Mock Notifications
export const mockNotifications = [
  {
    id: 1,
    type: 'request',
    title: 'Urgent Blood Request',
    message: 'O+ blood needed at AIIMS - 2 units',
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    read: false,
  },
  {
    id: 2,
    type: 'profile',
    title: 'Profile Verified',
    message: 'Your donor profile has been verified',
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    read: true,
  },
  {
    id: 3,
    type: 'donation',
    title: 'Thank You',
    message: 'Your donation has been received successfully',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    read: true,
  },
];

// Mock Donor History
export const mockDonationHistory = [
  {
    id: 1,
    date: '2025-12-15',
    hospitalName: 'AIIMS New Delhi',
    bloodGroup: 'O+',
    units: 1,
    status: 'completed',
  },
  {
    id: 2,
    date: '2025-11-20',
    hospitalName: 'Apollo Hospitals',
    bloodGroup: 'O+',
    units: 1,
    status: 'completed',
  },
  {
    id: 3,
    date: '2025-10-10',
    hospitalName: 'Fortis Hospital',
    bloodGroup: 'O+',
    units: 1,
    status: 'completed',
  },
];

// Mock Admin Dashboard Data
export const mockAdminDashboard = {
  totalUsers: 12543,
  totalDonors: 8934,
  totalHospitals: 234,
  totalRequests: 1289,
  pendingVerifications: {
    donors: 45,
    hospitals: 12,
  },
  recentRequests: mockBloodRequests,
  systemMetrics: {
    uptime: '99.9%',
    responseTime: '245ms',
    activeUsers: 289,
    dailyMatches: 34,
  },
};

// Mock Request Events for Timeline
export const mockRequestTimeline = [
  {
    title: 'Request Created',
    timestamp: '2025-12-15 06:30 AM',
    completed: true,
    description: 'Emergency request placed',
  },
  {
    title: 'Donors Notified',
    timestamp: '2025-12-15 06:35 AM',
    completed: true,
    description: 'Matched donors received notification',
  },
  {
    title: 'Donor Accepted',
    timestamp: '2025-12-15 06:40 AM',
    completed: true,
    description: 'Raj Kumar accepted the request',
  },
  {
    title: 'In Transit',
    timestamp: '2025-12-15 06:55 AM',
    completed: true,
    description: 'Donor on the way to hospital',
  },
  {
    title: 'Blood Received',
    timestamp: '2025-12-15 07:15 AM',
    completed: false,
    description: 'Awaiting blood collection',
  },
];

// Mock Verification Queue
export const mockVerificationQueue = [
  {
    id: 1,
    name: 'Neha Sharma',
    type: 'donor',
    email: 'neha@example.com',
    phone: '9876543215',
    bloodGroup: 'A+',
    verificationStatus: 'pending',
    submittedAt: '2025-12-14',
    documents: ['aadhar', 'blood_test_report'],
  },
  {
    id: 2,
    name: 'Max Healthcare',
    type: 'hospital',
    email: 'admin@maxcare.com',
    phone: '011-1234-5678',
    verificationStatus: 'under_review',
    submittedAt: '2025-12-13',
    documents: ['registration', 'license', 'blood_bank_cert'],
  },
];

// Mock Blood Bank Inventory
export const mockBloodBankInventory = [
  { bloodGroup: 'O+', units: 45, lowStock: false },
  { bloodGroup: 'O-', units: 12, lowStock: true },
  { bloodGroup: 'A+', units: 38, lowStock: false },
  { bloodGroup: 'A-', units: 8, lowStock: true },
  { bloodGroup: 'B+', units: 25, lowStock: false },
  { bloodGroup: 'B-', units: 5, lowStock: true },
  { bloodGroup: 'AB+', units: 18, lowStock: false },
  { bloodGroup: 'AB-', units: 3, lowStock: true },
];

// Testimonials
export const mockTestimonials = [
  {
    name: 'Patient Family Member',
    role: 'Saved Life',
    image: '👨‍⚕️',
    text: 'The system helped us find a blood donor within minutes. My father is alive today because of this platform.',
  },
  {
    name: 'Blood Donor',
    role: 'Regular Donor',
    image: '❤️',
    text: 'It feels amazing to know that I can save lives with just a simple donation. This platform makes it so easy!',
  },
  {
    name: 'Hospital Administrator',
    role: 'Healthcare Provider',
    image: '🏥',
    text: 'Managing blood supplies has never been easier. We can now respond to emergencies in real-time.',
  },
];

// FAQ Data
export const mockFAQ = [
  {
    question: 'Who can donate blood?',
    answer:
      'Generally, anyone between 18-65 years old, weighing at least 50kg, and in good health can donate blood. Some conditions may prevent donation.',
  },
  {
    question: 'How often can I donate?',
    answer:
      'You can donate blood once every 56 days (approximately 8 weeks). This allows your body to replenish blood cells.',
  },
  {
    question: 'What is blood group compatibility?',
    answer:
      'O- is universal donor (can give to anyone), AB+ is universal recipient (can receive from anyone). Other groups have specific compatibility rules.',
  },
  {
    question: 'How do I register as a donor?',
    answer:
      'Visit our website, click Register, select Donor role, fill in your information including blood group, and verify your email and phone number.',
  },
  {
    question: 'How long does blood donation take?',
    answer:
      'The actual blood collection process takes about 10-15 minutes. The whole appointment including screening and recovery takes about 30-45 minutes.',
  },
  {
    question: 'Is blood donation safe?',
    answer:
      'Yes, blood donation is very safe. We use sterile, single-use equipment for each donation. Your body replaces donated blood within weeks.',
  },
];

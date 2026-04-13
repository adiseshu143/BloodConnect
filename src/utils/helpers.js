/**
 * Format a distance value
 */
export const formatDistance = (distance, unit = 'km') => {
  if (!distance) return '0 ' + unit;
  return `${distance.toFixed(1)} ${unit}`;
};

/**
 * Get blood group compatibility
 */
export const getCompatibleBloodGroups = (bloodGroup) => {
  const compatibility = {
    'O+': ['O+', 'A+', 'B+', 'AB+', 'O-', 'A-', 'B-', 'AB-'],
    'O-': ['O-', 'A-', 'B-', 'AB-', 'O+', 'A+', 'B+', 'AB+'],
    'A+': ['A+', 'AB+', 'A-', 'AB-'],
    'A-': ['A-', 'AB-'],
    'B+': ['B+', 'AB+', 'B-', 'AB-'],
    'B-': ['B-', 'AB-'],
    'AB+': ['AB+'],
    'AB-': ['AB-', 'AB+'],
  };
  return compatibility[bloodGroup] || [];
};

/**
 * Calculate distance between two coordinates (Haversine formula)
 */
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

/**
 * Format date to readable format
 */
export const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

/**
 * Format time to readable format
 */
export const formatTime = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Format date and time
 */
export const formatDateTime = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return `${formatDate(d)} ${formatTime(d)}`;
};

/**
 * Get relative time (e.g., "2 hours ago")
 */
export const getRelativeTime = (date) => {
  if (!date) return '';
  const d = new Date(date);
  const now = new Date();
  const seconds = Math.floor((now - d) / 1000);

  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;

  return formatDate(d);
};

/**
 * Validate email
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (basic 10 digit)
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

/**
 * Validate password strength
 */
export const validatePasswordStrength = (password) => {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasNonalphas = /\W/.test(password);
  const isLengthValid = password.length >= 8;

  return hasUppercase && hasLowercase && hasNumbers && isLengthValid;
};

/**
 * Get password strength label
 */
export const getPasswordStrengthLabel = (password) => {
  if (!password) return 'None';
  if (password.length < 6) return 'Too weak';
  if (
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    password.length >= 8
  ) {
    return 'Strong';
  }
  if (
    (/[A-Z]/.test(password) || /[a-z]/.test(password)) &&
    /\d/.test(password)
  ) {
    return 'Good';
  }
  return 'Weak';
};

/**
 * Format blood group display
 */
export const formatBloodGroup = (group) => {
  return group ? group.toUpperCase() : 'Unknown';
};

/**
 * Get initials from name
 */
export const getInitials = (name) => {
  if (!name) return '?';
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

/**
 * Truncate text
 */
export const truncateText = (text, length = 100) => {
  if (!text) return '';
  return text.length > length ? text.substring(0, length) + '...' : text;
};

/**
 * Format status for display
 */
export const formatStatus = (status) => {
  return status
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Get status color
 */
export const getStatusColor = (status) => {
  const colors = {
    pending: 'bg-yellow-100 text-yellow-800',
    matched: 'bg-blue-100 text-blue-800',
    in_transit: 'bg-purple-100 text-purple-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
    urgent: 'bg-accent text-white',
    available: 'bg-green-100 text-green-800',
    unavailable: 'bg-gray-100 text-gray-800',
    verified: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
};

/**
 * Get priority color
 */
export const getPriorityColor = (priority) => {
  const colors = {
    critical: 'bg-accent text-white',
    high: 'bg-orange-100 text-orange-800',
    medium: 'bg-blue-100 text-blue-800',
    low: 'bg-green-100 text-green-800',
  };
  return colors[priority] || 'bg-gray-100 text-gray-800';
};

/**
 * Format currency
 */
export const formatCurrency = (amount, currency = 'INR') => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
  }).format(amount);
};

/**
 * Debounce function
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttle function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Extract coordinates from address (mock function)
 */
export const getCoordinatesFromAddress = async (address) => {
  // This would call Google Maps Geocoding API in production
  // For now, return mock coordinates
  return {
    lat: 28.6139,
    lng: 77.209,
  };
};

/**
 * Calculate readiness score
 */
export const calculateReadinessScore = (donor) => {
  let score = 100;

  // Deduct for not being verified
  if (donor.status !== 'verified') score -= 30;

  // Deduct for being unavailable
  if (!donor.isAvailable) score -= 25;

  // Deduct based on last donation date
  if (donor.lastDonationDate) {
    const daysSinceDonation = Math.floor(
      (new Date() - new Date(donor.lastDonationDate)) / (1000 * 60 * 60 * 24)
    );
    if (daysSinceDonation < 56) score -= 15; // Too soon to donate again
  }

  // Deduct for no recent activity
  if (donor.lastActivityDate) {
    const daysSinceActivity = Math.floor(
      (new Date() - new Date(donor.lastActivityDate)) / (1000 * 60 * 60 * 24)
    );
    if (daysSinceActivity > 180) score -= 10;
  }

  return Math.max(0, score);
};

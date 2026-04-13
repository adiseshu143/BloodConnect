import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

import { ProtectedRoute } from '../components/layout/Layouts';
import { Input, Select, Textarea, BloodGroupSelector, Button, FormGroup, FormActions } from '../components/ui/FormComponents';
import { Alert } from '../components/ui/BasicComponents';
import { ROUTES, EMERGENCY_PRIORITY, BLOOD_GROUPS } from '../constants';

const EmergencyRequestPage = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    hospitalName: '',
    contactPerson: '',
    phone: '',
    email: '',
    bloodGroup: '',
    units: '1',
    priority: 'high',
    location: '',
    description: '',
    timeUrgency: '1', // hours
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.hospitalName) newErrors.hospitalName = 'Hospital name is required';
    if (!formData.contactPerson) newErrors.contactPerson = 'Contact person is required';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Valid 10-digit phone is required';
    }
    if (!formData.bloodGroup) newErrors.bloodGroup = 'Blood group is required';
    if (!formData.units || parseInt(formData.units) < 1) {
      newErrors.units = 'At least 1 unit is required';
    }
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.description) newErrors.description = 'Description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Mock submit
      console.log('Request submitted:', formData);
      setSubmitted(true);
      setTimeout(() => {
        navigate(ROUTES.HOME);
      }, 3000);
    }
  };

  if (submitted) {
    return (
      <div className="bg-background min-h-screen flex flex-col">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-4xl font-bold mb-2 text-secondary-500">Request Submitted!</h1>
            <p className="text-text-muted mb-8">
              Your blood request has been registered and donors are being notified.
            </p>
            <p className="text-text-muted mb-8">Redirecting to home page...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen flex flex-col">

      <main className="flex-1">
        <div className="container-max py-8">
          {/* Warning Banner */}
          <Alert
            variant="error"
            title="🚨 EMERGENCY REQUEST"
            message="This form will notify all compatible blood donors in your area immediately. Use only for genuine emergencies."
            className="mb-8"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 bg-surface rounded-lg p-8 border border-border">
              <h1 className="text-3xl font-bold mb-6">Create Emergency Blood Request</h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Section 1: Hospital Info */}
                <div className="pb-6 border-b border-border">
                  <h2 className="text-lg font-semibold mb-4">Hospital Information</h2>
                  <FormGroup>
                    <Input
                      label="Hospital Name"
                      name="hospitalName"
                      value={formData.hospitalName}
                      onChange={handleChange}
                      error={errors.hospitalName}
                      required
                    />
                    <Input
                      label="Contact Person Name"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      error={errors.contactPerson}
                      required
                    />
                    <Input
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      placeholder="10-digit mobile number"
                      required
                    />
                    <Input
                      label="Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </div>

                {/* Section 2: Blood Requirements */}
                <div className="pb-6 border-b border-border">
                  <h2 className="text-lg font-semibold mb-4">Blood Requirements</h2>
                  <FormGroup>
                    <BloodGroupSelector
                      value={formData.bloodGroup}
                      onChange={(bg) =>
                        setFormData((prev) => ({ ...prev, bloodGroup: bg }))
                      }
                      label="Blood Group Needed"
                      required
                    />
                    {errors.bloodGroup && (
                      <p className="text-accent text-sm">{errors.bloodGroup}</p>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        label="Units Needed"
                        type="number"
                        name="units"
                        min="1"
                        max="50"
                        value={formData.units}
                        onChange={handleChange}
                        error={errors.units}
                        required
                      />
                      <Select
                        label="How Urgent?"
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        options={[
                          { value: 'critical', label: 'Critical (Within 1 hour)' },
                          { value: 'high', label: 'High (Within 3 hours)' },
                          { value: 'medium', label: 'Medium (Within 6 hours)' },
                        ]}
                      />
                    </div>
                  </FormGroup>
                </div>

                {/* Section 3: Location */}
                <div className="pb-6 border-b border-border">
                  <h2 className="text-lg font-semibold mb-4">Location</h2>
                  <FormGroup>
                    <Input
                      label="Hospital Location/Address"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      error={errors.location}
                      placeholder="Complete address for donors"
                      required
                    />
                  </FormGroup>
                </div>

                {/* Section 4: Additional Info */}
                <div className="pb-6 border-b border-border">
                  <h2 className="text-lg font-semibold mb-4">Additional Information</h2>
                  <FormGroup>
                    <Textarea
                      label="Description / Patient Details"
                      name="description"
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      error={errors.description}
                      placeholder="Patient condition, any special requirements, etc."
                      helperText="This helps donors understand the urgency and severity"
                      required
                    />
                  </FormGroup>
                </div>

                <FormActions className="pt-6 border-t border-border">
                  <button
                    type="button"
                    onClick={() => navigate(ROUTES.HOME)}
                    className="px-6 py-2 border-2 border-border rounded-lg hover:bg-gray-50 transition-smooth"
                  >
                    Cancel
                  </button>
                  <Button type="submit" variant="danger" size="lg">
                    Submit Emergency Request
                  </Button>
                </FormActions>
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* How It Works */}
              <div className="bg-secondary-50 border-2 border-secondary-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4">How It Works</h3>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="font-bold text-secondary-500 shrink-0">1</span>
                    <span>Fill the form with emergency details</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-secondary-500 shrink-0">2</span>
                    <span>Match compatible donors instantly</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-secondary-500 shrink-0">3</span>
                    <span>Donors respond within minutes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-secondary-500 shrink-0">4</span>
                    <span>Blood delivery to your hospital</span>
                  </li>
                </ol>
              </div>

              {/* Important Info */}
              <div className="bg-accent/10 border-2 border-accent/20 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-accent">Important</h3>
                <ul className="space-y-3 text-sm text-text-primary">
                  <li>✓ This request is only for emergencies</li>
                  <li>✓ Misuse may result in account suspension</li>
                  <li>✓ Donors will be verified before confirming</li>
                  <li>✓ Real-time alerts are sent to nearby donors</li>
                  <li>✓ Average response time: &lt;5 minutes</li>
                </ul>
              </div>

              {/* Emergency Contact */}
              <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4">24/7 Support</h3>
                <p className="text-sm text-text-muted mb-4">
                  For urgent assistance, call our emergency hotline:
                </p>
                <p className="text-2xl font-bold text-primary-500 mb-4">
                  1800-DONATE-1
                </p>
                <p className="text-xs text-text-muted">
                  Our coordinators are available 24/7 to help
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmergencyRequestPage;

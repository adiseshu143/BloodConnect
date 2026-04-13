import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AuthLayout } from '../components/layout/Layouts';
import { Input, Button, Form, FormGroup, FormActions } from '../components/ui/FormComponents';
import { Alert } from '../components/ui/BasicComponents';
import { ROUTES } from '../constants';
import { validateEmail, validatePhone, validatePasswordStrength } from '../utils/helpers';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [step, setStep] = useState(1); // 1: role, 2: personal, 3: verification

  const [formData, setFormData] = useState({
    role: '',
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    bloodGroup: '',
    address: '',
    hospitalName: '',
    hospitalType: '',
    bedCapacity: '',
  });

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

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.role) newErrors.role = 'Please select a role';
    } else if (step === 2) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email || !validateEmail(formData.email)) {
        newErrors.email = 'Valid email is required';
      }
      if (!formData.phone || !validatePhone(formData.phone)) {
        newErrors.phone = 'Valid 10-digit phone is required';
      }
      if (!formData.password || !validatePasswordStrength(formData.password)) {
        newErrors.password = 'Password must be at least 8 characters with uppercase, lowercase, and numbers';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }

      if (formData.role === 'donor') {
        if (!formData.bloodGroup) newErrors.bloodGroup = 'Blood group is required';
      } else if (formData.role === 'hospital') {
        if (!formData.hospitalName) newErrors.hospitalName = 'Hospital name is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      try {
        const newUser = {
          ...formData,
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
          token: 'mock-token-' + Date.now(),
        };
        register(newUser);
        navigate(formData.role === 'donor' ? ROUTES.DONOR_DASHBOARD : ROUTES.HOSPITAL_DASHBOARD);
      } catch (err) {
        setApiError('Registration failed. Please try again.');
      }
    }
  };

  return (
    <AuthLayout title="Create Account" description="Join our blood donation community">
      {apiError && <Alert variant="error" message={apiError} className="mb-6" />}

      <Form onSubmit={handleSubmit}>
        {step === 1 && (
          <FormGroup>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-text-primary mb-4">
                I am registering as:
              </label>
              <div className="space-y-3">
                {[
                  { value: 'donor', label: 'Blood Donor ❤️', desc: 'I want to save lives by donating' },
                  { value: 'patient', label: 'Patient/Requester 🏥', desc: 'I need blood for a patient' },
                  {
                    value: 'hospital',
                    label: 'Hospital/Blood Bank 🏢',
                    desc: 'I manage medical facility',
                  },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, role: option.value }));
                      setErrors((prev) => ({ ...prev, role: '' }));
                    }}
                    className={`w-full p-4 border-2 rounded-lg text-left transition-smooth ${
                      formData.role === option.value
                        ? 'border-secondary-500 bg-secondary-50'
                        : 'border-border hover:border-secondary-500'
                    }`}
                  >
                    <h3 className="font-semibold">{option.label}</h3>
                    <p className="text-sm text-text-muted">{option.desc}</p>
                  </button>
                ))}
              </div>
              {errors.role && <p className="text-accent text-sm mt-2">{errors.role}</p>}
            </div>
          </FormGroup>
        )}

        {step === 2 && (
          <FormGroup>
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
            <Input
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder="10-digit number"
              required
            />
            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              helperText="Min 8 chars, uppercase, lowercase, number"
              required
            />
            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
            />

            {formData.role === 'donor' && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-3">
                    Blood Group
                  </label>
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="w-full p-2 border border-border rounded-lg"
                  >
                    <option value="">Select Blood Group</option>
                    {['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].map((bg) => (
                      <option key={bg} value={bg}>
                        {bg}
                      </option>
                    ))}
                  </select>
                  {errors.bloodGroup && (
                    <p className="text-accent text-sm mt-1">{errors.bloodGroup}</p>
                  )}
                </div>
                <Input
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </>
            )}

            {formData.role === 'hospital' && (
              <>
                <Input
                  label="Hospital Name"
                  name="hospitalName"
                  value={formData.hospitalName}
                  onChange={handleChange}
                  error={errors.hospitalName}
                  required
                />
                <Input
                  label="Hospital Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                <Input
                  label="Bed Capacity"
                  type="number"
                  name="bedCapacity"
                  value={formData.bedCapacity}
                  onChange={handleChange}
                />
              </>
            )}
          </FormGroup>
        )}

        {step === 3 && (
          <FormGroup>
            <div className="bg-secondary-50 border-2 border-secondary-200 rounded-lg p-6 text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-secondary-600 mb-2">Ready to Proceed!</h3>
              <p className="text-text-muted mb-6">
                Please review your information and complete registration
              </p>
              <div className="text-left space-y-2 text-sm mb-6 bg-white p-4 rounded-lg">
                <p>
                  <strong>Name:</strong> {formData.name}
                </p>
                <p>
                  <strong>Email:</strong> {formData.email}
                </p>
                <p>
                  <strong>Role:</strong> {formData.role.toUpperCase()}
                </p>
                {formData.bloodGroup && (
                  <p>
                    <strong>Blood Group:</strong> {formData.bloodGroup}
                  </p>
                )}
              </div>
            </div>
          </FormGroup>
        )}

        <FormActions className="mt-8 flex-between">
          {step > 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(step - 1)}
            >
              Back
            </Button>
          )}
          {step < 3 ? (
            <Button type="button" onClick={handleNextStep}>
              Next
            </Button>
          ) : (
            <Button type="submit" variant="secondary">
              Create Account
            </Button>
          )}
        </FormActions>
      </Form>

      <p className="text-center text-text-muted mt-6">
        Already have an account?{' '}
        <Link to={ROUTES.LOGIN} className="text-secondary-500 font-semibold">
          Login here
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;

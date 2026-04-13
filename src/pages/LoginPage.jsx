import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AuthLayout } from '../components/layout/Layouts';
import { Input, Button, Form, FormGroup, Checkbox } from '../components/ui/FormComponents';
import { Alert } from '../components/ui/BasicComponents';
import { ROUTES } from '../constants';
import { validateEmail } from '../utils/helpers';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Mock login - in production, this would call an API
        const mockUser = {
          id: '1',
          name: 'John Doe',
          email: formData.email,
          role: 'donor',
          verified: true,
          token: 'mock-token-' + Date.now(),
          bloodGroup: 'O+',
          isAvailable: true,
        };

        login(mockUser);
        navigate(ROUTES.DONOR_DASHBOARD);
      } catch (err) {
        setApiError('Login failed. Please check your credentials and try again.');
      }
    }
  };

  return (
    <AuthLayout title="Sign In" description="Access your blood donation account">
      {apiError && <Alert variant="error" message={apiError} className="mb-6" />}

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="your@email.com"
            required
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="••••••••"
            required
          />

          <Checkbox
            label="Remember me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />

          <Button type="submit" variant="secondary" size="lg" className="w-full">
            Sign In
          </Button>
        </FormGroup>
      </Form>

      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px bg-border"></div>
        <span className="text-text-muted text-sm">Or continue with</span>
        <div className="flex-1 h-px bg-border"></div>
      </div>

      <div className="space-y-3 mb-6 d-flex flex-row gap-4">
        <Button
          type="button"
          variant="outline"
          size="md"
          className="w-full"
          onClick={() => alert('Google login would be implemented here')}
        >
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          size="md"
          className="w-full"
          onClick={() => alert('Apple login would be implemented here')}
        >
          Apple ID
        </Button>
      </div>

      <div className="space-y-3 text-center text-sm">
        <p>
          <Link to="#forgot" className="text-secondary-500 font-semibold">
            Forgot your password?
          </Link>
        </p>
        <p className="text-text-muted">
          Don't have an account?{' '}
          <Link to={ROUTES.REGISTER} className="text-secondary-500 font-semibold">
            Sign up now
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;

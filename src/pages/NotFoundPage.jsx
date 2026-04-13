import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '../components/ui/BasicComponents';
import { ROUTES } from '../constants';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-primary-50 to-secondary-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-9xl font-bold text-primary-500 mb-4 animate-pulse">
          404
        </div>
        <h1 className="text-5xl font-bold text-text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-text-muted mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to={ROUTES.HOME}>
            <Button variant="primary" size="lg">
              Go Home
            </Button>
          </Link>
          <Link to={ROUTES.FIND_DONORS}>
            <Button variant="secondary" size="lg">
              Find Donors
            </Button>
          </Link>
        </div>

        <div className="text-6xl animate-bounce">
          <Heart className="w-24 h-24 text-accent mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

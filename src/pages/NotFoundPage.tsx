
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-rgpv-cream p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-rgpv-red">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-rgpv-dark">Page Not Found</h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => window.history.back()} 
            variant="outline" 
            className="rounded-full border-rgpv-dark text-rgpv-dark"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Go Back
          </Button>
          <Link to="/">
            <Button className="w-full sm:w-auto bg-rgpv-red hover:bg-rgpv-red/90 text-white rounded-full button-shadow">
              <Home className="w-4 h-4 mr-2" /> Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

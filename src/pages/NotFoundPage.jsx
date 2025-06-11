import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  // Auto redirect countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated 404 Number */}
        <div className="relative mb-8">
          <div className="text-8xl md:text-9xl font-bold text-blue-100 select-none animate-pulse">
            404
          </div>
          <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-bounce">
            404
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, it happens to the best of us!
          </p>
          
          {/* Auto redirect notice */}
          <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 mb-8 inline-block">
            <p className="text-blue-800">
              <span className="font-medium">Auto-redirecting to home page in {countdown} seconds...</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <button
            onClick={handleGoHome}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🏠 Go Back Home
          </button>
        </div>

        {/* Animated Elements */}
        <div className="absolute top-20 left-10 text-4xl animate-bounce opacity-20">⚡</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse opacity-20">💡</div>
        <div className="absolute bottom-20 left-20 text-3xl animate-bounce opacity-20" style={{animationDelay: '1s'}}>🔧</div>
        <div className="absolute bottom-40 right-10 text-4xl animate-pulse opacity-20" style={{animationDelay: '2s'}}>📡</div>
      </div>
    </div>
  );
};

export default NotFoundPage;
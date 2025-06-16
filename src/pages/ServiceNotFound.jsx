import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceNotFound = ({ tonavigate }) => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate(`/${tonavigate}`);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, tonavigate]);

  const handleGoHome = () => navigate(`/${tonavigate}`);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-50 flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Big Icon */}
        <div className="text-7xl md:text-8xl font-bold text-yellow-100 relative mb-6 select-none animate-pulse">
          ⚠️
          <div className="absolute inset-0 text-transparent bg-clip-text text-yellow-100 animate-bounce">
            ⚠️
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Service / Data Not Found
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
          The requested service or product data could not be found. It may have been removed, renamed, or temporarily unavailable.
        </p>

        {/* Countdown & Button in two lines */}
        <div className="flex flex-col items-center gap-4 mb-8">
          {/* Countdown */}
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg px-6 py-3">
            <p className="text-yellow-800">
              {`Redirecting to the ${tonavigate} in `} 
              <span className="font-semibold">{countdown}</span> seconds...
            </p>
          </div>

          {/* Button */}
          <button
            onClick={handleGoHome}
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition duration-300 transform hover:scale-105 shadow-md"
          >
            {`🏠 Go ${tonavigate}`}
          </button>
        </div>
      </div>

      {/* Floating decorative emojis */}
      <div className="absolute top-24 left-10 text-3xl animate-bounce opacity-20">🔍</div>
      <div className="absolute top-40 right-20 text-2xl animate-pulse opacity-20">💾</div>
      <div className="absolute bottom-24 left-20 text-2xl animate-bounce opacity-20">🔌</div>
      <div className="absolute bottom-40 right-10 text-3xl animate-pulse opacity-20">🛠️</div>
    </div>
  );
};

export default ServiceNotFound;

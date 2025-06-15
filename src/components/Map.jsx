import React, { useState } from 'react';

const MapComponent = () => {
  const [mapView, setMapView] = useState('normal');

  // Al Jubail coordinates from your Google Maps link
  const location = {
    lat: 26.9597709,
    lng: 49.5687416,
    name: "Al Jubail, Saudi Arabia"
  };

  const openGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/place/Al+Jubail+Saudi+Arabia/@${location.lat},${location.lng},15z/data=!4m6!3m5!1s0x3e35a06654d8187d:0x210bf5bd13d2288f!8m2!3d${location.lat}!4d${location.lng}!16zL20vMDJ5cXJr`;
    window.open(googleMapsUrl, '_blank');
  };

  // Google Maps embed URLs for different views
  const normalMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.7!2d${location.lng}!3d${location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a06654d8187d%3A0x210bf5bd13d2288f!2sAl%20Jubail%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1672234567890!5m2!1sen!2s`;
  
  const satelliteMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.7!2d${location.lng}!3d${location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a06654d8187d%3A0x210bf5bd13d2288f!2sAl%20Jubail%20Saudi%20Arabia!5e1!3m2!1sen!2s!4v1672234567890!5m2!1sen!2s`;

  const currentMapUrl = mapView === 'satellite' ? satelliteMapUrl : normalMapUrl;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
         

          {/* Map Container */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Map Controls */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
               
                
                {/* View Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setMapView('normal')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      mapView === 'normal'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    🗺️ Map
                  </button>
                  <button
                    onClick={() => setMapView('satellite')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      mapView === 'satellite'
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    🛰️ Satellite
                  </button>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative">
              <iframe
                key={mapView} // Force re-render when view changes
                src={currentMapUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title={`${mapView} view of Al Jubail, Saudi Arabia`}
              ></iframe>

              {/* Overlay with Click Handler */}
              <div 
                className="absolute inset-0 cursor-pointer group"
                onClick={openGoogleMaps}
                title="Click to open in Google Maps"
              >
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                    📍 Open in Google Maps
                  </div>
                </div>
              </div>

              {/* Quick Action Button */}
              <button
                onClick={openGoogleMaps}
                className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-sm font-medium z-10"
              >
                📍 Open in Google Maps
              </button>
            </div>

            {/* Location Details */}
            <div className="p-6 bg-gray-50">
             

              {/* Additional Actions */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={openGoogleMaps}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    🧭 Get Directions
                  </button>
                  <button
                    onClick={() => {
                      const shareUrl = `https://www.google.com/maps/place/Al+Jubail+Saudi+Arabia/@${location.lat},${location.lng},15z`;
                      navigator.clipboard.writeText(shareUrl);
                      alert('Location link copied to clipboard!');
                    }}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                  >
                    📋 Copy Location
                  </button>
                  <a
                    href={`https://www.google.com/maps/dir//${location.lat},${location.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                  >
                    🚗 Navigate Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapComponent;
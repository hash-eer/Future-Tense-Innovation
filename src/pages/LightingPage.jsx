import React from 'react';
import { Link } from 'react-router-dom';

const LightingPage = () => {


  return (
    <div className="pt-20">
    

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container mx-auto px-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-blue-600 font-medium">lighting</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

    
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Lighting Division
                <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-8">
                CET Lighting Division is responsible for providing an adequate, modern, aesthetic, efficient 
                lighting system for Roadways, Bridges, Underpasses, Home Lighting, Interior Lighting, Exterior 
                Lighting, Interior Hangings, Chandeliers Pendants, Sconces, Wall Sconces, Flush & Semi-Flush 
                Ceiling Lights and so on.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-yellow-600 mb-8">Products & Manufacturers</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {/* Product Cards */}
                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Indoor Lighting</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Outdoor Lighting</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Hazardous Lighting</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">LED Lighting</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Obstruction Lighting</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Emergency Lighting</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Ballasts & Control Devices</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Luminaires</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Bulbs & Lamps</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Smart Controls</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LightingPage;
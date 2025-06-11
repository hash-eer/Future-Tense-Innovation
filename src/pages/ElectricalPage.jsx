import React from 'react';
import { Link } from 'react-router-dom';

const ElectricalPage = () => {
 
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
                <span className="text-blue-600 font-medium">electrical</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Electrical Division Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Electrical Division
                <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-8">
                CET is one of the major electrical wholesale distributor of electrical products and related services 
                to contractors and end users. The growth and success we experience is through a network of 
                established distributors and professional sales and technical engineers throughout the kingdom.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-600 mb-8">Products & Manufacturers</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                {/* First Row */}
                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Bulbs & Lamps</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Safety Tools for Transmission Lines & Substation</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Fire Detection & Alarm System</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0L7 19a2 2 0 002 2h6a2 2 0 002-2L18 4" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Partial Discharge Monitoring System</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Electrical Testing Equipment</h4>
                </div>

                {/* Second Row */}
                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Electrical Panelboards</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Fuses</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Transformers</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364L18.364 5.636" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Safety & Disconnect Switches</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Cable Termination & Kits</h4>
                </div>

                {/* Third Row */}
                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Cable Lugs</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Communication & Control Cables</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Wires & Cables</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Power Cables, LV, MV, HV</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V5a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Wiring & Cabling Accessories</h4>
                </div>

                {/* Fourth Row */}
                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Wiring Devices</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364L18.364 5.636" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Circuit Breakers</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Cable Tray & Ladders</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Conduit Fittings & Accessories</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Enclosures/Cabinets</h4>
                </div>

                {/* Fifth Row */}
                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Conduit Boxes</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">PVC Pipes</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4a1 1 0 011-1h4m0 0V1a1 1 0 011-1h4a1 1 0 011 1v2m0 0h4a1 1 0 011 1v4m0 0h2a1 1 0 011 1v4a1 1 0 01-1 1h-2m0 0v4a1 1 0 01-1 1h-4m0 0v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2m0 0H4a1 1 0 01-1-1v-4m0 0H1a1 1 0 01-1-1V9a1 1 0 011-1h2" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Flexible Metallic Conduits</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Electrical Metallic Tubing</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Rigid Steel Conduits</h4>
                </div>

                {/* Sixth Row - Single item */}
                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer col-span-2 md:col-span-1">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Grounding & Lightning Materials</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElectricalPage;
import React from 'react';
import { Link } from 'react-router-dom';

const InstrumentationPage = () => {
  
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
                <span className="text-blue-600 font-medium">instrumentation</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Instrumentation Division Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Instrumentation Division
                <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-8">
                CET Instrumentation Division is one of our largest and fastest growing divisions. Our experience 
                in the instrumentation field has allowed us to have installed and worked with a wide variety of 
                instrumentation products. We have the talent and expertise to fully service your instrumentation 
                needs.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-purple-600 mb-8">Products & Manufacturers</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                {/* Instrumentation Products */}
                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Test & Calibration Instruments</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Gauges</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Instrumentation Tubes & Fittings</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Industrial Automation</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Lab & Research Equipment</h4>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default InstrumentationPage;
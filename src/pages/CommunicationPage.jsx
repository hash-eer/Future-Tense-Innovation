import React from 'react';
import { Link } from 'react-router-dom';

const CommunicationPage = () => {


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
                <span className="text-blue-600 font-medium">communication</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Telecommunication Division Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Telecommunication Division
                <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-8">
                CET represents many reputed communication equipment products in the Kingdom such as 
                Convergence / IP Telephony, IT Networking Equipments, Wireless Devices, Telecom Products 
                and so on.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-teal-600 mb-8">Products & Manufacturers</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                {/* Main Categories from Reference */}
                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Adaptors & Testers</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Telecommunications</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Networking & Communication Devices</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">Wireless Communications</h4>
                </div>

                <div className="bg-gray-700 hover:bg-gray-600 transition-colors p-6 rounded-lg text-center group cursor-pointer">
                  <div className="bg-white rounded-lg p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-sm">CCTV Solutions</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunicationPage;
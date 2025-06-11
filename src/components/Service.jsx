// import React, { useState } from 'react';

// const Service = () => {
//   const [activeService, setActiveService] = useState('electrical');

//   const services = {
//     electrical: {
//       title: 'Electrical Services',
//       description: 'Comprehensive electrical solutions for residential, commercial, and industrial applications.',
//       features: [
//         'Electrical Installation & Maintenance',
//         'Power Distribution Systems',
//         'Electrical Safety Audits',
//         'Emergency Electrical Services',
//         'Electrical Troubleshooting',
//         'Circuit Design & Installation'
//       ],
//       icon: '⚡'
//     },
//     lighting: {
//       title: 'Lighting Solutions',
//       description: 'Modern lighting systems designed for efficiency, aesthetics, and functionality.',
//       features: [
//         'LED Lighting Installation',
//         'Smart Lighting Systems',
//         'Outdoor & Landscape Lighting',
//         'Emergency Lighting',
//         'Lighting Design & Consultation',
//         'Energy-Efficient Solutions'
//       ],
//       icon: '💡'
//     },
//     instrumentation: {
//       title: 'Instrumentation Services',
//       description: 'Precision instrumentation and control systems for industrial and commercial applications.',
//       features: [
//         'Process Control Systems',
//         'Measurement Instruments',
//         'Calibration Services',
//         'Industrial Automation',
//         'SCADA Systems',
//         'Data Acquisition Systems'
//       ],
//       icon: '🔧'
//     },
//     communication: {
//       title: 'Communication Systems',
//       description: 'Advanced communication infrastructure and networking solutions.',
//       features: [
//         'Network Infrastructure',
//         'Telecommunications Systems',
//         'Fiber Optic Installation',
//         'Wireless Communication',
//         'Security Systems Integration',
//         'Audio/Visual Systems'
//       ],
//       icon: '📡'
//     }
//   };

//   const serviceKeys = Object.keys(services);

//   return (
//     <section id="service" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <div className="max-w-6xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//               Our <span className="text-blue-600">Services</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We provide comprehensive solutions across multiple engineering domains to meet all your technical needs.
//             </p>
//           </div>

//           {/* Service Navigation */}
//           <div className="flex flex-wrap justify-center mb-12 gap-4">
//             {serviceKeys.map((key) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveService(key)}
//                 className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
//                   activeService === key
//                     ? 'bg-blue-600 text-white shadow-lg transform scale-105'
//                     : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
//                 }`}
//               >
//                 <span className="mr-2">{services[key].icon}</span>
//                 {services[key].title}
//               </button>
//             ))}
//           </div>

//           {/* Active Service Content */}
//           <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               {/* Left Content */}
//               <div>
//                 <div className="text-6xl mb-6">{services[activeService].icon}</div>
//                 <h3 className="text-3xl font-bold text-gray-800 mb-6">
//                   {services[activeService].title}
//                 </h3>
//                 <p className="text-gray-600 text-lg mb-8 leading-relaxed">
//                   {services[activeService].description}
//                 </p>
                
//                 <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
//                   Get Quote
//                 </button>
//               </div>

//               {/* Right Content - Features */}
//               <div>
//                 <h4 className="text-2xl font-semibold text-gray-800 mb-6">What We Offer:</h4>
//                 <div className="space-y-4">
//                   {services[activeService].features.map((feature, index) => (
//                     <div key={index} className="flex items-start space-x-3">
//                       <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
//                         <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                       </div>
//                       <p className="text-gray-700 font-medium">{feature}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Service Cards Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
//             {serviceKeys.map((key) => (
//               <div 
//                 key={key}
//                 className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
//                   activeService === key ? 'ring-2 ring-blue-600 transform scale-105' : 'hover:scale-105'
//                 }`}
//                 onClick={() => setActiveService(key)}
//               >
//                 <div className="text-4xl mb-4">{services[key].icon}</div>
//                 <h4 className="text-lg font-semibold text-gray-800 mb-2">{services[key].title}</h4>
//                 <p className="text-gray-600 text-sm">
//                   {services[key].description.substring(0, 80)}...
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Service;


import React from 'react';

const Service = () => {
  const services = [
    {
      title: 'Electrical',
      description: 'CET electric division specializes in energy management, with solutions for all kinds of cabling, power and control, critical power and energy efficiency.',
      features: [
        'Electrical Installation & Maintenance',
        'Power Distribution Systems',
        'Electrical Safety Audits',
        'Emergency Electrical Services',
        'Electrical Troubleshooting',
        'Circuit Design & Installation'
      ],
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Lighting',
      description: 'CET lighting helps light the kingdom with lighting products and light bulbs for commercial and residential purposes.',
      features: [
        'LED Lighting Installation',
        'Smart Lighting Systems',
        'Outdoor & Landscape Lighting',
        'Emergency Lighting',
        'Lighting Design & Consultation',
        'Energy-Efficient Solutions'
      ],
      icon: '💡',
      image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      title: 'Instrumentation',
      description: 'We are specialized in sourcing and supplying instruments and spare parts to the oil field equipments and pipeline materials to oil & gas, petrochemical and power industries etc.',
      features: [
        'Process Control Systems',
        'Measurement Instruments',
        'Calibration Services',
        'Industrial Automation',
        'SCADA Systems',
        'Data Acquisition Systems'
      ],
      icon: '🔧',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      title: 'Communication',
      description: 'We offer a diverse range of connectivity solutions. Find out how we can manage your voice, video and data connectivity needs.',
      features: [
        'Network Infrastructure',
        'Telecommunications Systems',
        'Fiber Optic Installation',
        'Wireless Communication',
        'Security Systems Integration',
        'Audio/Visual Systems'
      ],
      icon: '📡',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=80',
      gradient: 'from-indigo-400 to-blue-500'
    }
  ];

  return (
    <section id="service" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              SERVICES
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive solutions across multiple engineering domains to meet all your technical needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${service.image})`
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-85 group-hover:opacity-90 transition-opacity duration-300`} />
                
                {/* Dark Overlay for Better Text Readability */}
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[400px]">
                  {/* Icon */}
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-200 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Learn More Button */}
                  <div className="mt-6">
                    <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white border border-white border-opacity-30 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 group-hover:bg-white group-hover:text-gray-800">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white group-hover:border-opacity-30 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-20 text-center">
            <div className="bg-white rounded-3xl shadow-xl p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full" 
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                     }}
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
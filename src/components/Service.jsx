import React from 'react';
import { useNavigate } from 'react-router-dom';
import electricalImg from '../assets/electrical-banner.jpg'
import lightingImg from '../assets/lighting-banner.jpg'
import InstrumentationImg from '../assets/inst-banner.jpg'
import CommunicationImg from '../assets/communication-banner.jpg'

const Service = () => {

  const navigate = useNavigate();
  const services = [
    {
      title: 'Electrical',
      description: 'CET electric division specializes in energy management, with solutions for all kinds of cabling, power and control, critical power and energy efficiency.',
      icon: '⚡',
      image:`${electricalImg}`,
      gradient: 'from-yellow-400 to-orange-500',
      link:'/electrical'
    },
    {
      title: 'Lighting',
      description: 'CET lighting helps light the kingdom with lighting products and light bulbs for commercial and residential purposes.',
      icon: '💡',
      image: `${lightingImg}`,
      gradient: 'from-blue-400 to-purple-500',
      link:'/lighting'
    },
    {
      title: 'Instrumentation',
      description: 'We are specialized in sourcing and supplying instruments and spare parts to the oil field equipments and pipeline materials to oil & gas, petrochemical and power industries etc.',
      icon: '🔧',
      image: `${InstrumentationImg}`,
      gradient: 'from-green-400 to-teal-500',
      link:'/instrumentation'
    },
    {
      title: 'Communication',
      description: 'We offer a diverse range of connectivity solutions. Find out how we can manage your voice, video and data connectivity needs.',
      icon: '📡',
      image: `${CommunicationImg}`,
      gradient: 'from-indigo-400 to-blue-500',
      link:'/communication'
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
              onClick={() => navigate(service.link)}
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
                    <button 
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white border border-white border-opacity-30 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 group-hover:bg-white group-hover:text-gray-800">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white group-hover:border-opacity-30 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
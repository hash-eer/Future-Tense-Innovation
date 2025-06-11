import React, { useState } from 'react';
import logo from '../assets/logoOfCetksa.png'

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
  };

  const serviceOptions = [
    { name: 'Electrical', id: 'electrical' },
    { name: 'Lighting', id: 'lighting' },
    { name: 'Instrumentation', id: 'instrumentation' },
    { name: 'Communication', id: 'communication' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
         {/* Logo */}
          
          <img  
            onClick={() => scrollToSection('home')} 
            src={logo} 
            alt="CETKSA Logo" 
            className="h-14 w-auto cursor-pointer hover:opacity-80 transition-opacity" 
          />
        
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
            >
              Home
            </button>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
            >
              About
            </button>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors flex items-center"
              >
                Service
                <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white rounded-md shadow-lg py-2 border">
                  {serviceOptions.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => scrollToSection('service')}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-base"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 font-medium text-lg text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 font-medium text-lg text-left"
              >
                About
              </button>
              
              {/* Mobile Services Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="text-gray-700 hover:text-blue-600 font-medium text-lg text-left flex items-center w-full"
                >
                  Service
                  <svg 
                    className={`ml-1 w-5 h-5 transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {isMobileDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {serviceOptions.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => scrollToSection('service')}
                        className="block w-full text-left py-2 text-gray-600 hover:text-blue-600 transition-colors text-base"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 font-medium text-lg text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
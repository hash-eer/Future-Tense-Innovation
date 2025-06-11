import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-800 mb-6">
          QUALITY SERVICE IN 
            <span className="text-blue-600 block mt-2">EVERY TASK</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-24 ">
           
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
       
      </div>
    </section>
  );
};

export default Home;

import React from 'react';
import logo from '../assets/banner.jpg';

const Home = () => {

  const particles = [
    { id: 1, size: 'w-3 h-3', color: 'bg-blue-400/50', position: 'top-20 left-10', animation: 'animate-ping' },
    { id: 2, size: 'w-2 h-2', color: 'bg-white/70', position: 'top-40 right-20', animation: 'animate-pulse' },
    { id: 3, size: 'w-2 h-2', color: 'bg-blue-500/40', position: 'bottom-32 left-1/4', animation: 'animate-bounce' },
    { id: 4, size: 'w-1.5 h-1.5', color: 'bg-white/60', position: 'bottom-20 right-1/3', animation: 'animate-ping' },
    { id: 5, size: 'w-1.5 h-1.5', color: 'bg-blue-400/40', position: 'top-1/3 left-1/3', animation: 'animate-pulse' },
    { id: 6, size: 'w-2 h-2', color: 'bg-blue-600/30', position: 'top-3/4 right-1/4', animation: 'animate-bounce' },
    { id: 7, size: 'w-1 h-1', color: 'bg-white/50', position: 'top-1/2 left-1/5', animation: 'animate-ping' },
    { id: 8, size: 'w-1 h-1', color: 'bg-blue-500/50', position: 'bottom-1/3 right-1/5', animation: 'animate-pulse' }
  ];

  const textWords = [
    { text: 'QUALITY', delay: '0s', color: 'text-gray-800' },
    { text: 'SERVICE', delay: '0.3s', color: 'text-gray-800' },
    { text: 'IN', delay: '0.6s', color: 'text-gray-800' }
  ];

  const blueWords = [
    { text: 'EVERY', delay: '0.9s' }, 
    { text: 'TASK', delay: '1.2s' }
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${logo})` }}
    >
      {/* Optimized overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/25 to-white/30" />
      
      {/* Optimized particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute ${particle.position} ${particle.size} ${particle.color} rounded-full ${particle.animation}`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-8 drop-shadow-2xl">
            {/* First line */}
            <div className="overflow-hidden">
              {textWords.map((word, index) => (
                <React.Fragment key={word.text}>
                  <span 
                    className={`inline-block ${word.color} animate-bounce text-shadow-strong`}
                    style={{ 
                      animationDelay: word.delay,
                      animationDuration: '2.5s'
                    }}
                  >
                    {word.text}
                  </span>
                  {index < textWords.length - 1 && <span className="mx-4" />}
                </React.Fragment>
              ))}
            </div>
            
            {/* Second line */}
            <div className="mt-4 overflow-hidden">
              {blueWords.map((word, index) => (
                <React.Fragment key={word.text}>
                  <span 
                    className="inline-block text-blue-600 animate-pulse font-black tracking-wider text-shadow-blue"
                    style={{ 
                      animationDelay: word.delay,
                      animationDuration: '3s'
                    }}
                  >
                    {word.text}
                  </span>
                  {index < blueWords.length - 1 && <span className="mx-4" />}
                </React.Fragment>
              ))}
            </div>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-28">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative text-xl border-2 bg-blue-400 border-blue-400 text-blue-600 px-10 py-4 rounded-xl font-semibold transition-all duration-500 backdrop-blur-xl bg-white/10 hover:bg-blue-400 hover:text-white hover:shadow-2xl hover:shadow-blue-400/30 hover:scale-110 transform hover:-translate-y-1"
            >
              <span className="relative z-10">Get In Touch</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-shadow-strong {
          text-shadow: 2px 2px 0px rgba(255,255,255,1), 4px 4px 8px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6);
        }
        
        .text-shadow-blue {
          text-shadow: 2px 2px 0px rgba(255,255,255,1), 4px 4px 8px rgba(255,255,255,0.8), 0 0 25px rgba(255,255,255,0.6);
        }
      `}</style>
    </section>
  );
};

export default Home;
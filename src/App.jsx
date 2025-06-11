// function App() {

//   return (
//   <div className="text-red-500 text-3xl font-bold underline">
//     This is a red text div.
//   </div>
  
//   )
// }

// export default App



import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Home />
        <About />
        <Service />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
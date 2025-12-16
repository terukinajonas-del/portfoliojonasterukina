import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Results from './components/Results';
import Methodology from './components/Methodology';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-800 selection:bg-brand-light selection:text-white">
      <Hero />
      <Experience />
      <Results />
      <Methodology />
      <Contact />
      
      {/* Sticky Footer/CTA for mobile mainly */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href="https://wa.me/5511997217259" 
          target="_blank" 
          rel="noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>
      </div>
    </div>
  );
};

export default App;
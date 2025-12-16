import React from 'react';
import { MousePointerClick } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-slate-100 overflow-hidden">
      {/* Decorative lines from the PDF style */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="w-full h-px bg-brand-dark top-1/4 absolute"></div>
        <div className="w-full h-px bg-brand-dark bottom-1/4 absolute"></div>
        <div className="h-full w-px bg-brand-dark left-12 absolute md:block hidden"></div>
      </div>

      <div className="z-10 text-center px-4 animate-fade-in-up">
        <div className="mb-6 inline-flex items-center justify-center p-3 bg-brand-dark/5 rounded-full">
            <MousePointerClick className="w-6 h-6 text-brand-dark mr-2" />
            <span className="uppercase tracking-widest text-xs font-semibold text-brand-dark">Tráfego Pago & Performance</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-brand-dark tracking-tighter mb-2">
          PORTFÓLIO
        </h1>
        <h2 className="text-4xl md:text-6xl font-light text-brand-light tracking-wide">
          JONAS TERUKINA
        </h2>
        
        <div className="mt-12">
            <a href="#experiencia" className="text-sm font-medium uppercase tracking-widest text-slate-500 hover:text-brand-dark transition-colors border-b border-transparent hover:border-brand-dark pb-1">
                Conheça meu trabalho ↓
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
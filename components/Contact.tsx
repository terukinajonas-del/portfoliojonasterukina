import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-white opacity-5 rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-brand-light opacity-10 rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        <div className="inline-block p-4 bg-white/10 rounded-2xl mb-8 backdrop-blur-sm animate-bounce">
            <TrendingUpIcon />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
          Pronto para Escalar com Tráfego Pago?
        </h2>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light">
          Vamos conversar sobre como podemos aplicar essas estratégias para o seu negócio.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
           <a 
             href="https://wa.me/5511997217259" 
             target="_blank" 
             rel="noreferrer"
             className="flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-900/20"
           >
             <MessageSquare className="mr-3 w-6 h-6" />
             Conversar no WhatsApp
           </a>
           
           <div className="flex items-center text-slate-300">
             <Phone className="mr-2 w-5 h-5" />
             <span className="text-lg tracking-wide">11 99721-7259</span>
           </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} Jonas Terukina. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

// Simple Icon component for the footer visual
const TrendingUpIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="48" 
    height="48" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="text-white"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

export default Contact;
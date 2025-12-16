import React from 'react';
import { Target, TrendingUp, Layers, MousePointer2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-20 md:py-28 bg-white w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-brand-dark mb-16">Experiência</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-12">
            
            {/* Stats Block */}
            <div className="border-l-4 border-brand-light pl-6">
              <h3 className="text-4xl font-bold text-slate-800 mb-2">+ 1 Milhão</h3>
              <p className="text-xl text-brand-light font-medium uppercase tracking-wide">Gerenciados em anúncios</p>
              <p className="text-slate-500 italic mt-2">Com 4 anos de experiência</p>
            </div>

            <div className="prose text-slate-600 leading-relaxed">
              <p>
                Com vasta experiência em campanhas de alta performance, gerenciamos investimentos estratégicos para maximizar o retorno sobre o investimento (ROAS) e reduzir o custo de aquisição de clientes (CAC).
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Layers className="w-8 h-8 text-brand-dark mb-4" />
                <h4 className="text-xl font-bold text-brand-dark mb-2">Funil de Vendas Avançado</h4>
                <p className="text-sm text-slate-600">
                  Desenvolvemos estratégias completas, desde a atração até a retenção, focando no aumento do ticket médio e LTV.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <MousePointer2 className="w-8 h-8 text-brand-dark mb-4" />
                <h4 className="text-xl font-bold text-brand-dark mb-2">Domínio das Ferramentas</h4>
                <p className="text-sm text-slate-600">
                  Especialista em Meta Ads e Google Ads, garantindo integrações perfeitas para impulsionar vendas.
                </p>
              </div>
            </div>

          </div>

          {/* Right Content - Funnel Visualization */}
          <div className="flex flex-col items-center justify-center relative">
            <div className="w-full max-w-md relative">
              {/* Funnel Steps */}
              <div className="flex items-center mb-2 group">
                <div className="h-16 w-full bg-red-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-lg transform group-hover:scale-105 transition-transform" style={{clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'}}>
                  <span className="mr-2">1</span> Visitantes
                </div>
                <div className="ml-4 text-sm font-medium text-slate-500 w-32 hidden md:block">(Descoberta)</div>
              </div>

              <div className="flex items-center mb-2 mx-auto w-[85%] group">
                 <div className="h-16 w-full bg-orange-400 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-lg transform group-hover:scale-105 transition-transform" style={{clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)'}}>
                   <span className="mr-2">2</span> Leads
                 </div>
                 <div className="ml-4 text-sm font-medium text-slate-500 w-32 hidden md:block">(Interesse)</div>
              </div>

              <div className="flex items-center mb-2 mx-auto w-[70%] group">
                 <div className="h-16 w-full bg-green-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-lg transform group-hover:scale-105 transition-transform" style={{clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)'}}>
                   <span className="mr-2">3</span> Oportunidades
                 </div>
                 <div className="ml-4 text-sm font-medium text-slate-500 w-32 hidden md:block">(Decisão)</div>
              </div>

              <div className="flex items-center mx-auto w-[55%] group">
                 <div className="h-16 w-full bg-purple-700 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-lg transform group-hover:scale-105 transition-transform" style={{clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)'}}>
                   <span className="mr-2">4</span> Venda
                 </div>
                 <div className="ml-4 text-sm font-medium text-slate-500 w-32 hidden md:block">Conversão</div>
              </div>
            </div>
            <p className="mt-8 text-center text-slate-400 text-sm">Estrutura de funil otimizada para e-commerce e info-produtos</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
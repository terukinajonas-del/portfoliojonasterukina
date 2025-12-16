import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceDot, Label } from 'recharts';

const chartData = [
  { name: 'Mês 1', cac: 80, ltv: 50 },
  { name: 'Mês 2', cac: 75, ltv: 70 },
  { name: 'Mês 3', cac: 70, ltv: 90 }, // Break even roughly here
  { name: 'Mês 4', cac: 65, ltv: 120 },
  { name: 'Mês 5', cac: 60, ltv: 160 },
  { name: 'Mês 6', cac: 55, ltv: 210 },
];

const Methodology: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-brand-dark mb-16">Meu Método</h2>
        <h3 className="text-2xl text-brand-light font-medium mb-8">O que será analisado para começar:</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Checklist */}
          <div className="space-y-6">
            {[
              {
                title: "Análise do Funil de Vendas",
                desc: "Identificamos gargalos e otimizamos cada etapa, do tráfego à conversão."
              },
              {
                title: "Avaliação do CAC e LTV",
                desc: "Equilibramos o custo de aquisição com o valor do cliente para maximizar o lucro."
              },
              {
                title: "Estudo do Público-Alvo",
                desc: "Definição precisa da persona para anúncios mais eficientes."
              },
              {
                title: "Criação e otimização do anúncio",
                desc: "Criamos anúncios, otimizamos e maximizamos os resultados."
              },
              {
                title: "Benchmarking com a Concorrência",
                desc: "Analisamos estratégias do mercado para posicionar sua marca da melhor forma."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start group">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Logic Chart */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col items-center justify-center">
             <div className="w-full mb-6 flex justify-between items-center px-4">
                 <div className="text-center">
                     <p className="text-xs font-bold text-slate-400 uppercase">Custo de</p>
                     <h4 className="font-bold text-rose-500">AQUISIÇÃO</h4>
                 </div>
                 <span className="text-2xl font-serif italic text-slate-300">vs</span>
                 <div className="text-center">
                     <p className="text-xs font-bold text-slate-400 uppercase">Retorno ao</p>
                     <h4 className="font-bold text-blue-600">LONGO DO TEMPO</h4>
                 </div>
             </div>

             <div className="h-[300px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{top: 20, right: 30, left: 0, bottom: 0}}>
                        <XAxis dataKey="name" hide />
                        <YAxis hide />
                        <Tooltip />
                        <Line type="monotone" dataKey="cac" stroke="#f43f5e" strokeWidth={3} name="CAC" dot={false} />
                        <Line type="monotone" dataKey="ltv" stroke="#2563eb" strokeWidth={3} name="LTV" dot={false} />
                        <ReferenceDot x="Mês 3" y={75} r={6} fill="#fff" stroke="#64748b" strokeWidth={2}>
                           <Label value="Ponto de Equilíbrio" position="top" offset={15} className="fill-slate-500 text-xs font-bold" />
                        </ReferenceDot>
                    </LineChart>
                </ResponsiveContainer>
                {/* Custom Annotations */}
                <div className="absolute bottom-0 left-0 text-xs text-rose-500 font-bold">Reduzir (-)</div>
                <div className="absolute top-10 right-0 text-xs text-blue-600 font-bold">Aumentar (+)</div>
                
                <div className="absolute bottom-[-20px] left-0 w-full flex justify-between text-xs text-slate-400 uppercase">
                    <span>Aquisição</span>
                    <span>Retenção</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Methodology;
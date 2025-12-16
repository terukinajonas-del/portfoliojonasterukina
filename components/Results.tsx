import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Simulated volatile sales data to match the PDF graph
const data = [
  { name: '27-07', sales: 4000 },
  { name: '01-08', sales: 3000 },
  { name: '05-08', sales: 5500 },
  { name: '10-08', sales: 2000 },
  { name: '15-08', sales: 4800 },
  { name: '20-08', sales: 3500 },
  { name: '25-08', sales: 6000 },
  { name: '30-08', sales: 4200 },
  { name: '04-09', sales: 7000 },
  { name: '09-09', sales: 5800 },
  { name: '14-09', sales: 8500 },
  { name: '19-09', sales: 6500 },
  { name: '24-09', sales: 9000 },
  { name: '29-09', sales: 7500 },
  { name: '04-10', sales: 11000 },
  { name: '09-10', sales: 8000 },
  { name: '14-10', sales: 12500 },
  { name: '19-10', sales: 15000 }, // Peak
  { name: '24-10', sales: 9000 },
  { name: '29-10', sales: 11000 },
];

const Results: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-100 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-brand-dark mb-12 text-right">Resultados</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Chart Container - Replicating the dashboard look */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
             <div className="mb-6 border-b border-slate-100 pb-4">
                <p className="text-sm text-slate-500 font-semibold uppercase">Total em vendas</p>
                <h3 className="text-4xl font-bold text-slate-800">R$ 796.125,39</h3>
             </div>
             
             <div className="h-[300px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart
                   data={data}
                   margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                 >
                   <defs>
                     <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#2d4f56" stopOpacity={0.8}/>
                       <stop offset="95%" stopColor="#2d4f56" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                   <XAxis dataKey="name" tick={{fontSize: 10}} stroke="#94a3b8" />
                   <YAxis tick={{fontSize: 10}} stroke="#94a3b8" />
                   <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      formatter={(value: number) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Vendas']}
                   />
                   <Area type="monotone" dataKey="sales" stroke="#2d4f56" strokeWidth={2} fillOpacity={1} fill="url(#colorSales)" />
                 </AreaChart>
               </ResponsiveContainer>
             </div>

             {/* Small dashboard stats row */}
             <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-slate-50 p-3 rounded-lg text-center">
                    <p className="text-xs text-slate-500">Aprovação cartão</p>
                    <p className="font-bold text-brand-dark">91%</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg text-center">
                    <p className="text-xs text-slate-500">ROAS Médio</p>
                    <p className="font-bold text-brand-dark">7.37</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg text-center">
                    <p className="text-xs text-slate-500">Reembolso</p>
                    <p className="font-bold text-green-600">1.5%</p>
                </div>
             </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center h-full space-y-8">
            <h3 className="text-3xl font-bold text-brand-light">
                Aplicando um funil de vendas bem estruturado
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
                Atuo em todas as etapas do projeto, desde a fase inicial de estruturação até o momento de escala. Além disso, foco na geração de leads altamente qualificados.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
                Meu objetivo é construir estratégias que não apenas tragam resultados no curto prazo, mas que também estabeleçam uma base sólida para um crescimento contínuo e escalável.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Results;
import React from 'react';
import { ExternalLink, Users, TrendingUp, Award } from 'lucide-react';

const cases = [
  {
    name: "Gunter Amorim | Estabilidade e Concursos",
    handle: "@rotinadeguerreiro",
    followers: "21.4k",
    description: "Estrategista em concursos públicos e tecnologia. Foco em autoridade e conversão para cursos preparatórios.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60", // Placeholder for profile/tech vibe
    color: "bg-blue-50",
    accent: "text-blue-600",
    tags: ["Infoprodutos", "Educação", "Escalabilidade"]
  },
  {
    name: "Dra. Greter Fernandez | Pediatra",
    handle: "@dragreterfernandez",
    followers: "13.8k",
    description: "Posicionamento premium para clínica pediátrica. Estratégia focada em confiança e agendamentos diretos via WhatsApp.",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?w=800&auto=format&fit=crop&q=60", // Medical vibe
    color: "bg-rose-50",
    accent: "text-rose-600",
    tags: ["Saúde", "Local", "Autoridade"]
  },
  {
    name: "Fan Hour - Games and Burgers",
    handle: "@fanhourbr",
    followers: "102k",
    description: "Grande player de gastronomia e entretenimento. Mais de 180 mil pessoas atendidas com foco em tráfego de fluxo local.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&auto=format&fit=crop&q=60", // Restaurant vibe
    color: "bg-amber-50",
    accent: "text-amber-600",
    tags: ["Gastronomia", "Eventos", "Brand Awareness"]
  }
];

const Cases: React.FC = () => {
  return (
    <section id="cases" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Cases de Sucesso
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Alguns dos projetos que tive o prazer de gerenciar, transformando investimento em audiência qualificada e faturamento real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cases.map((item, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-3xl border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${item.color}`}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-2xl bg-white shadow-sm ${item.accent}`}>
                    <Users size={24} />
                  </div>
                  <span className={`text-sm font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-white/80 ${item.accent}`}>
                    {item.followers} seguidores
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">
                  {item.name}
                </h3>
                <p className="text-slate-500 font-medium mb-4 flex items-center gap-1">
                  <small className="opacity-70">Instagram:</small> {item.handle}
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold bg-white px-3 py-1 rounded-lg text-slate-500 border border-slate-100 uppercase tracking-tight">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-200/50 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-brand-dark font-bold">
                    <TrendingUp size={18} />
                    <span>Alta Performance</span>
                  </div>
                  <Award size={20} className={item.accent} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 italic mb-4">
            *Resultados variam conforme nicho e base de investimento.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-brand-light font-bold hover:gap-4 transition-all"
          >
            Quero resultados assim no meu negócio <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cases;

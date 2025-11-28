import { Droplets, Heart, Lock, Gem } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Óleos Importados",
    description: "Essências premium para relaxamento total"
  },
  {
    icon: Heart,
    title: "Atendimento Exclusivo",
    description: "Terapeutas selecionadas rigorosamente"
  },
  {
    icon: Lock,
    title: "Ambiente Discreto",
    description: "Sigilo e privacidade garantidos"
  },
  {
    icon: Gem,
    title: "Alto Padrão",
    description: "Infraestrutura de luxo em Moema"
  }
];

export const Features = () => {
  return (
    <section className="bg-stone-950 py-20 border-b border-stone-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-default">
  
  {/* O ANEL DA JOIA (Círculo) */}
  <div className="relative mb-6 p-5 rounded-full transition-all duration-500 group-hover:-translate-y-2">
    
    {/* 1. O Brilho de Fundo (Glow Pulsante) */}
    <div className="absolute inset-0 rounded-full bg-white/5 blur-md animate-pulse group-hover:bg-white/20" />
    
    {/* 2. A Borda Metálica (O Aro da Joia) */}
    <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/60 shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]" />

    {/* 3. O Ícone (A Pedra Preciosa) */}
    {/* Adicionei 'icon-jewel' e aumentei o brilho no hover */}
    <item.icon className="relative h-8 w-8 text-stone-400 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-500" />
  
  </div>

  <h3 className="text-white font-bold text-lg mb-2 tracking-wide group-hover:text-silver-gradient transition-colors">
    {item.title}
  </h3>
  <p className="text-stone-500 text-sm max-w-[150px] leading-relaxed group-hover:text-stone-300 transition-colors">
    {item.description}
  </p>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};
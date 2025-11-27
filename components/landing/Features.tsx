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
    <section className="bg-black py-16 border-b border-stone-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-default">
              <div className="mb-4 p-4 rounded-full border border-stone-800 group-hover:border-[#BF953F] transition-colors duration-500">
                {/* Ícone Dourado */}
                <item.icon className="h-8 w-8 text-[#BF953F]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-stone-500 text-sm max-w-[150px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
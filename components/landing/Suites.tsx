"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

// Dados reais dos ambientes: A Jornada do Cliente (7 Imagens - Mapeamento Revisado)
const suites = [
  {
    title: "Fachada Discreta",
    desc: "Localização privilegiada em Moema com entrada reservada e valet park para garantir sua total privacidade e segurança.",
    img: "/spa-01.jpg"
  },
  {
    title: "Recepção Platinum",
    desc: "Um atendimento acolhedor e ágil em um ambiente sofisticado, desenhado para iniciar sua desconexão do mundo exterior.",
    img: "/spa-02.jpg"
  },
  {
    title: "Corredores Exclusivos",
    desc: "Arquitetura moderna e iluminação sutil guiam você por caminhos reservados, mantendo o ambiente íntimo e relaxante.",
    img: "/spa-03.jpg"
  },
  {
    title: "Lounge de Estar",
    desc: "Poltronas confortáveis e climatização ideal. O espaço perfeito para relaxar e aguardar o início da sua terapia exclusiva.",
    img: "/spa-04.jpg"
  },
  {
    title: "Carta Premium",
    desc: "Seleção exclusiva de drinks, destilados e bebidas para complementar sua experiência de bem-estar no spa.",
    img: "/spa-05.jpg"
  },
  {
    title: "Espaço de Descanso",
    desc: "Um ambiente ainda mais privativo, com TV e total tranquilidade, ideal para o seu pré ou pós-atendimento.",
    img: "/spa-06.jpg"
  },
  {
    title: "Suítes Climatizadas",
    desc: "Salas de atendimento equipadas com o máximo de higiene, conforto acústico e iluminação planejada para sua imersão sensorial.",
    img: "/spa-07.jpg"
  }
];

export const Suites = () => {
  return (
    <section id="ambientes" className="py-24 bg-stone-950 relative overflow-hidden">
      
      {/* Luz de Fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">
            O <span className="font-serif italic text-silver-gradient">Spa</span>
          </h1>
          
          <h2 className="text-stone-400 text-sm font-bold tracking-[0.3em] uppercase">
            Conheça nossos ambientes
          </h2>
        </div>

        {/* CARROSSEL */}
        <div className="flex justify-center">
            <Carousel 
              opts={{ 
                loop: true,
                align: "start" 
              }}
              plugins={[Autoplay({ delay: 3500, stopOnInteraction: false })]}
              className="w-full max-w-5xl"
            >
            <CarouselContent>
                {suites.map((suite, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2 h-full">
                    <Card className="bg-stone-900 border-stone-800 overflow-hidden group hover:border-stone-600 transition-all duration-500 rounded-3xl h-full flex flex-col">
                        <CardContent className="p-0 flex-1 flex flex-col">
                        <div className="relative h-72 w-full overflow-hidden shrink-0">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500 z-10" />
                            <Image 
                                src={suite.img} 
                                alt={suite.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                        
                        <div className="p-6 flex-1 flex flex-col">
                            <h4 className="text-xl text-white font-medium mb-2">{suite.title}</h4>
                            <p className="text-stone-400 text-sm leading-relaxed line-clamp-3">
                                {suite.desc}
                            </p>
                        </div>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-stone-900 border-stone-700 text-white hover:bg-white hover:text-black" />
            <CarouselNext className="hidden md:flex bg-stone-900 border-stone-700 text-white hover:bg-white hover:text-black" />
            </Carousel>
        </div>
      </div>
    </section>
  );
};
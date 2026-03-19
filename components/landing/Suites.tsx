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

// Dados reais dos ambientes (Fotos Oficiais)
const suites = [
  {
    title: "Recepção Premium",
    desc: "Atendimento discreto e personalizado desde o seu primeiro passo no spa.",
    img: "/Miruna-8.jpg"
  },
  {
    title: "Lounge Principal",
    desc: "Sofás em couro e ambiente climatizado aguardam você com total conforto e requinte.",
    img: "/Miruna-6.jpg"
  },
  {
    title: "Espaço de Repouso",
    desc: "Ambientes intimistas e acolhedores, ideais para relaxar antes da sua terapia.",
    img: "/Miruna-21.jpg"
  },
  {
    title: "Lounge de Entretenimento",
    desc: "Espaço amplo e descontraído com TV, frigobar e total privacidade para o seu pós-atendimento.",
    img: "/Miruna-13.jpg"
  },
  {
    title: "Carta de Bebidas",
    desc: "Rótulos selecionados e destilados premium à sua disposição para elevar a sua experiência.",
    img: "/Miruna-22.jpg"
  },
  {
    title: "Infraestrutura Completa",
    desc: "Arquitetura sofisticada e iluminação planejada para uma imersão sensorial completa.",
    img: "/Miruna-23.jpg"
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
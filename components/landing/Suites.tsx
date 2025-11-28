"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// URLs atualizadas e estáveis do Unsplash
const suites = [
  {
    title: "Suíte Platinum",
    desc: "Hidromassagem cromoterápica e teto estrelado.",
    // URL NOVA
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Lounge Executivo",
    desc: "Espaço amplo com ducha dupla e isolamento acústico.",
    // URL NOVA E TESTADA
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Sala Zen",
    desc: "Tatame japonês tradicional e iluminação âmbar.",
    // URL NOVA (Essa estava funcionando, mas vamos garantir)
    img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop"
  }
];

export const Suites = () => {
  return (
    <section id="ambientes" className="py-24 bg-stone-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          {/* H1 Grande: O SPA */}
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">
            O <span className="font-serif italic text-silver-gradient">Spa</span>
          </h1>
          
          {/* H2 Menor: Conheça... */}
          <h2 className="text-stone-400 text-sm font-bold tracking-[0.3em] uppercase">
            Conheça nossos ambientes
          </h2>
        </div>

        {/* CARROSSEL */}
        <div className="flex justify-center">
            <Carousel className="w-full max-w-5xl">
            <CarouselContent>
                {suites.map((suite, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                    <Card className="bg-stone-900 border-stone-800 overflow-hidden group hover:border-stone-600 transition-all duration-500 rounded-3xl">
                        <CardContent className="p-0">
                        <div className="relative h-72 w-full overflow-hidden">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500 z-10" />
                            <Image 
                                src={suite.img} 
                                alt={suite.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                        <div className="p-6">
                            <h4 className="text-xl text-white font-medium mb-2">{suite.title}</h4>
                            <p className="text-stone-400 text-sm leading-relaxed mb-6 h-10 line-clamp-2">
                                {suite.desc}
                            </p>
                            <Button className="w-full rounded-full bg-stone-800 text-white hover:bg-white hover:text-black transition-colors duration-300 text-xs uppercase tracking-widest font-bold">
                                Ver Detalhes <ArrowRight className="ml-2 h-3 w-3" />
                            </Button>
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
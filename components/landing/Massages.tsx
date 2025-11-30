"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Activity, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { image } from "framer-motion/client";

// DADOS ATUALIZADOS COM FOTOS
const categories = {
  relaxamento: [
    {
      title: "Miruna Signature",
      time: "60min / 90min",
      desc: "Nossa experiência assinatura. Fusão de toques suaves e óleos aquecidos.",
      tags: ["Aromaterapia", "Toque Suave"],
      image: "/hands.jpg" // <--- Vírgula aqui é importante!
    }, // <--- Vírgula aqui separando os objetos
    {
      title: "Terapia Sensorial",
      time: "60min / 90min",
      desc: "Ritual focado no despertar dos sentidos e reativação da energia vital.",
      tags: ["Reconexão", "Energia Vital"],
      image: "/sensorial.jpg" 
    }
  ],
  terapeutico: [
    {
      title: "Deep Tissue",
      time: "50min",
      desc: "Pressão firme focada na liberação de nódulos de tensão.",
      tags: ["Alívio de Dor", "Pós-Treino"],
      image: "/terapeutico.jpg" 
    },
    {
      title: "Shiatsu Executivo",
      time: "45min",
      desc: "Alinhamento energético através da pressão em pontos meridianos.",
      tags: ["Postura", "Equilíbrio"],
      image: "/lounge-real.jpg" 
    }
  ]
};

export const Massages = () => {
  return (
    <section className="py-24 bg-black relative" id="massagens">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-stone-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Nossas Experiências
          </h2>
          <h3 className="font-heading text-4xl md:text-5xl text-white">
            Menu de <span className="text-silver-gradient font-serif italic">Terapias</span>
          </h3>
        </div>

        {/* Sistema de Abas */}
        <Tabs defaultValue="relaxamento" className="w-full max-w-4xl mx-auto">
          
          <TabsList className="grid w-full grid-cols-2 bg-stone-900/50 p-1 rounded-full mb-12 border border-stone-800">
            <TabsTrigger 
              value="relaxamento" 
              className="rounded-full data-[state=active]:bg-silver-gradient data-[state=active]:text-black text-stone-400 font-bold tracking-wider uppercase text-xs py-3 transition-all"
            >
              Rituais Relaxantes
            </TabsTrigger>
            <TabsTrigger 
              value="terapeutico" 
              className="rounded-full data-[state=active]:bg-silver-gradient data-[state=active]:text-black text-stone-400 font-bold tracking-wider uppercase text-xs py-3 transition-all"
            >
              Terapias Corporais
            </TabsTrigger>
          </TabsList>

          {/* Conteúdo: Relaxamento */}
          <TabsContent value="relaxamento" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {categories.relaxamento.map((item, index) => (
              <MassageCard key={index} item={item} icon={Sparkles} />
            ))}
          </TabsContent>

          {/* Conteúdo: Terapêutico */}
          <TabsContent value="terapeutico" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {categories.terapeutico.map((item, index) => (
              <MassageCard key={index} item={item} icon={Activity} />
            ))}
          </TabsContent>

        </Tabs>
      </div>
    </section>
  );
};

// Sub-componente do Card (Para limpar o código acima)
const MassageCard = ({ item, icon: Icon }: any) => (
  <Card className="bg-stone-900/40 border-stone-800 hover:border-stone-600 transition-all duration-300 group overflow-hidden">
    <CardContent className="p-0 flex flex-col sm:flex-row h-full">
      
      {/* FOTO LATERAL (Humanização) */}
      <div className="relative w-full sm:w-48 h-48 sm:h-auto shrink-0">
        <Image 
            src={item.image} 
            alt={item.title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
      </div>

      {/* Textos */}
      <div className="flex-1 p-6 flex flex-col justify-center">
        <div className="flex justify-between items-start mb-2">
            <h4 className="text-xl text-white font-medium">{item.title}</h4>
            <span className="text-[10px] font-bold text-stone-400 border border-stone-700 px-2 py-1 rounded bg-black/50">
                {item.time}
            </span>
        </div>
        
        <p className="text-stone-400 text-sm leading-relaxed mb-4 max-w-xl">
            {item.desc}
        </p>

        {/* Tags e Preço */}
        <div className="flex flex-wrap items-center gap-3 mt-auto">
            {item.tags.map((tag: string, i: number) => (
                <span key={i} className="text-[10px] uppercase tracking-wider text-stone-500 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-stone-600" /> {tag}
                </span>
            ))}
        </div>
      </div>

      {/* Botão de Ação */}
      <div className="p-6 sm:pl-0 flex items-center justify-center sm:w-32">
         {/* <span className="text-white font-bold text-sm">{item.price}</span> (Opcional mostrar preço) */}
         <Button variant="outline" className="rounded-full w-full border-stone-600 text-stone-300 hover:bg-white hover:text-black font-bold text-xs uppercase tracking-widest">
            Reservar
         </Button>
      </div>

    </CardContent>
  </Card>
);
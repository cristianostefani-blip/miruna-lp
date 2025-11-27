"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";


export const Hero = () => {
  const whatsappLink = "https://wa.me/5511999999999";

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      
      {/* 1. Imagem de Fundo (Grayscale/Dark igual Lushness) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent z-10" />
        {/* Use uma foto de rosto/ombro em P&B de alta qualidade aqui */}
        <img 
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop" 
          alt="Ambiente Miruna" 
          className="w-full h-full object-cover opacity-60 grayscale"
        />
      </div>

      {/* 2. Conteúdo */}
      <div className="container relative z-20 px-6 mt-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-white tracking-[0.2em] text-sm md:text-base mb-4 uppercase font-medium">
            Bem-vindo ao Miruna
          </h2>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white">
            MASSAGEM <br />
            {/* O famoso degradê dourado */}
            <span className="text-silver-gradient font-serif italic pr-4">
              Relaxante
            </span>
          </h1>

          <p className="text-stone-300 text-lg md:text-xl max-w-lg mb-10 font-light border-l-2 border-primary pl-6">
            Venha experimentar novas sensações em um ambiente onde o conforto e a discrição são prioridade absoluta.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button 
              asChild 
              className="bg-silver-gradient text-black font-bold h-14 px-10 rounded-none hover:opacity-90 transition-opacity text-lg tracking-wide uppercase"
            >
              <Link href={whatsappLink}>
                Agendar Agora
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline"
              className="border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white h-14 px-8 rounded-none uppercase tracking-widest bg-transparent"
            >
              <Link href="#servicos">
                Conhecer Suítes
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Detalhe de Luxo no Rodapé do Hero */}
      <div className="absolute bottom-0 w-full h-1 bg-silver-gradient" />
    </section>
  );
};
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  const whatsappLink = "https://wa.me/5511958687434";

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      
      {/* 1. Imagem de Fundo (Capa de Revista) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent z-10" />
        <Image
            src="/hero-bg.jpg"
            alt="Miruna Spa Experience" 
            fill
            className="object-cover animate-in fade-in duration-1000 object-top"
            priority
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
          <h2 className="text-stone-400 tracking-[0.2em] text-xs font-medium mb-6 uppercase border border-white/20 rounded-full px-4 py-2 inline-block backdrop-blur-sm bg-black/30">
            Bem-vindo a Miruna Massagens
          </h2>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white">
            EXPERIÊNCIA <br />
            <span className="text-silver-gradient font-serif italic pr-4">
              Premium
            </span>
          </h1>

          <p className="text-stone-300 text-lg md:text-xl max-w-lg mb-10 font-light border-l-2 border-stone-100 pl-6">
            Um refúgio de tecnologia e bem-estar em Moema. Privacidade absoluta e atendimento de alto padrão.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            {/* Botão Principal */}
            <Button 
              asChild 
              className="bg-silver-gradient text-black font-bold h-14 px-10 rounded-full hover:opacity-90 transition-opacity text-lg tracking-wide uppercase"
            >
              <Link href={whatsappLink}>
                Agendar Horário
              </Link>
            </Button>
            
            {/* Botão Secundário */}
            <Button 
              asChild 
              variant="outline"
              className="border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white h-14 px-8 rounded-full uppercase tracking-widest bg-transparent"
            >
              <Link href="#ambientes">
                Conhecer o Spa
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full h-1 bg-silver-gradient" />
    </section>
  );
};
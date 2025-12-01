"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const TeamCTA = () => {
  const whatsappLink = "https://wa.me/5511958687434";

  return (
    <section id="terapeutas" className="relative py-16 overflow-hidden border-t border-white/20">
      
      {/* 1. FUNDO PRATA PURO (Metálico Real) */}
      <div className="absolute inset-0 bg-silver-gradient" />
      
      {/* 2. CAMADA DE BRILHO (Shimmer Animation) */}
      {/* Isso cria um reflexo de luz passando a cada 3 segundos */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.7)_50%,transparent_75%)] bg-size[length:250%_100%] opacity-50"
        style={{ animation: "shimmer 3s linear infinite" }}
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <Sparkles className="text-stone-600 h-5 w-5 animate-pulse" />
            <span className="text-stone-600 font-bold tracking-widest text-xs uppercase">Atendimento Premium</span>
          </div>
          
          {/* Título Escuro para Contraste no Prata */}
          <h3 className="font-heading text-3xl md:text-4xl text-stone-900 mb-3 font-bold tracking-tight drop-shadow-sm">
            Equipe altamente selcionada
          </h3>
          
          <p className="text-stone-700 font-medium text-base max-w-lg leading-relaxed">
            Nossa equipe é formada por terapeutas certificadas. Segurança, técnica apurada e acolhimento em cada sessão.
          </p>
        </div>

        {/* Botão Preto (Black Piano) para contraste máximo */}
        <Button asChild className="rounded-full px-10 py-7 bg-black text-white hover:bg-stone-800 hover:scale-105 transition-all shadow-2xl uppercase tracking-widest text-xs font-bold border border-stone-600">
          <Link href={whatsappLink}>
            Ver Terapeutas <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

      </div>
    </section>
  );
};
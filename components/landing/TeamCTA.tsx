"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
// 1. Importamos as funções de leitura de URL e o Suspense
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// 2. Criamos o componente interno que faz o processamento
const TeamCTAContent = () => {
  // 3. Lógica de captura da UTM
  const searchParams = useSearchParams();
  const origemParam = searchParams.get('utm_source') || searchParams.get('origem');
  
  // Se a origem for do Google, adiciona a tag
  const tagOrigem = (origemParam === 'google' || origemParam === 'google_ads') 
    ? ' [Ref: Google]' 
    : '';

  // 4. A Mensagem Estratégica Dinâmica
  const baseMsg = "Olá! Gostaria de ver as terapeutas disponíveis hoje.";
  const whatsappMsg = `${baseMsg}${tagOrigem}`;
  const whatsappLink = `https://wa.me/5511958687434?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="terapeutas" className="relative py-16 overflow-hidden border-t border-white/20">
      
      {/* 1. FUNDO PRATA PURO (Metálico Real) */}
      <div className="absolute inset-0 bg-silver-gradient" />
      
      {/* 2. CAMADA DE BRILHO (Shimmer Animation) */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.7)_50%,transparent_75%)] bg-size[250%_100%] opacity-50"
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
            Equipe altamente selecionada
          </h3>
          
          <p className="text-stone-700 font-medium text-base max-w-lg leading-relaxed">
            Nossa equipe é formada por terapeutas certificadas. Segurança, técnica apurada e acolhimento em cada sessão.
          </p>
        </div>

        {/* Botão Preto (Black Piano) para contraste máximo */}
        <Button asChild className="rounded-full px-10 py-7 bg-black text-white hover:bg-stone-800 hover:scale-105 transition-all shadow-2xl uppercase tracking-widest text-xs font-bold border border-stone-600">
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Ver Terapeutas <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

      </div>
    </section>
  );
};

// 5. O Componente Exportado com Suspense
export const TeamCTA = () => {
  return (
    <Suspense fallback={
      // Fallback que mantém a altura e o fundo prata para evitar pulos de layout
      <section className="relative py-16 min-h-[200px] bg-stone-200 border-t border-white/20" />
    }>
      <TeamCTAContent />
    </Suspense>
  );
};
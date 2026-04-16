"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react"; // ArrowRight removido
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
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            
            {/* Ícone SVG puro do WhatsApp */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Ver pelo WhatsApp
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
import dynamic from "next/dynamic";

// 1. IMPORTS CRÍTICOS (Carregamento Imediato - Acima da dobra)
// Tudo que o usuário vê no milissegundo 1 precisa carregar normal.
import { AgeGate } from "@/components/landing/AgeGate";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";

// 2. IMPORTS DINÂMICOS (Lazy Loading - Abaixo da dobra)
// Isso resolve o problema de "Reflow forçado" no Lighthouse. 
// O Javascript pesado só roda depois que a tela inicial já carregou.
const Features = dynamic(() => import("@/components/landing/Features").then((mod) => mod.Features));
const Suites = dynamic(() => import("@/components/landing/Suites").then((mod) => mod.Suites));
const Massages = dynamic(() => import("@/components/landing/Massages").then((mod) => mod.Massages));
const TeamCTA = dynamic(() => import("@/components/landing/TeamCTA").then((mod) => mod.TeamCTA));
const Footer = dynamic(() => import("@/components/landing/Footer").then((mod) => mod.Footer));

// O Floating WhatsApp também carrega dinamicamente. O { ssr: false } é um truque Sênior 
// para evitar erros de hidratação, já que ele usa setTimeout() que não existe no servidor.
const FloatingWhatsApp = dynamic(() => import("@/components/landing/FloatingWhatsApp").then((mod) => mod.FloatingWhatsApp), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Carga Crítica */}
      <AgeGate />
      <Navbar />
      <Hero />
      
      {/* Carga Dinâmica (Otimizada) */}
      <Features />
      <Suites />
      <Massages />
      <TeamCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
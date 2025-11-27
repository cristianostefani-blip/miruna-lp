import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Navbar } from "@/components/landing/Navbar";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#BF953F] selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      {/* Aqui virão os outros componentes depois */}
    </main>
  );
}
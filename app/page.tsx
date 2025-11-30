import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Suites } from "@/components/landing/Suites";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { Massages } from "@/components/landing/Massages";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      <Suites />
      <Massages />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
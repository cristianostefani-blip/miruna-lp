"use client";

import { useState, useEffect } from "react"; // Faltava isso
import Link from "next/link"; // Faltava isso
import Image from "next/image"; // Faltava isso
import { Button } from "@/components/ui/button"; // Faltava isso
import { MessageCircle, Menu } from "lucide-react"; // Faltava isso
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Faltava isso

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5511958687434";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO ADAPTÁVEL */}
        <div className="relative h-12 w-auto min-w-[140px]"> 
           <Image 
            src="/logo.png" 
            alt="Miruna Logo" 
            fill 
            className="object-contain object-left"
            priority
           />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#inicio" className="text-stone-300 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-medium">Início</Link>
          <Link href="#ambientes" className="text-stone-300 hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-medium">O Spa</Link>
          
{/* BOTÃO PLATINUM COM "LUZ ANDANDO" */}
<Button asChild className="rounded-full px-8 py-6 uppercase tracking-widest text-xs border-2 border-white/50 shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.7)] btn-platinum-shine hover:scale-105">
  <Link href={whatsappLink}>
    <span className="relative flex items-center gap-2 z-10">
        Agendar
    </span>
  </Link>
</Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10"><Menu className="h-6 w-6" /></Button>
                </SheetTrigger>
                <SheetContent className="bg-stone-950 border-stone-800 text-white">
                    <div className="flex flex-col gap-6 mt-10">
                        <Link href="#inicio" className="text-lg uppercase tracking-widest">Início</Link>
                        <Link href="#ambientes" className="text-lg uppercase tracking-widest">O Spa</Link>
                        <Button className="w-full bg-white text-black font-bold">Falar no WhatsApp</Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </nav>
  );
};
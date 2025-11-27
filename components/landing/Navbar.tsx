"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Importante para carregar a logo
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5511958687434"; // Atualizei com o número do print

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-black/90 backdrop-blur-md border-b border-stone-800 py-3 shadow-2xl" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO DA EMPRESA */}
        <div className="relative h-12 w-32 md:h-16 md:w-40">
           {/* Certifique-se que logo.jpg está na pasta public */}
           <Image 
            src="/logo.jpg" 
            alt="Miruna Logo" 
            fill 
            className="object-contain object-left"
           />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#inicio" className="text-stone-300 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">Início</Link>
          <Link href="#servicos" className="text-stone-300 hover:text-white transition-colors text-sm uppercase tracking-widest font-medium">Suítes</Link>
          
          <Button asChild className="bg-silver-gradient text-black hover:opacity-90 font-bold rounded-none px-6 uppercase tracking-wider">
            <Link href={whatsappLink}>
              <MessageCircle className="mr-2 h-4 w-4" /> Agendar
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white"><Menu className="h-6 w-6" /></Button>
                </SheetTrigger>
                <SheetContent className="bg-stone-950 border-stone-800 text-white">
                    <div className="flex flex-col gap-6 mt-10">
                        <Link href="#inicio" className="text-lg uppercase tracking-widest">Início</Link>
                        <Link href="#servicos" className="text-lg uppercase tracking-widest">Suítes</Link>
                        <Button className="w-full bg-silver-gradient text-black font-bold">Falar no WhatsApp</Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </nav>
  );
};
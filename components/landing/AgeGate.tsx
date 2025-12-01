"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export const AgeGate = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou antes
    const hasVerified = localStorage.getItem("miruna-age-verified");
    if (!hasVerified) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("miruna-age-verified", "true");
    setIsVisible(false);
  };

  const handleReject = () => {
    window.location.href = "https://www.google.com";
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
          {/* Fundo Desfocado */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* O Card do Modal */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-stone-900 border border-stone-800 p-8 rounded-2xl max-w-md w-full text-center shadow-2xl"
          >
            <div className="mx-auto w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="text-stone-400 h-6 w-6" />
            </div>

            <h2 className="text-2xl font-heading text-white mb-2">Acesso Restrito</h2>
            <p className="text-stone-400 text-sm mb-8 leading-relaxed">
              Este site contém conteúdo destinado a adultos. <br/>
              Você confirma ter mais de <strong>18 anos</strong>?
            </p>

            <div className="flex flex-col gap-3">
              <Button 
                onClick={handleAccept}
                className="w-full btn-platinum-shine rounded-full py-6 text-xs uppercase tracking-widest font-bold"
              >
                Sim, tenho mais de 18 anos
              </Button>
              <Button 
                variant="ghost" 
                onClick={handleReject}
                className="text-stone-500 hover:text-stone-300 text-xs"
              >
                Não, sair do site
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
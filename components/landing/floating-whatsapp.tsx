"use client";

import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// 1. Importamos o useSearchParams e o Suspense
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

// 2. Renomeamos seu componente original para tratar a lógica
const FloatingWhatsAppContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Aparece após 2 segundos
    return () => clearTimeout(timer);
  }, []);

  // 3. Lógica de captura da UTM
  const searchParams = useSearchParams();
  const origemParam = searchParams.get('utm_source') || searchParams.get('origem');
  
  const tagOrigem = (origemParam === 'google' || origemParam === 'google_ads') 
    ? ' [Ref: Google]' 
    : '';

  // 4. Montagem da mensagem final
  const baseMsg = "Oi! Gostaria de informações sobre as massagens.";
  const whatsappMsg = `${baseMsg}${tagOrigem}`;
  const whatsappLink = `https://wa.me/5511958687434?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
            1
          </div>
          <Button
            asChild
            size="icon"
            className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl border-2 border-white/10"
          >
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Falar conosco pelo WhatsApp" // <-- CORREÇÃO LIGHTHOUSE AQUI
            >
              <MessageCircle className="h-7 w-7" />
            </a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// 5. O Componente exportado com o Suspense
export const FloatingWhatsApp = () => {
  return (
    // Como é flutuante, o fallback null é perfeito para não quebrar o layout
    <Suspense fallback={null}>
      <FloatingWhatsAppContent />
    </Suspense>
  );
};
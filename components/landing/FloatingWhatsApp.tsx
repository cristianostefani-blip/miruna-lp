"use client";

import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Aparece após 2 segundos
    return () => clearTimeout(timer);
  }, []);

  const whatsappLink = "https://wa.me/5511999999999?text=Olá,%20vim%20pelo%20site.";

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
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-7 w-7" />
            </a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
import { MapPin, Clock } from "lucide-react"; // Removemos o Instagram

export const Footer = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-900 pt-16 pb-8 text-stone-400">
      <div className="container mx-auto px-6">
        
        {/* MUDANÇA: Passou de grid-cols-3 para grid-cols-2 e adicionamos max-w-4xl para centralizar o bloco */}
        <div className="grid md:grid-cols-2 gap-12 text-center md:text-left max-w-4xl mx-auto">
          
          {/* Coluna 1: Sobre */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-xl font-serif mb-4">Miruna Platinum</h3>
            <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Um conceito elevado de relaxamento em Moema. 
              Ambiente climatizado, ducha privativa e atendimento de alto padrão.
            </p>
          </div>

          {/* Coluna 2: Localização (Dados Reais) */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-sm uppercase tracking-widest mb-6 font-bold">Localização</h3>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="h-5 w-5 text-white shrink-0 mt-1" />
              <p className="text-sm text-left">
                Av. Miruna, 644<br/>
                Moema, São Paulo - SP
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-white shrink-0" />
              <p className="text-sm">Aberto hoje a partir das 11:00</p>
            </div>
          </div>

        </div>

        {/* Rodapé Base (Direitos + Sua Assinatura) */}
        <div className="border-t border-stone-900 mt-12 pt-8 flex flex-col items-center gap-4 text-center">
          
          {/* CORREÇÃO: Removido opacity-40 e adicionado text-stone-400 sólido */}
          <div className="text-xs text-stone-400">
            <p>&copy; {new Date().getFullYear()} Miruna Spa. Todos os direitos reservados.</p>
          </div>

          {/* Sua Assinatura Sênior (Agora com Link!) */}
          <p className="text-[10px] md:text-xs text-stone-300 uppercase tracking-[0.3em] font-light transition-colors duration-500">

            <a 
              href="https://cstefani-desenvolvedor.vercel.app" // <--- COLOQUE O SEU LINK AQUI
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Acessar o site do desenvolvedor C.Stefani"
              className="hover:text-white transition-colors duration-300 group"
            >
              <span className="text-white font-bold group-hover:underline underline-offset-4">
                C.Stefani
              </span> - Especialista em Soluções WEB
            </a>
          </p>
          
        </div>
      </div>
    </footer>
  );
};
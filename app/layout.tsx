import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // <-- IMPORT SENIOR AQUI
import "./globals.css";
import clsx from "clsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miruna Massagens | Spa Premium em Moema",
  description: "Conheça o Miruna. Um refúgio de bem-estar e terapias manuais em Moema. Atendimento exclusivo, ambiente climatizado e suítes privativas.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={clsx(
        "min-h-screen bg-stone-950 font-sans antialiased", 
        geistSans.variable,
        geistMono.variable
      )}>
        
        {/* GOOGLE ANALYTICS OTIMIZADO (Não afeta o Lighthouse!) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-RDP05FJ9S9`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RDP05FJ9S9');
            `,
          }}
        />
        {/* FIM DO ANALYTICS */}

        {children}
      </body>
    </html>
  );
}
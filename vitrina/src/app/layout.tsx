import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-sans-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Néctar de Algodón de los Montes | Experiencia Gastronómica Inmersiva",
  description: "Una travesía multisensorial en los Montes de María. Descubre la cosecha, fermentación artesanal y ritual ancestral de la guama rabo de mono.",
  keywords: [
    "Néctar de Algodón de los Montes",
    "Montes de María",
    "Guama rabo de mono",
    "Inga edulis",
    "Fermentación artesanal",
    "Gastronomía de lujo",
    "Turismo comunitario Bolívar",
    "Ritual sensorial campesino"
  ],
  authors: [{ name: "Néctar de Algodón" }],
  openGraph: {
    title: "Néctar de Algodón de los Montes",
    description: "Experiencia inmersiva de cosecha, fermentación artesanal y ritual sensorial campesino en los Montes de María.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorantGaramond.variable} ${outfit.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-deep-cocoa font-sans selection:bg-gold/30 selection:text-deep-cocoa">
        {children}
      </body>
    </html>
  );
}


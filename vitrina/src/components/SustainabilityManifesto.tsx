"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, Leaf, Recycle, Scale, ArrowRight, ShieldCheck, 
  Trash2, Globe, TreePine, Droplet
} from "lucide-react";

export default function SustainabilityManifesto() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 relative overflow-hidden">
      
      {/* Dynamic Background Organic Shape */}
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(138,154,134,0.08)_0%,transparent_60%)] pointer-events-none" />

      {/* Editorial Title */}
      <div className="text-center mb-16">
        <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">Ética de la Tierra</span>
        <h2 className="font-serif text-3xl md:text-5xl font-light text-deep-cocoa mt-2">
          Manifiesto de Sostenibilidad
        </h2>
        <div className="h-[1px] w-20 bg-gold/50 mx-auto mt-4" />
        <p className="font-sans text-sm text-sage max-w-lg mx-auto mt-4 leading-relaxed font-light">
          Creemos en la gastronomía como un acto de preservación biológica, equilibrio ecológico y resguardo cultural.
        </p>
      </div>

      {/* Three Pillars Grid - Tab style */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT PANEL: Circular Economy Wheel or Dynamic Visual */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          
          {/* Main Decorative Interactive Circle */}
          <div className="relative h-72 w-72 md:h-80 md:w-80 rounded-full border border-gold/15 flex items-center justify-center p-8 bg-sand/10 shadow-lg">
            
            {/* Spinning decorative ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-gold/25 animate-spin-slow pointer-events-none" />

            {/* Inner text reveal */}
            <div className="text-center z-10">
              <Leaf className="h-10 w-10 text-gold mx-auto mb-3 animate-pulse-slow" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-sage font-medium font-sans">Compromiso</span>
              <h3 className="font-serif text-xl font-light text-deep-cocoa mt-1">Montes Protegidos</h3>
              <p className="text-[9px] text-cocoa/60 font-sans mt-2 max-w-[160px] mx-auto leading-relaxed">
                Trazabilidad 100% directa y circularidad de residuos.
              </p>
            </div>

            {/* Orbiting Interactive Hotspots */}
            <button
              onClick={() => setActiveTab(1)}
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full flex items-center justify-center border shadow-md transition-all duration-300 ${
                activeTab === 1 
                  ? "bg-deep-cocoa text-gold border-gold scale-110" 
                  : "bg-ivory text-sage border-gold/15 hover:border-gold hover:text-gold"
              }`}
              title="Comercio Justo"
            >
              <Scale className="h-5 w-5" />
            </button>

            <button
              onClick={() => setActiveTab(2)}
              className={`absolute bottom-6 right-0 translate-x-1/4 h-12 w-12 rounded-full flex items-center justify-center border shadow-md transition-all duration-300 ${
                activeTab === 2 
                  ? "bg-deep-cocoa text-gold border-gold scale-110" 
                  : "bg-ivory text-sage border-gold/15 hover:border-gold hover:text-gold"
              }`}
              title="Basura Cero"
            >
              <Recycle className="h-5 w-5" />
            </button>

            <button
              onClick={() => setActiveTab(3)}
              className={`absolute bottom-6 left-0 -translate-x-1/4 h-12 w-12 rounded-full flex items-center justify-center border shadow-md transition-all duration-300 ${
                activeTab === 3 
                  ? "bg-deep-cocoa text-gold border-gold scale-110" 
                  : "bg-ivory text-sage border-gold/15 hover:border-gold hover:text-gold"
              }`}
              title="Respeto Patrimonial"
            >
              <ShieldCheck className="h-5 w-5" />
            </button>

          </div>

          {/* Quick Pillar Labels */}
          <div className="flex gap-4 mt-8 justify-center w-full">
            {["Comercio Justo", "Basura Cero", "Patrimonio"].map((lbl, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx + 1)}
                className={`text-[9px] uppercase tracking-widest font-sans px-3 py-1 rounded-full border transition-all duration-300 ${
                  activeTab === idx + 1 
                    ? "bg-sage/15 border-sage text-deep-cocoa font-medium" 
                    : "border-transparent text-sage/60 hover:text-sage"
                }`}
              >
                {lbl}
              </button>
            ))}
          </div>

        </div>

        {/* RIGHT PANEL: Editorial Details Column */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: Comercio Justo */}
            {activeTab === 1 && (
              <motion.div
                key="tab1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-full bg-gold/15 text-gold">
                    <Scale className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-deep-cocoa">
                    Comercio Justo y Humano
                  </h3>
                </div>

                <p className="font-sans text-sm text-cocoa/85 leading-relaxed font-light">
                  Nuestra red se fundamenta en la honestidad económica y social. Eliminamos intermediarios para asegurar que el latido del bosque seco tropical retorne directamente a quienes lo custodian.
                </p>

                {/* Sub-features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gold/15 pt-5">
                  <div className="flex gap-3">
                    <Heart className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-deep-cocoa">Compra Directa</h4>
                      <p className="text-xs text-cocoa/70 leading-relaxed font-light mt-1">
                        Negociación y compra en finca directamente a 12 familias campesinas recolectoras en los patios tradicionales.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <TreePine className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-deep-cocoa">Compensación Premium</h4>
                      <p className="text-xs text-cocoa/70 leading-relaxed font-light mt-1">
                        Pago superior en un 180% al promedio de mercado de la fruta de patio para recompensar la destreza del ritual despulpador.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Globe className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-deep-cocoa">Reinversión Comunitaria</h4>
                      <p className="text-xs text-cocoa/70 leading-relaxed font-light mt-1">
                        Destinamos el 15% del valor de cada experiencia a fondos de desarrollo agrícola liderados por mujeres locales.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Leaf className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-deep-cocoa">Fortalecimiento del Bosque</h4>
                      <p className="text-xs text-cocoa/70 leading-relaxed font-light mt-1">
                        Apoyo activo a la siembra selectiva de especies melíferas y de sombrío nativas en los patios agroforestales.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: Basura Cero */}
            {activeTab === 2 && (
              <motion.div
                key="tab2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-full bg-gold/15 text-gold">
                    <Recycle className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-deep-cocoa">
                    Basura Cero & Circularidad
                  </h3>
                </div>

                <p className="font-sans text-sm text-cocoa/85 leading-relaxed font-light">
                  La naturaleza no genera desperdicios. Diseñamos un ecosistema de economía circular donde cada subproducto de la guama y el ritual gastronómico vuelve enriquecido al suelo de los Montes de María.
                </p>

                {/* Circular diagram visual representation */}
                <div className="bg-sand/15 p-5 rounded-2xl border border-gold/10 space-y-4">
                  <span className="text-[10px] tracking-widest font-sans uppercase font-bold text-sage block">Flujo de Residuos</span>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { title: "Compostaje Orgánico", icon: <Leaf className="h-4 w-4" />, desc: "Semillas y pulpas sobrantes van al abono." },
                      { title: "Rehúso de Cáscaras", icon: <Recycle className="h-4 w-4" />, desc: "Transformación en vajillas y artes." },
                      { title: "Empaques Bio", icon: <Trash2 className="h-4 w-4" />, desc: "Fibra de plátano y papel artesanal." },
                      { title: "Deco Natural", icon: <TreePine className="h-4 w-4" />, desc: "Hojas y vainas para aromatización." },
                    ].map((step, idx) => (
                      <div key={idx} className="flex flex-col text-left">
                        <div className="h-8 w-8 rounded-lg bg-ivory border border-gold/10 flex items-center justify-center text-gold mb-2 shadow-sm">
                          {step.icon}
                        </div>
                        <span className="text-xs font-serif font-bold text-deep-cocoa">{step.title}</span>
                        <span className="text-[10px] text-cocoa/60 font-sans mt-0.5 leading-snug">{step.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="font-sans text-xs italic text-sage leading-relaxed font-light">
                  * Cada elemento en la mesa es biodegradable o reutilizable. No empleamos plásticos de un solo uso en ninguna etapa de la travesía.
                </p>
              </motion.div>
            )}

            {/* TAB 3: Respeto Patrimonial */}
            {activeTab === 3 && (
              <motion.div
                key="tab3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-full bg-gold/15 text-gold">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-deep-cocoa">
                    Respeto Patrimonial
                  </h3>
                </div>

                <p className="font-sans text-sm text-cocoa/85 leading-relaxed font-light">
                  Salvaguardamos la historia oral y la autenticidad culinaria de los Montes de María. No convertimos la tradición campesina en un espectáculo comercial; la elevamos a un ritual sensorial de respeto y admiración.
                </p>

                {/* Declaración de Integridad */}
                <div className="relative border-l-2 border-gold pl-5 py-2 my-4 bg-gold/5 rounded-r-xl">
                  <span className="text-[9px] uppercase tracking-widest text-gold font-semibold font-sans block mb-1">DECLARACIÓN DE INTEGRIDAD</span>
                  <p className="font-serif text-base italic text-deep-cocoa leading-relaxed">
                    “No se alteran las técnicas ancestrales de fermentación ni los procesos tradicionales transmitidos entre generaciones.”
                  </p>
                </div>

                <p className="font-sans text-xs text-cocoa/70 leading-relaxed font-light">
                  Nuestra fermentación en sombra, el uso de vasijas de barro y el batido manual son recreados con estricta fidelidad, asesorados y validados por las matronas y portadores de saberes locales de San Jacinto.
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}

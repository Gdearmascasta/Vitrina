"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Award, Compass, Sparkles, BookOpen, Clock, 
  ArrowRight, ShieldCheck, Users, HelpCircle, Flame, Droplets,
  Heart, Sun, Wind, ChevronRight, Check
} from "lucide-react";

export default function InteractiveMap() {
  const [activePin, setActivePin] = useState(1);
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  // Pin data details
  const pins = [
    { id: 1, title: "Origen y Singularidad", subtitle: "Montes de María", x: "28%", y: "45%" },
    { id: 2, title: "Arquitectura del Ritual", subtitle: "Despulpado de la Nube", x: "55%", y: "25%" },
    { id: 3, title: "Tríada de Tangibilización", subtitle: "Showcase del Kit", x: "78%", y: "60%" },
    { id: 4, title: "Gobernanza y Blindaje", subtitle: "Capacidad & Control", x: "42%", y: "75%" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
      
      {/* Editorial Title */}
      <div className="text-center mb-16">
        <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">Travesía Interactiva</span>
        <h2 className="font-serif text-3xl md:text-5xl font-light text-deep-cocoa mt-2">
          Mapa de la Experiencia
        </h2>
        <div className="h-[1px] w-20 bg-gold/50 mx-auto mt-4" />
        <p className="font-sans text-sm text-sage max-w-lg mx-auto mt-4 leading-relaxed font-light">
          Descubre los secretos mejor guardados de nuestro ritual de fermentación interactuando con los cuatro pilares de la vitrina digital.
        </p>
      </div>

      {/* Main Grid: Interactive Map (Left) & Content Detail (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: The Interactive Artistic Vector Map */}
        <div className="lg:col-span-6 bg-sand/20 rounded-3xl p-6 border border-gold/15 relative overflow-hidden aspect-[4/3] shadow-lg flex flex-col justify-between">
          
          {/* Subtle slow spinning sun in background */}
          <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.15)_0%,transparent_60%)] animate-pulse-slow pointer-events-none" />

          {/* SVG Map Canvas */}
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none p-4">
            <svg viewBox="0 0 800 600" className="w-full h-full text-sage/30 fill-none stroke-current" strokeWidth="1.5">
              {/* Montes de María Mountain Range */}
              <path d="M 50 450 Q 150 250 250 400 T 450 350 T 650 420 T 750 300" strokeDasharray="5 5" />
              <path d="M 80 480 Q 220 300 350 460 T 580 390 T 720 460" />
              {/* Organic pathways */}
              <path d="M 120 500 C 200 480, 250 300, 380 280 C 500 260, 600 450, 700 400" strokeWidth="1" strokeDasharray="3 3" />
              {/* River Arroyo de María */}
              <path d="M 50 150 C 200 120, 300 280, 480 300 C 650 320, 700 180, 750 120" stroke="rgba(138,154,134,0.15)" strokeWidth="6" />
              
              {/* Floating Leaf / Cloud drawings */}
              <path d="M 150 120 Q 180 100 200 120 T 230 120" />
              <path d="M 600 180 Q 620 165 640 180 T 660 180" />
            </svg>
          </div>

          {/* Top Label */}
          <div className="relative z-10 flex justify-between items-center">
            <span className="text-[10px] uppercase tracking-widest text-sage font-medium">Estribaciones de Bolívar</span>
            <span className="text-xs text-gold font-serif italic">Montes de María</span>
          </div>

          {/* Hotspots container */}
          <div className="relative flex-grow w-full z-10">
            {pins.map((pin) => {
              const isActive = activePin === pin.id;
              return (
                <button
                  key={pin.id}
                  onClick={() => {
                    setActivePin(pin.id);
                    setExpandedStory(null);
                  }}
                  style={{ left: pin.x, top: pin.y }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none"
                >
                  {/* Pulsating Aura */}
                  <span className={`absolute inset-0 rounded-full bg-gold/30 -m-3 transition-transform duration-500 scale-100 ${
                    isActive ? "animate-ping opacity-70" : "group-hover:scale-125 opacity-30"
                  }`} />

                  {/* Hotspot Outer Ring */}
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isActive 
                      ? "bg-deep-cocoa border-gold text-gold scale-110 shadow-lg shadow-gold/25" 
                      : "bg-ivory border-sage/40 text-sage hover:border-gold hover:text-gold"
                  }`}>
                    {pin.id === 1 && <Award className="h-4 w-4" />}
                    {pin.id === 2 && <Compass className="h-4 w-4" />}
                    {pin.id === 3 && <Sparkles className="h-4 w-4" />}
                    {pin.id === 4 && <ShieldCheck className="h-4 w-4" />}
                  </div>

                  {/* Elegant floating tag label */}
                  <div className="absolute left-1/2 top-9 transform -translate-x-1/2 whitespace-nowrap bg-deep-cocoa/90 text-ivory text-[9px] font-sans tracking-widest uppercase px-2 py-0.5 rounded border border-gold/20 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {pin.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Indicators */}
          <div className="relative z-10 flex justify-between items-center mt-4">
            <span className="text-[10px] text-sage/70 font-sans tracking-wide">
              * Pulsa sobre los pines del mapa para explorar la información.
            </span>
            <div className="flex gap-1.5">
              {pins.map((p) => (
                <div
                  key={p.id}
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                    activePin === p.id ? "w-4 bg-gold" : "bg-sage/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Luxury Details Card */}
        <div className="lg:col-span-6 min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* PIN 1: Origen y Singularidad */}
            {activePin === 1 && (
              <motion.div
                key="pin1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-ivory rounded-3xl p-6 md:p-8 border border-gold/20 shadow-lg"
              >
                {/* Header Tag */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  <span className="text-[10px] uppercase tracking-widest text-gold font-semibold font-sans">Territorio & Tradición</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl font-light text-deep-cocoa mb-3">
                  Origen y Singularidad
                </h3>
                
                {/* Description */}
                <p className="font-sans text-sm text-cocoa/80 leading-relaxed mb-6 font-light">
                  La <strong className="text-deep-cocoa font-medium">Guama rabo de mono (Inga edulis)</strong> encuentra su hogar predilecto en las estribaciones de los Montes de María, Bolívar. Municipios como <span className="underline decoration-gold/45 text-deep-cocoa">San Jacinto, El Carmen de Bolívar y San Juan Nepomuceno</span> son reconocidos históricamente por la calidad sublime de sus guamas.
                </p>

                {/* Sub-section: Identificación Técnica */}
                <div className="border-t border-gold/15 pt-5 mb-6">
                  <h4 className="font-serif text-lg text-deep-cocoa italic mb-3">Identificación Técnica</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-sand/10 p-3.5 rounded-xl border border-gold/10">
                      <span className="text-[9px] uppercase tracking-wider text-sage font-medium block mb-1">Diamante en Bruto</span>
                      <span className="text-sm font-serif text-deep-cocoa font-medium">Guama rabo de mono</span>
                      <span className="text-[10px] text-cocoa/60 font-sans italic block">(Inga edulis)</span>
                    </div>
                    <div className="bg-sand/10 p-3.5 rounded-xl border border-gold/10">
                      <span className="text-[9px] uppercase tracking-wider text-sage font-medium block mb-1">Sello de Autoridad</span>
                      <span className="text-sm font-serif text-deep-cocoa font-medium">Marca Colectiva + ETG</span>
                      <span className="text-[10px] text-cocoa/60 font-sans block">(Especialidad Tradicional Garantizada)</span>
                    </div>
                  </div>
                </div>

                {/* Justification Box */}
                <div className="bg-sage/10 rounded-2xl p-5 border border-sage/20 mb-6">
                  <span className="text-[9px] uppercase tracking-wider text-sage font-semibold font-sans block mb-2">Justificación de Origen</span>
                  <p className="font-sans text-xs text-dark-green/90 leading-relaxed font-light">
                    “Se elige la <strong className="text-deep-cocoa">Marca Colectiva</strong> para agrupar a los productores de los Montes de María, protegiendo el origen geográfico. La <strong className="text-deep-cocoa">ETG</strong> se justifica porque el método de fermentación en sombra y la técnica de separación manual del arilo sin dañar la semilla amarga constituyen un saber ancestral que garantiza un perfil de sabor único: dulce, ácido y efervescente.”
                  </p>
                </div>

                {/* Grid of animated cards for territory */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { title: "Territorio", desc: "Bosque Seco Tropical" },
                    { title: "Patrimonio", desc: "Saber Campesino" },
                    { title: "Comunidades", desc: "Patios Productivos" },
                    { title: "Fermentación", desc: "Ancestral en Sombra" },
                  ].map((card, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -3, borderColor: "rgba(197, 168, 128, 0.4)" }}
                      className="bg-ivory border border-gold/10 p-3 rounded-xl shadow-sm text-left transition-colors"
                    >
                      <span className="text-[9px] uppercase tracking-wider text-sage block font-medium">{card.title}</span>
                      <span className="text-xs text-deep-cocoa font-serif font-medium">{card.desc}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* PIN 2: Arquitectura del Ritual */}
            {activePin === 2 && (
              <motion.div
                key="pin2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-ivory rounded-3xl p-6 md:p-8 border border-gold/20 shadow-lg"
              >
                {/* Header Tag */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-2 w-2 rounded-full bg-gold animate-ping" />
                  <span className="text-[10px] uppercase tracking-widest text-gold font-semibold font-sans">El Paso a Paso del Elíxir</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl font-light text-deep-cocoa mb-1">
                  Arquitectura del Ritual
                </h3>
                <span className="font-serif text-sm italic text-sage block mb-6">“Despulpado de la Nube”</span>

                {/* Step timeline with anims */}
                <div className="relative border-l border-gold/20 ml-3.5 pl-6 space-y-6 mb-6">
                  {[
                    { step: "1", title: "Cosecha de Dosel", desc: "Cosecha cuidadosa usando horqueta tradicional para no lesionar la vaina en lo más alto del patio campesino." },
                    { step: "2", title: "Despulpado Sensorial", desc: "Apertura manual de la guama experimentando la tersura sedosa única del arilo, la nube dulce." },
                    { step: "3", title: "Batido Tradicional", desc: "Batido artesanal en gamella de madera usando un molinillo tradicional de guayacán para amalgamar el elíxir." },
                  ].map((s, idx) => (
                    <div key={idx} className="relative group">
                      <span className="absolute -left-[37px] top-0 h-6 w-6 rounded-full bg-deep-cocoa border border-gold text-gold text-[10px] font-sans flex items-center justify-center font-bold">
                        {s.step}
                      </span>
                      <h4 className="font-serif text-sm font-semibold text-deep-cocoa group-hover:text-gold transition-colors">{s.title}</h4>
                      <p className="font-sans text-xs text-cocoa/70 leading-relaxed font-light mt-1">{s.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Moment WOW highlight */}
                <div className="relative bg-gold/10 rounded-2xl p-4 border border-gold/30 mb-6 overflow-hidden">
                  <div className="absolute right-0 top-0 translate-x-3 -translate-y-3 opacity-15">
                    <Sparkles className="h-16 w-16 text-gold" />
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-gold font-semibold block mb-1">MOMENTO WOW</span>
                  <p className="font-sans text-xs text-deep-cocoa/90 leading-relaxed font-light">
                    “El momento cumbre ocurre cuando el turista bate suavemente la pulpa hasta liberar el dulzor atrapado en las fibras mientras el aroma floral impregna sus manos.”
                  </p>
                </div>

                {/* Storytelling Cards (Expandables) */}
                <div className="space-y-2">
                  <span className="text-[10px] font-sans text-sage/75 uppercase tracking-widest font-semibold block mb-2">Relatos de Conexión</span>
                  {[
                    { id: "aventura", tag: "Gancho Aventurero", content: "“Alza la horqueta y alcanza las vainas ocultas en lo más alto del dosel montemariano. Siente la adrenalina del recolector que lee el punto de madurez en la corteza antes de dar el toque maestro.”" },
                    { id: "novato", tag: "Gancho Novato", content: "“Descubre el sabor más suave del Caribe. Una textura de nube sedosa que se disuelve en tu paladar, revelando capas de dulzura pura y efervescencia manual insospechada.”" },
                    { id: "local", tag: "Gancho Localista", content: "“Tu visita no es solo un viaje, es el motor directo que mantiene vivos los patios productivos y protege el relicario de bosque seco tropical de los Montes de María.”" },
                  ].map((story) => {
                    const isExpanded = expandedStory === story.id;
                    return (
                      <div 
                        key={story.id}
                        className="border border-gold/10 rounded-xl overflow-hidden bg-sand/5 transition-all duration-300"
                      >
                        <button
                          onClick={() => setExpandedStory(isExpanded ? null : story.id)}
                          className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none"
                        >
                          <span className="font-serif text-xs text-deep-cocoa font-medium italic">{story.tag}</span>
                          <ChevronRight className={`h-3 w-3 text-gold transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-4 pb-3"
                            >
                              <p className="font-sans text-xs text-cocoa/80 leading-relaxed font-light border-t border-gold/5 pt-2">
                                {story.content}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* PIN 3: Tríada de la Tangibilización */}
            {activePin === 3 && (
              <motion.div
                key="pin3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-ivory rounded-3xl p-6 md:p-8 border border-gold/20 shadow-lg"
              >
                {/* Header Tag */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  <span className="text-[10px] uppercase tracking-widest text-gold font-semibold font-sans">El Viaje del Sentido</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl font-light text-deep-cocoa mb-2">
                  Tríada de la Tangibilización
                </h3>
                <p className="font-sans text-xs text-sage leading-relaxed font-light mb-6">
                  Materializamos el ritual en tres kits físicos minuciosos para extender el recuerdo cultural en el tiempo.
                </p>

                {/* Three cards with product showcase visual style */}
                <div className="space-y-4">
                  
                  {/* Tarjeta 1: ANTES */}
                  <div className="group border border-gold/15 rounded-2xl p-4 bg-sand/5 hover:bg-sand/10 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-[8px] uppercase tracking-widest font-sans text-gold font-bold px-2 py-0.5 bg-gold/10 rounded-full">Antes</span>
                        <h4 className="font-serif text-sm font-semibold text-deep-cocoa mt-1.5">Kit Aroma del Monte</h4>
                      </div>
                      <BookOpen className="h-4 w-4 text-gold/60" />
                    </div>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1 mt-3">
                      {["Muestra deshidratada de guama", "Carta sensorial del ritual", "Hoja aromática natural", "Postal artesanal firmada"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-[10px] text-cocoa/80 font-sans font-light">
                          <Check className="h-2.5 w-2.5 text-gold flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tarjeta 2: DURANTE */}
                  <div className="group border border-gold/15 rounded-2xl p-4 bg-sand/5 hover:bg-sand/10 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-[8px] uppercase tracking-widest font-sans text-sage font-bold px-2 py-0.5 bg-sage/10 rounded-full">Durante</span>
                        <h4 className="font-serif text-sm font-semibold text-deep-cocoa mt-1.5">Implementos del Ritual</h4>
                      </div>
                      <Flame className="h-4 w-4 text-gold/60" />
                    </div>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1 mt-3">
                      {["Gamella artesanal labrada", "Molinillo de madera de guayacán", "Delantal tradicional del ritual", "Vajilla artesanal de barro"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-[10px] text-cocoa/80 font-sans font-light">
                          <Check className="h-2.5 w-2.5 text-gold flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tarjeta 3: DESPUÉS */}
                  <div className="group border border-gold/30 rounded-2xl p-4 bg-sage/5 hover:bg-sage/10 transition-colors relative overflow-hidden">
                    <div className="absolute right-0 top-0 translate-x-2 -translate-y-2 opacity-5">
                      <Sparkles className="h-24 w-24 text-gold" />
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-[8px] uppercase tracking-widest font-sans text-deep-cocoa font-bold px-2 py-0.5 bg-gold/20 rounded-full">Después</span>
                        <h4 className="font-serif text-sm font-semibold text-deep-cocoa mt-1.5">Frasco Ceremonial de Néctar</h4>
                      </div>
                      <Award className="h-4 w-4 text-gold" />
                    </div>
                    <p className="font-sans text-[11px] text-deep-cocoa/75 mb-3 leading-relaxed">
                      Un concepto visual de alta costura que encapsula el elixir fermentado.
                    </p>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {["Mini botella artesanal de lujo", "Semillas encapsuladas", "Empaque biodegradable de fibra", "Diseño apto para equipaje aéreo"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-[10px] text-deep-cocoa font-sans font-light">
                          <Check className="h-2.5 w-2.5 text-gold flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            )}

            {/* PIN 4: Gobernanza y Blindaje */}
            {activePin === 4 && (
              <motion.div
                key="pin4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-ivory rounded-3xl p-6 md:p-8 border border-gold/20 shadow-lg"
              >
                {/* Header Tag */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  <span className="text-[10px] uppercase tracking-widest text-gold font-semibold font-sans">Dashboard Operativo</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl font-light text-deep-cocoa mb-1">
                  Gobernanza y Blindaje
                </h3>
                <span className="font-serif text-sm italic text-sage block mb-6">Gestión Territorial y Sostenible</span>

                {/* Premium Dashboard Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  
                  {/* Metric 1 */}
                  <div className="bg-sand/15 rounded-2xl p-4 border border-gold/10 flex flex-col justify-between">
                    <div className="flex items-center gap-2 text-sage mb-2">
                      <Users className="h-4 w-4 text-gold" />
                      <span className="text-[9px] uppercase tracking-widest font-sans font-medium">Capacidad Operativa</span>
                    </div>
                    <div className="my-2">
                      <span className="text-3xl font-serif font-light text-deep-cocoa">Máx. 8</span>
                      <span className="text-xs text-cocoa/60 font-sans block mt-1">Personas por sesión</span>
                    </div>
                    <p className="text-[10px] text-cocoa/70 leading-relaxed font-light">
                      Diseñado para preservar el equilibrio territorial, la calidad sensorial y la atención premium personalizada.
                    </p>
                  </div>

                  {/* Metric 2 */}
                  <div className="bg-sand/15 rounded-2xl p-4 border border-gold/10 flex flex-col justify-between">
                    <div className="flex items-center gap-2 text-sage mb-2">
                      <Award className="h-4 w-4 text-gold" />
                      <span className="text-[9px] uppercase tracking-widest font-sans font-medium">Categoría RNT</span>
                    </div>
                    <div className="my-2">
                      <span className="text-xs font-serif italic text-deep-cocoa leading-snug block">
                        Operador de Turismo Comunitario y Experiencias Gastronómicas Rurales
                      </span>
                    </div>
                    <p className="text-[10px] text-cocoa/70 leading-relaxed font-light">
                      Reconocimiento normativo nacional de turismo comunitario de alta gama cultural.
                    </p>
                  </div>

                </div>

                {/* Safe Protocols Section */}
                <div className="border-t border-gold/15 pt-5">
                  <h4 className="font-serif text-base text-deep-cocoa italic mb-3">Protocolos y Mitigación Operativa</h4>
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-sans font-light text-cocoa/80">
                    {[
                      { icon: <Droplets className="h-3.5 w-3.5 text-gold" />, name: "Hidratación constante" },
                      { icon: <Sun className="h-3.5 w-3.5 text-gold" />, name: "Manejo del calor" },
                      { icon: <Flame className="h-3.5 w-3.5 text-gold" />, name: "Control sanitario de fermento" },
                      { icon: <Heart className="h-3.5 w-3.5 text-gold" />, name: "Control alergias alimentarias" },
                      { icon: <ShieldCheck className="h-3.5 w-3.5 text-gold" />, name: "Primeros auxilios básicos" },
                      { icon: <Wind className="h-3.5 w-3.5 text-gold" />, name: "Protocolos climáticos" },
                    ].map((p, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-ivory border border-gold/5 rounded-lg shadow-sm">
                        {p.icon}
                        <span className="leading-snug">{p.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}

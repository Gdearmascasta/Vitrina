"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Compass, Sparkles, Award, ShieldCheck, ChevronDown, Video } from "lucide-react";

// Import custom modules
import Loader from "@/components/Loader";
import AmbientAudioPlayer from "@/components/AmbientAudioPlayer";
import BackgroundParticles from "@/components/BackgroundParticles";
import FloatingNav from "@/components/FloatingNav";
import InteractiveMap from "@/components/InteractiveMap";
import SustainabilityManifesto from "@/components/SustainabilityManifesto";
import BookingCheckout from "@/components/BookingCheckout";

export default function Home() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(true);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (videoPlaying) {
      videoRef.current.pause();
      setVideoPlaying(false);
    } else {
      videoRef.current.play().catch((err) => console.log("Video playback blocked initially", err));
      setVideoPlaying(true);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* 0. INTRODUCTORY ANIMATED LOADER */}
      {!loadingComplete && (
        <Loader onComplete={() => setLoadingComplete(true)} />
      )}

      {/* RENDER SITE MAIN CONTENT ONLY AFTER LOADER FADES OUT */}
      {loadingComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen flex flex-col overflow-x-hidden font-sans bg-ivory text-deep-cocoa selection:bg-gold/30 selection:text-deep-cocoa"
        >
          {/* BACKGROUND AMBIENT PARTICLES (CANVAS) */}
          <BackgroundParticles />

          {/* PERSISTENT INMERSIVE AUDIO PLAYER */}
          <AmbientAudioPlayer />

          {/* GLASSMORPHIC FLOATING NAVIGATION */}
          <FloatingNav />

          {/* ============================================================== */}
          {/* SECCIÓN 1 — PORTADA SENSORIAL (HERO) */}
          {/* ============================================================== */}
          <header 
            id="hero" 
            className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-12 py-24 text-center overflow-hidden bg-deep-cocoa"
          >
            {/* Visual Cinematic Background with Parallax Overlay */}
            <div className="absolute inset-0 z-0">
              {/* Blurred background colors representing the dry forest & dawn */}
              <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(138,154,134,0.18)_0%,transparent_60%)] filter blur-3xl animate-pulse-slow" style={{ animationDuration: "12s" }} />
              <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,140,112,0.15)_0%,transparent_60%)] filter blur-3xl animate-pulse-slow" style={{ animationDuration: "8s" }} />
              
              {/* Dynamic Environmental Fog Flow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(46,37,31,0.95)_0%,transparent_80%)] z-10" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep-cocoa to-transparent z-10" />
              
              {/* Local Premium Background Video Loop */}
              <div className="absolute inset-0 z-0 bg-cover bg-center select-none pointer-events-none opacity-30">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover scale-105"
                >
                  <source src="/video/14403454_3840_2160_30fps.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Content layout wrapper */}
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center flex-grow justify-center mt-12">
              
              {/* Badge seal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 glass-dark-premium text-gold text-[10px] tracking-[0.25em] uppercase mb-8"
              >
                <Sparkles className="h-3 w-3 animate-pulse-slow" />
                <span>Patrimonio Inmaterial de Bolívar</span>
              </motion.div>

              {/* TÍTULO PRINCIPAL */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-4xl md:text-7xl font-extralight text-ivory tracking-wide leading-[1.1] mb-6"
              >
                Néctar de Algodón <br />
                <span className="font-serif italic font-light text-gold text-3xl md:text-6xl block mt-3">de los Montes</span>
              </motion.h1>

              {/* SUBTÍTULO */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.8, duration: 1.2 }}
                className="font-sans text-sm md:text-lg text-sand tracking-wide max-w-2xl font-light mb-6 leading-relaxed"
              >
                Experiencia inmersiva de cosecha, fermentación artesanal y ritual sensorial campesino en los Montes de María.
              </motion.p>

              {/* PÁRRAFO INTRODUCTORIO */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 1, duration: 1.5 }}
                className="font-sans text-xs md:text-sm text-sand/80 max-w-xl font-light mb-10 leading-relaxed"
              >
                Una travesía multisensorial donde la guama rabo de mono se transforma de fruta de patio en un elixir efervescente mediante técnicas ancestrales de fermentación manual preservadas por familias campesinas de los Montes de María.
              </motion.p>

              {/* CTA BOTONES */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="flex flex-col sm:flex-row items-center gap-4 mb-16"
              >
                <button
                  onClick={() => scrollToSection("mapa")}
                  className="w-48 py-3.5 rounded-xl bg-gold hover:bg-gold-hover text-deep-cocoa font-sans font-semibold tracking-wider transition-all duration-300 transform active:scale-95 shadow-md shadow-gold/15 cursor-pointer"
                >
                  Explorar el Ritual
                </button>
                <button
                  onClick={() => scrollToSection("checkout")}
                  className="w-48 py-3.5 rounded-xl border border-gold/45 hover:border-gold hover:bg-gold/10 text-ivory font-sans font-medium tracking-wider transition-all duration-300 transform active:scale-95 cursor-pointer"
                >
                  Reservar Experiencia
                </button>
              </motion.div>

              {/* PLACEHOLDERS VISUALES: VIDEO Y PAISAJE SONORO */}
              <div className="w-full max-w-lg grid grid-cols-2 gap-4 mt-4">
                {/* Video Playback Trigger */}
                <button
                  onClick={toggleVideo}
                  className="glass-dark-premium border border-gold/15 p-3 rounded-xl hover:border-gold/40 transition-colors flex items-center justify-center gap-2 group text-left cursor-pointer"
                >
                  <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-105 transition-transform">
                    <Video className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-sand/50">Video Cinematic</span>
                    <span className="text-xs text-ivory font-serif italic">
                      {videoPlaying ? "Pausar Fondo" : "Activar Video"}
                    </span>
                  </div>
                </button>

                {/* Soundscapes Quick Info */}
                <div className="glass-dark-premium border border-gold/15 p-3 rounded-xl flex items-center justify-center gap-2 text-left">
                  <div className="h-8 w-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <Compass className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-sand/50">Paisaje Sonoro</span>
                    <span className="text-xs text-ivory font-serif italic">Loop Activo</span>
                  </div>
                </div>
              </div>

            </div>

            {/* ETIQUETAS FLOTANTES ANIMADAS */}
            <div className="absolute inset-0 pointer-events-none z-10 hidden md:block">
              {[
                { text: "Safari de Cosecha", x: "12%", y: "25%", delay: 0.1, duration: 8 },
                { text: "Fermentación Viva", x: "82%", y: "30%", delay: 0.3, duration: 9 },
                { text: "Bosque Seco Tropical", x: "15%", y: "70%", delay: 0.5, duration: 7 },
                { text: "Tradición Campesina", x: "78%", y: "65%", delay: 0.2, duration: 8.5 },
              ].map((tag, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 0.45,
                    y: [0, -12, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{
                    opacity: { delay: 1.5, duration: 1 },
                    y: { repeat: Infinity, duration: tag.duration, ease: "easeInOut", delay: tag.delay },
                    x: { repeat: Infinity, duration: tag.duration * 0.8, ease: "easeInOut", delay: tag.delay }
                  }}
                  style={{ left: tag.x, top: tag.y }}
                  className="absolute px-3 py-1.5 rounded-lg bg-deep-cocoa/80 border border-gold/15 text-[10px] tracking-wider text-gold uppercase font-sans font-medium"
                >
                  {tag.text}
                </motion.div>
              ))}
            </div>

            {/* Bottom Chevron Scroll Trigger */}
            <button
              onClick={() => scrollToSection("mapa")}
              className="relative z-10 mt-auto text-gold hover:text-gold-hover transition-colors animate-bounce cursor-pointer py-2 focus:outline-none"
              title="Continuar navegando"
            >
              <ChevronDown className="h-6 w-6" />
            </button>

          </header>

          {/* ============================================================== */}
          {/* SECCIÓN 2 — MAPA INTERACTIVO DEL PRODUCTO */}
          {/* ============================================================== */}
          <section id="mapa" className="relative w-full bg-ivory border-t border-gold/10">
            <InteractiveMap />
          </section>

          {/* ============================================================== */}
          {/* SECCIÓN 3 — MANIFIESTO DE SOSTENIBILIDAD */}
          {/* ============================================================== */}
          <section id="manifiesto" className="relative w-full bg-sand/10 border-t border-gold/10">
            <SustainabilityManifesto />
          </section>

          {/* ============================================================== */}
          {/* SECCIÓN 4 — CHECKOUT FINANCIERO */}
          {/* ============================================================== */}
          <section id="checkout" className="relative w-full bg-ivory border-t border-gold/10">
            <BookingCheckout />
          </section>

          {/* ============================================================== */}
          {/* SECCIÓN 5 — GALERÍA DE IMÁGENES */}
          {/* ============================================================== */}
          <section id="galeria" className="relative w-full bg-sand/20 border-t border-gold/10 py-12">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="font-serif text-2xl text-deep-cocoa mb-6">Galería</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "/image/animada.jpeg",
                  "/image/guama.jpeg",
                ].map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-xl border border-gold/10 bg-white/5">
                    <img src={src} alt={`imagen-${i}`} className="w-full h-56 object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* FOOTER FINAL */}
          {/* ============================================================== */}
          <footer className="relative bg-deep-cocoa border-t border-gold/15 text-ivory py-16 px-6 overflow-hidden">
            {/* Ambient animation background shapes */}
            <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.12)_0%,transparent_60%)] animate-pulse-slow" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-gold/10 pb-12">
              {/* Branding column */}
              <div className="md:col-span-6 text-left space-y-4">
                <span className="font-serif text-2xl tracking-wide text-ivory block">
                  Néctar de Algodón
                </span>
                <p className="font-sans text-xs text-sand/65 max-w-md font-light leading-relaxed">
                  Una vitrina digital gastronómica para salvaguardar la fermentación de sombra y los cultivos campesinos de guama en San Jacinto, Bolívar.
                </p>
              </div>

              {/* Navigation links column */}
              <div className="md:col-span-3 text-left space-y-2">
                <span className="text-[9px] uppercase tracking-widest text-gold font-bold font-sans block mb-2">Secciones</span>
                {["hero", "mapa", "manifiesto", "checkout"].map((secId, i) => {
                  const names = ["Inicio", "El Mapa", "Manifiesto", "Reserva"];
                  return (
                    <button
                      key={secId}
                      onClick={() => scrollToSection(secId)}
                      className="text-xs text-sand/80 hover:text-gold block font-sans font-light transition-colors py-0.5 cursor-pointer text-left focus:outline-none"
                    >
                      {names[i]}
                    </button>
                  );
                })}
              </div>

              {/* Contacts / Credits column */}
              <div className="md:col-span-3 text-left space-y-2 text-xs font-sans font-light text-sand/80">
                <span className="text-[9px] uppercase tracking-widest text-gold font-bold block mb-2">Contacto</span>
                <p>Montes de María, Bolívar, Colombia</p>
                <p className="underline decoration-gold/30 hover:text-gold cursor-pointer transition-colors">
                  experiencias@nectardealgodon.com
                </p>
                <p>RNT N° 82435-02</p>
              </div>
            </div>

            {/* Bottom copyright line */}
            <div className="relative z-10 max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] text-sand/40 font-sans tracking-wide">
              <span>
                © {new Date().getFullYear()} Néctar de Algodón de los Montes. Todos los derechos reservados.
              </span>
              <span className="mt-2 md:mt-0 font-serif italic text-gold/60">
                Diseñado con respeto patrimonial y ecología territorial · Bolívar, Colombia
              </span>
            </div>
          </footer>

        </motion.div>
      )}
    </>
  );
}

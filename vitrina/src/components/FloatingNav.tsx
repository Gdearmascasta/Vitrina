"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Compass, Sparkles, BookOpen, Scale } from "lucide-react";

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: "hero", name: "Inicio" },
    { id: "mapa", name: "El Mapa" },
    { id: "manifiesto", name: "Sostenibilidad" },
    { id: "checkout", name: "Reservas" },
  ];

  useEffect(() => {
    // Detect scroll for glassmorphism addition
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Scroll spy using Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -40% 0px", // Trigger when section occupies the center
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* ============================================================== */}
      {/* FLOATING TOP HEADER */}
      {/* ============================================================== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled 
            ? "py-3 bg-deep-cocoa/80 border-b border-gold/15 backdrop-blur-md shadow-lg" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo / Brand name */}
          <button 
            onClick={() => scrollTo("hero")}
            className="flex flex-col text-left group cursor-pointer focus:outline-none select-none"
          >
            <span className="font-serif text-lg tracking-wider text-ivory group-hover:text-gold transition-colors">
              Néctar de Algodón
            </span>
            <span className="font-sans text-[8px] tracking-[0.25em] text-gold uppercase mt-0.5 font-semibold">
              Montes de María
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollTo(sec.id)}
                  className={`text-xs font-sans uppercase tracking-[0.15em] relative py-1 cursor-pointer transition-colors duration-300 ${
                    isActive ? "text-gold font-medium" : "text-ivory/70 hover:text-ivory"
                  }`}
                >
                  {sec.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}

            {/* Quick booking button */}
            <button
              onClick={() => scrollTo("checkout")}
              className="py-2 px-5 text-xs font-sans tracking-widest uppercase bg-gold hover:bg-gold-hover text-deep-cocoa font-bold rounded-lg transition-colors cursor-pointer"
            >
              Reservar
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-ivory hover:text-gold transition-colors p-1"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-deep-cocoa/95 border-b border-gold/15 backdrop-blur-lg flex flex-col p-6 space-y-4 md:hidden shadow-xl"
          >
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className={`text-left text-sm font-sans uppercase tracking-[0.1em] py-2 border-b border-gold/5 ${
                  activeSection === sec.id ? "text-gold font-bold" : "text-ivory/80"
                }`}
              >
                {sec.name}
              </button>
            ))}
            <button
              onClick={() => scrollTo("checkout")}
              className="w-full py-3 text-center text-xs font-sans tracking-widest uppercase bg-gold text-deep-cocoa font-bold rounded-lg"
            >
              Reservar Ahora
            </button>
          </motion.div>
        )}
      </nav>

      {/* ============================================================== */}
      {/* LATERAL SCROLL PROGRESS INDICATOR */}
      {/* ============================================================== */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4 select-none">
        <span className="text-[7px] text-gold uppercase tracking-[0.3em] rotate-90 mb-3 origin-center whitespace-nowrap font-bold">
          Progreso
        </span>
        
        {sections.map((sec, idx) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="group flex items-center justify-end relative py-1 focus:outline-none"
              title={sec.name}
            >
              {/* Text label revealed on hover */}
              <span className="absolute right-7 text-[9px] font-sans tracking-wider uppercase text-gold bg-deep-cocoa/90 border border-gold/25 px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                {sec.name}
              </span>

              {/* Progress dot */}
              <div className={`h-2.5 w-2.5 rounded-full border transition-all duration-500 ${
                isActive 
                  ? "bg-gold border-gold scale-125 shadow-md shadow-gold/40" 
                  : "bg-transparent border-gold/40 group-hover:border-gold"
              }`} />
            </button>
          );
        })}
      </div>
    </>
  );
}

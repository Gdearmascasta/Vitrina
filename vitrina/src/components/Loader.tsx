"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Show loader for 3.5s then trigger onComplete
    const timer = setTimeout(() => {
      setMounted(false);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {mounted && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-deep-cocoa px-6 text-center select-none"
        >
          {/* Subtle slow pulsing background radial light */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,154,134,0.12)_0%,transparent_70%)]" />

          <div className="relative z-10 max-w-xl">
            {/* Minimal Brand Seal / Decorative Line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.6 }}
              transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
              className="mx-auto mb-8 h-[1px] w-24 bg-gold"
            />

            {/* Subtitle / Brand Category */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
              className="font-sans text-[11px] tracking-[0.25em] uppercase text-gold mb-3"
            >
              Vitrina Gastronómica Campesina
            </motion.p>

            {/* Main Brand Name */}
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.05em" }}
              animate={{ opacity: 1, letterSpacing: "0.15em" }}
              transition={{ delay: 0.8, duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl md:text-5xl font-light text-ivory mb-5"
            >
              Néctar de Algodón
            </motion.h1>

            {/* Subtitle descriptive */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.5, duration: 1.5 }}
              className="font-sans text-xs md:text-sm font-light text-sand tracking-wide max-w-md mx-auto leading-relaxed"
            >
              Montes de María · Colombia
            </motion.p>

            {/* Elegant Spinning Border Element */}
            <div className="relative mx-auto mt-16 h-10 w-10 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="absolute inset-0 rounded-full border border-gold/30 border-t-gold animate-spin-slow"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2, duration: 0.8, type: "spring" }}
                className="h-2 w-2 rounded-full bg-gold"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

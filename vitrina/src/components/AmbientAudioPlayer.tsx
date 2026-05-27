"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AmbientAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.15); // Start with low and elegant volume
  const [showControls, setShowControls] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Initialize Audio
  useEffect(() => {
    const audio = new Audio("/sounds/bosque.wav");
    audio.loop = true;
    audio.volume = 0; // Start at 0 for fade-in
    audioRef.current = audio;

    // Handle Autoplay attempts
    const startAudio = () => {
      if (!audio) return;
      
      audio.play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
          // Fade-in volume smoothly over 3 seconds
          let currentVol = 0;
          const targetVol = volume;
          const fadeInterval = setInterval(() => {
            currentVol += 0.01;
            if (currentVol >= targetVol) {
              audio.volume = targetVol;
              clearInterval(fadeInterval);
            } else {
              audio.volume = currentVol;
            }
          }, 150);
        })
        .catch((err) => {
          console.log("Autoplay blocked, waiting for user gesture.", err);
        });
    };

    // Attempt to start immediately
    startAudio();

    // Register interaction listeners to kickstart play if blocked
    const handleUserInteraction = () => {
      if (!isPlaying && audioRef.current) {
        startAudio();
      }
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction, { passive: true });
    window.addEventListener("touchstart", handleUserInteraction, { passive: true });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  // Handle Play / Pause Toggle
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      // Fade-out volume before pausing to avoid abrupt cuts
      let currentVol = audioRef.current.volume;
      const fadeInterval = setInterval(() => {
        currentVol -= 0.02;
        if (currentVol <= 0) {
          audioRef.current!.volume = 0;
          audioRef.current!.pause();
          setIsPlaying(false);
          clearInterval(fadeInterval);
        } else {
          audioRef.current!.volume = currentVol;
        }
      }, 50);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
      // Fade-in volume
      let currentVol = 0;
      const targetVol = isMuted ? 0 : volume;
      const fadeInterval = setInterval(() => {
        currentVol += 0.02;
        if (currentVol >= targetVol) {
          audioRef.current!.volume = targetVol;
          clearInterval(fadeInterval);
        } else {
          audioRef.current!.volume = currentVol;
        }
      }, 50);
    }
  };

  // Handle Mute Toggle
  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  // Handle Volume Slider Change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      if (isMuted && val > 0) {
        setIsMuted(false);
      }
      audioRef.current.volume = val;
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
      {/* Floating Audio Controller Badge */}
      <div 
        className="relative flex items-center"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* Main Floating Button */}
        <button
          onClick={togglePlay}
          className="relative h-12 w-12 rounded-full glass-dark-premium flex items-center justify-center text-gold cursor-pointer shadow-lg hover:border-gold/55 transition-all duration-300 hover:scale-105 active:scale-95"
          title={isPlaying ? "Pausar Paisaje Sonoro" : "Activar Paisaje Sonoro"}
        >
          {isPlaying ? (
            <div className="flex items-end gap-[3px] h-4">
              {/* Dynamic Sound Wavebars */}
              <span className="w-[3px] h-3 bg-gold rounded-full animate-pulse-slow" style={{ animationDelay: "0.1s" }} />
              <span className="w-[3px] h-4 bg-gold rounded-full animate-pulse-slow" style={{ animationDelay: "0.4s" }} />
              <span className="w-[3px] h-2 bg-gold rounded-full animate-pulse-slow" style={{ animationDelay: "0.2s" }} />
              <span className="w-[3px] h-5 bg-gold rounded-full animate-pulse-slow" style={{ animationDelay: "0.6s" }} />
              <span className="w-[3px] h-3 bg-gold rounded-full animate-pulse-slow" style={{ animationDelay: "0.3s" }} />
            </div>
          ) : (
            <Play className="h-5 w-5 ml-0.5 fill-gold stroke-none" />
          )}
        </button>

        {/* Hover Expandable Panel */}
        <AnimatePresence>
          {showControls && (
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.95 }}
              className="absolute left-14 ml-2 pl-3 pr-4 py-2 rounded-full glass-dark-premium flex items-center gap-4 text-xs select-none shadow-xl border border-gold/15"
            >
              {/* Paisaje Sonoro title */}
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-sans text-sand/60 tracking-wider uppercase">Ambiente</span>
                <span className="text-ivory font-serif text-xs whitespace-nowrap italic">Bosque Seco Tropical</span>
              </div>

              {/* Action Buttons inside overlay */}
              <div className="flex items-center gap-2 border-l border-gold/20 pl-3">
                {/* Mute Button */}
                <button
                  onClick={toggleMute}
                  className="text-gold hover:text-gold-hover transition-colors p-1"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </button>

                {/* Volume Slider */}
                <input
                  type="range"
                  min="0"
                  max="0.4"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1 bg-gold/30 accent-gold rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle Hint on Load (Prompt for sound if autoplay blocked) */}
      {!hasInteracted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex flex-col glass-premium border border-gold/30 px-4 py-2 rounded-xl text-left shadow-lg pointer-events-none"
        >
          <span className="text-[9px] uppercase tracking-wider text-sage font-medium">Experiencia Inmersiva</span>
          <span className="text-xs text-deep-cocoa font-serif italic">Haz clic en cualquier lado para activar sonido</span>
        </motion.div>
      )}
    </div>
  );
}

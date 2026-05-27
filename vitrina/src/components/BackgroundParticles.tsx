"use client";

import React, { useEffect, useRef } from "react";

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulseSpeed: number;
      pulseValue: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const density = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80);
      
      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.8,
          speedX: (Math.random() - 0.5) * 0.25,
          speedY: -(Math.random() * 0.4 + 0.1), // Float upwards gently
          opacity: Math.random() * 0.5 + 0.1,
          pulseSpeed: Math.random() * 0.02 + 0.005,
          pulseValue: Math.random() * Math.PI * 2,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.pulseValue += p.pulseSpeed;
        const currentOpacity = p.opacity + Math.sin(p.pulseValue) * 0.15;
        
        ctx.beginPath();
        // Delicate warm golden glow for dry forest ambient
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(197, 168, 128, ${Math.max(0.05, Math.min(currentOpacity, 0.75))})`;
        ctx.shadowColor = "rgba(197, 168, 128, 0.4)";
        ctx.shadowBlur = 4;
        ctx.fill();

        // Update positions
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around bounds
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10 || p.x > canvas.width + 10) {
          p.x = Math.random() * canvas.width;
        }
      });

      // Clear shadow properties for next elements
      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10 opacity-70"
    />
  );
}

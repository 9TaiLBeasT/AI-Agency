"use client";
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
}

export function ArtisticParticles({ 
  count = 50, 
  className = "",
  colors = ['#6366f1', '#3b82f6', '#f97316', '#8b5cf6', '#14b8a6']
}: { 
  count?: number; 
  className?: string;
  colors?: string[];
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    particlesRef.current = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.8 + 0.2,
      life: 0,
      maxLife: Math.random() * 300 + 200,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update particle position with flowing motion
        particle.x += particle.vx + Math.sin(particle.life * 0.01) * 0.2;
        particle.y += particle.vy + Math.cos(particle.life * 0.01) * 0.2;
        particle.life++;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Fade in and out
        const lifeFactor = particle.life / particle.maxLife;
        const alpha = lifeFactor < 0.5 
          ? lifeFactor * 2 
          : (1 - lifeFactor) * 2;

        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = alpha * particle.opacity;
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color + '40');
        gradient.addColorStop(1, particle.color + '00');
        ctx.fillStyle = gradient;
        ctx.fill();

        // Inner particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        ctx.restore();

        // Reset particle when life ends
        if (particle.life >= particle.maxLife) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 0;
          particle.maxLife = Math.random() * 300 + 200;
          particle.color = colors[Math.floor(Math.random() * colors.length)];
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [count, colors]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
}

export function FloatingArtElements() {
  const elements = [
    { icon: '🎨', delay: 0, duration: 8 },
    { icon: '✨', delay: 1, duration: 6 },
    { icon: '🌊', delay: 2, duration: 10 },
    { icon: '🎭', delay: 3, duration: 7 },
    { icon: '🖌️', delay: 4, duration: 9 },
    { icon: '💫', delay: 5, duration: 5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl opacity-20"
          initial={{ 
            x: Math.random() * 1200,
            y: 800,
            rotate: 0,
            scale: 0.5
          }}
          animate={{
            y: -100,
            x: Math.random() * 1200,
            rotate: 360,
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  );
}
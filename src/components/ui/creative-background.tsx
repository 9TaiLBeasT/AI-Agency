"use client";

import { motion } from 'framer-motion';

export function CreativeBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Clean background - no flowing elements */}
    </div>
  );
}

export function ArtisticNoise({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div
        className="w-full h-full opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(167, 243, 208, 0.4) 1px, transparent 0),
            radial-gradient(circle at 2px 2px, rgba(191, 219, 254, 0.3) 1px, transparent 0),
            radial-gradient(circle at 3px 3px, rgba(252, 231, 243, 0.2) 1px, transparent 0)
          `,
          backgroundSize: '20px 20px, 30px 30px, 40px 40px',
          backgroundPosition: '0 0, 10px 10px, 20px 20px',
        }}
      />
    </div>
  );
}
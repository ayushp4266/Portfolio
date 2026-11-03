import React from 'react';

/**
 * Procedural Film Grain Overlay
 * SVG feTurbulence filter rendered with CSS pointer-events: none.
 */
export default function FilmGrain() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05] mix-blend-screen"
      aria-hidden="true"
    >
      <svg className="w-full h-full opacity-100">
        <filter id="cinema-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#cinema-grain)" />
      </svg>
    </div>
  );
}


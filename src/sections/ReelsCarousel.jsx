import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { reels } from '../data/content';

export default function ReelsCarousel() {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
  };

  const scroll = (direction) => {
    if (!containerRef.current) return;
    const scrollAmount = 360;
    containerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="reels" className="py-24 sm:py-32 relative bg-[#0E0E12] border-t border-b border-[#26262E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Navigation Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-[#26262E] pb-6 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#E5383B] mb-2 font-bold">
              <span>04 // 9:16 REELS & SHORT-FORM</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#EDE8DF] uppercase tracking-tight">
              SELECTED REELS SHOWCASE
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#8E8A83] font-body">
              Social-first video edits crafted for instant retention, rhythm, and visual impact.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border border-[#26262E] bg-[#141418] text-[#EDE8DF] transition-all ${
                canScrollLeft
                  ? 'hover:border-[#E5383B] hover:text-[#E5383B]'
                  : 'opacity-40 cursor-not-allowed'
              }`}
              aria-label="Previous Reel"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border border-[#26262E] bg-[#141418] text-[#EDE8DF] transition-all ${
                canScrollRight
                  ? 'hover:border-[#E5383B] hover:text-[#E5383B]'
                  : 'opacity-40 cursor-not-allowed'
              }`}
              aria-label="Next Reel"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 3D Tilted Horizontal Scroll Track */}
        <div
          ref={containerRef}
          onScroll={checkScroll}
          className="flex space-x-6 overflow-x-auto pb-8 pt-4 no-scrollbar scroll-smooth snap-x snap-mandatory perspective-[1200px]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reels.map((reel, index) => (
            <motion.a
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="REEL"
              whileHover={{
                y: -10,
                rotateY: -4,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="snap-start flex-shrink-0 w-[280px] sm:w-[320px] aspect-[9/16] bg-[#141418] border border-[#26262E] hover:border-[#E5383B] rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.7)] flex flex-col justify-between p-5 relative group transition-colors"
            >
              {/* Background Thumbnail with Fallback */}
              <div className="absolute inset-0 z-0 bg-[#0B0B0D]">
                <img
                  src={reel.thumb}
                  alt={reel.title}
                  onError={(e) => {
                    // Fallback to jpg if webp fails
                    e.currentTarget.src = reel.fallbackThumb;
                  }}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Cinema Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/40 to-[#0B0B0D]/70 group-hover:from-[#0B0B0D]/90 transition-all" />
              </div>

              {/* Top Header Information */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E5383B] animate-pulse" />
                  <span className="font-mono text-xs font-bold text-[#EDE8DF]">
                    REEL {reel.reelNumber}
                  </span>
                </div>
                <div className="bg-[#0B0B0D]/80 border border-[#26262E] px-2 py-0.5 rounded text-[10px] font-mono text-[#8E8A83]">
                  {reel.fps}
                </div>
              </div>

              {/* Center Play Button Overlay */}
              <div className="relative z-10 flex items-center justify-center my-auto">
                <div className="w-14 h-14 rounded-full bg-[#E5383B] text-white flex items-center justify-center shadow-[0_0_30px_rgba(229,56,59,0.5)] group-hover:scale-110 transition-transform duration-300">
                  <Play size={22} className="ml-1 fill-white" />
                </div>
              </div>

              {/* Bottom Reel Narrative & Instagram Link */}
              <div className="relative z-10">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {reel.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#1C1C22]/90 border border-[#26262E] text-[#8E8A83]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-2xl text-[#EDE8DF] tracking-wide group-hover:text-white transition-colors">
                  {reel.title}
                </h3>
                <p className="text-xs text-[#8E8A83] font-body mt-1 line-clamp-2">
                  {reel.description}
                </p>

                <div className="mt-4 pt-3 border-t border-[#26262E]/80 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#E5383B] font-semibold flex items-center space-x-1.5">
                    <Instagram size={13} />
                    <span>OPEN REEL</span>
                  </span>
                  <ExternalLink size={14} className="text-[#8E8A83] group-hover:text-[#EDE8DF] transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

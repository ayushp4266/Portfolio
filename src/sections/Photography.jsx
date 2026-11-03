import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Eye, Maximize2, Tag } from 'lucide-react';
import { photos, photoCategories } from '../data/content';

export default function Photography({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'All') return photos;
    return photos.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="photography" className="py-24 sm:py-32 relative bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#26262E] pb-6 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#E5383B] mb-2 font-bold">
              <span>03 // STILL PHOTOGRAPHY</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#EDE8DF] uppercase tracking-tight">
              FRAME DEPTH & STILLS
            </h2>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {photoCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-cursor-label="FILTER"
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all border ${
                  activeCategory === cat
                    ? 'bg-[#EDE8DF] text-[#0B0B0D] font-bold border-[#EDE8DF]'
                    : 'bg-[#141418] text-[#8E8A83] border-[#26262E] hover:text-[#EDE8DF] hover:border-[#8E8A83]'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Photography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group relative bg-[#141418] border border-[#26262E] rounded-xl overflow-hidden hover:border-[#E5383B] transition-colors shadow-[0_15px_40px_rgba(0,0,0,0.6)] cursor-pointer"
              onClick={() => onOpenLightbox(photo, index)}
              data-cursor-label="VIEW"
            >
              {/* Photo Image with subtle scale effect */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#0B0B0D]">
                <img
                  src={photo.thumb}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Cinema Film Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/90 via-[#0B0B0D]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Corner Registration Stamp */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/80 pointer-events-none">
                  <span className="bg-[#0B0B0D]/80 backdrop-blur-sm px-2 py-0.5 rounded border border-[#26262E]">
                    FRAME {String(photo.id).padStart(2, '0')}
                  </span>
                  <span className="bg-[#141418]/90 backdrop-blur-sm px-2 py-0.5 rounded border border-[#26262E] text-[#E5383B]">
                    {photo.category}
                  </span>
                </div>

                {/* Center Hover Trigger Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#E5383B]/90 text-white flex items-center justify-center shadow-[0_0_20px_rgba(229,56,59,0.6)]">
                    <Maximize2 size={20} />
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="font-display text-2xl text-[#EDE8DF] tracking-wide group-hover:text-white transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-[#8E8A83] font-body mt-1 line-clamp-2">
                    {photo.caption}
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#26262E] flex items-center justify-between text-[11px] font-mono text-[#8E8A83]">
                    <span className="text-[#E5383B] font-semibold">{photo.credit}</span>
                    <span className="flex items-center space-x-1 text-[#EDE8DF]/70">
                      <Eye size={12} />
                      <span>LIGHTBOX</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


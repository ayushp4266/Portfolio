import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';

export default function Lightbox({
  photo,
  photos,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext
}) {
  // Keyboard listener
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !photo) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[1000] bg-[#0B0B0D]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 md:p-8"
        onClick={onClose}
      >
        {/* Top Bar: Frame number, title, and close button */}
        <div
          className="flex items-center justify-between z-10 w-full max-w-7xl mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs text-[#E5383B] tracking-widest font-bold">
              FRAME {String(currentIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
            </span>
            <span className="text-[#26262E]">|</span>
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#141418] border border-[#26262E] text-[#EDE8DF]">
              {photo.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#141418] border border-[#26262E] text-[#EDE8DF] hover:bg-[#E5383B] hover:text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X size={20} />
          </button>
        </div>

        {/* Center: Image viewport & Nav arrows */}
        <div
          className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Previous Arrow */}
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-[#141418]/80 border border-[#26262E] text-[#EDE8DF] hover:border-[#E5383B] hover:text-[#E5383B] transition-all"
            aria-label="Previous Photo"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Main Photo with smooth animation */}
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="max-h-[72vh] max-w-[90vw] flex items-center justify-center"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="max-h-[72vh] max-w-full object-contain rounded border border-[#26262E] shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            />
          </motion.div>

          {/* Next Arrow */}
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-[#141418]/80 border border-[#26262E] text-[#EDE8DF] hover:border-[#E5383B] hover:text-[#E5383B] transition-all"
            aria-label="Next Photo"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Bottom Bar: Title, caption, credit line, and EXIF status */}
        <div
          className="w-full max-w-4xl mx-auto bg-[#141418]/90 border border-[#26262E] rounded-lg p-4 sm:p-5 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#26262E] pb-3 mb-3">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl tracking-wider text-[#EDE8DF]">
                {photo.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8A83] font-body mt-0.5">
                {photo.caption}
              </p>
            </div>
            <div className="text-right">
              <span className="font-mono text-xs text-[#E5383B] font-bold">
                {photo.credit}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-[#8E8A83] gap-2">
            <div className="flex items-center space-x-2">
              <Info size={12} className="text-[#8E8A83]" />
              <span>{photo.alt}</span>
            </div>
            <div>
              <span className="text-[#4A4844]">METADATA: </span>
              <span className="text-[#EDE8DF]/70">VERIFIED AUTHENTIC FILE</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

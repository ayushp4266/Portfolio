import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor({ mode = 'video' }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const clickable = target.closest('a, button, [role="button"], input, textarea, .cursor-pointer');
      if (clickable) {
        setIsPointer(true);
        const customLabel = clickable.getAttribute('data-cursor-label');
        setCursorText(customLabel || (clickable.tagName === 'A' ? 'OPEN' : 'SELECT'));
      } else {
        setIsPointer(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[10000] overflow-hidden">
      {/* Outer Viewfinder Box / Ring */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          x: smoothX,
          y: smoothY,
          width: isPointer ? 64 : 32,
          height: isPointer ? 64 : 32,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        <div
          className={`w-full h-full rounded-full border transition-all duration-200 flex items-center justify-center ${
            isPointer
              ? 'border-[#E5383B] bg-[#E5383B]/10 scale-110 shadow-[0_0_15px_rgba(229,56,59,0.3)]'
              : 'border-[#EDE8DF]/40 bg-transparent'
          }`}
        >
          {cursorText && (
            <span className="text-[9px] font-mono font-bold tracking-widest text-[#EDE8DF] uppercase">
              {cursorText}
            </span>
          )}
        </div>

        {/* Framing Crosshair ticks */}
        {!isPointer && (
          <>
            <div className="absolute w-[2px] h-[6px] bg-[#EDE8DF]/60 -top-1" />
            <div className="absolute w-[2px] h-[6px] bg-[#EDE8DF]/60 -bottom-1" />
            <div className="absolute w-[6px] h-[2px] bg-[#EDE8DF]/60 -left-1" />
            <div className="absolute w-[6px] h-[2px] bg-[#EDE8DF]/60 -right-1" />
          </>
        )}
      </motion.div>

      {/* Center Reticle Dot */}
      <motion.div
        className={`fixed top-0 left-0 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-150 ${
          mode === 'video' ? 'bg-[#E5383B]' : 'bg-[#EDE8DF]'
        }`}
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />
    </div>
  );
}

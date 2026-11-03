import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, ArrowDown, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/content';

// Lazy-load 3D camera scene for optimal initial load
const Camera3D = lazy(() => import('../components/Camera3D'));

export default function Hero({
  mode,
  setMode,
  timecode,
  onTriggerShutter
}) {
  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 pb-12 flex flex-col justify-between overflow-hidden">
      {/* Background Studio Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141418_1px,transparent_1px),linear-gradient(to_bottom,#141418_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Top Header Slate Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="flex flex-wrap items-center justify-between border-b border-[#26262E] pb-3 text-xs font-mono text-[#8E8A83]">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1 text-[#EDE8DF]">
              <span className={`w-2 h-2 rounded-full ${mode === 'video' ? 'bg-[#E5383B] animate-pulse' : 'bg-[#EDE8DF]'}`} />
              <span className="font-bold tracking-wider">{mode === 'video' ? 'VIDEO REC' : 'PHOTO STILL'}</span>
            </span>
            <span className="text-[#26262E]">/</span>
            <span>SHUTTER: 1/50</span>
            <span className="hidden sm:inline text-[#26262E]">/</span>
            <span className="hidden sm:inline">ISO: 400</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[#EDE8DF] font-semibold">{timecode}</span>
            <span className="px-2 py-0.5 rounded bg-[#141418] border border-[#26262E] text-[#E5383B]">
              4K DCI
            </span>
          </div>
        </div>
      </div>

      {/* Main Hero Split Grid: Oversized Title + 3D Camera Rig */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-8">
        {/* Left Column: Typography & Intentional Layout */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#141418] border border-[#26262E] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5383B]" />
              <span className="text-xs font-mono tracking-widest text-[#8E8A83] uppercase">
                PORTFOLIO 2026 // {personalInfo.preferredName}
              </span>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.88] tracking-tight text-[#EDE8DF] uppercase">
              GUPTA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EDE8DF] via-[#EDE8DF] to-[#E5383B]">
                SURAJ
              </span>
            </h1>

            <div className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm font-mono text-[#8E8A83]">
              {personalInfo.roles.map((role, idx) => (
                <span key={role} className="flex items-center">
                  <span className="text-[#EDE8DF]">{role}</span>
                  {idx < personalInfo.roles.length - 1 && (
                    <span className="mx-2 text-[#E5383B] font-bold">·</span>
                  )}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm sm:text-base text-[#8E8A83] max-w-xl font-body leading-relaxed">
              Crafting visual rhythm, short-form Instagram reels, and authentic event coverage. 
              Capturing light in still frames and timing movement in timelines.
            </p>

            {/* Interactive Mode Triggers & CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Shutter Button Clicker */}
              <button
                onClick={() => {
                  setMode('photo');
                  if (onTriggerShutter) onTriggerShutter();
                }}
                data-cursor-label="CLICK"
                className="group flex items-center space-x-2 bg-[#E5383B] hover:bg-[#A71D2A] text-white px-6 py-3 rounded font-mono text-xs uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(229,56,59,0.35)] transition-all"
              >
                <Camera size={16} />
                <span>SNAP SHUTTER</span>
              </button>

              <button
                onClick={() => setMode('video')}
                data-cursor-label="REC"
                className="flex items-center space-x-2 bg-[#141418] hover:bg-[#1C1C22] border border-[#26262E] hover:border-[#E5383B] text-[#EDE8DF] px-6 py-3 rounded font-mono text-xs uppercase tracking-widest transition-all"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#E5383B] animate-pulse" />
                <span>VIDEO REC MODE</span>
              </button>

              <a
                href="#photography"
                className="text-xs font-mono text-[#8E8A83] hover:text-[#EDE8DF] underline underline-offset-4 tracking-wider transition-colors ml-2"
              >
                EXPLORE STILLS ↓
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Camera Rig Viewport */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full relative"
          >
            {/* Viewfinder Framing Marks Overlay */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#E5383B] pointer-events-none z-10" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#E5383B] pointer-events-none z-10" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#E5383B] pointer-events-none z-10" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#E5383B] pointer-events-none z-10" />

            <Suspense
              fallback={
                <div className="w-full h-[400px] flex flex-col items-center justify-center bg-[#141418] border border-[#26262E] rounded-xl text-[#8E8A83] font-mono text-xs">
                  <div className="w-8 h-8 border-2 border-[#E5383B] border-t-transparent rounded-full animate-spin mb-3" />
                  <span>INITIALIZING 3D CAMERA RIG...</span>
                </div>
              }
            >
              <Camera3D mode={mode} onShutter={onTriggerShutter} />
            </Suspense>
          </motion.div>
        </div>
      </div>

      {/* Bottom Ticker & Scroll Prompter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#26262E] pt-4 text-xs font-mono text-[#8E8A83] gap-4">
          <div className="flex items-center space-x-6">
            <span>LOCATION: {personalInfo.contact.location}</span>
            <span className="hidden md:inline">INSTAGRAM: {personalInfo.contact.instagram}</span>
          </div>

          <a
            href="#about"
            className="flex items-center space-x-2 text-[#EDE8DF] hover:text-[#E5383B] transition-colors"
          >
            <span>SCROLL TO REVEAL</span>
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Video, Scissors, Camera } from 'lucide-react';
import { personalInfo } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Slate */}
        <div className="flex items-center space-x-3 mb-12 border-b border-[#26262E] pb-4">
          <span className="font-mono text-xs text-[#E5383B] font-bold">01 // PROFILE</span>
          <span className="text-[#26262E]">·</span>
          <span className="font-mono text-xs text-[#8E8A83] tracking-widest uppercase">
            WHO IS BEHIND THE LENS
          </span>
        </div>

        {/* Asymmetrical Grid: Portrait with film overlay + Editorial Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Portrait Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Outer Film Border with sprocket marks */}
              <div className="p-3 bg-[#141418] border border-[#26262E] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                {/* Header Film Header Info */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#26262E] text-[10px] font-mono text-[#8E8A83]">
                  <span>SURYA // FRAME 02</span>
                  <span className="text-[#E5383B] font-bold">COURTYARD PORTRAIT</span>
                </div>

                {/* Portrait Image Container */}
                <div className="relative overflow-hidden rounded aspect-[4/5] bg-[#0B0B0D]">
                  <img
                    src={personalInfo.credits.heroPortrait}
                    alt="Gupta Suraj (Suryaaa) portrait"
                    className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Accent Marks */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#E5383B]" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#E5383B]" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#E5383B]" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#E5383B]" />

                  {/* Bottom Image Stamp */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/90">
                    <span className="bg-[#0B0B0D]/80 px-2 py-0.5 rounded backdrop-blur-sm border border-[#26262E]">
                      GUPTA SURAJ (SURYAAA)
                    </span>
                    <span className="text-[#E5383B] font-bold">2026</span>
                  </div>
                </div>

                {/* Caption / Credit below portrait */}
                <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-[#8E8A83]">
                  <span>CATEGORY: PORTRAITS</span>
                  <span className="text-[#EDE8DF]/90 font-semibold">{personalInfo.credits.universalCredit}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Career Objective */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#EDE8DF] tracking-tight uppercase leading-[0.95]">
                TURNING OBSERVATIONS INTO <br />
                <span className="text-[#E5383B]">ENGAGING VISUAL PACING</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#EDE8DF]/90 font-body leading-relaxed">
                {personalInfo.bio}
              </p>

              {/* Career Objective Slate Card */}
              <div className="mt-8 p-6 bg-[#141418] border-l-4 border-[#E5383B] border-t border-r border-b border-[#26262E] rounded-r-lg">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#E5383B] uppercase tracking-wider font-bold mb-2">
                  <Award size={14} />
                  <span>CAREER OBJECTIVE</span>
                </div>
                <p className="text-sm sm:text-base text-[#EDE8DF] font-body leading-relaxed">
                  "{personalInfo.careerObjective}"
                </p>
              </div>

              {/* Academic & Production Background */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Education */}
                <div className="p-4 bg-[#141418] border border-[#26262E] rounded-lg">
                  <div className="flex items-center space-x-2 text-[#8E8A83] text-xs font-mono mb-1">
                    <GraduationCap size={15} className="text-[#E5383B]" />
                    <span>EDUCATION</span>
                  </div>
                  <h4 className="font-display text-xl text-[#EDE8DF] mt-1">
                    {personalInfo.education.degree}
                  </h4>
                  <p className="text-xs text-[#8E8A83] font-body mt-1 leading-snug">
                    {personalInfo.education.institution}
                  </p>
                </div>

                {/* Verified Software & Gear */}
                <div className="p-4 bg-[#141418] border border-[#26262E] rounded-lg">
                  <div className="flex items-center space-x-2 text-[#8E8A83] text-xs font-mono mb-1">
                    <Scissors size={15} className="text-[#E5383B]" />
                    <span>PRIMARY POST-PRODUCTION</span>
                  </div>
                  <h4 className="font-display text-xl text-[#EDE8DF] mt-1">
                    ADOBE PREMIERE PRO · CAPCUT
                  </h4>
                  <p className="text-xs text-[#8E8A83] font-body mt-1 leading-snug">
                    Full timeline workflow from assembly cut to final export.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats Strip */}
            <div className="mt-10 pt-6 border-t border-[#26262E] grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block font-display text-3xl sm:text-4xl text-[#EDE8DF]">5+</span>
                <span className="text-[11px] font-mono text-[#8E8A83] uppercase tracking-wider">
                  SELECTED REELS
                </span>
              </div>
              <div>
                <span className="block font-display text-3xl sm:text-4xl text-[#E5383B]">100%</span>
                <span className="text-[11px] font-mono text-[#8E8A83] uppercase tracking-wider">
                  PRACTICAL PRODUCTION
                </span>
              </div>
              <div>
                <span className="block font-display text-3xl sm:text-4xl text-[#EDE8DF]">SURAT</span>
                <span className="text-[11px] font-mono text-[#8E8A83] uppercase tracking-wider">
                  BASE LOCATION
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { ArrowUp, Instagram, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-[#26262E] py-12 relative overflow-hidden">
      {/* Background Micro Film Ticks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-[#1C1C22] gap-6">
          {/* Brand & Tagline */}
          <div>
            <div className="flex items-center space-x-3">
              <span className="font-display text-2xl tracking-wider text-[#EDE8DF]">
                {personalInfo.name.toUpperCase()}
              </span>
              <span className="text-xs font-mono text-[#E5383B] font-bold">
                ({personalInfo.preferredName})
              </span>
            </div>
            <p className="text-xs font-mono text-[#8E8A83] mt-1">
              Photographer · Videographer · Video Editor · Content Creator
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center space-x-6">
            <a
              href={personalInfo.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#8E8A83] hover:text-[#EDE8DF] flex items-center space-x-1.5 transition-colors"
            >
              <Instagram size={14} className="text-[#E5383B]" />
              <span>{personalInfo.contact.instagram}</span>
            </a>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="text-xs font-mono text-[#8E8A83] hover:text-[#EDE8DF] flex items-center space-x-1.5 transition-colors"
            >
              <Mail size={14} className="text-[#E5383B]" />
              <span>EMAIL</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#141418] border border-[#26262E] text-[#EDE8DF] hover:border-[#E5383B] hover:text-[#E5383B] transition-all"
              aria-label="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Mandatory Explicit Credits & Gear Lines */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#8E8A83] gap-4 text-center sm:text-left">
          <div>
            <p className="text-[#EDE8DF] font-semibold">
              {personalInfo.credits.footerCredit}
            </p>
            <p className="text-[#8E8A83] mt-1">
              {personalInfo.credits.gearAndTools}
            </p>
          </div>

          <div className="text-[11px] text-[#4A4844]">
            SMPTE 24FPS // DARK CINEMA STUDIO PIPELINE
          </div>
        </div>
      </div>
    </footer>
  );
}


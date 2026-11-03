import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Camera, Video } from 'lucide-react';
import { personalInfo } from '../data/content';

export default function Navigation({
  mode = 'video',
  setMode,
  timecode,
  isMuted,
  toggleMute,
  onTriggerShutter
}) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 40);
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '01 ABOUT', href: '#about' },
    { label: '02 TIMELINE', href: '#skills' },
    { label: '03 STILLS', href: '#photography' },
    { label: '04 REELS', href: '#reels' },
    { label: '05 PRODUCTION', href: '#creative' },
    { label: '06 CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0B0D]/90 backdrop-blur-md border-b border-[#26262E]/80 shadow-[0_4px_24px_rgba(0,0,0,0.7)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Left: Brand Identity / Slate */}
        <a
          href="#"
          className="group flex items-center space-x-3 text-left focus:outline-none"
        >
          <div className="w-8 h-8 rounded border border-[#26262E] bg-[#141418] flex items-center justify-center group-hover:border-[#E5383B] transition-colors">
            <span className="font-display text-lg text-[#EDE8DF] group-hover:text-[#E5383B] transition-colors leading-none">
              S
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-display tracking-wider text-lg sm:text-xl text-[#EDE8DF] group-hover:text-white transition-colors">
                {personalInfo.preferredName}
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#26262E] text-[#EDE8DF]/80">
                PROD.2026
              </span>
            </div>
            <p className="text-[10px] font-mono text-[#8E8A83] tracking-widest uppercase">
              Frame & Motion
            </p>
          </div>
        </a>

        {/* Center: Live Timecode & Mode Controls */}
        <div className="hidden md:flex items-center space-x-4 bg-[#141418]/90 border border-[#26262E] rounded-full px-4 py-1.5">
          {/* Mode Switcher */}
          <div className="flex items-center bg-[#0B0B0D] p-0.5 rounded-full border border-[#26262E]">
            <button
              onClick={() => {
                setMode('photo');
                if (onTriggerShutter) onTriggerShutter();
              }}
              data-cursor-label="PHOTO"
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all ${
                mode === 'photo'
                  ? 'bg-[#EDE8DF] text-[#0B0B0D] font-bold shadow-sm'
                  : 'text-[#8E8A83] hover:text-[#EDE8DF]'
              }`}
            >
              <Camera size={12} />
              <span>STILL</span>
            </button>
            <button
              onClick={() => setMode('video')}
              data-cursor-label="REC"
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all ${
                mode === 'video'
                  ? 'bg-[#E5383B] text-white font-bold shadow-[0_0_12px_rgba(229,56,59,0.5)]'
                  : 'text-[#8E8A83] hover:text-[#EDE8DF]'
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>REC</span>
            </button>
          </div>

          <div className="h-4 w-[1px] bg-[#26262E]" />

          {/* Timecode */}
          <div className="flex items-center space-x-2 font-mono text-xs text-[#EDE8DF]">
            <span className="text-[#E5383B] font-bold">TC</span>
            <span className="tracking-widest font-semibold">{timecode}</span>
            <span className="text-[10px] text-[#8E8A83]">24FPS</span>
          </div>

          <div className="h-4 w-[1px] bg-[#26262E]" />

          {/* Native Sound Toggle */}
          <button
            onClick={toggleMute}
            data-cursor-label="AUDIO"
            className="text-[#8E8A83] hover:text-[#EDE8DF] transition-colors p-1"
            title={isMuted ? "Enable sound FX" : "Mute sound FX"}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} className="text-[#E5383B]" />}
          </button>
        </div>

        {/* Right: Desktop Navigation Anchors */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono text-[#8E8A83] hover:text-[#EDE8DF] tracking-widest transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E5383B] group-hover:w-full transition-all duration-200" />
            </a>
          ))}
          <a
            href="#contact"
            className="border border-[#E5383B] text-[#EDE8DF] hover:bg-[#E5383B] hover:text-white px-3.5 py-1.5 rounded text-xs font-mono tracking-wider transition-all"
          >
            GET IN TOUCH
          </a>
        </nav>

        {/* Mobile Quick Action Buttons & Hamburger */}
        <div className="flex items-center space-x-3 lg:hidden">
          {/* Quick Sound Toggle on mobile */}
          <button
            onClick={toggleMute}
            className="p-2 rounded bg-[#141418] border border-[#26262E] text-[#8E8A83]"
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} className="text-[#E5383B]" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded bg-[#141418] border border-[#26262E] text-[#EDE8DF]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Scrubbable Playhead Scroll Indicator */}
      <div className="w-full h-[2px] bg-[#141418] relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#A71D2A] to-[#E5383B] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0D]/98 border-b border-[#26262E] px-6 py-8 backdrop-blur-xl animate-fadeIn">
          {/* Mobile Mode Switcher & Timecode */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#26262E]">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  setMode('photo');
                  if (onTriggerShutter) onTriggerShutter();
                }}
                className={`px-3 py-1.5 rounded text-xs font-mono ${
                  mode === 'photo' ? 'bg-[#EDE8DF] text-black font-bold' : 'text-[#8E8A83]'
                }`}
              >
                STILL MODE
              </button>
              <button
                onClick={() => setMode('video')}
                className={`px-3 py-1.5 rounded text-xs font-mono ${
                  mode === 'video' ? 'bg-[#E5383B] text-white font-bold' : 'text-[#8E8A83]'
                }`}
              >
                REC MODE
              </button>
            </div>
            <span className="font-mono text-xs text-[#E5383B]">{timecode}</span>
          </div>

          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-display tracking-widest text-[#EDE8DF] hover:text-[#E5383B] transition-colors py-2 border-b border-[#141418]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 text-center bg-[#E5383B] text-white py-3 rounded font-mono text-sm tracking-widest uppercase font-bold"
            >
              HIRE / COLLABORATE
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}


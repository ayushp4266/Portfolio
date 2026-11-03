import React, { useState, useCallback, useEffect } from 'react';
import FilmGrain from './components/FilmGrain';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import SkillsTimeline from './sections/SkillsTimeline';
import Photography from './sections/Photography';
import ReelsCarousel from './sections/ReelsCarousel';
import CreativeWork from './sections/CreativeWork';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Lightbox from './components/Lightbox';

import { useSoundFX } from './hooks/useSoundFX';
import { useTimecode } from './hooks/useTimecode';
import { photos } from './data/content';

export default function App() {
  const [mode, setMode] = useState('video'); // 'video' | 'photo'
  const [flash, setFlash] = useState(false);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Sound and timecode hooks
  const { isMuted, toggleMute, playShutterSound, playRecBeep } = useSoundFX();
  const { timecode } = useTimecode(mode);

  // Shutter action with sound & camera flash
  const triggerShutter = useCallback(() => {
    playShutterSound();
    setFlash(true);
    setTimeout(() => setFlash(false), 300);
  }, [playShutterSound]);

  // Mode handler with sound feedback
  const handleSetMode = useCallback((newMode) => {
    setMode(newMode);
    if (newMode === 'photo') {
      triggerShutter();
    } else {
      playRecBeep();
    }
  }, [triggerShutter, playRecBeep]);

  // Scroll mode toggling (smooth cinema trigger)
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // If user scrolls past photography section, bias towards stills; otherwise video
      const photographySection = document.getElementById('photography');
      if (photographySection) {
        const rect = photographySection.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          if (mode !== 'photo') setMode('photo');
        } else if (rect.top > 200 && currentScrollY < 400) {
          if (mode !== 'video') setMode('video');
        }
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mode]);

  // Lightbox Open & Navigation
  const handleOpenLightbox = (photo, index) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="relative min-h-screen bg-[#0B0B0D] text-[#EDE8DF] selection:bg-[#E5383B] selection:text-white">
      {/* 35mm Analog Film Grain Texture */}
      <FilmGrain />

      {/* Dynamic Viewfinder Custom Cursor */}
      <CustomCursor mode={mode} />

      {/* Camera Shutter Flash Overlay */}
      {flash && (
        <div
          className="fixed inset-0 z-[10001] bg-white pointer-events-none animate-shutter-flash"
          aria-hidden="true"
        />
      )}

      {/* Film Slate Navigation Bar */}
      <Navigation
        mode={mode}
        setMode={handleSetMode}
        timecode={timecode}
        isMuted={isMuted}
        toggleMute={toggleMute}
        onTriggerShutter={triggerShutter}
      />

      {/* Section 1: Hero with 3D Camera Rig */}
      <Hero
        mode={mode}
        setMode={handleSetMode}
        timecode={timecode}
        onTriggerShutter={triggerShutter}
      />

      {/* Section 2: About Suryaaa */}
      <About />

      {/* Section 3: Skills Timeline (NLE Multi-Track) */}
      <SkillsTimeline />

      {/* Section 4: Photography Gallery with Masonry & Filters */}
      <Photography onOpenLightbox={handleOpenLightbox} />

      {/* Section 5: Selected Reels (3D Curved Carousel) */}
      <ReelsCarousel />

      {/* Section 6: Creative Work & Field Production */}
      <CreativeWork />

      {/* Section 7: Contact Slate & Email Dispatch */}
      <Contact />

      {/* Section 8: Footer with Mandatory Credits & Gear */}
      <Footer />

      {/* Fullscreen Accessible Lightbox */}
      <Lightbox
        photo={photos[currentPhotoIndex]}
        photos={photos}
        currentIndex={currentPhotoIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
      />
    </div>
  );
}


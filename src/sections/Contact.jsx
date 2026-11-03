import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, MapPin, Copy, Check, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/content';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    projectType: 'Reels & Short-Form Video',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.projectType} - from ${formData.name || 'Client'}`);
    const body = encodeURIComponent(
      `Hello Suryaaa,\n\nName: ${formData.name}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}\n\nSent from your portfolio website.`
    );
    window.location.href = `mailto:${personalInfo.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#0E0E12] border-t border-[#26262E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 border-b border-[#26262E] pb-6">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#E5383B] mb-2 font-bold">
            <span>06 // INITIATE TRANSMISSION</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl text-[#EDE8DF] uppercase tracking-tight">
            LET'S FRAME SOMETHING MEMORABLE
          </h2>
          <p className="mt-2 text-sm text-[#8E8A83] font-body max-w-xl">
            Available for event coverage, social-first reels, promotional visual edits, and creative team collaborations.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Coordinates Slate */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card */}
            <div className="p-6 bg-[#141418] border border-[#26262E] rounded-xl relative group">
              <div className="flex items-center space-x-3 text-xs font-mono text-[#8E8A83] mb-2">
                <Mail size={16} className="text-[#E5383B]" />
                <span>DIRECT EMAIL DISPATCH</span>
              </div>
              <div className="font-display text-2xl sm:text-3xl text-[#EDE8DF] tracking-wide break-all mt-1">
                {personalInfo.contact.email}
              </div>
              <div className="mt-4 flex items-center space-x-3">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded bg-[#1C1C22] hover:bg-[#26262E] border border-[#26262E] text-xs font-mono text-[#EDE8DF] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-[#10B981]" />
                      <span className="text-[#10B981]">COPIED ADDRESS!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="px-3 py-1.5 rounded bg-[#E5383B] hover:bg-[#A71D2A] text-white text-xs font-mono font-bold transition-colors"
                >
                  OPEN CLIENT ↗
                </a>
              </div>
            </div>

            {/* Instagram Card */}
            <a
              href={personalInfo.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-[#141418] border border-[#26262E] hover:border-[#E5383B] rounded-xl transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 text-xs font-mono text-[#8E8A83]">
                  <Instagram size={16} className="text-[#E5383B]" />
                  <span>PRIMARY SOCIAL FEED</span>
                </div>
                <span className="text-xs font-mono text-[#8E8A83] group-hover:text-[#EDE8DF] transition-colors">
                  ↗
                </span>
              </div>
              <div className="font-display text-2xl sm:text-3xl text-[#EDE8DF] tracking-wide mt-2 group-hover:text-[#E5383B] transition-colors">
                {personalInfo.contact.instagram}
              </div>
              <p className="text-xs text-[#8E8A83] font-body mt-1">
                Daily reels, behind-the-scenes clips, and active direct messages.
              </p>
            </a>

            {/* Location & Status */}
            <div className="p-6 bg-[#141418] border border-[#26262E] rounded-xl flex items-center space-x-4">
              <div className="w-10 h-10 rounded-lg bg-[#1C1C22] border border-[#26262E] flex items-center justify-center text-[#E5383B]">
                <MapPin size={20} />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#8E8A83] block uppercase">
                  HOME PRODUCTION BASE
                </span>
                <span className="font-display text-xl text-[#EDE8DF]">
                  {personalInfo.contact.location}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Cinema Slate Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 bg-[#141418] border border-[#26262E] rounded-2xl relative shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              {/* Form Slate Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#26262E]">
                <span className="font-mono text-xs font-bold text-[#E5383B]">
                  SLATE: CLIENT_BRIEF_FORM
                </span>
                <span className="font-mono text-xs text-[#8E8A83]">DIRECT ROUTING</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-[#8E8A83] mb-2 uppercase">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Media Agency, Event Host, Creator..."
                    className="w-full bg-[#0B0B0D] border border-[#26262E] focus:border-[#E5383B] rounded px-4 py-3 text-sm text-[#EDE8DF] placeholder-[#4A4844] font-body focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8E8A83] mb-2 uppercase">
                    Project Focus
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#0B0B0D] border border-[#26262E] focus:border-[#E5383B] rounded px-4 py-3 text-sm text-[#EDE8DF] font-body focus:outline-none transition-colors"
                  >
                    <option value="Reels & Short-Form Video">Reels & Short-Form Video Production</option>
                    <option value="Event Photography & Videography">Event Photography & Videography</option>
                    <option value="Adobe Premiere Pro / CapCut Video Editing">Video Editing (Premiere Pro / CapCut)</option>
                    <option value="Creative Media Team Role / Internship">Creative Media Team Role / Internship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8E8A83] mb-2 uppercase">
                    Project Vision / Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the timeline, event date, pacing, or creative objective..."
                    className="w-full bg-[#0B0B0D] border border-[#26262E] focus:border-[#E5383B] rounded px-4 py-3 text-sm text-[#EDE8DF] placeholder-[#4A4844] font-body focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor-label="DISPATCH"
                  className="w-full bg-[#E5383B] hover:bg-[#A71D2A] text-white py-3.5 rounded font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(229,56,59,0.4)] transition-all"
                >
                  <Send size={15} />
                  <span>DISPATCH MESSAGE TO SURYAAA</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Layers, Film, Music, Sparkles } from 'lucide-react';
import { timelineTracks } from '../data/content';

export default function SkillsTimeline() {
  const [selectedClip, setSelectedClip] = useState(timelineTracks[0].clips[0]);
  const [playheadPos, setPlayheadPos] = useState(38); // Percentage

  return (
    <section id="skills" className="py-24 relative bg-[#0E0E12] border-t border-b border-[#26262E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#26262E] gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#E5383B] mb-2 font-bold">
              <span>02 // SKILLS ARCHITECTURE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-[#EDE8DF] uppercase tracking-tight">
              NON-LINEAR EDITING TIMELINE
            </h2>
          </div>
          <p className="text-xs font-mono text-[#8E8A83] max-w-sm">
            HOVER OR CLICK TIMELINE CLIPS TO INSPECT TECHNICAL SKILLS & WORKFLOW INTEGRATION.
          </p>
        </div>

        {/* NLE Editor Window Frame */}
        <div className="bg-[#141418] border border-[#26262E] rounded-xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
          {/* Timeline Toolbar Header */}
          <div className="bg-[#0B0B0D] px-4 py-3 border-b border-[#26262E] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <span className="font-mono text-xs font-bold text-[#E5383B] flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E5383B] animate-pulse" />
                <span>SEQUENCE: SURYAAA_SHOWREEL_V1</span>
              </span>
              <span className="text-[#26262E]">|</span>
              <span className="font-mono text-xs text-[#8E8A83]">PREMIERE PRO & CAPCUT PIPELINE</span>
            </div>

            <div className="flex items-center space-x-3 text-xs font-mono text-[#8E8A83]">
              <span className="bg-[#1C1C22] px-2 py-1 rounded text-[#EDE8DF]">
                TIME: 00:02:18:12
              </span>
              <span>24.00 FPS</span>
            </div>
          </div>

          {/* Time Ruler (Seconds / Frames) */}
          <div
            className="relative h-8 bg-[#181820] border-b border-[#26262E] flex items-center text-[10px] font-mono text-[#8E8A83] select-none cursor-pointer overflow-hidden"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickPercent = ((e.clientX - rect.left) / rect.width) * 100;
              setPlayheadPos(Math.max(5, Math.min(95, clickPercent)));
            }}
          >
            {/* Red Playhead Scrub Line */}
            <div
              className="absolute top-0 bottom-0 z-30 transition-all duration-75 pointer-events-none"
              style={{ left: `${playheadPos}%` }}
            >
              <div className="w-0.5 h-full bg-[#E5383B]" />
              <div className="w-3 h-3 bg-[#E5383B] -translate-x-[5px] rotate-45 -mt-1.5 shadow-[0_0_8px_rgba(229,56,59,0.8)]" />
            </div>

            {/* Time Markers */}
            <div className="w-full flex justify-between px-4 sm:px-8">
              <span>00:00:00:00</span>
              <span>00:01:00:00</span>
              <span>00:02:00:00</span>
              <span>00:03:00:00</span>
              <span>00:04:00:00</span>
            </div>
          </div>

          {/* Timeline Multi-Tracks */}
          <div className="p-4 sm:p-6 space-y-3 bg-[#111115] relative">
            {/* Playhead vertical guide down the entire timeline */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-[#E5383B]/40 pointer-events-none z-20"
              style={{ left: `${playheadPos}%` }}
            />

            {timelineTracks.map((track) => (
              <div key={track.trackId} className="flex flex-col sm:flex-row items-stretch gap-2">
                {/* Track Header Label */}
                <div className="w-full sm:w-44 bg-[#181820] border border-[#26262E] rounded px-3 py-2 flex items-center justify-between flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <span
                      className="w-2.5 h-2.5 rounded-sm"
                      style={{ backgroundColor: track.color }}
                    />
                    <span className="font-mono text-xs font-bold text-[#EDE8DF]">
                      {track.trackId}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#8E8A83] truncate max-w-[90px]">
                    {track.type.toUpperCase()}
                  </span>
                </div>

                {/* Track Clips Container */}
                <div className="flex-1 bg-[#141418] border border-[#26262E]/80 rounded p-1 flex items-center gap-2 overflow-x-auto min-h-[52px]">
                  {track.clips.map((clip) => {
                    const isSelected = selectedClip?.id === clip.id;
                    return (
                      <button
                        key={clip.id}
                        onClick={() => setSelectedClip(clip)}
                        data-cursor-label="INSPECT"
                        style={{
                          flex: `0 0 ${clip.width}`,
                          borderColor: isSelected ? '#EDE8DF' : '#26262E',
                        }}
                        className={`h-9 px-3 rounded text-left transition-all relative overflow-hidden flex items-center justify-between border ${
                          isSelected
                            ? 'bg-[#22222C] shadow-lg ring-1 ring-[#EDE8DF]/30'
                            : 'bg-[#181820] hover:bg-[#1E1E26]'
                        }`}
                      >
                        {/* Color Tag Notch */}
                        <div
                          className="absolute left-0 top-0 bottom-0 w-1"
                          style={{ backgroundColor: track.color }}
                        />

                        <div className="truncate pl-1">
                          <span className="font-mono text-xs font-semibold text-[#EDE8DF] block truncate">
                            {clip.title}
                          </span>
                        </div>

                        <span className="text-[9px] font-mono text-[#8E8A83] hidden md:inline ml-2 flex-shrink-0">
                          {clip.duration}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Inspector Panel (Shows details of clicked clip) */}
          {selectedClip && (
            <div className="bg-[#0B0B0D] p-5 border-t border-[#26262E] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono text-[#E5383B] font-bold">
                    INSPECTOR:
                  </span>
                  <h3 className="font-display text-2xl text-[#EDE8DF]">
                    {selectedClip.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#8E8A83] font-body mt-1 max-w-2xl">
                  {selectedClip.desc}
                </p>
              </div>

              <div className="flex items-center space-x-4 text-xs font-mono">
                <div className="px-3 py-1.5 rounded bg-[#181820] border border-[#26262E] text-[#EDE8DF]">
                  DURATION: <span className="text-[#E5383B] font-bold">{selectedClip.duration}</span>
                </div>
                <div className="px-3 py-1.5 rounded bg-[#181820] border border-[#26262E] text-[#EDE8DF]">
                  WORKFLOW: <span className="text-[#EDE8DF] font-semibold">HANDS-ON</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

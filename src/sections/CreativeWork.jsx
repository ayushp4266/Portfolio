import React from 'react';
import { motion } from 'framer-motion';
import { Film, Sliders, PlayCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { creativeWorkStories, personalInfo } from '../data/content';

export default function CreativeWork() {
  return (
    <section id="creative" className="py-24 sm:py-32 relative bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 border-b border-[#26262E] pb-6">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#E5383B] mb-2 font-bold">
            <span>05 // FIELD PRODUCTION</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#EDE8DF] uppercase tracking-tight">
            CREATIVE WORK & PRODUCTION CASES
          </h2>
          <p className="mt-2 text-sm text-[#8E8A83] font-body max-w-xl">
            Real production environments: bridging live gimbal camera operation with dynamic social cuts.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-16">
          {creativeWorkStories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#141418] border border-[#26262E] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-5 relative ${
                  idx % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#0B0B0D] border border-[#26262E] group">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Accent */}
                  <div className="absolute top-3 left-3 bg-[#0B0B0D]/80 backdrop-blur-sm border border-[#26262E] px-2.5 py-1 rounded text-[10px] font-mono text-[#E5383B] font-bold">
                    {story.badge}
                  </div>

                  <div className="absolute bottom-3 right-3 bg-[#0B0B0D]/80 backdrop-blur-sm border border-[#26262E] px-2.5 py-1 rounded text-[10px] font-mono text-[#EDE8DF]">
                    {story.metric}
                  </div>
                </div>
              </div>

              {/* Story Narrative Column */}
              <div
                className={`lg:col-span-7 flex flex-col justify-center ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="flex items-center space-x-2 text-xs font-mono text-[#8E8A83] mb-2 uppercase">
                  <span>PRODUCTION CASE 0{idx + 1}</span>
                  <span>·</span>
                  <span className="text-[#E5383B]">{story.subtitle}</span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#EDE8DF] tracking-tight">
                  {story.title}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-[#8E8A83] font-body leading-relaxed">
                  {story.description}
                </p>

                {/* Workflow Feature Bullets */}
                <div className="mt-6 space-y-2.5">
                  <div className="flex items-center space-x-2.5 text-xs font-mono text-[#EDE8DF]">
                    <CheckCircle2 size={15} className="text-[#E5383B] flex-shrink-0" />
                    <span>Real-time framing feedback on 3-axis gimbal stabilizer</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs font-mono text-[#EDE8DF]">
                    <CheckCircle2 size={15} className="text-[#E5383B] flex-shrink-0" />
                    <span>Seamless integration into Adobe Premiere Pro & CapCut for fast delivery</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs font-mono text-[#EDE8DF]">
                    <CheckCircle2 size={15} className="text-[#E5383B] flex-shrink-0" />
                    <span>Social-first 9:16 vertical orientation with high-retention audio pacing</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-4 border-t border-[#26262E] flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded bg-[#1C1C22] border border-[#26262E] text-[#8E8A83]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

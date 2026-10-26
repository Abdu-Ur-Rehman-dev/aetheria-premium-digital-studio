import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, Cpu, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../assets/images';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'manifesto' | 'rigor' | 'artistry'>('manifesto');

  const tabContents = {
    manifesto: {
      title: 'Rejecting Generic Templates in Favor of Architectural Monuments.',
      body: 'At Aetheria, we view the browser as a three-dimensional spatial canvas rather than a flat document. Every interface we construct is calculated down to sub-pixel accuracy, merging computational efficiency with tactile, glassmorphic elegance.',
      highlights: [
        'Zero-dependency bespoke design architectures',
        'Custom WebGL & GLSL shader pipelines',
        'Algorithmic layout grids with golden ratio proportions',
      ],
      quote: '"We build not for the web of today, but for the spatial luxury standards of tomorrow."',
    },
    rigor: {
      title: 'Mathematical Speed Meets Uncompromising GPU Performance.',
      body: 'Visual grandeur is useless without instant response times. Our engineering framework enforces sub-100ms first contentful paint, 120 FPS continuous WebGL render loops, and complete memory hygiene across mobile and ultra-wide displays.',
      highlights: [
        'GPU-bound shader optimization with zero layout thrashing',
        'Automated tree-shaking and dynamic WebGL asset loading',
        'Strict 60–120 FPS frame budget enforcement',
      ],
      quote: '"Latency is the enemy of aesthetic magic; true speed elevates beauty."',
    },
    artistry: {
      title: 'Tactile Organic Luxury Refined for Visionary Brands.',
      body: 'In an era of mass-produced design slop, Aetheria brings high-fashion craftsmanship to software. We pair champagne warm gold accents with deep midnight navies, soft lavender refractions, and fluid physics interactions.',
      highlights: [
        'Bespoke color palettes engineered for high-contrast legibility',
        'Micro-interactions tuned with spring inertia math',
        'Hand-crafted 3D geometric assets with zero human models',
      ],
      quote: '"Elegance is achieved when every line of code serves both function and emotion."',
    },
  };

  return (
    <section id="about" className="py-24 relative bg-[#0B0F19] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#B9A7F5]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D8BA83]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D8BA83] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>SECTION 02 / PHILOSOPHY</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-[#F8F5EF] max-w-3xl leading-tight">
            Redefining Digital Luxury Through <span className="text-gradient-gold">Spatial Intelligence</span>.
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Interactive Philosophy Tabs & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Tab Selectors */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl glass-panel mb-8 border border-white/10 w-full sm:w-auto">
              {(['manifesto', 'rigor', 'artistry'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-semibold capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-[#D8BA83] text-[#101828] shadow-md shadow-[#D8BA83]/20 font-bold'
                      : 'text-[#F8F5EF]/70 hover:text-[#F8F5EF] hover:bg-white/5'
                  }`}
                >
                  {tab === 'manifesto' ? 'The Manifesto' : tab === 'rigor' ? 'Architectural Rigor' : 'Spatial Artistry'}
                </button>
              ))}
            </div>

            {/* Animated Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <h3 className="font-syne font-bold text-2xl sm:text-3xl text-[#F8F5EF] mb-4 leading-snug">
                  {tabContents[activeTab].title}
                </h3>
                
                <p className="text-base text-[#F8F5EF]/75 font-light leading-relaxed mb-6">
                  {tabContents[activeTab].body}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 mb-8">
                  {tabContents[activeTab].highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-[#F8F5EF]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#D8BA83] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Luxury Quote Box */}
                <div className="glass-panel p-5 rounded-2xl border-l-4 border-l-[#D8BA83] bg-gradient-to-r from-[#101828]/90 to-[#101828]/50">
                  <p className="font-serif italic text-sm text-[#D8BA83] leading-relaxed">
                    {tabContents[activeTab].quote}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Column 2: Monolith 3D Image Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative group rounded-3xl p-1 bg-gradient-to-tr from-[#D8BA83]/40 via-[#B9A7F5]/30 to-transparent shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden">
              <div className="relative rounded-[22px] overflow-hidden aspect-[4/5] bg-[#101828]">
                <img
                  src={ASSETS.about}
                  alt="Monolithic Nexus 3D Structure"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80" />

                {/* Glass Information Badge at Bottom */}
                <div className="absolute bottom-6 inset-x-6 glass-panel p-4 rounded-2xl border border-white/15 flex items-center justify-between">
                  <div>
                    <div className="font-syne font-bold text-sm text-[#F8F5EF]">
                      Monolithic Nexus 01
                    </div>
                    <div className="font-mono text-[10px] text-[#D8BA83]">
                      Champagne Gold Brass & Prism Crystal
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#D8BA83]/20 border border-[#D8BA83]/40 text-[10px] font-mono text-[#D8BA83]">
                    100% Ray-Traced
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Floating Stats Frame */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 glass-panel p-4 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-3.5 max-w-[200px]"
            >
              <div className="p-2.5 rounded-xl bg-[#B9A7F5]/20 text-[#B9A7F5]">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="font-syne font-bold text-lg text-[#F8F5EF]">0.04s</div>
                <div className="font-mono text-[10px] text-[#F8F5EF]/60">Render Latency</div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

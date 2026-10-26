import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, MousePointerClick, Shield, Play, Layers } from 'lucide-react';
import { ThreeDCanvas } from './ThreeDCanvas';
import { ASSETS } from '../assets/images';

interface HeroProps {
  onOpenConfigurator: () => void;
  onExploreGallery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConfigurator, onExploreGallery }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#0B0F19]"
    >
      {/* Background Glowing Mesh Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#B9A7F5]/20 via-[#D8BA83]/15 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#101828] rounded-full blur-[100px] pointer-events-none" />

      {/* Background Ambient Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-light text-xs font-mono text-[#D8BA83] mb-6 border border-[#D8BA83]/30 shadow-[0_0_20px_rgba(216,186,131,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#D8BA83] animate-ping" />
              <span>AETHERIA ARCHITECTURE LAB 2026</span>
              <span className="text-[#B9A7F5]">/</span>
              <span className="text-[#F8F5EF]/80">NEXT-GEN DIGITAL ATELIER</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-syne font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#F8F5EF] leading-[1.08] mb-6">
              Crafting Digital <br />
              <span className="text-gradient-gold relative inline-block">
                Monuments
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#D8BA83]/30"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path
                    d="M1 10C50 3 150 2 299 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              Of Infinite Precision.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#F8F5EF]/70 max-w-2xl font-light leading-relaxed mb-8">
              An ultra-premium digital atelier engineering bespoke spatial web environments, real-time 3D WebGL architectures, and mathematical design systems for visionary brands worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
              <button
                onClick={onOpenConfigurator}
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#D8BA83] via-[#EAE3D2] to-[#B9A7F5] text-[#101828] font-bold text-sm tracking-wide shadow-[0_10px_30px_rgba(216,186,131,0.3)] hover:shadow-[0_15px_40px_rgba(216,186,131,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
              >
                <Sparkles className="w-4 h-4 text-[#101828]" />
                <span>Initiate Bespoke Brief</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreGallery}
                className="px-7 py-4 rounded-full glass-panel hover:bg-white/10 text-sm font-semibold text-[#F8F5EF] border border-white/15 hover:border-[#D8BA83]/50 transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <Layers className="w-4 h-4 text-[#B9A7F5]" />
                <span>Explore Portfolio</span>
              </button>
            </div>

            {/* Live Metrics Bar */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-lg">
              <div>
                <div className="font-syne font-bold text-2xl text-[#D8BA83]">99.8%</div>
                <div className="font-mono text-[11px] text-[#F8F5EF]/60 uppercase tracking-wider">Visual Fidelity</div>
              </div>
              <div>
                <div className="font-syne font-bold text-2xl text-[#B9A7F5]">120 FPS</div>
                <div className="font-mono text-[11px] text-[#F8F5EF]/60 uppercase tracking-wider">WebGL Engine</div>
              </div>
              <div>
                <div className="font-syne font-bold text-2xl text-[#F8F5EF]">40+</div>
                <div className="font-mono text-[11px] text-[#F8F5EF]/60 uppercase tracking-wider">Global Awards</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D WebGL Canvas & Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Main Interactive Glass Frame */}
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#D8BA83]/40 via-[#B9A7F5]/20 to-transparent shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
              <div className="relative rounded-[22px] bg-[#101828]/80 backdrop-blur-2xl overflow-hidden min-h-[460px] sm:min-h-[520px] flex flex-col justify-between p-6">
                
                {/* Top Badge Overlay */}
                <div className="flex items-center justify-between z-20">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[11px] font-mono text-[#D8BA83]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8BA83] animate-pulse" />
                    <span>Real-time Interactive WebGL</span>
                  </div>
                  <div className="font-mono text-[10px] text-[#F8F5EF]/40 tracking-widest">
                    MODEL: Æ-KNOT-V6
                  </div>
                </div>

                {/* Center Three.js Canvas */}
                <div className="absolute inset-0 z-10">
                  <ThreeDCanvas
                    interactive={true}
                    meshType="torusKnot"
                    colorTheme="gold"
                    speedMultiplier={1.2}
                  />
                </div>

                {/* Bottom Interactive Specs Card Overlay */}
                <div className="relative z-20 mt-auto pt-6">
                  <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#D8BA83]/30 shrink-0">
                        <img
                          src={ASSETS.hero}
                          alt="Hero Sculpture Detail"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-syne font-bold text-sm text-[#F8F5EF]">
                          The Ethereal Loop
                        </div>
                        <div className="font-mono text-[10px] text-[#B9A7F5]">
                          Refractive Silica & Champagne Chrome
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setShowVideoModal(true)}
                      className="p-3 rounded-xl bg-[#D8BA83] text-[#101828] hover:scale-105 active:scale-95 transition-all shadow-md group"
                      title="Preview Reel"
                    >
                      <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 z-30 glass-panel p-3.5 rounded-2xl border border-[#D8BA83]/40 shadow-xl hidden sm:flex items-center gap-3"
            >
              <div className="p-2 rounded-xl bg-[#D8BA83]/20 text-[#D8BA83]">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#F8F5EF]">Zero-Latency GPU</div>
                <div className="text-[10px] font-mono text-[#F8F5EF]/60">Sub-16ms Frame Times</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 z-30 glass-panel p-3.5 rounded-2xl border border-[#B9A7F5]/40 shadow-xl hidden sm:flex items-center gap-3"
            >
              <div className="p-2 rounded-xl bg-[#B9A7F5]/20 text-[#B9A7F5]">
                <MousePointerClick className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#F8F5EF]">Interactive Canvas</div>
                <div className="text-[10px] font-mono text-[#F8F5EF]/60">Drag / Rotate Object</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none">
        <span className="font-mono text-[10px] text-[#F8F5EF]/50 tracking-widest uppercase">
          Scroll To Discover
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-[#D8BA83]/40 flex justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[#D8BA83] animate-bounce" />
        </div>
      </div>

      {/* Video Reel Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0F19]/90 backdrop-blur-2xl">
          <div className="relative w-full max-w-4xl glass-panel p-6 rounded-3xl border border-[#D8BA83]/40">
            <div className="flex justify-between items-center mb-4">
              <div className="font-syne font-bold text-lg text-[#F8F5EF]">AETHERIA 2026 Showreel</div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="px-3 py-1 rounded-full bg-white/10 text-xs text-[#F8F5EF] hover:bg-white/20"
              >
                Close ✕
              </button>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-white/10">
              <img
                src={ASSETS.hero}
                alt="Showreel Preview"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 flex flex-col items-center justify-center p-8 text-center">
                <Sparkles className="w-12 h-12 text-[#D8BA83] mb-4 animate-spin-slow" />
                <h3 className="font-syne text-2xl font-bold text-[#F8F5EF] mb-2">Cinematic Render Engine</h3>
                <p className="text-sm text-[#F8F5EF]/70 max-w-md">
                  Experiencing high-definition WebGL spatial animations rendered directly in real time at 120 FPS.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

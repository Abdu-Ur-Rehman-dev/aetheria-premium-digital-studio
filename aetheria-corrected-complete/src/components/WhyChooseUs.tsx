import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Check, X, Award, Zap, Code, Sparkles, Star } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const stats = [
    { label: 'Pixel Perfection Rating', value: '99.9%', desc: 'Mathematically aligned golden ratio grids' },
    { label: 'Average Page Load Time', value: '140ms', desc: 'Sub-millisecond GPU asset pipeline' },
    { label: 'Global Design Honors', value: '48+', desc: 'FWA, Awwwards Site of the Month & CSSDA' },
    { label: 'Bespoke Codebase', value: '100%', desc: 'Zero off-the-shelf templates or boilerplate' },
  ];

  const comparison = [
    { feature: 'Visual Identity & Custom 3D', standard: 'Generic Stock Assets & Stock Photos', aetheria: 'Original 3D Spatial Sculptures & GLSL Shaders' },
    { feature: 'Page Load & Rendering', standard: 'Heavy Third-Party Scripts (2.5s+ Load)', aetheria: 'Sub-140ms FCP with 120 FPS WebGL Engine' },
    { feature: 'Motion & Physics', standard: 'Basic CSS Keyframes & Clunky Jank', aetheria: 'Fluid Spring Math & Custom GSAP Physics' },
    { feature: 'Brand Perception', standard: 'Forgettable & Cookie-Cutter Template', aetheria: 'Award-Worthy, Unforgettable Digital Monument' },
    { feature: 'Code Integrity', standard: 'Bloated Drag-and-Drop Builders', aetheria: 'Hand-Crafted Modern React & TypeScript Engine' },
  ];

  return (
    <section id="why-us" className="py-24 relative bg-[#0B0F19] overflow-hidden border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#B9A7F5]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D8BA83] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SECTION 05 / WHY CHOOSE AETHERIA</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-[#F8F5EF] max-w-3xl leading-tight">
            The Difference Between <span className="text-gradient-gold">Ordinary Websites</span> & Spatial Monuments.
          </h2>
          <p className="text-base text-[#F8F5EF]/70 max-w-2xl mt-4 font-light">
            We don't build standard web pages. We engineer digital flagship monuments designed to elevate brand authority instantly.
          </p>
        </div>

        {/* 4 Animated Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-panel p-8 rounded-3xl border border-[#D8BA83]/20 relative group hover:border-[#D8BA83]/50 transition-all duration-300"
            >
              <div className="font-syne font-extrabold text-4xl sm:text-5xl text-gradient-gold mb-3">
                {stat.value}
              </div>
              <div className="font-syne font-bold text-base text-[#F8F5EF] mb-1">
                {stat.label}
              </div>
              <p className="text-xs text-[#F8F5EF]/60 font-mono">
                {stat.desc}
              </p>
              
              <div className="absolute top-4 right-4 text-[#D8BA83]/20 group-hover:text-[#D8BA83]/60 transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Matrix Table */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/15 overflow-hidden shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
            <div>
              <h3 className="font-syne font-bold text-2xl text-[#F8F5EF]">
                Architectural Standards Comparison
              </h3>
              <p className="text-xs text-[#F8F5EF]/60 font-mono mt-1">
                EXPLICIT AUDIT OF ENGINE & DESIGN DIFFERENTIALS
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#D8BA83]/10 border border-[#D8BA83]/30 text-xs font-mono text-[#D8BA83]">
              <Award className="w-4 h-4" />
              <span>Certified Award Quality</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono uppercase tracking-wider text-[#B9A7F5]">
                  <th className="pb-4 font-semibold">Evaluation Vector</th>
                  <th className="pb-4 font-semibold text-red-400/80">Standard Off-The-Shelf</th>
                  <th className="pb-4 font-semibold text-[#D8BA83]">AETHERIA Atelier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 font-syne font-semibold text-[#F8F5EF]">
                      {row.feature}
                    </td>
                    <td className="py-4 text-[#F8F5EF]/50 text-xs flex items-center gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{row.standard}</span>
                    </td>
                    <td className="py-4 text-[#D8BA83] font-medium text-xs flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#D8BA83] shrink-0" />
                      <span>{row.aetheria}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

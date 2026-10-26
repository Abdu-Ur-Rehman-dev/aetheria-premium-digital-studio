import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, Box, Zap, Sparkles, Sliders, RefreshCw, Eye, ShieldCheck, Cpu } from 'lucide-react';
import { ThreeDCanvas } from './ThreeDCanvas';

export const Features: React.FC = () => {
  // Sandbox State
  const [geometry, setGeometry] = useState<'torusKnot' | 'icosahedron' | 'octahedron' | 'torus'>('torusKnot');
  const [colorTheme, setColorTheme] = useState<'gold' | 'lavender' | 'pure'>('gold');
  const [speed, setSpeed] = useState<number>(1);
  const [wireframe, setWireframe] = useState<boolean>(false);

  const featureCards = [
    {
      icon: Box,
      title: 'Spatial Web Architecture',
      tag: 'WebGL 2.0 Engine',
      description: 'Immersive 3D environments engineered with raw WebGL GLSL shaders, real-time lighting refractions, and 120 FPS frame rate consistency across all devices.',
      accent: 'from-[#D8BA83] to-[#F8F5EF]',
    },
    {
      icon: Layers,
      title: 'Quantum Design Systems',
      tag: 'Mathematical Grids',
      description: 'Bespoke glassmorphic component libraries built with modular scale typography, golden ratio proportions, and tactile micro-interaction responses.',
      accent: 'from-[#B9A7F5] to-[#D8BA83]',
    },
    {
      icon: Sparkles,
      title: 'Generative Motion Shaders',
      tag: 'Kinetic Physics',
      description: 'Algorithmic fluid motion that dynamically reacts to visitor scroll speed, cursor velocity, and orientation vector math.',
      accent: 'from-[#F8F5EF] to-[#B9A7F5]',
    },
    {
      icon: Zap,
      title: 'Sub-Millisecond Engine',
      tag: 'GPU Pipeline',
      description: 'Hyper-optimized graphics pipelines ensuring sub-100ms first contentful paint, zero cumulative layout shifts, and absolute memory safety.',
      accent: 'from-[#D8BA83] to-[#B9A7F5]',
    },
  ];

  return (
    <section id="features" className="py-24 relative bg-[#0B0F19] overflow-hidden border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-[#B9A7F5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#B9A7F5] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>SECTION 03 / CAPABILITIES</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-[#F8F5EF] max-w-3xl leading-tight">
            Architected for <span className="text-gradient-lavender">Unprecedented</span> Visual Power.
          </h2>
          <p className="text-base text-[#F8F5EF]/70 max-w-2xl mt-4 font-light">
            Every capability is built from scratch with GPU-bound rendering pipelines, tactile glass materials, and mathematical precision.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {featureCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 rounded-3xl relative group flex flex-col justify-between overflow-hidden"
            >
              {/* Card Top Icon & Badge */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-[#D8BA83] group-hover:bg-[#D8BA83] group-hover:text-[#101828] transition-all duration-300">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[10px] text-[#B9A7F5] px-2.5 py-1 rounded-full bg-[#B9A7F5]/10 border border-[#B9A7F5]/20">
                    {card.tag}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-xl text-[#F8F5EF] mb-3 group-hover:text-[#D8BA83] transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs text-[#F8F5EF]/70 leading-relaxed font-light">
                  {card.description}
                </p>
              </div>

              {/* Glowing Corner Subtle Border */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#F8F5EF]/50">
                <span>MODULE 0{idx + 1}</span>
                <span className="text-[#D8BA83] opacity-0 group-hover:opacity-100 transition-opacity">✦ ACTIVE</span>
              </div>

              {/* Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D8BA83]/5 to-[#B9A7F5]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Interactive 3D WebGL Shader Sandbox Studio */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#D8BA83]/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sandbox Controls Left */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D8BA83]/10 border border-[#D8BA83]/30 text-[11px] font-mono text-[#D8BA83] mb-4">
                <Sliders className="w-3.5 h-3.5" />
                <span>INTERACTIVE SHADER SANDBOX</span>
              </div>

              <h3 className="font-syne font-bold text-2xl sm:text-3xl text-[#F8F5EF] mb-3">
                Live Geometry & Material Lab
              </h3>

              <p className="text-xs sm:text-sm text-[#F8F5EF]/70 font-light mb-6">
                Test the real-time WebGL renderer directly. Modify parameters below to see instantaneous sub-millisecond shader adaptations.
              </p>

              <div className="w-full space-y-5">
                {/* Geometry Selector */}
                <div>
                  <label className="block font-mono text-[11px] text-[#B9A7F5] uppercase tracking-wider mb-2">
                    Geometry Mesh
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'torusKnot', label: 'Torus Knot' },
                      { id: 'icosahedron', label: 'Icosahedron' },
                      { id: 'octahedron', label: 'Octahedron' },
                      { id: 'torus', label: 'Torus Ring' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setGeometry(item.id as any)}
                        className={`px-3 py-2 rounded-xl text-xs font-mono border transition-all ${
                          geometry === item.id
                            ? 'bg-[#D8BA83] text-[#101828] border-[#D8BA83] font-bold'
                            : 'bg-white/5 text-[#F8F5EF]/80 border-white/10 hover:border-white/30'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Theme Selector */}
                <div>
                  <label className="block font-mono text-[11px] text-[#B9A7F5] uppercase tracking-wider mb-2">
                    Material Refraction
                  </label>
                  <div className="flex gap-2">
                    {[
                      { id: 'gold', label: 'Champagne Gold', color: '#D8BA83' },
                      { id: 'lavender', label: 'Soft Lavender', color: '#B9A7F5' },
                      { id: 'pure', label: 'Warm Ivory', color: '#F8F5EF' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setColorTheme(item.id as any)}
                        className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono flex items-center justify-center gap-2 border transition-all ${
                          colorTheme === item.id
                            ? 'bg-white/15 border-[#D8BA83] text-[#F8F5EF] font-bold'
                            : 'bg-white/5 border-white/10 text-[#F8F5EF]/60 hover:text-[#F8F5EF]'
                        }`}
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span>{item.id}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Speed Slider & Wireframe Toggle */}
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div>
                    <label className="block font-mono text-[11px] text-[#B9A7F5] uppercase tracking-wider mb-1">
                      Rotation Speed ({speed}x)
                    </label>
                    <input
                      type="range"
                      min="0.2"
                      max="3"
                      step="0.2"
                      value={speed}
                      onChange={(e) => setSpeed(parseFloat(e.target.value))}
                      className="w-full accent-[#D8BA83] cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-[#B9A7F5] uppercase tracking-wider mb-1">
                      Display Wireframe
                    </label>
                    <button
                      onClick={() => setWireframe(!wireframe)}
                      className={`w-full py-2 px-3 rounded-xl text-xs font-mono border transition-all ${
                        wireframe
                          ? 'bg-[#B9A7F5] text-[#101828] border-[#B9A7F5] font-bold'
                          : 'bg-white/5 border-white/10 text-[#F8F5EF]/80'
                      }`}
                    >
                      {wireframe ? 'ON (Polygon Mesh)' : 'OFF (Physical Shader)'}
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Live Render Canvas Viewport Right */}
            <div className="lg:col-span-7 h-[380px] sm:h-[420px] rounded-2xl bg-[#0B0F19] border border-white/15 relative overflow-hidden flex flex-col justify-between p-4">
              
              {/* Canvas Bar overlay */}
              <div className="flex items-center justify-between z-20">
                <div className="flex items-center gap-2 font-mono text-[10px] text-[#D8BA83]">
                  <span className="w-2 h-2 rounded-full bg-[#D8BA83] animate-ping" />
                  <span>VIEWPORT // GPU RENDERER ACTIVE</span>
                </div>
                <div className="font-mono text-[10px] text-[#F8F5EF]/50">
                  SHADERS: GLSL 3.0 • CLEARCOAT: 1.0
                </div>
              </div>

              {/* 3D WebGL Canvas */}
              <div className="absolute inset-0 z-10">
                <ThreeDCanvas
                  interactive={true}
                  meshType={geometry}
                  colorTheme={colorTheme}
                  speedMultiplier={speed}
                  wireframe={wireframe}
                />
              </div>

              {/* Bottom Canvas Stats overlay */}
              <div className="z-20 flex justify-between items-center text-[10px] font-mono text-[#F8F5EF]/60 glass-panel p-2.5 rounded-xl border border-white/10">
                <span>FPS: 120 • TRIANGLES: 8,192</span>
                <span className="text-[#D8BA83]">✦ DRAG MOUSE TO ROTATE</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Layers, Sparkles, X, Maximize2, Tag, Calendar, ShieldCheck, Box } from 'lucide-react';
import { GALLERY_ITEMS } from '../assets/images';

export const Showcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const categories = ['All', '3D WebGL', 'Monoliths', 'Quantum Spheres', 'Prismatic'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="showcase" className="py-24 relative bg-[#0B0F19] overflow-hidden border-t border-white/5">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#D8BA83]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D8BA83] mb-4">
            <Eye className="w-3.5 h-3.5" />
            <span>SECTION 04 / PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-[#F8F5EF] max-w-3xl leading-tight">
            Curated <span className="text-gradient-gold">Spatial Masterpieces</span>.
          </h2>
          <p className="text-base text-[#F8F5EF]/70 max-w-2xl mt-4 font-light">
            Every piece is an original 3D spatial artifact engineered with custom light refractions, zero humans, and zero generic assets.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#D8BA83] to-[#B9A7F5] text-[#101828] font-bold shadow-lg shadow-[#D8BA83]/20'
                  : 'glass-panel text-[#F8F5EF]/70 hover:text-[#F8F5EF] hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-3xl overflow-hidden glass-card cursor-pointer border border-white/10 hover:border-[#D8BA83]/50 transition-all duration-500"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#101828]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="px-3 py-1 rounded-full glass-panel text-[10px] font-mono text-[#D8BA83] border border-[#D8BA83]/30">
                      {item.tag}
                    </span>
                  </div>

                  {/* Center Zoom Icon on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="p-4 rounded-full bg-[#D8BA83] text-[#101828] shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-syne font-bold text-xl text-[#F8F5EF] group-hover:text-[#D8BA83] transition-colors">
                      {item.title}
                    </h3>
                    <span className="font-mono text-[11px] text-[#B9A7F5]">{item.year}</span>
                  </div>
                  <p className="text-xs text-[#F8F5EF]/70 font-light line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#F8F5EF]/50">
                    <span>{item.dimensions}</span>
                    <span className="text-[#D8BA83] font-semibold group-hover:translate-x-1 transition-transform">
                      Inspect ➔
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B0F19]/90 backdrop-blur-2xl"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl glass-panel rounded-3xl border border-[#D8BA83]/40 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col lg:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#D8BA83] hover:text-[#101828] transition-colors border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image View Left */}
              <div className="lg:w-3/5 bg-black relative flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain max-h-[70vh]"
                />
              </div>

              {/* Details Column Right */}
              <div className="lg:w-2/5 p-8 flex flex-col justify-between bg-[#101828]/90 overflow-y-auto">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#D8BA83] mb-3">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{selectedItem.category} // {selectedItem.tag}</span>
                  </div>

                  <h3 className="font-syne font-bold text-3xl text-[#F8F5EF] mb-4">
                    {selectedItem.title}
                  </h3>

                  <p className="text-sm text-[#F8F5EF]/80 font-light leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>

                  <div className="space-y-4 pt-6 border-t border-white/10">
                    <div>
                      <div className="font-mono text-[11px] text-[#B9A7F5] uppercase mb-1">
                        Materials & Optics
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedItem.materials.map((mat) => (
                          <span
                            key={mat}
                            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-[#F8F5EF]"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="font-mono text-[11px] text-[#B9A7F5] uppercase mb-1">
                        Render Output Specifications
                      </div>
                      <div className="text-xs text-[#F8F5EF]/70 font-mono">
                        {selectedItem.dimensions}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#D8BA83]">✦ AETHERIA 2026 ARCHIVE</span>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-5 py-2 rounded-full bg-[#D8BA83] text-[#101828] text-xs font-bold hover:brightness-110"
                  >
                    Close Inspection
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

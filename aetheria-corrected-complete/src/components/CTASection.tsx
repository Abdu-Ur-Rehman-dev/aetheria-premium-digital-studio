import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Mail, Compass } from 'lucide-react';

interface CTASectionProps {
  onOpenConfigurator: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenConfigurator }) => {
  return (
    <section className="py-28 relative bg-[#0B0F19] overflow-hidden border-t border-white/5">
      {/* Background Radial Light Beams & Glowing Orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(216,186,131,0.25),rgba(255,255,255,0))]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-t from-[#B9A7F5]/20 via-[#D8BA83]/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs font-mono text-[#D8BA83] mb-6 border border-[#D8BA83]/30 shadow-[0_0_30px_rgba(216,186,131,0.2)]"
        >
          <Sparkles className="w-4 h-4 text-[#D8BA83] animate-spin-slow" />
          <span>SECTION 06 / INITIATE ENGAGEMENT</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-syne font-extrabold text-4xl sm:text-6xl text-[#F8F5EF] leading-[1.1] mb-6 tracking-tight"
        >
          Ready to Architect Your <br />
          <span className="text-gradient-gold">Digital Monument?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-base sm:text-lg text-[#F8F5EF]/70 max-w-2xl mx-auto font-light leading-relaxed mb-10"
        >
          Join an elite roster of global visionaries. We take on a strictly limited number of bespoke commissions per quarter to ensure uncompromising craftsmanship.
        </motion.p>

        {/* Primary Interactive CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenConfigurator}
            className="group relative px-9 py-5 rounded-full bg-gradient-to-r from-[#D8BA83] via-[#F8F5EF] to-[#B9A7F5] text-[#101828] font-extrabold text-sm tracking-wider uppercase shadow-[0_15px_45px_rgba(216,186,131,0.35)] hover:shadow-[0_20px_60px_rgba(216,186,131,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3"
          >
            <Compass className="w-4 h-4 text-[#101828]" />
            <span>Launch Interactive Brief</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </motion.div>

        {/* Sub-note */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-mono text-[11px] text-[#F8F5EF]/50">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D8BA83]" />
            Strict Confidentiality & IP Transfer
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#B9A7F5]" />
            Direct Atelier Partner Access
          </span>
        </div>

      </div>
    </section>
  );
};

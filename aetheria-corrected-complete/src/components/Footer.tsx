import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Send, CheckCircle2, Globe, Shield, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  return (
    <footer className="bg-[#080B12] text-[#F8F5EF] pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D8BA83]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D8BA83] to-[#B9A7F5] p-[1px] shadow-[0_0_20px_rgba(216,186,131,0.3)]">
                <div className="w-full h-full bg-[#0B0F19] rounded-full flex items-center justify-center">
                  <span className="font-syne font-extrabold text-base text-[#D8BA83]">Æ</span>
                </div>
              </div>
              <span className="font-syne font-bold text-2xl tracking-widest text-[#F8F5EF]">
                AETHERIA
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#F8F5EF]/70 font-light leading-relaxed max-w-md mb-6">
              A premier spatial web architecture atelier. Designing digital monuments, 3D WebGL experiences, and mathematical visual systems for industry pioneers.
            </p>

            {/* System Status Node */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#D8BA83]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>NODES OPERATIONAL: TOKYO / LONDON / NYC</span>
            </div>
          </div>

          {/* Nav Links Col */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div>
              <div className="font-mono text-xs uppercase text-[#B9A7F5] tracking-wider mb-4 font-semibold">
                Navigation
              </div>
              <ul className="space-y-2.5 text-xs text-[#F8F5EF]/70 font-light">
                <li><a href="#hero" className="hover:text-[#D8BA83] transition-colors">Overview</a></li>
                <li><a href="#about" className="hover:text-[#D8BA83] transition-colors">Philosophy</a></li>
                <li><a href="#features" className="hover:text-[#D8BA83] transition-colors">Capabilities</a></li>
                <li><a href="#showcase" className="hover:text-[#D8BA83] transition-colors">Portfolio Gallery</a></li>
                <li><a href="#why-us" className="hover:text-[#D8BA83] transition-colors">Why Choose Us</a></li>
              </ul>
            </div>

            <div>
              <div className="font-mono text-xs uppercase text-[#B9A7F5] tracking-wider mb-4 font-semibold">
                Architecture
              </div>
              <ul className="space-y-2.5 text-xs text-[#F8F5EF]/70 font-light">
                <li><span className="text-[#F8F5EF]">WebGL 2.0 Engine</span></li>
                <li><span className="text-[#F8F5EF]">GLSL Ray-Tracing</span></li>
                <li><span className="text-[#F8F5EF]">Glassmorphic CSS</span></li>
                <li><span className="text-[#F8F5EF]">120 FPS Framerate</span></li>
                <li><span className="text-[#F8F5EF]">Zero Human Imagery</span></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-4">
            <div className="font-mono text-xs uppercase text-[#B9A7F5] tracking-wider mb-4 font-semibold">
              Spatial Gazette Dispatch
            </div>
            <p className="text-xs text-[#F8F5EF]/70 font-light mb-4">
              Receive quarterly insights on WebGL graphics, spatial web design, and digital luxury trends.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="executive@atelier.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full py-3 pl-4 pr-12 rounded-xl bg-white/5 border border-white/10 text-xs text-[#F8F5EF] placeholder:text-white/30 focus:outline-none focus:border-[#D8BA83]"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-[#D8BA83] text-[#101828] hover:brightness-110 transition-all flex items-center justify-center"
                  aria-label="Subscribe to Gazette"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <div className="text-[11px] font-mono text-[#D8BA83] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed to quarterly spatial dispatch.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F8F5EF]/50">
          <div>
            © {new Date().getFullYear()} AETHERIA SPATIAL STUDIO. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span>TERMS & CONFIDENTIALITY</span>
            <span>IP GUARANTEE</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#D8BA83] hover:text-[#101828] text-[#F8F5EF] transition-all"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

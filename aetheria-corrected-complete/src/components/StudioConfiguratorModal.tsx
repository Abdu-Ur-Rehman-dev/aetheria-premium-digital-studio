import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Clock, Layers, Send } from 'lucide-react';

interface StudioConfiguratorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudioConfiguratorModal: React.FC<StudioConfiguratorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<number>(1);
  const [projectType, setProjectType] = useState<string>('Spatial Web Architecture');
  const [budget, setBudget] = useState<string>('$30,000 - $60,000');
  const [aesthetic, setAesthetic] = useState<string>('Midnight Navy & Champagne Gold');
  const [timeline, setTimeline] = useState<string>('4 - 6 Weeks');
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const projectTypes = [
    { title: 'Spatial Web Architecture', desc: 'Bespoke 3D WebGL flagship website with custom GLSL shaders' },
    { title: 'Quantum Design System', desc: 'Comprehensive component library, token math, & glass visual identity' },
    { title: 'Generative Brand Dynamics', desc: 'Algorithmic 3D assets, fluid logo motion, & spatial marketing' },
    { title: 'Interactive Product Experience', desc: 'High-fidelity 3D configurator, real-time lighting, & WebGL engine' },
  ];

  const aesthetics = [
    { title: 'Midnight Navy & Champagne Gold', color: 'from-[#101828] to-[#D8BA83]' },
    { title: 'Obsidian & Cyber Lavender', color: 'from-[#0B0F19] to-[#B9A7F5]' },
    { title: 'Pure Minimal Warm Ivory', color: 'from-[#F8F5EF] to-[#D8BA83]' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    setEmail('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B0F19]/90 backdrop-blur-2xl">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-3xl glass-panel p-6 sm:p-10 rounded-3xl border border-[#D8BA83]/40 shadow-2xl overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-[#F8F5EF] hover:bg-[#D8BA83] hover:text-[#101828] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D8BA83]/10 border border-[#D8BA83]/30 text-xs font-mono text-[#D8BA83] mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>STEP 0{step} OF 03 // BESPOKE BRIEF BUILDER</span>
                </div>
                <h3 className="font-syne font-bold text-2xl sm:text-3xl text-[#F8F5EF]">
                  Architect Your Vision With Aetheria
                </h3>
                <p className="text-xs sm:text-sm text-[#F8F5EF]/70 font-light mt-1">
                  Configure your project parameters to receive a custom spatial scope proposal within 24 hours.
                </p>
              </div>

              {/* Step 1: Project Type & Scope */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block font-mono text-xs text-[#B9A7F5] uppercase tracking-wider mb-3">
                      Select Project Type
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {projectTypes.map((pt) => (
                        <div
                          key={pt.title}
                          onClick={() => setProjectType(pt.title)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                            projectType === pt.title
                              ? 'bg-[#D8BA83]/15 border-[#D8BA83] text-[#F8F5EF]'
                              : 'bg-white/5 border-white/10 text-[#F8F5EF]/70 hover:border-white/30'
                          }`}
                        >
                          <div className="font-syne font-bold text-sm text-[#F8F5EF] mb-1">
                            {pt.title}
                          </div>
                          <p className="text-[11px] text-[#F8F5EF]/60 leading-tight font-light">
                            {pt.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4 border-t border-white/10">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-full bg-[#D8BA83] text-[#101828] font-bold text-xs flex items-center gap-2 hover:brightness-110"
                    >
                      <span>Proceed To Aesthetic & Budget</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Aesthetic & Budget */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block font-mono text-xs text-[#B9A7F5] uppercase tracking-wider mb-3">
                      Desired Visual Palette & Vibe
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {aesthetics.map((aes) => (
                        <div
                          key={aes.title}
                          onClick={() => setAesthetic(aes.title)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                            aesthetic === aes.title
                              ? 'bg-[#D8BA83]/15 border-[#D8BA83]'
                              : 'bg-white/5 border-white/10 hover:border-white/30'
                          }`}
                        >
                          <div className={`w-full h-3 rounded-full bg-gradient-to-r ${aes.color} mb-3`} />
                          <div className="font-syne font-semibold text-xs text-[#F8F5EF]">
                            {aes.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-[#B9A7F5] uppercase tracking-wider mb-2">
                        Target Budget Scope
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full p-3 rounded-xl bg-[#101828] border border-white/15 text-xs text-[#F8F5EF] focus:outline-none focus:border-[#D8BA83]"
                      >
                        <option value="$20,000 - $35,000">$20,000 - $35,000 (Essential Monument)</option>
                        <option value="$35,000 - $65,000">$35,000 - $65,000 (Flagship Spatial WebGL)</option>
                        <option value="$65,000 - $120,000+">$65,000 - $120,000+ (Full Brand Ecosystem)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-[#B9A7F5] uppercase tracking-wider mb-2">
                        Estimated Launch Window
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full p-3 rounded-xl bg-[#101828] border border-white/15 text-xs text-[#F8F5EF] focus:outline-none focus:border-[#D8BA83]"
                      >
                        <option value="3 - 4 Weeks">3 - 4 Weeks (Expedited)</option>
                        <option value="4 - 6 Weeks">4 - 6 Weeks (Standard Atelier)</option>
                        <option value="8+ Weeks">8+ Weeks (Deep Ecosystem)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <button
                      onClick={() => setStep(1)}
                      className="px-4 py-2 text-xs font-mono text-[#F8F5EF]/70 hover:text-[#F8F5EF]"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="px-6 py-3 rounded-full bg-[#D8BA83] text-[#101828] font-bold text-xs flex items-center gap-2 hover:brightness-110"
                    >
                      <span>Finalize Proposal Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact & Submission */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Summary Card */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 font-mono text-xs">
                    <div className="flex justify-between text-[#D8BA83]">
                      <span>Project:</span>
                      <span className="text-[#F8F5EF] font-bold">{projectType}</span>
                    </div>
                    <div className="flex justify-between text-[#D8BA83]">
                      <span>Palette:</span>
                      <span className="text-[#F8F5EF]">{aesthetic}</span>
                    </div>
                    <div className="flex justify-between text-[#D8BA83]">
                      <span>Budget Scope:</span>
                      <span className="text-[#F8F5EF]">{budget}</span>
                    </div>
                    <div className="flex justify-between text-[#D8BA83]">
                      <span>Timeline:</span>
                      <span className="text-[#F8F5EF]">{timeline}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#B9A7F5] uppercase tracking-wider mb-2">
                      Work Email / Contact Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="founder@visionarybrand.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-4 rounded-xl bg-[#101828] border border-white/15 text-sm text-[#F8F5EF] placeholder:text-white/30 focus:outline-none focus:border-[#D8BA83]"
                    />
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2 text-xs font-mono text-[#F8F5EF]/70 hover:text-[#F8F5EF]"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D8BA83] to-[#B9A7F5] text-[#101828] font-bold text-xs flex items-center gap-2 hover:brightness-110 shadow-lg shadow-[#D8BA83]/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Bespoke Brief</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Success View */
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#D8BA83]/20 border border-[#D8BA83] text-[#D8BA83] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-syne font-extrabold text-3xl text-[#F8F5EF]">
                Brief Transmitted Successfully
              </h3>

              <p className="text-sm text-[#F8F5EF]/80 max-w-md mx-auto font-light leading-relaxed">
                Thank you. Our lead spatial architect will analyze your brief (<span className="text-[#D8BA83] font-mono">{email}</span>) and respond with a detailed interactive scope within 24 hours.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-8 py-3 rounded-full bg-[#D8BA83] text-[#101828] font-bold text-xs hover:brightness-110"
                >
                  Return To Experience
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, ArrowUpRight, Compass, Layers, Eye, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenConfigurator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConfigurator }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 40);
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);

      const sections = ['hero', 'about', 'features', 'showcase', 'why-us'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero', id: 'hero', icon: Compass },
    { name: 'Philosophy', href: '#about', id: 'about', icon: Sparkles },
    { name: 'Capabilities', href: '#features', id: 'features', icon: Layers },
    { name: 'Gallery', href: '#showcase', id: 'showcase', icon: Eye },
    { name: 'Excellence', href: '#why-us', id: 'why-us', icon: ShieldCheck },
  ];

  return (
    <>
      {/* Scroll Progress Bar Top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-[#101828] z-50">
        <div
          className="h-full bg-gradient-to-r from-[#B9A7F5] via-[#D8BA83] to-[#F8F5EF] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
              scrolled
                ? 'bg-[#0B0F19]/80 backdrop-blur-xl border border-[#D8BA83]/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                : 'bg-[#101828]/40 backdrop-blur-md border border-white/10'
            }`}
          >
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-3 group relative cursor-pointer"
            >
              <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-[#D8BA83] via-[#B9A7F5] to-[#F8F5EF] p-[1px] shadow-[0_0_15px_rgba(216,186,131,0.3)]">
                <div className="w-full h-full bg-[#0B0F19] rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-95">
                  <span className="font-syne font-extrabold text-sm text-[#D8BA83] tracking-wider group-hover:text-[#F8F5EF] transition-colors">
                    Æ
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-syne font-bold text-lg tracking-widest text-[#F8F5EF] group-hover:text-[#D8BA83] transition-colors">
                  AETHERIA
                </span>
                <span className="font-mono text-[9px] text-[#B9A7F5] tracking-widest uppercase opacity-80 -mt-1">
                  Spatial Studio
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-[#101828]/60 p-1 rounded-full border border-white/5 backdrop-blur-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-[#F8F5EF] font-semibold'
                        : 'text-[#F8F5EF]/70 hover:text-[#D8BA83]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-gradient-to-r from-[#D8BA83]/20 to-[#B9A7F5]/20 rounded-full border border-[#D8BA83]/30"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <link.icon className="w-3.5 h-3.5 text-[#D8BA83]/80" />
                      {link.name}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenConfigurator}
                className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#D8BA83] via-[#B9A7F5] to-[#D8BA83] rounded-full animate-shine" />
                <span className="relative px-5 py-2 rounded-full bg-[#0B0F19] text-xs font-semibold text-[#F8F5EF] flex items-center gap-2 transition-transform duration-300 group-hover:bg-[#101828]">
                  <span>Initiate Brief</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D8BA83] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-[#F8F5EF] hover:text-[#D8BA83] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-30 px-4 md:hidden"
          >
            <div className="glass-panel rounded-3xl p-6 border border-[#D8BA83]/30 shadow-2xl flex flex-col gap-4">
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <span className="font-mono text-xs text-[#B9A7F5] uppercase tracking-wider">
                  Menu Navigation
                </span>
                <span className="font-mono text-[10px] text-[#D8BA83] bg-[#D8BA83]/10 px-2 py-0.5 rounded">
                  ✦ Live Node
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5 text-sm font-medium text-[#F8F5EF] hover:bg-[#D8BA83]/10 hover:text-[#D8BA83] transition-all"
                  >
                    <span className="flex items-center gap-3">
                      <link.icon className="w-4 h-4 text-[#D8BA83]" />
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/40" />
                  </a>
                ))}
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConfigurator();
                }}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#D8BA83] to-[#B9A7F5] text-[#101828] font-bold text-sm tracking-wide shadow-lg shadow-[#D8BA83]/20 hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Initiate Bespoke Brief</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

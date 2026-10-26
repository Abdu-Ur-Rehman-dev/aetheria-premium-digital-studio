import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Showcase } from './components/Showcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { StudioConfiguratorModal } from './components/StudioConfiguratorModal';

export default function App() {
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);

  const handleOpenConfigurator = () => setIsConfiguratorOpen(true);
  const handleCloseConfigurator = () => setIsConfiguratorOpen(false);

  const handleExploreGallery = () => {
    const galleryEl = document.getElementById('showcase');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F8F5EF] relative selection:bg-[#B9A7F5]/30 selection:text-[#D8BA83] font-sans">
      {/* Custom Interactive Cursor */}
      <CustomCursor />

      {/* Floating Navigation Header */}
      <Navbar onOpenConfigurator={handleOpenConfigurator} />

      {/* Main Page Content */}
      <main>
        {/* Section 1: Hero */}
        <Hero
          onOpenConfigurator={handleOpenConfigurator}
          onExploreGallery={handleExploreGallery}
        />

        {/* Section 2: About */}
        <About />

        {/* Section 3: Features & Live 3D Shader Sandbox */}
        <Features />

        {/* Section 4: Showcase Portfolio Gallery */}
        <Showcase />

        {/* Section 5: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 6: Call To Action */}
        <CTASection onOpenConfigurator={handleOpenConfigurator} />
      </main>

      {/* Section 7: Footer */}
      <Footer />

      {/* Interactive Bespoke Brief Modal */}
      <StudioConfiguratorModal
        isOpen={isConfiguratorOpen}
        onClose={handleCloseConfigurator}
      />
    </div>
  );
}

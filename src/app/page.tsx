'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { SelectedWorkSection } from '@/components/SelectedWorkSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { AboutSection } from '@/components/AboutSection';
import { EducationSection } from '@/components/EducationSection';
import { BlogSection } from '@/components/BlogSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { InteractiveTerminal } from '@/components/InteractiveTerminal';
import { HireModal } from '@/components/HireModal';
import { CommandPalette } from '@/components/CommandPalette';

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleOpenPalette = () => setCommandPaletteOpen(true);
    window.addEventListener('open-command-palette', handleOpenPalette);
    return () => window.removeEventListener('open-command-palette', handleOpenPalette);
  }, []);

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Navigation Header */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenHireModal={() => setHireModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenHireModal={() => setHireModalOpen(true)}
      />

      {/* Services Section (WHAT I DO) */}
      <ServicesSection />

      {/* Selected Work Section (PORTFOLIO) */}
      <SelectedWorkSection />

      {/* Experience Section (CAREER JOURNEY) */}
      <ExperienceSection />

      {/* Education Section (ACADEMIC CREDENTIALS) */}
      <EducationSection />

      {/* About Section (ABOUT ME) */}
      <AboutSection />

      {/* Blog Section (THOUGHTS) */}
      <BlogSection />

      {/* Contact Section (GET IN TOUCH) */}
      <ContactSection />

      {/* Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Interactive CLI Terminal */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenHireModal={() => {
          setTerminalOpen(false);
          setHireModalOpen(true);
        }}
      />

      {/* Senior Consultation / Hire Modal */}
      <HireModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
      />

      {/* Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenHireModal={() => setHireModalOpen(true)}
      />
    </main>
  );
}

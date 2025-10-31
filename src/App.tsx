import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Header } from './components/Header';
import { HeroSection } from './components/sections/HeroSection';
import { ScheduleSection } from './components/sections/ScheduleSection';
import { RouteSection } from './components/sections/RouteSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { OfficesSection } from './components/sections/OfficesSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-comarapa-white font-inter">
      <Analytics />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <ScheduleSection />
      <RouteSection />
      <ServicesSection />
      <TestimonialsSection />
      <OfficesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

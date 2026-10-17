import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Schedules from './components/Schedules';
import RouteMap from './components/RouteMap';
import Services from './components/Services';
import TestimonialsSlider from './components/TestimonialsSlider';
import Offices from './components/Offices';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter text-slate-900 antialiased">
      <Analytics />
      <a href="#horarios" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink focus:shadow-lg">
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <Schedules />
        <RouteMap />
        <Services />
        <TestimonialsSlider />
        <Offices />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;

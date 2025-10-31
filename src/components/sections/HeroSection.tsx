import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Award, Globe, Leaf, ArrowRight } from 'lucide-react';
import { heroImages, stats } from '@/constants';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    MapPin,
    Award,
    Globe
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 sm:pt-20 md:pt-24 overflow-hidden">
      {/* Background slider */}
      <div className="absolute inset-0 w-full h-full z-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 comarapa-gradient opacity-80"></div>
      </div>
      
      {/* Geometric pattern */}
      <div className="absolute inset-0 opacity-10 z-[5]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20l10-10v20l-10-10z'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Slider indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
              index === currentSlide 
                ? 'bg-white shadow-lg scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8">
            <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-comarapa-light" />
            <span className="text-xs sm:text-sm font-medium">Transporte Regional de Comarapa</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Unimos tus destinos en los
            <span className="text-comarapa-light"> Valles cruceños</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed px-4">
            Trazamos la ruta que te importa. Desde el corazón de Comarapa hasta el dinamismo de Santa Cruz, tejemos una red que une 23 localidades.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg sm:max-w-none mx-auto">
            <a 
              href="#horarios" 
              className="bg-white text-comarapa-dark border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-comarapa-light hover:border-comarapa-light hover:shadow-lg transform hover:-translate-y-1 flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base"
              style={{ minHeight: '44px' }}
            >
              <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
              Ver Horarios
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a 
              href="https://wa.me/59168921188" 
              className="bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto justify-center text-sm sm:text-base"
              style={{ minHeight: '44px' }}
            >
              <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              Reservar WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = iconMap[stat.icon];
              return (
                <div key={index} className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-2 sm:mb-3 inline-flex">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-white/80 leading-tight">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

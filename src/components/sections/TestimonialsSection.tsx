import React from 'react';
import { Star } from 'lucide-react';
import TestimonialsSlider from '../TestimonialsSlider';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonios" className="py-24 bg-comarapa-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-comarapa-light/20 px-4 py-2 rounded-full mb-4">
            <Star className="h-5 w-5 text-comarapa-light" />
            <span className="text-comarapa-light font-medium">Testimonios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lo que dicen nuestros <span className="text-comarapa-light">clientes</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Más de 20 años construyendo confianza con nuestros pasajeros
          </p>
        </div>

        <TestimonialsSlider />
      </div>
    </section>
  );
};

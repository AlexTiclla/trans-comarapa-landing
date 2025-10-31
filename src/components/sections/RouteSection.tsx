import React from 'react';
import { Navigation, Clock, MapPin, Shield } from 'lucide-react';
import RouteMap from '../RouteMap';
import { routeInfo } from '@/constants';

export const RouteSection: React.FC = () => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Clock,
    MapPin,
    Shield
  };

  return (
    <section id="rutas" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-comarapa-light/20 px-3 sm:px-4 py-2 rounded-full mb-4">
            <Navigation className="h-4 w-4 sm:h-5 sm:w-5 text-comarapa-dark" />
            <span className="text-comarapa-dark font-medium text-sm sm:text-base">Nuestra Ruta</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-comarapa-dark mb-4 sm:mb-6">
            Conectamos 23 Localidades
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un recorrido completo desde Comarapa hasta Santa Cruz por el hermoso paisaje del Valle
          </p>
        </div>

        <RouteMap />

        {/* Route info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {routeInfo.map((info, index) => {
            const Icon = iconMap[info.icon];
            return (
              <div key={index} className="text-center">
                <div className="bg-comarapa-light/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-comarapa-dark" />
                </div>
                <h3 className="text-xl font-bold text-comarapa-dark mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

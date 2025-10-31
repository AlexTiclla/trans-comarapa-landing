import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { offices } from '@/constants';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const OfficesSection: React.FC = () => {
  const getIconForCity = (city: string) => {
    if (city === "San Isidro") return Navigation;
    return MapPin;
  };

  return (
    <section id="oficinas" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-comarapa-light/20 px-4 py-2 rounded-full mb-4">
            <MapPin className="h-5 w-5 text-comarapa-dark" />
            <span className="text-comarapa-dark font-medium">Nuestras Oficinas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-comarapa-dark mb-6">
            Te Atendemos en 4 Ubicaciones
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encuentra nuestra oficina más cercana para reservas y consultas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offices.map((office) => {
            const Icon = getIconForCity(office.city);
            return (
              <div key={office.city} className="comarapa-card p-6 group">
                <div className={`bg-gradient-to-br ${office.gradient} rounded-xl p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-comarapa-dark text-center mb-4">{office.city}</h3>
                <div className="space-y-3 text-center mb-6">
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{office.location}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm font-medium">{office.phone.replace('591', '')}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{office.hours}</span>
                  </div>
                </div>
                <a 
                  href={`https://wa.me/${office.phone}`} 
                  className="w-full bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

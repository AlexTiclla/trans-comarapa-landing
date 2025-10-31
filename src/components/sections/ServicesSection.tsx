import React from 'react';
import { Package, Users, Truck, CheckCircle, Briefcase, Heart, PartyPopper, GraduationCap, Church, Shield } from 'lucide-react';
import { passengerFeatures, packageFeatures, customTrips } from '@/constants';

export const ServicesSection: React.FC = () => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Briefcase,
    Heart,
    PartyPopper,
    GraduationCap,
    Church,
    Shield
  };

  return (
    <section id="servicios" className="py-24 bg-comarapa-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-comarapa-light/20 px-4 py-2 rounded-full mb-4">
            <Package className="h-5 w-5 text-comarapa-dark" />
            <span className="text-comarapa-dark font-medium">Nuestros Servicios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-comarapa-dark mb-6">
            Soluciones Integrales de Transporte
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Servicios completos para todas tus necesidades de viaje y envío
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Transporte de Pasajeros */}
          <div className="comarapa-card p-8 bg-gradient-to-br from-comarapa-dark/5 to-comarapa-medium/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-br from-comarapa-dark to-comarapa-medium rounded-2xl p-4 shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-comarapa-dark">Transporte de Pasajeros</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-4">
                {passengerFeatures.slice(0, 4).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-comarapa-medium mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {passengerFeatures.slice(4).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-comarapa-medium mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Envío de Encomiendas */}
          <div className="comarapa-card p-8 bg-gradient-to-br from-comarapa-light/10 to-green-100/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-br from-comarapa-medium to-comarapa-light rounded-2xl p-4 shadow-lg">
                <Package className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-comarapa-dark">Envío de Encomiendas</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-4">
                {packageFeatures.slice(0, 4).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-comarapa-medium mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {packageFeatures.slice(4).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-comarapa-medium mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Viajes Personalizados */}
        <div className="comarapa-card p-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-br from-comarapa-dark to-comarapa-light rounded-2xl p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
              <Truck className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-comarapa-dark mb-4">Viajes Personalizados</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Servicios especiales para eventos y ocasiones importantes
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {customTrips.map((service, index) => {
              const Icon = iconMap[service.title.replace(' ', '')] || Shield;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`h-6 w-6 text-${service.color}-600`} />
                    <h4 className="text-lg font-bold text-gray-900">{service.title}</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

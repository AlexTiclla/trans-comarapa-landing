import React from 'react';
import { MessageCircle, Phone, Shield } from 'lucide-react';
import { offices } from '@/constants';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-comarapa-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-comarapa-light/20 px-4 py-2 rounded-full mb-4">
            <MessageCircle className="h-5 w-5 text-comarapa-dark" />
            <span className="text-comarapa-dark font-medium">Contacto</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-comarapa-dark mb-6">
            Estamos Aquí para Ayudarte
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Atención personalizada en horarios de oficina
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="comarapa-card p-8 comarapa-gradient text-white">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-8">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-lg p-3">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">Teléfonos principales:</p>
                      <p className="text-white/90">Santa Cruz: 68921188 | Comarapa: 68921154</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-lg p-3">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">WhatsApp:</p>
                      <p className="text-white/90">Disponible en horarios de oficina</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-lg p-3">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">Atención al cliente:</p>
                      <p className="text-white/90">Respuesta rápida en horarios de oficina</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-8">Reserva Inmediata</h3>
                <div className="space-y-6">
                  <p className="text-white/90 text-lg">
                    Contáctanos por WhatsApp para reservar tu asiento de manera fácil y rápida.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {offices.map((office) => (
                      <a 
                        key={office.city}
                        href={`https://wa.me/${office.phone}`} 
                        className="bg-green-500 hover:bg-green-600 px-4 py-4 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                      >
                        <WhatsAppIcon />
                        {office.city}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

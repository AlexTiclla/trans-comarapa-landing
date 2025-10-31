import React from 'react';
import { Clock, Sun, Moon, MapPin, Navigation } from 'lucide-react';
import { schedules, offices } from '@/constants';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const ScheduleSection: React.FC = () => {
  return (
    <section id="horarios" className="py-16 sm:py-20 md:py-24 bg-comarapa-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-comarapa-light/20 px-3 sm:px-4 py-2 rounded-full mb-4">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-comarapa-dark" />
            <span className="text-comarapa-dark font-medium text-sm sm:text-base">Horarios de Salida</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-comarapa-dark mb-4 sm:mb-6">
            Salidas Diarias Programadas
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conectamos 23 localidades con horarios confiables y puntuales
          </p>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {/* Comarapa a Santa Cruz */}
          <div className="comarapa-card p-4 sm:p-6 md:p-8 border-t-4 border-comarapa-dark">
            <div className="text-center mb-6 sm:mb-8">
              <div className="bg-gradient-to-br from-comarapa-dark to-comarapa-medium rounded-full p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
                <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-comarapa-dark mb-2">Comarapa ➡️ Santa Cruz</h3>
              <p className="text-sm sm:text-base text-gray-600 font-medium">Ruta completa (23 paradas)</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {schedules.comarapaToSantaCruz.map(({hora, tipo}) => (
                <div key={hora} className="flex items-center justify-between bg-comarapa-gray p-3 sm:p-4 rounded-xl hover:bg-comarapa-light/10 transition-colors">
                  <div className="flex items-center gap-2 sm:gap-3">
                    {tipo === 'dia' ? (
                      <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
                    ) : (
                      <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-comarapa-dark" />
                    )}
                    <span className="font-bold text-base sm:text-lg text-comarapa-dark">{hora}</span>
                  </div>
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                    tipo === 'dia' ? 'bg-yellow-100 text-yellow-700' : 'bg-comarapa-dark/10 text-comarapa-dark'
                  }`}>
                    {tipo === 'dia' ? 'Día' : 'Noche'}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* San Isidro a Santa Cruz */}
          <div className="comarapa-card p-4 sm:p-6 md:p-8 border-t-4 border-comarapa-light md:col-span-2 lg:col-span-1">
            <div className="text-center mb-6 sm:mb-8">
              <div className="bg-gradient-to-br from-comarapa-light to-green-400 rounded-full p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
                <Navigation className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-comarapa-dark mb-2">San Isidro ➡️ Santa Cruz</h3>
              <p className="text-sm sm:text-base text-gray-600 font-medium">Conexión directa nueva</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {schedules.sanIsidroToSantaCruz.map(({hora, tipo}) => (
                <div key={hora} className="flex items-center justify-between bg-comarapa-gray p-3 sm:p-4 rounded-xl hover:bg-comarapa-light/10 transition-colors">
                  <div className="flex items-center gap-2 sm:gap-3">
                    {tipo === 'dia' ? (
                      <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
                    ) : (
                      <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-comarapa-dark" />
                    )}
                    <span className="font-bold text-base sm:text-lg text-comarapa-dark">{hora}</span>
                  </div>
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                    tipo === 'dia' ? 'bg-yellow-100 text-yellow-700' : 'bg-comarapa-dark/10 text-comarapa-dark'
                  }`}>
                    {tipo === 'dia' ? 'Día' : 'Noche'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        
          {/* Santa Cruz a Comarapa */}
          <div className="comarapa-card p-4 sm:p-6 md:p-8 border-t-4 border-comarapa-medium">
            <div className="text-center mb-6 sm:mb-8">
              <div className="bg-gradient-to-br from-comarapa-medium to-comarapa-light rounded-full p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
                <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-comarapa-dark mb-2">Santa Cruz ➡️ Comarapa</h3>
              <p className="text-sm sm:text-base text-gray-600 font-medium">Ruta completa (23 paradas)</p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {schedules.santaCruzToComarapa.map(({hora, tipo}) => (
                <div key={hora} className="flex items-center justify-between bg-comarapa-gray p-3 sm:p-4 rounded-xl hover:bg-comarapa-light/10 transition-colors">
                  <div className="flex items-center gap-2 sm:gap-3">
                    {tipo === 'dia' ? (
                      <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
                    ) : (
                      <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-comarapa-dark" />
                    )}
                    <span className="font-bold text-base sm:text-lg text-comarapa-dark">{hora}</span>
                  </div>
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                    tipo === 'dia' ? 'bg-yellow-100 text-yellow-700' : 'bg-comarapa-dark/10 text-comarapa-dark'
                  }`}>
                    {tipo === 'dia' ? 'Día' : 'Noche'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA de reserva */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="comarapa-card p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-comarapa-dark mb-3 sm:mb-4">
              ¿Necesitas reservar tu asiento?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Contacta a cualquiera de nuestras oficinas por WhatsApp
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {offices.map((office) => (
                <a 
                  key={office.city}
                  href={`https://wa.me/${office.phone}`} 
                  className="bg-green-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
                  style={{ minHeight: '44px' }}
                >
                  <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  {office.city}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

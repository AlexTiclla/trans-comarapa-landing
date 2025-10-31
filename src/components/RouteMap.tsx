import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

// Las 23 localidades en orden invertido: Comarapa → Santa Cruz
const routeLocalities = [
  { name: 'Comarapa', type: 'principal' },
  { name: 'Tambo', type: 'normal' },
  { name: 'San Isidro', type: 'principal' },
  { name: 'La Palizada', type: 'normal' },
  { name: 'El Quiñe', type: 'normal' },
  { name: 'Mataral', type: 'normal' },
  { name: 'Los Negros', type: 'normal' },
  { name: 'Agua Clara', type: 'normal' },
  { name: 'Hierba Buena', type: 'normal' },
  { name: 'Mairana', type: 'normal' },
  { name: 'Samaipata', type: 'normal' },
  { name: 'Achiras', type: 'normal' },
  { name: 'Cuevas', type: 'normal' },
  { name: 'La Angostura', type: 'normal' },
  { name: 'San Luis', type: 'normal' },
  { name: 'Taruma', type: 'normal' },
  { name: 'Jorochito', type: 'normal' },
  { name: 'Limoncito', type: 'normal' },
  { name: 'El Torno', type: 'normal' },
  { name: 'Santa Rita', type: 'normal' },
  { name: 'San José', type: 'normal' },
  { name: 'La Guardia', type: 'normal' },
  { name: 'Santa Cruz', type: 'principal' }
];

const RouteMap: React.FC = () => {
  return (
    <div className="w-full">
      {/* Título de la sección */}
      <div className="text-center mb-6 px-4">
        <h3 className="text-xl font-bold text-comarapa-dark mb-3">
          Nuestra Ruta Completa
        </h3>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Conectando 23 localidades desde Comarapa hasta Santa Cruz, 
          ahora con salidas directas desde San Isidro
        </p>
      </div>

      {/* Contenedor de la ruta con scroll horizontal */}
      <div className="relative overflow-x-auto pb-6">
        {/* Indicador de scroll en móviles */}
        <div className="block text-center mb-4">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
            <span>👈 Desliza para ver toda la ruta 👉</span>
          </p>
        </div>
        
        <div className="flex items-center justify-start min-w-max px-4" style={{ minWidth: '1600px' }}>
          {routeLocalities.map((locality, index) => (
            <React.Fragment key={index}>
              {/* Nodo de la localidad */}
              <div className="flex flex-col items-center relative touch-manipulation">
                {/* Círculo numerado */}
                <div
                  className={`
                    w-20 h-20 
                    rounded-full flex items-center justify-center 
                    font-bold text-white border-4 border-white shadow-lg relative z-10
                    transition-all duration-300 hover:scale-110 cursor-pointer
                    ${locality.type === 'principal' 
                      ? 'bg-comarapa-dark text-2xl' 
                      : 'bg-comarapa-light text-xl'
                    }
                  `}
                  title={`${locality.name} - Parada ${index + 1}`}
                >
                  {index + 1}
                </div>
                
                {/* Nombre de la localidad */}
                <div className="mt-2 text-center max-w-16">
                  <p 
                    className={`
                      text-base font-semibold leading-tight
                      ${locality.type === 'principal' 
                        ? 'text-comarapa-dark' 
                        : 'text-gray-700'
                      }
                    `}
                  >
                    {locality.name}
                  </p>
                </div>

                {/* Indicador especial para ciudades principales */}
                {locality.type === 'principal' && (
                  <div className="absolute -top-1 -right-1 z-20">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="w-2 h-2 text-comarapa-dark" />
                    </div>
                  </div>
                )}
              </div>

              {/* Línea conectora (no mostrar después del último elemento) */}
              {index < routeLocalities.length - 1 && (
                <div className="flex-1 h-1.5 bg-comarapa-light mx-2 min-w-12 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-comarapa-light to-comarapa-medium rounded-full shadow-sm"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Leyenda */}
      <div className="flex flex-wrap justify-center items-center gap-3 mt-6 mb-6 px-4">
        <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm">
          <div className="w-3 h-3 bg-comarapa-dark rounded-full"></div>
          <span className="text-xs text-gray-600 font-medium">Ciudades Principales</span>
        </div>
        <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm">
          <div className="w-3 h-3 bg-comarapa-light rounded-full"></div>
          <span className="text-xs text-gray-600 font-medium">Localidades</span>
        </div>
        <div className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm">
          <div className="w-4 h-1 bg-comarapa-light rounded-full"></div>
          <span className="text-xs text-gray-600 font-medium">Conexión</span>
        </div>
      </div>

      {/* Botón para ver en Google Maps */}
      <div className="text-center mt-6 px-4">
        <a 
          href="https://maps.app.goo.gl/sTTbpF179E2ZnpyV9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-comarapa-dark text-white px-6 py-3 rounded-xl font-semibold hover:bg-comarapa-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 touch-manipulation text-sm"
          style={{ minHeight: '44px' }}
        >
          <MapPin className="h-4 w-4" />
          <span className="whitespace-nowrap">Ver ruta en Google Maps</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Información adicional */}
      <div className="mt-6 mx-4 p-4 bg-comarapa-gray rounded-2xl">
        <div className="text-center">
          <h4 className="text-base font-bold text-comarapa-dark mb-4">
            Información Importante de la Ruta
          </h4>
          <div className="grid grid-cols-1 gap-3 text-sm text-gray-600">
            <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-comarapa-light rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold text-sm">23</span>
              </div>
              <span className="font-semibold text-comarapa-dark">Localidades</span>
              <span className="text-xs">Conectadas</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-comarapa-medium rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <span className="font-semibold text-comarapa-dark">Ciudades</span>
              <span className="text-xs">Principales</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-comarapa-dark rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <span className="font-semibold text-comarapa-dark">Oficinas</span>
              <span className="text-xs">Disponibles</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteMap;

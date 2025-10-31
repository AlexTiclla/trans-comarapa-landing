import React from 'react';
import { Truck, Facebook } from 'lucide-react';
import { navItems, offices } from '@/constants';
import { WhatsAppIcon } from './ui/WhatsAppIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-comarapa-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-comarapa-medium to-comarapa-light p-3 rounded-2xl">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold">Trans Comarapa</span>
            </div>
            <p className="text-white/80 mb-6 text-lg leading-relaxed max-w-md">
              Conectando Bolivia desde hace más de 20 años. Tu transporte seguro y confiable 
              en el corazón de la región de Comarapa.
            </p>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-comarapa-light">Síguenos en redes</h4>
              <div className="flex gap-3">
                <a 
                  href="https://wa.me/59168921188" 
                  className="group bg-green-500 hover:bg-green-400 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://www.facebook.com/TransComarapa" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-blue-600 hover:bg-blue-500 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
                  title="Facebook"
                >
                  <Facebook className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://www.tiktok.com/@trans_comarapa_oficial" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-black hover:bg-gray-700 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center relative overflow-hidden"
                  title="TikTok"
                >
                  <div className="relative z-10">
                    <svg 
                      className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
              </div>
              <div className="mt-4 text-white/70 text-sm">
                <p>Conecta con nosotros para ofertas exclusivas y noticias</p>
              </div>
            </div>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-comarapa-light">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {navItems.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-comarapa-light transition-colors hover:translate-x-2 inline-block duration-300"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Información de oficinas */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-comarapa-light">Nuestras Oficinas</h4>
            <div className="space-y-4">
              {offices.map((office) => (
                <div key={office.city} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-comarapa-light rounded-full"></div>
                  <span className="text-white/80">
                    <strong className="text-white">{office.city}:</strong> {office.phone.replace('591', '')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-comarapa-medium/30 pt-8 text-center">
          <p className="text-white/60">
            &copy; 2025 Trans Comarapa. Todos los derechos reservados. | Transporte seguro y confiable
          </p>
          <p className="text-comarapa-light/80 mt-2">
            Conectando el corazón de Bolivia
          </p>
        </div>
      </div>
    </footer>
  );
};

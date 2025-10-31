import React from 'react';
import { Bus, Menu, X } from 'lucide-react';
import { navItems } from '@/constants';
import { WhatsAppIcon } from './ui/WhatsAppIcon';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-comarapa-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="bg-gradient-to-br from-comarapa-dark to-comarapa-medium p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg">
              <Bus className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-comarapa-dark">Trans Comarapa</h1>
              <p className="text-comarapa-medium text-xs sm:text-sm font-medium hidden sm:block">
                Conectando el corazón de Bolivia
              </p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-comarapa-dark font-medium hover:text-comarapa-light transition-colors duration-300 relative group text-sm xl:text-base"
              >
                {item.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-comarapa-light transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <a 
              href="https://wa.me/59168921188" 
              className="bg-green-500 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg xl:rounded-xl font-semibold transition-all duration-300 hover:bg-comarapa-medium hover:shadow-lg transform hover:-translate-y-1 flex items-center gap-2 text-sm xl:text-base"
            >
              <WhatsAppIcon className="h-4 w-4 xl:h-5 xl:w-5" />
              Reservar Ahora
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-comarapa-dark touch-manipulation"
            style={{ minWidth: '44px', minHeight: '44px' }}
            aria-label="Menú de navegación"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-comarapa-light/20 bg-white">
            <nav className="flex flex-col space-y-1 pt-4">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-comarapa-dark font-medium hover:text-comarapa-light transition-colors py-3 px-2 rounded-lg hover:bg-comarapa-gray text-base"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ minHeight: '44px' }}
                >
                  {item.text}
                </a>
              ))}
              <a 
                href="https://wa.me/59168921188" 
                className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-comarapa-medium hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2 mt-4 text-base"
                style={{ minHeight: '44px' }}
              >
                <WhatsAppIcon />
                Reservar WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

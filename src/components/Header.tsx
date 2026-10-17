import React, { useEffect, useState } from 'react';
import { Bus, Menu, Ticket, X } from 'lucide-react';
import { navItems } from '../data/site';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState('#inicio');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Resalta el enlace de la sección visible
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  const solid = isScrolled || isMenuOpen;

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(15,23,42,0.08)]' : 'bg-transparent'
      }`}
    >
      <div className="container flex h-16 sm:h-20 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-3 min-w-0" aria-label="Trans Comarapa, ir al inicio">
          <span className={`grid place-items-center h-10 w-10 sm:h-11 sm:w-11 rounded-xl shrink-0 transition-colors ${solid ? 'bg-comarapa-dark text-white' : 'bg-white/15 text-white ring-1 ring-white/30'}`}>
            <Bus className="h-5 w-5 sm:h-6 sm:w-6" />
          </span>
          <span className="leading-tight min-w-0">
            <span className={`block font-display text-lg sm:text-xl font-bold tracking-tight truncate ${solid ? 'text-ink' : 'text-white'}`}>
              Trans Comarapa
            </span>
            <span className={`hidden sm:block text-xs font-medium ${solid ? 'text-slate-500' : 'text-white/75'}`}>
              Conectando el corazón de Bolivia
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Principal">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  solid
                    ? isActive ? 'text-comarapa-dark bg-comarapa-gray' : 'text-slate-600 hover:text-comarapa-dark hover:bg-slate-100'
                    : isActive ? 'text-white bg-white/15' : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.text}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#oficinas"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-whatsapp px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-whatsapp-dark"
          >
            <Ticket className="h-4 w-4" />
            Comprar pasaje
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            className={`lg:hidden grid place-items-center h-11 w-11 rounded-lg transition-colors ${solid ? 'text-ink hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>

      {/* Menú móvil: fuera del header porque backdrop-filter atrapa elementos fixed */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 z-40 bg-white transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="container flex h-full flex-col py-6 overflow-y-auto" aria-label="Móvil">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center justify-between border-b border-slate-100 py-4 text-lg font-medium ${
                active === item.href ? 'text-comarapa-dark' : 'text-slate-700'
              }`}
            >
              {item.text}
              {active === item.href && <span className="h-2 w-2 rounded-full bg-comarapa-medium" />}
            </a>
          ))}
          <a
            href="#oficinas"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-4 text-base font-semibold text-white transition hover:bg-whatsapp-dark"
          >
            <Ticket className="h-5 w-5" />
            Compra o reserva tu pasaje
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;

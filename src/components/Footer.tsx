import React from 'react';
import { ArrowUp, Bus, Clock, MapPin, ShieldCheck, Ticket } from 'lucide-react';
import { navItems, offices, routeStops, socials } from '../data/site';
import { FacebookBrandIcon, TikTokBrandIcon, WhatsAppBrandIcon } from './icons';

const socialLinks = [
  { href: socials.facebook, name: 'Facebook', handle: '/TransComarapa', icon: FacebookBrandIcon, external: true },
  { href: socials.tiktok, name: 'TikTok', handle: '@trans_comarapa_oficial', icon: TikTokBrandIcon, external: true },
  { href: '#oficinas', name: 'WhatsApp', handle: 'Elige tu oficina', icon: WhatsAppBrandIcon, external: false },
];

const serviceLinks = ['Transporte de pasajeros', 'Envío de encomiendas', 'Viajes personalizados'];

// Rango de atención calculado a partir de los horarios de las oficinas
const [firstOpen, lastClose] = (() => {
  const ranges = offices.map((o) => o.hours.split('–').map((t) => t.trim()));
  const opens = ranges.map(([open]) => open).sort();
  const closes = ranges.map(([, close]) => (close === '00:00' ? '24:00' : close)).sort();
  const last = closes[closes.length - 1];
  return [opens[0], last === '24:00' ? '00:00' : last];
})();

const keyFacts = [
  { icon: MapPin, text: `${routeStops[0].name} – ${routeStops[routeStops.length - 1].name} · ${routeStops.length} localidades` },
  { icon: Clock, text: `Atención de ${firstOpen} a ${lastClose} según oficina` },
  { icon: ShieldCheck, text: 'Salidas diurnas y nocturnas con seguro de viajero' },
];

const headingClass = 'text-sm font-semibold uppercase tracking-wider text-white/50';

const Footer: React.FC = () => (
  <footer id="pie" className="relative bg-ink text-white">
    <div className="h-1 bg-gradient-to-r from-comarapa-dark via-comarapa-medium to-comarapa-light" aria-hidden="true" />

    <div className="container py-8 sm:py-10">
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-12 lg:gap-8">
        {/* Marca y redes */}
        <div className="col-span-2 lg:col-span-4">
          <a href="#inicio" className="inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-comarapa-medium">
              <Bus className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-xl font-bold">Trans Comarapa</span>
              <span className="block text-xs text-white/55">Conectando el corazón de Bolivia</span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-white/65 leading-relaxed">
            Más de 20 años llevando pasajeros y encomiendas entre Comarapa, los Valles
            cruceños y Santa Cruz.
          </p>

          <h4 className={`mt-8 ${headingClass}`}>Síguenos</h4>
          <ul className="mt-4 space-y-2.5">
            {socialLinks.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  {...(s.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="group -ml-2 flex max-w-xs items-center gap-3 rounded-xl p-2 transition hover:bg-white/5"
                >
                  <s.icon className="h-9 w-9 shrink-0 transition-transform group-hover:scale-105" />
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">{s.name}</span>
                    <span className="block truncate text-sm text-white/55 group-hover:text-white/80">{s.handle}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navegación */}
        <nav className="lg:col-span-2" aria-label="Pie de página">
          <h4 className={headingClass}>Navegación</h4>
          <ul className="mt-4 space-y-3">
            {navItems.slice(1).map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white/75 transition hover:text-white">{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Servicios */}
        <div className="lg:col-span-2">
          <h4 className={headingClass}>Servicios</h4>
          <ul className="mt-4 space-y-3">
            {serviceLinks.map((s) => (
              <li key={s}>
                <a href="#servicios" className="text-white/75 transition hover:text-white">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Datos clave y CTA */}
        <div className="col-span-2 lg:col-span-4">
          <h4 className={headingClass}>Viaja con nosotros</h4>
          <ul className="mt-4 space-y-3.5">
            {keyFacts.map((f) => (
              <li key={f.text} className="flex gap-3 text-white/75">
                <f.icon className="mt-0.5 h-5 w-5 shrink-0 text-comarapa-light" aria-hidden="true" />
                <span>{f.text}</span>
              </li>
            ))}
          </ul>
          <a
            href="#oficinas"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-3 font-semibold transition hover:bg-whatsapp-dark sm:w-auto"
          >
            <Ticket className="h-5 w-5" />
            Compra o reserva tu pasaje
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-col-reverse gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Trans Comarapa. Todos los derechos reservados.</p>
        <a href="#inicio" className="inline-flex items-center gap-2 self-start font-medium text-white/70 transition hover:text-white sm:self-auto">
          Volver arriba
          <span className="grid h-8 w-8 place-items-center rounded-full ring-1 ring-white/20">
            <ArrowUp className="h-4 w-4" />
          </span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

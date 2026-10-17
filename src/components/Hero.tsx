import React, { useEffect, useState } from 'react';
import { ArrowRight, Clock, Ticket } from 'lucide-react';
import { heroImages } from '../data/site';

const stats = [
  { value: '23', label: 'Localidades' },
  { value: '20+', label: 'Años de experiencia' },
  { value: '4', label: 'Oficinas' },
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => setCurrent((i) => (i + 1) % heroImages.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative isolate flex min-h-[100svh] md:min-h-[88svh] items-center overflow-hidden bg-ink pt-24 pb-16 sm:pt-28 lg:pb-20">
      {/* Imágenes de fondo */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
      </div>

      <div className="container">
        <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Transporte regional desde Comarapa
            </span>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold leading-[1.05] tracking-tight text-balance">
              Unimos tus destinos en los{' '}
              <span className="text-comarapa-light">Valles cruceños</span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/75">
              Desde el corazón de Comarapa hasta el dinamismo de Santa Cruz, una red
              segura y puntual que conecta 23 localidades.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#oficinas"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-whatsapp-dark"
              >
                <Ticket className="h-5 w-5" />
                Compra o reserva tu pasaje
              </a>
              <a
                href="#horarios"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white hover:text-ink"
              >
                <Clock className="h-5 w-5" />
                Ver horarios
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-white/15 border-t border-white/15 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="px-3 first:pl-0 sm:px-6">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl sm:text-3xl font-bold">{stat.value}</dd>
                  <dd className="mt-1 text-xs sm:text-sm text-white/65 leading-snug">{stat.label}</dd>
                </div>
              ))}
            </dl>
        </div>
      </div>

      {/* Indicadores del slider */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            className="grid h-6 place-items-center px-1"
            aria-label={`Ver imagen ${index + 1}`}
            aria-current={index === current}
          >
            <span className={`block h-1.5 rounded-full transition-all duration-300 ${index === current ? 'w-8 bg-white' : 'w-4 bg-white/40 hover:bg-white/70'}`} />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;

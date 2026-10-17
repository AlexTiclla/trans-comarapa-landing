import React from 'react';
import { ArrowRight, Moon, Sun } from 'lucide-react';
import { schedules } from '../data/site';
import SectionHeading from './SectionHeading';

const Schedules: React.FC = () => (
  <section id="horarios" className="section bg-slate-50">
    <div className="container">
      <SectionHeading
        eyebrow="Horarios de salida"
        title="Salidas diarias programadas"
        description="Horarios confiables y puntuales para que planifiques tu viaje con tranquilidad."
      />

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {schedules.map((s) => (
          <article key={`${s.from}-${s.to}`} className="card flex flex-col p-6 sm:p-7">
            <header className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Origen → Destino</p>
                <h3 className="mt-2 flex flex-wrap items-center gap-x-2 font-display text-xl sm:text-2xl font-bold text-ink">
                  {s.from}
                  <ArrowRight className="h-5 w-5 text-comarapa-medium" aria-label="hacia" />
                  {s.to}
                </h3>
              </div>
            </header>
            <p className="mt-2 text-sm text-slate-500">{s.note}</p>

            <ul className="mt-6 grid grid-cols-2 gap-3">
              {s.departures.map((d) => (
                <li
                  key={d.hora}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-2.5 py-3 sm:gap-3 sm:px-3"
                >
                  <span className={`grid h-8 w-8 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-lg ${d.tipo === 'dia' ? 'bg-amber-50 text-amber-500' : 'bg-indigo-50 text-indigo-500'}`}>
                    {d.tipo === 'dia' ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
                  </span>
                  <span className="min-w-0">
                    <span className="block whitespace-nowrap text-[0.95rem] sm:text-base font-semibold tabular-nums text-ink">{d.hora}</span>
                    <span className="block text-xs text-slate-500">{d.tipo === 'dia' ? 'Diurno' : 'Nocturno'}</span>
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="mt-5 sm:mt-6 text-center text-slate-600">
        Reserva tu asiento por WhatsApp en la{' '}
        <a href="#oficinas" className="inline-flex items-center gap-1 font-semibold text-comarapa-dark underline-offset-4 hover:underline">
          oficina más cercana <ArrowRight className="h-4 w-4" />
        </a>
      </p>
    </div>
  </section>
);

export default Schedules;

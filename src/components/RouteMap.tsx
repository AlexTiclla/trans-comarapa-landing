import React from 'react';
import { Clock, ExternalLink, MapPin, Route, ShieldCheck } from 'lucide-react';
import { routeStops, socials } from '../data/site';
import SectionHeading from './SectionHeading';

const facts = [
  { icon: Clock, label: 'Tiempo de viaje', value: '6 – 7 horas', detail: 'Santa Cruz a Comarapa' },
  { icon: Route, label: 'Distancia total', value: '235 km', detail: 'Recorrido seguro y confortable' },
  { icon: ShieldCheck, label: 'Seguridad', value: 'Conductores profesionales', detail: 'Buses inspeccionados' },
];

const RouteMap: React.FC = () => (
  <section id="rutas" className="section bg-white">
    <div className="container">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Nuestra ruta"
            title="Conectamos 23 localidades"
            description="Un recorrido completo desde Comarapa hasta Santa Cruz por el paisaje de los Valles, ahora con salidas directas desde San Isidro."
          />

          <dl className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {facts.map((f) => (
              <div key={f.label} className="flex items-start gap-4 p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-comarapa-gray text-comarapa-dark">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-sm text-slate-500">{f.label}</dt>
                  <dd className="font-semibold text-ink">{f.value}</dd>
                  <dd className="text-sm text-slate-500">{f.detail}</dd>
                </div>
              </div>
            ))}
          </dl>

          <a
            href={socials.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-comarapa-dark px-6 py-3.5 font-semibold text-white transition hover:bg-ink"
          >
            <MapPin className="h-5 w-5" />
            Ver ruta en Google Maps
            <ExternalLink className="h-4 w-4 opacity-70" />
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-comarapa-dark" /> Ciudad principal</span>
            <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full border-2 border-comarapa-light bg-white" /> Parada</span>
          </div>

          <ol className="columns-2 gap-4 sm:gap-8">
            {routeStops.map((stop, index) => {
              const last = index === routeStops.length - 1;
              return (
                <li key={stop.name} className="relative flex break-inside-avoid gap-3 pb-1 sm:gap-4">
                  <div className="flex flex-col items-center">
                    <span
                      className={`grid shrink-0 place-items-center rounded-full text-xs font-bold tabular-nums ${
                        stop.principal
                          ? 'h-9 w-9 bg-comarapa-dark text-white shadow-md shadow-comarapa-dark/20'
                          : 'h-9 w-9 border-2 border-comarapa-light bg-white text-comarapa-dark'
                      }`}
                    >
                      {index + 1}
                    </span>
                    {!last && <span className="w-0.5 flex-1 min-h-4 bg-comarapa-light/50" aria-hidden="true" />}
                  </div>
                  <div className={`pt-1.5 ${last ? '' : 'pb-4'}`}>
                    <p className={`leading-tight ${stop.principal ? 'font-semibold text-ink' : 'text-slate-700'}`}>
                      {stop.name}
                    </p>
                    {stop.principal && (
                      <p className="mt-0.5 text-xs font-medium text-comarapa-medium">
                        {index === 0 ? 'Origen' : last ? 'Destino' : 'Salida directa'}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default RouteMap;

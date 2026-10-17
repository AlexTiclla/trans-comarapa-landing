import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import { offices, whatsappUrl, type Office } from '../data/site';
import { isOpen, useBoliviaClock } from '../lib/officeHours';
import SectionHeading from './SectionHeading';
import { GoogleMapsIcon, WhatsAppIcon } from './icons';

const OfficeCard: React.FC<{ office: Office; now: number }> = ({ office: o, now }) => {
  const open = isOpen(o.hours, now);
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-comarapa-light hover:shadow-xl hover:shadow-comarapa-dark/10">
      <header className="flex items-center gap-3.5 border-b border-slate-100 bg-gradient-to-br from-comarapa-gray/70 via-white to-white p-4 sm:p-6">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-comarapa-dark text-white shadow-md shadow-comarapa-dark/20 transition-transform group-hover:scale-105">
          <MapPin className="h-6 w-6" />
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-lg sm:text-xl font-bold leading-tight text-ink">
            <span className="font-semibold text-slate-500">Oficina – </span>
            <span className="whitespace-nowrap">{o.city}</span>
          </h3>
          <span
            className={`mt-1.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
              open ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200' : 'bg-slate-100 text-slate-500 ring-1 ring-slate-200'
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${open ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
            {open ? 'Abierta ahora' : 'Cerrada'}
          </span>
        </div>
      </header>

      <dl className="flex-1 divide-y divide-slate-100 px-4 sm:px-6">
        <div className="flex gap-3 py-3 sm:py-4">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-comarapa-medium" aria-hidden="true" />
          <div className="min-w-0">
            <dt className="text-xs font-medium uppercase tracking-wider text-slate-400">Dirección</dt>
            <dd className="mt-0.5 text-slate-700">{o.address}</dd>
          </div>
        </div>
        <div className="flex items-center gap-3 py-3 sm:py-4">
          <Phone className="h-5 w-5 shrink-0 text-comarapa-medium" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <dt className="text-xs font-medium uppercase tracking-wider text-slate-400">Teléfono</dt>
            <dd className="mt-0.5 font-semibold tabular-nums text-ink">{o.phone}</dd>
          </div>
          <a
            href={`tel:+591${o.phone}`}
            aria-label={`Llamar a la oficina de ${o.city}`}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-semibold text-comarapa-dark ring-1 ring-slate-200 transition hover:bg-comarapa-gray hover:ring-comarapa-light"
          >
            <Phone className="h-4 w-4" />
            Llamar
          </a>
        </div>
        <div className="flex gap-3 py-3 sm:py-4">
          <Clock className="mt-0.5 h-5 w-5 shrink-0 text-comarapa-medium" aria-hidden="true" />
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-slate-400">Horario</dt>
            <dd className="mt-0.5 tabular-nums text-slate-700">{o.hours}</dd>
          </div>
        </div>
      </dl>

      <div className="grid gap-2.5 border-t border-slate-100 bg-slate-50/60 p-4 sm:p-6 xl:grid-cols-2">
        <a
          href={whatsappUrl(o.whatsapp, `Hola, tengo una consulta para la oficina de ${o.city}.`)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Escribir por WhatsApp a la oficina de ${o.city}`}
          className="flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-whatsapp px-4 text-[0.95rem] font-semibold text-white shadow-sm transition hover:bg-whatsapp-dark"
        >
          <WhatsAppIcon className="h-5 w-5 shrink-0" />
          WhatsApp
        </a>
        <a
          href={o.maps}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver la ubicación de la oficina de ${o.city} en Google Maps`}
          className="flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-slate-300 bg-white px-4 text-[0.95rem] font-semibold text-ink transition hover:border-comarapa-dark hover:text-comarapa-dark"
        >
          <GoogleMapsIcon className="h-5 w-5 shrink-0" />
          Ver en Google Maps
        </a>
      </div>
    </article>
  );
};

const Offices: React.FC = () => {
  const now = useBoliviaClock();
  return (
    <section id="oficinas" className="section bg-slate-50">
      <div className="container">
        <SectionHeading
          eyebrow="Oficinas y contacto"
          title="Te atendemos en 4 ubicaciones"
          description="Escríbenos o visítanos para reservas, encomiendas y consultas. Atención por WhatsApp en horario de oficina."
        />

        <div className="mx-auto grid max-w-5xl gap-5 sm:gap-6 md:grid-cols-2">
          {offices.map((o) => <OfficeCard key={o.city} office={o} now={now} />)}
        </div>
      </div>
    </section>
  );
};

export default Offices;

import React from 'react';
import { Check, Package, Users } from 'lucide-react';
import { charterServices, parcelFeatures, passengerFeatures } from '../data/site';
import SectionHeading from './SectionHeading';

const mainServices = [
  {
    icon: Users,
    title: 'Transporte de pasajeros',
    description: 'Viaja cómodo y seguro entre Comarapa, los Valles y Santa Cruz.',
    features: passengerFeatures,
  },
  {
    icon: Package,
    title: 'Envío de encomiendas',
    description: 'Tus paquetes llegan a tiempo y en perfecto estado a todas las localidades.',
    features: parcelFeatures,
  },
];

const Services: React.FC = () => (
  <section id="servicios" className="section bg-slate-50">
    <div className="container">
      <SectionHeading
        eyebrow="Nuestros servicios"
        title="Soluciones integrales de transporte"
        description="Todo lo que necesitas para viajar y enviar, con la confianza de más de 20 años en la región."
      />

      <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
        {mainServices.map((s) => (
          <article key={s.title} className="card p-5 sm:p-8">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-comarapa-dark text-white">
              <s.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold text-ink">{s.title}</h3>
            <p className="mt-2 text-slate-600">{s.description}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-slate-700">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm sm:text-[0.95rem]">{f}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">Viajes personalizados</h3>
            <p className="mt-2 text-slate-600">Buses contratados para eventos y ocasiones especiales.</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {charterServices.map((s) => (
            <article key={s.title} className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition hover:border-comarapa-light hover:shadow-lg hover:shadow-comarapa-dark/5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-comarapa-gray text-comarapa-dark transition group-hover:bg-comarapa-dark group-hover:text-white">
                  <s.icon className="h-5 w-5" />
                </span>
                <h4 className="font-display text-lg font-semibold text-ink">{s.title}</h4>
              </div>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-comarapa-medium" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services;

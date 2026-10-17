import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  { id: 1, text: 'Viajo desde hace 3 años con Trans Comarapa y siempre llegó puntual. Los buses son cómodos y el personal muy amable.', name: 'M.R.', role: 'Comerciante de Comarapa' },
  { id: 2, text: 'Excelente servicio de encomiendas. Mi familia en Santa Cruz siempre recibe mis paquetes en perfecto estado.', name: 'J.C.', role: 'Agricultor de San Isidro' },
  { id: 3, text: 'Los horarios nocturnos me permiten viajar después del trabajo. Buses seguros y conductores responsables.', name: 'A.V.', role: 'Estudiante universitario' },
  { id: 4, text: 'Contraté sus servicios para una excursión familiar a Comarapa. Todo salió perfecto, muy recomendable.', name: 'L.S.', role: 'Organizadora de eventos' },
  { id: 5, text: 'Precios justos y atención personalizada. Me gusta que puedo reservar fácilmente por WhatsApp.', name: 'C.M.', role: 'Ama de casa' },
  { id: 6, text: 'Como empresario necesito puntualidad, y Trans Comarapa nunca me ha fallado en mis viajes de negocios.', name: 'R.H.', role: 'Empresario de Santa Cruz' },
  { id: 7, text: 'Mi abuela de 80 años viaja sola y siempre la cuidan muy bien. Personal muy atento con los adultos mayores.', name: 'D.P.', role: 'Nieta agradecida' },
  { id: 8, text: 'Viajo con mi mascota y es la única empresa que me permite llevarla sin problemas. Muy flexible.', name: 'S.T.', role: 'Veterinaria' },
  { id: 9, text: 'Los buses están siempre limpios y son cómodos para los viajes largos. Aire acondicionado funcionando perfecto.', name: 'F.G.', role: 'Viajero frecuente' },
  { id: 10, text: 'Envío productos de mi panadería a Santa Cruz y siempre llegan frescos. Servicio de encomiendas excelente.', name: 'M.A.', role: 'Panadera de Comarapa' },
];

const TestimonialsSlider: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('li');
    const step = card ? card.getBoundingClientRect().width + 20 : track.clientWidth;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section id="testimonios" className="section overflow-hidden bg-ink text-white">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            tone="dark"
            eyebrow="Testimonios"
            title={<>Lo que dicen nuestros <span className="text-comarapa-light">pasajeros</span></>}
            description="Más de 20 años construyendo confianza en cada viaje."
          />
          <div className="mb-6 sm:mb-8 hidden md:flex gap-2">
            <button type="button" onClick={() => scroll(-1)} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition hover:bg-white hover:text-ink" aria-label="Reseña anterior">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => scroll(1)} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition hover:bg-white hover:text-ink" aria-label="Siguiente reseña">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 sm:px-6 lg:px-8 scroll-px-4 sm:scroll-px-6 lg:scroll-px-8"
          tabIndex={0}
          aria-label="Reseñas de pasajeros"
        >
          <ul className="flex gap-5 pb-2">
            {testimonials.map((t) => (
              <li
                key={t.id}
                className="flex w-[85%] sm:w-[60%] md:w-[44%] lg:w-[31.5%] shrink-0 snap-start flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5 text-amber-400" aria-label="5 de 5 estrellas">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <Quote className="h-7 w-7 text-white/15" />
                </div>
                <blockquote className="mt-4 flex-1 text-base sm:text-lg leading-relaxed text-white/90">
                  “{t.text}”
                </blockquote>
                <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-comarapa-medium/20 text-sm font-bold text-comarapa-light">
                    {t.name.replace(/\./g, '')}
                  </span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className="block text-sm text-white/60">{t.role}</span>
                  </span>
                </footer>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex justify-center gap-2 md:hidden">
          <button type="button" onClick={() => scroll(-1)} className="grid h-11 w-11 place-items-center rounded-full border border-white/20" aria-label="Reseña anterior">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => scroll(1)} className="grid h-11 w-11 place-items-center rounded-full border border-white/20" aria-label="Siguiente reseña">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;

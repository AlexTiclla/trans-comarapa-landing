import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { offices, whatsappUrl } from '../data/site';
import { isOpen, useBoliviaClock } from '../lib/officeHours';
import { WhatsAppIcon } from './icons';

const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const now = useBoliviaClock();

  useEffect(() => {
    const onScroll = () => {
      // Se oculta donde ya hay botones de contacto visibles: oficinas y pie de página
      const inView = (id: string) => {
        const r = document.getElementById(id)?.getBoundingClientRect();
        return !!r && r.top < window.innerHeight && r.bottom > 0;
      };
      setVisible(window.scrollY > window.innerHeight * 0.6 && !inView('oficinas') && !inView('pie'));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Si el botón se oculta al hacer scroll, el panel se cierra con él
  useEffect(() => {
    if (!visible) setOpen(false);
  }, [visible]);

  // Cerrar con Escape o al tocar fuera del panel
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={`fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 transition-all duration-300 sm:bottom-6 sm:right-6 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <div
        id="whatsapp-panel"
        role="dialog"
        aria-label="Elige una oficina para escribir por WhatsApp"
        className={`w-[min(calc(100vw-2.5rem),22rem)] origin-bottom-right overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/25 ring-1 ring-slate-200 transition-all duration-200 ${
          open ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
        }`}
      >
        <div className="flex items-start gap-3 bg-whatsapp px-5 py-4 text-white">
          <WhatsAppIcon className="mt-0.5 h-6 w-6 shrink-0" />
          <div>
            <p className="font-display font-semibold leading-tight">¿Con qué oficina quieres hablar?</p>
            <p className="mt-0.5 text-sm text-white/85">Compra o reserva tu pasaje por WhatsApp</p>
          </div>
        </div>

        <ul className="divide-y divide-slate-100 p-2">
          {offices.map((o) => {
            const openNow = isOpen(o.hours, now);
            return (
              <li key={o.city}>
                <a
                  href={whatsappUrl(o.whatsapp, `Hola, quiero comprar o reservar un pasaje en la oficina de ${o.city}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-emerald-50"
                >
                  <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-50 text-whatsapp transition group-hover:bg-whatsapp group-hover:text-white">
                    <WhatsAppIcon className="h-5 w-5" />
                    <span
                      className={`absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full ring-2 ring-white ${openNow ? 'bg-emerald-500' : 'bg-slate-300'}`}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-semibold text-ink">Oficina – {o.city}</span>
                    <span className="block text-sm text-slate-500">
                      <span className="tabular-nums">{o.phone}</span>
                      <span className={openNow ? 'text-emerald-600' : 'text-slate-400'}>
                        {' · '}{openNow ? 'Abierta ahora' : 'Cerrada'}
                      </span>
                    </span>
                  </span>
                  <ChevronRight className="h-5 w-5 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-whatsapp" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="whatsapp-panel"
        aria-label={open ? 'Cerrar lista de oficinas' : 'Escribir por WhatsApp: elegir oficina'}
        tabIndex={visible ? 0 : -1}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-xl shadow-black/20 transition hover:scale-105 hover:bg-whatsapp-dark"
      >
        {!open && <span className="absolute inset-0 rounded-full bg-whatsapp/60 animate-ping [animation-iteration-count:2]" aria-hidden="true" />}
        <span className={`relative transition-transform duration-200 ${open ? 'rotate-90' : ''}`}>
          {open ? <X className="h-7 w-7" /> : <WhatsAppIcon className="h-7 w-7" />}
        </span>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;

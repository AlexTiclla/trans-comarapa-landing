import {
  Briefcase, Heart, PartyPopper, GraduationCap, Church, Sparkles,
  type LucideIcon,
} from 'lucide-react';

export const navItems = [
  { href: '#inicio', text: 'Inicio' },
  { href: '#horarios', text: 'Horarios' },
  { href: '#rutas', text: 'Ruta' },
  { href: '#servicios', text: 'Servicios' },
  { href: '#testimonios', text: 'Reseñas' },
  { href: '#oficinas', text: 'Contacto' },
];

export const heroImages = [
  '/images/buses_challa.jpeg',
  '/images/flota_blanca_rene.png',
  '/images/doble_piso_verde.png',
];

export interface Office {
  city: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  maps: string;
}

export const offices: Office[] = [
  {
    city: 'Santa Cruz',
    address: '8vo Anillo, doble vía La Guardia, Mercado 25 de Mayo',
    phone: '68921188',
    whatsapp: '59168921188',
    hours: '06:00 – 21:00',
    maps: 'https://maps.app.goo.gl/NA7yrCt1uhNRCZRJ8',
  },
  {
    city: 'Comarapa',
    address: 'Terminal de Buses, mercado campesino',
    phone: '68921154',
    whatsapp: '59168921154',
    hours: '06:30 – 23:30',
    maps: 'https://maps.app.goo.gl/kx6wzzo795ZTHCRf9',
  },
  {
    city: 'Los Negros',
    address: 'Sobre la carretera, cerca del puente',
    phone: '71651781',
    whatsapp: '59171651781',
    hours: '06:00 – 22:00',
    maps: 'https://maps.app.goo.gl/9urMwXqik72Ri4E8A',
  },
  {
    city: 'San Isidro',
    address: 'Sobre la avenida, cerca del mercado central',
    phone: '71641780',
    whatsapp: '59171641780',
    hours: '06:00 – 00:00',
    maps: 'https://maps.app.goo.gl/YmQKvJssan3FwQeYA',
  },
];

export type Shift = 'dia' | 'noche';

export interface Schedule {
  from: string;
  to: string;
  note: string;
  departures: { hora: string; tipo: Shift }[];
}

export const schedules: Schedule[] = [
  {
    from: 'Comarapa',
    to: 'Santa Cruz',
    note: 'Ruta completa · 23 paradas',
    departures: [
      { hora: '08:30 AM', tipo: 'dia' },
      { hora: '02:00 AM', tipo: 'dia' },
      { hora: '08:30 PM', tipo: 'noche' },
      { hora: '11:30 PM', tipo: 'noche' },
    ],
  },
  {
    from: 'San Isidro',
    to: 'Santa Cruz',
    note: 'Salida directa',
    departures: [
      { hora: '09:00 AM', tipo: 'dia' },
      { hora: '02:30 AM', tipo: 'dia' },
      { hora: '09:00 PM', tipo: 'noche' },
      { hora: '00:00 PM', tipo: 'noche' },
    ],
  },
  {
    from: 'Santa Cruz',
    to: 'Comarapa',
    note: 'Ruta completa · 23 paradas',
    departures: [
      { hora: '10:30 AM', tipo: 'dia' },
      { hora: '02:00 PM', tipo: 'dia' },
      { hora: '06:30 PM', tipo: 'noche' },
      { hora: '08:30 PM', tipo: 'noche' },
    ],
  },
];

// Las 23 localidades en orden: Comarapa → Santa Cruz
export const routeStops: { name: string; principal?: boolean }[] = [
  { name: 'Comarapa', principal: true },
  { name: 'Tambo' },
  { name: 'San Isidro', principal: true },
  { name: 'La Palizada' },
  { name: 'El Quiñe' },
  { name: 'Mataral' },
  { name: 'Los Negros' },
  { name: 'Agua Clara' },
  { name: 'Hierba Buena' },
  { name: 'Mairana' },
  { name: 'Samaipata' },
  { name: 'Achiras' },
  { name: 'Cuevas' },
  { name: 'La Angostura' },
  { name: 'San Luis' },
  { name: 'Taruma' },
  { name: 'Jorochito' },
  { name: 'Limoncito' },
  { name: 'El Torno' },
  { name: 'Santa Rita' },
  { name: 'San José' },
  { name: 'La Guardia' },
  { name: 'Santa Cruz', principal: true },
];

export const passengerFeatures = [
  'Buses cómodos y climatizados',
  'Asientos reclinables',
  'Viajes nocturnos y diurnos',
  'Ruta completa con 23 localidades',
  'Viajes con mascotas permitidos',
  'Seguro de viajero incluido',
  'Salidas directas desde San Isidro',
];

export const parcelFeatures = [
  'Servicio puerta a puerta',
  'Entrega en todas las localidades',
  'Seguimiento de paquetes',
  'Servicio express y regular',
  'Paquetes de todos los tamaños',
  'Documentos y correspondencia',
  'Productos perecederos con cuidado especial',
];

export const charterServices: { icon: LucideIcon; title: string; items: string[] }[] = [
  { icon: Briefcase, title: 'Empresariales', items: ['Delegaciones empresariales', 'Reuniones de trabajo', 'Eventos corporativos', 'Transporte ejecutivo'] },
  { icon: Heart, title: 'Familiares', items: ['Excursiones turísticas', 'Reuniones familiares', 'Celebraciones y bodas', 'Viajes grupales'] },
  { icon: PartyPopper, title: 'Festividades', items: ['Fiestas patronales', 'Carnavales y ferias', 'Eventos culturales', 'Aniversarios'] },
  { icon: GraduationCap, title: 'Educativos', items: ['Transporte escolar', 'Viajes educativos', 'Graduaciones', 'Paseos de promoción'] },
  { icon: Church, title: 'Religiosos', items: ['Grupos religiosos', 'Retiros espirituales', 'Peregrinaciones', 'Misiones'] },
  { icon: Sparkles, title: 'A medida', items: ['Atención personalizada', 'Flexibilidad de horarios', 'Tarifas preferenciales', 'Servicios especiales'] },
];

export const socials = {
  facebook: 'https://www.facebook.com/TransComarapa',
  tiktok: 'https://www.tiktok.com/@trans_comarapa_oficial',
  maps: 'https://maps.app.goo.gl/sTTbpF179E2ZnpyV9',
};

export const whatsappUrl = (number: string, text?: string) =>
  `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

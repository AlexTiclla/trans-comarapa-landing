// Constantes y datos compartidos del proyecto

export const heroImages = [
  '/images/buses_challa.jpeg',
  '/images/flota_blanca_rene.png',
  '/images/doble_piso_verde.png'
];

export const navItems = [
  { href: "#inicio", text: "Inicio" },
  { href: "#horarios", text: "Horarios" },
  { href: "#servicios", text: "Servicios" },
  { href: "#rutas", text: "Rutas" },
  { href: "#oficinas", text: "Oficinas" },
  { href: "#testimonios", text: "Reseñas" },
  { href: "#contacto", text: "Contacto" }
];

export const offices = [
  {
    city: "Santa Cruz",
    phone: "59168921188",
    location: "Oficina 4to Anillo doble via la Guardia",
    hours: "6:00 AM - 09:00 PM",
    gradient: "from-comarapa-dark to-comarapa-medium"
  },
  {
    city: "Comarapa",
    phone: "59168921154",
    location: "Terminal de Buses mercado campesino",
    hours: "06:30 AM - 11:30 PM",
    gradient: "from-comarapa-medium to-comarapa-light"
  },
  {
    city: "Los Negros",
    phone: "59171651781",
    location: "Sobre la carretera cerca del puente",
    hours: "6AM - 10PM",
    gradient: "from-comarapa-light to-green-400"
  },
  {
    city: "San Isidro",
    phone: "59171641780",
    location: "Sobre la avenida cerca del mercado central",
    hours: "6AM - 00:00 AM",
    gradient: "from-green-500 to-emerald-600"
  }
];

export const schedules = {
  comarapaToSantaCruz: [
    { hora: '08:30 AM', tipo: 'dia' },
    { hora: '02:00 AM', tipo: 'dia' },
    { hora: '08:30 PM', tipo: 'noche' },
    { hora: '11:30 PM', tipo: 'noche' }
  ],
  sanIsidroToSantaCruz: [
    { hora: '09:00 AM', tipo: 'dia' },
    { hora: '02:30 AM', tipo: 'dia' },
    { hora: '09:00 PM', tipo: 'noche' },
    { hora: '00:00 PM', tipo: 'noche' }
  ],
  santaCruzToComarapa: [
    { hora: '10:30 AM', tipo: 'dia' },
    { hora: '02:00 PM', tipo: 'dia' },
    { hora: '06:30 PM', tipo: 'noche' },
    { hora: '08:30 PM', tipo: 'noche' }
  ]
};

export const stats = [
  { number: "23", label: "Localidades", icon: "MapPin" },
  { number: "20+", label: "Años de experiencia", icon: "Award" },
  { number: "4", label: "Oficinas", icon: "Globe" }
];

export const passengerFeatures = [
  "Buses cómodos y climatizados",
  "Asientos reclinables",
  "Viajes nocturnos y diurnos",
  "Ruta completa con 23 localidades",
  "Viajes con mascotas permitidos",
  "Seguro de viajero incluido",
  "Salidas directas desde San Isidro"
];

export const packageFeatures = [
  "Servicio puerta a puerta",
  "Entrega en todas las localidades",
  "Seguimiento de paquetes",
  "Servicio express y regular",
  "Paquetes de todos los tamaños",
  "Documentos y correspondencia",
  "Productos perecederos",
  "Cuidado especial"
];

export const customTrips = [
  {
    title: "Empresariales",
    color: "blue",
    items: ["Delegaciones empresariales", "Reuniones de trabajo", "Eventos corporativos", "Transporte ejecutivo"]
  },
  {
    title: "Familiares",
    color: "red",
    items: ["Excursiones turísticas", "Reuniones familiares", "Celebraciones y bodas", "Viajes grupales"]
  },
  {
    title: "Especiales",
    color: "yellow",
    items: ["Fiestas patronales", "Carnavales y ferias", "Eventos religiosos", "Peregrinaciones"]
  },
  {
    title: "Educativos",
    color: "green",
    items: ["Transporte escolar", "Viajes educativos", "Graduaciones", "Paseos de promoción"]
  },
  {
    title: "Religiosos",
    color: "purple",
    items: ["Grupos religiosos", "Retiros espirituales", "Eventos de iglesia", "Misiones"]
  },
  {
    title: "Adicionales",
    color: "indigo",
    items: ["Servicios especiales", "Atención personalizada", "Flexibilidad de horarios", "Tarifas preferenciales"]
  }
];

export const routeInfo = [
  {
    title: "Tiempo de Viaje",
    description: "Aproximadamente 6-7 horas de Santa Cruz a Comarapa",
    icon: "Clock"
  },
  {
    title: "Distancia Total",
    description: "235 kilómetros de recorrido seguro y confortable",
    icon: "MapPin"
  },
  {
    title: "Seguridad",
    description: "Conductores profesionales y buses inspeccionados",
    icon: "Shield"
  }
];

const whatsappMessage = 'Hola, quería consultar disponibilidad en Lomas de Intiyaco.'

const canonicalUrl = 'https://www.lomasdeintiyaco.com.ar/'
const heroImage = '/images/hero.jpg'

export const siteData = {
  name: 'Lomas de Intiyaco',
  title: 'Cabañas en Intiyaco, Córdoba',
  seoTitle: 'Lomas de Intiyaco | Cabañas en Intiyaco, Córdoba',
  subtitle:
    'Cabañas equipadas en Intiyaco, Córdoba, para descansar entre pinares y estar cerca de La Cumbrecita y Villa General Belgrano.',
  description:
    'Lomas de Intiyaco ofrece cabañas en Intiyaco, Córdoba, rodeadas de naturaleza. Alojamiento serrano para parejas, familias y grupos, cerca de La Cumbrecita y Villa General Belgrano.',
  keywords: [
    'cabañas en Intiyaco',
    'cabañas cerca de La Cumbrecita',
    'cabañas cerca de Villa General Belgrano',
    'alojamiento en Intiyaco, Córdoba',
  ],
  canonicalUrl,
  domain: 'www.lomasdeintiyaco.com.ar',
  whatsapp: {
    number: '+5491153867487',
    displayNumber: '+54 9 11 5386-7487',
    message: whatsappMessage,
    url: `https://wa.me/5491153867487?text=${encodeURIComponent(whatsappMessage)}`,
  },
  instagram: {
    label: 'Instagram',
    url: 'https://www.instagram.com/cabanas.lomasdeintiyaco/',
    handle: '@cabanas.lomasdeintiyaco',
  },
  location: {
    text: 'Intiyaco, Córdoba, Argentina',
    locality: 'Intiyaco',
    region: 'Córdoba',
    country: 'AR',
    address: 'Intiyaco, Calamuchita, Córdoba, Argentina',
    latitude: -31.9576957,
    longitude: -64.7171616,
    googleMapsUrl:
      'https://www.google.com/maps/place/Lomas+de+Intiyaco+-+Caba%C3%B1as/@-31.9544427,-64.7220803,17z/data=!4m6!3m5!1s0x95d2c9f334762587:0x499588d26debcf01!8m2!3d-31.9576957!4d-64.7171616!16s%2Fg%2F11fp82832w?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.2378805193207!2d-64.72208025577392!3d-31.95444265114967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2c9f334762587%3A0x499588d26debcf01!2sLomas%20de%20Intiyaco%20-%20Caba%C3%B1as!5e0!3m2!1ses-419!2sar!4v1782772523997!5m2!1ses-419!2sar',
    distances: [
      'Cabañas cerca de La Cumbrecita',
      'Cabañas cerca de Villa General Belgrano',
      'Alojamiento en Intiyaco, Córdoba, con entorno serrano',
    ],
  },
  links: {
    googleMaps:
      'https://www.google.com/maps/place/Lomas+de+Intiyaco+-+Caba%C3%B1as/@-31.9544427,-64.7220803,17z/data=!4m6!3m5!1s0x95d2c9f334762587:0x499588d26debcf01!8m2!3d-31.9576957!4d-64.7171616!16s%2Fg%2F11fp82832w?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D',
  },
  ui: {
    navAria: 'Navegación principal',
    homeAriaSuffix: 'inicio',
    headerWhatsapp: 'Consultar por WhatsApp',
    heroPrimary: 'Consultar disponibilidad',
    heroSecondary: 'Ver cabañas',
    cabinsEyebrow: 'Nuestras cabañas',
    cabinsTitle: 'Cabañas equipadas para parejas, familias y grupos',
    cabinButton: 'Consultar esta cabaña',
    servicesEyebrow: 'Servicios',
    servicesTitle: 'Comodidades para una estadía simple y tranquila',
    galleryEyebrow: 'Galería',
    galleryTitle: 'Imágenes del entorno y las cabañas',
    locationEyebrow: 'Ubicación',
    locationButton: 'Cómo llegar',
    mapPlaceholder: 'Espacio preparado para Google Maps',
    faqEyebrow: 'Preguntas frecuentes',
    faqTitle: 'Información útil antes de consultar',
    finalButton: 'Consultar por WhatsApp',
    whatsappAria: 'Consultar disponibilidad por WhatsApp',
    copyright: 'Todos los derechos reservados.',
  },
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Cabañas', href: '#cabanas' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Ubicación', href: '#ubicacion' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    image: heroImage,
    alt: 'Cabañas en Intiyaco rodeadas de bosque serrano en Lomas de Intiyaco',
    badges: ['Naturaleza', 'Cabañas equipadas', 'Ideal para descansar', 'Cerca de La Cumbrecita'],
  },
  intro: {
    eyebrow: 'Escapada serrana',
    title: 'Un lugar pensado para bajar el ritmo',
    text:
      'En Lomas de Intiyaco te esperan cabañas en Intiyaco rodeadas de bosque, aire puro y privacidad para disfrutar unos días de descanso en las sierras cordobesas.',
    benefits: [
      {
        title: 'Tranquilidad real',
        text: 'Un entorno natural para dormir mejor, caminar sin apuro y reconectar con el paisaje.',
      },
      {
        title: 'Cerca de todo',
        text: 'Una ubicación práctica para quienes buscan cabañas cerca de La Cumbrecita, Villa General Belgrano y los rincones del valle.',
      },
      {
        title: 'Comodidad simple',
        text: 'Alojamiento en Intiyaco, Córdoba, con cabañas equipadas para llegar, instalarse y disfrutar sin complicaciones.',
      },
    ],
  },
  cabins: [
    {
      title: 'Cabaña para 4/5 personas',
      image: '/images/cabana-1.jpg',
      alt: 'Cabaña familiar equipada en Intiyaco para hasta cinco personas',
      capacity: 'Hasta 5 personas',
      description:
        'Ideal para familias o grupos chicos que buscan comodidad, privacidad y contacto con la naturaleza.',
      amenities: ['Dormitorios confortables', 'Cocina equipada', 'Parrilla individual', 'Espacio exterior'],
    },
    {
      title: 'Cabaña para 2/3 personas',
      image: '/images/cabana-2.jpg',
      alt: 'Cabaña para pareja en Intiyaco con vista al entorno natural',
      capacity: 'Hasta 3 personas',
      description:
        'Una opción cálida para parejas o escapadas tranquilas, con todo lo necesario para descansar.',
      amenities: ['Ambiente acogedor', 'Cocina equipada', 'Calefacción', 'Vista al entorno natural'],
    },
  ],
  services: [
    { title: 'Cocina equipada', note: 'Para resolver comidas con comodidad durante la estadía.' },
    { title: 'Parrilla', note: 'Espacio para cocinar y compartir al aire libre.' },
    { title: 'Calefacción', note: 'Confort para disfrutar Intiyaco también en días frescos.' },
    { title: 'Ropa blanca', note: 'Consultanos qué incluye cada cabaña al reservar.' },
    { title: 'Estacionamiento', note: 'Ingreso práctico para quienes llegan en auto.' },
    { title: 'Naturaleza y tranquilidad', note: 'Un entorno serrano para descansar sin apuro.' },
    { title: 'WiFi', note: 'Confirmar disponibilidad según la cabaña y la fecha.' },
    { title: 'Mascotas', note: 'Consultar política antes de reservar.' },
  ],
  gallery: [
    {
      src: '/images/galeria-1.jpg',
      alt: 'Vista exterior de cabañas en Intiyaco entre árboles',
    },
    {
      src: '/images/galeria-2.jpg',
      alt: 'Galería de cabaña serrana en Lomas de Intiyaco',
    },
    {
      src: '/images/galeria-3.jpg',
      alt: 'Interior equipado de una cabaña en Intiyaco, Córdoba',
    },
    {
      src: '/images/galeria-4.jpg',
      alt: 'Parrilla y espacio exterior de alojamiento en Intiyaco',
    },
    {
      src: '/images/galeria-5.jpg',
      alt: 'Paisaje natural cerca de las cabañas en Intiyaco',
    },
    {
      src: '/images/galeria-6.jpg',
      alt: 'Entorno serrano para descansar cerca de Villa General Belgrano',
    },
  ],
  faq: [
    {
      question: '¿Cómo consulto disponibilidad?',
      answer:
        'Podés tocar cualquier botón de WhatsApp y enviar el mensaje prearmado. Te responderán con disponibilidad y opciones.',
    },
    {
      question: '¿Dónde están ubicadas?',
      answer:
        'Las cabañas están en Intiyaco, Córdoba, Argentina, en un entorno serrano y natural.',
    },
    {
      question: '¿Están cerca de La Cumbrecita y Villa General Belgrano?',
      answer:
        'Sí. La ubicación permite organizar paseos hacia La Cumbrecita, Villa General Belgrano y otros puntos del valle de Calamuchita.',
    },
    {
      question: '¿Cuántas personas pueden alojarse?',
      answer:
        'Hay una cabaña para 4/5 personas y otra para 2/3 personas. La capacidad final se confirma al consultar.',
    },
    {
      question: '¿Aceptan mascotas?',
      answer:
        'La política de mascotas debe confirmarse por WhatsApp antes de reservar.',
    },
    {
      question: '¿Cómo se reserva?',
      answer:
        'Primero se consulta disponibilidad por WhatsApp. Luego se coordinan fechas, condiciones y pasos de reserva.',
    },
  ],
  finalCta: {
    title: '¿Querés descansar en las sierras?',
    text:
      'Escribinos por WhatsApp y contanos las fechas de tu viaje. Te ayudamos a encontrar la cabaña adecuada para tu escapada a Intiyaco.',
  },
  images: {
    hero: heroImage,
    openGraph: heroImage,
  },
  schema: {
    priceRange: '$$',
    checkinTime: '14:00',
    checkoutTime: '10:00',
  },
}

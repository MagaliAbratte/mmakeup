export type NavigationItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  duration: string;
  studioPrice?: string;
  homePrice?: string;
  note?: string;
  details?: {
    intro?: string;
    itemsLabel?: string;
    items?: string[];
    requirementTitle?: string;
    requirement?: string;
    modalityTitle?: string;
    modality?: string;
    modalityItems?: string[];
    ideal?: string;
    footer?: string[];
  };
};

export type LandingPageData = {
  brand: {
    name: string;
    tagline: string;
    location: string;
  };
  hero: {
    title: string;
    eyebrow: string;
    subtitle: string;
  };
  editorial: {
    eyebrow: string;
    title: string;
    description: string;
    detail: string;
  };
  services: Service[];
  booking: {
    title: string;
    description: string;
    items: string[];
  };
  testimonials: {
    name: string;
    text: string;
    service: string;
  }[];
  contact: {
    title: string;
    description: string;
    whatsappLabel: string;
    whatsappUrl: string;
    phone: string;
    instagram: string;
    address: string;
  };
};

export const landingPageData: LandingPageData = {
  brand: {
    name: "Mmakeup",
    tagline: "Maquillaje Profesional",
    location: "Nueva Córdoba, Córdoba"
  },
  hero: {
    title: "Maquillaje Profesional",
    eyebrow: "Maquillaje Profesional",
    subtitle: "Maquillaje social, novias, clases y producciones"
  },
  editorial: {
    eyebrow: "Nueva Córdoba",
    title: "Looks con presencia, piel cuidada y una experiencia pensada para vos.",
    description:
      "En Mmakeup cada servicio se trabaja desde la escucha, la técnica y una mirada editorial: acabados pulidos, piel protagonista y maquillaje que acompaña tu estilo sin disfrazarlo.",
    detail: "Atención en estudio o a domicilio, con preparación personalizada para eventos, novias, clases y producciones."
  },
  services: [
    {
      title: "Maquillaje Social",
      description: "Un maquillaje pensado para que te veas increíble y te sientas cómoda durante todo el evento",
      duration: "1 hs",
      studioPrice: "$80.000",
      homePrice: "$100.000",
      details: {
        items: [
          "Análisis de tipo de piel, facciones y estilo personal.",
          "Preparación adecuada de la piel: limpieza, hidratación y protección solar.",
          "Maquillaje profesional, completo y personalizado.",
          "Pestañas postizas individuales con acabado natural."
        ],
        ideal: "Ideal para invitadas, eventos, salidas o fiestas.",
        footer: [
          "Todos los maquillajes son de larga duración (+12h) y están pensados para acompañarte durante todo el evento, resistentes al sudor y lágrimas.",
          "Trabajo con productos de preparación de la piel y maquillaje de primeras marcas, hipoalergénicos y seguros." 
        ]
      }
    },
    {
      title: "Maquillaje Social Premium",
      description: "Una experiencia más completa, incluye todo lo del maquillaje social y más",
      duration: "1 hs 30 m",
      studioPrice: "$100.000",
      homePrice: "$120.000",
      details: {
        items: [
          "Prueba de maquillaje opcional.",
          "Preparación de la piel más completa: limpieza, hidratación de ojeras con pads de tela, exfoliación de labios y retoque de cejas."
        ],
        ideal: "Ideal para quinceañeras, egresadas y eventos especiales.",
        footer: [
          "Todos los maquillajes son de larga duración (+12h) y están pensados para acompañarte durante todo el evento, resistentes al sudor y lágrimas.",
          "Trabajo con productos de preparación de la piel y maquillaje de primeras marcas, hipoalergénicos y seguros." 
        ]
      }
    },
    {
      title: "Maquillaje de Novia",
      description: "Un maquillaje diseñado especialmente para uno de los días más importantes de tu vida. Es un servicio premium y completamente personalizado, donde te acompaño desde la preparación previa hasta el momento final.",
      duration: "+1 hs 30 m",
      studioPrice: "$130.000",
      homePrice: "$150.000",
      details: {
        items: [
          "Prueba de maquillaje previa para definir juntas el estilo ideal según tu rostro, vestido y tipo de evento.",
          "Asesoramiento personalizado: piel, tonos, acabado y estilo general.",
          "Preparación completa de la piel: limpieza, hidratación de ojeras con pads de tela, exfoliación de labios, retoque de cejas y protección solar.",
          "Maquillaje profesional, adaptado a tu tipo de piel y de larga duración (+12 hs), resistente a lágrimas y sudor.",
          "Pestañas postizas individuales con acabado natural.",
          "Acompañamiento exclusivo el día del evento, con tiempo dedicado a vos y ajustes finales para que salgas perfecta.",
          "Kit de retoque para que estés impecable durante toda la jornada."
        ],
        footer: [
          "Trabajo con productos profesionales de preparación de la piel y maquillaje de primeras marcas, seleccionados según tu tipo de piel para lograr un acabado impecable y duradero."
        ]
      }
    },
    {
      title: "Clases de automaquillaje",
      description: "Aprendé a maquillarte con los productos que ya tenés y a sacarles el máximo provecho",
      duration: "+2 hs",
      studioPrice: "$60.000",
      homePrice: "$80.000",
      note: "Grupales 10% off por persona",
      details: {
        itemsLabel: "",
        items: [
          "Vas a aprender técnicas básicas pero actuales.",
          "Orden correcto de aplicación y tips para tu día a día.",
          "Clase adaptada a tu tipo de piel, rostro y estilo."
        ],
        requirementTitle: "¿Qué necesitás?",
        requirement: "Tu neceser con los productos que usás siempre.",
        modalityTitle: "Modalidad",
        modalityItems: [
          "Individual: 100% personalizada.",
          "Grupal: 10% de descuento por persona y la clase puede extenderse un poco más."
        ],
        footer: [
          "Durante la clase también vas a contar con maquillaje profesional, brochas, herramientas y productos complementarios para completar el paso a paso."
        ]
      }
    },
    {
      title: "Producciones de moda",
      description: "Maquillaje para campañas, editoriales, contenido de marca y sesiones.",
      duration: "A convenir segun modalidad"
    }
  ],
  booking: {
    title: "Info de turnos y reservas",
    description: " ",
    items: [
      "Agenda abierta todo el año.",
      "Seña del 25% para confirmar el turno.",
      "Se recomienda reservar con al menos 1 mes de anticipación. Tambien podes consultar disponibilidad sobre la fecha.",
      "Estudio en Chacabuco 625, Nueva Córdoba.",
    ]
  },
  testimonials: [
    {
      name: "Sofia R.",
      service: "Maquillaje Social",
      text: "Me senti super comoda durante todo el proceso y el maquillaje duro impecable toda la noche."
    },
    {
      name: "Valentina M.",
      service: "Maquillaje de Novia",
      text: "Entendio exactamente el look que queria: natural, elegante y con presencia para las fotos."
    },
    {
      name: "Camila P.",
      service: "Automaquillaje",
      text: "La clase fue clara, practica y sali con herramientas reales para maquillarme mejor todos los dias."
    }
  ],
  contact: {
    title: "¿Te gustaría que te maquille?",
    description: "Escribime por WhatsApp y vemos juntas tu idea.",
    whatsappLabel: "WhatsApp",
    whatsappUrl: "https://wa.me/5493563404877",
    phone: "+54 9 3563 40-4877",
    instagram: "@mmakeup",
    address: "Chacabuco 625, Nueva Córdoba"
  }
};

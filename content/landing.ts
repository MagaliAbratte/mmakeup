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
      description: "Un look completo para eventos, fiestas y ocasiones especiales.",
      duration: "1 h",
      studioPrice: "$90.000",
      homePrice: "$120.000"
    },
    {
      title: "Maquillaje Social Premium",
      description: "Más tiempo de preparación y detalle para un acabado más trabajado.",
      duration: "1 h 30 m",
      studioPrice: "$120.000",
      homePrice: "$150.000"
    },
    {
      title: "Maquillaje de Novia",
      description: "Diseño de look para el día de la boda, con foco en duración y fotografía.",
      duration: "+1 h 30 m",
      studioPrice: "$150.000",
      homePrice: "$180.000"
    },
    {
      title: "Clases de automaquillaje",
      description: "Aprendé técnicas para tu rutina y armá un look que puedas repetir sola.",
      duration: "+2 h",
      studioPrice: "$80.000",
      homePrice: "$100.000",
      note: "Grupales 10% off por persona"
    },
    {
      title: "Producciones de moda",
      description: "Maquillaje para campañas, editoriales, contenido de marca y sesiones.",
      duration: "Según modalidad",
      note: "A convenir"
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
    description: "Escribime por WhatsApp, te paso más info y vemos juntas tu idea.",
    whatsappLabel: "Escribirme por WhatsApp",
    whatsappUrl: "https://wa.me/5493563404877",
    phone: "+54 9 3563 40-4877",
    instagram: "@mmakeup",
    address: "Chacabuco 625, Nueva Córdoba"
  }
};

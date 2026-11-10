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
  services: Service[];
  booking: {
    title: string;
    items: string[];
  };
  contact: {
    title: string;
    description: string;
    whatsappLabel: string;
    whatsappUrl: string;
    instagram: string;
  };
};

export const landingPageData: LandingPageData = {
  brand: {
    name: "Mmakeup",
    tagline: "Maquillaje Profesional",
    location: "Nueva Córdoba, Córdoba"
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
          "Trabajo con productos de preparación de la piel y maquillaje de primeras marcas." 
        ]
      }
    },
    {
      title: "Maquillaje Social Premium",
      description: "Una experiencia más completa, incluye todo lo del maquillaje social y más",
      duration: "1 hs 30 m",
      studioPrice: "$120.000",
      homePrice: "$140.000",
      details: {
        items: [
          "Posibilidad de realizar una prueba de maquillaje previa al evento para definir y perfeccionar el look (adicional de $55.000).",
          "Preparación de la piel más completa: limpieza, hidratación de ojeras con pads de gel, exfoliación de labios, retoque de cejas, crema iluminadora en escote, brazos y espalda."
        ],
        ideal: "Ideal para novias, quinceañeras, egresadas y eventos especiales.",
        footer: [
          "Todos los maquillajes son de larga duración (+12h) y están pensados para acompañarte durante todo el evento, resistentes al sudor y lágrimas.",
          "Trabajo con productos de preparación de la piel y maquillaje de primeras marcas." 
        ]
      }
    },
    // {
    //   title: "Maquillaje de Novia",
    //   description: "Un maquillaje diseñado especialmente para uno de los días más importantes de tu vida. Es un servicio premium y completamente personalizado, donde te acompaño desde la preparación previa hasta el momento final.",
    //   duration: "+1 hs 30 m",
    //   studioPrice: "$130.000",
    //   homePrice: "$150.000",
    //   details: {
    //     items: [
    //       "Prueba de maquillaje previa para definir juntas el estilo ideal según tu rostro, vestido y tipo de evento.",
    //       "Asesoramiento personalizado: piel, tonos, acabado y estilo general.",
    //       "Preparación completa de la piel: limpieza, hidratación de ojeras con pads de tela, exfoliación de labios, retoque de cejas y protección solar.",
    //       "Maquillaje profesional, adaptado a tu tipo de piel y de larga duración (+12 hs), resistente a lágrimas y sudor.",
    //       "Pestañas postizas individuales con acabado natural.",
    //       "Acompañamiento exclusivo el día del evento, con tiempo dedicado a vos y ajustes finales para que salgas perfecta.",
    //       "Kit de retoque para que estés impecable durante toda la jornada."
    //     ],
    //     footer: [
    //       "Trabajo con productos profesionales de preparación de la piel y maquillaje de primeras marcas, seleccionados según tu tipo de piel para lograr un acabado impecable y duradero."
    //     ]
    //   }
    // },
    {
      title: "Prueba de Maquillaje",
      description: "Una instancia pensada para probar, definir y ajustar tu maquillaje antes de una fecha especial.",
      duration: "1 hs",
      studioPrice: "$60.000",
      details: {
        itemsLabel: "El servicio incluye:",
        items: [
          "Prueba de maquillaje profesional y personalizada.",
          "Definición de tonos, productos y acabado para el look final.",
          "Ajustes y cambios durante la prueba para terminar de definir el maquillaje ideal."
        ],
        ideal: "Ideal si querés llegar a tu evento con el look previamente definido, especialmente para quinceañeras, egresadas, novias o eventos importantes."
      }
    },
    {
      title: "Clases de automaquillaje",
      description: "Aprendé a maquillarte con los productos que ya tenés y a sacarles el máximo provecho",
      duration: "+2 hs",
      studioPrice: "$80.000",
      homePrice: "$100.000",
      details: {
        itemsLabel: "Vas a aprender:",
        items: [
          "Preparación de la piel antes del maquillaje.",
          "Técnicas prácticas para lograr maquillajes de día y de noche.",
          "Orden de aplicación y uso correcto de los productos.",
          "Cómo elegir tonos, acabados y productos según tu piel y facciones.",
          "Tips personalizados para aprovechar mejor tu neceser."
        ],
        requirementTitle: "¿Qué necesitás?",
        requirement: "Traé tu neceser con los productos y brochas que usás habitualmente. Vamos a revisarlos juntas y aprender a sacarles el máximo provecho.",
        modalityTitle: "Modalidad",
        modalityItems: [
          "Individual: 100% personalizada.",
          "Grupal: hasta cuatro participantes, la clase puede extenderse un poco más."
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
    items: [
      "Agenda abierta todo el año.",
      "Seña del 25% para confirmar el turno.",
      "Se recomienda reservar con al menos 1 mes de anticipación. Tambien podes consultar disponibilidad sobre la fecha.",
      "Estudio en Nueva Córdoba.",
    ]
  },
  contact: {
    title: "¿Te gustaría que te maquille?",
    description: "Escribime por WhatsApp y vemos juntas tu idea.",
    whatsappLabel: "WhatsApp",
    whatsappUrl: `https://wa.me/5493563404877?text=${encodeURIComponent("Hola! quiero mas información sobre...")}`,
    instagram: "@maguiabratte.makeup"
  }
};

import bridalImage from "@/public/assets/bridal.jpg";

export type BridalProposal = {
  id: string;
  title: string;
  duration: string;
  description?: string;
  studioPrice?: number;
  homePrice: number;
  benefits: string[];
  includes?: string;
  note?: string;
  cta: string;
  inquiryId: string;
};

export const bridalServices: BridalProposal[] = [
  {
    id: "esencial",
    title: "Novia Esencial",
    duration: "1 hs",
    description: "Un maquillaje pensado para reflejar tu estilo y acompañarte durante todo tu día.",
    studioPrice: 180000,
    homePrice: 200000,
    benefits: [
      "Asesoramiento previo y selección de referencias.",
      "Prueba de maquillaje en estudio.",
      "Preparación de piel personalizada.",
      "Maquillaje completo de larga duración.",
      "Pestañas individuales incluidas."
    ],
    cta: "Consultar disponibilidad",
    inquiryId: "Novia Esencial"
  },
  {
    id: "signature",
    title: "Novia Signature",
    duration: "1 hs 30 m",
    description: "Una experiencia más completa para disfrutar de cada detalle de tus preparativos.",
    homePrice: 250000,
    includes: "Incluye todo lo de Novia Esencial, más:",
    benefits: [
      "Ritual de preparación premium de piel y labios.",
      "Hidratación del contorno de ojos con pads de gel.",
      "Retoque de cejas.",
      "Preparación e iluminación de escote, hombros o espalda, según el look.",
      "Kit de retoque para llevar.",
      "Acompañamiento final de hasta 30 minutos previo a la salida."
    ],
    note: "La permanencia incluida es de hasta 30 minutos después de finalizar el maquillaje, para los últimos detalles antes de salir. No incluye acompañamiento durante la boda.",
    cta: "Consultar disponibilidad",
    inquiryId: "Novia Signature"
  }
];

export const bridalGroups: BridalProposal[] = [2, 4].map((guests) => ({
  id: `novia-${guests}-invitadas`,
  title: `Novia + ${guests} invitadas`,
  duration: guests === 2 ? "3 hs 30 m" : "5 hs 30 m",
  homePrice: guests === 2 ? 380000 : 550000,
  benefits: [
    "Maquillaje Novia Esencial a domicilio.",
    "Prueba previa de maquillaje para la novia, en estudio.",
    `Maquillaje social para ${guests} invitadas.`,
    "Preparación de piel personalizada.",
    "Pestañas individuales incluidas."
  ],
  cta: "Consultar por mi grupo",
  inquiryId: `Novia + ${guests} invitadas`
}));

export const bridalData = {
  title: "Bridal Experience",
  subtitle: "Una experiencia pensada para tu día más especial.",
  image: {
    src: bridalImage,
    alt: "Retrato de perfil con maquillaje de novia en tonos naturales realizado por M Makeup"
  },
  intro: {
    title: "Tu día, tu esencia.",
    paragraphs: [
      "Cada novia tiene una historia, un estilo y una forma única de sentirse hermosa.",
      "Mi propósito es acompañarte a encontrar un maquillaje que refleje quién sos, resalte tu belleza y te haga sentir cómoda y radiante en uno de los días más especiales de tu vida.",
      "Desde nuestra primera charla hasta los últimos detalles, vamos a crear juntas un look pensado especialmente para vos."
    ]
  },
  experience: [
    {
      title: "Antes de la boda",
      paragraphs: [
        "Comenzamos con una charla para conocer tu estilo, tus preferencias y las ideas que tenés para ese día.",
        "Durante la prueba de maquillaje vamos a trabajar sobre distintas opciones, teniendo en cuenta tus facciones, tipo de piel, vestido y referencias.",
        "El objetivo es definir un look con el que te sientas completamente identificada."
      ]
    },
    {
      title: "El gran día",
      paragraphs: [
        "Me encargo de cada detalle del maquillaje para que puedas disfrutar de tus preparativos con tranquilidad.",
        "Trabajaremos con productos profesionales y técnicas de larga duración, buscando un acabado que se mantenga durante toda la celebración."
      ]
    }
  ],
  groups: {
    title: "Momento compartido",
    paragraphs: [
      "Porque los momentos especiales también se disfrutan en compañía.",
      "Podés prepararte junto a tus amigas, hermanas, madrinas o familiares con mis propuestas de maquillaje para novias e invitadas."
    ],
    note: "Los paquetes están sujetos a disponibilidad y coordinación previa de horarios. Para grupos más grandes, puedo organizar una propuesta personalizada."
  },
  differences: [
    { title: "Maquillaje personalizado", text: "Cada look se diseña teniendo en cuenta tu piel, tus facciones y tu estilo." },
    { title: "Productos profesionales", text: "Trabajo con productos seleccionados por su calidad, acabado y rendimiento." },
    { title: "Larga duración", text: "Técnicas y productos pensados para conseguir un maquillaje resistente, con una duración esperada de más de 12 horas, según las condiciones de uso." },
    { title: "Atención cercana", text: "Mi prioridad es que disfrutes de la experiencia y te sientas cómoda durante todo el proceso." }
  ],
  // Condiciones iniciales: editar aquí sin modificar los servicios generales.
  conditions: [
    "La fecha se confirma mediante una seña del 25% del servicio contratado.",
    "El saldo restante se abona antes del evento, en la fecha acordada.",
    "La prueba de maquillaje se realiza en estudio, preferentemente entre 4 y 6 semanas antes de la boda.",
    "Los servicios a domicilio están sujetos a disponibilidad y ubicación.",
    "Los desplazamientos fuera del anillo de circunvalación de Córdoba pueden tener un costo adicional.",
    "Los paquetes grupales requieren coordinación previa de horarios."
  ],
  contact: {
    title: "Hagamos realidad tu look.",
    text: "Me encantaría acompañarte en este momento y crear un maquillaje que te haga sentir vos misma, radiante y segura.",
    cta: "Consultar disponibilidad",
    message: "¡Hola! Estoy organizando mi casamiento y me gustaría conocer las opciones de maquillaje para novias y consultar disponibilidad."
  }
};

export function formatBridalPrice(value: number) {
  return `$${new Intl.NumberFormat("es-AR").format(value)}`;
}

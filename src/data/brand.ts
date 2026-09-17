export const BRAND = {
  name: 'Meghan Luxury',
  tagline: 'El lujo comienza con una elección.',
  city: 'Santa Marta',
  region: 'Magdalena, Colombia',
  instagramHandle: '@meghanluxury.24',
  instagramUrl: 'https://www.instagram.com/meghanluxury.24/',
  whatsappNumber: '573226468859',
} as const

export function waLink(message: string) {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const WA_MESSAGES = {
  general: 'Hola, Meghan Luxury. Me gustaría consultar la disponibilidad de una referencia.',
  moda: 'Hola, Meghan Luxury. Quisiera consultar disponibilidad en la selección de moda.',
  perfumeria: 'Hola, Meghan Luxury. Quisiera consultar disponibilidad en la selección de alta perfumería.',
  lentes: 'Hola, Meghan Luxury. Quisiera consultar disponibilidad en lentes de lujo.',
  calzado: 'Hola, Meghan Luxury. Quisiera consultar disponibilidad en calzado de lujo.',
  gorras: 'Hola, Meghan Luxury. Quisiera consultar disponibilidad en gorras.',
  showroom: 'Hola, Meghan Luxury. Quisiera agendar una visita al showroom en Santa Marta.',
  instagram: 'Hola, Meghan Luxury. Escribo desde el sitio web, vi algo en su Instagram que me interesa.',
  producto: (nombre: string) => `Hola, Meghan Luxury. Quisiera consultar disponibilidad de: ${nombre}.`,
} as const

export type CategoryKey = 'perfumeria' | 'moda' | 'lentes' | 'calzado'

export interface Category {
  key: CategoryKey
  number: string
  title: string
  kicker: string
  description: string
  brands: string[]
  waMessage: string
}

export const CATEGORIES: Category[] = [
  {
    key: 'perfumeria',
    number: '01',
    title: 'Perfumería',
    kicker: 'The Scent Edit',
    description: 'Más de 400 referencias exclusivas de las casas perfumistas más aclamadas del mundo.',
    brands: ['Bond No. 9', 'Bianco Latte', 'Louis Vuitton', 'Creed', 'Versace'],
    waMessage: WA_MESSAGES.perfumeria,
  },
  {
    key: 'moda',
    number: '02',
    title: 'Moda',
    kicker: 'Fashion',
    description: 'Moda internacional y diseñadores colombianos, curada para un guardarropa sofisticado.',
    brands: ['Vie-Riche', 'NVLTY', 'Casablanca', 'Aurum', 'Money Makers · Cultura Wyse', 'Blow Up', 'Clemont', 'Monastery', 'Goorin Bros.', 'Dom Apparel'],
    waMessage: WA_MESSAGES.moda,
  },
  {
    key: 'lentes',
    number: '03',
    title: 'Lentes',
    kicker: 'The Frame',
    description: 'Gafas de sol y monturas de las casas de diseño más reconocidas a nivel internacional.',
    brands: ['Miu Miu', 'Oakley', 'Dolce & Gabbana', 'Alexander McQueen', 'Armani Exchange', 'Bottega Veneta', 'Cartier', 'Dior', 'Gucci', 'Prada'],
    waMessage: WA_MESSAGES.lentes,
  },
  {
    key: 'calzado',
    number: '04',
    title: 'Calzado',
    kicker: 'Footwear',
    description: 'Sneakerhead culture y piezas de alta costura footwear, para cada paso.',
    brands: ['Nike', 'Jordan', 'Dolce & Gabbana', 'Off-White', 'Christian Louboutin', 'Amiri', 'Philipp Plein'],
    waMessage: WA_MESSAGES.calzado,
  },
]

export const MANIFESTO = {
  words: ['LUXURY', 'AUTHENTICITY', 'EVOLUTION'],
  lead: 'Una selección hecha para quienes distinguen lo extraordinario.',
  body: 'En Meghan Luxury el lujo no solo se refleja en las firmas que representamos, sino en la búsqueda constante de la perfección. Somos una boutique especializada en artículos cuidadosamente seleccionados y garantizados como 100% originales.',
} as const

export const SHOWROOM = {
  eyebrow: 'Santa Marta · Magdalena',
  title: 'El showroom',
  body: 'Un espacio pensado para descubrir la colección con calma, con atención personalizada de principio a fin.',
  note: 'Atención personalizada — coordina tu visita por WhatsApp.',
} as const

export const INSTAGRAM = {
  title: BRAND.instagramHandle,
  body: 'El archivo diario de Meghan Luxury: piezas, referencias y el detrás de escena del showroom.',
} as const

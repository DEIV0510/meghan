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
  showroom: 'Hola, Meghan Luxury. Quisiera agendar una visita al showroom en Santa Marta.',
  producto: (nombre: string) =>
    `Hola, Meghan Luxury. Quisiera consultar disponibilidad de: ${nombre}.`,
} as const

export type CategoryKey = 'moda' | 'perfumeria' | 'lentes' | 'calzado'

export interface Category {
  key: CategoryKey
  title: string
  description: string
  brands: string[]
  waMessage: string
}

export const CATEGORIES: Category[] = [
  {
    key: 'moda',
    title: 'Moda',
    description: 'Moda internacional y diseñadores colombianos, para un guardarropa sofisticado.',
    brands: ['Vie-Riche', 'NVLTY', 'Casablanca', 'Aurum', 'Money Makers · Cultura Wyse', 'Blow Up', 'Clemont', 'Monastery', 'Goorin Bros.', 'Dom Apparel'],
    waMessage: WA_MESSAGES.moda,
  },
  {
    key: 'perfumeria',
    title: 'Alta Perfumería',
    description: 'Más de 400 referencias exclusivas de las casas perfumistas más aclamadas.',
    brands: ['Bond No. 9', 'Bianco Latte', 'Louis Vuitton', 'Creed', 'Versace', 'Y muchas más'],
    waMessage: WA_MESSAGES.perfumeria,
  },
  {
    key: 'lentes',
    title: 'Lentes de Lujo',
    description: 'Gafas de sol y monturas de las casas de diseño más reconocidas.',
    brands: ['Miu Miu', 'Oakley', 'Dolce & Gabbana', 'Alexander McQueen', 'Armani Exchange', 'Bottega Veneta', 'Cartier', 'Dior', 'Gucci', 'Prada'],
    waMessage: WA_MESSAGES.lentes,
  },
  {
    key: 'calzado',
    title: 'Calzado de Lujo',
    description: 'Sneakerhead culture y piezas de alta costura footwear.',
    brands: ['Nike', 'Jordan', 'Dolce & Gabbana', 'Off-White', 'Christian Louboutin', 'Amiri', 'Philipp Plein'],
    waMessage: WA_MESSAGES.calzado,
  },
]

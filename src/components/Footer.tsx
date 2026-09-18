import { BRAND } from '../data/brand'
import { GoldStar } from './ui/GoldStar'

const LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#novedades', label: 'Novedades' },
  { href: '#perfumeria', label: 'Perfumería' },
  { href: '#moda', label: 'Moda' },
  { href: '#lentes', label: 'Accesorios' },
  { href: '#calzado', label: 'Calzado' },
  { href: '#explora', label: 'Colecciones' },
  { href: '#showroom', label: 'Showroom' },
  { href: '#contacto', label: 'Contacto' },
]

export function Footer() {
  return (
    <footer className="border-t border-stone/15 bg-ivory py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <span className="flex items-center gap-2">
              <GoldStar className="h-3.5 w-3.5 text-champagne-deep" />
              <span className="font-serif text-lg tracking-wordmark text-charcoal">MEGHAN</span>
            </span>
            <p className="mt-4 text-sm text-stone">Luxury Boutique.</p>
            <p className="mt-1 text-sm text-stone">
              {BRAND.city}, {BRAND.region}
            </p>
            <p className="mt-1 text-sm text-stone">Showroom · Atención personalizada</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-7 gap-y-3 lg:justify-start">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-label uppercase text-stone hover:text-champagne-deep transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-2 lg:items-end">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone hover:text-champagne-deep transition-colors"
            >
              Instagram: {BRAND.instagramHandle}
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-stone hover:text-champagne-deep transition-colors"
            >
              WhatsApp: +57 322 646 8859
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-stone/15 pt-8">
          <div className="flex items-center gap-2 text-champagne-deep">
            <GoldStar className="h-3 w-3" />
          </div>
          <p className="text-[11px] tracking-label uppercase text-stone">Luxury · Authenticity · Evolution</p>
          <p className="max-w-lg text-[11px] leading-relaxed text-stone/70 text-balance">
            Las marcas mencionadas forman parte del portafolio de curaduría de Meghan Luxury y se citan
            como referencia de producto, no como representación oficial de dichas casas.
          </p>
          <p className="text-xs text-stone/60">
            © {new Date().getFullYear()} Meghan Luxury. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

import logo from '../assets/brand/logo-gold.png'
import { BRAND } from '../data/brand'
import { GoldStar } from './ui/GoldStar'

const LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#colecciones', label: 'Colecciones' },
  { href: '#perfumeria', label: 'Perfumería' },
  { href: '#accesorios', label: 'Accesorios' },
  { href: '#showroom', label: 'Showroom' },
  { href: '#contacto', label: 'Contacto' },
]

export function Footer() {
  return (
    <footer className="border-t border-champagne-dim/15 bg-ink py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <img src={logo} alt="Meghan Luxury" className="h-8 w-auto" />
            <p className="mt-4 text-sm text-ivory-dim">Luxury Boutique.</p>
            <p className="mt-1 text-sm text-ivory-dim">
              {BRAND.city}, {BRAND.region}
            </p>
            <p className="mt-1 text-sm text-ivory-dim">Showroom · Atención personalizada</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 lg:justify-start">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-label uppercase text-ivory-dim hover:text-champagne-bright transition-colors"
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
              className="text-sm text-ivory-dim hover:text-champagne-bright transition-colors"
            >
              Instagram: {BRAND.instagramHandle}
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ivory-dim hover:text-champagne-bright transition-colors"
            >
              WhatsApp: +57 322 646 8859
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-champagne-dim/10 pt-8">
          <div className="flex items-center gap-2 text-champagne">
            <GoldStar className="h-3 w-3" />
          </div>
          <p className="text-[11px] tracking-label uppercase text-ivory-dim/60">
            Luxury · Authenticity · Evolution
          </p>
          <p className="text-xs text-ivory-dim/40">
            © {new Date().getFullYear()} Meghan Luxury. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

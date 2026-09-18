import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BRAND, WA_MESSAGES, waLink } from '../data/brand'
import { useCart } from '../lib/CartContext'
import { useUI } from '../lib/UIContext'
import { GoldStar } from './ui/GoldStar'

const LINKS = [
  { href: '#novedades', label: 'Novedades' },
  { href: '#perfumeria', label: 'Perfumería' },
  { href: '#moda', label: 'Moda' },
  { href: '#accesorios', label: 'Accesorios' },
  { href: '#calzado', label: 'Calzado' },
  { href: '#explora', label: 'Colecciones' },
]

const MOBILE_EXTRA_LINKS = [
  { href: '#showroom', label: 'Showroom' },
  { href: '#contacto', label: 'Contacto' },
]

function Wordmark({ dark = false, className = '' }: { dark?: boolean; className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <GoldStar className={`h-3.5 w-3.5 ${dark ? 'text-champagne-deep' : 'text-champagne'}`} />
      <span className={`font-serif text-lg tracking-wordmark ${dark ? 'text-charcoal' : 'text-ivory'}`}>MEGHAN</span>
    </span>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M6 8h12l-1 12.5a1 1 0 0 1-1 .5H8a1 1 0 0 1-1-.5L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const { count, openCart } = useCart()
  const { openSearch } = useUI()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-stone/15 bg-snow/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="h-px w-full bg-stone/10">
        <div className="h-full bg-champagne-deep transition-[width] duration-150 ease-out" style={{ width: `${progress * 100}%` }} />
      </div>

      <nav className="mx-auto flex max-w-[92rem] items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <a href="#inicio" className="shrink-0">
          <Wordmark dark={scrolled} />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-[11px] tracking-label uppercase transition-colors duration-300 ${
                  scrolled ? 'text-charcoal hover:text-champagne-deep' : 'text-ivory/85 hover:text-champagne-bright'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 sm:gap-5">
          <button
            type="button"
            onClick={openSearch}
            aria-label="Buscar"
            className={`transition-colors duration-300 ${scrolled ? 'text-charcoal hover:text-champagne-deep' : 'text-ivory hover:text-champagne-bright'}`}
          >
            <SearchIcon />
          </button>
          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={`hidden sm:inline-flex transition-colors duration-300 ${scrolled ? 'text-charcoal hover:text-champagne-deep' : 'text-ivory hover:text-champagne-bright'}`}
          >
            <svg viewBox="0 0 32 32" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
              <path d="M16.001 3C9.107 3 3.5 8.607 3.5 15.5c0 2.31.63 4.47 1.72 6.33L3 29l7.36-2.17A12.44 12.44 0 0 0 16 28c6.894 0 12.5-5.607 12.5-12.5S22.895 3 16.001 3Zm0 22.65c-2.02 0-3.98-.55-5.68-1.58l-.408-.243-4.37 1.287 1.31-4.26-.266-.437a10.14 10.14 0 0 1-1.583-5.417c0-5.62 4.577-10.2 10.2-10.2 5.622 0 10.2 4.58 10.2 10.2 0 5.622-4.578 10.2-10.2 10.2Zm5.6-7.64c-.307-.154-1.816-.897-2.098-1-.281-.103-.487-.154-.692.154-.205.307-.794 1-.973 1.205-.179.205-.359.23-.666.077-.307-.154-1.294-.477-2.465-1.523-.911-.813-1.526-1.816-1.705-2.123-.179-.307-.02-.472.134-.625.138-.137.307-.359.46-.538.154-.18.205-.308.307-.513.103-.205.052-.384-.026-.538-.077-.153-.692-1.667-.948-2.283-.25-.6-.503-.52-.692-.53-.179-.008-.384-.01-.589-.01-.205 0-.538.077-.82.384-.281.307-1.074 1.05-1.074 2.563 0 1.512 1.1 2.972 1.253 3.177.154.205 2.166 3.307 5.25 4.637.734.317 1.306.507 1.753.649.736.234 1.406.201 1.936.122.59-.088 1.816-.742 2.072-1.46.256-.717.256-1.331.18-1.46-.078-.128-.283-.205-.59-.36Z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={openCart}
            aria-label="Carrito"
            className={`relative transition-colors duration-300 ${scrolled ? 'text-charcoal hover:text-champagne-deep' : 'text-ivory hover:text-champagne-bright'}`}
          >
            <BagIcon />
            <span
              className={`absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full text-[9px] ${
                count > 0 ? 'bg-champagne-deep text-ivory' : 'bg-transparent text-transparent'
              }`}
            >
              {count}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            className="lg:hidden flex flex-col items-end gap-1.5 p-1"
          >
            <span className={`h-px w-7 ${scrolled ? 'bg-charcoal' : 'bg-ivory'}`} />
            <span className="h-px w-5 bg-champagne-deep" />
            <span className={`h-px w-7 ${scrolled ? 'bg-charcoal' : 'bg-ivory'}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <Wordmark />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
                className="p-2 text-2xl leading-none text-ivory"
              >
                <span className="inline-block rotate-45 text-3xl text-champagne">+</span>
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-6 overflow-y-auto px-6 py-10">
              {[...LINKS, ...MOBILE_EXTRA_LINKS].map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-2xl text-ivory hover:text-champagne-bright transition-colors sm:text-3xl"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * (LINKS.length + MOBILE_EXTRA_LINKS.length), duration: 0.4 }}
                className="mt-4 flex flex-col items-center gap-5"
              >
                <a
                  href={waLink(WA_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-champagne px-7 py-3.5 text-xs tracking-label uppercase text-ink"
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] tracking-label uppercase text-ivory-dim hover:text-champagne-bright transition-colors"
                >
                  {BRAND.instagramHandle}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

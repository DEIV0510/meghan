import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import logo from '../assets/brand/logo-gold.png'
import { WA_MESSAGES } from '../data/brand'
import { GoldStar } from './ui/GoldStar'
import { WhatsAppButton } from './ui/WhatsAppButton'

const LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#colecciones', label: 'Colecciones' },
  { href: '#perfumeria', label: 'Perfumería' },
  { href: '#accesorios', label: 'Accesorios' },
  { href: '#showroom', label: 'Showroom' },
  { href: '#contacto', label: 'Contacto' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
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
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-champagne-dim/15' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 py-4">
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Meghan Luxury" className="h-7 sm:h-8 w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[11px] tracking-label uppercase text-ivory/80 hover:text-champagne-bright transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <WhatsAppButton message={WA_MESSAGES.general} variant="outline" className="!py-2.5 !px-5 !text-[10px]">
            Consultar por WhatsApp
          </WhatsAppButton>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
          className="lg:hidden flex flex-col items-end gap-1.5 p-2"
        >
          <span className="h-px w-7 bg-ivory" />
          <span className="h-px w-5 bg-champagne" />
          <span className="h-px w-7 bg-ivory" />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <img src={logo} alt="Meghan Luxury" className="h-7 w-auto" />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
                className="p-2 text-2xl leading-none text-ivory"
              >
                <span className="inline-block rotate-45 text-3xl text-champagne">+</span>
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-8">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-3xl text-ivory hover:text-champagne-bright transition-colors"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * LINKS.length, duration: 0.4 }}
                className="mt-4 flex items-center gap-2 text-champagne"
              >
                <GoldStar className="h-3 w-3" />
                <WhatsAppButton message={WA_MESSAGES.general}>Consultar por WhatsApp</WhatsAppButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

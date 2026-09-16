import { motion, useReducedMotion } from 'framer-motion'
import creedAventus from '../assets/perfume/creed-aventus.webp'
import { WA_MESSAGES } from '../data/brand'
import { GoldStar } from './ui/GoldStar'
import { WhatsAppButton } from './ui/WhatsAppButton'

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[36rem] w-[36rem] rounded-full bg-champagne/[0.05] blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-champagne/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 text-champagne"
          >
            <GoldStar className="h-3.5 w-3.5" />
            <span className="text-[11px] tracking-label uppercase">Santa Marta · Magdalena</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.05, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[13vw] leading-[0.95] tracking-wordmark text-ivory sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            MEGHAN
            <br />
            <span className="text-champagne">LUXURY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-md text-lg text-ivory-dim text-balance"
          >
            El lujo comienza con una elección. Moda, perfumería y accesorios cuidadosamente
            seleccionados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#colecciones"
              className="inline-flex items-center justify-center rounded-full border border-ivory/25 px-7 py-3.5 text-xs tracking-label uppercase text-ivory transition-all duration-300 hover:border-champagne hover:text-champagne-bright"
            >
              Explorar selección
            </a>
            <WhatsAppButton message={WA_MESSAGES.general}>Consultar por WhatsApp</WhatsAppButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.0, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-champagne-dim/25 bg-graphite">
            <img
              src={creedAventus}
              alt="Alta perfumería — Creed Aventus, parte de la selección Meghan Luxury"
              className="h-full w-full object-cover"
              style={
                shouldReduceMotion
                  ? undefined
                  : { animation: 'meghan-hero-drift 9s ease-in-out infinite alternate' }
              }
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            <div className="absolute left-5 top-5 h-10 w-px bg-champagne/50" />
            <div className="absolute left-5 top-5 h-px w-10 bg-champagne/50" />
            <div className="absolute right-5 bottom-5 h-10 w-px bg-champagne/50" />
            <div className="absolute right-5 bottom-5 h-px w-10 bg-champagne/50" />
          </div>
          <p className="mt-4 text-center text-[11px] tracking-label uppercase text-ivory-dim/70">
            Alta perfumería · Selección exclusiva
          </p>
        </motion.div>
      </div>

      <motion.a
        href="#identidad"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory-dim/70 sm:flex"
        aria-label="Descubrir más"
      >
        <span className="text-[10px] tracking-label uppercase">Descubrir</span>
        <span className="h-10 w-px bg-gradient-to-b from-champagne to-transparent" />
      </motion.a>
    </section>
  )
}

import { motion } from 'framer-motion'
import { BRAND, WA_MESSAGES } from '../data/brand'
import { CLIPS } from '../data/media'
import { LazyVideo } from './ui/LazyVideo'
import { WhatsAppButton } from './ui/WhatsAppButton'
import { GoldStar } from './ui/GoldStar'

export function Hero() {
  return (
    <section id="inicio" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      {/* Layer 1 — ambient fill: same footage, blurred + darkened, fills the whole viewport */}
      <div className="absolute inset-0">
        <LazyVideo
          clip={CLIPS.heroHorseHallway}
          priority
          className="h-full w-full scale-125 object-cover opacity-50 blur-2xl brightness-[0.55] saturate-[0.85]"
        />
      </div>

      {/* Layer 2 — contrast gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/20 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/30" />

      {/* Layer 3 — giant wordmark, bleeding behind the sharp panel */}
      <div className="absolute inset-0 z-10 flex items-start pt-[16vh] sm:pt-[14vh]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="select-none pl-5 font-serif leading-[0.82] text-ivory sm:pl-10 lg:pl-16"
          style={{ fontSize: 'clamp(3.6rem, 15vw, 11rem)' }}
        >
          MEGHAN
        </motion.h1>
      </div>

      {/* Layer 4 — sharp video panel, offset right, cropping the wordmark for depth */}
      <div className="absolute inset-y-0 right-[4%] z-20 hidden items-center sm:flex sm:right-[6%] lg:right-[10%]">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative h-[58vh] overflow-hidden rounded-sm border border-champagne-dim/30 shadow-[0_40px_120px_rgba(0,0,0,0.55)] sm:h-[64vh] lg:h-[70vh]"
          style={{ aspectRatio: '9 / 16' }}
        >
          <LazyVideo clip={CLIPS.heroHorseHallway} priority className="h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Mobile — full-bleed sharp panel instead of the split composition */}
      <div className="absolute inset-0 z-0 sm:hidden">
        <LazyVideo clip={CLIPS.heroHorseHallway} priority className="h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink" />
      </div>

      {/* Vertical editorial label along the left margin */}
      <div className="absolute left-4 top-1/2 z-30 hidden -translate-y-1/2 sm:block sm:left-6">
        <div className="flex -rotate-90 items-center gap-3 whitespace-nowrap">
          <GoldStar className="h-2.5 w-2.5 text-champagne" />
          <span className="text-[10px] tracking-label uppercase text-ivory-dim">
            {BRAND.city} · {BRAND.region}
          </span>
        </div>
      </div>
      <div className="absolute right-4 top-1/2 z-30 hidden -translate-y-1/2 sm:right-6 sm:block">
        <span className="font-display-number rotate-90 text-sm text-champagne/60">Nº 01</span>
      </div>

      {/* Foreground copy + CTAs */}
      <div className="absolute inset-x-0 bottom-0 z-30 px-5 pb-10 sm:px-10 sm:pb-14 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="max-w-xs text-balance font-sans text-sm text-ivory-dim sm:max-w-sm sm:text-base"
        >
          El lujo comienza con una elección. Moda · Perfumería · Accesorios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mt-6 flex flex-wrap items-center gap-4"
        >
          <a
            href="#mundos"
            className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-7 py-3.5 font-sans text-xs tracking-label uppercase text-ivory transition-colors duration-300 hover:border-champagne hover:text-champagne-bright"
          >
            Descubrir Meghan
          </a>
          <WhatsAppButton message={WA_MESSAGES.general}>Consultar por WhatsApp</WhatsAppButton>
        </motion.div>
      </div>
    </section>
  )
}

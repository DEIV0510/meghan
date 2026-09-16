import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import heroApparel from '../assets/apparel/vieriche-set-black-white.webp'
import { WA_MESSAGES } from '../data/brand'
import { loadGsap, type GsapContext } from '../lib/gsapLoader'
import { GoldStar } from './ui/GoldStar'
import { WhatsAppButton } from './ui/WhatsAppButton'

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const imageWrapRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (shouldReduceMotion || !sectionRef.current) return

    let cancelled = false
    let ctx: GsapContext | undefined

    loadGsap().then(({ gsap }) => {
      if (cancelled || !sectionRef.current) return
      ctx = gsap.context(() => {
        gsap.to(imageRef.current, {
          yPercent: 12,
          scale: 1.12,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
        gsap.to(imageWrapRef.current, {
          opacity: 0.15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }, sectionRef)
    })

    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [shouldReduceMotion])

  return (
    <section id="inicio" ref={sectionRef} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink">
      <div
        ref={imageWrapRef}
        className="absolute inset-y-0 right-0 w-[86%] sm:w-[72%] lg:w-[62%]"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={imageRef}
            src={heroApparel}
            alt="Meghan Luxury — selección de moda Vie-Riche"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full scale-110 object-cover object-top"
          />
        </div>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[90rem] flex-col justify-between px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 text-champagne"
        >
          <GoldStar className="h-3.5 w-3.5" />
          <span className="text-[11px] tracking-label uppercase">Santa Marta · Magdalena</span>
          <span className="h-3 w-px bg-champagne-dim/50" />
          <span className="font-display-number text-sm text-champagne">N.º 01</span>
        </motion.div>

        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-[16vw] leading-[0.88] tracking-wordmark text-ivory sm:text-7xl md:text-8xl lg:text-[8.5rem]"
          >
            MEGHAN
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="mt-5 max-w-md text-base text-ivory-dim sm:text-lg text-balance"
          >
            El lujo comienza con una elección. Moda, perfumería y accesorios cuidadosamente
            seleccionados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#mundos"
              className="inline-flex items-center justify-center rounded-full border border-ivory/25 px-7 py-3.5 text-xs tracking-label uppercase text-ivory transition-all duration-300 hover:border-champagne hover:text-champagne-bright"
            >
              Explorar selección
            </a>
            <WhatsAppButton message={WA_MESSAGES.general}>Consultar por WhatsApp</WhatsAppButton>
          </motion.div>
        </div>

        <motion.a
          href="#manifiesto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="hidden items-center gap-3 self-start text-ivory-dim/70 sm:flex"
          aria-label="Descubrir más"
        >
          <span className="h-10 w-px bg-gradient-to-b from-champagne to-transparent" />
          <span className="text-[10px] tracking-label uppercase">Descubrir</span>
        </motion.a>
      </div>
    </section>
  )
}

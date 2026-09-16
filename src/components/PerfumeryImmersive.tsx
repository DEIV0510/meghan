import { useEffect, useRef } from 'react'
import armafYumYum from '../assets/perfume/armaf-yum-yum.webp'
import blackoudAbyss from '../assets/perfume/blackoud-abyss.webp'
import creedAventus from '../assets/perfume/creed-aventus.webp'
import creedSilver from '../assets/perfume/creed-silver-mountain-water.webp'
import leLaboSantal from '../assets/perfume/le-labo-santal-33.webp'
import montaleSensual from '../assets/perfume/montale-sensual-instinct.webp'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { WA_MESSAGES } from '../data/brand'
import { loadGsap, type GsapContext } from '../lib/gsapLoader'
import { Reveal } from './Reveal'
import { GoldStar } from './ui/GoldStar'
import { WhatsAppButton } from './ui/WhatsAppButton'

const SATELLITES = [
  { src: blackoudAbyss, alt: 'Blackoud Abyss', pos: 'left-[6%] top-[18%] sm:left-[10%]' },
  { src: leLaboSantal, alt: 'Le Labo Santal 33', pos: 'right-[6%] top-[14%] sm:right-[12%]' },
  { src: montaleSensual, alt: 'Montale Sensual Instinct', pos: 'left-[10%] bottom-[14%] sm:left-[16%]' },
  { src: armafYumYum, alt: 'Armaf Yum Yum', pos: 'right-[8%] bottom-[18%] sm:right-[16%]' },
  { src: creedSilver, alt: 'Creed Silver Mountain Water', pos: 'right-[2%] top-[42%] hidden lg:block' },
]

export function PerfumeryImmersive() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const bottleRef = useRef<HTMLImageElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const satRefs = useRef<(HTMLDivElement | null)[]>([])
  const finaleRef = useRef<HTMLDivElement>(null)
  const prefersReduced = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReduced || !wrapRef.current) return

    let cancelled = false
    let ctx: GsapContext | undefined

    loadGsap().then(({ gsap }) => {
      if (cancelled || !wrapRef.current) return
      ctx = gsap.context(() => {
        gsap.set(bottleRef.current, { scale: 0.4, opacity: 0.5 })
        gsap.set(satRefs.current, { opacity: 0, scale: 0.7 })
        gsap.set(finaleRef.current, { opacity: 0, y: 24 })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapRef.current,
            start: 'top top',
            end: '+=220%',
            scrub: 0.6,
            pin: stageRef.current,
          },
        })

        tl.to(bottleRef.current, { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' })
          .to(labelRef.current, { opacity: 1, y: 0, duration: 0.6 }, '<0.1')
          .to(bottleRef.current, { scale: 0.72, x: 0, duration: 1, ease: 'power2.inOut' }, '+=0.3')
          .to(
            satRefs.current,
            { opacity: 1, scale: 1, duration: 0.8, stagger: 0.08, ease: 'power2.out' },
            '<'
          )
          .to(finaleRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '+=0.2')
      }, wrapRef)
    })

    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [prefersReduced])

  if (prefersReduced) {
    return (
      <section id="perfumeria" className="relative overflow-hidden bg-ink py-28">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <div className="flex items-center justify-center gap-3 text-champagne">
            <GoldStar className="h-3 w-3" />
            <span className="text-[11px] tracking-label uppercase">Alta Perfumería</span>
          </div>
          <h2 className="mt-5 font-serif text-4xl text-ivory sm:text-5xl">El arte de elegir una esencia.</h2>
          <img src={creedAventus} alt="Creed Aventus" className="mx-auto mt-10 w-full max-w-sm" loading="lazy" />
          <p className="mt-8 font-display-number text-3xl text-champagne-bright">+400</p>
          <p className="text-sm text-ivory-dim">Referencias exclusivas de alta perfumería</p>
          <div className="mt-8">
            <WhatsAppButton message={WA_MESSAGES.perfumeria}>Descubrir perfumería</WhatsAppButton>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div id="perfumeria" ref={wrapRef} className="relative bg-ink">
      <div ref={stageRef} className="relative h-[100svh] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,106,0.06),_transparent_65%)]" />

        <div ref={labelRef} className="absolute inset-x-0 top-[12%] flex flex-col items-center text-center opacity-0">
          <div className="flex items-center gap-3 text-champagne">
            <GoldStar className="h-3 w-3" />
            <span className="text-[11px] tracking-label uppercase">Alta Perfumería</span>
          </div>
          <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-ivory sm:text-5xl text-balance px-6">
            El arte de elegir una esencia.
          </h2>
        </div>

        {SATELLITES.map((sat, i) => (
          <div
            key={sat.alt}
            ref={(el) => {
              satRefs.current[i] = el
            }}
            className={`absolute h-24 w-24 overflow-hidden rounded-sm border border-champagne-dim/25 sm:h-32 sm:w-32 ${sat.pos}`}
          >
            <img src={sat.src} alt={sat.alt} loading="lazy" className="h-full w-full object-cover" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-center">
          <img
            ref={bottleRef}
            src={creedAventus}
            alt="Creed Aventus — alta perfumería Meghan Luxury"
            className="h-[52vh] max-h-[420px] w-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)] sm:h-[58vh]"
          />
        </div>

        <div ref={finaleRef} className="absolute inset-x-0 bottom-[10%] flex flex-col items-center text-center opacity-0">
          <p className="font-display-number text-4xl text-champagne-bright sm:text-5xl">+400</p>
          <p className="mt-1 text-[11px] tracking-label uppercase text-ivory-dim">
            Referencias exclusivas de alta perfumería
          </p>
          <div className="mt-6">
            <WhatsAppButton message={WA_MESSAGES.perfumeria}>Descubrir perfumería</WhatsAppButton>
          </div>
        </div>
      </div>

      <Reveal>
        <p className="sr-only">
          Alta perfumería Meghan Luxury: más de 400 referencias exclusivas entre ellas Bond No. 9,
          Bianco Latte, Louis Vuitton, Creed y Versace.
        </p>
      </Reveal>
    </div>
  )
}

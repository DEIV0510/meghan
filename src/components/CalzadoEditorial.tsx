import { useEffect, useRef } from 'react'
import shoeOffwhiteTop from '../assets/shoes/sneaker-offwhite-top.webp'
import { CATEGORIES, WA_MESSAGES } from '../data/brand'
import { CLIPS } from '../data/media'
import { SHOES } from '../data/products'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { loadGsap, type GsapContext } from '../lib/gsapLoader'
import { Reveal } from './Reveal'
import { ChapterMark } from './ui/ChapterMark'
import { LazyVideo } from './ui/LazyVideo'
import { Marquee } from './ui/Marquee'
import { WhatsAppButton } from './ui/WhatsAppButton'

const CATEGORY = CATEGORIES[3]

export function CalzadoEditorial() {
  const sectionRef = useRef<HTMLElement>(null)
  const shoeRef = useRef<HTMLImageElement>(null)
  const prefersReduced = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReduced || !sectionRef.current) return

    let cancelled = false
    let ctx: GsapContext | undefined

    loadGsap().then(({ gsap }) => {
      if (cancelled || !sectionRef.current || !shoeRef.current) return
      ctx = gsap.context(() => {
        gsap.to(shoeRef.current, {
          xPercent: -14,
          rotate: -3,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
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
  }, [prefersReduced])

  return (
    <section id="calzado" ref={sectionRef} className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <ChapterMark number={CATEGORY.number} kicker={CATEGORY.kicker} title={CATEGORY.title} />

        <div className="relative mt-6 flex items-center justify-end overflow-hidden">
          <img
            ref={shoeRef}
            src={shoeOffwhiteTop}
            alt="Off-White — calzado de lujo Meghan Luxury"
            loading="lazy"
            className="w-full max-w-xl translate-x-[6%] object-contain drop-shadow-[0_50px_90px_rgba(0,0,0,0.55)] sm:max-w-2xl lg:max-w-3xl"
          />
        </div>

        <Reveal delay={0.1} className="mt-6 max-w-md text-sm text-ivory-dim sm:text-base">
          {CATEGORY.description}
        </Reveal>

        {/* Horizontal-scroll strip of real product photography + one living clip */}
        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:gap-5">
          <Reveal className="shrink-0 snap-start">
            <div className="h-64 w-48 overflow-hidden rounded-sm sm:h-80 sm:w-60">
              <LazyVideo clip={CLIPS.calzadoSneakerWall} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          {SHOES.map((shoe, i) => (
            <Reveal key={shoe.id} delay={i * 0.05} className="shrink-0 snap-start">
              <div className="flex h-64 w-48 flex-col overflow-hidden rounded-sm bg-graphite sm:h-80 sm:w-60">
                <img src={shoe.image} alt={shoe.name} loading="lazy" className="h-full w-full object-contain p-5" />
              </div>
              <p className="mt-2 w-48 text-[11px] text-ivory-dim sm:w-60">{shoe.name}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-8 border-t border-champagne-dim/15 pt-10 sm:flex-row sm:items-end">
          <div className="max-w-md">
            <p className="text-[11px] tracking-label uppercase text-champagne">Casas representadas</p>
            <div className="mt-3">
              <Marquee items={CATEGORY.brands} className="text-sm tracking-label uppercase text-ivory-dim/70" speed="fast" />
            </div>
          </div>
          <WhatsAppButton message={WA_MESSAGES.calzado}>Descubrir calzado</WhatsAppButton>
        </div>
      </div>
    </section>
  )
}

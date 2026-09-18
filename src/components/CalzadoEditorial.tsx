import { useEffect, useRef } from 'react'
import shoeOffwhiteTop from '../assets/shoes/sneaker-offwhite-top.webp'
import { CATEGORIES } from '../data/brand'
import { CLIPS } from '../data/media'
import { SHOES } from '../data/products'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useUI } from '../lib/UIContext'
import { loadGsap, type GsapContext } from '../lib/gsapLoader'
import { Reveal } from './Reveal'
import { ChapterMark } from './ui/ChapterMark'
import { LazyVideo } from './ui/LazyVideo'
import { Marquee } from './ui/Marquee'
import { ProductCard } from './ProductCard'

const CATEGORY = CATEGORIES[3]

export function CalzadoEditorial() {
  const { openProduct } = useUI()
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
    <section id="calzado" ref={sectionRef} className="relative overflow-hidden bg-ink pt-24 sm:pt-28">
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
      </div>

      {/* Transition into the light commercial grid */}
      <div className="relative mt-16 bg-snow py-16 sm:py-20">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal className="lg:col-span-1">
              <div className="h-64 overflow-hidden sm:h-full">
                <LazyVideo clip={CLIPS.calzadoSneakerWall} className="h-full w-full object-cover" />
              </div>
            </Reveal>
            {SHOES.map((shoe, i) => (
              <Reveal key={shoe.id} delay={i * 0.06}>
                <ProductCard product={shoe} onOpen={openProduct} />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-8 border-t border-stone/15 pt-10 sm:flex-row sm:items-end">
            <div className="max-w-md">
              <p className="text-[11px] tracking-label uppercase text-champagne-deep">Casas representadas</p>
              <div className="mt-3">
                <Marquee items={CATEGORY.brands} className="text-sm tracking-label uppercase text-stone" speed="fast" />
              </div>
            </div>
            <a
              href="#archivo"
              className="inline-flex shrink-0 items-center gap-2 border border-ink px-7 py-3.5 font-sans text-xs tracking-label uppercase text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory"
            >
              Descubrir calzado
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

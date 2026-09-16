import { useEffect, useRef } from 'react'
import shoeOffwhiteTop from '../assets/shoes/sneaker-offwhite-top.webp'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { WA_MESSAGES } from '../data/brand'
import { loadGsap, type GsapContext } from '../lib/gsapLoader'
import { Reveal } from './Reveal'
import { WhatsAppButton } from './ui/WhatsAppButton'

export function CalzadoEditorial() {
  const sectionRef = useRef<HTMLElement>(null)
  const shoeRef = useRef<HTMLImageElement>(null)
  const prefersReduced = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReduced || !sectionRef.current) return

    let cancelled = false
    let ctx: GsapContext | undefined

    loadGsap().then(({ gsap }) => {
      if (cancelled || !sectionRef.current) return
      ctx = gsap.context(() => {
        gsap.to(shoeRef.current, {
          xPercent: -8,
          rotate: -2,
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
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="font-display-number text-6xl text-ivory/10 sm:text-8xl">04</span>
            <span className="text-[11px] tracking-label uppercase text-champagne">Footwear</span>
          </div>
        </Reveal>

        <div className="relative mt-4 flex items-center justify-center">
          <img
            ref={shoeRef}
            src={shoeOffwhiteTop}
            alt="Off-White — calzado de lujo Meghan Luxury"
            loading="lazy"
            className="w-full max-w-2xl object-contain drop-shadow-[0_50px_90px_rgba(0,0,0,0.55)] sm:max-w-3xl"
          />
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-col items-center text-center">
            <h2 className="font-serif text-3xl text-ivory sm:text-5xl">Sneakerhead culture & alta costura.</h2>
            <p className="mt-4 max-w-md text-sm text-ivory-dim">
              Nike · Jordan · Dolce &amp; Gabbana · Off-White · Christian Louboutin · Amiri · Philipp Plein
            </p>
            <div className="mt-8">
              <WhatsAppButton message={WA_MESSAGES.calzado}>Descubrir calzado</WhatsAppButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

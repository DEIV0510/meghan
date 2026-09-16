import { useRef } from 'react'
import tracksuitBlackRed from '../assets/apparel/vieriche-tracksuit-black-red.webp'
import { WA_MESSAGES } from '../data/brand'
import { APPAREL, CAPS } from '../data/products'
import { Reveal } from './Reveal'
import { WhatsAppButton } from './ui/WhatsAppButton'

const STRIP = [...APPAREL, ...CAPS]
const BRANDS = ['VIE-RICHE', 'NVLTY', 'CASABLANCA', 'AURUM', 'DOM APPAREL', 'GOORIN BROS.']

export function ModaEditorial() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="moda" className="relative bg-graphite">
      <div className="relative h-[68vh] min-h-[440px] w-full overflow-hidden">
        <img
          src={tracksuitBlackRed}
          alt="Vie-Riche — selección de moda Meghan Luxury"
          className="h-full w-full object-cover object-[30%_20%]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/70 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-[90rem] flex-col justify-end px-5 pb-14 sm:px-8">
          <Reveal>
            <span className="text-[11px] tracking-label uppercase text-champagne">The Collection</span>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[0.98] text-ivory sm:text-6xl">
              Moda internacional y diseñadores colombianos.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-[11px] tracking-label uppercase text-ivory-dim/80">
              {BRANDS.map((b, i) => (
                <span key={b}>
                  {b}
                  {i < BRANDS.length - 1 && <span className="ml-3 text-champagne-dim">·</span>}
                </span>
              ))}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <WhatsAppButton message={WA_MESSAGES.moda}>Explorar moda</WhatsAppButton>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 py-8 sm:gap-4 sm:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {STRIP.map((item) => (
          <div
            key={item.id}
            className="group relative w-[58vw] shrink-0 snap-start overflow-hidden rounded-sm bg-ink sm:w-[19rem]"
          >
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            {item.tag && (
              <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 text-[9px] tracking-label uppercase text-champagne-bright">
                {item.tag}
              </span>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4">
              <p className="truncate text-xs text-ivory">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

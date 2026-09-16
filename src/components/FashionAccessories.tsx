import { useRef } from 'react'
import { WA_MESSAGES } from '../data/brand'
import { APPAREL, CAPS, GLASSES, SHOES } from '../data/products'
import { Reveal } from './Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { WhatsAppButton } from './ui/WhatsAppButton'

function interleave<T>(...lists: T[][]): T[] {
  const max = Math.max(...lists.map((l) => l.length))
  const result: T[] = []
  for (let i = 0; i < max; i++) {
    for (const list of lists) {
      if (list[i]) result.push(list[i])
    }
  }
  return result
}

const STRIP = interleave(APPAREL, CAPS, GLASSES, SHOES)

export function FashionAccessories() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  return (
    <section id="accesorios" className="bg-graphite py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker="Moda &amp; Accesorios" title="Un guardarropa sofisticado, pieza a pieza.">
            <p className="max-w-md text-sm text-ivory-dim">
              {STRIP.length} piezas entre moda, gorras, lentes y calzado de la colección.
            </p>
          </SectionHeading>
          <div className="hidden gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 text-ivory hover:border-champagne hover:text-champagne-bright transition-colors"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Siguiente"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 text-ivory hover:border-champagne hover:text-champagne-bright transition-colors"
            >
              →
            </button>
          </div>
        </div>

        <Reveal delay={0.15}>
          <div
            ref={scrollerRef}
            className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {STRIP.map((item) => (
              <div
                key={item.id}
                className="group relative w-[72vw] shrink-0 snap-start overflow-hidden rounded-sm bg-ink sm:w-[22rem]"
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
                  <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-[9px] tracking-label uppercase text-champagne-bright">
                    {item.tag}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-5">
                  <p className="text-sm text-ivory">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10">
            <WhatsAppButton message={WA_MESSAGES.general}>Explorar moda y accesorios</WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

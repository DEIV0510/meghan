import creedAventus from '../assets/perfume/creed-aventus.webp'
import leLaboSantal from '../assets/perfume/le-labo-santal-33.webp'
import montaleSensual from '../assets/perfume/montale-sensual-instinct.webp'
import { WA_MESSAGES } from '../data/brand'
import { Reveal } from './Reveal'
import { GoldStar } from './ui/GoldStar'
import { WhatsAppButton } from './ui/WhatsAppButton'

export function PerfumerySensorial() {
  return (
    <section id="perfumeria" className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,106,0.08),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <div className="flex items-center gap-3 text-champagne">
              <GoldStar className="h-3 w-3" />
              <span className="text-[11px] tracking-label uppercase">Alta Perfumería</span>
            </div>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ivory sm:text-5xl text-balance">
              El arte de elegir una esencia.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory-dim">
              Más de 400 referencias exclusivas de alta perfumería, entre ellas Bond No. 9,
              Bianco Latte, Louis Vuitton, Creed, Versace y muchas más. Una colección olfativa
              incomparable, concebida para los amantes de las esencias exclusivas.
            </p>
            <div className="mt-9">
              <WhatsAppButton message={WA_MESSAGES.perfumeria}>Descubrir perfumería</WhatsAppButton>
            </div>
          </Reveal>

          <div className="relative grid grid-cols-2 gap-4 sm:gap-5">
            <Reveal delay={0.1} className="col-span-2 sm:col-span-1">
              <div className="aspect-[3/4] overflow-hidden rounded-sm border border-champagne-dim/20">
                <img
                  src={creedAventus}
                  alt="Creed Aventus"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105"
                />
              </div>
            </Reveal>
            <div className="col-span-2 grid grid-cols-2 gap-4 sm:col-span-1 sm:grid-cols-1 sm:gap-5">
              <Reveal delay={0.2}>
                <div className="aspect-square overflow-hidden rounded-sm border border-champagne-dim/20">
                  <img
                    src={montaleSensual}
                    alt="Montale Paris Sensual Instinct"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="aspect-square overflow-hidden rounded-sm border border-champagne-dim/20">
                  <img
                    src={leLaboSantal}
                    alt="Le Labo Santal 33"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

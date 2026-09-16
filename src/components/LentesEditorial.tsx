import glassesGoldClear from '../assets/glasses/sunglasses-gold-clear.webp'
import { WA_MESSAGES } from '../data/brand'
import { Reveal } from './Reveal'
import { WhatsAppButton } from './ui/WhatsAppButton'

const BRANDS = [
  'Miu Miu',
  'Oakley',
  'Dolce & Gabbana',
  'Alexander McQueen',
  'Armani Exchange',
  'Bottega Veneta',
  'Cartier',
  'Dior',
  'Gucci',
  'Prada',
]

export function LentesEditorial() {
  return (
    <section id="lentes" className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-4">
        <Reveal>
          <span className="text-[11px] tracking-label uppercase text-champagne-deep">The Frame</span>
          <h2 className="mt-4 font-serif text-4xl leading-[0.98] text-ink sm:text-6xl">
            Lentes de casas reconocidas internacionalmente.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/60">
            Selección fina de gafas de sol y monturas de firmas de mayor renombre.
          </p>
          <div className="mt-8">
            <WhatsAppButton
              message={WA_MESSAGES.lentes}
              variant="outline"
              className="!border-ink/30 !text-ink hover:!border-champagne-deep hover:!text-champagne-deep"
            >
              Consultar lentes
            </WhatsAppButton>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm">
            <img
              src={glassesGoldClear}
              alt="Lentes de lujo — Meghan Luxury"
              loading="lazy"
              className="h-full w-full scale-105 object-contain transition-transform duration-[1.4s] ease-out hover:scale-110"
            />
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.25}>
        <div className="mt-16 overflow-hidden border-t border-ink/10 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 text-center">
            {BRANDS.map((b) => (
              <span key={b} className="text-[11px] tracking-label uppercase text-ink/60">
                {b}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

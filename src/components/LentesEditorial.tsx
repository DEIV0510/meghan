import glassesGoldClear from '../assets/glasses/sunglasses-gold-clear.webp'
import glassesBraid from '../assets/glasses/sunglasses-clear-braid.webp'
import glassesViolet from '../assets/glasses/sunglasses-violet.webp'
import glassesDetail from '../assets/glasses/sunglasses-detail.webp'
import { CATEGORIES, WA_MESSAGES } from '../data/brand'
import { Reveal } from './Reveal'
import { ChapterMark } from './ui/ChapterMark'
import { Marquee } from './ui/Marquee'
import { WhatsAppButton } from './ui/WhatsAppButton'

const CATEGORY = CATEGORIES[2]

export function LentesEditorial() {
  return (
    <section id="lentes" className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <ChapterMark number={CATEGORY.number} kicker={CATEGORY.kicker} title={CATEGORY.title} tone="dark" />

        <div className="relative mt-14 sm:mt-6">
          <Reveal delay={0.1} className="relative mx-auto w-full max-w-3xl lg:ml-auto lg:mr-[4%]">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-paper-dim">
              <img
                src={glassesViolet}
                alt="Lentes de lujo — Meghan Luxury"
                loading="lazy"
                className="h-full w-full animate-soft-drift object-contain p-6"
              />
            </div>
          </Reveal>

          <Reveal
            delay={0.3}
            className="absolute -left-2 top-[8%] hidden w-28 rotate-[-4deg] overflow-hidden rounded-sm border border-ink/10 bg-ivory shadow-xl sm:block lg:w-36"
          >
            <img src={glassesBraid} alt="Montura trenzada" loading="lazy" className="aspect-square w-full object-contain p-3" />
          </Reveal>
          <Reveal
            delay={0.4}
            className="absolute -right-2 bottom-[6%] hidden w-24 rotate-[3deg] overflow-hidden rounded-sm border border-ink/10 bg-ivory shadow-xl sm:right-[2%] sm:block lg:w-32"
          >
            <img src={glassesGoldClear} alt="Montura dorada" loading="lazy" className="aspect-square w-full object-contain p-3" />
          </Reveal>
          <Reveal
            delay={0.5}
            className="absolute left-[6%] -bottom-4 hidden w-20 rotate-[2deg] overflow-hidden rounded-sm border border-ink/10 bg-ivory shadow-xl md:block"
          >
            <img src={glassesDetail} alt="Detalle de bisagra" loading="lazy" className="aspect-square w-full object-contain p-3" />
          </Reveal>

          <Reveal delay={0.2} className="relative mt-10 max-w-md lg:absolute lg:left-0 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2">
            <p className="text-sm leading-relaxed text-ink/60 text-balance">{CATEGORY.description}</p>
            <div className="mt-7">
              <WhatsAppButton
                message={WA_MESSAGES.lentes}
                variant="outline"
                className="!border-ink/30 !text-ink hover:!border-champagne-deep hover:!text-champagne-deep"
              >
                Consultar lentes
              </WhatsAppButton>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.3}>
        <div className="mt-20 border-t border-ink/10 py-6">
          <Marquee items={CATEGORY.brands} className="text-sm tracking-label uppercase text-ink/50" />
        </div>
      </Reveal>
    </section>
  )
}

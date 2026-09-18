import { CATEGORIES } from '../data/brand'
import { APPAREL, CAMPAIGN } from '../data/products'
import { CLIPS } from '../data/media'
import { useUI } from '../lib/UIContext'
import { Reveal } from './Reveal'
import { ChapterMark } from './ui/ChapterMark'
import { LazyVideo } from './ui/LazyVideo'
import { Marquee } from './ui/Marquee'
import { ProductCard } from './ProductCard'

const CATEGORY = CATEGORIES[1]
const [FEATURE, ...SECONDARY] = CAMPAIGN.filter((c) => c.hero).slice(0, 5)
const SHOP_ROW = APPAREL.slice(0, 10)

export function ModaEditorial() {
  const { openProduct } = useUI()

  return (
    <section id="moda" className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <ChapterMark number={CATEGORY.number} kicker={CATEGORY.kicker} title={CATEGORY.title} tone="dark" />
        <Reveal delay={0.15} className="mt-6 max-w-xl text-sm text-stone sm:text-base">
          {CATEGORY.description}
        </Reveal>

        {/* Lookbook composition — one large image + a few secondary frames, not a grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-5 sm:gap-5">
          <Reveal className="sm:col-span-3">
            <div className="relative h-[46vh] overflow-hidden sm:h-[68vh]">
              <img src={FEATURE.image} alt="Campaña Vie-Riche" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-[10px] tracking-label uppercase text-ivory/90">
                Vie-Riche · Campaña
              </span>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 sm:col-span-2 sm:grid-cols-1 sm:gap-5">
            {SECONDARY.slice(0, 2).map((plate, i) => (
              <Reveal key={plate.id} delay={0.1 + i * 0.08}>
                <div className="relative h-[22vh] overflow-hidden sm:h-[32vh]">
                  <img src={plate.image} alt="Campaña Vie-Riche" loading="lazy" className="h-full w-full object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-5 sm:mt-6">
          <div className="relative h-[30vh] overflow-hidden sm:h-[38vh]">
            <LazyVideo clip={CLIPS.modaGraffitiWalk} className="h-full w-full object-cover" />
          </div>
        </Reveal>

        {/* Shoppable row */}
        <div className="mt-16 flex items-end justify-between">
          <p className="text-[11px] tracking-label uppercase text-champagne-deep">La colección</p>
        </div>
        <div className="mt-6 flex gap-5 overflow-x-auto pb-4">
          {SHOP_ROW.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i * 0.04, 0.3)} className="w-44 shrink-0 sm:w-56">
              <ProductCard product={p} onOpen={openProduct} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-8 border-t border-stone/15 pt-10 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] tracking-label uppercase text-champagne-deep">Casas representadas</p>
            <div className="mt-3 max-w-md">
              <Marquee items={CATEGORY.brands} className="text-sm tracking-label uppercase text-stone" speed="slow" />
            </div>
          </div>
          <a
            href="#archivo"
            className="inline-flex shrink-0 items-center gap-2 border border-ink px-7 py-3.5 font-sans text-xs tracking-label uppercase text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory"
          >
            Explorar Moda
          </a>
        </div>
      </div>
    </section>
  )
}

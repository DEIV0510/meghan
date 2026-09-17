import { CATEGORIES } from '../data/brand'
import { CAMPAIGN } from '../data/products'
import { CLIPS } from '../data/media'
import { Reveal } from './Reveal'
import { ChapterMark } from './ui/ChapterMark'
import { LazyVideo } from './ui/LazyVideo'
import { Marquee } from './ui/Marquee'

const CATEGORY = CATEGORIES[1]
const [FEATURE, ...REST] = CAMPAIGN.filter((c) => c.hero)
const MASONRY = REST

export function ModaEditorial() {
  return (
    <section id="moda" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <ChapterMark number={CATEGORY.number} kicker={CATEGORY.kicker} title={CATEGORY.title} />
        <Reveal delay={0.15} className="mt-6 max-w-xl text-sm text-ivory-dim sm:text-base">
          {CATEGORY.description}
        </Reveal>

        {/* Feature strip — asymmetric, photo + living video side by side */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-5 sm:gap-5">
          <Reveal className="sm:col-span-3">
            <div className="relative h-[46vh] overflow-hidden rounded-sm sm:h-[68vh]">
              <img
                src={FEATURE.image}
                alt="Campaña Vie-Riche"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-[10px] tracking-label uppercase text-ivory/80">
                Vie-Riche · Campaña
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="sm:col-span-2">
            <div className="relative h-[32vh] overflow-hidden rounded-sm sm:h-[68vh]">
              <LazyVideo clip={CLIPS.modaGraffitiWalk} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>

        {/* Editorial masonry — orientation-driven, not a uniform grid */}
        <div className="mt-5 columns-2 gap-4 sm:mt-6 sm:columns-3 sm:gap-5 lg:columns-4">
          {MASONRY.map((plate, i) => (
            <Reveal key={plate.id} delay={(i % 4) * 0.05} className="mb-4 break-inside-avoid sm:mb-5">
              <div className="group relative overflow-hidden rounded-sm">
                <img
                  src={plate.image}
                  alt="Campaña Vie-Riche"
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}

          <Reveal className="mb-4 break-inside-avoid sm:mb-5">
            <div className="relative overflow-hidden rounded-sm">
              <LazyVideo clip={CLIPS.modaStoneSit} className="w-full object-cover" />
            </div>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-8 border-t border-champagne-dim/15 pt-10 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] tracking-label uppercase text-champagne">Casas representadas</p>
            <div className="mt-3 max-w-md">
              <Marquee items={CATEGORY.brands} className="text-sm tracking-label uppercase text-ivory-dim/70" speed="slow" />
            </div>
          </div>
          <a
            href="#archivo"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-champagne/50 px-7 py-3.5 font-sans text-xs tracking-label uppercase text-ivory transition-colors duration-300 hover:border-champagne hover:bg-champagne/10"
          >
            Explorar Moda
          </a>
        </div>
      </div>
    </section>
  )
}

import { CAMPAIGN } from '../data/products'
import { CLIPS } from '../data/media'
import { Reveal } from './Reveal'
import { GoldStar } from './ui/GoldStar'
import { LazyVideo } from './ui/LazyVideo'

const MOSAIC = CAMPAIGN.filter((c) => !c.hero)

export function TheMeghanEdit() {
  return (
    <section className="relative overflow-hidden bg-graphite py-24 sm:py-32">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-champagne">
            <GoldStar className="h-3 w-3" />
            <span className="text-[11px] tracking-label uppercase">Lookbook</span>
          </div>
          <h2 className="mt-3 font-serif text-4xl text-ivory sm:text-6xl">The Meghan Edit</h2>
        </Reveal>

        <div className="mt-12 columns-2 gap-4 sm:columns-3 sm:gap-5 lg:columns-4">
          <Reveal className="mb-4 break-inside-avoid sm:mb-5">
            <div className="overflow-hidden">
              <LazyVideo clip={CLIPS.archiveBikePalms} className="w-full object-cover" />
            </div>
          </Reveal>
          {MOSAIC.map((plate, i) => (
            <Reveal key={plate.id} delay={(i % 4) * 0.05} className="mb-4 break-inside-avoid sm:mb-5">
              <div className="group relative overflow-hidden">
                <img
                  src={plate.image}
                  alt="Meghan Luxury — lookbook"
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
          <Reveal className="mb-4 break-inside-avoid sm:mb-5">
            <div className="overflow-hidden">
              <LazyVideo clip={CLIPS.archivePoloReveal} className="w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

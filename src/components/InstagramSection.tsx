import { BRAND } from '../data/brand'
import { APPAREL, CAPS, GLASSES, PERFUMES, SHOES } from '../data/products'
import { Reveal } from './Reveal'
import { GoldStar } from './ui/GoldStar'

const MOSAIC = [
  APPAREL[0],
  GLASSES[0],
  CAPS[2],
  SHOES[3],
  PERFUMES[4],
  APPAREL[10],
  GLASSES[3],
  SHOES[0],
  PERFUMES[9],
]

export function InstagramSection() {
  return (
    <section className="bg-graphite py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 text-champagne">
              <GoldStar className="h-3 w-3" />
              <span className="text-[11px] tracking-label uppercase">El universo Meghan en Instagram</span>
            </div>
            <h2 className="mt-5 font-serif text-3xl text-ivory sm:text-4xl">{BRAND.instagramHandle}</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-4">
            {MOSAIC.map((item, i) => (
              <a
                key={item.id}
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block overflow-hidden bg-ink ${
                  i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/40">
                  <span className="text-2xl text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    ⌗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-champagne/60 px-7 py-3.5 text-xs tracking-label uppercase text-ivory transition-all duration-300 hover:border-champagne hover:bg-champagne/10 hover:text-champagne-bright"
            >
              Descubrir más en Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

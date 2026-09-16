import { BRAND } from '../data/brand'
import { APPAREL, CAPS, GLASSES, PERFUMES, SHOES } from '../data/products'
import { Reveal } from './Reveal'
import { GoldStar } from './ui/GoldStar'

const ROW_A = [PERFUMES[0], APPAREL[0], GLASSES[0], SHOES[0], PERFUMES[6], CAPS[1], APPAREL[5], PERFUMES[9]]
const ROW_B = [APPAREL[10], SHOES[3], PERFUMES[4], CAPS[4], GLASSES[3], PERFUMES[12], APPAREL[18], SHOES[1]]

function Row({ items, reverse }: { items: typeof ROW_A; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex shrink-0 gap-3 sm:gap-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {doubled.map((item, i) => (
          <a
            key={`${item.id}-${i}`}
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="VER"
            className="group relative block h-40 w-40 shrink-0 overflow-hidden sm:h-56 sm:w-56"
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/30" />
          </a>
        ))}
      </div>
    </div>
  )
}

export function InstagramSection() {
  return (
    <section className="relative overflow-hidden bg-graphite py-24 sm:py-32">
      <Reveal>
        <div className="mx-auto mb-14 flex max-w-[90rem] flex-col items-center px-5 text-center">
          <div className="flex items-center gap-3 text-champagne">
            <GoldStar className="h-3 w-3" />
            <span className="text-[11px] tracking-label uppercase">El universo Meghan</span>
          </div>
          <h2 className="mt-4 font-serif text-4xl text-ivory sm:text-6xl">{BRAND.instagramHandle}</h2>
        </div>
      </Reveal>

      <div className="flex flex-col gap-3 sm:gap-4">
        <Row items={ROW_A} />
        <Row items={ROW_B} reverse />
      </div>

      <Reveal delay={0.2}>
        <div className="mt-14 flex justify-center px-5">
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-champagne/60 px-7 py-3.5 text-xs tracking-label uppercase text-ivory transition-all duration-300 hover:border-champagne hover:bg-champagne/10 hover:text-champagne-bright"
          >
            Ver Instagram →
          </a>
        </div>
      </Reveal>
    </section>
  )
}

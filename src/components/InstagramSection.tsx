import { BRAND } from '../data/brand'
import { APPAREL, CAMPAIGN, CAPS, GLASSES, PERFUMES, SHOES, productDisplayName, type Product } from '../data/products'
import { Reveal } from './Reveal'
import { GoldStar } from './ui/GoldStar'

type RowItem = { id: string; image: string; name?: string }

function fromProduct(p: Product): RowItem {
  return { id: p.id, image: p.images[0], name: productDisplayName(p) }
}

const ROW_A: RowItem[] = [
  CAMPAIGN[0],
  fromProduct(PERFUMES[0]),
  fromProduct(APPAREL[0]),
  CAMPAIGN[2],
  fromProduct(GLASSES[0]),
  fromProduct(SHOES[0]),
  CAMPAIGN[5],
  fromProduct(PERFUMES[6]),
  fromProduct(CAPS[1]),
]
const ROW_B: RowItem[] = [
  fromProduct(APPAREL[10]),
  CAMPAIGN[8],
  fromProduct(SHOES[1]),
  fromProduct(PERFUMES[4]),
  CAMPAIGN[11],
  fromProduct(CAPS[4]),
  fromProduct(GLASSES[3]),
  CAMPAIGN[3],
  fromProduct(PERFUMES[12]),
]

function Row({ items, reverse, tall }: { items: RowItem[]; reverse?: boolean; tall?: boolean }) {
  const doubled = [...items, ...items]
  const size = tall ? 'h-48 w-40 sm:h-64 sm:w-56' : 'h-36 w-36 sm:h-48 sm:w-48'
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
            className={`group relative block shrink-0 overflow-hidden ${size}`}
          >
            <img
              src={item.image}
              alt={item.name ?? 'Meghan Luxury'}
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
        <Row items={ROW_A} tall />
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

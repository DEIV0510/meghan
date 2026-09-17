import { useMemo, useState } from 'react'
import type { CategoryKey } from '../data/brand'
import { ALL_PRODUCTS, CAMPAIGN } from '../data/products'
import { Reveal } from './Reveal'
import { GoldStar } from './ui/GoldStar'
import { ProductModal } from './ProductModal'

export interface ArchiveItem {
  id: string
  image: string
  name: string
  category: CategoryKey | 'gorras'
  tag?: string
}

const CATEGORY_LABEL: Record<ArchiveItem['category'], string> = {
  perfumeria: 'Perfumería',
  moda: 'Moda',
  lentes: 'Lentes',
  calzado: 'Calzado',
  gorras: 'Gorras',
}

const CAMPAIGN_CAPTIONS: Record<string, string> = {
  'estate-cream-car': 'Luxury Estate · En ruta',
  'crew-studio-lookbook': 'Vie-Riche · Estudio',
  'yacht-helicopter': 'Riche · Alta mar',
  'tennis-court': 'Riche · Cancha',
  'lounge-chair-estate': 'Luxury Estate · Interior',
  'private-jet': 'Luxury Estate · Vuelo privado',
  'purple-porsche-driveway': 'Luxury Estate · Garage',
  'purple-suv-wide': 'Luxury Estate · Exterior',
  'pitch-jerseys-flatlay': 'Riche · Cancha',
  'arena-tracksuit-walk': 'Riche · Arena',
  'lv-trunk-van': 'Riche · Equipaje',
  'garden-hose-play': 'Luxury Estate · Jardín',
  'denim-crew-brick': 'Riche · Crew',
  'armchair-portrait': 'Riche · Retrato',
  'car-interior-jersey': 'Riche · Interior',
  'golf-course': 'Luxury Estate · Golf',
  'convertible-interior': 'Luxury Estate · Convertible',
  'suv-estate-tee': 'Luxury Estate · Suburbio',
  'turquoise-beach-house': 'Luxury Estate · Costa',
  'suv-interior-neon': 'Luxury Estate · Noche',
  'four-friends-studio': 'Riche · Grupo',
  'pitch-duo-nets': 'Riche · Entrenamiento',
  'rooftop-duo-masks': 'Riche · Rooftop',
  'convertible-duo-masks': 'Riche · Paseo',
}

const CAMPAIGN_ITEMS: ArchiveItem[] = CAMPAIGN.map((c) => ({
  id: c.id,
  image: c.image,
  name: CAMPAIGN_CAPTIONS[c.id] ?? 'Vie-Riche · Editorial',
  category: 'moda',
  tag: 'Editorial',
}))

const ITEMS: ArchiveItem[] = [...ALL_PRODUCTS, ...CAMPAIGN_ITEMS]

const FILTERS: { key: CategoryKey | 'gorras' | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'perfumeria', label: 'Perfumería' },
  { key: 'moda', label: 'Moda' },
  { key: 'lentes', label: 'Lentes' },
  { key: 'calzado', label: 'Calzado' },
  { key: 'gorras', label: 'Gorras' },
]

// Deterministic shuffle so the archive reads as a curated wall, not grouped blocks.
function seededShuffle<T>(arr: T[]): T[] {
  const out = [...arr]
  let seed = 42
  for (let i = out.length - 1; i > 0; i--) {
    seed = (seed * 9301 + 49297) % 233280
    const j = Math.floor((seed / 233280) * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

const SHUFFLED = seededShuffle(ITEMS)

export function Archive() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]['key']>('all')
  const [active, setActive] = useState<ArchiveItem | null>(null)

  const visible = useMemo(
    () => (filter === 'all' ? SHUFFLED : SHUFFLED.filter((item) => item.category === filter)),
    [filter],
  )

  return (
    <section id="archivo" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 text-champagne">
            <GoldStar className="h-3 w-3" />
            <span className="text-[11px] tracking-label uppercase">The Meghan Archive</span>
          </div>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-[0.98] text-ivory sm:text-6xl text-balance">
            Cada referencia, un descubrimiento.
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-full border px-5 py-2 text-[11px] tracking-label uppercase transition-colors duration-300 ${
                filter === f.key
                  ? 'border-champagne bg-champagne text-ink'
                  : 'border-champagne-dim/30 text-ivory-dim hover:border-champagne/60 hover:text-champagne-bright'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div key={filter} className="mt-12 columns-2 gap-4 sm:columns-3 sm:gap-5 lg:columns-4">
          {visible.map((item, i) => (
            <Reveal key={item.id} delay={Math.min(i * 0.03, 0.4)} className="mb-4 break-inside-avoid sm:mb-5">
              <button
                type="button"
                onClick={() => setActive(item)}
                className="group relative block w-full overflow-hidden rounded-sm text-left"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 via-ink/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-1.5 text-champagne">
                    <GoldStar className="h-2.5 w-2.5" />
                    <span className="text-[9px] tracking-label uppercase">{item.tag ?? CATEGORY_LABEL[item.category]}</span>
                  </div>
                  <p className="mt-1 font-serif text-sm text-ivory">{item.name}</p>
                  <span className="mt-1 text-[10px] tracking-label uppercase text-champagne-bright">Consultar →</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <ProductModal item={active} onClose={() => setActive(null)} />
    </section>
  )
}

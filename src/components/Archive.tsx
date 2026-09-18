import { useMemo, useState } from 'react'
import type { CategoryKey } from '../data/brand'
import { ALL_PRODUCTS } from '../data/products'
import { useUI } from '../lib/UIContext'
import { Reveal } from './Reveal'
import { GoldStar } from './ui/GoldStar'
import { ProductCard } from './ProductCard'

const CATEGORY_FILTERS: { key: CategoryKey | 'gorras' | 'all'; label: string }[] = [
  { key: 'all', label: 'Todo' },
  { key: 'perfumeria', label: 'Perfumería' },
  { key: 'moda', label: 'Moda' },
  { key: 'lentes', label: 'Lentes' },
  { key: 'calzado', label: 'Calzado' },
  { key: 'gorras', label: 'Gorras' },
]

// Deterministic shuffle so the shop reads as a curated wall, not grouped blocks.
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

const SHUFFLED = seededShuffle(ALL_PRODUCTS)
const BRANDS = Array.from(new Set(ALL_PRODUCTS.map((p) => p.brand).filter((b): b is string => !!b))).sort()

export function Archive() {
  const { openProduct } = useUI()
  const [category, setCategory] = useState<(typeof CATEGORY_FILTERS)[number]['key']>('all')
  const [brand, setBrand] = useState<string | null>(null)
  const [onlyNew, setOnlyNew] = useState(false)

  const visible = useMemo(() => {
    return SHUFFLED.filter((p) => {
      if (category !== 'all' && p.category !== category) return false
      if (brand && p.brand !== brand) return false
      if (onlyNew && !p.isNew) return false
      return true
    })
  }, [category, brand, onlyNew])

  return (
    <section id="archivo" className="relative overflow-hidden bg-snow py-24 sm:py-32">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 text-champagne">
            <GoldStar className="h-3 w-3" />
            <span className="text-[11px] tracking-label uppercase">The Meghan Archive</span>
          </div>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-[0.98] text-charcoal sm:text-6xl text-balance">
            Toda la colección, en un solo lugar.
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORY_FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setCategory(f.key)}
              className={`border px-5 py-2 text-[11px] tracking-label uppercase transition-colors duration-300 ${
                category === f.key
                  ? 'border-ink bg-ink text-ivory'
                  : 'border-stone/30 text-charcoal hover:border-ink'
              }`}
            >
              {f.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setOnlyNew((v) => !v)}
            className={`border px-5 py-2 text-[11px] tracking-label uppercase transition-colors duration-300 ${
              onlyNew ? 'border-champagne-deep bg-champagne-deep text-ivory' : 'border-stone/30 text-charcoal hover:border-ink'
            }`}
          >
            Novedades
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <button
            type="button"
            onClick={() => setBrand(null)}
            className={`text-[10px] tracking-label uppercase ${!brand ? 'text-ink underline underline-offset-4' : 'text-stone hover:text-charcoal'}`}
          >
            Todas las marcas
          </button>
          {BRANDS.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBrand(b)}
              className={`text-[10px] tracking-label uppercase ${brand === b ? 'text-ink underline underline-offset-4' : 'text-stone hover:text-charcoal'}`}
            >
              {b}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-16 text-center text-sm text-stone">No hay referencias para esta combinación de filtros.</p>
        ) : (
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} onOpen={openProduct} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

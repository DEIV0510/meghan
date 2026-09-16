import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { WA_MESSAGES } from '../data/brand'
import { CAPS, GLASSES, PERFUMES, SHOES, type Product } from '../data/products'
import { Reveal } from './Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { WhatsAppButton } from './ui/WhatsAppButton'

interface CatalogedProduct extends Product {
  category: string
}

const withCategory = (items: Product[], category: string): CatalogedProduct[] =>
  items.map((p) => ({ ...p, category }))

const ALL_PRODUCTS: CatalogedProduct[] = [
  ...withCategory(PERFUMES, 'Perfumería'),
  ...withCategory(CAPS, 'Moda'),
  ...withCategory(GLASSES, 'Lentes'),
  ...withCategory(SHOES, 'Calzado'),
]

const TABS = [
  { key: 'todas', label: 'Todas', items: ALL_PRODUCTS, waMessage: WA_MESSAGES.general },
  { key: 'perfumeria', label: 'Alta Perfumería', items: withCategory(PERFUMES, 'Perfumería'), waMessage: WA_MESSAGES.perfumeria },
  { key: 'moda', label: 'Moda', items: withCategory(CAPS, 'Moda'), waMessage: WA_MESSAGES.moda },
  { key: 'lentes', label: 'Lentes', items: withCategory(GLASSES, 'Lentes'), waMessage: WA_MESSAGES.lentes },
  { key: 'calzado', label: 'Calzado', items: withCategory(SHOES, 'Calzado'), waMessage: WA_MESSAGES.calzado },
] as const

// Varies tile proportions across the masonry so the wall reads as an editorial
// collage rather than a uniform product grid — index-based, not random, so
// layout stays stable across re-renders.
const TILE_ASPECT = ['aspect-[3/4]', 'aspect-square', 'aspect-[4/5]', 'aspect-[3/4]']

export function ProductGallery() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]['key']>('todas')
  const [selected, setSelected] = useState<CatalogedProduct | null>(null)

  const tab = useMemo(() => TABS.find((t) => t.key === activeTab)!, [activeTab])

  return (
    <section id="galeria" className="bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading kicker="Galería" title="Descubre la selección, referencia a referencia.">
          <p className="max-w-md text-sm text-ivory-dim">
            {ALL_PRODUCTS.length} referencias reales de nuestra curaduría de moda, perfumería y
            accesorios.
          </p>
        </SectionHeading>

        <div className="mt-10 flex flex-wrap gap-3">
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActiveTab(t.key)}
              className={`rounded-full border px-5 py-2.5 text-[11px] tracking-label uppercase transition-all duration-300 ${
                activeTab === t.key
                  ? 'border-champagne bg-champagne text-ink'
                  : 'border-ivory/20 text-ivory-dim hover:border-champagne/50 hover:text-champagne-bright'
              }`}
            >
              {t.label}
              <span className="ml-2 opacity-60">{t.items.length}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-10 columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4 xl:columns-5"
        >
          {tab.items.map((product, i) => (
            <Reveal key={`${activeTab}-${product.id}`} delay={Math.min(i * 0.02, 0.24)} className="mb-3 break-inside-avoid sm:mb-4">
              <button
                type="button"
                onClick={() => setSelected(product)}
                className="group relative block w-full overflow-hidden rounded-sm bg-graphite text-left"
              >
                <div className={`w-full overflow-hidden ${TILE_ASPECT[i % TILE_ASPECT.length]}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                  {activeTab === 'todas' && (
                    <span className="rounded-full bg-ink/80 px-2.5 py-1 text-[9px] tracking-label uppercase text-ivory-dim">
                      {product.category}
                    </span>
                  )}
                  {product.tag && (
                    <span className="rounded-full bg-champagne/90 px-2.5 py-1 text-[9px] tracking-label uppercase text-ink">
                      {product.tag}
                    </span>
                  )}
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-3 pt-10">
                  <p className="truncate text-xs text-ivory">{product.name}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Cerrar"
                className="absolute -top-10 right-0 text-2xl text-ivory/70 hover:text-champagne-bright"
              >
                <span className="inline-block rotate-45">+</span>
              </button>
              <div className="overflow-hidden rounded-sm border border-champagne-dim/20 bg-graphite">
                <img src={selected.image} alt={selected.name} className="w-full object-cover" />
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] tracking-label uppercase text-champagne-bright/80">{selected.category}</p>
                  <h3 className="font-serif text-xl text-ivory">{selected.name}</h3>
                </div>
                <WhatsAppButton message={WA_MESSAGES.producto(selected.name)} className="!py-2.5 !px-5 !text-[10px]">
                  Consultar disponibilidad
                </WhatsAppButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

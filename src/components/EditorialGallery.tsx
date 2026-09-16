import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { WA_MESSAGES } from '../data/brand'
import { APPAREL, CAPS, GLASSES, PERFUMES, SHOES, type Product } from '../data/products'
import { Reveal } from './Reveal'
import { WhatsAppButton } from './ui/WhatsAppButton'

interface CatalogedProduct extends Product {
  category: string
}

const withCategory = (items: Product[], category: string): CatalogedProduct[] =>
  items.map((p) => ({ ...p, category }))

const MODA = [...APPAREL, ...CAPS]

const ALL_PRODUCTS: CatalogedProduct[] = [
  ...withCategory(PERFUMES, 'Perfumería'),
  ...withCategory(MODA, 'Moda'),
  ...withCategory(GLASSES, 'Lentes'),
  ...withCategory(SHOES, 'Calzado'),
]

const TABS = [
  { key: 'todas', label: 'Todas', items: ALL_PRODUCTS, waMessage: WA_MESSAGES.general },
  { key: 'perfumeria', label: 'Perfumería', items: withCategory(PERFUMES, 'Perfumería'), waMessage: WA_MESSAGES.perfumeria },
  { key: 'moda', label: 'Moda', items: withCategory(MODA, 'Moda'), waMessage: WA_MESSAGES.moda },
  { key: 'lentes', label: 'Lentes', items: withCategory(GLASSES, 'Lentes'), waMessage: WA_MESSAGES.lentes },
  { key: 'calzado', label: 'Calzado', items: withCategory(SHOES, 'Calzado'), waMessage: WA_MESSAGES.calzado },
] as const

const TILE_ASPECT = ['aspect-[3/4]', 'aspect-square', 'aspect-[4/5]', 'aspect-[3/4]', 'aspect-square']

const FEATURED = [
  { ...withCategory(PERFUMES, 'Perfumería')[0], span: 'col-span-4 row-span-2' },
  { ...withCategory(MODA, 'Moda')[0], span: 'col-span-2 row-span-1' },
  { ...withCategory(GLASSES, 'Lentes')[0], span: 'col-span-2 row-span-1' },
  { ...withCategory(SHOES, 'Calzado')[0], span: 'col-span-3 row-span-1' },
  { ...withCategory(PERFUMES, 'Perfumería')[4], span: 'col-span-3 row-span-1' },
]

export function EditorialGallery() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]['key']>('todas')
  const [selected, setSelected] = useState<CatalogedProduct | null>(null)

  const tab = useMemo(() => TABS.find((t) => t.key === activeTab)!, [activeTab])
  const wallItems = activeTab === 'todas' ? tab.items.slice(FEATURED.length) : tab.items

  return (
    <section id="galeria" className="bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="flex items-center gap-3 text-champagne">
                <span className="h-px w-8 bg-champagne-dim/60" />
                <span className="text-[11px] tracking-label uppercase">Editorial Wall</span>
              </div>
              <h2 className="mt-4 font-serif text-4xl leading-[0.98] text-ivory sm:text-6xl">
                {ALL_PRODUCTS.length} referencias reales.
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setActiveTab(t.key)}
                  className={`rounded-full border px-4 py-2 text-[10px] tracking-label uppercase transition-all duration-300 ${
                    activeTab === t.key
                      ? 'border-champagne bg-champagne text-ink'
                      : 'border-ivory/15 text-ivory-dim hover:border-champagne/50 hover:text-champagne-bright'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {activeTab === 'todas' && (
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-6 sm:gap-4 sm:auto-rows-[11rem]">
            {FEATURED.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.06} className={`${product.span} min-h-[16rem] sm:min-h-0`}>
                <GalleryTile product={product} showCategory onOpen={() => setSelected(product)} />
              </Reveal>
            ))}
          </div>
        )}

        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-4 columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4 xl:columns-5"
        >
          {wallItems.map((product, i) => (
            <Reveal
              key={`${activeTab}-${product.id}`}
              delay={Math.min(i * 0.02, 0.24)}
              className="mb-3 break-inside-avoid sm:mb-4"
            >
              <div className={`w-full ${TILE_ASPECT[i % TILE_ASPECT.length]}`}>
                <GalleryTile product={product} showCategory={activeTab === 'todas'} onOpen={() => setSelected(product)} />
              </div>
            </Reveal>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <Lightbox product={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}

function GalleryTile({
  product,
  showCategory,
  onOpen,
}: {
  product: CatalogedProduct
  showCategory: boolean
  onOpen: () => void
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block h-full w-full overflow-hidden bg-graphite text-left"
    >
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-70"
      />

      {showCategory && (
        <span className="absolute left-3 top-3 rounded-full bg-ink/60 px-2.5 py-1 text-[9px] tracking-label uppercase text-ivory/80">
          {product.category}
        </span>
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink/0 opacity-0 transition-all duration-400 group-hover:bg-ink/55 group-hover:opacity-100">
        <span className="h-px w-8 origin-center scale-x-0 bg-champagne transition-transform duration-500 group-hover:scale-x-100" />
        <span className="px-4 text-center text-xs text-ivory">{product.name}</span>
        <span className="text-[9px] tracking-label uppercase text-champagne-bright">Consultar</span>
      </div>
    </button>
  )
}

function Lightbox({ product, onClose }: { product: CatalogedProduct; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-5 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute -top-10 right-0 text-2xl text-ivory/70 hover:text-champagne-bright"
        >
          <span className="inline-block rotate-45">+</span>
        </button>
        <div className="overflow-hidden border border-champagne-dim/20 bg-graphite">
          <img src={product.image} alt={product.name} className="w-full object-cover" />
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[10px] tracking-label uppercase text-champagne-bright/80">{product.category}</p>
            <h3 className="font-serif text-xl text-ivory">{product.name}</h3>
          </div>
          <WhatsAppButton message={WA_MESSAGES.producto(product.name)} className="!py-2.5 !px-5 !text-[10px]">
            Consultar disponibilidad
          </WhatsAppButton>
        </div>
      </motion.div>
    </motion.div>
  )
}

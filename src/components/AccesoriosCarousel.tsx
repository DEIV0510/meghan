import { CAPS, GLASSES } from '../data/products'
import { useUI } from '../lib/UIContext'
import { Reveal } from './Reveal'
import { GoldStar } from './ui/GoldStar'
import { ProductCard } from './ProductCard'

const ITEMS = [...CAPS, ...GLASSES]

export function AccesoriosCarousel() {
  const { openProduct } = useUI()

  return (
    <section id="accesorios" className="relative bg-snow py-20 sm:py-28">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <Reveal className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2 text-champagne">
              <GoldStar className="h-3 w-3" />
              <span className="text-[11px] tracking-label uppercase">Accesorios</span>
            </div>
            <h2 className="mt-3 font-serif text-4xl text-charcoal sm:text-5xl">Gorras &amp; lentes</h2>
          </div>
        </Reveal>
      </div>

      <div className="mt-10 flex gap-5 overflow-x-auto px-5 pb-4 sm:px-8">
        {ITEMS.map((product, i) => (
          <Reveal key={product.id} delay={Math.min(i * 0.04, 0.3)} className="w-44 shrink-0 sm:w-56">
            <ProductCard product={product} onOpen={openProduct} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

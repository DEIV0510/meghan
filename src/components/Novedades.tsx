import { NEW_PRODUCTS } from '../data/products'
import { useUI } from '../lib/UIContext'
import { Reveal } from './Reveal'
import { GoldStar } from './ui/GoldStar'
import { ProductCard } from './ProductCard'

export function Novedades() {
  const { openProduct } = useUI()

  return (
    <section id="novedades" className="relative bg-snow py-20 sm:py-28">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <Reveal className="flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-champagne">
              <GoldStar className="h-3 w-3" />
              <span className="text-[11px] tracking-label uppercase">Recién llegado</span>
            </div>
            <h2 className="mt-3 font-serif text-4xl leading-[0.95] text-charcoal sm:text-5xl">Novedades</h2>
          </div>
          <a
            href="#archivo"
            className="text-[11px] tracking-label uppercase text-charcoal underline underline-offset-4 hover:text-champagne-deep"
          >
            Ver toda la colección
          </a>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {NEW_PRODUCTS.map((product, i) => (
            <Reveal key={product.id} delay={Math.min(i * 0.06, 0.3)}>
              <ProductCard product={product} onOpen={openProduct} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import type { Product } from '../data/products'
import { formatPrice } from '../lib/commerce'
import { useCart } from '../lib/CartContext'

const CATEGORY_LABEL: Record<Product['category'], string> = {
  perfumeria: 'Perfumería',
  moda: 'Moda',
  lentes: 'Lentes',
  calzado: 'Calzado',
  gorras: 'Gorras',
}

interface ProductCardProps {
  product: Product
  onOpen?: (product: Product) => void
  className?: string
}

export function ProductCard({ product, onOpen, className = '' }: ProductCardProps) {
  const { addItem } = useCart()
  const [hovered, setHovered] = useState(false)
  const secondImage = product.images[1]

  return (
    <div className={`group relative flex flex-col ${className}`}>
      <button
        type="button"
        onClick={() => onOpen?.(product)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative block aspect-[4/5] w-full overflow-hidden bg-paper text-left"
        aria-label={`Ver ${product.name}`}
      >
        {product.isNew && (
          <span className="absolute left-3 top-3 z-10 bg-ink px-2.5 py-1 text-[9px] tracking-label uppercase text-ivory">
            New
          </span>
        )}
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.035] ${
            secondImage && hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {secondImage && (
          <img
            src={secondImage}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        <div
          className={`absolute inset-x-0 bottom-0 flex items-center justify-center bg-ink/85 py-2.5 text-[10px] tracking-label uppercase text-ivory transition-transform duration-300 ease-out sm:translate-y-full sm:group-hover:translate-y-0`}
        >
          Ver producto
        </div>
      </button>

      <div className="mt-3 flex flex-1 flex-col">
        <span className="text-[10px] tracking-label uppercase text-stone">{CATEGORY_LABEL[product.category]}</span>
        <h3 className="mt-1 font-serif text-base leading-snug text-charcoal">
          {product.brand && <span className="text-charcoal">{product.brand}</span>}
          {product.brand ? ' · ' : ''}
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-stone">{formatPrice(product.price)}</p>

        <button
          type="button"
          onClick={() => addItem(product)}
          className="mt-3 w-full border border-ink py-2.5 text-[10px] tracking-label uppercase text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { Product } from '../data/products'
import { buildProductWhatsAppMessage, formatPrice } from '../lib/commerce'
import { useCart } from '../lib/CartContext'
import { waLink } from '../data/brand'
import { GoldStar } from './ui/GoldStar'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

const CATEGORY_LABEL: Record<Product['category'], string> = {
  perfumeria: 'Perfumería',
  moda: 'Moda',
  lentes: 'Lentes',
  calzado: 'Calzado',
  gorras: 'Gorras',
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    setQty(1)
    setActiveImage(0)
  }, [product])

  useEffect(() => {
    if (!product) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [product, onClose])

  if (!product) return null

  return (
    <motion.div
      className="fixed inset-0 z-[75] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative grid w-full max-w-4xl grid-cols-1 overflow-hidden bg-snow sm:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-snow/80 text-charcoal transition-colors hover:text-champagne-deep"
        >
          <span className="rotate-45 text-xl leading-none">+</span>
        </button>

        <div className="flex flex-col bg-paper">
          <div className="aspect-square">
            <img src={product.images[activeImage]} alt={product.name} className="h-full w-full object-contain p-8" />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2 px-6 pb-6">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`h-16 w-16 overflow-hidden border transition-colors ${
                    i === activeImage ? 'border-ink' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-contain bg-snow" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center gap-4 p-7 sm:p-10">
          <div className="flex items-center gap-2 text-champagne">
            <GoldStar className="h-3 w-3" />
            <span className="text-[10px] tracking-label uppercase">{CATEGORY_LABEL[product.category]}</span>
          </div>
          <h3 className="font-serif text-2xl leading-tight text-charcoal sm:text-3xl">
            {product.brand && <span>{product.brand}</span>}
            {product.brand ? ' · ' : ''}
            {product.name}
          </h3>
          {product.tag && <p className="text-xs tracking-label uppercase text-stone">{product.tag}</p>}
          <p className="font-serif text-xl text-charcoal">{formatPrice(product.price)}</p>

          <div className="flex items-center gap-4">
            <div className="flex items-center border border-stone/30">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Reducir cantidad"
                className="flex h-10 w-10 items-center justify-center text-charcoal hover:bg-paper"
              >
                −
              </button>
              <span className="w-10 text-center text-sm text-charcoal">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                aria-label="Aumentar cantidad"
                className="flex h-10 w-10 items-center justify-center text-charcoal hover:bg-paper"
              >
                +
              </button>
            </div>
            <span className="text-xs text-stone">Disponibilidad sujeta a confirmación</span>
          </div>

          <div className="mt-2 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                addItem(product, qty)
                onClose()
              }}
              className="w-full bg-ink py-3.5 text-[11px] tracking-label uppercase text-ivory transition-colors hover:bg-champagne-deep"
            >
              Agregar al carrito
            </button>
            <a
              href={waLink(buildProductWhatsAppMessage(product))}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-ink py-3.5 text-center text-[11px] tracking-label uppercase text-ink transition-colors hover:bg-ink hover:text-ivory"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

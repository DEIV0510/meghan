import { useEffect } from 'react'
import { useCart } from '../lib/CartContext'
import { buildCartWhatsAppMessage, cartHasUnpricedItems, cartSubtotal, formatPrice } from '../lib/commerce'
import { productDisplayName } from '../data/products'
import { waLink } from '../data/brand'
import { GoldStar } from './ui/GoldStar'

export function CartDrawer() {
  const { lines, isOpen, closeCart, removeItem, setQty } = useCart()

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeCart()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeCart])

  if (!isOpen) return null

  const subtotal = cartSubtotal(lines)
  const hasUnpriced = cartHasUnpricedItems(lines)
  const checkoutHref = lines.length > 0 ? waLink(buildCartWhatsAppMessage(lines)) : undefined

  return (
    <div className="fixed inset-0 z-[80] flex justify-end" role="dialog" aria-modal="true" aria-label="Carrito">
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-[2px]" onClick={closeCart} />

      <div className="relative flex h-full w-full max-w-md flex-col bg-snow shadow-2xl">
        <div className="flex items-center justify-between border-b border-stone/20 px-6 py-5">
          <div className="flex items-center gap-2">
            <GoldStar className="h-3 w-3 text-champagne" />
            <h2 className="text-xs tracking-label uppercase text-charcoal">Tu carrito</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="flex h-8 w-8 items-center justify-center text-charcoal transition-colors hover:text-champagne-deep"
          >
            <span className="rotate-45 text-xl leading-none">+</span>
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <p className="font-serif text-xl text-charcoal">Tu carrito está vacío.</p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 border border-ink px-6 py-3 text-[10px] tracking-label uppercase text-ink transition-colors hover:bg-ink hover:text-ivory"
            >
              Seguir explorando
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5">
              <ul className="flex flex-col gap-6">
                {lines.map((line) => (
                  <li key={line.product.id} className="flex gap-4">
                    <div className="h-24 w-20 shrink-0 overflow-hidden bg-paper">
                      <img src={line.product.images[0]} alt={line.product.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="font-serif text-sm leading-snug text-charcoal">{productDisplayName(line.product)}</p>
                        <p className="mt-1 text-xs text-stone">{formatPrice(line.product.price)}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-stone/30">
                          <button
                            type="button"
                            onClick={() => setQty(line.product.id, line.qty - 1)}
                            aria-label="Reducir cantidad"
                            className="flex h-7 w-7 items-center justify-center text-charcoal hover:bg-paper"
                          >
                            −
                          </button>
                          <span className="w-7 text-center text-xs text-charcoal">{line.qty}</span>
                          <button
                            type="button"
                            onClick={() => setQty(line.product.id, line.qty + 1)}
                            aria-label="Aumentar cantidad"
                            className="flex h-7 w-7 items-center justify-center text-charcoal hover:bg-paper"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(line.product.id)}
                          className="text-[10px] tracking-label uppercase text-stone underline underline-offset-2 hover:text-champagne-deep"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-stone/20 px-6 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-charcoal">Subtotal</span>
                <span className="font-serif text-base text-charcoal">
                  {subtotal > 0 ? formatPrice(subtotal) : 'A confirmar'}
                </span>
              </div>
              {hasUnpriced && (
                <p className="mt-1 text-[11px] text-stone">Algunas referencias no tienen precio confirmado aún.</p>
              )}
              <a
                href={checkoutHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center bg-ink py-3.5 text-[11px] tracking-label uppercase text-ivory transition-colors hover:bg-champagne-deep"
              >
                Finalizar por WhatsApp
              </a>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full py-2 text-[10px] tracking-label uppercase text-stone hover:text-charcoal"
              >
                Seguir explorando
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

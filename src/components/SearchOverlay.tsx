import { useEffect, useMemo, useRef, useState } from 'react'
import { ALL_PRODUCTS, productDisplayName, type Product } from '../data/products'
import { formatPrice } from '../lib/commerce'
import { useCart } from '../lib/CartContext'
import { useUI } from '../lib/UIContext'

const CATEGORY_LABEL: Record<Product['category'], string> = {
  perfumeria: 'Perfumería',
  moda: 'Moda',
  lentes: 'Lentes',
  calzado: 'Calzado',
  gorras: 'Gorras',
}

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
}

export function SearchOverlay() {
  const { searchOpen, closeSearch, openProduct } = useUI()
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const { addItem } = useCart()

  useEffect(() => {
    if (!searchOpen) return
    setQuery('')
    const t = window.setTimeout(() => inputRef.current?.focus(), 50)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeSearch()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.clearTimeout(t)
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [searchOpen, closeSearch])

  const results = useMemo(() => {
    const q = normalize(query.trim())
    if (!q) return []
    return ALL_PRODUCTS.filter((p) => {
      const haystack = normalize(`${p.brand ?? ''} ${p.name} ${CATEGORY_LABEL[p.category]} ${p.tag ?? ''}`)
      return haystack.includes(q)
    }).slice(0, 24)
  }, [query])

  if (!searchOpen) return null

  return (
    <div className="fixed inset-0 z-[85] flex flex-col bg-snow" role="dialog" aria-modal="true" aria-label="Buscar">
      <div className="flex items-center gap-4 border-b border-stone/20 px-5 py-4 sm:px-10 sm:py-6">
        <span className="text-stone">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar producto, marca o categoría…"
          className="flex-1 bg-transparent font-serif text-xl text-charcoal placeholder:text-stone/60 focus:outline-none sm:text-2xl"
        />
        <button
          type="button"
          onClick={closeSearch}
          aria-label="Cerrar búsqueda"
          className="flex h-9 w-9 shrink-0 items-center justify-center text-charcoal hover:text-champagne-deep"
        >
          <span className="rotate-45 text-2xl leading-none">+</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-10">
        {query.trim() === '' && (
          <p className="text-sm text-stone">Prueba con "Creed", "Off-White", "gorras" o "perfumería".</p>
        )}
        {query.trim() !== '' && results.length === 0 && (
          <p className="text-sm text-stone">Sin resultados para "{query}".</p>
        )}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-6">
          {results.map((p) => (
            <div key={p.id} className="flex flex-col">
              <button
                type="button"
                onClick={() => {
                  openProduct(p)
                  closeSearch()
                }}
                className="aspect-[4/5] w-full overflow-hidden bg-paper"
              >
                <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
              </button>
              <span className="mt-2 text-[10px] tracking-label uppercase text-stone">{CATEGORY_LABEL[p.category]}</span>
              <p className="font-serif text-sm text-charcoal">{productDisplayName(p)}</p>
              <p className="text-xs text-stone">{formatPrice(p.price)}</p>
              <button
                type="button"
                onClick={() => addItem(p)}
                className="mt-2 border border-ink py-1.5 text-[9px] tracking-label uppercase text-ink hover:bg-ink hover:text-ivory"
              >
                Agregar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { ALL_PRODUCTS, type Product } from '../data/products'
import type { CartLine } from './commerce'

const STORAGE_KEY = 'meghan-cart-v1'

interface StoredLine {
  id: string
  qty: number
}

function readStoredLines(): StoredLine[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((l): l is StoredLine => typeof l?.id === 'string' && typeof l?.qty === 'number')
  } catch {
    return []
  }
}

interface CartContextValue {
  lines: CartLine[]
  count: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (product: Product, qty?: number) => void
  removeItem: (id: string) => void
  setQty: (id: string, qty: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  // Synchronous lazy init — no SSR here, so this is race-free (no empty→populate flash,
  // no risk of a later write-effect clobbering saved state before it's been read).
  const [stored, setStored] = useState<StoredLine[]>(() => readStoredLines())
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored))
    } catch {
      // ignore quota/availability errors
    }
  }, [stored])

  const lines = useMemo<CartLine[]>(() => {
    return stored
      .map((s) => {
        const product = ALL_PRODUCTS.find((p) => p.id === s.id)
        return product ? { product, qty: s.qty } : null
      })
      .filter((l): l is CartLine => l !== null)
  }, [stored])

  const count = useMemo(() => lines.reduce((sum, l) => sum + l.qty, 0), [lines])

  const addItem = (product: Product, qty = 1) => {
    setStored((prev) => {
      const existing = prev.find((l) => l.id === product.id)
      if (existing) {
        return prev.map((l) => (l.id === product.id ? { ...l, qty: l.qty + qty } : l))
      }
      return [...prev, { id: product.id, qty }]
    })
    setIsOpen(true)
  }

  const removeItem = (id: string) => setStored((prev) => prev.filter((l) => l.id !== id))

  const setQty = (id: string, qty: number) => {
    if (qty <= 0) return removeItem(id)
    setStored((prev) => prev.map((l) => (l.id === id ? { ...l, qty } : l)))
  }

  const clear = () => setStored([])

  return (
    <CartContext.Provider
      value={{
        lines,
        count,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        removeItem,
        setQty,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

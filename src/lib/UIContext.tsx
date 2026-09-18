import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Product } from '../data/products'

interface UIContextValue {
  activeProduct: Product | null
  openProduct: (product: Product) => void
  closeProduct: () => void
  searchOpen: boolean
  openSearch: () => void
  closeSearch: () => void
}

const UIContext = createContext<UIContextValue | null>(null)

export function UIProvider({ children }: { children: ReactNode }) {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <UIContext.Provider
      value={{
        activeProduct,
        openProduct: setActiveProduct,
        closeProduct: () => setActiveProduct(null),
        searchOpen,
        openSearch: () => setSearchOpen(true),
        closeSearch: () => setSearchOpen(false),
      }}
    >
      {children}
    </UIContext.Provider>
  )
}

export function useUI() {
  const ctx = useContext(UIContext)
  if (!ctx) throw new Error('useUI must be used within UIProvider')
  return ctx
}

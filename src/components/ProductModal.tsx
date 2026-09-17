import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { WA_MESSAGES } from '../data/brand'
import { GoldStar } from './ui/GoldStar'
import { WhatsAppButton } from './ui/WhatsAppButton'
import type { ArchiveItem } from './Archive'

interface ProductModalProps {
  item: ArchiveItem | null
  onClose: () => void
}

const CATEGORY_LABEL: Record<string, string> = {
  perfumeria: 'Perfumería',
  moda: 'Moda',
  lentes: 'Lentes',
  calzado: 'Calzado',
  gorras: 'Gorras',
}

export function ProductModal({ item, onClose }: ProductModalProps) {
  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [item, onClose])

  if (!item) return null

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-sm sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-sm border border-champagne-dim/20 bg-graphite sm:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink/60 text-ivory transition-colors hover:text-champagne-bright"
        >
          <span className="rotate-45 text-xl leading-none">+</span>
        </button>

        <div className="aspect-square bg-ink/40 sm:aspect-auto">
          <img src={item.image} alt={item.name} className="h-full w-full object-contain p-6" />
        </div>

        <div className="flex flex-col justify-center gap-4 p-7 sm:p-9">
          <div className="flex items-center gap-2 text-champagne">
            <GoldStar className="h-3 w-3" />
            <span className="text-[10px] tracking-label uppercase">{CATEGORY_LABEL[item.category]}</span>
          </div>
          <h3 className="font-serif text-2xl leading-tight text-ivory sm:text-3xl">{item.name}</h3>
          {item.tag && <p className="text-xs tracking-label uppercase text-ivory-dim/70">{item.tag}</p>}
          <div className="mt-2">
            <WhatsAppButton message={WA_MESSAGES.producto(item.name)}>Consultar disponibilidad</WhatsAppButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

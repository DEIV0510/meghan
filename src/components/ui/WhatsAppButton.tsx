import type { ReactNode } from 'react'
import { waLink } from '../../data/brand'

interface WhatsAppButtonProps {
  message: string
  children: ReactNode
  variant?: 'solid' | 'outline' | 'ghost'
  className?: string
}

export function WhatsAppButton({ message, children, variant = 'solid', className = '' }: WhatsAppButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-3.5 text-xs tracking-label uppercase transition-all duration-300 font-sans'

  const variants: Record<string, string> = {
    solid: 'bg-champagne text-ink hover:bg-champagne-bright hover:shadow-[0_0_30px_rgba(201,168,106,0.35)]',
    outline: 'border border-champagne/60 text-ivory hover:border-champagne hover:bg-champagne/10',
    ghost: 'text-ivory/90 hover:text-champagne-bright underline underline-offset-4 decoration-champagne/40',
  }

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

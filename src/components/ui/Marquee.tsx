import type { ReactNode } from 'react'

interface MarqueeProps {
  items: string[]
  className?: string
  speed?: 'slow' | 'normal' | 'fast'
  separator?: ReactNode
}

export function Marquee({ items, className = '', speed = 'normal', separator = '·' }: MarqueeProps) {
  const animClass =
    speed === 'fast' ? 'animate-marquee-fast' : speed === 'slow' ? 'animate-marquee-reverse' : 'animate-marquee'

  const track = (
    <span className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-10 whitespace-nowrap">
          <span>{item}</span>
          <span className="text-champagne/50">{separator}</span>
        </span>
      ))}
    </span>
  )

  return (
    <div className={`flex overflow-hidden ${className}`} aria-hidden="true">
      <div className={`flex shrink-0 ${animClass}`}>
        {track}
        {track}
      </div>
    </div>
  )
}

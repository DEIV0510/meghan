import type { ReactNode } from 'react'
import { Reveal } from '../Reveal'
import { GoldStar } from './GoldStar'

interface SectionHeadingProps {
  kicker: string
  title: string
  align?: 'left' | 'center'
  dark?: boolean
  children?: ReactNode
}

export function SectionHeading({ kicker, title, align = 'left', dark = false, children }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex flex-col ${alignClass} max-w-2xl`}>
      <Reveal>
        <div className={`flex items-center gap-3 text-champagne ${align === 'center' ? 'justify-center' : ''}`}>
          <GoldStar className="h-3 w-3" />
          <span className="text-[11px] tracking-label uppercase font-sans">{kicker}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-4 text-4xl sm:text-5xl leading-[1.08] text-balance ${
            dark ? 'text-ink' : 'text-ivory'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {children && (
        <Reveal delay={0.16}>
          <div className="mt-5">{children}</div>
        </Reveal>
      )}
    </div>
  )
}

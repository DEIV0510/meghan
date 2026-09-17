import { Reveal } from '../Reveal'
import { GoldStar } from './GoldStar'

interface ChapterMarkProps {
  number: string
  kicker: string
  title: string
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
}

export function ChapterMark({ number, kicker, title, tone = 'light', align = 'left' }: ChapterMarkProps) {
  const textColor = tone === 'light' ? 'text-ivory' : 'text-ink'
  const dim = tone === 'light' ? 'text-ivory-dim' : 'text-graphite'
  const items = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col ${items} gap-3`}>
      <Reveal className={`flex items-center gap-3 ${dim}`}>
        <GoldStar className="h-3 w-3 text-champagne" />
        <span className="font-sans text-[11px] tracking-label uppercase">{kicker}</span>
      </Reveal>
      <Reveal delay={0.08} className="flex items-baseline gap-4">
        <span className="font-display-number text-champagne/70 text-3xl sm:text-4xl">{number}</span>
        <h2 className={`font-serif ${textColor} text-4xl sm:text-6xl md:text-7xl leading-[0.95] text-balance`}>
          {title}
        </h2>
      </Reveal>
    </div>
  )
}

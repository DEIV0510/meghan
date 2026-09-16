import capGold from '../assets/caps/dom-gold.webp'
import glassesGoldClear from '../assets/glasses/sunglasses-gold-clear.webp'
import bondTribeca from '../assets/perfume/bond-no9-tribeca.webp'
import shoeOffwhiteProfile from '../assets/shoes/sneaker-offwhite-profile.webp'
import { Reveal } from './Reveal'

const WORLDS = [
  {
    n: '01',
    href: '#perfumeria',
    title: ['ALTA', 'PERFUMERÍA'],
    stat: '400+',
    statLabel: 'Referencias exclusivas',
    image: bondTribeca,
    align: 'left' as const,
  },
  {
    n: '02',
    href: '#moda',
    title: ['THE', 'COLLECTION'],
    stat: 'VIE-RICHE',
    statLabel: 'Moda internacional y diseñadores colombianos',
    image: capGold,
    align: 'right' as const,
  },
  {
    n: '03',
    href: '#lentes',
    title: ['THE', 'FRAME'],
    stat: '7',
    statLabel: 'Monturas de casas reconocidas',
    image: glassesGoldClear,
    align: 'left' as const,
  },
  {
    n: '04',
    href: '#calzado',
    title: ['FOOT', 'WEAR'],
    stat: 'OFF-WHITE',
    statLabel: 'Sneakerhead culture & alta costura',
    image: shoeOffwhiteProfile,
    align: 'right' as const,
  },
]

export function FourWorlds() {
  return (
    <section id="mundos" className="relative bg-ink">
      <Reveal>
        <div className="mx-auto max-w-[90rem] px-5 pt-24 sm:px-8">
          <div className="flex items-center gap-3 text-champagne">
            <span className="h-px w-8 bg-champagne-dim/60" />
            <span className="text-[11px] tracking-label uppercase">Four Worlds</span>
          </div>
        </div>
      </Reveal>

      {WORLDS.map((world) => (
        <a
          key={world.n}
          href={world.href}
          className="group relative block h-[78vh] min-h-[460px] w-full overflow-hidden border-t border-champagne-dim/10 first:mt-8"
        >
          <img
            src={world.image}
            alt={world.title.join(' ')}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-[1.2s] ease-out group-hover:scale-110 group-hover:opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />

          <div
            className={`relative z-10 flex h-full max-w-[90rem] mx-auto flex-col justify-end px-5 pb-12 sm:px-8 sm:pb-16 ${
              world.align === 'right' ? 'items-end text-right' : 'items-start text-left'
            }`}
          >
            <span className="font-display-number text-[7rem] leading-none text-ivory/10 sm:text-[10rem] lg:text-[13rem]">
              {world.n}
            </span>

            <h3 className="-mt-6 font-serif text-4xl leading-[0.95] text-ivory sm:text-6xl lg:text-7xl">
              {world.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>

            <div className={`mt-6 flex items-baseline gap-3 ${world.align === 'right' ? 'flex-row-reverse' : ''}`}>
              <span className="font-display-number text-2xl text-champagne-bright sm:text-3xl">{world.stat}</span>
              <span className="max-w-[14rem] text-xs text-ivory-dim">{world.statLabel}</span>
            </div>

            <div
              className={`mt-6 flex items-center gap-3 transition-all duration-500 sm:opacity-0 sm:group-hover:opacity-100 ${
                world.align === 'right'
                  ? 'flex-row-reverse sm:translate-x-2 sm:group-hover:translate-x-0'
                  : 'sm:-translate-x-2 sm:group-hover:translate-x-0'
              }`}
            >
              <span className="h-px w-10 bg-champagne" />
              <span className="text-[11px] tracking-label uppercase text-champagne-bright">Descubrir →</span>
            </div>
          </div>
        </a>
      ))}
    </section>
  )
}

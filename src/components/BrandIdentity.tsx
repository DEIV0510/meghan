import blackoudAbyss from '../assets/perfume/blackoud-abyss.webp'
import { Reveal } from './Reveal'
import { GoldStar } from './ui/GoldStar'

export function BrandIdentity() {
  return (
    <section id="identidad" className="relative bg-ink py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="flex items-center gap-3 text-champagne">
            <GoldStar className="h-3 w-3" />
            <span className="text-[11px] tracking-label uppercase">El universo Meghan</span>
          </div>
          <h2 className="mt-5 font-serif text-3xl leading-tight text-ivory sm:text-4xl text-balance">
            Una selección hecha para quienes distinguen lo extraordinario.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ivory-dim">
            En Meghan Luxury reunimos moda, perfumería y accesorios de firmas reconocidas, con
            una curaduría enfocada en la autenticidad, la exclusividad y la atención
            personalizada.
          </p>
          <div className="mt-8 flex items-center gap-6 text-[11px] tracking-label uppercase text-ivory-dim/70">
            <span>Luxury</span>
            <span className="h-3 w-px bg-champagne-dim/50" />
            <span>Authenticity</span>
            <span className="h-3 w-px bg-champagne-dim/50" />
            <span>Evolution</span>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm border border-champagne-dim/20">
            <img
              src={blackoudAbyss}
              alt="Detalle de fragancia de la selección Meghan Luxury"
              className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-6 border border-champagne/20" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

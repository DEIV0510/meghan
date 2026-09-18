import creedAventus from '../assets/perfume/creed-aventus.webp'
import yachtHelicopter from '../assets/campaign/yacht-helicopter.webp'
import capGold from '../assets/caps/dom-gold.webp'
import glassesViolet from '../assets/glasses/sunglasses-violet.webp'
import shoeOffwhite from '../assets/shoes/sneaker-offwhite-profile.webp'
import { CATEGORIES } from '../data/brand'
import { Reveal } from './Reveal'
import { GoldStar } from './ui/GoldStar'

export function ExploraMeghan() {
  const [perfumeria, moda, lentes, calzado] = CATEGORIES

  return (
    <section id="explora" className="relative bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[92rem] px-5 sm:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-champagne">
            <GoldStar className="h-3 w-3" />
            <span className="text-[11px] tracking-label uppercase">Explora</span>
          </div>
          <h2 className="mt-3 font-serif text-4xl text-charcoal sm:text-5xl">Explora Meghan</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-12 sm:gap-5">
          {/* Perfumería — tall feature tile */}
          <Reveal className="sm:col-span-7">
            <a href="#perfumeria" className="group relative block h-[52vh] overflow-hidden bg-ink sm:h-[64vh]">
              <img
                src={creedAventus}
                alt="Perfumería"
                loading="lazy"
                className="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <span className="font-display-number text-2xl text-champagne">{perfumeria.number}</span>
                <h3 className="mt-1 font-serif text-3xl text-ivory sm:text-4xl">{perfumeria.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-ivory-dim">{perfumeria.description}</p>
              </div>
            </a>
          </Reveal>

          {/* Accesorios — collage of two thumbnails */}
          <Reveal delay={0.1} className="sm:col-span-5">
            <a href="#accesorios" className="group relative block h-[26vh] overflow-hidden bg-paper-dim sm:mt-[6vh] sm:h-[52vh]">
              <div className="grid h-full grid-cols-2 gap-0.5">
                <img src={capGold} alt="Gorras" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <img src={glassesViolet} alt="Lentes" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-6">
                <span className="font-display-number text-xl text-champagne">{lentes.number}</span>
                <h3 className="mt-1 font-serif text-2xl text-ivory sm:text-3xl">Accesorios</h3>
                <p className="mt-1 max-w-xs text-xs text-ivory-dim">{lentes.description}</p>
              </div>
            </a>
          </Reveal>

          {/* Moda — wide banner, offset up */}
          <Reveal delay={0.15} className="sm:col-span-5">
            <a href="#moda" className="group relative block h-[36vh] overflow-hidden bg-ink sm:h-[46vh]">
              <img
                src={yachtHelicopter}
                alt="Moda"
                loading="lazy"
                className="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="font-display-number text-xl text-champagne">{moda.number}</span>
                <h3 className="mt-1 font-serif text-2xl text-ivory sm:text-3xl">{moda.title}</h3>
              </div>
            </a>
          </Reveal>

          {/* Calzado — wide banner */}
          <Reveal delay={0.2} className="sm:col-span-7">
            <a href="#calzado" className="group relative block h-[36vh] overflow-hidden bg-paper-dim sm:h-[46vh]">
              <img
                src={shoeOffwhite}
                alt="Calzado"
                loading="lazy"
                className="h-full w-full scale-110 object-cover transition-transform duration-700 ease-out group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ivory/90 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="font-display-number text-xl text-champagne-deep">{calzado.number}</span>
                <h3 className="mt-1 font-serif text-2xl text-charcoal sm:text-3xl">{calzado.title}</h3>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

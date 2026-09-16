import setBlackWhite from '../assets/apparel/vieriche-set-black-white.webp'
import glassesGoldClear from '../assets/glasses/sunglasses-gold-clear.webp'
import bondTribeca from '../assets/perfume/bond-no9-tribeca.webp'
import shoeOffwhiteProfile from '../assets/shoes/sneaker-offwhite-profile.webp'
import { CATEGORIES } from '../data/brand'
import { Reveal } from './Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { WhatsAppButton } from './ui/WhatsAppButton'

const IMAGES: Record<string, string> = {
  moda: setBlackWhite,
  perfumeria: bondTribeca,
  lentes: glassesGoldClear,
  calzado: shoeOffwhiteProfile,
}

const SPAN: Record<string, string> = {
  perfumeria: 'lg:col-span-4 lg:row-span-2',
  moda: 'lg:col-span-2 lg:row-span-2',
  lentes: 'lg:col-span-3 lg:row-span-1',
  calzado: 'lg:col-span-3 lg:row-span-1',
}

const ORDER = ['perfumeria', 'moda', 'lentes', 'calzado']

export function Categories() {
  return (
    <section id="colecciones" className="bg-graphite py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading kicker="Colecciones" title="Cuatro mundos, una misma curaduría." />

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-6 lg:auto-rows-[15rem]">
          {[...CATEGORIES].sort((a, b) => ORDER.indexOf(a.key) - ORDER.indexOf(b.key)).map((cat, i) => (
            <Reveal key={cat.key} delay={i * 0.08} className={`${SPAN[cat.key]} min-h-[22rem] lg:min-h-0`}>
              <article className="group relative h-full w-full overflow-hidden rounded-sm bg-ink">
                <img
                  src={IMAGES[cat.key]}
                  alt={cat.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />

                <div className="relative flex h-full flex-col justify-end p-5 sm:p-7">
                  <h3 className="font-serif text-xl text-ivory sm:text-2xl lg:text-3xl">{cat.title}</h3>
                  <p className="mt-2 max-w-xs text-sm text-ivory-dim line-clamp-2">{cat.description}</p>
                  <p className="mt-2 text-[10px] tracking-label uppercase text-champagne-bright/90 line-clamp-1">
                    {cat.brands.slice(0, 3).join(' · ')}
                  </p>
                  <div className="mt-4">
                    <WhatsAppButton message={cat.waMessage} variant="outline" className="!py-2 !px-4 !text-[10px]">
                      Consultar
                    </WhatsAppButton>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

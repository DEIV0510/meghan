import renderEntrance from '../assets/showroom/render-05-entrance.webp'
import renderLogo from '../assets/showroom/render-04-logo.webp'
import { WA_MESSAGES } from '../data/brand'
import { Reveal } from './Reveal'
import { GoldStar } from './ui/GoldStar'
import { WhatsAppButton } from './ui/WhatsAppButton'

export function Showroom() {
  return (
    <section id="showroom" className="relative bg-ink py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-champagne-dim/20">
            <img
              src={renderEntrance}
              alt="Concepto de diseño del showroom Meghan Luxury"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5">
              <p className="text-[10px] tracking-label uppercase text-ivory-dim/80">
                Concepto de diseño del espacio
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex items-center gap-3 text-champagne">
            <GoldStar className="h-3 w-3" />
            <span className="text-[11px] tracking-label uppercase">Showroom</span>
          </div>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-ivory sm:text-5xl text-balance">
            Tu próxima elección comienza con una atención personalizada.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ivory-dim">
            Visítanos en nuestro showroom en Santa Marta, Magdalena, y descubre una selección de
            moda, perfumería y accesorios de lujo con acompañamiento personalizado en cada
            consulta.
          </p>

          <div className="mt-8 space-y-2 text-sm text-ivory-dim">
            <p className="font-serif text-lg text-ivory">MEGHAN LUXURY</p>
            <p>Showroom · Santa Marta, Magdalena, Colombia</p>
            <p>Atención personalizada</p>
          </div>

          <div className="mt-9">
            <WhatsAppButton message={WA_MESSAGES.showroom}>Consultar por WhatsApp</WhatsAppButton>
          </div>

          <div className="mt-10 aspect-[16/10] w-full max-w-sm overflow-hidden rounded-sm border border-champagne-dim/20 opacity-90">
            <img
              src={renderLogo}
              alt="Concepto de diseño interior del showroom Meghan Luxury"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

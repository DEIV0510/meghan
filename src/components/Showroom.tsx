import renderEntrance from '../assets/showroom/render-05-entrance.webp'
import { WA_MESSAGES } from '../data/brand'
import { Reveal } from './Reveal'
import { WhatsAppButton } from './ui/WhatsAppButton'

export function Showroom() {
  return (
    <section id="showroom" className="relative min-h-[90vh] overflow-hidden bg-ink">
      <img
        src={renderEntrance}
        alt="Concepto de diseño del showroom Meghan Luxury"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-[90rem] flex-col justify-center px-5 py-24 sm:px-8">
        <Reveal>
          <span className="text-[11px] tracking-label uppercase text-champagne">Una invitación privada</span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-5 font-serif text-5xl leading-[0.95] text-ivory sm:text-7xl lg:text-8xl">
            SANTA MARTA
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-2 font-serif text-2xl italic text-champagne-bright sm:text-3xl">
            Meghan Luxury Showroom
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-ivory-dim">
            Atención personalizada en cada consulta. Visítanos y descubre una selección de moda,
            perfumería y accesorios de lujo, acompañado por nuestro equipo.
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <p className="mt-3 text-[11px] tracking-label uppercase text-ivory-dim/60">
            Magdalena, Colombia · Atención personalizada
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-10">
            <WhatsAppButton message={WA_MESSAGES.showroom}>Hablar con Meghan</WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

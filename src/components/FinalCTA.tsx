import suvInteriorNeon from '../assets/campaign/suv-interior-neon.webp'
import { BRAND, WA_MESSAGES } from '../data/brand'
import { Reveal } from './Reveal'
import { GoldStar } from './ui/GoldStar'
import { WhatsAppButton } from './ui/WhatsAppButton'

export function FinalCTA() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-ink py-32 sm:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <img src={suvInteriorNeon} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/85" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="flex items-center justify-center gap-3 text-champagne">
            <GoldStar className="h-4 w-4" />
          </div>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-ivory sm:text-6xl text-balance">
            El lujo está en los detalles.
          </h2>
          <p className="mt-5 text-lg text-ivory-dim">
            Encuentra tu próxima elección en {BRAND.name}.
          </p>
          <p className="mt-2 text-[11px] tracking-label uppercase text-champagne-bright/80">
            Moda · Perfumería · Accesorios
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <WhatsAppButton message={WA_MESSAGES.general}>Consultar por WhatsApp</WhatsAppButton>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-ivory/25 px-7 py-3.5 text-xs tracking-label uppercase text-ivory transition-all duration-300 hover:border-champagne hover:text-champagne-bright"
            >
              Visitar Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

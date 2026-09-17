import { SHOWROOM, WA_MESSAGES } from '../data/brand'
import { CLIPS } from '../data/media'
import { SHOWROOM_RENDERS } from '../data/products'
import { Reveal } from './Reveal'
import { LazyVideo } from './ui/LazyVideo'
import { WhatsAppButton } from './ui/WhatsAppButton'

export function Showroom() {
  return (
    <section id="showroom" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-[92rem] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="text-[11px] tracking-label uppercase text-champagne">{SHOWROOM.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-serif text-5xl leading-[0.95] text-ivory sm:text-7xl">SANTA MARTA</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-2 font-serif text-2xl italic text-champagne-bright sm:text-3xl">
              Meghan Luxury Showroom
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-ivory-dim">{SHOWROOM.body}</p>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="mt-3 text-[11px] tracking-label uppercase text-ivory-dim/60">{SHOWROOM.note}</p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-10">
              <WhatsAppButton message={WA_MESSAGES.showroom}>Hablar con Meghan</WhatsAppButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="relative h-[46vh] overflow-hidden rounded-sm sm:h-[58vh] lg:h-full lg:min-h-[520px]">
            <LazyVideo clip={CLIPS.showroomHallwayWalk} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-40 overflow-hidden rounded-sm border border-champagne-dim/25 shadow-2xl sm:block lg:w-48">
            <img src={SHOWROOM_RENDERS.main} alt="Concepto del espacio Meghan Luxury" loading="lazy" className="aspect-[4/3] w-full object-cover opacity-90" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

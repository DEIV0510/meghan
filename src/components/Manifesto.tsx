import { motion, useReducedMotion } from 'framer-motion'
import blackoudAbyss from '../assets/perfume/blackoud-abyss.webp'
import { CATEGORIES, MANIFESTO } from '../data/brand'

export function Manifesto() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="mundos" className="relative flex min-h-[85svh] flex-col items-center justify-center overflow-hidden bg-ink py-24">
      <div className="absolute inset-0">
        <img
          src={blackoudAbyss}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-[0.2]"
          style={shouldReduceMotion ? undefined : { animation: 'soft-drift 18s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(10,10,9,0.92)_85%)]" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.22 } } }}
          className="flex flex-col gap-1 sm:gap-2"
        >
          {MANIFESTO.words.map((word) => (
            <motion.span
              key={word}
              variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="font-serif text-5xl leading-[1.05] text-ivory sm:text-7xl lg:text-8xl"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-md text-base leading-relaxed text-ivory-dim text-balance sm:text-lg"
        >
          {MANIFESTO.lead}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-lg text-sm leading-relaxed text-ivory-dim/70 text-balance"
        >
          {MANIFESTO.body}
        </motion.p>
      </div>

      <motion.nav
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="relative mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-5"
        aria-label="Colecciones"
      >
        {CATEGORIES.map((cat) => (
          <a
            key={cat.key}
            href={`#${cat.key}`}
            className="group flex items-baseline gap-2 text-ivory-dim transition-colors hover:text-champagne-bright"
          >
            <span className="font-display-number text-sm text-champagne/60">{cat.number}</span>
            <span className="text-xs tracking-label uppercase">{cat.title}</span>
            <span className="h-px w-0 bg-champagne transition-all duration-300 group-hover:w-4" />
          </a>
        ))}
      </motion.nav>
    </section>
  )
}

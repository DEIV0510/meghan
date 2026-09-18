import { motion, useReducedMotion } from 'framer-motion'
import blackoudAbyss from '../assets/perfume/blackoud-abyss.webp'
import { MANIFESTO } from '../data/brand'

export function Manifesto() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative flex min-h-[52svh] flex-col items-center justify-center overflow-hidden bg-ink py-20">
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
      </div>
    </section>
  )
}

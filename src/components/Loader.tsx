import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

const STAR_PATH =
  'M32 6 C33 24 35 30 54 32 C35 34 33 40 32 58 C31 40 29 34 10 32 C29 30 31 24 32 6 Z'

export function Loader() {
  const [visible, setVisible] = useState(true)
  const [stage, setStage] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) {
      setStage(3)
      const t = window.setTimeout(() => setVisible(false), 250)
      return () => window.clearTimeout(t)
    }

    const timers = [
      window.setTimeout(() => setStage(1), 650), // star drawn → wordmark
      window.setTimeout(() => setStage(2), 1250), // wordmark → subtitle + line
      window.setTimeout(() => setStage(3), 1950), // hold → begin exit wipe
      window.setTimeout(() => setVisible(false), 2650),
    ]
    return () => timers.forEach(window.clearTimeout)
  }, [shouldReduceMotion])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut', delay: 0.3 } }}
        >
          <motion.div
            className="absolute inset-0 origin-bottom bg-ink"
            animate={stage >= 3 ? { scaleY: 0 } : { scaleY: 1 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          />

          <div className="relative flex flex-col items-center">
            <svg viewBox="0 0 64 64" className="h-10 w-10 text-champagne sm:h-12 sm:w-12">
              <motion.path
                d={STAR_PATH}
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                initial={{ pathLength: 0, opacity: 0.6 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
              />
              <motion.path
                d={STAR_PATH}
                fill="currentColor"
                initial={{ opacity: 0 }}
                animate={{ opacity: stage >= 1 ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />
            </svg>

            <motion.h1
              className="mt-5 font-serif text-3xl tracking-wordmark text-ivory sm:text-4xl"
              initial={{ opacity: 0, letterSpacing: '0.5em' }}
              animate={
                stage >= 1
                  ? { opacity: 1, letterSpacing: '0.28em' }
                  : { opacity: 0, letterSpacing: '0.5em' }
              }
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              MEGHAN
            </motion.h1>

            <motion.p
              className="mt-3 text-[10px] tracking-[0.4em] uppercase text-champagne"
              initial={{ opacity: 0 }}
              animate={{ opacity: stage >= 2 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              Luxury Boutique
            </motion.p>

            <motion.div
              className="mt-6 h-px w-16 bg-champagne-dim/40 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: stage >= 2 ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="h-full w-full bg-gradient-to-r from-transparent via-champagne to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: stage >= 2 ? '100%' : '-100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

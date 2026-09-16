import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import logo from '../assets/brand/logo-gold.png'

export function Loader() {
  const [visible, setVisible] = useState(true)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const minDuration = shouldReduceMotion ? 200 : 1900
    const timer = window.setTimeout(() => setVisible(false), minDuration)
    return () => window.clearTimeout(timer)
  }, [shouldReduceMotion])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <img src={logo} alt="Meghan Luxury" className="w-56 sm:w-64" />
          </motion.div>

          <motion.div
            className="mt-8 h-px w-40 overflow-hidden bg-champagne-dim/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <motion.div
              className="h-full w-full bg-gradient-to-r from-transparent via-champagne to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ delay: 0.6, duration: 1.1, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

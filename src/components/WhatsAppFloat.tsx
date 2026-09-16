import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { WA_MESSAGES, waLink } from '../data/brand'

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.a
      href={waLink(WA_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: shouldReduceMotion ? 0 : visible ? 0 : 16,
        pointerEvents: visible ? 'auto' : 'none',
      }}
      transition={{ duration: 0.3 }}
      className="group fixed bottom-5 right-5 z-40 flex h-14 items-center gap-0 overflow-hidden rounded-full bg-champagne px-0 text-ink shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-[padding] duration-300 hover:gap-3 hover:pl-5 hover:pr-6 sm:bottom-8 sm:right-8"
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center">
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M16.001 3C9.107 3 3.5 8.607 3.5 15.5c0 2.31.63 4.47 1.72 6.33L3 29l7.36-2.17A12.44 12.44 0 0 0 16 28c6.894 0 12.5-5.607 12.5-12.5S22.895 3 16.001 3Zm0 22.65c-2.02 0-3.98-.55-5.68-1.58l-.408-.243-4.37 1.287 1.31-4.26-.266-.437a10.14 10.14 0 0 1-1.583-5.417c0-5.62 4.577-10.2 10.2-10.2 5.622 0 10.2 4.58 10.2 10.2 0 5.622-4.578 10.2-10.2 10.2Zm5.6-7.64c-.307-.154-1.816-.897-2.098-1-.281-.103-.487-.154-.692.154-.205.307-.794 1-.973 1.205-.179.205-.359.23-.666.077-.307-.154-1.294-.477-2.465-1.523-.911-.813-1.526-1.816-1.705-2.123-.179-.307-.02-.472.134-.625.138-.137.307-.359.46-.538.154-.18.205-.308.307-.513.103-.205.052-.384-.026-.538-.077-.153-.692-1.667-.948-2.283-.25-.6-.503-.52-.692-.53-.179-.008-.384-.01-.589-.01-.205 0-.538.077-.82.384-.281.307-1.074 1.05-1.074 2.563 0 1.512 1.1 2.972 1.253 3.177.154.205 2.166 3.307 5.25 4.637.734.317 1.306.507 1.753.649.736.234 1.406.201 1.936.122.59-.088 1.816-.742 2.072-1.46.256-.717.256-1.331.18-1.46-.078-.128-.283-.205-.59-.36Z" />
        </svg>
      </span>
      <span className="hidden max-w-0 whitespace-nowrap text-[11px] tracking-label uppercase opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100 sm:inline-block">
        Consultar una referencia
      </span>
    </motion.a>
  )
}

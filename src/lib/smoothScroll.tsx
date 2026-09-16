import { type ReactNode, useEffect } from 'react'
import { loadGsap } from './gsapLoader'

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      // Native scroll only — GSAP ScrollTrigger still works against window scroll.
      return
    }

    let cancelled = false
    let cleanup: (() => void) | null = null

    Promise.all([loadGsap(), import('lenis')]).then(([{ gsap, ScrollTrigger }, { default: Lenis }]) => {
      if (cancelled) return

      const lenis = new Lenis({
        duration: 1.05,
        easing: (t) => 1 - Math.pow(1 - t, 3),
        wheelMultiplier: 1,
        touchMultiplier: 1.1,
      })

      lenis.on('scroll', ScrollTrigger.update)

      const tick = (time: number) => {
        lenis.raf(time * 1000)
      }
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)

      // Route in-page anchor links (nav, CTAs) through Lenis so they scroll
      // smoothly instead of jumping natively.
      const onClick = (e: MouseEvent) => {
        const link = (e.target as HTMLElement)?.closest('a[href^="#"]') as HTMLAnchorElement | null
        if (!link) return
        const id = link.getAttribute('href')?.slice(1)
        if (!id) return
        const target = document.getElementById(id)
        if (!target) return
        e.preventDefault()
        lenis.scrollTo(target, { offset: -84, duration: 1.4 })
      }
      document.addEventListener('click', onClick)

      cleanup = () => {
        document.removeEventListener('click', onClick)
        gsap.ticker.remove(tick)
        lenis.destroy()
      }
    })

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [])

  return <>{children}</>
}

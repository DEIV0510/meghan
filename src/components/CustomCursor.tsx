import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { loadGsap } from '../lib/gsapLoader'

export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [label, setLabel] = useState<string | null>(null)
  const prefersReduced = usePrefersReducedMotion()

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer || prefersReduced) return
    setEnabled(true)
    document.documentElement.classList.add('cursor-ready')
    return () => document.documentElement.classList.remove('cursor-ready')
  }, [prefersReduced])

  useEffect(() => {
    if (!enabled) return

    const ring = ringRef.current
    const dot = dotRef.current
    if (!ring || !dot) return

    let cancelled = false
    let cleanup: (() => void) | null = null

    loadGsap().then(({ gsap }) => {
      if (cancelled) return

      const moveRing = gsap.quickTo(ring, 'x', { duration: 0.5, ease: 'power3.out' })
      const moveRingY = gsap.quickTo(ring, 'y', { duration: 0.5, ease: 'power3.out' })
      const moveDot = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3.out' })
      const moveDotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3.out' })

      const onMove = (e: MouseEvent) => {
        moveRing(e.clientX)
        moveRingY(e.clientY)
        moveDot(e.clientX)
        moveDotY(e.clientY)
      }

      const onOver = (e: MouseEvent) => {
        const target = (e.target as HTMLElement)?.closest('[data-cursor]') as HTMLElement | null
        setLabel(target ? target.dataset.cursor || null : null)
      }

      window.addEventListener('mousemove', onMove)
      window.addEventListener('mouseover', onOver)
      cleanup = () => {
        window.removeEventListener('mousemove', onMove)
        window.removeEventListener('mouseover', onOver)
      }
    })

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[200] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[200] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-champagne/70 transition-[width,height,background-color] duration-300 ease-out ${
          label ? 'h-16 w-16 bg-ink/80' : 'h-8 w-8 bg-transparent'
        }`}
      >
        {label && <span className="text-[9px] tracking-label uppercase text-champagne-bright">{label}</span>}
      </div>
    </>
  )
}

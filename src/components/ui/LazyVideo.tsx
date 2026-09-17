import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import type { ClipMeta } from '../../data/media'

interface LazyVideoProps {
  clip: ClipMeta
  className?: string
  priority?: boolean
}

export function LazyVideo({ clip, className = '', priority = false }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [inView, setInView] = useState(priority)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (priority || inView) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '400px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [priority, inView])

  return (
    <video
      ref={ref}
      className={className}
      poster={clip.poster}
      muted
      loop
      playsInline
      autoPlay={inView && !reducedMotion}
      preload={priority ? 'auto' : 'none'}
      aria-hidden="true"
      tabIndex={-1}
    >
      {inView && <source src={clip.src} type="video/mp4" />}
    </video>
  )
}

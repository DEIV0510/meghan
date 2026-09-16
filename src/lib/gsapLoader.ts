// Loads GSAP + ScrollTrigger as a separate chunk (code-split from the main
// bundle) so the critical page shell parses and paints first. All scenes
// that need GSAP share this single cached promise/registration.
export type GsapContext = ReturnType<typeof import('gsap').gsap.context>

let cached: Promise<{
  gsap: typeof import('gsap').gsap
  ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger
}> | null = null

export function loadGsap() {
  if (!cached) {
    cached = Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([gsapModule, stModule]) => {
      gsapModule.gsap.registerPlugin(stModule.ScrollTrigger)
      return { gsap: gsapModule.gsap, ScrollTrigger: stModule.ScrollTrigger }
    })
  }
  return cached
}

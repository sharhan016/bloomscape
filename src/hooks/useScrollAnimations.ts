import { RefObject, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations(root: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    if (!root.current) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const context = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>('[data-scene]')
      sections.forEach((section) => {
        const text = section.querySelector('[data-reveal]')
        const marker = section.querySelector('.section-marker')
        const details = section.querySelectorAll('[data-drift]')

        gsap.fromTo([marker, text],
          { y: 54, opacity: 0 },
          {
            y: 0, opacity: 1, duration: .9, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 72%', once: true },
          },
        )

        details.forEach((element) => {
          const depth = Number((element as HTMLElement).dataset.drift || 1)
          gsap.fromTo(element, { yPercent: -3 * depth }, {
            yPercent: 5 * depth, ease: 'none',
            scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
          })
        })
      })

      gsap.fromTo('.finale__veil', { opacity: 1 }, {
        opacity: 0, ease: 'none',
        scrollTrigger: { trigger: '.finale', start: 'top 85%', end: 'top 25%', scrub: 1 },
      })
    }, root)

    return () => context.revert()
  }, [root])
}

import { useEffect } from 'react'

const SELECTOR = [
  '.section-heading',
  '.intro-image',
  '.benefit-card',
  '.cabin-card',
  '.service-card',
  '.gallery-subheading',
  '.gallery-grid',
  '.location-grid > *',
  '.faq-list details',
  '.reviews-content',
  '.final-cta-content',
  '.availability-card',
  '.review-card',
].join(',')

// Fades elements in as they enter the viewport. Skipped for reduced motion.
export function useReveal() {
  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined
    }

    const elements = Array.from(document.querySelectorAll(SELECTOR))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    elements.forEach((element) => {
      const siblings = Array.from(element.parentElement?.children ?? []).filter((child) => child.matches(SELECTOR))
      const index = Math.max(0, siblings.indexOf(element))
      element.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 70}ms`)
      element.classList.add('reveal')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])
}

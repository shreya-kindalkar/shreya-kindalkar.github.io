import { useState, useEffect, useRef } from 'react'

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('')
  // Stable ref so the effect doesn't re-run on every render
  const idsRef = useRef(sectionIds)

  useEffect(() => {
    const observers = []

    idsRef.current.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3, rootMargin: '-60px 0px -40% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, []) // intentionally empty — idsRef is stable

  return activeSection
}

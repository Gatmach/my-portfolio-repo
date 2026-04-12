import { useState, useEffect } from 'react'

const sections = ['home', 'about', 'projects', 'blog', 'contact']

export function useActiveSection() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id)
          }
        },
        {
          rootMargin: '-40% 0px -55% 0px',
          threshold: 0,
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return active
}
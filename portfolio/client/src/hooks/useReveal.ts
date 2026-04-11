import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08 }
      )

      const targets = document.querySelectorAll('.reveal')
      targets.forEach((el) => observer.observe(el))
    }, 100)

    return () => clearTimeout(timer)
  }, [])
}

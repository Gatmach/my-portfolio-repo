import { useState, useEffect, useRef } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import Logo from '../sections/Logo'
import styles from './Navbar.module.css'

const links = [
  { label: 'Home',     href: '#home',     id: 'home' },
  { label: 'About',    href: '#about',    id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact',  href: '#contact',  id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active                  = useActiveSection()
  const menuRef                 = useRef<HTMLDivElement>(null)

  // Track navbar background on scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen])

  // Close menu automatically when user scrolls into a new section
  useEffect(() => {
    setMenuOpen(false)
  }, [active])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const id = href.replace('#', '')
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`} ref={menuRef}>
        <Logo />

        {/* Desktop nav */}
        <nav className={styles.nav}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`${styles.link} ${active === l.id ? styles.active : ''}`}
              onClick={(e) => handleLinkClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Burger button */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`${styles.dropdown} ${menuOpen ? styles.dropdownOpen : ''}`}>
        <div className="container">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`${styles.dropLink} ${active === l.id ? styles.active : ''}`}
              onClick={(e) => handleLinkClick(e, l.href)}
            >
              <span>{l.label}</span>
              {active === l.id && <span className={styles.dot} />}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
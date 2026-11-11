
import { useState, useEffect, useRef } from 'react'
import type { MouseEvent } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import Logo from '../sections/Logo'
import styles from './Navbar.module.css'

type NavLink = {
  label: string
  href: string
  id: string
}

const mainLinks: NavLink[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const portfolioLinks: NavLink[] = [
  { label: 'Expertise', href: '#expertise', id: 'expertise' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Creative Services', href: '#services', id: 'services' },
]

const moreLinks: NavLink[] = [
  {
    label: 'Achievements & Education',
    href: '#achievements',
    id: 'achievements',
  },
  { label: 'Insights', href: '#insights', id: 'insights' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null)
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false)
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false)

  const active = useActiveSection()
  const headerRef = useRef<HTMLElement>(null)

  const portfolioActive = portfolioLinks.some(
    (link) => active === link.id
  )

  const moreActive = moreLinks.some(
    (link) => active === link.id
  )

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)

    window.addEventListener('scroll', handler, { passive: true })

    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const handler = (event: globalThis.MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false)
        setDesktopMenu(null)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setDesktopMenu(null)
        setMobilePortfolioOpen(false)
        setMobileMoreOpen(false)
      }
    }

    document.addEventListener('keydown', handler)

    return () => document.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setMobilePortfolioOpen(false)
    setMobileMoreOpen(false)
    setDesktopMenu(null)
  }, [active])

  const navigateTo = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault()

    const id = href.slice(1)

    setMenuOpen(false)
    setDesktopMenu(null)
    setMobilePortfolioOpen(false)
    setMobileMoreOpen(false)

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const renderLink = (link: NavLink, mobile = false) => (
    <a
      key={link.id}
      href={link.href}
      className={`
        ${mobile ? styles.dropLink : styles.menuItem}
        ${active === link.id ? styles.active : ''}
      `}
      aria-current={active === link.id ? 'location' : undefined}
      tabIndex={mobile && !menuOpen ? -1 : 0}
      onClick={(event) => navigateTo(event, link.href)}
    >
      {link.label}
    </a>
  )

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
    >
      <div className={`container ${styles.inner}`}>
        <Logo />

        <nav className={styles.nav} aria-label="Main navigation">
          {mainLinks.slice(0, 2).map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`${styles.link} ${
                active === link.id ? styles.active : ''
              }`}
              aria-current={active === link.id ? 'location' : undefined}
              onClick={(event) => navigateTo(event, link.href)}
            >
              {link.label}
            </a>
          ))}

          <div className={styles.navGroup}>
            <button
              type="button"
              className={`${styles.navButton} ${
                portfolioActive ? styles.active : ''
              }`}
              aria-expanded={desktopMenu === 'portfolio'}
              onClick={() =>
                setDesktopMenu(
                  desktopMenu === 'portfolio' ? null : 'portfolio'
                )
              }
            >
              Portfolio <span className={styles.chevron}>▾</span>
            </button>

            {desktopMenu === 'portfolio' && (
              <div className={styles.menu}>
                {portfolioLinks.map((link) => renderLink(link))}
              </div>
            )}
          </div>

          <div className={styles.navGroup}>
            <button
              type="button"
              className={`${styles.navButton} ${
                moreActive ? styles.active : ''
              }`}
              aria-expanded={desktopMenu === 'more'}
              onClick={() =>
                setDesktopMenu(
                  desktopMenu === 'more' ? null : 'more'
                )
              }
            >
              More <span className={styles.chevron}>▾</span>
            </button>

            {desktopMenu === 'more' && (
              <div className={styles.menu}>
                {moreLinks.map((link) => renderLink(link))}
              </div>
            )}
          </div>

          <a
            href={mainLinks[2].href}
            className={`${styles.link} ${
              active === 'contact' ? styles.active : ''
            }`}
            aria-current={active === 'contact' ? 'location' : undefined}
            onClick={(event) =>
              navigateTo(event, mainLinks[2].href)
            }
          >
            Contact
          </a>
        </nav>
        <a
          href="/documents/gatmach_yuol_cv.pdf"
          download="Gatmach-Yuol-CV.pdf"
          className={styles.cvButton}
        >
          Download CV
        </a>
        <button
          type="button"
          className={styles.burger}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`${styles.dropdown} ${
          menuOpen ? styles.dropdownOpen : ''
        }`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className={`container ${styles.mobileNav}`}>
          <nav aria-label="Mobile navigation">
            {mainLinks.slice(0, 2).map((link) =>
              renderLink(link, true)
            )}

            <div className={styles.mobileGroup}>
              <button
                type="button"
                className={styles.mobileGroupButton}
                aria-expanded={mobilePortfolioOpen}
                onClick={() =>
                  setMobilePortfolioOpen((value) => !value)
                }
              >
                Portfolio
                <span className={styles.chevron}>▾</span>
              </button>

              {mobilePortfolioOpen && (
                <div className={styles.mobileSubmenu}>
                  {portfolioLinks.map((link) =>
                    renderLink(link, true)
                  )}
                </div>
              )}
            </div>

            <div className={styles.mobileGroup}>
              <button
                type="button"
                className={styles.mobileGroupButton}
                aria-expanded={mobileMoreOpen}
                onClick={() =>
                  setMobileMoreOpen((value) => !value)
                }
              >
                More
                <span className={styles.chevron}>▾</span>
              </button>

              {mobileMoreOpen && (
                <div className={styles.mobileSubmenu}>
                  {moreLinks.map((link) =>
                    renderLink(link, true)
                  )}
                </div>
              )}
            </div>

            {renderLink(mainLinks[2], true)}

            <a
              href="/documents/gatmach_yuol_cv.pdf"
              download="Gatmach-Yuol-CV.pdf"
              className={styles.mobileCvButton}
              tabIndex={menuOpen ? 0 : -1}
            >
              Download CV
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

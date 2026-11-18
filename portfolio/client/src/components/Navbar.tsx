
import { useState, useEffect, useRef } from 'react'
import type { MouseEvent } from 'react'
import Logo from '../sections/Logo'
import styles from './Navbar.module.css'

export type Page =
  | 'home'
  | 'about'
  | 'expertise'
  | 'projects'
  | 'services'
  | 'achievements'
  | 'contact'

type NavbarProps = {
  activePage: Page
  onNavigate: (page: Page) => void
}

type NavLink = {
  label: string
  href: string
  id: Page
}

const mainLinks: NavLink[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
]

const portfolioLinks: NavLink[] = [
  { label: 'Expertise', href: '#expertise', id: 'expertise' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Creative Services', href: '#services', id: 'services' },
]

const achievementLink: NavLink = {
  label: 'Achievements',
  href: '#achievements',
  id: 'achievements',
}

const contactLink: NavLink = {
  label: 'Contact',
  href: '#contact',
  id: 'contact',
}

export default function Navbar({
  activePage,
  onNavigate,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null)
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false)

  const headerRef = useRef<HTMLElement>(null)

  const portfolioActive = portfolioLinks.some(
    (link) => activePage === link.id
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
        setMobilePortfolioOpen(false)
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
      }
    }

    document.addEventListener('keydown', handler)

    return () => document.removeEventListener('keydown', handler)
  }, [])

  const navigateTo = (
    event: MouseEvent<HTMLAnchorElement>,
    page: Page
  ) => {
    event.preventDefault()

    setMenuOpen(false)
    setDesktopMenu(null)
    setMobilePortfolioOpen(false)

    onNavigate(page)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const renderLink = (link: NavLink, mobile = false) => (
    <a
      key={link.id}
      href={link.href}
      className={`
        ${mobile ? styles.dropLink : styles.menuItem}
        ${activePage === link.id ? styles.active : ''}
      `}
      aria-current={activePage === link.id ? 'page' : undefined}
      tabIndex={mobile && !menuOpen ? -1 : 0}
      onClick={(event) => navigateTo(event, link.id)}
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
          {mainLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`${styles.link} ${
                activePage === link.id ? styles.active : ''
              }`}
              aria-current={
                activePage === link.id ? 'page' : undefined
              }
              onClick={(event) => navigateTo(event, link.id)}
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

          {renderLink(achievementLink)}

          <a
            href={contactLink.href}
            className={`${styles.link} ${
              activePage === contactLink.id ? styles.active : ''
            }`}
            aria-current={
              activePage === contactLink.id ? 'page' : undefined
            }
            onClick={(event) =>
              navigateTo(event, contactLink.id)
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
          aria-label={
            menuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
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
            {mainLinks.map((link) => renderLink(link, true))}

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

            {renderLink(achievementLink, true)}
            {renderLink(contactLink, true)}

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

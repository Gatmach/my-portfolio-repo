
import Logo from '../sections/Logo'
import styles from './Footer.module.css'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Gatmach',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gatmachyuolnyuon/',
    icon: 'linkedin',
  },
  {
    label: 'X',
    href: 'https://x.com/YuolGatmach',
    icon: 'x',
  },
  {
    label: 'Email',
    href: 'mailto:gatmachyuol@gmail.com',
    icon: 'email',
  },
]

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Creative Services', href: '#services' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.04-1.15 3.04-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      )

    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.8H4.98V9.3h2.95v9.5ZM6.45 8a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM19 18.8h-2.94v-4.62c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44v4.7H9.79V9.3h2.82v1.3h.04c.39-.74 1.35-1.52 2.78-1.52 2.98 0 3.53 1.96 3.53 4.5v5.22Z" />
        </svg>
      )

    case 'x':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.63L5.38 22H2.25l7.25-8.29L1.8 2h6.4l4.43 6.96L18.9 2Zm-1.1 18h1.73L7.28 3.9H5.42L17.8 20Z" />
        </svg>
      )

    case 'email':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect
            x="2.5"
            y="4.5"
            width="19"
            height="15"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="m3.5 6 8.5 7 8.5-7"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    default:
      return null
  }
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.wrapper}`}>
        {/* Closing call to action */}
        <section className={styles.cta}>
          <p className={styles.eyebrow}>HAVE A PROJECT IN MIND?</p>

          <h2 className={styles.ctaTitle}>
            Let's turn your ideas into
            <span> something meaningful.</span>
          </h2>

          <p className={styles.ctaText}>
            Whether it's software development, AI, or a creative idea,
            I'm always interested in exploring opportunities to build
            something useful.
          </p>

          <div className={styles.ctaActions}>
            <a href="#contact" className={styles.primaryButton}>
              Start a conversation
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#projects" className={styles.secondaryButton}>
              Explore my work
            </a>
          </div>
        </section>

        {/* Footer columns */}
        <div className={styles.inner}>
          <div className={styles.brand}>
            <Logo />

            <p className={styles.tagline}>
              Building thoughtful digital experiences through software
              engineering, AI, and creative technology.
            </p>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Explore</h3>

            <ul className={styles.navigation}>
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.navigationLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Connect</h3>

            <p className={styles.connectText}>
              Find me across the web or reach out directly.
            </p>

            <ul className={styles.socialList}>
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={styles.socialLink}
                    aria-label={link.label}
                    title={link.label}
                    target={
                      link.href.startsWith('http') ? '_blank' : undefined
                    }
                    rel={
                      link.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    <SocialIcon name={link.icon} />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="mailto:gatmachyuol@gmail.com"
              className={styles.emailLink}
            >
              gatmachyuol@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Gatmach Yuol. All rights reserved.
          </p>

          <p className={styles.credit}>
            Designed & developed with care.
          </p>

          <a href="#home" className={styles.backToTop}>
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

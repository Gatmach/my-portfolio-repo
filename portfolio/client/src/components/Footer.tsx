
import Logo from '../sections/Logo'
import styles from './Footer.module.css'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Gatmach', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gatmachyuolnyuon/',
    icon: 'linkedin',
  },
  { label: 'X', href: 'https://x.com/YuolGatmach', icon: 'x' },
  { label: 'Email', href: 'mailto:gatmachyuol@gmail.com', icon: 'email' },
]

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Creative Services', href: '#services' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.tagline}>
            Building modern web applications, AI solutions, and scalable
            software that make a real impact.
          </p>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Explore</p>
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
          <p className={styles.colTitle}>Connect</p>
          <ul className={styles.list}>
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.link}
                  aria-label={link.label}
                  title={link.label}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Gatmach Yuol. All rights reserved.</p>
      </div>
    </footer>
  )
}

import styles from './Footer.module.css'

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Twitter',  href: 'https://twitter.com' },
  { label: 'Email',    href: 'mailto:you@email.com' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.brand}>
          <a href="#home" className={styles.logo}>Portfolio</a>
          <p className={styles.tagline}>
            Building things for the web.
          </p>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Social links</p>
          <ul className={styles.list}>
            {socialLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}
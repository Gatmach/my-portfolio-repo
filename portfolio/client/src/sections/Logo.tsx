import styles from './Logo.module.css'

export default function Logo() {
  return (
    <a href="#home" className={styles.logoWrap} aria-label="Home">
      <svg
        className={styles.mark}
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={styles.ring}
          d="M26.4,13.6 A10,10 0 1 0 26.4,20.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className={styles.bar}
          d="M26.4,20.4 L18,20.4 L18,15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle className={styles.dot} cx="26.4" cy="13.6" r="1.8" />
      </svg>

      <span className={styles.word}>
        Gat<em>mach</em>
      </span>
    </a>
  )
}
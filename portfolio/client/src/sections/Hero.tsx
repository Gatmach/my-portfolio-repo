import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>

      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.overlayBottom} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>

          <div className={styles.eyebrowWrap}>
            <span className={styles.eyebrowLine} />
            <p className={styles.eyebrow}>Available for work</p>
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleLine1}>Gatmach</span>
            <span className={styles.titleLine2}>Yuol</span>
            <span className={styles.titleAccent}>Developer</span>
          </h1>

          <div className={styles.divider} />

          <p className={styles.subtitle}>
            Building fast, scalable, and thoughtful digital
            experiences.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.btnPrimary}>View my work</a>
            <a href="#contact"  className={styles.btnGhost}>Get in touch</a>
          </div>

        </div>
      </div>

    </section>
  )
}
import styles from './About.module.css'

const skills = [
  { name: 'React',       color: '#61DAFB', bg: 'rgba(97,218,251,0.08)',  icon: '⚛' },
  { name: 'TypeScript',  color: '#3178C6', bg: 'rgba(49,120,198,0.08)',  icon: '𝙏𝙎' },
  { name: 'Node.js',     color: '#84BA64', bg: 'rgba(132,186,100,0.08)', icon: '⬡' },
  { name: 'Express',     color: '#eeeeee', bg: 'rgba(238,238,238,0.06)', icon: '⚡' },
  { name: 'PostgreSQL',  color: '#336791', bg: 'rgba(51,103,145,0.08)',  icon: '🐘' },
  { name: 'REST APIs',   color: '#FF6C37', bg: 'rgba(255,108,55,0.08)',  icon: '⇄' },
  { name: 'Git',         color: '#F05032', bg: 'rgba(240,80,50,0.08)',   icon: '⑂' },
  { name: 'Docker',      color: '#2496ED', bg: 'rgba(36,150,237,0.08)',  icon: '🐳' },
  { name: 'Tailwind',    color: '#38BDF8', bg: 'rgba(56,189,248,0.08)',  icon: '🌊' },
  { name: 'Vite',        color: '#BC52EE', bg: 'rgba(188,82,238,0.08)',  icon: '⚡' },
  { name: 'Linux',       color: '#FCC624', bg: 'rgba(252,198,36,0.08)',  icon: '🐧' },
  { name: 'CI/CD',       color: '#c8b89a', bg: 'rgba(200,184,154,0.08)', icon: '♾' },
]

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">

        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={`${styles.heading} reveal`}>
              Crafting code that
              <em>actually ships.</em>
            </h2>
          </div>

          <div className={styles.right}>
            <p className={`${styles.bio} reveal`}>
            I’m a developer passionate about building fast, reliable, 
            and delightful digital products. I work across full-stack web 
            and mobile development, and I’m experienced in applying AI, 
            machine learning, neural networks, and natural language processing 
            to real-world problems. From designing scalable backends to crafting 
            intuitive, pixel-perfect interfaces, I focus on clean architecture, 
            performance, and creating solutions that are both practical and impactful.
            </p>
            <p className={`${styles.bio} reveal`} style={{ transitionDelay: '80ms' }}>
              When I’m not coding, I’m exploring new tools, expanding my skills, 
              and preparing to contribute more actively to the tech community.
            </p>

            <div className={`${styles.skills} reveal`} style={{ transitionDelay: '160ms' }}>
              {skills.map((s) => (
                <span
                  key={s.name}
                  className={styles.tag}
                  style={{
                    '--tag-color': s.color,
                    '--tag-bg': s.bg,
                  } as React.CSSProperties}
                >
                  <span className={styles.tagIcon}>{s.icon}</span>
                  <span className={styles.tagName}>{s.name}</span>
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
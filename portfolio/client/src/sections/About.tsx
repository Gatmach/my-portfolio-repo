import styles from './About.module.css'

const skills = [
  { name: 'React',       color: '#61DAFB', bg: 'rgba(97,218,251,0.08)',  icon: '⚛' },
  { name: 'JavaScript', color: '#F7DF1E', bg: 'rgba(247,223,30,0.08)',  icon: '𝙅𝙎' },
  { name: 'PostgreSQL',  color: '#336791', bg: 'rgba(51,103,145,0.08)',  icon: '🐘' },
  { name: 'Docker',      color: '#2496ED', bg: 'rgba(36,150,237,0.08)',  icon: '🐳' },
  { name: 'Python',     color: '#3776AB', bg: 'rgba(55,118,171,0.08)',  icon: '🐍' },
  { name: 'C/C++',      color: '#00599C', bg: 'rgba(0,89,156,0.08)',    icon: '⚙' },
  { name: 'Java',       color: '#007396', bg: 'rgba(0,115,150,0.08)',    icon: '☕' },
  { name: 'Seaborn',    color: '#4C72B0', bg: 'rgba(76,114,176,0.08)',  icon: '📊' },
  { name: 'Matplotlib', color: '#11557C', bg: 'rgba(17,85,124,0.08)',   icon: '📈' },
  { name: 'pandas',     color: '#4DABCF', bg: 'rgba(77,171,207,0.08)',  icon: '🐼' },
  { name: 'NumPy',      color: '#4DABCF', bg: 'rgba(77,171,207,0.08)',  icon: '🔢' },
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

import styles from './Achievements.module.css'

const achievements = [
  {
    year: '2025',
    type: 'ACADEMIC RECOGNITION',
    title: 'DAFI Silver Academic Excellence Award',
    organization: 'DAFI Scholarship Programme',
    description:
      'Recognised for academic excellence, dedication, and commitment to education.',
  },
  {
    year: '2025',
    type: 'TECHNICAL DEVELOPMENT',
    title: 'LLM Applications with Prompt Engineering',
    organization: 'NVIDIA',
    description:
      'Completed specialised training in large language model applications and prompt engineering.',
  },
  {
    year: '2024–2026',
    type: 'LEADERSHIP',
    title: 'Secretary General',
    organization:
      'JKUAT South Sudanese and Sudanese Students Association',
    description:
      'Elected to student leadership, supporting coordination, communication, and student engagement.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className={`section ${styles.achievements}`}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>MY JOURNEY</p>

          <h2 className={styles.heading}>
            Achievements &
            <em>Recognition.</em>
          </h2>

          <p className={styles.intro}>
            Milestones in academic excellence, technical development,
            and leadership that reflect my commitment to continuous
            growth and meaningful impact.
          </p>
        </div>

        <div className={styles.grid}>
          {achievements.map((item, index) => (
            <article
              className={`${styles.card} ${styles[`card${index + 1}`]}`}
              key={item.title}
              style={{ animationDelay: `${index * 180}ms` }}
            >
              <div className={styles.cardTop}>
                <span className={styles.number}>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className={styles.year}>{item.year}</span>
              </div>

              <div className={styles.cardContent}>
                <span className={styles.type}>{item.type}</span>

                <h3 className={styles.title}>{item.title}</h3>

                <p className={styles.organization}>
                  {item.organization}
                </p>

                <p className={styles.description}>
                  {item.description}
                </p>
              </div>

              <div className={styles.cardAccent} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

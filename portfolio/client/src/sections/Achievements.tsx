

import styles from './Achievements.module.css'

const achievements = [
  {
    year: '2026',
    type: 'EDUCATION',
    title: 'BSc Computer Science',
    organization: 'Jomo Kenyatta University of Agriculture and Technology (JKUAT)',
    description:
      'Graduated with Second Class Honours (Upper Division).',
  },
  {
    year: '2025',
    type: 'ACADEMIC RECOGNITION',
    title: 'DAFI Silver Academic Excellence Award',
    organization: 'DAFI Scholarship Programme',
    description:
      'Recognised for academic excellence and commitment to education.',
  },
  {
    year: '2025',
    type: 'PROFESSIONAL DEVELOPMENT',
    title: 'LLM Applications with Prompt Engineering',
    organization: 'NVIDIA',
    description:
      'Completed professional training focused on large language model applications and prompt engineering.',
  },
  {
    year: '2024–2026',
    type: 'LEADERSHIP',
    title: 'Secretary General',
    organization: 'JKUAT South Sudanese and Sudanese Students Association',
    description:
      'Served in a student leadership role, supporting communication, coordination, and student engagement.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className={`section ${styles.achievements}`}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>MY JOURNEY</p>

          <h2 className={styles.heading}>
            Education &
            <em>achievements.</em>
          </h2>

          <p className={styles.intro}>
            A record of academic milestones, professional development,
            and leadership experiences that continue to shape my growth.
          </p>
        </div>

        <div className={styles.timeline}>
          {achievements.map((item, index) => (
            <article className={styles.item} key={item.title}>
              <div className={styles.marker}>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>

              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.type}>{item.type}</span>
                  <span className={styles.year}>{item.year}</span>
                </div>

                <h3 className={styles.title}>{item.title}</h3>

                <p className={styles.organization}>
                  {item.organization}
                </p>

                <p className={styles.description}>
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

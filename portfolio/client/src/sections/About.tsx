
import styles from './About.module.css'

const highlights = [
  {
    label: 'Education',
    value: 'BSc Computer Science — JKUAT',
  },
  {
    label: 'Academic Recognition',
    value: 'DAFI Silver Academic Excellence Award',
  },
  {
    label: 'Professional Experience',
    value: 'Mathematics & Chemistry Teacher',
  },
  {
    label: 'Leadership',
    value: 'Secretary General, JKUAT-SSSSA',
  },
]

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              A little about
              <em>my journey.</em>
            </h2>
          </div>

          <div className={styles.right}>
            <p className={styles.bio}>
              I am a Computer Science graduate from Jomo Kenyatta
              University of Agriculture and Technology (JKUAT), with
              a strong interest in software engineering, artificial
              intelligence, machine learning, and data science.
            </p>

            <p className={styles.bio}>
              My academic and practical experiences have shaped my
              interest in developing technology that addresses real-world
              challenges. Through projects involving web development,
              machine learning, and data-driven systems, I continue to
              strengthen my ability to transform ideas into practical
              software solutions.
            </p>

            <p className={styles.bio}>
              Beyond technology, I have gained experience in teaching
              Mathematics and Chemistry at Vision Secondary School and
              serving as Secretary General of the JKUAT South Sudanese
              and Sudanese Students Association. These experiences have
              strengthened my communication, leadership, collaboration,
              and problem-solving skills.
            </p>

            <p className={styles.bio}>
              I am committed to continuous learning and professional
              growth, particularly in AI and emerging technologies.
              My long-term interest is in building innovative solutions
              that make technology more useful, accessible, and impactful.
            </p>

            <div className={styles.highlights}>
              {highlights.map((item) => (
                <div key={item.label} className={styles.highlight}>
                  <span className={styles.highlightLabel}>
                    {item.label}
                  </span>
                  <span className={styles.highlightValue}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

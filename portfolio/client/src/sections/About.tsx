
import styles from './About.module.css'

const highlights = [
  {
    label: 'Education',
    value: 'BSc Computer Science — JKUAT',
  },
  {
    label: 'Specialisation',
    value: 'AI, Machine Learning & Software Development',
  },
  {
    label: 'Recognition',
    value: 'DAFI Silver Academic Excellence Award',
  },
  {
    label: 'Experience',
    value: 'Teaching, Mentorship & Youth Leadership',
  },
]

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.left}>
            <div className={styles.imageContent}>
              <span className={styles.eyebrow}>WHO I AM</span>

              <div className={styles.imageWrapper}>
                <img
                  src="/images/my_workstation.jpeg"
                  alt="My workstation and development environment"
                  className={styles.workstationImage}
                />
              </div>
            </div>

            <div className={styles.identityContent}>
              <h2 className={styles.heading}>
                Building technology.
                <em>Solving problems.</em>
                Creating impact.
              </h2>

              <p className={styles.identity}>
                <span>COMPUTER SCIENCE GRADUATE</span>
                <span>AI & MACHINE LEARNING</span>
                <span>SOFTWARE DEVELOPMENT</span>
              </p>
            </div>
        </div>

        {/* BIOGRAPHY AND HIGHLIGHTS BELOW */}
        <div className={styles.right}>
          <p className={styles.bio}>
            I am a Computer Science graduate from Jomo Kenyatta
            University of Agriculture and Technology (JKUAT),
            with a strong technical foundation and a passion for
            building innovative digital solutions.
          </p>

          <p className={styles.bio}>
            My interests span software engineering, artificial
            intelligence, machine learning, and data science.
            Through practical projects, I have explored developing
            software applications, building machine learning
            models, analysing data, and applying emerging
            technologies to real-world challenges.
          </p>

          <p className={styles.bio}>
            Beyond technology, my experience in teaching,
            mentorship, and youth leadership has strengthened
            my ability to communicate ideas, collaborate with
            diverse teams, and approach challenges with empathy,
            adaptability, and purpose.
          </p>

          <p className={styles.bio}>
            I aspire to build intelligent, reliable, and inclusive
            technology that creates opportunities, addresses
            meaningful problems, and makes a positive difference
            in people's lives.
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
    </section>
  )
}

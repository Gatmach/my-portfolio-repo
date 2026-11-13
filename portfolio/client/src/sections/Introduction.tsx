
import styles from './Introduction.module.css'

const interests = [
  {
    number: '01',
    title: 'Software Engineering',
    description: 'Designing and building practical software applications and digital solutions.',
  },
  {
    number: '02',
    title: 'Artificial Intelligence',
    description: 'Exploring intelligent systems that learn, reason, and solve problems.',
  },
  {
    number: '03',
    title: 'Machine Learning & Data Science',
    description: 'Discovering patterns, analysing data, and developing data-driven solutions.',
  },
  {
    number: '04',
    title: 'Computer Networking',
    description: 'Understanding network infrastructure, connectivity, and communication systems.',
  },
  {
    number: '05',
    title: 'Cybersecurity',
    description: 'Exploring digital security, system protection, and network safety.',
  },
  {
    number: '06',
    title: 'Innovation & Problem Solving',
    description: 'Turning creative ideas into practical solutions to real-world challenges.',
  },
]

export default function Introduction() {
  return (
    <section
      className={`section ${styles.introduction}`}
      aria-labelledby="introduction-heading"
    >
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.headingGroup}>
            <span className={styles.eyebrow}>
              GET TO KNOW ME
            </span>

            <h2 id="introduction-heading" className={styles.heading}>
              I don't just write code.
              <em>I build technology that solves problems.</em>
            </h2>
          </div>

          <div className={styles.content}>
            <p className={styles.lead}>
              I am a Computer Science graduate passionate about
              technology, innovation, and transforming ideas into
              practical digital solutions.
            </p>

            <p className={styles.description}>
              My interests span software engineering, artificial
              intelligence, machine learning, data science,
              computer networking, and cybersecurity. I enjoy
              exploring how these disciplines connect to create
              intelligent, reliable, secure, and impactful
              technology solutions.
            </p>

            <p className={styles.description}>
              Driven by curiosity and continuous learning, I am
              committed to developing my technical abilities and
              using technology to address real-world challenges.
            </p>
          </div>
        </div>

        <div className={styles.interestsSection}>
          <div className={styles.interestsHeader}>
            <span className={styles.interestLabel}>
              AREAS OF TECHNICAL INTEREST
            </span>

            <p className={styles.interestsIntro}>
              Fields that inspire my curiosity and continuous growth.
            </p>
          </div>

          <div className={styles.interestGrid}>
            {interests.map((interest) => (
              <article
                key={interest.number}
                className={styles.interestCard}
              >
                <div className={styles.imageWrapper}>
                  <img
                    src="/images/yuol.jpg"
                    alt="Gatmach Yuol"
                    className={styles.interestImage}
                    loading="lazy"
                  />

                  <span className={styles.interestNumber}>
                    {interest.number}
                  </span>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>
                    {interest.title}
                  </h3>

                  <p className={styles.cardDescription}>
                    {interest.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className={styles.signature}>
          <span>TECHNOLOGY WITH PURPOSE.</span>
          <span>SOLUTIONS WITH IMPACT.</span>
        </p>
      </div>
    </section>
  )
}



import styles from './Insights.module.css'

const insights = [
  {
    number: '01',
    category: 'ARTIFICIAL INTELLIGENCE',
    title: 'Exploring Artificial Intelligence and Machine Learning',
    description:
      'Exploring how intelligent systems learn from data, recognise patterns, and solve practical problems through machine learning.',
    topics: ['Machine Learning', 'Deep Learning', 'Computer Vision'],
  },
  {
    number: '02',
    category: 'SOFTWARE ENGINEERING',
    title: 'Building Practical Software Solutions',
    description:
      'Sharing ideas and lessons from developing web applications, backend systems, APIs, and software solutions.',
    topics: ['Web Development', 'Backend Systems', 'Software Design'],
  },
  {
    number: '03',
    category: 'DATA SCIENCE',
    title: 'Turning Data into Meaningful Insights',
    description:
      'Exploring data analysis, visualisation, and the use of data-driven approaches to understand real-world challenges.',
    topics: ['Data Analysis', 'Visualisation', 'Data Science'],
  },
]

export default function Insights() {
  return (
    <section id="insights" className={`section ${styles.insights}`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>THOUGHTS & EXPLORATIONS</p>

            <h2 className={styles.heading}>
              Ideas worth
              <em>exploring.</em>
            </h2>
          </div>

          <p className={styles.intro}>
            A space for exploring technology, sharing lessons,
            documenting discoveries, and reflecting on the ideas
            shaping my journey in software development and AI.
          </p>
        </div>

        <div className={styles.grid}>
          {insights.map((item) => (
            <article key={item.number} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.number}>{item.number}</span>
                <span className={styles.category}>{item.category}</span>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>

                <p className={styles.description}>
                  {item.description}
                </p>
              </div>

              <div className={styles.topics}>
                {item.topics.map((topic) => (
                  <span key={topic} className={styles.topic}>
                    {topic}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

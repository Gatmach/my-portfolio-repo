

import styles from './Expertise.module.css'

const expertiseGroups = [
  {
    number: '01',
    title: 'Programming Languages',
    description: 'Writing clean, structured code to build reliable software solutions.',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C/C++', 'Java'],
  },
  {
    number: '02',
    title: 'Web & Backend Development',
    description: 'Building responsive interfaces, backend systems, and APIs.',
    skills: ['React', 'Django', 'Laravel', 'REST APIs', 'HTML', 'CSS'],
  },
  {
    number: '03',
    title: 'AI, Machine Learning & Data Science',
    description: 'Exploring intelligent systems and extracting insights from data.',
    skills: ['Machine Learning', 'TensorFlow', 'NumPy', 'pandas', 'Matplotlib'],
  },
  {
    number: '04',
    title: 'Tools & Databases',
    description: 'Working with development tools, version control, and data storage.',
    skills: ['PostgreSQL', 'Docker', 'Git', 'GitHub'],
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className={`section ${styles.expertise}`}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>WHAT I WORK WITH</p>
          <h2 className={styles.heading}>
            My technical
            <em>expertise.</em>
          </h2>
          <p className={styles.intro}>
            A combination of programming, software development, and
            data-focused skills that I continue to develop through
            practical work and continuous learning.
          </p>
        </div>

        <div className={styles.grid}>
          {expertiseGroups.map((group) => (
            <article key={group.number} className={styles.card}>
              <span className={styles.number}>{group.number}</span>

              <h3 className={styles.cardTitle}>{group.title}</h3>

              <p className={styles.description}>{group.description}</p>

              <div className={styles.skills}>
                {group.skills.map((skill) => (
                  <span key={skill} className={styles.tag}>
                    {skill}
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

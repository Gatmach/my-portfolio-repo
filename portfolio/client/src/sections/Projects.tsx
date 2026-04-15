import styles from './Projects.module.css'

interface Project {
  number: string
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Project Alpha',
    description:
      'A full-stack web application with real-time features, built with React, Node.js, and WebSockets.',
    tags: ['React', 'Node.js', 'WebSockets', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    number: '02',
    title: 'Project Beta',
    description:
      'RESTful API service handling high-throughput requests with caching and rate limiting.',
    tags: ['Node.js', 'Express', 'Redis', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    number: '03',
    title: 'Project Gamma',
    description:
      'Dashboard UI with complex data visualisations, filtering, and CSV export capabilities.',
    tags: ['TypeScript', 'React', 'D3.js', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    number: '04',
    title: 'Project Delta',
    description:
      'CLI tool for automating repetitive dev-ops tasks across multiple environments.',
    tags: ['Node.js', 'CLI', 'Shell', 'CI/CD'],
    githubUrl: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">

        <div className={styles.header}>
          <h2 className={`${styles.heading} reveal`}><em>Crafted </em> Experiences</h2>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <article
              key={p.number}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={styles.cardTop}>
                <span className={styles.num}>{p.number}</span>
                <div className={styles.links}>

                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      aria-label="GitHub"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  )}

                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      aria-label="Live site"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}

                </div>
              </div>

              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.description}</p>

              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
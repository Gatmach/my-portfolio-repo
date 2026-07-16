import styles from './Projects.module.css'

interface Project {
  title: string
  role: string
  description: string
  tags: string[]
  year: string
  image?: string
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    title: 'Smart Waste Management System',
    role: 'Full-Stack Developer',
    description:
      'A smart city web application that supports real-time monitoring and optimization of waste collection using IoT and data analytics.',
    tags: ['Django', 'Python', 'PostgreSQL', 'Chart.js', 'JavaScript'],
    year: '2025',
    image: '/images/swms.png',
    githubUrl: 'https://github.com/Gatmach/SWM-System',
  },
  {
    title: 'Farm2Fork',
    role: 'Full-Stack Developer',
    description:
      'A blockchain-powered agricultural traceability platform that enables farmers, buyers, and consumers to track produce from farm to market through QR code verification, real-time lifecycle updates, and secure supply chain management.',
    tags: [
      'Laravel',
      'React Native',
      'Expo',
      'PostgreSQL',
      'Blockchain',
      'REST API',
    ],
    year: '2026',
    image: '/images/farm2fork.jpeg',
    githubUrl: 'https://github.com/Farmtfork',
  },
  {
    title: 'CropAI – AI-Powered Crop Disease Diagnosis',
    role: 'AI/ML & Full-Stack Developer',
    description:
      'An AI-powered crop disease diagnosis platform that enables farmers to identify diseases in maize, tomatoes, and beans using computer vision. The system delivers real-time, offline-capable predictions, treatment recommendations, and a mobile-first experience to support sustainable agriculture and food security.',
    tags: [
      'FastAPI',
      'TensorFlow',
      'Keras',
      'React Native',
      'SQLite',
      'Docker',
      'Python',
    ],
    year: '2025',
    image: '/images/cropai.png',
    githubUrl: 'https://github.com/Gatmach/ai-crop-disease-diagnosis',
  },
  {
    title: 'Feelr – AI-Powered Sentiment Analysis Platform',
    role: 'Machine Learning & Full-Stack Developer',
    description:
      'A web-based sentiment analysis platform that leverages natural language processing and deep learning to classify text sentiment. Feelr enables users to analyze emotions, visualize sentiment trends, track analysis history, and manage accounts through a secure, responsive interface.',
    tags: [
      'Django',
      'Django REST Framework',
      'React',
      'TensorFlow',
      'RoBERTa',
      'PostgreSQL',
      'Chart.js',
      'JWT',
    ],
    year: '2025',
    image: '/images/feelr.png',
    githubUrl: 'https://github.com/Gatmach/feeler',
  },
]

const GitHubIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 2.97 1.81 5.16 4.44 6.04" />
  </svg>
)

const ExternalIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 3h7v7" />
    <path d="M10 14L21 3" />
    <path d="M21 14v7h-7" />
    <path d="M21 3l-9 9" />
    <path d="M5 5h6" />
    <path d="M5 5v6" />
    <path d="M5 19h6" />
    <path d="M19 19v-6" />
  </svg>
)

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        {/* ── Header ── */}
        <div className={styles.header}>
          <h2 className={`${styles.heading} reveal`}>
            <em>Crafted </em>Experiences
          </h2>
          <p className={`${styles.sub} reveal`}>
            A closer look at what I build — real products designed to solve real
            problems, from first idea to finished system.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className={styles.grid}>
          {projects.map((p, i) => (
            <article
              key={i}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={() => p.liveUrl && window.open(p.liveUrl, '_blank')}
            >
              {/* Thumbnail */}
              <div className={styles.thumbnail}>
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className={styles.thumbnailImg}
                  />
                ) : (
                  <span className={styles.thumbnailNum}>{i + 1}</span>
                )}
              </div>

              {/* Card body */}
              <div className={styles.body}>
                {/* Links — only on cards without image */}
                <div className={styles.topRow}>
                  {!p.image && (
                    <div className={styles.links}>
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.iconLink}
                          aria-label="GitHub"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <GitHubIcon />
                        </a>
                      )}
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.iconLink}
                          aria-label="Live site"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalIcon />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Title + role */}
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.role}>{p.role}</p>

                {/* Description */}
                <p className={styles.desc}>{p.description}</p>

                {/* Tags */}
                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className={styles.cardFooter}>
                  <span className={styles.year}>{p.year}</span>

                  {(p.githubUrl || p.liveUrl) && (
                    <a
                      href={p.githubUrl ?? p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.readMore}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Read More →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

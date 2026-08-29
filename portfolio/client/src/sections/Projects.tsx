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
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
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
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14 3h7v7" />
    <path d="M10 14L21 3" />
    <path d="M14 3h7v7" />
    <path d="M21 3l-9 9" />
    <path d="M21 14v7h-7" />
  </svg>
)

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <span className={styles.eyebrow}>Selected Work</span>

            <h2 className={`${styles.heading} reveal`}>
              <em>Crafted</em> Experiences
            </h2>
          </div>

          <p className={`${styles.sub} reveal`}>
            A closer look at what I build — real products designed to solve real
            problems, from first idea to finished system.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`${styles.card} reveal`}
              style={{
                transitionDelay: `${index * 70}ms`,
              }}
            >
              {/* Project Image */}
              <div className={styles.thumbnail}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className={styles.thumbnailImg}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                ) : (
                  <span className={styles.thumbnailNum} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                )}

                <div className={styles.imageOverlay} />

                <span className={styles.projectIndex}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Card Body */}
              <div className={styles.body}>
                {/* Meta */}
                <div className={styles.projectMeta}>
                  <span className={styles.year}>{project.year}</span>

                  <span className={styles.projectType}>{project.role}</span>
                </div>

                {/* Title */}
                <h3 className={styles.title}>{project.title}</h3>

                {/* Description */}
                <p className={styles.desc}>{project.description}</p>

                {/* Technologies */}
                <div className={styles.tags} aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                {(project.githubUrl || project.liveUrl) && (
                  <div className={styles.cardFooter}>
                    <div className={styles.footerLinks}>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.readMore}
                          aria-label={`View ${project.title} source code on GitHub`}
                        >
                          <GitHubIcon />
                          <span>GitHub</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.readMore}
                          aria-label={`View live ${project.title} project`}
                        >
                          <span>Live Demo</span>
                          <ExternalIcon />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

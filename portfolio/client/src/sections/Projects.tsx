
import styles from './Projects.module.css'

interface Project {
  title: string
  description: string
  year: string
  image: string
  githubUrl: string
}

const projects: Project[] = [
  {
    title: 'WasteOS',
    description:
      'A smart waste management platform designed to improve waste collection, monitoring, and operational efficiency through data-driven management.',
    year: '2025',
    image: '/images/wasteOS.png',
    githubUrl: 'https://github.com/Gatmach/SWM-System',
  },
  {
    title: 'Farm2Fork',
    description:
      'A blockchain-powered agricultural traceability platform that enables transparent tracking of produce from farm to market.',
    year: '2026',
    image: '/images/farm2fork.png',
    githubUrl: 'https://github.com/Farmtfork',
  },
  {
    title: 'CropAI',
    description:
      'An AI-powered application that helps farmers identify diseases affecting maize, tomatoes, and beans.',
    year: '2025',
    image: '/images/cropai.png',
    githubUrl: 'https://github.com/Gatmach/ai-crop-disease-diagnosis',
  },
  {
    title: 'Feelr',
    description:
      'An AI-powered sentiment analysis platform that interprets text, classifies emotions, and visualises sentiment trends.',
    year: '2025',
    image: '/images/feelr.png',
    githubUrl: 'https://github.com/Gatmach/feeler',
  },
]

const ExternalIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14 3h7v7" />
    <path d="M10 14 21 3" />
    <path d="M21 14v7h-7" />
  </svg>
)

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">

        {/* SECTION HEADER */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <span className={styles.eyebrow}>
              SELECTED WORK
            </span>

            <h2 className={styles.heading}>
              Projects & <em>Creations</em>
            </h2>
          </div>

          <p className={styles.sub}>
            A selection of projects reflecting my interest in building
            meaningful technology and solving real-world problems.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={styles.card}
            >
              {/* PROJECT IMAGE */}
              <div className={styles.thumbnail}>
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className={styles.thumbnailImg}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />

                <span className={styles.projectIndex}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* PROJECT DETAILS */}
              <div className={styles.body}>
                <div className={styles.projectMeta}>
                  <span className={styles.year}>
                    {project.year}
                  </span>
                </div>

                <h3 className={styles.title}>
                  {project.title}
                </h3>

                <p className={styles.desc}>
                  {project.description}
                </p>

                {/* READ MORE */}
                <div className={styles.cardFooter}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.readMore}
                    aria-label={`Read more about ${project.title} on GitHub`}
                  >
                    <span>Read More</span>
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

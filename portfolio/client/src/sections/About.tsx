
import { useState } from 'react'
import styles from './About.module.css'

/* ============================================================
   ACADEMIC & PROFESSIONAL HIGHLIGHTS
============================================================ */

const highlights = [
  {
    label: 'Education',
    value: 'BSc Computer Science — JKUAT',
    icon: 'graduation',
  },
  {
    label: 'Specialisation',
    value: 'AI, Machine Learning & Software Development',
    icon: 'brain',
  },
  {
    label: 'Recognition',
    value: 'DAFI Silver Academic Excellence Award',
    icon: 'award',
  },
  {
    label: 'Experience',
    value: 'Teaching, Mentorship & Youth Leadership',
    icon: 'briefcase',
  },
] as const

/* ============================================================
   CORE VALUES
============================================================ */

const coreValues = [
  {
    title: 'Innovation',
    description:
      'Exploring ideas and creating practical solutions to real-world challenges.',
    icon: 'lightbulb',
  },
  {
    title: 'Integrity',
    description:
      'Maintaining honesty, accountability, and ethical responsibility.',
    icon: 'shield',
  },
  {
    title: 'Collaboration',
    description:
      'Working with others, sharing knowledge, and achieving common goals.',
    icon: 'users',
  },
  {
    title: 'Continuous Learning',
    description:
      'Remaining curious and committed to growth, research, and improvement.',
    icon: 'book',
  },
  {
    title: 'Empathy',
    description:
      "Understanding people's needs and designing inclusive, accessible solutions.",
    icon: 'heart',
  },
  {
    title: 'Purpose-Driven Impact',
    description:
      'Using technology and knowledge to make a meaningful difference in communities.',
    icon: 'target',
  },
] as const

/* ============================================================
   MY STORY
============================================================ */

const story = [
  `My journey into Computer Science was driven by a desire to understand how technology can be used to solve real-world problems. This motivation led me to pursue a Bachelor of Science in Computer Science at Jomo Kenyatta University of Agriculture and Technology (JKUAT), where I developed a foundation in computing, software development, and problem-solving.`,

  `Throughout my academic journey, I developed a particular interest in applying theoretical knowledge to practical challenges. I explored software engineering, artificial intelligence, machine learning, computer networking, and data science, seeking opportunities to turn ideas into meaningful solutions. One project that reflects this motivation is my Smart Waste Management System, which I worked on to apply my technical knowledge to urban waste management challenges and their environmental impact.`,

  `Beyond technology, I have always valued education as a means of empowering individuals and strengthening communities. Through my teaching experiences at Kakuma Refugee Secondary School and Vision Secondary School under Windle International Kenya, I supported learners in improving academically, encouraged their potential, and built meaningful relationships with them. These experiences strengthened my appreciation for inclusive education, mentorship, and the role of teachers in shaping future generations.`,

  `My leadership experience as Secretary General of Maikiir Youth Association further strengthened my commitment to community development. I encouraged young people to embrace teamwork, collaboration, shared responsibility, peace, harmony, and peaceful coexistence. It taught me that meaningful progress requires individuals who recognise their responsibilities and work together for the good of their communities.`,

  `Looking ahead, I aspire to continue growing as a technology professional and further my education through advanced studies and research. I remain passionate about software engineering, artificial intelligence, machine learning, computer networking, and data science, and I am open to discovering where I can make the greatest contribution. Ultimately, I want to use my knowledge and experiences to develop reliable, inclusive, and impactful technologies that solve meaningful problems, improve lives, and create opportunities.`,
]

/* ============================================================
   HIGHLIGHT ICON PATHS
============================================================ */

const iconPaths = {
  graduation:
    'M22 10L12 5 2 10l10 5 10-5ZM6 12v5c3.5 3 8.5 3 12 0v-5M22 10v6',

  brain:
    'M12 18V5a3 3 0 0 0-5.8-1 4 4 0 0 0-2.2 7.5A4 4 0 0 0 7 19h5ZM12 18V5a3 3 0 0 1 5.8-1 4 4 0 0 1 2.2 7.5A4 4 0 0 1 17 19h-5Z',

  award:
    'M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM8.2 14.7 7 22l5-3 5 3-1.2-7.3',

  briefcase:
    'M3 7h18v13H3zM8 7V4h8v3M3 12h18M10 12v2h4v-2',
} as const

/* ============================================================
   CORE VALUE ICON PATHS
============================================================ */

const valueIconPaths = {
  lightbulb:
    'M9 18h6M10 22h4M8.5 14.5a7 7 0 1 1 7 0c-.8.6-1.5 1.5-1.5 2.5h-4c0-1-.7-1.9-1.5-2.5Z',

  shield:
    'M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z',

  users:
    'M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',

  book:
    'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z',

  heart:
    'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z',

  target:
    'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
} as const

/* ============================================================
   REUSABLE ICON COMPONENTS
============================================================ */

function HighlightIcon({
  name,
}: {
  name: keyof typeof iconPaths
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="27"
      height="27"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={iconPaths[name]} />
    </svg>
  )
}

function ValueIcon({
  name,
}: {
  name: keyof typeof valueIconPaths
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="27"
      height="27"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={valueIconPaths[name]} />
    </svg>
  )
}

/* ============================================================
   ABOUT COMPONENT
============================================================ */

export default function About() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">

        {/* PROFESSIONAL IDENTITY */}
        <div className={styles.left}>
          <span className={styles.eyebrow}>WHO I AM</span>

          <div className={styles.imageContent}>
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

        {/* MY STORY */}
        <div className={styles.right}>
          <div className={styles.storyHeader}>
            <span className={styles.storyEyebrow}>MY JOURNEY</span>

            <h3 className={styles.storyHeading}>
              A little about my story.
            </h3>
          </div>

          <div
            className={`${styles.storyContent} ${
              expanded ? styles.expanded : ''
            }`}
          >
            {story.map((paragraph, index) => (
              <p className={styles.bio} key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          <button
            type="button"
            className={styles.readMoreButton}
            onClick={() => setExpanded((previous) => !previous)}
            aria-expanded={expanded}
          >
            {expanded ? 'Show Less' : 'Read My Full Story'}

            <span aria-hidden="true">
              {expanded ? '−' : '+'}
            </span>
          </button>

          {/* ACADEMIC & PROFESSIONAL HIGHLIGHTS */}
          <div className={styles.highlightsSection}>
            <div className={styles.highlightsHeader}>
              <span className={styles.highlightsEyebrow}>
                MY BACKGROUND
              </span>

              <h3 className={styles.highlightsHeading}>
                Academic & Professional Highlights
              </h3>

              <p className={styles.highlightsDescription}>
                A snapshot of my academic foundation, areas of focus,
                achievements, and professional experience.
              </p>
            </div>

            <div className={styles.highlights}>
              {highlights.map((item) => (
                <article
                  key={item.label}
                  className={styles.highlight}
                >
                  <div className={styles.highlightIcon}>
                    <HighlightIcon name={item.icon} />
                  </div>

                  <h4 className={styles.highlightLabel}>
                    {item.label}
                  </h4>

                  <p className={styles.highlightValue}>
                    {item.value}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* CORE VALUES */}
          <section className={styles.valuesSection}>
            <div className={styles.valuesHeader}>
              <span className={styles.valuesEyebrow}>
                WHAT GUIDES ME
              </span>

              <h3 className={styles.valuesHeading}>
                The Values Behind My Work
              </h3>

              <p className={styles.valuesDescription}>
                The principles that shape how I learn, collaborate, solve
                problems, and contribute to the communities around me.
              </p>
            </div>

            <div className={styles.valuesGrid}>
              {coreValues.map((item) => (
                <article
                  className={styles.valueCard}
                  key={item.title}
                >
                  <div className={styles.valueIcon}>
                    <ValueIcon name={item.icon} />
                  </div>

                  <h4 className={styles.valueTitle}>
                    {item.title}
                  </h4>

                  <p className={styles.valueDescription}>
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <p className={styles.valuesStatement}>
              Driven by curiosity, guided by integrity, and committed to
              creating technology that makes a difference.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}

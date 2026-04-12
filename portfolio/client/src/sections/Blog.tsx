import styles from './Blog.module.css'

const skills = [
  { name: 'React',      color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js',    color: '#84BA64' },
  { name: 'Express',    color: '#888780' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'REST APIs',  color: '#FF6C37' },
  { name: 'Git',        color: '#F05032' },
  { name: 'Docker',     color: '#2496ED' },
  { name: 'Tailwind',   color: '#38BDF8' },
  { name: 'Vite',       color: '#BC52EE' },
  { name: 'Linux',      color: '#FCC624' },
  { name: 'CI/CD',      color: '#c8b89a' },
]

const tocItems = [
  'Who I am and what I do',
  'The stack I trust to ship',
  'What "clean architecture" actually means to me',
  'Life beyond the terminal',
]

const tags = ['#fullstack', '#typescript', '#devex', '#react', '#opensource']

export default function Blog() {
  return (
    <article className={styles.wrap}>

      {/* ── Meta bar ── */}
      <div className={styles.meta}>
        <span className={styles.category}>Engineering</span>
        <span className={styles.dot} />
        <span className={styles.metaText}>April 12, 2026</span>
        <span className={styles.dot} />
        <span className={styles.metaText}>5 min read</span>
      </div>

      {/* ── Title block ── */}
      <h1 className={styles.title}>
        Crafting code that <em>actually ships.</em>
      </h1>
      <p className={styles.subtitle}>
        A full-stack developer's take on clean architecture, the joy of
        shipping, and yes — coffee brewing ratios.
      </p>

      {/* ── Author byline ── */}
      <div className={styles.author}>
        <div className={styles.avatar}>FS</div>
        <div className={styles.authorInfo}>
          <p className={styles.authorName}>Full-Stack Dev</p>
          <p className={styles.authorRole}>React · TypeScript · Node.js · PostgreSQL</p>
        </div>
      </div>

      {/* ── Hero banner ── */}
      <div className={styles.hero}>
        <div className={styles.heroCode}>
          <pre className={styles.heroCodeInner}>{[
            '// the gap between idea and shipped product',
            'const idea = "what if we built…";',
            'const shipped = deploy(idea, { fast: true, reliable: true });',
            '',
            '// that gap is where I live.',
          ].join('\n')}</pre>
        </div>
        <span className={styles.heroWatermark}>{'{ }'}</span>
      </div>

      {/* ── Table of contents ── */}
      <div className={styles.toc}>
        <p className={styles.tocTitle}>In this post</p>
        <ol className={styles.tocList}>
          {tocItems.map((item, i) => (
            <li key={i} className={styles.tocItem}>{item}</li>
          ))}
        </ol>
      </div>

      {/* ── Body ── */}
      <div className={styles.body}>

        <p className={styles.lead}>
          "Fast, reliable, and delightful to use" sounds like a marketing
          tagline. It's actually a constraint I hold myself to on every
          project — from the data model all the way up to the pixel.
        </p>

        {/* Section 01 */}
        <p className={styles.sectionLabel}>01 — Who I am</p>
        <h2 className={styles.sectionHeading}>The full stack, end to end</h2>
        <p>
          I'm a full-stack developer with a passion for building products
          that are fast, reliable, and delightful to use. I work across
          the entire stack — from database design to pixel-perfect UIs —
          with a strong focus on clean architecture and developer experience.
        </p>
        <p>
          That means I care just as much about a well-indexed Postgres query
          as I do about a smooth CSS transition. The seams between layers are
          where most products break, and closing those seams is where I spend
          a lot of my energy.
        </p>

        <blockquote className={styles.callout}>
          Good software is not magic. It's accumulated decisions — each one
          small, most of them boring — that compound into something that feels
          inevitable.
        </blockquote>

        {/* Section 02 */}
        <p className={styles.sectionLabel}>02 — The stack</p>
        <h2 className={styles.sectionHeading}>Tools I actually use in production</h2>
        <p>
          After years of chasing frameworks, I've settled on a core set of
          tools that have consistently let me move fast without accumulating
          debt. Here's what's in the toolkit right now:
        </p>

        <div className={styles.skillsGrid}>
          {skills.map((s) => (
            <span key={s.name} className={styles.skillTag}>
              <span className={styles.skillDot} style={{ background: s.color }} />
              {s.name}
            </span>
          ))}
        </div>

        <p>
          None of these are exotic choices — and that's the point. Boring,
          proven tools used with intention beat flashy ones used carelessly
          every time.
        </p>

        {/* Section 03 */}
        <p className={styles.sectionLabel}>03 — Philosophy</p>
        <h2 className={styles.sectionHeading}>What "clean architecture" actually means</h2>
        <p>
          Clean architecture isn't about following a pattern from a book.
          It's about making your codebase easy to change, easy to test, and
          easy to hand off. Concretely: small functions with single
          responsibilities, data models that tell the truth, and a CI/CD
          pipeline that catches mistakes before they reach users.
        </p>
        <p>
          Developer experience is a first-class concern. If the local dev
          loop is slow, if environment setup takes an afternoon, if the test
          suite is feared rather than trusted — those are product problems,
          not inconveniences.
        </p>

        {/* Section 04 */}
        <p className={styles.sectionLabel}>04 — Beyond the terminal</p>
        <h2 className={styles.sectionHeading}>When I'm not writing code</h2>
        <p>
          When I'm not writing code, I'm exploring new tools, contributing
          to open source, or obsessing over coffee brewing ratios. The
          common thread is craft — that relentless attention to a process
          until it's as good as you can make it.
        </p>
        <p>
          That instinct crosses over into everything. A well-dialed pour-over
          and a well-typed API contract have more in common than you'd think.
        </p>

      </div>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.tagRow}>
          {tags.map((t) => (
            <span key={t} className={styles.tagPill}>{t}</span>
          ))}
        </div>
      </footer>

    </article>
  )
}
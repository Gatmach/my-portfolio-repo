import styles from './Blog.module.css'

const posts = [
  {
    id: 1,
    category: 'Engineering',
    date: 'April 12, 2026',
    readTime: '5 min read',
    title: 'Crafting code that actually ships.',
    titleEm: 'actually ships.',
    subtitle: "A full-stack developer's take on clean architecture, the joy of shipping, and yes — coffee brewing ratios.",
    avatar: 'FS',
    authorName: 'Full-Stack Dev',
    authorRole: 'React · TypeScript · Node.js · PostgreSQL',
    tags: ['#fullstack', '#typescript', '#devex'],
    excerpt: "I'm a full-stack developer with a passion for building products that are fast, reliable, and delightful to use. I work across the entire stack — from database design to pixel-perfect UIs — with a strong focus on clean architecture and developer experience.",
  },
  {
    id: 2,
    category: 'DevOps',
    date: 'March 28, 2026',
    readTime: '4 min read',
    title: 'Docker in production: what nobody tells you.',
    titleEm: 'what nobody tells you.',
    subtitle: 'Lessons learned from containerising three different apps — and the gotchas that cost me a weekend.',
    avatar: 'FS',
    authorName: 'Full-Stack Dev',
    authorRole: 'Docker · Linux · CI/CD · Node.js',
    tags: ['#docker', '#devops', '#linux'],
    excerpt: 'Containers sound simple until you hit volume mounts, networking edge cases, and the dreaded permission mismatch in production. Here is what I wish someone had told me before I shipped my first Dockerised service.',
  },
  {
    id: 3,
    category: 'Frontend',
    date: 'March 10, 2026',
    readTime: '6 min read',
    title: 'Why I stopped fighting TypeScript and started listening.',
    titleEm: 'started listening.',
    subtitle: 'TypeScript errors are not obstacles — they are the compiler trying to save you from yourself.',
    avatar: 'FS',
    authorName: 'Full-Stack Dev',
    authorRole: 'TypeScript · React · Vite · Tailwind',
    tags: ['#typescript', '#react', '#dx'],
    excerpt: 'For the first six months I treated TypeScript like a noisy linter I had to appease. Then a type error caught a null-pointer bug before it hit staging, and my whole relationship with the language changed overnight.',
  },
  {
    id: 4,
    category: 'Database',
    date: 'February 20, 2026',
    readTime: '7 min read',
    title: 'PostgreSQL indexing strategies that actually matter.',
    titleEm: 'actually matter.',
    subtitle: 'A practical guide to the indexes worth adding — and the ones that are quietly slowing you down.',
    avatar: 'FS',
    authorName: 'Full-Stack Dev',
    authorRole: 'PostgreSQL · SQL · Node.js · REST APIs',
    tags: ['#postgresql', '#database', '#performance'],
    excerpt: 'Most apps only need a handful of index types — but picking the wrong one, or over-indexing write-heavy tables, can hurt more than help. This post walks through the decisions I make on every project.',
  },
]

export default function Blog() {
  return (
    <section id="blog" className={styles.section}>

      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Blog</span>
        <h2 className={styles.sectionTitle}>
          Thoughts, writeups &amp; <em>lessons learned.</em>
        </h2>
        <p className={styles.sectionSub}>
          A running log of things I've figured out, broken, fixed, and occasionally obsessed over.
        </p>
      </div>

      <div className={styles.grid}>
        {posts.map((post, i) => (
          <article key={post.id} className={`${styles.card} ${i === 0 ? styles.featured : ''}`}>

            <div className={styles.cardMeta}>
              <span className={styles.category}>{post.category}</span>
              <span className={styles.dot} />
              <span className={styles.metaText}>{post.date}</span>
              <span className={styles.dot} />
              <span className={styles.metaText}>{post.readTime}</span>
            </div>

            <h3 className={styles.cardTitle}>
              {post.title.replace(post.titleEm, '')}
              <em>{post.titleEm}</em>
            </h3>

            <p className={styles.cardSubtitle}>{post.subtitle}</p>
            <p className={styles.excerpt}>{post.excerpt}</p>

            <div className={styles.author}>
              <div className={styles.avatar}>{post.avatar}</div>
              <div className={styles.authorInfo}>
                <p className={styles.authorName}>{post.authorName}</p>
                <p className={styles.authorRole}>{post.authorRole}</p>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.tagRow}>
                {post.tags.map((t) => (
                  <span key={t} className={styles.tagPill}>{t}</span>
                ))}
              </div>
              <a href="#" className={styles.readMore}>Read more →</a>
            </div>

          </article>
        ))}
      </div>

    </section>
  )
}
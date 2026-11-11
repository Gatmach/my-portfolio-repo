
import styles from './CreativeServices.module.css'

const services = [
  {
    number: '01',
    title: 'Flyer & Poster Design',
    description:
      'Professional and visually engaging flyers and posters for events, promotions, announcements, and businesses.',
    category: 'Print & Digital Design',
    image: '/images/flyer-design-placeholder.png',
  },
  {
    number: '02',
    title: 'Banner Design',
    description:
      'Clean, attractive banners for social media, business promotions, events, and online platforms.',
    category: 'Brand & Promotional Design',
    image: '/images/poster-design-placeholder.png',
  },
  {
    number: '03',
    title: 'Wedding & Invitation Cards',
    description:
      'Elegant and personalised invitation cards for weddings, celebrations, and special occasions.',
    category: 'Event Stationery',
  },
  {
    number: '04',
    title: 'Photo Editing',
    description:
      'Thoughtful photo enhancement, retouching, and visual adjustments to improve image quality and presentation.',
    category: 'Image Editing',
  },
]

export default function CreativeServices() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>CREATIVE SERVICES</p>
            <h2 className={styles.heading}>
              Design that makes
              <em>an impression.</em>
            </h2>
          </div>

          <p className={styles.intro}>
            I create thoughtful visual designs that help individuals,
            businesses, and organisations communicate their ideas
            with clarity and style.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.number} className={styles.card}>
              {service.image && (
                <div className={styles.imageWrap}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />
                </div>
              )}

              <span className={styles.number}>{service.number}</span>

              <div className={styles.cardContent}>
                <span className={styles.category}>
                  {service.category}
                </span>

                <h3 className={styles.cardTitle}>
                  {service.title}
                </h3>

                <p className={styles.description}>
                  {service.description}
                </p>
              </div>

              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

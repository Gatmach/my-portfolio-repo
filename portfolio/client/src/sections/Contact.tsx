import { useState, type FormEvent } from 'react'
import styles from './Contact.module.css'

interface FormState {
  name: string
  email: string
  message: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.wrapper}>

          {/* Left — heading + socials */}
          <div className={styles.left}>
            <div className={`${styles.label} reveal`}>Contact</div>
            <h2 className={`${styles.heading} reveal`}>
              Let's build<br />something great.
            </h2>
            <p className={`${styles.sub} reveal`}>
              Have a project in mind or just want to chat? Drop me a
              message and I'll get back to you within 24 hours.
            </p>

            <div className={`${styles.socials} reveal`}>
              {[
                { name: 'GitHub',   href: 'https://github.com' },
                { name: 'LinkedIn', href: 'https://linkedin.com' },
                { name: 'Twitter',  href: 'https://twitter.com' },
                { name: 'Email',    href: 'mailto:you@email.com' },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {s.name}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form
            className={`${styles.form} reveal`}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={styles.field}>
              <label htmlFor="name" className={styles.fieldLabel}>Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.fieldLabel}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.fieldLabel}>Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className={styles.textarea}
              />
            </div>

            <button
              type="submit"
              className={styles.submit}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className={styles.successMsg}>
                Message sent! I'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg}>
                Something went wrong. Please try again.
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  )
}
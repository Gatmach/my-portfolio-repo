import { Turnstile } from '@marsidev/react-turnstile'
import type { TurnstileInstance } from '@marsidev/react-turnstile'
import {
  useState,
  useEffect,
  useRef,
  type FormEvent,
  type ChangeEvent,
} from 'react'
import styles from './Contact.module.css'

interface FormState {
  name: string
  email: string
  message: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY
const apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:5000'

if (!siteKey) {
  console.error('Missing VITE_TURNSTILE_SITE_KEY environment variable')
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<Status>('idle')
  const [turnstileToken, setTurnstileToken] = useState('')

  const turnstileRef = useRef<TurnstileInstance | null>(null)

  // Hide success/error message automatically
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle')
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [status])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (form.name.trim().length < 2) {
      setStatus('error')
      return
    }

    if (!turnstileToken) {
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          turnstileToken,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Failed to send message.')
      }

      setStatus('success')

      setForm({
        name: '',
        email: '',
        message: '',
      })

      setTurnstileToken('')

      // Reset Turnstile widget
      turnstileRef.current?.reset()
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* Left */}
          <div className={styles.left}>
            <h2 className={`${styles.heading} reveal`}>
              Let's build
              <br />
              something great.
            </h2>

            <p className={`${styles.sub} reveal`}>
              Have a project in mind or just want to chat? Drop me a message and
              I'll get back to you within 24 hours.
            </p>
          </div>

          {/* Right */}
          <form
            className={`${styles.form} reveal`}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={styles.field}>
              <label htmlFor="name" className={styles.fieldLabel}>
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                required
                minLength={2}
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.fieldLabel}>
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.fieldLabel}>
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
                className={styles.textarea}
              />
            </div>

            {/* Cloudflare Turnstile */}
            <div className={styles.turnstile}>
              <Turnstile
                ref={turnstileRef}
                siteKey={siteKey}
                onSuccess={(token) => setTurnstileToken(token)}
                onExpire={() => setTurnstileToken('')}
                onError={() => setTurnstileToken('')}
              />
            </div>

            <button
              type="submit"
              className={styles.submit}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <span className={styles.loadingSpinner}></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>

            {status === 'success' && (
              <p className={styles.successMsg}>
                ✓ Thank you! Your message has been sent successfully. I'll get
                back to you within 24 hours.
              </p>
            )}

            {status === 'error' && (
              <p className={styles.errorMsg}>
                {!turnstileToken
                  ? 'Please complete the security verification before sending.'
                  : 'Unable to send your message right now. Please try again in a few moments.'}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

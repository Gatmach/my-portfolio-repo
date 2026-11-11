
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

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<Status>('idle')
  const [turnstileToken, setTurnstileToken] = useState('')
  const [feedback, setFeedback] = useState('')

  const turnstileRef = useRef<TurnstileInstance | null>(null)

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle')
        setFeedback('')
      }, 6000)

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.name.trim().length < 2) {
      setFeedback('Please enter your full name.')
      setStatus('error')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(form.email.trim())) {
      setFeedback('Please enter a valid email address.')
      setStatus('error')
      return
    }

    if (form.message.trim().length < 10) {
      setFeedback('Please enter a message of at least 10 characters.')
      setStatus('error')
      return
    }

    if (!turnstileToken) {
      setFeedback('Please complete the security verification.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setFeedback('')

    try {
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          turnstileToken,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Failed to send message.')
      }

      setStatus('success')
      setFeedback(
        "Thank you! Your message has been sent successfully. I'll get back to you within 24 hours."
      )

      setForm({
        name: '',
        email: '',
        message: '',
      })

      setTurnstileToken('')
      turnstileRef.current?.reset()
    } catch (error) {
      console.error('Contact form error:', error)

      setStatus('error')
      setFeedback(
        error instanceof Error
          ? error.message
          : 'Unable to send your message. Please try again.'
      )
    }
  }

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p className={styles.eyebrow}>GET IN TOUCH</p>

            <h2 className={styles.heading}>
              Let's build
              <em>something great.</em>
            </h2>

            <p className={styles.sub}>
              Have a project, an opportunity, or an idea you'd like
              to discuss? I'd love to hear from you. Send me a message
              and let's start a conversation.
            </p>
          </div>

          <form
            className={styles.form}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={styles.field}>
              <label htmlFor="name" className={styles.fieldLabel}>
                Your name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.fieldLabel}>
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.fieldLabel}>
                Your message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me what you have in mind..."
                value={form.message}
                onChange={handleChange}
                required
                className={styles.textarea}
              />
            </div>

            <div className={styles.turnstile}>
              {siteKey ? (
                <Turnstile
                  ref={turnstileRef}
                  siteKey={siteKey}
                  onSuccess={(token) => setTurnstileToken(token)}
                  onExpire={() => setTurnstileToken('')}
                  onError={() => setTurnstileToken('')}
                />
              ) : (
                <p className={styles.errorMsg}>
                  Security verification is currently unavailable.
                </p>
              )}
            </div>

            <button
              type="submit"
              className={styles.submit}
              disabled={status === 'loading' || !siteKey}
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

            {feedback && (
              <p
                className={
                  status === 'success'
                    ? styles.successMsg
                    : styles.errorMsg
                }
                role="status"
                aria-live="polite"
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

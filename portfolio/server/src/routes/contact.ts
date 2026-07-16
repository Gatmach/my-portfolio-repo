import { Router, Request, Response } from 'express'
import axios from 'axios'
import { z } from 'zod'
import { sendContactEmail } from '../services/mail'

const router = Router()

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters long')
    .max(100),

  email: z.string().trim().email('Please provide a valid email address'),

  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters long')
    .max(5000, 'Message is too long'),

  turnstileToken: z.string().min(1, 'Verification is required'),
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, email, message, turnstileToken } = contactSchema.parse(
      req.body
    )

    if (!process.env.TURNSTILE_SECRET_KEY) {
      console.error('TURNSTILE_SECRET_KEY is missing.')

      return res.status(500).json({
        success: false,
        message: 'Server configuration error.',
      })
    }

    // Verify Cloudflare Turnstile token
    const verification = await axios.post(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )

    if (!verification.data.success) {
      return res.status(400).json({
        success: false,
        message: 'Security verification failed.',
      })
    }

    // Send email
    await sendContactEmail({
      name,
      email,
      message,
    })

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully.',
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        errors: error.flatten().fieldErrors,
      })
    }

    console.error('Contact form error:', error)

    return res.status(500).json({
      success: false,
      message: 'Unable to send your message. Please try again later.',
    })
  }
})

export default router

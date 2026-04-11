import { Router, Request, Response } from 'express'

const router = Router()

router.post('/', async (req: Request, res: Response) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  // Nodemailer will be wired here once you set up your .env
  console.log('New contact message:', { name, email, message })

  res.json({ success: true, message: 'Message received!' })
})

export default router
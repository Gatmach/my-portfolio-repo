import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import contactRouter from './routes/contact'
import postsRouter from './routes/posts'

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors({ origin: ['http://localhost:5173', process.env.FRONTEND_URL || ''] }))
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later.'
}))

app.use('/api/contact', contactRouter)
app.use('/api/posts', postsRouter)

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
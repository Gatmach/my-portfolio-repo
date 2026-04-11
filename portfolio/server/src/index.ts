import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import contactRouter from './routes/contact'

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }))
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: 'Too many requests, please try again later.'
}))

// Routes
app.use('/api/contact', contactRouter)

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
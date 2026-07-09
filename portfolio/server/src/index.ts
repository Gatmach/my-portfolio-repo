import 'dotenv/config'

import process from 'process'
import express, {
  Request,
  Response,
  NextFunction,
} from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression  from 'compression'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'

import contactRouter from './routes/contact'

const app = express()
const PORT = Number(process.env.PORT) || 5000

// ---------------------------------------------------------
// Validate required environment variables
// ---------------------------------------------------------

const requiredEnv = [
  'CLIENT_URL',
  'EMAIL_USER',
  'EMAIL_PASS',
  'TURNSTILE_SECRET_KEY',
]

for (const variable of requiredEnv) {
  if (!process.env[variable]) {
    throw new Error(
      `❌ Missing required environment variable: ${variable}`
    )
  }
}

// ---------------------------------------------------------
// Express Configuration
// ---------------------------------------------------------

// Required for Render/Railway/Vercel proxies
app.set('trust proxy', 1)

// Security headers
app.use(helmet())

// Compress responses
app.use(compression() as express.RequestHandler)

// HTTP request logger (development only)
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

// Parse JSON requests
app.use(
  express.json({
    limit: '10kb',
  })
)

// CORS
app.use(
  cors({
    origin:
      process.env.CLIENT_URL ||
      'http://localhost:5173',
    credentials: true,
  })
)

// ---------------------------------------------------------
// Rate Limiter
// ---------------------------------------------------------

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes

  max: 20,

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    success: false,
    message:
      'Too many contact requests. Please try again in 15 minutes.',
  },
})

// Apply only to contact endpoint
app.use('/api/contact', contactLimiter)

// ---------------------------------------------------------
// Routes
// ---------------------------------------------------------

app.use('/api/contact', contactRouter)

app.get('/api/health', (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  })
})

// ---------------------------------------------------------
// 404 Handler
// ---------------------------------------------------------

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found.',
  })
})

// ---------------------------------------------------------
// Global Error Handler
// ---------------------------------------------------------

app.use(
  (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) => {
    console.error(err)

    res.status(500).json({
      success: false,
      message: 'Internal server error.',
    })
  }
)

// ---------------------------------------------------------
// Start Server
// ---------------------------------------------------------

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`)
})

// ---------------------------------------------------------
// Graceful Shutdown
// ---------------------------------------------------------

const shutdown = () => {
  console.log('\n🛑 Shutting down server...')

  server.close(() => {
    console.log('✅ Server closed successfully.')
    process.exit(0)
  })
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
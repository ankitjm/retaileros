import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { authRouter } from './routes/auth.js'
import { retailerRouter } from './routes/retailers.js'
import { inventoryRouter } from './routes/inventory.js'
import { salesRouter } from './routes/sales.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const PORT = process.env.PORT || 3001

// P1 fix: helmet enables CSP + 9 other security headers (was disabled in old server/index.js line 29)
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'https:'],
        connectSrc: ["'self'"],
        fontSrc: ["'self'"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
    crossOriginOpenerPolicy: { policy: 'same-origin' },
    referrerPolicy: { policy: 'no-referrer' },
  })
)

app.use(express.json({ limit: '50kb' }))

// Typed domain routes
app.use('/api/auth', authRouter)
app.use('/api/retailers', retailerRouter)
app.use('/api/inventory', inventoryRouter)
app.use('/api/sales', salesRouter)

// P0 fix: explicitly reject any raw SQL proxy paths — they must never exist
app.use(['/api/query', '/api/mutate', '/api/sql', '/api/exec'], (_req, res) => {
  res.status(404).json({ error: 'Not found' })
})

// Serve built React SPA static files
const distPath = join(__dirname, '..', 'dist')
app.use(express.static(distPath))

// SPA fallback: serve index.html for all non-API client-side routes
app.get('*', (_req, res) => {
  res.sendFile(join(distPath, 'index.html'))
})

// Error handler — never leak stack traces to clients
app.use((err, _req, res, _next) => {
  console.error('Unhandled error:', err.message)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`RetailerOS API running on port ${PORT} (${process.env.NODE_ENV ?? 'development'})`)
})

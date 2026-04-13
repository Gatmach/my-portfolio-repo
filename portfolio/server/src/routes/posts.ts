import { Router, Request, Response } from 'express'
import pool from '../db'

const router = Router()

// GET all posts
router.get('/', async (_req: Request, res: Response) => {
  try {
    const result = await pool.query(
      `SELECT
        p.*,
        COUNT(DISTINCT l.id)::int AS likes,
        COUNT(DISTINCT c.id)::int AS comments
       FROM posts p
       LEFT JOIN likes l ON l.post_id = p.id
       LEFT JOIN comments c ON c.post_id = p.id
       GROUP BY p.id
       ORDER BY p.created_at DESC`
    )
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch posts' })
  }
})

// GET single post
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await pool.query(
      `SELECT
        p.*,
        COUNT(DISTINCT l.id)::int AS likes,
        COUNT(DISTINCT c.id)::int AS comments
       FROM posts p
       LEFT JOIN likes l ON l.post_id = p.id
       LEFT JOIN comments c ON c.post_id = p.id
       WHERE p.id = $1
       GROUP BY p.id`,
      [id]
    )
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' })
    }
    res.json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch post' })
  }
})

// POST like a post (one per IP)
router.post('/:id/like', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const ip = req.headers['x-forwarded-for']?.toString() || req.socket.remoteAddress || 'unknown'

    await pool.query(
      `INSERT INTO likes (post_id, ip_address) VALUES ($1, $2)
       ON CONFLICT (post_id, ip_address) DO NOTHING`,
      [id, ip]
    )

    const result = await pool.query(
      `SELECT COUNT(*)::int AS likes FROM likes WHERE post_id = $1`,
      [id]
    )
    res.json({ likes: result.rows[0].likes })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to like post' })
  }
})

// GET comments for a post
router.get('/:id/comments', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await pool.query(
      `SELECT * FROM comments WHERE post_id = $1 ORDER BY created_at ASC`,
      [id]
    )
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch comments' })
  }
})

// POST a comment
router.post('/:id/comments', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { name, message } = req.body

    if (!name || !message) {
      return res.status(400).json({ error: 'Name and message are required' })
    }
    if (message.length > 1000) {
      return res.status(400).json({ error: 'Message too long' })
    }

    const result = await pool.query(
      `INSERT INTO comments (post_id, name, message)
       VALUES ($1, $2, $3) RETURNING *`,
      [id, name.trim(), message.trim()]
    )
    res.status(201).json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to post comment' })
  }
})

// DELETE a comment
router.delete('/:id/comments/:commentId', async (req: Request, res: Response) => {
  try {
    const { id, commentId } = req.params
    await pool.query(
      `DELETE FROM comments WHERE id = $1 AND post_id = $2`,
      [commentId, id]
    )
    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to delete comment' })
  }
})

export default router
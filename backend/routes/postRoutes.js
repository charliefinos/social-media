import express from 'express'
const router = express.Router()

import { createPost } from '../controllers/postController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, createPost)

export default router
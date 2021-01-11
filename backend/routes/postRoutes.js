import express from 'express'
const router = express.Router()

import {
    createPost, getUserPosts,
} from '../controllers/postController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, createPost)
router.route('/profile').get(protect, getUserPosts)

export default router
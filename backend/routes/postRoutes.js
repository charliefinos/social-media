import express from 'express'
const router = express.Router()

import {
    createPost, getUserPosts,
} from '../controllers/postController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, createPost)
router.route('/:id').get(getUserPosts)

export default router
import express from 'express'
const router = express.Router()

import {
    createPost,
    createPostComment,
    getUserPosts,
} from '../controllers/postController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, createPost)
router.route('/profile').get(protect, getUserPosts)
router.route('/:id').post(protect, createPostComment)

export default router
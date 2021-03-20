import express from 'express'
const router = express.Router()

import {
    createPost,
    createPostComment,
    getPost,
    getUserPosts,
    deletePostComment,
    deletePost
} from '../controllers/postController.js'
import { protect } from '../middleware/authMiddleware.js'


router.route('/').post(protect, createPost)
router.route('/profile').get(protect, getUserPosts)
router.route('/:id/comments').post(protect, createPostComment)
router.route('/:id').get(protect, getPost).delete(protect, deletePost)
router.route('/:id/comments/:comment_id').delete(protect, deletePostComment)

export default router
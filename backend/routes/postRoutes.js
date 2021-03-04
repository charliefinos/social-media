import express from 'express'
import path from 'path'
import multer from 'multer'
import Post from '../models/postModel.js'
import asyncHandler from 'express-async-handler'
const router = express.Router()

import {
    createPost,
    createPostComment,
    getPost,
    getUserPosts,
    deletePostComment
} from '../controllers/postController.js'
import { protect } from '../middleware/authMiddleware.js'

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename(req, file, cb) {
        cb(
            null,
            `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
        )
    },
})

function checkFileType(file, cb) {
    const filetypes = /jpg|jpeg|png/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)

    if (extname && mimetype) {
        return cb(null, true)
    } else {
        cb('Images only!')
    }
}

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb)
    },
})

router.post('/', protect, upload.single('image'), asyncHandler(async (req, res, next) => {
    const post = new Post({
        user: req.user._id,
        image: '/'.concat(req.file.path.replace(/\\/g, "/")),
        caption: req.body.caption,

    })

    const createdPost = await post.save()
    res.status(201).json(createdPost)
}))
router.route('/profile').get(protect, getUserPosts)
router.route('/:id/comments').post(protect, createPostComment)
router.route('/:id').get(protect, getPost)
router.route('/:id/comments/:comment_id').delete(protect, deletePostComment)
export default router
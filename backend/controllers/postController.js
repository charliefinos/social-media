import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'
import User from '../models/userModel.js'

const createPost = asyncHandler(async (req, res) => {
    const { title, content } = req.body

    const post = new Post({
        title,
        content,
        user: req.user._id
    })

    const createdPost = await post.save()
    res.status(201).json(createdPost)
})

export { createPost }
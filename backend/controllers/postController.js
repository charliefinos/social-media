import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'


const createPost = asyncHandler(async (req, res) => {
    const { username, caption, imageUrl } = req.body

    const post = new Post({
        username,
        caption,
        imageUrl,
        user: req.user._id
    })

    const createdPost = await post.save()
    res.status(201).json(createdPost)
})

export { createPost }
import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'


const createPost = asyncHandler(async (req, res) => {
    const { caption } = req.body

    // Temporary Post image
    const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png"

    const post = new Post({
        caption,
        imageUrl,
        user: req.user._id
    })

    const createdPost = await post.save()
    res.status(201).json(createdPost)
})

const getUserPosts = asyncHandler(async (req, res) => {

    const userPosts = await Post.find({ user: req.user._id }).populate('user')
    res.json(userPosts)
})

export { createPost, getUserPosts }
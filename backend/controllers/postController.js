import asyncHandler from 'express-async-handler'
import Post from '../models/postModel.js'


const createPost = asyncHandler(async (req, res) => {
    const { caption, image } = req.body

    const post = new Post({
        caption,
        image,
        user: req.user._id
    })

    const createdPost = await post.save()
    res.status(201).json(createdPost)
})

const getUserPosts = asyncHandler(async (req, res) => {

    const userPosts = await Post.find({ user: req.user._id }).populate('user')
    res.json(userPosts)
})

const createPostComment = asyncHandler(async (req, res) => {
    const { comment } = req.body

    const post = await Post.findById(req.params.id)

    if (post) {
        const postComment = {
            username: req.user.username,
            comment,
            user: req.user._id
        }

        post.comments.push(postComment)

        await post.save()
        res.status(201).json({ message: 'Comment Added' })

    } else {
        res.status(404)
        throw new Error('Post not found')
    }
})

const getPost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id).populate('user')
    res.json(post)
})

const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if (post) {
        await post.remove()
        res.json({ message: 'Post Removed' })
    } else {
        res.status(404)
        throw new Error('Post not found')
    }
})

const deletePostComment = asyncHandler(async (req, res) => {
    const comment = await Post.findOneAndUpdate(
        {
            _id: req.params.id
        }, {
        $pull: {
            comments: { _id: req.params.comment_id }
        }
    })
    res.json({ message: 'Comment Deleted', comment })
})

export {
    createPost,
    getUserPosts,
    createPostComment,
    getPost,
    deletePost,
    deletePostComment,
}